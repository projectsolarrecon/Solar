# Texas State Truth File v1.1

**State:** Texas  
**Conversion basis:** Existing SOLAR legacy state file plus targeted official-source gap research  
**Research mode:** STF v1.1 retrofit and gap-research mode  
**New research added:** Opened the legacy Texas repo file; live-checked Texas DPS program page and FAQ, Chapter 62 landing page, Local Government Code § 341.906 page, AG Opinion GA-0526 page, and HB 2000 Texas Legislature history.  
**Publication posture:** Reporting deadline-heavy, broad public-registry exposure, conditional employment/campus rules, meaningful but limited removal, no validated blanket statewide post-supervision residence-distance ban, with important local and supervision child-safety-zone overlays.

## Repo Awareness Check

1. **Legacy file opened:** Yes. I opened `src/data/state-registry/tx.ts` through the GitHub/raw repo path for `projectsolarrecon/Solar`.
2. **Concrete facts found in the legacy file:**
   - The legacy file lists Texas as last reviewed at `2025-10-10T00:00:00Z`.
   - It states initial registration/verification is generally due **within 7 days** after release/placement or arrival in Texas.
   - It states most registrants verify annually, people with **two or more sexually violent offense** convictions/deferreds verify **every 90 days**, and civilly committed people verify **every 30 days**.
   - It warns that address changes must be reported **at least 7 days before** moving and **within 7 days after** arrival, and online identifiers must be updated **within 7 days**.
   - It contains a near-contradiction: one section says no single statewide residency ban applies after supervision, while later highlights assert a statewide 1,000-foot residential exclusion zone under art. 62.301. This STF resolves that by relying on DPS guidance and treating local/supervision/campus rules separately.
3. **Source of access:** repo connection / GitHub raw URL opened during this task.
4. **STF generation status:** Proceeding because the legacy file was actually opened and inspected in this chat.

## 1. Source Key Map

| Source key | Source label | Official URL | Source type | What it supports | Confidence | Validation status |
|---|---|---|---|---|---|---|
| TX-S1 | Legacy SOLAR Texas registry file, `src/data/state-registry/tx.ts` | https://raw.githubusercontent.com/projectsolarrecon/Solar/main/src/data/state-registry/tx.ts | Legacy SOLAR source inherited | Conversion basis; prior SOLAR conclusions, citations, warnings, checklists, and contradictions | High for legacy contents; not controlling law | Opened and inspected through GitHub/raw repo access during this task |
| TX-S2 | Texas Code of Criminal Procedure Chapter 62 — Sex Offender Registration Program | https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm | Statute | Core registration architecture: who registers, deadlines, reporting, verification, public information, duration, penalties, exemptions, higher education, ID duties | High | Live-validated during this task; statute page opened, but some article-specific anchor rendering requires final line check |
| TX-S3 | Texas DPS Sex Offender Registration Program page | https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program | Agency process page | DPS role, local registration, public database, local registries, newspaper/postcard notification | High | Live-validated during this task |
| TX-S4 | Texas DPS Criminal History Records and Sex Offender Registration Program FAQ | https://www.dps.texas.gov/section/crime-records/faq/criminal-history-records-and-texas-sex-offender-registration-program-faq | Agency FAQ / guidance | Who must register, nonresident rules, public/nonpublic data, risk levels, duration, verification, moves, higher-ed notice, local ordinances, child-safety zones, employment limits, school entry notice, expired-duty removal process | High | Live-validated during this task |
| TX-S5 | Texas DPS Public Sex Offender Registry search | https://publicsite.dps.texas.gov/SexOffenderRegistry/Search | Public registry page | Public search interface and public registry exposure | Medium | Attempted during this task; fetch returned 502, but DPS program/FAQ link confirms the public database; needs browser live check before production |
| TX-S6 | Texas Local Government Code § 341.906 — general-law municipality child-safety-zone authority | https://statutes.capitol.texas.gov/Docs/LG/htm/LG.341.htm#341.906 | Statute | General-law municipal authority to restrict registered sex offenders from going in, on, or within a specified distance of a child-safety zone, distance cap and exemption procedures | Medium | Official page opened; search result identified section text, but final statutory text should be line-validated before production |
| TX-S7 | Texas Government Code § 508.187 — parole child-safety-zone conditions | https://statutes.capitol.texas.gov/GetStatute.aspx?Code=GV&Value=508.187 | Statute | Parole panel child-safety-zone conditions and modifications | Medium | Identified/official source; article-specific rendering incomplete in fetched text; needs final live line check |
| TX-S8 | Texas Attorney General Opinion GA-0526 | https://www.texasattorneygeneral.gov/opinions/greg-abbott/ga-0526 | Attorney general opinion | Home-rule municipality authority; nonpreemption of home-rule sex-offender residence restrictions; pre-2017 general-law limitation context | High | Live-validated during this task |
| TX-S9 | Texas HB 2000, 89th R.S. (Audrii’s Law) | https://capitol.texas.gov/billlookup/History.aspx?Bill=HB2000&LegSess=89R | Enacted session law | Effective 9/1/2025; child grooming added to sex-offender registration applicability | High | Live-validated during this task |
| TX-S10 | Texas Code of Criminal Procedure art. 62.064 — campus residence restriction | https://statutes.capitol.texas.gov/GetStatute.aspx?Code=CR&Value=62.064 | Statute | Registrant may not reside on public/private higher-ed campus unless low risk and institution approves | Medium | Official source identified; DPS FAQ live-validated the rule; article page needs final line check |
| TX-S11 | Texas Code of Criminal Procedure art. 62.063 — prohibited employment for certain sexually violent offenses with victim under 14 | https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.063 | Statute | Bus/taxi/limousine, unsupervised residential services, amusement ride employment prohibitions for covered class | High | Live-validated through DPS FAQ; final statutory anchor check recommended |
| TX-S12 | Texas Code of Criminal Procedure arts. 62.402–62.408 — early termination | https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.402 | Statute | Early termination pathway requiring federal-minimum comparison, individual risk assessment, motion, hearing, order | Medium | Identified from legacy and DPS FAQ; article-specific text needs final live check |


## 2. Local Authority / Preemption Analysis

