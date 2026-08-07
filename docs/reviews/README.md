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
