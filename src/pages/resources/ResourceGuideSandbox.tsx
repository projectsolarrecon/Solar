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
  ResourceLinkGrid,
  SourceList,
} from "../../components/solar";

const sourceLinks = {
  SE01: "https://bjs.ojp.gov/content/pub/pdf/rsorp94.pdf",
  SE02:
    "https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf",
  SE03: "https://link.springer.com/article/10.1007/s11292-021-09480-z",
  SE04: "https://www.nber.org/system/files/working_papers/w13803/w13803.pdf",
  SE05: "https://www.ojp.gov/pdffiles1/nij/grants/231989.pdf",
  SE06: "https://smart.ojp.gov/doc/SORNA-Summary-Assessment-Research.pdf",
  SE07:
    "https://safervirginia.org/documents/Collateral%20Damage%20-%20Family%20Members%20of%20Registered%20Sex%20Offenders%20Levenson.pdf",
  SE08:
    "https://www.fl-counties.com/wp-content/uploads/2022/09/WhereforartThouCJPR2013.pdf",
  SE09:
    "https://www.csor-home.org/wp-content/uploads/2014/01/Report-on-Safety-Issues.pdf",
  SE10:
    "https://www.hrw.org/report/2007/09/11/no-easy-answers/sex-offender-laws-us",
  SE11: "https://bjs.ojp.gov/content/pub/pdf/saycrle.pdf",
  SE12: "https://ojjdp.ojp.gov/statistical-briefing-book/victims/faqs/qa02111",
  SE13:
    "https://www.ed.gov/research/educator-sexual-misconduct-a-synthesis-of-existing-literature",
  SE14: "https://oig.justice.gov/sites/default/files/reports/21-093.pdf",
  SE15: "https://www.cdc.gov/firearm-violence/data-research/facts-stats/index.html",
  SE16:
    "https://www.nhtsa.gov/sites/nhtsa.gov/files/2026-03/Report-to-Congress-Advanced-Impaired-Driving-Prevention-Technology.pdf",
  SE17: "https://bjs.ojp.gov/content/pub/pdf/ndv0312.pdf",
  SE18: "https://supreme.justia.com/cases/federal/us/538/84/",
  SE19: "https://supreme.justia.com/cases/federal/us/582/15-1194/",
  SE20: "https://www.gao.gov/assets/gao-13-211.pdf",
  SE21: "https://members.atsa.com/ap/CloudFile/Download/pB50ZeZr",
  SE22: "https://pubmed.ncbi.nlm.nih.gov/24664250/",
  SE23:
    "https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/theeffectivenessoftreatmentforadultsexualoffenders.pdf",
  SE24: "https://pubmed.ncbi.nlm.nih.gov/32960141/",
  SE25: "https://www.nsvrc.org/sarts/toolkit/7-4/",
  SE26: "https://www.themarshallproject.org/2018/10/03/banished",
  SE27: "https://smart.ojp.gov/2025-Case-Law-Summary-508.pdf",
  SE28:
    "https://openscholarship.wustl.edu/cgi/viewcontent.cgi?article=1144&context=law_lawreview",
} as const;

