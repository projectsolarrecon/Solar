export default {
  state: "California",
  lastReviewedUTC: "2025-10-10T00:00:00Z",

  atAGlance: {
    mustRegister: "People with qualifying convictions and specified out-of-state/federal equivalents must register under the Sex Offender Registration Act; see [Penal Code §290](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9.).",
    initialDeadline: "Register **in person** upon release as specified and within five working days of coming into or changing residence in a city/county; see [§290.015](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/) and [15 CCR §3652](https://www.law.cornell.edu/regulations/california/15-CCR-3652).",
    verificationCadence: "Update annually within **five working days** of birthday; transients re-register every **30 days**; sexually violent predators verify every **90 days**; see [§290.012](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-012/) and [§290.011](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-011/).",
    primaryMethod: "In person at local law enforcement (and campus police when applicable); forms and content are governed by [§290.015](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/).",
    topGotchas: [
      "Five-working-day windows for initial, birthday, moves, and name changes; see [§§290.012, 290.013, 290.014](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-014/).",
      "Transients must re-register **every 30 days**; see [§290.011](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-011/).",
      "Internet identifiers can be required by court finding in newer felony cases; see [§290.024](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-024/).",
      "Campus presence triggers separate duties with campus police; see [§290.01](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-01/).",
      "Public website posting rules are tier/conviction-dependent; see [§290.46](https://codes.findlaw.com/ca/penal-code/pen-sect-290-46/)."
    ],
    officialLinks: {
      statuteIndex: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9.",
      adminRules: "https://www.law.cornell.edu/regulations/california/15-CCR-3652",
      formsPortal: "https://oag.ca.gov/sex-offender-reg/forms",
      publicWebsite: "https://www.meganslaw.ca.gov/"
    }
  },

  whoMustRegister: "Registration applies to those described in the Act, including persons with listed California offenses and specified out-of-state, federal, or military equivalents; see [§290](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9.) and [§290(c) et seq. as compiled](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/).",

  deadlinesReporting: [
    "Initial registration upon release and within five working days of coming into or changing residence in a jurisdiction; see [§290.015](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/) and [15 CCR §3652](https://www.law.cornell.edu/regulations/california/15-CCR-3652).",
    "Annual update within five working days of birthday; see [§290.012(a)](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-012/).",
    "Address changes require new registration within five working days; see [§290.013](https://codes.findlaw.com/ca/penal-code/pen-sect-290-013/).",
    "Legal name changes must be reported within five working days; internet identifier additions/changes by mailed notice within 30 working days when required; see [§290.014](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-014/) and [§290.024](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-024/).",
    "Transients re-register no less than every 30 days and follow birthday updates; see [§290.011](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-011/)."
  ],

  verificationInPerson: [
    "Appear at the local law-enforcement registering agency; content of registration/update is set by [§290.015](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/).",
    "If domiciled or present at a university/college campus, also register with campus police; see [§290.01](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-01/).",
    "Sexually violent predators complete 90-day verification; see [§290.012(f)](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-012/)."
  ],

  residencyPresence: "State law sets reporting/verification rules rather than blanket statewide residency bans; local supervision or parole conditions may add limits. See the Act at [§290 et seq.](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9.) and CDCR guidance for registrants at [CDCR Parole—Registration Requirements](https://www.cdcr.ca.gov/parole/registration-requirements/).",

  employmentEducationInternet: [
    "Campus enrollment/employment triggers campus-police registration within five working days (start and end); see [§290.01](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-01/).",
    "Disclosure and restrictions for working/volunteering with minors; see [§290.95](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?sectionNum=290.95.&lawCode=PEN).",
    "Court-ordered internet identifier registration for certain felony cases; see [§290.024](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-024/) and related notice duty in [§290.014(b)](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-014/)."
  ],

  publicWebsiteExposure: [
    "The DOJ website posts only categories authorized by statute; exclusions and ZIP-only displays are defined in [§290.46](https://codes.findlaw.com/ca/penal-code/pen-sect-290-46/) and explained in DOJ’s [Megan’s Law FAQ](https://www.meganslaw.ca.gov/FAQ).",
    "Juvenile registry information is not posted online; see [§290.46(b)](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9.)."
  ],

  travelInterstate: [
    "Moving out of California constitutes a residence change; notify and register per [§290.013](https://codes.findlaw.com/ca/penal-code/pen-sect-290-013/) and follow destination-state law; DOJ notice of out-of-state duties appears in [§290.015(a)(6)](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/)."
  ],

  visitingTraveling: [
    "Coming into a city/county or campus triggers registration within five working days when you temporarily reside there; see [15 CCR §3652](https://www.law.cornell.edu/regulations/california/15-CCR-3652) and the Act at [§290](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9.)."
  ],

  complianceEnforcement: "Willful violations are prosecuted under [§290.018](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-018/); misdemeanors when based on misdemeanor predicate, felonies when based on felony predicate; continuing-offense rule and specific penalties (including for internet-identifier omissions) apply.",

  reliefPaths: [
    "Tiered relief by petition after minimum period (10/20 years for many adults; lifetime possible) via [§290.5](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=290.5.) and Judicial Council form [CR-415](https://selfhelp.courts.ca.gov/jcc-form/CR-415).",
    "Website exclusion is narrowly available by statute; see [§290.46(d)–(e)](https://codes.findlaw.com/ca/penal-code/pen-sect-290-46/)."
  ],

  specialPopulations: [
    "Transients follow 30-day cycle and related rules; see [§290.011](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-011/).",
    "Sexually violent predators verify every 90 days and receive written notice of increased duties; see [§290.012(f)](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-012/).",
    "Students and employees at higher-education institutions must register with campus police as well as local law enforcement; see [§290.01](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-01/)."
  ],

  recentChangesLitigation: [
    { type: "statute", bill: "SB 384 (Tiered Registry)", session: "2017–2018", effective: "2021-01-01", summary: "Transitioned from lifetime to a tiered registry with 10/20-year and lifetime tiers; created petition process.", link: "https://oag.ca.gov/system/files/media/sb384-registrant-faqs.pdf" },
    { type: "statute", bill: "AB 474 (cleanup to §290.46 et al.)", session: "2021", effective: "2022-01-01", summary: "Amended online-posting and related provisions; DOJ continues posting per §290.46.", link: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9." }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Confirm duty applies (review judgment and [§290 et seq.](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9.)).",
      "Register in person within five working days; bring ID/proof per [§290.015](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/).",
      "If transient, calendar 30-day updates; see [§290.011](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-011/).",
      "Add campus registration if enrolled/employed; see [§290.01](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-01/).",
      "Set birthday-window reminder for annual update; see [§290.012](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-012/)."
    ],
    movingOutChecklist: [
      "Before leaving, treat the move as a residence change and comply with [§290.013](https://codes.findlaw.com/ca/penal-code/pen-sect-290-013/).",
      "On arrival, follow the destination state’s law; see notice in [§290.015(a)(6)](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/).",
      "Keep proof of last California compliance for your records."
    ],
    recordsRequestTemplate: "Request: A copy of my most recent California Sex Offender Registration form and proof of compliance, submitted under [Penal Code §290.015](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/), for personal records and court use. Please include date/time of registration and any DOJ forwarding receipt if available.",
    reliefPetitionOutline: "Confirm tier and minimum-time calculation; obtain proof of current registration and service lists; complete and file Judicial Council [CR-415](https://selfhelp.courts.ca.gov/jcc-form/CR-415) in the proper court; serve agencies and DA as required by [§290.5](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=290.5.); prepare for hearing with evidence of compliance and rehabilitation."
  },

  resources: {
    legalAid: [
      { name: "Solano County Public Defender—PC 290 SB 384 Relief", link: "https://www.solanocounty.gov/government/public-defender/solano-county-fresh-start/pc-290-sb-384-registration-relief" },
    ],
    advocacy: [
      { name: "CA DOJ—Megan’s Law Program Info", link: "https://oag.ca.gov/sex-offender-reg/megans-law" }
    ]
  },

  citations: [
    { label: "Penal Code ch. 5.5 (§§290–290.024) – Sex Offenders", url: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9." },
    { label: "§290.015 – Registration contents & process", url: "https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/" },
    { label: "§290.012 – Annual birthday update; SVP 90-day verification", url: "https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-012/" },
    { label: "§290.011 – Transient registration (30-day cycle)", url: "https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-011/" },
    { label: "§290.013 – Address change registration", url: "https://codes.findlaw.com/ca/penal-code/pen-sect-290-013/" },
    { label: "§290.014 – Name change & internet identifier notice windows", url: "https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-014/" },
    { label: "§290.024 – Internet identifiers (court-ordered in certain cases)", url: "https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-024/" },
    { label: "§290.018 – Penalties; continuing offense; internet identifiers", url: "https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-018/" },
    { label: "§290.01 – Campus registration duty", url: "https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-01/" },
    { label: "§290.46 – Public internet disclosure (Megan’s Law)", url: "https://codes.findlaw.com/ca/penal-code/pen-sect-290-46/" },
    { label: "15 CCR §3652 – Registration procedures (CDCR)", url: "https://www.law.cornell.edu/regulations/california/15-CCR-3652" },
    { label: "CA DOJ – Megan’s Law FAQ (public posting rules)", url: "https://www.meganslaw.ca.gov/FAQ" },
    { label: "CA DOJ – Sex Offender Registration Forms", url: "https://oag.ca.gov/sex-offender-reg/forms" }
  ],

  badges: {
    residencyZones: false,
    lifetimePossible: true,
    verificationQuarterly: true
  },

  plainLanguage: {
    atAGlance: {
      summary: [
        "Expect in-person registration and strict five-working-day windows.",
        "Annual birthday updates are standard; transients report every 30 days.",
        "Some information may appear on the public website based on statute and tier."
      ],
      watchOuts: [
        "Separate campus-police duties if you study or work on campus.",
        "Court-ordered internet-ID reporting can apply in newer felony cases."
      ],
      validationNote: "Summarized from [§290 et seq.](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9.), including [§§290.015](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/), [290.012](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-012/), [290.011](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-011/), and website rules at [§290.46](https://codes.findlaw.com/ca/penal-code/pen-sect-290-46/).",
      reviewedUTC: "2025-10-10T00:00:00Z"
    },
    deadlinesReporting: {
      summary: [
        "Register on release and when you come into or change residence within a city/county.",
        "Renew within five working days of your birthday; report address and name changes quickly."
      ],
      watchOuts: [
        "Transients must re-register every 30 days.",
        "Internet IDs: mailed updates within 30 working days when required."
      ],
      validationNote: "See [§§290.015](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/), [290.012](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-012/), [290.013](https://codes.findlaw.com/ca/penal-code/pen-sect-290-013/), [290.014](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-014/), and [290.011](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-011/)."
    },
    verificationInPerson: {
      summary: [
        "Appear at the local registering agency; bring ID and proofs.",
        "Add campus-police check-ins if you study or work at a campus."
      ],
      watchOuts: [
        "SVPs have a 90-day cycle in addition to annual requirements."
      ],
      validationNote: "Based on [§290.015](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-015/), [§290.01](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-01/), and [§290.012](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-012/)."
    },
    residencyPresence: {
      summary: [
        "No blanket statewide residency-ban in the registration statute.",
        "Supervision terms can add location limits."
      ],
      watchOuts: [
        "City/county arrival can trigger a five-day registration window even if temporary."
      ],
      validationNote: "See the Act at [§290 et seq.](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=5.5.&division=&lawCode=PEN&part=1.&title=9.) and procedure in [15 CCR §3652](https://www.law.cornell.edu/regulations/california/15-CCR-3652)."
    },
    complianceEnforcement: {
      summary: [
        "Penalties depend on the underlying offense level.",
        "Violations are treated as a continuing offense."
      ],
      watchOuts: [
        "Internet-ID omissions carry specific misdemeanor exposure."
      ],
      validationNote: "See [§290.018](https://law.justia.com/codes/california/code-pen/part-1/title-9/chapter-5-5/section-290-018/)."
    },
    reliefPaths: {
      summary: [
        "Most Tier 1 and Tier 2 registrants may petition for termination after minimum years.",
        "The court decides; compliance history matters."
      ],
      watchOuts: [
        "Relief is not automatic; service and proof of current registration are required."
      ],
      validationNote: "See [§290.5](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=290.5.) and Judicial Council [CR-415](https://selfhelp.courts.ca.gov/jcc-form/CR-415)."
    }
  }
};