# UX / UI Expert Review — Market Architects

**Reviewer role:** UI/UX expert (accessibility, information architecture, performance, interaction)
**Date:** 2026-08-07
**Method:** Static render audit of all 129 built pages, WCAG contrast computation on the design tokens, internal-link integrity scan (2,128 links), and HTML structure analysis. No live browser instrumentation (no Lighthouse/screenshots) was available this pass; mobile ergonomics below are inferred from class-level responsive behavior and should be re-verified with a browser.

---

## Executive summary

The site is visually strong and the information architecture is sound. The biggest risks are **accessibility** (no keyboard focus styles, one AA contrast failure, no skip link) and **homepage weight** (40 YouTube thumbnails on the first viewport stack). Fix the three High items below before anything else; the Medium items are polish that will materially lift perceived quality for the target audience (busy small-business owners on phones).

## Severity legend

- **High** — blocks or harms a meaningful user group (accessibility, performance, core task failure)
- **Medium** — reduces quality, clarity, or trust
- **Low** — polish / nice-to-have

---

## High findings

### H1. No visible keyboard-focus states
The compiled CSS contains exactly two `:focus` rules, both on the homepage search input (`focus:border-gold-500`, `focus:outline-none`). Every card, nav link, button, and filter chip relies on the browser default focus ring, which on this dark `#0a0c10` background is effectively invisible for many users — and `focus:outline-none` on the search input removes its ring entirely.

**Evidence:** `dist/_astro/*.css` → only `:focus` occurrences are `focus:border-gold-500:focus` and `focus:outline-none:focus`.

**Fix:** Add a global `:focus-visible` style in `src/styles/global.css`, e.g.:

```css
:focus-visible {
  outline: 2px solid var(--color-gold-400);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### H2. Door 02 CTA fails WCAG AA contrast
The "I want to hear from great founders" door button ("Start the journey →") uses `text-paper-50` (`#f6f1e6`) on the green gradient that bottoms out at `--color-green-500` (`#5f8a6a`). Measured contrast: **3.50:1** — fails AA for normal-size text (needs ≥4.5:1), passes only AA-large.

**Evidence:** computed from the Tailwind tokens (`#f6f1e6` vs `#5f8a6a` = 3.50:1).

**Fix:** Either darken the green (`#4c7358`) or use dark ink text on the green door to match Door 01 (which uses `text-ink-950` at 7.12:1 and passes AAA).

### H3. No skip-to-content link
Every page renders `<Header />` before `<main>`. Keyboard and screen-reader users must tab through the entire 6-item nav on every page load.

**Fix:** Add a visually-hidden skip link as the first element of `<body>` in `Layout.astro`:

```html
<a class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-ink-950" href="#main">Skip to content</a>
```

### H4. Homepage ships 40 YouTube thumbnails
The home page contains 40 `<img>` elements (all YouTube `mqdefault` thumbnails) and its HTML is ~127 KB before CSS/fonts. On mobile this is 40 network requests stacked behind the hero, delaying LCP and burning data for a reader who just wants one good lecture.

**Fix:** Show only `featured` (~13) on the home grid with a "Browse all 40 lectures" link, or add "Show more" pagination. Keep `loading="lazy"` (already present) and consider `decoding="async"`.

---

## Medium findings

### M1. No current-section indication in the nav
No `aria-current="page"` and no visual active state. On `/lectures/`, the "Lectures" nav item looks identical to the others. Add `aria-current` + a subtle underline/background for the active route (Astro can compute it from `Astro.url.pathname`).

### M2. Search is lecture-only and home-only
The search box exists only on the homepage and only filters lectures by title. A directory of 37 leaders, 28 books, and 4 playbooks has no way to be searched. Consider one global search (filtering across leaders, lectures, books, playbooks) or at minimum a search input on the books and leaders directories.

### M3. "Apply a Model" CTA label is ambiguous
The header button says "Apply a Model" but routes to `/playbooks/`. For the target audience the word "playbook" is far clearer than "apply a model." Rename to "Problem playbooks" or point it at `/pathways/` and call it "Start here."

### M4. Book covers are identical text blocks
All 28 books render as gradient tiles with the same type treatment, differentiated only by one of 5 background colors. In a scan-heavy grid this reads as sameness and makes the covers hard to tell apart at a glance. Consider: real cover art, a consistent but distinct spine-style treatment, or an accent by model.

### M5. Founder avatars are initials monograms
Every leader is a circular monogram. For a "hear from great founders" value proposition, real portraits (or commissioned illustrations) would add trust and make the directory feel human. This is the single highest-visual-impact improvement available. Note: avatars must be licensed appropriately; initials are a safe fallback.

### M6. Navigation is 6 top-level items + logo + CTA
At `md` breakpoint this is 6 links plus the brand plus a button. It fits, but on a 768–900px window it's tight. Consider consolidating Lectures under a "Library" dropdown or dropping one top-level item once search exists.

### M7. Lecture thumbnails are `mqdefault` (320×180)
On a 3-column desktop grid these upscale and look soft. `hqdefault` (480×360) doubles sharpness for ~the same cost.

### M8. Door-to-featured hierarchy on the homepage
The hero CTA row shows "Start a guided path" (primary) and "Browse 8 models" (ghost) — then a full-width "Which door" section immediately follows with two large cards that re-state the same choice. The hero CTAs and the doors compete. Recommend: hero CTA = the two doors directly, or make the hero CTAs "For new ideas" / "For founders" so there's one consistent framing.

---

## Low findings

### L1. No social/OpenGraph meta tags
Lecture and book pages won't produce rich link previews when shared (this is a sharing-heavy content site). Add `og:title`, `og:description`, `og:image` (use the YouTube thumbnail for lectures) in `Layout.astro`.

### L2. No `sitemap.xml` or `robots.txt`
129 static pages are fully indexable; add a sitemap for SEO.

### L3. Breadcrumbs absent on deep pages
Only single "← All X" back-links exist. A light breadcrumb (Home / Models / Zero to One) would help orientation on lecture/book pages. Low priority given the back-links.

### L4. Mobile menu is a plain expand/collapse
Functional, but a fade/slide and a full-height sheet would feel more native. Pure polish.

### L5. `loading="lazy"` on the hero-adjacent lecture cards
Lazy-loading is good; just ensure the 2–3 cards above the fold don't lazy-load (they should be eager) so the first row renders instantly.

---

## What's already working

- Single `h1` per page, correct landmark structure (`<header>`, `<main>`, `<footer>`).
- All 2,128 internal links resolve (no dead ends); styled 404 page.
- YouTube embeds use `youtube-nocookie.com` (privacy-first).
- Body text contrast is excellent — most text pairs measure AAA (e.g., `paper-300` on `ink-900` = 9.25:1; `gold-400` on `ink-950` = 8.97:1).
- Images carry descriptive `alt` text; cards are real links with visible hover states.
- Sticky "Apply This Model" sidebar on lecture pages is a genuinely good desktop pattern; it correctly stacks on mobile.
- 8-model filter chips + live search work without page reloads (dependency-free vanilla JS).
- Responsive grids collapse cleanly to single columns.

## Recommended iteration order

1. H1 focus states, H2 contrast fix, H3 skip link — 20 minutes, resolves the accessibility blockers.
2. H4 homepage image reduction — meaningful perf win.
3. M5 real portraits + M4 book covers — the two biggest visual-quality wins.
4. M1 nav active state, M2 search, M3 CTA rename — information architecture polish.
5. L1 og-tags + L2 sitemap when SEO matters.
