# SOLAR State Registry Matrix Schema v0.1

**Project:** SOLAR 50-State Registry Project  
**Purpose:** Define the controlled comparison layer used to normalize State Truth File findings into a reader-facing 50-state matrix.  
**Status:** Prototype schema  
**Initial calibration states:** Florida, Oregon, Tennessee  

---

## 1. Core Design Principle

The matrix separates four different things that should never be collapsed into one label:

1. **Raw legal reality** — what the State Truth File actually says.
2. **Normalized category** — the controlled value used for cross-state comparison.
3. **Directional valence** — whether that feature is generally favorable, neutral/mixed, or unfavorable from the perspective of a registrant evaluating practical burden and opportunity.
4. **Confidence** — how strongly the STF supports the normalized value.

A matrix cell therefore should not be treated as a bare adjective such as “high,” “low,” “broad,” or “narrow.” Those words describe the legal architecture. They do not, by themselves, say whether the architecture is favorable.

### Governing valence rule

**SOLAR evaluates registry systems by whether they permit less restrictive outcomes, greater privacy, more individualized treatment, lower compliance burden, and realistic opportunities for reduced restrictions or relief over time.**

A feature is favorable when it creates a meaningful opportunity for a better outcome. It does not need to benefit every registrant to be classified as favorable.

Example: a risk-responsive classification system is structurally favorable even though a person classified at the highest risk level may still receive substantial restrictions. The favorable feature is that the state distinguishes among people and permits lower-burden outcomes for those who qualify.

---

## 2. Cell Data Model

Every substantive matrix variable should support the following fields:

| Field | Purpose |
|---|---|
| `rawFinding` | Short factual description derived from the STF. |
| `value` | Controlled normalized category used for comparison/filtering. |
| `valence` | `favorable`, `neutral-mixed`, or `unfavorable`. |
| `confidence` | `high`, `medium`, or `low`. |
| `scope` | Who the value meaningfully applies to: nearly all, most, many, some/certain, designation-specific, supervision-specific, etc. |
| `note` | One short explanatory sentence when the controlled value alone would mislead. |
| `sourceTopics` | STF topic numbers or source keys supporting the assignment. |

### Example

```yaml
riskResponsiveness:
  rawFinding: "Level I / II / III classification materially affects public posting, restrictions, and relief."
  value: "high"
  valence: "favorable"
  confidence: "high"
  scope: "all classified registrants, with consequences varying by level"
  note: "Individualized classification can materially reduce burden for lower-risk people."
  sourceTopics: [12, 14]
```

---

## 3. Valence Vocabulary

Use only three directional categories in v0.1:

### Favorable
The feature meaningfully permits or produces one or more of the following:
- lower public exposure;
- fewer blanket restrictions;
- lower reporting burden;
- greater individualized review;
- meaningful reclassification;
- meaningful termination or removal;
- more privacy;
- more housing, employment, education, family, or travel flexibility;
- greater ability for burden to decrease over time.

### Neutral / Mixed
Use sparingly. Reserve this for structures whose practical effect is genuinely balanced or cannot reasonably be characterized as favorable or unfavorable at the state-architecture level.

Do **not** use `neutral-mixed` merely because different registrants receive different outcomes. If the architecture creates a meaningful path to a better outcome, that feature may still be favorable.

### Unfavorable
The feature meaningfully creates or preserves one or more of the following:
- broad public exposure;
- blanket or expansive residence/place restrictions;
- frequent or unusually short reporting deadlines;
- marked identification;
- weak or nonexistent individualized review;
- little realistic path to reduced burden;
- lifetime or effectively lifetime registration without meaningful relief;
- expansive local overlays that make statewide rules less predictable;
- unusually broad data collection or disclosure.

---

## 4. Preferred-Direction Rule

Each variable has an explicit `preferredDirection` so that `high` and `low` are never assumed to have the same meaning across categories.

Controlled values:
- `higher`
- `lower`
- `categorical`
- `none`

Examples:

