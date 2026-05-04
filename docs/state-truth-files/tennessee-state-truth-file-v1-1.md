# Tennessee State Truth File v1.1

**State:** Tennessee  
**Conversion basis:** Existing SOLAR legacy state file (`src/data/state-registry/tn.ts`), retrofitted into STF v1.1  
**Research mode:** Retrofit with targeted official-source validation and gap research  
**New research added:** Live validation of TBI registry/process pages, public registry display, TBI-hosted indexed statute text for core Part 2 sections, Tennessee AG Opinion 09-05, pending-bill watchlist, current litigation posture checks, exact public-registry field list in § 40-39-206(d), and parent/minor-household language in § 40-39-211(c).  
**Publication posture:** Strong statewide architecture, strong reporting/deadline confidence, strong public-posting confidence, and strong warning posture. Production publication still requires live validation of § 40-39-217 from an official Tennessee source, current public-facing TBI forms/process links, juvenile-public-display details, local ordinance/preemption mapping, and recent litigation follow-up.

---

## Tennessee STF v1.1 Source Key Map

| Source key | Source label | Official URL | Source type | What it supports | Confidence | Validation status |
|---|---|---|---|---|---|---|
| TN-S1 | Tennessee Bureau of Investigation — Tennessee Sex Offender Registry landing page | https://www.tn.gov/tbi/law-enforcement-resources/law-enforcement-resources0/tennessee-sex-offender-registry.html | Agency process page | Official registry program, TBI ownership/maintenance, process entry point, public-site linkage. | High | URL validated in retrofit. |
| TN-S2 | TBI public registry individual profile pages | https://sor.tbi.tn.gov/details/00505801 | Public registry page | Public-display fields in practice, including address, employer, vehicles, criminal-history summary, demographics, driver-license data, reporting status, and registering agency. | High | URL validated in retrofit. |
| TN-S3 | ICJ Portal Help / FAQ — Tennessee registry terminology and statuses | https://tncrim.apps.tn.gov/tncrim/help.html | Agency FAQ / guidance | Reporting-type labels, status labels, TBI contact details, operational vocabulary used in registry practice. | High | URL validated in retrofit. |
| TN-S4 | TCA § 40-39-202 — Definitions | https://sor.tbi.tn.gov/api/vfs/40-39-202.pdf | Statute | Definitions including primary residence, secondary residence, offender categories, and 48-hour timing language reflected in indexed text. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S5 | TCA § 40-39-203 — Registration and reporting duties | https://sor.tbi.tn.gov/api/vfs/40-39-203.pdf | Statute | Initial registration, 48-hour deadlines, move-in/move-out reporting, out-of-state worker/student triggers, internet-identifier reporting, broad update duties. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S6 | TCA § 40-39-204 — Verification, fees, homelessness, international travel | https://sor.tbi.tn.gov/api/vfs/40-39-204.pdf | Statute | Annual/quarterly/monthly reporting, fees, homeless reporting, international-travel notice. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S7 | TCA § 40-39-206 — TBI record system and public disclosure | https://sor.tbi.tn.gov/api/vfs/40-39-206.pdf | Statute | Public-information architecture, exact public-field list, centralized TBI system, confidentiality rules for violent juvenile sexual offenders. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S8 | TCA § 40-39-211 — Residence/work/minor-household restrictions | https://sor.tbi.tn.gov/api/vfs/40-39-211.pdf | Statute | 1,000-foot residence/work restrictions, victim proximity rules, residence/overnight restrictions involving minors, parent exception structure. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit; parent/minor-household text additionally checked through current code source. |
| TN-S9 | TCA § 40-39-212 — Out-of-state, federal, military, diversion, and comparable offenses | https://sor.tbi.tn.gov/api/vfs/40-39-212.pdf | Statute | Outside-jurisdiction predicates and comparability framework. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S10 | TCA § 40-39-213 and driver-license designation law | https://sor.tbi.tn.gov/api/vfs/40-39-213.pdf and https://sor.tbi.tn.gov/api/vfs/Sex_Offender_Drivers_License_Law.pdf | Statute | State ID / driver-license designation requirement and possession requirement. | High | Official TBI-hosted PDF URLs identified; indexed content validated in retrofit. |
| TN-S11 | TCA § 40-39-214 — Mandatory disclosure to agencies and institutions | https://sor.tbi.tn.gov/api/vfs/40-39-214.pdf | Statute | Disclosure to law enforcement, schools, housing agencies, volunteer organizations, and background-check entities. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S12 | TCA § 40-39-215 — Minor-victim conduct/place restrictions | https://sor.tbi.tn.gov/api/vfs/40-39-215.pdf | Statute | Costume/enticement rules, unsupervised-minor work restrictions, certain vehicle-use restrictions, swimming-pool/body-of-water rental restriction. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S13 | TCA § 40-39-216 — Library restrictions | https://sor.tbi.tn.gov/api/vfs/40-39-216.pdf | Statute | Public-library authority to impose reasonable restrictions, including bans. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S14 | TCA § 40-39-217 — Local community notification systems and fee authority | Official URL: Not included in source packet — requires validation. | Statute | Local community-notification systems and possible local annual notification fee; does **not** currently support a broad claim of general local restriction authority from this packet alone. | Medium | Secondary code text reviewed; official Tennessee source still requires validation before production. |
| TN-S15 | TCA § 40-39-218 — Special termination path for certain trafficking-related aggravated prostitution cases | https://sor.tbi.tn.gov/api/vfs/40-39-218.pdf | Statute | Narrow special relief/termination pathway. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S16 | TCA § 40-39-205 — Forms, explanations, registration mechanics | https://sor.tbi.tn.gov/api/vfs/40-39-205.pdf | Statute | TBI forms, local-agency verification duties, photographs/fingerprints/vehicles/vessels, offender signatures, explanation of duties. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S17 | TCA § 40-39-208 — Violations and penalties | https://sor.tbi.tn.gov/api/vfs/40-39-208.pdf | Statute | Criminal enforcement and violation framework. | High | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S18 | Tennessee AG Opinion 09-05 | https://www.tn.gov/content/dam/tn/attorneygeneral/documents/ops/2009/op09-005.pdf | Agency guidance / legal opinion | 48-hour computation excludes weekends and holidays; next-business-day rule. | High | URL validated in retrofit. |
| TN-S19 | TBI Sex Offender Law Quick Reference | https://sor.tbi.tn.gov/api/vfs/Sex_Offender_Law_Quick_Reference.pdf | Agency FAQ / guidance | Agency summary of key registry-law sections, including school/library/Halloween-adjacent practical references. | Medium | Official TBI-hosted PDF identified; indexed content validated in retrofit. |
| TN-S20 | Tennessee General Assembly bill pages — HB 1922 / SB 2030 | https://wapp.capitol.tn.gov/apps/BillInfo/Default?BillNumber=HB1922&ga=114 and https://wapp.capitol.tn.gov/apps/BillInfo/default.aspx?BillNumber=SB2030&GA=114 | Pending bill / watchlist only | 2026 campground-notice proposal; watchlist only, not current law. | High | URLs validated in retrofit. |
| TN-S21 | SMART Office — jurisdictions substantially implementing SORNA | https://smart.ojp.gov/sorna/substantially-implemented | Agency guidance | Federal SORNA implementation posture for Tennessee. | High | URL validated in retrofit. |
| TN-S22 | DOJ Criminal Division — citizen guide to federal sex-offender registration law | https://www.justice.gov/criminal/criminal-ceos/citizens-guide-us-federal-law-sex-offender-registration | Agency guidance | Federal interstate/international overlay and 18 U.S.C. § 2250 framework. | High | URL validated in retrofit. |
| TN-S23 | Sixth Circuit Doe v. Lee opinion | https://www.opn.ca6.uscourts.gov/opinions.pdf/25a0125p-06.pdf | Court decision | Current federal appellate posture on Tennessee ex post facto litigation. | Medium-High | URL validated in retrofit. |
| TN-S24 | Tennessee appellate registry cases — James Harrell Driver / Rickey Driver | https://www.tncourts.gov/sites/default/files/driverjhopn.pdf and https://www.tncourts.gov/courts/court-criminal-appeals/opinions/2019/08/27/state-tennessee-v-rickey-driver | Court decision | Enforcement examples and Tennessee state-court treatment of registry violations/restrictions. | High | URLs validated in retrofit. |
| TN-S25 | Existing SOLAR legacy file (`src/data/state-registry/tn.ts`) | https://github.com/projectsolarrecon/Solar/blob/main/src/data/state-registry/tn.ts | Legacy SOLAR source inherited | Prior SOLAR analysis, warnings, source list, and practical framing used as conversion basis. | Medium | Legacy conversion source validated in retrofit; not itself a controlling source. |

