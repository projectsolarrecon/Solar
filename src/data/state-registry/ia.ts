export default {
  state: "Iowa",
  lastReviewedUTC: "2025-10-14T05:00:00Z",

  atAGlance: {
    mustRegister:
      "Adults and qualifying juveniles convicted of a tier I, II, or III sex offense — and anyone required to register elsewhere who **resides, works, or attends school** in Iowa — must register with the sheriff where they live, work, or study. See [Iowa Code §692A.103](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-103/).",
    initialDeadline:
      "Register **in person within 5 business days** of becoming required to register or upon any change in residence, employment, student status, or other relevant information. See [§692A.104](https://www.legis.iowa.gov/docs/code/692A.104.pdf).",
    verificationCadence:
      "Tier I: **annual**; Tier II: **semiannual**; Tier III: **quarterly**, all **in person** with the county sheriff. See [§692A.108](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-108/).",
    primaryMethod:
      "Registration and verification are **in person at the county sheriff**; public searching is via the state’s online registry. See [DPS SOR site](https://www.iowasexoffender.gov/).",
    topGotchas: [
      "Only **5 business days** to report most changes (residence, employment, school, many other data). [§692A.104](https://www.legis.iowa.gov/docs/code/692A.104.pdf)",
      "If away from your principal residence **>5 days**, you must report the **temporary lodging** location and dates **within 5 business days**. [§692A.105](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-105/)",
      "Tier rules set **in-person** verification frequency (up to **quarterly** for Tier III). [§692A.108](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-108/)",
      "Some persons with offenses against minors face **2,000-ft residency restrictions** from schools/child care facilities. [§692A.114](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-114/)",
      "Violations carry **criminal charges** (often aggravated misdemeanor, then **Class D felony**), with enhanced penalties in some circumstances. [§692A.111](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-111/)"
    ],
    officialLinks: {
      statuteIndex: "https://www.legis.iowa.gov/docs/code/692A.pdf",
      adminRules: "https://www.legis.iowa.gov/docs/iac/rule/11-22-2006.661.83.3.pdf",
      statePoliceRegistry: "https://dps.iowa.gov/sections/investigative-operations/sex-offender-registry",
      formsPortal: "https://www.iowasexoffender.gov/faq/faqlist",
      publicWebsite: "https://www.iowasexoffender.gov/search/basicsearch"
    }
  },

  whoMustRegister:
    "Anyone convicted of a **tier I, II, or III offense** or required to register in another jurisdiction who **resides, is employed, or attends school** in Iowa must register; certain juveniles are included unless waived or modified by court order. See [§692A.103(1)–(5)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-103/).",

  deadlinesReporting: [
    "Initial and most change events: **within 5 business days in person** with the county sheriff. [§692A.104(1)–(3)](https://www.legis.iowa.gov/docs/code/692A.104.pdf)",
    "Temporary lodging away from principal residence **>5 days**: report **within 5 business days** with location and dates. [§692A.105](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-105/)",
    "Move to another jurisdiction: notify Iowa sheriff **within 5 business days**, and **register in the new jurisdiction within 5 business days** if required there. [§692A.104(5)](https://www.legis.iowa.gov/docs/code/692A.104.pdf)"
  ],

  verificationInPerson: [
    "Verification is **in person** with the sheriff where the **principal residence** is maintained. [§692A.104(4)](https://www.legis.iowa.gov/docs/code/692A.104.pdf)",
    "Frequency by tier: **annual (Tier I)**, **semiannual (Tier II)**, **quarterly (Tier III)**. [§692A.108](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-108/)"
  ],

  residencyPresence:
    "Persons convicted of an **aggravated offense against a minor** may not **reside within 2,000 feet** of a school or child care facility, subject to specific exceptions. See [§692A.114](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-114/) and federal case upholding the law, [Doe v. Miller](https://ecf.ca8.uscourts.gov/opndir/05/04/041568P.pdf).",

  employmentEducationInternet: [
    "Presence/loitering and **employment prohibitions** at places used primarily by minors (e.g., schools, child care, libraries, fairs/carnivals, arcades) apply to offenders with offenses against minors. See [§692A.113](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-113/).",
    "Employment and student information are collected; some details are **not posted online** but may be available to the public upon request at a sheriff’s office. See [§692A.121(2)(c), (5)(b)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-121/).",
    "Internet identifiers are part of registrant data and may be used for verification by the public through law enforcement; see [§692A.121(5)(a)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-121/)."
  ],

  publicWebsiteExposure: [
    "DPS must maintain a **public website** searchable by name, county, city, ZIP, and radius. Posted data include DOB, photos, physical description, residence, offense citation/text, and flags for residency/exclusion restrictions. [§692A.121(1)–(2)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-121/).",
    "Certain data are **withheld** online (e.g., employer name/address; school name/address; some juvenile exceptions), though more can be provided by sheriffs upon request. [§692A.121(2)(c), (5)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-121/).",
    "Public search portal: [Iowa Sex Offender Registry](https://www.iowasexoffender.gov/)."
  ],

  travelInterstate: [
    "If establishing **residence, employment, or student status in another jurisdiction**, the registrant must (1) notify the Iowa sheriff **within 5 business days** and (2) **register with the new jurisdiction within 5 business days** if required there. [§692A.104(5)](https://www.legis.iowa.gov/docs/code/692A.104.pdf).",
    "Duration continues while subject to Iowa’s requirements; time can be affected by violations or special sentences. [§692A.106](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-106/)."
  ],

  visitingTraveling: [
    "If away from the principal Iowa residence **more than 5 days**, registrant must report **temporary lodging** address and dates to the sheriff **within 5 business days** of the change. [§692A.105](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-105/).",
    "Non-Iowa registrants who **reside, work, or attend school** in Iowa must register here for the longer of Iowa’s or the other jurisdiction’s period. [§692A.103(1); §692A.106(8)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-103/)."
  ],

  complianceEnforcement:
    "Failure to comply with core duties (e.g., **§§692A.104, .105, .108, .112–.115**) is an **aggravated misdemeanor** for a first offense and a **Class D felony** for subsequent offenses; additional enhancements can apply. The court **may not defer** judgment or sentence for registry violations. See [§692A.111](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-111/).",

  reliefPaths: [
    "Courts may **modify (reduce) the registration period** on application if strict criteria are met. For requirements starting **before July 1, 2022**: possible at **2 years (Tier I)** or **5 years (Tier II/III)** with treatment completion, **low-risk assessment**, supervision stipulation, and other conditions. For starts **on/after July 1, 2022**: **10 years (Tier I)** — or **5 years** for a specified youthful Tier I offense — and **15 years (Tier II/III)**, plus the same prerequisites. See [§692A.128(2)–(3)](https://www.legis.iowa.gov/docs/code/692A.128.pdf).",
    "General duration is **10 years** unless otherwise provided; **lifetime** applies for sexually violent predators, aggravated offenses, repeaters, or special circumstances. Violations add **10 years**. See [§692A.106](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-106/).",
    "Iowa appellate decisions clarify modification standards (e.g., **Fortune v. State**, 957 N.W.2d 696 (Iowa 2021)). See summary and opinion at [Justia](https://law.justia.com/cases/iowa/supreme-court/2021/19-1721.html)."
  ],

  specialPopulations: [
    "Juveniles generally must register unless the **juvenile court waives, modifies, or suspends** the requirement under specified findings; different rules apply for certain forcible cases age 14+. See [§692A.103(3)–(5)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-103/).",
    "Persons with offenses against minors may face **exclusion zones and employment bans** at child-focused locations. See [§692A.113](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-113/).",
    "Residency restriction applies only to those convicted of an **aggravated offense against a minor**, with enumerated exceptions (e.g., established residence pre-2002). See [§692A.114](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-114/)."
  ],

  costs: [
    "**$25 annual fee** to the sheriff of principal residence; sheriff may allow time to pay, installments, or **waive**. [§692A.110(1)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-110/)",
    "A **civil penalty** is assessed at conviction for covered offenses (payable through the clerk). [§692A.110(2)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-110/)"
  ],

  recentChangesLitigation: [
    {
      type: "statute",
      bill: "Iowa Code §692A.128 (as amended 2022 & 2023)",
      session: "Acts 2022 ch. 1063; 2023 chs. 64 & 66",
      effective: "2022-07-01 (key changes), later technical updates in 2023",
      summary:
        "Significantly revised **modification timelines**: for requirements starting on/after 7/1/2022, Tier I generally after 10 years (5 years for a specific youthful offense), Tier II/III after 15 years; retains treatment/low-risk prerequisites and supervision stipulation.",
      link: "https://www.legis.iowa.gov/docs/code/692A.128.pdf"
    },
    {
      type: "case",
      name: "Doe v. Miller, 405 F.3d 700",
      court: "U.S. Court of Appeals, Eighth Circuit",
      date: "2005-04-29",
      holding:
        "Upheld Iowa’s **2,000-ft residency restriction** against constitutional challenges.",
      link: "https://ecf.ca8.uscourts.gov/opndir/05/04/041568P.pdf"
    },
    {
      type: "case",
      name: "Fortune v. State, 957 N.W.2d 696",
      court: "Iowa Supreme Court",
      date: "2021-04-16",
      holding:
        "Clarified standards for **modification** of registration obligations under §692A.128; error to deny by penalizing successful adjustment alone.",
      link: "https://law.justia.com/cases/iowa/supreme-court/2021/19-1721.html"
    },
    {
      type: "case",
      name: "Olsen v. State (modification challenges)",
      court: "Iowa appellate courts",
      date: "2024-06-28",
      holding:
        "Discussed strict statutory prerequisites for §692A.128 modification petitions after 2022 amendments.",
      link: "https://www.iowacourts.gov/courtcases/19764/embed/SupremeCourtOpinion"
    }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Within **5 business days**, register **in person** with the sheriff for each Iowa county where you **reside, work, or attend school**. Bring ID and required information. See [§692A.104](https://www.legis.iowa.gov/docs/code/692A.104.pdf).",
      "Ask the sheriff to confirm your **tier** and **verification frequency** and calendar the due dates. See [§692A.108](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-108/).",
      "Review **residency/exclusion** rules if your offense involved a minor. See [§692A.113](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-113/) and [§692A.114](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-114/).",
      "Create a change-report plan for **address, employment, school, vehicles, phone/email/internet identifiers** — report changes within **5 business days**. See [§692A.104(1)–(3)](https://www.legis.iowa.gov/docs/code/692A.104.pdf)."
    ],
    movingOutChecklist: [
      "Before moving, notify your Iowa sheriff **within 5 business days** of the new out-of-state residence/employment/school. [§692A.104(5)](https://www.legis.iowa.gov/docs/code/692A.104.pdf)",
      "After arrival, **register in the new state within 5 business days** if required there; Iowa will notify the new jurisdiction. [§692A.104(5)](https://www.legis.iowa.gov/docs/code/692A.104.pdf)",
      "Confirm whether Iowa places you on **inactive status** and whether the new state’s term is **longer** (if so, longer period controls). [§692A.106(7)–(8)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-106/)"
    ],
    recordsRequestTemplate:
      "Subject: Request for Registry Information — [Your Name]\n\nSheriff of [County],\n\nUnder [Iowa Code §692A.121(5)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-121/), please provide the **publicly available registry information** for: [Name, DOB or other identifier]. I understand no fee may be charged for this request. Please respond by email or advise how to inspect the county list under §692A.121(6).\n\nThank you,\n[Your Name]  •  [Contact]",
    reliefPetitionOutline:
      "Caption & Parties → Identify registrant and county of **principal residence**. [§692A.128(4)](https://www.legis.iowa.gov/docs/code/692A.128.pdf)\n\nJurisdiction & Venue → Cite **§692A.128** and filing in district court of principal residence.\n\nBackground → Conviction(s), tier, **initial registration date**, treatment completed.\n\nEligibility → Track the correct subsection:\n• Pre-7/1/2022 start: **2 years (Tier I)** / **5 years (Tier II/III)** elapsed; low-risk assessment; not incarcerated; **DOC supervision stipulation attached**. [§692A.128(2)](https://www.legis.iowa.gov/docs/code/692A.128.pdf)\n• Post-7/1/2022 start: **10 years (Tier I)** (or **5 years** for specified youthful offense) / **15 years (Tier II/III)**; plus treatment, low-risk, completion of supervision, stipulation, and clean record look-back. [§692A.128(3)](https://www.legis.iowa.gov/docs/code/692A.128.pdf)\n\nRelief Requested → Order **reducing registration period** and directing updates to DPS and sheriff. [§692A.128(7)](https://www.legis.iowa.gov/docs/code/692A.128.pdf)"
  },

  resources: {
    legalAid: [
      { name: "Iowa Legal Aid", link: "https://www.iowalegalaid.org/" },
      { name: "Iowa State Bar — Find a Lawyer", link: "https://www.iowabar.org/" }
    ],
    advocacy: [
      { name: "Iowa ACLU — Criminal Justice", link: "https://www.aclu-ia.org/" }
    ],
    reentry: [
      { name: "Iowa Department of Corrections — Reentry", link: "https://doc.iowa.gov/offender-reentry" },
      { name: "DPS Sex Offender Registry — Public Portal", link: "https://www.iowasexoffender.gov/" }
    ]
  },

  citations: [
    { label: "Iowa Code ch. 692A (Index PDF)", url: "https://www.legis.iowa.gov/docs/code/692A.pdf" },
    { label: "§692A.103 — Offenders required to register", url: "https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-103/" },
    { label: "§692A.104 — Registration process (5-day rules)", url: "https://www.legis.iowa.gov/docs/code/692A.104.pdf" },
    { label: "§692A.105 — Temporary lodging reporting", url: "https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-105/" },
    { label: "§692A.108 — Verification cadence by tier", url: "https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-108/" },
    { label: "§692A.111 — Failure to comply; penalties", url: "https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-111/" },
    { label: "§692A.113 — Exclusion zones & employment limits", url: "https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-113/" },
    { label: "§692A.114 — 2,000-ft residency restrictions", url: "https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-114/" },
    { label: "§692A.121 — Availability of records; website", url: "https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-121/" },
    { label: "§692A.106 — Duration; lifetime; tolling", url: "https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-106/" },
    { label: "§692A.110 — Fees and civil penalty", url: "https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-110/" },
    { label: "IAC 661—83.3 — Forms & procedures (DCI)", url: "https://www.legis.iowa.gov/docs/iac/rule/11-22-2006.661.83.3.pdf" },
    { label: "DPS Sex Offender Registry — Public Site", url: "https://www.iowasexoffender.gov/" },
    { label: "Doe v. Miller, 405 F.3d 700 (8th Cir. 2005)", url: "https://ecf.ca8.uscourts.gov/opndir/05/04/041568P.pdf" },
    { label: "Fortune v. State, 957 N.W.2d 696 (Iowa 2021)", url: "https://law.justia.com/cases/iowa/supreme-court/2021/19-1721.html" },
    { label: "Legislative Guide to Sex Offender Registry Law (overview)", url: "https://www.legis.iowa.gov/docs/publications/LG/12357.pdf" },
    { label: "SOR FAQ (DPS) — 5-day and verification pointers", url: "https://www.iowasexoffender.gov/faq/faqlist" }
  ],

  badges: {
    residencyZones: true,
    lifetimePossible: true,
    verificationQuarterly: true
  },

  highlights: {
    residency: "Local governments in Iowa **may not add stricter residency limits**; the state law fully governs where registrants can live. Those convicted of an aggravated offense against a minor cannot **reside within 2,000 feet** of a school or child care facility, with narrow exceptions (e.g., pre-2002 residence, hospital care). [Iowa Code §692A.114](https://www.legis.iowa.gov/docs/code/692A.114.pdf)",
    presence: "Offenders with crimes involving minors face **state-level exclusion and loitering bans** at child-focused places like schools, parks, libraries, and fairs; cities and counties **cannot expand these zones** beyond the statute. [Iowa Code §692A.113](https://www.legis.iowa.gov/docs/code/692A.113.pdf)",
    duration: "Registration typically lasts **10 years**, but can be **lifetime** for sexually violent predators, repeat offenses, or aggravated crimes; violations can *extend by 10 years*. Duration is set by offense type, not tier. [Iowa Code §692A.106](https://www.legis.iowa.gov/docs/code/692A.106.pdf)",
    tiering: "Tiers affect only **verification frequency** and **modification eligibility**—not duty scope or duration. Tier I verifies annually, Tier II every six months, Tier III quarterly; higher tiers must also wait longer before seeking early termination under §692A.128. [Iowa Code §692A.108](https://www.legis.iowa.gov/docs/code/692A.108.pdf)"
  },

  plainLanguage: {
    atAGlance: {
      summary: [
        "Iowa moves fast: most things must be done **within 5 business days** and **in person** at the sheriff’s office.",
        "Your **tier** controls how often you must show up (up to **quarterly**).",
        "Some with offenses against minors have **2,000-ft no-live zones** near schools/child care."
      ],
      watchOuts: [
        "If you’ll be away from home **more than 5 days**, Iowa treats that as **temporary lodging** you must report.",
        "Missing a deadline can mean **criminal charges** and **extra years** on the registry."
      ],
      validationNote:
        "See the registration and change-report rules in [§692A.104](https://www.legis.iowa.gov/docs/code/692A.104.pdf), verification in [§692A.108](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-108/), website rules in [§692A.121](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-121/), and residency limits in [§692A.114](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-114/).",
      reviewedUTC: "2025-10-14T05:00:00Z"
    },
    whoMustRegister: {
      summary: [
        "If you **live, work, or go to school** in Iowa and have a qualifying conviction (or must register elsewhere), you must register here too.",
        "Some juveniles must register unless a court **modifies** or **waives** it."
      ],
      watchOuts: ["Out-of-state registrants who come to Iowa are covered."],
      validationNote:
        "See who must register in [§692A.103](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-103/)."
    },
    deadlinesReporting: {
      summary: [
        "Register and report changes **within 5 business days**.",
        "Report **temporary lodging** if you’ll be gone **>5 days**.",
        "Moving out of Iowa? **Tell Iowa** and **register in the new state** — both within **5 business days**."
      ],
      watchOuts: [
        "‘Business days’ skip weekends/holidays; don’t wait until day 5.",
        "Keep proof of your in-person visit (receipt, card, or signed form)."
      ],
      validationNote:
        "Deadlines: [§692A.104](https://www.legis.iowa.gov/docs/code/692A.104.pdf) (5-day registration/change reporting) and [§692A.105](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-105/) (temporary lodging)."
    },
    verificationInPerson: {
      summary: [
        "Go to the **sheriff** where your **principal residence** is.",
        "Frequency: **annual (Tier I)**, **every 6 months (Tier II)**, **every 3 months (Tier III)**."
      ],
      watchOuts: ["Missing a verification date is a **crime** in Iowa."],
      validationNote:
        "See in-person verification and cadence in [§692A.108](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-108/) and location rule in [§692A.104(4)](https://www.legis.iowa.gov/docs/code/692A.104.pdf)."
    },
    residencyPresence: {
      summary: [
        "Some people can’t **live within 2,000 feet** of a school or child care facility.",
        "There are limited **exceptions** (e.g., existing residence before 2002, hospitalization)."
      ],
      watchOuts: [
        "Local sheriffs may have **maps/tools**; always confirm before signing a lease.",
        "Courts have **upheld** the restriction."
      ],
      validationNote:
        "Residency rules: [§692A.114](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-114/); federal upholding in [Doe v. Miller](https://ecf.ca8.uscourts.gov/opndir/05/04/041568P.pdf)."
    },
    employmentEducationInternet: {
      summary: [
        "If your offense involved a minor, there are **exclusion zones** and **job bans** at places used by kids.",
        "Your employer and school info is collected; some is not posted online."
      ],
      watchOuts: [
        "Even when not online, employers/schools may be disclosed via sheriff requests.",
        "You may need to provide **internet identifiers**."
      ],
      validationNote:
        "See exclusion/employment rules in [§692A.113](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-113/) and public-facing disclosures in [§692A.121](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-121/)."
    },
    publicWebsiteExposure: {
      summary: [
        "Iowa runs a **public website** with your photo, description, residence, offense details, and whether you have residency/exclusion restrictions."
      ],
      watchOuts: [
        "Some info (employer/school) is **not** online but may be available by request.",
        "Updates must post within **5 business days** after DPS approval."
      ],
      validationNote:
        "Website scope and limits: [§692A.121](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-121/); search at the [DPS SOR site](https://www.iowasexoffender.gov/search/basicsearch)."
    },
    travelInterstate: {
      summary: [
        "Tell Iowa if you establish residence/work/school **out of state** and then **register there** — both within **5 business days**."
      ],
      watchOuts: [
        "Other states’ rules can be **stricter or longer**; the **longer** term can control.",
        "Keep documentation of your out-of-state registration."
      ],
      validationNote:
        "See the out-of-state move steps in [§692A.104(5)](https://www.legis.iowa.gov/docs/code/692A.104.pdf) and duration rules in [§692A.106(7)–(8)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-106/)."
    },
    visitingTraveling: {
      summary: [
        "Going to be away from home **more than 5 days**? Report the **temporary lodging** address and dates."
      ],
      watchOuts: [
        "A string of short stays can still trigger the **>5 days** rule if you’re away that long.",
        "If you begin **working or studying** in Iowa, you likely must **register** here."
      ],
      validationNote:
        "Temporary lodging rule: [§692A.105](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-105/); who must register in [§692A.103](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-103/)."
    },
    complianceEnforcement: {
      summary: [
        "Iowa treats missed duties seriously: **aggravated misdemeanor** first time, **Class D felony** next time, with possible enhancements."
      ],
      watchOuts: [
        "Courts **cannot defer** judgment/sentence for registry violations.",
        "Violations can add **10 years** to your registration term."
      ],
      validationNote:
        "Penalties and no-deferral rule: [§692A.111](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-111/); added duration for violations in [§692A.106(4)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-106/)."
    },
    reliefPaths: {
      summary: [
        "You can ask the district court to **reduce your term** once the statute’s time and treatment/low-risk requirements are met.",
        "Post-2022 starts usually require **10 years (Tier I)** or **15 years (Tier II/III)** before applying."
      ],
      watchOuts: [
        "You generally need a **DOC stipulation** and must be **low risk** on a validated tool.",
        "Courts have discretion and look closely at the **statutory checklist**."
      ],
      validationNote:
        "See the modification statute [§692A.128](https://www.legis.iowa.gov/docs/code/692A.128.pdf) and guidance from **Fortune v. State** (Iowa 2021) at [Justia](https://law.justia.com/cases/iowa/supreme-court/2021/19-1721.html)."
    },
    specialPopulations: {
      summary: [
        "Juveniles can sometimes get **waiver or modification** in juvenile court; rules are stricter for some age-14+ forcible cases."
      ],
      watchOuts: [
        "Adult-style **exclusion/employment** bans apply to offenses against minors.",
        "Residency restriction is limited to **aggravated offenses against a minor**."
      ],
      validationNote:
        "Juvenile provisions in [§692A.103(3)–(5)](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-103/); exclusion zones [§692A.113](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-113/); residency restriction [§692A.114](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-114/)."
    },
    checklistsScripts: {
      summary: [
        "Use the checklists to hit Iowa’s **5-day** deadlines, keep proof of in-person visits, and plan ahead for moves.",
        "The sample **records request** and **petition outline** mirror Iowa Code language."
      ],
      validationNote:
        "Checklists cite [§§692A.104–.105](https://www.legis.iowa.gov/docs/code/692A.104.pdf), verification in [§692A.108](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-108/), duration in [§692A.106](https://law.justia.com/codes/iowa/title-xvi/chapter-692a/section-692a-106/), and modification in [§692A.128](https://www.legis.iowa.gov/docs/code/692A.128.pdf)."
    }
  }
};