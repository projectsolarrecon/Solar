export default {
  state: "Wisconsin",
  lastReviewedUTC: "2025-10-13T00:00:00Z",

  atAGlance: {
    mustRegister: "**Who:** People convicted, adjudicated, or found NGI for qualifying offenses (including certain out-of-state/federal equivalents) must comply; see [Wis. Stat. §301.45](https://docs.legis.wisconsin.gov/document/statutes/301.45).",
    initialDeadline: "**Deadline:** Provide initial information on the schedule in [§301.45(2)(e)](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28e%29), including **no later than 10 days before release** in specified scenarios and **within 10 days** after placement on supervision or after entering Wisconsin to reside, work, or attend school.",
    verificationCadence: "**Verification:** **Annual** for most registrants; **every 90 days** for those on lifetime registration; see [§301.45(4)(a)](https://docs.legis.wisconsin.gov/document/statutes/301.45%284%29%28a%29) and appellate summary at [2019 WI App 4](https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=251772).",
    primaryMethod: "**Method:** Report to the **Department of Corrections (DOC)** Sex Offender Registry Program and follow directions for in-person/photo/fingerprint updates; see [§301.45](https://docs.legis.wisconsin.gov/statutes/statutes/301/45?view=section) and [DOC SOR public site](https://appsdoc.wi.gov/public).",
    topGotchas: [
      "All **changes** (address, name, employment, school, vehicles, internet IDs) must be reported **within 10 days**; see [§301.45(4)(a)](https://docs.legis.wisconsin.gov/document/statutes/301.45%283%29).",
      "**Lifetime** registrants verify **every 90 days**; missing windows is chargeable; see [§301.45(4)(a)](https://docs.legis.wisconsin.gov/document/statutes/301.45%284%29%28a%29).",
      "Public site omits **internet identifiers** even though they must be reported; see [§301.46](https://docs.legis.wisconsin.gov/document/statutes/301.46) and [2019 WI App 4](https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=251772).",
      "International trips require **21-day advance notice** under federal law; Wisconsin SOR reiterates this; see DOC handout ([What You Need to Know](https://content.govdelivery.com/attachments/topic_files/WIDHS/WIDHS_33/2024/07/04/file_attachments/2928354/What_you_need_to_know_about_registration__2928354.pdf)).",
      "Annual **$100 fee** by rule; nonpayment can trigger enforcement; see [DOC 332.19](https://www.law.cornell.edu/regulations/wisconsin/Wis-Admin-Code-SS-DOC-332-19)."
    ],
    officialLinks: {
      statuteIndex: "https://docs.legis.wisconsin.gov/document/statutes/301.45",
      adminRules: "https://docs.legis.wisconsin.gov/code/admin_code/doc/332",
      statePoliceRegistry: "https://appsdoc.wi.gov/public",
      publicWebsite: "https://appsdoc.wi.gov/public"
    }
  },

  whoMustRegister: "**Scope:** Those covered by [§301.45(1g)](https://docs.legis.wisconsin.gov/document/statutes/301.45), including residents with qualifying convictions, people found NGI, certain **juveniles** when ordered, and **nonresidents** who enter Wisconsin to **reside, work, or attend school**; discretionary orders also exist under [§973.048](https://docs.legis.wisconsin.gov/document/statutes/973.048).",

  deadlinesReporting: [
    "**Initial timing:** Follow the **10-day** schedule in [§301.45(2)(e)](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28e%29) (e.g., within 10 days after placement on supervision or after entering Wisconsin to reside/work/school; no later than 10 days before certain releases).",
    "**Annual or 90-day verification:** Notify DOC **once each calendar year** or, if lifetime, **once every 90 days** as directed; see [§301.45(4)(a)](https://docs.legis.wisconsin.gov/statutes/statutes/301/45?view=section) and [2019 WI App 4](https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=251772).",
    "**Changes within 10 days:** Address, name, employment, school, vehicles, and internet identifiers must be updated **within 10 days**; see [§301.45(3)](https://docs.legis.wisconsin.gov/document/statutes/301.45%283%29).",
    "**Parole/ES address changes:** If on parole or extended supervision and you **know an address will change**, update **before** the change; otherwise **within 24 hours**; see [§301.45(3)(b)](https://docs.legis.wisconsin.gov/document/statutes/301.45%283%29%28b%29)."
  ],

  verificationInPerson: [
    "**Photos/fingerprints:** DOC may require in-person appearance to obtain a **photograph** and **fingerprints**; see [§301.45(2)(f)](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28f%29).",
    "**Cadence:** Annual for most; **every 90 days** for lifetime; DOC issues notices and forms; see [§301.45(4)(a)](https://docs.legis.wisconsin.gov/document/statutes/301.45%284%29%28a%29).",
    "**Proof:** Keep dated receipts/letters from DOC SOR; public site and contacts at [DOC SOR](https://appsdoc.wi.gov/public) are available."
  ],

  residencyPresence: "**Residency:** No **statewide residency-ban** statute for general registrants; local governments may enact **child-safety zone** ordinances; core statewide presence limits include **school-premises notification** rules in [§301.475](https://law.justia.com/codes/wisconsin/chapter-301/section-301-475/).",

  employmentEducationInternet: [
    "**Employment/school reporting:** Employment and school data must be provided/updated under [§301.45(2)(a)](https://docs.legis.wisconsin.gov/statutes/statutes/301/45?view=section).",
    "**Internet IDs:** Report **email/usernames** and similar identifiers; they are **not displayed** on the public site; see [§301.45(2)(a)6m & 6r](https://docs.legis.wisconsin.gov/statutes/statutes/301/45?view=section) and [2019 WI App 4](https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=251772).",
    "**Work with minors:** Separate criminal/work restrictions may apply (e.g., [§948.13](https://docs.legis.wisconsin.gov/statutes/statutes/948/13)) in addition to registry duties."
  ],

  publicWebsiteExposure: [
    "**Public access:** DOC maintains a searchable website under [§301.46(5n)](https://docs.legis.wisconsin.gov/document/statutes/301.46) at the [DOC SOR portal](https://appsdoc.wi.gov/public).",
    "**What’s shown:** Core identifiers, conviction/location, and update dates; internet identifiers **are not posted**; see [§301.46](https://docs.legis.wisconsin.gov/document/statutes/301.46) and [2019 WI App 4](https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=251772).",
    "**Community notices:** Law enforcement may issue bulletins when appropriate under [§301.46(2m)](https://docs.legis.wisconsin.gov/document/statutes/301.46%282m%29)."
  ],

  travelInterstate: [
    "**Moving to WI:** Out-of-state registrants who enter **to reside, work, or attend school** must register **within 10 days**; see [§301.45(2)(e)2m & 2t](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28e%29).",
    "**Leaving WI:** Update address **within 10 days** of change; if on supervision, earlier notice rules apply; see [§301.45(3)](https://docs.legis.wisconsin.gov/document/statutes/301.45%283%29).",
    "**International travel:** Provide **21-day advance notice** per federal SORNA; DOC guidance at [What You Need to Know](https://content.govdelivery.com/attachments/topic_files/WIDHS/WIDHS_33/2024/07/04/file_attachments/2928354/What_you_need_to_know_about_registration__2928354.pdf)."
  ],

  visitingTraveling: [
    "**Short visits to WI:** Wisconsin law triggers duties when a person **enters to reside, work, or attend school**; visitors should confirm whether their stay meets those thresholds; see [§301.45(2)(e)](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28e%29).",
    "**WI residents away:** Being away from your address **10+ consecutive days** is treated as a change of address that must be reported **within 10 days**; see DOC handout ([What You Need to Know](https://content.govdelivery.com/attachments/topic_files/WIDHS/WIDHS_33/2024/07/04/file_attachments/2928354/What_you_need_to_know_about_registration__2928354.pdf))."
  ],

  complianceEnforcement: "**Penalties:** Failing to comply with **§301.45(2)–(4)** duties is criminally enforceable; see [§301.45(6)](https://docs.legis.wisconsin.gov/document/statutes/301.45%286%29) and jury instruction notes [WIS JI-Crim 2198](https://wilawlibrary.gov/jury/files/criminal/2198.pdf).",

  reliefPaths: [
    "**Standard durations:** **15 years after discharge** from supervision for many offenses; **lifetime** for others (including repeat/Chapter 980 scenarios); see [§301.45(5m)](https://docs.legis.wisconsin.gov/document/statutes/301.45%285m%29).",
    "**Court-limited orders:** For certain **§942.09** (depiction) cases where the person was under **21**, a court may end registration upon **successful completion** of sentence/probation under [§973.048(3)(g)](https://docs.legis.wisconsin.gov/document/statutes/973.048%283%29%28g%29).",
    "**Interpretation shift (lifetime):** Post-2017 reading increased **lifetime** outcomes for multiple counts; consult statute and analysis; see discussion (AG interpretation) and [§301.45(5m)](https://docs.legis.wisconsin.gov/document/statutes/301.45%285m%29) with practitioner summary ([Hurley Burish](https://hurleyburish.com/new-department-of-corrections-interpretation-of-sex-offender-registry-statute-now-requires-thousands-of-individuals-to-register-as-sex-offenders-for-life/))."
  ],

  specialPopulations: [
    "**Juveniles:** Registration/publication rules differ; courts may excuse certain juvenile cases from public posting; see [§301.46](https://docs.legis.wisconsin.gov/document/statutes/301.46).",
    "**School-premises:** Registered persons must provide **notice** before being on **school premises**; violations carry penalties; see [§301.475](https://law.justia.com/codes/wisconsin/chapter-301/section-301-475/).",
    "**Chapter 980:** Persons under ch. 980 have separate supervision and siting frameworks; registry duties still flow from [§301.45](https://docs.legis.wisconsin.gov/document/statutes/301.45)."
  ],

  costs: [
    "**Annual fee:** DOC rule sets **$100/year** registration fee; see [DOC 332.19](https://www.law.cornell.edu/regulations/wisconsin/Wis-Admin-Code-SS-DOC-332-19) and [§301.45(10)](https://docs.legis.wisconsin.gov/document/statutes/301.45%2810%29).",
    "**Billing practice:** DOC guidance notes **July assessment** and collection options; see DOC handout ([What You Need to Know](https://content.govdelivery.com/attachments/topic_files/WIDHS/WIDHS_33/2024/07/04/file_attachments/2928354/What_you_need_to_know_about_registration__2928354.pdf))."
  ],

  recentChangesLitigation: [
    {
      type: "case",
      name: "State v. B.W.Y., 2019 WI App 4",
      court: "Wisconsin Court of Appeals",
      date: "2019-12-26",
      holding: "Statute requires annual verification (or 90-day for lifetime) and allows collection of internet identifiers; identifiers are not published on the public site.",
      link: "https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=251772"
    },
    {
      type: "case",
      name: "State v. Young (interpreting §973.048 scope)",
      court: "Wisconsin Court of Appeals",
      date: "2024-10-29",
      holding: "Confirmed §973.048 applies across sex-offender registration requirements within the sentencing code context.",
      link: "https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=868937"
    },
    {
      type: "rule",
      cite: "Wis. Admin. Code DOC §332.19 (Sex offender registration fee)",
      effective: "Current",
      summary: "Establishes DOC’s annual sex-offender registration fee of **$100** and enforcement mechanisms.",
      link: "https://www.law.cornell.edu/regulations/wisconsin/Wis-Admin-Code-SS-DOC-332-19"
    }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Confirm duty under [§301.45(1g)](https://docs.legis.wisconsin.gov/document/statutes/301.45).",
      "If entering WI to **reside/work/school**, contact DOC SOR and **register within 10 days**; see [§301.45(2)(e)2m & 2t](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28e%29).",
      "Gather IDs, conviction documents, employer/school details, vehicle info, and internet identifiers; see [§301.45(2)(a)](https://docs.legis.wisconsin.gov/statutes/statutes/301/45?view=section).",
      "Ask DOC about photo/fingerprint appointment per [§301.45(2)(f)](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28f%29).",
      "Create a reminder for annual/90-day verifications; see [§301.45(4)(a)](https://docs.legis.wisconsin.gov/document/statutes/301.45%284%29%28a%29)."
    ],
    movingOutChecklist: [
      "Report **address change within 10 days**; see [§301.45(3)](https://docs.legis.wisconsin.gov/document/statutes/301.45%283%29).",
      "If on supervision, give **advance** notice per [§301.45(3)(b)](https://docs.legis.wisconsin.gov/document/statutes/301.45%283%29%28b%29).",
      "Confirm new state duties and request records from [DOC Public Records](https://doc.wi.gov/Pages/Home.aspx) if needed."
    ],
    recordsRequestTemplate: "To: Wisconsin DOC — Records Custodian. Request: copies of my Sex Offender Registry file (all submissions, notices, verification logs, photos, and fee records) under the Wisconsin Public Records Law. Include any entries shared under [§301.46](https://docs.legis.wisconsin.gov/document/statutes/301.46) and fee history under [DOC 332.19](https://www.law.cornell.edu/regulations/wisconsin/Wis-Admin-Code-SS-DOC-332-19). Delivery: electronic preferred.",
    reliefPetitionOutline: "If your order references **§973.048(3)(g)** (e.g., certain **§942.09** cases under age 21), draft: caption; judgment & order excerpts; proof of **successful completion** of sentence/probation; no new convictions during the term; attach compliance proof (e.g., annual checks under [§301.45(4)(a)](https://docs.legis.wisconsin.gov/document/statutes/301.45%284%29%28a%29)). Request termination of registration per [§973.048(3)(g)](https://docs.legis.wisconsin.gov/document/statutes/973.048%283%29%28g%29)."
  },

  resources: {
    legalAid: [
      { name: "State Public Defender – Trial/Appellate", link: "https://wispd.org" },
      { name: "UW Law School Clinics (records/collateral)", link: "https://law.wisc.edu/clinics/" }
    ],
    advocacy: [
      { name: "DOC SOR – Registrant FAQs/Contacts", link: "https://appsdoc.wi.gov/public" }
    ],
    reentry: [
      { name: "DOC Community Corrections (general info)", link: "https://doc.wi.gov/Pages/AboutDOC/CommunityCorrections/GeneralInformation.aspx" },
      { name: "DOC Victim Services (NOTIS/VINE)", link: "https://doc.wi.gov/Pages/VictimServices/WisconsinResources.aspx" }
    ]
  },

  citations: [
    { label: "Wis. Stat. §301.45 (Sex offender registration)", url: "https://docs.legis.wisconsin.gov/document/statutes/301.45" },
    { label: "Wis. Stat. §301.46 (Access/public website)", url: "https://docs.legis.wisconsin.gov/document/statutes/301.46" },
    { label: "Wis. Stat. §301.475 (School-premises notice)", url: "https://law.justia.com/codes/wisconsin/chapter-301/section-301-475/" },
    { label: "Wis. Admin. Code DOC ch. 332 (SOR rules; fee)", url: "https://docs.legis.wisconsin.gov/code/admin_code/doc/332" },
    { label: "DOC SOR Public Website", url: "https://appsdoc.wi.gov/public" },
    { label: "2019 WI App 4 (internet IDs; cadence)", url: "https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=251772" },
    { label: "State v. Young (2024) — §973.048 scope", url: "https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=868937" },
    { label: "DOC Handout — What You Need to Know", url: "https://content.govdelivery.com/attachments/topic_files/WIDHS/WIDHS_33/2024/07/04/file_attachments/2928354/What_you_need_to_know_about_registration__2928354.pdf" }
  ],

  badges: {
    residencyZones: false,
    lifetimePossible: true,
    verificationQuarterly: true
  },

  plainLanguage: {
    atAGlance: {
      summary: [
        "**Most people must register** after qualifying convictions; DOC runs the program; many duties are on strict **10-day** timelines.",
        "**Checks happen yearly** or **every 90 days** if lifetime."
      ],
      watchOuts: [
        "Internet IDs must be **reported** even if they are not shown on the public site.",
        "Plan for the **$100 annual fee** and keep all receipts."
      ],
      validationNote: "Summarizes [§301.45](https://docs.legis.wisconsin.gov/document/statutes/301.45), access rules in [§301.46](https://docs.legis.wisconsin.gov/document/statutes/301.46), cadence in [§301.45(4)(a)](https://docs.legis.wisconsin.gov/document/statutes/301.45%284%29%28a%29), and DOC guidance ([DOC SOR](https://appsdoc.wi.gov/public), [What You Need to Know](https://content.govdelivery.com/attachments/topic_files/WIDHS/WIDHS_33/2024/07/04/file_attachments/2928354/What_you_need_to_know_about_registration__2928354.pdf)).",
      reviewedUTC: "2025-10-13T00:00:00Z"
    },
    whoMustRegister: {
      summary: [
        "Registration applies to residents and nonresidents who **live/work/school** in WI.",
        "Courts can order registration **discretionarily** in some cases."
      ],
      watchOuts: [
        "Out-of-state convictions can still **trigger** WI duties.",
        "Juvenile handling/publication differs from adults."
      ],
      validationNote: "See [§301.45(1g)](https://docs.legis.wisconsin.gov/document/statutes/301.45) and discretionary authority in [§973.048](https://docs.legis.wisconsin.gov/document/statutes/973.048)."
    },
    deadlinesReporting: {
      summary: [
        "Initial reporting follows **10-day** rules tied to supervision, release, or entering WI.",
        "Update **any change** within **10 days**."
      ],
      watchOuts: [
        "If on parole/extended supervision, **give advance notice** before an address change, or **within 24 hours** if unplanned."
      ],
      validationNote: "Timelines from [§301.45(2)(e)](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28e%29) and change rules in [§301.45(3)](https://docs.legis.wisconsin.gov/document/statutes/301.45%283%29); cadence clarified in [2019 WI App 4](https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=251772)."
    },
    verificationInPerson: {
      summary: [
        "Expect periodic mailers and **in-person** photo/fingerprint requests.",
        "Keep your **proof** of compliance."
      ],
      watchOuts: [
        "Lifetime cases mean **every 90 days** verification.",
        "Missed windows can be **charged**."
      ],
      validationNote: "DOC authority for fingerprints/photos in [§301.45(2)(f)](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28f%29); cadence in [§301.45(4)(a)](https://docs.legis.wisconsin.gov/document/statutes/301.45%284%29%28a%29)."
    },
    residencyPresence: {
      summary: [
        "No **statewide** residency ban; some **local** child-safety zones exist.",
        "Separate rule: **school-premises notice** requirement."
      ],
      watchOuts: [
        "Local ordinances vary; check municipal codes.",
        "School-premises notice violations carry criminal penalties."
      ],
      validationNote: "Statewide framework lacks general bans; see [§301.475](https://law.justia.com/codes/wisconsin/chapter-301/section-301-475/) and access rules in [§301.46](https://docs.legis.wisconsin.gov/document/statutes/301.46)."
    },
    employmentEducationInternet: {
      summary: [
        "Report **work and school** info.",
        "Report **internet identifiers**; they are **not public**."
      ],
      watchOuts: [
        "Certain jobs around minors may be restricted by separate crimes statutes.",
        "Keep a log of new accounts and usernames."
      ],
      validationNote: "Data elements listed in [§301.45(2)(a)](https://docs.legis.wisconsin.gov/statutes/statutes/301/45?view=section); publication limits in [§301.46](https://docs.legis.wisconsin.gov/document/statutes/301.46) and case law ([2019 WI App 4](https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=251772))."
    },
    publicWebsiteExposure: {
      summary: [
        "Public can search DOC’s site by name or geography.",
        "Not all collected data appears online."
      ],
      watchOuts: [
        "Community bulletins may include photos and addresses.",
        "Some juvenile information is restricted from public posting."
      ],
      validationNote: "Public website authority at [§301.46(5n)](https://docs.legis.wisconsin.gov/document/statutes/301.46); DOC portal at [appsdoc.wi.gov/public](https://appsdoc.wi.gov/public); internet IDs not posted per [2019 WI App 4](https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=251772)."
    },
    travelInterstate: {
      summary: [
        "Moving to WI to **live/work/school** triggers registration **within 10 days**.",
        "Report address changes when leaving WI."
      ],
      watchOuts: [
        "If on supervision, stricter **advance notice** rules apply.",
        "International trips: **21-day** notice under federal rules."
      ],
      validationNote: "See [§301.45(2)(e)](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28e%29) for out-of-state entrants; change deadlines in [§301.45(3)](https://docs.legis.wisconsin.gov/document/statutes/301.45%283%29); SORNA travel notice reiterated by DOC ([handout](https://content.govdelivery.com/attachments/topic_files/WIDHS/WIDHS_33/2024/07/04/file_attachments/2928354/What_you_need_to_know_about_registration__2928354.pdf))."
    },
    visitingTraveling: {
      summary: [
        "Short **visits** alone do not automatically trigger registration unless they meet **reside/work/school** thresholds.",
        "WI residents on trips **10+ days** must treat it as an address change."
      ],
      watchOuts: [
        "Confirm with DOC if a planned stay meets a threshold.",
        "Mail delivery issues can cause missed verification — keep contact updated."
      ],
      validationNote: "Thresholds appear in [§301.45(2)(e)](https://docs.legis.wisconsin.gov/document/statutes/301.45%282%29%28e%29); 10-day travel/change guidance from DOC ([handout](https://content.govdelivery.com/attachments/topic_files/WIDHS/WIDHS_33/2024/07/04/file_attachments/2928354/What_you_need_to_know_about_registration__2928354.pdf))."
    },
    complianceEnforcement: {
      summary: [
        "Failure to register or update can be **charged**; penalties scale with circumstances.",
        "Keep all **proof** of submissions and mailings."
      ],
      watchOuts: [
        "Multiple missed events can compound exposure.",
        "Rules differ for people **on supervision** (revocation risk)."
      ],
      validationNote: "Enforcement in [§301.45(6)](https://docs.legis.wisconsin.gov/document/statutes/301.45%286%29); jury instruction overview at [WIS JI-Crim 2198](https://wilawlibrary.gov/jury/files/criminal/2198.pdf)."
    },
    reliefPaths: {
      summary: [
        "Many registrants finish at **15 years** post-discharge; some are **lifetime**.",
        "A narrow **court-termination** option exists for certain **§942.09** cases under age 21."
      ],
      watchOuts: [
        "Multiple qualifying counts can mean **lifetime**.",
        "No general early-termination process beyond what a court ordered."
      ],
      validationNote: "Durations: [§301.45(5m)](https://docs.legis.wisconsin.gov/document/statutes/301.45%285m%29); special termination: [§973.048(3)(g)](https://docs.legis.wisconsin.gov/document/statutes/973.048%283%29%28g%29); practitioner analysis at [Hurley Burish](https://hurleyburish.com/new-department-of-corrections-interpretation-of-sex-offender-registry-statute-now-requires-thousands-of-individuals-to-register-as-sex-offenders-for-life/)."
    },
    specialPopulations: {
      summary: [
        "Juveniles may have different court handling and publication rules.",
        "School-premises **notice** law applies to all registrants entering school grounds."
      ],
      watchOuts: [
        "Check the specific **court order** for juvenile cases.",
        "School-premises violations carry **criminal** penalties."
      ],
      validationNote: "See [§301.46](https://docs.legis.wisconsin.gov/document/statutes/301.46) for access/publication and [§301.475](https://law.justia.com/codes/wisconsin/chapter-301/section-301-475/) for school-premises notifications."
    },
    checklistsScripts: {
      summary: [
        "Use the checklists to hit **10-day** deadlines, keep proof, and request your records when moving.",
        "Relief outline applies only where a **court-limited** order allows."
      ],
      validationNote: "Templates reference [§301.45](https://docs.legis.wisconsin.gov/document/statutes/301.45), [§301.46](https://docs.legis.wisconsin.gov/document/statutes/301.46), [§973.048(3)(g)](https://docs.legis.wisconsin.gov/document/statutes/973.048%283%29%28g%29), and DOC contacts at the [SOR portal](https://appsdoc.wi.gov/public)."
    }
  }
};