---

## Local Authority / Preemption Analysis

**Core local-authority finding:**  
Tennessee clearly has a strong statewide registry architecture, but this packet does **not** yet validate a broad official preemption rule that clearly bars local governments from adding registry-related restrictions, and it also does **not** validate a broad official grant of local power to create independent registry-related residency/presence regimes. The only clear local-authority source located in this retrofit is § 40-39-217, which appears to concern **local community notification systems** and an associated local fee. That means Tennessee should **not** currently be summarized as either a clearly preempted state or a clearly broad-local-overlay state. For now, the correct STF posture is narrower: statewide restrictions are real and controlling; local community notification is clearly contemplated; broader local restriction authority remains **Unclear — validate**.

| Local-authority topic | Local authority posture | Analysis | Source keys | Validation status |
|---|---|---|---|---|
| Residence restrictions | Unclear — validate | Tennessee has a real statewide 1,000-foot residence/work framework under § 40-39-211. This retrofit did not validate an official Tennessee source expressly authorizing or preempting broader local residence ordinances. | TN-S8, TN-S14 | Requires local-preemption / ordinance sweep before production. |
| Presence/place restrictions | Unclear — validate | Tennessee has statewide child-focused and minor-victim place/contact restrictions, but this packet does not validate a broad local-authority rule for municipalities/counties to expand them. | TN-S8, TN-S12, TN-S14 | Requires local-law validation before production. |
| Parks / playgrounds / schools / child-care locations | Unclear — validate | These locations are already part of the statewide 1,000-foot framework. Broader local power beyond state law was not validated in this packet. | TN-S8, TN-S14 | Requires local-law validation. |
| Beaches / pools / public bathing places / recreation areas | Partially allowed | Tennessee itself now regulates some swimming-pool/body-of-water use/rental scenarios in minor-victim cases. Broader local ordinance authority for beaches/pools/recreation areas was not validated. | TN-S8, TN-S12 | Statewide baseline validated; broader local overlay requires validation. |
| Libraries / churches / public facilities / events | Partially allowed | Tennessee expressly authorizes public-library restrictions through library boards/administrators. That is institution-specific authority created by state law, not a general municipal free-for-all. Broader church/public-facility/event local authority was not validated. | TN-S13, TN-S19 | Library authority validated; broader local/event authority requires validation. |
| Shelters / transitional housing | Unclear — validate | No Tennessee statewide shelter-specific local-authority rule was validated. Shelter restrictions may still come from provider policy, lease terms, supervision, or local zoning, but those are separate overlays. | TN-S8, TN-S16 | Requires local/facility/supervision validation. |
| Local reporting / registration procedures | Partially allowed | State law controls duties and deadlines, but local designated registering agencies clearly administer intake, scheduling, forms, photos, fingerprints, and operational mechanics. | TN-S3, TN-S6, TN-S16 | State/local process split validated; local process details still need live check. |
| Halloween / holiday / event restrictions | Unclear — validate | Tennessee has statewide conduct restrictions that can affect Halloween-style activity in some minor-victim cases. This packet did not validate separate broad local holiday/event ordinance authority. | TN-S12, TN-S19 | Requires local ordinance and supervision validation. |

**Separation rule for downstream output:**  
Local ordinances are not the same as probation, parole, post-release supervision, court orders, treatment rules, family-court orders, school policies, employer rules, housing-provider rules, shelter policies, facility policies, or private lease terms. Tennessee V2 output should keep those overlays separate.

---

# Topic File

## 1. State posture summary

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Unclear — validate  

**Controlling rule:**  
Tennessee operates a strict, public, deadline-heavy registry system under TCA §§ 40-39-201 through -218. The packet validates fast reporting duties, broad public posting, annual or quarterly in-person reporting, monthly homeless reporting, driver-license/ID designation, international-travel notice, and substantial residence/work/minor-contact restrictions.

**Practical meaning:**  
Tennessee is not a light-touch state. A person can create felony exposure by missing a short deadline, misunderstanding residence thresholds, or assuming that only a permanent move counts.

**Scope / who is affected:**  
Nearly all adult registrants; especially people moving into Tennessee, moving within Tennessee, repeatedly visiting Tennessee, changing jobs/schools/online identifiers, traveling internationally, or dealing with unstable housing.

**What changes the answer:**  
Sexual offender vs violent sexual offender vs violent juvenile sexual offender; victim age; offender-against-children status; homelessness; supervision; out-of-state/federal/military predicate; local authority if later validated.

**Source keys / official sources:**  
TN-S1, TN-S4, TN-S5, TN-S6, TN-S7, TN-S8, TN-S10, TN-S11, TN-S12, TN-S17, TN-S18.

**Confidence:** High  

**Validation gaps:**  
Local ordinances / preemption, current public-facing forms/processes, juvenile-public-display detail, and litigation follow-up require additional live validation before production publication.

**V2 implications:**  
Tennessee’s `startHere` should lead with: 48-hour rule excluding weekends/holidays, broad public posting, annual vs quarterly reporting, and strong warnings on visit thresholds, homelessness, and international travel.

---

## 2. Who must register

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee requires registration for people convicted of qualifying sexual offenses / violent sexual offenses and comparable out-of-state, federal, military, and certain diversion-based cases when Tennessee reporting triggers are met.

**Practical meaning:**  
A person cannot safely assume Tennessee registration is avoided because the conviction occurred elsewhere or was handled under another jurisdiction’s terminology. Tennessee uses its own offense-comparability and trigger framework.

**Scope / who is affected:**  
Most adult qualifying convictions; many out-of-state, federal, and military predicates; some juvenile-pathway cases.

**What changes the answer:**  
Exact offense; victim age; adult conviction vs juvenile status; out-of-state equivalency; whether the person resides, works, studies, or otherwise establishes sufficient Tennessee presence.

**Source keys / official sources:**  
TN-S4, TN-S5, TN-S9, TN-S25.

**Confidence:** High for adult/out-of-state/federal/military cases; Medium for juvenile and edge-case comparability details.

