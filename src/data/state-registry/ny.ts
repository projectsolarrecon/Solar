export default {
  state: "New York",
  lastReviewedUTC: "2025-10-09T12:00:00Z",

  atAGlance: {
    mustRegister: "**Who:** Individuals convicted of registerable offenses (in NY or comparable out-of-state/federal/military offenses) and certain nonresident workers/students; see [Correction Law Art. 6-C](https://www.nysenate.gov/legislation/laws/COR/A6-C).",
    initialDeadline: "**Deadline:** Register before release or at sentencing; movers to NY must notify DCJS within **10 days** of establishing residence; see [§ 168-f](https://www.nysenate.gov/legislation/laws/COR/168-F) and DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
    verificationCadence: "**Verification:** Annual mail verification for all; **Level 3 / ‘sexual predator’** address verification **every 90 days** in person; photos: Levels 1–2 every **3 years**, Level 3 **annually**; see [§ 168-f](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    primaryMethod: "**Method:** Mail-back annual form to DCJS; required in-person photo updates at local law enforcement per schedule; Level 3 also verifies address in person every 90 days; see [§ 168-f](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    topGotchas: [
      "All changes (address, employment, school, internet identifiers) must be reported within **10 days**; see [§ 168-f(3)–(4)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
      "Level 3/‘sexual predator’: **90-day** in-person address verification; see [§ 168-f(3)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
      "Nonresident workers/students may need to register; see [definitions](https://www.nysenate.gov/legislation/laws/COR/168-A).",
      "No statewide residency bans once off supervision; some **parole/probation** cases face school-grounds limits; see DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm) and [Penal Law § 65.10(4-a)](https://www.nysenate.gov/legislation/laws/PEN/65.10).",
      "Missing mail-back/photo windows is a crime; first failure is a class **E felony**; see DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm)."
    ],
    officialLinks: {
      statuteIndex: "https://www.nysenate.gov/legislation/laws/COR/A6-C",
      statePoliceRegistry: "https://www.criminaljustice.ny.gov/nsor/",
      publicWebsite: "https://doccs.ny.gov/sex-offender-registry"
    }
  },

  whoMustRegister: "**Who:** Persons convicted of a registerable sex offense, and out-of-state/federal/military offenders deemed registerable; certain nonresident workers/students present in NY also fall under SORA; see [Art. 6-C](https://www.nysenate.gov/legislation/laws/COR/A6-C) and DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",

  deadlinesReporting: [
    "**Initial:** Register before release or at sentencing; movers to NY must notify DCJS within **10 days** of establishing residence; see [§ 168-f(1), (7)](https://www.nysenate.gov/legislation/laws/COR/168-F) and DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
    "**Annual mailer:** Sign and return the DCJS verification form within **10 days** of receipt; see [§ 168-f(2)(a)–(b)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    "**Changes:** Report changes of residence, employment, school, vehicles, and **internet identifiers** within **10 days**; see [§ 168-f(3)–(4)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    "**Photos:** Level 3 – appear annually; Levels 1–2 – every 3 years; see [§ 168-f(2)(b-2),(b-3)](https://www.nysenate.gov/legislation/laws/COR/168-F)."
  ],

  verificationInPerson: [
    "**Level 3 / ‘sexual predator’:** Personally verify address every **90 days** with local law enforcement; see [§ 168-f(3)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    "**Photographs:** Appear at local law enforcement for updated photo (Level 3 annually; Levels 1–2 every 3 years); see [§ 168-f(2)(b-2),(b-3)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    "**If confined:** In-person duties are suspended while incarcerated; see [§ 168-f](https://www.nysenate.gov/legislation/laws/COR/168-F)."
  ],

  residencyPresence: "**Residency:** SORA itself imposes **no statewide residency bans**; local ordinances are **pre-empted** (*People v. Diack*, 2015). Individuals on supervision may face school-grounds limits under [Penal Law § 65.10(4-a)](https://www.nysenate.gov/legislation/laws/PEN/65.10) and Exec. Law § 259-c(14); see DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",

  employmentEducationInternet: [
    "**Employment/school:** Provide employer address (Levels 2–3) and higher-ed status; report any change within **10 days**; see [§ 168-f(4)](https://www.nysenate.gov/legislation/laws/COR/168-F) and DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
    "**Internet identifiers (e-STOP):** Disclose email/screen names and update within **10 days**; authorized entities may receive identifiers; see [§ 168-a(18)](https://www.nysenate.gov/legislation/laws/COR/168-A) and [§ 168-b](https://www.nysenate.gov/legislation/laws/COR/168-B), plus DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm)."
  ],

  publicWebsiteExposure: [
    "**Levels on web:** Levels **2–3** appear on the public subdirectory (with photo/address); Level **1** not posted; see DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm) and public [search page](https://doccs.ny.gov/sex-offender-registry).",
    "**Higher-ed disclosure:** Attendance/employment/residence at higher-ed institutions may be included; see [§ 168-q](https://www.nysenate.gov/legislation/laws/COR/168-Q)."
  ],

  travelInterstate: [
    "**Moving out:** Notify DCJS of new address within **10 days** and comply with the new state’s law; see [§ 168-j](https://www.nysenate.gov/legislation/laws/COR/168-J).",
    "**Short travel:** Brief visits without residence/work/school generally do not trigger registration; thresholds apply for nonresident workers/students (see DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm))."
  ],

  visitingTraveling: [
    "**Nonresident worker/student:** Out-of-state residents employed or studying in NY must register and keep DCJS updated within **10 days**; see [§ 168-a](https://www.nysenate.gov/legislation/laws/COR/168-A) and [§ 168-f](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    "**Visitors:** Temporary travel without NY residence/work/school normally does not create duties; verify requirements if on supervision (see DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm))."
  ],

  complianceEnforcement: "**Penalties:** Failure to register/verify/update is a crime (Class E felony first, Class D felony subsequent); see [§ 168-t](https://www.nysenate.gov/legislation/laws/COR/168-T) and DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",

  reliefPaths: [
    "**Level 1:** 20 years unless designated sexual predator/sexually violent/predicate; see [§ 168-h(1)](https://www.nysenate.gov/legislation/laws/COR/168-H).",
    "**Level 2:** After 30 years (no designation), may petition for termination; see [§ 168-o(1)](https://www.nysenate.gov/legislation/laws/COR/168-O).",
    "**Modification:** Levels 2–3 may petition yearly to lower risk level; see [§ 168-o(2)](https://www.nysenate.gov/legislation/laws/COR/168-O)."
  ],

  specialPopulations: [
    "**Juveniles:** Youthful-offender/juvenile-delinquent findings don’t trigger SORA; juvenile offender convictions do; see DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
    "**Supervised:** Parole/probation can add school-grounds restrictions under [Penal Law § 65.10(4-a)](https://www.nysenate.gov/legislation/laws/PEN/65.10).",
    "**Homeless:** Address rules adapted by courts; see *People v. Allen* ([PDF opinion](https://www.nycourts.gov/courts/ad1/calendar/List_Word/2023/02_Feb/02/PDF/People%20%20v%20%20Corey%20Allen%20%282019-2895%20Opn.%29.pdf))."
  ],

  costs: [
    "**Change fee:** $10 per address/education update; see [§ 168-b(8)](https://www.nysenate.gov/legislation/laws/COR/168-B).",
    "**Court surcharges:** Separate criminal fees may apply; see [CourtHelp guide](https://www.nycourts.gov/courthelp/criminal/surchargesFees.shtml)."
  ],

  recentChangesLitigation: [
    { type: "case", name: "People v. Diack", court: "N.Y. Court of Appeals", date: "2015-02-17", holding: "Local residency restrictions preempted by state law.", link: "https://law.justia.com/cases/new-york/court-of-appeals/2015/1.html" },
    { type: "statute", bill: "Ch. 67 (2008 e-STOP)", session: "2008", effective: "2008-04-28", summary: "Added internet identifier requirements.", link: "https://www.criminaljustice.ny.gov/nsor/faq.htm" },
    { type: "rule", cite: "Correction Law §§ 168-f, 168-h", effective: "current through 2025", summary: "Maintains quarterly Level 3 checks and photo schedule." }
  ],

  citations: [
    { label: "Correction Law, Article 6-C (SORA)", url: "https://www.nysenate.gov/legislation/laws/COR/A6-C" },
    { label: "§ 168-f — Duties to Register/Verify", url: "https://www.nysenate.gov/legislation/laws/COR/168-F" },
    { label: "§ 168-k — Moves into NY", url: "https://www.nysenate.gov/legislation/laws/COR/168-K" },
    { label: "§ 168-t — Penalties", url: "https://www.nysenate.gov/legislation/laws/COR/168-T" },
    { label: "Penal Law § 65.10(4-a) — Supervision Conditions", url: "https://www.nysenate.gov/legislation/laws/PEN/65.10" },
    { label: "DCJS — SORA FAQ", url: "https://www.criminaljustice.ny.gov/nsor/faq.htm" },
    { label: "People v. Diack (2015)", url: "https://law.justia.com/cases/new-york/court-of-appeals/2015/1.html" }
  ],

  badges: { residencyZones: false, lifetimePossible: true, verificationQuarterly: true }
};