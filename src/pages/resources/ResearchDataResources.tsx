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
  SoftDivider,
  QuickStartPanel,
  GuideChecklist,
  ScriptBox,
  OverviewCards,
  ResourceLinkGrid,
} from "../../components/solar";

type SourceId = `SE${string}`;

type SourceRecord = {
  shortTitle: string;
  title: string;
  organization: string;
  type: string;
  href: string;
  usefulFor: string;
};

const sourceCatalog: Record<SourceId, SourceRecord> = {
  SE01: {
    shortTitle: "BJS — Sex-Offender Recidivism",
    title: "Recidivism of Sex Offenders Released from Prison in 1994",
    organization: "Bureau of Justice Statistics",
    type: "Official data / government report",
    href: "https://bjs.ojp.gov/content/pub/pdf/rsorp94.pdf",
    usefulFor:
      "Comparative rearrest and reconviction data, same-type recidivism, follow-up-period limits, and the distinction between detected recidivism and total offending.",
  },
  SE02: {
    shortTitle: "SMART — Adult Sexual Recidivism",
    title: "Recidivism of Adult Sexual Offenders",
    organization: "SMART Office, U.S. Department of Justice",
    type: "Government research brief",
    href: "https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf",
    usefulFor:
      "A broad federal synthesis of sexual recidivism research, including measurement limits, subgroup differences, follow-up periods, and declining risk over time.",
  },
  SE03: {
    shortTitle: "25-Year SORN Meta-Analysis",
    title:
      "The Effectiveness of Sex Offender Registration and Notification: A Meta-Analysis of 25 Years of Findings",
    organization: "Journal of Experimental Criminology",
    type: "Peer-reviewed meta-analysis",
    href: "https://link.springer.com/article/10.1007/s11292-021-09480-z",
    usefulFor:
      "A major peer-reviewed synthesis of 25 years of research on whether broad registration and notification policies have demonstrated an overall recidivism benefit.",
  },
  SE04: {
    shortTitle: "Prescott & Rockoff — SORN Effects",
    title: "Do Sex Offender Registration and Notification Laws Affect Criminal Behavior?",
    organization: "NBER / Journal of Law and Economics",
    type: "Peer-reviewed study / working paper",
    href: "https://www.nber.org/papers/w13803",
    usefulFor:
      "Separating the possible effects of law-enforcement registration from public notification instead of treating all registry policies as one intervention.",
  },
  SE05: {
    shortTitle: "NIJ-Funded — South Carolina SORN Evaluation",
    title:
      "Evaluating the Effectiveness of Sex Offender Registration and Notification Policies for Reducing Sexual Violence against Women",
    organization: "University of South Carolina research team / NIJ-funded",
    type: "NIJ-funded research report",
    href: "https://www.ojp.gov/pdffiles1/nij/grants/231989.pdf",
    usefulFor:
      "A South Carolina evaluation of SORN policy effects on sexual violence, recidivism, deterrence, and unintended consequences; useful as one jurisdiction-specific contribution to the broader SORN evidence base.",
  },
  SE06: {
    shortTitle: "SMART/LOC — Registry Collateral Effects",
    title:
      "Sex Offender Registration and Notification Policies: Summary and Assessment of Research on Claimed Impacts to Registered Offenders",
    organization: "Federal Research Division, Library of Congress, for the SMART Office",
    type: "Government evidence review",
    href: "https://smart.ojp.gov/media/document/6346",
    usefulFor:
      "A federal evidence review of housing, employment, wellbeing, family burdens, and the methodological limits of research on claimed collateral consequences of registration and notification policies.",
  },
  SE07: {
    shortTitle: "Levenson — Family Collateral Harm",
    title: "Collateral Damage: Family Members of Registered Sex Offenders",
    organization: "Peer-reviewed research",
    type: "Peer-reviewed study",
    href: "https://safervirginia.org/documents/Collateral%20Damage%20-%20Family%20Members%20of%20Registered%20Sex%20Offenders%20Levenson.pdf",
    usefulFor:
      "Documenting spillover consequences experienced by spouses, children, and other family members of people required to register.",
  },
  SE08: {
    shortTitle: "Residence Restrictions & Transience",
    title: "Wherefor Art Thou? Transient Sex Offenders and Residence Restrictions",
    organization: "Criminal Justice Policy Review",
    type: "Peer-reviewed study",
    href: "https://www.fl-counties.com/wp-content/uploads/2022/09/WhereforartThouCJPR2013.pdf",
    usefulFor:
      "Examining how residence restrictions can interact with housing availability, transience, and community stability.",
  },
  SE09: {
    shortTitle: "Colorado SOMB — Residence-Restriction Safety",
    title:
      "Report by the Sex Offender Management Board (SOMB) on Safety Issues Raised by Living Arrangements for and Locations of Sex Offenders in the Community (2004)",
    organization: "Colorado Sex Offender Management Board",
    type: "State government report",
    href: "https://dcj.colorado.gov/dcj-offices/ors/doc-rpt",
    usefulFor:
      "Official Colorado policy analysis of safety issues surrounding sex-offender living arrangements and locations, including concerns about residence restrictions and community stability.",
  },
  SE10: {
    shortTitle: "Human Rights Watch — No Easy Answers",
    title: "No Easy Answers: Sex Offender Laws in the US",
    organization: "Human Rights Watch",
    type: "Investigative / policy report",
    href: "https://www.hrw.org/report/2007/09/11/no-easy-answers/sex-offender-laws-us",
    usefulFor:
      "Historical and policy context on registration, notification, exclusion, collateral consequences, and the expansion of registry laws.",
  },
  SE11: {
    shortTitle: "BJS — Sexual Assault of Young Children",
    title: "Sexual Assault of Young Children as Reported to Law Enforcement",
    organization: "Bureau of Justice Statistics",
    type: "Official data / government report",
    href: "https://bjs.ojp.gov/content/pub/pdf/saycrle.pdf",
    usefulFor:
      "Official data showing that reported sexual assaults against young children overwhelmingly involve family members or acquaintances rather than strangers.",
  },
  SE12: {
    shortTitle: "OJJDP — Child Maltreatment Perpetrators",
    title: "Child Maltreatment Perpetrators — Statistical Briefing Book",
    organization: "Office of Juvenile Justice and Delinquency Prevention",
    type: "Official data explainer",
    href: "https://ojjdp.ojp.gov/statistical-briefing-book/victims/faqs/qa02111",
    usefulFor:
      "Understanding the family, caregiver, and known-person context in which much child maltreatment occurs.",
  },
  SE13: {
    shortTitle: "ED — Educator Sexual Misconduct",
    title: "Educator Sexual Misconduct: A Synthesis of Existing Literature",
    organization: "U.S. Department of Education",
    type: "Government research synthesis",
    href: "https://www.ed.gov/research/educator-sexual-misconduct-a-synthesis-of-existing-literature",
    usefulFor:
      "Trusted-access and institutional-prevention framing in schools, including authority, access, reporting, and safeguarding failures.",
  },
  SE14: {
    shortTitle: "DOJ OIG — Larry Nassar Investigation",
    title: "Review of the FBI's Handling of Allegations Against Larry Nassar",
    organization: "U.S. Department of Justice Office of Inspector General",
    type: "Inspector General report",
    href: "https://oig.justice.gov/sites/default/files/reports/21-093.pdf",
    usefulFor:
      "A documented case study of institutional failure after credible abuse allegations and the limits of relying on public registries for prevention.",
  },
  SE15: {
    shortTitle: "CDC — Firearm Injury & Death",
    title: "Firearm Injury and Death Facts",
    organization: "Centers for Disease Control and Prevention",
    type: "Official data explainer",
    href: "https://www.cdc.gov/firearm-violence/data-research/facts-stats/index.html",
    usefulFor:
      "Official public-health data for comparative analysis of how another serious source of harm is measured and addressed; SOLAR uses it as context when examining differences in public-safety policy responses.",
  },
  SE16: {
    shortTitle: "NHTSA — Impaired-Driving Prevention",
    title: "Report to Congress: Advanced Impaired Driving Prevention Technology",
    organization: "National Highway Traffic Safety Administration",
    type: "Government report",
    href: "https://www.nhtsa.gov/sites/nhtsa.gov/files/2026-03/Report-to-Congress-Advanced-Impaired-Driving-Prevention-Technology.pdf",
    usefulFor:
      "Documenting prevention-and-technology approaches to impaired driving; SOLAR uses it as comparative policy context rather than as evidence that different harms require identical responses.",
  },
  SE17: {
    shortTitle: "BJS — Domestic Violence",
    title: "Nonfatal Domestic Violence, 2003–2012",
    organization: "Bureau of Justice Statistics",
    type: "Official data / government report",
    href: "https://bjs.ojp.gov/content/pub/pdf/ndv0312.pdf",
    usefulFor:
      "Official victimization data for comparing how another serious, often underreported form of interpersonal harm is measured and addressed.",
  },
  SE18: {
    shortTitle: "Smith v. Doe",
    title: "Smith v. Doe, 538 U.S. 84 (2003)",
    organization: "U.S. Supreme Court",
    type: "Supreme Court decision",
    href: "https://supreme.justia.com/cases/federal/us/538/84/",
    usefulFor:
      "The central constitutional baseline for the Supreme Court's civil-regulatory treatment of Alaska's registry in ex post facto analysis.",
  },
  SE19: {
    shortTitle: "Packingham v. North Carolina",
    title: "Packingham v. North Carolina, 582 U.S. 98 (2017)",
    organization: "U.S. Supreme Court",
    type: "Supreme Court decision",
    href: "https://supreme.justia.com/cases/federal/us/582/15-1194/",
    usefulFor:
      "Showing that people with convictions retain constitutional rights and that broad registry-related restrictions can violate the First Amendment.",
  },
  SE20: {
    shortTitle: "GAO — SORNA Implementation",
    title: "Sex Offender Registration and Notification Act: Jurisdictions Face Challenges to Implementing the Act",
    organization: "U.S. Government Accountability Office",
    type: "Government report",
    href: "https://www.gao.gov/assets/gao-13-211.pdf",
    usefulFor:
      "Implementation history, jurisdictional challenges, claimed benefits, burdens, and practical consequences of SORNA compliance.",
  },
  SE21: {
    shortTitle: "ATSA — Evidence-Based Registry Reform",
    title: "Registration and Community Notification of Adults Convicted of a Sexual Crime: Recommendations for Evidence-Based Reform",
    organization: "Association for the Treatment and Prevention of Sexual Abuse",
    type: "Expert policy recommendations",
    href: "https://members.atsa.com/learn/Details/report-registration-and-community-notification-of-adults-convicted-of-a-sexual-crime-recommendations-for-evidence-based-reform-194317",
    usefulFor:
      "Translating research on risk, treatment, desistance, and reintegration into concrete registry-reform principles.",
  },
  SE22: {
    shortTitle: "Hanson et al. — Risk Declines Over Time",
    title: "High-Risk Sex Offenders May Not Be High Risk Forever",
    organization: "Peer-reviewed research",
    type: "Peer-reviewed study / PubMed index",
    href: "https://pubmed.ncbi.nlm.nih.gov/24664250/",
    usefulFor:
      "Evidence that recidivism risk can decline substantially with sustained offense-free time in the community.",
  },
  SE23: {
    shortTitle: "SMART — Treatment Effectiveness",
    title: "The Effectiveness of Treatment for Adult Sexual Offenders",
    organization: "SMART Office, U.S. Department of Justice",
    type: "Government research brief",
    href: "https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/theeffectivenessoftreatmentforadultsexualoffenders.pdf",
    usefulFor:
      "A federal synthesis connecting treatment evidence to risk reduction, rehabilitation, and prevention.",
  },
  SE24: {
    shortTitle: "Housing Instability Among Veterans",
    title:
      "Association Between Registered Sex Offender Status and Risk of Housing Instability and Homelessness among Veterans",
    organization: "Peer-reviewed research",
    type: "Peer-reviewed study / PubMed index",
    href: "https://pubmed.ncbi.nlm.nih.gov/32960141/",
    usefulFor:
      "Quantitative evidence on the association between registered-sex-offender status and housing instability or homelessness in a large veteran population.",
  },
  SE25: {
    shortTitle: "NSVRC — SART Prevention Toolkit",
    title: "Sexual Assault Response Team Toolkit, Section 7.4",
    organization: "National Sexual Violence Resource Center",
    type: "Victim-prevention / nonprofit resource",
    href: "https://www.nsvrc.org/sarts/toolkit/7-4/",
    usefulFor:
      "Connecting registry-policy evidence to broader prevention, survivor response, multidisciplinary practice, and community safety.",
  },
  SE26: {
    shortTitle: "The Marshall Project — Banished",
    title: "Banished",
    organization: "The Marshall Project",
    type: "Investigative media / illustrative case",
    href: "https://www.themarshallproject.org/2018/10/03/banished",
    usefulFor:
      "A concrete Miami-Dade illustration of how layered residence restrictions can produce displacement and homelessness.",
  },
  SE27: {
    shortTitle: "SMART — 2025 Case Law Summary",
    title:
      "Sex Offender Registration and Notification in the United States: Case Law Summary — July 2025",
    organization: "SMART Office, U.S. Department of Justice",
    type: "Government legal summary",
    href: "https://smart.ojp.gov/sorna/current-law/case-law/introduction",
    usefulFor:
      "Issue-spotting and orientation to registry litigation, constitutional doctrine, and lower-court developments current through July 2025.",
  },
  SE28: {
    shortTitle: "Banishment by a Thousand Laws",
    title: "Banishment by a Thousand Laws: Residency Restrictions on Sex Offenders",
    organization: "Washington University Law Review",
    type: "Law review article",
    href: "https://openscholarship.wustl.edu/law_lawreview/vol85/iss1/3/",
    usefulFor:
      "Legal and policy analysis of residence restrictions, exclusion zones, cumulative burdens, and modern banishment theory.",
  },
  SE29: {
    shortTitle: "USSC — Non-Production Study (2021)",
    title: "Federal Sentencing of Child Pornography: Non-Production Offenses",
    organization: "U.S. Sentencing Commission",
    type: "Government research report",
    href: "https://www.ussc.gov/research/research-reports/federal-sentencing-child-pornography-non-production-offenses",
    usefulFor:
      "Federal non-production recidivism, including the finding that 4.3% of the studied cohort was rearrested for a sex offense within three years.",
  },
  SE30: {
    shortTitle: "USSC — CP Recidivism Study (2012)",
    title:
      "Report to the Congress: Federal Child Pornography Offenses — Chapter 11: Recidivism by Child Pornography Offenders",
    organization: "U.S. Sentencing Commission",
    type: "Government research report",
    href: "https://www.ussc.gov/sites/default/files/pdf/news/congressional-testimony-and-reports/sex-offense-topics/201212-federal-child-pornography-offenses/Chapter_11.pdf",
    usefulFor:
      "Longer-follow-up federal non-production recidivism data, including known sexual and contact-sexual recidivism and comparison with contact-offender cohorts.",
  },
};

