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
      "Comparing rearrest, reconviction, and same-type recidivism across offense categories and understanding how detected recidivism changes with the measure used.",
  },
  SE02: {
    shortTitle: "SMART — Adult Sexual Recidivism",
    title: "Recidivism of Adult Sexual Offenders",
    organization: "SMART Office, U.S. Department of Justice",
    type: "Government research brief",
    href: "https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf",
    usefulFor:
      "Understanding sexual recidivism rates, subgroup differences, follow-up periods, measurement challenges, and how risk changes over time.",
  },
  SE03: {
    shortTitle: "25-Year SORN Meta-Analysis",
    title:
      "The Effectiveness of Sex Offender Registration and Notification: A Meta-Analysis of 25 Years of Findings",
    organization: "Journal of Experimental Criminology",
    type: "Peer-reviewed meta-analysis",
    href: "https://link.springer.com/article/10.1007/s11292-021-09480-z",
    usefulFor:
      "A major peer-reviewed synthesis of 25 years of research on whether broad registration and notification policies reduce recidivism.",
  },
  SE04: {
    shortTitle: "Prescott & Rockoff — SORN Effects",
    title: "Do Sex Offender Registration and Notification Laws Affect Criminal Behavior?",
    organization: "NBER / Journal of Law and Economics",
    type: "Peer-reviewed study / working paper",
    href: "https://www.nber.org/papers/w13803",
    usefulFor:
      "Examining whether law-enforcement registration and public notification have different effects on offending, deterrence, and recidivism.",
  },
  SE05: {
    shortTitle: "NIJ-Funded — South Carolina SORN Evaluation",
    title:
      "Evaluating the Effectiveness of Sex Offender Registration and Notification Policies for Reducing Sexual Violence against Women",
    organization: "University of South Carolina research team / NIJ-funded",
    type: "NIJ-funded research report",
    href: "https://www.ojp.gov/pdffiles1/nij/grants/231989.pdf",
    usefulFor:
      "A detailed South Carolina evaluation of SORN policy effects on sexual violence, recidivism, deterrence, and unintended consequences.",
  },
  SE06: {
    shortTitle: "SMART/LOC — Registry Collateral Effects",
    title:
      "Sex Offender Registration and Notification Policies: Summary and Assessment of Research on Claimed Impacts to Registered Offenders",
    organization: "Federal Research Division, Library of Congress, for the SMART Office",
    type: "Government evidence review",
    href: "https://smart.ojp.gov/media/document/6346",
    usefulFor:
      "Reviewing research on how registration and notification affect housing, employment, wellbeing, family relationships, and reintegration.",
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
      "Examining the relationship between residence restrictions, housing availability, transience, and community stability.",
  },
  SE09: {
    shortTitle: "Colorado SOMB — Residence-Restriction Safety",
    title:
      "Report by the Sex Offender Management Board (SOMB) on Safety Issues Raised by Living Arrangements for and Locations of Sex Offenders in the Community (2004)",
    organization: "Colorado Sex Offender Management Board",
    type: "State government report",
    href: "https://dcj.colorado.gov/dcj-offices/ors/doc-rpt",
    usefulFor:
      "Official Colorado analysis of safety issues surrounding living arrangements, residence restrictions, and community placement.",
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
      "Official data on who commits reported sexual assaults against young children, including the predominance of family members and acquaintances over strangers.",
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
      "Understanding trusted access, authority, grooming, reporting, and safeguarding issues in school settings.",
  },
  SE14: {
    shortTitle: "DOJ OIG — Larry Nassar Investigation",
    title: "Review of the FBI's Handling of Allegations Against Larry Nassar",
    organization: "U.S. Department of Justice Office of Inspector General",
    type: "Inspector General report",
    href: "https://oig.justice.gov/sites/default/files/reports/21-093.pdf",
    usefulFor:
      "A documented case study of institutional failure after credible abuse allegations and the consequences of delayed action.",
  },
  SE15: {
    shortTitle: "CDC — Firearm Injury & Death",
    title: "Firearm Injury and Death Facts",
    organization: "Centers for Disease Control and Prevention",
    type: "Official data explainer",
    href: "https://www.cdc.gov/firearm-violence/data-research/facts-stats/index.html",
    usefulFor:
      "Official public-health data for comparing the scale of serious harms and the prevention systems used to address them.",
  },
  SE16: {
    shortTitle: "NHTSA — Impaired-Driving Prevention",
    title: "Report to Congress: Advanced Impaired Driving Prevention Technology",
    organization: "National Highway Traffic Safety Administration",
    type: "Government report",
    href: "https://www.nhtsa.gov/sites/nhtsa.gov/files/2026-03/Report-to-Congress-Advanced-Impaired-Driving-Prevention-Technology.pdf",
    usefulFor:
      "Showing how a recurring public-safety harm is addressed through prevention, technology, enforcement, research, and intervention.",
  },
  SE17: {
    shortTitle: "BJS — Domestic Violence",
    title: "Nonfatal Domestic Violence, 2003–2012",
    organization: "Bureau of Justice Statistics",
    type: "Official data / government report",
    href: "https://bjs.ojp.gov/content/pub/pdf/ndv0312.pdf",
    usefulFor:
      "Official victimization data on another serious and often underreported form of interpersonal harm.",
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
      "Understanding constitutional limits on broad registry-related restrictions and the continuing rights of people with convictions.",
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
      "Evidence-based recommendations for individualized risk assessment, treatment, review, reintegration, registration, and community notification policy.",
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
      "A federal synthesis of treatment research and its relationship to risk reduction, rehabilitation, and prevention.",
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
      "Connecting sexual-violence response to broader prevention, survivor support, multidisciplinary practice, and community safety.",
  },
  SE26: {
    shortTitle: "The Marshall Project — Banished",
    title: "Banished",
    organization: "The Marshall Project",
    type: "Investigative media / illustrative case",
    href: "https://www.themarshallproject.org/2018/10/03/banished",
    usefulFor:
      "A concrete Miami-Dade illustration of displacement and homelessness produced by layered residence restrictions.",
  },
  SE27: {
    shortTitle: "SMART — 2025 Case Law Summary",
    title:
      "Sex Offender Registration and Notification in the United States: Case Law Summary — July 2025",
    organization: "SMART Office, U.S. Department of Justice",
    type: "Government legal summary",
    href: "https://smart.ojp.gov/sorna/current-law/case-law/introduction",
    usefulFor:
      "Orientation to registry litigation, constitutional doctrine, and lower-court developments current through July 2025.",
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
      "Federal non-production recidivism data, including the finding that 4.3% of the studied cohort was rearrested for a sex offense within three years.",
  },
  SE30: {
    shortTitle: "USSC — CP Recidivism Study (2012)",
    title:
      "Report to the Congress: Federal Child Pornography Offenses — Chapter 11: Recidivism by Child Pornography Offenders",
    organization: "U.S. Sentencing Commission",
    type: "Government research report",
    href: "https://www.ussc.gov/sites/default/files/pdf/news/congressional-testimony-and-reports/sex-offense-topics/201212-federal-child-pornography-offenses/Chapter_11.pdf",
    usefulFor:
      "Longer-follow-up federal non-production recidivism data, including known sexual and contact-sexual recidivism and comparisons with contact-offender cohorts.",
  },
  SE31: {
    shortTitle: "Agan — Fear without Function?",
    title: "Sex Offender Registries: Fear without Function?",
    organization: "The Journal of Law and Economics",
    type: "Peer-reviewed study",
    href: "https://www.journals.uchicago.edu/doi/abs/10.1086/658483",
    usefulFor:
      "Testing registry effectiveness across three empirical designs, including state-level sexual-offense rates, post-release recidivism, and whether registry locations predict where sexual abuse occurs.",
  },
  SE32: {
    shortTitle: "Hanson et al. — Once a Sexual Offender, Not Always",
    title:
      "Reductions in Risk Based on Time Offense-Free in the Community: Once a Sexual Offender, Not Always a Sexual Offender",
    organization: "Psychology, Public Policy, and Law",
    type: "Peer-reviewed study",
    href: "https://doi.org/10.1037/law0000135",
    usefulFor:
      "Long-term evidence that sexual recidivism risk declines with sustained offense-free time across age and initial-risk groups, supporting reviewable policies that recognize desistance.",
  },
  SE33: {
    shortTitle: "Thornton et al. — Residual Risk",
    title:
      "Estimating Lifetime and Residual Risk for Individuals Who Remain Sexual Offense Free in the Community: Practical Applications",
    organization: "Sexual Abuse",
    type: "Peer-reviewed study / PubMed index",
    href: "https://pubmed.ncbi.nlm.nih.gov/31478439/",
    usefulFor:
      "Showing how evaluators can incorporate offense-free time into individualized estimates of lifetime, residual, and year-by-year sexual recidivism risk.",
  },
  SE34: {
    shortTitle: "Hanson, Lee & Thornton — High-Risk Long-Term Recidivism",
    title: "Long Term Recidivism Rates Among Individuals at High Risk to Sexually Reoffend",
    organization: "Sexual Abuse",
    type: "Peer-reviewed study / open-access full text",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11421192/",
    usefulFor:
      "Long-term evidence from a deliberately high-risk sample showing substantial heterogeneity in risk while also examining how residual risk changes after extended offense-free periods.",
  },
};

