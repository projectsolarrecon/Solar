import tennessee from "./tn";

export default {
  ...tennessee,
  state: "Tennessee",

  startHere: [
    {
      label: "Where can I live?",
      status: "Housing needs advance checking",
      body:
        "Tennessee has strict registry reporting rules and some location-based limits. Confirm the address before signing a lease, especially if supervision, a court order, or a child-focused location is involved.",
      tone: "amber",
      sources: ["tn-tbi-quick-reference", "tn-40-39-205"]
    },
    {
      label: "Where can I go?",
      status: "Child-focused places need caution",
      body:
        "Tennessee does not read as one blanket statewide ban on every public place, but covered places and minor-victim situations can create serious limits. Check the specific place before you go.",
      tone: "sky",
      sources: ["tn-tbi-quick-reference", "tn-40-39-216"]
    },
    {
      label: "How long does it last?",
      status: "Many people remain long-term or for life",
      body:
        "Tennessee has real removal paths, but they are not automatic. Do not plan around removal unless a specific process clearly applies to you.",
      tone: "rose",
      sources: ["tn-40-39-218"]
    },
    {
      label: "Who can see it?",
      status: "Broad public listing should be assumed",
      body:
        "Most adults on Tennessee’s registry should assume their information can be found online and shared through official notification systems. Check the public listing so you know what others may see.",
      tone: "indigo",
      sources: ["tn-tbi-quick-reference"]
    },
    {
      label: "How often do I report?",
      status: "Deadlines are short",
      body:
        "Reporting can be annual, quarterly, monthly for homelessness, or triggered by changes. Ask for your next reporting date in writing and keep proof of every report.",
      tone: "slate",
      sources: ["tn-40-39-205", "tn-ag-09-05", "tn-40-39-208"]
    },
    {
      label: "Can I get removed?",
      status: "There may be a narrow path",
      body:
        "Removal is possible for a narrower group, but it is not routine. Before spending time or money, ask which specific Tennessee process applies.",
      tone: "emerald",
      sources: ["tn-40-39-218"]
    }
  ],

  commonQuestions: [
    {
      question: "Where can I live?",
      answer:
        "Housing in Tennessee needs advance checking. The STF supports a strict statewide registry structure, but it does not validate a broad rule that local governments can freely create all registry-related housing restrictions. Supervision, court orders, housing-provider rules, and location-based restrictions can still make an address unusable.",
      whatCanChangeThis: [
        "offense category",
        "victim age",
        "supervision status",
        "court order",
        "temporary versus permanent residence",
        "local community-notification practice",
        "housing-provider rules"
      ],
      beforeYouMakePlans:
        "Before signing a lease or moving in, ask the registering agency whether the address is acceptable and keep written proof of the answer.",
      sources: ["tn-tbi-quick-reference", "tn-40-39-205"]
    },
    {
      question: "Where can I go?",
      answer:
        "Tennessee should not be summarized as a blanket statewide ban on every public place for every registrant. The safer planning posture is that child-focused places, schools, libraries, and minor-victim cases require careful checking before going. Supervision, court orders, facility policies, and school policies can be stricter than the registry statute alone.",
      whatCanChangeThis: [
        "victim age",
        "place type",
        "school or library policy",
        "supervision status",
        "court order",
        "facility policy",
        "local community-notification practice"
      ],
      beforeYouMakePlans:
        "Before going to a school, library, youth event, park, or child-focused place, ask the registering agency or supervising officer whether the specific place is allowed and keep the answer.",
      sources: ["tn-tbi-quick-reference", "tn-40-39-216"]
    },
    {
      question: "Where can I work or go to school?",
      answer:
        "Tennessee does not appear to impose one universal all-jobs or no-college rule, but work and school plans can create reporting duties and real restrictions. Jobs near child-focused locations, direct unsupervised contact with minors, campus police practice, school policy, and supervision conditions can all change the answer.",
      whatCanChangeThis: [
        "victim age",
        "worksite location",
        "job duties",
        "student status",
        "campus police requirements",
        "school policy",
        "supervision status",
        "licensing rules"
      ],
      beforeYouMakePlans:
        "Before accepting a job or enrolling in school, ask what must be reported, whether the location is allowed, and whether campus, employer, or supervision rules add limits.",
      sources: ["tn-tbi-quick-reference", "tn-40-39-205"]
    },
    {
      question: "Who will know, and what will they see?",
      answer:
        "Most adults on Tennessee’s registry should assume broad public visibility. The STF says the public can see broad information online, and Tennessee also uses separate disclosure and community-notification systems. Juvenile public-display details need more validation before production use.",
      whatCanChangeThis: [
        "adult versus juvenile status",
        "classification",
        "public posting status",
        "local community-notification practice",
        "agency disclosure rules",
        "court order"
      ],
      beforeYouMakePlans:
        "Check the official public registry listing so you know what landlords, employers, neighbors, family, and the public may see.",
      sources: ["tn-tbi-quick-reference"]
    },
    {
      question: "How often do I have to report?",
      answer:
        "Tennessee is deadline-heavy. The STF states that reporting is annual for sexual offenders, quarterly for violent sexual offenders, and monthly for people without stable housing. Separate change-reporting rules can also apply, including residence, work, school, online identifiers, move-out, and travel-related notices.",
      whatCanChangeThis: [
        "sexual offender versus violent sexual offender status",
        "homelessness or unstable housing",
        "change of residence",
        "work or school change",
        "online identifier change",
        "move-out plans",
        "international travel"
      ],
      beforeYouMakePlans:
        "Ask for your next reporting date and every change-reporting deadline in writing, then keep dated proof of each submission.",
      sources: ["tn-40-39-205", "tn-ag-09-05", "tn-40-39-208"]
    },
    {
      question: "How long will this last, and can I get removed?",
      answer:
        "Removal exists in Tennessee, but many people remain on the registry long-term or for life. The STF supports a real but narrow termination path for certain people, including special relief tied to trafficking-related aggravated-prostitution cases. Removal should not be treated as routine.",
      whatCanChangeThis: [
        "offense category",
        "violent versus nonviolent status",
        "compliance history",
        "expungement eligibility",
        "trafficking-victim facts",
        "supporting documentation",
        "current agency process"
      ],
      beforeYouMakePlans:
        "Before filing anything, ask which specific removal, termination, or expungement-related process applies and what documents the agency or court requires.",
      sources: ["tn-40-39-218"]
    },
    {
      question: "What if I move, visit, or travel?",
      answer:
        "Tennessee uses short deadlines and broad triggers for people moving in, moving out, working, studying, or repeatedly staying in the state. The STF flags five-day, fourteen-day-per-year, and four-day-per-month visit thresholds, and move-in or move-out duties generally run on a 48-hour timetable.",
      whatCanChangeThis: [
        "travel length",
        "repeated visits",
        "temporary lodging",
        "work or school status",
        "destination address",
        "supervision approval",
        "weekends or holidays",
        "international travel"
      ],
      beforeYouMakePlans:
        "Count travel days before leaving, ask whether the trip or move triggers Tennessee reporting, and keep proof of any notice you give.",
      sources: ["tn-tbi-quick-reference", "tn-ag-09-05", "tn-40-39-208"]
    },
    {
      question: "What if I do not have stable housing?",
      answer:
        "Tennessee treats lack of both a primary and secondary residence as homelessness, and the STF says homelessness requires monthly reporting. This is a major compliance trap because missing the monthly schedule can create a new violation.",
      whatCanChangeThis: [
        "primary residence status",
        "secondary residence status",
        "temporary lodging",
        "shelter access",
        "local intake practice",
        "supervision status",
        "transportation barriers"
      ],
      beforeYouMakePlans:
        "Ask the registering agency exactly when and where monthly reporting must happen, then keep proof of each report.",
      sources: ["tn-40-39-205", "tn-40-39-208"]
    }
  ],

  terms: [
    {
      term: "TBI",
      definition:
        "Tennessee Bureau of Investigation, the state agency associated with Tennessee’s sex offender registry resources."
    },
    {
      term: "Sexual offender",
      definition:
        "A Tennessee registry classification that the STF identifies as generally tied to annual reporting."
    },
    {
      term: "Violent sexual offender",
      definition:
        "A Tennessee registry classification that the STF identifies as generally tied to quarterly reporting."
    },
    {
      term: "Homelessness",
      definition:
        "For Tennessee registry planning, the STF describes homelessness as lacking both a primary and secondary residence, with monthly reporting required."
    },
    {
      term: "Primary residence",
      definition:
        "A main residence used for Tennessee registration analysis; whether someone has a primary residence can affect reporting duties."
    },
    {
      term: "Secondary residence",
      definition:
        "An additional residence or place of stay that can matter for Tennessee registration duties."
    },
    {
      term: "Community notification",
      definition:
        "Official notification or disclosure activity separate from the public registry listing. The Tennessee STF validates community-notification authority more clearly than broad local restriction authority."
    },
    {
      term: "Termination",
      definition:
        "A legal process that may end registration for certain eligible people. In Tennessee, the STF treats termination as real but narrow, not automatic."
    }
  ],

  sourceMap: {
    "tn-tbi-quick-reference": {
      label: "TBI Sex Offender Law Quick Reference",
      url: "https://sor.tbi.tn.gov/api/vfs/Sex_Offender_Law_Quick_Reference.pdf"
    },
    "tn-40-39-205": {
      label: "TCA § 40-39-205 — Forms, explanations, registration mechanics",
      url: "https://sor.tbi.tn.gov/api/vfs/40-39-205.pdf"
    },
    "tn-40-39-208": {
      label: "TCA § 40-39-208 — Violations and penalties",
      url: "https://sor.tbi.tn.gov/api/vfs/40-39-208.pdf"
    },
    "tn-40-39-216": {
      label: "TCA § 40-39-216 — Library restrictions",
      url: "https://sor.tbi.tn.gov/api/vfs/40-39-216.pdf"
    },
    "tn-40-39-218": {
      label:
        "TCA § 40-39-218 — Special termination path for certain trafficking-related aggravated prostitution cases",
      url: "https://sor.tbi.tn.gov/api/vfs/40-39-218.pdf"
    },
    "tn-ag-09-05": {
      label: "Tennessee Attorney General Opinion 09-05",
      url: "https://www.tn.gov/content/dam/tn/attorneygeneral/documents/ops/2009/op09-005.pdf"
    },
    "tn-smart-sorna": {
      label: "SMART Office — SORNA substantially implemented jurisdictions",
      url: "https://smart.ojp.gov/sorna/substantially-implemented"
    },
    "tn-doj-federal-registration": {
      label: "DOJ Criminal Division — Federal sex-offender registration guide",
      url: "https://www.justice.gov/criminal/criminal-ceos/citizens-guide-us-federal-law-sex-offender-registration"
    },
    "tn-doe-v-lee": {
      label: "Sixth Circuit Doe v. Lee opinion",
      url: "https://www.opn.ca6.uscourts.gov/opinions.pdf/25a0125p-06.pdf"
    },
    "tn-hb1922": {
      label: "Tennessee General Assembly — HB 1922",
      url: "https://wapp.capitol.tn.gov/apps/BillInfo/Default?BillNumber=HB1922&ga=114"
    },
    "tn-sb2030": {
      label: "Tennessee General Assembly — SB 2030",
      url: "https://wapp.capitol.tn.gov/apps/BillInfo/default.aspx?BillNumber=SB2030&GA=114"
    }
  },

  sourceConfidence: {
    lastValidatedUTC: "",
    status: "Partial validation only",
    notes: [
      "Generated from docs/state-truth-files/tennessee-state-truth-file-v1-1.md as the controlling Tennessee State Truth File v1.1.",
      "No live validation was performed during this preview-overlay pass, so lastValidatedUTC is intentionally not updated.",
      "The STF supports V2 preview generation with validation flags, but not production publication without additional validation.",
      "Local community-notification authority is supported, but broader local authority to impose independent registry-related residence or presence restrictions remains unresolved and requires validation.",
      "Do not state that Tennessee local governments can freely add stricter registry restrictions unless a later local-authority validation pass supports that conclusion.",
      "Current agency forms, relief process details, local ordinance mapping, homelessness implementation guidance, juvenile public-display details, and post-2025 litigation follow-up remain production validation items.",
      "The current-law language in this preview does not treat HB 1922 or SB 2030 as enacted or effective law."
    ]
  },

  statePageUpdateNotes: [
    {
      date: "2026-05-04",
      source: "tn-hb1922",
      issue:
        "Tennessee campground-notice proposal identified as watchlist-only in the STF source map.",
      status:
        "Do not change current-law travel or lodging language unless enacted, effective, and implemented.",
      affectedSections: ["commonQuestions", "travelInterstate", "visitingTraveling"]
    },
    {
      date: "2026-05-04",
      source: "tn-sb2030",
      issue:
        "Companion campground-notice proposal identified as watchlist-only in the STF source map.",
      status:
        "Needs later legislative validation before any production current-law update.",
      affectedSections: ["commonQuestions", "travelInterstate", "visitingTraveling"]
    },
    {
      date: "2026-05-04",
      source: "tn-doe-v-lee",
      issue:
        "Recent Tennessee registry litigation is flagged in the STF for production follow-up.",
      status:
        "Preview language preserves current STF posture; production publication needs litigation validation.",
      affectedSections: ["sourceConfidence", "recentChangesLitigation"]
    }
  ]
};