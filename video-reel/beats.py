"""Analiza ritma: tempo (BPM), udarci i drop.

Upotreba: python beats.py muzika.mp3 [izlaz.json]
Dekodira ffmpegom u mono 22050 Hz, pravi onset krivu (spektralni flux),
tempo nalazi autokorelacijom, udarce poravnava po fazi, a drop traži kao
najveći skok energije (RMS) iz takta u takt.
"""
import json
import subprocess
import sys

import numpy as np

SR = 22050
HOP = 256
NFFT = 1024


def load(path):
    raw = subprocess.run(
        ["ffmpeg", "-v", "error", "-i", path, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"],
        capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.float32)


def onset_env(x):
    n = 1 + (len(x) - NFFT) // HOP
    idx = np.arange(NFFT)[None, :] + HOP * np.arange(n)[:, None]
    spec = np.abs(np.fft.rfft(x[idx] * np.hanning(NFFT), axis=1))
    spec = np.log1p(100 * spec)
    flux = np.maximum(0, np.diff(spec, axis=0)).sum(axis=1)
    flux = np.concatenate([[0], flux])
    flux -= np.convolve(flux, np.ones(16) / 16, mode="same")
    return np.maximum(flux, 0)


def tempo(env, lo=70, hi=160):
    fps = SR / HOP
    ac = np.correlate(env, env, mode="full")[len(env) - 1:]
    lags = np.arange(len(ac))
    bpm = 60 * fps / np.maximum(lags, 1)
    ok = (bpm >= lo) & (bpm <= hi)
    # blagi prior oko 115 BPM da ne preskoči na polovinu/dvostruko
    w = ac * ok * np.exp(-0.5 * (np.log2(np.maximum(bpm, 1) / 115) / 0.9) ** 2)
    lag = int(np.argmax(w))
    # parabolična interpolacija za decimalni lag
    if 1 <= lag < len(w) - 1:
        a, b, c = w[lag - 1], w[lag], w[lag + 1]
        lag = lag + 0.5 * (a - c) / (a - 2 * b + c + 1e-9)
    return 60 * fps / lag, lag


def beats(env, lag):
    fps = SR / HOP
    best, best_ph = -1, 0
    for ph in np.linspace(0, lag, int(lag * 4), endpoint=False):
        pos = np.arange(ph, len(env) - 1, lag).astype(int)
        s = env[pos].sum()
        if s > best:
            best, best_ph = s, ph
    pos = np.arange(best_ph, len(env) - 1, lag)
    # fino poravnanje svakog udarca na lokalni vrh (+-3 hopa)
    out = []
    for p in pos:
        i = int(round(p))
        lo, hi = max(0, i - 3), min(len(env), i + 4)
        out.append((lo + int(np.argmax(env[lo:hi]))) / fps)
    return np.array(out)


def main():
    path = sys.argv[1]
    x = load(path)
    env = onset_env(x)
    bpm, lag = tempo(env)
    bt = beats(env, lag)
    # energija po taktu (4 udarca)
    rms = []
    bars = bt[::4]
    for a, b in zip(bars[:-1], bars[1:]):
        seg = x[int(a * SR):int(b * SR)]
        rms.append(float(np.sqrt(np.mean(seg ** 2)) if len(seg) else 0))
    rms = np.array(rms)
    jump = np.diff(rms) / (rms[:-1] + 1e-6)
    order = np.argsort(jump)[::-1][:4]
    drops = sorted(float(bars[i + 1]) for i in order)
    res = {
        "file": path,
        "duration": len(x) / SR,
        "bpm": round(float(bpm), 2),
        "beat_period": round(60 / float(bpm), 4),
        "beats": [round(float(b), 3) for b in bt],
        "bars": [round(float(b), 3) for b in bars],
        "bar_rms_db": [round(20 * np.log10(r + 1e-9), 1) for r in rms],
        "drop_candidates": [round(d, 3) for d in drops],
        "main_drop": round(float(bars[int(np.argmax(jump)) + 1]), 3),
    }
    out = sys.argv[2] if len(sys.argv) > 2 else None
    if out:
        with open(out, "w", encoding="utf-8") as f:
            json.dump(res, f, indent=1)
    print(f"trajanje {res['duration']:.2f} s | {res['bpm']} BPM | udarac {res['beat_period']} s")
    print("prvi udarci:", res["beats"][:8])
    print("drop kandidati:", res["drop_candidates"], "| glavni:", res["main_drop"])
    for t, db in zip(res["bars"], res["bar_rms_db"]):
        print(f"  takt @ {t:6.2f} s  {db:6.1f} dB  " + "#" * max(0, int((db + 40))))


if __name__ == "__main__":
    main()
