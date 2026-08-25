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

const sourceLinks: Record<string, SourceLink> = {
  zgobaMitchell: {
    label: "Zgoba & Mitchell SORN meta-analysis",
    href: "https://doi.org/10.1007/s11292-021-09480-z",
    description:
      "Broad quantitative synthesis of evaluated SORN policies and recidivism outcomes.",
    type: "Peer-reviewed meta-analysis",
  },
  cohenCsem: {
    label: "Cohen federal CSEM supervision study",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/federal-probation-journal/2023/06/building-a-risk-tool-persons-placed-federal-post-conviction-supervision-child-sexual-exploitation",
    description:
      "Federal Probation article on CSEM rearrest, PCRA, CPORT, and federal override practice.",
    type: "Government journal article",
  },
  bjs1994SexOffenders: {
    label: "BJS sex-offender recidivism, 1994 releases",
    href: "https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-prison-1994",
    description:
      "Large state-prison release cohort with three-year rearrest and reconviction measures.",
    type: "Government statistical report",
  },
  bjs2019NineYear: {
    label: "BJS sex-offender recidivism, 9-year follow-up",
    href: "https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14",
    description:
      "BJS comparison of rape/sexual-assault releases and other released prisoners over nine years.",
    type: "Government statistical report",
  },
  bjs2012Releases: {
    label: "BJS prisoner recidivism, 2012 releases",
    href: "https://bjs.ojp.gov/sites/g/files/xyckuh236/files/media/document/rpr34s125yfup1217.pdf",
    description:
      "Five-year same-type rearrest comparisons across release-offense categories.",
    type: "Government statistical report",
  },
  bjs1994Specialization: {
    label: "BJS prisoner recidivism, 1994 same-offense specialization",
    href: "https://bjs.ojp.gov/content/pub/pdf/rpr94.pdf",
    description:
      "BJS same-offense rearrest table across multiple crime categories.",
    type: "Government statistical report",
  },
  ussc2010Recidivism: {
    label: "USSC federal offenders released in 2010",
    href: "https://www.ussc.gov/sites/default/files/pdf/research-and-publications/research-publications/2021/20210930_Recidivism.pdf",
    description:
      "Federal same-cohort recidivism report with offense type, age, and criminal-history comparisons.",
    type: "Federal government research report",
  },
  usscCsem: {
    label: "USSC non-production child-pornography recidivism report",
    href: "https://www.ussc.gov/research/research-reports/federal-sentencing-child-pornography-non-production-offenses",
    description:
      "Specialized federal CSEM recidivism benchmark for non-production child-pornography offenses.",
    type: "Federal government research report",
  },
  prescottRockoff: {
    label: "Prescott & Rockoff SORN study",
    href: "https://www.journals.uchicago.edu/doi/10.1086/658485",
    description:
      "Peer-reviewed analysis separating registration and notification mechanisms.",
    type: "Peer-reviewed article",
  },
  agan: {
    label: "Agan, “Sex Offender Registries: Fear without Function?”",
    href: "https://www.journals.uchicago.edu/doi/10.1086/658483",
    description:
      "Peer-reviewed study testing registry effects across multiple empirical designs.",
    type: "Peer-reviewed article",
  },
  sandlerFreemanSocia: {
    label: "Sandler, Freeman & Socia New York SORN time series",
    href: "https://doi.org/10.1037/a0013881",
    description:
      "New York SORN time-series evaluation of sexual-offense outcomes.",
    type: "Peer-reviewed article",
  },
  letourneauAdult: {
    label: "Letourneau et al. South Carolina SORN and adult recidivism",
    href: "https://doi.org/10.1177/0887403409353148",
    description:
      "South Carolina study examining whether registration status predicted adult sexual recidivism.",
    type: "Peer-reviewed article",
  },
  letourneauJudicial: {
    label: "Letourneau et al. South Carolina SORN and judicial decisions",
    href: "https://doi.org/10.1177/0734016809360330",
    description:
      "Study of SORN’s possible effects on charging, plea, and judicial decision pathways.",
    type: "Peer-reviewed article",
  },
  njMeganLaw: {
    label: "New Jersey Megan’s Law evaluation",
    href: "https://nij.ojp.gov/library/publications/megans-law-assessing-practical-and-monetary-efficacy",
    description:
      "NIJ-funded state evaluation of practical, monetary, and public-safety outcomes.",
    type: "Government report",
  },
  minnesotaNotification: {
    label: "Duwe & Donnay Minnesota Level 3 notification study",
    href: "https://doi.org/10.1111/j.1745-9125.2008.00114.x",
    description:
      "Minnesota study of broad community notification among selected Level 3 individuals.",
    type: "Peer-reviewed article",
  },
  freemanNotification: {
    label: "Freeman community-notification rearrest study",
    href: "https://doi.org/10.1177/0011128708330852",
    description:
      "Large notified versus non-notified community-notification rearrest comparison.",
    type: "Peer-reviewed article",
  },
  levensonCotter: {
    label: "Levenson & Cotter, Megan’s Law and reintegration",
    href: "https://scholars.lynn.edu/en/publications/the-effect-of-megans-law-on-sex-offender-reintegration/",
    description:
      "Florida survey evidence on housing, employment, threats, and reintegration burdens.",
    type: "Peer-reviewed article",
  },
  lasherMcGrath: {
    label: "Lasher & McGrath reintegration review",
    href: "https://doi.org/10.1177/0306624X10387524",
    description:
      "Review of community notification, reintegration, housing, employment, and psychological effects.",
    type: "Peer-reviewed article",
  },
  zandbergenHart: {
    label: "Zandbergen & Hart residence-restriction GIS study",
    href: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/reducing-housing-options-convicted-sex-offenders-investigating",
    description:
      "GIS study of how residence restrictions can reduce lawful housing availability.",
    type: "Peer-reviewed article",
  },
  andersonSample: {
    label: "Anderson & Sample public awareness and protective action",
    href: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/public-awareness-and-action-resulting-sex-offender-community",
    description:
      "Nebraska survey on public registry awareness, use, and self-reported protective behavior.",
    type: "Peer-reviewed article",
  },
  bonnarKidd: {
    label: "Bonnar-Kidd SORN public-health review",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2820068/",
    description:
      "Open-access peer-reviewed review of SORN, prevention claims, and public-health concerns.",
    type: "Peer-reviewed review",
  },
  cubellis: {
    label: "Cubellis, Walfield & Harris law-enforcement perspectives",
    href: "https://doi.org/10.1177/0306624X16667574",
    description:
      "Law-enforcement survey documenting mixed views and registry-size effects.",
    type: "Peer-reviewed article",
  },
  harrisLawEnforcement: {
    label: "Harris et al. law-enforcement effectiveness and challenges",
    href: "https://doi.org/10.1177/0887403416651671",
    description:
      "National law-enforcement research on registry reliability, public utility, and implementation limits.",
    type: "Peer-reviewed article",
  },
  bjsChildKnown: {
    label: "BJS sexual assault of young children reported to law enforcement",
    href: "https://bjs.ojp.gov/library/publications/sexual-assault-young-children-reported-law-enforcement-victim-incident-and",
    description:
      "Official BJS report on juvenile victim-offender relationships in reported sexual assault cases.",
    type: "Government statistical report",
  },
  hansonBussiere: {
    label: "Hanson & Bussière predictor meta-analysis",
    href: "https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/prdctrs-sxl-ffnd/index-en.aspx",
    description:
      "Foundational meta-analysis of predictors of sexual-offense recidivism.",
    type: "Research / government-hosted publication",
  },
  hansonMortonBourgon: {
    label: "Hanson & Morton-Bourgon updated predictor meta-analysis",
    href: "https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/2004-02-prdctrs-sxl-rcdvsm-pdtd/index-en.aspx",
    description:
      "Updated meta-analysis on characteristics associated with persistent sexual offending.",
    type: "Research / government-hosted publication",
  },
  hansonSimpleQuestion: {
    label: "Hanson, “Sex Offender Recidivism: A Simple Question”",
    href: "https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sx-ffndr-rcdvsm/index-en.aspx",
    description:
      "Plain-language research summary on why recidivism rates vary by subgroup and follow-up.",
    type: "Government-hosted research summary",
  },
  babchishinHanson: {
    label: "Babchishin, Hanson & Helmus risk-assessment accuracy meta-analysis",
    href: "https://pubmed.ncbi.nlm.nih.gov/19290762/",
    description:
      "Meta-analysis comparing actuarial, structured, and unstructured risk-assessment approaches.",
    type: "Peer-reviewed article",
  },
  static99Coding: {
    label: "Static-99R coding rules",
    href: "https://www.waspc.org/assets/Static%2099%20Coding_manual_2016_v2.pdf",
    description:
      "Professional guidance on coding eligibility and proper Static-99R use.",
    type: "Professional guidance",
  },
  static99Workbook: {
    label: "Static-99R evaluators workbook",
    href: "https://www.oregon.gov/boppps/Documents/R%26R/Static%20Evaluators_Workbook_2021-09-28.pdf",
    description:
      "Evaluator workbook explaining group norms, relative risk, and interpretation.",
    type: "Professional guidance",
  },
  pcrA: {
    label: "PCRA construction and validation",
    href: "https://www.uscourts.gov/file/22846/download",
    description:
      "Federal Probation article on the Post Conviction Risk Assessment as a general risk/needs tool.",
    type: "Government journal article",
  },
  cportDevelopment: {
    label: "CPORT development study",
    href: "https://pubmed.ncbi.nlm.nih.gov/25844514/",
    description:
      "Development study for a CSEM-specific empirical risk tool.",
    type: "Peer-reviewed article",
  },
  cportValidation: {
    label: "CPORT validation study",
    href: "https://pubmed.ncbi.nlm.nih.gov/29592774/",
    description:
      "Validation evidence for CPORT in adult male CSEM populations.",
    type: "Peer-reviewed article",
  },
  cportCritical: {
    label: "CPORT critical review for CSEM-exclusive forensic use",
    href: "https://pubmed.ncbi.nlm.nih.gov/37471014/",
    description:
      "Critical review identifying limits in CPORT evidence for U.S. CSEM-exclusive forensic use.",
    type: "Peer-reviewed article",
  },
  stable2007: {
    label: "STABLE-2007 prospective study",
    href: "https://doi.org/10.1177/0093854815602094",
    description:
      "Prospective evidence on structured dynamic risk factors and recidivism.",
    type: "Peer-reviewed article",
  },
  sotips: {
    label: "SOTIPS validation study",
    href: "https://pubmed.ncbi.nlm.nih.gov/22368161/",
    description:
      "Dynamic risk and treatment-progress instrument validation evidence.",
    type: "Peer-reviewed article",
  },
  vrsSo: {
    label: "VRS-SO validity and reliability",
    href: "https://pubmed.ncbi.nlm.nih.gov/17845123/",
    description:
      "Evidence on structured assessment of risk and therapeutic change.",
    type: "Peer-reviewed article",
  },
  treatmentMeta: {
    label: "Schmucker & Lösel treatment meta-analysis",
    href: "https://doi.org/10.1007/s11292-015-9241-z",
    description:
      "Meta-analysis of specialized treatment and sexual recidivism outcomes.",
    type: "Peer-reviewed meta-analysis",
  },
  smithDoe: {
    label: "Smith v. Doe",
    href: "https://supreme.justia.com/cases/federal/us/538/84/",
    description:
      "U.S. Supreme Court decision holding Alaska’s then-existing registry nonpunitive for ex post facto purposes.",
    type: "Court opinion",
  },
  doesSnyder: {
    label: "Does #1–5 v. Snyder",
    href: "https://law.justia.com/cases/federal/appellate-courts/ca6/15-1536/15-1536-2016-08-25.html",
    description:
      "Sixth Circuit decision holding Michigan’s amended registry punitive in effect for ex post facto purposes.",
    type: "Court opinion",
  },
};

