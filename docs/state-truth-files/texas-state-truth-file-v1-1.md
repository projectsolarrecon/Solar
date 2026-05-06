# Texas State Truth File v1.1

**State:** Texas  
**Conversion basis:** Existing SOLAR legacy state file plus targeted official-source gap research  
**Research mode:** STF v1.1 retrofit and gap-research mode  
**New research added:** Live validation of Texas DPS program page and FAQ, Texas AG Opinion GA-0526, HB 2000 bill history/text, attempted DPS public registry access, and official statute index pages.  
**Publication posture:** Reporting deadline-heavy state; broad public-posting state; lifetime-or-10-year duration; meaningful but limited removal; no validated blanket statewide Chapter 62 residence/presence ban after supervision, with important local/supervision/campus/school overlays.

---

## Repo Awareness Check

1. **Legacy file opened?** Yes. I opened `src/data/state-registry/tx.ts` in the `projectsolarrecon/Solar` GitHub repo during this chat.
2. **Source of access:** Repo/GitHub access through the user-provided repository URL.
3. **Concrete facts from the legacy file:**
   - The legacy file states `state: "Texas"` and `lastReviewedUTC: "2025-10-10T00:00:00Z"`.
   - It says initial registration/verification is within **7 days** after release/placement or arrival in Texas, citing Chapter 62 Articles 62.053 and 62.051.
   - It says verification is **annual** for most, **every 90 days** for people with two or more sexually violent offense convictions/deferreds, and **every 30 days** if civilly committed.
   - It lists top compliance traps including address-change notice before and after a move, online identifier updates within 7 days, higher-ed notice within 7 days, no-fixed-address reporting every 30 days, and felony penalties for failure to comply.
   - It contains a contradiction: the `residencyPresence` section says there is no single statewide residency ban after supervision, while the later `highlights.residency` field claims Texas enforces statewide 1,000-foot residential exclusion zones under Article 62.301. Current DPS FAQ supports the former and undermines the latter as a blanket statewide Chapter 62 rule.
4. **STF generation gate:** Passed. The legacy file was actually opened and inspected.

---

## 1. Source Key Map

| Source key | Source label | Official URL | Source type | What it supports | Confidence | Validation status |
|---|---|---|---|---|---|---|
| TX-S1 | Legacy SOLAR Texas registry file, `src/data/state-registry/tx.ts` | https://github.com/projectsolarrecon/Solar/blob/main/src/data/state-registry/tx.ts | Legacy SOLAR source inherited | Conversion basis; prior conclusions, warnings, citations, and conflict audit | High | Opened and inspected through GitHub repo URL during this task |
| TX-S2 | Texas Code of Criminal Procedure Chapter 62 — Sex Offender Registration Program | https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm | Statute | Statewide registration architecture, deadlines, reporting, verification, duration, penalties, higher-ed, employment, ID, early termination | Medium | Official statute page opened during this task; parsed page did not expose full article text, so individual article wording remains partly inherited from legacy/DPS FAQ |
| TX-S3 | Texas DPS Sex Offender Registration Program page | https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program | Agency process page | DPS role, local registration authority, public notification architecture, public access, local agency registries | High | Live-validated during this task |
| TX-S4 | Texas DPS Criminal History Records and Sex Offender Registration Program FAQ | https://www.dps.texas.gov/section/crime-records/faq/criminal-history-records-and-texas-sex-offender-registration-program-faq | Agency FAQ / guidance | Who registers, nonresident workers/students, registration location, required information, public/nonpublic fields, risk levels, duration, verification cadence, address changes, higher-ed notice, regular visits, residence/place rules, employment limits, school-entry notice, local ordinance guidance, removal process | High | Live-validated during this task |
| TX-S5 | Texas DPS Public Sex Offender Registry search | https://publicsite.dps.texas.gov/SexOffenderRegistry/Search | Public registry page | Public registry existence and search function | Medium | Open attempted during this task; fetch returned 502. DPS program page/FAQ validate existence; public page itself requires live link check before production |
| TX-S6 | Texas Attorney General Opinion GA-0526 | https://www.texasattorneygeneral.gov/opinions/greg-abbott/ga-0526 | Attorney general opinion | Local authority: state law does not preempt home-rule municipal residence restrictions; general-law municipality authority was limited under the opinion as issued | High | Live-validated during this task |
| TX-S7 | Texas Local Government Code § 341.906 | https://statutes.capitol.texas.gov/Docs/LG/htm/LG.341.htm#341.906 | Statute | General-law municipality authority to restrict registered sex offenders from going in, on, or within a specified distance of a child safety zone; distance/procedure limitations | Medium | Official statute page opened during this task but parsed text was not exposed; DPS FAQ live-validates substance |
| TX-S8 | Texas Government Code § 508.187 | https://statutes.capitol.texas.gov/Docs/GV/htm/GV.508.htm#508.187 | Statute | Parole/mandatory-supervision child-safety-zone overlay | Low | Official page opened during this task but parsed text was not exposed; inherited from legacy file — needs live link check |
| TX-S9 | HB 2000 / Audrii’s Law, 89(R) — bill history | https://capitol.texas.gov/billlookup/History.aspx?Bill=HB2000&LegSess=89R | Enacted session law / bill history | Signed by Governor 05/24/2025; effective 09/01/2025; caption concerns sex offender registration applicability to child grooming | High | Live-validated during this task |
| TX-S10 | HB 2000 introduced bill text | https://capitol.texas.gov/tlodocs/89R/billtext/html/HB02000I.htm | Bill text | Adds Penal Code § 15.032 child grooming to reportable convictions for offenses committed on or after effective date | Medium | Live-validated during this task; introduced text checked, enrolled/current codification should be live-validated before production |
| TX-S11 | Federal SORNA / 34 U.S.C. § 20914 international travel overlay | Official URL: Not included in source packet — requires validation. | Federal statute / federal overlay | 21-day international travel notice overlay | Low | Requires official source |
| TX-S12 | International Megan’s Law / passport identifier overlay | Official URL: Not included in source packet — requires validation. | Federal statute / federal overlay | International travel and passport identifier risk | Low | Requires official source |


---

## 2. Local Authority / Preemption Analysis

| Topic | Local authority posture | Analysis | Source keys | Validation status |
|---|---|---|---|---|
| residence restrictions | Allowed / Partially allowed | DPS states Chapter 62 is otherwise silent on residency restrictions except campus housing, but some cities have enacted local ordinances restricting where a person may reside. GA-0526 says state law does not preempt home-rule municipalities from adopting sex-offender residence restrictions. General-law municipalities have later statutory authority under Local Gov’t Code § 341.906, though the precise scope must be validated against the ordinance and statute. | TX-S4, TX-S6, TX-S7 | Local authority confirmed allowed for home-rule residence ordinances; general-law scope requires statute-text validation |
| presence/place restrictions | Partially allowed | DPS states Chapter 62 itself does not prohibit registered people from living or going near child-focused places, but community supervision/parole and city ordinances may impose child-safety-zone limits. Local Gov’t Code § 341.906 is described by DPS as allowing general-law municipalities to restrict going in, on, or within a specified distance of a child safety zone. | TX-S4, TX-S7, TX-S8 | Local authority partially confirmed; exact local distance and exemptions require ordinance validation |
| parks / playgrounds / schools / child-care locations | Partially allowed | These are the core places DPS identifies as examples of child-safety-zone locations. Statewide Chapter 62 does not create a blanket ban for all registrants, but school-entry notification and supervision/local child-safety zones may apply. | TX-S4, TX-S7, TX-S8 | Local authority partially confirmed |
| beaches / pools / public bathing places / recreation areas | Unclear — validate | Chapter 62/DPS FAQ does not establish a statewide blanket rule for these locations. Some local ordinances may define child-safety zones or recreation areas broadly, but this STF did not validate a statewide Texas rule for beaches, pools, or public bathing places. | TX-S4, TX-S7 | Local authority unclear — validate specific ordinance |
| libraries / churches / public facilities / events | Unclear — validate | No blanket statewide Chapter 62 access rule was validated for libraries, churches, general public facilities, or public events. Local child-safety-zone ordinances, private/facility policy, school-event rules, supervision, or court orders may still restrict access. | TX-S4, TX-S7, TX-S8 | Local authority unclear — validate specific place/event |
| shelters / transitional housing | Unclear — validate | No statewide shelter-specific registration restriction was found in the validated sources. Local residence ordinances, facility admissions policies, parole/probation conditions, private housing rules, and homelessness reporting duties may control practical access. | TX-S4 | Local authority unclear — validate |
| local reporting / registration procedures | Partially allowed | Chapter 62/DPS assign registration to local law enforcement where the person resides, works, studies, or regularly visits; local authorities collect and update information. This is local administration of state registration, not independent local deadlines unless a valid ordinance or procedure controls intake logistics. | TX-S3, TX-S4 | State baseline confirmed; local intake practice requires validation |
| Halloween / holiday / event restrictions | Unclear — validate | No statewide Halloween/holiday restriction was validated in Chapter 62/DPS FAQ. Restrictions may come from parole/probation, court orders, treatment conditions, or a local ordinance/event policy if valid. | TX-S4, TX-S8 | Local authority unclear — validate |


