"""Alu Line Systems - Reel "Nacrt -> stvarnost" (1080x1920, 30 fps).

Upotreba:
  python render.py preview        -> ključne sličice u out/preview/ + contact sheet
  python render.py                -> cijeli video u out/alu-line-reel.mp4

Sve što se mijenja (fotke, tekst, mjere, rezovi) je u bloku KONFIGURACIJA.
Rezovi su vezani za udarce iz beats.json (python beats.py muzika.mp3 beats.json).

Redoslijed obrade slike: hqdn3d (čišćenje) -> lanczos (uvećanje) -> unsharp
(izoštravanje) -> nacrt/skener -> tekst se crta zadnji, preko gotove slike.
"""
import json
import os
import subprocess
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
PUB = os.path.join(HERE, "..", "public")
CACHE = os.path.join(HERE, "cache")
OUT = os.path.join(HERE, "out")
FONTS = os.path.join(HERE, "fonts")

# ============================ KONFIGURACIJA ============================
W, H, FPS = 1080, 1920, 30
MUSIC = os.path.join(PUB, "muzika", "Paul Yudin – Deque.mp3")
MUSIC_START = 176.89          # početak isječka u pjesmi (takt prije breakdowna)
DURATION = 21.70              # drop pjesme je na 188.70 s = 11.81 s u videu
LUFS = -18
FADE_OUT = 1.5

# boje iz loga
NOC = (12, 24, 36)
CELIK = (12, 60, 96)
SREBRO = (180, 192, 204)
SIVOPLAVA = (96, 120, 132)
SVIJETLA = (232, 238, 244)

V3 = os.path.join(PUB, "video", "WhatsApp Video 2026-10-12 at 11.03.08.mp4")
V1 = os.path.join(PUB, "video", "WhatsApp Video 2026-10-12 at 11.01.51.mp4")
V2 = os.path.join(PUB, "video", "WhatsApp Video 2026-10-12 at 11.01.52 (1).mp4")
IMG = os.path.join(PUB, "images")
VODICE = os.path.join(IMG, "cnc-model-ograde-vodice")

# Kadrovi. "beat" = indeks udarca na kojem kadar počinje (rez na udarac).
# Foto: crop = (centar_x, centar_y, visina) u pikselima originala.
# Oznake (bubbles): (x, y) u pikselima originala, ciljna tačka na ogradi;
#   pos = gdje stoji krug (x, y u kadru 1080x1920), side = strana natpisa.
# blur: [(x0, y0, x1, y1)] u pikselima izlaznog kadra (tablice, brojevi, lica).
SHOTS = [
    dict(kind="photo", beat=0, src=os.path.join(VODICE, "837737548_122146314867136426_7701768214894564891_n.jpg"),
         crop=(1150, 750, 1500), zoom=(1.00, 1.07), anchor=(0.5, 0.55),
         hook=["Montaža", "aluminijskih ograda"],
         block=("CNC model ograde", "list 01 / 05"),
         bubbles=[dict(at=(1120, 578), pos=(150, 1180), text="Rukohvat jabuka", side="right", beat=3)]),
    dict(kind="photo", beat=6, src=os.path.join(IMG, "elegantna-bocna-montaza", "aluminijska-ograda-lamela-100x20.jpg"),
         crop=(820, 720, 900), zoom=(1.00, 1.06), anchor=(0.5, 0.45),
         block=("Elegantna bočna montaža", "list 02 / 05"),
         bubbles=[dict(at=(812, 640), pos=(140, 450), text="Stub 80×50 mm", side="right", beat=2),
                  dict(at=(1000, 657), pos=(880, 1240), text="Lamela 100×20 mm", side="left", beat=3)]),
    dict(kind="photo", beat=12, src=os.path.join(IMG, "projekti", "krk-3.jpg"),
         crop=(500, 750, 1500), zoom=(1.00, 1.07), anchor=(0.4, 0.6),
         block=("Ograda s ratan ispunom", "list 03 / 05"),
         bubbles=[dict(at=(330, 760), pos=(150, 420), text="Stubovi 45×45 mm", side="right", beat=2),
                  dict(at=(640, 1080), pos=(880, 1230), text="Ratan cijev 2×2 cm", side="left", beat=3)]),
    dict(kind="video", beat=18, src=V3, start=5.0, length=5.9, speed=2.0,
         block=("Montaža na terenu", "list 04 / 05")),
    dict(kind="video", beat=24, src=V3, start=24.0, length=3.0, speed=1.0,
         block=("Ograda oko bazena", "list 05 / 05")),
    # brzi rezovi na svaki udarac
    dict(kind="video", beat=30, src=V2, start=3.0, length=0.5, speed=1.0, quick=True),
    dict(kind="video", beat=31, src=V1, start=0.3, length=0.5, speed=1.0, quick=True),
    dict(kind="photo", beat=32, src=os.path.join(IMG, "projekti", "stablo-ograda-5.jpg"),
         crop=(1000, 600, 1200), zoom=(1.0, 1.04), anchor=(0.5, 0.5), quick=True),
    dict(kind="photo", beat=33, src=os.path.join(IMG, "projekti", "kamena-ograda-2.jpg"),
         crop=(560, 600, 1200), zoom=(1.0, 1.04), anchor=(0.5, 0.5), quick=True),
    dict(kind="photo", beat=34, src=os.path.join(IMG, "projekti", "elegant-coko-1.jpg"),
         crop=(700, 768, 1536), zoom=(1.0, 1.04), anchor=(0.5, 0.5), quick=True),
    dict(kind="photo", beat=35, src=os.path.join(IMG, "projekti", "siegendorf-1.jpg"),
         crop=(1530, 768, 1536), zoom=(1.0, 1.04), anchor=(0.5, 0.5), quick=True),
    dict(kind="end", beat=36, src=os.path.join(VODICE, "841816116_122146314879136426_5817716812907095646_n.jpg"),
         crop=(1000, 750, 1500), zoom=(1.0, 1.05), anchor=(0.5, 0.5)),
]

