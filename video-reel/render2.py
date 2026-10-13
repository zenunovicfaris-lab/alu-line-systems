"""Alu Line Systems - Reel 2 "Lamele / editorijal" (1080x1920, 30 fps).

Potpuno drugačiji stil od render.py: svijetla papirna podloga, klasični serif
(Fraunces) + Manrope, prijelazi kao aluminijske lamele koje se otvaraju na udarac,
mjere u bijeloj kataloškoj kartici na vrhu kadra.

Upotreba:
  python render2.py preview   -> ključne sličice u out/preview2/
  python render2.py           -> out/alu-line-reel-2.mp4

Muzika: "Motivating Mornings" - Ahjay Stelino (Mixkit Stock Music Free License).
Udarci: python beats.py ../public/muzika/kandidati/mixkit-motivating-mornings.mp3 beats2.json
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
MUSIC = os.path.join(PUB, "muzika", "kandidati", "mixkit-motivating-mornings.mp3")
BEATS_JSON = os.path.join(HERE, "beats2.json")
START_BEAT = 12          # udarac u pjesmi od kojeg počinje isječak (lift je 12 udaraca kasnije)
LENGTH_BEATS = 50        # trajanje videa u udarcima
LUFS = -18
FADE_OUT = 1.6
TRANS = 0.45             # trajanje lamela-prijelaza (s)

# boje iz loga + papir
NOC = (12, 24, 36)
CELIK = (12, 60, 96)
SREBRO = (180, 192, 204)
SIVOPLAVA = (96, 120, 132)
PAPIR = (238, 241, 244)
PAPIR2 = (233, 236, 240)
BIJELA = (248, 249, 251)

IMG = os.path.join(PUB, "images")
VID = os.path.join(PUB, "video")
V3 = os.path.join(VID, "WhatsApp Video 2026-10-12 at 11.03.08.mp4")
VODICE = os.path.join(IMG, "cnc-model-ograde-vodice")

# beat = udarac (od početka videa) na kojem kadar počinje
# card: (indeks, naslov, [(oznaka, vrijednost, jedinica), ...])
SHOTS = [
    dict(kind="opening", beat=0, src=V3, start=24.0, length=6.2, speed=1.0),
    dict(kind="photo", beat=12, src=os.path.join(IMG, "elegantna-bocna-montaza", "aluminijska-ograda-terasa-horizontalne-lamele.jpg"),
         crop=(780, 600, 1200), zoom=(1.0, 1.08), anchor=(0.5, 0.6),
         card=("01", "Elegantna bočna montaža", [("Stub", "80×50", "mm"), ("Lamela", "100×20", "mm")])),
    dict(kind="photo", beat=18, src=os.path.join(IMG, "projekti", "krk-5.jpg"),
         crop=(600, 750, 1500), zoom=(1.0, 1.08), anchor=(0.5, 0.7),
         card=("02", "Ograda s ratan ispunom", [("Stubovi", "45×45", "mm"), ("Ratan cijev", "2×2", "cm")])),
    dict(kind="photo", beat=24, src=os.path.join(VODICE, "839707840_122146314825136426_5516203895649798778_n.jpg"),
         crop=(1250, 750, 1500), zoom=(1.0, 1.08), anchor=(0.5, 0.6),
         card=("03", "Terasa s CNC ogradom", [("Model", "CNC", ""), ("Rukohvat", "jabuka", "")])),
    dict(kind="photo", beat=30, src=os.path.join(IMG, "projekti", "stablo-ograda-4.jpg"),
         crop=(1000, 600, 1200), zoom=(1.0, 1.06), anchor=(0.5, 0.5),
         card=("04", "Balkonska ograda", [])),
    dict(kind="photo", beat=33, src=os.path.join(IMG, "projekti", "kamena-ograda-5.jpg"),
         crop=(800, 600, 1200), zoom=(1.0, 1.06), anchor=(0.5, 0.5),
         card=("05", "Dvorišna ograda", [])),
    dict(kind="video", beat=36, src=V3, start=5.0, length=8.0, speed=2.0,
         card=("06", "Montaža na terenu", [])),
    dict(kind="end", beat=40),
]

OPENING = dict(brand="ALU LINE SYSTEMS", lines=["Montaža", "aluminijskih", "ograda."])
END_CARD = dict(
    slogan=["Kvalitet", "koji traje."],
    cta="ZA PONUDE I INFORMACIJE",
    phone="+387 62 543 464",
    phone_note="WhatsApp / Viber",
    web="alu-line-systems.com",
    countries="BiH · Hrvatska · Slovenija · Austrija",
)
LOGO = os.path.join(IMG, "logo", "alu-line.png")
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


def F(name, size, **axes):
    f = ImageFont.truetype(os.path.join(FONTS, name), size)
    names = [a["name"].decode() for a in f.get_variation_axes()]
    vals = []
    for a, n in zip(f.get_variation_axes(), names):
        key = {"Optical Size": "opsz", "Weight": "wght", "Softness": "soft", "Wonky": "wonk"}.get(n, n)
        vals.append(axes.get(key, a["default"]))
    f.set_variation_by_axes(vals)
    return f


SERIF = lambda s, w=350: F("Fraunces-Variable.ttf", s, opsz=144, wght=w, soft=50, wonk=0)
SERIF_I = lambda s, w=350: F("Fraunces-Italic-Variable.ttf", s, opsz=144, wght=w, soft=50, wonk=0)
SANS = lambda s, w=500: F("Manrope-Variable.ttf", s, wght=w)

FT_OPEN = SERIF(132, 330)
FT_OPEN_I = SERIF_I(132, 330)
FT_BRAND = SANS(26, 700)
FT_IDX = SERIF_I(46, 400)
FT_TITLE = SANS(34, 700)
FT_LABEL = SANS(24, 700)
FT_NUM = SERIF(112, 380)
FT_NUM_I = SERIF_I(112, 380)
FT_UNIT = SERIF_I(46, 400)
FT_SLOGAN = SERIF(128, 330)
FT_SLOGAN_I = SERIF_I(128, 330)
FT_PHONE = SERIF(92, 420)
FT_SMALL = SANS(34, 500)
FT_WEB = SANS(42, 700)


def ease(x):
    x = min(1.0, max(0.0, x))
    return x * x * (3 - 2 * x)


def ease_out(x):
    x = min(1.0, max(0.0, x))
    return 1 - (1 - x) ** 3


# ----------------------------- izvori slike -----------------------------
def ffmpeg(args):
    subprocess.run(["ffmpeg", "-v", "error", "-y"] + args, check=True)


def prep_photo(s):
    """Crop -> hqdn3d -> lanczos na 1.1x kadra -> unsharp. Keš u PNG."""
    os.makedirs(CACHE, exist_ok=True)
    cx, cy, ch = s["crop"]
    im = Image.open(s["src"])
    ch = min(ch, im.height)
    cw = int(round(ch * W / H))
    x0 = max(0, min(im.width - cw, cx - cw // 2))
    y0 = max(0, min(im.height - ch, cy - ch // 2))
    path = os.path.join(CACHE, f"{os.path.basename(s['src'])}_{x0}_{y0}_{cw}_{ch}.png")
    if not os.path.exists(path):
        ffmpeg(["-i", s["src"], "-vf",
                f"crop={cw}:{ch}:{x0}:{y0},hqdn3d=2:2:0:0,scale={int(W * 1.1)}:{int(H * 1.1)}:flags=lanczos,unsharp=5:5:0.7",
                "-frames:v", "1", path])
    return np.asarray(Image.open(path).convert("RGB"))


def prep_video(s):
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
            if len(buf) < W * H * 3:
                return self.last
            self.last = np.frombuffer(buf, np.uint8).reshape(H, W, 3)
            self.idx += 1
        return self.last


# ------------------------------- podloge -------------------------------
def make_paper():
    """Papir s vrlo blagim horizontalnim lamelama (tekstura proizvoda)."""
    a = np.empty((H, W, 3), np.float32)
    a[:] = PAPIR
    yy = np.arange(H)[:, None]
    band = (yy // 96) % 2 == 1
    a[np.broadcast_to(band, (H, W))] = PAPIR2
    a[np.broadcast_to((yy % 96) == 0, (H, W))] = np.array(SREBRO) * 0.35 + np.array(PAPIR) * 0.65
    rng = np.random.default_rng(3)
    a += rng.normal(0, 1.4, (H, W, 1))
    return np.clip(a, 0, 255).astype(np.uint8)


PAPER = make_paper()

_logo = {}


def logo(h):
    """Logo bez crne pozadine, obojen čeličnom plavom (za svijetlu podlogu)."""
    if h not in _logo:
        im = np.asarray(Image.open(LOGO).convert("RGB")).astype(np.float32)
        lum = im.max(axis=2)
        alpha = np.clip((lum - 20) * 2.2, 0, 255)
        ys = np.linspace(0, 1, im.shape[0])[:, None, None]
        col = np.array(CELIK, np.float32) * (1 - ys) + np.array(NOC, np.float32) * ys
        rgba = np.concatenate([np.broadcast_to(col, im.shape), alpha[..., None]], axis=2).astype(np.uint8)
        L = Image.fromarray(rgba, "RGBA")
        L = L.crop(L.getbbox())
        _logo[h] = L.resize((int(L.width * h / L.height), h), Image.LANCZOS)
    return _logo[h]


# -------------------------------- tekst --------------------------------
def spaced(d, xy, text, f, fill, spacing=4):
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=f, fill=fill)
        x += d.textlength(ch, font=f) + spacing
    return x


def rise(ov, xy, text, f, fill, p, spacing=None):
    """Tekst izranja iza nevidljive linije (maska), bez kucanja i bez blijeđenja."""
    if p <= 0 or not text:
        return
    tmp = Image.new("RGBA", (W, 400), (0, 0, 0, 0))
    td = ImageDraw.Draw(tmp)
    if spacing is None:
        td.text((0, 100), text, font=f, fill=fill)
    else:
        spaced(td, (0, 100), text, f, fill, spacing)
    bb = tmp.getbbox()
    if not bb:
        return
    line = tmp.crop((0, bb[1] - 6, bb[2] + 4, bb[3] + 10))
    h = line.height
    off = int(round((1 - ease_out(p)) * h))
    shown = line.crop((0, 0, line.width, h - off))
    x, y = xy
    ov.alpha_composite(shown, (int(x), int(y + off)))


def text_w(text, f):
    return ImageDraw.Draw(Image.new("L", (1, 1))).textlength(text, font=f)


# ------------------------------ kompozicija ------------------------------
def kb_frame(base, s, p):
    z = s["zoom"][0] + (s["zoom"][1] - s["zoom"][0]) * ease(p)
    bh, bw = base.shape[:2]
    cw, ch = bw / (1.1 * z), bh / (1.1 * z)
    ax, ay = s["anchor"]
    x0, y0 = (bw - cw) * ax, (bh - ch) * ay
    return np.asarray(Image.fromarray(base).resize((W, H), Image.BILINEAR, box=(x0, y0, x0 + cw, y0 + ch)))


def lamela_mix(a, b, p, n=12, xr=(0, W), yr=(0, H)):
    """Prijelaz: nova slika se otvara kroz n horizontalnih lamela, sa zakašnjenjem odozgo nadolje."""
    out = a.copy()
    h = H / n
    edges = []
    for i in range(n):
        q = ease((p - i * 0.035) / (1 - (n - 1) * 0.035))
        if q <= 0:
            continue
        c = (i + 0.5) * h
        half = h / 2 * q
        y0, y1 = int(c - half), int(np.ceil(c + half))
        out[y0:y1] = b[y0:y1]
        if q < 1:
            edges += [y0, y1 - 1]
    for y in edges:   # tanka sjenka na ivici lamele
        if not yr[0] <= y < yr[1]:
            continue
        lo, hi = max(0, y - 2), min(H, y + 2)
        out[lo:hi, xr[0]:xr[1]] = (out[lo:hi, xr[0]:xr[1]].astype(np.float32) * 0.55).astype(np.uint8)
    return out


SOURCES = {}


def source(s):
    k = id(s)
    if k not in SOURCES:
        if s["kind"] == "photo":
            SOURCES[k] = prep_photo(s)
        elif s["kind"] in ("video", "opening"):
            SOURCES[k] = VideoReader(prep_video(s))
        else:
            SOURCES[k] = None
    return SOURCES[k]


OPEN_FRAME = (110, 700, 970, 1600)   # okvir videa na otvaranju (x0, y0, x1, y1)


def base_image(s, t):
    """Slika kadra s u trenutku t (bez teksta)."""
    lt = t - s["t0"]
    dur = s["t1"] - s["t0"]
    if s["kind"] == "photo":
        return kb_frame(source(s), s, lt / dur)
    if s["kind"] == "video":
        return source(s).frame(max(0, int(lt * FPS)))
    if s["kind"] == "end":
        return PAPER
    # otvaranje: papir + uokviren video koji se na kraju širi preko cijelog ekrana
    vid = source(s).frame(max(0, int(lt * FPS)))
    out = PAPER.copy()
    reveal = (lt - 2.6 * BEAT) / (1.4 * BEAT)
    if reveal <= 0:
        return out
    grow = ease((lt - 8.6 * BEAT) / (3.2 * BEAT))
    fx0, fy0, fx1, fy1 = OPEN_FRAME
    x0 = int(fx0 * (1 - grow)); y0 = int(fy0 * (1 - grow))
    x1 = int(fx1 + (W - fx1) * grow); y1 = int(fy1 + (H - fy1) * grow)
    fw, fh = x1 - x0, y1 - y0
    # isječak iz videa istog omjera kao okvir (centriran), bez zamućene kopije
    sc = max(fw / W, fh / H)
    cw, ch = fw / sc, fh / sc
    cx0, cy0 = (W - cw) / 2, (H - ch) / 2
    crop = Image.fromarray(vid).resize((fw, fh), Image.BILINEAR, box=(cx0, cy0, cx0 + cw, cy0 + ch))
    framed = out.copy()
    if grow < 1:   # mekana sjenka ispod fotografije
        sh = Image.new("L", (W, H), 0)
        ImageDraw.Draw(sh).rectangle([x0 + 10, y0 + 22, x1 + 10, y1 + 26], fill=int(70 * (1 - grow)))
        sh = sh.filter(ImageFilter.GaussianBlur(22))
        framed = (framed.astype(np.float32) * (1 - np.asarray(sh, np.float32)[..., None] / 255)).astype(np.uint8)
    framed = framed.copy()
    framed[y0:y1, x0:x1] = np.asarray(crop)
    if reveal >= 1:
        return framed
    # okvir se otvara lamelama samo unutar svoje površine
    return lamela_mix(out, framed, reveal, n=8, xr=(x0, x1), yr=(y0, y1))


def shot_at(t):
    for i, s in enumerate(SHOTS):
        if s["t0"] <= t < s["t1"]:
            return i, s
    return len(SHOTS) - 1, SHOTS[-1]


def draw_card(ov, s, lt, dur):
    """Bijela kataloška kartica na vrhu: ulazi slijeva, mjere izranjaju, izlazi prije reza."""
    idx, title, specs = s["card"]
    tin = ease_out((lt - 0.55 * BEAT) / (1.1 * BEAT))
    tout = ease((lt - (dur - 0.42)) / 0.36)
    if tin <= 0 or tout >= 1:
        return
    x_off = int(-W * (1 - tin) - W * tout)
    y0 = 190
    hh = 300 if specs else 150
    card = Image.new("RGBA", (W - 90, hh), (*BIJELA, 244))
    cd = ImageDraw.Draw(card)
    cd.rectangle([0, 0, 10, hh], fill=(*CELIK, 255))   # rub kartice u boji loga
    cd.text((70, 48), idx, font=FT_IDX, fill=(*CELIK, 255), anchor="lm")
    cd.text((150, 48), title, font=FT_TITLE, fill=(*NOC, 255), anchor="lm")
    rule = ease((lt - 1.1 * BEAT) / (1.2 * BEAT))
    if specs:
        cd.line([(70, 102), (70 + (W - 90 - 140) * rule, 102)], fill=(*SREBRO, 255), width=2)
    card_x = x_off
    ov.alpha_composite(card, (max(-card.width, card_x), y0)) if card_x > -card.width else None
    d = ImageDraw.Draw(ov)
    for j, (lab, val, unit) in enumerate(specs):
        sp = (lt - (1.5 + j * 0.9) * BEAT) / (0.9 * BEAT)
        cx = card_x + 70 + j * 470
        rise(ov, (cx, y0 + 124), lab.upper(), FT_LABEL, (*SIVOPLAVA, 255), sp, spacing=4)
        fnum = FT_NUM_I if not any(c.isdigit() for c in val) else FT_NUM
        rise(ov, (cx - 4, y0 + 162), val, fnum, (*NOC, 255), sp)
        if unit:
            rise(ov, (cx + text_w(val, fnum) + 10, y0 + 206), unit, FT_UNIT, (*CELIK, 255), sp)


def draw_opening(ov, lt):
    d = ImageDraw.Draw(ov)
    fade = 1 - ease((lt - 8.6 * BEAT) / (1.6 * BEAT))   # tekst se povuče kad okvir krene da raste
    if fade <= 0:
        return
    a = int(255 * fade)
    lg = logo(64)
    p0 = ease_out(lt / (0.8 * BEAT))
    if p0 > 0:
        lg2 = lg.copy(); lg2.putalpha(lg2.getchannel("A").point(lambda v: int(v * p0 * fade)))
        ov.alpha_composite(lg2, (110, 140))
        rise(ov, (110 + lg.width + 26, 162), OPENING["brand"], FT_BRAND, (*CELIK, a), p0, spacing=5)
    y = 300
    for i, line in enumerate(OPENING["lines"]):
        p = (lt - (0.5 + i * 0.6) * BEAT) / (0.8 * BEAT)
        last = i == len(OPENING["lines"]) - 1
        rise(ov, (104, y), line, FT_OPEN_I if last else FT_OPEN, (*(CELIK if last else NOC), a), p)
        y += 128


def draw_end(ov, lt):
    d = ImageDraw.Draw(ov)
    c = END_CARD
    x = 110
    lg = logo(150)
    p = ease_out((lt - 0.6 * BEAT) / (1.0 * BEAT))
    if p > 0:
        lg2 = lg.copy(); lg2.putalpha(lg2.getchannel("A").point(lambda v: int(v * p)))
        ov.alpha_composite(lg2, (x, 400 + int((1 - p) * 30)))
    rise(ov, (x - 6, 670), c["slogan"][0], FT_SLOGAN, (*NOC, 255), (lt - 1.2 * BEAT) / (0.9 * BEAT))
    rise(ov, (x - 6, 800), c["slogan"][1], FT_SLOGAN_I, (*CELIK, 255), (lt - 1.7 * BEAT) / (0.9 * BEAT))
    r = ease((lt - 2.4 * BEAT) / (1.4 * BEAT))
    if r > 0:
        d.line([(x, 1010), (x + (W - 2 * x) * r, 1010)], fill=(*CELIK, 255), width=2)
    rise(ov, (x, 1055), c["cta"], FT_LABEL, (*SIVOPLAVA, 255), (lt - 3.0 * BEAT) / (0.8 * BEAT), spacing=5)
    rise(ov, (x - 4, 1100), c["phone"], FT_PHONE, (*NOC, 255), (lt - 3.4 * BEAT) / (0.9 * BEAT))
    rise(ov, (x, 1230), c["phone_note"], FT_SMALL, (*SIVOPLAVA, 255), (lt - 3.9 * BEAT) / (0.8 * BEAT))
    rise(ov, (x, 1340), c["web"], FT_WEB, (*CELIK, 255), (lt - 4.4 * BEAT) / (0.8 * BEAT))
    r2 = ease((lt - 4.8 * BEAT) / (1.2 * BEAT))
    if r2 > 0:
        d.line([(x, 1440), (x + (W - 2 * x) * r2, 1440)], fill=(*SREBRO, 255), width=2)
    rise(ov, (x, 1470), c["countries"], FT_SMALL, (*NOC, 255), (lt - 5.2 * BEAT) / (0.8 * BEAT))


def render_frame(fi):
    t = fi / FPS
    i, s = shot_at(t)
    lt = t - s["t0"]
    dur = s["t1"] - s["t0"]
    img = base_image(s, t)
    if i > 0 and lt < TRANS:
        img = lamela_mix(base_image(SHOTS[i - 1], t), img, lt / TRANS)
    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    if s["kind"] == "opening":
        draw_opening(ov, lt)
    elif s["kind"] == "end":
        draw_end(ov, lt)
    elif s.get("card"):
        draw_card(ov, s, lt, dur)
    return Image.alpha_composite(Image.fromarray(img).convert("RGBA"), ov).convert("RGB")


# ------------------------------- izlaz -------------------------------
def audio(path):
    seg = ["-ss", f"{MUSIC_START:.3f}", "-t", str(DURATION), "-i", MUSIC]
    meas = subprocess.run(["ffmpeg", "-hide_banner"] + seg + ["-af", f"loudnorm=I={LUFS}:TP=-1.5:LRA=11:print_format=json",
                          "-f", "null", "-"], capture_output=True, text=True).stderr
    m = json.loads(meas[meas.rindex("{"):meas.rindex("}") + 1])
    ln = (f"loudnorm=I={LUFS}:TP=-1.5:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
          f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true")
    ffmpeg(seg + ["-af", f"afade=t=in:d=0.03,{ln},afade=t=out:st={DURATION - FADE_OUT}:d={FADE_OUT}",
                  "-ar", "48000", "-c:a", "pcm_s16le", path])


def full():
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(CACHE, exist_ok=True)
    wav = os.path.join(CACHE, "audio2.wav")
    audio(wav)
    dst = os.path.join(OUT, "alu-line-reel-2.mp4")
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
    d = os.path.join(OUT, "preview2")
    os.makedirs(d, exist_ok=True)
    times = [0.6, 1.9, 2.5, 4.2, 5.5]
    for s in SHOTS[1:]:
        times += [s["t0"] + 0.2, min(s["t1"] - 0.5, s["t0"] + 2.2)]
    times += [DURATION - 0.1]
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
        dr.text((x + 6, y + 484), f"{t:.2f} s", font=SANS(22, 600), fill=(0, 0, 0))
    sheet.save(os.path.join(d, "contact.jpg"), quality=88)
    print("pregled:", d, "| trajanje", DURATION)


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "preview":
        preview()
    else:
        full()