---

# Topic File

## 1. State posture summary

**Topic posture:** Reporting deadline-heavy; statewide baseline plus local overlay  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed

**Controlling rule:**  
Texas is a registration-heavy state with in-person local registration, frequent change-reporting duties, broad public access to registry information, risk-level/public-notification features, and meaningful but limited removal paths. Chapter 62 is the statewide framework, while DPS and local law enforcement administer registration and public notification.

**Practical meaning:**  
Daily-life risk is mostly deadline and documentation risk: 7-day arrival/change windows, annual/90-day/30-day verification, online-identifier reporting, higher-ed notice, regular-visit reporting, and felony exposure for noncompliance. Housing/place rules are not one statewide blanket ban under Chapter 62, but local child-safety-zone ordinances and supervision can be decisive.

**Scope / who is affected:**  
People with reportable convictions/adjudications, extrajurisdictional registrants, people required to register by parole/community supervision conditions, nonresident workers/students, civilly committed people, juveniles in some circumstances, and people with qualifying federal/military/foreign convictions.

**What changes the answer:**  
Offense category, age of victim, risk level, civil commitment, repeat sexually violent offenses, supervision status, campus residence/work/school status, local ordinance, homelessness/no fixed address, and whether the person is a nonresident worker/student.

**Separate overlays:**  
Supervision, parole, community supervision, court orders, treatment rules, campus policy, local ordinances, employer policy, housing-provider rules, shelter policy, federal SORNA, International Megan’s Law.

**Operative rule for V2:**  
Texas uses Chapter 62 as the statewide registration baseline: register in person with local law enforcement, report key changes promptly, and verify annually, every 90 days, or every 30 days depending on status. Chapter 62 itself does not create a blanket statewide child-safety-zone ban for all registrants, but campus housing limits, school-entry notice, local ordinances, and supervision can add location rules. Source keys: TX-S2, TX-S3, TX-S4, TX-S6, TX-S7, TX-S8.

**Source keys / official sources:**  
TX-S2, TX-S3, TX-S4, TX-S6, TX-S7, TX-S8

**Confidence:** High

**Validation gaps:**  
Validate current codified statute text for each article before production; validate public registry page availability.

**V2 implications:**  
The Output GPT should frame Texas as deadline-heavy and public-posting broad, with local/supervision child-safety-zone overlays kept separate from Chapter 62 itself.

## 2. Who must register

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Any person with a reportable conviction or adjudication, a person required to register as a condition of parole/mandatory supervision/community supervision, or an extrajurisdictional registrant must register. DPS states out-of-state, federal, military, and foreign convictions can require Texas registration if substantially similar or if the other jurisdiction requires registration.

**Practical meaning:**  
This is offense/status driven, not based on whether someone appears dangerous today. Texas can require registration for adult convictions, juvenile adjudications, deferred adjudications, substantially similar out-of-state/federal/military/foreign offenses, and supervision-based registration.

**Scope / who is affected:**  
People with reportable convictions/adjudications under Chapter 62; extrajurisdictional registrants; people required to register by supervision; nonresident workers/students if thresholds are met.

**What changes the answer:**  
Substantial similarity decision by DPS; adjudication type; date of offense; post-2025 child grooming inclusion; whether the person resides/works/studies in Texas; current supervision condition.

**Separate overlays:**  
Federal SORNA, other-state registration duty, court orders, probation/parole, juvenile court orders, tribal/federal/military status.

**Operative rule for V2:**  
Texas registration is triggered by a Chapter 62 reportable conviction/adjudication, registration as a supervision condition, or extrajurisdictional status. DPS determines substantial similarity for many out-of-state, federal, military, and foreign cases. Source keys: TX-S2, TX-S4, TX-S10.

**Source keys / official sources:**  
TX-S2, TX-S4, TX-S10

**Confidence:** High

**Validation gaps:**  
Current codified Article 62.001 should be checked for HB 2000 incorporation before production.

**V2 implications:**  
V2 should not describe Texas as risk-based entry only; it is conviction/adjudication/status based, with DPS substantial-similarity decisions for external convictions.

## 3. Initial registration deadlines

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states registration must be completed not later than the later of the seventh day after arrival in the municipality/county or the first date the local authority by policy allows registration. Legacy file also cites Article 62.053 and 62.051 for 7-day release/placement/arrival registration.

**Practical meaning:**  
A new Texas resident, returning person, or person released/placed into the community should treat the 7-day clock as urgent and document in-person attempts if the agency has scheduling limits.

**Scope / who is affected:**  
People required to register who arrive in a Texas municipality/county, are released, placed on supervision, or otherwise become subject to Chapter 62.

**What changes the answer:**  
Agency scheduling policy; release/arrival date; whether the person has no fixed address; whether the person is a nonresident worker/student.

**Separate overlays:**  
Local intake scheduling, jail/prison release processing, parole/probation instructions, court orders.

**Operative rule for V2:**  
Initial Texas registration/verification is generally due within 7 days after release/placement/arrival, or by the first agency-allowed registration date if later. Source keys: TX-S1, TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S2, TX-S4

**Confidence:** High

**Validation gaps:**  
Validate exact Article 62.051/62.053 text before production.

**V2 implications:**  
StartHere should emphasize in-person local registration and proof of attempted compliance.

## 4. Ongoing reporting duties

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states registrants must keep registration/verification information accurate and notify the primary registration authority of changes in address, online identifiers, name, physical health, job status, and educational status. Address moves require before-and-after reports; online identifiers/name/health/job/education changes are due not later than the seventh day after change.

**Practical meaning:**  
Texas is trap-heavy for changes. Moving, changing work/school, creating or changing online identifiers, and repeated visits to another county/municipality can create additional reporting duties.

**Scope / who is affected:**  
All registrants; higher-ed workers/students; people who regularly visit another municipality/county; nonresident workers/students; people with no fixed address.

**What changes the answer:**  
Type of change; in-state vs out-of-state move; school/work status; visitor frequency; homelessness/no fixed address; local agency procedures.

**Separate overlays:**  
Supervision reporting, school/campus rules, employer policy, treatment rules, federal SORNA.

**Operative rule for V2:**  
Report address changes in person before and after the move; report online identifier, name, physical health, job status, and education status changes not later than the seventh day after change. Regular visits to another municipality/county on at least three occasions in a month for more than 48 consecutive hours trigger local reporting there. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate article citations 62.055, 62.0551, 62.059 if used in V2.

**V2 implications:**  
CommonQuestions should list move, job, school, online ID, no fixed address, and regular-visit triggers.

## 5. Verification / re-registration schedule

**Topic posture:** Reporting cadence varies by designation  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states civilly committed sexually violent predators verify once each 30-day period; people with two or more sexually violent offenses verify once each 90-day period; all other registrants verify once each year. Legacy file adds annual birthday-window language for most registrants.

**Practical meaning:**  
The verification cadence depends on designation/offense history. Missing verification is felony exposure, so the cadence should be stored as an individualized compliance field.

**Scope / who is affected:**  
All registrants, with subgroups for civil commitment and two or more sexually violent offenses.

**What changes the answer:**  
Civil commitment status; number of sexually violent offenses; local agency scheduling; birthday window; registry record cadence.

**Separate overlays:**  
Supervision check-ins are separate from registration verification.

**Operative rule for V2:**  
Civilly committed registrants verify every 30 days; registrants with two or more sexually violent offenses verify every 90 days; all others verify once each year. Source keys: TX-S1, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S4

**Confidence:** High

**Validation gaps:**  
Validate whether the annual birthday window remains 30 days before/after in current statute text.

**V2 implications:**  
V2 should include the three-cadence model and warn not to assume annual verification.

## 6. Residence restrictions

**Topic posture:** Statewide baseline plus local overlay  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Allowed / Partially allowed