**Validation gaps:**  
Juvenile-public-display and certain comparability edge cases should be validated before production publication.

**V2 implications:**  
Common question: “Do I have to register in Tennessee if my case was from another state?” should be answered strongly: assume yes-risk until Tennessee comparability/trigger analysis is checked.

---

## 3. Initial registration deadlines

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed  

**Controlling rule:**  
Tennessee requires reporting/registration within 48 hours after establishing or changing a primary or secondary residence, establishing qualifying physical presence, becoming employed or practicing a vocation, or becoming a student in Tennessee. AG Opinion 09-05 confirms weekends and holidays are excluded from the 48-hour computation.

**Practical meaning:**  
Tennessee initial registration is fast. The weekend/holiday exclusion helps, but the safer practical answer is still to treat trigger events as urgent and handle them immediately.

**Scope / who is affected:**  
Nearly all people entering Tennessee’s registry system through residence, work, school, or post-release triggers.

**What changes the answer:**  
Which trigger occurred; whether the person is coming from custody; whether the deadline lands on a weekend/holiday; whether the person is an out-of-state worker/student.

**Source keys / official sources:**  
TN-S5, TN-S16, TN-S18.

**Confidence:** High  

**Validation gaps:**  
Local sheriff/police process details and any appointment mechanics should be checked before publication.

**V2 implications:**  
Checklist should clearly state: Tennessee is a 48-hour state, but weekends and legal holidays do not count.

---

## 4. Ongoing reporting duties

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed  

**Controlling rule:**  
Tennessee requires prompt updates for residence, physical presence, employment/vocation, student status, and other form information. Online identifiers have a separate 3-day rule excluding holidays.

**Practical meaning:**  
Tennessee treats ordinary life changes as registry events. Missing an address/job/school update or forgetting the separate online-identifier clock can create a violation problem.

**Scope / who is affected:**  
Nearly all registrants.

**What changes the answer:**  
Type of change; whether the job change lasts long enough to count; whether the change is a general form update versus an online-identifier change.

**Source keys / official sources:**  
TN-S5, TN-S16.

**Confidence:** High  

**Validation gaps:**  
Current TBI forms should be validated before publication of precise update-checklist language.

**V2 implications:**  
Tennessee should have a prominent “changes that trigger reporting” section, with online identifiers separated from ordinary 48-hour updates.

---

## 5. Verification / re-registration schedule

**Topic posture:** Reporting cadence varies by designation  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed  

**Controlling rule:**  
Violent sexual offenders report in person quarterly. Sexual offenders report annually. Homeless offenders report monthly. Registry process help also reflects the annual-vs-quarterly reporting structure in practice.

**Practical meaning:**  
Not everyone reports on the same schedule. The practical Tennessee question is not “what tier am I,” but “am I treated as annual, quarterly, or monthly for reporting purposes?”

**Scope / who is affected:**  
All registrants, but cadence differs by designation and housing status.

**What changes the answer:**  
Sexual vs violent classification; homelessness; incarceration/medical exceptions; local-agency scheduling practice.

**Source keys / official sources:**  
TN-S3, TN-S6, TN-S24.

**Confidence:** High for annual/quarterly/monthly structure; Medium for exact operational birthday-window phrasing until direct full-text revalidation in production pass.

**Validation gaps:**  
Birthday-window language and agency appointment/process details should be checked before publication.

**V2 implications:**  
The output GPT should not flatten Tennessee into a generic “annual reporting” state.

---

## 6. Residence restrictions

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Unclear — validate  

**Controlling rule:**  
Tennessee bars sexual offenders and violent sexual offenders from establishing a primary or secondary residence or other living accommodation within 1,000 feet of listed child-focused places, and also imposes victim-proximity and minor-household restrictions in specified circumstances.

**Practical meaning:**  
Tennessee has a real statewide housing restriction. This is not just a supervision custom. Housing options can narrow quickly, especially in dense areas or in cases involving minor victims.

**Scope / who is affected:**  
Many registrants are affected by the 1,000-foot rule; additional minor-household restrictions affect certain people whose victim was a minor.

**What changes the answer:**  
Victim age; exact offense/designation; whether the location falls within the listed protected property categories; whether the residence involves minors; whether former victims or their families are involved; whether a parent exception applies.

**Source keys / official sources:**  
TN-S8, TN-S24.

**Confidence:** High for statewide rule; Low-Medium for broader local overlay until validated.

**Validation gaps:**  
Local ordinance/preemption sweep and precise operational measuring practices should be checked before production publication.

**V2 implications:**  
Housing section should say: Tennessee has a real statewide 1,000-foot housing/work framework, and separate family/minor-household rules may matter.

---

## 7. Presence / place restrictions

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Unclear — validate  

**Controlling rule:**  
Tennessee has statewide restrictions affecting some minor-victim registrants, including child-focused conduct restrictions and location-linked rules. The validated packet does **not** support a blanket statement that all Tennessee registrants are banned from all child-related public places.

**Practical meaning:**  
Tennessee place restrictions are serious, but not one-size-fits-all. The strongest statewide place/contact burdens concentrate around minor-victim scenarios and separate overlays like supervision or school/facility policy.

**Scope / who is affected:**  
Some / certain people — especially those whose victim was a minor.

**What changes the answer:**  
Victim age; type of place; whether the person is working/volunteering there; whether the contact would be direct and unsupervised; supervision/court/facility overlays; local authority if later validated.

**Source keys / official sources:**  
TN-S8, TN-S12, TN-S19.

**Confidence:** Medium-High  

**Validation gaps:**  
School-event, church/youth-event, and local ordinance questions need additional validation before production.

**V2 implications:**  
Common questions about parks/playgrounds/schools/libraries should distinguish minor-victim cases and separate overlays from any broad “all registrants” claim.

---

## 8. Employment restrictions

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Unclear — validate  

**Controlling rule:**  
Tennessee bars some jobs by location under the 1,000-foot framework and separately criminalizes certain direct, unsupervised minor-contact work in minor-victim cases.

**Practical meaning:**  
Tennessee does not appear to impose one universal all-jobs ban, but it does create real work barriers for child-focused jobs and jobs in child-focused locations.

**Scope / who is affected:**  
Many registrants; minor-victim cases face the strongest work restrictions.

**What changes the answer:**  
Victim age; worksite location; job duties; whether minors would be directly and unsupervisedly involved; supervision; licensing/employer rules.

**Source keys / official sources:**  
TN-S5, TN-S8, TN-S12.

**Confidence:** High  

**Validation gaps:**  
Professional licensing and employer-specific rules require separate validation before publication.

**V2 implications:**  
Employment FAQ should separate “Can I work near children?” from “What job changes must I report?”

---

## 9. Education / campus rules

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed  

**Controlling rule:**  
Becoming a student in Tennessee is a registration trigger. Tennessee also recognizes law-enforcement agencies of institutions of higher education in the registration architecture.

**Practical meaning:**  
The packet does not validate a blanket statewide “no college” rule. But school enrollment is a reportable event, and campus police/institutional policy/supervision can make attendance or participation more complicated.

**Scope / who is affected:**  
People enrolling in or otherwise participating in higher education; nonresident students; people with minor-victim-related restrictions.

**What changes the answer:**  
Student vs employee/volunteer status; institution type; campus police requirements; supervision; school policy; victim-age-linked restrictions.

**Source keys / official sources:**  
TN-S4, TN-S5, TN-S19.

