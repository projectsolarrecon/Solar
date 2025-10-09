// src/data/state-registry/ga.ts
export default {
  state: "Georgia",
  lastReviewedUTC: "2025-10-08T00:00:00Z",

  atAGlance: {
    mustRegister:
      "Register **in person** with the **sheriff** where you reside or sleep; the **GBI** maintains the statewide site. See [OCGA § 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download).",
    initialDeadline:
      "Initial registration within **72 hours** after release, placement on supervision, or entry into Georgia; homeless persons register where they **sleep**. See [§ 42-1-12(e)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/).",
    verificationCadence:
      "Annual **in-person** renewal **within the 72 hours before your birthday**; SDPs have extra electronic monitoring duties. See [§ 42-1-12(f)(4)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/).",
    primaryMethod:
      "**In person at the sheriff** (each county where you reside/sleep). Keep proof of each visit. See [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download).",
    topGotchas: [
      "Address changes are reported **before** moving.",
      "If you live, work, or attend school in different counties, you may have **multiple** sheriff obligations.",
      "1,000-foot **housing/employment** safety zones are strictly enforced in many areas. See [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf).",
    ],
    officialLinks: {
      statuteIndex: "https://gbi.georgia.gov/document/document/ocga-42-1-12/download",
      adminRules:
        "https://rules.sos.ga.gov/gac/594-1",
      statePoliceRegistry: "https://state.sor.gbi.ga.gov/sort_public/",
      formsPortal: "https://gbi.georgia.gov/services",
      publicWebsite: "https://state.sor.gbi.ga.gov/sort_public/",
    },
  },

  whoMustRegister:
    "Those convicted of a listed offense (including certain out-of-state/federal equivalents) must register. Risk level is set by the Sexual Offender Registration Review Board (SORRB) under [§ 42-1-14](https://gbi.georgia.gov/42-1-14-state-sexual-offender-registry) and Board rules [GAC 594-1](https://rules.sos.ga.gov/gac/594-1).",

  deadlinesReporting: [
    "Initial registration: within **72 hours** of release/supervision/entry into Georgia; homeless register where they **sleep**. See [§ 42-1-12(e)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/).",
    "Annual renewal: report **within 72 hours before your birthday** for photo/fingerprints. See [§ 42-1-12(f)(4)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/).",
    "Address/employment/school changes: report **before** moving or changing; additional counties may be required if you work/attend school elsewhere. See [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download).",
  ],

  verificationInPerson: [
    "**In-person** with the sheriff where you reside or sleep, annually before your birthday. See [§ 42-1-12(f)(4)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/).",
    "Sexually Dangerous Predators (SDPs) have additional monitoring/verification conditions under [§ 42-1-14](https://gbi.georgia.gov/42-1-14-state-sexual-offender-registry).",
  ],

  residencyPresence:
    "Georgia enforces **1,000-foot** buffers for residing, working, or loitering near listed child-focused places. See [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf). Local practices vary; check with your sheriff for maps and any local ordinances.",

  employmentEducationInternet: [
    "If you **work** or **attend school** in a different county, you may need to register with that county’s sheriff **as well**. See [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download).",
    "SDPs may be subject to **electronic monitoring** per [§ 42-1-14](https://gbi.georgia.gov/42-1-14-state-sexual-offender-registry).",
  ],

  publicWebsiteExposure: [
    "GBI hosts the public registry search site. See [GBI Public Registry](https://state.sor.gbi.ga.gov/sort_public/).",
  ],

  travelInterstate: [
    "If you move out of Georgia, you must complete **out-of-state move** procedures with the sheriff **before** leaving and register in the new state as required. See [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download).",
  ],

  visitingTraveling: [
    "Short visits may not create residency, but **work or school** in Georgia can trigger registration. Confirm thresholds with the sheriff; start with [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download) and [GBI FAQ](https://gbi.georgia.gov/about-us/frequently-asked-questions/sex-offender-registry-frequently-asked-questions).",
  ],

  complianceEnforcement:
    "Violations (failure to register/renew, giving false information, entering prohibited zones) carry criminal penalties. See [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download) and [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf).",

  reliefPaths: [
    "Risk level review/appeal via SORRB rules: see [GAC 594-1](https://rules.sos.ga.gov/gac/594-1) and [§ 42-1-14](https://gbi.georgia.gov/42-1-14-state-sexual-offender-registry).",
  ],

  specialPopulations: [
    "Homeless individuals register where they **sleep** and renew annually before their birthday. See [§ 42-1-12(e)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/).",
    "SDPs: electronic monitoring and additional conditions under [§ 42-1-14](https://gbi.georgia.gov/42-1-14-state-sexual-offender-registry).",
  ],

  costs: [
    "Sheriff offices may charge nominal fees for ID cards/copies; confirm locally.",
  ],

  recentChangesLitigation: [
    {
      type: "rule",
      cite: "SORRB Rules (GAC 594-1) — risk classification/review",
      effective: "2025-09",
      summary:
        "Updated procedural timelines and petition/reevaluation parameters for risk classifications.",
      link: "https://rules.sos.ga.gov/gac/594-1",
    },
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Within **72 hours**: register **in person** with the sheriff where you reside/sleep. Bring ID and required information. See [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download).",
      "Mark your **birthday**: renew **within 72 hours before** the date each year.",
      "Ask the sheriff about **maps** of restricted zones under [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf).",
    ],
    movingOutChecklist: [
      "Before moving: notify your sheriff, complete any **out-of-state** paperwork, and confirm reporting in the **new state**.",
    ],
    recordsRequestTemplate:
      "To: GBI Sex Offender Registry Unit (GCICSexOffenders@gbi.ga.gov)\n\nSubject: Registry File Request — [Your Name, DOB]\n\nPursuant to [OCGA § 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download) and applicable public records provisions, please provide my current registry record as maintained by your office, including:\n• All registration dates and renewals (with photos/fingerprints dates)\n• Current/previous addresses on file\n• Any risk classification (Level I/II/SDP) notices from SORRB\n• Any notices of violations or pending actions\n\nI am attaching a copy of my government ID. Please advise of any fees and the preferred method of payment.\n\nThank you.",
    reliefPetitionOutline:
      "1) Identify current classification and date of SORRB notice under [§ 42-1-14](https://gbi.georgia.gov/42-1-14-state-sexual-offender-registry).\n2) Cite SORRB rules for review/reevaluation (see [GAC 594-1](https://rules.sos.ga.gov/gac/594-1)).\n3) Attach treatment/compliance documentation; show absence of disqualifying conduct.\n4) File in the appropriate court if judicial review is available; serve parties per rules.\n5) Request order granting relief (reclassification/conditions) consistent with statute and rules.",
  },

  resources: {
    legalAid: [
      { name: "GBI Sex Offender Registry — Contacts", link: "https://gbi.georgia.gov/contacts/sex-offender-registry" },
    ],
    advocacy: [
      { name: "DOJ SMART — Case Law/Policy Context", link: "https://smart.ojp.gov/sorna/current-law/case-law/ii-locally-enacted-sex-offender-requirements" },
    ],
    reentry: [
      { name: "GBI Public Registry Search", link: "https://state.sor.gbi.ga.gov/sort_public/" },
    ],
  },

  citations: [
    { label: "OCGA § 42-1-12 (GBI PDF)", url: "https://gbi.georgia.gov/document/document/ocga-42-1-12/download" },
    { label: "OCGA § 42-1-12 (Justia)", url: "https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/" },
    { label: "OCGA § 42-1-15 (PDF)", url: "https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf" },
    { label: "§ 42-1-14 — SORRB / SDPs", url: "https://gbi.georgia.gov/42-1-14-state-sexual-offender-registry" },
    { label: "SORRB Rules (GAC 594-1)", url: "https://rules.sos.ga.gov/gac/594-1" },
    { label: "GBI Registry — Public Site", url: "https://state.sor.gbi.ga.gov/sort_public/" },
    { label: "GBI Registry — Services", url: "https://gbi.georgia.gov/services" },
    { label: "GBI Registry — Contacts", url: "https://gbi.georgia.gov/contacts/sex-offender-registry" }
  ],

  badges: {
    residencyZones: true,
    lifetimePossible: true,
    verificationQuarterly: false
  },

  plainLanguage: {
    atAGlance: {
      summary: [
        "Register **in person** with the sheriff; the **GBI** runs the statewide site.",
        "Most people renew **annually** within the **72 hours before your birthday**.",
        "SDPs have extra monitoring under § 42-1-14.",
      ],
      watchOuts: [
        "Report address changes **before** you move.",
        "Working or studying in another county can create **extra** sheriff visits.",
        "1,000-foot safety zones are strictly enforced in some counties.",
      ],
      validationNote:
        "See [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download) (registration/renewal) and [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf) (zones).",
      reviewedUTC: "2025-10-08T00:00:00Z",
    },
    deadlinesReporting: {
      summary: [
        "Initial registration within **72 hours**; homeless register where they **sleep**.",
        "Renew each year **within 72 hours before your birthday**.",
        "Report changes **before** they happen.",
      ],
      validationNote:
        "See [§ 42-1-12(e), (f)(4)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/).",
    },
    verificationInPerson: {
      summary: [
        "Go to the sheriff where you reside/sleep for the annual renewal.",
        "SDPs have additional monitoring responsibilities.",
      ],
      validationNote:
        "See [§ 42-1-12(f)(4)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/) and [§ 42-1-14](https://gbi.georgia.gov/42-1-14-state-sexual-offender-registry).",
    },
    residencyPresence: {
      summary: [
        "Georgia enforces **1,000-foot** buffers around child-focused places.",
        "Local practice varies; ask your sheriff for maps.",
      ],
      validationNote: "See [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf).",
    },
    employmentEducationInternet: {
      summary: [
        "Working or attending school in another county may require **extra registration**.",
        "SDPs: electronic monitoring rules may apply.",
      ],
      validationNote:
        "See [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download) and [§ 42-1-14](https://gbi.georgia.gov/42-1-14-state-sexual-offender-registry).",
    },
    visitingTraveling: {
      summary: [
        "Short visits might not create residence, but **work/school** in Georgia can trigger duties.",
      ],
      validationNote:
        "Start with [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download) and [GBI FAQ](https://gbi.georgia.gov/about-us/frequently-asked-questions/sex-offender-registry-frequently-asked-questions).",
    },
    complianceEnforcement: {
      summary: [
        "Violations carry criminal penalties; SDPs face electronic monitoring requirements.",
      ],
      validationNote:
        "See [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download), [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf).",
    },
    checklistsScripts: {
      summary: [
        "Use the checklists to meet the 72-hour windows and keep receipts of notices.",
      ],
      validationNote:
        "Procedures pulled from [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download) and GBI materials cited above.",
    },
  },
};