# Vermont State Truth File v1.1

**State:** Vermont  
**Conversion basis:** Existing SOLAR legacy state file plus targeted official-source gap research  
**Research mode:** STF v1.1 retrofit and gap-research mode  
**New research added:** Opened and inspected the legacy SOLAR Vermont file at `src/data/state-registry/vt.ts`; live-validated core Vermont statutes, VCIC registrant/registration/community-notification pages, and a local Rutland ordinance example.  
**Publication posture:** Reporting deadline-heavy state with category/court-based public posting, annual/SVP/noncompliant-high-risk cadence splits, no confirmed blanket statewide live/work/place exclusion, meaningful but limited public-notification relief, and local-ordinance validation flags.

## Repo Awareness Check

1. **Legacy file opened:** Yes. The file opened at `src/data/state-registry/vt.ts` through the GitHub/raw repo path.  
2. **Source of access:** repo connection via the user-provided GitHub repository URL.  
3. **Concrete facts from legacy file:**
   - The legacy file states out-of-state move-ins, workers, or students must register within **10 days** of establishing the relevant Vermont presence.
   - It states annual verification is by mail, returned within **10 days after the registrant’s birthday**, while **sexually violent predators verify every 90 days**.
   - It states changes to address, employment, postsecondary school, or legal name are generally due within **3 days**, with certain high-risk address changes due within **36 hours**.
   - It states Vermont has **no statewide residency or loitering zones** in the registry statute, while also preserving supervision and local-check caveats.
   - It states public website exposure is not universal and depends on offense/risk criteria.
4. **Legacy-file tension preserved:** The legacy file includes a strong highlight that cities/towns are not authorized and likely preempted from local buffer zones, but also says local rules are uncommon but possible. Live research found an enacted Rutland local ordinance. This STF therefore does **not** treat local preemption as confirmed; it marks local authority/enforceability as partially confirmed and requiring validation.

## 1. Source Key Map

| Source key | Source label | Official URL | Source type | What it supports | Confidence | Validation status |
|---|---|---|---|---|---|---|
| VT-S0 | Legacy SOLAR Vermont state file, `src/data/state-registry/vt.ts` | https://raw.githubusercontent.com/projectsolarrecon/Solar/main/src/data/state-registry/vt.ts | Legacy SOLAR source inherited | Conversion basis; prior SOLAR conclusions; warnings; visitor thresholds; practical gotchas | High for access; Medium for legal conclusions | Opened and inspected during this task |
| VT-S1 | 13 V.S.A. § 5401, Definitions | https://legislature.vermont.gov/statutes/section/13/167/05401 | Statute | Who is a sex offender; out-of-state/federal/military/tribal coverage; student/employment definitions; SVP definition | High | Live-validated during this task |
| VT-S2 | 13 V.S.A. § 5403, Reporting to Department of Public Safety | https://legislature.vermont.gov/statutes/section/13/167/05403 | Statute | Information collected at conviction: name, DOB, address, SSN, employment, postsecondary institution | High | Live-validated during this task |
| VT-S3 | 13 V.S.A. § 5407, Sex offender’s responsibility to report | https://legislature.vermont.gov/statutes/section/13/167/05407 | Statute | Initial 10-day out-of-state trigger; annual/SVP reporting; 3-day changes; 36-hour high-risk address changes; 10-year/lifetime duration; moving out | High | Live-validated during this task |
| VT-S4 | 13 V.S.A. § 5409, Penalties | https://legislature.vermont.gov/statutes/section/13/167/05409 | Statute | Penalties for knowing noncompliance; consecutive sentences; presumption of knowledge | High | Live-validated during this task |
| VT-S5 | 13 V.S.A. § 5411, Notification to law enforcement/local community | https://legislature.vermont.gov/statutes/section/13/167/05411 | Statute | Registry information release, community notification, town disclosure, address release by authorized law enforcement, lifetime registrant petition after 10 years | High | Live-validated during this task |
| VT-S6 | 13 V.S.A. § 5411a, Electronic posting | https://legislature.vermont.gov/statutes/section/13/167/05411a | Statute | Internet posting categories; what is posted; street address and victim identity limits; 38-month close-in-age public-posting exclusion; annual photo | High | Live-validated during this task |
| VT-S7 | 13 V.S.A. § 5411b, High-risk designation | https://legislature.vermont.gov/statutes/section/13/167/05411b | Statute | DOC high-risk designation, appeal right, public-access purpose | High | Live-validated during this task |
| VT-S8 | 13 V.S.A. § 5411d, Noncompliant high-risk sex offenders | https://legislature.vermont.gov/statutes/section/13/167/05411d | Statute | 15-day initial and 30-day recurring in-person reporting; 1-day/unanticipated changes; vehicle reporting; photo; compliance checks | High | Live-validated during this task |
| VT-S9 | VCIC, Information for Vermont Registrants | https://vcic.vermont.gov/sor/vermont-registrants | Agency guidance | Agency summary of duration, website posting, public information, no registry live/work restrictions, 3-day/36-hour reporting, annual verification, contact method | High | Live-validated during this task |
| VT-S10 | VCIC, Registration Requirements | https://vcic.vermont.gov/sor/registration-requirements | Agency guidance | 3-day updates, daily homeless contact, 36-hour high-risk address changes, annual verification/photo process | High | Live-validated during this task |
| VT-S11 | VCIC, Community Notification | https://vcic.vermont.gov/sor/notification | Agency guidance | Normal/heightened notification; proactive notification discretion; public safety concern language | High | Live-validated during this task |
| VT-S12 | VCIC, State Law on Sex Offender Registry | https://vcic.vermont.gov/sor/state-law | Agency process page | Official statute index and VCIC contact | High | Live-validated during this task |
| VT-S13 | Vermont public SOR website | https://www.communitynotification.com/cap_office_disclaimer.php?office=55275 | Public registry page | Public-facing registry existence and registry search portal | Medium | Identified; fetch limited during this task |
| VT-S14 | City of Rutland, VT, Child Safety Ordinance | https://ecode360.com/41272317 | Local ordinance / local-law validation category | Example of a municipal 1,000-foot residence rule and property-presence rule; demonstrates local overlay exists in at least one Vermont city | Medium | Live-validated during this task; legal validity/preemption not finally resolved |
| VT-S15 | 13 V.S.A. § 5413, Expungement of records | https://legislature.vermont.gov/statutes/section/13/167/05413 | Statute | Expungement topic identified for validation | Low | Identified but not fully analyzed |
| VT-S16 | 13 V.S.A. § 5416, Erroneous registry requirements; petition to correct | https://legislature.vermont.gov/statutes/section/13/167/05416 | Statute | Correction petition topic identified for validation | Low | Identified but not fully analyzed |
| VT-S17 | 13 V.S.A. § 5414, Participation in national sex offender registration | https://legislature.vermont.gov/statutes/section/13/167/05414 | Statute | Federal/national registry participation topic identified for validation | Low | Identified but not fully analyzed |
| VT-S18 | VCIC Out-of-State Registrants page | https://vcic.vermont.gov/sor/out-of-state | Agency guidance | Legacy cited move-in/out-of-state packet and photo/fingerprints | Medium | Inherited from legacy file — needs live link check; fetch blocked by robots during this task |


## 2. Local Authority / Preemption Analysis

