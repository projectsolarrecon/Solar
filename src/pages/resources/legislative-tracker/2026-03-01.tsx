import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import ShareBar from "../../../components/solar/ShareBar";

type SourceKind = "official" | "supplemental";

type Source = {
  label: string;
  href: string;
  kind: SourceKind;
  type: string;
};

type PrimaryLink = {
  label: string;
  href: string;
  note?: string;
};

type ChipSet = {
  movement: string[];
  impact: string[];
  risk: string[];
};

type ActionLink = {
  title: string;
  why: string;
  label: string;
  href: string;
  message: string;
};

type Development = {
  id: number;
  group: string;
  title: string;
  jurisdiction: string;
  status: string;
  date: string;
  summary: string;
  primaryLinks: PrimaryLink[];
  changed: ReactNode[];
  matters: ReactNode[];
  analysis: ReactNode[];
  watch: ReactNode[];
  chips: ChipSet;
  sources: Source[];
  action?: ActionLink;
};

type WatchItemData = {
  title: string;
  posture: string;
  why: string;
  next: string[];
};

type GlanceCard = {
  label: string;
  title: string;
  body: string;
};

const pageTitle = "February 2026 Legislative Tracker | The SOLAR Project";
const pageDescription =
  "February 2026 brought federal exclusion proposals, state registry-expansion bills, technical-violation reforms, and court decisions testing the limits of sex-offense registration laws.";

const canonicalUrl = "https://thesolarproject.org/resources/legislative-tracker/2026-03-01";

const groups = [
  "Federal Exclusion Proposals",
  "Restriction Expansion / Housing and Place-Based Burdens",
  "Compliance, Online Identifiers, and Technical-Violation Exposure",
  "Reform / Court Limits",
  "Litigation Watch",
];

const atAGlance: GlanceCard[] = [
  {
    label: "Dominant monthly pattern",
    title: "Instability by accumulation",
    body:
      "February did not produce one sweeping national registry overhaul. It produced a stack of targeted burdens affecting health care, shelter, housing, public places, online identity, tiering, evaluations, and technical violations.",
  },
  {
    label: "Strongest burden-expansion theme",
    title: "Exclusion from stabilizing systems",
    body:
      "The most concrete national signal was exclusion: one federal bill targeted ACA and Medicaid support, while another targeted access to federally funded shelters.",
  },
  {
    label: "Rights / reform counterpoint",
    title: "Technical-violation limits still mattered",
    body:
      "Washington HB 2403 and Iowa’s Uranga decision showed a narrower reform path: distinguishing administrative noncompliance from new harm and requiring prosecutors to prove the exact registry duty charged.",
  },
  {
    label: "Top action opportunity",
    title: "Respond to federal exclusion bills",
    body:
      "The highest-impact reader action is contacting members of Congress about the health-care and shelter exclusion bills before committee movement or copycat proposals normalize the frame.",
  },
  {
    label: "What to watch next",
    title: "Final text and implementation details",
    body:
      "Watch Florida and Wyoming for final restriction language, Idaho for residence-rule implementation, Washington for floor action, and Pennsylvania for the next Act 29 litigation path.",
  },
];