| Variable | Preferred direction | Reason |
|---|---:|---|
| Risk responsiveness | Higher | More individualized differentiation can reduce burden. |
| Public exposure burden | Lower | Less public disclosure is generally favorable. |
| Reporting frequency burden | Lower | Less frequent routine reporting is generally favorable. |
| Removal accessibility | Higher | Greater realistic access to termination is favorable. |
| Reclassification accessibility | Higher | Ability to move to a lower-burden status is favorable. |
| Residence restriction breadth | Lower | Narrower restrictions preserve more housing access. |
| Local-rule exposure | Lower | Less exposure to additional local restrictions improves predictability and access. |
| Deadline sensitivity | Lower | Longer, simpler deadlines reduce accidental noncompliance risk. |

---

# 5. Core Matrix Variables

The main 50-state comparison should remain compact enough to scan. v0.1 therefore defines **14 core decision variables**.

## M1. Overall Architecture

**Question:** What kind of registry system is this at the highest level?

**Controlled values:**
- `risk-classification-driven`
- `offense-designation-driven`
- `hybrid-risk-and-offense`
- `broad-public-offense-driven`
- `supervision-heavy`
- `local-overlay-heavy`
- `other-hybrid`

**Preferred direction:** `none`

**Valence:** Usually neutral/mixed by itself. Do not score the architecture label without looking at the variables beneath it.

**Assignment rule:** Use the shortest descriptor that best explains what drives the state’s major burdens.

---

## M2. Residence Restriction Breadth

**Question:** How broadly does statewide law restrict where registrants may live?

**Controlled values:**
- `none-blanket`
- `narrow`
- `conditional`
- `broad`
- `very-broad`

**Preferred direction:** `lower`

**Default valence mapping:**
- `none-blanket` → favorable
- `narrow` → favorable
- `conditional` → neutral-mixed or unfavorable depending on scope
- `broad` → unfavorable
- `very-broad` → unfavorable

**Important rule:** Distinguish statewide statutory restrictions from supervision-only restrictions and local ordinances.

---

## M3. Residence Distance / Protected-Place Burden

**Question:** Does the state use distance buffers, and how restrictive are they?

**Controlled values:**
- `none`
- `under-1000-ft`
- `1000-ft`
- `1500-to-2000-ft`
- `over-2000-ft`
- `multiple-or-variable`
- `non-distance-location-rule`

**Preferred direction:** `lower`

**Valence:** Generally becomes more unfavorable as geographic exclusion expands, but scope must remain separately visible.

**Note rule:** Always preserve who is actually subject to the buffer.

---

## M4. Presence / Place Restriction Breadth

**Question:** How broadly does statewide law restrict entering or remaining at schools, parks, playgrounds, child-care facilities, libraries, pools, youth events, or similar locations?

**Controlled values:**
- `none-blanket`
- `narrow-designation-specific`
- `conditional`
- `broad`
- `very-broad`

**Preferred direction:** `lower`

**Default valence:** Narrower and designation-specific restrictions are generally more favorable than blanket restrictions.

---

## M5. Local-Rule Exposure

**Question:** Can counties, cities, or other local governmental bodies materially add registry-related restrictions beyond statewide law?

**Controlled values:**
- `preempted-or-barred`
- `limited-specific-authority`
- `unclear`
- `allowed`
- `broad-local-overlay`

**Preferred direction:** `lower`

**Default valence mapping:**
- `preempted-or-barred` → favorable
- `limited-specific-authority` → neutral-mixed
- `unclear` → neutral-mixed with confidence flag
- `allowed` → unfavorable
- `broad-local-overlay` → unfavorable

**Important rule:** Do not confuse local ordinances with supervision, court orders, treatment rules, school/facility policies, housing-provider policies, or private leases.

---

## M6. Classification Basis

**Question:** What primarily determines the registrant’s category and burden?

**Controlled values:**
- `individual-risk-assessment`
- `offense-based`
- `designation-based`
- `court-designation`
- `hybrid`
- `no-meaningful-classification`

**Preferred direction:** `categorical`

**Valence:** This field is primarily descriptive. The favorable/unfavorable judgment belongs mainly in **Risk Responsiveness** and **Burden Responsiveness**.

---

## M7. Risk Responsiveness

**Question:** How much can individualized present-risk assessment materially change a person’s public exposure, restrictions, classification, or relief opportunities?

**Controlled values:**
- `none`
- `low`
- `moderate`
- `high`
- `very-high`