const evidenceThemes = [
  {
    id: "registry-efficacy",
    title: "Registry efficacy and recidivism",
    icon: "📊",
    anchorIds: ["SE01", "SE03", "SE04", "SE05", "SE29", "SE30"] as SourceId[],
    supports:
      "Broad registration and notification systems have not demonstrated a clear overall reduction in sexual recidivism across the research base, and federal non-production studies show comparatively low observed sexual-recidivism rates in that subgroup.",
    doesNotProve:
      "This does not mean every registry function is useless, nor do rearrest figures measure every undetected offense.",
    avoid: "“Registries have no impact on public safety.”",
    safer:
      "Research has not shown a clear overall recidivism benefit from broad SORN policies, and federal non-production studies report comparatively low observed sexual recidivism.",
    whyMatters:
      "This evidence helps separate empirical risk from the assumption that people convicted of sexual offenses are uniformly or exceptionally likely to reoffend.",
  },
  {
    id: "known-perpetrators",
    title: "Known perpetrators and prevention reality",
    icon: "🧭",
    anchorIds: ["SE11", "SE12", "SE13", "SE25"] as SourceId[],
    supports:
      "Official and prevention-oriented sources show that most sexual harms against children involve someone the child knows, including family members, acquaintances, caregivers, or trusted authority figures.",
    doesNotProve:
      "This does not mean stranger-perpetrated abuse never happens, should be ignored, or cannot be serious.",
    avoid: "“Stranger danger is a myth.”",
    safer:
      "Because most sexual harms against children involve known, trusted, or family-connected people, public registries are a limited tool for primary prevention.",
    whyMatters:
      "Prevention policy has to address trusted access, family and caregiving contexts, reporting systems, institutional accountability, and early intervention—not only public notification.",
  },
  {
    id: "collateral-consequences",
    title: "Collateral consequences and family harm",
    icon: "🏠",
    anchorIds: ["SE06", "SE07", "SE08", "SE09", "SE24", "SE26"] as SourceId[],
    supports:
      "Registry requirements and related restrictions are linked to housing instability, employment barriers, stigma, family spillover harm, and reintegration problems.",
    doesNotProve:
      "This does not prove every housing, employment, or family hardship is caused only by the registry rather than conviction, supervision, poverty, or other systems.",
    avoid: "“Registry laws directly cause homelessness and job loss.”",
    safer:
      "Research suggests registry requirements and restrictions can destabilize housing, employment, and family support systems that are necessary for safe reintegration.",
    whyMatters:
      "Stable housing, work, family support, and community connection are public-safety factors, not side issues.",
  },
  {
    id: "punitive-effects",
    title: "Punitive effects and constitutional concerns",
    icon: "⚖️",
    anchorIds: ["SE10", "SE18", "SE19", "SE20", "SE27", "SE28"] as SourceId[],
    supports:
      "Modern layered restrictions can burden speech, movement, housing, association, and community participation in ways that raise serious punitive-effect and constitutional concerns.",
    doesNotProve:
      "This does not prove every current registry law is automatically unconstitutional. Smith v. Doe remains a central precedent.",
    avoid: "“The sex offense registry is unconstitutional punishment.”",
    safer:
      "Although registries have often been labeled civil, modern restrictions can impose punishment-like burdens and raise serious constitutional concerns.",
    whyMatters:
      "Legal labels matter, but so do lived burdens, modern restrictions, and constitutional limits.",
  },
  {
    id: "desistance",
    title: "Desistance, treatment, and individualized reform",
    icon: "🌱",
    anchorIds: ["SE02", "SE21", "SE22", "SE23", "SE29", "SE30"] as SourceId[],
    supports:
      "Risk varies by person and context, sexual recidivism risk generally declines with sustained offense-free time, and meaningful subgroup differences matter.",
    doesNotProve:
      "This does not prove risk reaches zero, that everyone presents the same risk, or that any one tool perfectly predicts future behavior.",
    avoid: "“High-risk offenders are no longer a threat after a few years.”",
    safer:
      "Risk changes over time and differs across subgroups, which supports individualized assessment, treatment, and review rather than permanent status alone.",
    whyMatters:
      "One-size-fits-all policy can miss both genuine risk and genuine change.",
  },
  {
    id: "comparative-safety",
    title: "Comparative public-safety logic",
    icon: "🧩",
    anchorIds: ["SE01", "SE12", "SE15", "SE16", "SE17"] as SourceId[],
    supports:
      "Comparative data and policy examples show that serious harms can have different recidivism patterns and are often addressed through prevention, regulation, enforcement, technology, treatment, or services rather than permanent public identity branding.",
    doesNotProve:
      "This does not mean different crimes are identical harms or require identical responses.",
    avoid: "“Drunk driving is more dangerous than sexual offending.”",
    safer:
      "Comparisons can reveal whether policy responses are proportionate to observed risk and whether permanent public status is being used selectively.",
    whyMatters:
      "Comparative evidence helps test intuitions against data rather than treating one category of offense as analytically unique by assumption.",
  },
  {
    id: "institutional-responsibility",
    title: "Institutional responsibility and trusted access",
    icon: "🏛️",
    anchorIds: ["SE13", "SE14", "SE25"] as SourceId[],
    supports:
      "Abuse can continue when institutions fail to act on warnings, reports, grooming behavior, or trusted-access risks.",
    doesNotProve:
      "This does not prove institutions are the sole or primary cause of sexual abuse, or that one institutional scandal establishes a universal prevalence rate.",
    avoid: "“Institutions are the primary cause of sexual abuse.”",
    safer:
      "Effective prevention requires institutional accountability because public registries cannot substitute for action when warning signs arise inside trusted systems.",
    whyMatters:
      "Schools, sports programs, medical systems, churches, youth organizations, and other institutions need prevention systems that work before and after criminal prosecution.",
  },
] as const;

