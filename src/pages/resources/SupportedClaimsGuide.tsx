import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";
import {
  GuideSectionHeader,
  GuideSectionCard,
  GuideProse,
  GuideCallout,
  GuideIntro,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
} from "../../components/solar";
import {
  sourceCatalog as researchSourceCatalog,
  type ResearchSourceId,
} from "./researchDataLibrary";

type SourceLink = {
  label: string;
  href: string;
  description: string;
  type: string;
};

type ClaimType =
  | "Empirical finding"
  | "Evidence synthesis"
  | "Comparative finding"
  | "Legal fact"
  | "Policy inference"
  | "SOLAR conclusion";

type Claim = {
  id: string;
  type: ClaimType;
  claim: string;
  meaning: string;
  evidence: string;
  sourceIds: string[];
  boundary?: string;
};

type PositionSection = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  position: string;
  claims: Claim[];
};

const supportedClaimSourceIds: Record<string, ResearchSourceId> = {
  zgobaMitchell: "SE03",
  cohenCsem: "SE35",
  bjs1994SexOffenders: "SE01",
  bjs2019NineYear: "SE36",
  bjs2012Releases: "SE37",
  bjs1994Specialization: "SE38",
  ussc2010Recidivism: "SE39",
  usscCsem: "SE29",
  prescottRockoff: "SE04",
  agan: "SE31",
  sandlerFreemanSocia: "SE40",
  levensonZgobaFlorida: "SE41",
  letourneauAdult: "SE42",
  njMeganLaw: "SE43",
  minnesotaNotification: "SE44",
  levensonCotter: "SE45",
  lasherMcGrath: "SE46",
  zandbergenHart: "SE47",
  residenceTransience: "SE08",
  smartManagement: "SE48",
  smartCollateralReview: "SE06",
  levensonFamily: "SE07",
  andersonSample: "SE49",
  bonnarKidd: "SE50",
  cubellis: "SE51",
  harrisLawEnforcement: "SE52",
  bjsChildKnown: "SE11",
  cdcFirearm: "SE15",
  nhtsaImpaired: "SE16",
  bjsDomestic: "SE17",
  atsaReform: "SE21",
  hansonBussiere: "SE53",
  hansonMortonBourgon: "SE54",
  hansonSimpleQuestion: "SE55",
  hansonMortonBourgonAccuracy: "SE56",
  static99Coding: "SE57",
  static99Workbook: "SE58",
  pcrA: "SE59",
  cportDevelopment: "SE60",
  cportValidation: "SE61",
  cportCritical: "SE62",
  stable2007: "SE63",
  sotips: "SE64",
  vrsSo: "SE65",
  treatmentMeta: "SE66",
  smithDoe: "SE18",
  doesSnyder: "SE67",
};

const sourceLinks: Record<string, SourceLink> = Object.fromEntries(
  Object.entries(supportedClaimSourceIds).map(([key, sourceId]) => {
    const source = researchSourceCatalog[sourceId];
    return [
      key,
      {
        label: source.title,
        href: source.href,
        description: source.usefulFor,
        type: source.type,
      },
    ];
  }),
);