const evidenceThemes = [
  {
    id: "registry-efficacy",
    title: "Registry efficacy and recidivism",
    icon: "📊",
    anchorIds: ["SE01", "SE03", "SE04", "SE05"],
    supports:
      "Broad registration and notification systems have not demonstrated a clear overall reduction in sexual recidivism across the research base.",
    doesNotProve:
      "This does not prove that law-enforcement registration data are useless for every investigative or information-sharing purpose.",
    avoid: "“Registries have no impact on public safety.”",
    safer:
      "A 25-year meta-analysis found no statistically significant overall recidivism benefit from broad sex offense registration and notification policies.",
    uses: "Legislative testimony, policy memos, evidence literacy posts.",
  },
  {
    id: "known-perpetrators",
    title: "Known perpetrators and prevention reality",
    icon: "🧭",
    anchorIds: ["SE11", "SE12", "SE13", "SE25"],
    supports:
      "Official and prevention-oriented sources show that harm to children often involves family members, acquaintances, caregivers, or trusted authority figures.",
    doesNotProve:
      "This does not prove stranger-perpetrated abuse never happens or should be ignored.",
    avoid: "“Public notification serves no prevention purpose for children.”",
    safer:
      "Because many harms against children involve known or trusted people, public registries are a limited tool for primary prevention.",
    uses: "State registry pages, child-safety messaging, prevention posts.",
  },
  {
    id: "collateral-consequences",
    title: "Collateral consequences and family harm",
    icon: "🏠",
    anchorIds: ["SE06", "SE07", "SE08", "SE24", "SE26"],
    supports:
      "Registry requirements and related restrictions are linked to housing instability, employment barriers, stigma, family spillover harm, and reintegration problems.",
    doesNotProve:
      "This does not prove every housing, employment, or family hardship is caused only by the registry rather than conviction, supervision, poverty, or other systems.",
    avoid: "“Registry laws directly cause homelessness and job loss.”",
    safer:
      "Research suggests registry requirements and restrictions can destabilize housing, employment, and family support systems that are necessary for safe reintegration.",
    uses: "Resource guides, policy memos, reentry content.",
  },
  {
    id: "punitive-effects",
    title: "Punitive effects and constitutional concerns",
    icon: "⚖️",
    anchorIds: ["SE18", "SE19", "SE27", "SE28"],
    supports:
      "Modern layered restrictions can burden speech, movement, housing, association, and community participation in ways that raise serious punitive-effect and constitutional concerns.",
    doesNotProve:
      "This does not prove every current registry law is automatically unconstitutional. Smith v. Doe remains a central precedent.",
    avoid: "“The sex offense registry is unconstitutional punishment.”",
    safer:
      "Although registries have often been labeled civil, modern restrictions can impose punishment-like burdens and raise serious constitutional concerns.",
    uses: "Legislative trackers, legal update blogs, policy explainers.",
  },
  {
    id: "desistance",
    title: "Desistance, treatment, and individualized reform",
    icon: "🌱",
    anchorIds: ["SE02", "SE21", "SE22", "SE23"],
    supports:
      "Risk varies by person and context, and sexual recidivism risk generally declines the longer someone remains offense-free in the community.",
    doesNotProve:
      "This does not prove risk reaches zero, that everyone presents the same risk, or that any one tool perfectly predicts future behavior.",
    avoid: "“High-risk offenders are no longer a threat after a few years.”",
    safer:
      "Risk changes over time, which means public safety is better served by individualized assessment, treatment, and review than by permanent status alone.",
    uses: "Evidence literacy posts, policy memos, reform proposals.",
  },
  {
    id: "comparative-safety",
    title: "Comparative public-safety logic",
    icon: "🧩",
    anchorIds: ["SE12", "SE15", "SE16", "SE17"],
    supports:
      "Many major public-safety harms are addressed through prevention, regulation, enforcement, technology, treatment, or service systems rather than permanent public identity branding.",
    doesNotProve:
      "This does not prove firearm violence, impaired driving, domestic violence, child maltreatment, and sexual offending are identical harms or require identical responses.",
    avoid: "“Drunk driving is more dangerous than sexual offending.”",
    safer:
      "Public safety policy is selective: many serious harms are managed through tools other than permanent public identity branding.",
    uses: "RECON, policy discussions, contextual advocacy.",
  },
  {
    id: "institutional-responsibility",
    title: "Institutional responsibility and trusted access",
    icon: "🏛️",
    anchorIds: ["SE13", "SE14"],
    supports:
      "Abuse can continue when institutions fail to act on warnings, reports, grooming behavior, or trusted-access risks.",
    doesNotProve:
      "This does not prove institutions are the sole or primary cause of sexual abuse, or that one institutional scandal proves a universal prevalence rate.",
    avoid: "“Institutions are the primary cause of sexual abuse.”",
    safer:
      "Effective prevention requires institutional accountability because public registries cannot substitute for action when warning signs arise inside trusted systems.",
    uses: "School-safety blogs, trusted-access series, policy memos.",
  },
] as const;