| Topic | Local authority posture | Analysis | Source keys | Validation status |
|---|---|---|---|---|
| residence restrictions | Partially allowed / unresolved validity | Vermont statewide registry law does not create a statewide residence-distance rule. VCIC says the registry itself does not restrict where a person lives or works, except supervision restrictions. However, Rutland has a municipal ordinance purporting to bar certain registrants from establishing residence within 1,000 feet of schools, recreation facilities, or licensed daycare. The legacy file contains a tension: it says cities/towns are not authorized and likely preempted, but it also warns local rules are possible. STF resolution: do not publish a statewide “local preemption confirmed” answer without a current controlling Vermont appellate source or AG/local validation. | VT-S3, VT-S9, VT-S14, VT-S0 | Local authority partially confirmed; preemption/validity requires validation |
| presence/place restrictions | Partially allowed / unresolved validity | No blanket statewide presence-distance rule was found in Chapter 167 or VCIC guidance. Rutland’s ordinance includes a local property-presence rule for schools, recreation facilities, and licensed daycare with exceptions. Treat local presence rules as a real possible overlay, but validate enforceability before production. | VT-S3, VT-S9, VT-S14 | Local authority partially confirmed; validity requires validation |
| parks / playgrounds / schools / child-care locations | Partially allowed / unresolved validity | Statewide registry law does not create general parks/schools/child-care exclusion zones. Rutland includes schools, recreation facilities, and licensed daycare in both residence and presence sections. | VT-S3, VT-S9, VT-S14 | Local authority partially confirmed; validity requires validation |
| beaches / pools / public bathing places / recreation areas | Partially allowed / unresolved validity | No statewide rule found. Rutland’s “recreation facilities” definition includes parks, playgrounds, recreation centers, bathing beaches, swimming/wading pools, gyms, sports fields, and sports facilities under city jurisdiction. | VT-S14 | Local authority partially confirmed; validity requires validation |
| libraries / churches / public facilities / events | Partially allowed / narrow local examples | No statewide registry rule found for libraries, churches, public facilities, or events. Rutland’s ordinance includes exceptions for worship, polling places, government offices/meetings, school attended by the registrant, and child-related attendance on covered properties, but it does not itself create a general library rule. | VT-S14 | Local authority partially confirmed; scope requires validation |
| shelters / transitional housing | Unclear — validate | No statewide registry shelter-distance rule found. Housing-provider, shelter, DOC, treatment, or facility policies may impose separate limits. Local authority for shelters was not resolved. | VT-S3, VT-S9 | Requires validation |
| local reporting / registration procedures | Mostly centralized; local law enforcement has notification roles | VCIC says updates must be reported to VT SOR, not local police/sheriffs/barracks. Statutes allow certain local law enforcement roles in notification and address release, but no city/county authority was found to create separate state-registration deadlines. | VT-S3, VT-S5, VT-S9, VT-S10, VT-S11 | High for centralized reporting; local procedural overlays require validation |
| Halloween / holiday / event restrictions | No statewide rule found; local/supervision unclear | No statewide Halloween, holiday, or event restriction was found in the checked statewide sources. Local event-specific ordinances were not fully surveyed; supervision/court/treatment rules may impose restrictions. | VT-S3, VT-S9 | Requires validation |


# Topic File

## 1. State posture summary

**Topic posture:** Reporting deadline-heavy; public posting category-based; no confirmed statewide residence/presence zone  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed / unresolved for local ordinances

**Controlling rule:**  
Vermont’s registry is centralized through the Department of Public Safety/VCIC. Core statewide rules are registration/reporting deadlines, annual or 90-day verification, category-based Internet posting, and 10-year or lifetime duration. No blanket statewide registry residence or presence zone was found, but at least one municipality (Rutland) has enacted local residence/presence restrictions whose statewide validity needs validation.

**Practical meaning:**  
Vermont is comparatively deadline-heavy and public-posting/category-driven. The biggest visitor-facing distinction is between state registry duties and separate overlays: DOC supervision, court orders, treatment, school/facility rules, private housing, and local ordinances.

**Scope / who is affected:**  
Nearly all people required to register in Vermont; out-of-state/federal/military/tribal cases are included when comparable or otherwise required.

**What changes the answer:**  
Out-of-state status; high-risk/SVP/noncompliant high-risk designations; court posting order; local ordinance; supervision; homelessness; move/visit/work/school facts.

**Separate overlays:**  
Supervision, court orders, treatment, custody/family court, facility policy, employer policy, school policy, housing provider, shelter rule, private lease, federal SORNA, International Megan’s Law.

**Operative rule for V2:**  
Vermont’s statewide registry baseline is reporting- and posting-centered: 10-day move-in/work/student trigger, 3-day change reporting, annual verification for most, 90-day reporting for SVPs, and category/court-based public posting. No blanket statewide live/work/place exclusion was found, but local ordinances such as Rutland may add limits and require validation. Source keys: VT-S1, VT-S3, VT-S6, VT-S9, VT-S14.

**Source keys / official sources:**  
VT-S0, VT-S1, VT-S3, VT-S6, VT-S9, VT-S14

**Confidence:** High for statewide architecture; Medium for local overlay

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 2. Who must register

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Vermont defines “sex offender” to include people convicted in any U.S. jurisdiction, including state, territory, commonwealth, D.C., military, federal, or tribal court, of listed Vermont offenses, comparable offenses, certain minor-victim offenses, qualifying out-of-state residents, and nonresident sex offenders who cross into Vermont for employment, vocation, or student status.

**Practical meaning:**  
Registration turns on the conviction category and Vermont’s statutory comparability/coverage, not only on whether Vermont was the convicting state.

**Scope / who is affected:**  
Adults with listed/comparable convictions; nonresident workers/students; people required elsewhere who reside in Vermont, subject to statutory exceptions.

**What changes the answer:**  
Age/victim close-in-age exception; deferred sentence status; comparability; residency; work/school/vocation thresholds.

**Separate overlays:**  
Federal SORNA, interstate compact, court order, DOC, tribal/federal/military records.

**Operative rule for V2:**  
People with Vermont registrable convictions and comparable out-of-state, federal, military, or tribal convictions must be analyzed under § 5401; nonresidents who work, carry on a vocation, or study in Vermont are included. Source key: VT-S1.

**Source keys / official sources:**  
VT-S1

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 3. Initial registration deadlines

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Out-of-state registrants must provide required information within 10 days after establishing Vermont residence or crossing into Vermont for employment, vocation, or student status. Legacy file says visitors trigger registration at 10 consecutive days or 30 total days/year, but that exact visitor threshold needs live confirmation beyond the fetched statute text.

**Practical meaning:**  
Moving to Vermont, working in Vermont, or studying in Vermont cannot be treated as casual travel once the statutory trigger is met.

**Scope / who is affected:**  
Out-of-state convicted people entering Vermont to reside, work, carry on a vocation, or study; Vermont-convicted persons are processed through court/DPS/DOC reporting steps.

**What changes the answer:**  
Residence versus temporary lodging; employment/vocation duration; student enrollment; whether visitor threshold is reached.

**Separate overlays:**  
Federal SORNA, home-state travel notice, supervision, court orders.

**Operative rule for V2:**  
Out-of-state registrants must report within 10 days after establishing Vermont residence or entering Vermont for work, vocation, or student status. The legacy 10-consecutive-day/30-days-per-year visitor rule should be preserved as inherited but live-validated before publication. Source keys: VT-S3, VT-S0, VT-S18.

**Source keys / official sources:**  
VT-S3, VT-S0, VT-S18