**Confidence:** High on reporting; Medium on access restrictions because institution-specific policies were not mapped.

**Validation gaps:**  
Institution-specific policy and campus police practice need validation before publication.

**V2 implications:**  
Campus section should distinguish “must report / may be tracked” from “categorically prohibited.”

---

## 10. Internet / identifier rules

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee requires reporting of changed electronic-mail and internet communication identity information within 3 days, excluding holidays.

**Practical meaning:**  
Tennessee has a separate internet-identifier trap. Someone who understands the 48-hour residence/job/school rule can still get in trouble by forgetting the 3-day online-identifier rule.

**Scope / who is affected:**  
Nearly all registrants who use reportable online identifiers.

**What changes the answer:**  
Whether the identifier is used or intended to be used; whether the information is actually new/changed; whether the reporting period crosses a holiday.

**Source keys / official sources:**  
TN-S5.

**Confidence:** High  

**Validation gaps:**  
Current TBI forms and exact categories of online identifiers collected should be validated before production.

**V2 implications:**  
Add a high-visibility trap: “Online identifiers use a different deadline than ordinary address/job/school changes.”

---

## 11. Public registry visibility

**Topic posture:** Public posting broad  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed  

**Controlling rule:**  
Tennessee is a broad public-posting state. Section 40-39-206(d) identifies the public-information fields, and current public profiles confirm a substantial amount of personal and case-related information is visible. Tennessee also separately requires broad disclosure to agencies and institutions.

**Practical meaning:**  
Tennessee is not a narrow level-based public website state like Oregon. Public exposure is substantial, and institutional disclosure expands the practical visibility burden beyond the website itself.

**Scope / who is affected:**  
Most adult registrants; juvenile/public-display treatment is more limited and requires additional validation.

**What changes the answer:**  
Juvenile status; any statutory confidentiality exception; whether the person is posted as an offender against children.

**Source keys / official sources:**  
TN-S2, TN-S7, TN-S11.

**Confidence:** High for adult public posting; Medium for juvenile-public-display specifics.

**Validation gaps:**  
Juvenile-public-display details and any current website exceptions should be validated before production.

**V2 implications:**  
Common questions should include both “Who can see my information?” and “What exactly is public?” with Tennessee-specific detail.

---

## 12. Tiering / designation

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee’s practical designation framework is sexual offender vs violent sexual offender vs violent juvenile sexual offender, plus related labels like offender against children. Tennessee is not best described to readers as a simple public-facing Tier I/II/III state.

**Practical meaning:**  
Readers should not expect a clean SORNA-tier-style explanation. The practical Tennessee question is: which Tennessee designation applies, and what reporting/public/exposure consequences flow from it?

**Scope / who is affected:**  
All registrants.

**What changes the answer:**  
Offense type; victim age; juvenile status; out-of-state equivalency; offender-against-children labeling.

**Source keys / official sources:**  
TN-S2, TN-S3, TN-S4, TN-S9.

**Confidence:** High  

**Validation gaps:**  
Exact juvenile-designation and public-display interactions should be checked before publication.

**V2 implications:**  
Use “designation” rather than generic tier language for Tennessee.

---

## 13. Duration of registration

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee allows some people to seek termination after the statutory waiting period, but many others remain subject to long-term or lifetime registration based on offense/designation.

**Practical meaning:**  
Tennessee is not a universal-lifetime state in the same absolute way Florida often functions in practice, but it is also not a broadly forgiving relief state. For many people, the real-world burden remains very long term.

**Scope / who is affected:**  
Nearly all registrants, but duration differs materially by offense/designation and relief eligibility.

**What changes the answer:**  
Violent vs nonviolent designation; exact offense; compliance history; expungement; special statutory relief; disqualifying facts.

**Source keys / official sources:**  
TN-S15, TN-S25.

**Confidence:** Medium-High  

**Validation gaps:**  
Exact statutory exclusion list and current administrative process for termination should be rechecked before production.

**V2 implications:**  
Duration language should be: “Removal exists, but many people remain long-term or for life.”

---

## 14. Removal / termination / reclassification

**Topic posture:** Removal meaningful  
**Rule status:** CONDITIONAL RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee provides a real but narrow termination path for some registrants, plus expungement-related removal and a special trafficking-related aggravated-prostitution pathway.

**Practical meaning:**  
These are real legal pathways, not automatic off-ramps. Removal should not be presented as routine or easy.

**Scope / who is affected:**  
Some / certain people only.

**What changes the answer:**  
Offense category; violent-vs-nonviolent status; compliance history; expungement eligibility; trafficking-victim facts; supporting documentation.

**Source keys / official sources:**  
TN-S15, TN-S25.

**Confidence:** High that relief exists; Medium for process/form detail until validated.

**Validation gaps:**  
Current TBI forms/process and exact exclusion list should be validated before publication.

**V2 implications:**  
Removal FAQ should be blunt: “Possible for a narrower group; not realistic for everyone.”

---

## 15. Moving into the state

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed  

**Controlling rule:**  
Out-of-state offenders who establish a primary or secondary residence, qualifying physical presence, employment/vocation, or student status in Tennessee must report/register within the Tennessee deadlines.

**Practical meaning:**  
A person moving to Tennessee should plan before arrival. Tennessee’s triggers are broad enough that even nonresident work/student activity can create obligations.

**Scope / who is affected:**  
Most people entering Tennessee with qualifying out-of-state/federal/military registration exposure.

**What changes the answer:**  
Whether the person is moving, repeatedly staying, working, or studying in Tennessee; how many days are involved; whether the person is coming from custody or supervision.

**Source keys / official sources:**  
TN-S4, TN-S5, TN-S9, TN-S18.

**Confidence:** High  

**Validation gaps:**  
Local intake process should be validated before publication.

**V2 implications:**  
Checklist should warn incoming movers/workers/students not to wait to “settle in” first.

---

## 16. Moving out of the state

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed  

**Controlling rule:**  
Tennessee requires reporting when a registrant intends to move to another state and expects destination-address information to be provided within the statutory timeline.

**Practical meaning:**  
Leaving Tennessee is not the end of Tennessee’s duties. Tennessee expects notice, and getting the exit wrong can itself create a compliance problem.

**Scope / who is affected:**  
Nearly all Tennessee registrants who move out of state.

**What changes the answer:**  
Whether the move is definite enough to count; whether the destination address is known; whether supervision approval is required first.

**Source keys / official sources:**  
TN-S5, TN-S11, TN-S17.

**Confidence:** High  

**Validation gaps:**  
Current agency process/forms for moving out should be validated before publication.

**V2 implications:**  
Moving-out checklist should be its own item, not folded into generic interstate travel language.

---

## 17. Visiting / temporary lodging / in-state travel

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee defines primary residence and secondary residence in a way that can capture repeated visits, hotel stays, recurring work trips, and repeated stays with family or friends.

**Practical meaning:**  
Tennessee is a real temporary-presence trap state. People should not assume that only a permanent move matters.

**Scope / who is affected:**  
Many nonresidents who spend repeated or extended time in Tennessee.

**What changes the answer:**  
Consecutive days, aggregate annual days, monthly days, work/student status, and qualifying physical presence.

**Source keys / official sources:**  
TN-S4, TN-S5.

**Confidence:** High  

**Validation gaps:**  
Temporary-lodging counting guidance and local process details should be validated before publication.

