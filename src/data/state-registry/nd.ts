export default {
  state: "North Dakota",
  lastReviewedUTC: "2025-10-17T05:00:00Z",

  atAGlance: {
    mustRegister:
      "People convicted, adjudicated delinquent, or ordered by a court for a qualifying **sex offense** or **crime against a child**, including substantially equivalent out-of-state, tribal, federal, or foreign convictions. The duty is created by [N.D.C.C. § 12.1-32-15](https://ndlegis.gov/cencode/t12-1c32.pdf) and applied in practice by the Attorney General’s [registry program](https://sexoffender.nd.gov/laws).",
    initialDeadline:
      "Register **within 3 days** of entering the North Dakota county where you reside or are temporarily domiciled; homeless individuals must register **every 3 days** with local law enforcement. See [§ 12.1-32-15(2)–(3)](https://ndlegis.gov/cencode/t12-1c32.pdf) and program guidance in the AG’s [FAQ](https://sexoffender.nd.gov/questions).",
    verificationCadence:
      "By **risk level** with fixed months: High risk = **quarterly** (Jan/Apr/Jul/Oct); Moderate = **twice yearly** (Feb/Aug); Low or not yet assigned = **annually** in **birth month**. Source: AG [FAQ](https://sexoffender.nd.gov/questions) and AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf).",
    primaryMethod:
      "**In-person** registration/verification with the city police or county sheriff where you live; fingerprints, photo, and forms are transmitted to BCI. See [§ 12.1-32-15(7)](https://ndlegis.gov/cencode/t12-1c32.pdf) and AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf).",
    topGotchas: [
      "Provide **10 days’ advance notice** before any change to residence, employment, school, vehicle info, or **online identity**; report terminations within **3 days**. See AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf).",
      "Homeless status requires **in-person check-ins every 3 days**; failure creates **prima facie** proof of a violation. See [§ 12.1-32-15(2)–(3), (9)](https://ndlegis.gov/cencode/t12-1c32.pdf).",
      "High-risk registrants may **not reside within 500 feet** of any public or nonpublic preschool, elementary, middle, or high school. See [§ 12.1-32-15(13)](https://ndlegis.gov/cencode/t12-1c32.pdf).",
      "Presence on K-12 **school property is restricted** for many registrants, with narrow exceptions (e.g., voting, open meetings). See [§ 12.1-20-25](https://ndlegis.gov/cencode/t12-1c20.pdf).",
      "Failure to comply is a **Class C felony** and carries a **mandatory minimum** of **90 days jail** and **1 year probation** (non-juveniles). See [§ 12.1-32-15(9)–(10)](https://ndlegis.gov/cencode/t12-1c32.pdf)."
    ],
    officialLinks: {
      statuteIndex: "https://ndlegis.gov/cencode/t12-1c32.pdf",
      adminRules: "https://sexoffender.nd.gov/Content/Documents/Risk-Assessment-Community-Notification-Guidelines.pdf",
      statePoliceRegistry: "https://sexoffender.nd.gov/",
      formsPortal: "https://sexoffender.nd.gov/offender",
      publicWebsite: "https://sexoffender.nd.gov/"
    }
  },

  whoMustRegister:
    "Courts **must** order registration for qualifying **sexual offenses** and **crimes against children**, including attempts; courts **may** order registration for other crimes if warranted by the nature of the offense. The duty also attaches to individuals with substantially equivalent convictions from other jurisdictions. See [§ 12.1-32-15(2)–(3)](https://ndlegis.gov/cencode/t12-1c32.pdf) and AG “Laws” overview ([link](https://sexoffender.nd.gov/laws)). Juveniles can be required to register, with disclosure governed by risk and policy ([AG Laws](https://sexoffender.nd.gov/laws)).",

  deadlinesReporting: [
    "Initial: **Within 3 days** of arrival in the county of residence/temporary domicile; homeless must register **every 3 days**. [§ 12.1-32-15(2)–(3)](https://ndlegis.gov/cencode/t12-1c32.pdf).",
    "Advance changes: Provide **10 days’ notice** before changes to **residence, employment, school, vehicles, or online identity**; report **terminations within 3 days**. (AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf)).",
    "Routine verification: High risk **Jan/Apr/Jul/Oct**; Moderate **Feb/Aug**; Low (or unassigned) **birth month**. (AG [FAQ](https://sexoffender.nd.gov/questions)).",
    "International travel: Inform registering agency **≥21 days** before departure; AG reports to U.S. Marshals. [§ 12.1-32-15(19)](https://ndlegis.gov/cencode/t12-1c32.pdf)."
  ],

  verificationInPerson: [
    "Verification is **in person** with the agency of registration (city police/sheriff); fingerprints/photo maintained by BCI. [§ 12.1-32-15(7)](https://ndlegis.gov/cencode/t12-1c32.pdf); AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf).",
    "Frequency by risk month (see above) with **fixed months**. AG [FAQ](https://sexoffender.nd.gov/questions)."
  ],

  residencyPresence:
    "North Dakota imposes a **residency buffer** only for **high-risk** sexual offenders: may not reside within **500 feet** of any public or nonpublic preschool, elementary, middle, or high school. See [§ 12.1-32-15(13)](https://ndlegis.gov/cencode/t12-1c32.pdf). Separate from residence, **presence on school property** is restricted by [§ 12.1-20-25](https://ndlegis.gov/cencode/t12-1c20.pdf). The AG notes low/moderate risk offenders generally are **not barred** from living near schools, parks, or daycares absent probation conditions ([AG FAQ](https://sexoffender.nd.gov/questions)).",

  employmentEducationInternet: [
    "Employment/school addresses are required, and changes must be **pre-reported 10 days** in advance; **terminations** must be reported within **3 days**. AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf).",
    "Institutions of higher education receive notifications consistent with federal Campus Sex Crimes Prevention Act; ND AG coordinates disclosures. (Manual & AG [Laws](https://sexoffender.nd.gov/laws)).",
    "Provide and keep current **online identity** information (email/usernames) and **vehicle** information; advance notice of changes required. AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf)."
  ],

  publicWebsiteExposure: [
    "Public disclosure framework: law enforcement **must** disclose relevant/necessary info for **moderate/high risk** and **may** include **internet access** for **lifetime** or **high-risk** cases. See [§ 12.1-32-15(14)](https://ndlegis.gov/cencode/t12-1c32.pdf).",
    "Program practice: the AG’s site provides searchable listings of registrants and is updated in **real time** ([Search](https://sexoffender.nd.gov/), [Offender Info](https://sexoffender.nd.gov/offender)); **juvenile** listings are limited by policy/risk (see AG [Laws](https://sexoffender.nd.gov/laws)).",
    "“Offenders Against Children” are **not** listed on the sex-offender website; separate information is at the AG Public Safety portal ([link](https://attorneygeneral.nd.gov/public-safety/offenders-against-children/))."
  ],

  travelInterstate: [
    "Out-of-state registrants **visiting/working** in ND must register if staying **≥10 consecutive overnights** or **≥30 overnights in a calendar year** (even if non-consecutive). AG [FAQ](https://sexoffender.nd.gov/questions).",
    "Moving into/out of ND: give **10 days’ advance notice** of address/employment/school changes and complete **in-person** registration in the new jurisdiction within **3 days** of arrival. AG [FAQ](https://sexoffender.nd.gov/questions); AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf).",
    "International trips: **≥21-day** notice to registering agency; AG reports to USMS. [§ 12.1-32-15(19)](https://ndlegis.gov/cencode/t12-1c32.pdf)."
  ],

  visitingTraveling: [
    "Short-term stays by non-residents trigger ND registration if **10 consecutive** nights or **30** nights/year thresholds are met. AG [FAQ](https://sexoffender.nd.gov/questions).",
    "If thresholds aren’t met, keep documentation of your itinerary and check with the **local sheriff or police** listed on the AG site ([Contact](https://sexoffender.nd.gov/contact))."
  ],

  complianceEnforcement:
    "Noncompliance with § 12.1-32-15 is a **Class C felony**; for non-juveniles, courts **may not** relieve the offender from serving **at least 90 days jail** and **1 year probation**. Parole/probation is **revoked** if initial registration is missed. See [§ 12.1-32-15(9)–(10)](https://ndlegis.gov/cencode/t12-1c32.pdf). The AG/BCI actively monitors and issues warrants; the public site is updated **in real time** ([Offender Info](https://sexoffender.nd.gov/offender)).",

  reliefPaths: [
    "Existing: If registration was required **before Aug. 1, 1999** and is **no longer mandatory** due to statutory changes, a petition to be removed may be filed. See [§ 12.1-32-15(17)](https://ndlegis.gov/cencode/t12-1c32.pdf).",
    "Proposed (2025 Session): A bill to create **§ 12.1-32-15.1** allowing **low-risk** offenders to petition for relief after **7 years** of registration was introduced (status: pending). See 69th Assembly draft [25-0275-02000](https://ndlegis.gov/assembly/69-2025/regular/documents/25-0275-02000.pdf)."
  ],

  specialPopulations: [
    "Juveniles: may be required to register; disclosure and notifications follow statute and AG policy. See [§ 12.1-32-15(16)](https://ndlegis.gov/cencode/t12-1c32.pdf) and AG [Laws](https://sexoffender.nd.gov/laws).",
    "Students/Employees at colleges: campus notifications per federal law; ND AG coordinates. AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf).",
    "High-risk: **500-foot residence buffer** from schools; enhanced public notification. [§ 12.1-32-15(13)–(14)](https://ndlegis.gov/cencode/t12-1c32.pdf).",
    "Early childhood services: registrants are generally **barred** from providing daycare; see AG FAQ note referencing [§ 50-11.1-13.1](https://sexoffender.nd.gov/questions)."
  ],

  costs: [
    "No **statewide fee** for registration is specified in [§ 12.1-32-15](https://ndlegis.gov/cencode/t12-1c32.pdf); agencies collect fingerprints/photos as part of in-person processing. Confirm any **local administrative costs** with your registering agency ([Contact AG/BCI](https://sexoffender.nd.gov/contact))."
  ],

  recentChangesLitigation: [
    {
      type: "rule",
      cite: "AG Risk Assessment & Community Notification Guidelines (11/1/2021)",
      effective: "2021-11-01",
      summary:
        "Sets low/moderate/high risk process and public disclosure practices used to drive verification months and notifications.",
      link: "https://sexoffender.nd.gov/Content/Documents/Risk-Assessment-Community-Notification-Guidelines.pdf"
    },
    {
      type: "case",
      name: "SMART Office SORNA Substantial Implementation Review – North Dakota",
      court: "U.S. DOJ SMART Office (Program Review)",
      date: "2024-12-01",
      holding:
        "Describes ND’s risk-based durations and verification schedule; provides federal implementation context for state practice.",
      link: "https://smart.ojp.gov/sorna-implementation-status/north-dakota-hny.pdf"
    },
    {
      type: "statute",
      bill: "SB 2037 (Draft) – Amend § 12.1-32-15",
      session: "69th (2025) – Introduced",
      effective: "—",
      summary:
        "Amendments to § 12.1-32-15 considered in 2025; consult text for scope of changes (pending as of Oct. 2025).",
      link: "https://www.sos.nd.gov/sites/www/files/documents/services/leg-bills/2025-69/senate-bills/2037.pdf"
    },
    {
      type: "statute",
      bill: "§ 12.1-32-15.1 (Draft) – Petition for Relief",
      session: "69th (2025) – Introduced",
      effective: "—",
      summary:
        "Would allow **low-risk** offenders to petition for relief after **7 years** of registration; not enacted as of Oct. 2025.",
      link: "https://ndlegis.gov/assembly/69-2025/regular/documents/25-0275-02000.pdf"
    }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Within **3 days**, register **in person** with city police/sheriff for your residence area. Bring ID and court papers. ([Statute](https://ndlegis.gov/cencode/t12-1c32.pdf))",
      "Confirm your **risk-level month** for verification (High Jan/Apr/Jul/Oct; Moderate Feb/Aug; Low Birth Month). ([AG FAQ](https://sexoffender.nd.gov/questions))",
      "List all **addresses**, **employment/school**, **vehicles**, and **online identities**; calendar **10-day** advance-notice rule for any changes. (AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf))",
      "If **international travel** is possible, set a reminder to notify **≥21 days** before departure. ([Statute](https://ndlegis.gov/cencode/t12-1c32.pdf))"
    ],
    movingOutChecklist: [
      "Give **10 days’ notice** before changing your **residence/employment/school** or vehicles/online identity. (AG Procedures [Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf))",
      "Register **within 3 days** of arrival in your new jurisdiction (inside or outside ND as applicable). ([AG FAQ](https://sexoffender.nd.gov/questions))",
      "Keep proof of move and copies of your change form; verify the AG/BCI site shows the new status within a reasonable time. ([Offender Info](https://sexoffender.nd.gov/offender))"
    ],
    recordsRequestTemplate:
      "Subject: Request for Offender Registration Records – [Your Name]\n\nDear Records Officer,\n\nUnder North Dakota open records law, I request copies of all **registration and verification documents** held by your agency for **[Your Name, DOB]**, including initial registration, verification history, change forms (residence/employment/school/vehicle/online identity), and any compliance notices or warrants. I request electronic copies and a fee waiver if possible. Please cite any specific exemptions if you withhold records.\n\nSincerely,\n[Your Name]\n[Contact]\n\n(Agency list & contacts: AG/BCI [Contact](https://sexoffender.nd.gov/contact)).",
    reliefPetitionOutline:
      "Drafting notes for potential relief:\n\n1) **Confirm eligibility** (e.g., legacy removal under [§ 12.1-32-15(17)](https://ndlegis.gov/cencode/t12-1c32.pdf); proposed low-risk petition bill [text](https://ndlegis.gov/assembly/69-2025/regular/documents/25-0275-02000.pdf) is **not** enacted as of Oct. 2025).\n2) **Gather exhibits**: Judgment(s), risk-level notice, proof of registration duration/compliance, treatment, supervision discharge.\n3) **File in** sentencing court or district of residence (as applicable in statute/court rules). Attach memorandum citing statutory language and public-safety factors.\n4) **Serve** State/AG per local rule; set hearing and prepare testimony on risk reduction and community supports.\n5) **Orders/notice**: If granted, deliver certified order to registering agency and AG/BCI (AG [Contact](https://sexoffender.nd.gov/contact))."
  },

  resources: {
    legalAid: [
      { name: "State Bar Association of North Dakota – Lawyer Referral", link: "https://www.sband.org/page/LawyerReferral" },
      { name: "North Dakota Legal Self Help Center (Courts)", link: "https://www.ndcourts.gov/legal-self-help" }
    ],
    advocacy: [
      { name: "North Dakota Office of Attorney General – Sex Offender Registry", link: "https://sexoffender.nd.gov/" }
    ],
    reentry: [
      { name: "ND Department of Corrections & Rehabilitation – Reentry", link: "https://www.docr.nd.gov/reentry" },
      { name: "2-1-1 North Dakota (community services)", link: "https://myfirstlink.org/nd211/" }
    ]
  },

  citations: [
    { label: "N.D.C.C. § 12.1-32-15 (PDF – official legislative host)", url: "https://ndlegis.gov/cencode/t12-1c32.pdf" },
    { label: "AG – FAQ (verification months, visiting thresholds, residence notes)", url: "https://sexoffender.nd.gov/questions" },
    { label: "AG – Offender Registration Procedures Manual (10-day change rule; online identity; verification)", url: "https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf" },
    { label: "AG – Laws overview", url: "https://sexoffender.nd.gov/laws" },
    { label: "§ 12.1-20-25 – Sexual offender presence near schools prohibited (PDF)", url: "https://ndlegis.gov/cencode/t12-1c20.pdf" },
    { label: "AG – Risk Assessment & Community Notification Guidelines", url: "https://sexoffender.nd.gov/Content/Documents/Risk-Assessment-Community-Notification-Guidelines.pdf" },
    { label: "AG – Offender Information portal", url: "https://sexoffender.nd.gov/offender" },
    { label: "SMART Office – ND SORNA Review (Dec. 1, 2024)", url: "https://smart.ojp.gov/sorna-implementation-status/north-dakota-hny.pdf" },
    { label: "Draft – § 12.1-32-15.1 Petition for Relief (69th Assem., 2025)", url: "https://ndlegis.gov/assembly/69-2025/regular/documents/25-0275-02000.pdf" },
    { label: "Draft – SB 2037 (69th Assem., 2025) – Amend § 12.1-32-15", url: "https://www.sos.nd.gov/sites/www/files/documents/services/leg-bills/2025-69/senate-bills/2037.pdf" }
  ],

  badges: {
    residencyZones: true,
    lifetimePossible: true,
    verificationQuarterly: true
  },

  highlights: {
    residency: "Only **high-risk** offenders are barred from living within **500 feet** of K-12 schools per [N.D.C.C. § 12.1-32-15(13)](https://ndlegis.gov/cencode/t12-1c32.pdf); cities may try to add rules, but state law controls and local limits risk being **preempted**.",
    presence: "Being **on K-12 school property** is restricted—with narrow exceptions for voting or meetings—by [N.D.C.C. § 12.1-20-25](https://ndlegis.gov/cencode/t12-1c20.pdf); low/moderate risk offenders otherwise have no statewide presence bans unless a **court order or probation** adds them.",
    duration: "Registration lasts **15 years (low)**, **25 years (moderate)**, or **lifetime (high or specified offenses)** under [§ 12.1-32-15(8)](https://ndlegis.gov/cencode/t12-1c32.pdf); duration may extend if new convictions occur or if compliance lapses.",
    tiering: "Risk levels (**low/moderate/high**)—set by the Attorney General under [§ 12.1-32-15(12)](https://ndlegis.gov/cencode/t12-1c32.pdf)—govern **duration, verification frequency, residency limits, and public-notification scope**; full criteria in the AG’s [Risk Guidelines](https://sexoffender.nd.gov/Content/Documents/Risk-Assessment-Community-Notification-Guidelines.pdf)."
  },

  plainLanguage: {
    atAGlance: {
      summary: [
        "If your case fits the list of **sex offenses** or **crimes against children**, you must register. ND sets **fixed months** for check-ins by **risk level**. The whole program runs through the Attorney General and local police/sheriff."
      ],
      watchOuts: [
        "The **3-day** clock to register is short. If you’re **homeless**, you must check in **every 3 days**. Skipping can become a **felony** fast."
      ],
      validationNote:
        "See the statute at [§ 12.1-32-15](https://ndlegis.gov/cencode/t12-1c32.pdf) and the AG’s public **[FAQ](https://sexoffender.nd.gov/questions)** for the month-by-month schedule and visitor thresholds."
      ,
      reviewedUTC: "2025-10-17T05:00:00Z"
    },
    whoMustRegister: {
      summary: [
        "Courts usually **must order** registration for qualifying offenses, and they **can** order it for other crimes if the facts warrant it. Out-of-state and tribal cases count if **equivalent**."
      ],
      watchOuts: [
        "Juveniles can be ordered to register; public posting depends on **risk** and program rules."
      ],
      validationNote:
        "Details appear in [§ 12.1-32-15(2)–(3)](https://ndlegis.gov/cencode/t12-1c32.pdf) and the AG’s **[Laws](https://sexoffender.nd.gov/laws)** page."
    },
    deadlinesReporting: {
      summary: [
        "**Register in 3 days** after you arrive; give **10 days’ notice** before you change **home, job, school, vehicle, or online IDs**; report **terminations in 3 days**.",
        "Plan travel early—**international** trips require **21-day** notice."
      ],
      watchOuts: [
        "Risk-level months are **fixed** (not rolling from your last check-in). Put them on your calendar."
      ],
      validationNote:
        "See the AG Procedures **[Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf)** and [§ 12.1-32-15(19)](https://ndlegis.gov/cencode/t12-1c32.pdf) for international travel."
    },
    verificationInPerson: {
      summary: [
        "You must show up **in person** at your police or sheriff’s office. They’ll take/confirm fingerprints and a photo."
      ],
      watchOuts: [
        "If you miss a required month, follow up immediately—**warrants** issue quickly."
      ],
      validationNote:
        "In-person process is set by [§ 12.1-32-15(7)](https://ndlegis.gov/cencode/t12-1c32.pdf) and explained in the AG **[Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf)** / **[FAQ](https://sexoffender.nd.gov/questions)**."
    },
    residencyPresence: {
      summary: [
        "Only **high-risk** registrants have a **500-foot** school **residency** buffer. Separate law limits **being on school property** for many registrants."
      ],
      watchOuts: [
        "Probation conditions can add stricter limits; always read your **judgment**."
      ],
      validationNote:
        "See [§ 12.1-32-15(13)](https://ndlegis.gov/cencode/t12-1c32.pdf) (residency) and [§ 12.1-20-25](https://ndlegis.gov/cencode/t12-1c20.pdf) (school-property presence). The AG’s **[FAQ](https://sexoffender.nd.gov/questions)** notes low/moderate risk housing near schools is not barred by statute."
    },
    employmentEducationInternet: {
      summary: [
        "Tell police **10 days before** starting or changing a job or school; report **terminations in 3 days**.",
        "Keep **online IDs** (emails/usernames) and **vehicle** info current."
      ],
      watchOuts: [
        "Colleges get notified under federal law; expect campus coordination."
      ],
      validationNote:
        "Operational rules are in the AG Procedures **[Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf)** and the AG **[Laws](https://sexoffender.nd.gov/laws)** page."
    },
    publicWebsiteExposure: {
      summary: [
        "ND’s site is **searchable** and updated in **real time**; some juvenile cases are withheld unless high-risk/lifetime."
      ],
      watchOuts: [
        "State law sets minimum disclosure; ND often posts broader info through policy."
      ],
      validationNote:
        "See disclosure framework in [§ 12.1-32-15(14)](https://ndlegis.gov/cencode/t12-1c32.pdf) and the AG search portals **[Search](https://sexoffender.nd.gov/)** / **[Offender Info](https://sexoffender.nd.gov/offender)** and **[Laws](https://sexoffender.nd.gov/laws)**."
    },
    travelInterstate: {
      summary: [
        "Visitors/workers from out of state must register if staying **10 straight** overnights or **30** in a year.",
        "Moving? Give **10 days’ notice** and re-register within **3 days** in the new place."
      ],
      watchOuts: [
        "Keep proof of travel/move dates in case an officer asks."
      ],
      validationNote:
        "Thresholds and timing appear in the AG **[FAQ](https://sexoffender.nd.gov/questions)** and Procedures **[Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf)**."
    },
    visitingTraveling: {
      summary: [
        "If your trip is short, you may not trigger ND registration—but track nights carefully.",
        "Ask the **local sheriff/police** if unsure."
      ],
      watchOuts: [
        "Crossing the **10/30-night** line without registering risks a **felony**."
      ],
      validationNote:
        "Visitor rules are summarized by the AG **[FAQ](https://sexoffender.nd.gov/questions)**; local contacts: AG/BCI **[Contact](https://sexoffender.nd.gov/contact)**."
    },
    complianceEnforcement: {
      summary: [
        "Violations are a **Class C felony** with a **mandatory** jail term and probation; parole/probation is **revoked** if you miss initial registration."
      ],
      watchOuts: [
        "Homeless non-reporting every **3 days** is prima facie proof of a violation."
      ],
      validationNote:
        "See [§ 12.1-32-15(9)–(10)](https://ndlegis.gov/cencode/t12-1c32.pdf) and AG **[Offender Info](https://sexoffender.nd.gov/offender)** on monitoring."
    },
    reliefPaths: {
      summary: [
        "**Legacy** relief is possible if pre-1999 registration is no longer mandatory. A **new petition** path for low-risk after **7 years** was **introduced** in 2025 but **not enacted** yet."
      ],
      watchOuts: [
        "Check session status before filing; bills can change mid-year."
      ],
      validationNote:
        "See [§ 12.1-32-15(17)](https://ndlegis.gov/cencode/t12-1c32.pdf) and the 2025 draft **[§ 12.1-32-15.1 bill](https://ndlegis.gov/assembly/69-2025/regular/documents/25-0275-02000.pdf)**."
    },
    specialPopulations: {
      summary: [
        "Juveniles can be required to register; disclosure depends on risk and necessity. High-risk have extra **residence** limits and more public notice."
      ],
      watchOuts: [
        "K-12 presence limits apply separately from housing rules."
      ],
      validationNote:
        "See [§ 12.1-32-15(13), (16)](https://ndlegis.gov/cencode/t12-1c32.pdf) and school-presence law at **[§ 12.1-20-25](https://ndlegis.gov/cencode/t12-1c20.pdf)**."
    },
    checklistsScripts: {
      summary: [
        "Use the checklists to hit the **3-day** and **10-day** rules, capture online IDs/vehicles, and plan **21-day** international notices."
      ],
      validationNote:
        "Timing and content from [§ 12.1-32-15](https://ndlegis.gov/cencode/t12-1c32.pdf), AG **[Manual](https://sexoffender.nd.gov/Content/Documents/OffenderRegistrationManual.pdf)**, and AG **[FAQ](https://sexoffender.nd.gov/questions)**."
    }
  }
};