**Preferred direction:** `higher`

**Default valence mapping:**
- `none` → unfavorable
- `low` → unfavorable
- `moderate` → neutral-mixed
- `high` → favorable
- `very-high` → favorable

**Assignment rule:** Give credit when individualized risk can create a materially lower-burden outcome. Do not downgrade the feature merely because higher-risk people can receive higher burdens.

---

## M8. Public Posting Breadth

**Question:** How broadly are registrants placed on the state’s public internet registry?

**Controlled values:**
- `minimal-or-no-general-public-site`
- `risk-level-limited`
- `designation-limited`
- `most-adults-public`
- `nearly-all-public`

**Preferred direction:** `lower`

**Default valence mapping:**
- `minimal-or-no-general-public-site` → favorable
- `risk-level-limited` → favorable
- `designation-limited` → favorable or neutral-mixed depending on breadth
- `most-adults-public` → unfavorable
- `nearly-all-public` → unfavorable

---

## M9. Address Exposure

**Question:** What residential-location information is publicly displayed?

**Controlled values:**
- `none`
- `general-area-only`
- `partial-address`
- `full-address-conditional`
- `full-address-broad`

**Preferred direction:** `lower`

**Valence:** Less precise public residence disclosure is favorable; broad full-address disclosure is unfavorable.

---

## M10. Routine Reporting Burden

**Question:** How burdensome is scheduled in-person verification apart from change-trigger reporting?

**Controlled values:**
- `annual`
- `semiannual`
- `quarterly`
- `more-than-quarterly`
- `mixed-by-designation`

**Preferred direction:** `lower`

**Valence:** Annual is generally favorable relative to more frequent routine verification. `mixed-by-designation` should receive valence based on how much of the registry population faces higher frequency.

---

## M11. Change-Reporting Deadline Sensitivity

**Question:** How unforgiving are the ordinary deadlines for address, work, school, identifier, or similar changes?

**Controlled values:**
- `more-than-10-days`
- `7-to-10-days`
- `3-to-6-days`
- `48-hours-or-less`
- `multiple-short-deadlines`

**Preferred direction:** `lower`

**Default valence mapping:**
- `more-than-10-days` → favorable
- `7-to-10-days` → favorable or neutral-mixed
- `3-to-6-days` → unfavorable
- `48-hours-or-less` → unfavorable
- `multiple-short-deadlines` → unfavorable

**Important rule:** Preserve special deadlines such as internet identifiers separately in the detailed layer when they differ from the ordinary deadline.

---

## M12. Registration Duration Architecture

**Question:** Is registration time-limited, indefinite until relief, or effectively lifetime?

**Controlled values:**
- `fixed-term`
- `mixed-fixed-and-lifetime`
- `indefinite-until-relief`
- `lifetime-for-many`
- `lifetime-for-most`

**Preferred direction:** `lower`

**Valence:** Shorter and genuinely fixed duration is favorable; widespread lifetime duration is unfavorable. `indefinite-until-relief` should be interpreted alongside Removal Accessibility.

---

## M13. Removal Accessibility

**Question:** Is there a realistic statutory path to terminate registration?

**Controlled values:**
- `none-or-essentially-none`
- `exceptional-only`
- `narrow`
- `meaningful`
- `broad-and-meaningful`

**Preferred direction:** `higher`

**Default valence mapping:**
- `none-or-essentially-none` → unfavorable
- `exceptional-only` → unfavorable
- `narrow` → neutral-mixed
- `meaningful` → favorable
- `broad-and-meaningful` → favorable

**Assignment rule:** “Meaningful” means a real pathway available to a nontrivial group of otherwise ordinary registrants, not merely expungement, reversal, pardon, or an extremely rare exception.

---

## M14. Reclassification / Burden Responsiveness

**Question:** Can a person’s registry level, public exposure, or restrictions materially decrease over time through reassessment, conduct, or statutory reclassification?

**Controlled values:**
- `none`
- `minimal`
- `limited`
- `meaningful`
- `central-feature`

**Preferred direction:** `higher`

**Default valence mapping:**
- `none` → unfavorable
- `minimal` → unfavorable
- `limited` → neutral-mixed
- `meaningful` → favorable
- `central-feature` → favorable