**Confidence:** High for 10-day residence/work/student; Medium for visitor threshold

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 4. Ongoing reporting duties

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Registrants report address changes within 3 days; high-risk sex offenders report address changes within 36 hours. Registrants report postsecondary enrollment/separation, employment changes, legal name changes, a child under 18 moving into the residence, and release from supervision within the statutory deadlines. VCIC also says telephone-number changes and homelessness/daily contact are required.

**Practical meaning:**  
Small changes matter. The common trap is thinking only home address changes count; work, school, name, household-minor status, phone, and supervision-release events can trigger reporting.

**Scope / who is affected:**  
Most registrants; high-risk and noncompliant high-risk have stricter rules.

**What changes the answer:**  
High-risk designation; noncompliant high-risk status; homelessness; school/employment changes; child moving into household.

**Separate overlays:**  
Supervision, DOC, court orders, treatment, agency practice.

**Operative rule for V2:**  
Most changes must be reported within 3 days; high-risk address changes are due within 36 hours; release from probation/parole/furlough/supervised community sentence is due within 24 hours. VCIC says homeless registrants must contact VT SOR daily. Source keys: VT-S3, VT-S10.

**Source keys / official sources:**  
VT-S3, VT-S10

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 5. Verification / re-registration schedule

**Topic posture:** Reporting cadence varies by designation  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Most registrants report annually within 10 days after their birthday and return verification forms within 10 days of receipt. Sexually violent predators report every 90 days. Noncompliant high-risk registrants have separate in-person reporting: within 15 days of DOC release and every 30 days thereafter.

**Practical meaning:**  
The annual birthday-cycle is not the only cadence. SVP and noncompliant high-risk statuses create much tighter reporting obligations.

**Scope / who is affected:**  
Most registrants annually; SVPs every 90 days; noncompliant high-risk every 30 days after initial 15-day report.

**What changes the answer:**  
SVP designation; noncompliant high-risk designation; annual photo requests; homelessness.

**Separate overlays:**  
DOC, supervision, VCIC scheduling practices.

**Operative rule for V2:**  
Most Vermont registrants verify annually around the birthday cycle and must return the verification within 10 days; SVPs report every 90 days. Noncompliant high-risk registrants must report in person within 15 days after DOC supervision release and every 30 days thereafter. Source keys: VT-S3, VT-S8, VT-S10.

**Source keys / official sources:**  
VT-S3, VT-S8, VT-S10

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 6. Residence restrictions

**Topic posture:** Statewide baseline plus local overlay  
**Rule status:** CONFIRMED NO STATEWIDE RULE; LOCAL AUTHORITY PARTIALLY CONFIRMED  
**Local authority posture:** Partially allowed / unresolved validity

**Controlling rule:**  
No statewide registry residence-distance rule was found in Chapter 167 or VCIC guidance. VCIC states the registry does not restrict where a registrant lives or works, but DOC supervision restrictions must be followed. Rutland has a local 1,000-foot residence ordinance covering schools, recreation facilities, and licensed daycare; its current enforceability/preemption status needs validation.

**Practical meaning:**  
State law baseline is not a statewide address ban. A specific address still needs local validation because at least one Vermont city has a local buffer-zone ordinance.

**Scope / who is affected:**  
All registrants for state baseline; local ordinance applies only where enacted and enforceable; supervision may be stricter.

**What changes the answer:**  
City/town; supervision; court order; treatment; housing provider; shelter; private lease; victim proximity; minor household.

**Separate overlays:**  
Supervision, court orders, treatment, housing provider, shelter rule, private lease, local ordinance.

**Operative rule for V2:**  
No blanket statewide Vermont residence-distance restriction was confirmed. Housing may still be limited by supervision/court/treatment/private housing rules and by local ordinances such as Rutland’s 1,000-foot rule if applicable and enforceable. Source keys: VT-S9, VT-S14.

**Source keys / official sources:**  
VT-S3, VT-S9, VT-S14

**Confidence:** High for no statewide VCIC restriction; Medium for local enforceability

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 7. Presence / place restrictions

**Topic posture:** Statewide baseline plus local overlay  
**Rule status:** NO STATEWIDE RULE FOUND — STRENGTHENED; LOCAL AUTHORITY PARTIALLY CONFIRMED  
**Local authority posture:** Partially allowed / unresolved validity

**Controlling rule:**  
No statewide registry rule was found barring all registrants from schools, parks, playgrounds, beaches, pools, libraries, churches, or youth events. Rutland’s ordinance bars presence on school, recreation-facility, and licensed-daycare property with exceptions; its legal status requires validation.

**Practical meaning:**  
Do not use the residence answer to answer place access. Vermont statewide registry sources do not impose a general place ban, but local property rules and supervision/school/facility rules can matter.

**Scope / who is affected:**  
All registrants statewide baseline; local ordinances only where enacted/enforceable.

**What changes the answer:**  
Local jurisdiction; child’s school/event; worship; voting; government business; student status; supervision.

**Separate overlays:**  
Supervision, school/facility policy, court orders, treatment, local ordinances.

**Operative rule for V2:**  
No blanket statewide Vermont presence or place-access ban was confirmed in registry sources. Local ordinances, supervision, court orders, school/facility policies, and event rules may still restrict presence. Source keys: VT-S9, VT-S14.

**Source keys / official sources:**  
VT-S9, VT-S14

**Confidence:** Medium

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 8. Employment restrictions

**Topic posture:** No blanket statewide rule, but reporting/supervision/local rules may apply  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed / unresolved for local ordinances

**Controlling rule:**  
VCIC states the registry does not restrict where a person works, but employment changes must be reported within 3 days. Vermont defines employment/vocation for nonresidents as full-time or part-time for more than 14 days or more than 30 aggregate days in a calendar year.

**Practical meaning:**  
Work near children is not answered by a statewide registry work-distance rule. It is answered by reporting duties plus employer/licensing/supervision/local conditions.

**Scope / who is affected:**  
Most registrants; nonresident workers; high-risk/noncompliant high-risk stricter for change timing/vehicle rules.

**What changes the answer:**  
Job type, employer policies, professional licensing, school/childcare setting, supervision, nonresident work duration.

**Separate overlays:**  
Employer policy, licensing, school/facility policy, supervision, court orders, local ordinance.

**Operative rule for V2:**  
Vermont does not have a confirmed statewide registry work-distance ban; registrants must report employment changes within 3 days, and nonresident employment/vocation over statutory thresholds can trigger registration. Source keys: VT-S1, VT-S3, VT-S9.

**Source keys / official sources:**  
VT-S1, VT-S3, VT-S9

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 9. Education / campus rules

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Student status includes enrollment full- or part-time in any public or private Vermont educational institution, including secondary, trade/professional, or higher education. Postsecondary enrollment or separation must be reported within 3 days. Nonresident students crossing into Vermont must register within 10 days.

**Practical meaning:**  
College/trade-school attendance is not prohibited by the registry statute, but registration/reporting is triggered by student status.

**Scope / who is affected:**  
Registrants enrolled in Vermont postsecondary education; nonresident students; possibly secondary school students depending on facts.

**What changes the answer:**  
Type of school; enrollment/separation date; campus police/local law enforcement; school policy; supervision.

**Separate overlays:**  
School policy, campus police, Title IX/safety rules, supervision, court orders.

**Operative rule for V2:**  
Vermont treats student enrollment as a reporting trigger: nonresident students must register within 10 days of crossing into Vermont for school, and registrants must report postsecondary enrollment or separation within 3 days. Source keys: VT-S1, VT-S3.