const anchorSources = [
  {
    id: "SE03",
    title:
      "The Effectiveness of Sex Offender Registration and Notification: A Meta-Analysis of 25 Years of Findings",
    type: "Peer-reviewed meta-analysis",
    why: "Best single front-shelf source for broad SORN efficacy claims.",
    supports:
      "Broad registration and notification policies have not shown a statistically significant overall recidivism benefit.",
    caveat:
      "Use for overall policy effects, not as proof that every registration function is useless.",
    href: sourceLinks.SE03,
  },
  {
    id: "SE01",
    title: "Recidivism of Sex Offenders Released from Prison in 1994",
    type: "Official data / government report",
    why: "Useful for explaining rearrest, reconviction, follow-up periods, and measurement limits.",
    supports:
      "Sexual recidivism is often lower than public belief, while still varying by subgroup and measure.",
    caveat:
      "The cohort is older and measures detected recidivism, not every undetected offense.",
    href: sourceLinks.SE01,
  },
  {
    id: "SE04",
    title: "Do Sex Offender Registration and Notification Laws Affect Criminal Behavior?",
    type: "Peer-reviewed study / NBER working paper",
    why: "Important complication source because it separates registration from notification.",
    supports:
      "Registration-only and public notification systems may have different effects and should not be collapsed into one claim.",
    caveat:
      "Do not use this as a simple anti-registry source; it is more nuanced.",
    href: sourceLinks.SE04,
  },
  {
    id: "SE11",
    title: "Sexual Assault of Young Children as Reported to Law Enforcement",
    type: "Official data / government report",
    why: "Strong official source for known-person prevention framing.",
    supports:
      "Many reported sexual assaults against young children involve family members or acquaintances rather than strangers.",
    caveat:
      "Reported-to-law-enforcement data do not capture every unreported harm.",
    href: sourceLinks.SE11,
  },
  {
    id: "SE18",
    title: "Smith v. Doe",
    type: "U.S. Supreme Court decision",
    why: "Central precedent for the civil-regulatory legal framework.",
    supports:
      "Registry reform arguments must acknowledge that the Supreme Court has upheld at least one registry scheme as civil.",
    caveat:
      "Do not cite legal concerns as though Smith has been overturned nationally.",
    href: sourceLinks.SE18,
  },
  {
    id: "SE19",
    title: "Packingham v. North Carolina",
    type: "U.S. Supreme Court decision",
    why: "Key speech and association case involving registry-related restrictions.",
    supports:
      "Even people with convictions retain constitutional rights, and broad restrictions can go too far.",
    caveat:
      "The case does not invalidate all registry restrictions.",
    href: sourceLinks.SE19,
  },
  {
    id: "SE22",
    title: "High-Risk Sex Offenders May Not Be High Risk Forever",
    type: "Peer-reviewed study / PubMed index",
    why: "Concise desistance source for reviewable, time-sensitive policy.",
    supports:
      "Risk can decline the longer someone remains offense-free in the community.",
    caveat:
      "Declining risk is not the same as zero risk.",
    href: sourceLinks.SE22,
  },
  {
    id: "SE06",
    title:
      "Summary and Assessment of Research on Claimed Impacts to Registered Offenders",
    type: "Government evidence review",
    why: "Useful because it acknowledges harms while also noting methodological limits.",
    supports:
      "Registry status and related restrictions are linked to employment, housing, wellbeing, and family burdens.",
    caveat:
      "Be careful about causal wording; many studies are self-report or jurisdiction-specific.",
    href: sourceLinks.SE06,
  },
  {
    id: "SE21",
    title:
      "Registration and Community Notification of Adults Convicted of a Sexual Crime: Recommendations for Evidence-Based Reform",
    type: "Expert policy recommendations",
    why: "Translates research into reform principles.",
    supports:
      "Policy should move toward individualized assessment, treatment, review, and reintegration.",
    caveat:
      "Use as expert guidance, not as official government data.",
    href: sourceLinks.SE21,
  },
  {
    id: "SE14",
    title:
      "DOJ OIG Review of the FBI’s Handling of Allegations Against Larry Nassar",
    type: "Inspector General report / case example",
    why: "Powerful institutional-failure example for trusted-access prevention work.",
    supports:
      "Public registries cannot substitute for institutional reporting, oversight, and timely action.",
    caveat:
      "Use as a documented case example, not as prevalence evidence.",
    href: sourceLinks.SE14,
  },
] as const;

