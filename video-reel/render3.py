"""Alu Line Systems - Reel 3 "Brzi radovi" (1080x1920, 30 fps, ~20.4 s).

Energija kratkog reela (brzi rezovi na udarac, jedna jaka poruka po kadru),
ali u vlastitom izgledu: tekst GORE na čelično-plavom bloku (bez gradijenta),
klasični font Inter Tight, oznaka kao tanka srebrna etiketa, logo samo
na kraju, završna kartica na brušenom aluminiju (bez "pilule" za telefon).

Upotreba:
  python render3.py preview   -> out/preview3/
  python render3.py           -> out/alu-line-reel-3.mp4

Muzika: "Running Out of Time" - Ahjay Stelino (Mixkit Stock Music Free License).
Udarci: python beats.py ../public/muzika/kandidati/mixkit-running-out-of-time.mp3 beats3.json
Zvučni efekti: Mixkit (Mixkit Sound Effects Free License), public/muzika/sfx/.
"""
import json
import os
import subprocess
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

from render2 import CACHE, VideoReader, ease, ease_out, kb_frame, logo, prep_photo, prep_video

HERE = os.path.dirname(os.path.abspath(__file__))
PUB = os.path.join(HERE, "..", "public")
OUT = os.path.join(HERE, "out")
FONTS = os.path.join(HERE, "fonts")

# ============================ KONFIGURACIJA ============================
W, H, FPS = 1080, 1920, 30
MUSIC = os.path.join(PUB, "muzika", "kandidati", "mixkit-running-out-of-time.mp3")
BEATS_JSON = os.path.join(HERE, "beats3.json")
START_BEAT = 4           # udarac 4 = 2.28 s u pjesmi, odmah puna energija
LENGTH_BEATS = 44
LUFS = -18
FADE_OUT = 1.2
PUNCH = 0.10             # "udarac" zuma na svakom rezu (10 %)

NOC = (12, 24, 36)
CELIK = (12, 60, 96)
SREBRO = (180, 192, 204)
SIVOPLAVA = (96, 120, 132)
BIJELA = (246, 248, 250)

IMG = os.path.join(PUB, "images")
VID = os.path.join(PUB, "video")
V2 = os.path.join(VID, "WhatsApp Video 2026-10-12 at 11.01.52 (1).mp4")
V3 = os.path.join(VID, "WhatsApp Video 2026-10-12 at 11.03.08.mp4")
VODICE = os.path.join(IMG, "cnc-model-ograde-vodice")
P = os.path.join(IMG, "projekti")

# label = mala etiketa, head = 1-2 reda glavne poruke (samo potvrđene činjenice)
SHOTS = [
    dict(kind="video", beat=0, src=V2, start=3.6, length=2.0, speed=1.0,
         label="ALU LINE SYSTEMS", head=["Montaža", "alu ograda"]),
    dict(kind="photo", beat=4, src=os.path.join(IMG, "elegantna-bocna-montaza", "bocna-montaza-aluminijske-ograde.jpg"),
         crop=(1330, 640, 1000), zoom=(1.0, 1.06), anchor=(0.5, 0.5),
         label="01  BOČNA MONTAŽA", head=["Stub 80×50", "Lamela 100×20"]),
    dict(kind="photo", beat=8, src=os.path.join(P, "krk-3.jpg"),
         crop=(420, 900, 1300), zoom=(1.0, 1.06), anchor=(0.5, 0.5),
         label="02  RATAN ISPUNA", head=["Stub 45×45", "Cijev 2×2 cm"]),
    dict(kind="photo", beat=12, src=os.path.join(VODICE, "837737548_122146314867136426_7701768214894564891_n.jpg"),
         crop=(600, 713, 1200), zoom=(1.0, 1.06), anchor=(0.5, 0.5),
         label="03  CNC MODEL OGRADE", head=["Rukohvat", "jabuka"]),
    # brzi rezovi: 2 udarca po kadru, jedna riječ
    dict(kind="photo", beat=16, src=os.path.join(P, "stablo-ograda-2.jpg"),
         crop=(1150, 600, 1200), zoom=(1.0, 1.05), anchor=(0.5, 0.5),
         label="04", head=["Balkon."]),
    dict(kind="photo", beat=18, src=os.path.join(P, "elegant-coko-1.jpg"),
         crop=(700, 900, 1400), zoom=(1.0, 1.05), anchor=(0.5, 0.5),
         label="05", head=["Smeđa."]),
    dict(kind="photo", beat=20, src=os.path.join(P, "terasa-ograda-5.jpg"),
         crop=(800, 700, 1100), zoom=(1.0, 1.05), anchor=(0.5, 0.5),
         label="06", head=["Terasa."]),
    dict(kind="photo", beat=22, src=os.path.join(P, "medjugorje-2.jpg"),
         crop=(620, 400, 768), zoom=(1.0, 1.05), anchor=(0.5, 0.5),
         label="07", head=["Krov."]),
    dict(kind="photo", beat=24, src=os.path.join(P, "kamena-ograda-2.jpg"),
         crop=(900, 600, 1200), zoom=(1.0, 1.05), anchor=(0.5, 0.5),
         label="08", head=["Dvorište."]),
    dict(kind="photo", beat=26, src=os.path.join(P, "siegendorf-1.jpg"),
         crop=(1100, 900, 1300), zoom=(1.0, 1.05), anchor=(0.5, 0.5),
         label="09", head=["Ulica."]),
    dict(kind="photo", beat=28, src=os.path.join(P, "siegendorf-3.jpg"),
         crop=(768, 1100, 1700), zoom=(1.0, 1.05), anchor=(0.5, 0.5),
         label="10", head=["Kapija."]),
    dict(kind="video", beat=30, src=V3, start=5.0, length=2.2, speed=2.0,
         label="11  NA TERENU", head=["Montaža."]),
    dict(kind="video", beat=32, src=V3, start=24.0, length=2.2, speed=1.0,
         label="12  OGRADA OKO BAZENA", head=["Gotovo."], boom=True),
    dict(kind="end", beat=36),
]

