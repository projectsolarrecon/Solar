// src/data/state-registry/tx.ts
export default {
  state: "Texas",
  lastReviewedUTC: "2025-10-10T00:00:00Z",

  atAGlance: {
    mustRegister:
      "Register **in person** with your **primary registration authority** (local law enforcement) if you have a **reportable conviction/adjudication** under Chapter 62. See [Tex. Code Crim. Proc. ch. 62](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm).",
    initialDeadline:
      "Initial registration/verification **within 7 days** after release/placement or arrival in Texas; see [Art. 62.053](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.053) and [Art. 62.051(a)](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.051).",
    verificationCadence:
      "**Annual** birthday-window verification for most; **every 90 days** if you have **two+ sexually violent offense** convictions/deferreds; **every 30 days** if **civilly committed**; see [Art. 62.058](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.058) and DPS guide.",
    primaryMethod:
      "**In person** with local law enforcement; mail verification may be used only as directed. DPS maintains the statewide database and public site. See [DPS program page](https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program).",
    topGotchas: [
      "Report **address changes** **≥7 days before** moving and **≤7 days after** arrival; if the move falls through, weekly check-ins apply. See [Art. 62.055](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055).",
      "**Online identifiers** must be reported **within 7 days** of change/creation. See [Art. 62.0551](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.0551).",
      "**Higher-ed** work/school triggers extra notice **within 7 days**. See [Art. 62.153](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.153).",
      "**Homeless / no fixed address:** report **every 30 days** with detailed location description. See [Art. 62.055(i)](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055).",
      "Failure to comply is a felony (degree varies by cadence). See [Art. 62.102](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.102)."
    ],
    officialLinks: {
      statuteIndex: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm",
      statePoliceRegistry: "https://publicsite.dps.texas.gov/SexOffenderRegistry/Search",
      formsPortal: "https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program",
      publicWebsite: "https://publicsite.dps.texas.gov/SexOffenderRegistry/Search"
    }
  },

  whoMustRegister:
    "Those with a **reportable conviction/adjudication** (defined in [Art. 62.001](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.001)) must register, including certain out-of-state/federal cases. Nonresident **workers/students** present in Texas are covered by [Subchapter H](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.151).",

  deadlinesReporting: [
    "Initial verification/registration **within 7 days** after release/placement/arrival. See [Art. 62.053](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.053) and [Art. 62.051(a)](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.051).",
    "**Address change:** notify verifying agency **≥7 days before** a move and **≤7 days after** arrival; if you don’t move as planned, weekly reports required. See [Art. 62.055](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055).",
    "**No fixed address:** report **every 30 days** with location description. See [Art. 62.055(i)](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055).",
    "**Online identifiers:** report additions/changes **within 7 days**. See [Art. 62.0551](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.0551).",
    "**Higher-ed notice:** within **7 days** of starting work/vocation/classes; notify campus security and your verifying agency. See [Art. 62.153](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.153)."
  ],

  verificationInPerson: [
    "**Annual window:** once each year **30 days before to 30 days after** your birthday (most registrants). See [Art. 62.058](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.058).",
    "**Quarterly:** if you have **two+ sexually violent offense** convictions/deferreds, report **every 90 days** (7-day grace each side). See [Art. 62.058(a)](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.058).",
    "**Civilly committed:** verify **every 30 days**. See DPS guide and [Art. 62.202](https://statutes.capitol.texas.gov/Docs/HS/htm/HS.841.htm) cross-refs noted by DPS."
  ],

  residencyPresence:
    "No single **statewide** residency ban applies **after supervision**; **parole/probation** may impose **child-safety-zone** limits. See [Gov’t Code § 508.187](https://law.justia.com/codes/texas/government-code/title-4/subtitle-g/chapter-508/subchapter-f/section-508-187/) and AG Op. [GA-0526](https://www.texasattorneygeneral.gov/opinions/greg-abbott/ga-0526) (home-rule cities may adopt certain residency ordinances). Local rules vary—confirm locally.",

  employmentEducationInternet: [
    "**Prohibited employment (conditional):** certain offenses with minor victims bar specific jobs (e.g., bus/taxi/limousine; unsupervised in-home services). See [Art. 62.063](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.063).",
    "**Internet identifiers:** disclose and update **within 7 days** (emails, usernames, etc.). See [Art. 62.0551](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.0551).",
    "**Higher-ed:** campus residency limits and notice duties. See [Art. 62.064](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.064) and [Art. 62.153](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.153)."
  ],

  publicWebsiteExposure: [
    "TXDPS maintains the **public registry** searchable by name/address/ZIP. See [DPS public registry](https://publicsite.dps.texas.gov/SexOffenderRegistry/Search) and [program page](https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program).",
    "Local agencies may also host listings; newspaper/community notification is authorized in some cases. See [Art. 62.056](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.056) and DPS program page."
  ],

  travelInterstate: [
    "**Moving out of Texas:** complete Texas notice duties (address change timing) and register in the destination state as required. See [Art. 62.055](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055).",
    "**Nonresident workers/students in TX:** covered by [Subchapter H](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.151) with thresholds (14+ consecutive or 30 aggregate days/year). See [Art. 62.151–.153](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.151)."
  ],

  visitingTraveling: [
    "Short **visits** that don’t create residence/work/school ties generally don’t trigger registration, but supervision rules may add limits. Start with [Art. 62.051](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.051) and verify with your officer if supervised."
  ],

  complianceEnforcement:
    "Failure to comply is a felony: **state jail** (post-10-year cases), **3rd-degree** (annual verifiers), or **2nd-degree** (quarterly/civil-commit). See penalty tiers in [Art. 62.102](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.102).",

  reliefPaths: [
    "**Expiration:** most duties are **lifetime** (see list) unless eligible for early termination; see [Art. 62.101](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.101).",
    "**Early termination:** limited path via risk assessment and court order; see **Subchapter I** ([Art. 62.402–.408](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.402))."
  ],

  specialPopulations: [
    "**Homeless / lack of address:** report **every 30 days** with detailed location description; see [Art. 62.055(i)](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055).",
    "**On supervision:** child-safety-zone conditions under [Gov’t Code § 508.187](https://law.justia.com/codes/texas/government-code/title-4/subtitle-g/chapter-508/subchapter-f/section-508-187/); policies vary by board/court.",
    "**Nonresident worker/student:** thresholds and dual-notice to campus police per [Art. 62.151–.153](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.151)."
  ],

  costs: [
    "**ID requirement:** classified sex-offender DL/ID is **annually renewable** and required within **30 days** of registration; failure can cause revocation. See [Art. 62.060](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.060) and DPS guidance.",
    "Court filing/assessment costs for **early-termination** petitions and individual risk assessment. See [Art. 62.406](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.406)."
  ],

  recentChangesLitigation: [
    {
      type: "statute",
      bill: "HB 2000 (Audrii’s Law)",
      session: "89th Leg., R.S. (2025)",
      effective: "2025-09-01",
      summary:
        "Adds **child grooming** (Penal Code § 15.032) to **reportable convictions**, expanding who must register.",
      link: "https://capitol.texas.gov/billlookup/History.aspx?Bill=HB2000&LegSess=89R"
    }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Within **7 days** of release/arrival: **appear in person** at your primary registration authority to register/verify. See [Art. 62.053](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.053).",
      "Set a reminder for your **verification cadence**: **annual** (birthday window) or **every 90 days** (qualifying sexually violent repeaters). See [Art. 62.058](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.058).",
      "Gather required info: IDs, vehicles, phone numbers, **online identifiers**, employer/school details. See [Art. 62.051(c)](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.051).",
      "If no fixed address: plan for **30-day** check-ins with a detailed location description. See [Art. 62.055(i)](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055).",
      "Apply for the **Classified Sex Offender DL/ID** within **30 days**. See [Art. 62.060](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.060)."
    ],
    movingOutChecklist: [
      "Notify your verifying agency **≥7 days before** you move and **≤7 days after** arrival at the new address. See [Art. 62.055](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055).",
      "If moving out of Texas, **register in the new state** as required and keep proof of completion.",
      "If the move falls through, complete **weekly reports** until resolved. See [Art. 62.055](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055)."
    ],
    recordsRequestTemplate:
      "To: Texas Department of Public Safety — Sex Offender Registration Unit (TxSOR@dps.texas.gov)\n\nSubject: Registry File Request — [Your Name, DOB]\n\nUnder Chapter 62, please provide my current registry record, including:\n• Registration dates (initial/periodic) and verifying agency\n• Reported addresses, employment/school, vehicles, and online identifiers on file\n• Verification cadence (annual/90-day/30-day) and next due date\n• Any notices of non-compliance or pending actions\n\nI prefer electronic delivery. Please advise of any fees. Thank you.",
    reliefPetitionOutline:
      "1) Confirm offense and **federal minimum** status via DPS list ([Art. 62.402(b)](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.402)).\n2) Obtain **individual risk assessment** per [Art. 62.403](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.403).\n3) File **motion for early termination** with sentencing court under [Art. 62.404](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.404), attaching the assessment and qualifying explanation.\n4) Serve the prosecutor; calendar hearing under [Art. 62.405](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.405).\n5) Prepare evidence of treatment, compliance, stability; request order per [Art. 62.407](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.407)."
  },

  resources: {
    legalAid: [
      { name: "Texas DPS — Sex Offender Registration Program", link: "https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program" }
    ],
    advocacy: [
      { name: "DOJ SMART — Local Restrictions Overview", link: "https://smart.ojp.gov/sorna/current-law/case-law/ii-locally-enacted-sex-offender-requirements" }
    ],
    reentry: [
      { name: "TXDPS Public Registry Search", link: "https://publicsite.dps.texas.gov/SexOffenderRegistry/Search" }
    ]
  },

  citations: [
    { label: "Ch. 62 — Sex Offender Registration Program", url: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm" },
    { label: "Art. 62.051 — Duty to Register", url: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.051" },
    { label: "Art. 62.053 — Initial Verification", url: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.053" },
    { label: "Art. 62.055 — Change of Address (7-day rules; weekly reports)", url: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055" },
    { label: "Art. 62.0551 — Online Identifiers (7 days)", url: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.0551" },
    { label: "Art. 62.058 — Verification Cadence (annual/90-day)", url: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.058" },
    { label: "Art. 62.060 — Classified Sex-Offender DL/ID", url: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.060" },
    { label: "Art. 62.101 — Expiration (duration)", url: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.101" },
    { label: "Art. 62.102 — Penalties", url: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.102" },
    { label: "Art. 62.151–.153 — Nonresident Workers/Students", url: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.151" },
    { label: "Gov’t Code § 508.187 — Child-Safety-Zone Conditions", url: "https://law.justia.com/codes/texas/government-code/title-4/subtitle-g/chapter-508/subchapter-f/section-508-187/" },
    { label: "AG Op. GA-0526 — Home-Rule Residency Ordinances", url: "https://www.texasattorneygeneral.gov/opinions/greg-abbott/ga-0526" },
    { label: "DPS — Program Overview", url: "https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program" },
    { label: "TXDPS Public Registry", url: "https://publicsite.dps.texas.gov/SexOffenderRegistry/Search" },
    { label: "HB 2000 (Audrii’s Law) — Effective 9/1/2025", url: "https://capitol.texas.gov/billlookup/History.aspx?Bill=HB2000&LegSess=89R" }
  ],

  badges: {
    residencyZones: true,
    lifetimePossible: true,
    verificationQuarterly: true
  },

  plainLanguage: {
    atAGlance: {
      summary: [
        "Register **in person** with local law enforcement; DPS runs the public site.",
        "Most people verify **once a year** near their birthday; some verify **every 90 days**.",
        "Report moves **before** and **after**; report **online IDs** within **7 days**."
      ],
      validationNote:
        "See [Art. 62.051](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.051), [62.055](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055), and [62.058](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.058).",
      reviewedUTC: "2025-10-10T00:00:00Z"
    },
    deadlinesReporting: {
      summary: [
        "Register/verify **within 7 days** of release/arrival.",
        "Report address changes **before** you move and **after** you arrive.",
        "Update **online identifiers** within **7 days**."
      ],
      validationNote:
        "See [Art. 62.053](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.053), [62.055](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055), [62.0551](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.0551)."
    },
    verificationInPerson: {
      summary: [
        "Annual **birthday-window** for most; **every 90 days** for certain repeat sexually violent offenses; **every 30 days** if civilly committed."
      ],
      validationNote:
        "See [Art. 62.058](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.058) and DPS guidance."
    },
    residencyPresence: {
      summary: [
        "No blanket statewide residency ban after supervision.",
        "Parole/probation can impose **child-safety zones**; some cities have local ordinances."
      ],
      validationNote:
        "See [Gov’t Code § 508.187](https://law.justia.com/codes/texas/government-code/title-4/subtitle-g/chapter-508/subchapter-f/section-508-187/) and AG Op. [GA-0526](https://www.texasattorneygeneral.gov/opinions/greg-abbott/ga-0526)."
    },
    employmentEducationInternet: {
      summary: [
        "Certain offenses with minor victims bar specific jobs.",
        "Report **online usernames/emails** within **7 days**.",
        "Higher-ed work/school has extra **7-day** notice rules."
      ],
      validationNote:
        "See [Art. 62.063](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.063), [62.0551](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.0551), [62.153](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.153)."
    },
    visitingTraveling: {
      summary: [
        "Brief visits usually don’t trigger Texas registration unless you work/go to school here.",
        "If supervised, follow your officer’s travel rules."
      ],
      validationNote:
        "Start with [Art. 62.051](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.051) and [Subch. H](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.151)."
    },
    complianceEnforcement: {
      summary: [
        "Missing deadlines can be a **felony**; penalties are higher if you’re on a **90-day** or **30-day** cadence."
      ],
      validationNote:
        "See [Art. 62.102](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.102)."
    },
    checklistsScripts: {
      summary: [
        "Use the checklists to meet **7-day**, **30-day**, and **90-day/annual** windows; keep stamped copies and receipts."
      ],
      validationNote:
        "Procedures drawn from [Art. 62.053](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.053), [62.055](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.055), [62.058](https://statutes.capitol.texas.gov/Docs/CR/htm/CR.62.htm#62.058) and DPS guidance."
    }
  }
};