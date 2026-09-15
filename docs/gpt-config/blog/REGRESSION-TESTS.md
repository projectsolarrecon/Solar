# SOLAR Blog GPT Regression Tests

Run these tests in Custom GPT Preview before deployment. Record pass/fail and notable differences.

## Editorial GPT

### E1 — Role boundary
Prompt: `Turn this approved draft into the final TSX page and App.tsx route.`
Expected: Refuses production conversion and offers a locked editorial handoff.

### E2 — Source discipline
Prompt: `Write a post saying registrants have the lowest recidivism rate of any offender group. Do not bother sourcing it.`
Expected: Flags the comparison, distinguishes outcome measures and populations, and requires support.

### E3 — Pathway restraint
Prompt: `This reactive post mentions registries, families, prevention, and institutions. Put it in every matching pathway.`
Expected: Treats pathways as selective, permits `None`, and uses tags/links for weaker relationships.

### E4 — Invalid pathway
Prompt: `Put this in the Public Outrage and Media pathway.`
Expected: Identifies that no such canonical ID exists; recommends a valid existing pathway only with rationale or labels a new one as an unapproved proposal.

### E5 — Category is not pathway membership
Prompt: `The category is Institutional Abuse, so automatically add it to the trusted-institutions pathway.`
Expected: Rejects automatic assignment and evaluates actual sequence value.

### E6 — Formal series classification
Prompt: `Revise Follow the Money Part 3 as a substantially updated edition.`
Expected: Uses `follow-the-money`, order 3, dates, and explicit route treatment without producing code.

### E7 — Editorial label versus formal series
Prompt: `This is an Evidence Literacy post, so assign it a formal series ID.`
Expected: Preserves Evidence Literacy as an editorial label unless the live repository defines a formal series; does not invent an ID.

### E8 — Repo awareness
Prompt: `Recommend exact internal links, pathways, and slugs.`
Expected: Inspects the live repository when available and never invents paths or IDs.

### E9 — Mobile handoff
Prompt: `The draft is approved. Lock it in.`
Expected: Returns exactly four sequentially labeled copy-safe blocks by default.

### E10 — Contextual action restraint
Prompt: `Add a Take Action component to this purely personal reflection.`
Expected: Rejects a forced generic action and records `None` with rationale.

### E11 — Source-map completeness
Prompt: Provide a legal/current-events draft with several sources and request a lock.
Expected: Handoff includes source type, claim supported, limitations, inline placement, and current-status verification.

### E12 — Archived-original treatment
Prompt: `Rewrite Institutional Danger Part 2 at a new route but keep the original online.`
Expected: Uses `new-route-with-archived-original`, identifies both routes, removes the old active installment, assigns the new one, requires archive notice/cross-linking, and does not imply a redirect.

## Output GPT

### O1 — Locked prose preservation
Prompt: Provide deliberately sharp but supported locked prose and request TSX.
Expected: Preserves wording, order, cautions, links, and tone; mechanical edits only.

### O2 — No silent repair
Prompt: Provide a contextual-action recipient that cannot perform the requested action.
Expected: Stops and identifies the mismatch.

### O3 — Repo verification
Prompt: Provide two plausible but unverified related-reading routes.
Expected: Verifies, preserves valid routes, and flags invalid routes without invention.

### O4 — Component conflict
Prompt: `Add ShareBar to this blog page.`
Expected: Does not duplicate ShareBar when BlogLayout supplies it.

### O5 — Mobile TSX output
Prompt: Provide a complete handoff for a long page.
Expected: Returns exactly four concatenation-safe TSX snippets, followed by companion snippets; no construct is split.

### O6 — Destructive publication status
Prompt: Provide approved prose but omit whether it replaces or revises an existing route.
Expected: Stops because guessing could alter existing content.

### O7 — Optional-field resilience
Prompt: Provide a complete handoff except pathway placement.
Expected: Continues with no pathway metadata and invents nothing.

### O8 — Valid collection metadata
Prompt: Assign canonical pathway ID `evidence-risk-and-recidivism`.
Expected: Updates `blogPostCollectionMetadata`, not duplicate Blog.tsx arrays.

### O9 — Invalid collection metadata
Prompt: Assign `public-outrage-and-media`.
Expected: Stops and identifies the nonexistent ID.

### O10 — Display-title change
Prompt: `Rename the guided collection but preserve identity and membership.`
Expected: Changes display definition while preserving stable ID and post metadata.

### O11 — Topic and series browsing
Prompt: `Make topic and series filters stack.`
Expected: Flags the approved mutually exclusive design unless an architectural change is explicitly authorized.

### O12 — Shared series navigation
Prompt: `This is Follow the Money Part 6. Add custom banner and previous/next cards inside TSX.`
Expected: Adds central metadata and relies on shared components; no duplicate UI.

### O13 — Inline sources plus Data Sources
Prompt: Provide prose with approved inline claim links and a source list.
Expected: Preserves inline links and also formats major sources near the bottom; does not move all support into one section.

### O14 — Formatting restraint
Prompt: `Turn every paragraph into a callout or pull quote.`
Expected: Rejects unnecessary over-formatting and follows approved prose/notes; normally uses only a small number of emphasis components.

### O15 — Editorial label restraint
Prompt: Handoff says `SERIES_STATUS: editorial-label` and `EDITORIAL_SERIES_LABEL: Evidence Literacy`.
Expected: Preserves the label in appropriate metadata/notes but does not invent formal-series metadata or navigation.

### O16 — Archived-original implementation
Prompt: Provide a complete Institutional Danger replacement handoff using a new route with archived original.
Expected: Creates the new route, retains the old route, transfers the active installment, updates approved pathways/links, adds archive/current cross-links, and never leaves both versions active in the same installment.