type PositionRecord = {
  title: string;
  body: string;
  icon: string;
  sourceIds: SourceId[];
};

const positions: PositionRecord[] = [
  {
    title:
      "The sex offender registry system is ineffective, harmful, and rooted in misinformation.",
    body:
      "It does not prevent crime. The vast majority of sex offenses are committed by individuals not on any registry, and empirical evidence consistently shows lower recidivism rates for people convicted of sex offenses than commonly assumed.",
    icon: "📊",
    sourceIds: ["SE01", "SE02", "SE03", "SE04", "SE05", "SE31", "SE29", "SE30"],
  },
  {
    title:
      "Registry systems cause lasting harm to individuals, families, and communities.",
    body:
      "Rather than increasing safety, registries foster fear, isolation, discrimination, and vigilante violence. Children and families often suffer consequences through no fault of their own.",
    icon: "🏠",
    sourceIds: ["SE06", "SE07", "SE08", "SE09", "SE10", "SE24", "SE26"],
  },
  {
    title: "The real risk to children often lies closer to home.",
    body:
      "Authority figures—including family members, teachers, coaches, clergy, and community leaders—are more likely to perpetrate sexual harm than strangers. Public registry systems misdirect attention toward the stranger-danger myth.",
    icon: "🧭",
    sourceIds: ["SE11", "SE12", "SE13", "SE14", "SE25"],
  },
  {
    title:
      "Other types of crime present a greater and more consistent danger to public safety.",
    body:
      "Many serious harms to children and communities are addressed through prevention, regulation, treatment, and sentence-bound accountability rather than lifelong public branding.",
    icon: "🧩",
    sourceIds: ["SE01", "SE15", "SE16", "SE17"],
  },
  {
    title: "Registries are punitive in practice, not administrative in nature.",
    body:
      "Public exposure, recurring reporting, restrictions, and collateral consequences operate as continuing punishment after a sentence has been served and stand in tension with due process, proportionality, and fairness.",
    icon: "⚖️",
    sourceIds: ["SE10", "SE18", "SE19", "SE20", "SE27", "SE28"],
  },
  {
    title: "One-size-fits-all registry laws are fundamentally flawed.",
    body:
      "Blanket restrictions ignore major differences among cases, people, time elapsed, conduct, treatment, and actual risk. Policy should be individualized, reviewable, and evidence-based.",
    icon: "🌱",
    sourceIds: ["SE02", "SE21", "SE22", "SE32", "SE33", "SE34", "SE23", "SE29", "SE30"],
  },
  {
    title: "Registries create a permanent underclass.",
    body:
      "They block access to housing, employment, education, financial services, and community participation, stripping people of the tools necessary to rebuild their lives and reintegrate safely.",
    icon: "🚪",
    sourceIds: ["SE06", "SE07", "SE08", "SE09", "SE10", "SE24", "SE26"],
  },
];