**Source keys / official sources:**  
VT-S1, VT-S3

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 10. Internet / identifier rules

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
The checked legacy file and fetched core statutes did not confirm a standalone statewide duty to report email addresses, internet identifiers, or social-media accounts in the same way address/work/school/name changes are reported. § 5403 lists core conviction information but does not resolve all modern internet identifier questions in the fetched passages.

**Practical meaning:**  
Do not tell users Vermont has no internet identifier duty until § 5402, forms, and VCIC packets are checked. This is a production validation gap.

**Scope / who is affected:**  
Unclear; likely depends on current forms/statutory sections not fully analyzed here.

**What changes the answer:**  
VCIC forms; sentencing date; supervision; federal requirements; treatment or computer-use restrictions.

**Separate overlays:**  
Supervision, court orders, treatment/computer-use rules, federal SORNA.

**Operative rule for V2:**  
No live-validated Vermont statewide internet-identifier reporting rule was confirmed in this task. Preserve as a validation gap; supervision and court orders may impose separate internet/computer limits. Source keys: VT-S2, VT-S3.

**Source keys / official sources:**  
VT-S2, VT-S3

**Confidence:** Low

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 11. Public registry visibility

**Topic posture:** Public posting category-based  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Not all registrants are posted online. § 5411a specifies categories for electronic posting, including listed offenses, prior registrable convictions, noncompliance warrant status, sexual predator designation, treatment noncompliance/ineligibility, and high-risk-related information. Street address and victim identity are not electronically posted; VCIC lists town/county, photo, conviction, supervision office, treatment compliance, warrant status, and high-risk status.

**Practical meaning:**  
Vermont’s public site is not a universal all-registrants address map. It is a category/court-driven public posting system with town/county rather than street address.

**Scope / who is affected:**  
People within Internet-posting categories; nonposted registrants may still have information released under request protocols.

**What changes the answer:**  
Offense category; prior conviction; warrant; sexual predator/high-risk; treatment compliance; close-in-age exception; age under 18.

**Separate overlays:**  
Public records protocols, local law enforcement release, victim confidentiality.

**Operative rule for V2:**  
Vermont public Internet posting is category-based; the public site posts items such as name/aliases, DOB, physical description, photo, county/town, conviction, DOC office if supervised, treatment compliance, warrant status, reason for posting, and high-risk status, but not street address or victim identity. Source keys: VT-S5, VT-S6, VT-S9.

**Source keys / official sources:**  
VT-S5, VT-S6, VT-S9

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 12. Tiering / designation

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Vermont uses duration categories (10-year/lifetime), sexually violent predator status, high-risk designation, and noncompliant high-risk status rather than a simple SORNA-style Tier I/II/III public vocabulary. DOC high-risk designation is for increased public access and includes appeal rights.

**Practical meaning:**  
Do not force Vermont into a generic three-tier model. Use Vermont’s own labels: 10-year, lifetime, SVP, high-risk, noncompliant high-risk, Internet-posted category.

**Scope / who is affected:**  
All registrants as applicable.

**What changes the answer:**  
Offense; prior conviction; court determination; DOC risk designation; treatment compliance.

**Separate overlays:**  
DOC rules, court order, appeal, psychosexual/risk assessment.

**Operative rule for V2:**  
Vermont’s operative categories are 10-year versus lifetime registration, SVP status, DOC high-risk designation, noncompliant high-risk status, and Internet-posting categories; do not translate this into a generic SORNA three-tier answer. Source keys: VT-S3, VT-S6, VT-S7, VT-S8.

**Source keys / official sources:**  
VT-S3, VT-S6, VT-S7, VT-S8

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 13. Duration of registration

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Most registrants register until 10 years have elapsed after release from prison or discharge from parole, supervised release, or probation, whichever is later. Lifetime registration applies for prior registrable convictions, sexual assault/aggravated sexual assault and comparable offenses, and other statutory lifetime categories; VCIC notes post-2015 Vermont conviction periods are determined by courts.

**Practical meaning:**  
Duration is not measured from conviction alone. It usually runs from the later of release/discharge events unless lifetime applies.

**Scope / who is affected:**  
Most 10-year registrants; lifetime registrants for statutory/court categories.

**What changes the answer:**  
Conviction date; offense; prior conviction; court order; supervision discharge date; SVP status.

**Separate overlays:**  
Court orders, DOC records, out-of-state obligations.

**Operative rule for V2:**  
Most Vermont registration runs 10 years after release from prison or discharge from supervision, whichever is later; lifetime registration applies to listed statutory/court categories. Source keys: VT-S3, VT-S9.

**Source keys / official sources:**  
VT-S3, VT-S9

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 14. Removal / termination / reclassification

**Topic posture:** Removal meaningful but limited  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
A lifetime registrant may petition the Criminal Division of Superior Court after 10 years from sentence completion for termination of community notification, including Internet notification, if not designated as a noncompliant high-risk sex offender. Repeat petition limit is once every 60 months. Separate correction/expungement provisions require validation.

**Practical meaning:**  
Vermont offers meaningful public-notification relief for some lifetime registrants, but this is not automatic removal from all registry duties.

**Scope / who is affected:**  
Lifetime registrants not designated noncompliant high-risk; possibly erroneous-registration petition cases.

**What changes the answer:**  
Treatment completion; risk evidence; victim notice/testimony; high-risk/noncompliant status; court findings.

**Separate overlays:**  
Court process, counsel, DOC assessment, victim notification, civil procedure.

**Operative rule for V2:**  
After 10 years from sentence completion, a lifetime registrant who is not a noncompliant high-risk sex offender may petition to terminate community notification/Internet posting; repeat petitions are limited to once every 60 months. Source key: VT-S5.

**Source keys / official sources:**  
VT-S5, VT-S15, VT-S16

**Confidence:** High for §5411 relief; Low for expungement/correction details

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 15. Moving into the state

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Out-of-state convicted people must provide required information within 10 days after establishing residence in Vermont or crossing into Vermont for employment, vocation, or student status.

**Practical meaning:**  
Move-in deadlines are short. A person should contact VCIC before or immediately upon arrival if moving, working, or studying.

**Scope / who is affected:**  
Out-of-state, federal, military, tribal, comparable, and otherwise required persons.

**What changes the answer:**  
Residence date; work/student/vocation status; visitor threshold; home-state notice.

**Separate overlays:**  
Federal SORNA, International Megan’s Law, supervision, interstate compact.

**Operative rule for V2:**  
Move-ins and nonresident workers/students must register within 10 days after establishing Vermont residence or entering for employment/vocation/school. Source keys: VT-S1, VT-S3.

**Source keys / official sources:**  
VT-S1, VT-S3, VT-S18

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 16. Moving out of the state

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
A Vermont registrant changing residence to another state, or crossing into another state for employment/vocation/school, must notify the Department of the new address and register in the new state within 3 days of establishing residence if that state requires registration.

**Practical meaning:**  
Leaving Vermont does not end compliance duties instantly. The person needs proof of notice to VCIC and proof of registration in the destination state.

**Scope / who is affected:**  
Vermont registrants moving or working/studying out of state.

**What changes the answer:**  
Destination state; whether new state requires registration; timing; continued Vermont status.

**Separate overlays:**  
Destination-state law, home-state travel rules, federal SORNA, supervision.