const positions: PositionSection[] = [
  {
    id: "registry-effectiveness",
    number: "1",
    title: "Ineffective and rooted in misinformation",
    subtitle:
      "Publication-safe claims about broad SORN effectiveness, registry mechanisms, public use, and recidivism mythology.",
    position:
      "The sex offender registry system is ineffective and rooted in misinformation.",
    claims: [
      {
        id: "p1-c1",
        type: "Evidence synthesis",
        claim:
          "Across 25 years of evaluated U.S. SORN policies, the strongest broad quantitative synthesis has not demonstrated an overall recidivism-reduction effect.",
        meaning:
          "After decades of registry laws, the best broad pooled evidence still has not shown that SORN as a system reduces reoffending overall.",
        evidence:
          "Zgoba and Mitchell synthesized 18 research articles, 474,640 individuals, and 42 effect sizes. The pooled effect was not statistically significant, including subgroup checks by sexual versus nonsexual recidivism and arrest versus conviction.",
        sourceIds: ["zgobaMitchell"],
        boundary:
          "Minnesota’s Level 3 community-notification study found favorable outcomes among selected higher-risk individuals; that finding should not be generalized into proof that broad public web registries work.",
      },
      {
        id: "p1-c2",
        type: "Empirical finding",
        claim:
          "Major state-level evaluations have repeatedly failed to show that broad registry-and-notification systems reduce sexual offending or sexual recidivism.",
        meaning:
          "Large evaluations in several states did not deliver the prevention results the public is often told to assume.",
        evidence:
          "The New York time-series study reported no support for SORN reducing several sexual-offense outcomes. The New Jersey NIJ evaluation found no demonstrated effect on multiple sexual-offense or rearrest outcomes. South Carolina adult-recidivism research likewise found no simple registration-status effect on sexual recidivism in modeled analyses.",
        sourceIds: ["sandlerFreemanSocia", "njMeganLaw", "letourneauAdult"],
      },
      {
        id: "p1-c2-first-time",
        type: "Empirical finding",
        claim:
          "Large state datasets have found that the vast majority of sex-crime arrests involve people without a prior sex-crime conviction.",
        meaning:
          "Most detected sexual offending in these studies was not committed by repeat sex offenders who could already have been identified through a prior sex-offense conviction.",
        evidence:
          "Sandler, Freeman, and Socia found that more than 95% of sexual-offense arrests in their New York data involved first-time sex offenders. Levenson and Zgoba found that, across Florida data from 1990–2010, an average 6.5% of sex-crime arrests involved a person with a prior felony sex-crime conviction—meaning roughly 93.5% did not.",
        sourceIds: ["sandlerFreemanSocia", "levensonZgobaFlorida"],
        boundary:
          "These are arrest-based state studies from particular historical periods, not a fixed national estimate of all sexual offending. Prior sex-crime conviction is also not literally identical to registry status in every individual case. The studies nevertheless strongly support the conclusion that repeat known sex offenders account for a small minority of detected sex-crime arrests in those datasets.",
      },
      {
        id: "p1-c3",
        type: "Policy inference",
        claim:
          "Registration, public Internet disclosure, targeted community notification, verification, residence restrictions, supervision, and treatment are different policy components and should not be treated as interchangeable evidence.",
        meaning:
          "A study about one part of the system does not automatically prove something about every other part.",
        evidence:
          "The literature separates law-enforcement registration from public notification and broader SORN packages. Prescott and Rockoff are especially useful because they analyze registration and notification as distinct mechanisms.",
        sourceIds: ["prescottRockoff", "zgobaMitchell"],
      },
      {
        id: "p1-c4",
        type: "Empirical finding",
        claim:
          "Public availability of registry information is not the same thing as public use, protective action, or crime reduction.",
        meaning:
          "A registry website can exist and still fail to produce the behavior change people imagine.",
        evidence:
          "Anderson and Sample’s survey work supports the distinction between registry availability, actual use, self-reported protective behavior, and measured crime reduction.",
        sourceIds: ["andersonSample"],
      },
      {
        id: "p1-c5",
        type: "Empirical finding",
        claim:
          "Law-enforcement research documents implementation limits that constrain the registry’s claimed safety mechanism.",
        meaning:
          "Even when a registry has informational value, usefulness depends on accuracy, communication, public understanding, and real-world implementation.",
        evidence:
          "Research with law-enforcement personnel has identified concerns about information reliability, inter-system communication, public interpretation, workload, and the utility of increasingly large registries.",
        sourceIds: ["harrisLawEnforcement", "cubellis"],
        boundary:
          "Practitioner perception is evidence about implementation and belief; it is not direct evidence that SORN reduces offending.",
      },
      {
        id: "p1-c6",
        type: "Empirical finding",
        claim:
          "Major official and longitudinal studies consistently find that detected sexual recidivism is a minority outcome, with rates varying substantially by population, prior history, age, follow-up period, and outcome measure.",
        meaning:
          "The evidence does not support the common assumption that people convicted of sex offenses almost always offend again.",
        evidence:
          "BJS release studies and longer-term research show detected sexual recidivism as a minority outcome while also documenting substantial variation by subgroup, prior history, age, follow-up period, and measurement basis.",
        sourceIds: [
          "bjs1994SexOffenders",
          "bjs2019NineYear",
          "hansonBussiere",
          "hansonSimpleQuestion",
        ],
        boundary:
          "Official rearrest, charge, conviction, and reincarceration measures undercount undetected conduct and should not be described as lifetime offending rates.",
      },
    ],
  },
  {
    id: "community-safety",
    number: "2",
    title: "Registry policy and community safety",
    subtitle:
      "Publication-safe claims about counterproductive effects, destabilization, public notification, residence restrictions, and reintegration.",
    position: "Registry policies can make communities less safe.",
    claims: [
      {
        id: "p2-c1",
        type: "Evidence synthesis",
        claim:
          "Policies that destabilize housing, employment, treatment, and family support can undermine conditions associated with successful reentry and public safety.",
        meaning:
          "Housing, work, treatment, and family support are not side issues. They are part of the stability on which successful reintegration depends.",
        evidence:
          "Government and peer-reviewed reviews document housing, employment, social, and psychological burdens associated with registry and restriction regimes. DOJ’s SMART synthesis specifically warns that residence restrictions can undermine housing, work, and family support in ways that may aggravate rather than mitigate risk.",
        sourceIds: [
          "smartManagement",
          "smartCollateralReview",
          "levensonCotter",
          "lasherMcGrath",
        ],
        boundary:
          "The destabilizing burdens are documented more directly than the complete causal chain from a specific burden to a new sexual offense. The latter should not be overstated.",
      },
      {
        id: "p2-c2",
        type: "Empirical finding",
        claim:
          "One major study found evidence consistent with public notification increasing recidivism among registered people even while notification may deter some first-time offending.",
        meaning:
          "More public exposure does not have a uniformly protective effect.",
        evidence:
          "Prescott and Rockoff separated registration from notification and reported results consistent with community notification deterring some first-time offending while increasing recidivism among registered people because notification changes the relative costs of legal and illegal behavior.",
        sourceIds: ["prescottRockoff"],
        boundary:
          "This is an important mechanism-specific study, not proof that every notification system in every jurisdiction increases recidivism.",
      },
      {
        id: "p2-c3",
        type: "Evidence synthesis",
        claim:
          "Residence restrictions have not demonstrated a general recidivism-reduction benefit and can produce destabilizing unintended consequences.",
        meaning:
          "A rule can sound protective while making lawful, stable reentry harder.",
        evidence:
          "The SMART SOMAPI synthesis reports no empirical support for residence restrictions as a general prevention strategy and identifies housing loss, support-system loss, financial hardship, displacement, and transience as important unintended consequences.",
        sourceIds: ["smartManagement", "residenceTransience", "zandbergenHart"],
        boundary:
          "Residence restrictions are state and local policies rather than a required component of federal SORNA, and their design varies substantially by jurisdiction.",
      },
      {
        id: "p2-c4",
        type: "Policy inference",
        claim:
          "Public-safety policy should account for counterproductive effects as well as intended benefits.",
        meaning:
          "A policy does not become protective merely because protection is its stated purpose.",
        evidence:
          "The combination of broad null or mixed SORN findings, mechanism-specific notification results, and documented destabilizing consequences supports evaluating both intended and unintended effects rather than presuming net benefit.",
        sourceIds: ["zgobaMitchell", "prescottRockoff", "smartManagement"],
      },
    ],
  },
  {
    id: "relationship-access",
    number: "3",
    title: "Relationship, access, and trust—not stranger-location mapping",
    subtitle:
      "Publication-safe claims about child-safety threat models and the limits of registry-centered prevention.",
    position:
      "Sexual harm to children is primarily a relationship-and-access problem, not a stranger-location problem.",
    claims: [
      {
        id: "p3-c1",
        type: "Empirical finding",
        claim:
          "Reported child sexual abuse is predominantly committed by people known to the child rather than strangers.",
        meaning:
          "The biggest child-safety problem is usually access and trust, not an unknown person living nearby.",
        evidence:
          "BJS’s report on sexual assault of young children reported to law enforcement is a strong official source for victim-offender relationship patterns and supports relationship-and-access framing rather than a stranger-location model.",
        sourceIds: ["bjsChildKnown"],
        boundary:
          "The BJS source is about cases reported to law enforcement; unreported abuse may have different measurement limits.",
      },
      {
        id: "p3-c2",
        type: "Policy inference",
        claim:
          "A registry website is a poor standalone child-safety model because known-access offending is not the same prevention target as stranger-location warning.",
        meaning:
          "Looking up nearby addresses does not answer the deeper safety questions: who has private access, authority, secrecy, and trust?",
        evidence:
          "Known-perpetrator data, public-use research, and registry-implementation studies together show why a public map is an incomplete child-safety model.",
        sourceIds: ["bjsChildKnown", "andersonSample", "harrisLawEnforcement"],
      },
      {
        id: "p3-c3",
        type: "Policy inference",
        claim:
          "Registry-centered prevention can misdirect attention when it encourages the public to treat location visibility as the main child-safety strategy.",
        meaning:
          "Children are better protected by prevention systems that address access, reporting, institutional response, supervision, and trusted authority—not by assuming a public map solves the problem.",
        evidence:
          "Known-person victim-offender data, the gap between registry availability and protective behavior, and broad null SORN findings support prevention strategies that reach beyond location visibility.",
        sourceIds: ["bjsChildKnown", "andersonSample", "zgobaMitchell"],
      },
    ],
  },
  {
    id: "lifelong-branding",
    number: "4",
    title: "Lifelong public branding as an exceptional response",
    subtitle:
      "Publication-safe comparative claims about how other serious harms are managed and why exceptional burdens require exceptional justification.",
    position: "Other serious harms are addressed without lifelong public branding.",
    claims: [
      {
        id: "p4-c1",
        type: "Comparative finding",
        claim:
          "Many serious and recurring public-safety harms are addressed through prevention, regulation, enforcement, technology, treatment, and ordinary criminal accountability rather than permanent public identity branding.",
        meaning:
          "The registry is an unusually durable public-status intervention, not the default way the United States responds to every serious harm.",
        evidence:
          "Federal public-health, transportation-safety, and criminal-justice sources illustrate prevention and intervention systems for firearm injury, impaired driving, and domestic violence that do not depend on a universal lifelong public list of everyone previously convicted.",
        sourceIds: ["cdcFirearm", "nhtsaImpaired", "bjsDomestic"],
        boundary:
          "These harms are not identical and do not require identical policy responses. The comparison is about the form and duration of public-safety intervention, not moral equivalence.",
      },
      {
        id: "p4-c2",
        type: "Comparative finding",
        claim:
          "Repeat-offense concentration is not unique to sexual offending; same-type specialization appears across many offense categories.",
        meaning:
          "The existence of recurrence risk does not by itself explain why one class of convictions should trigger permanent public identity.",
        evidence:
          "BJS same-offense recidivism tables show elevated same-type rearrest patterns across multiple offense categories, including violent, property, drug, and public-order offenses.",
        sourceIds: ["bjs1994Specialization", "bjs2012Releases"],
        boundary:
          "The magnitude of specialization differs by offense and base rate; this is not a claim that all offense categories present equal risks.",
      },
      {
        id: "p4-c3",
        type: "Comparative finding",
        claim:
          "Sex-offense release groups are not uniformly the highest-recidivating groups when the outcome is overall rearrest.",
        meaning:
          "Sexual-offense history can matter for sexual-reoffense risk without making the group uniquely highest-risk on every public-safety measure.",
        evidence:
          "Major BJS and federal same-cohort comparisons show lower overall rearrest for some sex-offense release groups than for other released-prisoner groups, while also showing relative elevation on specifically sexual rearrest.",
        sourceIds: ["bjs2019NineYear", "ussc2010Recidivism"],
        boundary:
          "Overall rearrest and sexual rearrest answer different questions; both should be reported when relevant.",
      },
      {
        id: "p4-c4",
        type: "Policy inference",
        claim:
          "The more exceptional and durable a public burden is, the stronger the case should be that its demonstrated benefits justify it.",
        meaning:
          "Permanent public branding should not be treated as self-justifying simply because the underlying harm is serious.",
        evidence:
          "Broad SORN effectiveness findings, documented burdens, and expert reform recommendations support a benefit-versus-burden approach rather than assuming that exceptional status is warranted by offense category alone.",
        sourceIds: ["zgobaMitchell", "njMeganLaw", "atsaReform"],
      },
    ],
  },
  {
    id: "punitive-practice",
    number: "5",
    title: "Punitive in practice",
    subtitle:
      "Publication-safe claims distinguishing legal classification from empirical and lived effects.",
    position: "Registries are punitive in practice, not merely administrative.",
    claims: [
      {
        id: "p5-c1",
        type: "Legal fact",
        claim:
          "A court’s civil label for a registry scheme does not end the empirical or policy question whether modern registry systems operate punitively in practice.",
        meaning:
          "Legal doctrine and lived effect are related, but they are not the same thing.",
        evidence:
          "Smith v. Doe held Alaska’s then-existing registry nonpunitive for federal ex post facto purposes. Later decisions, including Does #1–5 v. Snyder, show that materially different modern schemes can be judged punitive in effect.",
        sourceIds: ["smithDoe", "doesSnyder"],
      },
      {
        id: "p5-c2",
        type: "SOLAR conclusion",
        claim:
          "Public exposure, recurring reporting duties, residence and proximity limits, employment barriers, and long-duration public status can function as continuing punishment after sentence completion.",
        meaning:
          "For the person living under the system, the burdens do not necessarily end when the sentence ends.",
        evidence:
          "This is a SOLAR synthesis grounded in documented reintegration burdens, residence-restriction effects, administrative demands, public-notification consequences, and constitutional litigation over punitive effects.",
        sourceIds: [
          "levensonCotter",
          "lasherMcGrath",
          "zandbergenHart",
          "doesSnyder",
        ],
      },
      {
        id: "p5-c3",
        type: "Legal fact",
        claim:
          "Modern registry challenges are fact-sensitive because courts assess the specific law’s effects, not the word “registry” in the abstract.",
        meaning:
          "The legal answer can change when a registry adds exclusion zones, in-person reporting, public branding, internet disclosure, or other heavy burdens.",
        evidence:
          "Smith v. Doe applied an intent-effects framework to Alaska’s law as it existed then. Does #1–5 v. Snyder applied that framework to Michigan’s amended scheme and found punitive effects.",
        sourceIds: ["smithDoe", "doesSnyder"],
      },
      {
        id: "p5-c4",
        type: "Policy inference",
        claim:
          "When a system produces punishment-like burdens without demonstrating broad public-safety gains, proportionality becomes a central policy question.",
        meaning:
          "The state should not get to impose lifelong practical punishment merely by calling it administration.",
        evidence:
          "Pooled null or inconsistent recidivism effects coexist with documented financial, administrative, housing, employment, and reintegration burdens. That makes benefit-versus-burden an empirical proportionality question.",
        sourceIds: [
          "zgobaMitchell",
          "njMeganLaw",
          "levensonCotter",
          "lasherMcGrath",
        ],
      },
    ],
  },
  {
    id: "family-children",
    number: "6",
    title: "Families and children bear collateral punishment",
    subtitle:
      "Publication-safe claims about household spillover, children, stigma, housing disruption, financial strain, and collateral consequences.",
    position: "Registry systems punish families and children too.",
    claims: [
      {
        id: "p6-c1",
        type: "Empirical finding",
        claim:
          "Registry-related burdens can extend beyond the person required to register and affect spouses, children, and other family members.",
        meaning:
          "The practical consequences of public registration can spread through an entire household.",
        evidence:
          "Family-focused research and government evidence reviews document financial strain, housing disruption, stigma, harassment, social isolation, and other spillover burdens reported by family members of people required to register.",
        sourceIds: ["levensonFamily", "smartCollateralReview"],
        boundary:
          "Family studies often rely on volunteer or self-selected samples and should not be used to claim a precise national prevalence for every burden.",
      },
      {
        id: "p6-c2",
        type: "Empirical finding",
        claim:
          "Children can experience stigma, harassment, social exclusion, and household disruption because of a parent or family member’s registry status.",
        meaning:
          "Children who committed no offense can still bear social and practical consequences of the registry.",
        evidence:
          "The family collateral-damage literature reports child-specific consequences alongside broader household effects, including stigma and disruption associated with public status and exclusion.",
        sourceIds: ["levensonFamily"],
        boundary:
          "The evidence establishes documented child impacts; it does not establish that every child in a registrant household experiences the same consequences.",
      },
      {
        id: "p6-c3",
        type: "Evidence synthesis",
        claim:
          "Housing and employment barriers can become family burdens because lost housing, income, transportation, and community access are shared household conditions.",
        meaning:
          "A legal burden aimed at one person can change where an entire family lives and what resources it has.",
        evidence:
          "Research on collateral effects, housing restrictions, transience, and family impacts shows how registry-related exclusion can propagate through shared household finances, residence, and social support.",
        sourceIds: [
          "smartCollateralReview",
          "levensonFamily",
          "residenceTransience",
          "levensonCotter",
        ],
      },
      {
        id: "p6-c4",
        type: "Policy inference",
        claim:
          "Collateral consequences imposed on people who committed no offense should count in any assessment of a registry policy’s proportionality and public-safety value.",
        meaning:
          "Families and children should not disappear from the policy ledger simply because the legal duty is formally imposed on someone else.",
        evidence:
          "Documented family spillover, housing disruption, and reintegration burdens support treating collateral household effects as part of the policy’s real-world cost.",
        sourceIds: ["levensonFamily", "smartCollateralReview", "lasherMcGrath"],
      },
    ],
  },
  {
    id: "individualized-risk",
    number: "7",
    title: "One-size-fits-all registry laws are fundamentally flawed",
    subtitle:
      "Publication-safe claims about heterogeneity, offense labels, age, time offense-free, assessment tools, treatment, and calibration.",
    position: "One-size-fits-all registry laws are fundamentally flawed.",
    claims: [
      {
        id: "p7-c1",
        type: "Empirical finding",
        claim:
          "An offense label is not a validated measure of an individual’s current risk.",
        meaning:
          "Knowing what someone was convicted of does not tell you, by itself, how likely that person is to offend again.",
        evidence:
          "Research documents substantial heterogeneity by prior offense history, age, time offense-free, criminal history, CSEM versus contact offense profile, and tool population fit.",
        sourceIds: [
          "bjs2019NineYear",
          "ussc2010Recidivism",
          "usscCsem",
          "hansonSimpleQuestion",
        ],
      },
      {
        id: "p7-c2",
        type: "Empirical finding",
        claim:
          "Risk is dynamic across the life course: age and time offense-free materially change empirically observed risk.",
        meaning:
          "Risk is not frozen forever at the moment of conviction.",
        evidence:
          "Age, desistance, long-term follow-up evidence, and actuarial guidance support the conclusion that risk changes over time and should not be treated as a permanent category label.",
        sourceIds: [
          "hansonSimpleQuestion",
          "ussc2010Recidivism",
          "static99Coding",
          "static99Workbook",
        ],
        boundary:
          "Age and offense-free time lower average risk; they do not eliminate risk for every individual.",
      },
      {
        id: "p7-c3",
        type: "Empirical finding",
        claim:
          "Validated actuarial methods generally outperform unstructured professional judgment in predicting sexual recidivism.",
        meaning:
          "Risk decisions should not be based only on fear, offense title, or a professional gut feeling.",
        evidence:
          "Meta-analytic evidence supports structured, empirically grounded assessment over unstructured professional judgment.",
        sourceIds: ["hansonMortonBourgonAccuracy", "hansonMortonBourgon"],
        boundary:
          "Structured methods are not perfect prediction; usefulness depends on the population, tool purpose, and decision being made.",
      },
      {
        id: "p7-c4",
        type: "Empirical finding",
        claim:
          "PCRA results should not be treated as if they directly answer a specialized sexual-recidivism question.",
        meaning:
          "A general federal risk/needs score is not automatically a sex-offense risk score.",
        evidence:
          "PCRA was built for general federal post-conviction risk and intervention needs. Federal CSEM validation work illustrates the importance of distinguishing general and specialized outcomes.",
        sourceIds: ["pcrA", "cohenCsem"],
        boundary:
          "General-risk tools can correlate with specialized outcomes; correlation does not transform their validated primary purpose.",
      },
      {
        id: "p7-c5",
        type: "Empirical finding",
        claim:
          "Moderate AUCs can contain useful ranking information while still being inadequate for precise individual probability claims.",
        meaning:
          "A tool can be better than guessing and still not tell you that a particular person has a precise percent chance of reoffending.",
        evidence:
          "AUC is a discrimination statistic: it ranks relative ordering but does not by itself establish calibration, absolute probability, causation, or certainty for a particular person.",
        sourceIds: ["cohenCsem", "cportDevelopment", "cportValidation"],
      },
      {
        id: "p7-c6",
        type: "Empirical finding",
        claim:
          "Transporting a score-to-percentage table across populations requires calibration evidence, not just a respectable AUC.",
        meaning:
          "A number developed in one sample may not give the right absolute-risk estimate in another setting.",
        evidence:
          "Static-99R norms and CPORT validation concerns illustrate why discrimination and calibration must be kept separate. Reference-group choice and population fit must be explicit.",
        sourceIds: ["static99Workbook", "cportValidation", "cportCritical"],
      },
      {
        id: "p7-c7",
        type: "Empirical finding",
        claim:
          "Risk assessment should distinguish historical baseline risk from changeable treatment and supervision needs rather than treating risk as permanently fixed.",
        meaning:
          "Some risk-relevant facts are historical. Others can change with time, treatment, stability, supervision, and behavior.",
        evidence:
          "STABLE-2007, SOTIPS, VRS-SO, and treatment meta-analysis evidence support the existence of structured dynamic risk and change-related information.",
        sourceIds: ["stable2007", "sotips", "vrsSo", "treatmentMeta"],
        boundary:
          "Dynamic ratings require training, appropriate data, and good longitudinal information.",
      },
    ],
  },
  {
    id: "permanent-underclass",
    number: "8",
    title: "Permanent underclass",
    subtitle:
      "Publication-safe SOLAR synthesis claims about cumulative reintegration barriers and long-duration public status.",
    position: "Registries create a permanent underclass.",
    claims: [
      {
        id: "p8-c1",
        type: "SOLAR conclusion",
        claim:
          "Registry systems create a permanent underclass when public status, legal restrictions, private exclusion, and administrative demands combine to obstruct ordinary reintegration.",
        meaning:
          "The registry can follow a person into housing, work, family life, community participation, and public identity long after the court sentence is over.",
        evidence:
          "This is a SOLAR synthesis grounded in documented housing loss, employment exclusion, psychological burden, community-notification effects, residence restrictions, and recurring administrative demands.",
        sourceIds: [
          "levensonCotter",
          "lasherMcGrath",
          "zandbergenHart",
          "smartCollateralReview",
        ],
      },
      {
        id: "p8-c2",
        type: "Empirical finding",
        claim:
          "Housing barriers are a central mechanism through which registry systems destabilize people and families.",
        meaning:
          "Housing is not a side issue. Without a lawful, stable place to live, nearly every other part of reentry becomes harder.",
        evidence:
          "GIS, restriction, and reintegration research shows how exclusion zones and public status can reduce housing options and contribute to residential disruption.",
        sourceIds: [
          "zandbergenHart",
          "residenceTransience",
          "levensonCotter",
          "lasherMcGrath",
        ],
        boundary:
          "Housing effects vary by local law, geography, landlord practice, supervision rules, and family resources.",
      },
      {
        id: "p8-c3",
        type: "Empirical finding",
        claim:
          "Employment and social exclusion are documented registry consequences, not speculative complaints.",
        meaning:
          "People on registries can face work and community barriers because their public status invites exclusion.",
        evidence:
          "The reintegration literature includes job loss or exclusion, social isolation, threats, and psychological effects associated with public registry and notification exposure.",
        sourceIds: ["levensonCotter", "lasherMcGrath", "smartCollateralReview"],
      },
      {
        id: "p8-c4",
        type: "Policy inference",
        claim:
          "A system that undermines housing, employment, and community reintegration can weaken the same stability infrastructure public safety depends on.",
        meaning:
          "Public safety is not served by making lawful life harder than it needs to be.",
        evidence:
          "Documented collateral burdens and the lack of demonstrated broad SORN recidivism reduction support this stability-and-proportionality inference without requiring a claim that every individual burden directly causes reoffending.",
        sourceIds: ["zgobaMitchell", "lasherMcGrath", "levensonCotter"],
        boundary:
          "This is a stability-and-proportionality claim, not a claim that every collateral burden has a proven direct causal effect on reoffending.",
      },
    ],
  },
  {
    id: "measurable-outcomes",
    number: "9",
    title: "Measurable outcomes, not presumed benefits",
    subtitle:
      "Publication-safe methodological claims that keep policy claims tied to evidence, mechanisms, and actual outcomes.",
    position:
      "Public-safety policy should be judged by measurable outcomes, not presumed benefits.",
    claims: [
      {
        id: "p9-c1",
        type: "Policy inference",
        claim:
          "The seriousness of sexual harm does not prove that a registry policy prevents it.",
        meaning:
          "A problem can be grave and a proposed intervention can still fail.",
        evidence:
          "The moral seriousness of sexual harm and the measurable effectiveness of a policy are separate questions. Broad SORN evidence has not demonstrated an overall recidivism-reduction effect, and individual policy components show different mechanisms and evidence profiles.",
        sourceIds: ["zgobaMitchell", "prescottRockoff"],
      },
      {
        id: "p9-c2",
        type: "Policy inference",
        claim:
          "Visibility is not prevention, and the existence of a database is not proof of protective action.",
        meaning:
          "A public list only matters if it is accurate, understood, used, and connected to behavior that actually reduces harm.",
        evidence:
          "Public-use research, implementation research, and broad SORN findings support separating availability, use, protective behavior, and crime reduction.",
        sourceIds: ["andersonSample", "harrisLawEnforcement", "zgobaMitchell"],
      },
      {
        id: "p9-c3",
        type: "Policy inference",
        claim:
          "Practitioner belief that SORN is useful is evidence about practitioner perception, not direct evidence that SORN reduces offending.",
        meaning:
          "Survey answers can tell us what administrators think. They cannot, by themselves, prove crime prevention.",
        evidence:
          "Law-enforcement studies document mixed views and implementation concerns. Those findings support claims about practitioner perception and administration, not direct crime-rate effects.",
        sourceIds: ["cubellis", "harrisLawEnforcement"],
      },
      {
        id: "p9-c4",
        type: "Policy inference",
        claim:
          "Registry policy should be evaluated component by component rather than as one indivisible package.",
        meaning:
          "Registration, public notification, verification, residence restrictions, supervision, and treatment can have different evidence, mechanisms, and burdens.",
        evidence:
          "Mechanism-specific and program-specific studies illustrate why evidence about one component should not be generalized across the whole policy package.",
        sourceIds: ["prescottRockoff", "zgobaMitchell", "minnesotaNotification"],
      },
      {
        id: "p9-c5",
        type: "Policy inference",
        claim:
          "Where demonstrated public-safety gains are null, narrow, or inconsistent, financial, administrative, and reintegration burdens become central to whether a registry policy is proportionate.",
        meaning:
          "Costs and harms matter most when the promised benefit is weak or unproven.",
        evidence:
          "Pooled effectiveness findings, cost evidence, reintegration burdens, residence-restriction effects, and implementation concerns together support a benefit-versus-burden framework.",
        sourceIds: [
          "zgobaMitchell",
          "njMeganLaw",
          "zandbergenHart",
          "lasherMcGrath",
          "harrisLawEnforcement",
        ],
        boundary:
          "Minnesota’s selected Level 3 community-notification program produced favorable outcomes in one major evaluation; that finding does not establish a broad public-safety benefit for public registry systems generally.",
      },
      {
        id: "p9-c6",
        type: "Empirical finding",
        claim:
          "Any recidivism claim that omits its measurement basis is incomplete.",
        meaning:
          "Rearrest, charge, conviction, reincarceration, self-report, and actual offending are not interchangeable.",
        evidence:
          "The same population can produce different rates depending on the endpoint, follow-up period, source of data, and subgroup definition.",
        sourceIds: ["bjs1994SexOffenders", "bjs2019NineYear", "cohenCsem"],
      },
    ],
  },
];

