export default {
  state: "Washington",
  lastReviewedUTC: "2025-10-12T00:00:00Z",

  atAGlance: {
    mustRegister: "**Who:** Adults and certain juveniles with qualifying sex or kidnapping offenses must register with the county sheriff; see [RCW 9A.44.130](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130) and youth criteria in [RCW 9A.44.130(1)(b)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
    initialDeadline: "**Deadline:** Register **within three business days** of release, sentencing without confinement, establishing residence, or arrival as a visitor who will be present ≥10 days; see [RCW 9A.44.130(4)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
    verificationCadence: "**Verification:** Address verification by mail at least annually; **every 90 days** for those ever designated SVP; **weekly in person** if lacking a fixed residence; see [RCW 9A.44.135](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.135) and [RCW 9A.44.130(6)(b)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
    primaryMethod: "**Method:** Register with the **county sheriff** (often **in person** initially). Example local process: [King County Sheriff](https://kingcounty.gov/en/dept/sheriff/courts-jails-legal-system/sheriff-services/sex-offender-registration).",
    topGotchas: [
      "Visitors present **10+ days** in a month must register; see [RCW 9A.44.130(4)(a)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
      "International travel requires **21 days’ advance notice** to the sheriff; see [RCW 9A.44.130(3)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
      "No fixed residence triggers **weekly in-person** reporting; see [RCW 9A.44.130(6)(b)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130)."
    ],
    officialLinks: {
      statuteIndex: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44",
      adminRules: "https://app.leg.wa.gov/wac/default.aspx?cite=446-20-500",
      statePoliceRegistry: "https://www.wsp.wa.gov/crime/sex-offender-registry/",
      formsPortal: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=84",
      publicWebsite: "https://www.waspc.org/sex-offender-information"
    }
  },

  whoMustRegister: "**Who:** Persons with qualifying convictions (including out-of-state, federal, military, tribal) who **live, work, or study** in WA; see [RCW 9A.44.130](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130). Youth criteria are narrowed and defined in [RCW 9A.44.130(1)(b)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130) (as amended by 2023 c 150).",

  deadlinesReporting: [
    "**Initial:** Register within **3 business days** after release, sentencing (if not confined), establishing residence, or arrival as a 10+ day visitor; see [RCW 9A.44.130(4)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
    "**Moves within county:** Notify the sheriff **within 3 business days** (in person or by certified mail); see [RCW 9A.44.130(5)(a)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
    "**Moves to a new county:** Register in the new county **within 3 business days** and notify the former county; see [RCW 9A.44.130(5)(b)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
    "**Higher education:** Give notice **3 business days** before starting classes or work at a college; see [RCW 9A.44.130(1)(d)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
    "**International travel:** Provide **21 days’** advance notice to the sheriff; see [RCW 9A.44.130(3)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130)."
  ],

  verificationInPerson: [
    "**Address verification:** Annual mail-based verification; **90-day** mailings for those ever designated SVP; see [RCW 9A.44.135](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.135).",
    "**No fixed residence:** **Weekly, in-person** check-ins with the sheriff on the assigned day; see [RCW 9A.44.130(6)(b)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
    "**Local practice:** Some counties require in-person registration/updates; see process example at [King County Sheriff](https://kingcounty.gov/en/dept/sheriff/courts-jails-legal-system/sheriff-services/sex-offender-registration)."
  ],

  residencyPresence: "**Presence/Residency:** No **statewide** residency exclusion zones in statute. Community **notification** is risk-based under [RCW 4.24.550](https://app.leg.wa.gov/rcw/default.aspx?cite=4.24.550). Check any local ordinances with the sheriff.",

  employmentEducationInternet: [
    "**Working in WA:** ‘Employed/carries on a vocation’ means >14 consecutive days or >30 aggregate days/year; see [RCW 9A.44.128(4)](https://lawfilesext.leg.wa.gov/biennium/2023-24/Pdf/Bills/Session%20Laws/House/1394-S.SL.pdf).",
    "**Students:** Registration required for attending school in WA regardless of domicile; see [RCW 9A.44.130(1), (4)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130)."
  ],

  publicWebsiteExposure: [
    "**Level II–III** generally appear on the public site; **Level I** may appear if transient or noncompliant; see [WASPC FAQ](https://www.waspc.org/sex-offender-information) and authority in [RCW 4.24.550](https://app.leg.wa.gov/rcw/default.aspx?cite=4.24.550)."
  ],

  travelInterstate: [
    "**Moving to another state:** Register in the new state **within 3 business days** of establishing residence (or starting work/school) **and** send written notice to the WA sheriff within 3 business days of moving; see [RCW 9A.44.130(4)(a)(viii)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
    "**International travel:** Notify your WA sheriff **21 days before** departure; see [RCW 9A.44.130(3)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130)."
  ],

  visitingTraveling: [
    "**Visitors:** If you intend to be in WA **10+ days**, register within **3 business days** of arrival in each county where you will stay; see [RCW 9A.44.130(4)(a)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130)."
  ],

  complianceEnforcement: "**Penalties:** Knowingly failing to comply with [RCW 9A.44.130](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130) is criminal; offense level depends on status and priors (gross misdemeanor to **class B felony**); see [RCW 9A.44.132](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132).",

  reliefPaths: [
    "**End of duty by operation of law:** Some duties **expire** after 10 or 15 crime-free years in the community depending on offense class; see [RCW 9A.44.140](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.140) and sheriff process in [RCW 9A.44.141](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.141).",
    "**Petition for relief:** File in superior court under [RCW 9A.44.142](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.142).",
    "**Juveniles:** Special petition/relief rules; see [RCW 9A.44.143](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.143)."
  ],

  specialPopulations: [
    "Persons lacking a fixed residence: **weekly in-person** reporting; see [RCW 9A.44.130(6)(b)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
    "Those ever designated SVP: **90-day** address verification mailings; see [RCW 9A.44.135](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.135).",
    "Juvenile-involved cases: narrowed registration triggers and relief pathways; see [2023 c 150 (ESHB 1394)](https://lawfilesext.leg.wa.gov/biennium/2023-24/Pdf/Bills/Session%20Laws/House/1394-S.SL.pdf)."
  ],

  costs: [
    "No state-level registration fee in statute; WSP maintains the central registry; see [RCW 43.43.540](https://app.leg.wa.gov/rcw/default.aspx?cite=43.43.540).",
    "Sheriff may collect standard administrative fees (e.g., certified mail, noncriminal fingerprinting) under [RCW 36.18.040](https://app.leg.wa.gov/rcw/default.aspx?cite=36.18.040); check local practice."
  ],

  recentChangesLitigation: [
    {
      type: "statute",
      bill: "ESHB 1394 (Chapter 150, Laws of 2023)",
      session: "2023 Reg. Sess.",
      effective: "2023-07-23",
      summary: "Reformed youth registration, updated definitions (e.g., employment thresholds) and amended RCW 9A.44.128, .130, .132, .140, among others.",
      link: "https://lawfilesext.leg.wa.gov/biennium/2023-24/Pdf/Bills/Session%20Laws/House/1394-S.SL.pdf"
    },
    {
      type: "rule",
      cite: "WAC 446-20-500",
      effective: "2021-02-11",
      summary: "WSP rule confirming central registry operations and forwarding of registration by sheriffs/police.",
      link: "https://app.leg.wa.gov/wac/default.aspx?cite=446-20-500"
    }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Go to the **county sheriff** within **3 business days** (or sooner) to register; bring ID and conviction details; see [RCW 9A.44.130(4)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
      "If you **lack a fixed residence**, ask for the office’s **weekly reporting** day/time; see [RCW 9A.44.130(6)(b)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
      "If attending a **college**, give required notice **3 business days** before starting; see [RCW 9A.44.130(1)(d)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
      "Keep dated copies/receipts of all submissions; confirm when your **address verification** form will arrive; see [RCW 9A.44.135](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.135)."
    ],
    movingOutChecklist: [
      "If moving **within WA**: notify the current sheriff and register in the new county **within 3 business days**; see [RCW 9A.44.130(5)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
      "If moving **to another state**: register in the new state **within 3 business days** of establishing residence or starting work/school **and** send written notice to your WA sheriff within **3 business days** of moving; see [RCW 9A.44.130(4)(a)(viii)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130).",
      "For **international travel**, give **21 days’** prior notice; see [RCW 9A.44.130(3)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130)."
    ],
    recordsRequestTemplate: "Request registry records/certifications from the sheriff and the [Washington State Patrol registry unit](https://www.wsp.wa.gov/crime/sex-offender-registry/), citing [RCW 9A.44.141](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.141) for end-of-duty investigations.",
    reliefPetitionOutline: "Use statewide court forms to petition for relief under [RCW 9A.44.142](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.142) or juvenile relief under [RCW 9A.44.143](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.143): [WA Courts—Relief from Registration](https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=84)."
  },

  resources: {
    legalAid: [
      { name: "Northwest Justice Project", link: "https://nwjustice.org" },
      { name: "ACLU of Washington", link: "https://www.aclu-wa.org" }
    ],
    advocacy: [
      { name: "Civil Survival Project", link: "https://civilsurvival.org" }
    ],
    reentry: [
      { name: "WA DOC Reentry Services", link: "https://doc.wa.gov/reentry" }
    ]
  },

  citations: [
    { label: "RCW 9A.44.130 (Registration procedures & deadlines)", url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130" },
    { label: "RCW 9A.44.135 (Address verification)", url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.135" },
    { label: "RCW 9A.44.132 (Failure to register—penalties)", url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132" },
    { label: "RCW 9A.44.140–.141 (End of duty; sheriff investigation)", url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.140" },
    { label: "RCW 9A.44.142 (Petition for relief)", url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.142" },
    { label: "RCW 9A.44.143 (Juvenile relief)", url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.143" },
    { label: "RCW 4.24.550 (Community notification authority)", url: "https://app.leg.wa.gov/rcw/default.aspx?cite=4.24.550" },
    { label: "RCW 43.43.540 (WSP—central registry authority)", url: "https://app.leg.wa.gov/rcw/default.aspx?cite=43.43.540" },
    { label: "WAC 446-20-500 (WSP registration rule)", url: "https://app.leg.wa.gov/wac/default.aspx?cite=446-20-500" },
    { label: "WASPC Public Registry/FAQ", url: "https://www.waspc.org/sex-offender-information" },
    { label: "King County Sheriff—Registration Process (example)", url: "https://kingcounty.gov/en/dept/sheriff/courts-jails-legal-system/sheriff-services/sex-offender-registration" },
    { label: "ESHB 1394 (2023 c 150)—Juvenile reforms", url: "https://lawfilesext.leg.wa.gov/biennium/2023-24/Pdf/Bills/Session%20Laws/House/1394-S.SL.pdf" }
  ],

  badges: {
    residencyZones: false,
    lifetimePossible: true,
    verificationQuarterly: true
  },

highlights: {
  residency: "Washington has **no residency exclusion restrictions**; proximity limits arise *only* through individual supervision orders or local ordinances that do not conflict with RCW. Local governments **may not impose broader bans** because registration and community notification are governed exclusively by state law; see [RCW 4.24.550](https://app.leg.wa.gov/rcw/default.aspx?cite=4.24.550) and [RCW 9.94A.703](https://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.703).",
  presence: "Washington has **no automatic statewide presence or proximity restrictions**. Presence near schools or childcare facilities may be restricted **only when ordered by the court or DOC**, not by local ordinance; see [RCW 4.24.550](https://app.leg.wa.gov/rcw/default.aspx?cite=4.24.550).",
  duration: "Registration continues **10 or 15 crime-free years** depending on offense class; certain Class A and out-of-state equivalents are **lifetime** unless relieved by court order; see [RCW 9A.44.140](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.140) and [RCW 9A.44.142](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.142).",
  tiering: "Washington uses **Level I–III classifications** that affect only **public notification and verification cadence**, not extra penalties. Level I = annual mail check; Level II = semiannual; Level III = quarterly or more; see [RCW 9A.44.135](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.135) and [WASPC Registry](https://www.waspc.org/sex-offender-information)."
},

  plainLanguage: {
    atAGlance: {
      summary: [
        "Most people register with the county sheriff within three business days of release, arrival, or a move.",
        "If you don’t have a fixed address, you must check in **weekly**."
      ],
      watchOuts: [
        "Planning to leave the U.S.? Tell the sheriff **21 days** ahead.",
        "Visitors here 10+ days must register quickly."
      ],
      validationNote: "Summarizes [RCW 9A.44.130](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130) and [RCW 9A.44.135](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.135).",
      reviewedUTC: "2025-10-12T00:00:00Z"
    },
    deadlinesReporting: {
      summary: [
        "Use the three-business-day rule for most changes and moves.",
        "College enrollment/work has its own three-business-day notice."
      ],
      watchOuts: ["International trips require 21-day advance notice."],
      validationNote: "See [RCW 9A.44.130(1)(d), (3), (4)–(5)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130)."
    },
    verificationInPerson: {
      summary: [
        "Expect a mailed address verification each year (every 90 days if ever designated SVP).",
        "No fixed residence = weekly in-person check-ins."
      ],
      watchOuts: ["Missing weekly check-ins can be charged as failure to register."],
      validationNote: "See [RCW 9A.44.135](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.135) and [RCW 9A.44.130(6)(b)](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.130)."
    },
    residencyPresence: {
      summary: ["No statewide residency ban in RCW; notification is risk-based."],
      validationNote: "See [RCW 4.24.550](https://app.leg.wa.gov/rcw/default.aspx?cite=4.24.550)."
    },
    complianceEnforcement: {
      summary: ["Failure to register/comply can be a gross misdemeanor or felony."],
      validationNote: "See [RCW 9A.44.132](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132)."
    },
    reliefPaths: {
      summary: [
        "Some duties end automatically after 10 or 15 crime-free years depending on the offense.",
        "Others require a court petition; juveniles have special rules."
      ],
      validationNote: "See [RCW 9A.44.140–.143](https://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.140)."
    }
  }
};