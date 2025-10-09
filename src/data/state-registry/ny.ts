export default {
  state: "New York",
  lastReviewedUTC: "2025-10-09T12:00:00Z",

  atAGlance: {
    mustRegister: "People with convictions that meet New York’s Sex Offender Registration Act (SORA) criteria, plus nonresident workers and students who begin work or school in NY. Core rules are in Correction Law Article 6-C.",
    initialDeadline: "Within 10 calendar days after establishing residence in NY (§ 168-k) or, for nonresident workers/students, within 10 days after commencing in-state employment or school (§ 168-f(6)).",
    verificationCadence: "Annual mail verification for all registrants; Level 3 and those designated “sexual predator” must also verify address in person every 90 days; photos: Levels 1–2 every 3 years, Level 3 annually.",
    primaryMethod: "DCJS registry by mail (annual verification) plus in-person at local law enforcement for photo updates and Level 3 quarterly address verification.",
    topGotchas: [
      "10-day window: address, school/work, and internet identifiers must be updated within 10 calendar days.",
      "$10 fee owed to DCJS each time a qualifying change is filed.",
      "Level 3 (and “sexual predator”) must personally verify address every 90 days.",
      "Only Levels 2–3 appear on the public website; Level 1 is available by phone only.",
      "NY gives no credit for time registered in another state toward NY’s duration unless the law changes (People v. Corr/McDonald, 2024)."
    ],
    officialLinks: {
      statuteIndex: "https://www.criminaljustice.ny.gov/nsor/claws.htm",
      statePoliceRegistry: "https://www.criminaljustice.ny.gov/SomsSUBDirectory/search_index.jsp",
      formsPortal: "https://www.criminaljustice.ny.gov/forms.htm",
      publicWebsite: "https://www.criminaljustice.ny.gov/SomsSUBDirectory/search_index.jsp"
    }
  },

  whoMustRegister: "Individuals convicted of registerable offenses (see Correction Law § 168-a), those relocating to NY from another jurisdiction with a qualifying out-of-state conviction (§ 168-k), and nonresident workers/students who start employment or attend school in NY (§ 168-f(6)). A judge sets risk level (1–3) and any designation at a SORA hearing (§ 168-n).",
  deadlinesReporting: [
    "Report any change of address; internet accounts/identifiers; or status of enrollment, attendance, employment or residence at an institution of higher education within 10 calendar days (§ 168-f(4)).",
    "Nonresident worker or student must register within 10 calendar days after commencing work or school in NY (§ 168-f(6)).",
    "Return the annual verification form to DCJS within 10 days of receiving it (DCJS FAQ).",
    "Level 3/“sexual predator”: personally verify address with local law enforcement every 90 days (§ 168-f(3); DCJS FAQ).",
    "Photo updates: Levels 1–2 in person every 3 years; Level 3 annually (DCJS Registry overview)."
  ],
  verificationInPerson: [
    "Level 3 and those designated “sexual predator” must verify address in person every 90 calendar days with the local police agency (DCJS FAQ; § 168-f(3)).",
    "All registrants must appear in person for periodic photo updates at the local police agency—Levels 1–2 every 3 years; Level 3 yearly (DCJS Registry overview)."
  ],
  residencyPresence: "No statewide residency restriction for people who are not on supervision; New York preempts local residency ordinances (People v. Diack, 2015). Separate “SARA” proximity rules (e.g., 1,000-foot school-grounds restriction) can apply to certain individuals while on parole/probation/post-release supervision (Executive Law § 259-c(14); Penal Law § 65.10(4-a)).",
  employmentEducationInternet: [
    "Levels 2–3 must report the address of their employer to DCJS (DCJS FAQ; § 168-q on what may be posted).",
    "College/university: report enrollment/attendance/employment and any institution-provided residence within 10 days (§ 168-f(4), § 168-a(14–15)).",
    "Internet: report internet accounts with access providers and “internet identifiers” used, within 10 days of change (§ 168-f(4)).",
    "Vehicles: DCJS collects identifiers including vehicles owned/operated; keep this information current (NY Courts SORA Outline)."
  ],
  publicWebsiteExposure: [
    "Public website lists Level 2 and Level 3 with address, employment address, photo, and other data (§ 168-q; DCJS Registry overview).",
    "Level 1 (and those not yet risk-assessed) are not on the public website; information available via the DCJS phone line (DCJS Registry overview)."
  ],
  travelInterstate: [
    "Moving to NY: notify DCJS and register within 10 days after establishing residence (§ 168-k).",
    "Moving out of NY: follow the destination state’s law and ensure NY obligations are closed out (DCJS FAQ guidance).",
    "Failure to meet SORA deadlines is a crime (§ 168-t)."
  ],
  visitingTraveling: [
    "Nonresident workers/students must register within 10 days of starting work/school in NY (§ 168-f(6)).",
    "SORA does not set a general short-visit threshold for tourists; registration hinges on establishing residence or qualifying work/student presence. When in doubt, contact DCJS in advance (DCJS FAQ)."
  ],
  complianceEnforcement: "Failure to register or verify as required is a felony: Class E for a first conviction; Class D for subsequent convictions (§ 168-t). DCJS also assesses a $10 fee each time a registrant files a qualifying change (§ 168-b(8)).",
  reliefPaths: [
    "Risk-level modification or potential relief after long durations is possible only as allowed by statute: Level 2 (without predator/sexually violent/predicate designation) may petition for relief after 30 years of registration (§ 168-o(1)); petitions are by motion to the sentencing/SORA court (§ 168-o; CourtHelp).",
    "Courts may also modify risk level/designation upon motion (§ 168-o(2)). New York’s highest court held that NY does not credit time registered in other jurisdictions toward NY’s 20-year/ life durations absent legislative change (People v. Corr & People v. McDonald, 2024)."
  ],
  specialPopulations: [
    "While on parole/probation/post-release supervision, SARA 1,000-foot school-grounds restrictions may apply (Exec. Law § 259-c(14); Penal Law § 65.10(4-a)).",
    "Homeless/unsheltered registrants should obtain specific reporting instructions from local law enforcement and DCJS; missed verifications and unreported changes still trigger § 168-t liability (see DCJS FAQ and proposed homeless-reporting bills)."
  ],
  costs: [
    "$10 fee to DCJS for each address or higher-education status change filed under § 168-f(4) (§ 168-b(8)).",
    "Courts may impose separate mandatory surcharges at sentencing (e.g., sex-offense registration fee) not collected by DCJS (NY Courts resource)."
  ],

  recentChangesLitigation: [
    {
      type: "case",
      name: "People v. Corr; People v. McDonald",
      court: "N.Y. Court of Appeals",
      date: "2024-06-24",
      holding: "“Initial date of registration” in § 168-h refers to when a person first registers under New York’s SORA; time on another state’s registry does not count toward NY’s duration.",
      link: "https://www.nycourts.gov/ctapps/Decisions/2024/Jun24/67%2668opn24-Decision.pdf"
    },
    {
      type: "case",
      name: "People v. Diack",
      court: "N.Y. Court of Appeals",
      date: "2015-02-17",
      holding: "State law preempts local sex-offender residency ordinances; counties/towns cannot add their own residency bans.",
      link: "https://law.justia.com/cases/new-york/court-of-appeals/2015/1.html"
    }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Before arrival: gather ID, proof of residence, employer/school details, vehicle info, and any internet identifiers you use.",
      "If moving to NY: register with DCJS within 10 days after establishing residence (§ 168-k).",
      "If starting work/school in NY as a nonresident: register within 10 days of commencement (§ 168-f(6)).",
      "Ask the local police agency how they handle photo updates and, if Level 3/“sexual predator,” schedule 90-day address verifications.",
      "Create a paper trail: make copies of all forms; note dates/times; send required mailings by trackable method; keep receipts."
    ],
    movingOutChecklist: [
      "Ask your current verifying agency how to close out your NY record safely.",
      "Register in the destination state as required by that state’s law (deadlines vary).",
      "Keep proof of your out-of-state registration and provide updated address info to DCJS if asked.",
      "If you later return to NY for residence, work, or school, SORA duties may re-activate (see § 168-k, § 168-f(6))."
    ],
    recordsRequestTemplate: "To: New York State Division of Criminal Justice Services, Sex Offender Registry (SORRequests@dcjs.ny.gov)\n\nSubject: FOIL Request – Sex Offender Registry File\n\nUnder New York’s Freedom of Information Law, I request copies of records in my Sex Offender Registry file, including registration forms, verification history, photographs, and any notices of noncompliance. I also request any records reflecting changes of address, employment/school, and internet identifiers.\n\nName: __________________  NYSID/DOB (if known): __________________\nCurrent Address: __________________  Phone/Email: __________________\n\nPlease notify me of any fees before fulfilling this request. I prefer electronic delivery.\n\nSignature/Date\n\nMailing address (if needed): DCJS Sex Offender Registry, 80 South Swan St., 10th Fl., Albany, NY 12210.",
    reliefPetitionOutline: "1) Confirm eligibility under § 168-o (e.g., Level 2 without predator/sexually violent/predicate designation; 30 years registered) or seek modification under § 168-o(2). 2) Obtain certified judgment, SORA order, and DCJS registration history. 3) Draft motion/affirmation citing § 168-o; attach exhibits showing rehabilitation, treatment, compliance, risk-reduction evidence. 4) File/serve prosecutor; calendar hearing under § 168-n procedures. 5) Prepare witnesses and documentary proof; the court applies the statute’s standard (clear and convincing burden typically on movant) and issues an order granting or denying relief."
  },

  resources: {
    legalAid: [
      { name: "New York Legal Aid Society – Criminal Appeals/SORA", link: "https://www.legalaidnyc.org/" },
      { name: "Prisoners’ Legal Services of New York (PLS)", link: "https://plsny.org/" },
      { name: "New York State Defenders Association", link: "https://nysda.org/" }
    ],
    advocacy: [
      { name: "NYCLU – SARA residency resources/podcast", link: "https://www.nyclu.org/podcast/this-law-effectively-banishes-people-from-new-york-city" },
      { name: "Restorative Action Alliance", link: "https://restorativeactionalliance.org/" }
    ],
    reentry: [
      { name: "NY DCJS – Registry overview & contacts", link: "https://www.criminaljustice.ny.gov/nsor/" },
      { name: "NYS Re-entry Initiatives (DCJS)", link: "https://www.criminaljustice.ny.gov/crimnet/ojsa/initiatives.htm" }
    ]
  },

  citations: [
    { label: "Correction Law, Article 6-C (SORA)", url: "https://www.criminaljustice.ny.gov/nsor/claws.htm" },
    { label: "§ 168-f – Duty to Register & Verify", url: "https://codes.findlaw.com/ny/correction-law/cor-sect-168-f/" },
    { label: "§ 168-k – Registration for Change of Address from Another State", url: "https://law.justia.com/codes/new-york/cor/article-6-c/168-k/" },
    { label: "§ 168-h – Duration of Registration & Verification", url: "https://codes.findlaw.com/ny/correction-law/cor-sect-168-h/" },
    { label: "DCJS – Registry FAQ (verification, durations, employer reporting)", url: "https://www.criminaljustice.ny.gov/nsor/faq.htm" },
    { label: "DCJS – Public Registry Search (Level 2–3 only)", url: "https://www.criminaljustice.ny.gov/SomsSUBDirectory/search_index.jsp" },
    { label: "§ 168-q – Internet Posting (what appears online)", url: "https://law.justia.com/codes/new-york/cor/article-6-c/168-q/" },
    { label: "§ 168-b(8) – $10 Change-Filing Fee", url: "https://codes.findlaw.com/ny/correction-law/cor-sect-168-b/" },
    { label: "§ 168-t – Penalties for Failure to Register/Verify", url: "https://codes.findlaw.com/ny/correction-law/cor-sect-168-t/" },
    { label: "People v. Diack, 26 N.E.3d 1151 (N.Y. 2015)", url: "https://law.justia.com/cases/new-york/court-of-appeals/2015/1.html" },
    { label: "People v. Corr & People v. McDonald (N.Y. 2024)", url: "https://www.nycourts.gov/ctapps/Decisions/2024/Jun24/67%2668opn24-Decision.pdf" },
    { label: "Executive Law § 259-c(14) – SARA Condition", url: "https://www.nysenate.gov/legislation/laws/EXC/259-C" },
    { label: "Penal Law § 65.10(4-a) – Mandatory Conditions for Sex Offenders", url: "https://codes.findlaw.com/ny/penal-law/pen-sect-65-10/" },
    { label: "NY Courts – SORA Basics & Outline", url: "https://www.nycourts.gov/courthelp/criminal/sexOffenders.shtml" },
    { label: "NY Courts – Partners in Justice SORA Outline (PDF)", url: "https://www.nycourts.gov/ip/partnersinjustice/SORA-Outline.pdf" }
  ],

  badges: {
    residencyZones: false,
    lifetimePossible: true,
    verificationQuarterly: true
  },

  plainLanguage: {
    whoMustRegister: {
      summary: [
        "If you live in NY with a qualifying conviction, you must register.",
        "If you move to NY from another state and your offense qualifies, you must register within 10 days.",
        "If you work or go to school in NY but live elsewhere, you must register within 10 days of starting."
      ],
      validationNote: "See § 168-a (definitions), § 168-k (moving to NY), and § 168-f(6) (nonresident worker/student).",
      reviewedBy: "SOLAR Editorial",
      reviewedUTC: "2025-10-09T12:00:00Z"
    },
    deadlinesReporting: {
      summary: [
        "Mail back DCJS’s annual verification within 10 days of receiving it.",
        "Report address, work/school, or internet-identifier changes within 10 days.",
        "Level 3 or “sexual predator”: go to the police every 90 days to verify your address."
      ],
      watchOuts: [
        "Missing any deadline can be charged as a felony.",
        "Keep dated copies and mailing receipts for everything you send."
      ],
      validationNote: "See § 168-f(3)–(4), DCJS FAQ, and § 168-t (penalties).",
      reviewedBy: "SOLAR Editorial",
      reviewedUTC: "2025-10-09T12:00:00Z"
    },
    residencyPresence: {
      summary: [
        "NY does not let cities or counties make their own residency bans.",
        "While on supervision, separate 1,000-foot school-grounds restrictions may apply."
      ],
      citations: [
        "[People v. Diack (2015)](https://law.justia.com/cases/new-york/court-of-appeals/2015/1.html)",
        "[Exec. Law § 259-c(14)](https://www.nysenate.gov/legislation/laws/EXC/259-C)"
      ],
      reviewedBy: "SOLAR Editorial",
      reviewedUTC: "2025-10-09T12:00:00Z"
    },
    reliefPaths: {
      summary: [
        "Some Level 2 registrants (without certain designations) can ask the court for relief after 30 years registered.",
        "Courts can also modify risk level on motion."
      ],
      edgeCases: [
        "Time you spent registered in another state does not count toward NY’s duration unless the Legislature changes the law."
      ],
      citations: [
        "[§ 168-o](https://www.criminaljustice.ny.gov/nsor/claws.htm#o)",
        "[People v. Corr/McDonald (2024)](https://www.nycourts.gov/ctapps/Decisions/2024/Jun24/67%2668opn24-Decision.pdf)"
      ],
      reviewedBy: "SOLAR Editorial",
      reviewedUTC: "2025-10-09T12:00:00Z"
    }
  }
};