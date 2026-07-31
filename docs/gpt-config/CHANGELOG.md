# SOLAR GPT Configuration Changelog

## 2026-07-30 — Blog collection architecture implementation

### Added

- Central metadata-driven blog collection layer in `src/data/blogCollections.ts`.
- Canonical topic, guided-collection, and formal-series distinctions.
- Stable IDs for guided collections and formal series.
- Formal-series classification and installment order for Institutional Danger and Follow the Money.
- Reusable guided-collection rail and formal-series filter components.
- Mutually exclusive topic and series browsing modes.
- Mobile horizontal guided-collection rail with desktop grid behavior.
- Article-level formal-series banner, ordered installment list, complete-series link, and previous/next navigation through shared `BlogLayout` behavior.
- Canonical GPT rules preventing invented collection IDs and automatic pathway assignment from category matches.
- Regression coverage for shared series navigation and metadata-only article integration.

### Preserved

- Existing blog routes.
- Existing article prose and article TSX structures.
- Existing guided-reading order through pinned paths.
- Stable collection IDs even where reader-facing titles were improved.
- July 2026 Editorial and Output GPT Instructions as immutable historical baselines.

### Next planned phase

1. Validate and merge PR #41.
2. Create new versioned, character-counted Editorial and Output GPT Instructions based on the merged architecture.
3. Create consolidated runtime knowledge files and deployment checklists.
4. Run the full regression suite before manual Custom GPT deployment.

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

### Initial next phase

The initial planned next phase was implementation of the metadata-driven blog collection architecture, now represented by PR #41.
