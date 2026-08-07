# Market Architects

The mental models of legendary founders — annotated lectures, transcripts, and book reviews
translated into actions a small business owner can use this week.

## Structure

```
/src
  /data          → typed content: models, founders, lectures, books, playbooks
  /layouts       → Layout.astro (shell, header, footer)
  /components    → cards, VideoEmbed, AnnotatedTimestamps, ApplyThisModel, CrossReferences
  /pages         → /, /models/*, /founders/*, /playbooks/*, /books/*, /lectures/*
```

- **/models** — the 6 primary mental models (zero-to-one, product-intuition, operational-moats,
  distribution, bootstrapping, paradigm-pivots)
- **/founders** — directory of 17 leaders, each with bio, lectures, and cross-references
- **/lectures** — embedded YouTube videos with annotated 3–5 min timestamps, an “Apply This
  Model” small-business translation, and opposing/complementary founder takes
- **/playbooks** — problem-based routing (pricing vs incumbents, focus vs diversify, cash-flow
  survival, market shifts)
- **/books** — book reviews that matter, mapped to mental models

## Local dev

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in /dist
```

## Deploying to GitHub Pages

The repo includes `.github/workflows/deploy.yml`. Push to `main` and GitHub Actions will build
and publish to Pages automatically.

1. Create the repo on GitHub (`techmore/Market_Architects`) and push.
2. In the repo → **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
3. The workflow builds with `base: /Market_Architects/` (set in `astro.config.mjs`) so the site
   serves correctly at `https://techmore.github.io/Market_Architects/`.

To preview locally with the same base path:

```bash
npm run build
npx astro preview
# open http://localhost:4321/Market_Architects/
```

## Adding content

All content lives in typed TS files under `src/data/`. To add a lecture, add an entry to
`lectures.ts` with a verified `youtubeId` and the page is generated automatically. YouTube IDs
can be verified via `https://www.youtube.com/oembed?url=...&format=json`.