**Operative rule for V2:**  
Moving out requires notifying Vermont and registering with the destination state within 3 days after establishing residence if that state has registration. Source key: VT-S3.

**Source keys / official sources:**  
VT-S3

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 17. Visiting / temporary lodging / in-state travel

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Partially allowed / unresolved local rules

**Controlling rule:**  
Legacy file states visitors must register at 10 consecutive days or 30 total days/year and that shorter hotel stays under those thresholds do not trigger Vermont registration. The live-fetched statute confirms a 10-day trigger tied to establishing residence or crossing into Vermont for employment/vocation/student status, but this task did not live-confirm the 30-days/year visitor threshold in official text.

**Practical meaning:**  
Use the legacy visitor rule for internal preview only with a validation flag. Also separate registration thresholds from place-access/local rules.

**Scope / who is affected:**  
Out-of-state visitors and temporary lodging; registrants traveling within Vermont.

**What changes the answer:**  
Length of stay; consecutive versus aggregate days; work/student activity; home-state travel notice; local ordinance.

**Separate overlays:**  
Home-state registry, federal SORNA, supervision, hotel/housing policy, local ordinances.

**Operative rule for V2:**  
Preserve the inherited Vermont visitor threshold as 10 consecutive days or 30 total days/year, but mark it for official live validation before production. Registration thresholds do not answer place-access questions. Source keys: VT-S0, VT-S3, VT-S18.

**Source keys / official sources:**  
VT-S0, VT-S3, VT-S18

**Confidence:** Medium

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 18. Interstate travel / federal SORNA overlay

**Topic posture:** Conditional overlay  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
Vermont law covers moving out and entering for residence/work/school. Federal SORNA and the destination/home state may impose additional travel/update duties not fully analyzed in this STF.

**Practical meaning:**  
Do not use Vermont law alone as a nationwide travel answer.

**Scope / who is affected:**  
People traveling between states; home-state registrants; Vermont registrants leaving.

**What changes the answer:**  
Home state; destination state; duration; work/school; supervision.

**Separate overlays:**  
Federal SORNA, International Megan’s Law, supervision, destination-state law.

**Operative rule for V2:**  
Vermont’s in/out rules must be paired with home-state, destination-state, and federal SORNA requirements for interstate travel. Source keys: VT-S3, VT-S17.

**Source keys / official sources:**  
VT-S3, VT-S17

**Confidence:** Medium

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 19. International travel

**Topic posture:** Federal overlay  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
Legacy file says international travel requires 21-day advance notice under International Megan’s Law via the local registry and to contact VCIC for Vermont procedure. This task did not live-validate VCIC’s exact international-travel procedure.

**Practical meaning:**  
Keep this as a federal overlay, not a Vermont-only rule.

**Scope / who is affected:**  
Registrants subject to International Megan’s Law and federal SORNA international travel notice.

**What changes the answer:**  
Destination; passport unique identifier; timing; supervision; VCIC procedure.

**Separate overlays:**  
International Megan’s Law, federal SORNA, supervision, passport rules.

**Operative rule for V2:**  
International travel should be treated as a federal 21-day-notice overlay inherited from the legacy file and requiring VCIC procedure validation before publication. Source key: VT-S0.

**Source keys / official sources:**  
VT-S0

**Confidence:** Medium

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 20. Unstable housing / homelessness / transient status

**Topic posture:** Conditional statewide/agency rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
VCIC’s Registration Requirements page states registrants without a permanent address must contact the VT SOR daily. State reporting also requires address changes within 3 days or 36 hours for high-risk address changes.

**Practical meaning:**  
Homelessness is not a way around registration; it creates a high-frequency agency-contact duty.

**Scope / who is affected:**  
Registrants without permanent address.

**What changes the answer:**  
VCIC instructions; high-risk/noncompliant high-risk; shelter rules; local rules.

**Separate overlays:**  
Shelter policy, supervision, DOC, housing provider, local ordinances.

**Operative rule for V2:**  
Registrants without a permanent address must contact VT SOR daily under VCIC guidance; address-change deadlines still matter. Source keys: VT-S10, VT-S3.

**Source keys / official sources:**  
VT-S10, VT-S3

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 21. Fees and costs

**Topic posture:** Narrow statewide rule  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
Legacy file says there is no routine state registration fee but local fingerprinting fees may apply. This was not live-validated in the fetched official pages.

**Practical meaning:**  
Do not promise zero cost without checking current VCIC forms and fingerprint/photo processes.

**Scope / who is affected:**  
All registrants; especially move-ins needing fingerprints/photo.

**What changes the answer:**  
Local law enforcement/fingerprinting; records requests; court petitions.

**Separate overlays:**  
Agency fee schedules, court fees, legal counsel.

**Operative rule for V2:**  
No live-validated routine Vermont state registry fee was confirmed; legacy says no routine state fee and possible local fingerprinting fees. Source key: VT-S0.

**Source keys / official sources:**  
VT-S0, VT-S18

**Confidence:** Low

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 22. Driver license / ID / marking requirements

**Topic posture:** No confirmed statewide rule  
**Rule status:** NO STATEWIDE RULE FOUND — STRENGTHENED  
**Local authority posture:** Not applicable

**Controlling rule:**  
No driver license or ID marking requirement was found in the legacy file or the checked core registry sources.

**Practical meaning:**  
Do not add a driver’s-license marking warning unless a DMV/source validation finds one.

**Scope / who is affected:**  
All registrants, pending DMV validation.

**What changes the answer:**  
DMV rules; supervision; vehicle reporting for noncompliant high-risk.

**Separate overlays:**  
DMV, supervision, court orders.

**Operative rule for V2:**  
No Vermont driver license/ID marking rule was confirmed in this STF task. Preserve as no confirmed rule with DMV validation gap. Source keys: VT-S0, VT-S3, VT-S8.

**Source keys / official sources:**  
VT-S0, VT-S3, VT-S8

**Confidence:** Medium

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 23. Vehicles, vessels, and property reporting

**Topic posture:** Narrow statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Noncompliant high-risk sex offenders must provide make, model, color, registration, and license plate number of any vehicle operated before operation. No general vehicle/vessel/property reporting rule for all registrants was confirmed in fetched sources.

**Practical meaning:**  
This is not a universal vehicle rule; it is tied to noncompliant high-risk status in § 5411d unless other forms say more.

**Scope / who is affected:**  
Noncompliant high-risk registrants; general registrants unresolved.

**What changes the answer:**  
Noncompliant high-risk designation; vehicle operation; VCIC forms.

**Separate overlays:**  
Supervision, court orders, DMV/VCIC forms.

**Operative rule for V2:**  
Vehicle reporting is confirmed for noncompliant high-risk registrants before operating a vehicle; no universal all-registrant vehicle/vessel/property rule was live-confirmed. Source key: VT-S8.

**Source keys / official sources:**  
VT-S8

**Confidence:** High for noncompliant high-risk; Low for universal scope

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 24. Family, parenting, and household issues

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Registrants must report within 3 days when a child under 18 moves into the residence. If the Department is notified that an offender is living with a child under 18, it must notify DCF within 3 days. No blanket statewide registry rule barring all registrants from living with children or their own children was confirmed.

**Practical meaning:**  
Household with children is a reporting/DCF-notice issue under registry law, not a confirmed blanket statewide ban. Family court, DCF, supervision, and custody orders may still control.

**Scope / who is affected:**  
Registrants living with or adding a minor household member.

