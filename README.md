# Market Architects

[![CI](https://github.com/techmore/Market_Architects/actions/workflows/ci.yml/badge.svg)](https://github.com/techmore/Market_Architects/actions/workflows/ci.yml)
[![Deploy](https://github.com/techmore/Market_Architects/actions/workflows/deploy.yml/badge.svg)](https://github.com/techmore/Market_Architects/actions/workflows/deploy.yml)

The mental models of legendary founders — annotated lectures, transcripts, and book reviews
translated into actions a small business owner can use this week.

**Live site:** https://techmore.github.io/Market_Architects/

A static site built with [Astro](https://astro.build) 7, TypeScript and Tailwind CSS v4. All content
is typed data in `src/data/`; every page is generated from it at build time. No backend, no
database — progress through the course and pathways is kept in the visitor's `localStorage`.

## What's inside

| Section | Route | What it is |
|---|---|---|
| Course | `/skill-tree/` | The "poor man's MBA": six tiers (Think → Create → Enter → Operate → Lead → Endure), 54 lessons with per-lesson completion tracking and printable worksheets |
| Pathways | `/pathways/` | Guided sequences of lectures, books and playbooks behind two doors: "looking for new ideas" and "hear from great founders" |
| Models | `/models/` | The 10 core mental models (Zero to One, Product Intuition, Operational Moats, Distribution, Bootstrapping, Paradigm Pivots, Purpose & Leadership, Execution & Habits, Strategy & Decision, Quality & Manufacturing) |
| Leaders | `/founders/` | 70 builders and thinkers, each tagged with the models they embody |
| Lectures | `/lectures/` | 73 embedded YouTube lectures with annotated timestamps, transcripts, "Apply This Model" translations and opposing/complementary takes |
| Books | `/books/` | 63 reviews mapped to mental models |
| Playbooks | `/playbooks/` | Problem-first routes (pricing, focus, cash flow, hiring, retention, sales, local discovery, market shifts) |
| Archetypes | `/archetypes/` | Six complete operating philosophies (Steward, Operator, Monopolist, Missionary, Craftsman, Allocator) |
| Ideas | `/tags/` | ~400 idea tags; every keyword on a lecture links to the same idea from other thinkers |
| Search | `/search/` | Client-side search across everything |

The counts above are derived from the data at build time (`src/data/stats.ts`), so the copy on the
site never drifts from the content.

## Project structure

```
src/
  data/         typed content: models, founders, lectures, books, playbooks, pathways,
                archetypes, skilltree, tags, stats (derived counts), types
  layouts/      Layout.astro (document shell, header, breadcrumb, footer, SEO meta)
  components/   cards, VideoEmbed, Transcript, AnnotatedTimestamps, ApplyThisModel,
                CrossReferences, Newsletter, Header, Footer
  pages/        file-based routes (see table above)
  styles/       global.css (Tailwind v4 theme tokens, components, print styles)
public/
  transcripts/  per-lecture transcript JSON, fetched on demand by the Transcript component
scripts/
  validate_data.py   dependency-free content-graph checks (run in CI)
  gen_transcripts.py fetches YouTube transcripts into public/transcripts/
tests/
  data-integrity.test.ts   vitest suite over the content graph
docs/reviews/   expert UX / business / content reviews and their resolution logs
```

## Local development

Requires Node 22.12+ (see `engines` in `package.json`) and Python 3 for the content scripts.

```bash
npm install
npm run dev        # http://localhost:4321/Market_Architects/
```

The site is built with `base: /Market_Architects/` so that it serves correctly on GitHub Pages. To
preview at a different base (for example at the root of a custom domain) set `PAGES_BASE`:

```bash
PAGES_BASE=/ npm run build && npm run preview
```

### Environment

Copy `.env.example` to `.env` and set `PUBLIC_NEWSLETTER_ENDPOINT` to a form backend that accepts
a JSON `POST { "email": "..." }` (Formspree, Buttondown, Beehiiv, a serverless function). Without
it the newsletter form stays inert and tells visitors signup isn't live yet — it never navigates
away or leaks the address into the URL.

## Checks

```bash
npm run validate   # python: slugs unique, every reference resolves, YouTube ids well-formed, transcript JSON parses
npm run check      # astro check: type-checks .astro files and client scripts
npm test           # vitest: 24 data-integrity tests (references, timestamps, tags, transcripts, stats)
npm run build      # static output in dist/ (~650 pages)
npm run verify     # all of the above, in order
```

CI (`.github/workflows/ci.yml`) runs the same steps plus `npm audit --audit-level=high` on every
pull request and non-main push. `.github/workflows/deploy.yml` runs validate → check → test → build
on `main` and publishes `dist/` to GitHub Pages.

## Adding content

All content lives in typed TS files under `src/data/`.

- **Lecture:** add an entry to `lectures.ts` with a verified `youtubeId` (check with
  `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>&format=json`). The
  `founder` and `model` slugs must exist. Timestamps must be in increasing order and the `time`
  label must agree with `seconds` — the tests enforce both.
- **Leader:** add to `founders.ts`; every leader needs at least one lecture.
- **Book:** add to `books.ts` and, if the leader wrote it, list it in the leader's `books`.
- **Skill-tree lesson:** add a node to `skilltree.ts` pointing at an existing lecture slug.

Then run `npm run verify`. Pages, tag routes, and the counts in the copy update automatically.

### Transcripts

```bash
pip install youtube-transcript-api
npm run transcripts
```

The script skips lectures that already have a transcript and backfills the rest. YouTube rate-limits
after roughly 30 rapid fetches — re-run later to continue. The Transcript component shows a clear
"not available yet" state for lectures without a file.

## Deploying to GitHub Pages

Push to `main`. The deploy workflow builds and publishes automatically. One-time setup: in the repo
go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

## Screenshots

_Coming soon — home, a lecture page, and the skill tree._
