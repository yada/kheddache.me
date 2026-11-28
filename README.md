# kheddache.me

Personal site of Yacine Kheddache: one page with bio, projects (reShapr, Microcks), talks, recognition (Credly),
writing, press kit and a contact form. Static Astro site, deployed on Netlify.

## Edit content

Everything on the page comes from `src/data/site.ts`: add a talk, a post, a badge or an upcoming event there.

- Talk thumbnails: `public/img/talks/<youtube-id>.jpg`
  (`curl -o public/img/talks/<id>.jpg https://i.ytimg.com/vi/<id>/hqdefault.jpg`).
- Upcoming events hide themselves after their `end` date (at build time).
- Link preview image: `python3 -I scripts/og.py` rebuilds `public/og.jpg`.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deploy

Netlify builds `main` (`netlify.toml`) and gives a deploy preview for every pull request.
Contact form: Netlify Forms (form `contact`, honeypot field), notifications set in the Netlify dashboard.
Visitor stats: GoatCounter, site code `kheddache` (https://kheddache.goatcounter.com), set in `goatcounter` in `src/data/site.ts` (empty = no script; no cookies either way).
For AI agents: `/llms.txt`, `/sitemap.xml` and `/index.md` (Markdown copy of the page, built from `src/data/site.ts` by `src/lib/markdown.ts`); `Accept: text/markdown` on `/` returns the Markdown (Netlify Edge Function `netlify/edge-functions/markdown.ts`). Check with `npx afdocs check https://kheddache.me/ --sampling none` (one-page site: the default sampling caps the score at 59).
