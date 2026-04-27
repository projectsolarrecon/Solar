import florida from "./fl";

export default {
  ...florida,
  state: "Florida",
  lastReviewedUTC: florida.lastReviewedUTC,

  startHere: [
    {
      label: "Where can I live?",
      status: "Strict address limits for many people",
      body:
        "Florida has strict statewide address rules for many registrants, and local city or county rules can make housing even harder. Confirm an address before signing a lease or moving in.",
      tone: "amber",
      sources: ["fl-775-215", "fdle-registry"]
    },
    {
      label: "Where can I go?",
      status: "Local place rules may matter",
      body:
        "Florida does not work like one simple statewide map. Local rules, supervision conditions, parks, schools, child-care locations, and temporary-residence rules can all affect where someone may go or stay.",
      tone: "sky",
      sources: ["fdle-registry"]
    },
    {
      label: "How long does it last?",
      status: "Usually lifetime",
      body:
        "Florida registration is generally for life. Removal is narrow and usually requires specific statutory eligibility, a court order, vacatur, pardon, or another qualifying basis.",
      tone: "rose",
      sources: ["fdle-faq", "fl-943-04354"]
    },
    {
      label: "Who can see it?",
      status: "Public posting is broad",
      body:
        "Florida publicly lists registered sexual offenders and sexual predators, including identifying information and address information. Entries may remain visible even after someone leaves Florida.",
      tone: "indigo",
      sources: ["fdle-search", "fdle-faq"]
    },
    {
      label: "How often do I report?",
      status: "Deadlines are short",
      body:
        "Many Florida deadlines are 48 hours. Reregistration is usually twice per year or quarterly, depending on offense or designation. Set reminders and keep proof.",
      tone: "slate",
      sources: ["fl-943-0435", "fl-775-21", "fdle-important"]
    },
    {
      label: "Can I get removed?",
      status: "Removal is very limited",
      body:
        "Florida has no broad, routine removal path for most registrants. People should verify whether any narrow statutory or court-based option applies before assuming removal is possible.",
      tone: "emerald",
      sources: ["fdle-faq", "fl-943-04354"]
    }
  ],

  commonQuestions: [
    {
      question: "Where can I live?",
      answer:
        "Florida has a statewide 1,000-foot residence restriction for certain registrants, and local ordinances may add stricter limits. In practice, housing can be one of the hardest parts of living on Florida’s registry.",
      whatCanChangeThis: [
        "victim age and offense category",
        "local city or county ordinance",
        "supervision conditions",
        "grandfathering or existing residence rules",
        "temporary versus permanent residence"
      ],
      beforeYouMakePlans:
        "Before signing a lease, moving in, or staying with family, ask the sheriff or local code office whether the address is allowed and keep written proof of the answer.",
      sources: ["fl-775-215", "fdle-registry"]
    },
    {
      question: "Where can I go?",
      answer:
        "Florida’s state registry laws focus heavily on reporting and residence rules, but local ordinances and supervision conditions may add place-based limits around parks, schools, child-care locations, pools, or other child-focused places.",
      whatCanChangeThis: [
        "city or county rules",
        "probation or supervision terms",
        "whether the location is child-focused",
        "written permission or required purpose",
        "temporary residence rules for overnight stays"
      ],
      beforeYouMakePlans:
        "Check local rules before relying on a statewide answer. If you are on supervision, confirm permission before going to places involving children, parks, schools, pools, or overnight stays.",
      sources: ["fdle-registry"]
    },
    {
      question: "Where can I work or go to school?",
      answer:
        "Florida requires employment and school information to be reported quickly. Some jobs or volunteer roles may also be restricted by supervision conditions, licensing rules, employer screening, or local policy.",
      whatCanChangeThis: [
        "job setting",
        "school or campus status",
        "access to minors",
        "licensing rules",
        "supervision terms"
      ],
      beforeYouMakePlans:
        "Report work or school changes within the required window and check separately whether the job, license, campus, or supervision condition creates another restriction.",
      sources: ["fl-943-0435"]
    },
    {
      question: "Who will know, and what will they see?",
      answer:
        "Florida’s public registry is broad. The public site may show photo, address information, offense information, and other identifying details for people listed as sexual offenders or sexual predators.",
      whatCanChangeThis: [
        "offender or predator designation",
        "address status",
        "whether a person has moved out of state",
        "FDLE listing practices",
        "local notification practices"
      ],
      beforeYouMakePlans:
        "Review the official FDLE listing for yourself so you know what landlords, employers, neighbors, or family members may see.",
      sources: ["fdle-search", "fdle-faq"]
    },
    {
      question: "How often do I have to report?",
      answer:
        "Florida reporting is deadline-heavy. Initial registration, address changes, employment changes, school changes, vehicle changes, phone numbers, emails, internet identifiers, and driver-license updates can trigger short reporting windows.",
      whatCanChangeThis: [
        "sexual offender versus sexual predator designation",
        "offense category",
        "transient status",
        "type of change",
        "county reporting procedures"
      ],
      beforeYouMakePlans:
        "Ask for your exact next reporting dates in writing. Keep dated proof of every sheriff visit, online update, driver-license update, and document submission.",
      sources: ["fl-943-0435", "fl-775-21", "fdle-important"]
    },
    {
      question: "How long will this last, and can I get removed?",
      answer:
        "For most people, Florida registration should be treated as lifetime unless a narrow removal path clearly applies. Moving away from Florida does not necessarily erase the FDLE public listing.",
      whatCanChangeThis: [
        "specific statutory eligibility",
        "vacatur or pardon",
        "out-of-state case treatment",
        "youthful or narrow removal criteria",
        "court order"
      ],
      beforeYouMakePlans:
        "Do not assume time alone creates removal eligibility. Ask counsel or FDLE what specific legal basis would support removal or a change in listing.",
      sources: ["fdle-faq", "fl-943-04354"]
    },
    {
      question: "What if I move, visit, or travel?",
      answer:
        "Florida’s temporary-residence definition is broad. Vacation, business travel, hotel stays, or staying with family can create duties if the total time reaches Florida’s threshold.",
      whatCanChangeThis: [
        "number of days in Florida",
        "temporary residence threshold",
        "work or school in Florida",
        "home-state travel notice rules",
        "international travel"
      ],
      beforeYouMakePlans:
        "Track every day and night in Florida. Before travel, check both Florida’s rule and your home state’s travel-notice rule.",
      sources: ["fl-775-21", "fdle-faq"]
    },
    {
      question: "What if I do not have stable housing?",
      answer:
        "People listed as transient in Florida must keep reporting while transient. Missing those check-ins can create serious criminal exposure even when the underlying problem is homelessness.",
      whatCanChangeThis: [
        "transient status",
        "county reporting practice",
        "shelter access",
        "temporary residence rules",
        "supervision conditions"
      ],
      beforeYouMakePlans:
        "Ask exactly when and where to report, what location description is required, and how to get proof of each transient check-in.",
      sources: ["fl-943-0435", "fl-775-21"]
    }
  ],

  terms: [
    { term: "FDLE", definition: "Florida Department of Law Enforcement, the state agency that operates Florida’s public registry." },
    { term: "Sexual predator", definition: "A Florida designation under the Florida Sexual Predators Act with quarterly reporting and public-notification consequences." },
    { term: "Temporary residence", definition: "A Florida concept that can include short stays, including vacation or business stays, once the statutory threshold is met." },
    { term: "Transient", definition: "A person without a permanent or temporary residence who must follow Florida’s transient reporting rules." }
  ],

  sourceMap: {
    "fl-943-0435": { label: "Fla. Stat. § 943.0435", url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0943/Sections/0943.0435.html" },
    "fl-775-21": { label: "Fla. Stat. § 775.21", url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0775/Sections/0775.21.html" },
    "fl-775-215": { label: "Fla. Stat. § 775.215", url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0775/Sections/0775.215.html" },
    "fl-943-04354": { label: "Fla. Stat. § 943.04354", url: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0943/Sections/0943.04354.html" },
    "fdle-registry": { label: "FDLE registry", url: "https://offender.fdle.state.fl.us/offender/sops/home.jsf" },
    "fdle-search": { label: "FDLE public registry search", url: "https://offender.fdle.state.fl.us/offender/sops/neighborhoodSearch.jsf" },
    "fdle-faq": { label: "FDLE FAQ", url: "https://offender.fdle.state.fl.us/offender/sops/faq.jsf" },
    "fdle-important": { label: "FDLE important information", url: "https://offender.fdle.state.fl.us/offender/sops/important.jsf" }
  },

  sourceConfidence: {
    lastValidatedUTC: "2025-10-06T18:00:00Z",
    status: "Needs 2026 currency validation before production use",
    notes: [
      "Preview data is based on the existing Florida state file.",
      "Florida should receive a fresh validation pass before V2 promotion because 2026 legislative developments may affect residence, presence, bathing-place, pool, or local-rule analysis."
    ]
  }
};
