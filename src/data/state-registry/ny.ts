const d = {
  state: "New York",
  lastReviewedUTC: "2025-10-09T00:00:00Z",

  atAGlance: {
    mustRegister: "**Who must register:** Persons convicted of registerable sex offenses under **Correction Law Article 6-C (SORA)**, and persons with equivalent out-of-state convictions. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-a\" target=\"_blank\" rel=\"noopener\">N.Y. Correction Law § 168­a</a>",
    initialDeadline: "**Initial deadline:** Register at sentencing or at least **10 calendar days before release/discharge**. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-c\" target=\"_blank\" rel=\"noopener\">§ 168-c(2)</a>",
    verificationCadence: "**Verification cadence:** Level 3/designated offenders must personally verify **every 90 days**; Level 1 & 2 must personally appear for updated photographs every 3 years. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-f\" target=\"_blank\" rel=\"noopener\">§ 168-f(2)(b-2),(b-3)</a>",
    primaryMethod: "**Primary method:** In-person registration or verification via local law enforcement; changes reported in writing to DCJS/LEO.",
    topGotchas: [
      "Designation as sexual predator / sexually violent / predicate overrides many relief paths.",
      "Out-of-state equivalent offenses may trigger registration under SORA. <a href=\"https://oadnyc.org/sex-offenses/\" target=\"_blank\" rel=\"noopener\">OADNYC on out-of-state registration</a>",
      "Petition for risk level modification or removal is limited by statute (e.g. two-year wait). <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-o\" target=\"_blank\" rel=\"noopener\">§ 168-o</a>"
    ],
    officialLinks: {
      statuteIndex: "https://www.criminaljustice.ny.gov/nsor/claws.htm",
      adminRules: undefined,
      statePoliceRegistry: undefined,
      formsPortal: undefined,
      publicWebsite: "https://www.criminaljustice.ny.gov/nsor/"
    }
  },

  whoMustRegister: "**Who must register:** Under *Correction Law Article 6-C*, any person convicted in NY of a listed sex offense must register. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-a\" target=\"_blank\" rel=\"noopener\">§ 168-a</a> Those convicted outside NY must register if their offense is equivalent or if they are required to register elsewhere. <a href=\"https://oadnyc.org/sex-offenses/\" target=\"_blank\" rel=\"noopener\">Out-of-state registration rules</a>",
  deadlinesReporting: [
    "**Initial registration deadline:** At sentencing or at least **10 calendar days prior to release/discharge/parole**. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-c\" target=\"_blank\" rel=\"noopener\">§ 168-c(2)</a>",
    "**Change of address / status:** Report any change of address, enrollment, employment, or educational institution within **10 calendar days**. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-j\" target=\"_blank\" rel=\"noopener\">§ 168-j(1)</a>"
  ],
  verificationInPerson: [
    "**Level 3 / designated offenders:** Personal verification every 90 days with LEO. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-f\" target=\"_blank\" rel=\"noopener\">§ 168-f(2)</a>",
    "**Level 1 & 2:** Provide updated photograph every 3 years in person. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-f\" target=\"_blank\" rel=\"noopener\">§ 168-f(2)(b-3)</a>"
  ],
  residencyPresence: "**Residency / presence rule:** A sex offender who establishes residence in NY (or moves) must register within 10 days. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-k\" target=\"_blank\" rel=\"noopener\">§ 168-k(1)</a>",
  employmentEducationInternet: [
    "**Employment / education / Internet identifiers:** Must report employer, school, or institution and any residence in such institution. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-c\" target=\"_blank\" rel=\"noopener\">§ 168-c(1)</a>",
    "Change in status (employment, enrollment) must be reported within 10 days. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-j\" target=\"_blank\" rel=\"noopener\">§ 168-j(4)</a>"
  ],
  publicWebsiteExposure: [
    "Only **Level 2 and Level 3** offenders are in the public Subdirectory on the registry website. <a href=\"https://www.criminaljustice.ny.gov/nsor/\" target=\"_blank\" rel=\"noopener\">NYS Sex Offender Registry (public)› Info</a>",
    "Level 1 registrants exist in the registry but are not publicly listed with full details. <a href=\"https://www.criminaljustice.ny.gov/nsor/\" target=\"_blank\" rel=\"noopener\">Registry site</a>"
  ],
  travelInterstate: [
    "**Moving into NY:** Must notify DCJS within 10 days. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-k\" target=\"_blank\" rel=\"noopener\">§ 168-k(1)</a>",
    "If traveling short-term (< 10 days) generally no registration, unless residence is established."
  ],
  visitingTraveling: [
    "Visits shorter than 10 days typically do not require registration in NY.",
    "Longer or repeated stays may be deemed residence requiring registration under § 168-k."
  ],
  complianceEnforcement: "**Enforcement / Penalties:** Failure to register, verify, or timely report changes is a **Class E felony** on first offense; **Class D felony** for subsequent violations. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-t\" target=\"_blank\" rel=\"noopener\">§ 168-t</a>",
  reliefPaths: [
    "**Risk level modification:** Sex offender may petition court annually to reduce level. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-o\" target=\"_blank\" rel=\"noopener\">§ 168-o</a>",
    "**Removal / relief:** Level 2 non-designated offenders may petition for removal after 30 years. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-h\" target=\"_blank\" rel=\"noopener\">§ 168-h(2)</a>"
  ],
  specialPopulations: [
    "Designation as **sexual predator, sexually violent, predicate** triggers **lifetime** registration regardless of level. <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-h\" target=\"_blank\" rel=\"noopener\">§ 168-h(2)</a>",
    "Juvenile offenders ≥ age 13 may fall under SORA depending on statute and court determination."
  ],
  costs: [
    "There is a **$10 fee** for registering address or status changes per § 168-c(4). <a href=\"https://www.criminaljustice.ny.gov/nsor/claws.htm#168-c\" target=\"_blank\" rel=\"noopener\">§ 168-c(4)</a>",
    "Court fees may apply for petitions or motion filings (per local rules)."
  ],

  recentChangesLitigation: [
    {
      type: "statute",
      bill: "S7830 (2025)",
      session: "2025",
      effective: "if passed",
      summary: "Would address constitutional concerns regarding homeless sex offenders and registration obligations.",
      link: "https://www.nysenate.gov/legislation/bills/2025/S7830"
    }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Within 10 days of moving to NY, register with DCJS if duty triggered",
      "Notify local law enforcement of your address, employer, school",
      "Find schedule for in-person verification with local LEO"
    ],
    movingOutChecklist: [
      "Notify local LE of departure address",
      "Report new address to DCJS and jurisdiction",
      "Ensure continuing registration compliance in new location"
    ],
    recordsRequestTemplate: "To: [Agency]\nSubject: Request for Sex Offender Registration Record\nI hereby request my sex offender registration record under SORA (Article 6-C), including level, designation, and history of modifications.",
    reliefPetitionOutline: "1. Current level & designation\n2. Years registered without incident\n3. Evidence of rehabilitation & low risk\n4. Legal arguments under § 168-o / § 168-h\n5. Request for relief or reduction"
  },

  resources: {
    legalAid: [
      { name: "NY CourtHelp – Sex Offender Registry", link: "https://www.nycourts.gov/courthelp/criminal/sexOffenderRegistry.shtml" }
    ],
    advocacy: [
      { name: "OADNYC – Sex Offense Representation", link: "https://oadnyc.org/sex-offenses/" }
    ],
    reentry: []
  },

  citations: [
    { label: "NYS SORA statute (Correction Law Art. 6-C)", url: "https://www.criminaljustice.ny.gov/nsor/claws.htm" },
    { label: "SORA definitions § 168-a", url: "https://www.nysenate.gov/legislation/laws/COR/168-A" },
    { label: "NYS Sex Offender Registry official site", url: "https://www.criminaljustice.ny.gov/nsor/" },
    { label: "NY CourtHelp registry info", url: "https://www.nycourts.gov/courthelp/criminal/sexOffenderRegistry.shtml" },
    { label: "S7830 2025 bill", url: "https://www.nysenate.gov/legislation/bills/2025/S7830" }
  ],

  badges: {
    residencyZones: false,
    lifetimePossible: true,
    verificationQuarterly: true
  },

  plainLanguage: {
    whoMustRegister: {
      summary: [
        "If you are convicted of a listed sex offense in NY or elsewhere (if equivalent), you must register under SORA.",
        "Out-of-state convictions may still trigger a registration duty in NY."
      ],
      watchOuts: [
        "Designation (sexual predator, etc.) often eliminates relief paths."
      ],
      citations: [
        "https://www.criminaljustice.ny.gov/nsor/claws.htm#168-a",
        "https://oadnyc.org/sex-offenses/"
      ],
      reviewedBy: "Expert",
      reviewedUTC: "2025-10-09T00:00:00Z"
    },
    deadlinesReporting: {
      summary: [
        "Register at sentencing or before release; report any changes within 10 days."
      ],
      watchOuts: [
        "Missing the 10-day window on relocation or status change violates law."
      ],
      citations: [
        "https://www.criminaljustice.ny.gov/nsor/claws.htm#168-c",
        "https://www.criminaljustice.ny.gov/nsor/claws.htm#168-j"
      ],
      reviewedBy: "Expert",
      reviewedUTC: "2025-10-09T00:00:00Z"
    }
  },

  overview: "",
  requirements: "",
  residency: "",
  employment: "",
  travel: "",
  removal: "",
  tierNotes: "",
  validationNote: ""
} as const;
export default d;