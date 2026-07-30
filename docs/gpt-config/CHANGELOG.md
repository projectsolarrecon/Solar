# SOLAR GPT Configuration Changelog

## 2026-07-30 — Canonical configuration foundation

### Added

- Cross-workflow GPT configuration directory and deployment model.
- Shared repository-awareness standard.
- Shared mobile-delivery standard.
- Draft metadata-driven blog architecture standard.
- Preserved July 2026 Editorial GPT Instructions baseline.
- Preserved July 2026 Output GPT Instructions baseline.
- Editorial and Output knowledge manifests.
- Initial paired regression-test suite.

### Intentionally not changed

- No live Custom GPT configuration was replaced.
- No supplied knowledge document was rewritten or deleted.

## 2026-07-30 — Blog collection architecture implemented in PR #41

### Added and changed

- Moved pathway definitions and formal-series metadata into `src/data/blogCollections.ts`.
- Defined topics as exhaustive subject browsing, guided collections as selective ordered reading routes, and formal series as connected installments.
- Established stable canonical pathway and series IDs.
- Renamed reader-facing pathway titles to emphasize reader questions and journeys rather than duplicate category labels.
- Made topic and series browsing mutually exclusive by default.
- Suppressed the full guided-collection rail while a filter is active, with a compact option to reopen it.
- Added mobile horizontal snap scrolling for guided collections.
- Updated the canonical architecture and regression tests so GPTs must verify IDs, may return no pathway placement, and may not invent or silently create a pathway.

### Deployment boundary

- The July 2026 baseline Instructions remain unchanged as historical snapshots.
- Revised Editorial and Output Instructions will be created as new versioned files after PR #41 is merged and validated.
- The live Custom GPTs should not be manually updated until those replacement deployment files are ready.

### Next planned phase

1. Validate and merge PR #41.
2. Add reusable per-article series identity and previous/next navigation.
3. Derive verified component and metadata documentation from the merged repository.
4. Create revised, character-counted Instructions files and consolidated runtime knowledge packages.
5. Run the regression suite before manual Custom GPT deployment.