**Controlling rule:**  
DPS states Chapter 62 itself does not generally prohibit registrants from living near places frequented by children, except campus housing requires low-risk assessment and institutional approval. DPS also states some cities have local ordinances restricting residence, and GA-0526 says state law does not preempt home-rule municipalities from adopting residence restrictions.

**Practical meaning:**  
There is not a validated blanket statewide post-supervision 1,000-foot home-address ban for all Texas registrants under Chapter 62. The practical housing answer often changes based on city ordinance, supervision/parole/probation child-safety zones, campus housing, private housing rules, and local law.

**Scope / who is affected:**  
All registrants for campus housing and local ordinance screening; supervised people for child-safety-zone conditions; registrants seeking to live on higher-ed campus.

**What changes the answer:**  
Whether on supervision; city type and local ordinance; higher-ed campus housing; risk level; institution approval; private lease; public housing/shelter policies.

**Separate overlays:**  
Parole/probation, court orders, local ordinances, housing-provider rules, private lease, public housing rules, shelter policy.

**Operative rule for V2:**  
No blanket statewide Chapter 62 residence-distance ban was validated for all post-supervision registrants. Texas does restrict campus residence unless the person is low risk and approved by the institution, and local ordinances/supervision can add child-safety-zone restrictions. Source keys: TX-S4, TX-S6, TX-S7, TX-S8.

**Source keys / official sources:**  
TX-S4, TX-S6, TX-S7, TX-S8

**Confidence:** High for no blanket Chapter 62 rule; Medium for local scope

**Validation gaps:**  
Validate current Local Gov’t Code § 341.906 text and specific city ordinance before relying on an address.

**V2 implications:**  
V2 must correct the legacy contradiction and not state a statewide 1,000-foot residence ban unless tied to a validated local/supervision rule.

## 7. Presence / place restrictions

**Topic posture:** Statewide baseline plus local overlay  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed

**Controlling rule:**  
DPS states Chapter 62 itself does not prohibit registered people from going near places frequented by children, but supervision/parole laws and city ordinances may impose child-safety zones. Separately, school-entry notice applies during standard operating hours.

**Practical meaning:**  
Presence is not the same as residence. A person may have no statewide Chapter 62 ban from being near a place, but still may be barred by supervision, local child-safety-zone ordinance, school-entry notice, facility policy, or event rules.

**Scope / who is affected:**  
All registrants for school-entry notice; supervised registrants for child-safety zones; people in local ordinance jurisdictions.

**What changes the answer:**  
Place type; school operating hours; local ordinance; supervision; whether the person is a student/event participant or has written school agreement.

**Separate overlays:**  
Supervision, court orders, school policy, facility policy, private event rules, local ordinance.

**Operative rule for V2:**  
Texas Chapter 62 does not impose a blanket statewide ban on going near child-focused places for all registrants. School premises require immediate administrative-office notice during standard operating hours unless an exception applies, and local/supervision child-safety zones may restrict presence. Source keys: TX-S4, TX-S7, TX-S8.

**Source keys / official sources:**  
TX-S4, TX-S7, TX-S8

**Confidence:** High

**Validation gaps:**  
Validate current statutory citation for school-entry notice before production.

**V2 implications:**  
CommonQuestions should separate parks/playgrounds presence from school-entry notice and supervision/local zones.

## 8. Employment restrictions

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states Chapter 62 itself does not broadly bar registrants from all trades, but Article 62.063 creates specific prohibitions for certain sexually violent offenses with an affirmative finding that the victim was under 14, including bus, taxi/limousine, unsupervised in-home services, and amusement rides.

**Practical meaning:**  
Texas has targeted employment restrictions, not a blanket ban on working near children. Professional licensing statutes and employers can impose additional rules.

**Scope / who is affected:**  
People with reportable convictions for sexually violent offenses with a qualifying under-14 affirmative finding; other registrants subject to licensing/employer rules.

**What changes the answer:**  
Offense type; victim age/affirmative finding; job duties; supervision of in-home services; licensing statute; employer policy; school/campus employment.

**Separate overlays:**  
Employer policy, occupational licensing, supervision, school/campus policy, treatment rules.

**Operative rule for V2:**  
For qualifying sexually violent offenses with an affirmative finding that the victim was under 14, Texas bars operating/offering bus, taxi/limousine, unsupervised in-home services, and amusement rides. Other work limits require checking occupation-specific law, supervision, and employer policy. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate Article 62.063 text and effective date details before production.

**V2 implications:**  
V2 should avoid saying “cannot work near children” broadly; list the specific statutory job categories and then separate overlays.

## 9. Education / campus rules

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Registrants working at or enrolling in a public/private higher-education institution must notify campus security and the primary registration authority within 7 days of beginning and ending work/enrollment. Campus residence is restricted unless the person is low risk and institution-approved.

**Practical meaning:**  
College and trade school are possible for some people, but Texas creates additional reporting and campus-residence rules. Campus police/security notice is a compliance trap.

**Scope / who is affected:**  
Registrants who work, carry on a vocation, or enroll at universities, colleges, community colleges, technical/trade institutions; people seeking campus housing.

**What changes the answer:**  
Enrollment vs employment; campus housing; risk level; institution approval; campus policy; supervision.

**Separate overlays:**  
Campus policy, school disciplinary rules, supervision, federal education access rules.

**Operative rule for V2:**  
Higher-ed work or enrollment requires notice to campus security and the primary registration authority within 7 days of starting and ending. Campus residence requires low-risk status and institution approval. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate Article 62.064/62.153 wording before production.

**V2 implications:**  
V2 should answer college separately from K-12 school premises.

## 10. Internet / identifier rules

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS identifies online identifiers as required registration information and states changes in online identifiers must be reported not later than the seventh day after change.

**Practical meaning:**  
Creating, changing, or abandoning usernames/emails/handles can trigger a reporting duty. Online identifiers are registration data but generally nonpublic under DPS guidance.

**Scope / who is affected:**  
All registrants with online identifiers.

**What changes the answer:**  
What counts as an online identifier; platform-specific identifiers; local agency form; supervision internet rules.

**Separate overlays:**  
Supervision/court internet limits, treatment rules, device monitoring, employer policy.

**Operative rule for V2:**  
Report online identifier changes not later than the seventh day after the change. Online identifiers are collected but DPS identifies them as nonpublic registry information. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate Article 62.0551 and current DPS form language.

**V2 implications:**  
V2 should include online IDs under reporting duties and public/nonpublic fields.

## 11. Public registry visibility

**Topic posture:** Public posting broad  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states registration information is public with listed exceptions, public information can be accessed via the DPS website, and local authorities may maintain public registries. DPS program page states most database information is freely available and local authorities may publish high-risk listings and postcards for high-risk/civil commitment.

**Practical meaning:**  
Texas public visibility is broad. The key internal nuance is that not all collected data is public: Social Security number, driver license number, phones, online identifiers, employer info, victim-identifying information, certain DPS-required extra information, and some juvenile records ordered nonpublic are excluded.

**Scope / who is affected:**  
Most adult registrants; juveniles unless court orders nonpublic status; high-risk and civilly committed people for postcards/community notification.

**What changes the answer:**  
Risk level; juvenile court order; high-risk/civil commitment; local publication; death/expiration/removal status.

**Separate overlays:**  
Local registry websites, newspaper publication, postcards, school notification, private data broker copies.

**Operative rule for V2:**  
Texas treats most registry information as public, with exceptions for SSN, driver license number, phone numbers, online identifiers, employer information, victim-identifying information, certain DPS-required extra information, and juvenile records ordered nonpublic. Source keys: TX-S3, TX-S4, TX-S5.

**Source keys / official sources:**  
TX-S3, TX-S4, TX-S5

**Confidence:** High

**Validation gaps:**  
Recheck DPS public registry page availability before production.

**V2 implications:**  
V2 sourceMap should cite DPS FAQ/program page for public/nonpublic distinctions.

## 12. Tiering / designation

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Texas uses numeric risk levels one/low, two/moderate, three/high, plus a civil commitment designation for sexually violent predators. The risk level is separate from the individual risk assessment used for early termination.

**Practical meaning:**  
Texas is not a pure three-tier duration system like federal SORNA. Risk level affects public notification and community risk description; verification cadence also depends on civil commitment and repeat sexually violent offenses.

**Scope / who is affected:**  
All registrants assigned a risk level; civilly committed people; early-termination applicants.

**What changes the answer:**  
Risk-level assessment; civil commitment; two or more sexually violent offenses; individual risk assessment for deregistration.

**Separate overlays:**  
Civil commitment, parole, treatment, court findings.

