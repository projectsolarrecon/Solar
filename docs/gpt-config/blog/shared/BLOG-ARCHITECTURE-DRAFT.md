# SOLAR Blog Architecture — Draft Canonical Standard

**Status:** Draft pending repository implementation and user approval.

## Governing model

Topics organize the archive. Series organize connected publications. Reader pathways organize understanding. One central post catalog should power all three.

## Reader-facing concepts

### Primary category

The post's single broad topical shelf. Existing canonical categories remain unchanged unless separately approved.

### Tags

Supporting subject labels. Tags do not create visible pathway membership and are not substitutes for categories or formal series.

### Formal series

An intentionally connected and ordered body of publications. A formal series requires a stable ID and installment order.

Initial formal series planned for migration:

- `institutional-danger`
- `follow-the-money`

### Reader pathway

A curated guided-reading route for a reader need or argument. A post may belong to multiple pathways, but pathway membership should remain editorially selective.

## Central metadata principle

Category, tags, series membership, series order, pathway membership, and revision history belong in the central blog-post catalog or an associated canonical data layer.

Individual article TSX files should not contain duplicate pathway membership arrays or hand-maintained collection links merely to remain in a pathway.

## Proposed post metadata

The exact TypeScript interface must be finalized against the implementation. The intended model includes optional fields equivalent to:

```ts
series?: {
  id: string;
  order: number;
  installmentLabel?: string;
};
pathways?: string[];
originalDate?: string;
updatedDate?: string;
revisionStatus?: "original" | "lightly-updated" | "substantially-revised" | "replacement";
```

Do not deploy these fields through a Custom GPT until the live repository supports them.

## Collection definitions

Pathway and series display definitions should live outside `Blog.tsx` in a canonical data/config module. Collection definitions may include:

- ID, title, description, and type;
- pinned post IDs;
- inclusion rules;
- exclusion IDs;
- maximum visible items;
- ordering rules.

Normal post publication should not require hand-editing title/path duplicates inside `Blog.tsx`.

## Hybrid pathway curation

Pathways should not become uncontrolled tag archives. The intended resolver may combine:

- deliberately pinned posts;
- direct pathway IDs assigned in post metadata;
- approved inclusion rules for formal series;
- explicit exclusions;
- size limits and curated order.

## Formal series experience

A formal series should support:

- visible series identity;
- ordered installment list;
- series landing view;
- previous/next installment navigation;
- link to the complete series;
- revised-publication disclosure where relevant.

## Revision and republication

Whenever practical, substantially revised older posts should preserve their existing route and disclose both the original and current publication dates.

Route treatment must be explicit in the editorial handoff:

- preserve existing route;
- create new route;
- redirect required.

## Transitional rule

Until this architecture is implemented in the live codebase, the current `Blog.tsx` pathway arrays remain operational. New GPT instructions must not claim that metadata-driven collection behavior exists before the code is merged.
