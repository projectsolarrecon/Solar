# SOLAR Custom GPT Deployment Model

## Purpose

This document defines the relationship between the canonical files stored in GitHub and the runtime configuration used by SOLAR Custom GPTs.

## Governing distinction

### GitHub canonical source

GitHub stores the approved master copies, version history, semantic diffs, manifests, regression tests, and deployment records.

A file existing in GitHub does not automatically become active Custom GPT configuration.

### Instructions field

The live Instructions field controls role, behavior, tone, decision-making, boundaries, workflow, stop conditions, and required output format.

Core behavioral rules must remain directly stated in the deployed Instructions field. Do not depend on repository retrieval to teach a GPT its basic role.

### Knowledge uploads

Knowledge files provide reference standards, schemas, guides, taxonomies, component documentation, handoff contracts, and other internal source material.

Knowledge supports behavior established by the Instructions field; it does not replace the essential behavioral rules.

### Live repository

When accessible, the live `projectsolarrecon/Solar` repository is the source of truth for changing implementation facts, including routes, slugs, components, metadata shape, content inventory, import paths, and production patterns.

## Deployment sequence

1. Revise the canonical source in GitHub.
2. Record the reason and semantic effect in a changelog.
3. Count characters for the proposed Instructions field.
4. Run the relevant regression tests.
5. Produce a complete paste-ready Instructions replacement.
6. Identify exact knowledge files to add, replace, retain, or remove.
7. Deploy manually in the Custom GPT editor.
8. Test in Preview.
9. Record the deployed version and date.

## Preservation rule

Never create a new configuration by paraphrasing the previous live configuration from memory. Every revision must descend from the preserved canonical source.
