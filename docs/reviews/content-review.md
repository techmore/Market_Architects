# Content Expert Review — Market Architects

**Reviewer role:** Content editor / curator (coverage per person, link integrity, video fidelity, topic completeness)
**Date:** 2026-08-07
**Method:** Per-person coverage audit against the original spec (bio, curated lectures, annotated timestamps, Apply This Model, cross-references, books), plus full YouTube link verification (all 40 embed IDs re-validated via oEmbed) and a book-mapping audit of all 37 leader pages (verified against the built HTML).

---

## Executive summary

Content quality per lecture is high and internally consistent: every one of the 40 lectures carries an embedded video, 3–4 annotated timestamps, an "Apply This Model" panel, 2 cross-references, keywords, and source metadata. **All 40 YouTube IDs resolve.** All 37 leaders have at least one lecture. The gaps are concentrated in three areas:

1. **Book layer is incomplete** — 15 of 37 leader pages show zero books, and the book-matching logic is too brittle (author-last-name only), so Naval's own book doesn't appear on his page.
2. **Original spec items missing** — full transcripts and audio snippets were in the blueprint but aren't built (we have timestamp annotations only).
3. **SMB-relevant canonical books are absent** — no Voss, Gerber, Michalowicz, Allen, Cialdini.

---

## 1. Video integrity — PASS

All 40 embedded YouTube IDs were re-validated via the oEmbed endpoint; **40/40 resolve**. Channels are mostly authoritative: TED / TEDx, Stanford GSB, Y Combinator, Talks@Google, Nordic Business Forum, a16z, Greylock, Stripe, Lex Fridman, official person channels (Naval, Cal Newport, Daily Stoic).

Sourcing watch-list (third-party re-uploads, low risk but worth swapping if an official copy surfaces):
- `jobs-iphone` — hosted on a personal channel ("John Schroter"), not Apple.
- `covey-be-proactive` — "YAPSS Archive" channel (archive of genuine footage).
- `rohn-exceptional-living` — a fan upload of the classic seminar (authentic content, non-official channel).
- `huang-resilience` — "Mikael Godal" (uncut Stanford GSB clip); the full Stanford GSB talk exists (`lXLBTBBil2U`) if a longer cut is preferred.

## 2. Per-person coverage matrix (37 leaders)

Legend: **L** = lecture(s) ✓ present; **B** = book linked on the person's page; **X** = gap.

| Leader | Lectures | Book on page | Book gap note |
|---|---|---|---|
| Peter Thiel | ✓ competition | ✓ Zero to One | — |
| Palmer Luckey | ✓ anduril | ✗ | No authored book; consider a "book about hard tech" or drop |
| Patrick Collison | ✓ blitzscaling + altman | ✗ | No authored book; add a book about Stripe/plumbing if desired |
| Steve Jobs | ✓ stanford + iphone | ✗ | **Add "Steve Jobs" (Isaacson)** — the definitive companion |
| Brian Chesky | ✓ design | ✗ | No authored book; okay to leave |
| Jony Ive | ✓ lessons | ✗ | Optional: "Designed by Apple in California" (authored) |
| Jeff Bezos | ✓ day1 + lex | ✗ | **Add "Invent and Wander"** (authored collection, 2020) |
| Charlie Munger | ✓ misjudgment | ✓ Poor Charlie's Almanack | — |
| Jensen Huang | ✓ resilience | ✗ | **Add "The Nvidia Way"** (2024, Tae Kim) as "book about" |
| Paul Graham | ✓ dont-scale | ✗ | **Add "Hackers and Painters"** (authored, 2004) |
| Marc Andreessen | ✓ time-to-build | ✗ | No authored book; acceptable |
| Reid Hoffman | ✓ blitzscaling | ✓ Blitzscaling | — |
| Sara Blakely | ✓ origin | ✗ | No authoritative bio exists; acceptable |
| Yvon Chouinard | ✓ sustainable | ✓ Let My People Go Surfing | — |
| Ben Silbermann | ✓ pinterest | ✗ | No authored book; acceptable |
| Andy Grove | ✓ interview | ✓ Only the Paranoid Survive | — |
| Marc Benioff | ✓ cloud | ✗ | **Add "Behind the Cloud"** (authored, 2009) |
| Simon Sinek | ✓ start-with-why | ✓ Start With Why | — |
| Brené Brown | ✓ vulnerability | ✓ Dare to Lead | — |
| Stephen Covey | ✓ be-proactive | ✓ The 7 Habits | — |
| John C. Maxwell | ✓ 5-levels | ✗ | **Add "The 5 Levels of Leadership"** (authored) |
| Patrick Lencioni | ✓ dysfunctions | ✓ Five Dysfunctions | — |
| Jim Collins | ✓ good-to-great | ✓ Good to Great | — |
| Peter Drucker | ✓ interview | ✓ The Effective Executive | — |
| Michael Porter | ✓ strategy | ✓ Competitive Strategy | — |
| Daniel Kahneman | ✓ fast-slow | ✓ Thinking, Fast and Slow | — |
| Ray Dalio | ✓ principles | ✓ Principles | — |
| Clayton Christensen | ✓ measure-life | ✓ Innovator's Dilemma | — |
| Naval Ravikant | ✓ get-rich | ✗ | **BUG: "The Almanack of Naval Ravikant" IS in the library but doesn't link** (author is Eric Jorgenson; matcher checks author last name only) |
| Adam Grant | ✓ originals | ✓ Originals | — |
| Seth Godin | ✓ ideas-spread | ✓ This Is Marketing | — |
| Malcolm Gladwell | ✓ spaghetti | ✓ The Tipping Point | — |
| Angela Duckworth | ✓ grit | ✓ Grit | — |
| Ryan Holiday | ✓ obstacle | ✓ The Obstacle Is the Way | — |
| James Clear | ✓ atomic-habits | ✓ Atomic Habits | — |
| Cal Newport | ✓ deep-work | ✓ Deep Work | — |
| Jim Rohn | ✓ exceptional-living | ✗ | **Add "The Art of Exceptional Living" or "Seven Strategies for Wealth & Happiness"** |

