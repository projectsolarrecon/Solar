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

const sourceLinks: Record<string, SourceLink> = {
  zgobaMitchell: {
    label: "Zgoba & Mitchell SORN meta-analysis",
    href: "https://doi.org/10.1007/s11292-021-09480-z",
    description: "Broad quantitative synthesis of 25 years of evaluated SORN policies and recidivism outcomes.",
    type: "Peer-reviewed meta-analysis",
  },
  prescottRockoff: {
    label: "Prescott & Rockoff SORN study",
    href: "https://www.nber.org/papers/w13803",
    description: "Study separating registration and public-notification mechanisms, including countervailing notification effects.",
    type: "Peer-reviewed article / NBER working paper",
  },
  agan: {
    label: "Agan, ‘Sex Offender Registries: Fear without Function?’",
    href: "https://www.journals.uchicago.edu/doi/10.1086/658483",
    description: "Study testing registry effects across several empirical designs.",
    type: "Peer-reviewed article",
  },
  njMeganLaw: {
    label: "New Jersey Megan’s Law evaluation",
    href: "https://nij.ojp.gov/library/publications/megans-law-assessing-practical-and-monetary-efficacy",
    description: "NIJ-funded state evaluation of practical, monetary, and public-safety outcomes.",
    type: "Government report",
  },
  bjs1994SexOffenders: {
    label: "BJS sex-offender recidivism, 1994 releases",
    href: "https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-prison-1994",
    description: "Large state-prison release cohort with rearrest and reconviction measures.",
    type: "Government statistical report",
  },
  bjs2019NineYear: {
    label: "BJS sex-offender recidivism, 9-year follow-up",
    href: "https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14",
    description: "BJS comparison of rape/sexual-assault releases and other released prisoners over nine years.",
    type: "Government statistical report",
  },
  bjs2012Releases: {
    label: "BJS prisoner recidivism, 2012 releases",
    href: "https://bjs.ojp.gov/sites/g/files/xyckuh236/files/media/document/rpr34s125yfup1217.pdf",
    description: "Same-cohort rearrest comparisons across release-offense categories.",
    type: "Government statistical report",
  },
  bjs1994Specialization: {
    label: "BJS same-offense specialization table",
    href: "https://bjs.ojp.gov/content/pub/pdf/rpr94.pdf",
    description: "BJS same-offense rearrest comparisons across many offense categories.",
    type: "Government statistical report",
  },
  bjsChildKnown: {
    label: "BJS sexual assault of young children",
    href: "https://bjs.ojp.gov/library/publications/sexual-assault-young-children-reported-law-enforcement-victim-incident-and",
    description: "Official report on victim-offender relationships in sexual assaults of young children reported to law enforcement.",
    type: "Government statistical report",
  },
  levensonCotter: {
    label: "Levenson & Cotter, Megan’s Law and reintegration",
    href: "https://scholars.lynn.edu/en/publications/the-effect-of-megans-law-on-sex-offender-reintegration/",
    description: "Florida survey evidence on housing, employment, threats, and reintegration burdens.",
    type: "Peer-reviewed article",
  },
  lasherMcGrath: {
    label: "Lasher & McGrath reintegration review",
    href: "https://doi.org/10.1177/0306624X10387524",
    description: "Review of notification, housing, employment, psychological, and reintegration effects.",
    type: "Peer-reviewed review",
  },
  zandbergenHart: {
    label: "Zandbergen & Hart residence-restriction GIS study",
    href: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/reducing-housing-options-convicted-sex-offenders-investigating",
    description: "GIS study of how residence restrictions can reduce lawful housing availability.",
    type: "Peer-reviewed article",
  },
  residenceTransience: {
    label: "Residence restrictions and transience study",
    href: "https://www.fl-counties.com/wp-content/uploads/2022/09/WhereforartThouCJPR2013.pdf",
    description: "Study examining residence restrictions, housing availability, transience, and community stability.",
    type: "Peer-reviewed article",
  },
  smartManagement: {
    label: "DOJ SMART SOMAPI management-strategies synthesis",
    href: "https://smart.ojp.gov/somapi/chapter-8-sex-offender-management-strategies",
    description: "Federal synthesis on management strategies, residence restrictions, and unintended consequences.",
    type: "Government evidence synthesis",
  },
  smartCollateralReview: {
    label: "SMART/Library of Congress collateral-effects review",
    href: "https://smart.ojp.gov/media/document/6346",
    description: "Government review of housing, employment, wellbeing, family, and reintegration effects.",
    type: "Government evidence review",
  },
  levensonFamily: {
    label: "Levenson & Tewksbury family collateral-damage study",
    href: "https://safervirginia.org/documents/Collateral%20Damage%20-%20Family%20Members%20of%20Registered%20Sex%20Offenders%20Levenson.pdf",
    description: "Study of collateral consequences reported by family members of people required to register.",
    type: "Peer-reviewed article",
  },
  cdcFirearm: {
    label: "CDC firearm injury and death facts",
    href: "https://www.cdc.gov/firearm-violence/data-research/facts-stats/index.html",
    description: "Official public-health information on firearm injury, death, and prevention.",
    type: "Government public-health resource",
  },
  nhtsaImpaired: {
    label: "NHTSA impaired-driving prevention report",
    href: "https://www.nhtsa.gov/sites/nhtsa.gov/files/2026-03/Report-to-Congress-Advanced-Impaired-Driving-Prevention-Technology.pdf",
    description: "Federal report on prevention technology and regulation for a recurring public-safety harm.",
    type: "Government report",
  },
  bjsDomestic: {
    label: "BJS nonfatal domestic violence report",
    href: "https://bjs.ojp.gov/content/pub/pdf/ndv0312.pdf",
    description: "Official victimization data on another serious form of interpersonal harm.",
    type: "Government statistical report",
  },
  smithDoe: {
    label: "Smith v. Doe",
    href: "https://supreme.justia.com/cases/federal/us/538/84/",
    description: "Supreme Court decision holding Alaska’s then-existing registry nonpunitive for federal ex post facto purposes.",
    type: "Court opinion",
  },
  doesSnyder: {
    label: "Does #1–5 v. Snyder",
    href: "https://law.justia.com/cases/federal/appellate-courts/ca6/15-1536/15-1536-2016-08-25.html",
    description: "Sixth Circuit decision finding Michigan’s materially different amended registry punitive in effect.",
    type: "Court opinion",
  },
  ussc2010Recidivism: {
    label: "USSC federal offenders released in 2010",
    href: "https://www.ussc.gov/sites/default/files/pdf/research-and-publications/research-publications/2021/20210930_Recidivism.pdf",
    description: "Federal same-cohort recidivism report with offense type, age, and criminal-history comparisons.",
    type: "Federal government research report",
  },
  usscCsem: {
    label: "USSC non-production CSEM recidivism report",
    href: "https://www.ussc.gov/research/research-reports/federal-sentencing-child-pornography-non-production-offenses",
    description: "Specialized federal recidivism benchmark for non-production child sexual exploitation material offenses.",
    type: "Federal government research report",
  },
  hansonSimpleQuestion: {
    label: "Hanson, ‘Sex Offender Recidivism: A Simple Question’",
    href: "https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sx-ffndr-rcdvsm/index-en.aspx",
    description: "Research summary on why recidivism rates vary by subgroup and follow-up.",
    type: "Government-hosted research summary",
  },
  babchishinHanson: {
    label: "Babchishin, Hanson & Helmus risk-assessment meta-analysis",
    href: "https://pubmed.ncbi.nlm.nih.gov/19290762/",
    description: "Meta-analysis comparing actuarial, structured, and unstructured risk-assessment approaches.",
    type: "Peer-reviewed meta-analysis",
  },
  static99Workbook: {
    label: "Static-99R evaluators workbook",
    href: "https://www.oregon.gov/boppps/Documents/R%26R/Static%20Evaluators_Workbook_2021-09-28.pdf",
    description: "Professional guidance on reference groups, relative risk, age, and interpretation.",
    type: "Professional guidance",
  },
  treatmentMeta: {
    label: "Schmucker & Lösel treatment meta-analysis",
    href: "https://doi.org/10.1007/s11292-015-9241-z",
    description: "Meta-analysis of specialized treatment and sexual recidivism outcomes.",
    type: "Peer-reviewed meta-analysis",
  },
  andersonSample: {
    label: "Anderson & Sample public awareness and protective action",
    href: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/public-awareness-and-action-resulting-sex-offender-community",
    description: "Survey on registry awareness, use, and self-reported protective behavior.",
    type: "Peer-reviewed article",
  },
  harrisLawEnforcement: {
    label: "Harris et al. law-enforcement effectiveness and challenges",
    href: "https://doi.org/10.1177/0887403416651671",
    description: "National law-enforcement research on registry reliability, public utility, and implementation limits.",
    type: "Peer-reviewed article",
  },
  cubellis: {
    label: "Cubellis, Walfield & Harris law-enforcement perspectives",
    href: "https://doi.org/10.1177/0306624X16667574",
    description: "Law-enforcement survey documenting mixed views and registry-size effects.",
    type: "Peer-reviewed article",
  },
  atsaReform: {
    label: "ATSA evidence-based registry-reform recommendations",
    href: "https://members.atsa.com/learn/Details/report-registration-and-community-notification-of-adults-convicted-of-a-sexual-crime-recommendations-for-evidence-based-reform-194317",
    description: "Expert recommendations emphasizing evidence, individualization, treatment, review, and targeted notification.",
    type: "Expert policy recommendations",
  },
  minnesotaNotification: {
    label: "Duwe & Donnay Minnesota Level 3 notification study",
    href: "https://doi.org/10.1111/j.1745-9125.2008.00114.x",
    description: "Evaluation finding favorable outcomes for Minnesota’s selected Level 3 notification program.",
    type: "Peer-reviewed article",
  },
};

