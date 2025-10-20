export default {
  state: "New Jersey",
  lastReviewedUTC: "2025-10-13T00:00:00Z",

  atAGlance: {
    mustRegister: "**Who:** People convicted, adjudicated delinquent, or found not guilty by reason of insanity for listed sex offenses must register; out-of-state students/workers meeting thresholds must also register; see [N.J.S.A. 2C:7-2](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    initialDeadline: "**Deadline:** Register **before release** from confinement and also **within 48 hours after release**; movers into NJ register **within 10 days** of first residing; see [2C:7-2(c)(2)–(3)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    verificationCadence: "**Verification:** Address verification **every 90 days** for certain categories and **annually** for others, in the manner prescribed by the Attorney General; see [2C:7-2(e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    primaryMethod: "**Method:** **In person** with local police (or NJSP where no local force). State forms state you must personally register, re-register, and verify; see [NJSP acknowledgment form](https://nj.gov/njsp/spoff/pdf/010311-meganslaw-acknowledge-eng.pdf) and [2C:7-2(c)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    topGotchas: [
      "Give **10 days’ advance notice** before moving; re-register in the new town; see [2C:7-2(d)(1)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
      "Report **employment or school changes within 5 days**; see [2C:7-2(d)(1)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
      "Certain registrants verify **every 90 days**; missing a window is a **third-degree crime**; see [2C:7-2(e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
      "Students/workers from out-of-state can trigger NJ duties (e.g., **>14 consecutive days** or **>30 aggregate days/year**); see [2C:7-2(a)(2), (c)(5)–(6)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
      "Internet registry exposure varies by **tier and statutory criteria**; see [2C:7-13](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-13/) and [NJSP SOIR](https://www.nj.gov/njsp/sex-offender-registry/)."
    ],
    officialLinks: {
      statuteIndex: "https://lis.njleg.state.nj.us/nxt/gateway.dll?f=xhitlist&xhitlist_q=2C%3A7-2.%20Registration%20of%20sex%20offenders%3B%20definition%3B%20requirements.",
      adminRules: "https://www.nj.gov/oag/dcj/megan/meganguidelines-2-07.pdf",
      statePoliceRegistry: "https://www.nj.gov/njsp/sex-offender-registry/",
      formsPortal: "https://nj.gov/njsp/spoff/pdf/010311-meganslaw-acknowledge-eng.pdf",
      publicWebsite: "https://www.nj.gov/njsp/sex-offender-registry/so-search.shtml"
    }
  },

  whoMustRegister: "**Scope:** Covered offenses are listed in [2C:7-2(b)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/). Non-residents must register if they work or attend school in NJ beyond thresholds; see [2C:7-2(a)(2), (c)(5)–(6)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/). Public website posting is governed by the Internet Registry Act at [2C:7-12 to -19](https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml).",

  deadlinesReporting: [
    "**Initial:** Register before release and also within **48 hours** after release; movers into NJ register within **10 days**; see [2C:7-2(c)(2)–(3)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Move:** Notify current agency and re-register **≥10 days before** first residing at the new address; see [2C:7-2(d)(1)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Employment/School:** Report status changes **within 5 days**; see [2C:7-2(d)(1)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Higher-Ed:** Also register with campus police within **10 days** of starting; see [2C:7-2(c)(7)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Tech Access:** Provide information on internet-capable device access and update on change; violations are a **third-degree crime**; see [2C:7-2(d)(2)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
  ],

  verificationInPerson: [
    "**Cadence:** Verify address **every 90 days** or **annually** depending on subsection (e) category; see [2C:7-2(e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Format:** State materials instruct **personal** registration/re-registration/verification with police; keep receipts; see [NJSP acknowledgment form](https://nj.gov/njsp/spoff/pdf/010311-meganslaw-acknowledge-eng.pdf).",
    "**Consequence:** Failure to verify as prescribed is a **third-degree crime**; see [2C:7-2(e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
  ],

  residencyPresence: "**Residency:** No statewide residency ban. Municipal buffer-zone ordinances are **preempted** by state law; see *[G.H. v. Township of Galloway](https://law.justia.com/cases/new-jersey/supreme-court/2009/a-64-08-opn.html)*. Registry and notification remain governed by [2C:7-1 to -11](https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml).",

  employmentEducationInternet: [
    "**Students/Workers (from out-of-state):** Registration required if employed **>14 consecutive days** or **>30 aggregate days/year**, or enrolled in school; see [2C:7-2(a)(2), (c)(5)–(6)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Higher-Ed on campus:** Also register with the institution’s police within **10 days**; see [2C:7-2(c)(7)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Internet access/devices:** Must disclose routine access/use and update on change; see [2C:7-2(d)(2)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
  ],

  publicWebsiteExposure: [
    "**Internet Registry:** Posting rules are in [2C:7-13](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-13/). Tier-3 are posted; Tier-2 often posted; certain Tier-2/low-risk may be posted if statutory criteria met (e.g., repetitive/compulsive under [2C:47-3](https://law.justia.com/codes/new-jersey/title-2c/section-2c-47-3/)).",
    "**Search site:** See the NJ State Police [Sex Offender Internet Registry](https://www.nj.gov/njsp/sex-offender-registry/so-search.shtml).",
    "**Recent clarification:** NJ Supreme Court addressed proofs and challenges for Internet listing under [2C:7-13(b)(2)](https://www.njcourts.gov/system/files/court-opinions/2024/a_23_23.pdf)."
  ],

  travelInterstate: [
    "**Short visits:** NJ law does not impose a days-limit for casual travel, but **work/school** thresholds can trigger duties; see [2C:7-2(a)(2)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Leaving NJ:** Maintain compliance in destination state. Internet posting in NJ persists while obligated here; see [2C:7-12 to -19](https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml)."
  ],

  visitingTraveling: [
    "**Students/Workers visiting NJ:** If your non-resident stay meets employment or school thresholds, **register within 10 days** with local police; see [2C:7-2(c)(5)–(6)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Higher-Ed visitors:** Also register with campus police within **10 days** if the institution has a police unit; see [2C:7-2(c)(7)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
  ],

  complianceEnforcement: "**Penalties:** Failure to register/notify/verify as required is a **third-degree crime**; see [2C:7-2(a)(3), (d)(1), (e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/). Community notification and Internet registry are administered per statute and Attorney General guidance; see [2C:7-8 to -10](https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml) and [AG Guidelines](https://www.nj.gov/oag/dcj/megan/meganguidelines-2-07.pdf).",

  reliefPaths: [
    "**15-year petition:** Court may terminate registration after **15 offense-free years** and a finding the person is **not likely to pose a threat**; ineligible if more than one sex offense or for specified crimes (e.g., **aggravated sexual assault**, certain **sexual assaults**); see [2C:7-2(f)–(g)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Internet listing challenges:** Standards for Internet publication under [2C:7-13(b)(2)] clarified by the NJ Supreme Court; see *[In re Registrant R.S.](https://www.njcourts.gov/system/files/court-opinions/2024/a_23_23.pdf)*.",
    "**Agency resources:** NJSP explains removal scenarios and relief overview; see [SOIR important information](https://www.nj.gov/njsp/sex-offender-registry/so-important-information.shtml)."
  ],

  specialPopulations: [
    "**Juveniles:** Juveniles adjudicated delinquent for covered offenses may be subject to registration; relief rules still hinge on [2C:7-2(f)–(g)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    "**Higher-education affiliates:** Additional campus registration within **10 days** applies; see [2C:7-2(c)(7)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
  ],

  costs: [
    "**Fees:** No routine statewide registration fee is specified in [2C:7-2](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/). Separate monthly penalties for certain offenders may exist under parole statutes; check [N.J.S.A. 30:4-123.97](https://lis.njleg.state.nj.us/nxt/gateway.dll?f=xhitlist&xhitlist_q=30%3A4-123.97%20Additional%20penalty%20for%20certain%20sex%20offenders.)."
  ],

  recentChangesLitigation: [
    {
      type: "statute",
      bill: "P.L.2024, c.92 (S2652)",
      session: "221st Legislature",
      effective: "2024-07-01",
      summary: "Amended 2C:7-2 and related child-exploitation provisions; updated offense coverage and cross-references.",
      link: "https://pub.njleg.gov/Bills/2024/AL24/92_.HTM"
    },
    {
      type: "case",
      name: "In the Matter of Registrant R.S.",
      court: "New Jersey Supreme Court",
      date: "2024-07-02",
      holding: "Clarified standards and burdens for Internet publication under 2C:7-13(b)(2) and registrants’ ability to challenge proof.",
      link: "https://www.njcourts.gov/system/files/court-opinions/2024/a_23_23.pdf"
    },
    {
      type: "case",
      name: "G.H. v. Township of Galloway",
      court: "New Jersey Supreme Court",
      date: "2009-05-07",
      holding: "Municipal residency-restriction ordinances are preempted by Megan’s Law.",
      link: "https://law.justia.com/cases/new-jersey/supreme-court/2009/a-64-08-opn.html"
    }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Call local police where you will live to schedule **in-person** registration; bring ID, proofs, and any court paperwork; see [2C:7-2(c)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
      "If enrolling/working at a **college**, also register with campus police within **10 days**; see [2C:7-2(c)(7)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
      "Record your **verification cadence** (90-day vs annual) per [2C:7-2(e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
      "Set reminders for **10-day move notice** and **5-day job/school changes**; see [2C:7-2(d)(1)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
    ],
    movingOutChecklist: [
      "Give **10 days’ prior notice** to current agency; re-register in new town/state as required; see [2C:7-2(d)(1)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
      "Confirm whether your **NJ Internet listing** remains while you are still obligated; see [2C:7-12 to -19](https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml)."
    ],
    recordsRequestTemplate: "Request your registry file, tiering documents, and verification history from local police/NJSP citing your records need for compliance under [2C:7-2(e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/) and notice duties under [2C:7-2(d)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
    reliefPetitionOutline: "Draft a motion to terminate registration under [2C:7-2(f)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/): include 15-year offense-free proof and expert/records showing you are **not likely to pose a threat**; address ineligibility bars in [2C:7-2(g)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/) and any Internet-listing issues under [2C:7-13](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-13/)."
  },

  resources: {
    legalAid: [
      { name: "NJ Office of the Public Defender – Special Litigation", link: "https://www.nj.gov/defender/media/press/20240701_Special_Litigation_Team_Secured_Significant_Supreme_Court_Win_for_Megans_Law_Clients.shtml" }
    ],
    advocacy: [
      { name: "NJ Courts – Megan’s Law Implementation Report (context)", link: "https://www.njcourts.gov/sites/default/files/courts/criminal/meganslaw-2024.pdf" }
    ],
    reentry: [
      { name: "NJSP – Megan’s Law Overview", link: "https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml" }
    ]
  },

  citations: [
    { label: "N.J.S.A. 2C:7-2 (Registration; deadlines; verification; relief)", url: "https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/" },
    { label: "N.J.S.A. 2C:7-12 to -19 (Internet Registry Act)", url: "https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml" },
    { label: "N.J.S.A. 2C:7-13 (Who appears online)", url: "https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-13/" },
    { label: "Attorney General Megan’s Law Guidelines (2007)", url: "https://www.nj.gov/oag/dcj/megan/meganguidelines-2-07.pdf" },
    { label: "G.H. v. Township of Galloway (2009) – Preemption", url: "https://law.justia.com/cases/new-jersey/supreme-court/2009/a-64-08-opn.html" },
    { label: "In re Registrant R.S. (N.J. 2024) – Internet listing standards", url: "https://www.njcourts.gov/system/files/court-opinions/2024/a_23_23.pdf" },
    { label: "P.L.2024, c.92 (amending 2C:7-2)", url: "https://pub.njleg.gov/Bills/2024/AL24/92_.HTM" },
    { label: "NJSP – Sex Offender Internet Registry (SOIR)", url: "https://www.nj.gov/njsp/sex-offender-registry/" }
  ],

  badges: {
    residencyZones: false,
    lifetimePossible: true,
    verificationQuarterly: true
  },

highlights: {
  residency: "New Jersey has **no statewide residency restrictions** for registrants; local limits were *preempted* by state law in [Galloway (N.J. 2009)](https://law.justia.com/cases/new-jersey/supreme-court/2009/a-64-08-opn.html), and all residence matters fall under [NJSP Megan’s Law](https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml).",
  presence: "There are **no state proximity or loitering zones** tied to Megan’s Law; any limits usually arise from **individual parole or probation terms**, while notification rules come from [NJSP Megan’s Law](https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml).",
  duration: "Registration continues **for life** unless ended by court after **15 years offense-free** with proof of no danger; repeat or barred offenses remain **permanent** under [2C:7-2(f)–(g)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/).",
  tiering: "New Jersey assigns **Tier 1 (low)**, **Tier 2 (moderate)**, and **Tier 3 (high)** risk levels under the Attorney General’s *Megan’s Law Guidelines*; these tiers decide **who receives community notice** and **who appears online**. Tier 3 registrants are posted to the Internet Registry, Tier 2 may appear depending on risk factors, and Tier 1 are **not publicly listed** but may be disclosed to law enforcement and select organizations. Rules and publication standards appear in [AG Guidelines (2007)](https://www.nj.gov/oag/dcj/megan/meganguidelines-2-07.pdf) and [2C:7-13](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-13/)."
},

  plainLanguage: {
    atAGlance: {
      summary: [
        "If you have a covered offense, you must register and keep police updated. Some people verify **every 90 days**; others **once a year**."
      ],
      watchOuts: [
        "Moving requires **10 days’ advance** notice. Job or school changes must be reported **within 5 days**."
      ],
      validationNote: "Key duties and timelines come straight from [2C:7-2(c)–(e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/). The Internet registry is governed by [2C:7-12 to -19](https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml).",
      reviewedUTC: "2025-10-13T00:00:00Z"
    },
    whoMustRegister: {
      summary: [
        "Most sex-offense convictions require registration. Out-of-state students/workers who spend enough time in NJ must register too."
      ],
      watchOuts: [
        "If you study or work here part-time, the **14-day/30-day** thresholds can still trigger duties."
      ],
      validationNote: "See definitions and non-resident triggers in [2C:7-2(a)(2), (b), (c)(5)–(6)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
    },
    deadlinesReporting: {
      summary: [
        "Register before release and again within **48 hours** after release.",
        "Tell police **10 days before** you move, and **within 5 days** of job/school changes."
      ],
      watchOuts: [
        "If you start at a college, also register with campus police **within 10 days**."
      ],
      validationNote: "Deadlines are specified in [2C:7-2(c)(2)–(3), (c)(7), (d)(1)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
    },
    verificationInPerson: {
      summary: [
        "Plan for **quarterly** or **annual** verification depending on your category.",
        "State materials require **in-person** interactions with police."
      ],
      watchOuts: [
        "Missing a verification is a **third-degree crime**."
      ],
      validationNote: "Cadence and penalties appear in [2C:7-2(e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/). The NJSP form confirms **personal** registration/verification: [acknowledgment](https://nj.gov/njsp/spoff/pdf/010311-meganslaw-acknowledge-eng.pdf)."
    },
    residencyPresence: {
      summary: [
        "NJ has **no statewide residency ban**. Town buffer zones were struck down."
      ],
      watchOuts: [
        "Supervision orders or housing program rules can still limit where you live."
      ],
      validationNote: "See *[G.H. v. Galloway](https://law.justia.com/cases/new-jersey/supreme-court/2009/a-64-08-opn.html)* (preemption) and statutory framework at [2C:7-1 to -11](https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml)."
    },
    employmentEducationInternet: {
      summary: [
        "Out-of-state students/workers may need to register in NJ.",
        "College affiliates must also register with campus police.",
        "You must disclose internet-device access."
      ],
      watchOuts: [
        "Thresholds: **>14 consecutive days** or **>30 aggregate days/year** of work; campus registration **within 10 days**."
      ],
      validationNote: "See [2C:7-2(a)(2), (c)(5)–(7), (d)(2)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
    },
    publicWebsiteExposure: {
      summary: [
        "Tier and statute determine who appears on the public site. Tier-3 are listed; many Tier-2 are listed; exceptions exist."
      ],
      watchOuts: [
        "Courts can review and registrants can challenge Internet posting in certain cases."
      ],
      validationNote: "Posting rules are in [2C:7-13](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-13/) and recent guidance in *[In re R.S.](https://www.njcourts.gov/system/files/court-opinions/2024/a_23_23.pdf)*."
    },
    travelInterstate: {
      summary: [
        "Short visits alone do not trigger NJ registration, but **work/school** thresholds do."
      ],
      watchOuts: [
        "Keep compliance in both NJ and the other state when you travel for work or school."
      ],
      validationNote: "Non-resident triggers and deadlines are in [2C:7-2(a)(2), (c)(5)–(6)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
    },
    visitingTraveling: {
      summary: [
        "If you are visiting NJ to work or study and hit the thresholds, you must register here."
      ],
      watchOuts: [
        "Campus registration with university police is a **separate step**."
      ],
      validationNote: "See [2C:7-2(c)(5)–(7)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
    },
    complianceEnforcement: {
      summary: [
        "Failure to register, notify, or verify is a **third-degree crime**."
      ],
      watchOuts: [
        "Criminal charges can affect eligibility for later **relief**."
      ],
      validationNote: "Criminal exposure is in [2C:7-2(a)(3), (d)(1), (e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/); implementation guided by [AG Guidelines](https://www.nj.gov/oag/dcj/megan/meganguidelines-2-07.pdf)."
    },
   reliefPaths: {
      summary: [
        "After **15 offense-free years**, you can ask a court to end registration if you are **not a danger**.",
        "Some offenses or multiple offenses are **not eligible**."
      ],
      watchOuts: [
        "Internet posting rules are distinct; recent cases discuss proofs and challenges."
      ],
      validationNote: "See [2C:7-2(f)–(g)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/) and *[In re R.S.](https://www.njcourts.gov/system/files/court-opinions/2024/a_23_23.pdf)*."
    },
    specialPopulations: {
      summary: [
        "Juvenile cases can involve registration; relief still follows the **15-year** rule unless barred."
      ],
      watchOuts: [
        "Campus rules add an extra registration step for students and workers."
      ],
      validationNote: "Refer to [2C:7-2(b), (c)(7), (f)–(g)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/)."
    },
    checklistsScripts: {
      summary: [
        "Use reminders for the **10-day move** and **5-day job/school** windows, and your **90-day/annual** verification schedule."
      ],
      validationNote: "Operational steps are drawn from [2C:7-2(c)–(e)](https://law.justia.com/codes/new-jersey/title-2c/section-2c-7-2/) and the NJSP materials at the [Megan’s Law overview](https://www.nj.gov/njsp/sex-offender-registry/megans-law.shtml)."
    }
  }
};