const safeClaims = [
  {
    claim:
      "Broad public registration and notification systems have not shown a clear overall recidivism benefit.",
    ids: "SE03, SE04, SE05",
  },
  {
    claim:
      "Sexual recidivism is often lower than public belief, but risk varies by person, subgroup, measurement, and follow-up period.",
    ids: "SE01, SE02, SE22",
  },
  {
    claim:
      "Many harms against children involve people known to the child, including family members, acquaintances, caregivers, or trusted authority figures.",
    ids: "SE11, SE12, SE13",
  },
  {
    claim:
      "Public registries are limited tools for primary prevention because they identify people already detected and convicted.",
    ids: "SE05, SE11, SE25",
  },
  {
    claim:
      "Registry requirements and restrictions can destabilize housing, employment, family support, and reintegration.",
    ids: "SE06, SE07, SE08, SE24",
  },
  {
    claim:
      "Modern registry systems can impose punishment-like burdens even when legally labeled civil.",
    ids: "SE18, SE19, SE20, SE27, SE28",
  },
  {
    claim:
      "Risk changes over time, and policy should include individualized assessment, treatment, and review.",
    ids: "SE02, SE21, SE22, SE23",
  },
  {
    claim:
      "Prevention requires institutional accountability, not just public lists.",
    ids: "SE13, SE14, SE25",
  },
] as const;

const cautiousClaims = [
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
    avoid: "Stranger danger does not exist.",
    better:
      "Stranger-perpetrated abuse exists, but official data show that many harms against children involve known, trusted, or family-connected people.",
  },
  {
    avoid: "Public notification has no prevention purpose.",
    better:
      "Public notification is a limited prevention tool because it does not address many first-time, undetected, known-perpetrator, or institutional-access risks.",
  },
] as const;

