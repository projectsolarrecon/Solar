# SOLAR GPT Configuration

This directory is the version-controlled source of truth for SOLAR Custom GPT configuration.

It does **not** replace the Custom GPT runtime configuration. Approved instruction files must still be pasted into the GPT Instructions field, and approved knowledge documents must still be uploaded to the GPT Knowledge area.

## Configuration model

1. **GitHub canonical source** — master copies, diffs, changelogs, manifests, and regression tests.
2. **Custom GPT Instructions** — runtime role, behavior, boundaries, workflow, and output requirements.
3. **Custom GPT Knowledge** — runtime reference standards, schemas, guides, and internal documentation.
4. **Live SOLAR repository** — source of truth for routes, components, metadata shape, content inventory, and production conventions when repository access is available.

## Directory convention

- `shared/` contains standards that apply across multiple SOLAR GPT workflows.
- Each content family has its own directory, such as `blog/`, `accountability-watch/`, `legislative-tracker/`, and `resource-guides/`.
- Each content family may contain:
  - `shared/` — rules used by both builder/editorial and output GPTs.
  - `builder/` or `editorial/` — role-specific instructions and manifests.
  - `output/` — role-specific production instructions and manifests.

## Current scope

The first committed package captures the current SOLAR Blog Editorial GPT and SOLAR Blog Output Manager baselines, plus shared repository-awareness, deployment, mobile-delivery, handoff, and architecture documents.

Files labeled `BASELINE` preserve the configuration supplied in July 2026. They are not silently rewritten. Proposed replacements must be created as new versioned files and reviewed through a semantic diff before deployment.

## Deployment rule

Never edit a live Custom GPT by progressively compressing its current text. Start from the canonical file in this directory, revise the complete source deliberately, record the change, run regression tests, and then deploy the approved full replacement.