const positions: PositionSection[] = [
  {
    id: "registry-effectiveness",
    number: "1",
    title: "Ineffective and rooted in misinformation",
    subtitle: "What broad SORN research says about effectiveness, recidivism, public use, and the limits of registry-centered prevention.",
    position: "The sex offender registry system is ineffective and rooted in misinformation.",
    claims: [
      {
        type: "Evidence synthesis",
        claim: "Across 25 years of evaluated U.S. SORN policies, the strongest broad quantitative synthesis has not demonstrated a recidivism-reduction effect.",
        meaning: "After decades of registry laws, the best broad pooled evidence still has not shown that SORN as a system reduces reoffending.",
        evidence: "Zgoba and Mitchell synthesized 18 research articles, 474,640 individuals, and 42 effect sizes. The pooled effect was not statistically significant, including subgroup checks by sexual versus nonsexual recidivism and arrest versus conviction.",
        sourceIds: ["zgobaMitchell"],
        boundary: "Targeted programs can produce different findings. Minnesota’s selected Level 3 notification study reported favorable outcomes and should not be erased by the broader pooled result.",
      },
      {
        type: "Empirical finding",
        claim: "Major state evaluations have repeatedly failed to show that broad registry-and-notification systems reduce sexual offending or sexual recidivism.",
        meaning: "Large evaluations in multiple jurisdictions have not delivered the prevention effect the public is often told to assume.",
        evidence: "The New Jersey evaluation found no demonstrated effect on several sexual-offense and recidivism outcomes. Agan and other state-level evaluations likewise found little evidence of broad crime-reduction effects.",
        sourceIds: ["njMeganLaw", "agan"],
      },
      {
        type: "Empirical finding",
        claim: "Detected sexual recidivism is a minority outcome in major official cohorts and varies materially by population, prior history, age, follow-up, and measurement.",
        meaning: "The evidence does not support the common assumption that people convicted of sex offenses almost inevitably offend again.",
        evidence: "BJS release cohorts and specialized federal research show minority detected sexual-recidivism outcomes, with substantial variation across subgroups and measures.",
        sourceIds: ["bjs1994SexOffenders", "bjs2019NineYear", "usscCsem", "hansonSimpleQuestion"],
        boundary: "Rearrest, conviction, and other official measures undercount undetected conduct and should not be described as lifetime offending rates.",
      },
      {
        type: "Policy inference",
        claim: "Registration, public notification, residence restrictions, supervision, treatment, and verification should not be treated as interchangeable evidence.",
        meaning: "A study about one component does not prove that every component of the registry system works the same way.",
        evidence: "Prescott and Rockoff separate registration from notification, while the broader literature evaluates different policy packages and mechanisms.",
        sourceIds: ["prescottRockoff", "zgobaMitchell"],
      },
    ],
  },
  {
    id: "community-safety",
    number: "2",
    title: "Registry policies can make communities less safe",
    subtitle: "Evidence and bounded inferences about destabilization, notification, residence restrictions, and counterproductive safety effects.",
    position: "Registry policies can make communities less safe.",
    claims: [
      {
        type: "Empirical finding",
        claim: "Public notification can create countervailing effects: one major study found evidence consistent with notification increasing recidivism among people already on registries.",
        meaning: "More exposure is not automatically more safety. Publicity can impose social and financial costs that work against reintegration.",
        evidence: "Prescott and Rockoff found patterns consistent with registration reducing offending through law-enforcement information while public notification had different effects, including evidence consistent with increased recidivism among registered people.",
        sourceIds: ["prescottRockoff"],
        boundary: "This does not establish that every notification regime or registry system produces a net increase in offending. It identifies a credible counterproductive mechanism and measured effect in an influential study.",
      },
      {
        type: "Evidence synthesis",
        claim: "Policies that destabilize housing, work, treatment access, and family support can undermine conditions associated with successful reintegration.",
        meaning: "A public-safety policy can work against itself when it makes stable lawful life harder to sustain.",
        evidence: "Government and peer-reviewed reviews document housing, employment, social, and psychological burdens. DOJ’s SMART synthesis specifically warns that residence restrictions may increase risk by undermining housing, employment, and family support.",
        sourceIds: ["smartManagement", "smartCollateralReview", "lasherMcGrath"],
        boundary: "The complete burden-to-destabilization-to-new-victimization pathway has not been proven end to end for every registry burden.",
      },
      {
        type: "Empirical finding",
        claim: "Residence restrictions can sharply reduce lawful housing options and contribute to residential instability or transience.",
        meaning: "Rules designed to create distance from perceived risk can make stable housing substantially harder to obtain.",
        evidence: "GIS and residence-restriction studies document large reductions in lawful housing availability and links between restrictive geography, displacement, and transience.",
        sourceIds: ["zandbergenHart", "residenceTransience"],
        boundary: "Residence restrictions vary by jurisdiction and are not required by federal SORNA. Local geography and rule design materially affect the result.",
      },
      {
        type: "Policy inference",
        claim: "The evidence is sufficient to reject the assumption that greater exposure and restriction necessarily produce greater safety.",
        meaning: "Registry policy should be tested for unintended safety effects rather than credited with benefits by intuition alone.",
        evidence: "Countervailing notification findings, documented destabilization, and residence-restriction evidence together show that registry mechanisms can impose conditions that work against stated public-safety goals.",
        sourceIds: ["prescottRockoff", "smartManagement", "zandbergenHart"],
      },
    ],
  },
  {
    id: "relationship-access",
    number: "3",
    title: "Relationship and access, not stranger-location mapping",
    subtitle: "What child-safety evidence says about known perpetrators, trusted access, and the limits of public maps as a prevention model.",
    position: "Sexual harm to children is primarily a relationship-and-access problem, not a stranger-location problem.",
    claims: [
      {
        type: "Empirical finding",
        claim: "Reported child sexual abuse is predominantly committed by people known to the child rather than strangers.",
        meaning: "The central child-safety problem is usually access and trust, not an unknown person living nearby.",
        evidence: "BJS data on sexual assaults of young children reported to law enforcement show family members and acquaintances dominating the known victim-offender relationship categories, with strangers a small minority.",
        sourceIds: ["bjsChildKnown"],
        boundary: "The BJS source covers incidents reported to law enforcement; unreported abuse has different measurement limits.",
      },
      {
        type: "Policy inference",
        claim: "A public registry is a poor standalone child-safety model because known-access offending is not the same prevention target as stranger-location warning.",
        meaning: "Address lookups do not answer who has private access, authority, secrecy, trust, or institutional protection.",
        evidence: "Known-perpetrator data and research on registry awareness and use support a prevention model that reaches beyond location visibility.",
        sourceIds: ["bjsChildKnown", "andersonSample"],
      },
      {
        type: "Policy inference",
        claim: "Registry-centered prevention can misdirect attention when it encourages the public to treat location visibility as the main child-safety strategy.",
        meaning: "Effective prevention must also address relationships, access, disclosure, institutional response, and trusted authority.",
        evidence: "The known-perpetrator pattern, limited public registry use, and weak broad SORN outcome evidence make a stranger-location model incomplete as a prevention strategy.",
        sourceIds: ["bjsChildKnown", "andersonSample", "zgobaMitchell"],
      },
    ],
  },
  {
    id: "lifelong-branding",
    number: "4",
    title: "Other serious harms are addressed without lifelong public branding",
    subtitle: "Comparative evidence and policy reasoning about why permanent public status is an exceptional intervention rather than an ordinary response to serious harm.",
    position: "Other serious harms are addressed without lifelong public branding.",
    claims: [
      {
        type: "Policy inference",
        claim: "Public-safety systems routinely address serious recurring harms through prevention, regulation, treatment, enforcement, and sentence-bound accountability without creating a permanent public identity for every person convicted.",
        meaning: "Permanent public branding is an exceptional policy tool, not the default response to serious danger.",
        evidence: "Firearm injury, impaired driving, and domestic violence illustrate major public-safety problems addressed through combinations of prevention, regulation, enforcement, treatment, technology, and criminal sanctions rather than a universal lifelong public registry model.",
        sourceIds: ["cdcFirearm", "nhtsaImpaired", "bjsDomestic"],
        boundary: "These harms are not identical to sexual harm. The comparison concerns policy architecture, not moral equivalence between offenses or victims.",
      },
      {
        type: "Comparative finding",
        claim: "Sex-offense release groups are not uniformly the highest-recidivism group when the outcome is any new arrest.",
        meaning: "Exceptional permanent public status cannot be justified simply by assuming this population has the highest overall reoffending rate.",
        evidence: "BJS same-cohort studies report lower overall rearrest for rape/sexual-assault release groups than for released prisoners overall, while also showing elevated relative risk for specifically detected sexual reoffending.",
        sourceIds: ["bjs1994SexOffenders", "bjs2019NineYear"],
        boundary: "Overall rearrest and sexual rearrest are different outcomes. Relative elevation for a specific offense type can coexist with a minority absolute rate.",
      },
      {
        type: "Comparative finding",
        claim: "Same-type recidivism concentration is not unique to sexual offending.",
        meaning: "People with prior offenses often show some specialization across many crime categories; repeat-offense concentration is not uniquely a sex-offense phenomenon.",
        evidence: "BJS same-offense tables show elevated same-type rearrest likelihood across homicide, rape, sexual assault, robbery, assault, burglary, theft, fraud, drug, and public-order categories.",
        sourceIds: ["bjs1994Specialization", "bjs2012Releases"],
      },
      {
        type: "SOLAR conclusion",
        claim: "Because permanent public identification is an exceptional burden, it should require an exceptional evidence-based justification rather than an assumption that sexual offenses are categorically different in every risk dimension.",
        meaning: "The policy burden should be justified by what it demonstrably accomplishes, not by the seriousness of the label alone.",
        evidence: "Comparative recidivism evidence, broader SORN outcome research, and evidence-based reform recommendations support asking why this policy category receives permanent public status when many other serious harms do not.",
        sourceIds: ["zgobaMitchell", "bjs2019NineYear", "atsaReform"],
      },
    ],
  },
  {
    id: "punitive-practice",
    number: "5",
    title: "Punitive in practice, not merely administrative",
    subtitle: "Legal doctrine and lived-effects evidence distinguishing a civil label from the practical operation of modern registry systems.",
    position: "Registries are punitive in practice, not merely administrative.",
    claims: [
      {
        type: "Legal fact",
        claim: "A court’s civil label for a registry scheme does not end the empirical or legal question whether a materially different modern scheme operates punitively in effect.",
        meaning: "Legal classification and lived effect are related, but they are not the same thing.",
        evidence: "Smith v. Doe held Alaska’s then-existing system nonpunitive for federal ex post facto purposes. Does #1–5 v. Snyder later found materially different Michigan provisions punitive in effect.",
        sourceIds: ["smithDoe", "doesSnyder"],
      },
      {
        type: "SOLAR conclusion",
        claim: "Public exposure, recurring reporting, residence and proximity limits, employment barriers, and long-duration public status can function as continuing punishment in everyday life after sentence completion.",
        meaning: "For many people, the practical burden of the conviction does not end when the formal sentence ends.",
        evidence: "The conclusion synthesizes documented reintegration burdens, housing restrictions, public-notification consequences, and modern constitutional litigation over punitive effects.",
        sourceIds: ["levensonCotter", "lasherMcGrath", "zandbergenHart", "doesSnyder"],
      },
      {
        type: "Legal fact",
        claim: "Modern registry constitutional analysis is fact-sensitive because courts assess the specific law and its effects, not the word ‘registry’ in the abstract.",
        meaning: "A legal answer based on an older, less restrictive system does not automatically settle every later registry design.",
        evidence: "The contrast between Smith and Snyder illustrates why added exclusion zones, reporting duties, public exposure, and other burdens can matter to legal analysis.",
        sourceIds: ["smithDoe", "doesSnyder"],
      },
      {
        type: "Policy inference",
        claim: "When punishment-like burdens persist without demonstrated broad safety gains, proportionality becomes a central policy question.",
        meaning: "Calling a burden administrative does not answer whether it is justified.",
        evidence: "Weak broad effectiveness evidence coexists with documented housing, employment, social, and administrative burdens.",
        sourceIds: ["zgobaMitchell", "njMeganLaw", "lasherMcGrath"],
      },
    ],
  },
  {
    id: "family-children",
    number: "6",
    title: "Registry systems punish families and children too",
    subtitle: "Evidence on household spillover, financial strain, forced moves, stigma, harassment, and consequences borne by people who committed no offense.",
    position: "Registry systems punish families and children too.",
    claims: [
      {
        type: "Empirical finding",
        claim: "Registry consequences can extend beyond the registered person to spouses, children, and other family members.",
        meaning: "The household can bear financial, housing, social, and safety consequences even though the legal obligation attaches to one person.",
        evidence: "Family-focused research reports financial hardship, housing disruption, stigma, threats, property damage, isolation, and other spillover consequences among family members of people on registries.",
        sourceIds: ["levensonFamily", "smartCollateralReview"],
        boundary: "Family studies often rely on volunteer or convenience samples and should not be used to claim a precise national prevalence for every consequence.",
      },
      {
        type: "Empirical finding",
        claim: "Children in registered households can experience stigma, social exclusion, disruption, and other collateral effects tied to a parent or family member’s public status.",
        meaning: "Registry policy can impose real costs on children who committed no offense.",
        evidence: "Family collateral-damage research includes reported effects on children’s social lives, schooling, emotional wellbeing, housing stability, and exposure to stigma or harassment.",
        sourceIds: ["levensonFamily", "smartCollateralReview"],
        boundary: "Direct child-specific research is thinner than the broader adult and household collateral-consequences literature, so the page avoids claiming that every child experiences the same effects.",
      },
      {
        type: "Empirical finding",
        claim: "Housing and employment barriers can propagate through an entire household rather than remaining an individual consequence.",
        meaning: "A lost home or job changes the material conditions of spouses and children too.",
        evidence: "Reintegration research documents job and housing barriers, while residence-restriction studies show how lawful housing supply can be sharply constrained. Those burdens necessarily operate at the household level when family members share income and housing.",
        sourceIds: ["levensonCotter", "lasherMcGrath", "zandbergenHart"],
      },
      {
        type: "SOLAR conclusion",
        claim: "When registry rules predictably burden spouses and children who were never convicted or sentenced, describing those effects as collateral punishment is a defensible policy judgment.",
        meaning: "The state’s formal target may be one person, but the practical burden can reach innocent family members.",
        evidence: "The judgment rests on documented family spillover, housing and employment consequences, public exposure, and the duration of registry obligations.",
        sourceIds: ["levensonFamily", "smartCollateralReview", "lasherMcGrath"],
        boundary: "‘Punishment’ here is a SOLAR policy description of practical burden, not a claim that every collateral consequence is legally classified as criminal punishment.",
      },
    ],
  },
  {
    id: "individualized-risk",
    number: "7",
    title: "One-size-fits-all registry laws are fundamentally flawed",
    subtitle: "Evidence on heterogeneity, age, time offense-free, assessment methods, treatment, and why offense labels are poor substitutes for current individual risk.",
    position: "One-size-fits-all registry laws are fundamentally flawed.",
    claims: [
      {
        type: "Empirical finding",
        claim: "An offense label is not a validated measure of an individual’s current risk.",
        meaning: "Knowing the conviction category alone does not tell you how likely a particular person is to offend again.",
        evidence: "Official cohorts and specialized research show substantial variation by criminal history, age, prior offense history, offense type, and subgroup.",
        sourceIds: ["bjs2019NineYear", "ussc2010Recidivism", "usscCsem", "hansonSimpleQuestion"],
      },
      {
        type: "Empirical finding",
        claim: "Risk changes across the life course; age and sustained offense-free time materially affect observed risk.",
        meaning: "Risk is not frozen forever at the moment of conviction.",
        evidence: "Long-term recidivism research and actuarial guidance recognize declining average risk with age and offense-free time.",
        sourceIds: ["hansonSimpleQuestion", "static99Workbook", "ussc2010Recidivism"],
        boundary: "Age and offense-free time lower average risk; they do not eliminate risk for every individual.",
      },
      {
        type: "Empirical finding",
        claim: "Structured actuarial approaches generally outperform unstructured professional judgment in predicting sexual recidivism.",
        meaning: "Risk decisions should not be based only on offense title, fear, or professional intuition.",
        evidence: "Meta-analytic evidence finds stronger predictive performance for actuarial approaches than for unstructured judgment.",
        sourceIds: ["babchishinHanson"],
        boundary: "Structured methods are not perfect prediction; tool population, purpose, calibration, and decision context still matter.",
      },
      {
        type: "Empirical finding",
        claim: "Treatment and other dynamic information can matter to risk and management decisions.",
        meaning: "Some relevant factors are historical, while others can change with treatment, stability, supervision, and behavior.",
        evidence: "Treatment meta-analysis and evidence-based reform guidance support policies that account for change rather than treating risk as permanently fixed.",
        sourceIds: ["treatmentMeta", "atsaReform"],
      },
    ],
  },
  {
    id: "permanent-underclass",
    number: "8",
    title: "Registries create a permanent underclass",
    subtitle: "Evidence and SOLAR synthesis on cumulative housing, employment, social, and administrative barriers that obstruct ordinary reintegration.",
    position: "Registries create a permanent underclass.",
    claims: [
      {
        type: "SOLAR conclusion",
        claim: "Registry systems create a permanent underclass when public status, legal restrictions, private exclusion, and recurring administrative demands combine to obstruct ordinary reintegration.",
        meaning: "The label can follow people into housing, work, family life, services, and community participation long after the sentence ends.",
        evidence: "This synthesis rests on documented housing loss, employment exclusion, psychological burden, public-notification effects, residence restrictions, and long-duration public status.",
        sourceIds: ["levensonCotter", "lasherMcGrath", "zandbergenHart", "smartCollateralReview"],
        boundary: "The term describes the cumulative architecture and its recurring effects; it does not claim every registered person experiences every barrier in the same way.",
      },
      {
        type: "Empirical finding",
        claim: "Housing barriers are a central mechanism through which registry systems destabilize people and households.",
        meaning: "Without a lawful, stable place to live, nearly every other part of reentry becomes harder.",
        evidence: "GIS, reintegration, and collateral-effects research documents reduced housing options, residential disruption, and instability associated with registry exposure and restrictions.",
        sourceIds: ["zandbergenHart", "residenceTransience", "levensonCotter"],
      },
      {
        type: "Empirical finding",
        claim: "Employment and social exclusion are documented registry consequences, not merely speculative complaints.",
        meaning: "Public status can materially narrow access to ordinary work and community participation.",
        evidence: "Reintegration reviews document job loss or exclusion, social isolation, threats, psychological effects, and other barriers associated with notification and public registry exposure.",
        sourceIds: ["levensonCotter", "lasherMcGrath", "smartCollateralReview"],
      },
      {
        type: "Policy inference",
        claim: "A system that erects durable barriers to housing, work, and community participation can deny people the stability infrastructure necessary for successful reintegration.",
        meaning: "Reentry is harder when lawful life is structurally difficult to sustain.",
        evidence: "The inference follows from documented housing, employment, social, and household burdens without requiring the stronger claim that each burden directly causes new offending.",
        sourceIds: ["lasherMcGrath", "smartCollateralReview", "zandbergenHart"],
      },
    ],
  },
  {
    id: "measurable-outcomes",
    number: "9",
    title: "Measurable outcomes, not presumed benefits",
    subtitle: "Methodological claims that keep public-safety policy tied to measured outcomes, distinct mechanisms, and benefit-versus-burden analysis.",
    position: "Public-safety policy should be judged by measurable outcomes, not presumed benefits.",
    claims: [
      {
        type: "Policy inference",
        claim: "The seriousness of sexual harm does not prove that a registry policy prevents it.",
        meaning: "A problem can be grave and an intervention imposed in its name can still fail.",
        evidence: "The moral seriousness of sexual harm and the measured effectiveness of a policy are separate questions. Broad SORN evidence has not demonstrated a general recidivism-reduction effect.",
        sourceIds: ["zgobaMitchell", "prescottRockoff"],
      },
      {
        type: "Policy inference",
        claim: "Visibility is not prevention, and the existence of a database is not proof of protective action.",
        meaning: "A public list only matters if it is accurate, understood, used, and connected to behavior that actually reduces harm.",
        evidence: "Public-use research, implementation studies, and broad SORN outcome evidence support separating availability, use, protective behavior, and crime reduction.",
        sourceIds: ["andersonSample", "harrisLawEnforcement", "zgobaMitchell"],
      },
      {
        type: "Policy inference",
        claim: "Practitioner belief that a registry is useful is evidence about practitioner perception, not direct evidence that the registry reduces offending.",
        meaning: "Survey answers can tell us what administrators think; they cannot by themselves establish a crime-prevention effect.",
        evidence: "Law-enforcement studies document mixed perceptions and operational concerns, which are important implementation evidence but not substitutes for measured crime outcomes.",
        sourceIds: ["cubellis", "harrisLawEnforcement"],
      },
      {
        type: "Policy inference",
        claim: "Registry policy should be evaluated component by component rather than as one indivisible package.",
        meaning: "Registration, public notification, residence restrictions, verification, supervision, and treatment can have different mechanisms, benefits, and burdens.",
        evidence: "Prescott and Rockoff separate registration from notification; broader syntheses and targeted-notification research show why one component’s evidence should not automatically be generalized to another.",
        sourceIds: ["prescottRockoff", "zgobaMitchell", "minnesotaNotification"],
      },
      {
        type: "Policy inference",
        claim: "When demonstrated benefits are null, narrow, or inconsistent, financial, administrative, family, and reintegration burdens become central to proportionality.",
        meaning: "Costs and harms matter most when the promised public-safety benefit is weak or unproven.",
        evidence: "Broad effectiveness research, public costs, collateral-effects literature, and implementation concerns together support explicit benefit-versus-burden evaluation.",
        sourceIds: ["zgobaMitchell", "njMeganLaw", "smartCollateralReview", "harrisLawEnforcement"],
        boundary: "Targeted notification among selected higher-risk people has produced favorable findings in some settings; that does not establish a broad benefit for every registry component or population.",
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
        if (!source) return null;
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

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 py-12 text-white sm:py-16 no-print">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link to="/resources" className="inline-flex items-center text-sm text-slate-200 transition-colors hover:text-white">
            ← Back to Resources
          </Link>
          <div className="mt-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100 ring-1 ring-white/20">
            SOLAR Resource Guide
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Supported Claims Library</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-100 sm:text-xl">
            A source-backed collection of the strongest claims SOLAR believes the evidence supports.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={handlePrint} className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow transition-colors hover:bg-slate-100">
              🖨️ Print Guide
            </button>
            <a href="#sources" className="rounded-xl border border-white/70 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white hover:text-slate-900">
              Jump to Sources
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400" />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <ShareBar />

        <GuideIntro title="Start Here" icon="📚">
          <p>
            This library turns SOLAR’s research base into a public reference for writers, advocates, journalists, lawmakers, and readers who want to inspect the evidence behind our positions.
          </p>
          <p>
            The nine sections below mirror the current SOLAR Advocacy Positions in the same order. Each uses a stable descriptive anchor so links remain durable even if the positions are reordered later.
          </p>
        </GuideIntro>

        <OverviewCards
          columns={4}
          cards={[
            { title: "Publication-safe claim", icon: "✍️", tone: "research", description: "The strongest wording SOLAR believes should survive competent journalistic, academic, legislative, or fact-checking scrutiny." },
            { title: "What it means", icon: "💬", tone: "info", description: "A plain-language explanation that keeps the substance intact." },
            { title: "Evidence", icon: "🔎", tone: "legal", description: "Why SOLAR believes the claim is supportable and what kind of evidence underlies it." },
            { title: "Source trail", icon: "🔗", tone: "neutral", description: "Direct links to studies, government reports, court opinions, and authoritative sources." },
          ]}
        />

        <GuideSectionHeader id="quick-navigation" number="0" title="Quick navigation" subtitle="Jump directly to the SOLAR position you need." />
        <GuideSectionCard>
          <nav aria-label="Supported claims position navigation" className="grid gap-3 sm:grid-cols-2">
            {positions.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Position {section.number}</div>
                <div className="mt-1 text-sm font-semibold text-slate-900">{section.position}</div>
              </a>
            ))}
          </nav>
        </GuideSectionCard>

        <GuideSectionHeader id="how-to-use" number="00" title="How to use this library" subtitle="Separate measured findings from synthesis, inference, legal facts, and SOLAR conclusions." />
        <GuideSectionCard>
          <GuideProse>
            <p>
              Start with the position closest to your topic. Each claim card moves from the polished sentence to ordinary language to the evidence trail. The claim label matters: a policy inference or SOLAR conclusion should not be presented as though it were a single statistical result.
            </p>
          </GuideProse>
          <GuideCallout tone="research" icon="🧭" title="Boundary rule">
            <p>
              Boundaries appear when leaving one out would materially mislead, when a meaningful exception would make a claim vulnerable, or when naming the limit makes the claim more durable. They are not inserted merely to manufacture balance.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        {positions.map((section) => (
          <React.Fragment key={section.id}>
            <GuideSectionHeader id={section.id} number={section.number} title={section.title} subtitle={section.subtitle} />
            <GuideSectionCard>
              <div className="rounded-2xl border border-teal-200 border-l-4 border-l-teal-600 bg-teal-50 p-5 shadow-sm sm:p-6">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">SOLAR’s position</div>
                <p className="mt-2 text-lg font-semibold leading-snug text-slate-950 sm:text-xl">{section.position}</p>
              </div>

              <div className="mb-3 mt-7 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Supported claims</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="space-y-5">
                {section.claims.map((claim, index) => (
                  <article key={`${section.id}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Claim {section.number}.{index + 1}</div>
                      <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ${claimTypeClasses(claim.type)}`}>{claim.type}</span>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Publication-safe claim</h3>
                        <p className="mt-2 text-lg font-semibold leading-relaxed text-slate-950">{claim.claim}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">What it means</h4>
                        <p className="mt-2 text-base leading-relaxed text-slate-700">{claim.meaning}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">Why we can say it / evidence</h4>
                        <p className="mt-2 text-base leading-relaxed text-slate-700">{claim.evidence}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">Source trail</h4>
                        <p className="mt-2 text-sm leading-relaxed">{renderSourceTrail(claim.sourceIds)}</p>
                      </div>
                      {claim.boundary ? (
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                          <h4 className="text-xs font-bold uppercase tracking-wide text-amber-900">Boundary</h4>
                          <p className="mt-1 text-sm leading-relaxed text-amber-950">{claim.boundary}</p>
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </GuideSectionCard>
          </React.Fragment>
        ))}

        <GuideSectionHeader id="methodology" number="10" title="Sources and methodology note" subtitle="How claims and sources are selected and presented." />
        <GuideSectionCard>
          <GuideProse>
            <p>
              Claims are curated for strength, relevance, and accuracy. Complicating evidence is used to define scope where it materially changes what the evidence allows SOLAR to say. The library distinguishes empirical findings from cross-source synthesis and normative policy judgment rather than forcing every conclusion into the form of a measured statistic.
            </p>
          </GuideProse>
          <GuideCallout tone="reminder" icon="📝" title="Common reporting mistakes to avoid">
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-700">
              <li>Rearrest is not reconviction, and neither is identical to all offending.</li>
              <li>Public availability is not prevention.</li>
              <li>Practitioner perception is not measured efficacy.</li>
              <li>Relative elevation is not the same thing as a high absolute rate.</li>
              <li>Registration, notification, residence restrictions, supervision, treatment, and verification are not interchangeable policies.</li>
            </ul>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader id="related-resources" number="11" title="Related SOLAR resources" subtitle="Use these when you need deeper context or a synthesis gateway." />
        <GuideSectionCard>
          <ResourceLinkGrid
            title="Primary SOLAR evidence gateways"
            resources={[
              { label: "Registry Effectiveness Evidence Guide", description: "Deeper synthesis on registration, notification, public use, and measurable public-safety outcomes.", href: "/resources/registry-effectiveness-evidence-guide", badge: "SOLAR Guide" },
              { label: "Recidivism Evidence Guide", description: "Deeper synthesis on rearrest, reconviction, follow-up periods, absolute rates, and comparator evidence.", href: "/resources/recidivism-evidence-guide", badge: "SOLAR Guide" },
              { label: "Risk Assessment Guide", description: "Deeper synthesis on offense labels, actuarial tools, dynamic risk, calibration, and individualized assessment.", href: "/resources/risk-assessment-guide", badge: "SOLAR Guide" },
              { label: "Research & Data Resources", description: "Research-oriented starting point for source trails, data resources, and evidence navigation.", href: "/resources/research-data-resources", badge: "SOLAR Resource" },
              { label: "Advocacy Positions", description: "The public SOLAR positions this claims library is organized around.", href: "/advocacy", badge: "SOLAR Page" },
            ]}
          />
          <RelatedGuides
            guides={[
              { title: "Registry Effectiveness Evidence Guide", description: "Use this for broader support on whether registries reduce offending.", to: "/resources/registry-effectiveness-evidence-guide" },
              { title: "Recidivism Evidence Guide", description: "Use this for careful distinctions among rearrest, reconviction, absolute rates, and comparator groups.", to: "/resources/recidivism-evidence-guide" },
              { title: "Risk Assessment Guide", description: "Use this for individualized-risk, tool-purpose, calibration, and dynamic-risk issues.", to: "/resources/risk-assessment-guide" },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader id="sources" number="12" title="Source list" subtitle="Direct source trail for the claims above." />
        <GuideSectionCard>
          <SourceList note="Position architecture updated September 13, 2026. Source URLs may change over time; claims are framed to the evidence and boundaries identified above." sources={sourceListItems} />
        </GuideSectionCard>
      </main>
    </div>
  );
}