const sourceTopics = [
  {
    title: "Recidivism and SORN effectiveness",
    sources: [
      {
        id: "SE01",
        title: "BJS recidivism study",
        type: "Official data",
        relevance:
          "Defines rearrest, reconviction, and detected sexual recidivism in an influential release cohort.",
        href: sourceLinks.SE01,
      },
      {
        id: "SE02",
        title: "SMART adult recidivism brief",
        type: "Government research brief",
        relevance:
          "Explains how recidivism estimates vary by subgroup, measure, and follow-up period.",
        href: sourceLinks.SE02,
      },
      {
        id: "SE03",
        title: "25-year SORN meta-analysis",
        type: "Peer-reviewed meta-analysis",
        relevance:
          "Central synthesis for broad registration and notification effectiveness claims.",
        href: sourceLinks.SE03,
      },
      {
        id: "SE04",
        title: "Prescott & Rockoff",
        type: "Peer-reviewed study / NBER",
        relevance:
          "Complicates simple claims by separating registration from notification.",
        href: sourceLinks.SE04,
      },
      {
        id: "SE05",
        title: "NIJ evaluation",
        type: "Government-funded evaluation",
        relevance:
          "Useful for policy evaluation and prevention framing about who is already known to the registry system.",
        href: sourceLinks.SE05,
      },
    ],
  },
  {
    title: "Child safety and known perpetrators",
    sources: [
      {
        id: "SE11",
        title: "BJS young-child sexual assault report",
        type: "Official data",
        relevance:
          "Strong source for known-person and family/acquaintance prevention framing.",
        href: sourceLinks.SE11,
      },
      {
        id: "SE12",
        title: "OJJDP child maltreatment perpetrators",
        type: "Official data explainer",
        relevance:
          "Shows child maltreatment often occurs in caregiving and family contexts.",
        href: sourceLinks.SE12,
      },
      {
        id: "SE13",
        title: "Educator sexual misconduct synthesis",
        type: "Government report",
        relevance:
          "Supports trusted-access and institutional prevention framing.",
        href: sourceLinks.SE13,
      },
      {
        id: "SE25",
        title: "NSVRC SART Toolkit, Section 7.4",
        type: "Victim-prevention / nonprofit resource",
        relevance:
          "Helps connect registry evidence to broader community prevention practice.",
        href: sourceLinks.SE25,
      },
    ],
  },
  {
    title: "Family harm and collateral consequences",
    sources: [
      {
        id: "SE06",
        title: "SMART/FRD claimed impacts report",
        type: "Government evidence review",
        relevance:
          "Balanced source on employment, housing, family, wellbeing, and methodological limits.",
        href: sourceLinks.SE06,
      },
      {
        id: "SE07",
        title: "Family Members of Registered Sex Offenders",
        type: "Peer-reviewed study",
        relevance:
          "Documents spillover burdens experienced by spouses, children, and relatives.",
        href: sourceLinks.SE07,
      },
      {
        id: "SE08",
        title: "Transient Sex Offenders and Residence Restrictions",
        type: "Peer-reviewed study",
        relevance:
          "Useful for explaining how local restrictions can contribute to instability.",
        href: sourceLinks.SE08,
      },
      {
        id: "SE24",
        title: "Housing instability and homelessness among veterans",
        type: "Peer-reviewed study / PubMed index",
        relevance:
          "Quantitative support for housing instability concerns among a specific population.",
        href: sourceLinks.SE24,
      },
      {
        id: "SE26",
        title: "Banished",
        type: "Investigative media / illustrative case",
        relevance:
          "Miami-Dade case example of layered local rules and homelessness.",
        href: sourceLinks.SE26,
      },
    ],
  },
  {
    title: "Constitutional law and punitive effects",
    sources: [
      {
        id: "SE18",
        title: "Smith v. Doe",
        type: "U.S. Supreme Court decision",
        relevance:
          "Central counterweight: upheld Alaska’s registry as civil for ex post facto purposes.",
        href: sourceLinks.SE18,
      },
      {
        id: "SE19",
        title: "Packingham v. North Carolina",
        type: "U.S. Supreme Court decision",
        relevance:
          "Shows registry-related restrictions can violate constitutional rights when too broad.",
        href: sourceLinks.SE19,
      },
      {
        id: "SE20",
        title: "GAO-13-211 SORNA implementation report",
        type: "Government report",
        relevance:
          "Tracks implementation challenges, claimed benefits, and reported burdens.",
        href: sourceLinks.SE20,
      },
      {
        id: "SE27",
        title: "SMART 2025 Case Law Summary",
        type: "Government legal summary",
        relevance:
          "Issue-spotting tool for current registry litigation and doctrine.",
        href: sourceLinks.SE27,
      },
      {
        id: "SE28",
        title: "Banishment by a Thousand Laws",
        type: "Law review article",
        relevance:
          "Explains residence restrictions, exclusion zones, and banishment theory.",
        href: sourceLinks.SE28,
      },
    ],
  },
  {
    title: "Desistance, treatment, and risk",
    sources: [
      {
        id: "SE21",
        title: "ATSA evidence-based reform recommendations",
        type: "Expert policy recommendations",
        relevance:
          "Supports individualized, evidence-based reform rather than blanket offense-only systems.",
        href: sourceLinks.SE21,
      },
      {
        id: "SE22",
        title: "High-Risk Sex Offenders May Not Be High Risk Forever",
        type: "Peer-reviewed study / PubMed index",
        relevance:
          "Important source for time-offense-free, reviewable policy, and desistance framing.",
        href: sourceLinks.SE22,
      },
      {
        id: "SE23",
        title: "SMART treatment effectiveness brief",
        type: "Government research brief",
        relevance:
          "Connects treatment and rehabilitation evidence to prevention and reentry.",
        href: sourceLinks.SE23,
      },
    ],
  },
  {
    title: "Comparative public safety",
    sources: [
      {
        id: "SE15",
        title: "CDC firearm injury and death facts",
        type: "Official data explainer",
        relevance:
          "Context source for comparing how major public-safety harms are governed.",
        href: sourceLinks.SE15,
      },
      {
        id: "SE16",
        title: "NHTSA impaired-driving prevention technology report",
        type: "Government report",
        relevance:
          "Shows a prevention-and-technology response to another major public-safety harm.",
        href: sourceLinks.SE16,
      },
      {
        id: "SE17",
        title: "BJS nonfatal domestic violence report",
        type: "Official data",
        relevance:
          "Context source for relational harm and non-registry policy responses.",
        href: sourceLinks.SE17,
      },
    ],
  },
  {
    title: "Institutional responsibility",
    sources: [
      {
        id: "SE13",
        title: "Educator sexual misconduct synthesis",
        type: "Government report",
        relevance:
          "Supports prevention work focused on authority, access, reporting, and safeguards.",
        href: sourceLinks.SE13,
      },
      {
        id: "SE14",
        title: "DOJ OIG Nassar report",
        type: "Inspector General report",
        relevance:
          "Documented case example of institutional failure after credible allegations.",
        href: sourceLinks.SE14,
      },
    ],
  },
] as const;

