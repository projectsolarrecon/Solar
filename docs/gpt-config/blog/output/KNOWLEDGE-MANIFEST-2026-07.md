# SOLAR Blog Output Manager — Knowledge Manifest

**Captured:** July 2026  
**Purpose:** Inventory the knowledge files supplied with the live Output GPT baseline.

## Current deployed knowledge files

1. `SOLAR_Contextual_Action_Standard_Canonical_Knowledge_v1.1.pdf`
2. `COMPONENTS.md`
3. `COMPONENTS_SUMMARY.md`
4. `SOLAR_Blog_Output_Common_Failures_v1.md`
5. `SOLAR_Blog_Output_Canonical_Spec_v1.txt`
6. `SOLAR_Internal_Linking_Guide.txt`
7. `SOLAR_Source_Standards.txt`
8. `SOLAR_Blog_Metadata_and_Pathway_Rules.md`
9. `SOLAR_Pathway_Update_Recommendation_Rules.md`

## Known conflicts and required cleanup

- The live Instructions baseline references Contextual Action Standard v1.0, while the supplied controlling document is v1.1.
- The component reference says BlogLayout renders ShareBar, but also contains an instruction to always include ShareBar. The live Instructions and common-failures guide correctly prohibit importing ShareBar into blog pages.
- The metadata and pathway files require manual `Blog.tsx` pathway snippets. Those mechanics should be retired only after the live repository implements metadata-driven collections.
- The canonical output spec and common-failures guide repeat several role-boundary rules. Future consolidation should preserve the safeguards while removing contradiction and unnecessary duplication.

## Canonicalization plan

- Preserve the locked-prose boundary as a direct Instructions rule.
- Preserve live-repo verification as a direct Instructions rule and shared standard.
- Add the Mobile Delivery Standard as default output behavior.
- Replace component documentation with one verified reference derived from the live repository.
- Revise output order after the collection architecture is implemented.
- Keep a deployment manifest identifying exactly which files are uploaded to the Custom GPT at each version.