const anchorSourceIds: SourceId[] = [
  "SE03",
  "SE01",
  "SE29",
  "SE30",
  "SE04",
  "SE11",
  "SE18",
  "SE19",
  "SE22",
  "SE06",
  "SE21",
  "SE14",
];

const carefulConclusions = [
  {
    claim:
      "Broad public registration and notification systems have not shown a clear overall recidivism benefit.",
    ids: ["SE03", "SE04", "SE05"] as SourceId[],
  },
  {
    claim:
      "Sexual recidivism is often lower than public belief, but risk varies by person, subgroup, measurement, and follow-up period.",
    ids: ["SE01", "SE02", "SE22"] as SourceId[],
  },
  {
    claim:
      "Federal studies of non-production child-pornography offenders have found comparatively low observed rates of subsequent sexual offending, including low rates of later contact sexual offending; these figures measure known or detected recidivism rather than every undetected offense.",
    ids: ["SE29", "SE30"] as SourceId[],
  },
  {
    claim:
      "Most sexual harms against children involve someone known, trusted, or family-connected—not an unknown stranger.",
    ids: ["SE11", "SE12", "SE13"] as SourceId[],
  },
  {
    claim:
      "Public registries are limited tools for primary prevention because they identify people already detected and convicted.",
    ids: ["SE05", "SE11", "SE25"] as SourceId[],
  },
  {
    claim:
      "Registry requirements and restrictions can destabilize housing, employment, family support, and reintegration.",
    ids: ["SE06", "SE07", "SE08", "SE09", "SE24"] as SourceId[],
  },
  {
    claim:
      "Modern registry systems can impose punishment-like burdens even when legally labeled civil.",
    ids: ["SE18", "SE19", "SE20", "SE27", "SE28"] as SourceId[],
  },
  {
    claim:
      "Risk changes over time, and policy should include individualized assessment, treatment, and review.",
    ids: ["SE02", "SE21", "SE22", "SE23"] as SourceId[],
  },
  {
    claim:
      "Prevention requires institutional accountability, not just public lists.",
    ids: ["SE13", "SE14", "SE25"] as SourceId[],
  },
] as const;