**Operative rule for V2:**  
Texas assigns numeric risk levels 1, 2, or 3, plus a civil commitment registry designation; these are separate from the individual risk assessment used for early termination. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate RARC tool/current risk-level process before production if details are expanded.

**V2 implications:**  
V2 should call this risk-level/designation, not federal-style tiering.

## 13. Duration of registration

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states adult sex offenders register either for life or ten years following discharge from supervision, with listed lifetime categories; juvenile duration rules generally use ten-year periods tied to disposition/discharge; extrajurisdictional duration may follow the foreign/federal/military requirement.

**Practical meaning:**  
Duration must be offense-specific. Lifetime is common for many serious offense categories, but not every adult registrant is lifetime.

**Scope / who is affected:**  
Adult registrants; juvenile adjudications; extrajurisdictional registrants.

**What changes the answer:**  
Offense type; age at offense; juvenile vs adult; discharge date; foreign/federal/military rule; early termination eligibility.

**Separate overlays:**  
Federal SORNA, court orders, DPS record correction/removal process.

**Operative rule for V2:**  
Adult Texas registration is generally either lifetime or 10 years after discharge from state supervision; juvenile and extrajurisdictional rules have separate duration calculations. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate current Article 62.101 list before production.

**V2 implications:**  
V2 should avoid one-size duration language and include a duration-check warning.

## 14. Removal / termination / reclassification

**Topic posture:** Removal meaningful  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS describes juvenile exemptions/nonpublic orders, limited adult exemptions for certain consensual conduct categories, early termination after individual risk assessment and federal-minimum comparison, and removal after duty expires by contacting the most recent updating agency with certified documents.

**Practical meaning:**  
Texas has meaningful but narrow relief pathways. Expiration/removal is not automatic in practice; documentation and agency action matter.

**Scope / who is affected:**  
People whose duty expired; adults eligible for limited exemption/early termination; juveniles seeking exemption/nonpublic status.

**What changes the answer:**  
Offense type; age gap; consensual conduct; federal minimum; individual risk assessment; certified court/discharge records; current supervision/other jurisdiction requirements.

**Separate overlays:**  
Courts, prosecutors, Council on Sex Offender Treatment, DPS/local agency, federal SORNA.

**Operative rule for V2:**  
Early termination generally requires an individual risk assessment and showing that Texas registration exceeds the federal minimum; expired-duty website removal requires contacting the most recent updating agency with certified documentation. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate Subchapter I article sequence and current forms/process before production.

**V2 implications:**  
V2 should mark removal as possible but document-heavy and not available for most lifetime cases without eligibility review.

## 15. Moving into the state

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
People who arrive in Texas with a reportable conviction/adjudication or extrajurisdictional duty must register with local law enforcement where they reside, or where they work/attend school if nonresident. DPS indicates the deadline is seven days after arrival or first agency-allowed date.

**Practical meaning:**  
New arrivals should not wait for mail or destination-state certainty. They should identify the correct police/sheriff registrar immediately and keep proof.

**Scope / who is affected:**  
New Texas residents; returning Texans; nonresident workers/students; people with out-of-state/federal/military/foreign convictions.

**What changes the answer:**  
Residence vs nonresident work/school; substantial similarity; other jurisdiction duty; agency appointment availability; homelessness.

**Separate overlays:**  
Destination supervision, interstate compact, federal SORNA.

**Operative rule for V2:**  
Move-in registration is generally due within 7 days after arrival or first agency-allowed date; nonresident workers/students register where they work or attend school if Texas thresholds apply. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate Subchapter H thresholds in statute text before production.

**V2 implications:**  
V2 checklist should include local registrar, documents, online IDs, vehicles if applicable, and ID requirement.

## 16. Moving out of the state

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states an out-of-state move requires an in-person report to the Texas primary registration authority not later than the seventh day before the intended address change and registration in the other state not later than the 10th day after arrival with the designated agency.

**Practical meaning:**  
Moving out does not simply end Texas obligations. The person must complete Texas pre-move notice, destination registration, and keep proof in both systems.

**Scope / who is affected:**  
Texas registrants moving to another state.

**What changes the answer:**  
Destination-state deadline; failure of move; interstate compact; homelessness; supervision travel permission.

**Separate overlays:**  
Federal SORNA, destination-state law, parole/probation, interstate compact.

**Operative rule for V2:**  
Before moving out of Texas, report the intended address change in person not later than 7 days before the move; after arrival in the other state, register with that state’s designated agency not later than the 10th day after arrival or sooner if that state requires. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate whether Texas also requires any post-arrival proof/update if destination registration fails.

**V2 implications:**  
V2 should include “before leaving Texas” and “after arrival” as separate checklist items.

## 17. Visiting / temporary lodging / in-state travel

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed

**Controlling rule:**  
DPS states a registered person who, on at least three occasions during any month, spends more than 48 consecutive hours in a municipality or county other than the one registered in must report to the local law enforcement authority there and provide registration information, lodging addresses, and intent to return.

**Practical meaning:**  
Texas has a regular-visit reporting trigger even without a permanent move. Brief one-off visits may not trigger Chapter 62 reporting, but repeated 48+ hour stays can.

**Scope / who is affected:**  
Texas registrants visiting another Texas municipality/county; possibly visitors already subject to Texas registration rules.

**What changes the answer:**  
Number of occasions in a month; more than 48 consecutive hours; lodging address; intent to return; local ordinance; supervision travel permission.

**Separate overlays:**  
Supervision, local ordinance, hotel/shelter policy, federal SORNA for interstate travel.

**Operative rule for V2:**  
Three or more occasions in a month with more than 48 consecutive hours in another Texas municipality/county triggers local reporting there. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate Article 62.059 citation before production.

**V2 implications:**  
V2 should include this as a major in-state travel trap.

## 18. Interstate travel / federal SORNA overlay

**Topic posture:** Conditional statewide rule  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
Texas rules govern Texas registration, moves, and nonresident work/school. Federal SORNA can separately require keeping registration current in jurisdictions of residence, employment, and school, and may impose independent federal penalties.

**Practical meaning:**  
Do not let Texas deadlines displace federal or destination-state duties. A trip can be compliant under Texas but still violate supervision, destination law, or federal law.

**Scope / who is affected:**  
Texas registrants traveling/moving/working/studying across state lines; out-of-state registrants coming to Texas.

**What changes the answer:**  
Destination state; length/purpose of stay; work/school; interstate compact; federal status; supervision.

**Separate overlays:**  
Federal SORNA, destination-state registry law, parole/probation, interstate compact.

**Operative rule for V2:**  
Texas move/work/school rules are not the whole interstate answer; federal SORNA and destination-state deadlines must be checked separately. Source keys: TX-S4, TX-S11.

**Source keys / official sources:**  
TX-S4, TX-S11

**Confidence:** Medium

**Validation gaps:**  
Live-validate federal SORNA source and destination-state interaction before production.

**V2 implications:**  
V2 should include a federal-overlay warning but not overstate Texas-specific visitor deadlines.

## 19. International travel

**Topic posture:** Conditional statewide rule  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
The legacy file did not provide a validated Texas-specific international-travel rule. Federal law commonly creates a 21-day advance international travel notice overlay and International Megan’s Law passport issues; these must be validated with official federal sources before publication.

**Practical meaning:**  
International travel requires a separate compliance check with the local registrar/supervising officer and federal rules. Texas state registration deadlines alone are not enough.

**Scope / who is affected:**  
Registrants planning international travel; people with covered sex offense status under federal law; supervised people.

**What changes the answer:**  
Destination country; passport status; covered sex offense; supervision; current registration jurisdiction; timing.

**Separate overlays:**  
Federal SORNA, International Megan’s Law, passport identifier, parole/probation, destination-country entry rules.

**Operative rule for V2:**  
International travel is not validated as a Texas-only Chapter 62 topic in this STF; check federal 21-day notice/International Megan’s Law and supervision before travel. Source keys: TX-S11, TX-S12.

**Source keys / official sources:**  
TX-S11, TX-S12

**Confidence:** Low

**Validation gaps:**  
Add official federal sources before production.

**V2 implications:**  
V2 should mark international travel as requires validation and federal-overlay heavy.

## 20. Unstable housing / homelessness / transient status

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Legacy file cites Article 62.055(i) for no fixed address reporting every 30 days with detailed location description. DPS FAQ requires providing a home address or detailed description of each geographical location where the person resides or intends to reside.

