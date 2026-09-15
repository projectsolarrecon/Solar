# SOLAR Blog GPT Configuration Audit

**Date:** 2026-07-31  
**Scope:** July 2026 deployed baselines and knowledge packages compared with the 2026-07-31 deployable candidates.

## Verdict

The new Instructions are materially better aligned with the live repository, but the initial PR #42 draft compressed several useful safeguards. Those safeguards have now been restored either directly in Instructions or assigned to a retained canonical knowledge file.

The old knowledge packages must not be copied forward unchanged. Several files contain obsolete manual `Blog.tsx` pathway mechanics or stale component guidance.

## Editorial GPT crosswalk

### Preserved directly

- Editorial versus production role boundary.
- Idea → angle brief → source map → outline → draft → revision → locked handoff workflow.
- Accountability/hypocrisy lens without forcing it.
- Evidence-based, legally careful, morally clear, person-first SOLAR voice.
- Primary-source preference and current-fact verification.
- Exactly one canonical primary category.
- Structural type and anchor-post role.
- Complete locked handoff and four-block mobile delivery.
- Contextual-action evaluation.

### Improved or intentionally replaced

- Pathways now use verified canonical IDs and may legitimately be `None`.
- Category relevance no longer implies pathway membership.
- Formal series are distinguished from thematic editorial labels.
- Manual `Blog.tsx` pathway instructions are replaced by central `blogCollections.ts` metadata.
- Publication treatment now covers route-preserving revision, replacement/redirect, and new-route-with-archived-original.
- Institutional Danger rewrites default to archived-original treatment only as an anticipated choice, not an irreversible rule.

### Restored after audit

- Alternative titles, search intent, and why-now analysis.
- Source-map limitations and claim-source matching.
- Distinctions among rearrest, reconviction, reoffense, and reincarceration.
- Internal-link quantity guidance, rationale, and stable-hub fallback.
- Related-reading rationale.
- Original and revised publication dates.
- Pull-quote/callout candidates.
- Explicit contextual-action decision field.
- Separate editorial-series-label field.

### Retained in knowledge rather than repeated fully

- SOLAR Project Primer.
- SOLAR Position Statement.
- SOLAR Editorial Tone Guide.
- SOLAR Source Standards.
- SOLAR Internal Linking Guide.
- Contextual Action Standard v1.1.

## Output GPT crosswalk

### Preserved directly

- Locked-prose boundary.
- No silent editorial repair.
- Live repository as source of truth.
- No invented routes, components, or metadata.
- BlogLayout and shared primitive use.
- No duplicate ShareBar.
- Internal and external link validation.
- Separate App import and route snippets.
- Blog-only scope.

### Improved or intentionally replaced

- `blogCollections.ts` replaces manual `Blog.tsx` pathway arrays.
- Formal-series metadata automatically drives shared banners and navigation.
- Optional-field omissions no longer stop production unnecessarily.
- Destructive route/archive decisions still require explicit instruction.
- New-route-with-archived-original has a complete implementation contract.
- Long TSX defaults to four concatenation-safe snippets.

### Restored after audit

- Preserve inline claim-support links as well as a Data Sources section.
- Data Sources required for materially sourced posts unless explicitly treated otherwise.
- Two to three verified Related Reading links when supplied.
- Formatting restraint: normally one to three combined callouts/pull quotes.
- Do not duplicate the title.
- Same-source/deeper-URL exception for source normalization.
- Editorial labels must not become formal series by inference.
- Contradictory optional metadata remains a stop condition.

## Knowledge-file disposition

### Retain

- `SOLAR_Contextual_Action_Standard_Canonical_Knowledge_v1.1`
- `SOLAR_Internal_Linking_Guide.txt`
- `SOLAR_Source_Standards.txt`
- `SOLAR_Editorial_Tone_Guide.txt`
- `SOLAR_Position_Statement.txt`
- `SOLAR_Project_Primer.txt`

### Replace or retire

- `SOLAR_Blog_Metadata_and_Pathway_Rules.md` — retire; manual pathway mechanics and old display labels are obsolete.
- `SOLAR_Pathway_Update_Recommendation_Rules.md` — retire; central metadata now governs placement.
- `COMPONENTS.md` and `COMPONENTS_SUMMARY.md` — replace with a live-repo-derived reference; the old files conflict on ShareBar and contain stale exports.
- `SOLAR_Blog_Output_Canonical_Spec_v1.txt` — replace; it predates central collections, formal-series navigation, archive treatment, and four-snippet mobile delivery.
- `SOLAR_Blog_Output_Common_Failures_v1.md` — its still-valid safeguards are now incorporated into Instructions and the revised repo reference.
- `SOLAR_Blog_Editorial_Process.txt` — retain only as historical detail or replace with the deployable Instructions; do not upload both when duplication creates ambiguity.

## Deployment recommendation

Do not deploy only the two Instructions files. Deploy each GPT with its new Instructions plus the exact manifest in its deployable knowledge manifest. Run the regression suite before replacing the current GPT configuration.