export default function ResearchDataResources(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Research & Data Resources | The SOLAR Project"
        description="A plain-language evidence map for SOLAR’s registry reform work, including research on registry effectiveness, recidivism, prevention, collateral consequences, constitutional concerns, and individualized reform."
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
            The evidence base behind SOLAR’s registry reform work: what the
            research supports, what it does not prove, and how to speak carefully
            about public safety, accountability, and prevention.
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

        <GuideIntro title="Start here: how to read this guide" icon="🧭">
          <p>
            This is not a random bibliography. It is SOLAR’s public evidence
            map: a way to connect research, official data, court decisions, and
            prevention sources to careful public claims.
          </p>
          <p>
            Strong advocacy does not require overstating the evidence. This
            guide does not argue that sexual harm is rare, harmless, or
            unimportant. It argues that public safety policy should be honest
            about what registries can and cannot do.
          </p>
          <p>
            SOLAR uses evidence to challenge ineffective policy, not to excuse
            abuse or erase accountability.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="Use this guide for three jobs"
          subtitle="Start with the evidence question you are trying to answer."
          icon="📌"
          urgentActions={[
            <span key="claim">
              <strong>Check the claim.</strong> Are you talking about
              recidivism, rearrest, reconviction, reoffense, prevention, or
              constitutional burden?
            </span>,
            <span key="source">
              <strong>Match the source to the claim.</strong> Official data,
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
              <strong>Keep the caveat nearby.</strong> Every strong SOLAR claim
              should be paired with what the evidence does not prove.
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
            When SOLAR writes about research, use the measure the source
            actually used.
          </p>
        </GuideCallout>

        <GuideSectionHeader
          id="evidence-at-a-glance"
          number="1"
          title="Evidence matrix at a glance"
          subtitle="Seven recurring evidence themes, written for public use rather than academic shorthand."
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
                "What broad SORN policies have and have not shown about recidivism.",
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
                "Why individualized review, treatment, and time offense-free matter.",
            },
            {
              eyebrow: "Theme 6",
              title: "Policy comparison",
              icon: "🧩",
              tone: "neutral",
              description:
                "How other serious harms are addressed without permanent public branding.",
            },
          ]}
        />

        <div className="mt-6 grid gap-5">
          {evidenceThemes.map((theme, index) => (
            <GuideSectionCard key={theme.id}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
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

                <div className="flex flex-wrap gap-2">
                  {theme.anchorIds.map((id) => (
                    <a
                      key={id}
                      href={sourceLinks[id as keyof typeof sourceLinks]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-200 transition-colors"
                    >
                      {id}
                    </a>
                  ))}
                </div>
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
                    Risky wording to avoid
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-rose-950">
                    {theme.avoid}
                  </p>
                </div>

                <div className="rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
                  <h4 className="font-semibold text-sky-950">
                    Safer public language
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-sky-950">
                    {theme.safer}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <h4 className="font-semibold text-slate-950">
                    Best SOLAR uses
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {theme.uses}
                  </p>
                </div>
              </div>
            </GuideSectionCard>
          ))}
        </div>

        <GuideSectionHeader
          id="anchor-sources"
          number="2"
          title="Top anchor sources"
          subtitle="The front shelf: start here when building a guide, blog post, tracker note, testimony, or policy explainer."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              These sources are not all the evidence SOLAR uses. They are the
              most useful anchors for repeated public claims because they are
              official, peer-reviewed, legally central, or especially helpful
              for careful framing.
            </p>
          </GuideProse>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {anchorSources.map((source) => (
              <article
                key={source.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    {source.id}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {source.type}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-slate-950">
                  {source.title}
                </h3>

                <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-slate-900">
                      Why it matters
                    </dt>
                    <dd className="mt-1 text-slate-700">{source.why}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">
                      Claim it supports
                    </dt>
                    <dd className="mt-1 text-slate-700">{source.supports}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Caveat</dt>
                    <dd className="mt-1 text-slate-700">{source.caveat}</dd>
                  </div>
                </dl>

                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                >
                  Open source
                </a>
              </article>
            ))}
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="safe-claims"
          number="3"
          title="Claims SOLAR can safely make"
          subtitle="Use these as careful starting points, not slogans."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              These claims are strong enough for public-facing SOLAR work when
              they are connected to the listed sources and not pushed beyond
              what those sources actually show.
            </p>
          </GuideProse>

          <div className="mt-5 grid gap-3">
            {safeClaims.map((item) => (
              <div
                key={item.claim}
                className="rounded-2xl bg-white p-4 ring-1 ring-slate-200"
              >
                <p className="text-slate-800">{item.claim}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Anchor IDs: {item.ids}
                </p>
              </div>
            ))}
          </div>

          <GuideCallout
            tone="reminder"
            icon="🧠"
            title="Keep the prevention frame clear"
          >
            <p>
              SOLAR can argue that public registries are limited prevention
              tools without implying that sexual harm is rare, harmless, or
              unimportant. The stronger message is that prevention must focus on
              real risk, trusted access, reporting systems, treatment, stability,
              accountability, and evidence.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="careful-claims"
          number="4"
          title="Claims SOLAR should avoid or phrase carefully"
          subtitle="Credibility comes from saying less than the evidence, not more."
        />

        <GuideSectionCard>
          <div className="grid gap-4">
            {cautiousClaims.map((item) => (
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
            title="Copyable evidence-language template"
            tone="neutral"
            context="Use this when drafting testimony, a blog post, a tracker note, or an explainer."
            script={`The evidence does not support treating broad public registration and notification as a complete prevention strategy. The stronger reading is more careful: broad SORN policies have not demonstrated a clear overall recidivism benefit, many harms involve people not already listed on a public registry, and effective prevention requires individualized risk assessment, treatment, stable reentry, and institutional accountability.\n\nThat does not mean harm is rare or that accountability is optional. It means public safety policy should be honest about what a registry can and cannot do.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="how-solar-uses-evidence"
          number="5"
          title="How SOLAR uses evidence"
          subtitle="Evidence is a tool for prevention, accountability, dignity, and reform."
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
              Evidence-based registry reform is not anti-victim. It is
              pro-prevention. It asks whether a policy actually reduces harm,
              whether it creates new instability, whether it respects
              constitutional limits, and whether it helps communities respond to
              real risk instead of fear alone.
            </p>
          </GuideProse>

          <GuideChecklist
            id="evidence-use-checklist"
            title="Before publishing a SOLAR evidence claim"
            columns={1}
            items={[
              {
                id: "define-measure",
                label:
                  "Define the measure: rearrest, reconviction, reoffense, recidivism, prevalence, burden, or legal doctrine.",
              },
              {
                id: "source-type",
                label:
                  "Name the source type: official data, peer-reviewed research, government report, court decision, expert policy guidance, advocacy report, or media example.",
              },
              {
                id: "avoid-overclaim",
                label:
                  "Add what the evidence does not prove so the claim does not become broader than the source.",
              },
              {
                id: "use-primary",
                label:
                  "Use a primary source when possible, especially for statistics, court holdings, and specific legal claims.",
              },
              {
                id: "no-95",
                label:
                  "Do not use the specific “95% first-time offender” claim unless the primary source has been verified and the wording matches the study.",
              },
              {
                id: "victim-centered",
                label:
                  "Make clear that reform arguments do not deny harm, erase victims, or excuse abuse.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="source-library"
          number="6"
          title="Source library by topic"
          subtitle="Use this section to find the right anchor for the claim you are making."
        />

        <div className="grid gap-5">
          {sourceTopics.map((topic) => (
            <GuideSectionCard key={topic.title}>
              <h3 className="text-xl font-bold text-slate-950">
                {topic.title}
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {topic.sources.map((source) => (
                  <article
                    key={source.id}
                    className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                        {source.id}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                        {source.type}
                      </span>
                    </div>

                    <h4 className="mt-3 font-bold text-slate-950">
                      {source.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {source.relevance}
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
                ))}
              </div>
            </GuideSectionCard>
          ))}
        </div>

        <GuideSectionHeader
          id="resources"
          number="7"
          title="Research tools and next steps"
          subtitle="Start with official and primary sources, then use secondary sources for context."
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
                  "Federal resources on sex offender management, SORNA, case law summaries, and research briefs.",
                href: "https://smart.ojp.gov/",
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

          <SourceList
            note="Source links should be periodically rechecked. Government PDFs and agency pages can move when websites are redesigned."
            sources={[
              {
                label: "SE01 — Recidivism of Sex Offenders Released from Prison in 1994",
                href: sourceLinks.SE01,
                description:
                  "Official BJS data source for recidivism measurement and detected sexual rearrest/reconviction.",
              },
              {
                label: "SE02 — Recidivism of Adult Sexual Offenders",
                href: sourceLinks.SE02,
                description:
                  "SMART Office research brief on adult recidivism patterns and measurement limits.",
              },
              {
                label:
                  "SE03 — The Effectiveness of Sex Offender Registration and Notification",
                href: sourceLinks.SE03,
                description:
                  "Peer-reviewed meta-analysis of 25 years of registration and notification findings.",
              },
              {
                label:
                  "SE04 — Do Sex Offender Registration and Notification Laws Affect Criminal Behavior?",
                href: sourceLinks.SE04,
                description:
                  "Nuanced study separating registration effects from public notification effects.",
              },
              {
                label:
                  "SE06 — Summary and Assessment of Research on Claimed Impacts to Registered Offenders",
                href: sourceLinks.SE06,
                description:
                  "Government evidence review on collateral consequences and methodological caution.",
              },
              {
                label:
                  "SE11 — Sexual Assault of Young Children as Reported to Law Enforcement",
                href: sourceLinks.SE11,
                description:
                  "Official source for known-person and family/acquaintance prevention framing.",
              },
              {
                label: "SE18 — Smith v. Doe",
                href: sourceLinks.SE18,
                description:
                  "Central Supreme Court precedent upholding a registry scheme as civil for ex post facto purposes.",
              },
              {
                label: "SE19 — Packingham v. North Carolina",
                href: sourceLinks.SE19,
                description:
                  "Supreme Court decision addressing broad internet restrictions and constitutional rights.",
              },
              {
                label:
                  "SE22 — High-Risk Sex Offenders May Not Be High Risk Forever",
                href: sourceLinks.SE22,
                description:
                  "Peer-reviewed desistance source supporting time-sensitive, reviewable policy.",
              },
              {
                label: "SE14 — DOJ OIG Nassar Report",
                href: sourceLinks.SE14,
                description:
                  "Inspector General report used as a documented institutional-failure case example.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}