const developments: Development[] = [
  {
    id: 1,
    group: "Federal Exclusion Proposals",
    title: "H.R. 7453 / CLEAN Act would deny ACA credits and Medicaid-funded medical assistance to covered registrants",
    jurisdiction: "Federal / U.S. House",
    status: "Introduced February 9, 2026; referred to House Ways and Means and Energy and Commerce",
    date: "February 9, 2026",
    summary:
      "A federal bill would convert sex-offense status into a categorical bar to major health-coverage assistance programs.",
    primaryLinks: [
      {
        label: "CLEAN Act bill text PDF",
        href: "https://steube.house.gov/wp-content/uploads/2026/02/PIH-CLEAN-Act-SIGNED.pdf",
      },
      {
        label: "Rep. Steube press release",
        href: "https://steube.house.gov/press-releases/rep-steube-no-aca-or-medicaid-for-sex-offenders/",
      },
    ],
    changed: [
      <>
        The{" "}
        <ExternalLink
          href="https://steube.house.gov/wp-content/uploads/2026/02/PIH-CLEAN-Act-SIGNED.pdf"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          CLEAN Act
        </ExternalLink>{" "}
        would deny ACA refundable premium tax credits to any individual, or spouse on a joint return, who is a “sex
        offender” under the Adam Walsh Act definition as of the last day of the taxable year, and would block federal
        Medicaid matching funds for medical assistance provided to covered individuals.
      </>,
      "The ACA credit denial would apply to taxable years ending after enactment. The Medicaid provisions would apply to people enrolled or reenrolled on or after enactment, while allowing states to elect not to make Medicaid medical assistance available to covered individuals.",
      "The February hook was introduction of a federal proposal that would turn registry status into a health-benefits exclusion.",
    ],
    matters: [
      "Health coverage is tied to stability, treatment access, medication continuity, employment capacity, disability care, mental-health care, and family stability.",
      "The bill treats registrants as categorically undeserving of health support, regardless of offense age, present risk, poverty, disability, treatment compliance, medical need, or family circumstances.",
    ],
    analysis: [
      "This is negative movement for registrants and families because it uses the registry as a gatekeeping device for essential health support rather than as an individualized public-safety tool.",
      "The likely spillover would not stop with the person denied coverage. Families, local health systems, emergency rooms, reentry providers, and community supervision systems could absorb the destabilization.",
    ],
    watch: [
      "Whether the bill receives committee activity or a Senate companion.",
      "Whether the definition of “sex offender” is narrowed to current registration status or remains tied to broader federal categories.",
      "Whether exceptions are proposed for disability, age, hospice, minor dependents, medical necessity, or people who have obtained post-registration relief.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Relief exclusion", "Reentry barrier", "Family-stability impact", "Rights concern", "Punishment expansion"],
      risk: ["Watch closely", "Advocacy opening", "Implementation risk"],
    },
    sources: [
      {
        label: "CLEAN Act bill text PDF",
        href: "https://steube.house.gov/wp-content/uploads/2026/02/PIH-CLEAN-Act-SIGNED.pdf",
        kind: "official",
        type: "official bill text hosted by sponsor",
      },
      {
        label: "Rep. Steube press release",
        href: "https://steube.house.gov/press-releases/rep-steube-no-aca-or-medicaid-for-sex-offenders/",
        kind: "official",
        type: "official congressional press release",
      },
      {
        label: "Florida Action Committee context",
        href: "https://floridaactioncommittee.org/new-federal-bill-seeks-to-eliminate-healthcare-benefits-to-people-on-the-sex-offender-registry/",
        kind: "supplemental",
        type: "advocacy context",
      },
    ],
    action: {
      title: "Oppose health-care exclusion by registry status",
      why:
        "Health coverage supports treatment, medication access, disability care, work stability, and family stability. A categorical registry-based exclusion would destabilize reentry without individualized risk assessment.",
      label: "Contact your U.S. House member",
      href: "https://www.congress.gov/members/find-your-member",
      message:
        "Please oppose H.R. 7453. Denying health coverage assistance by registry status would destabilize treatment, medication access, disability care, family stability, and reentry without any individualized public-safety assessment.",
    },
  },
  {
    id: 2,
    group: "Federal Exclusion Proposals",
    title: "H.R. 7624 would bar covered registrants from federally funded domestic-violence and homeless shelters",
    jurisdiction: "Federal / U.S. House",
    status: "Introduced February 20, 2026; referred to House Financial Services",
    date: "February 20, 2026",
    summary:
      "A federal shelter-exclusion bill would prohibit covered shelters from serving covered registrants and would penalize noncompliant shelters through federal-funding consequences.",
    primaryLinks: [
      {
        label: "GovInfo H.R. 7624 bill record",
        href: "https://www.govinfo.gov/app/details/BILLS-119hr7624ih",
      },
      {
        label: "Rep. Mace press release",
        href: "https://mace.house.gov/media/press-releases/rep-nancy-mace-new-bill-would-ban-sex-offenders-federally-funded-shelters",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://www.govinfo.gov/app/details/BILLS-119hr7624ih"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          H.R. 7624 / Safe Shelters for Survivors Act of 2026
        </ExternalLink>{" "}
        would prohibit covered federally funded domestic-violence and homeless shelters from providing services or housing
        to covered sex offenders, and would bar covered sex offenders from entering or using those shelters except to seek
        information about non-covered alternatives.
      </>,
      "The proposal includes a notice duty for covered registrants who enter a covered shelter, funding ineligibility for noncompliant shelters in the following fiscal year, and criminal penalties for knowing violations, including imprisonment up to five years.",
      "The February hook was introduction of a bill tying federal shelter funding to categorical denial of access for covered registrants.",
    ],
    matters: [
      "Shelter access is a registry-life issue because residence restrictions, employment barriers, family disruption, poverty, and supervision conditions already increase housing instability.",
      "A categorical shelter ban can push people into unsheltered homelessness, making address reporting and supervision compliance harder rather than safer.",
    ],
    analysis: [
      "This is negative movement because it would turn emergency housing and domestic-violence shelter systems into another registry-enforcement boundary.",
      "The proposal risks harming families as well as individuals: a household that includes a registrant could face impossible choices during homelessness, disaster displacement, family breakdown, or violence.",
    ],
    watch: [
      "Whether the bill receives hearing activity.",
      "Whether shelter providers raise concerns about implementation, confidentiality, due process, homelessness, domestic violence, emergency displacement, and family safety.",
      "Whether the definition of “covered sex offender” is narrowed or remains broad.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Housing barrier", "Reentry barrier", "Family-stability impact", "Compliance burden", "Punishment expansion"],
      risk: ["Watch closely", "Advocacy opening", "Enforcement risk"],
    },
    sources: [
      {
        label: "GovInfo H.R. 7624 bill record",
        href: "https://www.govinfo.gov/app/details/BILLS-119hr7624ih",
        kind: "official",
        type: "official federal bill record",
      },
      {
        label: "Rep. Mace press release",
        href: "https://mace.house.gov/media/press-releases/rep-nancy-mace-new-bill-would-ban-sex-offenders-federally-funded-shelters",
        kind: "official",
        type: "official congressional press release",
      },
      {
        label: "Berkeley Observer coverage",
        href: "https://berkeleyobserver.com/2026/02/22/nancy-mace-pushes-to-ban-sex-offenders-from-federally-funded-shelters/",
        kind: "supplemental",
        type: "media context",
      },
      {
        label: "Florida Action Committee context",
        href: "https://floridaactioncommittee.org/new-federal-bill-to-ban-registrants-from-homeless-shelters/",
        kind: "supplemental",
        type: "advocacy context",
      },
    ],
    action: {
      title: "Oppose shelter exclusion by registry status",
      why:
        "Emergency shelter access supports address compliance, reentry stability, family safety, and survival during displacement. Categorical exclusion can increase homelessness and technical-violation risk.",
      label: "Contact your U.S. House member",
      href: "https://www.congress.gov/members/find-your-member",
      message:
        "Please oppose H.R. 7624. Emergency shelter access supports stability, address compliance, family safety, and reentry. Categorical exclusion by registry status would increase homelessness and technical-violation risk without individualized review.",
    },
  },
  {
    id: 3,
    group: "Restriction Expansion / Housing and Place-Based Burdens",
    title: "Florida SB 212 / HB 45 continued moving restrictions tied to public pools and child-centered places",
    jurisdiction: "Florida",
    status: "Senate Judiciary committee substitute adopted February 10; House Judiciary reported CS February 24",
    date: "February 10 and February 24, 2026",
    summary:
      "Florida narrowed some draft language but continued advancing a bill expanding restricted-location rules around public swimming pools and child-centered places.",
    primaryLinks: [
      {
        label: "Florida Senate SB 212 bill page",
        href: "https://www.flsenate.gov/Session/Bill/2026/212",
      },
      {
        label: "Florida Senate Judiciary analysis",
        href: "https://www.flsenate.gov/Session/Bill/2026/212/Analyses/2026s00212.ju.PDF",
      },
      {
        label: "HB 45 tracking page",
        href: "https://trackbill.com/bill/florida-house-bill-45-sexual-offenders-and-sexual-predators/2744286/",
        note: "Supplemental tracking source used for House companion movement.",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://www.flsenate.gov/Session/Bill/2026/212"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          Florida CS/CS/SB 212
        </ExternalLink>{" "}
        and companion HB 45 would expand or revise restrictions tied to schools, child care facilities, parks, public
        swimming pools, playgrounds, supervision permissions, and registry-information sharing.
      </>,
      "The February Senate committee substitute deleted “public bathing space” references and shifted some presence language from a 200-foot zone to being “on the premises” of covered areas.",
      "The bill would define public swimming pool for residency-restriction purposes to include county, city, or municipal pools while excluding hotel, motel, and recreational vehicle park pools.",
      "It would also require supervising officers to deny certain probationer or conditional-release requests to visit public swimming pools unless specific exemptions apply.",
    ],
    matters: [
      "Even narrowed premises language can create daily-life traps when covered places include common community spaces such as pools, parks, schools, playgrounds, and child-care-adjacent areas.",
      "Supervision permission rules can convert ordinary family, religious, civic, or caregiving activities into discretionary denials or compliance hazards.",
    ],
    analysis: [
      "This is negative movement because the bill preserves a broader exclusion architecture even after some language was narrowed.",
      "The change from a 200-foot boundary to “premises” may improve clarity in some settings, but families still need workable exceptions, clear maps, and non-arbitrary supervision guidance.",
    ],
    watch: [
      "Whether final language keeps “premises” rather than restoring broader distance language.",
      "Whether exceptions are practical for family activity, voting, religious services, employment, treatment, caregiving, and official business.",
      "Whether agencies and supervision officers receive clear implementation guidance.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Compliance burden", "Housing barrier", "Family-stability impact", "Supervision burden", "Punishment expansion"],
      risk: ["Watch closely", "Implementation risk", "Advocacy opening", "Clarification needed"],
    },
    sources: [
      {
        label: "Florida Senate SB 212 bill page",
        href: "https://www.flsenate.gov/Session/Bill/2026/212",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Florida Senate Judiciary analysis",
        href: "https://www.flsenate.gov/Session/Bill/2026/212/Analyses/2026s00212.ju.PDF",
        kind: "official",
        type: "official bill analysis",
      },
      {
        label: "TrackBill HB 45 tracking page",
        href: "https://trackbill.com/bill/florida-house-bill-45-sexual-offenders-and-sexual-predators/2744286/",
        kind: "supplemental",
        type: "legislative tracking context",
      },
    ],
    action: {
      title: "Ask Florida lawmakers to narrow place-based restrictions",
      why:
        "Pool, park, playground, school, and child-care-adjacent restrictions can create unclear daily-life boundaries and family-stability burdens unless the final text is narrow, clear, and workable.",
      label: "Find your Florida legislators",
      href: "https://www.flsenate.gov/Senators/Find",
      message:
        "Please narrow SB 212 / HB 45. Any location restriction should have clear boundaries, practical family and civic exceptions, individualized supervision discretion, and evidence-based justification rather than blanket exclusion.",
    },
  },
{
    id: 4,
    group: "Compliance, Online Identifiers, and Technical-Violation Exposure",
    title: "South Carolina S. 924 would require registry-name use on social, dating, and sexual-communication platforms",
    jurisdiction: "South Carolina",
    status: "Introduced February 12, 2026; referred to Senate Judiciary",
    date: "February 12, 2026",
    summary:
      "South Carolina proposed a new online identity / name-use supervision condition for registrants on probation or parole.",
    primaryLinks: [
      {
        label: "South Carolina Legislature S. 924",
        href: "https://www.scstatehouse.gov/sess126_2025-2026/bills/924.htm",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://www.scstatehouse.gov/sess126_2025-2026/bills/924.htm"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          South Carolina S. 924
        </ExternalLink>{" "}
        would require a person convicted of an offense requiring sex-offender registration to use the person’s registry
        name when accessing social networking websites, communicating with people or groups for the purpose of promoting
        sexual relations, or using dating applications while on probation or parole.
      </>,
      "The first violation would be a misdemeanor punishable by a fine up to $1,000, imprisonment up to one year, or both.",
      "A second or subsequent violation would be punishable by a fine up to $2,500, imprisonment up to three years, or both.",
    ],
    matters: [
      "Online-identifier and compelled-name rules implicate speech, privacy, association, dating, family communication, peer support, and employment-related online presence.",
      "The phrase “communicating with other persons or groups for the purpose of promoting sexual relations” creates uncertainty about what platforms, speech, and conduct are covered.",
    ],
    analysis: [
      "This is negative movement because it adds criminal exposure to ordinary online conduct and creates a new technical-violation pathway.",
      "For families, shared devices, nicknames, legal name changes, initials, platform rules, and household accounts could complicate compliance even when no harmful conduct is occurring.",
    ],
    watch: [
      "Whether the bill is narrowed to specific platforms, conduct, or offense categories.",
      "Whether First Amendment and privacy concerns are raised in committee.",
      "Whether “registry name” is clarified for people with legal name changes, aliases, initials, or platform naming limits.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Online identifiers", "Compliance burden", "Rights concern", "Supervision burden", "Enforcement risk"],
      risk: ["Watch closely", "Litigation risk", "Clarification needed"],
    },
    sources: [
      {
        label: "South Carolina Legislature S. 924",
        href: "https://www.scstatehouse.gov/sess126_2025-2026/bills/924.htm",
        kind: "official",
        type: "official bill page",
      },
    ],
    action: {
      title: "Request constitutional review of online-name rules",
      why:
        "Compelled online-name rules can chill lawful speech, family contact, support groups, employment communication, dating, and association unless they are narrow, clear, and tied to individualized risk.",
      label: "Find your South Carolina legislators",
      href: "https://www.scstatehouse.gov/legislatorssearch.php",
      message:
        "Please request constitutional review of S. 924. Online conditions should be narrow, clear, and tied to individualized risk, while protecting lawful family, work, support, and speech-related communications.",
    },
  },
  {
    id: 5,
    group: "Compliance, Online Identifiers, and Technical-Violation Exposure",
    title: "Idaho H0604 would revise psychosexual-evaluation provisions inside registration law",
    jurisdiction: "Idaho",
    status: "Introduced February 6; referred to House Judiciary, Rules & Administration February 9",
    date: "February 6 and February 9, 2026",
    summary:
      "Idaho introduced a bill addressing psychosexual evaluations, consequences for failure to provide an evaluation, and payment or funding rules.",
    primaryLinks: [
      {
        label: "Idaho Legislature H0604 summary",
        href: "https://legislature.idaho.gov/sessioninfo/2026/legislation/H0604/",
      },
      {
        label: "Idaho Legislature H0604 text PDF",
        href: "https://legislature.idaho.gov/wp-content/uploads/sessioninfo/2026/legislation/H0604.pdf",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://legislature.idaho.gov/sessioninfo/2026/legislation/H0604/"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          Idaho H0604
        </ExternalLink>{" "}
        would revise psychosexual-evaluation provisions in Idaho’s sexual-offender-registration framework, including
        payment rules and the treatment of failure to provide an evaluation as a potential aggravating circumstance.
      </>,
      "The bill concerns consequences for evaluation nonproduction, payment provisions for psychosexual evaluation by a defendant, and use of certain funding and restitution.",
      "Because evaluation rules can shape sentencing, supervision, treatment, risk classification, and relief posture, the proposal belongs in the month’s compliance and due-process picture even though the available source set was thinner than for several other items.",
    ],
    matters: [
      "Psychosexual evaluations can shape sentencing, supervision, risk classification, treatment, and relief posture.",
      "Payment rules matter because evaluation access can depend on money, transportation, provider availability, and court timing.",
    ],
    analysis: [
      "The movement is unclear because evaluation rules can sometimes clarify assessment practice, but treating nonproduction as aggravating can raise due-process concerns if inability to pay or access a provider is not distinguished from refusal.",
      "Families could face direct cost pressure if defendants or registrants are expected to fund evaluations without meaningful indigency protections.",
    ],
    watch: [
      "Whether the bill distinguishes refusal from inability to pay or obtain an evaluation.",
      "Whether public funding or restitution provisions create real access or simply shift costs.",
      "Whether evaluation standards are transparent, reviewable, and tied to fair process.",
    ],
    chips: {
      movement: ["Unclear movement"],
      impact: ["Compliance burden", "Due-process concern", "Agency implementation", "Reentry barrier"],
      risk: ["Clarification needed", "Watch closely", "Implementation risk"],
    },
    sources: [
      {
        label: "Idaho Legislature H0604 summary",
        href: "https://legislature.idaho.gov/sessioninfo/2026/legislation/H0604/",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Idaho Legislature H0604 text PDF",
        href: "https://legislature.idaho.gov/wp-content/uploads/sessioninfo/2026/legislation/H0604.pdf",
        kind: "official",
        type: "official bill text",
      },
      {
        label: "LegiScan H0604 page",
        href: "https://legiscan.com/ID/bill/H0604/2026",
        kind: "supplemental",
        type: "legislative tracking context",
      },
    ],
    action: {
      title: "Ask Idaho lawmakers to protect evaluation due process",
      why:
        "Evaluation rules can affect sentencing, supervision, risk classification, treatment, and relief. Cost or access barriers should not become aggravating circumstances.",
      label: "Find your Idaho legislator",
      href: "https://legislature.idaho.gov/legislators/whosmylegislator/",
      message:
        "Please add due-process safeguards to H0604. Evaluation rules should distinguish refusal from inability to pay or access a provider, include indigency protections, and use transparent standards.",
    },
  },
  {
    id: 6,
    group: "Restriction Expansion / Housing and Place-Based Burdens",
    title: "Idaho H0683 clarified residence and “habitually lives” rules with housing-restriction consequences",
    jurisdiction: "Idaho",
    status: "Introduced February 16; do-pass February 24; passed House February 26",
    date: "February 16, February 24, and February 26, 2026",
    summary:
      "Idaho advanced a fast-moving bill clarifying when a registrant is considered to reside or habitually live at a location.",
    primaryLinks: [
      {
        label: "Idaho Legislature H0683 summary",
        href: "https://legislature.idaho.gov/sessioninfo/2026/legislation/H0683/",
      },
      {
        label: "Idaho Legislature H0683 text PDF",
        href: "https://legislature.idaho.gov/wp-content/uploads/sessioninfo/2026/legislation/H0683.pdf",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://legislature.idaho.gov/sessioninfo/2026/legislation/H0683/"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          Idaho H0683
        </ExternalLink>{" "}
        would define or clarify residence and “habitually lives” for registration purposes, including objective time or
        frequency standards, application to homeless registrants, care-facility exceptions near schools or daycares, and
        posted-notice requirements for covered property.
      </>,
      "During February, the bill moved from introduction to House passage, making residence-compliance definitions a live Idaho issue.",
      "Later post-window context indicates the bill was signed March 27 and became effective July 1, 2026; that later enactment is relevant to implementation, not the February hook.",
    ],
    matters: [
      "Residence definitions determine whether someone is compliant, in violation, or unlawfully living too close to a restricted location.",
      "Clarity can reduce arbitrary enforcement, but objective thresholds can also expand enforcement if more temporary or unstable arrangements count as residence.",
    ],
    analysis: [
      "This is mixed movement. Clearer definitions can help people understand obligations, but the same definitions can intensify housing restrictions for people who are homeless, couch-surfing, caregiving, hospitalized, in treatment, or living in long-term care.",
      "Posted notices may also stigmatize facilities and create collateral exclusion from care settings.",
    ],
    watch: [
      "Implementation guidance from Idaho State Police or local sheriffs.",
      "How “habitually lives” applies to homelessness, temporary caregiving, shared custody, medical placement, and unstable housing.",
      "Whether notice requirements produce stigma or facility-level exclusion.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: ["Compliance clarity", "Housing barrier", "Compliance burden", "Agency implementation", "Family-stability impact"],
      risk: ["Implementation risk", "Clarification needed", "Watch closely"],
    },
    sources: [
      {
        label: "Idaho Legislature H0683 summary",
        href: "https://legislature.idaho.gov/sessioninfo/2026/legislation/H0683/",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Idaho Legislature H0683 text PDF",
        href: "https://legislature.idaho.gov/wp-content/uploads/sessioninfo/2026/legislation/H0683.pdf",
        kind: "official",
        type: "official bill text",
      },
      {
        label: "LegiScan H0683 page",
        href: "https://legiscan.com/ID/bill/H0683/2026",
        kind: "supplemental",
        type: "legislative tracking context",
      },
      {
        label: "LegiScan H0683 introduced text",
        href: "https://legiscan.com/ID/text/H0683/id/3363843",
        kind: "supplemental",
        type: "bill text mirror",
      },
      {
        label: "Tally Idaho H0683",
        href: "https://www.tallyidaho.com/bills/2026/h0683",
        kind: "supplemental",
        type: "civic-data context",
      },
    ],
    action: {
      title: "Monitor Idaho residence-rule implementation",
      why:
        "Residence definitions can help clarify compliance, but implementation will determine whether homeless people, care placements, temporary caregiving, and medical stays are treated fairly.",
      label: "Find your Idaho legislator",
      href: "https://legislature.idaho.gov/legislators/whosmylegislator/",
      message:
        "Please ensure H0683 implementation protects homeless people, medical and treatment placements, temporary caregiving, and non-willful technical violations. Residence guidance should be clear, humane, and administrable.",
    },
  },
  {
    id: 7,
    group: "Reform / Court Limits",
    title: "Washington HB 2403 advanced reform of failure-to-register penalty escalation",
    jurisdiction: "Washington",
    status: "Public hearing February 2; do-pass February 6; referred to Rules 2 Review February 9",
    date: "February 2, February 6, and February 9, 2026",
    summary:
      "Washington advanced a reform-oriented bill reducing or rationalizing some criminal penalties and sentencing consequences for failure-to-register violations.",
    primaryLinks: [
      {
        label: "Washington HB 2403 bill page",
        href: "https://app.leg.wa.gov/billsummary?BillNumber=2403&Year=2025&Initiative=false",
      },
      {
        label: "Washington HB 2403 original bill text",
        href: "https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bills/House%20Bills/2403.pdf",
      },
      {
        label: "Washington comment portal for HB 2403",
        href: "https://app.leg.wa.gov/pbc/bill/2403",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://app.leg.wa.gov/billsummary?BillNumber=2403&Year=2025&Initiative=false"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          Washington HB 2403
        </ExternalLink>{" "}
        would remove second-or-subsequent failure to register as a sex offender from seriousness level II and place
        failure to register at seriousness level I, while deleting language that escalates third or later felony
        failure-to-register offenses to class B felonies.
      </>,
      "It would remove second-or-subsequent felony failure to register from the statutory definition of “sex offense” for sentencing purposes, while preserving class C felony treatment for failure to register tied to felony registration duties and adding two years of community custody for second or subsequent violations.",
      "The bill advanced through fiscal committee during February and moved to Rules 2 Review.",
    ],
    matters: [
      "Failure-to-register prosecutions often punish instability, homelessness, confusion, transportation barriers, mental illness, poverty, or administrative mistakes.",
      "Reducing repeat escalation can reduce carceral exposure without eliminating registration obligations.",
    ],
    analysis: [
      "This is positive movement because it distinguishes technical registration noncompliance from new sexual harm and reduces some of the harshest escalation consequences.",
      "The reform is limited. It still leaves felony exposure and community custody for repeat violations, so implementation and charging practices will matter.",
    ],
    watch: [
      "Whether the bill reaches the House floor.",
      "Whether amendments restore harsher penalty treatment.",
      "Whether public debate accurately distinguishes administrative noncompliance from new harm.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: ["Compliance burden", "Compliance clarity", "Reentry barrier", "Supervision burden", "Court limitation"],
      risk: ["Reform opening", "Watch closely", "Implementation risk"],
    },
    sources: [
      {
        label: "Washington HB 2403 bill page",
        href: "https://app.leg.wa.gov/billsummary?BillNumber=2403&Year=2025&Initiative=false",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Washington HB 2403 original bill text",
        href: "https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bills/House%20Bills/2403.pdf",
        kind: "official",
        type: "official bill text",
      },
      {
        label: "Washington House Rules Review 2026",
        href: "https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Workroom%20Reports/House%20Rules%20Review/RULES%20REVIEW%202026-030.pdf",
        kind: "official",
        type: "official legislative report",
      },
      {
        label: "FPIW Action final report",
        href: "https://fpiwaction.org/2026-final-report/",
        kind: "supplemental",
        type: "advocacy context",
      },
    ],
    action: {
      title: "Support Washington failure-to-register penalty reform",
      why:
        "This is the month’s clearest reform-oriented legislative item because it reduces some repeat failure-to-register escalation while keeping accountability in place.",
      label: "Comment on Washington HB 2403",
      href: "https://app.leg.wa.gov/pbc/bill/2403",
      message:
        "Please support HB 2403. Washington should distinguish technical registration violations from new sexual harm, preserve accountability, and reduce destabilizing felony escalation that undermines reentry.",
    },
  },
{
    id: 8,
    group: "Compliance, Online Identifiers, and Technical-Violation Exposure",
    title: "New Mexico HB 199 proposed SORNA tiering, shorter deadlines, expanded information reporting, and longer registration periods",
    jurisdiction: "New Mexico",
    status: "Printed/referred February 6; committee substitute action and postponed indefinitely February 13",
    date: "February 6 and February 13, 2026",
    summary:
      "A major SORNA-alignment bill would have tightened reporting deadlines, expanded registrable information, created tier classifications, and lengthened registration periods, but was postponed indefinitely.",
    primaryLinks: [
      {
        label: "New Mexico HB 199 bill page",
        href: "https://www.nmlegis.gov/Legislation/Legislation?Chamber=H&LegType=B&LegNo=199&year=26",
      },
      {
        label: "New Mexico HB 199 introduced text",
        href: "https://www.nmlegis.gov/Sessions/26%20Regular/bills/house/HB0199.html",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://www.nmlegis.gov/Legislation/Legislation?Chamber=H&LegType=B&LegNo=199&year=26"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          New Mexico HB 199
        </ExternalLink>{" "}
        would have defined tier 1, tier 2, and tier 3 offenses, shortened initial and change-reporting deadlines from
        five business days to three, expanded required registrable information, and increased verification and
        registration-duration burdens for many people.
      </>,
      "Proposed registrable information included aliases, social networking identifiers for law-enforcement use, phone numbers, professional licenses, vehicle, aircraft and watercraft identifiers, school information, passport, and immigration documents.",
      "The proposal would have required Tier 3 verification every 90 days for life, Tier 2 verification every six months for 25 years, and Tier 1 annual verification for 15 years.",
      "The bill was printed and referred in February, then received committee action and was postponed indefinitely on February 13.",
    ],
    matters: [
      "Federal-compliance rhetoric often produces more onerous state registry architecture, even when the practical effect is more deadlines, more data collection, longer terms, and more technical-violation risk.",
      "Shorter deadlines and broader information duties especially affect people with unstable housing, limited transportation, limited internet access, disability, or family responsibilities.",
    ],
    analysis: [
      "This is mixed movement for the month because the proposal itself was burden-expanding, but it was stopped in committee during February.",
      "The policy posture remains important: the architecture could return in a future session, and families would be affected by reporting rules tied to vehicles, addresses, temporary locations, school, work, travel, and digital identifiers.",
    ],
    watch: [
      "Whether similar SORNA-alignment language returns in a later session.",
      "Whether any committee substitute narrowed the burdens before postponement.",
      "Whether federal-compliance pressure is invoked in future New Mexico proposals.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: ["Compliance burden", "Online identifiers", "Public notification", "Retroactivity concern", "Agency implementation"],
      risk: ["Watch closely", "Advocacy opening", "Missed opportunity", "Clarification needed"],
    },
    sources: [
      {
        label: "New Mexico HB 199 bill page",
        href: "https://www.nmlegis.gov/Legislation/Legislation?Chamber=H&LegType=B&LegNo=199&year=26",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "New Mexico HB 199 introduced text",
        href: "https://www.nmlegis.gov/Sessions/26%20Regular/bills/house/HB0199.html",
        kind: "official",
        type: "official bill text",
      },
      {
        label: "New Mexico HB 199 fiscal impact report",
        href: "https://www.nmlegis.gov/Sessions/26%20Regular/firs/HB0199.PDF",
        kind: "official",
        type: "official fiscal analysis",
      },
      {
        label: "FastDemocracy HB 199 page",
        href: "https://fastdemocracy.com/bill-search/nm/2026/bills/NMB00012547/",
        kind: "supplemental",
        type: "legislative tracking context",
      },
    ],
  },
  {
    id: 9,
    group: "Compliance, Online Identifiers, and Technical-Violation Exposure",
    title: "Missouri HB 2311 fiscal note surfaced lifetime-registration, tiering, exemption, and agency-system effects",
    jurisdiction: "Missouri",
    status: "Fiscal note dated February 16, 2026",
    date: "February 16, 2026",
    summary:
      "Missouri’s fiscal analysis documented concrete registry and incarceration effects from a bill expanding lifetime categories, moving offenses into higher tiers, and requiring court petitions for exemptions.",
    primaryLinks: [
      {
        label: "Missouri HB 2311 fiscal note",
        href: "https://documents.house.mo.gov/billtracking/bills261/fiscal/fispdf/5693H.01I.ORG.pdf",
      },
      {
        label: "Missouri HB 2311 bill summary",
        href: "https://documents.house.mo.gov/billtracking/bills261/sumpdf/HB2311I.pdf",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://documents.house.mo.gov/billtracking/bills261/fiscal/fispdf/5693H.01I.ORG.pdf"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          Missouri HB 2311
        </ExternalLink>{" "}
        would expand lifetime-registration categories, shift multiple offenses into higher tiers, require people who
        qualify for exemption to petition a court, and impose new registration-system duties on correctional, jail, and
        mental-health facilities.
      </>,
      "The February fiscal note identified unknown general revenue costs greater than $250,000 tied to increased incarceration and case volume.",
      "The proposal would add lifetime-registration categories for people required to register under federal law and people required to register because of an offense sexual in nature committed against a minor or incapacitated person.",
      "Facilities would enter registration information into the state system, verify registration status before release, update status, and notify chief law-enforcement officials when a currently registered person is released.",
    ],
    matters: [
      "Moving offenses to tier III and expanding lifetime-registration categories can permanently close relief pathways.",
      "Requiring court petitions for exemptions can turn an automatic or administrative route into a resource-dependent legal process requiring counsel, fees, transportation, and court navigation.",
    ],
    analysis: [
      "This is negative movement because it expands lifetime exposure and makes relief more procedurally burdensome.",
      "Some facility-update provisions may reduce administrative confusion, but they also intensify surveillance handoffs and enforcement infrastructure.",
    ],
    watch: [
      "Whether the court-petition requirement includes appointed counsel, fee waivers, and clear standards.",
      "Which specific offenses move into tier III in final text.",
      "Whether lifetime categories are tied to current federal law or broad offense characterizations.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Relief exclusion", "Compliance burden", "Punishment expansion", "Agency implementation", "Reentry barrier"],
      risk: ["Watch closely", "Implementation risk", "Litigation risk"],
    },
    sources: [
      {
        label: "Missouri HB 2311 fiscal note",
        href: "https://documents.house.mo.gov/billtracking/bills261/fiscal/fispdf/5693H.01I.ORG.pdf",
        kind: "official",
        type: "official fiscal note",
      },
      {
        label: "Missouri HB 2311 bill summary",
        href: "https://documents.house.mo.gov/billtracking/bills261/sumpdf/HB2311I.pdf",
        kind: "official",
        type: "official bill summary",
      },
      {
        label: "Missouri Independent context",
        href: "https://missouriindependent.com/2026/04/22/bill-clarifying-sex-offender-registry-law-clears-missouri-house-heads-back-to-senate/",
        kind: "supplemental",
        type: "post-window media context",
      },
    ],
    action: {
      title: "Oppose lifetime expansion and harder exemption access",
      why:
        "Lifetime-registration expansion can permanently close relief pathways, while petition requirements can make relief depend on money, counsel, transportation, and court access.",
      label: "Find your Missouri representative",
      href: "https://house.mo.gov/legislatorlookup.aspx",
      message:
        "Please oppose lifetime-registration expansion and resource-dependent exemption petitions in HB 2311. Relief pathways should be clear, individualized, accessible, and not dependent on a person’s ability to afford court navigation.",
    },
  },
  {
    id: 10,
    group: "Reform / Court Limits",
    title: "Iowa Supreme Court reversed a temporary-lodging registry conviction in State v. Uranga",
    jurisdiction: "Iowa",
    status: "Opinion filed February 13, 2026; court of appeals vacated; district court reversed; remanded for judgment of acquittal",
    date: "February 13, 2026",
    summary:
      "Iowa’s high court held the State could not convict under the temporary-lodging statute without proving the statutory trigger it charged.",
    primaryLinks: [
      {
        label: "State of Iowa v. Uranga opinion",
        href: "https://law.justia.com/cases/iowa/supreme-court/2026/23-1001.html",
      },
      {
        label: "Iowa Code chapter 692A",
        href: "https://www.legis.iowa.gov/law/iowaCode/sections?codeChapter=692A",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://law.justia.com/cases/iowa/supreme-court/2026/23-1001.html"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          State of Iowa v. Uranga
        </ExternalLink>{" "}
        held that Iowa Code section 692A.105 requires proof that a registrant stayed away from the registrant’s principal
        residence for more than five days, and that a change in residence alone does not trigger the temporary-lodging
        statute.
      </>,
      "The court held the State charged a temporary-lodging violation but argued a change-of-residence theory.",
      "Because the evidence did not prove Uranga stayed away from his principal residence for more than five days during the charged timeframe, the court reversed and remanded for judgment of acquittal.",
    ],
    matters: [
      "Registry statutes often contain overlapping reporting duties. This decision reinforces that a person can only be convicted for the actual duty the State charges and proves.",
      "That matters for people dealing with eviction, homelessness, temporary lodging, family instability, or residence transitions.",
    ],
    analysis: [
      "This is positive movement because it limits prosecutorial overreach and protects against conviction based on a mismatched theory of registry compliance.",
      "The decision does not erase reporting obligations. It requires the State to charge accurately and prove the precise statutory trigger.",
    ],
    watch: [
      "Whether prosecutors shift to charging change-of-residence provisions more carefully.",
      "Whether Iowa lawmakers respond by amending temporary-lodging or residence-change statutes.",
      "Whether defense counsel use the opinion in technical-violation cases involving unstable housing.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: ["Compliance clarity", "Due-process concern", "Court limitation", "Rights concern"],
      risk: ["Reform opening", "Litigation risk", "Watch closely"],
    },
    sources: [
      {
        label: "Iowa Supreme Court opinion / Justia mirror",
        href: "https://law.justia.com/cases/iowa/supreme-court/2026/23-1001.html",
        kind: "supplemental",
        type: "legal opinion mirror",
      },
      {
        label: "Iowa Code chapter 692A",
        href: "https://www.legis.iowa.gov/law/iowaCode/sections?codeChapter=692A",
        kind: "official",
        type: "official code reference",
      },
    ],
  },
  {
    id: 11,
    group: "Litigation Watch",
    title: "D.L. v. Pennsylvania State Police closed another adult Act 29 constitutional challenge against the registrant",
    jurisdiction: "Pennsylvania",
    status: "Commonwealth Court opinion and order filed February 2, 2026; petition dismissed",
    date: "February 2, 2026",
    summary:
      "The Commonwealth Court granted PSP summary relief and rejected an Act 29 challenge under controlling Pennsylvania Supreme Court precedent.",
    primaryLinks: [
      {
        label: "D.L. v. Pennsylvania State Police opinion/order",
        href: "https://www.pacourts.us/assets/opinions/Commonwealth/out/405MD17_2-2-26.pdf?cb=1",
      },
      {
        label: "Pennsylvania Act 29 framework",
        href: "https://www.legis.state.pa.us/WU01/LI/LI/US/HTM/2018/0/0029..HTM",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://www.pacourts.us/assets/opinions/Commonwealth/out/405MD17_2-2-26.pdf?cb=1"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          D.L. v. Pennsylvania State Police
        </ExternalLink>{" "}
        rejected a registrant’s Act 29 challenge raising ex post facto, reputation, due process, public-disclosure, and
        irrebuttable-presumption arguments, holding that Pennsylvania Supreme Court precedent controlled.
      </>,
      "The court relied on controlling precedent, including Lacombe and Torsilieri II, and held the petitioner did not meet the burden to show the Act 29 presumption constitutionally infirm.",
      "The court granted PSP summary relief, denied petitioner relief, and dismissed the amended petition.",
    ],
    matters: [
      "The decision reinforces Pennsylvania’s difficult litigation terrain for adult Act 29 challenges.",
      "Empirical-recidivism, reputation, public-dissemination, and irrebuttable-presumption arguments remain hard to win under current state precedent unless a challenger develops a narrower or stronger record.",
    ],
    analysis: [
      "This is negative movement for similarly situated adult registrants because it narrows immediate relief options and confirms that broad Act 29 challenges remain uphill.",
      "Future litigation may need more targeted as-applied theories, juvenile distinctions, removal-stage claims, federal theories, or stronger records on public dissemination and individualized-risk findings.",
    ],
    watch: [
      "Whether the petitioner appeals.",
      "Pending Pennsylvania cases involving removal-stage presumptions or narrower Act 29 applications.",
      "Federal litigation around public dissemination, digital tracking, or individualized risk.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Due-process concern", "Retroactivity concern", "Public notification", "Court limitation", "Rights concern"],
      risk: ["Appeal likely", "Litigation risk", "Watch closely"],
    },
    sources: [
      {
        label: "Pennsylvania Commonwealth Court opinion/order",
        href: "https://www.pacourts.us/assets/opinions/Commonwealth/out/405MD17_2-2-26.pdf?cb=1",
        kind: "official",
        type: "official court opinion/order",
      },
      {
        label: "Pennsylvania Act 29 framework",
        href: "https://www.legis.state.pa.us/WU01/LI/LI/US/HTM/2018/0/0029..HTM",
        kind: "official",
        type: "official statutory reference",
      },
    ],
  },
  {
    id: 12,
    group: "Restriction Expansion / Housing and Place-Based Burdens",
    title: "Wyoming SF 88 Senate passage advanced a 1,000-foot daycare residence restriction",
    jurisdiction: "Wyoming",
    status: "Passed Senate 25-6 on February 20, 2026; sent to House",
    date: "February 20, 2026",
    summary:
      "Wyoming’s Senate passed a bill barring adult registrants from living within 1,000 feet of licensed or government childcare facilities, with a limited grandfathering provision.",
    primaryLinks: [
      {
        label: "Wyoming Legislature SF 88 page",
        href: "https://www.wyoleg.gov/Legislation/2026/SF0088",
      },
    ],
    changed: [
      <>
        <ExternalLink
          href="https://www.wyoleg.gov/Legislation/2026/SF0088"
          className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
        >
          Wyoming SF 88
        </ExternalLink>{" "}
        would bar registered sex offenders age 18 or older from living within 1,000 feet of a childcare facility,
        including government-run childcare facilities and daycares licensed by the Wyoming Department of Family Services.
      </>,
      "The Senate passed the bill on February 20 and sent it to the House.",
      "As reported at Senate passage, the bill exempted people already established in their homes before July 1, 2026, and violations would carry up to six months in jail and $750 in fines.",
    ],
    matters: [
      "Daycare buffers can sharply reduce housing availability, especially in smaller communities where childcare facilities are spread through residential areas.",
      "The bill applies by registry status rather than an individualized risk nexus to young children.",
    ],
    analysis: [
      "This is negative movement because it adds a housing exclusion with criminal exposure.",
      "Grandfathering may protect a current address, but it does not protect future moves caused by eviction, rent increases, family changes, caregiving needs, or employment relocation.",
    ],
    watch: [
      "Final House language and whether grandfathering survives.",
      "Whether “childcare facility” boundaries and measurement methods are clear.",
      "Whether exceptions exist for people whose offenses did not involve children, caregiving needs, or housing scarcity.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Housing barrier", "Family-stability impact", "Compliance burden", "Punishment expansion"],
      risk: ["Watch closely", "Advocacy opening", "Litigation risk"],
    },
    sources: [
      {
        label: "Wyoming Legislature SF 88 page",
        href: "https://www.wyoleg.gov/Legislation/2026/SF0088",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Cowboy State Daily Senate passage coverage",
        href: "https://cowboystatedaily.com/2026/02/20/wyoming-senate-advances-bill-to-bar-sex-offenders-from-living-near-daycares/",
        kind: "supplemental",
        type: "media context",
      },
    ],
    action: {
      title: "Oppose blanket daycare residence buffers",
      why:
        "Daycare buffers can sharply reduce housing availability and punish people by registry status rather than individualized risk, especially after eviction, rent increases, or family relocation.",
      label: "Find your Wyoming legislator",
      href: "https://wyoleg.gov/Legislators",
      message:
        "Please oppose blanket daycare residence buffers in SF 88. Housing restrictions should require individualized risk nexus, clear measurement rules, hardship exceptions, and review of housing impact on families and reentry.",
    },
  },
];

const watchlist: WatchItemData[] = [
  {
    title: "Florida SB 212 / HB 45 final language and implementation",
    posture: "Active in February; later movement likely after the window.",
    why:
      "Final wording determines whether Florida keeps premises language, public-pool definitions, supervision denial rules, and practical exceptions.",
    next: [
      "Final enrolled text.",
      "Agency and supervision guidance.",
      "Whether public-bathing-place language remains deleted.",
      "Whether exceptions work for families.",
    ],
  },
  {
    title: "Federal H.R. 7453 and H.R. 7624",
    posture: "Introduced in February.",
    why:
      "Both bills convert registry status into categorical exclusion from essential stabilizing systems: health care and shelter.",
    next: [
      "Committee hearings.",
      "Senate companions.",
      "Amendments defining “sex offender.”",
      "Responses from health-care, homelessness, reentry, disability, and survivor-service organizations.",
    ],
  },
  {
    title: "Washington HB 2403",
    posture: "Advanced to House Rules in February.",
    why:
      "It is a rare reform-oriented effort to reduce failure-to-register escalation and distinguish technical violations from new sexual harm.",
    next: ["Floor action.", "Amendments restoring harsher penalty treatment.", "Whether the bill survives political pressure."],
  },
  {
    title: "New Mexico SORNA-alignment language",
    posture: "HB 199 was postponed indefinitely February 13.",
    why:
      "The architecture may return: shorter deadlines, tiering, longer durations, and expanded digital and travel-related information.",
    next: ["Reintroduction in future sessions.", "Agency or federal-compliance pressure.", "Committee substitute text for narrower or revived provisions."],
  },
  {
    title: "Pennsylvania Act 29 litigation after D.L. v. PSP",
    posture:
      "The Commonwealth Court continues applying state supreme court precedent against broad adult Act 29 challenges.",
    why:
      "The litigation path may shift toward as-applied claims, removal-stage claims, juvenile distinctions, or federal theories.",
    next: ["Appeals from D.L.", "Pending removal-stage cases.", "New challenges focused on public dissemination, digital tracking, or individualized-risk findings."],
  },
];

const actionCenterIds = [1, 2, 3, 7];
const actionItems = developments.filter(
  (development) => development.action && actionCenterIds.includes(development.id)
);
function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ParagraphList({ items }: { items: ReactNode[] }) {
  return (
    <div className="space-y-3 text-sm leading-7 text-slate-700">
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

function ChipGroup({ label, chips }: { label: string; chips: string[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

function PrimaryLinks({ links }: { links: PrimaryLink[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <ExternalLink
          key={`${link.label}-${link.href}`}
          href={link.href}
          className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 transition hover:border-amber-300 hover:bg-amber-100"
        >
          {link.label}
        </ExternalLink>
      ))}
    </div>
  );
}

function SourcePills({ sources }: { sources: Source[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sources.map((source) => (
        <ExternalLink
          key={`${source.label}-${source.href}`}
          href={source.href}
          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-amber-300 hover:text-amber-800"
        >
          {source.kind === "official" ? "Official: " : "Supplemental: "}
          {source.label}
        </ExternalLink>
      ))}
    </div>
  );
}

function DevelopmentCard({ development }: { development: Development }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
          Development {development.id}
        </span>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
          {development.jurisdiction}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {development.date}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold leading-tight text-slate-950">{development.title}</h3>
      <p className="mt-2 text-sm font-medium text-slate-600">{development.status}</p>
      <p className="mt-4 text-base leading-7 text-slate-700">{development.summary}</p>

      <div className="mt-5">
        <PrimaryLinks links={development.primaryLinks} />
      </div>

      <div className="mt-6 grid gap-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800">What changed</h4>
          <div className="mt-3">
            <ParagraphList items={development.changed} />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800">Why it matters</h4>
          <div className="mt-3">
            <ParagraphList items={development.matters} />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800">SOLAR analysis</h4>
          <div className="mt-3">
            <ParagraphList items={development.analysis} />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800">What to watch</h4>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            {development.watch.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white p-4">
          <h4 className="text-sm font-bold uppercase tracking-wide text-amber-900">SOLAR chips</h4>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <ChipGroup label="Movement" chips={development.chips.movement} />
            <ChipGroup label="Impact" chips={development.chips.impact} />
            <ChipGroup label="Risk / opportunity" chips={development.chips.risk} />
          </div>
        </div>

        <div className="border-t border-slate-200 pt-4">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Sources</h4>
          <SourcePills sources={development.sources} />
        </div>

        {development.action ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800">Item-level action</h4>
            <p className="mt-3 text-sm leading-7 text-slate-700">{development.action.why}</p>
            <p className="mt-3 rounded-2xl bg-white p-4 text-sm leading-7 text-slate-700 shadow-sm">
              {development.action.message}
            </p>
            <div className="mt-3">
              <ExternalLink
                href={development.action.href}
                className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {development.action.label}
              </ExternalLink>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ActionCard({ development }: { development: Development }) {
  if (!development.action) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">{development.jurisdiction}</p>
      <h3 className="mt-2 text-lg font-bold text-slate-950">{development.action.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-700">{development.action.why}</p>
      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Copyable script</p>
        <p className="mt-2 text-sm leading-7 text-slate-700">{development.action.message}</p>
      </div>
      <div className="mt-4">
        <ExternalLink
          href={development.action.href}
          className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {development.action.label}
        </ExternalLink>
      </div>
    </div>
  );
}

function WatchItem({ item }: { item: WatchItemData }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-700">
        <span className="font-semibold text-slate-900">Current posture:</span> {item.posture}
      </p>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        <span className="font-semibold text-slate-900">Why it matters:</span> {item.why}
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
        {item.next.map((next) => (
          <li key={next} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-600" />
            <span>{next}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function February2026LegislativeTracker() {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords="sex offender registry reform, legislative tracker, February 2026, SORNA, registry laws, reentry, registration reform"
        canonical={canonicalUrl}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
            <Link to="/resources/legislative-tracker" className="text-sm font-semibold text-amber-200 hover:text-amber-100">
              ← Back to Legislative Tracker
            </Link>

            <div className="mt-8 flex flex-wrap gap-2">
              <Badge>Monthly update</Badge>
              <Badge>February 1–28, 2026</Badge>
              <Badge>12 developments</Badge>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
                  Legislative Tracker
                </p>
                <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                  February 2026: instability by accumulation
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                  February brought no single national registry overhaul. Instead, the month’s pattern was a cluster of
                  targeted expansions: federal exclusion bills, place-based restrictions, online-identifier proposals,
                  lifetime-registration pressure, technical-violation reforms, and court decisions testing statutory and
                  constitutional limits.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">Share this update</p>
                <div className="mt-4 rounded-2xl bg-white p-3 text-slate-900">
                  <ShareBar />
                </div>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="mt-4 w-full rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 print:hidden"
                >
                  Print / save as PDF
                </button>
              </div>
            </div>

            <nav className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
              <a href="#throughline" className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20">
                Throughline
              </a>
              <a href="#glance" className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20">
                At a glance
              </a>
              <a href="#developments" className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20">
                Key developments
              </a>
              <a href="#action" className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20">
                Action center
              </a>
              <a href="#watchlist" className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20">
                Watchlist
              </a>
            </nav>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:px-6 md:py-12">
          <Section id="throughline" eyebrow="Reader map" title="Month throughline">
            <div className="space-y-4 text-base leading-8 text-slate-700">
              <p>
                February 2026 was a mixed but mostly burden-expanding month. The dominant pattern was not a single
                national registry overhaul, but a set of targeted expansions: federal proposals to exclude registrants
                from health coverage assistance and federally funded shelters; state bills adding or tightening residence,
                presence, reporting, online-identity, and registry-tier consequences; and court decisions testing whether
                registry statutes are being applied beyond their text or constitutional limits.
              </p>
              <p>
                For registrants and families, the practical theme is instability by accumulation. Several proposals would
                narrow access to housing, shelter, health care, public spaces, online communication, and lawful mobility.
                A few developments moved in a more rights-protective direction, especially Iowa’s Supreme Court decision
                limiting a temporary-lodging prosecution to the actual statutory trigger. But the broader legislative
                posture remained punitive and compliance-heavy, often using the registry as a categorical exclusion tool
                rather than a risk-calibrated public-safety system.
              </p>
            </div>
          </Section>

          <Section id="glance" eyebrow="At a glance" title="What February showed">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {atAGlance.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-amber-700">{item.label}</p>
                  <h3 className="mt-2 text-base font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
                </article>
              ))}
            </div>
          </Section>

          <section id="developments" className="grid gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Key developments</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                February’s registry-policy moves
              </h2>
            </div>

            {groups.map((group) => {
              const groupDevelopments = developments.filter((development) => development.group === group);
              return (
                <div key={group} className="grid gap-4">
                  <h3 className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-xl font-bold text-slate-950 shadow-sm">
                    {group}
                  </h3>
                  <div className="grid gap-5">
                    {groupDevelopments.map((development) => (
                      <DevelopmentCard key={development.id} development={development} />
                    ))}
                  </div>
                </div>
              );
            })}
          </section>

          <Section id="action" eyebrow="Action center" title="Top reader actions">
            <div className="grid gap-5 md:grid-cols-2">
              {actionItems.map((development) => (
                <ActionCard key={development.id} development={development} />
              ))}
            </div>
          </Section>

          <Section id="watchlist" eyebrow="Rolling watchlist" title="What to keep watching">
            <div className="grid gap-5">
              {watchlist.map((item) => (
                <WatchItem key={item.title} item={item} />
              ))}
            </div>
          </Section>

          <Section id="methodology" eyebrow="Sources and method" title="Source and methodology note">
            <div className="space-y-4 text-sm leading-7 text-slate-700">
              <p>
                This update covers developments with a meaningful February 1–28, 2026 event, including bill introduction,
                committee movement, chamber passage, court decisions, official fiscal notes, or official bill text/action
                during the window. Official sources were prioritized.
              </p>
              <p>
                Supplemental advocacy, tracking, civic-data, legal-mirror, and media sources are labeled as supplemental
                context and do not control SOLAR’s analysis. Official sources appear first when available.
              </p>
              <p>
                SOLAR analyzes each development through its effect on people required to register, people with sex-offense
                convictions, their families, and evidence-based reform. The tracker does not treat exclusion, instability,
                or permanent civil disability as public-safety proof simply because a proposal uses registry status as its
                trigger.
              </p>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}

export const teasers = {
  glance: [
    "February’s clearest national signal was exclusion: federal bills targeted health-care assistance and shelter access by registry status.",
    "State bills continued expanding place, housing, online-identity, evaluation, lifetime-registration, and technical-violation burdens.",
    "Washington HB 2403 and Iowa’s Uranga decision offered rare rights-protective movement in a mostly burden-expanding month.",
  ],
  highlights: [
    "H.R. 7453 would deny ACA credits and Medicaid-funded medical assistance to covered registrants.",
    "H.R. 7624 would bar covered registrants from federally funded domestic-violence and homeless shelters.",
    "Florida and Wyoming advanced place-based restrictions affecting pools, child-centered locations, and daycare-adjacent housing.",
    "Washington HB 2403 would reduce some failure-to-register penalty escalation.",
    "Iowa’s Supreme Court required prosecutors to prove the specific temporary-lodging registry duty charged.",
  ],
};