**Summary:** 22/37 have a linked book; 15 are missing (of which 7 have a real, addable authored book: Jobs→Isaacson, Bezos→Invent and Wander, Huang→Nvidia Way, Graham→Hackers and Painters, Benioff→Behind the Cloud, Maxwell→5 Levels, Rohn→Art of Exceptional Living, Ive→Designed by Apple). Adding those 7-8 books closes most of the gap.

### Book-matching logic bug [HIGH]
`founders/[slug].astro` derives books with `founder.name.split(" ").pop()` and matches against **author only**. Failures: Naval (Almanack authored by Eric Jorgenson), and any future "book about" entries (Isaacson's Jobs, Tae Kim's Nvidia Way). Fix: add an explicit `books: string[]` field to the founder model, or match against both author and title keywords.

## 3. Spec-fidelity gaps (original blueprint)

The blueprint called for four lecture features. Status:

| Spec item | Status |
|---|---|
| Embedded YouTube videos | ✅ 40/40 verified |
| Annotated 3–5 min timestamps | ✅ 3–4 per lecture, deep-linked to `&t=` |
| **Annotated full transcripts** | ⚠️ **Not built** — we have timestamp annotations but no transcript text |
| **Audio snippets** | ⚠️ **Not built** — no audio clips |
| "Apply This Model" side panel | ✅ 3 per lecture |
| Founder cross-referencing | ✅ 2 per lecture (complementary/opposing) |
| Book reviews that matter | ✅ 28 books, all with actionable takeaways |

**Recommendation:** add a `Transcript` component with a collapsible full-text transcript per lecture (structure now, populate later), and add an optional `audioUrl`/`spotifyId` field so podcast episodes can be embedded alongside video. Cross-references should also be added at the *founder* level ("People who think like this") and the *book* level, not just the lecture level.

## 4. Lecture/feature completeness per lecture — PASS with notes

Every lecture has: `summary`, `coreArgument`, `timestamps` (3–4), `applyThisModel` (3), `crossReferences` (2), `keywords`, `channel`, `source`, `year`, `length`. 

Notes:
- A few timestamp marks on long videos (e.g., the 2h17m Rohn seminar at `1:24:00`) are editorial approximations; flag for a verification pass rather than asserting exactness.
- `featured: true` is set on ~13 of 40; the home page currently renders all 40 (see UX H4), so the "featured" distinction is under-utilized. Use it to drive a curated "Editor's picks" row.
- Keywords are well-formed but are not clickable. Consider tag pages or a keyword filter to let users pivot between related ideas (e.g., all lectures tagged "compounding").

## 5. Book inventory gaps (canonical SMB titles absent) [MEDIUM]

The 28-book library skews to the same venture/leadership canon as the models. The SMB audience will expect these classics, all of which map cleanly to existing models:

| Book | Author | Model fit |
|---|---|---|
| Never Split the Difference | Chris Voss | distribution (sales/negotiation) |
| The E-Myth Revisited | Michael E. Gerber | execution-habits (systems) |
| Profit First | Mike Michalowicz | bootstrapping (cash flow) |
| Company of One | Paul Jarvis | bootstrapping |
| Rework | Fried / Heinemeier Hansson | bootstrapping / execution |
| Built to Sell | John Warrillow | operational-moats (selling your business) |
| Getting Things Done | David Allen | execution-habits |
| Influence | Robert Cialdini | distribution (persuasion) |
| The Personal MBA | Josh Kaufman | operational-moats (management breadth) |
| Traction | Gino Wickman | execution-habits (the Entrepreneurial Operating System) |

Adding 5–6 of these materially strengthens the "reviews that matter for small business" claim. Chris Voss, Michael Gerber, and Mike Michalowicz could also become new leaders (see business review S3).

## 6. Cross-link completeness

- **Lectures → founders, models** ✅ (breadcrumb chips and cards)
- **Lectures → books** ❌ lecture pages do not recommend companion books (except via model reading lists)
- **Playbook steps → lectures** ✅ (linked chips)
- **Playbook steps → books** ❌ playbooks only link lectures
- **Founder pages → cross-referenced thinkers** ❌ cross-refs live on lecture pages only
- **Model pages → books** ✅ (reading list via `booksByModel`)

**Recommendation:** add a `book` reference to playbook steps, and a "Companion reads" block on lecture pages (nearest book of the same model or same founder).

## 7. Model ↔ content alignment — PASS

Each of the 8 models has: philosophy, 3–4 core principles, key frameworks, epitome founders, lectures, and a reading list. Frameworks are backed by real lectures (e.g., model 04 lists "The Tipping Point" and "This Is Marketing," both of which have lectures). Model 03 is the widest and is where the taxonomy rebalance (business review S2) should start.

## Recommended iteration order

1. Fix the founder-book matching bug + add the 7-8 missing authored books (closes the largest visible gap).
2. Add a `Transcript` component slot and an optional `audioUrl` per lecture (spec fidelity).
3. Add 5-6 SMB canonical books (Voss, Gerber, Michalowicz, Allen, Jarvis, Cialdini).
4. Add lecture→book and playbook→book cross-links.
5. Add founder-level and book-level cross-references.
6. Verification pass on long-video timestamps; prefer official channels for the 4 third-party uploads.
7. Make keywords clickable (tag pages) and put the `featured` flag to work.