const positions: PositionSection[] = [
  {
    id: "position-1",
    number: "1",
    title: "Ineffective, harmful, and rooted in misinformation",
    subtitle:
      "Publication-safe claims about broad SORN effectiveness, registry mechanisms, public use, and recidivism mythology.",
    position:
      "The sex offender registry system is ineffective, harmful, and rooted in misinformation.",
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
          "Large evaluations in places such as New York, New Jersey, and South Carolina did not deliver the prevention results the public is often told to assume.",
        evidence:
          "The New York time-series study reported no support for SORN reducing several sexual-offense outcomes. The New Jersey NIJ evaluation found no demonstrated effect on overall sexual offenses, time to first rearrest, sexual reoffending, or first-time sex offenses. South Carolina adult-recidivism research found registration status did not predict sexual recidivism in modeled analyses.",
        sourceIds: ["sandlerFreemanSocia", "njMeganLaw", "letourneauAdult"],
      },
      {
        id: "p1-c3",
        type: "Policy inference",
        claim:
          "Registration, public Internet disclosure, targeted community notification, verification, residence restrictions, supervision, and treatment are different policy components and should not be treated as interchangeable evidence.",
        meaning:
          "A study about one part of the system does not automatically prove something about every other part.",
        evidence:
          "The evidence separates law-enforcement registration from public notification and broader SORN packages. Prescott and Rockoff’s work is especially important because it analyzes registration and notification as distinct mechanisms rather than one undifferentiated policy.",
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
          "Anderson and Sample’s Nebraska survey found that a minority of respondents with valid access data had accessed the registry, and protective action was self-reported and conditional on registry use. This supports the distinction between availability, use, and prevention; it is not a crime-rate experiment.",
        sourceIds: ["andersonSample"],
      },
      {
        id: "p1-c5",
        type: "Empirical finding",
        claim:
          "Law-enforcement research documents implementation limits that constrain the registry’s claimed safety mechanism.",
        meaning:
          "Even when a registry has informational value, its usefulness depends on accuracy, interagency communication, public understanding, and real-world implementation.",
        evidence:
          "Harris and colleagues identified concerns about registry information reliability and utility, inter-system communication, public interpretation, and operational workload. Cubellis and colleagues also found mixed law-enforcement views and lower confidence in public-safety efficacy in states with larger registries.",
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
          "BJS’s 1994 release study and its nine-year 2005 release study both show detected sexual recidivism as a minority outcome, while longer-term research shows rates vary by subgroup, prior offense history, age, follow-up period, and measurement basis.",
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
    id: "position-2",
    number: "2",
    title: "Lasting harm to individuals, families, and communities",
    subtitle:
      "Publication-safe claims about housing, employment, psychological, social, administrative, and public-safety-relevant burdens.",
    position:
      "Registry systems cause lasting harm to individuals, families, and communities.",
    claims: [
      {
        id: "p2-c1",
        type: "Evidence synthesis",
        claim:
          "Documented registry burdens are not merely fairness concerns; they are relevant to the policy’s own public-safety goals.",
        meaning:
          "Housing loss, job loss, isolation, harassment, and instability matter because stability is part of public safety.",
        evidence:
          "Levenson and Cotter, Lasher and McGrath, and Bonnar-Kidd document housing, employment, social, and psychological instability associated with registry and notification systems. Those burdens are relevant to reintegration and public-safety goals, while the direct causal path from any single burden to new offending is harder to establish.",
        sourceIds: ["levensonCotter", "lasherMcGrath", "bonnarKidd"],
        boundary:
          "Collateral burdens are strongly documented; causal links from each burden to new offending are harder to establish and should not be overstated.",
      },
      {
        id: "p2-c2",
        type: "Empirical finding",
        claim:
          "Community notification and public registry exposure have been repeatedly associated with housing, employment, psychological, and social reintegration burdens.",
        meaning:
          "For many people and families, registry exposure is not just paperwork; it changes where they can live, work, and belong.",
        evidence:
          "Levenson and Cotter reported reintegration effects among Florida registrants. Lasher and McGrath’s review found recurring housing and job exclusion and negative psychological effects across quantitative studies, with more intrusive notification linked to greater burden.",
        sourceIds: ["levensonCotter", "lasherMcGrath"],
      },
      {
        id: "p2-c3",
        type: "Empirical finding",
        claim:
          "Residence restrictions can dramatically shrink lawful housing options in the places where they are imposed.",
        meaning:
          "A rule that sounds simple on paper can make ordinary housing nearly impossible in a real neighborhood.",
        evidence:
          "Zandbergen and Hart’s Orange County, Florida GIS study found that only about 5% of potentially available urban residential parcels remained available under the studied 1,000-foot exclusion zones.",
        sourceIds: ["zandbergenHart"],
        boundary:
          "This is a jurisdiction-specific GIS case study; zoning, local geography, bus-stop placement, and exclusion rules can materially change the result.",
      },
      {
        id: "p2-c4",
        type: "Empirical finding",
        claim:
          "Registry systems can impose substantial public costs even where a major evaluation finds no demonstrated public-safety benefit.",
        meaning:
          "The burden is not only private. Government agencies and taxpayers also pay for systems that may not deliver measurable prevention gains.",
        evidence:
          "The NIJ-funded New Jersey evaluation reported no demonstrated public-safety effect across several outcomes and documented start-up and annual county costs, including approximately $3.9 million in responding-county costs for 2007.",
        sourceIds: ["njMeganLaw"],
        boundary:
          "The New Jersey cost figures are historical, jurisdiction-specific, and not a national estimate.",
      },
      {
        id: "p2-c5",
        type: "Empirical finding",
        claim:
          "Law-enforcement respondents in larger-registry states reported greater concern about collateral consequences and less belief in SORN’s public-safety efficacy.",
        meaning:
          "Even among people who administer these systems, bigger registries do not necessarily produce greater confidence.",
        evidence:
          "Cubellis, Walfield, and Harris found mixed law-enforcement views of SORN and reported that respondents in states with larger registries expressed more concern about collateral consequences and less confidence in public-safety efficacy.",
        sourceIds: ["cubellis"],
        boundary:
          "This is practitioner-perception evidence, not direct proof of crime reduction or crime increase.",
      },
    ],
  },
  {
    id: "position-3",
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
          "BJS’s report on sexual assault of young children reported to law enforcement is the official source trail for the victim-offender relationship point. It supports SOLAR’s use of relationship-and-access framing instead of stranger-danger framing.",
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
          "BJS’s known-perpetrator data show that child sexual harm is predominantly a known-person problem; Anderson and Sample’s public-use study shows that registry availability does not automatically become protective action; and Harris and colleagues document implementation and public-interpretation limits. Together, those findings show why a public map is an incomplete child-safety model.",
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
          "BJS’s known-perpetrator data place relationship and access at the center of the threat model. Anderson and Sample’s findings show the gap between registry availability and protective behavior, while Zgoba and Mitchell’s broad synthesis finds no overall recidivism-reduction effect for SORN. That combination supports prevention strategies that reach beyond location visibility.",
        sourceIds: ["bjsChildKnown", "andersonSample", "zgobaMitchell"],
      },
    ],
  },
  {
    id: "position-4",
    number: "4",
    title: "Comparative public safety",
    subtitle:
      "Publication-safe claims that compare recidivism measures without collapsing overall rearrest, sexual rearrest, reconviction, and specialization.",
    position:
      "Other types of crime present a greater and more consistent danger to public safety.",
    claims: [
      {
        id: "p4-c1",
        type: "Comparative finding",
        claim:
          "The comparative recidivism picture is outcome-dependent: sex-offense release groups are not uniformly high on overall recidivism, but they are relatively elevated when the outcome is specifically another detected sexual offense.",
        meaning:
          "The answer changes depending on what you are measuring. Overall rearrest and sexual rearrest are not the same question.",
        evidence:
          "BJS’s 1994 and 2005 release cohorts both show lower overall rearrest for sex-offense groups than for other released prisoners, while also showing higher sexual-offense rearrest when the outcome is another rape or sexual assault.",
        sourceIds: ["bjs1994SexOffenders", "bjs2019NineYear"],
      },
      {
        id: "p4-c2",
        type: "Comparative finding",
        claim:
          "Across major same-cohort official comparisons, several non-sex offense groups have materially higher overall rearrest rates than sex-offense groups.",
        meaning:
          "People released after sex offenses are not the highest-rearresting category when the measure is any new arrest.",
        evidence:
          "The 2019 BJS report found that 67% of rape/sexual-assault releases were arrested for any crime within nine years, compared with 84% of other released prisoners. BJS category comparisons and USSC federal data also show substantial variation across offense groups.",
        sourceIds: ["bjs2019NineYear", "bjs2012Releases", "ussc2010Recidivism"],
        boundary:
          "Use same-study comparisons where possible; offense groups differ by age, history, sentence, cohort, and release context.",
      },
      {
        id: "p4-c3",
        type: "Comparative finding",
        claim:
          "Sexual-offense history is associated with elevated relative risk of later detected sexual offending, while most released sex-offense groups in these official cohorts were not rearrested for another sexual offense.",
        meaning:
          "A group can have higher relative risk and still have a minority absolute rate. Both facts matter.",
        evidence:
          "The BJS nine-year follow-up reported that released sex offenders were more likely than other released prisoners to be arrested for rape or sexual assault, while the absolute sexual rearrest rate was 7.7% over nine years in the 2005 cohort.",
        sourceIds: ["bjs2019NineYear", "bjs1994SexOffenders"],
        boundary:
          "Relative elevation and absolute prevalence answer different questions; rearrest is detected official-system behavior, not all offending.",
      },
      {
        id: "p4-c4",
        type: "Comparative finding",
        claim:
          "Elevated same-type rearrest among people with prior sexual offenses should be understood partly as offense specialization, a broader criminal-recidivism pattern found across many offense categories.",
        meaning:
          "Repeat-offense concentration is not unique to sexual offending, even though sexual-offense specialization can be pronounced.",
        evidence:
          "BJS’s same-offense specialization table found elevated same-type rearrest likelihood across many offense categories, including homicide, rape, other sexual assault, robbery, assault, burglary, theft, fraud, drug, and public-order offenses.",
        sourceIds: ["bjs1994Specialization", "bjs2012Releases"],
        boundary:
          "The magnitude of specialization differs by offense, category definitions, and base rates; same-type relative likelihood is not the same as absolute recidivism probability.",
      },
    ],
  },
  {
    id: "position-5",
    number: "5",
    title: "Punitive in practice",
    subtitle:
      "Publication-safe claims distinguishing legal classification from empirical and lived effects.",
    position: "Registries are punitive in practice, not administrative in nature.",
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
          "Public exposure, recurring reporting duties, movement and housing limits, employment barriers, and long-duration public status make registry systems function as punishment for many people after sentence completion.",
        meaning:
          "For the person living under the system, the punishment does not necessarily end when the sentence ends.",
        evidence:
          "The claim is a SOLAR synthesis grounded in documented reintegration burdens, residence-restriction housing effects, administrative demands, public-notification consequences, and modern constitutional litigation over punitive effects.",
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
    id: "position-6",
    number: "6",
    title: "One-size-fits-all registry laws are flawed",
    subtitle:
      "Publication-safe claims about heterogeneity, offense labels, age, time offense-free, assessment tools, treatment, and calibration.",
    position: "One-size-fits-all registry laws are fundamentally flawed.",
    claims: [
      {
        id: "p6-c1",
        type: "Empirical finding",
        claim:
          "An offense label is not a validated measure of an individual’s current risk.",
        meaning:
          "Knowing what someone was convicted of does not tell you, by itself, how likely that person is to offend again.",
        evidence:
          "Research documents substantial heterogeneity by prior offense history, age, time offense-free, criminal history, CSEM versus contact offense profile, and tool population fit. Major comparator datasets show wide variation inside and across offense categories.",
        sourceIds: [
          "bjs2019NineYear",
          "ussc2010Recidivism",
          "usscCsem",
          "hansonSimpleQuestion",
        ],
      },
      {
        id: "p6-c2",
        type: "Empirical finding",
        claim:
          "Risk is dynamic across the life course: age and time offense-free materially change empirically observed risk.",
        meaning:
          "Risk is not frozen forever at the moment of conviction.",
        evidence:
          "Age, desistance, Static-99R age revisions, and long-term follow-up evidence support the conclusion that risk changes over time and should not be treated as a permanent category label.",
        sourceIds: [
          "hansonSimpleQuestion",
          "ussc2010Recidivism",
          "static99Coding",
          "static99Workbook",
        ],
        boundary:
          "Age lowers average risk; it does not eliminate risk for every individual.",
      },
      {
        id: "p6-c3",
        type: "Empirical finding",
        claim:
          "Validated actuarial methods generally outperform unstructured professional judgment in predicting sexual recidivism.",
        meaning:
          "Risk decisions should not be based only on fear, offense title, or a professional gut feeling.",
        evidence:
          "Babchishin, Hanson, and Helmus’s meta-analysis found stronger predictive performance for actuarial approaches than for unstructured professional judgment. Hanson and Morton-Bourgon’s updated predictor work likewise supports structured, empirically grounded assessment rather than intuition alone.",
        sourceIds: ["babchishinHanson", "hansonMortonBourgon"],
        boundary:
          "Structured methods are not perfect prediction; usefulness depends on the population, tool purpose, and decision being made.",
      },
      {
        id: "p6-c4",
        type: "Empirical finding",
        claim:
          "PCRA results should not be treated as if they directly answer a specialized sexual-recidivism question.",
        meaning:
          "A general federal risk/needs score is not automatically a sex-offense risk score.",
        evidence:
          "PCRA was built for general federal post-conviction risk and intervention needs. In the federal CSEM validation work, PCRA showed only modest discrimination for five-year sexual rearrest.",
        sourceIds: ["pcrA", "cohenCsem"],
        boundary:
          "General-risk tools can correlate with specialized outcomes; correlation does not transform their validated primary purpose.",
      },
      {
        id: "p6-c5",
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
        id: "p6-c6",
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
        id: "p6-c7",
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
    id: "position-7",
    number: "7",
    title: "Permanent underclass",
    subtitle:
      "Publication-safe SOLAR synthesis claims about cumulative reintegration barriers and long-duration public status.",
    position: "Registries create a permanent underclass.",
    claims: [
      {
        id: "p7-c1",
        type: "SOLAR conclusion",
        claim:
          "Registry systems create a permanent underclass when public status, legal restrictions, private exclusion, and administrative demands combine to block ordinary reintegration.",
        meaning:
          "The registry can follow a person into housing, work, family life, community participation, and public identity long after the court sentence is over.",
        evidence:
          "This is a SOLAR synthesis grounded in documented housing loss, employment exclusion, psychological burden, community-notification effects, residence restrictions, and recurring administrative demands.",
        sourceIds: ["levensonCotter", "lasherMcGrath", "zandbergenHart"],
      },
      {
        id: "p7-c2",
        type: "Empirical finding",
        claim:
          "Housing barriers are a central mechanism through which registry systems destabilize people and families.",
        meaning:
          "Housing is not a side issue. Without a lawful, stable place to live, nearly every other part of reentry becomes harder.",
        evidence:
          "Zandbergen and Hart’s GIS study shows how exclusion zones can sharply reduce lawful housing supply. Levenson and Cotter and Lasher and McGrath document housing exclusion and residential disruption associated with notification and registry exposure.",
        sourceIds: ["zandbergenHart", "levensonCotter", "lasherMcGrath"],
        boundary:
          "Housing effects vary by local law, geography, landlord practice, supervision rules, and family resources.",
      },
      {
        id: "p7-c3",
        type: "Empirical finding",
        claim:
          "Employment and social exclusion are documented registry consequences, not speculative complaints.",
        meaning:
          "People on registries often face work and community barriers because their public status invites exclusion.",
        evidence:
          "The reintegration evidence includes job loss, job exclusion, social isolation, threats, and psychological effects associated with public registry and notification exposure.",
        sourceIds: ["levensonCotter", "lasherMcGrath"],
      },
      {
        id: "p7-c4",
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
    id: "position-8",
    number: "8",
    title: "Measurable outcomes, not presumed benefits",
    subtitle:
      "Publication-safe methodological claims that keep policy claims tied to evidence, mechanisms, and actual outcomes.",
    position:
      "Public-safety policy should be judged by measurable outcomes, not presumed benefits.",
    claims: [
      {
        id: "p8-c1",
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
        id: "p8-c2",
        type: "Policy inference",
        claim:
          "Visibility is not prevention, and the existence of a database is not proof of protective action.",
        meaning:
          "A public list only matters if it is accurate, understood, used, and connected to behavior that actually reduces harm.",
        evidence:
          "Anderson and Sample’s public-use study, Harris and colleagues’ implementation research, and Zgoba and Mitchell’s broad SORN synthesis all support separating availability, use, protective behavior, and crime reduction.",
        sourceIds: ["andersonSample", "harrisLawEnforcement", "zgobaMitchell"],
      },
      {
        id: "p8-c3",
        type: "Policy inference",
        claim:
          "Practitioner belief that SORN is useful is evidence about practitioner perception, not direct evidence that SORN reduces offending.",
        meaning:
          "Survey answers can tell us what administrators think. They cannot, by themselves, prove crime prevention.",
        evidence:
          "Cubellis, Walfield, and Harris document mixed law-enforcement views of SORN, while Harris and colleagues identify operational and implementation concerns. Those studies support claims about practitioner perception and administration, not direct crime-rate effects.",
        sourceIds: ["cubellis", "harrisLawEnforcement"],
      },
      {
        id: "p8-c4",
        type: "Policy inference",
        claim:
          "Registry policy should be evaluated component by component rather than as one indivisible package.",
        meaning:
          "Registration, public notification, verification, residence restrictions, and supervision can have different evidence, mechanisms, and burdens.",
        evidence:
          "Prescott and Rockoff explicitly separate registration from notification, Zgoba and Mitchell synthesize broader SORN evidence, and Duwe and Donnay evaluate Minnesota’s selected Level 3 community-notification program. Those studies illustrate why evidence about one component should not be generalized across the whole policy package.",
        sourceIds: ["prescottRockoff", "zgobaMitchell", "minnesotaNotification"],
      },
      {
        id: "p8-c5",
        type: "Policy inference",
        claim:
          "Where demonstrated public-safety gains are null, narrow, or inconsistent, financial, administrative, and reintegration burdens become central to whether a registry policy is proportionate.",
        meaning:
          "Costs and harms matter most when the promised benefit is weak or unproven.",
        evidence:
          "Zgoba and Mitchell’s pooled null finding, New Jersey cost evidence, reintegration burdens, residence-restriction housing effects, and law-enforcement implementation concerns together support a benefit-versus-burden framework.",
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
        id: "p8-c6",
        type: "Empirical finding",
        claim:
          "Any recidivism claim that omits its measurement basis is incomplete.",
        meaning:
          "Rearrest, charge, conviction, reincarceration, self-report, and actual offending are not interchangeable.",
        evidence:
          "Outcome measurement is foundational. The same population can produce different rates depending on the endpoint, follow-up period, source of data, and subgroup definition.",
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

const inlineSourcePhrases: Partial<Record<string, string[]>> = {
  zgobaMitchell: ["Zgoba and Mitchell", "Zgoba and Mitchell’s"],
  prescottRockoff: ["Prescott and Rockoff", "Prescott and Rockoff’s"],
  andersonSample: ["Anderson and Sample", "Anderson and Sample’s"],
  harrisLawEnforcement: ["Harris and colleagues", "Harris and colleagues’"],
  cubellis: ["Cubellis, Walfield, and Harris", "Cubellis and colleagues"],
  levensonCotter: ["Levenson and Cotter"],
  lasherMcGrath: ["Lasher and McGrath", "Lasher and McGrath’s"],
  zandbergenHart: ["Zandbergen and Hart", "Zandbergen and Hart’s"],
  bonnarKidd: ["Bonnar-Kidd"],
  sandlerFreemanSocia: ["New York time-series study"],
  letourneauAdult: ["South Carolina adult-recidivism research"],
  njMeganLaw: ["NIJ-funded New Jersey evaluation", "New Jersey NIJ evaluation"],
  bjsChildKnown: [
    "BJS’s report on sexual assault of young children reported to law enforcement",
    "BJS’s known-perpetrator data",
  ],
  bjs1994SexOffenders: ["1994", "BJS’s 1994 release study"],
  bjs2019NineYear: ["2019 BJS report", "2005", "BJS nine-year follow-up", "BJS nine-year 2005 release study"],
  bjs1994Specialization: ["BJS’s same-offense specialization table"],
  hansonBussiere: ["longer-term research"],
  babchishinHanson: ["Babchishin, Hanson, and Helmus’s meta-analysis"],
  hansonMortonBourgon: ["Hanson and Morton-Bourgon’s updated predictor work"],
  pcrA: ["PCRA"],
  static99Workbook: ["Static-99R norms"],
  cportValidation: ["CPORT validation"],
  stable2007: ["STABLE-2007"],
  sotips: ["SOTIPS"],
  vrsSo: ["VRS-SO"],
  treatmentMeta: ["treatment meta-analysis"],
  minnesotaNotification: ["Duwe and Donnay"],
  smithDoe: ["Smith v. Doe"],
  doesSnyder: ["Does #1–5 v. Snyder"],
};

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

function renderEvidence(evidence: string, sourceIds: string[]): React.ReactNode {
  let parts: Array<{ text: string; sourceId?: string }> = [{ text: evidence }];

  sourceIds.forEach((sourceId) => {
    const phrases = inlineSourcePhrases[sourceId] ?? [];

    for (const phrase of phrases) {
      let linked = false;

      parts = parts.flatMap((part) => {
        if (linked || part.sourceId) {
          return [part];
        }

        const index = part.text.indexOf(phrase);
        if (index === -1) {
          return [part];
        }

        linked = true;
        const before = part.text.slice(0, index);
        const after = part.text.slice(index + phrase.length);

        return [
          ...(before ? [{ text: before }] : []),
          { text: phrase, sourceId },
          ...(after ? [{ text: after }] : []),
        ];
      });

      if (linked) {
        break;
      }
    }
  });

  return (
    <>
      {parts.map((part, index) => {
        if (!part.sourceId) {
          return <React.Fragment key={`text-${index}`}>{part.text}</React.Fragment>;
        }

        const source = sourceLinks[part.sourceId];
        if (!source) {
          return <React.Fragment key={`text-${index}`}>{part.text}</React.Fragment>;
        }

        return (
          <a
            key={`${part.sourceId}-${index}`}
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-900 hover:decoration-blue-500"
          >
            {part.text}
          </a>
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
            This is a curated research resource rather than an exhaustive
            literature review. It presents claims SOLAR believes are strongly
            supported by the available evidence, with direct source trails and
            narrowly stated limits where they materially affect the claim.
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
                          {renderEvidence(claim.evidence, claim.sourceIds)}
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
          number="9"
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
          number="10"
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
          number="11"
          title="Source list"
          subtitle="Direct source trail for the claims above."
        />

        <GuideSectionCard>
          <SourceList
            note="Current through August 25, 2026. Primary-source links were reviewed during drafting; publisher access and URLs may change over time."
            sources={sourceListItems}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}
