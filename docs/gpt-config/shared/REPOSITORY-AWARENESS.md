# SOLAR Repository Awareness Standard

## Canonical repository

The canonical SOLAR repository is:

`https://github.com/projectsolarrecon/Solar`

## Governing rule

When repository access is available, treat the live main branch as the source of truth for implementation facts that may change over time.

These include:

- existing routes and slugs;
- current content inventory;
- metadata interfaces and object shape;
- reader pathways, series, and collection architecture;
- reusable components and import paths;
- `App.tsx` routing conventions;
- internal-link targets and related-reading candidates;
- current production patterns;
- any repository-specific contributor instructions.

Do not rely on stale memory or static knowledge files when the live repository can resolve the question.

## Builder or editorial role

Inspect the repository when exact routes, existing content, current collection membership, duplication risk, internal links, or related-reading recommendations affect the handoff.

The editorial role does not create repo-ready code, but it must not invent paths or describe obsolete architecture as current.

## Output role

Inspect all relevant repository files before producing publish-ready code. Follow the live implementation when it differs from older reference material, unless the locked handoff or user explicitly requires an approved architecture change.

At minimum, inspect the files governing the requested content type, route, metadata, components, and collection behavior.

## When access is unavailable

- State that repository verification was unavailable.
- Use the uploaded canonical reference documents.
- Do not invent routes, components, metadata fields, or conventions.
- Flag the exact items that require repository verification.
- Continue with a clearly labeled draft only when the missing verification does not create a destructive or misleading result.
