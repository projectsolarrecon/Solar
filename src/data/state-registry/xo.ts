import oregon from "./or";

export default {
  ...oregon,
  state: "Oregon",
  lastReviewedUTC: oregon.lastReviewedUTC,

  startHere: [
    {
      label: "Where can I live?",
      status: "No blanket statewide address ban",
      body:
        "Oregon does not have a blanket statewide address ban for everyone on the registry. People on supervision or classified at higher levels may still face individual housing limits.",
      tone: "emerald",
      sources: ["or-163a-045", "or-oar-291-202-0040"]
    },
    {
      label: "Where can I go?",
      status: "Some places may be off-limits",
      body:
        "Oregon’s place restrictions are not universal. People classified as Level 3 or designated SVDO may face limits around child-congregation locations unless they have written approval.",
      tone: "sky",
      sources: ["or-163-476"]
    },
    {
      label: "How long does it last?",
      status: "Usually lifetime unless removed",
      body:
        "Oregon registration is generally ongoing unless a person is formally removed or reclassified through the correct board, court, or juvenile process.",
      tone: "rose",
      sources: ["or-163a-125", "or-163a-140"]
    },
    {
      label: "Who can see it?",
      status: "Only higher levels are public",
      body:
        "Oregon generally posts Level 3 registrants on the public website. Level 1 and Level 2 registrants are usually not publicly posted, though agencies may have additional access rules.",
      tone: "indigo",
      sources: ["or-163a-215", "or-public-registry"]
    },
    {
      label: "How often do I report?",
      status: "Annual check-in baseline",
      body:
        "Oregon generally requires annual in-person reporting around your birthday, plus 10-day reporting for key changes and 21-day notice before international travel.",
      tone: "slate",
      sources: ["or-163a-010", "or-163a-020"]
    },
    {
      label: "Can I get removed?",
      status: "There may be a way to ask",
      body:
        "Oregon has removal and reclassification pathways, but the route depends on level, case type, risk assessment, age-proximity rules, juvenile status, and the correct filing forum.",
      tone: "emerald",
      sources: ["or-163a-125", "or-forms"]
    }
  ],

  commonQuestions: [
    {
      question: "Where can I live?",
      answer:
        "Oregon does not have a blanket statewide rule banning all registrants from living near schools, parks, or child-care locations. But supervision conditions, Level 3 status, SVDO designation, or individualized rules can still limit housing.",
      whatCanChangeThis: [
        "supervision status",
        "Level 3 classification",
        "SVDO designation",
        "Department of Corrections conditions",
        "court or board orders"
      ],
      beforeYouMakePlans:
        "Before signing a lease, ask whether any supervision, board, or court condition limits the address. If you are not on supervision, verify whether any classification-based rule applies.",
      sources: ["or-163a-045", "or-oar-291-202-0040"]
    },
    {
      question: "Where can I go?",
      answer:
        "Oregon does not use a broad statewide place ban for everyone on the registry. The main statewide place restriction applies to certain people, including Level 3 or SVDO registrants, around child-congregation locations without written approval.",
      whatCanChangeThis: [
        "Level 3 classification",
        "SVDO designation",
        "written approval",
        "supervision conditions",
        "whether children regularly gather at the place"
      ],
      beforeYouMakePlans:
        "If the location involves schools, parks, playgrounds, youth programs, or places where children regularly gather, ask whether written approval is required before going there.",
      sources: ["or-163-476"]
    },
    {
      question: "Where can I work or go to school?",
      answer:
        "Oregon requires reporting for higher-education work or attendance. Nonresidents may also have to register if they work in Oregon for enough days in a calendar year or attend school there.",
      whatCanChangeThis: [
        "resident versus nonresident status",
        "college or higher-education setting",
        "number of work days in Oregon",
        "volunteer or vocation activity",
        "public posting or supervision conditions"
      ],
      beforeYouMakePlans:
        "Track Oregon work days carefully if you are not an Oregon resident. If school or college is involved, check the 10-day reporting rules before the start date.",
      sources: ["or-163a-010", "or-163a-020"]
    },
    {
      question: "Who will know, and what will they see?",
      answer:
        "Oregon’s public website generally lists Level 3 registrants. Lower levels are usually not posted publicly, but agencies may still release information under Oregon’s classification and disclosure rules.",
      whatCanChangeThis: [
        "Level 1, Level 2, or Level 3 classification",
        "reclassification outcome",
        "agency disclosure rules",
        "public website policy",
        "victim or community notification rules"
      ],
      beforeYouMakePlans:
        "Confirm your classification and check the official Oregon public registry. If you are Level 1 or Level 2, ask what information may still be available to agencies or released on request.",
      sources: ["or-163a-215", "or-public-registry"]
    },
    {
      question: "How often do I have to report?",
      answer:
        "Oregon generally requires in-person annual reporting within 10 days of your birthday. You also have 10-day reporting duties for key changes and 21-day notice before international travel.",
      whatCanChangeThis: [
        "release or placement date",
        "moving into Oregon",
        "address or legal name change",
        "higher-education changes",
        "international travel"
      ],
      beforeYouMakePlans:
        "Put your birthday reporting window, address-change deadline, school/work deadline, and international travel notice deadline on a calendar. Keep proof of each report.",
      sources: ["or-163a-010", "or-163a-015", "or-163a-020"]
    },
    {
      question: "How long will this last, and can I get removed?",
      answer:
        "Oregon has more pathways than some states, but the path depends on classification and case type. Level 1 may seek full removal; Level 2 or Level 3 may need reclassification first. Certain age-proximity and juvenile cases have separate routes.",
      whatCanChangeThis: [
        "Level 1, Level 2, or Level 3 classification",
        "risk assessment",
        "time since supervision",
        "juvenile case status",
        "age-proximity eligibility",
        "correct board or court forum"
      ],
      beforeYouMakePlans:
        "Confirm your level, pay or resolve any required fees, and use the correct board, court, or juvenile procedure before filing anything.",
      sources: ["or-163a-125", "or-163a-140", "or-forms"]
    },
    {
      question: "What if I move, visit, or travel?",
      answer:
        "Short tourism alone generally does not trigger Oregon registration. But working in Oregon for 14 or more days in a calendar year, attending school, moving into Oregon, or international travel can create duties.",
      whatCanChangeThis: [
        "length and purpose of stay",
        "work days in Oregon",
        "school attendance",
        "moving into Oregon",
        "international travel"
      ],
      beforeYouMakePlans:
        "Count work days, keep travel records, and check both Oregon’s rules and the rules of the state you are leaving or entering.",
      sources: ["or-163a-020", "or-163a-055"]
    },
    {
      question: "What if I do not have stable housing?",
      answer:
        "The Oregon file does not identify a separate transient-reporting system like some states have, but address changes and annual in-person reporting still matter. Supervision conditions may also control where someone can stay.",
      whatCanChangeThis: [
        "change of residence",
        "supervision status",
        "county reporting practice",
        "mailing address or contact requirements",
        "annual reporting window"
      ],
      beforeYouMakePlans:
        "Ask the reporting agency what location or mailing information they require if you do not have stable housing, and get proof of each report.",
      sources: ["or-163a-010", "or-163a-035"]
    }
  ],

  terms: [
    { term: "OSP", definition: "Oregon State Police, the state agency involved in sex offender registration procedures and the public registry." },
    { term: "ORS", definition: "Oregon Revised Statutes, Oregon’s official state laws." },
    { term: "OAR", definition: "Oregon Administrative Rules, agency rules that explain how laws are carried out." },
    { term: "SVDO", definition: "Sexually Violent Dangerous Offender, a designation that may trigger additional Oregon location or supervision rules." },
    { term: "PSRB", definition: "Psychiatric Security Review Board, the board involved in certain guilty-except-for-insanity cases." },
    { term: "GEI", definition: "Guilty Except for Insanity, an Oregon case category that may follow different board and relief procedures." },
    { term: "Level 1 / Level 2 / Level 3", definition: "Oregon classification levels that affect public posting, disclosure, and removal or reclassification options." }
  ],

  sourceMap: {
    "or-163a-index": { label: "ORS Chapter 163A", url: "https://www.oregonlegislature.gov/bills_laws/ors/ors163A.html" },
    "or-163a-010": { label: "ORS 163A.010", url: "https://oregon.public.law/statutes/ors_163a.010" },
    "or-163a-015": { label: "ORS 163A.015", url: "https://oregon.public.law/statutes/ors_163a.015" },
    "or-163a-020": { label: "ORS 163A.020", url: "https://oregon.public.law/statutes/ors_163a.020" },
    "or-163a-035": { label: "ORS 163A.035", url: "https://oregon.public.law/statutes/ors_163a.035" },
    "or-163a-045": { label: "ORS 163A.045", url: "https://oregon.public.law/statutes/ors_163a.045" },
    "or-163a-055": { label: "ORS 163A.055", url: "https://oregon.public.law/statutes/ors_163a.055" },
    "or-163a-125": { label: "ORS 163A.125", url: "https://oregon.public.law/statutes/ors_163a.125" },
    "or-163a-140": { label: "ORS 163A.140", url: "https://oregon.public.law/statutes/ors_163a.140" },
    "or-163a-215": { label: "ORS 163A.215", url: "https://oregon.public.law/statutes/ors_163a.215" },
    "or-163-476": { label: "ORS 163.476", url: "https://oregon.public.law/statutes/ors_163.476" },
    "or-oar-291-202-0040": { label: "OAR 291-202-0040", url: "https://secure.sos.state.or.us/oard/viewSingleRule.action?ruleVrsnRsn=42687" },
    "or-public-registry": { label: "Oregon public registry", url: "https://sexoffenders.oregon.gov/" },
    "or-forms": { label: "Oregon courts registry relief forms", url: "https://www.courts.oregon.gov/forms/pages/criminal-sorr.aspx" }
  },

  sourceConfidence: {
    lastValidatedUTC: "2025-10-13T00:00:00Z",
    status: "Preview data based on existing Oregon file; needs routine currency validation before production use",
    notes: [
      "Preview data is based on the existing Oregon state file.",
      "Oregon appears well suited to the V2 scaffold because the current file already distinguishes statewide rules, supervision overlays, public posting levels, and removal or reclassification routes."
    ]
  }
};