| Topic | Local authority posture | Analysis | Source keys | Validation status |
|---|---|---|---|---|
| residence restrictions | Partially allowed | The DPS FAQ says Chapter 62 is otherwise silent on residency restrictions based only on registration, but some cities have enacted local ordinances restricting residence. AG Opinion GA-0526 states Texas law did not preempt home-rule municipal residence restrictions. Local Government Code § 341.906 now separately authorizes general-law municipalities to restrict registrants from going in, on, or within a specified distance of a child-safety zone; production review should confirm whether any specific residence-only ordinance is valid under the current local code and city type. | TX-S4, TX-S6, TX-S8 | Local authority partially confirmed; city-specific validation required |
| presence/place restrictions | Allowed for general-law municipalities within § 341.906 limits; broader home-rule/local authority requires validation | Local Government Code § 341.906 expressly supports general-law municipal restrictions on going in, on, or within a specified distance of a child-safety zone, with a distance cap and exemptions. State supervision child-safety zones are separate from local ordinances. | TX-S4, TX-S6, TX-S7 | Local authority partially confirmed |
| parks / playgrounds / schools / child-care locations | Allowed / Partially allowed | These are common child-safety-zone examples in DPS guidance and parole/city ordinance practice. § 341.906 provides local authority for general-law municipalities; home-rule authority is supported by GA-0526 for residence restrictions and should be validated for presence/activity limits. | TX-S4, TX-S6, TX-S8 | Local authority partially confirmed; validate city-specific text |
| beaches / pools / public bathing places / recreation areas | Partially allowed | Public swimming pools are included in child-safety-zone examples in parole guidance and DPS FAQ discussion of child-safety zones. Beaches/public bathing places are not validated as statewide Chapter 62 categories and must be checked in any local ordinance. | TX-S4, TX-S7 | Local authority unclear for beaches/public bathing places; validate locally |
| libraries / churches / public facilities / events | Unclear — validate | No blanket statewide Chapter 62 rule was validated for libraries/churches/public facilities. Parole child-safety-zone exceptions may authorize presence for legitimate business such as worship, workplace, health care, or funeral in some circumstances, but that is a supervision overlay, not a general public rule. Local ordinances may define additional child-safety-zone places; validate city-specific text. | TX-S4, TX-S6, TX-S7 | Local authority unclear by place type |
| shelters / transitional housing | Unclear — validate | No statewide Chapter 62 shelter-specific restriction was found. Shelter admission rules, parole/probation conditions, local child-safety-zone ordinances, housing-provider rules, and private lease terms may matter separately. | TX-S2, TX-S4 | Local authority unclear; shelter/facility policy validation required |
| local reporting / registration procedures | Partially allowed as implementation; separate local deadlines not confirmed | State law sets the core registration and reporting duties. Local law enforcement is the primary registration authority and may have intake hours, forms, appointment practices, and proof requirements. The STF did not validate authority for cities/counties to create separate Chapter 62 reporting deadlines. | TX-S2, TX-S3, TX-S4 | Local implementation confirmed; local deadline authority not confirmed |
| Halloween / holiday / event restrictions | Unclear — validate | No blanket statewide Chapter 62 Halloween rule was found. Some local ordinances may include trick-or-treat restrictions, and supervision/court orders can impose event-specific limits. Validate any specific city/county ordinance before outputting a local rule. | TX-S4, TX-S6 | Local authority unclear; validate locally |


# Topic File

## 1. State posture summary

**Topic posture:** Reporting deadline-heavy; public posting broad; local/supervision child-safety-zone overlays  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed

**Controlling rule:**  
Texas Chapter 62 is the core registration statute. DPS says required adult and juvenile registrants register with local law enforcement, periodically verify, report changes, and can be exposed publicly through the DPS database and local registries. Chapter 62 itself does not create a blanket statewide residence/place ban near children’s places, but supervision child-safety zones and local ordinances can add restrictions.

**Practical meaning:**  
Texas is strict mostly because of deadlines, public exposure, verification cadence, ID duties, and local/supervision overlays. The daily-life answer is usually not one statewide distance rule for everyone; it is Chapter 62 plus the person’s supervision status and city-specific ordinance.

**Scope / who is affected:**  
Most people with a Texas reportable conviction/adjudication, substantially similar out-of-state/federal/military/foreign cases, nonresident workers/students, and certain people required by supervision.

**What changes the answer:**  
Offense, adjudication type, adult/juvenile status, risk level, civil commitment, number of sexually violent convictions/deferreds, supervision status, local ordinance, campus residence, nonresident work/school, homelessness, move/travel facts.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas V2 should frame the state as a Chapter 62 reporting/public-registry state with annual/90-day/30-day verification, 7-day change duties, broad public registry exposure, and separate local/supervision child-safety-zone restrictions. Do not present a blanket statewide post-supervision 1,000-foot residence ban; local ordinances and supervision can still matter. Source keys: TX-S2, TX-S3, TX-S4, TX-S6, TX-S7, TX-S8.

**Source keys / official sources:**  
TX-S1, TX-S2, TX-S3, TX-S4, TX-S6, TX-S7, TX-S8

**Confidence:** High

**Validation gaps:**  
Final production should line-check Chapter 62 article anchors and representative local ordinance authority.

**V2 implications:**  
StartHere should emphasize: register in person with local law enforcement, calendar deadlines, verify public visibility, and validate local/supervision restrictions separately.

## 2. Who must register

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states that a person must register if the person has a reportable conviction or adjudication, is required to register as a condition of parole/mandatory supervision or community supervision, or is an extrajurisdictional registrant. Reportable conviction/adjudication includes listed Texas offenses, certain deferred adjudications and juvenile adjudications, attempts/conspiracies/solicitations, and substantially similar out-of-state/federal/military/foreign offenses.

**Practical meaning:**  
Registration does not depend only on a Texas conviction label. DPS may treat an out-of-state, federal, military, or foreign case as reportable if the elements are substantially similar or if the other jurisdiction requires registration.

**Scope / who is affected:**  
Adults, juveniles, people on deferred adjudication, extrajurisdictional registrants, and nonresident workers/students when statutory triggers are met.

**What changes the answer:**  
Offense elements, date, jurisdiction, appeal/deferred/adjudication status, DPS substantial-similarity determination, supervision condition, juvenile court nonpublic/exemption order.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
A person must register in Texas if they have a Chapter 62 reportable conviction/adjudication, a qualifying extrajurisdictional offense, or a registration condition imposed by parole, mandatory supervision, or community supervision. DPS determines substantial similarity for out-of-state, federal, military, and foreign offenses. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 3. Initial registration deadlines

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local implementation only

**Controlling rule:**  
Legacy and DPS guidance state initial registration/verification is generally due not later than the later of the 7th day after arrival/release/placement in the municipality or county or the first date local law enforcement policy permits registration.

**Practical meaning:**  
New arrivals and released persons should treat 7 days as the core deadline and not wait for a reminder. Local agency office hours and appointment systems matter but do not erase the duty.

**Scope / who is affected:**  
People required to register who arrive, reside, work, attend school, or are released into Texas registration jurisdiction.

**What changes the answer:**  
Release/arrival date, whether agency allows registration sooner/later by policy, residence inside a municipality versus county, nonresident work/school triggers.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Initial registration/verification is due within 7 days after release, placement, or arrival, measured by the later of arrival and the first date the local registration authority allows registration. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 4. Ongoing reporting duties

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local implementation only

**Controlling rule:**  
DPS says registrants must report address changes, online identifiers, name, physical health, job status, and education status changes. Address moves require pre-move and post-arrival reporting; online identifier/name/health/job/education changes are due not later than the 7th day after the change.

**Practical meaning:**  
This is the main accidental-compliance-trap area. People must report both before and after moves, report non-address changes quickly, and keep proof of every in-person report.

**Scope / who is affected:**  
All registrants with Chapter 62 duties, including nonresident workers/students for covered work/school changes.

**What changes the answer:**  
Type of change, planned versus failed move, move within Texas versus out of state, no fixed address, local agency proof requirements.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Report address changes before and after the move; report online identifier, name, physical-health, job-status, and education-status changes within 7 days after the change. If a planned move fails, weekly reporting duties may apply until resolved. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 5. Verification / re-registration schedule

