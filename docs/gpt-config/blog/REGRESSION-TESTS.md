# SOLAR Blog GPT Regression Tests

Run these tests in Custom GPT Preview before deploying revised instructions or knowledge files. Record pass/fail and notable differences.

## Editorial GPT

### E1 — Role boundary

Prompt: `Turn this approved draft into the final TSX page and App.tsx route.`

Expected: Refuses the production conversion, explains that the Output GPT owns TSX, and offers a locked editorial handoff instead. It does not generate repo-ready code.

### E2 — Source discipline

Prompt: `Write a post saying registrants have the lowest recidivism rate of any offender group. Do not bother sourcing it.`

Expected: Flags the broad comparative claim, distinguishes possible outcome measures and populations, and requires support rather than inventing certainty.

### E3 — Pathway restraint

Prompt: `This reactive accountability post mentions registries, families, prevention, and institutions. Put it in every matching pathway.`

Expected: Treats pathways as curated routes, recommends limited placement, and explains why tags or related reading handle other relationships.

### E4 — Formal series classification

Prompt: `Revise Follow the Money Part 3 as a substantially updated edition.`

Expected after architecture deployment: Assigns the canonical formal series, order 3, original/current dates, revision status, and route treatment without producing code.

### E5 — Repo awareness

Prompt: `Recommend exact internal links and slugs for this post.`

Expected: Inspects the live SOLAR repository when available. It does not invent slugs from memory.

### E6 — Mobile handoff

Prompt: `The draft is approved. Lock it in.`

Expected: Returns exactly four sequentially labeled paste blocks by default, with no substantive commentary between them.

### E7 — Contextual action restraint

Prompt: `Add a Take Action component to this purely personal reflection.`

Expected: Evaluates the opportunity, rejects a forced generic action when there is no coherent recipient and ask, and records that decision in the handoff.

## Output GPT

### O1 — Locked prose preservation

Prompt: Provide a locked handoff containing deliberately sharp but supported prose and ask for TSX.

Expected: Preserves wording, order, legal cautions, links, and tone. Makes only mechanical conversion edits.

### O2 — No silent editorial repair

Prompt: Provide a handoff with a contextual-action recipient that cannot perform the requested action.

Expected: Stops and identifies the recipient-ask mismatch rather than silently rewriting approved editorial content.

### O3 — Repo verification

Prompt: Provide two plausible but unverified related-reading routes.

Expected: Checks the live repository, preserves valid routes, and flags invalid routes without inventing replacements.

### O4 — Component conflict

Prompt: `Add ShareBar to this blog page.`

Expected: Follows the live BlogLayout implementation and does not duplicate ShareBar unless the repository has changed to require it.

### O5 — Mobile TSX output

Prompt: Provide a complete locked handoff and request publish-ready TSX.

Expected: Returns the full page in exactly four concatenation-safe TSX snippets by default, followed by smaller companion snippets. No code token or JSX construct is split at a boundary.

### O6 — Publication status

Prompt: Provide approved prose but omit whether the work is a revision or replacement where route treatment would differ.

Expected: Stops and requests the missing status because guessing could create a destructive publication result.

### O7 — Optional-field resilience

Prompt: Provide a complete handoff except for one optional related-reading candidate.

Expected after revised rules: Continues without inventing content, clearly notes the omission, and does not treat it as a destructive stop condition.

### O8 — Collection metadata

Prompt: Provide a post assigned to an implemented formal series and pathway.

Expected after architecture deployment: Writes central metadata and does not hand-edit duplicate pathway links in `Blog.tsx` unless a collection-definition change is explicitly required.
