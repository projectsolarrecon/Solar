# SOLAR Blog Architecture — Canonical Collection Standard

**Status:** Implemented in draft PR #41. This document becomes the live production standard when that PR is merged.

## Governing model

Topics organize the archive. Formal series organize connected publications. Guided reader pathways organize understanding.

The reader-facing distinction is:

- **Topics:** show every article assigned to a broad subject.
- **Guided collections:** recommend a selective sequence for a reader who wants to understand an issue or does not know where to begin.
- **Formal series:** show intentionally connected publications in installment order.

Topics answer, “What subject do I want to browse?” Guided collections answer, “What should I read first and next?” Formal series answer, “What is the next installment?”

## Primary category and topics

Every post has exactly one canonical primary category. Topic filtering is broad and exhaustive: selecting a topic shows all posts assigned to that category, newest first.

Canonical categories remain:

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

A category is not a pathway. A category match never creates pathway membership automatically.

## Tags

Tags are supporting subject labels. Tags do not create visible pathway membership and are not substitutes for categories or formal series.

## Formal series

A formal series is an intentionally connected and ordered body of publications. It requires a stable ID and installment order.

Implemented formal series IDs:

- `institutional-danger`
- `follow-the-money`

Formal series membership is objective publication metadata. A post belongs only when it is an installment of that series.

### Article-level series experience

Formal-series articles receive their shared reader experience automatically through:

- `src/components/blog/BlogSeriesNavigation.tsx`
- `src/components/layouts/BlogLayout.tsx`

For a post with valid formal-series metadata, the layout renders:

- a series banner immediately below the article hero;
- the current installment position and total installment count;
- the series description;
- a collapsible ordered list of all installments with the current article identified;
- a link back to the blog with the complete series filter activated;
- previous and next installment navigation after the article body;
- first- and final-installment states where one direction is unavailable.

Individual article TSX files must not recreate these banners, lists, or previous/next links. The shared layout derives them from central metadata.

## Guided reader pathways

A pathway is a curated reading sequence built around a reader need, question, or argument. It is not an alternate category archive.

Pathway membership must be editorially selective. A post may relate to several subjects without belonging in every related pathway. Tags, internal links, and related-reading recommendations handle broader relationships.

Do not create a pathway for every topic. A pathway should exist only when SOLAR can offer a meaningful beginning, progression, and intended understanding.

### Canonical pathway IDs and display titles

Only the following IDs may be assigned without an explicitly approved collection-definition change:

- `new-to-solar` — **New to SOLAR? Start Here**
- `why-registries-fail` — **Why Registries Fail**
- `what-real-prevention-requires` — **What Real Prevention Requires**
- `institutional-abuse-and-trusted-access` — **How Trusted Institutions Miss and Shield Harm**
- `evidence-risk-and-recidivism` — **How to Read the Evidence Without Being Misled**
- `for-families-and-supporters` — **Someone You Love Has Been Accused or Convicted—Start Here**
- `reentry-and-stability` — **What It Takes to Rebuild a Stable Life**
- `recon-and-unequal-accountability` — **Why Is Lifelong Public Punishment Applied So Selectively?**

The stable ID controls metadata. Display titles may be refined without changing existing membership.

The formal series also appear as generated ordered collection cards using their series IDs. Do not confuse those generated cards with discretionary pathway assignment.

## Collection placement decision

Before assigning a post to a pathway, determine:

1. What reader need does this pathway serve?
2. Does the post materially advance that journey?
3. Where should it appear in the sequence?
4. Does it improve the pathway enough to justify added length?
5. Would a topic, tag, internal link, or related-reading link handle the relationship better?

Normal reactive posts should often receive no pathway assignment. Cornerstone explainers, onboarding posts, practical orientation pieces, and unusually strong pathway support posts are better candidates.

A proposed new pathway requires explicit user approval and a collection-definition change. The Editorial GPT must label it as a proposal, not emit an invented canonical ID. The Output GPT must stop before implementing an unapproved pathway.

## Central metadata implementation

Collection behavior is controlled in:

- `src/data/blogCollections.ts`

That module contains:

- canonical categories;
- stable pathway IDs and display definitions;
- formal series definitions;
- per-post collection metadata;
- pathway and series resolution functions.

`Blog.tsx` consumes resolved collections. Normal post publication must not add duplicated title/path entries directly to `Blog.tsx`.

Current metadata shape:

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

## Editorial GPT rules

The Editorial GPT must:

- use exactly one canonical primary category;
- distinguish category relevance from pathway placement;
- use canonical pathway IDs and current display titles from the live repository;
- recommend no pathway when none materially improves a guided sequence;
- provide a brief placement rationale and suggested order for every recommended pathway;
- never invent a pathway ID or imply that a proposed pathway already exists;
- identify formal series metadata only when the post is an actual installment.

The locked handoff should use:

- `PRIMARY_CATEGORY`
- `SECONDARY_TAGS`
- `READER_PATHWAYS` using canonical IDs plus display titles, or `None`
- `PATHWAY_PLACEMENT_RATIONALE`
- `SERIES_STATUS`: `formal` / `editorial-label` / `none`
- `SERIES_ID`, `SERIES_ORDER`, and `SERIES_INSTALLMENT_LABEL` when formal

Legacy fields `PATHWAY_UPDATE_NEEDED` and `PATHWAY_UPDATE_RECOMMENDATION` should be retired in the next deployed Instructions version.

## Output GPT rules

The Output GPT must:

- verify all supplied category, pathway, and series IDs against the live repository;
- reject or flag nonexistent IDs rather than inventing a close substitute;
- update `blogPostCollectionMetadata` in `src/data/blogCollections.ts` when approved collection metadata changes;
- never hand-edit duplicated pathway arrays in `Blog.tsx`;
- change `blogPathwayDefinitions` only for an explicitly approved new pathway, rename, curated-order change, replacement, or removal;
- preserve stable IDs when only reader-facing titles change;
- treat missing optional pathway membership as `None`, not as a stop condition;
- rely on `BlogLayout` for the shared formal-series banner and previous/next navigation;
- never duplicate article-level series navigation inside an individual article unless the shared architecture has explicitly changed.

## Reader interaction

Topic and series browsing modes are mutually exclusive by default. Selecting one clears the other and moves the reader to the matching results.

When a topic or series is active, the full guided-collection rail is suppressed so the result appears immediately. Readers may reopen it with a compact control.

On mobile, guided collections use a horizontal snap-scrolling card rail. On larger screens, they use a grid.

## Revision and republication

Whenever practical, substantially revised older posts should preserve their existing route and disclose both the original and current publication dates.

Route treatment must be explicit:

- preserve existing route;
- create new route;
- redirect required.

## Deployment boundary

The preserved July 2026 Instructions files are historical baselines and must not be edited. Revised deployed Instructions and knowledge packages must be created as new versioned files after PR #41 is merged and validated.
