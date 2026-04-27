export default {
  state: "Sample State",
  lastReviewedUTC: "2099-01-01T12:00:00Z",

  atAGlance: {
    mustRegister:
      "Sample State requires registration for people with qualifying in-state convictions and comparable out-of-state, federal, military, or tribal convictions. This fictitious file is for scaffold testing only and is not legal information.",
    initialDeadline:
      "Initial in-person registration is required within **5 business days** of establishing residence, work, school, or temporary lodging in Sample State.",
    verificationCadence:
      "Tier I reports annually, Tier II reports every 6 months, and Tier III reports quarterly. People without stable housing must check in monthly.",
    primaryMethod:
      "Most updates are made in person with the county sheriff or state registry unit. Limited online updates are available for phone numbers and internet identifiers.",
    topGotchas: [
      "Temporary lodging of **7 days in any 30-day period** triggers registration duties.",
      "People without stable housing must report a sleeping location or general area every **30 days**.",
      "Relief exists, but the waiting period and eligibility standard depend on tier, offense date, and compliance history."
    ],
    officialLinks: {
      statuteIndex: "https://example.com/sample-state-statutes",
      adminRules: "https://example.com/sample-state-admin-rules",
      statePoliceRegistry: "https://example.com/sample-state-registry-unit",
      formsPortal: "https://example.com/sample-state-forms",
      publicWebsite: "https://example.com/sample-state-public-registry"
    }
  },

  highlights: {
    residency:
      "Sample State has a **1,000-foot statewide residence restriction** for some registrants, but local governments may not create broader local zones. The key practical issue is whether a person can find lawful housing near work, family support, and treatment.",
    presence:
      "Presence restrictions apply only to Tier III registrants and only around schools, child-care facilities, and youth-program events. Written permission exceptions exist for voting, court, treatment, employment, worship, and school obligations involving a person’s own child.",
    duration:
      "Registration duration ranges from **10 years to life**, with limited relief after sustained compliance. Tier I may seek relief after 10 years, Tier II after 20 years, and Tier III only through individualized review.",
    tiering:
      "Sample State uses a **three-tier system** combining offense category, risk assessment, and later reclassification. Public website exposure is automatic for Tier III and limited for Tier II."
  },

  whoMustRegister:
    "Adults and some juveniles adjudicated for qualifying offenses must register. Sample State also requires registration for people moving in from another jurisdiction if they were required to register there or if the out-of-state offense is comparable to a Sample State registerable offense.",

  deadlinesReporting: [
    "Initial registration must occur **within 5 business days** of release, relocation, work, school, or temporary lodging in Sample State.",
    "Address, employment, school, vehicle, phone, email, and internet-identifier changes must be reported within **3 business days**.",
    "Temporary lodging of **7 days in any 30-day period** creates a reporting duty even without a permanent move.",
    "International travel requires **21 days’ advance notice** through the registering agency."
  ],

  verificationInPerson: [
    "Tier I verifies annually; Tier II every 6 months; Tier III quarterly.",
    "People without stable housing verify every 30 days and must provide the best available description of sleeping location or travel pattern.",
    "Bring photo ID, proof of address if available, vehicle information, employment/school details, and a list of internet identifiers."
  ],

  residencyPresence:
    "A statewide 1,000-foot residence restriction applies to some registrants whose underlying offense involved a minor. The restriction does not apply to all registrants, and Sample State law includes written exceptions and grandfathering language. Local governments are preempted from adding broader registry-specific residence zones.",

  employmentEducationInternet: [
    "Employment and school information must be reported within 3 business days of starting, ending, or changing status.",
    "Internet identifiers must be reported before use or within 3 business days of creation, depending on supervision status.",
    "No blanket statewide employment ban applies to all registrants, but supervision conditions and licensing rules may create additional restrictions."
  ],

  publicWebsiteExposure: [
    "Tier III appears on the public registry automatically.",
    "Tier II appears only when the board makes a public-notification finding.",
    "Tier I is law-enforcement-only unless a court orders public disclosure."
  ],

  travelInterstate: [
    "Moving out of Sample State requires notice before departure and confirmation of the destination address when known.",
    "People moving into Sample State should verify both the origin-state exit process and Sample State’s initial registration deadline before travel.",
    "International travel requires 21-day notice and copies of itinerary details."
  ],

  visitingTraveling: [
    "Short tourism does not trigger registration unless the person stays **7 days in any 30-day period** or begins work or school.",
    "Hotel stays, short-term rentals, and staying with family can all count toward the temporary-lodging threshold.",
    "People on supervision should verify travel permission separately from registry registration duties."
  ],

  complianceEnforcement:
    "Failure to register, verify, or report required changes can be charged as a felony if intentional or repeated. Late updates may still create serious supervision, housing, and employment consequences even when no new offense occurred.",

  reliefPaths: [
    "Tier I may petition for relief after 10 years if registration has been continuous and no disqualifying offense occurred.",
    "Tier II may petition for reclassification after 15 years and relief after 20 years.",
    "Tier III may petition only for individualized reclassification after 25 years, and public notification usually continues unless the board finds a lower risk level.",
    "Juvenile adjudication cases have a separate review process focused on age, treatment history, and current risk."
  ],

  specialPopulations: [
    "People without stable housing face monthly reporting and should keep written proof of each check-in.",
    "People on supervision may have stricter residence, travel, contact, internet, or employment conditions than the registry statute itself requires.",
    "Juvenile cases and out-of-state convictions require careful comparison before assuming duration, tier, or relief eligibility."
  ],

  costs: [
    "Sample State charges a $50 annual administrative fee, with waiver requests available for indigency.",
    "Court filing fees may apply for relief petitions unless waived."
  ],

  recentChangesLitigation: [
    {
      type: "statute",
      bill: "Sample State HB 2099",
      session: "2099 Regular Session",
      effective: "2099-07-01",
      summary:
        "Created local-preemption language for registry-specific residency restrictions and added written exceptions for treatment, worship, court, voting, and school obligations involving a person’s own child.",
      link: "https://example.com/sample-state-hb-2099"
    },
    {
      type: "case",
      name: "Doe v. Sample State Registry Board",
      court: "Sample State Supreme Court",
      date: "2099-03-15",
      holding:
        "Held that public-notification decisions require individualized findings and cannot rely only on offense label.",
      link: "https://example.com/doe-v-sample-state"
    },
    {
      type: "rule",
      cite: "Sample Admin. Code 12-34-500",
      effective: "2099-09-01",
      summary:
        "Updated reporting forms to separate mandatory registry information from optional contact information.",
      link: "https://example.com/sample-admin-rule"
    }
  ],

  checklistsScripts: {
    newArrivalChecklist: [
      "Confirm whether your out-of-state conviction or prior registration status triggers Sample State registration.",
      "Register in person within **5 business days** if living, working, studying, or temporarily lodging in Sample State.",
      "Ask for written confirmation of tier, next verification date, and any required online-identifier reporting.",
      "Keep stamped receipts or email confirmations in a compliance folder."
    ],
    movingOutChecklist: [
      "Notify the Sample State registry unit before departure and keep proof of the notice.",
      "Contact the destination state before travel to verify its initial reporting window.",
      "Document your last Sample State address, destination address, departure date, and agency contact person."
    ],
    recordsRequestTemplate:
      "Please provide a copy of my registration file, including tier/classification notices, verification history, address-change records, internet-identifier records, risk-assessment records, public-notification decisions, and any relief or reclassification eligibility notices.",
    reliefPetitionOutline:
      "Attach proof of registration history, verification receipts, treatment/compliance documentation, housing and employment stability evidence, support letters, and a short statement explaining why continued registration or public notification is no longer necessary for public safety."
  },

  resources: {
    legalAid: [
      { name: "Sample State Legal Aid", link: "https://example.com/sample-legal-aid" },
      { name: "Sample State Bar Lawyer Referral", link: "https://example.com/sample-bar-referral" }
    ],
    advocacy: [
      { name: "Sample Families for Fair Policy", link: "https://example.com/sample-advocacy" }
    ],
    reentry: [
      { name: "Sample State Reentry Office", link: "https://example.com/sample-reentry" }
    ]
  },

  citations: [
    { label: "Sample State Registry Act", url: "https://example.com/sample-state-statutes" },
    { label: "Sample State Registry Board Rules", url: "https://example.com/sample-state-admin-rules" },
    { label: "Sample State Registry Unit", url: "https://example.com/sample-state-registry-unit" },
    { label: "Sample State Relief Forms", url: "https://example.com/sample-state-forms" }
  ],

  badges: {
    residencyZones: true,
    lifetimePossible: true,
    verificationQuarterly: true
  },

  plainLanguage: {
    atAGlance: {
      summary: [
        "Sample State is designed as a test case: enough restrictions to stress-test the layout, enough relief pathways to test nuance.",
        "The page should help a reader quickly understand the biggest practical risks before reading the full details."
      ],
      watchOuts: [
        "Temporary lodging, homelessness reporting, and online identifiers are easy places for confusion.",
        "Supervision conditions may be stricter than registry law itself."
      ],
      edgeCases: [
        "Out-of-state convictions, juvenile adjudications, and people moving between states need extra verification."
      ],
      validationNote:
        "This is fictitious scaffold data. Placeholder links intentionally point to example.com."
    },
    residencyPresence: {
      summary: [
        "The statewide rule is narrower than some states, but housing can still become difficult if lawful options cluster near prohibited locations.",
        "Local preemption helps, because it prevents cities from stacking their own larger registry-specific zones on top of state law."
      ],
      watchOuts: [
        "A person may be legally allowed to live somewhere under state law but still blocked by probation, parole, lease screening, or local misunderstanding."
      ]
    },
    reliefPaths: {
      summary: [
        "Relief is possible but staged. The key questions are tier, time registered, compliance history, public-notification status, and whether the person has a juvenile or adult case.",
        "The page should make relief feel understandable without implying that every person will qualify."
      ],
      watchOuts: [
        "Reclassification and full removal are different. The template should help readers distinguish them."
      ]
    },
    checklistsScripts: {
      summary: [
        "Checklists should be practical, not generic. They should help someone avoid missed deadlines and keep proof of compliance.",
        "Scripts should be short enough to copy, but specific enough to be useful."
      ]
    }
  }
};