# Market Architects

The mental models of legendary founders — annotated lectures, transcripts, and book reviews
translated into actions a small business owner can use this week.

## Structure

```
/src
  /data          → typed content: models, leaders, lectures, books, playbooks, pathways, tags
  /layouts       → Layout.astro (shell, header, footer)
  /components    → cards, VideoEmbed, Transcript, AnnotatedTimestamps, ApplyThisModel, CrossReferences, Newsletter
  /pages         → /, /pathways/*, /models/*, /founders/*, /playbooks/*, /books/*, /lectures/*, /tags/*
/public/transcripts → per-lecture transcript JSON (fetched on demand)
/scripts        → gen_transcripts.py (npm run transcripts)
```

- **/pathways** — the guided "unofficial pathway" layer: two entry doors ("looking for new
  ideas" / "hear from great founders") routing into 4 curated sequences of lectures, books,
  and playbooks
- **/models** — the 9 core mental models (zero-to-one, product-intuition, operational-moats,
  distribution, bootstrapping, paradigm-pivots, purpose-leadership, execution-habits,
  strategy-decision)
- **/founders** — directory of 63 leaders (builders + thinkers) with a Builders/Thinkers filter
- **/lectures** — 66 embedded YouTube lectures with annotated timestamps, transcripts,
  "Apply This Model" translations, and opposing/complementary takes
- **/tags** — 300+ idea tags; click every keyword to see the same idea from many thinkers
- **/playbooks** — problem-based routing (pricing, focus, cash flow, market shifts, hiring,
  retention, sales, local discovery)
- **/books** — 56 book reviews that matter, mapped to mental models

Transcripts are generated with `npm run transcripts` (uses the `youtube-transcript-api`
package; YouTube rate-limits after ~30 rapid fetches — re-run to backfill).

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