**What changes the answer:**  
Minor in household; relationship; custody order; offense facts; supervision; DCF involvement.

**Separate overlays:**  
Family court, DCF, custody, treatment, supervision, court orders, housing provider.

**Operative rule for V2:**  
No blanket statewide registry ban on living with children was confirmed; a child under 18 moving into the residence must be reported within 3 days, and DCF notification follows when DPS is notified. Source key: VT-S3.

**Source keys / official sources:**  
VT-S3

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 25. Supervision overlays

**Topic posture:** Separate overlay  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
VCIC states the registry itself does not restrict where a person lives or works, but a person under Department of Corrections supervision must comply with those restrictions. § 5407 also includes release-from-supervision reporting.

**Practical meaning:**  
Supervision may be the real source of daily-life restrictions in Vermont.

**Scope / who is affected:**  
Registrants on probation, parole, furlough, supervised community sentence, or DOC supervision.

**What changes the answer:**  
Terms of supervision; treatment rules; offense/victim facts; officer instructions.

**Separate overlays:**  
Supervision, court orders, treatment, DOC.

**Operative rule for V2:**  
Vermont registry law does not replace supervision conditions; DOC/probation/parole/furlough terms can impose separate housing, work, contact, internet, travel, and place restrictions. Source keys: VT-S9, VT-S3.

**Source keys / official sources:**  
VT-S9, VT-S3

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 26. Juvenile registration

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
Fetched sources confirm certain age-based exceptions: conduct criminal only because of victim age is excluded from registry/public posting in specified close-in-age situations, and Internet posting does not occur before the offender reaches 18. Full juvenile adjudication rules were not analyzed.

**Practical meaning:**  
Juvenile answers need careful statute/case validation before publication.

**Scope / who is affected:**  
People under 18 at offense/adjudication; close-in-age cases; public posting before 18.

**What changes the answer:**  
Age of perpetrator/victim; adjudication versus conviction; offense; court order.

**Separate overlays:**  
Juvenile court, family court, sealed records, counsel.

**Operative rule for V2:**  
Vermont has close-in-age and under-18 public-posting limits, but full juvenile registration rules require validation before production. Source keys: VT-S1, VT-S6.

**Source keys / official sources:**  
VT-S1, VT-S6

**Confidence:** Medium

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 27. Out-of-state, federal, military, and tribal cases

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
§ 5401 expressly includes convictions in state, territory, commonwealth, D.C., military, federal, and tribal courts when they meet statutory coverage/comparability or when an adult resident was required to register elsewhere, subject to exceptions.

**Practical meaning:**  
Vermont can pick up cases from multiple jurisdictions.

**Scope / who is affected:**  
Out-of-state/federal/military/tribal registrants and Vermont residents required elsewhere.

**What changes the answer:**  
Comparable elements; still-required-elsewhere status; age-based exception; residence/work/school.

**Separate overlays:**  
Interstate compact, federal SORNA, destination-state law.

**Operative rule for V2:**  
Vermont covers qualifying state, territory, D.C., military, federal, and tribal convictions and certain people required to register elsewhere who reside/work/study in Vermont. Source key: VT-S1.

**Source keys / official sources:**  
VT-S1

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 28. Enforcement and penalties

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Knowing noncompliance is punishable by up to two years and/or $1,000 for a first offense, up to three years and/or $5,000 for a second/subsequent offense, and up to five years and/or $5,000 if noncompliance lasts more than five consecutive days. Sentences run consecutively to any sentence being served; knowledge of duties is presumed.

**Practical meaning:**  
Missing deadlines can create a new criminal case; proof of submission matters.

**Scope / who is affected:**  
All registrants subject to Vermont reporting duties.

**What changes the answer:**  
Duration of noncompliance; prior violations; evidence from registry records; supervision status.

**Separate overlays:**  
Criminal defense, supervision violation, court orders.

**Operative rule for V2:**  
Knowing failure to comply can lead to up to 2 years for a first offense, up to 3 years for later offenses, and up to 5 years if noncompliance lasts more than 5 consecutive days, with consecutive sentencing rules. Source key: VT-S4.

**Source keys / official sources:**  
VT-S4

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 29. Local ordinances / preemption

**Topic posture:** Statewide baseline plus local overlay  
**Rule status:** LOCAL AUTHORITY REQUIRES VALIDATION  
**Local authority posture:** Partially allowed / unresolved validity

**Controlling rule:**  
Rutland has a local Child Safety Ordinance with 1,000-foot residence restrictions and property-presence restrictions. Legacy file’s stronger claim that cities/towns are not authorized and likely preempted is not adopted as final because this task did not live-validate controlling preemption authority.

**Practical meaning:**  
V2 should warn that there is no confirmed statewide zone, but local ordinances may exist and must be checked for a specific address/place.

**Scope / who is affected:**  
Registrants in municipalities with ordinances; people visiting covered properties.

**What changes the answer:**  
Specific municipality; ordinance validity; exceptions; supervision.

**Separate overlays:**  
Local ordinances, municipal prosecution, supervision, facility policy.

**Operative rule for V2:**  
Local restrictions are not safely dismissible in Vermont: Rutland has a 1,000-foot residence ordinance and property-presence rule, though enforceability/preemption needs legal validation. Source key: VT-S14.

**Source keys / official sources:**  
VT-S14, VT-S0

**Confidence:** Medium

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 30. Recent enacted changes

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
No recent enacted Vermont sex-offender-registry changes were fully researched in this task beyond the current Vermont Statutes Online pages, which state they include 2025 session actions.

**Practical meaning:**  
Do not add current-law claims about 2026 legislation without bill validation.

**Scope / who is affected:**  
All topics potentially affected.

**What changes the answer:**  
2026 legislative session; effective dates; implementation.

**Separate overlays:**  
Pending/enacted bills, agency updates.

**Operative rule for V2:**  
No recent enacted changes beyond the current statute pages were validated in this STF. Source keys: VT-S1 through VT-S8.

**Source keys / official sources:**  
VT-S1, VT-S3, VT-S6

**Confidence:** Medium

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 31. Pending legislation / watchlist

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
Pending Vermont bills were not researched in this task.

**Practical meaning:**  
Keep pending bills out of current-law answers.

**Scope / who is affected:**  
All topics.

**What changes the answer:**  
Introduced/passed/signed/effective status.

**Separate overlays:**  
Legislature, governor, agency implementation.

**Operative rule for V2:**  
No Vermont pending legislation was validated in this STF; any bill belongs only in a watchlist until enacted/effective/implemented. Source keys: none.

**Source keys / official sources:**  
None

**Confidence:** Low

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 32. Recent litigation and controlling cases

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
Recent litigation was not fully researched. Search located historical Vermont local-ordinance litigation references, but controlling current appellate status was not validated.

**Practical meaning:**  
Production needs a local preemption/litigation check before any strong local-law statement.

**Scope / who is affected:**  
Local ordinances, public posting, constitutional challenges.

**What changes the answer:**  
Current appellate authority; trial-court injunctions; municipal ordinance history.

**Separate overlays:**  
Case law, AG opinions, municipal counsel.

**Operative rule for V2:**  
No controlling recent Vermont registry litigation was live-validated for this STF. Source keys: VT-S14 only for ordinance existence.

**Source keys / official sources:**  
VT-S14

**Confidence:** Low

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 33. Agency practice vs statutory text