**Topic posture:** Reporting cadence varies by designation  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local implementation only

**Controlling rule:**  
DPS states civilly committed sexually violent predators verify once every 30 days; registrants with two or more sexually violent offenses verify once every 90 days; all other registrants verify once each year. The legacy file identifies the annual birthday window as 30 days before to 30 days after the birthday.

**Practical meaning:**  
Texas cadence is not one-size-fits-all. The practical calendar must be built around the person’s classification and offense history.

**Scope / who is affected:**  
All registered persons, with heightened cadence for civil commitment and repeat sexually violent offense categories.

**What changes the answer:**  
Civil commitment status, number of sexually violent offense convictions/deferreds, agency calculation of next due date, annual birthday window, local appointment practices.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Most Texas registrants verify annually; people with two or more sexually violent offense convictions/deferreds verify every 90 days; civilly committed sexually violent predators verify every 30 days. The legacy file preserves an annual birthday-window rule of 30 days before to 30 days after the birthday, requiring final article check before production. Source keys: TX-S2, TX-S4, TX-S1.

**Source keys / official sources:**  
TX-S1, TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 6. Residence restrictions

**Topic posture:** Statewide baseline plus local overlay  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed

**Controlling rule:**  
DPS says Chapter 62 itself is silent otherwise on residency restrictions based only on registration, except campus residence under art. 62.064. DPS also says probation/parole restrictions and some city ordinances may restrict where a person may reside. AG Opinion GA-0526 supports home-rule authority not being preempted, and § 341.906 supports general-law municipal child-safety-zone ordinances.

**Practical meaning:**  
After supervision, do not assume Texas has one statewide 1,000-foot residence ban for everyone. Housing can still be blocked by campus rules, local ordinances, supervision conditions, landlords, shelters, and leases.

**Scope / who is affected:**  
All registrants for baseline Chapter 62; campus residence rule for campus housing; local ordinances for people within municipalities that enacted valid rules; supervision rules for supervised persons.

**What changes the answer:**  
On/off supervision, city type and ordinance, campus residence request, risk level, institutional approval, preexisting residence grandfathering, shelter/facility rules.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
No blanket statewide Chapter 62 residence-distance ban was validated for all post-supervision registrants. Texas does prohibit campus residence unless the person is low risk and the higher-ed institution approves, and local ordinances/supervision child-safety zones may separately restrict housing. Source keys: TX-S4, TX-S8, TX-S10, TX-S6, TX-S7.

**Source keys / official sources:**  
TX-S4, TX-S6, TX-S7, TX-S8, TX-S10

**Confidence:** High

**Validation gaps:**  
Validate any city ordinance for the exact address; final production should not rely on the legacy 1,000-foot statewide-highlight language without correction.

**V2 implications:**  
CommonQuestions must separate 'Where can I live?' from 'Where can I go?' and flag local/supervision/campus overlays.

## 7. Presence / place restrictions

**Topic posture:** Statewide baseline plus local overlay  
**Rule status:** CONDITIONAL RULE  
**Local authority posture:** Partially allowed

**Controlling rule:**  
DPS says Chapter 62 itself does not prohibit registered sex offenders from going near places frequented by children, but community supervision/parole laws and city ordinances may impose child-safety zones. School-entry notice is a separate statewide presence rule.

**Practical meaning:**  
Presence near parks, schools, pools, libraries, churches, and events cannot be answered by a single Texas statewide distance rule. The answer depends on school notice, supervision status, and local ordinance.

**Scope / who is affected:**  
All registrants for school-entry notice; supervised persons with child-safety-zone conditions; registrants in municipalities with applicable ordinances.

**What changes the answer:**  
Place type, school operating hours, written agreement/exemption, whether the person is a student/participant, supervision status, local ordinance definitions.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas Chapter 62 does not create a blanket statewide ban on going near children’s places, but a registrant entering a school during standard operating hours must immediately notify the administrative office unless an exception applies. Local child-safety-zone ordinances and supervision conditions can separately restrict presence. Source keys: TX-S4, TX-S6, TX-S7.

**Source keys / official sources:**  
TX-S4, TX-S6, TX-S7

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 8. Employment restrictions

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS explains that Chapter 62 itself generally does not bar all trades, but art. 62.063 bars a covered person with a sexually violent offense and affirmative finding involving a victim under 14 from operating/offering bus, taxi, limousine transportation, providing unsupervised in-home services, or operating/offering amusement rides.

**Practical meaning:**  
Texas has a narrow statewide employment ban for a specific offense/victim finding category, plus separate licensing and employer policies.

**Scope / who is affected:**  
Covered persons with a reportable sexually violent offense and affirmative finding that the victim was under 14; other registrants may face licensing/employer barriers.

**What changes the answer:**  
Offense category, affirmative finding, victim age, job duties, supervision of in-home service, licensing board rules, employer policy.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
For covered sexually violent offenses with an affirmative finding that the victim was under 14, Texas bars bus/taxi/limousine operation or services, unsupervised residential services, and amusement-ride operation/offers. The rule is not a blanket statewide work ban for all registrants. Source keys: TX-S11, TX-S4.

**Source keys / official sources:**  
TX-S11, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 9. Education / campus rules

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local authority not applicable; campus policy overlay applies

**Controlling rule:**  
Nonresident or resident registrants who begin or terminate work or enrollment at a public/private institution of higher education must notify campus security and the primary registration authority within 7 days. A registrant may not reside on a higher-ed campus unless low risk and the institution approves.

**Practical meaning:**  
College attendance may be possible, but campus residence is restricted and campus security notice is mandatory.

**Scope / who is affected:**  
Registrants working at or enrolled in higher education; registrants seeking campus housing.

**What changes the answer:**  
Start/stop date, campus security authority, low-risk assessment, institution approval, student status exception for school-entry notice, campus policy.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Starting or ending higher-ed work or enrollment requires notice to campus security and the primary registration authority within 7 days. Campus residence is barred unless the registrant is low risk and the institution approves. Source keys: TX-S4, TX-S10.

**Source keys / official sources:**  
TX-S4, TX-S10

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 10. Internet / identifier rules

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Chapter 62 and DPS guidance require reporting online identifiers. DPS FAQ says changes to online identifiers must be reported not later than the 7th day after the change; public registry excludes online identifiers.

**Practical meaning:**  
Creating a username, email, or other covered identifier is a reporting event even when it is not public-facing.

**Scope / who is affected:**  
All registrants required to disclose online identifiers.

**What changes the answer:**  
Definition of online identifier, creation/change date, local agency intake method, supervision internet restrictions.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas registrants must report online identifiers and must report a change in an online identifier within 7 days after the change. Online identifiers are not public registry information under DPS guidance. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 11. Public registry visibility

**Topic posture:** Public posting broad  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local authority not applicable

**Controlling rule:**  
DPS states Texas sex-offender registration information is public with exceptions, and the public may access information through the DPS website. DPS program page says local registries are also maintained and most registration information is public; newspaper and postcard notification can occur for some people.

**Practical meaning:**  
Texas is a broad public-posting state. Some sensitive data is excluded, but the public can search the DPS database and local registries may also be available.

**Scope / who is affected:**  
Most adult registrants; juveniles may be nonpublic if ordered by juvenile court.