**V2 implications:**  
Common question “What if I only visit temporarily?” should get a strong Tennessee-specific answer with thresholds, not vague language.

---

## 18. Interstate travel / federal SORNA overlay

**Topic posture:** Statewide baseline plus federal overlay  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee operates within the broader SORNA architecture, and federal law separately criminalizes certain knowing failures to register/update when interstate or foreign travel is involved.

**Practical meaning:**  
A Tennessee compliance problem can also become a federal problem. Leaving Tennessee does not erase Tennessee duties or federal exposure.

**Scope / who is affected:**  
Many registrants, especially interstate movers and people with federal/tribal/military predicates.

**What changes the answer:**  
Predicate offense source, travel, tribal/federal status, and whether the person knowingly failed to update.

**Source keys / official sources:**  
TN-S21, TN-S22.

**Confidence:** High  

**Validation gaps:**  
Tribal-jurisdiction edge cases should be validated before publication.

**V2 implications:**  
Separate Tennessee state-law duties from federal SORNA / § 2250 overlay.

---

## 19. International travel

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee requires advance notice for international travel, with limited emergency/frequent-work-travel variations.

**Practical meaning:**  
International travel is not a casual late-notice issue in Tennessee. People should expect advance reporting to matter.

**Scope / who is affected:**  
Nearly all registrants traveling internationally.

**What changes the answer:**  
Whether the trip is ordinary travel, emergency travel, or frequent work travel with written approval.

**Source keys / official sources:**  
TN-S6, TN-S22.

**Confidence:** High  

**Validation gaps:**  
Current TBI international-travel process/forms should be validated before publication.

**V2 implications:**  
The page should prominently state Tennessee’s advance international-travel notice requirement.

---

## 20. Unstable housing / homelessness / transient status

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee treats people without a primary or secondary residence as homeless and requires monthly reporting.

**Practical meaning:**  
Homelessness does not suspend Tennessee registry duties. It increases the reporting burden.

**Scope / who is affected:**  
Some / certain people without qualifying primary or secondary residence.

**What changes the answer:**  
Whether the person truly lacks both a primary and secondary residence; whether a recurring lodging pattern crosses Tennessee’s threshold definitions.

**Source keys / official sources:**  
TN-S4, TN-S6, TN-S2.

**Confidence:** High  

**Validation gaps:**  
Current homeless-reporting procedure/forms should be validated before publication.

**V2 implications:**  
Homelessness FAQ should answer directly: monthly reporting is required.

---

## 21. Fees and costs

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed  

**Controlling rule:**  
Tennessee imposes administrative costs and appears to allow an additional local annual community-notification fee where a locality has established a qualifying notification system.

**Practical meaning:**  
Fees are not the biggest Tennessee burden, but they are still part of the compliance structure. Local notification fees should not be treated as universal until adoption is validated locality by locality.

**Scope / who is affected:**  
Many registrants; local notification fee exposure depends on locality and adoption.

**What changes the answer:**  
Classification, local-notification-system status, ability to pay, and any applicable exceptions.

**Source keys / official sources:**  
TN-S6, TN-S14, TN-S17, TN-S3.

**Confidence:** Medium-High  

**Validation gaps:**  
Current fee schedule and local notification-fee adoption map should be validated before publication.

**V2 implications:**  
Separate statewide fees from optional local notification fees.

---

## 22. Driver license / ID / marking requirements

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee requires eligible resident offenders to obtain and always possess a properly designated state driver license or photo identification reflecting registry status.

**Practical meaning:**  
This is a major practical exposure issue. Tennessee identification is not neutral for registrants.

**Scope / who is affected:**  
Nearly all resident registrants who are eligible for Tennessee-issued identification.

**What changes the answer:**  
Resident status; age; juvenile status; indigency; eligibility for state-issued ID.

**Source keys / official sources:**  
TN-S10.

**Confidence:** High  

**Validation gaps:**  
Department of Safety process page and exact current marking/designation language should be validated before publication.

**V2 implications:**  
Common question should answer this directly rather than burying it in reporting mechanics.

---

## 23. Vehicles, vessels, and property reporting

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee’s registration architecture requires tracking/reporting of vehicles and vessels, and public profiles show vehicle data in practice.

**Practical meaning:**  
Vehicle information is part of Tennessee’s registry identity package, not a minor side item.

**Scope / who is affected:**  
Nearly all registrants who own/use reportable vehicles or vessels.

**What changes the answer:**  
Whether the vehicle/vessel is within the information collected on the current TBI forms; ownership/use changes; local intake practice.

**Source keys / official sources:**  
TN-S2, TN-S5, TN-S16.

**Confidence:** High for core reporting concept; Medium for exact field detail until current forms are validated.

**Validation gaps:**  
Current TBI forms and any administrative rules on exact vehicle/vessel fields should be validated before publication.

**V2 implications:**  
Checklist should include vehicles/vessels among primary update triggers.

---

## 24. Family, parenting, and household issues

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
For certain registrants whose victim was a minor, Tennessee bars knowingly residing or conducting an overnight visit at a residence where a minor resides or is present. Tennessee also preserves a parent-based exception, but that exception has explicit disqualifiers.

**Practical meaning:**  
Tennessee family/child household answers are not a simple “always yes” or “always no.” The parent exception is real, but it is not unlimited.

**Scope / who is affected:**  
Many people whose victim was a minor; some other people through victim/family no-contact or supervision overlays.

**What changes the answer:**  
Victim age; parental status; whether parental rights are being terminated; whether the offender’s own child was a victim; whether the offense involved a child age 12 or younger and a circuit court has found substantial danger; custody/supervision orders.

**Source keys / official sources:**  
TN-S8.

**Confidence:** High for the existence of the restriction and parent exception; Medium for broader household/family-law implications outside the statute.

**Validation gaps:**  
Family-court, child-welfare, and supervision overlays should be validated before publication.

**V2 implications:**  
The V2 page should clearly distinguish “Can I live with children?” from “Can I live with my own biological/adoptive children?” and preserve the parent-exception/disqualifier structure.

---

## 25. Supervision overlays

**Topic posture:** No blanket statewide rule, but supervision/local/case-specific rules may apply  
**Rule status:** NO STATEWIDE RULE FOUND — STRENGTHENED  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Part 2 does not answer every day-to-day supervision question. It does, however, integrate supervising officials into the registry system and expects them to explain and enforce duties.

**Practical meaning:**  
Do not confuse “not in the registry statute” with “allowed.” Tennessee supervision can be stricter than the bare registry law on housing, contact, work, travel, internet, and daily movement.

**Scope / who is affected:**  
Many people on probation, parole, community corrections, or supervised release.

**What changes the answer:**  
Whether the person is on supervision; exact special conditions; treatment recommendations; no-contact orders; interstate compact status.

**Sources checked:**  
TBI / Tennessee registry process and form architecture; ICJ portal help; disclosure / supervision integration provisions.

**Whether local authority is allowed/preempted/unclear/not applicable:**  
Not applicable. This is a supervision overlay, not a local-ordinance issue.

**Whether supervision, court orders, facility policies, or case-specific conditions may still apply:**  
Yes. Those overlays may be stricter than Part 2 itself.

**Whether agency forms were checked:**  
Partially. Forms architecture was validated, but current public blank forms were not fully validated.

**Whether administrative rules were checked:**  
Not comprehensively in this retrofit.

**Confidence level:**  
High.

