# Business Analysis Review — Market Architects

**Reviewer role:** Business analyst / strategist (positioning, taxonomy, audience fit, coverage, growth mechanics)
**Date:** 2026-08-07
**Method:** Full content-audit of the data layer (37 leaders, 8 models, 40 lectures, 28 books, 4 playbooks, 4 pathways), mapping each against the stated audience ("small business owners") and the two entry modes. All counts and gaps below were verified against the source data.

---

## Executive summary

The strategic spine is right: organize by **way of thinking**, not by industry, and translate founder theory into actions a small business can take. The two-door "pathway" framing directly addresses the "buffet problem." Three strategic gaps stand out:

1. **Positioning tension** — the mental-model layer skews venture-scale (monopolies, blitzscaling, network effects), while the audience is local/SMB. The "Apply This Model" panels are doing the real bridge-building work; the taxonomy and playbooks need to meet the SMB audience halfway.
2. **Coverage imbalance** — 2 of 37 leaders are women, and the directory is missing the canonical names a general "business thinking" audience expects (Buffett, Walton, Schultz, Branson, Knight, Hsieh, plus founders like Oprah, Whitney Wolfe Herd, Melanie Perkins). Model 03 (Operational Moats) holds 8 leaders while three models hold 3.
3. **Zero conversion mechanics** — the site captures no email, tracks no progress, and gives nothing away (worksheets/checklists). It's a content asset with no funnel.

---

## Findings

### S1. Positioning tension: "small business owners" vs. venture-scale models [HIGH]
The tagline and hero promise the site is "for small business owners," but the model layer is dominated by venture narratives: **monopolies, blitzscaling, network effects, infrastructure monopolies, zero-to-one**. A plumber, agency owner, or local retailer will rarely fight for a monopoly or blitzscale.

- **What's working:** the "Apply This Model" panels on every lecture are exactly the right translation layer — they convert "own the niche" into "narrow your market until you own it," etc. This is the site's differentiation and should be treated as the crown jewel.
- **What's missing:** SMB-native models and content for the *operational* reality: pricing psychology, hiring your first employee, client retention, service delivery, local distribution. Today those only exist indirectly inside playbooks.

**Recommendation:** (a) add an SMB-operational playbook set (see S6), (b) add leaders who embody SMB-relevant strategy (see S3), (c) add a "local business" lens to model pages (e.g., a "What this looks like for a trade business" paragraph per model), and (d) feature "Apply This Model" in the marketing language — it is the real product.

### S2. Taxonomy imbalance across the 8 models [MEDIUM]
Verified leader counts per model:

| Model | Leaders |
|---|---|
| 03 Operational Moats | 8 |
| 01 Zero to One | 6 |
| 07 Purpose & Leadership | 5 |
| 04 Distribution | 5 |
| 06 Paradigm Pivots | 5 |
| 02 Product Intuition | 3 |
| 05 Bootstrapping | 3 |
| 08 Execution & Habits | 3 |

Model 03 is twice the size of the smallest models. Either split 03 (e.g., "Strategy & Positioning" vs. "Decision Science") or recruit leaders to the thin models.

### S3. Representation and canonical-name gaps [HIGH]
2 of 37 leaders are women (Sara Blakely — builder, Brené Brown — thinker). For an "exhaustive directory" this is a credibility gap that the audience will notice.