**Practical meaning:**  
Homelessness does not eliminate the duty to register. Texas expects detailed location reporting and periodic follow-up, creating high compliance risk.

**Scope / who is affected:**  
People without fixed address, shelter users, people moving between temporary locations.

**What changes the answer:**  
Fixed vs no fixed address; shelter policy; local registrar procedure; local ordinance; supervision; emergency lodging.

**Separate overlays:**  
Shelter policy, local ordinance, housing provider, supervision, private lease.

**Operative rule for V2:**  
No fixed address requires reporting a detailed location description and, per legacy Article 62.055(i) citation, 30-day reporting. Source keys: TX-S1, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S4

**Confidence:** Medium

**Validation gaps:**  
Live-validate Article 62.055(i) exact 30-day language before production.

**V2 implications:**  
V2 should include homelessness as a high-risk compliance trap and advise local registrar confirmation.

## 21. Fees and costs

**Topic posture:** Conditional statewide rule  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
The legacy file identifies costs connected to classified sex-offender DL/ID renewal and early termination risk assessment/court filings. DPS FAQ lists separate criminal-history/fingerprint fees but not a complete registration fee schedule.

**Practical meaning:**  
Costs can arise from driver license/ID, certified records, fingerprints, individual risk assessment, court filing, and attorney help. The STF does not validate a statewide registration fee.

**Scope / who is affected:**  
All registrants needing ID/records; early termination applicants.

**What changes the answer:**  
Local agency fees; DPS ID fee; court filing fee; risk assessment fee; indigency; records certification.

**Separate overlays:**  
Court fees, DPS fees, local agency policy, attorney fees.

**Operative rule for V2:**  
No validated statewide registration fee schedule was found; expected costs are process-specific, including ID/records and early-termination assessment/court costs. Source keys: TX-S1, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S4

**Confidence:** Low

**Validation gaps:**  
Validate DPS/driver license fees and early termination fee/cost details before production.

**V2 implications:**  
V2 should avoid quoting dollar amounts until validated.

## 22. Driver license / ID / marking requirements

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Legacy file cites Article 62.060 for classified sex-offender DL/ID within 30 days of registration and annual renewal. DPS FAQ public/nonpublic fields mentions driver license number is collected but not public.

**Practical meaning:**  
Texas ID compliance is a key administrative trap. The legacy conclusion should be preserved but live-validated against current DPS driver-license procedure.

**Scope / who is affected:**  
Registrants required to maintain classified sex-offender DL/ID.

**What changes the answer:**  
Registration date; DL vs ID; annual renewal; DPS appointment availability; failure/revocation consequences.

**Separate overlays:**  
DPS driver license policy, local registrar instructions, supervision.

**Operative rule for V2:**  
Legacy SOLAR records Texas requiring a classified sex-offender DL/ID within 30 days of registration and annual renewal; current Article 62.060/DPS DL procedure must be live-validated before publication. Source keys: TX-S1, TX-S2, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S2, TX-S4

**Confidence:** Medium

**Validation gaps:**  
Validate Article 62.060 and DPS driver license page/form before production.

**V2 implications:**  
V2 should flag as important but include validation note until source checked.

## 23. Vehicles, vessels, and property reporting

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS FAQ lists vehicle registration information for vehicles owned by persons with reportable convictions/adjudications for certain trafficking offenses under Penal Code §§ 20A.02(a)(3),(4),(7),(8) or 20A.03 when based on that conduct. The legacy file also broadly included vehicles in intake checklist.

**Practical meaning:**  
Vehicle reporting is not identical for every registrant based on the DPS FAQ wording; at minimum, qualifying trafficking-related registrants must provide vehicle information, and DPS/local forms may require more.

**Scope / who is affected:**  
Qualifying trafficking-related registrants; potentially others if DPS/local form requires information.

**What changes the answer:**  
Offense category; ownership; vehicle definition; local/DPS form requirements; employment vehicles.

**Separate overlays:**  
Employer policy, supervision, local registrar procedures.

**Operative rule for V2:**  
Vehicle registration information is expressly listed by DPS for certain trafficking-related reportable convictions/adjudications; broader vehicle-form requirements should be validated with current DPS/local forms. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** Medium

**Validation gaps:**  
Validate Chapter 62.051(c) and current DPS registration form for vehicle/vessel/property fields.

**V2 implications:**  
V2 should not overstate universal vehicle reporting without form validation.

## 24. Family, parenting, and household issues

**Topic posture:** No blanket statewide rule, but supervision/local/case-specific rules may apply  
**Rule status:** NO STATEWIDE RULE FOUND — STRENGTHENED  
**Local authority posture:** Unclear — validate

**Controlling rule:**  
No validated Chapter 62 rule creates a blanket statewide ban on living with family, living with children, or parenting one’s own children. Residence and presence may still be affected by supervision, family/custody court orders, local ordinances, victim-proximity terms, housing-provider policies, and child-safety-zone rules.

**Practical meaning:**  
This is one of the most fact-specific visitor questions. The Output GPT should not imply Texas Chapter 62 automatically bars family household living, but it must not ignore supervision/custody/local limits.

**Scope / who is affected:**  
Registrants living with family/children; parents; households with victims/minors; supervised people.

**What changes the answer:**  
Victim relationship; custody order; child protective services; probation/parole; local residence ordinance; lease/housing policy; treatment restrictions.

**Separate overlays:**  
Family court, CPS, supervision, court orders, treatment rules, housing provider, school policy.

**Operative rule for V2:**  
No blanket statewide Chapter 62 family-household ban was validated. Family/child household answers can still change because of supervision, custody/family-court orders, victim conditions, local ordinances, treatment rules, and housing-provider policies. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** Medium

**Validation gaps:**  
Validate family/custody statutory overlays if V2 expands this answer.

**V2 implications:**  
V2 should answer cautiously: Chapter 62 alone not a household ban, but specific orders may control.

## 25. Supervision overlays

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states probation/parole/community supervision may impose child-safety zones and residence restrictions, and legacy file cites Government Code § 508.187 for parole child-safety-zone conditions.

**Practical meaning:**  
Supervision can be far stricter than Chapter 62. A person on parole/probation should treat supervision terms as controlling for where they live, go, work, travel, and interact with minors.

**Scope / who is affected:**  
People on parole, mandatory supervision, probation/community supervision, juvenile supervision.

**What changes the answer:**  
Conditions imposed; offense/victim; supervising authority; child-safety-zone distance; written permission; treatment terms.

**Separate overlays:**  
Supervision, court orders, treatment, GPS, internet monitoring, travel permits.

**Operative rule for V2:**  
Texas Chapter 62 answers do not override parole/probation/community-supervision conditions; supervision may impose child-safety-zone, residence, travel, internet, employment, and minor-contact restrictions. Source keys: TX-S4, TX-S8.

**Source keys / official sources:**  
TX-S4, TX-S8

**Confidence:** High for concept; Low for §508.187 details

**Validation gaps:**  
Live-validate Government Code § 508.187 text before production.

**V2 implications:**  
V2 should include a separate “supervision controls if stricter” warning on housing/place/travel/family questions.

## 26. Juvenile registration

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states juvenile adjudications can require registration, juvenile duration is generally tied to 10 years after disposition/completion, juvenile sex offenders may seek exemption or nonpublic registration, and juvenile records ordered nonpublic are not public.

**Practical meaning:**  
Juvenile treatment is distinct. Some juvenile information can be nonpublic or exempted by court order.

**Scope / who is affected:**  
Juveniles adjudicated delinquent; juvenile-transfer cases; adults with juvenile-origin registration.

**What changes the answer:**  
Adjudication vs transferred conviction/deferred; court order; nonpublic classification; offense category; completion/discharge date.

**Separate overlays:**  
Juvenile court, sealing, family court, school policy, supervision.

**Operative rule for V2:**  
Juvenile adjudications can require Texas registration, but juveniles may seek exemption or nonpublic classification; duration and public visibility are separate from adult rules. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate juvenile-specific Chapter 62 subchapter and forms before production.

**V2 implications:**  
V2 should keep juvenile information separate and not assume public posting.

## 27. Out-of-state, federal, military, and tribal cases

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states out-of-state, federal, military, and foreign convictions can require Texas registration if substantially similar, and DPS determines substantial similarity. The legacy file also references Subchapter H for nonresident workers/students.

**Practical meaning:**  
External convictions require Texas-specific review, not just relying on the other jurisdiction’s label. Tribal cases were not specifically validated in this STF and need official-source review.

**Scope / who is affected:**  
People with convictions/adjudications outside Texas; nonresident workers/students.