**What must be validated before stronger public language:**  
Current TDOC/community-corrections directives and common special-condition patterns.

**Source keys / official sources:**  
TN-S3, TN-S7, TN-S16.

**Confidence:** High  

**Validation gaps:**  
TDOC/community-corrections/special-condition sources should be checked before production step-by-step guidance.

**V2 implications:**  
Use a clear separate-overlay warning: supervision can be stricter than the registry statute.

---

## 26. Juvenile registration

**Topic posture:** Conditional statewide rule  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee includes a violent juvenile sexual offender pathway in the registry framework, and violent juvenile sexual offenders are separately referenced in reporting and ID-designation provisions.

**Practical meaning:**  
Tennessee juvenile treatment is not the same as “juveniles never register.” But the public-display, confidentiality, and process details need a more careful production pass.

**Scope / who is affected:**  
Some / certain juveniles in the violent-juvenile category.

**What changes the answer:**  
Age; adjudication posture; violent juvenile sexual offender status; age-18 transition; public-display/confidentiality provisions.

**Source keys / official sources:**  
TN-S3, TN-S6, TN-S7, TN-S10.

**Confidence:** Medium-Low  

**Validation gaps:**  
Juvenile-public-display, confidentiality, duration, and relief details should be validated before publication.

**V2 implications:**  
Juvenile answers should be cautious and clearly marked as validation-sensitive.

---

## 27. Out-of-state, federal, military, and tribal cases

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee applies registration duties to many outside-jurisdiction predicates and to qualifying out-of-state/federal/military offenders who establish Tennessee residence, work, school, or qualifying presence.

**Practical meaning:**  
A person arriving from another jurisdiction should not assume Tennessee will simply mirror the other jurisdiction’s lighter burden or shorter duration.

**Scope / who is affected:**  
Most out-of-state/federal/military registrants who meet Tennessee reporting triggers.

**What changes the answer:**  
Offense comparability; Tennessee contact threshold; tribal/federal/military posture; whether the person is already required to register elsewhere.

**Source keys / official sources:**  
TN-S5, TN-S9, TN-S21.

**Confidence:** High for out-of-state/federal/military framework; Medium for tribal-specific edge cases.

**Validation gaps:**  
Tribal-jurisdiction treatment should be validated before publication.

**V2 implications:**  
Incoming out-of-state FAQ should be strong: Tennessee applies its own rules once Tennessee triggers are met.

---

## 28. Enforcement and penalties

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee criminalizes knowing violations of the registry law, including failures to timely register, report, disclose, and comply with form/process duties.

**Practical meaning:**  
This is an enforcement state. Tennessee registry duties are not just administrative housekeeping.

**Scope / who is affected:**  
Nearly all registrants.

**What changes the answer:**  
Which specific duty was violated; knowledge/proof issues; ability to pay; whether supervision was also violated.

**Source keys / official sources:**  
TN-S17, TN-S22, TN-S24.

**Confidence:** High  

**Validation gaps:**  
Specific grading/sentencing details for each subsection should be checked before publication.

**V2 implications:**  
The page should identify missed updates, travel/move failures, and paperwork falsification as major trap points.

---

## 29. Local ordinances / preemption

**Topic posture:** Local authority unclear; validation required  
**Rule status:** LOCAL AUTHORITY REQUIRES VALIDATION  
**Local authority posture:** Unclear — validate  

**Controlling rule:**  
The only local-government power clearly identified in this retrofit is § 40-39-217, which appears to authorize local community-notification systems and an associated fee. This packet does not validate a broad official Tennessee rule either clearly authorizing or clearly preempting broader local registry restrictions.

**Practical meaning:**  
Tennessee should not currently be summarized as “locals can always add more.” The safer and more accurate STF posture is: local community notification is clearly contemplated; broader local restriction authority remains unresolved and must be validated directly.

**Scope / who is affected:**  
Some / certain people depending on county/city and any validated local enactments.

**What changes the answer:**  
Locality; existence of a community-notification system; existence of separate local ordinances; library-board restrictions; supervision/facility overlays.

**Source keys / official sources:**  
TN-S13, TN-S14.

**Confidence:** Low-Medium  

**Validation gaps:**  
A real local ordinance / preemption map is required before production publication.

**V2 implications:**  
Avoid overbroad “locals can be stricter” language until validated.

---

## 30. Recent enacted changes

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
The packet reflects recent updates including the clarified 48-hour weekends/holidays computation and later amendments affecting child-location / swimming-pool/body-of-water issues.

**Practical meaning:**  
Older Tennessee summaries can become stale. This is a registry system that continues to change.

**Scope / who is affected:**  
Many registrants, especially people affected by child-location, minor-victim, and ID/reporting changes.

**What changes the answer:**  
Effective date, offense date, retroactivity posture, and current litigation status.

**Source keys / official sources:**  
TN-S4, TN-S10, TN-S12, TN-S18, TN-S23.

**Confidence:** Medium  

**Validation gaps:**  
Direct public-chapter/session-law validation should be completed before production publication.

**V2 implications:**  
Add a state-page update note warning against stale older summaries.

---

## 31. Pending legislation / watchlist

**Topic posture:** Requires validation  
**Rule status:** PENDING / WATCHLIST ONLY  
**Local authority posture:** Not applicable  

**Controlling rule:**  
The current watchlist item validated in this retrofit is the 2026 campground-notice proposal (HB 1922 / SB 2030), which is not current law based on the validated bill pages.

**Practical meaning:**  
Do not present campground-notice duties as current Tennessee law unless status changes.

**Scope / who is affected:**  
Would affect many overnight travelers if enacted; not current law in this retrofit.

**What changes the answer:**  
Bill status, enactment, effective date, and implementation.

**Source keys / official sources:**  
TN-S20.

**Confidence:** High on current pending/watchlist status.  

**Validation gaps:**  
Bill status must be rechecked before publication.

**V2 implications:**  
Watchlist only; do not place in current-law fields.

---

## 32. Recent litigation and controlling cases

**Topic posture:** Requires validation  
**Rule status:** CONDITIONAL RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee’s registry law remains enforceable, but ongoing constitutional litigation continues to matter, especially around retroactivity/ex post facto issues.

**Practical meaning:**  
Tennessee should not be described as either fully invalidated or untouched by serious constitutional challenge. Both are misleading.

**Scope / who is affected:**  
Many registrants, especially people with older pre-2004 conviction timelines or retroactivity arguments.

**What changes the answer:**  
Offense date; retroactivity posture; whether the person has an individual court order or injunction; whether the challenge is facial or as-applied.

**Source keys / official sources:**  
TN-S23, TN-S24.

**Confidence:** Medium  

**Validation gaps:**  
Post-2025 procedural follow-up and any later injunction/order developments should be checked before production.

**V2 implications:**  
StatePageUpdateNotes should flag ongoing litigation without overstating it as broad statewide nullification.

---

## 33. Agency practice vs statutory text

**Topic posture:** Requires validation  
**Rule status:** CONDITIONAL RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
TBI maintains the registry, public site, and forms, while local agencies and supervision actors administer significant process mechanics. Public profiles and agency help confirm operational fields and status labels visible in practice.

**Practical meaning:**  
In Tennessee, website/process reality matters alongside statutory text. But quick-reference and public-profile observations should not replace direct statutory/form validation where precise production language matters.

**Scope / who is affected:**  
Nearly all registrants.

