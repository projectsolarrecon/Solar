export default {
  state: "Massachusetts",
  lastReviewedUTC: "2025-10-13T05:00:00Z",

  atAGlance: {
    mustRegister: "People who **live, work, or attend school** in Massachusetts and meet the statutory definition of a sex offender must register with the Sex Offender Registry Board (SORB) under [M.G.L. c. 6, §§178C–178Q](https://www.mass.gov/lists/mass-general-laws-c6-ssss-178c-178q).",
    initialDeadline: "New arrivals must **register within 2 days of moving** to Massachusetts; moves within MA require notice **10 days before** the change; moving out requires notice **10 days before** departure ([§178E](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178E); see also [Mass.gov guidance](https://www.mass.gov/info-details/who-has-to-register-as-a-sex-offender)).",
    verificationCadence: "Unclassified/Level 1 verify **annually by mail** ([§178F](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F)). Level 2/3 verify **annually in person** at local police; **SVPs every 45 days**; **homeless every 30 days** ([§178F½](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F%201~2)).",
    primaryMethod: "Level 2/3 **in person** at local police; Unclassified/Level 1 **by mail** to the Board; pay the statutory fee via mail or online portal ([Register](https://www.mass.gov/how-to/register-as-a-sex-offender)).",
    topGotchas: [
      "“Secondary address” triggers apply: **≥14 days/year** or **≥4 days/month** counts and must be reported, including **out-of-state** locations ([§178C definitions](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178C); [Mass.gov explainer](https://www.mass.gov/info-details/who-has-to-register-as-a-sex-offender)).",
      "Level 2 offenders **classified after July 12, 2013** appear online; earlier Level 2s are available through police/SORI requests ([Mass.gov Levels](https://www.mass.gov/info-details/levels-of-sex-offenders); [Moe v. SORB](https://law.justia.com/cases/massachusetts/supreme-court/volumes/467/467mass598.html)).",
      "Failing to register, verify, or give timely notice is a crime with **mandatory penalties** ([§178H](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178H)).",
      "Level 2/3 must update **photo/fingerprints** at in-person verification ([§178F½](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F%201~2)).",
      "Annual **$75 registration fee**; hardship waivers possible; online payments add convenience fees ([Mass.gov fee page](https://www.mass.gov/how-to/register-as-a-sex-offender); [payment portal](https://www.ncourt.com/x-press/x-onlinepayments.aspx?Juris=65FF9521-645B-48E5-956E-1D2502D7E939); [803 CMR 1.00](https://www.mass.gov/doc/803-cmr-1-sex-offender-registry-board-registration-classification-and-dissemination/download))."
    ],
    officialLinks: {
      statuteIndex: "https://www.mass.gov/lists/mass-general-laws-c6-ssss-178c-178q",
      adminRules: "https://www.mass.gov/doc/803-cmr-1-sex-offender-registry-board-registration-classification-and-dissemination/download",
      formsPortal: "https://www.mass.gov/how-to/register-as-a-sex-offender",
      publicWebsite: "https://www.mass.gov/orgs/sex-offender-registry-board"
    }
  },

  whoMustRegister: "Anyone who **resides**, **works**, or **attends an institution of higher learning** in MA and who has a qualifying conviction (or a like offense from another jurisdiction) must register with SORB under [§§178C–178Q](https://www.mass.gov/lists/mass-general-laws-c6-ssss-178c-178q). Definitions include reporting of **secondary addresses** (≥14 days/year or ≥4 days/month) and work/school locations ([§178C](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178C); [§178F](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F)).",

  deadlinesReporting: [
    "Within **2 days** of moving into Massachusetts: initial registration ([Mass.gov](https://www.mass.gov/info-details/who-has-to-register-as-a-sex-offender)).",
    "**10 days before** moving within MA or leaving MA ([§178E(h),(i)](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178E)).",
    "Unclassified/Level 1: **annual mail** verification ([§178F](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F)).",
    "Level 2/3: **annual in-person** verification at local police; photo/fingerprints updated ([§178F½](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F%201~2)).",
    "SVPs: **every 45 days in person**; Homeless: **every 30 days** ([§178F½](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F%201~2))."
  ],

  verificationInPerson: [
    "Level 2/3 verify **annually in person** at the police department where they live or work; **photo and fingerprints** updated ([§178F½](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F%201~2)).",
    "SVPs verify **every 45 days**; homeless Level 2/3 verify **every 30 days** ([§178F½](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F%201~2))."
  ],

  residencyPresence: "A **secondary address** is any place you stay **≥14 days/year** or **≥4 days/month**, including out-of-state locations, and must be reported ([§178C](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178C); [Mass.gov explainer](https://www.mass.gov/info-details/who-has-to-register-as-a-sex-offender)).",

  employmentEducationInternet: [
    "Report **work address** and **school enrollment**; **10 days’ prior notice** of changes ([§178E](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178E)).",
    "MA does **not collect or publish** internet identifiers; see [803 CMR 1.00](https://www.mass.gov/doc/803-cmr-1-sex-offender-registry-board-registration-classification-and-dissemination/download)."
  ],

  publicWebsiteExposure: [
    "Level **3** offenders and **Level 2 classified after July 12, 2013** appear on SORB’s public site; earlier Level 2 data available only via police or SORI request ([SORB](https://www.mass.gov/orgs/sex-offender-registry-board)).",
    "Public may also request info via [SORI request](https://www.mass.gov/how-to/request-sex-offender-registry-information-sori)."
  ],

  travelInterstate: [
    "Notify SORB **10 days before** leaving MA ([§178E(i)](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178E)).",
    "Out-of-state workers or students in MA must register; extended visits meeting **secondary address** thresholds trigger registration ([§178C](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178C))."
  ],

  visitingTraveling: [
    "Short visits below 14-day/4-day thresholds don’t require registration, but exceeding them does ([§178C](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178C)).",
    "Working or attending school in MA while living elsewhere requires registration ([§178F](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F))."
  ],

  complianceEnforcement: "Failure to register, verify, or give notice is a **crime** under [§178H](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178H). Agencies cross-check data; audits confirm compliance tracking ([2023 audit](https://www.mass.gov/doc/audit-of-the-sex-offender-registry-board/download)).",

  reliefPaths: [
    "Registration ends after **20 years** unless lifetime applies ([§178G](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178G)).",
    "Early termination possible after **10 offense-free years** on petition to SORB ([803 CMR 1.30–1.31](https://www.law.cornell.edu/regulations/massachusetts/803-CMR-1-30))."
  ],

  specialPopulations: [
    "Juveniles register 20 years; lifetime does not apply automatically ([CPCS FAQ](https://www.publiccounsel.net/pc/frequently-asked-questions/)).",
    "Homeless verify every **30 days** ([§178F½](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F%201~2))."
  ],

  costs: [
    "**$75 annual fee**, hardship waiver available ([Mass.gov](https://www.mass.gov/how-to/register-as-a-sex-offender); [§178Q](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178q)).",
    "Online payments may include **card fees** ([payment portal](https://www.ncourt.com/x-press/x-onlinepayments.aspx?Juris=65FF9521-645B-48E5-956E-1D2502D7E939))."
  ],

  recentChangesLitigation: [
    { type: "rule", cite: "803 CMR 1.00", effective: "2025-04-25", summary: "Comprehensive SORB regulation update; confirms procedures for classification, dissemination, and relief motions.", link: "https://www.mass.gov/doc/803-cmr-1-sex-offender-registry-board-registration-classification-and-dissemination/download" },
    { type: "case", name: "Moe v. Sex Offender Registry Board, 467 Mass. 598", court: "Mass. SJC", date: "2014-01-10", holding: "Bars internet publication of Level 2 offenders **classified on or before July 12, 2013**.", link: "https://law.justia.com/cases/massachusetts/supreme-court/volumes/467/467mass598.html" },
    { type: "statute", bill: "§178Q (fee) – ongoing", session: "codified", effective: "current", summary: "Maintains **$75 annual fee** for finally classified registrants, with hardship waiver authority.", link: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178q" }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Confirm you must register under [§§178C–178Q](https://www.mass.gov/lists/mass-general-laws-c6-ssss-178c-178q).",
      "Register **within 2 days** of moving to MA (use local police for Level 2/3; mail to SORB for Level 1) ([how to register](https://www.mass.gov/how-to/register-as-a-sex-offender)).",
      "List all **secondary addresses** (≥14 days/year or ≥4 days/month), including any out-of-state stays ([§178C](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178C)).",
      "Report work and school information; give **10 days’ prior** notice for changes ([§178E](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178E)).",
      "Calendar verification cadence (annual / **45-day SVP** / **30-day homeless**) ([§178F; §178F½](https://www.mass.gov/lists/mass-general-laws-c6-ssss-178c-178q)).",
      "Pay **$75 fee** or request hardship waiver ([§178Q](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178q)).",
      "Keep copies of forms, receipts, and proof of mailing/appearance."
    ],
    movingOutChecklist: [
      "File **10 days’ prior** notice to SORB before leaving MA ([§178E(i)](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178E)).",
      "Verify destination-state requirements and deadlines.",
      "Return any local verification cards; keep proof of notices."
    ],
    recordsRequestTemplate: "Subject: Public Records Request – SORB Records\n\nTo: SORB Records Access Officer\n\nI request records under G.L. c.66, §10 regarding: [describe]. Please provide electronic copies and advise of any fees in advance. Thank you.\n\nName:\nContact:\n\n(Use the SORB public records page at https://www.mass.gov/public-records-for-the-sex-offender-registry-board.)",
    reliefPetitionOutline: "1) Caption and jurisdiction under **§178G** and **803 CMR 1.30–1.31**; 2) Procedural posture and level; 3) Offense-free period and risk-reduction evidence; 4) Treatment, housing, employment; 5) Legal standard (**clear and convincing**); 6) Requested relief (termination or reclassification); 7) Exhibits."
  ],
resources: {
    legalAid: [
      { name: "Committee for Public Counsel Services – SORB", link: "https://www.publiccounsel.net/pc/sorb-law/" },
      { name: "MassLegalServices – SORB Motions/Guides", link: "https://www.masslegalservices.org/content/sorb-early-termination-or-reclassification-request-information-sample-motions-and-sample" }
    ],
    advocacy: [
      { name: "Massachusetts SORB (public information/contacts)", link: "https://www.mass.gov/orgs/sex-offender-registry-board" }
    ],
    reentry: [
      { name: "Bay State Re-Entry – How to Register", link: "https://baystatereentrynetwork.org/index.php/how-to-register-as-a-sex-offender/" }
    ]
  },

  citations: [
    { label: "Statutes Index (M.G.L. c. 6, §§178C–178Q)", url: "https://www.mass.gov/lists/mass-general-laws-c6-ssss-178c-178q" },
    { label: "Definitions – §178C", url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178C" },
    { label: "Registration & Notices – §178E", url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178E" },
    { label: "Annual Verification (mail) – §178F", url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F" },
    { label: "In-Person Verification, SVP/Homeless – §178F½", url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F%201~2" },
    { label: "Termination/Lifetime – §178G", url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178G" },
    { label: "Criminal Penalties – §178H", url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178H" },
    { label: "Fee – §178Q", url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178q" },
    { label: "803 CMR 1.00 (2025 update)", url: "https://www.mass.gov/doc/803-cmr-1-sex-offender-registry-board-registration-classification-and-dissemination/download" },
    { label: "Mass.gov – Who has to register", url: "https://www.mass.gov/info-details/who-has-to-register-as-a-sex-offender" },
    { label: "Mass.gov – Register as a sex offender (fee & methods)", url: "https://www.mass.gov/how-to/register-as-a-sex-offender" },
    { label: "Mass.gov – Levels of sex offenders (public website rules)", url: "https://www.mass.gov/info-details/levels-of-sex-offenders" },
    { label: "SORI request (public access)", url: "https://www.mass.gov/how-to/request-sex-offender-registry-information-sori" },
    { label: "SORB Audit (2023)", url: "https://www.mass.gov/doc/audit-of-the-sex-offender-registry-board/download" },
    { label: "Moe v. SORB, 467 Mass. 598 (2014)", url: "https://law.justia.com/cases/massachusetts/supreme-court/volumes/467/467mass598.html" }
  ],

  badges: {
    residencyZones: false,
    lifetimePossible: true,
    verificationQuarterly: false
  },

  plainLanguage: {
    atAGlance: {
      summary: [
        "If you **live, work, or study** in MA and have a qualifying sex offense, you must register.",
        "Register **within 2 days** of moving; give **10 days’ notice** for moves.",
        "Level 2/3 check in **in person** yearly; Level 1/Unclassified **by mail**."
      ],
      watchOuts: [
        "Staying **≥14 days/year** or **≥4 days/month** triggers a reportable address.",
        "Not registering or verifying is a **crime**."
      ],
      validationNote: "Based on current [M.G.L. c.6 §§178C–178Q](https://www.mass.gov/lists/mass-general-laws-c6-ssss-178c-178q) and [803 CMR 1.00](https://www.mass.gov/doc/803-cmr-1-sex-offender-registry-board-registration-classification-and-dissemination/download).",
      reviewedUTC: "2025-10-13T05:00:00Z"
    },
    deadlinesReporting: {
      summary: [
        "**2 days** to register after moving into MA.",
        "**10 days before** any move or school/work change.",
        "Annual or periodic verification depending on level."
      ],
      validationNote: "See [§178E–178F½](https://www.mass.gov/lists/mass-general-laws-c6-ssss-178c-178q)."
    },
    verificationInPerson: {
      summary: [
        "Level 2/3 verify yearly at police; SVPs every **45 days**; homeless every **30 days**."
      ],
      validationNote: "From [§178F½](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178F%201~2)."
    },
    residencyPresence: {
      summary: [
        "A place stayed **≥14 days/year** or **≥4 days/month** must be reported, even if out-of-state."
      ],
      validationNote: "Defined in [§178C](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178C)."
    },
    complianceEnforcement: {
      summary: [
        "Failure to register or verify is prosecuted under **§178H**.",
        "Audits and data-matching ensure compliance."
      ],
      validationNote: "See [audit report](https://www.mass.gov/doc/audit-of-the-sex-offender-registry-board/download)."
    },
    reliefPaths: {
      summary: [
        "Most registrants end after **20 years**, some lifetime.",
        "You can seek **early termination** after 10 years offense-free."
      ],
      validationNote: "Per [§178G](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178G) and [803 CMR 1.30–1.31](https://www.law.cornell.edu/regulations/massachusetts/803-CMR-1-30)."
    },
    checklistsScripts: {
      summary: [
        "First 30 days: register, list secondary addresses, set verification cadence, and handle the fee/waiver.",
        "Moving out / traveling: give **10 days’ prior** notice and check the destination state’s rules."
      ],
      validationNote: "Follow the steps on [Register](https://www.mass.gov/how-to/register-as-a-sex-offender) and statutory notices in [§178E](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section178E)."
    }
  }
};