END_CARD = dict(
    slogan=["Kvalitet", "koji traje."],
    cta="ZA PONUDE I INFORMACIJE",
    phone="+387 62 543 464",
    phone_note="WhatsApp / Viber",
    web="alu-line-systems.com",
    countries="BiH · Hrvatska · Slovenija · Austrija",
)
SFX_DIR = os.path.join(PUB, "muzika", "sfx")
# zvučni efekti: (fajl, vrhunac zvuka u sekundama, jačina u dB) - vrhunac se poravna s događajem
SFX = dict(
    cut=("whoosh-fast.wav", 0.72, -9),
    cut_quick=("whoosh-arrow.wav", 0.29, -11),
    text=("metal-tap.wav", 0.10, -11),
    text_quick=("metal-tap.wav", 0.10, -15),
    boom=("metal-hard-hit.wav", 0.25, -11),
    boom_low=("impact-deep.mp3", 0.56, -10),
    end=("impact-deep.mp3", 0.56, -12),
    end_tap=("metal-lock.wav", 0.23, -10),
)
# =======================================================================

_bj = json.load(open(BEATS_JSON, encoding="utf-8"))
_ab = _bj["beats"]
MUSIC_START = _ab[START_BEAT]
BEATS = [b - MUSIC_START for b in _ab[START_BEAT:START_BEAT + LENGTH_BEATS + 2]]
BEAT = 60 / _bj["bpm"]
DURATION = round(BEATS[LENGTH_BEATS], 2)
for s, nxt in zip(SHOTS, SHOTS[1:] + [None]):
    s["t0"] = BEATS[s["beat"]]
    s["t1"] = BEATS[nxt["beat"]] if nxt else DURATION


def BS(size, w=800):
    f = ImageFont.truetype(os.path.join(FONTS, "InterTight-Variable.ttf"), size)
    f.set_variation_by_axes([w])
    return f


FT_HEAD = BS(124, 800)
FT_LABEL = BS(27, 700)
FT_SLOGAN = BS(138, 800)
FT_PHONE = BS(104, 800)
FT_MID = BS(50, 700)
FT_SMALL = BS(36, 600)


# ------------------------------ pomoćno ------------------------------
def punch(img, lt):
    """Kratki zum-udarac na početku kadra."""
    k = 1 + PUNCH * (1 - ease_out(lt / 0.28))
    if k <= 1.001:
        return img
    cw, ch = W / k, H / k
    x0, y0 = (W - cw) / 2, (H - ch) / 2
    return np.asarray(Image.fromarray(img).resize((W, H), Image.BILINEAR, box=(x0, y0, x0 + cw, y0 + ch)))