**What changes the answer:**  
Local agency practice; TBI form revisions; whether the point comes from statute, quick-reference guidance, or public-profile observation.

**Source keys / official sources:**  
TN-S1, TN-S2, TN-S3, TN-S16, TN-S19.

**Confidence:** Medium-High  

**Validation gaps:**  
Current forms and any administrative rules should be validated before final publication.

**V2 implications:**  
Source-confidence notes should distinguish direct statutory validation from agency-summary or observed public-profile information.

---

## 34. Forms and process links

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Partially allowed  

**Controlling rule:**  
TBI creates and distributes forms, and local designated registering agencies administer them. Official process entry points are validated, but current public-facing blank forms were not fully surfaced in this retrofit.

**Practical meaning:**  
We know Tennessee’s form/process architecture is real. We do **not** yet have a production-ready set of current public blank forms/process links.

**Scope / who is affected:**  
Nearly all registrants.

**What changes the answer:**  
Registering agency; supervision/custody status; whether the needed form is public-facing or obtained only through the agency.

**Source keys / official sources:**  
TN-S1, TN-S3, TN-S16.

**Confidence:** Medium-Low  

**Validation gaps:**  
Current registration, update, removal, homelessness, and international-travel forms/process links should be validated before publication.

**V2 implications:**  
Source map can include TBI process entry points now, but production should wait for direct forms validation.

---

## 35. Practical checklist inputs

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Tennessee’s practical checklist inputs include residence status, number of days in-state, employment/vocation, student status, internet identifiers, vehicles/vessels, minors in the residence, designated ID, and international travel.

**Practical meaning:**  
A Tennessee checklist must ask more than “where do you live?” It should capture visit thresholds, work/school, online identifiers, household minors, vehicles, and travel.

**Scope / who is affected:**  
Nearly all registrants.

**What changes the answer:**  
Residence threshold facts, job duration, student status, online activity, household composition, travel plans.

**Source keys / official sources:**  
TN-S4, TN-S5, TN-S6, TN-S10, TN-S16.

**Confidence:** High  

**Validation gaps:**  
Current forms should be validated before mirroring exact field wording.

**V2 implications:**  
Output GPT should build Tennessee checklist prompts around threshold facts and update triggers.

---

## 36. Common mistakes / compliance traps

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
The strongest validated Tennessee traps are: miscounting the 48-hour rule, forgetting weekends/holidays treatment, overlooking repeated-visit thresholds, missing the separate online-identifier deadline, failing to report homelessness monthly, mishandling move-out notice, and neglecting international-travel notice.

**Practical meaning:**  
The biggest Tennessee mistakes are deadline mistakes and threshold mistakes.

**Scope / who is affected:**  
Nearly all registrants.

**What changes the answer:**  
Travel frequency, online-account changes, irregular work patterns, unstable housing, and supervision overlays.

**Source keys / official sources:**  
TN-S4, TN-S5, TN-S6, TN-S17, TN-S18, TN-S24.

**Confidence:** High  

**Validation gaps:**  
Current forms/process instructions should be checked before publication of exact step-by-step trap-prevention language.

**V2 implications:**  
Tennessee’s `commonQuestions` and `startHere` should aggressively foreground accidental-trap prevention.

---

## 37. Glossary / terms

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable  

**Controlling rule:**  
Key Tennessee terms validated in this retrofit include primary residence, secondary residence, sexual offender, violent sexual offender, violent juvenile sexual offender, offender against children, register, report, and the annual/quarterly reporting-type concepts used operationally.

**Practical meaning:**  
Many Tennessee answers are really definition answers. Whether something counts as a primary/secondary residence or whether a person falls into a more restrictive designation can change everything.

**Scope / who is affected:**  
Nearly all registrants.

**What changes the answer:**  
Exact statutory definitions and classification status.

**Source keys / official sources:**  
TN-S3, TN-S4, TN-S5.

**Confidence:** High  

**Validation gaps:**  
Full direct text extraction of all definitions should be validated before final glossary publication.

**V2 implications:**  
Glossary should emphasize Tennessee residence thresholds and designation labels.

---

## 38. Source confidence and validation notes

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable  

**Controlling rule:**  
The strongest live-validated sources in this retrofit are the TBI pages, TBI-hosted indexed statutes, AG Opinion 09-05, Tennessee courts sources, and General Assembly bill pages. The weakest current points are local-authority/preemption, current blank forms/process links, juvenile-public-display details, and post-2025 litigation follow-up.

**Practical meaning:**  
The Tennessee STF is strong enough for V2 preview generation, but not yet clean enough for production publication without another narrow validation pass.

**Scope / who is affected:**  
All downstream Output GPT use.

**What changes the answer:**  
Whether the target is preview generation or production publication.

**Source keys / official sources:**  
TN-S1 through TN-S25.

**Confidence:** High for statewide core architecture; Medium for publication completeness.  

**Validation gaps:**  
See Missing STF Fields / Topics Requiring Live Validation sections below.

**V2 implications:**  
Use validation flags in `sourceConfidence` and `statePageUpdateNotes`.

---

## 39. V2 field recommendations

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable  

**Controlling rule:**  
The core Tennessee truths validated here are: fast 48-hour rule excluding weekends/holidays, annual vs quarterly reporting, monthly homeless reporting, visit/residence thresholds, broad public posting, strong statewide housing/work restrictions, separate online-identifier rule, 21-day international-travel notice, meaningful-but-narrow relief, and unresolved broader local restriction authority beyond community notification.

**Practical meaning:**  
Tennessee V2 should be confident about statewide architecture but restrained about local overlays and production-level procedural detail until the remaining gaps are checked.

**Scope / who is affected:**  
Output GPT only.

**What changes the answer:**  
Whether the target is preview or production.

**Source keys / official sources:**  
TN-S4, TN-S5, TN-S6, TN-S7, TN-S8, TN-S10, TN-S14, TN-S15, TN-S18.

**Confidence:** High for preview architecture; Medium for production completeness.  

**Validation gaps:**  
Local authority/preemption, current forms/process links, juvenile details, and litigation follow-up remain open.

**V2 implications:**  
- `startHere`: Tennessee moves fast; 48 hours; weekends/holidays excluded; do not wait.  
- `commonQuestions`: separate answers for living, visiting, work, family/children, online identifiers, homelessness, international travel, and removal.  
- `terms`: primary residence, secondary residence, sexual offender, violent sexual offender, offender against children.  
- `sourceMap`: distinguish live-validated official sources from inherited legacy and partially validated secondary code text.  
- `sourceConfidence`: high core confidence, medium process/local confidence.  
- `statePageUpdateNotes`: local-authority posture unresolved beyond community-notification systems; forms, juvenile detail, and litigation follow-up still need validation.

---

# Visitor Question Coverage Check