const sourceListItems = Object.values(sourceLinks).map((source) => ({
  label: source.label,
  href: source.href,
  description: `${source.type}. ${source.description}`,
}));

function claimTypeClasses(type: ClaimType): string {
  switch (type) {
    case "Empirical finding":
      return "bg-sky-50 text-sky-800 ring-sky-200";
    case "Evidence synthesis":
      return "bg-indigo-50 text-indigo-800 ring-indigo-200";
    case "Comparative finding":
      return "bg-emerald-50 text-emerald-800 ring-emerald-200";
    case "Legal fact":
      return "bg-amber-50 text-amber-900 ring-amber-200";
    case "Policy inference":
      return "bg-violet-50 text-violet-800 ring-violet-200";
    case "SOLAR conclusion":
      return "bg-slate-100 text-slate-800 ring-slate-200";
    default:
      return "bg-slate-100 text-slate-800 ring-slate-200";
  }
}

function renderSourceTrail(sourceIds: string[]): JSX.Element {
  return (
    <>
      {sourceIds.map((sourceId, index) => {
        const source = sourceLinks[sourceId];

        if (!source) {
          return null;
        }

        return (
          <React.Fragment key={sourceId}>
            {index > 0 ? <span className="text-slate-400"> · </span> : null}
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-950 hover:decoration-slate-700"
            >
              {source.label}
            </a>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default function SupportedClaimsGuide(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Supported Claims Library | The SOLAR Project"
        description="A source-backed collection of the strongest claims SOLAR believes the evidence supports about registries, recidivism, risk, and public safety."
        keywords="SOLAR Project, supported claims, sex offender registry evidence, recidivism research, registry effectiveness, risk assessment, public safety policy"
      />

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white py-12 sm:py-16 no-print">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm text-slate-200 hover:text-white transition-colors"
          >
            ← Back to Resources
          </Link>

          <div className="mt-5 inline-flex rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
            SOLAR Resource Guide
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Supported Claims Library
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A source-backed collection of the strongest claims SOLAR believes
            the evidence supports.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100 transition-colors"
            >
              🖨️ Print Guide
            </button>

            <a
              href="#sources"
              className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Jump to Sources
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ShareBar />

        <GuideIntro title="Start Here" icon="📚">
          <p>
            This library turns SOLAR’s research base into a public reference for
            outside writers. It does not reproduce every study note or internal
            research step. It gives the strongest claims SOLAR believes can be
            responsibly published, with plain-language meaning and source trails.
          </p>
          <p>
            The nine sections below now mirror SOLAR’s current advocacy positions
            and order. The section anchors are semantic rather than numerical so
            future reordering will not silently break direct evidence links.
          </p>
        </GuideIntro>

        <OverviewCards
          columns={4}
          cards={[
            {
              title: "Publication-safe claim",
              icon: "✍️",
              tone: "research",
              description:
                "The strongest wording SOLAR believes should survive competent journalistic, editorial, academic, legislative, or fact-checking scrutiny.",
            },
            {
              title: "What it means",
              icon: "💬",
              tone: "info",
              description:
                "A conversational version that keeps the same meaning without changing the substance.",
            },
            {
              title: "Evidence",
              icon: "🔎",
              tone: "legal",
              description:
                "A concise explanation of why SOLAR can say the claim and what evidence supports it.",
            },
            {
              title: "Source trail",
              icon: "🔗",
              tone: "neutral",
              description:
                "Direct links to primary studies, government reports, court opinions, or authoritative sources.",
            },
          ]}
        />

        <GuideSectionHeader
          id="quick-navigation"
          number="0"
          title="Quick navigation"
          subtitle="Jump directly to the SOLAR position you need."
        />

        <GuideSectionCard>
          <nav
            aria-label="Supported claims position navigation"
            className="grid gap-3 sm:grid-cols-2"
          >
            {positions.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Position {section.number}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  {section.position}
                </div>
              </a>
            ))}
          </nav>
        </GuideSectionCard>

        <GuideSectionHeader
          id="how-to-use"
          number="00"
          title="How to use this library"
          subtitle="Use the claim sentence when you need a concise published formulation; use the evidence paragraph when you need to explain why it is supportable."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Start with the SOLAR position closest to your topic. Each claim
              card then moves from the polished sentence to ordinary language
              to the evidence trail. A journalist should be able to scan from
              position to claim to evidence without reading a long literature
              review.
            </p>

            <p>
              The claim labels distinguish empirical findings, evidence
              syntheses, comparative findings, legal facts, policy inferences,
              and SOLAR conclusions. That distinction matters: SOLAR can reach
              policy conclusions, but a normative conclusion should not be
              presented as if it were a single statistical result.
            </p>
          </GuideProse>

          <GuideCallout tone="research" icon="🧭" title="Boundary rule">
            <p>
              Boundaries are not included for balance. They appear only when
              leaving them out would make the claim materially misleading, when
              a specific exception would make the sentence vulnerable to
              competent review, or when naming a narrow exception strengthens
              the durability of the claim.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        {positions.map((section) => (
          <React.Fragment key={section.id}>
            <GuideSectionHeader
              id={section.id}
              number={section.number}
              title={section.title}
              subtitle={section.subtitle}
            />

            <GuideSectionCard>
              <div className="rounded-2xl border border-teal-200 border-l-4 border-l-teal-600 bg-teal-50 p-5 shadow-sm sm:p-6">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">
                  SOLAR’s position
                </div>
                <p className="mt-2 text-lg font-semibold leading-snug text-slate-950 sm:text-xl">
                  {section.position}
                </p>
              </div>

              <div className="mt-7 mb-3 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  Supported claims
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="space-y-5">
                {section.claims.map((claim, index) => (
                  <article
                    key={claim.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Claim {section.number}.{index + 1}
                      </div>
                      <span
                        className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ${claimTypeClasses(
                          claim.type,
                        )}`}
                      >
                        {claim.type}
                      </span>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                          Publication-safe claim
                        </h3>
                        <p className="mt-2 text-lg font-semibold leading-relaxed text-slate-950">
                          {claim.claim}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                          What it means
                        </h4>
                        <p className="mt-2 text-base leading-relaxed text-slate-700">
                          {claim.meaning}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                          Why we can say it / evidence
                        </h4>
                        <p className="mt-2 text-base leading-relaxed text-slate-700">
                          {claim.evidence}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                          Source trail
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed">
                          {renderSourceTrail(claim.sourceIds)}
                        </p>
                      </div>

                      {claim.boundary ? (
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                          <h4 className="text-xs font-bold uppercase tracking-wide text-amber-900">
                            Boundary
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-amber-950">
                            {claim.boundary}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </GuideSectionCard>
          </React.Fragment>
        ))}

        <GuideSectionHeader
          id="methodology"
          number="10"
          title="Sources and methodology note"
          subtitle="How claims and sources are selected and presented."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              This page organizes primary studies, government reports, court
              opinions, and other authoritative sources into evidence-supported
              public claims. Source trails prioritize original sources, while
              SOLAR evidence guides are listed below as synthesis gateways.
            </p>

            <p>
              Claims are curated for strength, relevance, and accuracy.
              Complicating evidence is used to define scope and boundaries when
              it materially changes what the evidence allows SOLAR to say.
            </p>
          </GuideProse>

          <GuideCallout
            tone="reminder"
            icon="📝"
            title="Common reporting mistakes to avoid"
          >
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-700">
              <li>Rearrest is not reconviction.</li>
              <li>Public availability is not prevention.</li>
              <li>Practitioner perception is not measured efficacy.</li>
              <li>
                General-risk tools are not automatically specialized sexual-risk
                instruments.
              </li>
              <li>
                Registration, notification, residence restrictions, supervision,
                treatment, and verification are not interchangeable policies.
              </li>
            </ul>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="related-resources"
          number="11"
          title="Related SOLAR resources"
          subtitle="Use these when you need deeper context or a synthesis gateway."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Primary SOLAR evidence gateways"
            resources={[
              {
                label: "Registry Effectiveness Evidence Guide",
                description:
                  "Deeper synthesis on registration, notification, public use, and measurable public-safety outcomes.",
                href: "/resources/registry-effectiveness-evidence-guide",
                badge: "SOLAR Guide",
              },
              {
                label: "Recidivism Evidence Guide",
                description:
                  "Deeper synthesis on rearrest, reconviction, follow-up periods, absolute rates, and comparator evidence.",
                href: "/resources/recidivism-evidence-guide",
                badge: "SOLAR Guide",
              },
              {
                label: "Risk Assessment Guide",
                description:
                  "Deeper synthesis on offense labels, actuarial tools, dynamic risk, calibration, and individualized assessment.",
                href: "/resources/risk-assessment-guide",
                badge: "SOLAR Guide",
              },
              {
                label: "Research & Data Resources",
                description:
                  "Research-oriented starting point for source trails, data resources, and evidence navigation.",
                href: "/resources/research-data-resources",
                badge: "SOLAR Resource",
              },
              {
                label: "Advocacy Positions",
                description:
                  "The public SOLAR positions this claims library is organized around.",
                href: "/advocacy",
                badge: "SOLAR Page",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Registry Effectiveness Evidence Guide",
                description:
                  "Use this for broader support on whether registries reduce offending.",
                to: "/resources/registry-effectiveness-evidence-guide",
              },
              {
                title: "Recidivism Evidence Guide",
                description:
                  "Use this for careful distinctions among rearrest, reconviction, absolute rates, and comparator groups.",
                to: "/resources/recidivism-evidence-guide",
              },
              {
                title: "Risk Assessment Guide",
                description:
                  "Use this for individualized-risk, tool-purpose, AUC, calibration, and dynamic-risk issues.",
                to: "/resources/risk-assessment-guide",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="sources"
          number="12"
          title="Source list"
          subtitle="Direct source trail for the claims above."
        />

        <GuideSectionCard>
          <SourceList
            note="Position architecture and source links verified September 13, 2026. Source URLs may change over time; claims are framed to the evidence and boundaries identified above."
            sources={sourceListItems}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}
