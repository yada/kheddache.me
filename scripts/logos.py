# /// script
# dependencies = ["pillow"]
# ///
"""Build public/img/logos/{reshapr,microcks}-aligned.png from the official logos.

Only crops and scales the original parts (icon, lettering), no redrawing or recolouring.
Same icon height and same capital height for both, lettering centred on the icon.
Run: uv run scripts/logos.py
"""
from pathlib import Path
from PIL import Image

D = Path(__file__).resolve().parent.parent / "public/img/logos"
ICON_H, CAP_H, GAP = 120, 46, 26

# (file, icon box, text box, text cap top, text baseline) in source pixels
SPEC = {
    "reshapr": ("reshapr.png", (6, 6, 93, 96), (113, 0, 411, 102), 20, 78),
    "microcks": ("microcks.png", (0, 0, 375, 332), (420, 128, 1036, 221), 128, 221),
}

for name, (f, ibox, tbox, cap_top, base) in SPEC.items():
    src = Image.open(D / f).convert("RGBA")
    icon = src.crop(ibox)
    icon = icon.crop(icon.getbbox())
    icon = icon.resize((round(icon.width * ICON_H / icon.height), ICON_H), Image.LANCZOS)
    text = src.crop(tbox)
    bb = text.getbbox()
    text = text.crop(bb)
    top_in_crop = cap_top - (tbox[1] + bb[1])          # cap top inside cropped text
    scale = CAP_H / (base - cap_top)
    text = text.resize((round(text.width * scale), round(text.height * scale)), Image.LANCZOS)
    cap_top_px = round(top_in_crop * scale)
    out = Image.new("RGBA", (icon.width + GAP + text.width, ICON_H), (0, 0, 0, 0))
    out.paste(icon, (0, 0), icon)
    y = (ICON_H - CAP_H) // 2 - cap_top_px                # centre the capitals on the icon
    out.paste(text, (icon.width + GAP, y), text)
    out.save(D / f"{name}-aligned.png", optimize=True)
    print(name, out.size)