**Topic posture:** Agency practice overlay  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
VCIC guidance adds practical implementation details: updates go to VT SOR rather than local police/sheriffs/barracks; homeless registrants contact VT SOR daily; annual letters verify current information and update yearly photo. Some details go beyond the statute excerpts fetched.

**Practical meaning:**  
V2 should distinguish statute text from VCIC process details.

**Scope / who is affected:**  
All registrants using VCIC processes.

**What changes the answer:**  
Mail timing; photo scheduling; homelessness; contact details.

**Separate overlays:**  
Agency forms, VCIC staff instructions.

**Operative rule for V2:**  
VCIC is the practical registry contact for changes and annual verification; the Output GPT should preserve agency-practice details separately from statutory deadlines. Source keys: VT-S9, VT-S10, VT-S12.

**Source keys / official sources:**  
VT-S9, VT-S10, VT-S12

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 34. Forms and process links

**Topic posture:** Requires validation  
**Rule status:** FORMS/PROCESS REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
VCIC pages provide contact information and statute/process summaries. The out-of-state page and exact forms/packet/fingerprint/photo scheduling links need live validation because one page fetch was blocked.

**Practical meaning:**  
The STF is preview-ready but not production-ready on form links.

**Scope / who is affected:**  
All registrants, especially move-ins and annual photo updates.

**What changes the answer:**  
Out-of-state packet; photo scheduling; fingerprint location; records request.

**Separate overlays:**  
VCIC forms, VSP barracks, local fingerprinting.

**Operative rule for V2:**  
Use VCIC pages and contact information as the process base, but live-check forms, photo/fingerprint scheduling, and out-of-state packet before publication. Source keys: VT-S9, VT-S10, VT-S12, VT-S18.

**Source keys / official sources:**  
VT-S9, VT-S10, VT-S12, VT-S18

**Confidence:** Medium

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 35. Practical checklist inputs

**Topic posture:** Reporting checklist  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Checklist: confirm registration category; contact VCIC; report move-in/work/school within 10 days when triggered; report changes within 3 days/36 hours high-risk; calendar birthday verification; preserve proof; validate local ordinance for address/place; verify supervision.

**Practical meaning:**  
Visitors need simple deadline and proof reminders.

**Scope / who is affected:**  
All registrants and affected visitors.

**What changes the answer:**  
Move-in/out; job/school; homelessness; high-risk; SVP; local ordinance.

**Separate overlays:**  
Supervision, local rules, federal travel.

**Operative rule for V2:**  
Practical checklist should preserve: 10-day entry trigger, 3-day changes, 36-hour high-risk address changes, annual/SVP verification, daily homeless contact, local validation, and proof retention. Source keys: VT-S3, VT-S10, VT-S14.

**Source keys / official sources:**  
VT-S3, VT-S10, VT-S14

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 36. Common mistakes / compliance traps

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Common traps: assuming no statewide housing restriction means no local/supervision restriction; missing 3-day work/school/name/minor-household changes; missing 36-hour high-risk address rule; missing daily homelessness contact; assuming not publicly posted means information cannot be released; assuming Vermont move-out ends duties before destination registration.

**Practical meaning:**  
These are the warnings the public V2 should preserve in non-alarmist language.

**Scope / who is affected:**  
Most registrants; high-risk/SVP/noncompliant high-risk; homeless; posted/nonposted.

**What changes the answer:**  
Designations, movement, local rules, supervision.

**Separate overlays:**  
Supervision, local ordinances, school/facility/housing policies.

**Operative rule for V2:**  
Vermont’s biggest traps are fast reporting, designation-specific duties, homeless daily contact, non-universal public posting, and local/supervision overlays despite no statewide live/work ban. Source keys: VT-S3, VT-S5, VT-S6, VT-S8, VT-S10, VT-S14.

**Source keys / official sources:**  
VT-S3, VT-S5, VT-S6, VT-S8, VT-S10, VT-S14

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 37. Glossary / terms

**Topic posture:** Internal research aid  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Key terms: sex offender; sexually violent offense; sexually violent predator; high-risk sex offender; noncompliant high-risk sex offender; employed/carries on a vocation; student; registry; local law enforcement agency; community notification; Internet Registry.

**Practical meaning:**  
Use Vermont terms, not generic labels.

**Scope / who is affected:**  
All V2 content fields.

**What changes the answer:**  
Term selected; statutory source.

**Separate overlays:**  
None.

**Operative rule for V2:**  
Glossary should use Vermont statutory terms: sex offender, sexually violent predator, high-risk, noncompliant high-risk, employed/carries on a vocation, student, Internet Registry/community notification. Source keys: VT-S1, VT-S7, VT-S8.

**Source keys / official sources:**  
VT-S1, VT-S7, VT-S8

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 38. Source confidence and validation notes

**Topic posture:** Internal audit  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
Core statutes and VCIC pages are strong. Weak areas: visitor 30-days/year threshold, local ordinance validity/preemption, out-of-state VCIC packet, fees, internet identifiers, juvenile details, recent litigation, pending legislation, forms.

**Practical meaning:**  
Preview can proceed with flags; production cannot.

**Scope / who is affected:**  
All topics.

**What changes the answer:**  
Validation completed or not.

**Separate overlays:**  
Source link maintenance.

**Operative rule for V2:**  
Statewide architecture is high confidence; production publication requires validation of local preemption/enforceability, visitor thresholds, forms, pending/recent law, litigation, internet identifiers, fees, and juvenile details. Source keys: VT-S0 through VT-S18.

**Source keys / official sources:**  
VT-S0-VT-S18

**Confidence:** Medium

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.

## 39. V2 field recommendations

**Topic posture:** Internal output guidance  
**Rule status:** CONFIRMED RECOMMENDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
startHere should emphasize: register/report within 10 days for move-in/work/school; 3-day updates; annual/SVP verification; not all registrants are public; no confirmed statewide live/work ban but local/supervision may matter. commonQuestions should split residence, presence, work, school, public site, visiting, removal, homelessness, and travel.

**Practical meaning:**  
Output GPT should not overstate safety/public-warning function or write generic state-page copy from this STF.

**Scope / who is affected:**  
Output GPT fields only.

**What changes the answer:**  
Preview versus production; sourceConfidence flags.

**Separate overlays:**  
None.

**Operative rule for V2:**  
V2 should preserve Vermont as a deadline-heavy, category-posting state with no confirmed statewide live/work/presence zone, meaningful public-notification relief for some lifetime registrants, and local/supervision validation flags. Source keys: VT-S3, VT-S5, VT-S6, VT-S9, VT-S10, VT-S14.

**Source keys / official sources:**  
VT-S3, VT-S5, VT-S6, VT-S9, VT-S10, VT-S14

**Confidence:** High

**Validation gaps:**  
Before production, validate any low/medium-confidence items identified above, especially local ordinance enforceability/preemption, forms, fees, visitor threshold, pending/recent law, litigation, and agency implementation details where relevant.

**V2 implications:**  
Preserve the operative rule exactly enough that the Output GPT does not infer a broader rule than Vermont sources support. Keep statewide registry duties separate from local ordinances, supervision, court orders, treatment rules, school/facility/employer/housing policies, federal SORNA, and International Megan’s Law.



# Visitor Question Coverage Check

