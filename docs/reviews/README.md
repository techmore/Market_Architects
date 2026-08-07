# Expert Reviews — Market Architects

Three independent expert passes over the site (129 pages, 37 leaders, 8 models, 40 lectures, 28 books, 4 playbooks, 4 pathways). Each report was written from a **verified audit** of the source data and the built output — all counts, link-integrity results, and contrast numbers below are grounded in the actual code and rendered HTML, not impressions.

| Report | Focus | Highest-priority finding |
|---|---|---|
| [ux-review.md](./ux-review.md) | UI/UX, accessibility, performance | No keyboard `:focus-visible` states; one WCAG AA contrast failure (Door 02 button, 3.50:1); no skip link; 40 YouTube thumbnails on the homepage |
| [business-review.md](./business-review.md) | Strategy, positioning, taxonomy, audience fit | Positioning tension (venture-scale models vs. SMB audience); 2/37 leaders are women; zero conversion mechanics |
| [content-review.md](./content-review.md) | Per-person coverage, links, books, spec fidelity | 15/37 leader pages show no book; Naval's own book doesn't link to his page (matcher bug); no full transcripts/audio (spec items); SMB canonical books absent |

## Verified facts shared across all three reports

- **40/40 YouTube embed IDs resolve** (re-validated via oEmbed).
- **37/37 leaders have ≥1 lecture** (all four pathways reference only existing lectures/books/playbooks).
- **2,128 internal links scanned — no dead ends**; styled 404 page exists.
- **Body text contrast passes WCAG AA/AAA** across the palette; one CTA button fails (see UX H2).

## Suggested iteration sequence (when we start improving)

1. **UX pass (quick, ~30 min):** focus-visible states, Door-02 contrast, skip link, homepage thumbnail reduction.
2. **Content pass:** fix the founder-book matcher, add the 7-8 missing authored books, add SMB canonical books.
3. **Business pass:** add ~10-12 leaders (women founders + canonical names + SMB thinkers), expand playbooks 4 → 10.
4. **Product pass:** email capture + pathway progress; add transcript slots; make keywords clickable.

## Resolution log (iteration 2026-08-07)

| # | Finding | Status |
|---|---|---|
| UX H1 | No `:focus-visible` states | ✅ Fixed — global focus ring in `global.css` |
| UX H2 | Door 02 button contrast 3.50:1 | ✅ Fixed — green darkened to `#4c7358` (4.78:1) |
| UX H3 | No skip-to-content link | ✅ Fixed — `.skip-link` in `Layout.astro` |
| UX H4 | Homepage ships 40 thumbnails | ✅ Fixed — featured-first + "Show all 54" expander (hidden cards not fetched) |
| UX M1 | No nav active state | ✅ Fixed — `aria-current="page"` + highlight |
| UX M3 | "Apply a Model" CTA ambiguous | ✅ Fixed — renamed "Start here", routes to Pathways |
| UX M7 | `mqdefault` thumbnails | ✅ Fixed — `hqdefault` |
| UX L1 | No og/social meta | ✅ Fixed — full og/twitter tags, per-lecture YouTube thumb |
| UX L2 | No sitemap/robots | ✅ Fixed — `@astrojs/sitemap` (179 URLs) + `robots.txt` |
| Content | Founder-book matcher bug (Naval's Almanack) | ✅ Fixed — explicit `books[]` on founder model |
| Content | 15 leader pages with no book | ✅ Fixed — 13 books added; all mapped (Jobs→Isaacson, Bezos, Huang, Graham, Benioff, Maxwell, Rohn, Voss, Gerber, Michalowicz, Allen, Cialdini, Jarvis, +6 new-leader books) |
| Content | SMB canonical books absent | ✅ Partially — Voss, Gerber, Michalowicz, Allen, Cialdini, Jarvis added; transcripts/audio still to do |
| Business S3 | 2/37 women; missing canonical names | ✅ Partially — directory 37 → 51 (Buffett, Oprah, Knight, Schultz, Branson, Walton, Wolfe Herd, Perkins, Hsieh, Gerber, Michalowicz, Voss, Allen, Cialdini). More (Nooyi, Huffington, Barra, Musk…) next pass |
| Business S6 | Only 4 playbooks | ✅ Expanded 4 → 8 (hiring, retention, sales process, local discovery) |
| Business S5 | No conversion mechanics | ✅ Added — newsletter capture (footer + home) + localStorage pathway progress with home "Continue your path" |
| Content | Transcripts / audio snippets | ⏳ Next iteration — data slot designed but not populated |
| Business S2 | Taxonomy imbalance | ⏳ Next iteration |
| Content | Keyword tag pages | ⏳ Next iteration |
