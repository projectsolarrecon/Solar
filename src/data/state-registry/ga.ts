// src/data/state-registry/ga.ts
export default {
  state: "Georgia",
  lastReviewedUTC: "2025-10-08T16:20:00Z",
  atAGlance: {
    authority: "Georgia Bureau of Investigation (GBI) & county sheriffs",
    registryName: "Georgia Sex Offender Registry",
    lawCite: "[O.C.G.A. § 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download), [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf), [§ 42-1-19](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/), [§ 42-1-14](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-14/)",
    riskLevels: "SORRB classifies Level I / Level II; 'Sexually Dangerous Predator' designation adds GPS and mid-year reporting under [§ 42-1-14](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-14/).",
    primaryPortal: "[GBI Sex Offender Registry (public search)](https://state.sor.gbi.ga.gov/sort_public/)"
  },
  whoMustRegister: "People convicted of a 'dangerous sexual offense' or qualifying offense against a minor under [O.C.G.A. § 42-1-12(a)(9)-(10)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/) and certain out-of-state/federal/military/tribal convictions who live, work, or attend school in Georgia. Registration is generally for life unless relieved by court order under [§ 42-1-19](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/).",
  deadlinesReporting: [
    "Initial: Register **in person** with the county sheriff within 72 hours of release to the community or entry into Georgia. Homeless individuals register where they sleep within 72 hours. ([§ 42-1-12(f)(2), (2.1)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
    "Annual: Re-register in person within the 72 hours before your birthday (photo and fingerprints). ([§ 42-1-12(f)(4), (n)(3)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
    "Changes: Report most changes within 72 hours. For address changes, notify **both** the old and new county sheriffs within 72 hours **before** establishing the new address. Homeless registrants must update new sleeping locations within 72 hours. ([§ 42-1-12(f)(5)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
    "Moving out of state: Give your new address to your Georgia sheriff within 72 hours prior to moving and register in the destination state within 72 hours after establishing residence. ([§ 42-1-12(c)(5), (f)(5)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))"
  ],
  verificationInPerson: [
    "Annual verification within 72 hours prior to your birthday. ([§ 42-1-12(f)(4), (n)(3)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
    "Hospice/skilled nursing/residential care accommodation: with sheriff approval, verification may occur anytime during the birth month; fingerprinting may be waived but a photo is authorized. ([§ 42-1-12(f)(4.1)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
    "Sexually Dangerous Predators: additional mid-year in-person reporting six months after the birth month. ([§ 42-1-14(e)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-14/))"
  ],
  residencyPresence: "Georgia imposes a 1,000-foot residence ban (and some employment/loitering limits) for qualifying offenses committed on/after July 1, 2008, near child care facilities, churches, schools, or areas where minors congregate. ([§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf)) Portions of earlier eviction-style enforcement were held unconstitutional as applied to preexisting homes. ([Mann v. Georgia Dept. of Corrections, 282 Ga. 754 (2007)](https://law.justia.com/cases/georgia/supreme-court/2007/s07a1043-1.html))",
  employmentEducationInternet: [
    "Employment: Generally barred within 1,000 feet of child care facilities, schools, or churches for certain offenses; Sexually Dangerous Predators face additional limits near areas where minors congregate. ([§ 42-1-15(c)](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf))",
    "Students and workers: Registration is required where you live and also where you work or attend school (including out of state). ([§ 42-1-12(c)(4), (f)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
    "Internet: No blanket statewide internet ban in statute; probation/parole conditions may impose restrictions case by case. (See DCS special conditions; consult supervising officer.)"
  ],
  publicWebsiteExposure: [
    "GBI public site lists name, photo, address, offense, and risk level; sheriffs may also publish local lists. ([§ 42-1-12(h), (i), (o)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download); [GBI portal](https://state.sor.gbi.ga.gov/sort_public/))",
    "Victim identities are withheld. ([§ 42-1-12(o)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))"
  ],
  travelInterstate: [
    "Leaving Georgia to reside elsewhere: notify the Georgia sheriff of your new address within 72 hours prior to moving; register in the new state within 72 hours after establishing residence. ([§ 42-1-12(f)(5)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
    "Working/attending school across state lines: you must also register in that other state. ([§ 42-1-12(c)(4)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))"
  ],
  visitingTraveling: [
    "Nonresidents must register if they meet statutory triggers (e.g., employment, school, or staying over thresholds) — there is no automatic grace period once covered. ([§ 42-1-12(e), (f)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
    "Short visits that do not meet 'residence' or other triggers may not require registration; thresholds are fact-specific — confirm with the destination county sheriff in advance."
  ],
  complianceEnforcement: "Failure to comply (including missing the birthday window or providing false information) is a felony: 1–30 years for a first conviction; 5–30 years for a second. Venue may be in any county where registration is required or information was false. ([§ 42-1-12(n), (r)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
  reliefPaths: [
    "Petition in superior court for release from registration and from distance/employment restrictions under [§ 42-1-19](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/). Many categories require a Level I classification and waiting periods after sentence completion.",
    "2024 amendments ([SB 493](https://gov.georgia.gov/document/2024-signed-legislation/sb-493/download)) adjusted eligibility and timing for some applicants (e.g., age/medical categories).",
    "Pardons may affect some civil disabilities but typically do **not** end registration absent a court order under [§ 42-1-19](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/)."
  ],
  specialPopulations: [
    "Homeless: Register where you sleep within 72 hours and update changes within 72 hours. ([§ 42-1-12(f)(2.1), (5)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
    "Elderly/medically incapacitated/long-term care residents: special verification accommodation and potential eligibility for relief. ([§ 42-1-12(f)(4.1)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download); [§ 42-1-19](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/))",
    "Juveniles: Juvenile adjudications are not 'convictions' for triggering some categories; youth tried as adults may be required to register. ([§ 42-1-12(a)(9)(C)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-12/))"
  ],
  costs: [
    "Statute references an 'amount of associated fees' but sets no uniform statewide amount; counties may assess administrative fees — confirm with the sheriff. ([§ 42-1-12(b)(1)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download))",
    "Court filing/service fees apply to petitions under [§ 42-1-19](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/); amounts vary by county."
  ],
  recentChangesLitigation: [
    { type: "statute", bill: "HB 188 (\"Mariam’s Law\")", session: "2023", effective: "2023-05-04", summary: "Revised SORRB provisions and added electronic monitoring/location tracking mandates for certain offenders; made other criminal-law changes.", link: "https://gov.georgia.gov/document/2023-signed-legislation/hb-188/download" },
    { type: "statute", bill: "SB 493", session: "2024", effective: "2024-07-01", summary: "Amended § 42-1-19 to adjust eligibility categories and timelines for petitions to terminate registration and restrictions.", link: "https://gov.georgia.gov/document/2024-signed-legislation/sb-493/download" },
    { type: "case", name: "Mann v. Georgia Dept. of Corrections, 282 Ga. 754 (2007)", court: "Ga. Supreme Court", date: "2007-11", holding: "Residency restriction could not be used to evict a homeowner when a restricted site later moved within 1,000 feet; unconstitutional as applied (takings).", link: "https://law.justia.com/cases/georgia/supreme-court/2007/s07a1043-1.html" }
  ],
  checklistsScripts: {
    newArrivalChecklist: [
      "Within 72 hours of release/entry to Georgia, register in person with the county sheriff; bring ID, conviction details, current/past addresses or sleeping locations, vehicle and employment/school info.",
      "Calendar your annual re-registration window (72 hours before your birthday); ask the sheriff about any local fees and preferred hours.",
      "If homeless, document sleeping location(s) and update within 72 hours of any change.",
      "If you work or attend school in another state, confirm dual-state registration requirements.",
      "Before signing a lease or accepting a job, verify 1,000-foot zones with the sheriff under § 42-1-15."
    ],
    movingOutChecklist: [
      "Notify your current Georgia sheriff of the new out-of-state address within 72 hours **before** moving.",
      "Register in the destination state within 72 hours after establishing residence there.",
      "If employment/school remains in Georgia, clarify any continuing Georgia duties.",
      "Keep proof of your out-of-state registration and Georgia notification."
    ],
    recordsRequestTemplate:
`To: [County Sheriff Sex Offender Registry Unit]
Subject: Copy of My Registration File

Dear Records Officer:

I request copies of my current sex offender registration record, including all information transmitted to GBI under O.C.G.A. § 42-1-12(h), my last verification form, and any notes regarding my classification. I am the registrant and can present ID upon pickup. Please inform me of any copying fees.

Sincerely,
[Name, DOB, SSN last4, Address, Phone]`,
    reliefPetitionOutline:
`IN THE SUPERIOR COURT OF [COUNTY], STATE OF GEORGIA
Petition under O.C.G.A. § 42-1-19 for Release from Registration and Restrictions

1. Jurisdiction/Venue.
2. Background: offense, sentence; completion dates for incarceration, parole/probation.
3. Eligibility path: cite § 42-1-19(a) category; include Level I classification and waiting period if required.
4. Evidence: treatment/compliance; risk assessment; letters of support; housing/employment plan; lack of subsequent offenses.
5. Relief requested: terminate registration and distance/employment restrictions; or partial relief.
6. Service: District Attorney and sheriffs per § 42-1-19(b).
7. Proposed order.

Attach: exhibits; SORRB documents; proof of age/disability if applicable.`
  },
  resources: {
    legalAid: [
      { name: "Atlanta Legal Aid Society", link: "https://atlantalegalaid.org/home/" },
      { name: "Georgia Legal Services Program (GLSP)", link: "https://www.glsp.org/need-help/" }
    ],
    advocacy: [
      { name: "Sexual Offender Risk Review Board (SORRB)", link: "https://rules.sos.ga.gov/gac/594-1" }
    ],
    reentry: [
      { name: "GBI Sex Offender Registry (search & info)", link: "https://state.sor.gbi.ga.gov/sort_public/" },
      { name: "GBI – Registry overview/contact", link: "https://gbi.georgia.gov/services/georgia-sex-offender-registry" }
    ]
  },
  citations: [
    { label: "O.C.G.A. § 42-1-12 (official PDF via GBI)", url: "https://gbi.georgia.gov/document/document/ocga-42-1-12/download" },
    { label: "O.C.G.A. § 42-1-15 (residency/employment restrictions, PDF)", url: "https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf" },
    { label: "O.C.G.A. § 42-1-19 (petition for removal)", url: "https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/" },
    { label: "O.C.G.A. § 42-1-14 (SDP; GPS; mid-year reporting)", url: "https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-14/" },
    { label: "GBI – Public Registry Portal", url: "https://state.sor.gbi.ga.gov/sort_public/" },
    { label: "GBI – Registry Services Page", url: "https://gbi.georgia.gov/services/georgia-sex-offender-registry" },
    { label: "GBI – Sex Offender Registry FAQ", url: "https://gbi.georgia.gov/about-us/frequently-asked-questions/sex-offender-registry-frequently-asked-questions" },
    { label: "HB 188 (2023) – Signed Act (Governor’s site)", url: "https://gov.georgia.gov/document/2023-signed-legislation/hb-188/download" },
    { label: "SB 493 (2024) – Signed Act (Governor’s site)", url: "https://gov.georgia.gov/document/2024-signed-legislation/sb-493/download" },
    { label: "Mann v. Ga. Dept. of Corrections, 282 Ga. 754 (2007)", url: "https://law.justia.com/cases/georgia/supreme-court/2007/s07a1043-1.html" }
  ],
  badges: {
    residencyZones: true,
    lifetimePossible: true,
    verificationQuarterly: false
  },
  plainLanguage: {
    atAGlance: {
      summary: [
        "Register with the **sheriff**; the **GBI** maintains the statewide site.",
        "Most people register for life unless a court ends it under § 42-1-19.",
        "Annual in-person check-in is due within the 72 hours **before your birthday**.",
        "Sexually Dangerous Predators have extra mid-year reporting and GPS rules."
      ],
      watchOuts: [
        "Address changes must be reported **before** moving to the new address.",
        "1,000-foot housing and job zones are strictly enforced in many areas.",
        "If you work or go to school in another state, you may have to register there too."
      ],
      edgeCases: [
        "Homeless folks register where they sleep and must update promptly.",
        "Hospice/nursing-home residents can verify during their birth month with approval.",
        "Visitors who trigger Georgia’s thresholds have to register — no automatic grace period."
      ],
      validationNote: "Sources: [§ 42-1-12](https://gbi.georgia.gov/document/document/ocga-42-1-12/download), [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf), [§ 42-1-19](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/), [§ 42-1-14](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-14/), [GBI portal](https://state.sor.gbi.ga.gov/sort_public/).",
      citations: [],
      reviewedBy: "SOLAR research team",
      reviewedUTC: "2025-10-08T16:20:00Z"
    },
    deadlinesReporting: {
      summary: [
        "Register in person within 72 hours of release/entry to GA.",
        "Re-register every year within 72 hours before your birthday.",
        "Report most changes within 72 hours; report address changes to both sheriffs **before** moving."
      ],
      watchOuts: [
        "Missing your birthday window is a **felony**.",
        "Moving out of Georgia? Notify Georgia **before** moving and register fast in the new state."
      ],
      edgeCases: [
        "Homeless: still must register and update sleeping locations within 72 hours.",
        "SDPs: extra in-person report six months after your birth month."
      ],
      validationNote: "See [§ 42-1-12(f), (n)](https://gbi.georgia.gov/document/document/ocga-42-1-12/download) and [§ 42-1-14(e)](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-14/).",
      citations: [],
      reviewedBy: "SOLAR research team",
      reviewedUTC: "2025-10-08T16:20:00Z"
    },
    residencyPresence: {
      summary: [
        "Georgia bans living within 1,000 feet of schools, churches, child care, or areas where minors congregate (post-July 1, 2008 offenses).",
        "If a restricted site moves in after you lawfully established residence, the old eviction approach was struck down as applied."
      ],
      watchOuts: [
        "Local measurements can be technical — ask the sheriff to measure and document.",
        "Employment/loitering limits also apply in many places."
      ],
      edgeCases: [
        "Some older offenses and unique housing setups can change which subsections apply."
      ],
      validationNote: "See [§ 42-1-15](https://state.sor.gbi.ga.gov/sort_public/42-1-15.pdf) and [Mann (2007)](https://law.justia.com/cases/georgia/supreme-court/2007/s07a1043-1.html).",
      citations: [],
      reviewedBy: "SOLAR research team",
      reviewedUTC: "2025-10-08T16:20:00Z"
    },
    reliefPaths: {
      summary: [
        "You can petition to end registration and distance/job bans if you meet [§ 42-1-19](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/) criteria.",
        "Many must show a Level I classification and a waiting period after sentence completion.",
        "2024 changes (SB 493) added/clarified eligibility routes for some groups."
      ],
      watchOuts: [
        "File in the correct county and serve the DA and sheriffs exactly as § 42-1-19 requires.",
        "If denied, a waiting period to refile often applies."
      ],
      edgeCases: [
        "Out-of-state convictions and pardons have special rules — relief still usually needs a court order.",
        "Medical/age-based routes may shorten or alter timing."
      ],
      validationNote: "See [§ 42-1-19](https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-19/) and [SB 493 (2024)](https://gov.georgia.gov/document/2024-signed-legislation/sb-493/download).",
      citations: [],
      reviewedBy: "SOLAR research team",
      reviewedUTC: "2025-10-08T16:20:00Z"
    }
  }
};