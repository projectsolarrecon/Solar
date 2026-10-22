# SOLAR Blog Output — Repository and Component Reference

**Verified against `main`:** 2026-07-31 after PR #41

This file helps the Output GPT navigate the current repository. The live repository remains the source of truth.

## Core publication files

- `src/App.tsx`
  - Defines blog imports and routes.
  - Verify whether a requested route already exists before adding or replacing it.

- `src/data/blogPosts.ts`
  - Central blog-card catalog.
  - Follow the live object shape for title, excerpt, author, date, read time, category, tags, and path.

- `src/data/blogCollections.ts`
  - Canonical categories, guided pathways, formal series, per-post collection metadata, and collection resolvers.
  - Normal pathway and formal-series changes belong in `blogPostCollectionMetadata`.
  - Do not recreate pathway link arrays in `Blog.tsx`.

- `src/pages/Blog.tsx`
  - Consumes the central post and collection data.
  - Topic and formal-series filters are intentionally mutually exclusive.
  - Guided collections are resolved from central definitions.

## Standard article layout

- `src/components/layouts/BlogLayout.tsx`
  - Standard wrapper for modern blog articles.
  - Supplies SEO, hero, Back to Blog, article content area, and ShareBar.
  - Also supplies formal-series navigation through the shared series component.
  - Do not import or render ShareBar again inside a standard article.

Typical props must be verified from the live file before use. Current established fields include title, description, keywords, date, readTime, badge, lede, and children.

## Formal-series navigation

- `src/components/blog/BlogSeriesNavigation.tsx`
  - Reads the current route and central collection metadata.
  - Renders the formal-series banner, part progress, ordered installment list, complete-series link, and previous/next navigation.
  - Do not duplicate this UI inside article TSX.

- `src/components/blog/LegacySeriesRouteNavigation.tsx`
  - Temporary compatibility layer for approved legacy articles that bypass `BlogLayout`.
  - Do not add routes to this compatibility layer merely for convenience. Prefer standard `BlogLayout` for new or rewritten articles.

## Standard blog primitives

Import available primitives through `src/components/solar/index.ts` only after verifying the live exports.

Normal blog primitives:

- `BandHeader` — major article section headings.
- `Callout` — approved TL;DR, research, legal, policy, warning, or framing notes.
- `PullQuote` — exact approved prose selected for visual emphasis.
- `Divider` — sparing section separation.

Use restrained formatting. Do not turn ordinary paragraphs into custom cards or invent article-local component systems.

## Contextual action

Use the existing contextual-action component and canonical standard when the locked handoff approves one. Verify the current export and prop shape before implementation. Integrate it directly at the approved article location; do not return an unattached object.

## Components and patterns to avoid

Unless the live repo has deliberately changed:

- do not use `BlogContent`;
- do not use `BlogTemplate` or its legacy helper components;
- do not use or invent `SourceList`;
- do not import ShareBar into standard article pages;
- do not create a one-off local component for ordinary headings, callouts, pull quotes, source lists, or related reading;
- do not use resource-guide layout/components for a blog post.

## Source and link sections

Inline links remain where approved claims appear. A Data Sources section near the bottom should list the major sources used. Related Reading should normally contain two or three verified internal destinations when supplied.

## Publication treatments

### New article

Create the article page, App import and route, `blogPosts.ts` entry, and approved `blogCollections.ts` metadata.

### Revision preserving route

Update the verified existing article page and relevant metadata without creating a competing route.

### New route with archived original

Create the new page and route; retain the original route; move the active formal-series installment to the new route; update approved pathway/internal-link targets; add archive/current-edition cross-links; and ensure both versions are clearly distinguished.

## Final verification

Before delivering publish-ready output verify:

- page import path;
- App route;
- `blogPosts.ts` path and metadata shape;
- canonical category;
- pathway and series IDs;
- installment order uniqueness;
- internal routes;
- component imports and props;
- absence of duplicate title, ShareBar, or series navigation;
- archive or redirect behavior where applicable.