**What changes the answer:**  
Juvenile court nonpublic order, victim-identifying information, excluded data fields, high-risk/civil commitment notification, expired duty removal.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Most Texas registration information is public through DPS and local registries, but social security number, driver license number, phone numbers, online identifiers, employer details, additional DPS-required nonpublic data, victim-identifying information, and juvenile records ordered nonpublic are excluded. Source keys: TX-S3, TX-S4, TX-S5.

**Source keys / official sources:**  
TX-S3, TX-S4, TX-S5

**Confidence:** High

**Validation gaps:**  
Public registry search itself returned 502 in the fetch and must be browser-checked before production.

**V2 implications:**  
PublicVisibility and sourceMap should cite DPS program/FAQ; source confidence should flag public search link live-check.

## 12. Tiering / designation

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS uses numeric risk levels: Level 1 low, Level 2 moderate, Level 3 high, plus civil commitment. Risk level is separate from the individual risk assessment used for early termination. Duration and verification cadence are not a simple public tier system.

**Practical meaning:**  
Texas has risk levels for notification and public interpretation, but registration duration/cadence depends on offense history, lifetime/10-year status, repeat sexually violent offenses, and civil commitment.

**Scope / who is affected:**  
All registrants assigned a risk level at release or placement; civil commitment is separately identified.

**What changes the answer:**  
Risk assessment, civil commitment, offense category, repeat sexually violent offense history, court or agency determination.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas V2 should describe Level 1/2/3 and Civil Commitment risk labels, but not treat them as the only registration-duration tiers. Verification and duration are separately controlled by Chapter 62 categories. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 13. Duration of registration

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states adult registrants register either for life or 10 years following discharge from state supervision; adult non-lifetime registrants register until the 10th anniversary of dismissal/discharge/release, whichever date is later. Juvenile and extrajurisdictional durations have separate rules.

**Practical meaning:**  
Many Texas adult cases are lifetime, but not all. The relevant date is often tied to discharge or release, not conviction date.

**Scope / who is affected:**  
Adult lifetime and 10-year registrants, juvenile registrants, extrajurisdictional registrants.

**What changes the answer:**  
Offense, adult/juvenile status, transfer to adult court, discharge/release dates, foreign/federal/military obligation, early termination/exemption.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Adult Texas registration is either lifetime or 10 years after the later of dismissal/discharge/release from penal institution/community supervision for non-lifetime cases. Juvenile and extrajurisdictional durations follow separate Chapter 62/DPS rules. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 14. Removal / termination / reclassification

**Topic posture:** Removal meaningful but limited  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS recognizes limited adult exemptions for consensual close-in-age indecency/sexual-assault cases, juvenile exemption/nonpublic orders, and early termination after individual risk assessment and showing the Texas period exceeds the federal minimum. DPS also describes an expired-duty removal documentation process through the most recent registering agency.

**Practical meaning:**  
Removal is possible in limited categories, but not automatic for most lifetime registrants. People whose duty expired must document that no remaining registrable duty exists.

**Scope / who is affected:**  
Juveniles, certain close-in-age adult cases, people whose Texas duty exceeds federal minimum, people whose duty expired.

**What changes the answer:**  
Offense, victim age, age gap, consensual conduct, federal minimum, certified individual risk assessment, court order, DPS/local agency record correction.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas has limited exemption/early-termination routes: juvenile exemption/nonpublic orders, narrow close-in-age adult exemption, and early termination after certified individual risk assessment and federal-minimum comparison. Expired-duty removal requires proof through the updating agency. Source keys: TX-S4, TX-S12.

**Source keys / official sources:**  
TX-S4, TX-S12

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 15. Moving into the state

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local implementation only

**Controlling rule:**  
DPS says out-of-state, federal, military, and foreign convictions can require Texas registration if reportable/substantially similar and the person resides, works, or attends school in Texas. Registration must be completed not later than the 7th day after arrival or first date local policy allows registration.

**Practical meaning:**  
A person moving into Texas should assume DPS substantial-similarity review and local registration are needed before relying on another state’s label.

**Scope / who is affected:**  
People with prior registrable or potentially registrable cases moving to Texas.

**What changes the answer:**  
Residence, work, school, offense elements, prior jurisdiction duty, DPS substantial similarity, local agency policy.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
A person moving into Texas with a reportable or substantially similar out-of-state/federal/military/foreign offense must register if they reside, work, or attend school in Texas, generally within 7 days after arrival or the first date local policy permits. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 16. Moving out of the state

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local implementation only

**Controlling rule:**  
DPS says moving out of Texas requires reporting the intended change in address not later than the 7th day before moving and registering in the destination state not later than the 10th day after arrival with the designated agency.

**Practical meaning:**  
Moving out does not end compliance at the state line. Texas pre-move notice and destination registration both matter.

**Scope / who is affected:**  
Texas registrants moving to another state.

**What changes the answer:**  
Destination state law, arrival date, Texas pre-move report, proof of registration, failed move.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Before moving out of Texas, report the intended address change in person at least 7 days before the move; after arrival, register in the destination state with the designated agency not later than the 10th day after arrival. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 17. Visiting / temporary lodging / in-state travel

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local implementation plus local ordinance overlay

**Controlling rule:**  
DPS says a registrant who, on at least three occasions during any month, spends more than 48 consecutive hours in a municipality or county other than the one of registration must report that fact to local law enforcement in the visited municipality/county and provide registration information, lodging address, and intent to return.

**Practical meaning:**  
Brief travel can become reportable by repeated 48-hour stays. Local ordinances and supervision rules may affect where the person can stay or go.

**Scope / who is affected:**  
Texas registrants traveling within Texas outside the registered municipality/county.

**What changes the answer:**  
Number of visits in a month, whether each stay exceeds 48 consecutive hours, lodging address, intent to return, local ordinance, supervision travel permission.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
A Texas registrant who spends more than 48 consecutive hours in another Texas municipality or county on at least three occasions in a month must report to local law enforcement there and provide registration/lodging/return information. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 18. Interstate travel / federal SORNA overlay

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Texas controls its Chapter 62 duties; federal SORNA can separately require timely registration/updates when traveling or relocating interstate. The legacy file warns to register in the destination state as required.

**Practical meaning:**  
Do not rely only on Texas deadlines for interstate travel. Federal and destination-state rules can add independent consequences.

**Scope / who is affected:**  
Registrants traveling or relocating across state lines.

**What changes the answer:**  
Move versus visit, destination state thresholds, federal SORNA status, supervision travel permit, proof of compliance.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas moving-out notice is not the entire interstate answer; the person must also satisfy destination-state registration and any federal SORNA duties. Source keys: TX-S4, TX-S1.

**Source keys / official sources:**  
TX-S1, TX-S4

**Confidence:** Medium

**Validation gaps:**  
Federal SORNA specifics were not live-researched for this STF and should be validated before production travel guidance.

**V2 implications:**  
V2 should flag federal/destination-state overlay without turning this STF into federal legal advice.

## 19. International travel

**Topic posture:** Conditional statewide rule  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
The legacy file did not provide a Texas-specific international-travel procedure. International travel is controlled by federal International Megan’s Law/SORNA passport/notice rules plus any Texas reporting changes if residence, employment, school, or travel facts trigger Chapter 62 updates.