const commonOverstatements = [
  {
    avoid: "Registries do nothing.",
    better:
      "Broad registration and notification policies have not demonstrated a clear overall recidivism benefit.",
  },
  {
    avoid: "All registries are unconstitutional.",
    better:
      "Modern registry restrictions raise serious constitutional concerns and may operate punitively in practice, even though Smith v. Doe remains a central precedent.",
  },
  {
    avoid: "Registries directly cause homelessness and job loss.",
    better:
      "Registry requirements and restrictions are linked to housing instability, employment barriers, and reintegration harm.",
  },
  {
    avoid: "95% of sexual crimes are committed by first-time offenders.",
    better:
      "Do not use the specific 95% figure unless the primary source is fully verified. Safer language: many sexual offenses are committed by people not already listed on a public registry.",
  },
  {
    avoid: "Stranger danger is a myth.",
    better:
      "Stranger-perpetrated abuse exists, but official data show that most sexual harms against children involve known, trusted, or family-connected people.",
  },
  {
    avoid: "A rearrest rate is the true reoffense rate.",
    better:
      "Rearrest measures detected recidivism. Use it carefully, and distinguish observed rates from every offense that may have occurred undetected.",
  },
] as const;

const sourceGroups: { title: string; ids: SourceId[] }[] = [
  {
    title: "Recidivism and SORN effectiveness",
    ids: ["SE01", "SE02", "SE03", "SE04", "SE05", "SE29", "SE30"],
  },
  {
    title: "Child safety and known perpetrators",
    ids: ["SE11", "SE12", "SE13", "SE25"],
  },
  {
    title: "Family harm, housing, and collateral consequences",
    ids: ["SE06", "SE07", "SE08", "SE09", "SE10", "SE24", "SE26"],
  },
  {
    title: "Constitutional law and punitive effects",
    ids: ["SE18", "SE19", "SE20", "SE27", "SE28"],
  },
  {
    title: "Desistance, treatment, and evidence-based reform",
    ids: ["SE21", "SE22", "SE23"],
  },
  {
    title: "Comparative public safety",
    ids: ["SE15", "SE16", "SE17"],
  },
  {
    title: "Institutional responsibility",
    ids: ["SE13", "SE14", "SE25"],
  },
];