High-value additions (each fits an existing model and has canonical content):
- **Women founders/execs:** Oprah Winfrey (bootstrapping/media), Whitney Wolfe Herd — Bumble (distribution/bootstrapping), Melanie Perkins — Canva (product-intuition), Katrina Lake — Stitch Fix (product-intuition/data), Indra Nooyi (operational-moats/leadership), Arianna Huffington (purpose-leadership), Mary Barra (paradigm-pivots).
- **Canonical founder names missing:** Warren Buffett (operational-moats — pairs with Munger), Phil Knight (bootstrapping — he's a book, make him a leader), Howard Schultz (bootstrapping/distribution), Sam Walton (operational-moats), Richard Branson (distribution/brand), Tony Hsieh (purpose-leadership), Ray Kroc (operational-moats), Walt Disney (product-intuition).
- **SMB-adjacent thinkers:** Michael Gerber (E-Myth — execution), Mike Michalowicz (Profit First — cash flow), Chris Voss (negotiation — distribution/sales), David Allen (execution — GTD).

This grows the directory from 37 to ~50 and, more importantly, balances it.

### S4. The two-door model is strong but slightly artificial [LOW]
"I'm looking for new ideas" vs. "I want to hear from great founders" is an excellent onboarding metaphor, but real users want both. Keep the doors as the *entry* framing, but don't gate: every pathway page should cross-link to the other door (it already shows "Try the other door") and the home page should make it clear you can mix freely. The current implementation already does this well.

### S5. No conversion / engagement mechanics [HIGH]
The site is a read-only library with no way to: capture an email, save/bookmark, track pathway progress, download a worksheet, or subscribe to new lectures/books. For an audience of busy owners, this is a missed flywheel of its own.

**Recommendation:** (a) newsletter/email-capture in the footer + on lecture pages ("New annotated lectures weekly"); (b) a printable one-page worksheet per playbook (the playbooks are already structured as steps — they're 80% of a worksheet); (c) localStorage-based pathway progress ("Continue your path") surfaced on the home page.

### S6. Playbooks are the highest-value SMB asset — expand them [MEDIUM]
There are only 4 playbooks. These are the most SMB-relevant content on the site (pricing, focus, cash-flow, market shifts). The natural expansion set:
1. "Hire your first employee" (paradigm-pivots/operational-moats)
2. "Retain clients so they don't churn" (operational-moats/distribution)
3. "Set a sales process that isn't just your gut" (distribution/product-intuition)
4. "Price by value, not by hour" (bootstrapping/zero-to-one)
5. "Get discovered locally" (distribution/bootstrapping)
6. "Survive your own growth" (paradigm-pivots)

Each playbook should also link 1–2 books, not just lectures.

### S7. Person-page strategy layer is thin [MEDIUM]
Founder pages are strong on bio/lectures/cross-refs but lack a *strategic takeaway* — "the one idea to steal from this person." Add a "Core idea in one line" callout to each leader page; it makes the directory scannable and reinforces the two-door value proposition ("hear from great founders" = get their one idea).

### S8. Differentiation vs. incumbents is under-marketed [MEDIUM]
Stratechery, Farnam Street, and How to Take Over the World cover this territory. The defensible wedge is the **SMB translation layer** ("Apply This Model") + **problem-based routing** (playbooks). The homepage hero currently leads with "think in systems, not hustle" — fine — but the differentiating language ("we translate it for your business") should be visible above the fold.

### S9. Sourcing/attribution risk for real-person content [MEDIUM]
Quotes, years, and bio facts about real people are published without sources. A fact-checking pass and per-person source citations (book/URL) would protect credibility — especially as the directory grows toward 50 people. Add a `sources` field to the leader model.

### S10. Video sourcing quality [LOW-MEDIUM]
Most embeds are from official/premium channels (TED, Stanford GSB, Nordic Business Forum, Talks@Google, official channels). A few are third-party re-uploads (e.g., Jobs iPhone intro on a personal channel; Covey clip on an archive channel). Prefer official sources where available to reduce takedown risk.

### S11. Model-count identity [LOW]
The site moved 6 → 8 models. The "8 core mental models" framing is now consistent across home/models docs. Recommend settling it and using the number in marketing ("8 ways great founders think") — done consistently.

---

## What's already working

- **The two-door pathway layer** is the right answer to "less buffet, more pathway" — 4 routes, each with narrative connective tissue and cross-links to lectures/books/playbooks.
- **"Apply This Model" panels** are a genuine differentiator and the strategic heart of the product.
- **Model → leaders → lectures → books** hierarchy is coherent and lets users navigate by thinking style, by person, or by problem.
- **Founder cross-references** (complementary/opposing takes) create the "lively debate" feel and build the network — arguably the most unique asset.
- **Book reviews are decision-oriented** ("why it matters for a small business") rather than literary — on-brand.

## Recommended iteration order

1. S1 + S6: expand playbooks (6 more) and add an SMB lens to model pages — this most directly serves the stated audience.
2. S5: add email capture + pathway progress — turns the site into a business.
3. S3: add ~10-12 leaders (women founders + canonical names + SMB thinkers) — fixes the credibility gap and grows the directory to ~50.
4. S7: "core idea in one line" on every leader page.
5. S9 + S10: attribution and sourcing pass.
6. S2: rebalance the taxonomy.