**What changes the answer:**  
Substantial similarity; other jurisdiction duty; Texas residence/work/school; deferred adjudication; tribal jurisdiction; foreign/federal/military law.

**Separate overlays:**  
Federal SORNA, other-state law, military law, tribal law, immigration/travel status.

**Operative rule for V2:**  
Out-of-state, federal, military, and foreign cases can require Texas registration; DPS determines substantial similarity. Tribal-case treatment requires additional official validation. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** Medium

**Validation gaps:**  
Validate tribal case treatment and current extrajurisdictional article text.

**V2 implications:**  
V2 should say external convictions require Texas DPS/local review.

## 28. Enforcement and penalties

**Topic posture:** Broad statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
DPS states failure to comply with any Texas Sex Offender Registration Program requirement is a felony. Legacy file cites Article 62.102 penalty tiers: state jail for post-10-year cases, third-degree for annual verifiers, second-degree for quarterly/civil-commitment cadence.

**Practical meaning:**  
Texas noncompliance is high-stakes. Minor-seeming missed updates can become felony allegations.

**Scope / who is affected:**  
All people required to register.

**What changes the answer:**  
Cadence/status; type of violation; prior convictions; intentionality; local/prosecutor practice.

**Separate overlays:**  
Criminal defense counsel, supervision revocation, warrants, local law enforcement practice.

**Operative rule for V2:**  
Failure to comply with any Texas registration requirement is a felony; legacy Article 62.102 tiers should be validated before publication if degree labels are displayed. Source keys: TX-S1, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S4

**Confidence:** High for felony; Medium for degree tiers

**Validation gaps:**  
Validate current Article 62.102 penalty levels.

**V2 implications:**  
V2 should include felony warning and avoid underplaying deadline traps.

## 29. Local ordinances / preemption

**Topic posture:** Statewide baseline plus local overlay  
**Rule status:** LOCAL AUTHORITY CONFIRMED  
**Local authority posture:** Allowed / Partially allowed

**Controlling rule:**  
GA-0526 states state law does not preempt home-rule municipal sex-offender residence restrictions, while DPS FAQ says Local Gov’t Code § 341.906 allows general-law municipalities to restrict going in, on, or within specified distance of child safety zones with limits and exemption procedures.

**Practical meaning:**  
Texas is not locally preempted across the board. Cities may matter, but local rules must be separated from Chapter 62, supervision, school policy, and private rules.

**Scope / who is affected:**  
Registrants in municipalities with ordinances; people choosing addresses or visiting child-safety zones.

**What changes the answer:**  
Home-rule vs general-law city; ordinance wording; distance; exemptions; preexisting residence; whether it regulates residence or presence.

**Separate overlays:**  
Local ordinance, supervision, facility policy, private lease.

**Operative rule for V2:**  
Texas local authority is confirmed for home-rule residence restrictions and partially confirmed for general-law child-safety-zone ordinances under § 341.906; validate the specific city ordinance before relying on a location. Source keys: TX-S4, TX-S6, TX-S7.

**Source keys / official sources:**  
TX-S4, TX-S6, TX-S7

**Confidence:** Medium

**Validation gaps:**  
Validate §341.906 text and any target municipality ordinance.

**V2 implications:**  
V2 should say local ordinances can matter in Texas, but not use vague “varies” without distinguishing authority.

## 30. Recent enacted changes

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
HB 2000 / Audrii’s Law was signed by the Governor on May 24, 2025, effective September 1, 2025. Bill text adds Penal Code § 15.032 child grooming to the reportable-conviction definition and applies prospectively to offenses committed on or after the effective date.

**Practical meaning:**  
This expands who may have a reportable conviction for post-effective-date conduct. Do not apply it retroactively to earlier conduct without official support.

**Scope / who is affected:**  
People convicted/adjudicated for child grooming under Penal Code § 15.032 for offenses committed on or after September 1, 2025.

**What changes the answer:**  
Offense date; final codification; plea/adjudication type; substantial similarity for external cases.

**Separate overlays:**  
Pending/chapter updates, DPS implementation, court interpretation.

**Operative rule for V2:**  
Effective September 1, 2025, HB 2000 adds child grooming under Penal Code § 15.032 to reportable convictions for offenses committed on or after that date. Source keys: TX-S9, TX-S10.

**Source keys / official sources:**  
TX-S9, TX-S10

**Confidence:** High

**Validation gaps:**  
Validate enrolled bill text/current Chapter 62 codification before production.

**V2 implications:**  
V2 statePageUpdateNotes should mention HB 2000 as an enacted change, not pending law.

## 31. Pending legislation / watchlist

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
No current Texas pending-bill scan beyond HB 2000 was completed for this STF. Because the 89th Legislature information is active/recent, a live legislative tracker check is required before production.

**Practical meaning:**  
Do not publish a “no pending legislation” claim from this STF.

**Scope / who is affected:**  
All registry topics potentially affected by legislation.

**What changes the answer:**  
Legislative session; special sessions; filed bills; effective dates; implementation.

**Separate overlays:**  
Legislative updates, agency implementation.

**Operative rule for V2:**  
No pending Texas registry legislation was validated beyond HB 2000; a live bill scan is required before production. Source keys: TX-S9, TX-S10.

**Source keys / official sources:**  
TX-S9, TX-S10

**Confidence:** Low

**Validation gaps:**  
Run current Texas Legislature search for Chapter 62, registry, child safety zone, DPS, and sex offender terms.

**V2 implications:**  
V2 preview can note no additional watchlist validated; production cannot.

## 32. Recent litigation and controlling cases

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Partially allowed

**Controlling rule:**  
This STF live-validated AG Opinion GA-0526 for local preemption/residence restrictions but did not complete a current litigation scan. Legacy file did not contain a controlling recent case list beyond local-authority context.

**Practical meaning:**  
Do not claim current litigation completeness. GA-0526 supports local authority posture, but court decisions after 2007 may affect local ordinances or implementation.

**Scope / who is affected:**  
Local ordinance challenges; constitutional challenges; registration enforcement; removal cases.

**What changes the answer:**  
Jurisdiction; ordinance type; home-rule/general-law; federal/state court; current case status.

**Separate overlays:**  
Case law, attorney general opinions, local ordinances.

**Operative rule for V2:**  
GA-0526 remains a validated local-authority source, but recent litigation requires a fresh official/legal-source scan before production. Source keys: TX-S6.

**Source keys / official sources:**  
TX-S6

**Confidence:** Low

**Validation gaps:**  
Run current litigation check for Texas Chapter 62, local ordinances, ex post facto, due process, school-entry notice, and internet identifiers.

**V2 implications:**  
V2 preview should flag litigation as not production-ready.

## 33. Agency practice vs statutory text

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Partially allowed

**Controlling rule:**  
DPS FAQ provides practical statewide guidance, but the official statute page did not expose full article text in the web parser. Some legacy article-specific conclusions therefore rely on DPS guidance and inherited citations until live statute text/form validation is completed.

**Practical meaning:**  
The Output GPT can use DPS FAQ as strong agency guidance but should not treat every legacy article citation as live-checked statutory text.

**Scope / who is affected:**  
All Texas registry topics.

**What changes the answer:**  
Agency FAQ updates; forms; local registrar practice; statute amendments; website outages.

**Separate overlays:**  
Local agency intake, DPS forms, court orders.

**Operative rule for V2:**  
DPS FAQ is the strongest live-validated implementation source in this STF; article-specific statute wording and forms should be checked before production. Source keys: TX-S2, TX-S3, TX-S4.

**Source keys / official sources:**  
TX-S2, TX-S3, TX-S4

**Confidence:** Medium

**Validation gaps:**  
Open current statute articles or official PDF with reliable text extraction; collect current DPS forms.

**V2 implications:**  
V2 source confidence should separate agency FAQ confidence from statute-text/form validation.

## 34. Forms and process links

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Not applicable

**Controlling rule:**  
Legacy file links to the DPS program page/forms portal and includes an internal records-request template. This STF did not validate all current Texas registry forms, DL/ID forms, local registrar forms, or early-termination forms.

**Practical meaning:**  
Forms/process are the biggest production gap. Texas registration is local-agency administered, and forms may differ by registrar.

**Scope / who is affected:**  
All registrants; removal/early-termination applicants; ID applicants.

**What changes the answer:**  
County/city registrar; DPS form updates; driver license office; early termination court; certified documentation.

**Separate overlays:**  
Local agency, DPS driver license, courts, counsel.