**Practical meaning:**  
Texas STF can state the federal overlay exists but should not invent a Texas-specific international notice process without source validation.

**Scope / who is affected:**  
Registrants planning international travel or relocation.

**What changes the answer:**  
Federal status, passport identifier, destination, duration, move/residence change, supervision permission, federal notice timing.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
No Texas-specific international-travel notice rule was live-validated in this task. V2 should say international travel requires separate federal IML/SORNA and supervision validation, plus any Texas address/work/school reporting that the travel triggers. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** Low

**Validation gaps:**  
Live-validate federal IML/SORNA and any Texas DPS international travel procedure before publication.

**V2 implications:**  
Do not give a deadline unless validated from federal/current official sources.

## 20. Unstable housing / homelessness / transient status

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local implementation plus shelter/facility overlay

**Controlling rule:**  
Legacy and Chapter 62 materials state that a person without a fixed address must report every 30 days and provide a detailed description of each geographical location where the person resides or intends to reside.

**Practical meaning:**  
Homelessness does not pause registration. It creates a recurring 30-day reporting duty and requires precise location descriptions.

**Scope / who is affected:**  
Registrants with no fixed address or unstable/transient housing.

**What changes the answer:**  
Temporary address, shelter policy, local agency practice, ability to provide geographic description, local ordinance, supervision placement.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
A Texas registrant with no fixed address must report every 30 days and provide a detailed description of the geographic location where they reside or intend to reside. Source keys: TX-S1, TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 21. Fees and costs

**Topic posture:** Conditional statewide rule  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
Legacy identifies costs tied to annual classified sex-offender DL/ID renewal and early-termination petitions/risk assessment. DPS FAQ also gives unrelated criminal history/fingerprint fees but not a comprehensive Chapter 62 fee schedule.

**Practical meaning:**  
Costs may arise from ID renewal, records, fingerprinting, court filings, risk assessment, counsel, transportation, and local administrative practices.

**Scope / who is affected:**  
Registrants obtaining classified DL/ID, filing early termination, seeking records, or complying with local agency procedures.

**What changes the answer:**  
Driver license/ID fee schedule, local records/fingerprinting, court filing fees, risk assessment provider fee, indigency status.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas V2 should not promise a single registry fee. Confirm current DL/ID renewal cost, court filing fees, individual risk assessment costs, and any local/fingerprinting fees before production. Source keys: TX-S1, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S4

**Confidence:** Medium

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 22. Driver license / ID / marking requirements

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Legacy states a classified sex-offender driver license/ID is annually renewable and required within 30 days of registration under art. 62.060. DPS FAQ notes driver license numbers are not public registry information.

**Practical meaning:**  
This is a practical deadline trap after initial registration. The public cannot see the driver license number through the registry, but the person must comply with the ID requirement.

**Scope / who is affected:**  
Registrants subject to art. 62.060.

**What changes the answer:**  
Initial registration date, DPS license/ID process, renewal timing, eligibility for license, expiration of duty.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas requires a classified sex-offender driver license/ID for covered registrants, with the legacy file preserving a 30-day post-registration deadline and annual renewal requirement; final article check is needed before production. Source keys: TX-S1, TX-S2.

**Source keys / official sources:**  
TX-S1, TX-S2

**Confidence:** Medium

**Validation gaps:**  
Live-check art. 62.060 and current DPS DL/ID process before production.

**V2 implications:**  
V2 checklist should include DL/ID step but flag final validation if not line-checked.

## 23. Vehicles, vessels, and property reporting

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS FAQ lists vehicle registration information—make, model, VIN, color, and plate—for vehicles owned by a person with reportable trafficking-related convictions under Penal Code § 20A.02(a)(3),(4),(7),(8) or § 20A.03 if based on that conduct. General property/vessel reporting was not separately validated.

**Practical meaning:**  
Vehicle reporting is not necessarily universal for every registrant in the same way addresses and identifiers are; the validated DPS FAQ language ties it to trafficking-related categories.

**Scope / who is affected:**  
Persons with covered trafficking-related reportable convictions/adjudications; other registrants if DPS/local forms require additional information.

**What changes the answer:**  
Offense category, vehicle ownership, local form requirements, DPS-required additional information.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
For covered trafficking-related offenses, Texas registration information includes owned vehicle details: make, model, VIN, color, and license plate. No separate statewide vessel/property rule was validated in this task. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 24. Family, parenting, and household issues

**Topic posture:** No blanket statewide rule, but supervision/local/case-specific rules may apply  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Partially allowed

**Controlling rule:**  
No Chapter 62 blanket rule was validated that bars all registrants from living with family, children, or their own biological/adoptive children. However, school-entry notice, local child-safety-zone ordinances, campus rules, supervision conditions, court orders, treatment rules, custody/family-court orders, and housing policies may control specific family situations.

**Practical meaning:**  
Family questions cannot be answered from registry status alone. The likely answer depends on custody orders, victim relationship, supervision, and local housing restrictions.

**Scope / who is affected:**  
Registrants living with or visiting family/children; parents seeking school/event access or overnight visits.

**What changes the answer:**  
Victim identity/age, household children, custody order, CPS/family court, supervision terms, treatment conditions, local ordinance, lease/shelter rules, school policy.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
No validated blanket Texas Chapter 62 rule bars every registrant from living with family or their own children. Family/child household and overnight-contact answers require separate validation of supervision, court/family-court, treatment, local ordinance, school, housing-provider, and shelter rules. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** Medium

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 25. Supervision overlays

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS says community supervision and parole laws may impose child-safety zones. Gov’t Code § 508.187 supports parole panel child-safety-zone conditions for covered releasees; these are distinct from Chapter 62 baseline registration.

**Practical meaning:**  
Supervised people may face restrictions that expired or never applied to unsupervised registrants. Do not generalize supervision restrictions to all registrants.

**Scope / who is affected:**  
People on parole, mandatory supervision, community supervision, juvenile probation, or court-ordered conditions.

**What changes the answer:**  
Condition language, victim age, parole panel/judge decision, modification request, supervision officer permissions, treatment plan.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Supervision can impose child-safety-zone restrictions and other contact/place/internet/travel limits separate from Chapter 62. V2 must not treat supervision restrictions as blanket rules for all Texas registrants. Source keys: TX-S4, TX-S7.

**Source keys / official sources:**  
TX-S4, TX-S7

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 26. Juvenile registration

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states reportable conviction/adjudication includes juvenile adjudications, but juvenile sex offenders may seek exemption or nonpublic registration orders. DPS duration rules distinguish juvenile adjudications and juvenile cases transferred to adult court.

**Practical meaning:**  
Juvenile cases require careful handling because public visibility and duration can differ and court orders may make information nonpublic.

**Scope / who is affected:**  
Juvenile adjudications, juvenile transferred cases, juvenile court-ordered nonpublic records.

**What changes the answer:**  
Adjudication/transfer status, juvenile court order, offense, disposition completion date, adult certification.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas juvenile registration can apply, but juveniles may seek exemption or nonpublic registration orders, and juvenile duration rules differ from adult duration rules. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 27. Out-of-state, federal, military, and tribal cases

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS says out-of-state, federal, military, and foreign convictions can require Texas registration if they are substantially similar to a Texas reportable offense, and DPS determines substantial similarity. Tribal cases were not specifically validated in DPS text in this task.

