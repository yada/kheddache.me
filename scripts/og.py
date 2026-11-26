"""Build public/og.jpg (1200x630 link preview) from the hero photo, avatar and logos.

Run: python3 -I scripts/og.py  (needs node + the social-visual render.mjs from my-skills, and sips on macOS)
"""
import base64, pathlib, subprocess, tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
IMG = ROOT / "public" / "img"
RENDER = pathlib.Path.home() / "orca/projects/my-skills/skills/social-visual/scripts/render.mjs"
W, H = 1200, 630


def data(p, mime):
    return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()


hero = data(IMG / "hero.jpg", "image/jpeg")
avatar = data(IMG / "avatar.jpg", "image/jpeg")
reshapr = data(IMG / "logos/reshapr.png", "image/png")
microcks = data(IMG / "logos/microcks.svg", "image/svg+xml")
badge = data(IMG / "logos/cncf-ambassador.svg", "image/svg+xml")

# hero is 2000x793: scale to height 630 -> width 1589, centre crop
svg = f"""<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{W}" height="{H}" viewBox="0 0 {W} {H}" font-family="Inter">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#121417" stop-opacity="0.15"/>
      <stop offset="0.45" stop-color="#121417" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#121417" stop-opacity="0.96"/>
    </linearGradient>
    <clipPath id="round"><circle cx="150" cy="190" r="92"/></clipPath>
  </defs>
  <rect width="{W}" height="{H}" fill="#121417"/>
  <image href="{hero}" x="-195" y="0" width="1589" height="630" preserveAspectRatio="xMidYMid slice"/>
  <rect width="{W}" height="{H}" fill="url(#fade)"/>
  <rect x="0" y="0" width="10" height="{H}" fill="#F5A524"/>
  <circle cx="150" cy="190" r="98" fill="#121417"/>
  <circle cx="150" cy="190" r="100" fill="none" stroke="#F5A524" stroke-width="3"/>
  <image href="{avatar}" x="58" y="98" width="184" height="184" clip-path="url(#round)" preserveAspectRatio="xMidYMid slice"/>
  <text x="60" y="372" fill="#F2F1EE" font-size="64" font-weight="700" letter-spacing="-1.5">Yacine Kheddache</text>
  <text x="60" y="420" fill="#C9CCD1" font-size="27" font-weight="500">Co-founder of reShapr &amp; Microcks · <tspan fill="#F5A524" font-weight="600">CNCF Ambassador</tspan></text>
  <image href="{reshapr}" x="60" y="490" width="{round(56*417/102)}" height="56"/>
  <rect x="{60 + round(56*417/102) + 28}" y="490" width="2" height="56" fill="#FFFFFF" fill-opacity="0.35"/>
  <image href="{microcks}" x="{60 + round(56*417/102) + 58}" y="486" width="{round(64*1017.91/331.5)}" height="64"/>
  <image href="{badge}" x="1010" y="468" width="{round(84*315.45/243.07)}" height="84"/>
  <text x="1140" y="60" text-anchor="end" fill="#F2F1EE" font-size="26" font-family="JetBrains Mono, Menlo" font-weight="500">kheddache.me</text>
</svg>"""

with tempfile.TemporaryDirectory() as t:
    s, png = pathlib.Path(t, "og.svg"), pathlib.Path(t, "og.png")
    s.write_text(svg)
    subprocess.run(["node", str(RENDER), str(s), str(png), str(W)], check=True)
    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "82", str(png), "--out", str(ROOT / "public/og.jpg")], check=True, capture_output=True)
print("wrote public/og.jpg")
