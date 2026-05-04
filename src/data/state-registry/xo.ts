import oregon from "./or";

export default {
  ...oregon,
  state: "Oregon",
  lastReviewedUTC: oregon.lastReviewedUTC,

  previewSource: {
    basis: "State Truth File",
    path: "docs/state-truth-files/oregon-state-truth-file-v1-1.md",
    posture:
      "STF-driven V2 preview. Production promotion still requires live validation of local authority/preemption, current Oregon State Police forms, temporary visitor and homelessness procedures, local facility rules, and recent litigation.",
  },

  localRulePosture: {
    posture: "Researched but unresolved",
    publicLanguage:
      "Local-rule caution: SOLAR did not find a local rule that clearly changes this guidance, but we also cannot rule out local ordinances or agency practices in every city or county. Before acting on a specific address, job, school, event, or location, confirm with the registering agency, city/county code office, or supervising authority.",
    notes: [
      "The Oregon STF validates a strong statewide registration/classification system but does not validate a broad express preemption rule that clearly allows or clearly bars local governments from adding registry-related restrictions.",
      "Oregon’s statewide system is more targeted than Florida’s: public posting is level/designation-based, and the validated residence/place restrictions are tied mostly to Level III, SVDO, dangerous-offender, similar out-of-jurisdiction, or supervision contexts.",
      "Local government rules are separate from probation, parole, post-prison supervision, Board/PSRB conditions, court orders, facility policies, employer rules, school policies, housing-provider rules, shelter policies, and private lease terms.",
    ],
  },

  startHere: [
    {
      label: "Where can I live?",
      status: "No blanket statewide address ban found",
      body:
        "Oregon should not be summarized as an all-registrants distance-ban state. The STF did not identify a blanket statewide residence-distance rule for everyone on the registry, but Level III, SVDO, dangerous-offender, supervised, or similar-status people may face serious housing limits. Local authority remains unresolved and should be checked for a specific address.",
      tone: "emerald",
      sources: ["OR-S14", "OR-S21", "OR-S22"],
    },
    {
      label: "Where can I go?",
      status: "Restrictions are status-specific",
      body:
        "Oregon has a statewide child-location rule, but it applies to defined higher-risk or status categories, not every registrant. Level III, SVDO, dangerous-offender, and similar out-of-jurisdiction designations may require written approval for certain child-congregation locations. Local rules and facility policies still need scenario-specific checking.",
      tone: "sky",
      sources: ["OR-S15", "OR-S16", "OR-S17", "OR-S22"],
    },
    {
      label: "How long does it last?",
      status: "Relief may be available for some",
      body:
        "Oregon has meaningful relief and reclassification pathways for some people, but the route depends on level, case type, risk assessment, juvenile or adult status, age-proximity eligibility, PSRB/GEI posture, and the correct board or court forum.",
      tone: "emerald",
      sources: ["OR-S10", "OR-S11", "OR-S12"],
    },
    {
      label: "Who can see it?",
      status: "Public posting depends on level",
      body:
        "Oregon is not a Florida-style broad public-posting state. Level III registrants are generally posted publicly unless an exception applies, while Level I and Level II information is handled through more limited release rules.",
      tone: "indigo",
      sources: ["OR-S9", "OR-S13", "OR-S18"],
    },
    {
      label: "How often do I report?",
      status: "Annual birthday reporting plus changes",
      body:
        "Oregon’s routine statewide rhythm is annual birthday reporting, plus 10-day reporting for key changes and at least 21-day advance notice for international travel. Nonresident work or school can also trigger Oregon duties.",
      tone: "slate",
      sources: ["OR-S3", "OR-S4", "OR-S7", "OR-S19", "OR-S20"],
    },
    {
      label: "Can I get removed?",
      status: "A real path may exist",
      body:
        "Oregon is more pathway-driven than some states. Level I relief, Level II/III reclassification, juvenile relief, and narrow age-proximity or special statutory relief may exist, but eligibility is technical and case-specific.",
      tone: "emerald",
      sources: ["OR-S10", "OR-S11", "OR-S12"],
    },
  ],

  commonQuestions: [
    {
      question: "Where can I live on the registry in Oregon?",
      answer:
        "Most readers should start with this planning posture: Oregon does not appear, from the STF, to have a blanket statewide rule banning every registrant from living within a set distance of schools, parks, or child-care locations. But that does not mean every address is safe. Level III, SVDO, dangerous-offender, supervised, or similar-status people may face serious residence rules, and local authority was researched but remains unresolved.",
      whatCanChangeThis: [
        "Level I, Level II, or Level III classification",
        "SVDO or dangerous-offender status",
        "parole, post-prison supervision, probation, Board, or PSRB conditions",
        "whether children are primary occupants or users nearby",
        "transitional housing versus permanent housing",
        "local ordinance, zoning, facility policy, or agency practice if validated",
      ],
      beforeYouMakePlans:
        "Before signing a lease or relying on a specific address, confirm your classification, supervision status, and any Board/PSRB condition. Because local authority is unresolved, check the city/county code office or registering agency for that exact address.",
      sources: ["OR-S14", "OR-S21", "OR-S22"],
    },
    {
      question: "Where can I go in Oregon?",
      answer:
        "Oregon’s statewide child-location restriction is status-specific, not a blanket ban on every registrant. It applies to defined categories such as Level III people without written approval, SVDOs, dangerous offenders sentenced on sex crimes, and similar out-of-jurisdiction designations. Places involving children, youth programs, schools, child-care centers, playgrounds, or regularly scheduled minor activities require extra caution.",
      whatCanChangeThis: [
        "Level III classification",
        "SVDO designation",
        "dangerous-offender sentence",
        "similar out-of-jurisdiction designation",
        "written approval",
        "supervision or court conditions",
        "whether the place is primarily for minors or regularly hosts minor programs",
        "local ordinance or facility policy if validated",
      ],
      beforeYouMakePlans:
        "If the place involves children, ask whether ORS 163.476 applies to your status and whether written approval is required. Separately check supervision rules, facility policies, and any local rule before attending events or entering child-focused places.",
      sources: ["OR-S15", "OR-S16", "OR-S17", "OR-S22"],
    },
    {
      question: "Where can I work or go to school in Oregon?",
      answer:
        "Oregon work and school questions are often reporting questions first. Nonresidents may have to report after enough work or volunteer days in Oregon, and higher-education attendance, employment, or vocation changes can be reportable. The STF did not validate a blanket statewide employment ban for all registrants, but Level III/SVDO/dangerous-offender rules, supervision, licensing, employer policy, and school policy may still limit specific settings.",
      whatCanChangeThis: [
        "resident versus nonresident status",
        "14th day of work or volunteering in Oregon",
        "college or higher-education attendance or work",
        "contact with minors",
        "classification level or SVDO status",
        "supervision or court conditions",
        "professional licensing or employer policy",
      ],
      beforeYouMakePlans:
        "Track Oregon work days if you are not an Oregon resident. Before starting school, campus work, volunteering, or a job involving minors, verify both reporting duties and any separate access, licensing, employer, or supervision restriction.",
      sources: ["OR-S3", "OR-S4", "OR-S15", "OR-S16", "OR-S20", "OR-S22"],
    },
    {
      question: "Who will know, and what will they see on the Oregon registry?",
      answer:
        "Oregon public visibility depends heavily on classification. Level III people are generally posted on the public website unless an exception applies. Level II information may be released to specified people or entities, and Level I release is more limited. Oregon should not be described as a broad public-posting state where every registrant is automatically searchable by the public.",
      whatCanChangeThis: [
        "Level I, Level II, or Level III classification",
        "PSRB or GEI status",
        "agency release decision",
        "reclassification or relief outcome",
        "public-safety request or notification context",
        "official public registry fields and current OSP practice",
      ],
      beforeYouMakePlans:
        "Confirm your classification and check the official Oregon public registry. If you are Level I or Level II, ask what information may still be released to household members, neighbors, schools, churches, parks, businesses, care facilities, or other specified recipients.",
      sources: ["OR-S9", "OR-S13", "OR-S18"],
    },
    {
      question: "How often do I have to report in Oregon?",
      answer:
        "Oregon’s baseline routine reporting is annual in-person birthday reporting. Oregon State Police guidance also identifies 10-day reporting for key changes, including moving, address changes, legal name changes, higher-education changes, and moving out of state, plus at least 21-day advance notice before international travel. Nonresident school, work, or volunteer activity can create Oregon reporting duties.",
      whatCanChangeThis: [
        "release or placement date",
        "moving into Oregon",
        "address or legal-name change",
        "higher-education enrollment, attendance, employment, or vocation",
        "moving out of Oregon",
        "international travel",
        "nonresident school, work, or volunteer status",
        "local registering-agency intake procedure",
      ],
      beforeYouMakePlans:
        "Put the birthday reporting window, address-change deadline, higher-education deadline, work/school threshold, move-out notice, and international travel notice on a calendar. Keep proof of every in-person report and agency contact.",
      sources: ["OR-S3", "OR-S4", "OR-S7", "OR-S19", "OR-S20"],
    },
    {
      question: "How long will this last, and can I get removed in Oregon?",
      answer:
        "Oregon has more meaningful pathways than some states, but the path depends on classification and case type. Level I people may have a relief path. Level II or Level III people may need reclassification first. Juvenile cases, age-proximity cases, PSRB/GEI cases, and SVDO cases may follow different rules or have different limits.",
      whatCanChangeThis: [
        "Level I, Level II, or Level III classification",
        "risk assessment and Board decision",
        "time since supervision or release",
        "juvenile adjudication status",
        "age-proximity eligibility",
        "PSRB or GEI status",
        "SVDO designation",
        "correct board, court, or juvenile forum",
      ],
      beforeYouMakePlans:
        "Confirm your classification, case type, supervision history, and filing forum before preparing anything. Use the correct board, court, or juvenile process and verify current forms before filing.",
      sources: ["OR-S10", "OR-S11", "OR-S12"],
    },
    {
      question: "What if I move, visit, or travel to Oregon?",
      answer:
        "Moving to Oregon, attending school in Oregon, or working/volunteering in Oregon long enough can trigger Oregon reporting duties. Short tourism alone was not validated in the STF as a general registration trigger, but temporary visitor procedures still need validation before strong public language. International travel requires separate advance notice for people already required to report in Oregon.",
      whatCanChangeThis: [
        "moving into Oregon",
        "resident versus nonresident status",
        "school attendance",
        "14th day of work or volunteering in Oregon",
        "length and purpose of stay",
        "international travel",
        "rules of the state you are leaving or entering",
      ],
      beforeYouMakePlans:
        "Count work and school days carefully. Before a move, school start, work assignment, or international trip, check Oregon’s rule, the rule of the state you are leaving or returning to, and the local registering-agency process.",
      sources: ["OR-S3", "OR-S4", "OR-S7", "OR-S19"],
    },
    {
      question: "What if I do not have stable housing in Oregon?",
      answer:
        "The Oregon STF did not validate a separate Florida-style transient reporting system. But address changes, annual reporting, local registering-agency mechanics, shelter policies, and supervision conditions still matter. Unstable housing should be handled as a validation issue, not as proof that reporting duties disappear.",
      whatCanChangeThis: [
        "address-change rule",
        "county registering-agency process",
        "supervision, Board, or PSRB conditions",
        "shelter or transitional-housing policy",
        "mailing address or location-description requirements",
        "local practice not yet validated",
      ],
      beforeYouMakePlans:
        "Ask the registering agency what address, mailing, shelter, or location information they require if you do not have stable housing. Get proof of each report and separately confirm any supervision or shelter rule.",
      sources: ["OR-S3", "OR-S4", "OR-S20", "OR-S21", "OR-S22"],
    },
  ],

  terms: [
    { term: "OSP", definition: "Oregon State Police, the agency involved in Oregon sex-offender registration procedures and public registry information." },
    { term: "ORS", definition: "Oregon Revised Statutes, Oregon’s official state laws." },
    { term: "OAR", definition: "Oregon Administrative Rules, agency rules that explain how Oregon laws are carried out." },
    { term: "Level I / Level II / Level III", definition: "Oregon classification levels that affect public posting, disclosure, place restrictions, and relief or reclassification options." },
    { term: "SVDO", definition: "Sexually Violent Dangerous Offender, a designation that may trigger additional Oregon location, residence, classification, or supervision consequences." },
    { term: "PSRB", definition: "Psychiatric Security Review Board, the board involved in certain guilty-except-for-insanity cases." },
    { term: "GEI", definition: "Guilty Except for Insanity, an Oregon case category that may follow different board and relief procedures." },
    { term: "Local authority unresolved", definition: "SOLAR researched local-rule authority but did not validate a broad Oregon preemption rule or a broad local-authority rule. Readers should verify city/county rules for a specific address, job, event, or location." },
  ],

  sourceMap: {
    "OR-S1": { label: "ORS Chapter 163A — Sex Offender Reporting and Classification", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163A.html" },
    "OR-S3": { label: "ORS 163A reporting triggers", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163A.html" },
    "OR-S4": { label: "Oregon State Police — Offender Information", url: "https://www.oregon.gov/osp/programs/sor/pages/offenderinformation.aspx" },
    "OR-S7": { label: "ORS 163A.055 — Notice when moving to another state", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163A.html" },
    "OR-S9": { label: "Oregon State Police — Statutes, laws, leveling and classification", url: "https://www.oregon.gov/osp/programs/SOR/Pages/statuteslaws.aspx" },
    "OR-S10": { label: "ORS 163A.125 — Relief/reclassification for classified adults", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163A.html" },
    "OR-S11": { label: "ORS 163A.130 / 163A.135 — Juvenile relief", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163A.html" },
    "OR-S12": { label: "ORS 163A.140 / 163A.145 / 163A.150 — Special statutory relief", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163A.html" },
    "OR-S13": { label: "ORS 163A.215 / 163A.220 / OAR 257-070-0130 — Public information release", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163A.html" },
    "OR-S14": { label: "ORS 144.641–144.646 — Residence criteria for certain sex offenders", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors144.html" },
    "OR-S15": { label: "ORS 163.476 — Child-congregation location restriction", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163.html" },
    "OR-S16": { label: "ORS 163.479 — Unlawful contact with a child", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163.html" },
    "OR-S17": { label: "ORS 137.765 — Sexually violent dangerous offenders", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors137.html" },
    "OR-S18": { label: "Oregon State Police — Sex Offender Online Search", url: "https://sexoffenders.oregon.gov/" },
    "OR-S19": { label: "Oregon State Police — International travel guidance", url: "https://www.oregon.gov/osp/programs/sor/pages/offenderinformation.aspx" },
    "OR-S20": { label: "OAR 257-070-0110 — Registration requirements", url: "https://secure.sos.state.or.us/oard/view.action?ruleNumber=257-070-0110" },
    "OR-S21": { label: "OAR 291-202-0040 — Residence requirements for certain offenders upon release", url: "https://secure.sos.state.or.us/oard/view.action?ruleNumber=291-202-0040" },
    "OR-S22": { label: "Oregon local ordinances / local-law validation category", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163A.html" },
  },

  sourceConfidence: {
    status: "STF-driven preview; needs live validation before production promotion",
    notes: [
      "Preview data is based on docs/state-truth-files/oregon-state-truth-file-v1-1.md, not merely the legacy Oregon state file.",
      "Do not set lastValidatedUTC unless a live validation pass is performed during the task.",
      "Production promotion should validate local authority/preemption, local ordinances, current OSP forms, visitor and unstable-housing procedures, local facility rules, section-level official statute links, and recent litigation.",
      "Oregon local authority should remain researched-but-unresolved unless a future validation pass supports a stronger posture.",
    ],
  },

  statePageUpdateNotes: [
    "Oregon is a strong test case for a less alarmist, classification-driven state page.",
    "The V2 page should avoid importing Florida assumptions into Oregon: no broad public posting for every registrant, no validated all-registrants statewide distance ban, and no validated Florida-style internet-identifier reporting rule in the STF.",
    "The top-page language should emphasize level, supervision, designation, reporting deadlines, and meaningful-but-technical relief pathways.",
  ],
};
