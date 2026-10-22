# SOLAR State Registry Matrix UI Requirements v0.1

**Status:** Prototype requirements  
**Applies to:** Reader-facing 50-state matrix  
**Companion spec:** `matrix-schema-v0-1.md`

## 1. Matrix orientation

States are represented on the vertical (`y`) axis. Decision factors are represented on the horizontal (`x`) axis.

Reason: the matrix will eventually contain all 50 states but a relatively stable set of core comparison factors. Users should be able to scan down states, isolate one state, or compare a selected subset while horizontally exploring the factors that matter to them.

## 2. Sticky axis labels

The matrix must preserve context during two-dimensional scrolling:

- the top factor-header row remains visible during vertical scrolling;
- the left state-name column remains visible during horizontal scrolling;
- the top-left `State` corner cell remains above both sticky axes.

This is a functional requirement, not decorative polish. A user should never have to infer which state or factor corresponds to a visible cell.

## 3. State search

Provide a simple state search that filters the matrix by state name or postal abbreviation.

Primary use case: isolate a single state without scrolling through the full matrix.

The search should work together with comparison selection rather than replacing it.

## 4. State comparison selection

Users must be able to select a subset of states and display only those rows.

Minimum behavior:

- multi-select states;
- select all;
- clear all;
- combine selection with text search;
- show the number of currently visible states.

A later version may support shareable URL parameters such as `?states=OR,FL,TN` so a comparison can be bookmarked or shared.

## 5. Cell drill-through architecture

Every substantive matrix cell should ultimately be a drillable link.

Required evidence chain:

`Matrix cell → exact supporting section on individual state page → official supporting source(s)`

The matrix itself should remain concise. Detailed explanation belongs on the state page, where the user can see scope, exceptions, practical meaning, confidence, and source links.

### Cell data additions

Each cell should eventually support:

- `detailHref` — canonical state-page URL;
- `sourceAnchor` — stable section ID for the exact supporting topic;
- `sourceTopics` — STF topic/source keys used to derive the normalized value.

Conceptually:

```yaml
riskResponsiveness:
  value: high
  valence: favorable
  confidence: high
  detailHref: /resources/state-registry/states/oregon
  sourceAnchor: risk-classification
  sourceTopics: [12, 14]
```

The rendered link would resolve to:

`/resources/state-registry/states/oregon#risk-classification`

## 6. No fabricated anchors

Do not create matrix links to section anchors until the target state pages expose stable IDs for those sections.

During prototyping, linking a cell to the top of the corresponding state guide is acceptable, provided the UI makes clear that exact evidence-section drilldown is not yet implemented.

## 7. State-page requirements created by the matrix

To support exact drilldown, individual state pages should eventually expose stable anchored sections corresponding to the matrix concepts, including at minimum:

- residence restrictions;
- protected-place / distance rules;
- presence restrictions;
- local authority / preemption;
- classification method;
- risk responsiveness;
- public posting;
- address exposure;
- routine verification;
- change deadlines;
- duration;
- removal;
- reclassification / burden responsiveness.

Those sections should then link to official statutes, administrative rules, agency guidance, cases, or other controlling/authoritative sources already captured by the State Truth File.

## 8. Relationship to the State Truth File

The navigation chain does not alter the research hierarchy.

The matrix is still derivative of the State Truth File. The public state page is the reader-facing explanation of that research. Official sources remain the evidentiary endpoint.

The intended hierarchy is:

`Official sources → STF research layer → state-page explanation → normalized matrix cell`

The reader-facing navigation runs in the opposite direction:

`Matrix → state-page explanation → official sources`

## 9. Prototype behavior locked for testing

The current three-state prototype should demonstrate:

1. states on rows;
2. factors on columns;
3. horizontal scrolling;
4. sticky factor headers;
5. sticky state labels;
6. state-name search;
7. multi-state comparison selection;
8. visible valence treatment;
9. clickable cells leading to the corresponding state guide;
10. explicit notice that exact evidence anchors are a forthcoming layer.

These interaction requirements should be tested with Florida, Oregon, and Tennessee before scaling to the full state set.