const renderSourceLinks = (ids: readonly SourceId[]) => (
  <div className="flex flex-wrap gap-2">
    {ids.map((id) => (
      <a
        key={id}
        href={sourceCatalog[id].href}
        target="_blank"
        rel="noopener noreferrer"
        title={sourceCatalog[id].title}
        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-200 transition-colors"
      >
        <span className="text-slate-500">{id}</span> · {sourceCatalog[id].shortTitle}
      </a>
    ))}
  </div>
);

export default function ResearchDataResources(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Research & Data Resources | The SOLAR Project"
        description="A plain-language evidence map for understanding registry research, recidivism data, prevention, collateral consequences, constitutional concerns, and evidence-based reform."
        keywords="sex offense registry research, registry reform evidence, recidivism data, sex offender registration and notification, collateral consequences, prevention, SOLAR Project"
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
            Research & Data Resources
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A plain-language evidence map for understanding what research does
            and does not say about registries, public notification, recidivism,
            prevention, reentry, and public safety.
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
              href="#source-library"
              className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Jump to complete source library
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ShareBar />

        <GuideIntro title="Start here: how to read this guide" icon="🧭">
          <p>
            This guide is for anyone trying to understand what the evidence says
            about sex offense registries, public notification, recidivism,
            prevention, collateral consequences, constitutional concerns, and
            reentry.
          </p>
          <p>
            Strong advocacy does not require overstating the evidence. This
            guide does not argue that sexual harm is rare, harmless, or
            unimportant. It argues that public safety policy should be honest
            about what registries can and cannot do.
          </p>
          <p>
            Source IDs such as SE01 are retained for stable cross-reference, but
            every link now includes a reader-friendly source name so you can see
            what you are opening before you click.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="Three ways to use this guide"
          subtitle="Start with the question you are trying to answer."
          icon="📌"
          urgentActions={[
            <span key="claim">
              <strong>Understand the claim.</strong> Are you talking about
              recidivism, rearrest, reconviction, reoffense, prevention, legal
              burden, or reentry impact?
            </span>,
            <span key="source">
              <strong>Check the source type.</strong> Official data,
              peer-reviewed research, court decisions, expert recommendations,
              advocacy reports, and media examples do different jobs.
            </span>,
          ]}
          nextActions={[
            <span key="language">
              <strong>Use careful wording.</strong> Say what the evidence
              supports without turning one study into a universal rule.
            </span>,
            <span key="caveat">
              <strong>Look for the limit.</strong> Strong evidence still has
              boundaries. A good source also tells you what it does not prove.
            </span>,
          ]}
          reminder={
            <span>
              Evidence-based registry reform is not anti-victim. It is
              pro-prevention, pro-accountability, and pro-honesty.
            </span>
          }
        />

        <GuideCallout tone="research" icon="🔎" title="Measurement matters">
          <p>
            “Recidivism,” “rearrest,” “reconviction,” and “reoffense” are not
            interchangeable. Rearrest measures contact with law enforcement.
            Reconviction measures a later conviction. Reoffense is broader, but
            true reoffending is difficult to measure because many harms are not
            reported or detected.
          </p>
          <p>
            When reading a statistic, look for the measure, the population, the
            follow-up period, and whether the source is discussing detected
            events or all possible harm. Comparative findings can still be
            informative even when every category is imperfectly measured.
          </p>
        </GuideCallout>

        <GuideSectionHeader
          id="evidence-at-a-glance"
          number="1"
          title="What the evidence shows"
          subtitle="Seven recurring evidence themes, with named source links instead of anonymous source-number pills."
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Theme 1",
              title: "Registry efficacy",
              icon: "📊",
              tone: "research",
              description:
                "What broad SORN policies and federal recidivism studies have and have not shown.",
            },
            {
              eyebrow: "Theme 2",
              title: "Prevention reality",
              icon: "🧭",
              tone: "info",
              description:
                "Why known people, trusted access, and first-time detection matter.",
            },
            {
              eyebrow: "Theme 3",
              title: "Collateral harm",
              icon: "🏠",
              tone: "family",
              description:
                "How restrictions can affect housing, work, families, and stability.",
            },
            {
              eyebrow: "Theme 4",
              title: "Legal concerns",
              icon: "⚖️",
              tone: "legal",
              description:
                "How modern restrictions can create punishment-like burdens.",
            },
            {
              eyebrow: "Theme 5",
              title: "Risk changes",
              icon: "🌱",
              tone: "success",
              description:
                "Why subgroup differences, individualized review, treatment, and time offense-free matter.",
            },
            {
              eyebrow: "Theme 6",
              title: "Policy comparison",
              icon: "🧩",
              tone: "neutral",
              description:
                "How comparative data can test assumptions about risk and policy proportionality.",
            },
            {
              eyebrow: "Theme 7",
              title: "Trusted access",
              icon: "🏛️",
              tone: "warning",
              description:
                "Why prevention also requires institutional accountability where trust, authority, and access can be misused.",
            },
          ]}
        />

        <div className="mt-6 grid gap-5">
          {evidenceThemes.map((theme, index) => (
            <GuideSectionCard key={theme.id}>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Theme {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    <span aria-hidden="true" className="mr-2">
                      {theme.icon}
                    </span>
                    {theme.title}
                  </h3>
                </div>

                {renderSourceLinks(theme.anchorIds)}
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                  <h4 className="font-semibold text-emerald-950">
                    What the evidence supports
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-950">
                    {theme.supports}
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
                  <h4 className="font-semibold text-amber-950">
                    What it does not prove
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-amber-950">
                    {theme.doesNotProve}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-rose-50 p-4 ring-1 ring-rose-100">
                  <h4 className="font-semibold text-rose-950">
                    Overstatement to avoid
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-rose-950">
                    {theme.avoid}
                  </p>
                </div>

                <div className="rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
                  <h4 className="font-semibold text-sky-950">
                    More careful wording
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-sky-950">
                    {theme.safer}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <h4 className="font-semibold text-slate-950">
                    Why this matters
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {theme.whyMatters}
                  </p>
                </div>
              </div>
            </GuideSectionCard>
          ))}
        </div>

        <GuideSectionHeader
          id="anchor-sources"
          number="2"
          title="Key sources to start with"
          subtitle="A front shelf of especially useful sources, now drawn from the same catalog used everywhere else on the page."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              These are not the only useful sources. They are strong starting
              points because they are official, peer-reviewed, legally central,
              or especially helpful for careful public framing.
            </p>
          </GuideProse>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {anchorSourceIds.map((id) => {
              const source = sourceCatalog[id];
              return (
                <article
                  key={id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                      {id}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {source.type}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-slate-950">
                    {source.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {source.organization}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    <strong>Why we use it:</strong> {source.usefulFor}
                  </p>

                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                  >
                    Open {source.shortTitle}
                  </a>
                </article>
              );
            })}
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="careful-conclusions"
          number="3"
          title="Careful conclusions supported by the evidence"
          subtitle="Plain-language conclusions paired with named, visible sources rather than citation IDs alone."
        />

        <GuideSectionCard>
          <div className="grid gap-4">
            {carefulConclusions.map((item) => (
              <div
                key={item.claim}
                className="rounded-2xl bg-white p-4 ring-1 ring-slate-200"
              >
                <p className="text-slate-800">{item.claim}</p>
                <div className="mt-3">{renderSourceLinks(item.ids)}</div>
              </div>
            ))}
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="common-overstatements"
          number="4"
          title="Common overstatements to avoid"
          subtitle="Good evidence is strongest when it is not stretched past what it proves."
        />

        <GuideSectionCard>
          <div className="grid gap-4">
            {commonOverstatements.map((item) => (
              <div
                key={item.avoid}
                className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-2"
              >
                <div className="rounded-xl bg-rose-50 p-4 ring-1 ring-rose-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-800">
                    Avoid
                  </p>
                  <p className="mt-2 font-semibold text-rose-950">
                    {item.avoid}
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                    Better
                  </p>
                  <p className="mt-2 font-semibold text-emerald-950">
                    {item.better}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <SoftDivider />

          <ScriptBox
            title="A careful way to explain the evidence"
            tone="neutral"
            context="Use this as a plain-language model for testimony, public comments, articles, or conversations."
            script={`The evidence does not support treating broad public registration and notification as a complete prevention strategy. The stronger reading is more careful: broad SORN policies have not demonstrated a clear overall recidivism benefit, observed recidivism varies substantially by subgroup, most sexual harms against children involve someone known or trusted, and effective prevention requires individualized risk assessment, treatment, stable reentry, reporting systems, and institutional accountability.\n\nThat does not mean harm is rare or that accountability is optional. It means public safety policy should be honest about what a registry can and cannot do.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="why-evidence-based-reform-matters"
          number="5"
          title="Why evidence-based reform matters"
          subtitle="Evidence is a tool for prevention, accountability, dignity, and better public policy."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              SOLAR uses evidence to challenge ineffective policy, not to
              minimize harm. The goal is safer prevention, more honest public
              policy, meaningful accountability, and a path back into community
              life after sentence completion.
            </p>
            <p>
              Evidence-based registry reform asks whether a policy actually
              reduces harm, whether it creates new instability, whether it
              respects constitutional limits, and whether it helps communities
              respond to real risk instead of fear alone.
            </p>
          </GuideProse>

          <GuideChecklist
            id="reading-research-checklist"
            title="How to read registry research carefully"
            columns={1}
            items={[
              {
                id: "define-measure",
                label:
                  "Check the measure: rearrest, reconviction, reoffense, recidivism, prevalence, burden, or legal doctrine.",
              },
              {
                id: "source-type",
                label:
                  "Notice the source type: official data, peer-reviewed research, government report, court decision, expert policy guidance, advocacy report, or media example.",
              },
              {
                id: "population",
                label:
                  "Ask who the source is studying: adults, youth, people released from prison, non-production offenders, people under supervision, children, families, veterans, or a specific state population.",
              },
              {
                id: "follow-up",
                label:
                  "Check the time period. A three-year follow-up and a fifteen-year follow-up do not answer the same question.",
              },
              {
                id: "comparison",
                label:
                  "When making comparisons, ask whether the same measurement limits affect the other offense categories too and whether any differential undercount is large enough to alter the observed relationship.",
              },
              {
                id: "avoid-overclaim",
                label:
                  "Look for what the source does not prove before turning a finding into a public claim.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="source-library"
          number="6"
          title="Complete source library"
          subtitle="Every source cited on this page, with a short explanation of why SOLAR considers it useful."
        />

        <GuideCallout tone="research" icon="📚" title="How this library is organized">
          <p>
            Each source has a stable SE number for internal cross-reference, a
            reader-friendly short name, the full title, source type, and a short
            explanation of the job we believe it can responsibly do. Some
            sources appear in more than one topic because they answer more than
            one kind of question.
          </p>
        </GuideCallout>

        <div className="mt-6 grid gap-5">
          {sourceGroups.map((group) => (
            <GuideSectionCard key={group.title}>
              <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {group.ids.map((id) => {
                  const source = sourceCatalog[id];
                  return (
                    <article
                      key={`${group.title}-${id}`}
                      className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                          {id}
                        </span>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                          {source.type}
                        </span>
                      </div>

                      <h4 className="mt-3 font-bold text-slate-950">
                        {source.shortTitle}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-slate-600">
                        {source.title}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                        {source.organization}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">
                        <strong>Why we find it useful:</strong> {source.usefulFor}
                      </p>

                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                      >
                        Open source
                      </a>
                    </article>
                  );
                })}
              </div>
            </GuideSectionCard>
          ))}
        </div>

        <GuideSectionHeader
          id="research-tools"
          number="7"
          title="Research tools and next steps"
          subtitle="These are places to continue researching; they are separate from the source library SOLAR cites above."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Useful research starting points"
            resources={[
              {
                label: "Bureau of Justice Statistics",
                description:
                  "Official federal statistics and reports on crime, victimization, corrections, and recidivism.",
                href: "https://bjs.ojp.gov/",
                badge: "Official",
              },
              {
                label: "SMART Office",
                description:
                  "Federal resources on sex-offender management, SORNA, case law summaries, and research briefs.",
                href: "https://smart.ojp.gov/",
                badge: "Official",
              },
              {
                label: "U.S. Sentencing Commission",
                description:
                  "Federal sentencing data and research, including dedicated reports on non-production child-pornography offenses and recidivism.",
                href: "https://www.ussc.gov/research",
                badge: "Official",
              },
              {
                label: "National Institute of Justice",
                description:
                  "Research and evaluation materials on criminal justice policy and public safety.",
                href: "https://nij.ojp.gov/",
                badge: "Official",
              },
              {
                label: "PubMed",
                description:
                  "Search tool for peer-reviewed biomedical and behavioral research abstracts.",
                href: "https://pubmed.ncbi.nlm.nih.gov/",
                badge: "Research",
              },
              {
                label: "Google Scholar",
                description:
                  "Broad search tool for academic literature, citations, and related research.",
                href: "https://scholar.google.com/",
                badge: "Research",
              },
              {
                label: "U.S. Supreme Court opinions on Justia",
                description:
                  "Readable access point for Supreme Court opinions including Smith and Packingham.",
                href: "https://supreme.justia.com/",
                badge: "Court",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🔗" title="Source maintenance">
            <p>
              Government PDFs and agency pages move. Because every source on
              this page now lives in one catalog, a broken URL or revised title
              can be corrected once and reflected everywhere it appears.
            </p>
          </GuideCallout>
        </GuideSectionCard>
      </main>
    </div>
  );
}