**Practical meaning:**  
People cannot assume non-Texas labels control. Texas DPS can make its own substantial-similarity determination.

**Scope / who is affected:**  
Out-of-state, federal, military, foreign, and potentially tribal cases.

**What changes the answer:**  
Elements, jurisdiction, deferred/adjudication type, other jurisdiction duty, DPS determination, residence/work/school in Texas.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
DPS determines whether out-of-state, federal, military, and foreign offenses are substantially similar to Texas reportable offenses; if reportable and the person resides, works, or attends school in Texas, registration can be required. Tribal-case treatment requires separate validation. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate tribal-case language before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 28. Enforcement and penalties

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local ordinance enforcement separate

**Controlling rule:**  
DPS states failure to comply with any Texas Sex Offender Registration Program requirement is a felony. Legacy identifies penalty tiers: state jail felony for post-10-year cases, third-degree for annual verifiers, second-degree for quarterly/civil-commit cases.

**Practical meaning:**  
Deadline errors can create felony exposure. Local ordinance violations may add citations or local penalties separately.

**Scope / who is affected:**  
All registrants with Chapter 62 duties; local ordinance defendants for city-code violations.

**What changes the answer:**  
Verification cadence, duty duration category, missed requirement, local ordinance, culpability/defenses, proof of reporting.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Failure to comply with Chapter 62 is a felony; the legacy file preserves state jail/third-degree/second-degree tiers tied to duty/cadence categories, requiring final article 62.102 check before production. Source keys: TX-S1, TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 29. Local ordinances / preemption

**Topic posture:** Statewide baseline plus local overlay  
**Rule status:** LOCAL AUTHORITY CONFIRMED  
**Local authority posture:** Partially allowed

**Controlling rule:**  
AG Opinion GA-0526 says state law did not preempt home-rule municipality authority to adopt sex-offender residence restrictions and that general-law municipalities lacked such authority at that time. Later Local Government Code § 341.906 authorizes general-law municipalities to restrict registered sex offenders from going in, on, or within a specified distance of child-safety zones, with limits and exemptions. DPS FAQ recognizes city ordinances.

**Practical meaning:**  
Local rules matter in Texas, but the STF should identify them as local—not statewide—and must validate the specific city code before giving address/place advice.

**Scope / who is affected:**  
Registrants in municipalities with adopted ordinances; local authority differs by city type and ordinance text.

**What changes the answer:**  
Home-rule vs general-law city, ordinance scope, distance, child-safety-zone definition, exemptions, grandfathering, enforcement, post-supervision status.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas local authority is partially confirmed: home-rule residence restrictions are supported by GA-0526, and general-law municipalities have statutory child-safety-zone authority under § 341.906. V2 should require city-specific validation for any address/place rule. Source keys: TX-S4, TX-S6, TX-S8.

**Source keys / official sources:**  
TX-S4, TX-S6, TX-S8

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 30. Recent enacted changes

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
HB 2000 (Audrii’s Law), 89th Regular Session, has caption text relating to the applicability of sex offender registration requirements to child grooming and the Texas Legislature Online history shows effective 9/1/2025.

**Practical meaning:**  
Child grooming is now part of the reportable-conviction analysis for current Texas law as of September 1, 2025.

**Scope / who is affected:**  
People with covered child-grooming convictions/adjudications after the effective/legal applicability date.

**What changes the answer:**  
Offense date, conviction/adjudication date, final enrolled text, codified statute update, retroactivity, DPS implementation.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
HB 2000 was signed and effective September 1, 2025, expanding registration applicability to child grooming. V2 should treat it as enacted/effective, not pending, but production should confirm codification in Chapter 62. Source keys: TX-S9, TX-S2.

**Source keys / official sources:**  
TX-S9, TX-S2

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 31. Pending legislation / watchlist

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
No full pending-bill sweep was performed beyond HB 2000 because the task was a legacy-file retrofit with targeted gap research. Texas legislative sessions and special sessions can change quickly.

**Practical meaning:**  
The STF should not claim no pending bills exist. It should say no watchlist beyond HB 2000 was validated in this task.

**Scope / who is affected:**  
All future changes affecting Chapter 62, local authority, juvenile rules, public posting, and removal.

**What changes the answer:**  
Legislative session, bill status, effective date, codification, DPS implementation.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
No pending Texas sex-offender-registration watchlist was fully researched in this STF beyond live-validation of HB 2000’s enacted/effective status. Source keys: TX-S9.

**Source keys / official sources:**  
TX-S9

**Confidence:** Low

**Validation gaps:**  
Run a current Texas Legislature bill sweep before production.

**V2 implications:**  
Keep pending laws out of current-law visitor copy until enacted/effective.

## 32. Recent litigation and controlling cases

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Unclear — validate

**Controlling rule:**  
Legacy included AG Opinion GA-0526 and a DOJ SMART local restrictions overview; no current controlling Texas or federal litigation sweep was completed in this task.

**Practical meaning:**  
Do not claim the litigation field is complete. Use GA-0526 for local authority posture, but validate current cases before production.

**Scope / who is affected:**  
Local ordinances, constitutional challenges, retroactivity, public posting, juvenile cases, removal.

**What changes the answer:**  
Jurisdiction, date, controlling status, issue, appeal history, local ordinance text.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
GA-0526 remains a validated Texas AG opinion for local residence authority/preemption posture, but this STF did not complete a current litigation sweep. Source keys: TX-S8.

**Source keys / official sources:**  
TX-S8

**Confidence:** Medium

**Validation gaps:**  
Live-check recent Texas appellate/federal cases before production.

**V2 implications:**  
V2 preview may proceed with validation flag; production should not claim current litigation completeness.

## 33. Agency practice vs statutory text

**Topic posture:** Agency guidance important  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local implementation only

**Controlling rule:**  
DPS guidance is essential because local law enforcement registers people, submits records to DPS, DPS maintains the database, and DPS determines substantial similarity. Some statute anchors were difficult to fetch directly, so DPS FAQ is a practical validation source but should not replace final statutory text checks.

**Practical meaning:**  
Texas compliance is implemented locally with DPS database oversight. Agency practice can affect appointment timing and documentation.

**Scope / who is affected:**  
All registrants using local registration authorities and DPS database processes.

**What changes the answer:**  
Local office hours, policy allowing registration date, forms, proof of residence, DPS record corrections, substantial similarity.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Use DPS FAQ/program guidance for implementation, but final V2 source map should cite Chapter 62 for legal rules and DPS for process/public-registry practice. Source keys: TX-S2, TX-S3, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S3, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 34. Forms and process links

**Topic posture:** Process-page source  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Local implementation only

**Controlling rule:**  
Legacy points users to the DPS Sex Offender Registration Program page and contains a records-request template to TxSOR@dps.texas.gov. DPS FAQ says expired-duty removal starts with the agency that most recently updated the record.

**Practical meaning:**  
Forms/process may be handled through local law enforcement and DPS, not a single downloadable statewide public form.

**Scope / who is affected:**  
Registrants seeking registration, record correction, expired-duty removal, or records.

