import florida from "./fl";

export default {
  ...florida,
  state: "Florida",
  lastReviewedUTC: florida.lastReviewedUTC,

  previewSource: {
    basis: "State Truth File",
    path: "docs/state-truth-files/florida-state-truth-file-v1-1.md",
    posture:
      "STF-driven V2 preview. Production promotion still requires live validation of source links, local ordinances, current agency forms/processes, post-July 1, 2026 implementation, and recent litigation.",
  },

  localRulePosture: {
    posture: "Local rules may add restrictions",
    publicLanguage:
      "Local rules may matter. State law is only the baseline. City or county rules may add housing, park, school, public-place, pool, bathing-place, or event limits, so confirm the local rule before signing a lease, moving, or relying on access to a specific location.",
    notes: [
      "The Florida STF validates FDLE language warning that municipal and county ordinances may address where registrants can live and what areas they can be near or visit.",
      "Local ordinances are separate from probation, parole, DOC/DJJ supervision, court orders, treatment rules, custody orders, facility policies, employer rules, private housing-provider rules, and lease terms.",
    ],
  },

  startHere: [
    {
      label: "Where can I live?",
      status: "Strict housing rules for many people",
      body:
        "Florida has a statewide 1,000-foot residence restriction for certain offenses involving victims under 16, and city or county ordinances may be stricter. Do not assume an address is safe until the state rule, local rule, and any supervision condition are checked.",
      tone: "amber",
      sources: ["FL-S3", "FL-S9", "FL-S15"],
    },
    {
      label: "Where can I go?",
      status: "State, local, and supervision rules can stack",
      body:
        "Florida should not be summarized as one simple statewide map. Current state law, local ordinances, supervision, court orders, facility policies, and enacted July 1, 2026 changes can all affect parks, schools, child-care locations, pools, public bathing places, events, and other child-focused places.",
      tone: "sky",
      sources: ["FL-S2", "FL-S9", "FL-S11", "FL-S14", "FL-S15"],
    },
    {
      label: "How long does it last?",
      status: "Lifetime for most people",
      body:
        "Florida registration should usually be treated as lifetime unless a narrow statutory, court-based, pardon, vacatur, or special-circumstances path clearly applies. Removal is not a routine administrative off-ramp.",
      tone: "rose",
      sources: ["FL-S1", "FL-S2", "FL-S5", "FL-S9"],
    },
    {
      label: "Who can see it?",
      status: "Public posting is broad",
      body:
        "Florida broadly publishes sexual offender and sexual predator information through FDLE. People should not assume moving away automatically removes them from Florida’s public registry listing.",
      tone: "indigo",
      sources: ["FL-S4", "FL-S9", "FL-S16"],
    },
    {
      label: "How often do I report?",
      status: "Deadlines are short and layered",
      body:
        "Florida is deadline-heavy. Many duties use 48-hour windows, and re-registration is generally twice yearly for many offenders but quarterly for predators and certain offenders. Sheriff, FDLE, online, travel, transient, vehicle, internet-identifier, school, work, and driver-license steps can be separate.",
      tone: "slate",
      sources: ["FL-S1", "FL-S2", "FL-S8", "FL-S9", "FL-S10", "FL-S17"],
    },
    {
      label: "Can I get removed?",
      status: "Removal is narrow",
      body:
        "Florida has narrow removal paths for limited groups, including special circumstances, certain long-term eligibility, pardon, conviction set-aside, or other legal relief. Most people should verify a specific statutory basis before assuming removal is possible.",
      tone: "emerald",
      sources: ["FL-S1", "FL-S2", "FL-S5", "FL-S9"],
    },
  ],

  commonQuestions: [
    {
      question: "Where can I live on the registry in Florida?",
      answer:
        "Most readers should assume housing needs a pre-check before they sign anything. Florida has a statewide 1,000-foot residence restriction for certain offenses involving victims under 16, and local ordinances may add stricter rules. Supervision, court orders, housing-provider rules, and private leases may also be stricter than the registry statute itself.",
      whatCanChangeThis: [
        "offense statute and victim age",
        "city or county ordinance",
        "predator versus offender designation",
        "probation, parole, DOC, DJJ, or court conditions",
        "grandfathering or existing-residence rules",
        "temporary, permanent, or transient residence status",
      ],
      beforeYouMakePlans:
        "Before signing a lease, moving in with family, booking long-term lodging, or relying on a shelter placement, confirm the address with the sheriff or registering agency, check the city/county ordinance, and keep written proof of the answer.",
      sources: ["FL-S3", "FL-S9", "FL-S15"],
    },
    {
      question: "Where can I go in Florida?",
      answer:
        "Start from this assumption: there is no single simple statewide answer for every registrant and every public place. Florida has specific state restrictions, local ordinances may add restrictions, supervision may be stricter, and enacted changes effective July 1, 2026 may expand rules involving certain child-focused places, public swimming pools, and public bathing places for specified people.",
      whatCanChangeThis: [
        "date of the activity, especially before or after July 1, 2026",
        "offense type and victim age",
        "sexual predator status",
        "city or county ordinance",
        "supervision or court order",
        "whether the place is child-focused or regularly used by children",
        "facility, event, or private-property policy",
      ],
      beforeYouMakePlans:
        "Check the specific city/county rule and any supervision condition before going to parks, schools, child-care locations, pools, public bathing places, youth events, or similar places. Keep state law, local ordinances, facility policies, and supervision rules separate.",
      sources: ["FL-S2", "FL-S9", "FL-S11", "FL-S14", "FL-S15"],
    },
    {
      question: "Where can I work or go to school in Florida?",
      answer:
        "Florida work and school issues are often reporting-and-notification issues first, but some jobs, volunteer roles, public-agency employment settings, child-congregation settings, licenses, and supervision conditions can create additional barriers. College or higher-education activity may be reportable and may trigger institutional notice.",
      whatCanChangeThis: [
        "job or volunteer setting",
        "contact with minors",
        "public agency or governmental subdivision employment",
        "college, campus, or higher-education status",
        "professional licensing or background-screening rules",
        "supervision, court, or treatment conditions",
      ],
      beforeYouMakePlans:
        "Report employment, school, volunteer, or campus changes within the required window, then separately verify whether the job, license, school, campus, or supervision condition creates a restriction.",
      sources: ["FL-S1", "FL-S2", "FL-S6", "FL-S7", "FL-S9", "FL-S11", "FL-S15"],
    },
    {
      question: "Who will know, and what will they see on the Florida registry?",
      answer:
        "Florida is a broad public-posting state. FDLE may publish nonconfidential registry information online, and the public registry generally lists registered sexual offenders, sexual predators, and qualifying juvenile sexual offenders. FDLE guidance indicates public information is not automatically removed simply because someone leaves Florida.",
      whatCanChangeThis: [
        "confidentiality exceptions",
        "correction of inaccurate information",
        "death, deportation, qualifying court relief, or agency status change",
        "offender versus predator designation",
        "local or community notification practices",
      ],
      beforeYouMakePlans:
        "Review the official FDLE listing for yourself so you know what landlords, employers, neighbors, family members, and others may see. If something is wrong, ask FDLE or counsel how to correct the record.",
      sources: ["FL-S4", "FL-S9", "FL-S16"],
    },
    {
      question: "How often do I have to report in Florida?",
      answer:
        "Florida should be treated as a strict deadline state. Many updates use 48-hour windows. Many offenders re-register twice yearly, while predators and certain offenders re-register quarterly. Separate duties may apply for residence, transient status, vehicles, internet identifiers, phone numbers, employment, school, travel, and driver-license or ID updates.",
      whatCanChangeThis: [
        "sexual offender versus sexual predator designation",
        "offense category",
        "birth month and quarterly schedule",
        "type of change being reported",
        "transient or unstable housing status",
        "whether an update may be made online or must be in person",
        "sheriff-office process",
      ],
      beforeYouMakePlans:
        "Ask for your exact next reporting dates in writing. Keep dated proof of every sheriff visit, FDLE or online update, driver-license/ID update, and document submission.",
      sources: ["FL-S1", "FL-S2", "FL-S8", "FL-S9", "FL-S10", "FL-S17"],
    },
    {
      question: "How long will this last, and can I get removed in Florida?",
      answer:
        "Most Florida registrants should assume lifetime registration unless a specific narrow legal path applies. Removal may be possible for limited groups, but it depends on the exact offense, victim age, age gap, disqualifying history, time since release, pardon, conviction set-aside, court order, or another qualifying basis.",
      whatCanChangeThis: [
        "special-circumstances eligibility",
        "25-year eligibility for certain offenders",
        "pardon or conviction set-aside",
        "victim age and age-gap criteria",
        "adult versus juvenile case posture",
        "sexual predator designation",
        "postconviction relief or court order",
      ],
      beforeYouMakePlans:
        "Do not rely on time alone. Ask counsel or FDLE what specific statute, order, or legal basis would support removal or a listing change.",
      sources: ["FL-S1", "FL-S2", "FL-S5", "FL-S9"],
    },
    {
      question: "What if I move, visit, or travel to Florida?",
      answer:
        "Florida can treat temporary stays as registration events. A visitor from another state may have to report after establishing a temporary residence, and Florida’s temporary-residence concept can matter for vacation, business travel, hotel stays, or staying with family. International travel and moving out of state may trigger additional notice duties.",
      whatCanChangeThis: [
        "number of days in Florida",
        "permanent, temporary, or transient residence status",
        "hotel, family stay, vacation, or business travel",
        "work or school in Florida",
        "home-state travel notice rules",
        "international travel itinerary",
      ],
      beforeYouMakePlans:
        "Track every day and night in Florida. Before travel, check both Florida’s rule and the rule of the state you are leaving or returning to, and keep itinerary and agency-contact records.",
      sources: ["FL-S1", "FL-S2", "FL-S9"],
    },
    {
      question: "What if I do not have stable housing in Florida?",
      answer:
        "Unstable housing does not suspend Florida reporting duties. People listed as transient must continue reporting while transient, and missing those check-ins can create serious criminal exposure even when the underlying problem is homelessness or housing exclusion.",
      whatCanChangeThis: [
        "transient status",
        "vacating a residence without a new stable address",
        "county reporting practice",
        "shelter or transitional-housing policy",
        "temporary residence rules",
        "supervision conditions",
      ],
      beforeYouMakePlans:
        "Ask exactly when and where to report, what location description is required, whether a shelter address is accepted, and how to get written proof of each transient check-in.",
      sources: ["FL-S1", "FL-S2", "FL-S9", "FL-S15"],
    },
  ],

  terms: [
    { term: "FDLE", definition: "Florida Department of Law Enforcement, the state agency that operates Florida’s public registry." },
    { term: "Sexual offender", definition: "Florida’s broad registry category under Fla. Stat. § 943.0435 and related provisions." },
    { term: "Sexual predator", definition: "A Florida designation under the Florida Sexual Predators Act with stronger public-notification, verification, ID-marking, and collateral consequences." },
    { term: "Temporary residence", definition: "A Florida concept that can include short stays, including vacation, business, hotel, or family stays, once the statutory threshold is met." },
    { term: "Transient", definition: "A person without a permanent or temporary residence who must follow Florida’s transient reporting rules." },
    { term: "Local ordinance", definition: "A city or county rule. It is separate from supervision conditions, court orders, facility policies, employer policies, and private lease terms." },
  ],

  sourceMap: {
    "FL-S1": { label: "Fla. Stat. § 943.0435 — Sexual offenders required to register", url: "https://www.flsenate.gov/Laws/Statutes/2025/0943.0435" },
    "FL-S2": { label: "Fla. Stat. § 775.21 — Florida Sexual Predators Act", url: "https://www.flsenate.gov/Laws/Statutes/2025/0775.21" },
    "FL-S3": { label: "Fla. Stat. § 775.215 — Residency restriction", url: "https://www.flsenate.gov/Laws/Statutes/2025/775.215" },
    "FL-S4": { label: "Fla. Stat. § 943.043 — Internet notification", url: "https://www.flsenate.gov/Laws/Statutes/2025/943.043" },
    "FL-S5": { label: "Fla. Stat. § 943.04354 — Special-circumstances removal", url: "https://www.flsenate.gov/Laws/Statutes/2025/943.04354" },
    "FL-S8": { label: "Fla. Stat. § 322.141 — License / ID markings", url: "https://www.flsenate.gov/Laws/Statutes/2024/322.141" },
    "FL-S9": { label: "FDLE Sexual Offender and Predator System FAQ", url: "https://offender.fdle.state.fl.us/offender/sops/faq.jsf" },
    "FL-S10": { label: "CS/HB 1351 / Ch. 2025-134", url: "https://www.flsenate.gov/Session/Bill/2025/1351" },
    "FL-S11": { label: "Ch. 2026-17 / CS/CS/CS/SB 212", url: "https://laws.flrules.org/2026/17" },
    "FL-S14": { label: "Fla. Stat. § 856.022 — Loitering/prowling near places where children congregate", url: "https://www.flsenate.gov/Laws/Statutes/2025/856.022" },
    "FL-S15": { label: "Fla. Stat. §§ 947.1405 and 948.30 — Supervision conditions", url: "https://www.flsenate.gov/Laws/Statutes/2025/947.1405" },
    "FL-S16": { label: "FDLE public registry search", url: "https://offender.fdle.state.fl.us/offender/sops/home.jsf" },
    "FL-S17": { label: "FDLE FAQ / Cyber Communication System guidance", url: "https://offender.fdle.state.fl.us/offender/sops/faq.jsf" },
  },

  sourceConfidence: {
    status: "STF-driven preview; needs 2026 live validation before production promotion",
    notes: [
      "Preview data is based on docs/state-truth-files/florida-state-truth-file-v1-1.md, not merely the legacy Florida state file.",
      "Do not set lastValidatedUTC unless a live validation pass is performed during the task.",
      "Production promotion should validate local ordinances, current agency forms/processes, post-July 1, 2026 implementation, recent litigation, and any source links that were identified but not live-click validated in the STF.",
    ],
  },

  statePageUpdateNotes: [
    "Florida is a strong test case for restrictive, broad-burden registry architecture.",
    "The V2 page should keep state law, local ordinances, supervision/court orders, facility policies, private housing rules, and future effective-date changes visually separate.",
    "The top-page language should be practical, not statute-first: housing is difficult; deadlines are short; public posting is broad; removal is narrow.",
  ],
};
