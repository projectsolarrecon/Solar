# SOLAR Blog Architecture — Canonical Standard

**Effective:** 2026-07-31  
**Repository baseline:** `main` after squash merge of PR #41

## Governing model

- **Topics** organize the complete archive by one primary category.
- **Guided collections** recommend a selective, editorially ordered journey for a reader need or argument.
- **Formal series** organize intentionally connected publications in installment order.

A category match never creates guided-collection membership automatically.

## Canonical categories

Every post has exactly one:

- Systemic Accountability
- Prevention & Public Safety
- Registry Policy & Reform
- Reentry & Reintegration
- Incarceration & Prison Reality
- Legal Process & Defense
- Families & Support Systems
- Research & Evidence Literacy
- Institutional Abuse
- Legislative & Policy Tracking

Tags are supporting labels, not additional categories.

## Canonical guided-collection IDs

Only assign IDs verified in `src/data/blogCollections.ts`. Current IDs:

- `new-to-solar`
- `why-registries-fail`
- `what-real-prevention-requires`
- `institutional-abuse-and-trusted-access`
- `evidence-risk-and-recidivism`
- `for-families-and-supporters`
- `reentry-and-stability`
- `recon-and-unequal-accountability`

Pathways remain curated rather than exhaustive. A post should materially improve the sequence. `None` is a normal decision. A proposed new pathway requires explicit approval and a collection-definition change.

Display titles may change without changing stable IDs.

## Formal series

Current formal-series IDs:

- `institutional-danger`
- `follow-the-money`

Formal membership is objective publication metadata. An editorial label such as Evidence Literacy, RECON, or Stability Is Safety does not create formal-series navigation unless implemented as a formal series in the repository.

Formal-series articles receive shared UI automatically through `BlogLayout` and `BlogSeriesNavigation`: banner, installment progress, ordered list, complete-series link, and previous/next navigation. Individual article TSX must not duplicate it.

Legacy compatibility exists only for approved older routes that bypass `BlogLayout`. New and rewritten articles should use the standard layout.

## Central metadata

`src/data/blogCollections.ts` is authoritative for categories, pathways, formal series, per-post collection metadata, and resolvers.

Normal publication updates `blogPostCollectionMetadata`; it does not add duplicate pathway arrays to `Blog.tsx`.

Current collection fields include:

```ts
pathways?: BlogPathwayId[];
series?: {
  id: BlogSeriesId;
  order: number;
  installmentLabel?: string;
};
originalPublicationDate?: string;
revisedPublicationDate?: string;
```

Change collection definitions only for explicitly approved new collections, display-title changes, pinned-order changes, replacements, or removals.

## Reader interaction

Topic and formal-series filters are mutually exclusive. Selecting one clears the other and moves to results. Guided collections are suppressed while filtering but can be reopened. On mobile they use a horizontal snap rail; on larger screens a grid.

## Publication treatment

Treatment must be explicit:

- new post;
- companion post;
- revision preserving route;
- replacement or redirect;
- new route with archived original.

### New route with archived original

When approved:

1. Publish the current edition at a new route.
2. Keep the original route accessible without redirect unless explicitly instructed.
3. Remove the archived original from active formal-series metadata.
4. Assign the current edition the formal-series ID and installment order.
5. Update approved guided collections and preferred internal links to the current edition.
6. Add an archive notice linking to the current edition.
7. Add a reciprocal link to the original when required.
8. Clearly distinguish both versions in metadata and reader-facing copy.
9. Never leave both versions as competing active installments.

This is the anticipated approach for future Institutional Danger rewrites, subject to the locked handoff for each article.

## GPT rules

The Editorial GPT determines category, tags, selective pathway placement, formal-series status, sequence rationale, and explicit publication treatment. It may propose but not silently create a new collection.

The Output GPT verifies all IDs and routes, updates central metadata, relies on shared series UI, and stops before implementing invalid or destructive instructions. Missing optional pathway membership means no pathway; it is not a production blocker.

## Historical files

The July 2026 Instructions and the original draft architecture file remain historical records. This file is the production knowledge attachment for the deployable 2026-07-31 configuration.