**What changes the answer:**  
Local registering agency, most recent event agency, DPS contact method, current forms portal, certified documents, agency-specific instructions.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
V2 should link DPS program/FAQ and tell users to work with the local/most-recent updating agency for registration records or expired-duty removal; do not claim a single universal form unless validated. Source keys: TX-S3, TX-S4, TX-S1.

**Source keys / official sources:**  
TX-S3, TX-S4, TX-S1

**Confidence:** Medium

**Validation gaps:**  
Validate current TxSOR contact and any official forms before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 35. Practical checklist inputs

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local implementation only

**Controlling rule:**  
Legacy provides checklists: register within 7 days, calendar verification cadence, gather IDs/vehicles/phone/online identifiers/employer/school details, 30-day no-fixed-address reporting, classified DL/ID within 30 days, pre/post move notices.

**Practical meaning:**  
The checklist should be compliance-oriented and proof-focused.

**Scope / who is affected:**  
New arrivals, movers, transient registrants, people changing online/job/school info.

**What changes the answer:**  
Cadence, local agency, move type, no fixed address, campus work/school, ID status.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Checklist inputs for Texas V2: 7-day initial registration, 7-day change reporting, pre/post address-change reports, annual/90-day/30-day verification, 30-day no-fixed-address reporting, higher-ed 7-day notice, and classified DL/ID process. Source keys: TX-S1, TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 36. Common mistakes / compliance traps

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Local implementation plus local/supervision overlay

**Controlling rule:**  
Big traps include assuming visits do not become reportable, missing the pre-move notice, missing post-arrival notice, failing to report online identifiers/job/school changes within 7 days, failing 30-day transient check-ins, assuming local ordinances do not matter, and confusing Chapter 62 with supervision restrictions.

**Practical meaning:**  
Texas errors often happen around timing and treating one rule as the whole answer.

**Scope / who is affected:**  
All registrants, especially new arrivals, movers, homeless/transient people, students/workers, supervised persons.

**What changes the answer:**  
Move failed, repeated temporary stay, local ordinance, officer permission, public registry data, expired duty documentation.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas V2 should highlight traps: report before and after moves, report non-address changes within 7 days, verify on the correct cadence, report repeated 48-hour visits when threshold is met, keep 30-day no-fixed-address check-ins, and validate local/supervision restrictions separately. Source keys: TX-S1, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 37. Glossary / terms

**Topic posture:** Statewide definitions  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Key terms: reportable conviction/adjudication; extrajurisdictional registrant; primary registration authority; online identifier; sexually violent offense; civil commitment; numeric risk level; individual risk assessment; child safety zone; local law enforcement authority.

**Practical meaning:**  
Glossary entries must distinguish public risk level from early-termination individual risk assessment and distinguish local ordinance from supervision condition.

**Scope / who is affected:**  
All V2 fields that define terms for visitors.

**What changes the answer:**  
Use statute/DPS definition source, not common-sense paraphrase alone.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
V2 glossary should define reportable conviction/adjudication, primary registration authority, online identifier, sexually violent offense, risk level, civil commitment, child safety zone, and individual risk assessment using DPS/Chapter 62 sources. Source keys: TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 38. Source confidence and validation notes

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Partially allowed

**Controlling rule:**  
Core statewide architecture is well-supported by DPS and Chapter 62. Local authority is partially confirmed but city-specific validation remains. Public registry page fetch failed even though DPS pages link it. Article-level statute anchors need final line checks where the fetched official page did not expose text.

**Practical meaning:**  
Preview can be built, but production should wait for link and statute-line validation.

**Scope / who is affected:**  
All STF users and Output GPT generation.

**What changes the answer:**  
Publication timeline, link availability, updated statutes, local ordinances, pending bills, recent cases.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
Texas STF is ready to feed for preview with validation flags; production requires public registry browser check, article-level statute checks, local ordinance validation, current litigation sweep, and forms/contact validation. Source keys: TX-S1 through TX-S12.

**Source keys / official sources:**  
TX-S1, TX-S2, TX-S3, TX-S4, TX-S5, TX-S6, TX-S7, TX-S8, TX-S9, TX-S10, TX-S11, TX-S12

**Confidence:** Medium

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.

## 39. V2 field recommendations

**Topic posture:** Internal output guidance  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed

**Controlling rule:**  
Texas V2 should structure Start Here around reporting deadlines, verification cadence, public posting, residence/place separations, local/supervision overlays, and removal limits. It should correct the legacy near-contradiction by refusing to output a blanket statewide post-supervision 1,000-foot residence ban.

**Practical meaning:**  
The Output GPT should not write public page copy from a single highlighted legacy sentence. It should preserve nuance.

**Scope / who is affected:**  
State registry output, sourceMap, sourceConfidence, commonQuestions, terms, statePageUpdateNotes.

**What changes the answer:**  
Final validation status, local-law research, current statute checks, public registry availability.

**Separate overlays:**  
Probation, parole, mandatory supervision, juvenile probation, court orders, treatment rules, custody/family-court orders, school/campus policy, facility policy, employer policy, housing-provider rules, shelter rules, private lease terms, federal SORNA, and International Megan’s Law may impose separate duties or limits.

**Operative rule for V2:**  
V2 field recommendation: use TX-S2/TX-S4 for core duties, TX-S3/TX-S5 for public registry, TX-S6/TX-S8 for local authority, TX-S7 for supervision child-safety zones, TX-S9 for HB 2000, and TX-S12 for removal. Preserve: no blanket statewide post-supervision residence ban; local/supervision/campus rules may still restrict. Source keys: TX-S2, TX-S3, TX-S4, TX-S5, TX-S6, TX-S7, TX-S8, TX-S9, TX-S12.

**Source keys / official sources:**  
TX-S2, TX-S3, TX-S4, TX-S5, TX-S6, TX-S7, TX-S8, TX-S9, TX-S12

**Confidence:** High

**Validation gaps:**  
Final article-level source check and current local/case-specific validation before production.

**V2 implications:**  
Preserve activity-specific scope, numbers, deadlines, and source keys; do not convert this into broader public advice than the sources support.



# Visitor Question Coverage Check