**Assignment rule:** This is distinct from termination. A state can have meaningful reclassification even when registration remains long-term.

---

# 6. Secondary Comparison Variables

These should remain available for filters, expanded state comparison, and later scoring, but should not crowd the primary 14-column view.

## S1. Driver License / ID Marking
Values: `none`, `conditional`, `yes-broad`  
Preferred direction: lower.

## S2. Homeless / Transient Reporting Burden
Values: `ordinary`, `heightened`, `monthly`, `very-frequent`, `unclear`  
Preferred direction: lower.

## S3. Visitor / Temporary-Stay Sensitivity
Values: `high-threshold`, `moderate`, `low-threshold`, `very-low-threshold`, `unclear`  
Preferred direction: higher threshold.

## S4. Internet-Identifier Reporting Burden
Values: `none-general`, `limited`, `broad`, `broad-short-deadline`  
Preferred direction: lower.

## S5. International Travel Notice
Values: `standard-21-day`, `more-restrictive`, `less-restrictive`, `unclear`  
Preferred direction: categorical; primarily descriptive because federal overlay reduces state-to-state differentiation.

## S6. Vehicle / Vessel Reporting
Values: `none-or-minimal`, `conditional`, `broad`  
Preferred direction: lower.

## S7. Employment Restriction Breadth
Values: `none-blanket`, `narrow`, `conditional`, `broad`  
Preferred direction: lower.

## S8. Education / Campus Restriction Breadth
Values: `none-blanket`, `reporting-only`, `conditional`, `broad`  
Preferred direction: lower.

## S9. Family / Minor-Household Restriction Breadth
Values: `none-blanket`, `conditional-with-parent-exception`, `conditional`, `broad`  
Preferred direction: lower.

## S10. Public Data Breadth
Values: `limited`, `moderate`, `broad`, `very-broad`  
Preferred direction: lower.

---

# 7. Summary Lenses

The matrix should derive multiple summary lenses rather than collapse every state into one overall grade.

## Lens A. Daily-Life Restriction Burden

Primary inputs:
- M2 Residence Restriction Breadth
- M3 Distance / Protected-Place Burden
- M4 Presence / Place Restriction Breadth
- M5 Local-Rule Exposure
- S7 Employment Restriction Breadth
- S9 Family / Minor-Household Restriction Breadth
- S1 ID Marking

**Output labels:**
- `low`
- `moderate`
- `high`
- `very-high`

Preferred direction: lower.

---

## Lens B. Public Exposure Burden

Primary inputs:
- M8 Public Posting Breadth
- M9 Address Exposure
- S10 Public Data Breadth
- S1 ID Marking

**Output labels:**
- `low`
- `moderate`
- `high`
- `very-high`

Preferred direction: lower.

---

## Lens C. Compliance Burden

Primary inputs:
- M10 Routine Reporting Burden
- M11 Change-Reporting Deadline Sensitivity
- S2 Homeless / Transient Reporting
- S3 Visitor Sensitivity
- S4 Internet-Identifier Reporting
- S6 Vehicle / Vessel Reporting

**Output labels:**
- `low`
- `moderate`
- `high`
- `very-high`

Preferred direction: lower.

---

## Lens D. Exit / Improvement Outlook

Primary inputs:
- M7 Risk Responsiveness
- M12 Registration Duration Architecture
- M13 Removal Accessibility
- M14 Reclassification / Burden Responsiveness

**Output labels:**
- `poor`
- `limited`
- `meaningful`
- `strong`

Preferred direction: higher.

---

# 8. Scoring Rule for v0.1

Do **not** publish a single 1–50 ranking or one-number harshness score in v0.1.

The first version should expose:
- controlled values;
- directional valence;
- summary lenses;
- filters;
- short explanatory notes.

Any future numerical scoring system should be derived transparently from these controlled fields and should remain secondary to the underlying legal architecture.

---

# 9. Scope Rule

Every matrix value must preserve scope separately from valence.

Examples:

- A 1,000-foot rule affecting only a narrow offense/victim-age category should not be normalized the same way as a 1,000-foot rule affecting nearly all registrants.
- Level III-only public posting may be structurally favorable even though Level III registrants themselves experience high exposure.
- A termination pathway available to a meaningful lower-risk group remains favorable even though some offense categories are excluded.