def spaced(d, xy, text, f, fill, spacing=5):
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=f, fill=fill)
        x += d.textlength(ch, font=f) + spacing
    return x


def spaced_w(text, f, spacing=5):
    d = ImageDraw.Draw(Image.new("L", (1, 1)))
    return sum(d.textlength(c, font=f) + spacing for c in text) - spacing


def slam(ov, xy, text, f, fill, p, drop=34, spacing=None):
    """Tekst 'padne' na mjesto: kratak pad odozgo + pojava (bez kucanja)."""
    if p <= 0:
        return
    q = ease_out(p)
    tmp = Image.new("RGBA", (W, 420), (0, 0, 0, 0))
    td = ImageDraw.Draw(tmp)
    if spacing is None:
        td.text((0, 120), text, font=f, fill=fill)
    else:
        spaced(td, (0, 120), text, f, fill, spacing)
    a = tmp.getchannel("A").point(lambda v: int(v * min(1, q * 1.6)))
    tmp.putalpha(a)
    ov.alpha_composite(tmp, (int(xy[0]), int(xy[1] - 120 - drop * (1 - q))))


# ------------------------------ tekst kadra ------------------------------
X0 = 64
LABEL_Y = 196
HEAD_Y = 262
LINE_H = 150


def cap_dy(f, box_h):
    """Pomak teksta da visina velikih slova bude tačno u sredini bloka visine box_h."""
    t, b = ImageDraw.Draw(Image.new("L", (1, 1))).textbbox((0, 0), "M", font=f)[1::2]
    return (box_h - (b - t)) / 2 - t


def draw_shot_text(ov, s, lt, dur):
    d = ImageDraw.Draw(ov)
    first = s["beat"] == 0
    t_in = -0.6 if first else 0.06   # hook je čitljiv od prvog frejma (thumbnail)
    out_p = ease((lt - (dur - 0.14)) / 0.12) if s is not SHOTS[-2] else 0
    # etiketa: tanki srebrni okvir + kvadratić
    lp = ease_out((lt - t_in) / 0.18)
    if lp > 0:
        lw = spaced_w(s["label"], FT_LABEL) + 64
        x = X0 - int(W * out_p)
        d.rectangle([x, LABEL_Y, x + lw * lp, LABEL_Y + 50], outline=(*SREBRO, 255), width=2,
                    fill=(*NOC, int(150 * lp)))
        d.rectangle([x + 16, LABEL_Y + 19, x + 28, LABEL_Y + 31], fill=(*SREBRO, 255))
        if lp > 0.6:
            spaced(d, (x + 42, LABEL_Y + cap_dy(FT_LABEL, 50)), s["label"], FT_LABEL, (*BIJELA, 255))
    # glavna poruka: čelični blok se izvuče slijeva, pa tekst padne na udarac
    for i, line in enumerate(s["head"]):
        y = HEAD_Y + i * LINE_H
        tw = d.textlength(line, font=FT_HEAD)
        bp = ease_out((lt - t_in - 0.04 - i * 0.07) / 0.16)
        if bp <= 0:
            continue
        bx0 = X0 - 24 - int(W * out_p)
        bx1 = bx0 + (tw + 56) * bp
        d.rectangle([bx0, y, bx1, y + LINE_H - 14], fill=(*CELIK, 242))
        d.rectangle([bx0, y + LINE_H - 20, bx1, y + LINE_H - 14], fill=(*SREBRO, 255))   # svijetla ivica profila
        tp = (lt - t_in - 0.12 - i * 0.07) / 0.18
        slam(ov, (bx0 + 28, y + cap_dy(FT_HEAD, LINE_H - 20)), line, FT_HEAD, (*BIJELA, 255), tp)


# ------------------------------ završna kartica ------------------------------
def make_brushed():
    """Brušeni aluminij: svijetli srebrni gradijent + horizontalne ogrebotine."""
    rng = np.random.default_rng(7)
    n = rng.normal(0, 1, (H, W)).astype(np.float32)
    k = 241
    c = np.cumsum(np.pad(n, ((0, 0), (k, 0)), mode="wrap"), axis=1)
    streak = (c[:, k:] - c[:, :-k]) / np.sqrt(k)
    streak = np.asarray(Image.fromarray(((streak * 18) + 128).clip(0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6)), np.float32) - 128
    yy = np.linspace(0, 1, H)[:, None]
    base = 222 - 26 * yy
    g = base + streak * 0.55
    rgb = np.stack([g - 6, g - 1, g + 4], axis=2)
    return rgb.clip(0, 255).astype(np.float32)