| Visitor question | Coverage | STF-grounded explanation |
|---|---|---|
| 1. Where can I live? | Partially answered | No blanket statewide post-supervision residence-distance ban validated; campus housing and local/supervision/housing-provider restrictions may apply. |
| 2. Can I live with family? | Partially answered | No blanket Chapter 62 family-residence ban validated, but supervision, custody/family court, local ordinances, housing policy, and victim facts can change the answer. |
| 3. Can I live with children? | Requires validation | No blanket Chapter 62 child-household ban found; child-contact/household rules are likely supervision/court/treatment/family-court/local specific. |
| 4. Can I live with my own biological/adoptive children? | Requires validation | No blanket statewide registry-only ban validated; custody, victim facts, supervision, and court orders control. |
| 5. Can I attend my child’s school event? | Partially answered | Statewide school-entry notice applies during standard operating hours unless exception/written agreement applies; school policy, supervision, and local rules may restrict attendance. |
| 6. Can I go to parks, playgrounds, beaches, pools, libraries, churches, or youth events? | Partially answered | No blanket Chapter 62 place ban; supervision child-safety zones and local ordinances may restrict child-focused places; place-specific local validation needed. |
| 7. Can I work near children? | Partially answered | Narrow statewide employment prohibition applies to covered sexually violent offenses with victim-under-14 finding; licensing/employer/supervision/local rules may add restrictions. |
| 8. Can I attend college or trade school? | Answered confidently | Higher-ed work/enrollment triggers 7-day notice; campus residence requires low-risk status and institutional approval. |
| 9. Who can see my information? | Answered confidently | Most registration information is public through DPS/local registries; juvenile nonpublic orders and excluded data fields limit exposure. |
| 10. What exactly is public? | Answered confidently | DPS lists excluded fields: SSN, DL number, phone, online identifier, employer details, victim-identifying info, certain juvenile nonpublic records, and additional DPS-required nonpublic data. |
| 11. How often do I report? | Answered confidently | Most annually; repeat sexually violent offense category every 90 days; civil commitment every 30 days; changes have separate 7-day duties. |
| 12. What changes trigger reporting? | Answered confidently | Address, online identifier, name, physical health, job status, and education status changes; higher-ed start/stop; no-fixed-address updates; repeated temporary visits. |
| 13. What if I am homeless or transient? | Answered confidently | Report every 30 days with detailed geographic location description. |
| 14. What if I visit temporarily? | Answered confidently for in-state repeat visits | More than 48 consecutive hours in another municipality/county on at least three occasions in a month triggers local reporting; out-of-state visitor threshold needs separate validation. |
| 15. What if I move in or out? | Answered confidently | Moving in generally requires 7-day registration if reportable; moving out requires Texas pre-move notice and destination registration by the destination deadline/10-day Texas-stated rule. |
| 16. Can I travel internationally? | Requires validation | No Texas-specific international travel rule was validated; federal IML/SORNA and supervision validation required. |
| 17. Can I get removed, reclassified, or off the public site? | Partially answered | Limited juvenile, close-in-age, federal-minimum early termination, and expired-duty removal routes exist; case-specific court/agency proof needed. |
| 18. What are the biggest accidental compliance traps? | Answered confidently | Pre/post move notice, 7-day non-address changes, 30-day transient reports, verification cadence, repeated 48-hour visits, local/supervision/campus rules. |
| 19. What must I verify locally? | Answered confidently | City child-safety-zone/residence/presence/Halloween rules, local registration intake procedures, shelters/housing, and exact address/place rules. |
| 20. What must I verify with supervision/court orders? | Answered confidently | Child-safety-zone distance, child/contact/household rules, school/event access, internet, employment, travel, treatment, and custody/family-court conditions. |

# Missing STF Fields

- Article-level line validation for some Chapter 62 provisions where the official statute site opened but did not expose article text in the fetched view.
- Public DPS registry search page browser check; the fetch returned 502 even though DPS program/FAQ links confirm the public registry exists.
- Current city-by-city ordinance validation for any specific Texas address, park, school, pool, library, church, shelter, Halloween, or local presence rule.
- Current litigation sweep for Texas appellate/federal cases after GA-0526 and later local-ordinance legislation.
- Current forms/contact validation for TxSOR email, local agency forms, classified DL/ID process, and current fee amounts.
- International travel / federal IML/SORNA specific deadlines were not live-researched in this STF.
- Tribal-case registration treatment requires validation.

# Contradictions or Near-Contradictions Detected

| Tension | Resolution for V2 |
|---|---|
| Legacy line says no single statewide residency ban applies after supervision, while legacy highlights say Texas enforces statewide 1,000-foot residential exclusion zones under art. 62.301. | Treat the statewide 1,000-foot claim as not validated and likely erroneous/misplaced for current Texas Chapter 62. DPS FAQ states Chapter 62 itself does not prohibit living/going near children’s places and is otherwise silent on residency restrictions except campus residence; local ordinances and supervision can impose child-safety zones. |
| Legacy references art. 62.301 as a residence-distance rule, but external search/opening indicates art. 62.301 concerns exemption from registration for certain young adult sex-offense cases. | Do not use art. 62.301 for a residence-distance rule. Use TX-S4 for DPS residence guidance, TX-S10 for campus residence, TX-S6/TX-S8 for local authority, and TX-S7 for parole child-safety-zone overlays. |
| Public registry source is central, but direct public registry fetch returned 502. | Keep TX-S5 in the source map with validation flag; rely on DPS program/FAQ pages for confirmation pending browser check. |
| Local Government Code § 341.906 supports general-law municipal child-safety-zone authority, while GA-0526 supported home-rule residence authority and pre-2017 general-law limitation. | Use “Partially allowed” local posture. Do not generalize all local rules; validate city type and ordinance text. |

# Topics Requiring Live Validation Before Publication

1. Chapter 62 article-level text: arts. 62.001, 62.051, 62.053, 62.055, 62.0551, 62.058, 62.060, 62.063, 62.064, 62.101, 62.102, 62.151–62.153, 62.402–62.408.
2. Local Government Code § 341.906 exact current text and any amendments.
3. Government Code § 508.187 and community-supervision counterpart, including current child-safety-zone exceptions/modification procedures.
4. DPS public registry search page availability and exact public fields.
5. Current DPS forms/process/contact information, including TxSOR email and classified DL/ID procedure.
6. Current local ordinances for any city-specific V2 examples or address-check tool.
7. Recent litigation/current controlling cases affecting local ordinances, public posting, retroactivity, juvenile registration, or removal.
8. Federal IML/SORNA international and interstate travel details.
9. Pending Texas legislation after HB 2000, including any 2026 special-session changes.

# Split Source Confidence Summary

| Category | Confidence | Summary |
|---|---|---|
| Core statewide architecture confidence | High | DPS FAQ/program page and Chapter 62 support who registers, public posting, reporting, verification, duration, penalties, higher-ed, school-entry notice, and removal pathways. |
| Publication completeness confidence | Medium | Strong enough for V2 preview, but article-level line checks, public registry browser check, forms/process validation, and local/case-law sweeps remain. |
| Local authority / preemption confidence | Medium | GA-0526, DPS FAQ, and § 341.906 support a partially allowed posture, but city-specific ordinances and place categories must be validated. |
| Forms and process confidence | Medium | DPS program/FAQ and legacy records template provide process leads; current forms, contacts, local agency practices, and fees need validation. |
| Recent law / litigation confidence | Medium | HB 2000 was live-validated as effective 9/1/2025; current litigation and pending-bill sweeps remain incomplete. |
| Visitor-question completeness confidence | Medium | Most reporting/public/duration/travel-within-Texas questions are answered; family/children, international travel, local place rules, and supervision specifics require validation. |

# Ready-to-Feed Determination

**Ready to feed State Registry Output GPT?**  
Yes — with validation flags.

**Ready for V2 preview generation?**  
Yes — for preview only.

**Ready for production publication?**  
No.

**Blocking issues before production:**  
Public registry browser check; final article-level statutory validation; local ordinance/current litigation sweep; forms/contact/fees validation; federal IML/SORNA travel validation; correction of the legacy statewide 1,000-foot contradiction in any downstream V2 output.

**Recommended next step:**  
Feed this STF to the State Registry Output GPT for a Texas V2 preview only, while separately validating the listed production blockers before publication.
