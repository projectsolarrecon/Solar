// src/data/state-registry/ny.ts
export default {
  state: "New York",
  lastReviewedUTC: "2025-10-09T12:00:00Z",

  atAGlance: {
    mustRegister:
      "Persons convicted of registerable sex offenses under **Correction Law Article 6-C (SORA)**, and persons with equivalent out-of-state or federal convictions. See [§ 168-a](https://www.nysenate.gov/legislation/laws/COR/168-A).",
    initialDeadline:
      "Register at sentencing or at least **10 days before release/discharge**. Movers to NY must notify DCJS within **10 days** of establishing residence. See [§ 168-c(2)](https://www.nysenate.gov/legislation/laws/COR/168-C) and DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
    verificationCadence:
      "Level 3 and designated offenders verify address **every 90 days** in person; Levels 1–2 appear for updated photos (every 3 years / annually). See [§ 168-f](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    primaryMethod:
      "In-person verification at local law enforcement with written change notices to DCJS. Mail-back annual verification forms as directed. See [§ 168-f](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    topGotchas: [
      "Designation as sexual predator / sexually violent / predicate extends registration for life.",
      "Out-of-state equivalents can trigger registration. See [§ 168-k](https://www.nysenate.gov/legislation/laws/COR/168-K).",
      "Failure to verify or update within 10 days is a felony. See [§ 168-t](https://www.nysenate.gov/legislation/laws/COR/168-T).",
      "Photo schedule differs by level – check DCJS reminders.",
    ],
    officialLinks: {
      statuteIndex: "https://www.nysenate.gov/legislation/laws/COR/A6-C",
      adminRules: "https://www.criminaljustice.ny.gov/nsor/",
      statePoliceRegistry: "https://www.criminaljustice.ny.gov/nsor/",
      formsPortal: "https://www.criminaljustice.ny.gov/nsor/faq.htm",
      publicWebsite: "https://doccs.ny.gov/sex-offender-registry",
    },
  },

  whoMustRegister:
    "Those convicted of registerable sex offenses under SORA, including comparable out-of-state, federal, or military offenses, and certain non-residents who work or attend school in NY. See [Art. 6-C](https://www.nysenate.gov/legislation/laws/COR/A6-C) and DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",

  deadlinesReporting: [
    "Initial registration before release or at sentencing; movers to NY must notify DCJS within 10 days of establishing residence. See [§ 168-c(2)](https://www.nysenate.gov/legislation/laws/COR/168-C).",
    "Annual verification mailer must be returned within 10 days of receipt. See [§ 168-f(2)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    "Report changes of address, employment, school, or internet identifiers within 10 days. See [§ 168-f(3)–(4)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
  ],

  verificationInPerson: [
    "Level 3 or designated offenders verify address every 90 days in person with local law enforcement. See [§ 168-f(3)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    "Level 1–2 provide updated photo in person (3-year cycle); Level 3 annually. See [§ 168-f(2)(b-2),(b-3)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
  ],

  residencyPresence:
    "SORA imposes no statewide residency bans once off supervision; local ordinances are pre-empted (*People v. Diack*, 2015). Parole or probation can impose school-zone restrictions under [Penal Law § 65.10(4-a)](https://www.nysenate.gov/legislation/laws/PEN/65.10).",

  employmentEducationInternet: [
    "Provide employer and school information and report changes within 10 days. See [§ 168-f(4)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    "Internet identifiers must be reported and updated within 10 days under e-STOP. See [§ 168-a(18)](https://www.nysenate.gov/legislation/laws/COR/168-A).",
  ],

  publicWebsiteExposure: [
    "Levels 2 and 3 appear on the public registry with photo and address; Level 1 is not publicly listed. See DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
  ],

  travelInterstate: [
    "Moving out of state requires notifying DCJS within 10 days and registering in the new state. See [§ 168-j](https://www.nysenate.gov/legislation/laws/COR/168-J).",
    "Short visits without residence/work/school usually don’t trigger registration duties.",
  ],

  visitingTraveling: [
    "Non-resident workers or students in NY must register within 10 days of starting. See [§ 168-a](https://www.nysenate.gov/legislation/laws/COR/168-A).",
    "Tourists without NY residence, employment, or school generally do not register.",
  ],

  complianceEnforcement:
    "Failure to register, verify, or report changes is a **Class E felony** (first offense) or **Class D felony** (repeat). See [§ 168-t](https://www.nysenate.gov/legislation/laws/COR/168-T).",

  reliefPaths: [
    "Level 1 registrants end after 20 years unless designated predicate/violent. See [§ 168-h(1)](https://www.nysenate.gov/legislation/laws/COR/168-H).",
    "Level 2 may petition for removal after 30 years (no designation). See [§ 168-o(1)](https://www.nysenate.gov/legislation/laws/COR/168-O).",
    "Risk level modification available after one year. See [§ 168-o(2)](https://www.nysenate.gov/legislation/laws/COR/168-O).",
  ],

  specialPopulations: [
    "Juvenile offender convictions require registration; juvenile delinquent/youthful offender adjudications do not. See DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
    "Homeless individuals may verify using shelter or specific location addresses. See *People v. Allen* ([PDF](https://www.nycourts.gov/courts/ad1/calendar/List_Word/2023/02_Feb/02/PDF/People%20%20v%20%20Corey%20Allen%20%282019-2895%20Opn.%29.pdf)).",
  ],

  costs: [
    "$10 fee for address or status changes. See [§ 168-b(8)](https://www.nysenate.gov/legislation/laws/COR/168-B).",
    "Court filing fees may apply for petitions or motions. See [CourtHelp guide](https://www.nycourts.gov/courthelp/criminal/surchargesFees.shtml).",
  ],

  recentChangesLitigation: [
    {
      type: "case",
      name: "People v. Diack",
      court: "N.Y. Court of Appeals",
      date: "2015-02-17",
      holding: "Local residency restrictions pre-empted by state law.",
      link: "https://law.justia.com/cases/new-york/court-of-appeals/2015/1.html",
    },
    {
      type: "statute",
      bill: "S7830 (2025)",
      session: "2025",
      effective: "Pending",
      summary: "Would address constitutional issues involving homeless registrants and reporting requirements.",
      link: "https://www.nysenate.gov/legislation/bills/2025/S7830",
    },
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Within 10 days of moving to NY, register with DCJS if required.",
      "Notify local law enforcement of address, employment, and school.",
      "Confirm schedule for in-person verification with local agency.",
    ],
    movingOutChecklist: [
      "Notify local law enforcement and DCJS of departure address and new location.",
      "Ensure continuing registration in the new jurisdiction.",
    ],
    recordsRequestTemplate:
      "To: New York State Division of Criminal Justice Services (DCJS)\n\nSubject: Request for Sex Offender Registration Record\n\nI hereby request a copy of my current registration record under SORA (Article 6-C), including risk level, designation, and history of modifications. I am enclosing proof of identity. Please advise of any fees required.\n\nThank you.",
    reliefPetitionOutline:
      "1) State current risk level and designation under SORA.\n2) Show years registered without incident.\n3) Provide rehabilitation evidence and supporting records.\n4) Cite [§ 168-o](https://www.nysenate.gov/legislation/laws/COR/168-O) and [§ 168-h](https://www.nysenate.gov/legislation/laws/COR/168-H).\n5) Request relief or level reduction per statute.",
  },

  resources: {
    legalAid: [
      { name: "NY CourtHelp – Registry Info", link: "https://www.nycourts.gov/courthelp/criminal/sexOffenderRegistry.shtml" },
    ],
    advocacy: [
      { name: "OAD NYC – Sex Offense Representation", link: "https://oadnyc.org/sex-offenses/" },
    ],
    reentry: [
      { name: "DCJS Registry Portal", link: "https://www.criminaljustice.ny.gov/nsor/" },
    ],
  },

  citations: [
    { label: "Correction Law Art. 6-C (SORA)", url: "https://www.nysenate.gov/legislation/laws/COR/A6-C" },
    { label: "§ 168-f – Duties to Register/Verify", url: "https://www.nysenate.gov/legislation/laws/COR/168-F" },
    { label: "§ 168-t – Penalties", url: "https://www.nysenate.gov/legislation/laws/COR/168-T" },
    { label: "Penal Law § 65.10(4-a)", url: "https://www.nysenate.gov/legislation/laws/PEN/65.10" },
    { label: "DCJS SORA FAQ", url: "https://www.criminaljustice.ny.gov/nsor/faq.htm" },
    { label: "People v. Diack (2015)", url: "https://law.justia.com/cases/new-york/court-of-appeals/2015/1.html" },
  ],
badges: {
    residencyZones: false,
    lifetimePossible: true,
    verificationQuarterly: true,
  },

  plainLanguage: {
    atAGlance: {
      summary: [
        "Register with DCJS and verify based on your assigned level.",
        "Level 3 offenders verify in person every 90 days; Levels 1–2 complete mail and photo updates.",
      ],
      validationNote:
        "See [§ 168-f](https://www.nysenate.gov/legislation/laws/COR/168-F) and DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
      reviewedUTC: "2025-10-09T12:00:00Z",
    },
    deadlinesReporting: {
      summary: [
        "Return DCJS’s annual mailer within 10 days of receipt.",
        "Report address, employment, school, and internet changes within 10 days.",
      ],
      watchOuts: ["Level 3/designated offenders must verify in person every 90 days."],
      validationNote:
        "See [§ 168-f](https://www.nysenate.gov/legislation/laws/COR/168-F) and [§ 168-t](https://www.nysenate.gov/legislation/laws/COR/168-T).",
    },
    verificationInPerson: {
      summary: [
        "Appear in person with local law enforcement on the schedule for your level.",
        "Bring ID and keep receipts as proof of compliance.",
      ],
      validationNote:
        "See [§ 168-f(3)](https://www.nysenate.gov/legislation/laws/COR/168-F).",
    },
    residencyPresence: {
      summary: [
        "NY has no statewide residency ban after supervision.",
        "Supervision orders may limit living within 1 000 ft of schools.",
      ],
      validationNote:
        "See [People v. Diack (2015)](https://law.justia.com/cases/new-york/court-of-appeals/2015/1.html) and [Penal Law § 65.10(4-a)](https://www.nysenate.gov/legislation/laws/PEN/65.10).",
    },
    employmentEducationInternet: {
      summary: [
        "Report work and school changes within 10 days.",
        "Update internet identifiers under e-STOP.",
      ],
      validationNote:
        "See [§ 168-a(18)](https://www.nysenate.gov/legislation/laws/COR/168-A) and DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
    },
    publicWebsiteExposure: {
      summary: [
        "Levels 2–3 appear on the public registry with address and photo.",
        "Level 1 info is available by phone from law enforcement.",
      ],
      validationNote:
        "See DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
    },
    complianceEnforcement: {
      summary: [
        "Failure to register or report changes is a felony (§ 168-t).",
        "Keep dated copies and mail receipts for proof of compliance.",
      ],
      validationNote:
        "See [§ 168-t](https://www.nysenate.gov/legislation/laws/COR/168-T).",
    },
    reliefPaths: {
      summary: [
        "After 20 or 30 years (depending on level and designation), you may petition for removal or reduction.",
        "Courts review risk, conduct, and rehabilitation evidence before granting relief.",
      ],
      validationNote:
        "See [§ 168-h](https://www.nysenate.gov/legislation/laws/COR/168-H) and [§ 168-o](https://www.nysenate.gov/legislation/laws/COR/168-O).",
    },
    specialPopulations: {
      summary: [
        "Juvenile-offender convictions can require registration; youthful-offender or delinquency adjudications generally do not.",
        "Homeless registrants must maintain contact and verify through DCJS-approved procedures.",
      ],
      validationNote:
        "See DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm) and *People v. Allen* ([PDF](https://www.nycourts.gov/courts/ad1/calendar/List_Word/2023/02_Feb/02/PDF/People%20%20v%20%20Corey%20Allen%20%282019-2895%20Opn.%29.pdf)).",
    },
    checklistsScripts: {
      summary: [
        "Use the checklists to stay on schedule for 10-day and 90-day deadlines.",
        "Keep proof of registration, mail receipts, and photo-verification records.",
      ],
      validationNote:
        "Procedures drawn from [§ 168-f](https://www.nysenate.gov/legislation/laws/COR/168-F) and DCJS [FAQ](https://www.criminaljustice.ny.gov/nsor/faq.htm).",
    },
  },
};