BRUSHED = make_brushed()
_yy, _xx = np.mgrid[0:H, 0:W].astype(np.float32)
DIAG = (_xx + _yy * 0.55)


def brushed_frame(lt):
    """Odsjaj svjetla putuje dijagonalno preko aluminija."""
    pos = -600 + (W + H * 0.55 + 1200) * min(1, lt / (BEAT * 7))
    sheen = np.exp(-((DIAG - pos) / 170) ** 2) * 26
    return (BRUSHED + sheen[..., None]).clip(0, 255).astype(np.uint8)


def draw_end(ov, lt):
    d = ImageDraw.Draw(ov)
    c = END_CARD
    x = 90
    b = lambda n: (lt - n * BEAT) / (BEAT * 0.7)
    p = ease_out(b(0.3))
    if p > 0:
        lg = logo(140)
        lg2 = lg.copy(); lg2.putalpha(lg.getchannel("A").point(lambda v: int(v * min(1, p * 1.5))))
        ov.alpha_composite(lg2, (x, 380 - int(30 * (1 - p))))
    slam(ov, (x - 4, 600), c["slogan"][0], FT_SLOGAN, (*NOC, 255), b(1.0))
    slam(ov, (x - 4, 770), c["slogan"][1], FT_SLOGAN, (*CELIK, 255), b(1.6))
    r = ease_out(b(2.2))
    if r > 0:
        d.rectangle([x, 980, x + (W - 2 * x) * r, 986], fill=(*CELIK, 255))
    slam(ov, (x, 1022), c["cta"], FT_SMALL, (*SIVOPLAVA, 255), b(2.6), drop=18, spacing=6)
    slam(ov, (x - 4, 1080), c["phone"], FT_PHONE, (*NOC, 255), b(3.0))
    slam(ov, (x, 1230), c["phone_note"], FT_SMALL, (*SIVOPLAVA, 255), b(3.5), drop=18)
    slam(ov, (x, 1320), c["web"], FT_MID, (*CELIK, 255), b(4.0), drop=22)
    r2 = ease_out(b(4.4))
    if r2 > 0:
        d.rectangle([x, 1420, x + (W - 2 * x) * r2, 1422], fill=(*SIVOPLAVA, 255))
    slam(ov, (x, 1448), c["countries"], FT_SMALL, (*NOC, 255), b(4.8), drop=18)


# ------------------------------ kompozicija ------------------------------
SOURCES = {}


def shot_at(t):
    for s in SHOTS:
        if s["t0"] <= t < s["t1"]:
            return s
    return SHOTS[-1]


def render_frame(fi):
    t = fi / FPS
    s = shot_at(t)
    lt = t - s["t0"]
    dur = s["t1"] - s["t0"]
    k = id(s)
    if k not in SOURCES and s["kind"] != "end":
        SOURCES[k] = prep_photo(s) if s["kind"] == "photo" else VideoReader(prep_video(s))
    if s["kind"] == "photo":
        img = kb_frame(SOURCES[k], s, lt / dur)
    elif s["kind"] == "video":
        img = SOURCES[k].frame(int(lt * FPS))
    else:
        img = brushed_frame(lt)
    if s["beat"] > 0:
        img = punch(img, lt)
    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    if s["kind"] == "end":
        draw_end(ov, lt)
    else:
        draw_shot_text(ov, s, lt, dur)
    return Image.alpha_composite(Image.fromarray(img).convert("RGBA"), ov).convert("RGB")


# ------------------------------- izlaz -------------------------------
SR = 48000


def decode(path, start=None, dur=None):
    args = ["ffmpeg", "-v", "error"]
    if start is not None:
        args += ["-ss", f"{start:.3f}", "-t", f"{dur:.3f}"]
    args += ["-i", path, "-ac", "2", "-ar", str(SR), "-f", "f32le", "-"]
    return np.frombuffer(subprocess.run(args, capture_output=True, check=True).stdout, np.float32).reshape(-1, 2).copy()


