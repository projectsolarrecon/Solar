// src/data/state-registry/ga.ts
export default {
  state: "Georgia",
  lastReviewedUTC: "2025-10-08T15:00:00Z",
  atAGlance: {
    authority: "Georgia Bureau of Investigation (GBI) & county sheriffs",
    registryName: "Georgia Sex Offender Registry",
    lawCite: "O.C.G.A. § 42-1-12 et seq.",
    riskLevels: "SORRB classifies Level I / Level II; 'Sexually Dangerous Predator' designation triggers extra supervision under § 42-1-14.",
    primaryPortal: "[GBI Sex Offender Registry](https://state.sor.gbi.ga.gov/sort_public/)"
  },
  whoMustRegister: "Individuals convicted of a 'dangerous sexual offense' or a qualifying offense against a minor, as defined in O.C.G.A. § 42-1-12(a)(9)-(10), and certain out-of-state, federal, military, or tribal convictions who live, work, or attend school in Georgia. Registration generally continues for life unless relieved by court order under § 42-1-19.",
  deadlinesReporting: [
    "Initial: In person with the sheriff of the county of residence within 72 hours of release to the community or entry into Georgia. Homeless individuals register where they sleep within 72 hours. (O.C.G.A. § 42-1-12(f)(2), (2.1))",
    "Annual: Re-register in person within the 72 hours before your birthday to be photographed and fingerprinted. (O.C.G.A. § 42-1-12(f)(4), (n)(3))",
    "Changes: Update any required registration information within 72 hours of the change; if changing address, notify both the old and new county sheriffs within 72 hours **before** establishing the new address. Homeless registrants must update new sleeping locations within 72 hours. (O.C.G.A. § 42-1-12(f)(5))",
    "Moving out of state: Provide the new address to the Georgia sheriff within 72 hours prior to moving and register in the new state within 72 hours after establishing residence there. (O.C.G.A. § 42-1-12(c)(5), (f)(5))"
  ],
  verificationInPerson: [
    "Annual in-person verification: within 72 hours prior to the registrant’s birthday. (O.C.G.A. § 42-1-12(f)(4), (n)(3))",
    "Hospice/skilled nursing/residential care exception: with sheriff approval, may complete annual verification any time during the birth month; fingerprinting may be waived but a photo is authorized. (O.C.G.A. § 42-1-12(f)(4.1))",
    "While under supervision, the Department of Community Supervision may impose additional mid-year verification/reporting conditions. (DCS Sex Offender Special Conditions)"
  ],
  residencyPresence: "Statewide distance restrictions prohibit residing within 1,000 feet of child care facilities, churches, schools, or 'areas where minors congregate' for qualifying offenses committed on/after July 1, 2008. If such a facility later moves near an existing lawful residence, a statutory process applies. Portions of earlier residence restrictions were held unconstitutional as applied to preexisting homes. (O.C.G.A. § 42-1-15; Mann v. Ga. Dept. of Corrections)",
  employmentEducationInternet: [
    "Employment/volunteering: Generally prohibited at or within 1,000 feet of child care facilities, schools, or churches for qualifying offenders; sexually dangerous predators also face 1,000-foot employment limits near areas where minors congregate. (O.C.G.A. § 42-1-15(c))",
    "Students and workers: Must register in any state where employed, carry on a vocation, or attend school, in addition to residence-based duties. (O.C.G.A. § 42-1-12(f)(4), (c)(4))",
    "Internet: No categorical statewide internet ban in § 42-1-12; however, probation/parole special conditions may restrict internet or sexually explicit material. (DCS Sex Offender Special Conditions)"
  ],
  publicWebsiteExposure: [
    "GBI maintains a public, searchable registry with name, photo, address, offense, and risk level; sheriffs also maintain local lists and may post in public buildings/online. (O.C.G.A. § 42-1-12(h), (i), (o); GBI portal)",
    "Victim identities are not released. (O.C.G.A. § 42-1-12(o))"
  ],
  travelInterstate: [
    "Leaving Georgia to reside elsewhere: notify the Georgia sheriff of new address within 72 hours prior to moving, and register in the destination state within 72 hours after establishing residence. (O.C.G.A. § 42-1-12(f)(5))",
    "Working/attending school across state lines: you must also register in that other state. (O.C.G.A. § 42-1-12(f)(4))"
  ],
  visitingTraveling: [
    "Nonresidents who enter Georgia and meet § 42-1-12(e) triggers (e.g., residence/sleeping in Georgia, employment, or school attendance) must register; case law makes clear there is no automatic 14-day 'grace period' once covered. (O.C.G.A. § 42-1-12; Dunn v. State, 286 Ga. 238 (2009))",
    "Short visits that do not establish 'residence' or other statutory triggers may not require registration, but thresholds are fact-specific; consult the destination county sheriff in advance."
  ],
  complianceEnforcement: "Failure to comply (including failing to report within 72 hours prior to birthday) is a felony: 1–30 years’ imprisonment for a first conviction; 5–30 years for a second. Venue may be in any county where registration is required or information was false. (O.C.G.A. § 42-1-12(n), (r))",
  reliefPaths: [
    "Petition for release from registration and from residency/employment restrictions in superior court under O.C.G.A. § 42-1-19. Certain categories (elderly, disabled, confined to specified facilities) may be considered; other categories require time-since-completion and a Level I risk classification. (O.C.G.A. § 42-1-19)",
    "Amendments effective July 1, 2024 (SB 493) revised eligibility, including express provisions for individuals 80+ and clarified timelines/risk-level prerequisites. (SB 493 (2024))",
    "A full pardon may remove certain civil disabilities; Georgia Supreme Court has recognized a pardon’s effect on registry-related disabilities (firearms excluded). Relief still typically requires court order to terminate registration. (State v. Davis, 303 Ga. 684 (2018), cited in § 42-1-12 annotations)"
  ],
  specialPopulations: [
    "Homeless: Register where you sleep within 72 hours and update sleeping location changes within 72 hours. (O.C.G.A. § 42-1-12(f)(2.1), (5))",
    "Elderly/medically incapacitated/long-term care residents: Special verification accommodation and potential eligibility for relief under § 42-1-19(a)(1). (O.C.G.A. § 42-1-12(f)(4.1); § 42-1-19(a)(1))",
    "Juveniles: Juvenile adjudications are not 'convictions' for triggering 'criminal offense against a victim who is a minor' under § 42-1-12(a)(9)(C); juveniles tried as adults may be required to register. (GBI FAQ; § 42-1-12(a)(9)(C))"
  ],
  costs: [
    "State law references 'associated fees' but does not set a uniform statewide amount in § 42-1-12; counties may assess administrative fees—confirm locally with the sheriff’s office. (O.C.G.A. § 42-1-12(b)(1))",
    "Court filing and service fees apply to petitions for relief under § 42-1-19 (vary by county superior court)."
  ],
  recentChangesLitigation: [
    { type: "statute", bill: "HB 188 (\"Mariam’s Law\")", session: "2023", effective: "2023-05-04", summary: "Amended multiple provisions related to sexual offenses and SORRB operations, including risk processes and public safety measures.", link: "https://www.legis.ga.gov/api/legislation/document/20232024/220448" },
    { type: "statute", bill: "SB 493", session: "2024", effective: "2024-07-01", summary: "Revised O.C.G.A. § 42-1-19, updating eligibility categories and timelines for petitions to terminate registration and restrictions.", link: "https://gov.georgia.gov/document/2024-signed-legislation/sb-493/download" },
    { type: "case", name: "Mann v. Georgia Dept. of Corrections", court: "Ga. Supreme Court", date: "2007-11", holding: "Residency restriction unconstitutional as applied where a child-care facility located within 1,000 feet of a registrant’s previously lawful home—constituted a regulatory taking.", link: "https://law.justia.com/cases/georgia/supreme-court/2007/s07a1043-1.html" },
    { type: "rule", cite: "SORRB Rules (Ga. Comp. R. & Regs. 594-1)", effective: "current", summary: "Implements risk assessment classifications used for relief eligibility and supervision decisions.", link: "https://rules.sos.ga.gov/gac/594-1" }
  ],
  checklistsScripts: {
    newArrivalChecklist: [
      "Within 72 hours of release/entry to GA, register in person with county sheriff; bring ID, conviction details, residences/sleeping location, vehicle and employment/school info.",
      "Calendar your annual re-registration window (72 hours prior to birthday); ask the sheriff for any local fees and preferred check-in times.",
      "If homeless, document sleeping location(s) and update within 72 hours of any change.",
      "If starting work or school (in GA or another state), confirm dual-state registration requirements.",
      "Review distance restrictions before signing a lease or accepting employment near restricted zones."
    ],
    movingOutChecklist: [
      "Notify your current Georgia sheriff of your new out-of-state address within 72 hours prior to moving.",
      "Register in the new state within 72 hours after establishing residence there.",
      "Confirm with the Georgia sheriff that your record has been updated; keep proof of out-of-state registration.",
      "If employment/school will remain in Georgia, clarify any continued Georgia registration duties."
    ],
    recordsRequestTemplate:
`To: [County Sheriff Sex Offender Registry Unit]
Subject: Copy of My Registration File

Dear Records Officer:

I am requesting copies of my current sex offender registration record, including all information transmitted to GBI under O.C.G.A. § 42-1-12(h), my last verification form, and any notes regarding my classification. I am the registrant. I can present ID upon pickup. Please inform me of any copying fees.

Sincerely,
[Name, DOB, SSN last4, Address, Phone]`,
    reliefPetitionOutline:
`Caption in the Superior Court [County]
Petition under O.C.G.A. § 42-1-19 for Release from Registration and Restrictions

1. Jurisdiction/Venue (conviction county, or residence if out-of-state conviction).
2. Background & Offense; completion dates for incarceration, parole/probation.
3. Eligibility pathway: cite § 42-1-19(a) paragraph(s) and, if applicable, Level I risk proof (SORRB) and elapsed time (5 or 10 years).
4. Evidence: treatment/compliance records; risk assessment; letters of support; housing/employment plan; lack of subsequent offenses.
5. Requested relief: terminate registration and specific restrictions (residency/employment), or alternative partial relief.
6. Service: DA and sheriffs per § 42-1-19(b).
7. Proposed order.

Attach: exhibits; any recent SORRB classification; proof of disability/age (if relying on (a)(1)).`
  },
  resources: {
    legalAid: [
      { name: "Atlanta Legal Aid Society", link: "https://atlantalegalaid.org/home/" },
      { name: "Georgia Legal Services Program (GLSP)", link: "https://www.glsp.org/need-help/" }
    ],
    advocacy: [
      { name: "Sexual Offender Risk Review Board (SORRB)", link: "https://sorrb.georgia.gov/" }
    ],
    reentry: [
      { name: "GBI Sex Offender Registry (search & info)", link: "https://state.sor.gbi.ga.gov/sort_public/" },
      { name: "Department of Community Supervision – Sex Offender Special Conditions", link: "https://dcs.georgia.gov/felony-supervision/adult-felony-probation-supervision/sex-offender-special-conditions-supervision" }
    ]
  },
  citations: [
    { label: "O.C.G.A. § 42-1-12 (GBI official PDF)", url: "https://gbi.georgia.gov/document/document/ocga-42-1-12/download" },
    { label: "GBI – Georgia Sex Offender Registry (portal)", url: "https://state.sor.gbi.ga.gov/sort_public/" },
    { label: "GBI – Sex Offender Registry FAQ", url: "https://gbi.georgia.gov/about-us/frequently-asked-questions/sex-offender-registry-frequently-asked-questions" },
    { label: "O.C.G.A. § 42-1-15 (GBI page/PDF)", url: "https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf" },
    { label: "O.C.G.A. § 42-1-19 (Justia codified 2024)", url: "https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/" },
    { label: "SB 493 (2024) – Governor’s signed act (amending § 42-1-19)", url: "https://gov.georgia.gov/document/2024-signed-legislation/sb-493/download" },
    { label: "DCS – Sex Offender Special Conditions of Supervision", url: "https://dcs.georgia.gov/felony-supervision/adult-felony-probation-supervision/sex-offender-special-conditions-supervision" },
    { label: "SORRB – Agency Homepage", url: "https://sorrb.georgia.gov/" },
    { label: "Mann v. Georgia Dept. of Corrections (Ga. 2007)", url: "https://law.justia.com/cases/georgia/supreme-court/2007/s07a1043-1.html" }
  ],
  badges: {
    residencyZones: true,
    lifetimePossible: true,
    verificationQuarterly: false
  },
  plainLanguage: {
    atAGlance: {
      summary: [
        "Georgia’s registry is run by GBI, but you register with the county sheriff.",
        "Most people must register for life unless a court grants removal.",
        "Annual in-person check-in happens within the 72 hours before your birthday."
      ],
      watchOuts: [
        "Moving or changing jobs? Georgia has 72-hour update rules, and address changes must be reported **before** you move.",
        "Distance rules (1,000 feet) apply to housing and many jobs; always check a map with the sheriff first.",
        "If you work or go to school in another state, you may have to register there too."
      ],
      edgeCases: [
        "Homeless registrants register where they sleep and must update new sleeping spots within 72 hours.",
        "People in hospice/skilled nursing can verify during their birth month and may not need fingerprinting (photo still allowed).",
        "Visitors: there’s no automatic 14-day grace if you otherwise meet Georgia’s triggers to register."
      ],
      validationNote: "Sources: [O.C.G.A. § 42-1-12 (GBI PDF)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download), [GBI Registry Portal](https://state.sor.gbi.ga.gov/sort_public/), [GBI FAQ](https://gbi.georgia.gov/about-us/frequently-asked-questions/sex-offender-registry-frequently-asked-questions).",
      citations: [],
      reviewedBy: "SOLAR research team",
      reviewedUTC: "2025-10-08T15:00:00Z"
    },
    deadlinesReporting: {
      summary: [
        "Register in person within 72 hours of release/entry to GA.",
        "Re-register every year within 72 hours before your birthday.",
        "Report most changes within 72 hours; address changes must be reported to both sheriffs before moving."
      ],
      watchOuts: [
        "Missing your birthday window is a felony.",
        "If you move out of Georgia, you must notify Georgia before moving and register quickly in the new state."
      ],
      edgeCases: [
        "Homeless: you still must register and update sleeping locations within 72 hours.",
        "Hospice/nursing home residents can verify during the birth month with sheriff approval."
      ],
      validationNote: "See [§ 42-1-12(f), (n)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download).",
      citations: [],
      reviewedBy: "SOLAR research team",
      reviewedUTC: "2025-10-08T15:00:00Z"
    },
    residencyPresence: {
      summary: [
        "Georgia bans living within 1,000 feet of schools, churches, child care, or areas where minors congregate (for offenses on/after July 1, 2008).",
        "If a restricted site later moves near you, special provisions apply rather than automatic eviction."
      ],
      watchOuts: [
        "Earlier law forcing moves from preexisting homes was struck down as applied in *Mann*; today’s law still has strict zones.",
        "Local zoning/measurements can be complex—get the sheriff to measure."
      ],
      edgeCases: [
        "Some employment and volunteering is also restricted within 1,000 feet; sexually dangerous predators have added limits near areas where minors gather."
      ],
      validationNote: "See [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf) and *Mann v. GDC* (2007).",
      citations: [],
      reviewedBy: "SOLAR research team",
      reviewedUTC: "2025-10-08T15:00:00Z"
    },
    reliefPaths: {
      summary: [
        "You can ask a superior court to end registration and distance/job bans if you meet § 42-1-19’s eligibility.",
        "Many applicants must show a Level I risk classification and a waiting period (5 or 10 years after finishing sentence).",
        "New rules effective July 1, 2024 added categories (e.g., age 80+)."
      ],
      watchOuts: [
        "File in the right county and serve the DA and sheriffs as the statute requires.",
        "If denied, you typically must wait two years to refile."
      ],
      edgeCases: [
        "People with out-of-state convictions have special criteria and timing.",
        "Pardons can affect civil disabilities but usually do not end registration without a court order."
      ],
      validationNote: "See [§ 42-1-19 (2024)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/) and [SB 493 (2024)](https://gov.georgia.gov/document/2024-signed-legislation/sb-493/download).",
      citations: [],
      reviewedBy: "SOLAR research team",
      reviewedUTC: "2025-10-08T15:00:00Z"
    }
  }
};