END_CARD = dict(
    brand="Alu Line Systems",
    slogan="Kvalitet koji traje.",
    cta="Za ponude i informacije",
    phone="+387 62 543 464",
    phone_note="WhatsApp / Viber",
    web="alu-line-systems.com",
    countries="BiH · Hrvatska · Slovenija · Austrija",
)
LOGO = os.path.join(IMG, "logo", "alu-line.png")
# =======================================================================

with open(os.path.join(HERE, "beats.json"), encoding="utf-8") as f:
    _all = json.load(f)["beats"]
BEATS = [b - MUSIC_START for b in _all if MUSIC_START - 0.05 <= b <= MUSIC_START + DURATION + 1]
BEAT = 60 / json.load(open(os.path.join(HERE, "beats.json")))["bpm"]
for s, nxt in zip(SHOTS, SHOTS[1:] + [None]):
    s["t0"] = BEATS[s["beat"]]
    s["t1"] = BEATS[nxt["beat"]] if nxt else DURATION


def F(name, size, wght=None):
    f = ImageFont.truetype(os.path.join(FONTS, name), size)
    if wght:
        f.set_variation_by_axes([100, wght])
    return f


FT_HOOK = F("Saira-Variable.ttf", 70, 500)
FT_SLOGAN = F("Saira-Variable.ttf", 78, 500)
FT_PHONE = F("Saira-Variable.ttf", 64, 600)
FT_LABEL = F("SairaCondensed-SemiBold.ttf", 42)
FT_SMALL = F("SairaCondensed-Medium.ttf", 32)
FT_TINY = F("SairaCondensed-Medium.ttf", 28)


def ease(x):
    x = min(1.0, max(0.0, x))
    return x * x * (3 - 2 * x)


# ----------------------------- izvori slike -----------------------------
def ffmpeg(args):
    subprocess.run(["ffmpeg", "-v", "error", "-y"] + args, check=True)