def sfx_events():
    """(trenutak, ključ) za svaki zvučni efekat, izvedeno iz kadrova."""
    ev = []
    for s in SHOTS:
        quick = (s["t1"] - s["t0"]) < BEAT * 2.5
        if s["kind"] == "end":
            ev += [(s["t0"] + BEAT + 0.15, "end"), (s["t0"] + 3.0 * BEAT + 0.15, "end_tap")]
            continue
        if s["beat"] > 0:
            ev.append((s["t0"], "cut_quick" if quick else "cut"))
        ev.append((s["t0"] + (0.0 if s["beat"] == 0 else 0.26), "text_quick" if quick else "text"))
        if s.get("boom"):
            ev += [(s["t0"] + 0.26, "boom"), (s["t0"] + 0.26, "boom_low")]
    return ev


def audio(path):
    """Muzika + zvučni efekti (poravnati po vrhuncu), pa loudnorm cijelog miksa na LUFS."""
    music = decode(MUSIC, MUSIC_START, DURATION)
    n = int(DURATION * SR)
    music = music[:n]
    fade = np.ones(len(music), np.float32)
    k = int(FADE_OUT * SR)
    fade[-k:] = np.linspace(1, 0, k)
    mix = music * fade[:, None] * 10 ** (-6 / 20)
    cache = {}
    for t, key in sfx_events():
        fn, peak, db = SFX[key]
        if fn not in cache:
            cache[fn] = decode(os.path.join(SFX_DIR, fn))
        x = cache[fn] * 10 ** (db / 20)
        i0 = int((t - peak) * SR)
        a, b = max(0, i0), min(n, i0 + len(x))
        if b > a:
            mix[a:b] += x[a - i0:b - i0]
    raw = os.path.join(CACHE, "audio3_raw.wav")
    pcm = np.clip(mix, -1, 1)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "f32le", "-ar", str(SR), "-ac", "2", "-i", "-",
                    "-c:a", "pcm_f32le", raw], input=pcm.astype(np.float32).tobytes(), check=True)
    meas = subprocess.run(["ffmpeg", "-hide_banner", "-i", raw, "-af", f"loudnorm=I={LUFS}:TP=-1.5:LRA=11:print_format=json",
                           "-f", "null", "-"], capture_output=True, text=True).stderr
    m = json.loads(meas[meas.rindex("{"):meas.rindex("}") + 1])
    ln = (f"loudnorm=I={LUFS}:TP=-1.5:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
          f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", raw, "-af", ln, "-ar", "48000", "-c:a", "pcm_s16le", path], check=True)


def full():
    os.makedirs(OUT, exist_ok=True)
    wav = os.path.join(CACHE, "audio3.wav")
    audio(wav)
    dst = os.path.join(OUT, "alu-line-reel-3.mp4")
    enc = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                            "-r", str(FPS), "-i", "-", "-i", wav,
                            "-c:v", "libx264", "-profile:v", "high", "-preset", "slow", "-crf", "17",
                            "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k",
                            "-movflags", "+faststart", "-shortest", dst], stdin=subprocess.PIPE)
    n = int(round(DURATION * FPS))
    for fi in range(n):
        enc.stdin.write(render_frame(fi).tobytes())
        if fi % 60 == 0:
            print(f"  {fi}/{n}", flush=True)
    enc.stdin.close()
    enc.wait()
    print("gotovo:", dst)


def preview():
    d = os.path.join(OUT, "preview3")
    os.makedirs(d, exist_ok=True)
    times = [0.0, 0.5]
    for s in SHOTS[1:]:
        times += [s["t0"] + 0.1, s["t1"] - 0.2] if s["kind"] != "end" else [s["t0"] + 1.0, DURATION - 0.1]
    thumbs = []
    for t in times:
        im = render_frame(int(t * FPS))
        im.save(os.path.join(d, f"t{t:05.2f}.png"))
        thumbs.append((t, im.resize((270, 480))))
    cols = 8
    rows = (len(thumbs) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * 270, rows * 510), (255, 255, 255))
    dr = ImageDraw.Draw(sheet)
    for k, (t, im) in enumerate(thumbs):
        x, y = (k % cols) * 270, (k // cols) * 510
        sheet.paste(im, (x, y))
        dr.text((x + 6, y + 482), f"{t:.2f} s", font=BS(26, 700), fill=(0, 0, 0))
    sheet.save(os.path.join(d, "contact.jpg"), quality=88)
    print("pregled:", d, "| trajanje", DURATION)


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "preview":
        preview()
    else:
        full()