| Visitor question | Coverage | STF-grounded explanation |
|---|---|---|
| Where can I live? | Partially answered | No statewide registry residence-distance rule confirmed; Rutland local 1,000-foot ordinance exists and local validity/preemption needs validation. |
| Can I live with family? | Answered confidently | No blanket family-household ban found; reporting/DCF and supervision/court/family-law overlays may matter. |
| Can I live with children? | Partially answered | No blanket registry ban confirmed, but a child under 18 moving in must be reported within 3 days and DCF notification follows. |
| Can I live with my own biological/adoptive children? | Partially answered | Rutland local ordinance has a child-attendance exception for presence, not a statewide household rule; family court/DCF/supervision must be checked. |
| Can I attend my child’s school event? | Requires validation | No statewide registry place ban confirmed; Rutland has a local exception for attendance reasonably required for natural/adopted child activities; school policy/supervision matter. |
| Can I go to parks, playgrounds, beaches, pools, libraries, churches, or youth events? | Partially answered | No statewide registry place ban confirmed; Rutland covers recreation facilities and has worship/government/voting exceptions. |
| Can I work near children? | Partially answered | No statewide registry work-distance ban confirmed; employment changes reportable within 3 days; employer/licensing/supervision/local policy may control. |
| Can I attend college or trade school? | Answered confidently | Student status and postsecondary changes are reporting triggers; no registry attendance ban found. |
| Who can see my information? | Answered confidently | Internet posting is category-based; non-Internet information may be released through statutory request/notification protocols. |
| What exactly is public? | Answered confidently | Public/posted information includes name/aliases, DOB, physical description, photo, county/town, conviction, DOC office if supervised, treatment compliance, warrant status, posting reason, high-risk status; not street address/victim identity. |
| How often do I report? | Answered confidently | Annual for most, every 90 days for SVPs, 30-day recurring for noncompliant high-risk, daily contact for homeless per VCIC. |
| What changes trigger reporting? | Answered confidently | Address, employment, postsecondary school, legal name, child under 18 moving in, release from supervision; VCIC includes phone and all information changes. |
| What if I am homeless or transient? | Answered confidently | VCIC says registrants without permanent address must contact VT SOR daily. |
| What if I visit temporarily? | Requires validation | Legacy says 10 consecutive days/30 total days per year; live validation needed. |
| What if I move in or out? | Answered confidently | Move-in/work/school 10-day trigger; move out requires notification and destination registration within 3 days where required. |
| Can I travel internationally? | Requires validation | Legacy 21-day IML notice preserved but VCIC procedure not live-validated. |
| Can I get removed, reclassified, or off the public site? | Answered confidently | Lifetime registrants may petition after 10 years from sentence completion for termination of community notification/Internet if eligible; once every 60 months. |
| What are the biggest accidental compliance traps? | Answered confidently | Fast reporting, homelessness daily contact, high-risk/SVP/noncompliant high-risk duties, local/supervision overlays, assuming nonposted means undisclosable. |
| What must I verify locally? | Partially answered | Specific city/town ordinances, especially residence/presence/place restrictions; Rutland demonstrates local overlay exists. |
| What must I verify with supervision/court orders? | Answered confidently | Housing, work, internet, school, contact with minors/victims, travel, treatment, facility and family-court rules. |

# Missing STF Fields

- Live-validated official text for the inherited **10 consecutive days / 30 total days per year** temporary visitor threshold.
- Current VCIC out-of-state packet, exact forms, photo/fingerprint process, and any fee schedule.
- Internet identifier / email / social-media reporting rule, if any, in current forms or statutes outside the fetched excerpts.
- Local preemption/enforceability analysis for municipal residence and presence ordinances, including current status of Rutland and any Barre-related litigation.
- Full juvenile adjudication/registration analysis.
- Current pending legislation and recent enacted law screen for 2026 session status.
- Recent controlling Vermont litigation and AG opinions, if any.
- Driver license/ID marking validation through DMV sources.
- Expungement/correction pathway details under §§ 5413 and 5416.

# Contradictions or Near-Contradictions Detected

| Tension | Resolution for STF / later V2 |
|---|---|
| Legacy file says cities/towns are not authorized and likely preempted, but also warns local rules are possible. | Live research found Rutland’s local Child Safety Ordinance. Treat “local preemption confirmed” as unsupported; use “local overlay exists; enforceability/preemption requires validation.” |
| VCIC says the registry does not restrict where a person lives or works, while Rutland purports to impose local residence/presence restrictions. | Separate statewide registry baseline from local ordinance overlay. State answer: no confirmed statewide live/work restriction. Local answer: validate municipality. |
| Legacy says visitors trigger Vermont registration at 10 consecutive days or 30 days/year, but fetched § 5407 text clearly shows 10 days for residence/work/student and not the 30-day visitor language in the visible lines. | Preserve inherited visitor threshold for preview with live-validation flag before production. |
| Public posting appears broad in § 5411a offense categories, but VCIC says posting requirements for post-2015 Vermont convictions are determined by courts. | Use category/court-based public-posting language; do not say all registrants are posted. |
| Legacy says annual verification by birthday return; § 5407 text also says verification forms are returned within 10 days of receipt. | Preserve both: annual reporting within 10 days after birthday; VCIC birthday letter/form must be completed/returned in the stated window. |

# Topics Requiring Live Validation Before Publication

1. VCIC out-of-state registrant page and any downloadable forms/packet.
2. Temporary visitor threshold: exact official source for 10 consecutive days / 30 total days per year.
3. Rutland/Barre/local ordinance current enforceability and Vermont preemption status.
4. 2026 pending/enacted Vermont legislation affecting Chapter 167.
5. Recent litigation and controlling appellate/court decisions.
6. Internet identifier/social-media/email reporting duties.
7. DMV/license/ID marking or no-marking confirmation.
8. Fees/fingerprinting/photo costs.
9. Juvenile registration and public-posting rules.
10. Expungement/correction/removal details under §§ 5413 and 5416.
11. Public registry portal live search/display fields, because direct fetch was limited.

# Split Source Confidence Summary

| Category | Confidence | Summary |
|---|---|---|
| Core statewide architecture confidence | High | § 5401, § 5407, § 5409, § 5411, § 5411a, § 5411b, § 5411d, and VCIC pages support the core registration/reporting/posting structure. |
| Publication completeness confidence | Medium | Strong enough for V2 preview, but visitor threshold, forms, fees, local preemption, and recent litigation require validation. |
| Local authority / preemption confidence | Medium-Low | A local ordinance exists in Rutland; enforceability/preemption not resolved. Do not publish a preemption conclusion without legal validation. |
| Forms and process confidence | Medium | VCIC process pages were live-validated, but out-of-state packet/forms/photo/fingerprint links need live check. |
| Recent law / litigation confidence | Low | Current statutes were checked, but pending bills and recent cases were not fully researched. |
| Visitor-question completeness confidence | Medium | Most core visitor questions are answered for preview; local rules, visitor thresholds, international travel, and school/family specifics need validation. |

# Ready-to-Feed Determination

**Ready to feed State Registry Output GPT?**  
Yes — with validation flags.

**Ready for V2 preview generation?**  
Yes — for preview only.

**Ready for production publication?**  
No.

**Blocking issues before production:**  
Validate local ordinance enforceability/preemption; validate visitor threshold; live-check forms/out-of-state process; run pending/recent law and litigation screens; confirm internet identifier, DMV/ID, fees, juvenile, and expungement/correction details.

**Recommended next step:**  
Run a Vermont production-validation pass focused on local ordinances/preemption, VCIC forms/out-of-state process, visitor threshold, and 2026 legislative/litigation updates before generating public V2 copy.