const anchorSourceIds: SourceId[] = [
  "SE03",
  "SE01",
  "SE29",
  "SE30",
  "SE04",
  "SE31",
  "SE11",
  "SE18",
  "SE19",
  "SE22",
  "SE32",
  "SE06",
  "SE21",
  "SE14",
];

const sourceGroups: { title: string; description: string; ids: SourceId[] }[] = [
  {
    title: "Recidivism and registry effectiveness",
    description:
      "Research on reoffending, federal non-production cases, and whether registration and notification reduce crime.",
    ids: ["SE01", "SE02", "SE03", "SE04", "SE05", "SE31", "SE29", "SE30"],
  },
  {
    title: "Child safety and trusted access",
    description:
      "Sources on who harms children, trusted-access settings, institutional responsibility, and prevention beyond public lists.",
    ids: ["SE11", "SE12", "SE13", "SE14", "SE25"],
  },
  {
    title: "Housing, families, and collateral harm",
    description:
      "Research and reporting on housing, family spillover, residence restrictions, displacement, and reintegration.",
    ids: ["SE06", "SE07", "SE08", "SE09", "SE10", "SE24", "SE26"],
  },
  {
    title: "Constitutional law and punitive effects",
    description:
      "Cases and legal analysis that frame the civil-versus-punitive debate and the constitutional limits on registry-related restrictions.",
    ids: ["SE18", "SE19", "SE20", "SE27", "SE28"],
  },
  {
    title: "Risk, treatment, and individualized reform",
    description:
      "Research on changing risk, treatment, desistance, subgroup differences, and evidence-based alternatives to blanket policy.",
    ids: ["SE02", "SE21", "SE22", "SE32", "SE33", "SE34", "SE23", "SE29", "SE30"],
  },
  {
    title: "Comparative public safety",
    description:
      "Official sources that help compare how other serious and recurring harms are measured, prevented, regulated, and punished.",
    ids: ["SE15", "SE16", "SE17"],
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
        description="Explore the research and data behind SOLAR's positions on sex offense registries, recidivism, child safety, collateral harm, constitutional concerns, and evidence-based reform."
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
            Explore the research behind SOLAR’s positions on registries,
            recidivism, child safety, public policy, reintegration, and reform.
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
              Jump to source library
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ShareBar />

        <GuideIntro title="The evidence behind our advocacy" icon="🧭">
          <p>
            SOLAR is an advocacy organization. We read the research, compare the
            findings across disciplines and jurisdictions, and use that evidence
            to shape the positions that guide our public education and reform work.
          </p>
          <p>
            This guide brings those positions and their supporting sources
            together in one place. It is designed for readers who want to see
            where our conclusions come from, explore the underlying research,
            or use the same sources in their own advocacy and analysis.
          </p>
          <p>
            No single study carries the whole argument. Taken together, these
            sources shape our understanding of what registry policy does, what it
            fails to do, who is actually at risk, and what evidence-based public
            safety can look like instead.
          </p>
        </GuideIntro>

        <GuideCallout tone="research" icon="🔎" title="A note on recidivism data">
          <p>
            Recidivism can be measured by rearrest, reconviction, reincarceration,
            or other recorded events. Those measures are not identical, and not
            every offense is reported or detected. Follow-up periods and study
            populations also matter. We include those distinctions because they
            help readers understand the numbers—not because they erase the
            patterns the research shows.
          </p>
        </GuideCallout>

        <GuideSectionHeader
          id="solar-positions"
          number="1"
          title="SOLAR positions and supporting evidence"
          subtitle="Our seven core advocacy positions, paired with the research and data that inform them."
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Position 1",
              title: "The registry does not deliver what it promises",
              icon: "📊",
              tone: "research",
              description:
                "Research on recidivism and registry effectiveness challenges assumptions about prevention and repeat offending.",
            },
            {
              eyebrow: "Position 2",
              title: "Registry harm reaches beyond the person listed",
              icon: "🏠",
              tone: "family",
              description:
                "Housing, employment, family relationships, and community stability can all be affected.",
            },
            {
              eyebrow: "Position 3",
              title: "Child safety requires looking closer to home",
              icon: "🧭",
              tone: "info",
              description:
                "Prevention has to account for family, trusted-access, institutional, and authority-based risks.",
            },
            {
              eyebrow: "Position 4",
              title: "Public safety policy is selective",
              icon: "🧩",
              tone: "neutral",
              description:
                "Other serious harms are addressed through prevention, regulation, treatment, and sentence-bound accountability.",
            },
            {
              eyebrow: "Position 5",
              title: "Registries punish in practice",
              icon: "⚖️",
              tone: "legal",
              description:
                "Public exposure, recurring obligations, restrictions, and exclusion continue long after sentencing.",
            },
            {
              eyebrow: "Position 6",
              title: "Risk is individual and changes over time",
              icon: "🌱",
              tone: "success",
              description:
                "Research supports individualized assessment, treatment, review, and recognition of desistance.",
            },
            {
              eyebrow: "Position 7",
              title: "Permanent status creates a permanent underclass",
              icon: "🚪",
              tone: "warning",
              description:
                "Barriers to housing, work, services, and community participation make successful reintegration harder.",
            },
          ]}
        />

        <div className="mt-6 grid gap-5">
          {positions.map((position, index) => (
            <GuideSectionCard key={position.title}>
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {position.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    SOLAR Position {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-950">
                    {position.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-700">
                    {position.body}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="mb-3 text-sm font-semibold text-slate-900">
                  Supporting research and data
                </p>
                {renderSourceLinks(position.sourceIds)}
              </div>
            </GuideSectionCard>
          ))}
        </div>

        <GuideSectionHeader
          id="anchor-sources"
          number="2"
          title="Key sources to start with"
          subtitle="A front shelf of especially useful studies, reports, and cases for understanding the evidence behind SOLAR’s positions."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              If you are new to the subject, these sources are good entry points.
              They cover registry effectiveness, recidivism, child safety,
              constitutional law, collateral harm, desistance, and evidence-based
              reform from several different angles.
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
                    {source.usefulFor}
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
          id="federal-non-production"
          number="3"
          title="A closer look at federal non-production recidivism"
          subtitle="U.S. Sentencing Commission research gives us a particularly useful view of one often-misunderstood subgroup."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Federal non-production child-pornography cases are frequently
              discussed as though repeat sexual offending is nearly inevitable.
              The Sentencing Commission’s own research does not support that
              picture.
            </p>
            <p>
              In the Commission’s 2021 study, 4.3% of the studied non-production
              cohort was rearrested for a sex offense within three years. Its
              earlier longer-follow-up work found similarly low known sexual and
              contact-sexual recidivism relative to common public assumptions and
              to contact-offender comparison groups.
            </p>
            <p>
              These findings matter because they reinforce a broader principle
              running throughout this guide: offense labels are poor substitutes
              for individualized risk, and very different people can be swept
              into the same permanent legal category.
            </p>
          </GuideProse>
          <div className="mt-5">{renderSourceLinks(["SE29", "SE30"])}</div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="source-library"
          number="4"
          title="Complete source library"
          subtitle="Browse every source cited in this guide by topic and see what each one contributes to the larger evidence base."
        />

        <GuideCallout tone="research" icon="📚" title="Use the library your way">
          <p>
            Each entry includes a short name, full title, source type, and a
            plain-language description of what you can learn from it. Some
            sources appear in more than one topic because they speak to more than
            one part of the registry debate.
          </p>
        </GuideCallout>

        <div className="mt-6 grid gap-5">
          {sourceGroups.map((group) => (
            <GuideSectionCard key={group.title}>
              <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {group.description}
              </p>
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
                        {source.usefulFor}
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
          number="5"
          title="Keep researching"
          subtitle="Official databases, research indexes, and legal resources for going beyond the sources collected here."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Research starting points"
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
                  "Federal resources on sex-offender management, SORNA, case law, research, treatment, and policy.",
                href: "https://smart.ojp.gov/",
                badge: "Official",
              },
              {
                label: "U.S. Sentencing Commission",
                description:
                  "Federal sentencing data and research, including reports on non-production child-pornography offenses and recidivism.",
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
                  "Search peer-reviewed biomedical, behavioral, treatment, and public-health research.",
                href: "https://pubmed.ncbi.nlm.nih.gov/",
                badge: "Research",
              },
              {
                label: "Google Scholar",
                description:
                  "Search academic literature, citations, related studies, and newer work building on the sources in this guide.",
                href: "https://scholar.google.com/",
                badge: "Research",
              },
              {
                label: "U.S. Supreme Court opinions on Justia",
                description:
                  "Readable access to Supreme Court opinions, including Smith v. Doe and Packingham v. North Carolina.",
                href: "https://supreme.justia.com/",
                badge: "Court",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}