**Operative rule for V2:**  
DPS program page and FAQ are validated starting points, but current registry forms, DL/ID process, and early-termination forms require live validation. Source keys: TX-S3, TX-S4.

**Source keys / official sources:**  
TX-S3, TX-S4

**Confidence:** Medium

**Validation gaps:**  
Collect current DPS downloadable forms/process pages and sample local registrar instructions.

**V2 implications:**  
V2 should include links only after live link/form check.

## 35. Practical checklist inputs

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Checklist inputs should include: register in person within 7 days, verify cadence, report moves before/after, update online identifiers and status changes within 7 days, report higher-ed work/enrollment within 7 days, handle no fixed address reporting, obtain/renew ID, check local ordinance/supervision, and keep proof.

**Practical meaning:**  
This is not public copy; it is the internal list of fields the Output GPT needs for checklists.

**Scope / who is affected:**  
New arrivals, movers, people changing job/school/online IDs, homeless/transient people, students/workers, people under supervision.

**What changes the answer:**  
Cadence, status, address stability, agency appointment, local ordinance, school/campus, supervision.

**Separate overlays:**  
Supervision, local agency, courts, campus, employer, shelter/housing.

**Operative rule for V2:**  
Texas checklist must preserve the 7-day initial/change/higher-ed/online windows, 30/90/annual verification cadence, 30-day no-fixed-address cycle pending statute validation, and local/supervision child-safety-zone checks. Source keys: TX-S1, TX-S4.

**Source keys / official sources:**  
TX-S1, TX-S4

**Confidence:** High

**Validation gaps:**  
Validate DL/ID and no-fixed-address exact statutory language before production.

**V2 implications:**  
V2 should turn these into startHere/commonQuestions checklist bullets.

## 36. Common mistakes / compliance traps

**Topic posture:** Reporting deadline-heavy  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed

**Controlling rule:**  
Major traps: assuming annual verification; failing to report a move before moving; failing to report after arrival; creating online IDs without reporting; ignoring higher-ed notice; regular visits over 48 hours three times/month; homelessness without detailed location reporting; assuming Chapter 62 answers override local/supervision rules; relying on public registry removal without certified records.

**Practical meaning:**  
Texas compliance mistakes often involve timing and source confusion. The user must know whether the limit is state registration, local ordinance, supervision, school policy, or private rule.

**Scope / who is affected:**  
All registrants, especially movers, students, homeless people, people using online platforms, supervised people.

**What changes the answer:**  
Status/cadence; move timing; local rule; supervision; school/campus; no fixed address; external jurisdiction.

**Separate overlays:**  
Supervision, local ordinance, agency practice, school/campus, federal SORNA.

**Operative rule for V2:**  
Do not miss 7-day move/change/higher-ed/online reporting; do not assume annual verification if 90-day/30-day cadence applies; do not assume no statewide Chapter 62 child-safety-zone ban means no local/supervision restriction. Source keys: TX-S1, TX-S4, TX-S6, TX-S7, TX-S8.

**Source keys / official sources:**  
TX-S1, TX-S4, TX-S6, TX-S7, TX-S8

**Confidence:** High

**Validation gaps:**  
Validate local ordinance and forms before production.

**V2 implications:**  
V2 should include a “biggest traps” section drawn from this topic.

## 37. Glossary / terms

**Topic posture:** Conditional statewide rule  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Not applicable

**Controlling rule:**  
Key Texas terms include reportable conviction/adjudication, extrajurisdictional registrant, primary registration authority, local law enforcement authority, online identifier, numeric risk level, civil commitment, sexually violent offense, individual risk assessment, child safety zone, and no fixed address/detailed geographical location.

**Practical meaning:**  
Terms should be used precisely because Texas uses risk level, verification cadence, and early-termination assessment differently.

**Scope / who is affected:**  
All V2 users.

**What changes the answer:**  
Context of term; statute vs DPS FAQ; federal vs Texas usage.

**Separate overlays:**  
Federal SORNA, local ordinance definitions, supervision terms.

**Operative rule for V2:**  
Use Texas-specific terms: primary registration authority, reportable conviction/adjudication, online identifier, numeric risk level, civil commitment, individual risk assessment, and child safety zone. Source keys: TX-S4.

**Source keys / official sources:**  
TX-S4

**Confidence:** High

**Validation gaps:**  
Validate statutory definitions before publication glossary.

**V2 implications:**  
V2 glossary should not equate Texas risk levels with federal SORNA tiers.

## 38. Source confidence and validation notes

**Topic posture:** Requires validation  
**Rule status:** REQUIRES VALIDATION  
**Local authority posture:** Partially allowed

**Controlling rule:**  
Core agency guidance is strong because DPS FAQ is detailed and live-validated. Article-level statute text, forms, local ordinance text, public registry availability, federal overlays, pending legislation, and current litigation need additional validation before production.

**Practical meaning:**  
This STF is ready for internal preview generation with validation flags, not production publication.

**Scope / who is affected:**  
All topics.

**What changes the answer:**  
Whether production requires exact article quotes; whether local ordinance target is known; whether the public registry link is accessible.

**Separate overlays:**  
Official statute, forms, courts, local ordinances, federal law.

**Operative rule for V2:**  
Use DPS FAQ/program page and legacy file for preview; live-check statute articles, forms, public registry page, local ordinance authority, federal travel overlays, and recent litigation before production. Source keys: TX-S1, TX-S2, TX-S3, TX-S4, TX-S5, TX-S6, TX-S7, TX-S11, TX-S12.

**Source keys / official sources:**  
TX-S1, TX-S2, TX-S3, TX-S4, TX-S5, TX-S6, TX-S7, TX-S11, TX-S12

**Confidence:** Medium

**Validation gaps:**  
See publication validation list below.

**V2 implications:**  
V2 should carry validation flags into sourceConfidence and statePageUpdateNotes.

## 39. V2 field recommendations

**Topic posture:** Requires validation  
**Rule status:** CONFIRMED RULE  
**Local authority posture:** Partially allowed

**Controlling rule:**  
Recommended V2 fields: statePosture, mustRegister, initialDeadline, verificationCadence, changeReporting, onlineIdentifiers, higherEd, inStateTravel, homelessness, publicPosting, publicNonpublicFields, duration, removal, residenceRestrictions, presenceRestrictions, localAuthority, supervisionOverlay, recentChanges, validationFlags.

**Practical meaning:**  
Texas V2 output should be structured around deadlines first, then public visibility, then housing/place overlays. Avoid collapsing local/supervision restrictions into statewide Chapter 62 rules.

**Scope / who is affected:**  
Output GPT consuming this STF.

**What changes the answer:**  
Production validation; page length; visitor questions; source confidence.

**Separate overlays:**  
None beyond listed overlays.

**Operative rule for V2:**  
Texas V2 should preserve: 7-day initial/change/online/higher-ed rules; annual/90-day/30-day verification; no blanket statewide Chapter 62 residence/presence ban after supervision; campus housing/school-entry/local/supervision exceptions; broad public posting; lifetime-or-10-year duration; limited removal. Source keys: TX-S3, TX-S4, TX-S6, TX-S7, TX-S9.

**Source keys / official sources:**  
TX-S3, TX-S4, TX-S6, TX-S7, TX-S9

**Confidence:** High

**Validation gaps:**  
Resolve validation flags before production publication.

**V2 implications:**  
V2 preview generation is appropriate with source confidence warnings.


---

# Visitor Question Coverage Check