def prep_photo(s):
    """Crop -> hqdn3d -> lanczos na 1.1x kadra (rezerva za zoom) -> unsharp. Keš u PNG."""
    os.makedirs(CACHE, exist_ok=True)
    cx, cy, ch = s["crop"]
    key = f"{os.path.basename(s['src'])}_{cx}_{cy}_{ch}.png"
    path = os.path.join(CACHE, key)
    im = Image.open(s["src"])
    ch = min(ch, im.height)
    cw = int(round(ch * W / H))
    x0 = max(0, min(im.width - cw, cx - cw // 2))
    y0 = max(0, min(im.height - ch, cy - ch // 2))
    s["_map"] = (x0, y0, cw, ch)
    if not os.path.exists(path):
        bw, bh = int(W * 1.1), int(H * 1.1)
        ffmpeg(["-i", s["src"], "-vf",
                f"crop={cw}:{ch}:{x0}:{y0},hqdn3d=2:2:0:0,scale={bw}:{bh}:flags=lanczos,unsharp=5:5:0.7",
                "-frames:v", "1", path])
    return np.asarray(Image.open(path).convert("RGB"))


def prep_video(s):
    """Isječak -> hqdn3d -> lanczos 1080x1920 -> unsharp -> brzina -> 30 fps. Keš u MP4."""
    os.makedirs(CACHE, exist_ok=True)
    key = f"{os.path.basename(s['src'])}_{s['start']}_{s['length']}_{s['speed']}.mp4".replace(" ", "_")
    path = os.path.join(CACHE, key)
    if not os.path.exists(path):
        ffmpeg(["-ss", str(s["start"]), "-t", str(s["length"]), "-i", s["src"], "-an", "-vf",
                f"hqdn3d=4:3:6:4.5,scale={W}:{H}:flags=lanczos,unsharp=5:5:0.9:3:3:0.4,"
                f"setpts=PTS/{s['speed']},fps={FPS}",
                "-c:v", "libx264", "-crf", "10", "-preset", "fast", "-pix_fmt", "yuv444p", path])
    return path


class VideoReader:
    def __init__(self, path):
        self.path, self.proc, self.idx, self.last = path, None, -1, None

    def _open(self):
        if self.proc:
            self.proc.kill()
        self.proc = subprocess.Popen(["ffmpeg", "-v", "error", "-i", self.path, "-f", "rawvideo",
                                      "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
        self.idx = -1

    def frame(self, i):
        if self.proc is None or i < self.idx:
            self._open()
        while self.idx < i:
            buf = self.proc.stdout.read(W * H * 3)
            if len(buf) < W * H * 3:   # kraj klipa: drži zadnji frejm
                return self.last
            self.last = np.frombuffer(buf, np.uint8).reshape(H, W, 3)
            self.idx += 1
        return self.last


# ------------------------------ nacrt efekat -----------------------------
_yy, _xx = np.mgrid[0:H, 0:W]
GRID = np.empty((H, W, 3), np.float32)
GRID[:] = NOC
GRID[((_xx % 54) == 0) | ((_yy % 54) == 0)] = np.array(CELIK, np.float32) * 0.75
GRID[((_xx % 270) == 0) | ((_yy % 270) == 0)] = CELIK


def blueprint(rgb):
    g = rgb.astype(np.float32).mean(axis=2)
    g = np.asarray(Image.fromarray(g.astype(np.uint8)).filter(ImageFilter.GaussianBlur(2.0)), np.float32)
    gx = np.zeros_like(g); gy = np.zeros_like(g)
    gx[:, 1:-1] = g[:, 2:] - g[:, :-2]
    gy[1:-1, :] = g[2:, :] - g[:-2, :]
    e = np.clip((np.hypot(gx, gy) - 10) / 22, 0, 1)[..., None]
    return (GRID * (1 - e) + np.array(SREBRO, np.float32) * e).astype(np.uint8)


def scan_mix(real, bp, x, reverse=False):
    """Lijevo od x stvarnost, desno nacrt (reverse: obrnuto)."""
    x = int(round(x))
    out = bp.copy() if not reverse else real.copy()
    if not reverse:
        out[:, :max(0, x)] = real[:, :max(0, x)]
    else:
        out[:, :max(0, x)] = bp[:, :max(0, x)]
    return out, x


def draw_scanline(ov, x):
    if x <= 0 or x >= W:
        return
    d = ImageDraw.Draw(ov)
    for i, a in enumerate((70, 45, 25, 12)):
        d.rectangle([x - 3 - i * 5, 0, x + 3 + i * 5, H], fill=(*SVIJETLA, a))
    d.line([(x, 0), (x, H)], fill=(*SVIJETLA, 255), width=3)


# -------------------------------- tekst --------------------------------
def plate(d, xy, text, f, fg=SVIJETLA, pad=(14, 8), anchor="la", alpha=255):
    if not text:
        return None
    l, t, r, b = d.textbbox(xy, text, font=f, anchor=anchor)
    d.rectangle([l - pad[0], t - pad[1], r + pad[0], b + pad[1]], fill=(*NOC, int(alpha * 0.92)))
    d.text(xy, text, font=f, fill=(*fg, alpha), anchor=anchor)
    return (l - pad[0], t - pad[1], r + pad[0], b + pad[1])


def typed(text, p):
    n = int(round(len(text) * min(1, max(0, p))))
    return text[:n]


def draw_bubble(d, target, pos, text, side, p):
    """p 0..1: linija raste (0-.35), krug (.35-.5), natpis se kuca (.5-1)."""
    if p <= 0:
        return
    r = 32
    cx, cy = pos
    lp = ease(p / 0.35)
    ex = cx + (target[0] - cx) * lp
    ey = cy + (target[1] - cy) * lp
    d.line([(cx, cy), (ex, ey)], fill=(*SVIJETLA, 255), width=3)
    if lp >= 1:
        d.ellipse([target[0] - 8, target[1] - 8, target[0] + 8, target[1] + 8], fill=(*SVIJETLA, 255))
    cp = ease((p - 0.3) / 0.2)
    if cp > 0:
        rr = r * cp
        d.ellipse([cx - rr, cy - rr, cx + rr, cy + rr], fill=(*NOC, 255), outline=(*SVIJETLA, 255), width=3)
    tp = (p - 0.5) / 0.5
    if tp > 0:
        t = typed(text, tp)
        if side == "right":
            plate(d, (cx + r + 20, cy), t, FT_LABEL, anchor="lm", pad=(12, 6))
        else:
            plate(d, (cx - r - 20, cy), t, FT_LABEL, anchor="rm", pad=(12, 6))


def draw_block(d, title, sheet, p, box=(64, 1360, 940, 1510)):
    """Naslovni blok kao na tehničkom crtežu; okvir se iscrta, pa se tekst ukuca."""
    if p <= 0:
        return
    x0, y0, x1, y1 = box
    ym = (y0 + y1) // 2
    xs = x0 + int((x1 - x0) * 0.64)
    q = ease(p / 0.4)
    d.rectangle([x0, y0, x1, y1], fill=(*NOC, int(225 * q)))
    xe = x0 + (x1 - x0) * q
    d.line([(x0, y0), (xe, y0)], fill=(*SREBRO, 255), width=2)
    d.line([(x0, y1), (xe, y1)], fill=(*SREBRO, 255), width=2)
    d.line([(x0, ym), (xe, ym)], fill=(*SREBRO, 255), width=1)
    if q >= 1:
        d.line([(x0, y0), (x0, y1)], fill=(*SREBRO, 255), width=2)
        d.line([(x1, y0), (x1, y1)], fill=(*SREBRO, 255), width=2)
        d.line([(xs, ym), (xs, y1)], fill=(*SREBRO, 255), width=2)
    tp = (p - 0.4) / 0.6
    if tp > 0:
        d.text((x0 + 22, (y0 + ym) // 2), typed(title, tp), font=FT_SMALL, fill=(*SVIJETLA, 255), anchor="lm")
        d.text((x0 + 22, (ym + y1) // 2), typed(END_CARD["brand"], tp), font=FT_SMALL, fill=(*SREBRO, 255), anchor="lm")
        d.text((xs + 22, (ym + y1) // 2), typed(sheet, tp), font=FT_SMALL, fill=(*SREBRO, 255), anchor="lm")


_logo = None


def logo(h):
    global _logo
    if _logo is None:
        im = Image.open(LOGO).convert("RGB")
        a = np.asarray(im).max(axis=2).astype(np.float32)
        alpha = np.clip((a - 18) * 3, 0, 255).astype(np.uint8)
        rgba = im.convert("RGBA"); rgba.putalpha(Image.fromarray(alpha))
        _logo = rgba.crop(rgba.getbbox())
    return _logo.resize((int(_logo.width * h / _logo.height), h), Image.LANCZOS)


# ------------------------------ kompozicija ------------------------------
def kb_frame(base, s, p):
    """Ken Burns: base je 1.1x kadra; zoom raste od zoom[0] do zoom[1]."""
    z0, z1 = s["zoom"]
    z = z0 + (z1 - z0) * p
    bh, bw = base.shape[:2]
    cw, ch = bw / (1.1 * z), bh / (1.1 * z)
    ax, ay = s["anchor"]
    x0 = (bw - cw) * ax
    y0 = (bh - ch) * ay
    im = Image.fromarray(base).resize((W, H), Image.BILINEAR, box=(x0, y0, x0 + cw, y0 + ch))
    sx, sy = W / cw, H / ch

    def M(x, y):  # piksel originalne fotke -> piksel kadra
        mx0, my0, mcw, mch = s["_map"]
        bx = (x - mx0) * bw / mcw
        by = (y - my0) * bh / mch
        return ((bx - x0) * sx, (by - y0) * sy)
    return np.asarray(im), M


def apply_blur(rgb, rects):
    if not rects:
        return rgb
    im = Image.fromarray(rgb)
    for r in rects:
        reg = im.crop(r).filter(ImageFilter.GaussianBlur(18))
        im.paste(reg, r[:2])
    return np.asarray(im)


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
    p = lt / dur
    key = id(s)
    if key not in SOURCES:
        SOURCES[key] = prep_photo(s) if s["kind"] in ("photo", "end") else VideoReader(prep_video(s))
    src = SOURCES[key]

    M = None
    if s["kind"] == "video":
        real = src.frame(int(lt * FPS))
    else:
        real, M = kb_frame(src, s, p)
    real = apply_blur(real, s.get("blur"))

    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    if s["kind"] == "end":
        # obrnuti skener: stvarnost -> nacrt, pa naslovni blok
        sp = ease(lt / BEAT)
        bp = (blueprint(real).astype(np.float32) * (1 - 0.25 * sp)).astype(np.uint8)
        frame, x = scan_mix(real, bp, sp * (W + 10), reverse=True)
        draw_scanline(ov, x)
        draw_end(d, ov, lt)
    else:
        quick = s.get("quick")
        hold, sweep = (0.0, 0.16) if quick else (0.12, BEAT - 0.12)
        sp = ease((lt - hold) / sweep)
        if sp < 1:
            bp = blueprint(real)
            frame, x = scan_mix(real, bp, sp * (W + 10))
            draw_scanline(ov, x)
        else:
            frame = real
        if s.get("hook"):
            hp = lt / (BEAT * 2)
            a, b = s["hook"]
            plate(d, (64, 116), typed("01  /  montaža", hp * 2), FT_TINY, fg=SREBRO, pad=(10, 4))
            plate(d, (64, 170), typed(a, hp * 1.6), FT_HOOK, pad=(16, 6))
            if hp > 0.45:
                plate(d, (64, 268), typed(b, (hp - 0.45) * 1.6), FT_HOOK, pad=(16, 6))
        for bb in s.get("bubbles", []):
            bpg = (lt - bb["beat"] * BEAT) / (BEAT * 1.5)
            tgt = M(*bb["at"]) if M else bb["at"]
            draw_bubble(d, tgt, bb["pos"], bb["text"], bb["side"], bpg)
        if s.get("block"):
            draw_block(d, *s["block"], (lt - BEAT) / (BEAT * 1.4))

    out = Image.alpha_composite(Image.fromarray(frame).convert("RGBA"), ov)
    return out.convert("RGB")


def draw_end(d, ov, lt):
    """Završna kartica = veliki naslovni blok nacrta. Redovi ulaze na udarce."""
    c = END_CARD
    x0, x1 = 64, W - 64
    y0 = 470
    rows = [  # (visina reda, crtač)
        (150, "brand"), (150, "slogan"), (220, "phone"), (90, "web"), (90, "countries"),
    ]
    total = sum(h for h, _ in rows)
    bp = ease((lt - BEAT) / (BEAT * 0.8))
    if bp <= 0:
        return
    d.rectangle([x0, y0, x1, y0 + total], fill=(*NOC, int(235 * bp)))
    d.rectangle([x0, y0, x0 + (x1 - x0) * bp, y0 + total], outline=(*SREBRO, 255), width=2)
    y = y0
    for i, (h, kind) in enumerate(rows):
        rp = (lt - BEAT * (1.6 + i * 0.75)) / (BEAT * 0.9)
        if i > 0 and bp >= 1:
            d.line([(x0, y), (x1, y)], fill=(*SREBRO, 255), width=1)
        if rp > 0:
            cy = y + h // 2
            if kind == "brand":
                lg = logo(96)
                ov.alpha_composite(lg, (x0 + 28, cy - lg.height // 2))
                d.line([(x0 + 56 + lg.width, y), (x0 + 56 + lg.width, y + h)], fill=(*SREBRO, 255), width=1)
                d.text((x0 + 84 + lg.width, cy - 22), typed(c["brand"], rp), font=FT_LABEL, fill=(*SVIJETLA, 255), anchor="lm")
                d.text((x0 + 84 + lg.width, cy + 26), typed("montaža aluminijskih ograda", rp), font=FT_SMALL, fill=(*SREBRO, 255), anchor="lm")
            elif kind == "slogan":
                d.text((x0 + 32, cy), typed(c["slogan"], rp), font=FT_SLOGAN, fill=(*SVIJETLA, 255), anchor="lm")
            elif kind == "phone":
                d.text((x0 + 32, y + 46), typed(c["cta"], rp), font=FT_SMALL, fill=(*SREBRO, 255), anchor="lm")
                d.text((x0 + 32, y + 118), typed(c["phone"], rp), font=FT_PHONE, fill=(*SVIJETLA, 255), anchor="lm")
                d.text((x0 + 32, y + 182), typed(c["phone_note"], rp), font=FT_SMALL, fill=(*SREBRO, 255), anchor="lm")
            elif kind == "web":
                d.text((x0 + 32, cy), typed(c["web"], rp), font=FT_LABEL, fill=(*SVIJETLA, 255), anchor="lm")
            elif kind == "countries":
                d.text((x0 + 32, cy), typed(c["countries"], rp), font=FT_SMALL, fill=(*SREBRO, 255), anchor="lm")
        y += h


# ------------------------------- izlaz -------------------------------
def audio(path):
    seg = ["-ss", str(MUSIC_START), "-t", str(DURATION), "-i", MUSIC]
    meas = subprocess.run(["ffmpeg", "-hide_banner"] + seg + ["-af", f"loudnorm=I={LUFS}:TP=-1.5:LRA=11:print_format=json",
                          "-f", "null", "-"], capture_output=True, text=True).stderr
    m = json.loads(meas[meas.rindex("{"):meas.rindex("}") + 1])
    ln = (f"loudnorm=I={LUFS}:TP=-1.5:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
          f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true")
    ffmpeg(seg + ["-af", f"afade=t=in:d=0.03,{ln},afade=t=out:st={DURATION - FADE_OUT}:d={FADE_OUT}",
                  "-ar", "48000", "-c:a", "pcm_s16le", path])


def full():
    os.makedirs(OUT, exist_ok=True)
    wav = os.path.join(CACHE, "audio.wav")
    os.makedirs(CACHE, exist_ok=True)
    audio(wav)
    dst = os.path.join(OUT, "alu-line-reel.mp4")
    enc = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                            "-r", str(FPS), "-i", "-", "-i", wav,
                            "-c:v", "libx264", "-profile:v", "high", "-preset", "slow", "-crf", "17",
                            "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k",
                            "-movflags", "+faststart", "-shortest", dst], stdin=subprocess.PIPE)
    n = int(round(DURATION * FPS))
    for fi in range(n):
        enc.stdin.write(render_frame(fi).tobytes())
        if fi % 30 == 0:
            print(f"  {fi}/{n}", flush=True)
    enc.stdin.close()
    enc.wait()
    print("gotovo:", dst)


def preview():
    d = os.path.join(OUT, "preview")
    os.makedirs(d, exist_ok=True)
    times = []
    for s in SHOTS:
        if s.get("quick"):
            times.append(s["t0"] + 0.3)
        else:
            times += [s["t0"] + 0.25, s["t1"] - 0.1]
    thumbs = []
    for t in times:
        im = render_frame(int(t * FPS))
        im.save(os.path.join(d, f"t{t:05.2f}.png"))
        thumbs.append((t, im.resize((270, 480))))
    cols = 8
    rows = (len(thumbs) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * 270, rows * 510), (255, 255, 255))
    dr = ImageDraw.Draw(sheet)
    for i, (t, im) in enumerate(thumbs):
        x, y = (i % cols) * 270, (i // cols) * 510
        sheet.paste(im, (x, y))
        dr.text((x + 6, y + 484), f"{t:.2f} s", font=FT_TINY, fill=(0, 0, 0))
    sheet.save(os.path.join(d, "contact.jpg"), quality=88)
    print("pregled:", d)


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "preview":
        preview()
    else:
        full()