| Question | Status | STF-grounded explanation |
|---|---|---|
| 1. Where can I live? | Answered confidently | Tennessee has statewide 1,000-foot residence restrictions tied to listed child-focused places, plus victim-proximity and minor-household rules in some cases. |
| 2. Can I live with family? | Partially answered | Sometimes yes, sometimes no; Tennessee’s minor-household rule and victim/family proximity rules can block family living arrangements, but parent exceptions and other overlays matter. |
| 3. Can I live with children? | Partially answered | Not safely answerable as a universal yes/no; minor-victim registrants face statewide restrictions, and family-court/supervision overlays can add more. |
| 4. Can I live with my own biological/adoptive children? | Partially answered | Tennessee preserves a parent-based exception, but that exception has explicit disqualifiers and can be narrowed by court findings, custody orders, and supervision. |
| 5. Can I attend my child’s school event? | Partially answered | Tennessee has school/youth-related restrictions in some scenarios, but exact school-event access still depends on offense profile, school policy, supervision, and facts not fully mapped here. |
| 6. Can I go to parks, playgrounds, beaches, pools, libraries, churches, or youth events? | Partially answered | Parks/playgrounds are central to statewide housing/work rules; pools/body-of-water issues matter in some minor-victim cases; library boards can restrict or ban access; broader facility/event questions still need scenario-specific validation. |
| 7. Can I work near children? | Answered confidently | Tennessee bars some jobs by location and bars certain direct unsupervised-minor work in minor-victim cases. |
| 8. Can I attend college or trade school? | Partially answered | No blanket statewide no-college rule was validated, but becoming a student triggers reporting and campus/institution overlays can matter. |
| 9. Who can see my information? | Answered confidently | The public can see broad information online, and Tennessee also pushes information to agencies and institutions through separate disclosure provisions. |
| 10. What exactly is public? | Answered confidently | Section 40-39-206(d) identifies a detailed public-field list, and current public profiles broadly match that architecture. |
| 11. How often do I report? | Answered confidently | Annual if classified as sexual offender; quarterly if violent sexual offender; monthly if homeless. |
| 12. What changes trigger reporting? | Answered confidently | Residence/presence/work/student changes, other form changes, some employment changes, online-identifier changes, move-out notice, and international-travel notice. |
| 13. What if I am homeless or transient? | Answered confidently | Tennessee treats lack of both primary and secondary residence as homelessness and requires monthly reporting. |
| 14. What if I visit temporarily? | Answered confidently | Tennessee uses five-day, fourteen-day-per-year, and four-day-per-month thresholds that can turn repeated visits into registration triggers. |
| 15. What if I move in or out? | Answered confidently | Move-in and move-out both have separate reporting duties, generally on a 48-hour timetable. |
| 16. Can I travel internationally? | Answered confidently | Yes, but Tennessee requires advance notice and federal law adds overlay risk. |
| 17. Can I get removed, reclassified, or off the public site? | Partially answered | Some registrants can seek termination through narrow statutory paths, but many others remain long-term or for life. |
| 18. What are the biggest accidental compliance traps? | Answered confidently | Deadline mistakes, visit-threshold mistakes, online-identifier mistakes, homelessness monthly-reporting failures, and travel/move reporting failures. |
| 19. What must I verify locally? | Requires validation | Local community-notification systems are clearly contemplated; broader local restriction authority remains unresolved and requires locality-specific checking. |
| 20. What must I verify with supervision/court orders? | Answered confidently | Supervision, court orders, family court, treatment, schools, employers, and facilities can all add stricter overlays than the bare statute. |

---

# Missing STF Fields

- local ordinance map  
- preemption/local-authority gaps  
- current agency forms  
- current driver license/ID process page  
- current fee schedule / local notification fee adoption map  
- juvenile process details  
- juvenile public-posting/confidentiality details  
- relief/reclassification forms  
- current administrative rules  
- temporary visitor/hotel-counting implementation guidance  
- homelessness/transient procedure details  
- post-2025 litigation follow-up

---

# Contradictions or Near-Contradictions Detected

1. **Tension:** Prior Tennessee material implied broader local power to impose stricter restrictions and cited § 40-39-217, but the validated packet only supports § 40-39-217 as a community-notification / fee source, not a clean general local-restriction grant.  
   **Resolution for later V2 output:** Do not say “locals can be stricter” as a default Tennessee rule. Say local community notification is contemplated; broader local restriction authority remains unresolved pending ordinance validation.

2. **Tension:** Tennessee is a broad public-posting state, but juvenile treatment is not fully mapped and violent juvenile sexual offender information is treated differently in at least some contexts.  
   **Resolution for later V2 output:** Present Tennessee as broadly public-posting for adults, while flagging juvenile-public-display/confidentiality details for validation.

3. **Tension:** Tennessee has meaningful relief mechanisms, but practical duration remains lifetime or near-lifetime for many people.  
   **Resolution for later V2 output:** Use “removal exists, but narrow,” not “Tennessee offers meaningful off-ramp for most people.”

4. **Tension:** Tennessee directly restricts living/overnight stays where minors reside or are present in some cases, but also preserves a parent exception with explicit disqualifiers and court-process complications.  
   **Resolution for later V2 output:** Do not publish flat yes/no answers about living with one’s own children without preserving the statutory parent-exception/disqualifier structure.

5. **Tension:** Tennessee’s registry law is enforceable and routinely prosecuted, but serious constitutional retroactivity litigation remains active.  
   **Resolution for later V2 output:** Describe litigation as important and ongoing, but do not imply broad statewide invalidation absent a controlling order applicable to the reader.

6. **Tension:** TBI-hosted statute files are visible through indexed results and URL patterning, but current public-facing forms/process links are not yet production-ready in this packet.  
   **Resolution for later V2 output:** Treat statewide legal architecture as strong enough for preview, but keep a forms/process validation flag before production publication.

---

# Topics Requiring Live Validation Before Publication

- official Tennessee-government or TBI source for § 40-39-217  
- current public-facing TBI registration/update/removal/homelessness/international-travel forms  
- current Department of Safety driver-license / ID process page  
- local ordinance / preemption map by county/city  
- current local notification fee adoption map  
- juvenile public-posting/confidentiality process details  
- current administrative rules implementing registry process  
- post-2025 litigation follow-up affecting Doe v. Lee or related Tennessee retroactivity cases

---

# Split Source Confidence Summary

| Area | Confidence | Summary |
|---|---|---|
| Core statewide architecture confidence | High | Tennessee’s core structure is strongly supported by live-validated TBI pages, TBI-hosted indexed statute text, AG Opinion 09-05, and court sources. |
| Publication completeness confidence | Medium | Strong enough for V2 preview, but not yet clean enough for production publication because forms/process/local/juvenile/litigation details remain open. |
| Local authority / preemption confidence | Low | Local community notification is clear; broader local restriction authority/preemption remains unresolved in this packet. |
| Forms and process confidence | Medium-Low | TBI process architecture is validated, but current public blank forms/process links were not fully surfaced. |
| Recent law / litigation confidence | Medium | Important pending bill and current litigation posture were checked, but recent session-law tracing and litigation follow-up still need another pass. |
| Visitor-question completeness confidence | Medium-High | Most major visitor questions are answerable now, but local rules, juvenile treatment, forms/process, and some family/school-event details still need validation. |

---

# Ready-to-Feed Determination

**Ready to feed State Registry Output GPT?**  
Yes — with validation flags.

**Ready for V2 preview generation?**  
Yes — for preview only.

**Ready for production publication?**  
No.

**Blocking issues before production:**  
- official-source validation for § 40-39-217  
- current public-facing TBI forms/process links  
- local ordinance / preemption validation  
- juvenile public-display/confidentiality details  
- driver-license process-page validation  
- recent litigation follow-up

**Recommended next step:**  
Do one final Tennessee production-validation pass limited to: official-source validation for § 40-39-217, current TBI forms/process links, Department of Safety ID-process page, juvenile public-display/confidentiality detail, and local ordinance/preemption mapping.