Do not solve scope differences by weakening favorable features into “mixed” merely because not everyone qualifies.

---

# 10. Confidence Rule

Each cell receives a confidence value based on the underlying STF, not on how intuitive the normalized category seems.

### High
- controlling statewide law or authoritative agency rule is confirmed;
- scope is understood;
- no material contradiction remains.

### Medium
- core rule is supported but one important boundary, local overlay, or implementation detail remains unresolved.

### Low
- source support is incomplete, contradictory, stale, or dependent on unresolved local/practice questions.

**UI rule:** Low confidence should be visibly distinguishable from unfavorable valence. A red legal outcome and a low-confidence research state are different things.

---

# 11. Unknown / Validation Handling

Unknown values must not silently become neutral values.

Use:
- `requires-validation`
- `not-applicable`
- `insufficient-data`

These are data-quality states, not legal outcomes and not valence categories.

---

# 12. Prototype Calibration — Florida, Oregon, Tennessee

The initial three-state prototype should be used to test the schema because the states expose different architectures:

### Florida
- broad public posting;
- offense/designation-driven architecture;
- conditional statewide residence restriction plus substantial local-rule exposure;
- weak risk responsiveness;
- frequent/short reporting obligations;
- lifetime registration for most with narrow relief.

### Oregon
- Level I / II / III risk-classification architecture;
- no universal statewide residence-distance rule validated for all registrants;
- public posting strongly limited by classification;
- high risk responsiveness;
- meaningful reclassification/relief for qualifying lower-risk people;
- materially better exit/improvement architecture than Florida or Tennessee.

### Tennessee
- broad public posting;
- offense/designation-driven architecture;
- strong statewide residence/work restrictions;
- weak risk responsiveness;
- annual/quarterly verification with fast change deadlines;
- long-term/lifetime burden for many, with a real but narrower termination path.

These states should calibrate definitions, not predetermine scores for later states.

---

# 13. Recommended Data Shape

A future state matrix data object should conceptually resemble:

```yaml
state: Oregon
stateCode: OR
matrixVersion: 0.1
sourceTruthFile: docs/state-truth-files/oregon-state-truth-file-v1-1.md

core:
  residenceRestrictionBreadth:
    value: none-blanket
    valence: favorable
    confidence: high
    scope: "No universal statewide distance rule validated; higher-risk/supervised categories face targeted restrictions."

  riskResponsiveness:
    value: high
    valence: favorable
    confidence: high
    scope: "Level I / II / III classification materially affects public exposure and restrictions."

  publicPostingBreadth:
    value: risk-level-limited
    valence: favorable
    confidence: high
    scope: "Level III is the primary public-website category."

summaryLenses:
  dailyLifeRestrictionBurden: moderate
  publicExposureBurden: low
  complianceBurden: moderate
  exitImprovementOutlook: strong
```

The data implementation may ultimately use TypeScript or JSON, but the schema should remain conceptually independent of the rendering technology.

---

# 14. Matrix Extraction Rule

The matrix is a **derivative layer of the State Truth Files**.

Do not research matrix values independently when an STF exists. The workflow should be:

1. Read the current STF.
2. Extract the relevant controlling findings.
3. Assign normalized values using this schema.
4. Assign valence using the variable’s preferred direction and scope rules.
5. Assign confidence from the STF validation posture.
6. Preserve a short note when normalization loses material nuance.
7. Flag missing STF information rather than guessing.

The matrix should never become a competing legal truth source.

---

# 15. v0.1 Decisions Locked Unless Prototype Testing Shows a Problem

1. Descriptive value and directional valence are separate fields.
2. Valence uses `favorable`, `neutral-mixed`, and `unfavorable` only.
3. A feature can be favorable even when only qualifying registrants receive the better outcome.
4. Scope is represented separately and does not automatically dilute favorable valence.
5. Risk responsiveness is a core variable.
6. Reclassification/burden responsiveness is distinct from removal.
7. No single overall harshness ranking is used in v0.1.
8. Multiple summary lenses are preferred over one composite score.
9. Unknown/validation states are separate from neutral legal outcomes.
10. Matrix values are extracted from STFs rather than independently researched.