| # | Visitor question | Coverage | STF-grounded explanation |
|---|---|---|---|
| 1 | Where can I live? | Partially answered | No blanket statewide Chapter 62 residence-distance ban validated after supervision; campus housing, local ordinances, supervision, and housing rules can control. |
| 2 | Can I live with family? | Partially answered | No Chapter 62 family-household ban validated; supervision, custody/family court, victim restrictions, local ordinance, and lease rules may change the answer. |
| 3 | Can I live with children? | Partially answered | No blanket Chapter 62 child-household ban validated; supervision/treatment/custody/CPS/court orders and local ordinances can control. |
| 4 | Can I live with my own biological/adoptive children? | Partially answered | No statewide Chapter 62 rule found that answers this alone; custody/family court, victim status, supervision, and treatment rules require validation. |
| 5 | Can I attend my child’s school event? | Partially answered | School premises during standard operating hours require immediate notice to the administrative office unless an exception/written agreement applies; school policy/supervision may add limits. |
| 6 | Can I go to parks, playgrounds, beaches, pools, libraries, churches, or youth events? | Partially answered | Chapter 62 itself does not impose a blanket child-place ban, but supervision/local child-safety-zone ordinances and facility/event policy may restrict access. |
| 7 | Can I work near children? | Partially answered | No blanket work-near-children rule validated; specific statutory job bans apply for qualifying sexually violent offenses with under-14 finding, plus licensing/employer/supervision rules. |
| 8 | Can I attend college or trade school? | Answered confidently | Higher-ed attendance/work is possible but triggers 7-day notice to campus security and the primary registration authority; campus housing requires low risk and institution approval. |
| 9 | Who can see my information? | Answered confidently | DPS/local registry information is broadly public, with specific nonpublic exceptions and possible juvenile nonpublic orders. |
| 10 | What exactly is public? | Answered confidently | Most registration data is public; excluded fields include SSN, DL number, phone numbers, online identifiers, employer info, victim-identifying information, and certain juvenile/nonpublic data. |
| 11 | How often do I report? | Answered confidently | Verification is annual for most, every 90 days for two or more sexually violent offenses, and every 30 days for civil commitment, plus change-reporting duties. |
| 12 | What changes trigger reporting? | Answered confidently | Address, online identifier, name, physical health, job status, education status, higher-ed enrollment/work, and regular visits can trigger reporting. |
| 13 | What if I am homeless or transient? | Partially answered | Legacy/DPS support detailed location reporting and legacy cites 30-day reporting; exact article text needs validation. |
| 14 | What if I visit temporarily? | Answered confidently | Regular in-state visits on at least three occasions in a month for more than 48 consecutive hours trigger local reporting; short visits require overlay checks. |
| 15 | What if I move in or out? | Answered confidently | Move in/register within 7 days; move out/report 7 days before and register in destination not later than 10 days after arrival under DPS guidance. |
| 16 | Can I travel internationally? | Requires validation | Federal 21-day/International Megan’s Law overlays require official-source validation; Texas-specific rule not validated. |
| 17 | Can I get removed, reclassified, or off the public site? | Answered confidently | Expiration/removal, juvenile nonpublic/exemption, limited adult exemption, and early termination exist but are document- and eligibility-dependent. |
| 18 | What are the biggest accidental compliance traps? | Answered confidently | 7-day move/change/online/higher-ed deadlines, verification cadence, regular visits, homelessness reporting, local/supervision child-safety zones, and assuming public removal is automatic. |
| 19 | What must I verify locally? | Answered confidently | City ordinance, local registrar intake/scheduling, local child-safety zones, local registry/public posting, shelter/housing policies, and school/event rules. |
| 20 | What must I verify with supervision/court orders? | Answered confidently | Residence, travel, child contact, school/presence, internet, employment, treatment, victim proximity, and holiday/event restrictions. |

---

# Missing STF Fields

- Current full text of Chapter 62 individual articles should be live-validated before production because the official statute page opened but did not expose full article text in the web parser.
- Current DPS registration forms, classified sex-offender DL/ID process, and early-termination forms were not fully validated.
- Public DPS registry search page returned a 502 during this task and requires a live production link check.
- Local Government Code § 341.906 text should be directly extracted/validated before final local-authority language is published.
- Government Code § 508.187 child-safety-zone supervision text should be directly validated.
- Federal SORNA and International Megan’s Law official sources were not added.
- Current Texas pending legislation and recent litigation scan was not completed beyond HB 2000/GA-0526.
- Tribal-case treatment requires official-source validation.
- Exact no-fixed-address 30-day statutory language and classified DL/ID timing/renewal language should be live-validated.

---

# Contradictions or Near-Contradictions Detected

1. **Legacy statewide residency contradiction**
   - **Tension:** Legacy `residencyPresence` says no single statewide residency ban applies after supervision; legacy `highlights.residency` claims Texas enforces 1,000-foot residential exclusion zones under Article 62.301.
   - **Resolution for V2:** Use DPS FAQ as live-validated current agency guidance: Chapter 62 itself does not generally prohibit living or going near places frequented by children; campus housing, supervision/parole/community supervision, and local ordinances can restrict residence/presence. Do not preserve the legacy statewide 1,000-foot Article 62.301 claim as a blanket rule.

2. **Statewide presence vs school-entry notice**
   - **Tension:** DPS says Chapter 62 does not generally prohibit going near child-focused places, but also states school-premises entry requires immediate administrative-office notice during standard operating hours unless an exception applies.
   - **Resolution for V2:** Separate “place access/presence generally” from “school premises notice.” Do not convert the school-notice rule into a statewide ban.

3. **Public data breadth vs nonpublic identifiers**
   - **Tension:** Texas public posting is broad, but DPS lists multiple nonpublic fields.
   - **Resolution for V2:** Say most registry information is public, then specifically carve out SSN, DL number, phone numbers, online identifiers, employer information, victim-identifying information, certain DPS-required extra information, and juvenile records ordered nonpublic.

4. **Risk level vs individual risk assessment**
   - **Tension:** Both use risk language but serve different functions.
   - **Resolution for V2:** Numeric risk levels 1/2/3 and civil commitment are registry/public-notification designations; the individual risk assessment is a separate early-termination prerequisite.

5. **Local ordinance authority vs supervision**
   - **Tension:** Both can create child-safety zones, but they are legally distinct.
   - **Resolution for V2:** Keep local ordinance checks separate from parole/probation/community-supervision conditions.

---

# Topics Requiring Live Validation Before Publication

1. Direct text validation for Chapter 62 articles: 62.001, 62.051, 62.053, 62.055, 62.0551, 62.058, 62.059, 62.060, 62.063, 62.064, 62.101, 62.102, 62.151–.153, 62.402–.408.
2. Current DPS registration forms and any form-specific fields for vehicles, vessels, online identifiers, and homeless/transient reporting.
3. DPS classified sex-offender driver license/ID page, fees, timing, marking/labeling, and annual renewal procedure.
4. Live availability and current URL of the Texas DPS public registry search.
5. Direct current text of Local Government Code § 341.906 and local ordinance examples only if a city-specific answer is needed.
6. Direct current text of Government Code § 508.187 and any parole/probation child-safety-zone implementation guidance.
7. Current Texas legislative watchlist for additional 2025/2026 registry bills.
8. Current litigation scan for Texas Chapter 62, local ordinances, school-entry notice, internet identifiers, ex post facto/due process, and removal.
9. Official federal SORNA and International Megan’s Law sources.
10. Tribal-case treatment under Texas and federal law.
11. Current Council on Sex Offender Treatment / deregistration specialist process for early termination.

---

# Split Source Confidence Summary

| Category | Confidence | Summary |
|---|---|---|
| Core statewide architecture confidence | High | DPS FAQ/program page and legacy file strongly support the core Texas architecture: local in-person registration, DPS database, 7-day deadlines, annual/90-day/30-day verification, public posting, duration, and felony noncompliance. |
| Publication completeness confidence | Medium | Preview-ready but not production-ready because article-level statute text, forms, public registry availability, and federal overlays need validation. |
| Local authority / preemption confidence | Medium | Home-rule local residence authority is supported by GA-0526 and DPS confirms local ordinances; general-law municipality authority under §341.906 is supported by DPS but needs direct statute-text validation. |
| Forms and process confidence | Low | DPS program/FAQ are validated, but current forms, DL/ID process, early termination forms, and local registrar procedures were not fully collected. |
| Recent law / litigation confidence | Low | HB 2000 is validated as signed/effective, but a full pending-legislation and current litigation scan was not completed. |
| Visitor-question completeness confidence | Medium | Most visitor questions can be answered for preview, but family/children, local place access, international travel, forms/fees, and production-specific local ordinance answers need validation. |

---

# Ready-to-Feed Determination

**Ready to feed State Registry Output GPT?**  
Yes — with validation flags.

**Ready for V2 preview generation?**  
Yes — for preview only.

**Ready for production publication?**  
No.

**Blocking issues before production:**  
Validate current Chapter 62 article text, DPS forms/process links, public registry page availability, local ordinance authority/statutory text, Government Code § 508.187, federal travel overlays, pending legislation, recent litigation, and DL/ID details.

**Recommended next step:**  
Run a production validation pass focused on Chapter 62 article text, DPS forms/DL-ID procedure, and local authority (§341.906 + GA-0526), then feed this STF to the SOLAR State Registry Output GPT for Texas V2 preview generation.

---

## Repo upload reminder

Upload this Markdown file to:

`docs/state-truth-files/texas-state-truth-file-v1-1.md`

Because mobile GitHub editing is limited, use the GitHub browser version rather than the GitHub mobile app when uploading or editing repo files.
