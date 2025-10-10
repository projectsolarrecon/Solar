export default {
  state: "Missouri",
  lastReviewedUTC: "2025-10-10T00:00:00Z",

  atAGlance: {
    mustRegister: "People convicted, adjudicated, or otherwise required to register for qualifying offenses listed in [RSMo § 589.414](https://revisor.mo.gov/main/OneSection.aspx?section=589.414) must register under [RSMo § 589.400](https://revisor.mo.gov/main/OneSection.aspx?section=589.400).",
    initialDeadline: "Register **within 3 business days** of adjudication, release, or placement on probation; see [RSMo § 589.400.2](https://revisor.mo.gov/main/OneSection.aspx?section=589.400).",
    verificationCadence: "Tier I **annually** (birth month); Tier II **semiannually** (birth month and 6 months later); Tier III **every 90 days**; see [RSMo § 589.414.5–.7](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
    primaryMethod: "**In person** with the chief law enforcement officer for the county/city of residence; changes and verifications are in-person per [RSMo § 589.414](https://repositor.mo.gov/main/OneSection.aspx?section=589.414).",
    topGotchas: [
      "All changes (name, residence, employment, school, vehicles, temporary lodging, **online identifiers**) must be reported **within 3 business days**; new online identifiers must be reported **before use**. See [RSMo § 589.414](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
      "Visitors/workers/students: **7-day** rule triggers duties even without residence; see [RSMo § 589.400.1(8), .11](https://revisor.mo.gov/main/OneSection.aspx?section=589.400).",
      "Presence and residency buffers: 500 ft school/child-area presence bans ([RSMo §§ 566.148–.150](https://revisor.mo.gov/main/OneChapter.aspx?chapter=566)) and **1,000 ft** residency ban ([RSMo § 566.147](https://revisor.mo.gov/main/OneSection.aspx?section=566.147)); measured **property line to property line** (State v. McCord).",
      "Failure to register: first = **Class A misdemeanor**, second = **Class D felony**, **third offense 10–30 years**; see [RSMo § 589.425](https://revisor.mo.gov/main/OneSection.aspx?section=589.425).",
      "Halloween sign mandate in § 589.426.1(3) was **enjoined** as compelled speech (Sanderson v. Bailey), but other Halloween restrictions remain; see [RSMo § 589.426](https://revisor.mo.gov/main/OneSection.aspx?section=589.426).",
      "Public website shows tier, addresses, photos; **juvenile adjudications are exempt** from public posting; see [RSMo § 43.650](https://revisor.mo.gov/main/OneSection.aspx?section=43.650).",
      "If you have **ever** been required to register under federal SORNA, Missouri may require **lifetime** registration despite tier timelines; see note in [RSMo § 589.400](https://revisor.mo.gov/main/OneSection.aspx?section=589.400)."
    ],
    officialLinks: {
      statuteIndex: "https://revisor.mo.gov/main/OneChapter.aspx?chapter=589",
      statePoliceRegistry: "https://www.mshp.dps.missouri.gov/CJ38/search.jsp",
      formsPortal: "https://www.mshp.dps.missouri.gov/MSHPWeb/PatrolDivisions/CRID/SOR/forms.html",
      publicWebsite: "https://www.mshp.dps.missouri.gov/CJ38/search.jsp"
    }
  },

  whoMustRegister: "Covered persons include those adjudicated for offenses referenced in [RSMo § 589.414](https://revisor.mo.gov/main/OneSection.aspx?section=589.414); persons committed as criminal sexual psychopaths; persons found not guilty by reason of mental disease/defect for covered offenses; Missouri residents with comparable out-of-state/federal/tribal/military offenses or registration duties; and certain nonresidents working or studying in Missouri. See [RSMo § 589.400.1, .8](https://revisor.mo.gov/main/OneSection.aspx?section=589.400).",

  deadlinesReporting: [
    "Initial registration: **within 3 business days** of adjudication, release, or probation placement. [RSMo § 589.400.2](https://revisor.mo.gov/main/OneSection.aspx?section=589.400).",
    "Verification cadence: Tier I **annually**, Tier II **semiannually**, Tier III **every 90 days** (in person). [RSMo § 589.414.5–.7](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
    "Changes to name, residence, employment/volunteer, or student status: **appear in person within 3 business days**. [RSMo § 589.414.1](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
    "Changes to vehicles, temporary lodging/residence, phone numbers, and **internet identifiers**: **notify within 3 business days**; **new online identifiers must be reported before use**. [RSMo § 589.414.2, .9](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
    "Moves to another county/state: notify both prior and new jurisdictions **within 3 business days** and appear in person. [RSMo § 589.414.4](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
    "Part-time workers/students in MO (>7 days in 12 months): must **register** where working/attending. [RSMo § 589.414.8](https://revisor.mo.gov/main/OneSection.aspx?section=589.414)."
  ],

  verificationInPerson: [
    "All verifications are **in person** with the chief law enforcement official. [RSMo § 589.414](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
    "Tier I reports **annually** in birth month; Tier II **semiannually** (birth month + 6 months); Tier III **every 90 days**. [RSMo § 589.414.5–.7](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
    "Provide required identification, documentation, and updates (vehicles, temporary lodging/residence). [RSMo § 589.407; § 589.414.2](https://revisor.mo.gov/main/OneSection.aspx?section=589.407)."
  ],

  residencyPresence: "Residency: certain offenders may **not** reside within **1,000 feet** of a school, child-care facility, or a victim’s residence; violations are criminal. Measurement is **property line to property line**. See [RSMo § 566.147](https://revisor.mo.gov/main/OneSection.aspx?section=566.147) and State v. McCord noted on that page. Presence: additional bans **within 500 feet** of child-care facilities, schools, and specified child-focused places (parks, pools, athletic complexes, museums, nature centers) with narrow exceptions and permission procedures for parents/guardians. See [RSMo §§ 566.148–.150](https://revisor.mo.gov/main/OneChapter.aspx?chapter=566).",

  employmentEducationInternet: [
    "Report changes in **employment** (including volunteer/intern) and **student status** **within 3 business days**, in person. [RSMo § 589.414.1](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
    "Report **email/IM/usernames/other online identifiers** within **3 business days** and **before use** for new identifiers. [RSMo § 589.414.2(4), .9](https://revisor.mo.gov/main/OneSection.aspx?section=589.414); “online identifier” defined at [RSMo § 43.651](https://revisor.mo.gov/main/OneSection.aspx?section=43.651).",
    "Public website may include tier, addresses, photo, vehicles; online identifiers are **not displayed** but are searchable by exact identifier. [RSMo § 43.650.4(7),(10)](https://revisor.mo.gov/main/OneSection.aspx?section=43.650).",
    "If you **work/attend school** in Missouri (even part-time >7 days in 12 months), you must **register** with the local chief law enforcement officer where you work/attend. [RSMo § 589.414.8](https://revisor.mo.gov/main/OneSection.aspx?section=589.414)."
  ],

  publicWebsiteExposure: [
    "MSHP public site lists name/aliases, DOB, physical description, residence/temporary/work/school addresses, photos, vehicles, qualifying offenses and **tier**, release dates, and compliance status. [RSMo § 43.650.4](https://revisor.mo.gov/main/OneSection.aspx?section=43.650).",
    "**Juveniles adjudicated** under § 589.400.1(5) are **exempt** from public notification. [RSMo § 43.650.5](https://revisor.mo.gov/main/OneSection.aspx?section=43.650).",
    "Registration materials (statements, photos, fingerprints) are **not public records**, with limited law-enforcement disclosure. [RSMo § 589.417](https://revisor.mo.gov/main/OneSection.aspx?section=589.417)."
  ],

  travelInterstate: [
    "If changing residence to a different Missouri county or **another state/territory/federal/tribal jurisdiction**, notify both the former and new jurisdictions **within 3 business days** and appear in person. [RSMo § 589.414.4](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
    "Nonresidents who work or attend school in Missouri must register **for the duration** of work/school if present more than **7 days** in any 12 months. [RSMo § 589.400.1(8)](https://revisor.mo.gov/main/OneSection.aspx?section=589.400)."
  ],

  visitingTraveling: [
    "If away from home, provide **temporary lodging/residence** information within **3 business days**. [RSMo § 589.414.2(2)-(3)](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
    "Out-of-state registrants with a **temporary residence** in Missouri for **>7 days** in any 12 months must register for the duration of the stay. [RSMo § 589.400.11](https://revisor.mo.gov/main/OneSection.aspx?section=589.400)."
  ],

  complianceEnforcement: "Failure to meet any requirement of §§ 589.400–.425 is a **Class A misdemeanor**; a **second** or subsequent violation is a **Class D felony**; a **third** failure-to-register offense carries **10–30 years** imprisonment. See [RSMo § 589.425](https://revisor.mo.gov/main/OneSection.aspx?section=589.425). Halloween restrictions in [RSMo § 589.426](https://revisor.mo.gov/main/OneSection.aspx?section=589.426) remain except the **sign-posting** mandate, which was enjoined (Sanderson v. Bailey).",

  reliefPaths: [
    "Standard durations: Tier I **15 years**, Tier II **25 years**, Tier III **life**. Clean-record reduction available for Tier I (**–5 years**) and certain juvenile Tier III. See [RSMo § 589.400.4–.5](https://revisor.mo.gov/main/OneSection.aspx?section=589.400).",
    "Petition for removal: file in the circuit court where the offense occurred after **10 years (Tier I)**, **25 years (Tier II)**, or **25 years for juvenile Tier III**, meeting all criteria (no disqualifying offenses, completed supervision and approved treatment, not a current threat). See [RSMo § 589.401](https://revisor.mo.gov/main/OneSection.aspx?section=589.401).",
    "Important: If the person **has been** required to register under federal SORNA, Missouri may require **lifetime** registration notwithstanding tier timelines (Smith v. St. Louis County Police)."
  ],

  specialPopulations: [
    "Juveniles: certain juveniles must register, but **public posting** is barred. See [RSMo § 589.400.1(5)](https://revisor.mo.gov/main/OneSection.aspx?section=589.400) and [RSMo § 43.650.5](https://revisor.mo.gov/main/OneSection.aspx?section=43.650).",
    "Parents/guardians who are registrants: may obtain **written permission** for limited presence on school property under procedures in [RSMo § 566.149](https://revisor.mo.gov/main/OneSection.aspx?section=566.149).",
    "Probation/parole: officers must notify law enforcement about expected moves; duties to register remain with the person. [RSMo § 589.415](https://revisor.mo.gov/main/OneSection.aspx?section=589.415)."
  ],

  costs: [
    "Initial registration fee: up to **$10**. [RSMo § 589.400.6](https://revisor.mo.gov/main/OneSection.aspx?section=589.400).",
    "Per change processing fee: **$5** after initial registration. [RSMo § 589.400.7](https://revisor.mo.gov/main/OneSection.aspx?section=589.400)."
  ],

  recentChangesLitigation: [
    { type: "case", name: "Smith v. St. Louis County Police, 659 S.W.3d 895", court: "Supreme Court of Missouri (en banc)", date: "2023-05-23", holding: "If a person has been required to register under federal SORNA, Missouri law mandates lifetime registration even if federal duty has ended.", link: "https://revisor.mo.gov/main/OneSection.aspx?section=589.400" },
    { type: "case", name: "Sanderson v. Bailey, 753 F. Supp. 3d 773", court: "E.D. Mo.", date: "2024-10-02", holding: "Halloween **sign-posting** requirement in § 589.426.1(3) violates First Amendment; other subsections unaffected.", link: "https://www.govinfo.gov/content/pkg/USCOURTS-moed-4_23-cv-01242/pdf/USCOURTS-moed-4_23-cv-01242-2.pdf" },
    { type: "case", name: "State v. McCord, 621 S.W.3d 496", court: "Supreme Court of Missouri (en banc)", date: "2021-04-06", holding: "Residency distance under § 566.147 measured **property line to property line**.", link: "https://law.justia.com/cases/missouri/supreme-court/2021/sc98546.html" },
    { type: "statute", bill: "SB 655 (2018)", session: "99th General Assembly", effective: "2018-08-28", summary: "Adopted three-tier system; set verification cadence; created removal petition process and clean-record reduction.", link: "https://www.senate.mo.gov/18info/pdf-bill/tat/SB655.pdf" }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Confirm qualifying offense is listed in [§ 589.414](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
      "Register **within 3 business days** of adjudication/release/probation under [§ 589.400.2](https://revisor.mo.gov/main/OneSection.aspx?section=589.400).",
      "Bring ID, documents to substantiate info, and provide fingerprints/photo/DNA as required in [§ 589.407](https://revisor.mo.gov/main/OneSection.aspx?section=589.407).",
      "Record your **tier** and verification cadence from [§ 589.414.5–.7](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
      "List vehicles and **temporary lodging/residence** info per [§ 589.414.2](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
      "Inventory **online identifiers** and report new ones **before use** under [§ 589.414.9](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
      "Check residency/presence buffers in [§§ 566.147–.150](https://revisor.mo.gov/main/OneChapter.aspx?chapter=566).",
      "Save receipts/copies and calendar next verification date."
    ],
    movingOutChecklist: [
      "Before moving counties/states, **appear and notify** current CLEO; notify new jurisdiction **within 3 business days**. [§ 589.414.4](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
      "Update vehicles, temporary lodging, phone numbers, and online identifiers per [§ 589.414.2, .9](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).",
      "If working/attending school across county lines, ensure concurrent registration per [§ 589.414.8](https://revisor.mo.gov/main/OneSection.aspx?section=589.414)."
    ],
    recordsRequestTemplate: "To: Missouri State Highway Patrol, Criminal Records & Identification Division — Sex Offender Registry; and [Local CLEO].\\n\\nSubject: Request for Registry Records and Verification Receipts\\n\\nI am registered under RSMo §§ 589.400–.425. Please provide copies of my registration forms, verification receipts, tier classification, and any compliance notes held by your agency pursuant to [RSMo § 589.417](https://revisor.mo.gov/main/OneSection.aspx?section=589.417). I consent to release to me and request confirmation of my next verification due date under [RSMo § 589.414](https://revisor.mo.gov/main/OneSection.aspx?section=589.414).\\n\\nName / DOB / Last 4 SSN / Current Address / Phone\\n\\nSignature / Date",
    reliefPetitionOutline: "Caption in circuit court of offense county (§ 589.401). Parties: Petitioner vs. Missouri State Highway Patrol and CLEO. Allegations: offense, **tier**, dates of adjudication and initial registration; certify elapsed time (Tier I 10y, Tier II 25y, juvenile Tier III 25y) under [§ 589.401.4](https://revisor.mo.gov/main/OneSection.aspx?section=589.401). Attach: fingerprints ([§ 589.401.5(6)](https://revisor.mo.gov/main/OneSection.aspx?section=589.401)), proof of completed supervision and approved treatment ([§ 589.401.11(3)-(4)](https://revisor.mo.gov/main/OneSection.aspx?section=589.401)), and clean-record criteria. Serve prosecutor and notify victim ([§ 589.401.8–.11](https://revisor.mo.gov/main/OneSection.aspx?section=589.401)). Prayer: order removing name from registry and directing MSHP/CLEO to update records. Note: Smith v. St. Louis County Police may bar removal if petitioner **has been** required to register under federal SORNA (see note in [§ 589.400](https://revisor.mo.gov/main/OneSection.aspx?section=589.400))."
  },

  resources: {
    legalAid: [
      { name: "Missouri State Public Defender", link: "https://publicdefender.mo.gov/" },
      { name: "Legal Services of Eastern Missouri", link: "https://lsem.org/" },
      { name: "Mid-Missouri Legal Services", link: "https://www.mmls.org/" }
    ],
    advocacy: [
      { name: "NARSOL State Wiki – Missouri (background resource)", link: "https://statewiki.narsol.org/doku.php?id=missouri" }
    ],
    reentry: [
      { name: "Missouri DOC Reentry Services", link: "https://doc.mo.gov/programs/reentry" },
      { name: "MSHP Sex Offender Registry – Facts & FAQs", link: "https://www.mshp.dps.missouri.gov/CJ38/faq.jsp" }
    ]
  },

  citations: [
    { label: "RSMo § 589.400 (Who/when; durations; clean record; nonresident/temporary rules; fees)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=589.400" },
    { label: "RSMo § 589.401 (Removal petition process)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=589.401" },
    { label: "RSMo § 589.407 (Registration form & biometrics)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=589.407" },
    { label: "RSMo § 589.414 (Change notifications; cadence; online IDs; work/school registration)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=589.414" },
    { label: "RSMo § 589.415 (Probation/parole notification duties)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=589.415" },
    { label: "RSMo § 589.417 (Registry records not public)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=589.417" },
    { label: "RSMo § 589.425 (Failure-to-register penalties)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=589.425" },
    { label: "RSMo § 589.426 (Halloween restrictions; case note)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=589.426" },
    { label: "RSMo § 43.650 (Public website contents; juvenile exemption)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=43.650" },
    { label: "RSMo § 43.651 (Online identifier definition)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=43.651" },
    { label: "RSMo § 566.147 (Residency 1,000 ft; McCord note)", url: "https://revisor.mo.gov/main/OneSection.aspx?section=566.147" },
    { label: "RSMo § 566.148 (500-ft child-care presence/loitering)", url: "https://repositor.mo.gov/main/OneSection.aspx?section=566.148" },
    { label: "RSMo § 566.149 (500-ft school presence; parent permission procedure)", url: "https://repositor.mo.gov/main/OneSection.aspx?section=566.149" },
    { label: "RSMo § 566.150 (500-ft parks/pools/child venues presence)", url: "https://repositor.mo.gov/main/OneSection.aspx?section=566.150" },
    { label: "MSHP Registry Search", url: "https://www.mshp.dps.missouri.gov/CJ38/search.jsp" },
    { label: "MSHP Registry Forms", url: "https://www.mshp.dps.missouri.gov/MSHPWeb/PatrolDivisions/CRID/SOR/forms.html" }
  ],

  badges: {
    residencyZones: true,
    lifetimePossible: true,
    verificationQuarterly: true
  },

  plainLanguage: {
    atAGlance: {
      summary: [
        "Most people with covered sex offenses must register within **3 business days**.",
        "How often you check in depends on your **tier** (1 = yearly, 2 = twice a year, 3 = every 90 days).",
        "Report moves, jobs/school changes, **temporary stays**, vehicles, phones, and **online usernames** fast."
      ],
      watchOuts: [
        "Missouri uses a **7-day** rule for visitors, workers, and students.",
      "Some buffers (schools/parks) are **distance-based** and strictly enforced.",
      "If you ever had a **federal SORNA** duty, Missouri may keep you on **for life**."
    ],
    validationNote: "Everything here tracks the Missouri statutes we link to, especially [§§ 589.400–.426](https://revisor.mo.gov/main/OneChapterRng.aspx?tb1=589.400+to+589.425), [§ 43.650](https://revisor.mo.gov/main/OneSection.aspx?section=43.650), and [§§ 566.147–.150](https://revisor.mo.gov/main/OneChapter.aspx?chapter=566).",
    reviewedUTC: "2025-10-10T00:00:00Z"
  },
  whoMustRegister: {
    summary: [
      "If your offense is on Missouri’s list or comparable to it, you must register.",
      "Out-of-state convictions and federal/tribal/military cases also count."
    ],
    watchOuts: [
      "If another state or the feds said you had to register, Missouri likely will too."
    ],
    validationNote: "See [§ 589.400.1](https://revisor.mo.gov/main/OneSection.aspx?section=589.400) and the offense cross-references in [§ 589.414](https://revisor.mo.gov/main/OneSection.aspx?section=589.414)."
  },
  deadlinesReporting: {
    summary: [
      "Initial sign-up and future changes are due in **3 business days**.",
      "Tier check-ins: Yearly (Tier I), twice yearly (Tier II), every 90 days (Tier III).",
      "Report new usernames **before you use them**."
    ],
    watchOuts: [
      "Moving counties or states needs **in-person** notices to both old and new places.",
      "Temporary stays and hotel info are reportable."
    ],
    validationNote: "Deadlines are in [§ 589.400.2](https://revisor.mo.gov/main/OneSection.aspx?section=589.400) and [§ 589.414](https://revisor.mo.gov/main/OneSection.aspx?section=589.414)."
  },
  verificationInPerson: {
    summary: [
      "All check-ins are **in person** with your county/city police or sheriff.",
      "Bring ID and documents; keep receipt copies."
    ],
    watchOuts: [
      "Missing a check-in can lead to criminal charges."
    ],
    validationNote: "See [§ 589.414.5–.7](https://revisor.mo.gov/main/OneSection.aspx?section=589.414)."
  },
  residencyPresence: {
    summary: [
      "Some people may not **live** within 1,000 feet of schools, daycares, or a victim’s home.",
      "Some may not **be present/loiter** within 500 feet of schools, daycares, parks, pools, and similar places."
    ],
    watchOuts: [
      "Distance is measured **property line to property line**.",
      "Parents/guardians need **written permission** to go onto school grounds."
    ],
    validationNote: "See [§ 566.147](https://revisor.mo.gov/main/OneSection.aspx?section=566.147) and [§§ 566.148–.150](https://revisor.mo.gov/main/OneChapter.aspx?chapter=566)."
  },
  employmentEducationInternet: {
    summary: [
      "Report job/volunteer and school changes within **3 business days**.",
      "Report **emails, usernames, and other online IDs** and add new ones **before use**."
    ],
    watchOuts: [
      "If you **work or study** in Missouri >7 days in a year, you must **register** there too."
    ],
    validationNote: "See [§ 589.414.1–.2, .8–.9](https://revisor.mo.gov/main/OneSection.aspx?section=589.414) and online ID definition at [§ 43.651](https://revisor.mo.gov/main/OneSection.aspx?section=43.651)."
  },
  publicWebsiteExposure: {
    summary: [
      "Missouri’s website shows your tier, addresses, photo, vehicles, and offenses.",
      "Juveniles are **not** posted online."
    ],
    watchOuts: [
      "**Online identifiers** aren’t displayed but can be searched by exact match."
    ],
    validationNote: "Public site contents and juvenile exemption are in [§ 43.650](https://revisor.mo.gov/main/OneSection.aspx?section=43.650); records privacy is in [§ 589.417](https://revisor.mo.gov/main/OneSection.aspx?section=589.417)."
  },
  travelInterstate: {
    summary: [
      "Tell both old and new jurisdictions within **3 business days** when moving.",
      "Working or studying in Missouri (even part-time) creates a **local duty to register**."
    ],
    watchOuts: [
      "Plan ahead—some states require **pre-arrival** appointments."
    ],
    validationNote: "See [§ 589.414.4, .8](https://revisor.mo.gov/main/OneSection.aspx?section=589.414) and [§ 589.400.1(8)](https://revisor.mo.gov/main/OneSection.aspx?section=589.400)."
  },
  visitingTraveling: {
    summary: [
      "Report **temporary lodging/residence** info within **3 business days**.",
      "Out-of-state registrants staying in Missouri **>7 days** in a year must register."
    ],
    watchOuts: [
      "Hotel stays can count; keep itineraries and receipts."
    ],
    validationNote: "See [§ 589.414.2](https://revisor.mo.gov/main/OneSection.aspx?section=589.414) and [§ 589.400.11](https://revisor.mo.gov/main/OneSection.aspx?section=589.400)."
  },
  complianceEnforcement: {
    summary: [
      "First miss: **Class A misdemeanor**; second: **Class D felony**; third: **10–30 years**.",
      "Halloween **sign** rule blocked, but other Halloween limits apply."
    ],
    watchOuts: [
      "Courts and probation can add conditions; local rules may be stricter."
    ],
    validationNote: "Penalties: [§ 589.425](https://revisor.mo.gov/main/OneSection.aspx?section=589.425). Halloween: [§ 589.426](https://revisor.mo.gov/main/OneSection.aspx?section=589.426) and Sanderson v. Bailey."
  },
  reliefPaths: {
    summary: [
      "Tiers set your basic time: 15/25/life; some Tier I get **–5 years** with a clean record.",
      "File a **petition** for removal once eligible and criteria are met."
    ],
    watchOuts: [
      "If you **ever** had a federal SORNA duty, Missouri may require **lifetime** registration.",
      "Court can deny if any criteria or notices aren’t met."
    ],
    validationNote: "See [§ 589.400.4–.5](https://revisor.mo.gov/main/OneSection.aspx?section=589.400) and petition steps in [§ 589.401](https://revisor.mo.gov/main/OneSection.aspx?section=589.401)."
  },
  specialPopulations: {
    summary: [
      "Some juveniles must register, but they are **not** listed online.",
      "Parents/guardians can request **written permission** for school visits."
    ],
    watchOuts: [
      "Probation/parole must notify moves, but you still must **personally** comply."
    ],
    validationNote: "See [§ 589.400.1(5)](https://revisor.mo.gov/main/OneSection.aspx?section=589.400), [§ 43.650.5](https://revisor.mo.gov/main/OneSection.aspx?section=43.650), and [§ 566.149](https://revisor.mo.gov/main/OneSection.aspx?section=566.149)."
  },
  checklistsScripts: {
    summary: [
      "Use the arrival/move checklists to hit **3-day** deadlines and verify your **tier cadence**.",
      "The petition outline tracks **what courts expect** and common exhibits."
    ],
    validationNote: "Templates align to statute text and MSHP practice (see [§§ 589.400–.414](https://revisor.mo.gov/main/OneChapterRng.aspx?tb1=589.400+to+589.425) and MSHP forms)."
  }
}
};