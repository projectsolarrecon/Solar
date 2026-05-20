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
  PullQuoteBlock,
  SoftDivider,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
  RoleGuidanceGrid,
  TimelineGuidanceGrid,
  DoDontJudgment,
  RedFlagGreenFlag,
  DualDepthSection,
  GuideChecklist,
} from "../../components/solar";

const sourceLinks = {
  wetterlingReginfo:
    "https://www.reginfo.gov/public/do/eAgendaViewRule?ruleID=218462",
  wetterlingDoj1995:
    "https://www.justice.gov/archive/opa/pr/Pre_96/April95/199.txt.html",
  wetterlingFederalRegister:
    "https://www.govinfo.gov/content/pkg/FR-1995-04-12/html/95-8966.htm",
  megansLawCongress:
    "https://www.congress.gov/bill/104th-congress/house-bill/2137",
  megansLawDoj1997:
    "https://www.justice.gov/archive/opa/pr/1997/April97/140vaw.htm",
  smartCurrentLaw: "https://smart.ojp.gov/sorna/current-law",
  smartLegislativeHistory:
    "https://smart.ojp.gov/sorna/current-law/legislative-history",
  smartAdamWalshAnniversary:
    "https://smart.ojp.gov/blog/smart-office-recognizes-10th-anniversary-adam-walsh-act",
  smithJustia: "https://supreme.justia.com/cases/federal/us/538/84/",
  smithOyez: "https://www.oyez.org/cases/2002/01-729",
  snyderJustia:
    "https://law.justia.com/cases/federal/appellate-courts/ca6/15-1536/15-1536-2016-08-25.html",
  snyderMitchellHamline:
    "https://mitchellhamline.edu/sex-offense-litigation-policy/2017/08/10/doe-v-snyder-2015-2/",
  packinghamSupremeCourt:
    "https://www.supremecourt.gov/opinions/16pdf/15-1194_08l1.pdf",
  packinghamOyez: "https://www.oyez.org/cases/2016/15-1194",
  polanskiLaCourt:
    "https://ww2.lacourt.org/hp/4dqnllofafmpfifvdjkko2sa/1374562163.pdf",
  epsteinNpa:
    "https://www.documentcloud.org/documents/6184602-Jeffrey-Epstein-non-prosecution-agreement/",
  epsteinOprReport: "https://www.justice.gov/opr/page/file/1336471/dl",
  epsteinOprStatement:
    "https://www.justice.gov/archives/opa/pr/statement-doj-office-professional-responsibility-report-jeffrey-epstein-2006-2008",
  cosbyPaSupremeCourt:
    "https://www.pacourts.us/Storage/media/pdfs/20210630/163038-june302021opinionwecht.pdf",
  weinsteinNyCourt:
    "https://www.nycourts.gov/ctapps/Decisions/2024/Apr24/24opn24-Decision.pdf",
  weinsteinLaDa:
    "https://da.lacounty.gov/media/news/harvey-weinstein-found-guilty-rape-los-angeles-county",
  rKellyEdny:
    "https://www.justice.gov/usao-edny/pr/r-kelly-sentenced-30-years-prison",
  rKellyNdil:
    "https://www.justice.gov/usao-ndil/pr/robert-kelly-sentenced-20-years",
  pennsylvaniaGrandJury: "https://www.attorneygeneral.gov/report/",
  sbcGuidepost:
    "https://www.documentcloud.org/documents/22031759-guidepost-solutions-independent-investigation-report-sbc-executive-committee",
  nassarDoj:
    "https://www.justice.gov/usao-wdmi/pr/2017_1207_Nassar",
  nassarOig: "https://oig.justice.gov/reports/investigation-and-review-federal-bureau-investigations-handling-allegations-sexual",
  boyScoutsAp:
    "https://apnews.com/article/sexual-abuse-boy-scouts-of-america-c52a60cd7b0b3df5b6e9c6247837611c",
  boyScoutsReuters2026:
    "https://www.reuters.com/legal/government/us-supreme-court-rejects-challenge-246-billion-boy-scouts-sex-abuse-settlement-2026-01-12/",
  hrwRaisedRegistry:
    "https://www.hrw.org/report/2013/05/01/raised-registry/irreparable-harm-placing-children-sex-offender-registries-us",
  hrwMoreHarm:
    "https://www.hrw.org/news/2013/05/01/us-more-harm-good",
  govUkSarahsLaw:
    "https://www.gov.uk/guidance/find-out-if-a-person-has-a-record-for-child-sexual-offences",
  govUkSarahsLawPdf:
    "https://assets.publishing.service.gov.uk/media/642aa9f0fbe620000c17db03/Annex_E_-_Public_guidance_on_the_scheme.pdf",
  justiceCanadaNsor:
    "https://www.justice.gc.ca/eng/cj-jp/victims-victimes/factsheets-fiches/nsor-rnds.html",
  canadaSoira:
    "https://laws-lois.justice.gc.ca/eng/acts/S-8.7/",
} as const;

const externalLinkClass =
  "font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:text-slate-700 hover:decoration-slate-700";

const sourceInventory = [
  {
    label: "Jacob Wetterling Act regulatory summary",
    href: sourceLinks.wetterlingReginfo,
    description:
      "Federal summary describing the Wetterling Act as part of the 1994 Violent Crime Control and Law Enforcement Act.",
  },
  {
    label: "DOJ 1995 Wetterling guidance announcement",
    href: sourceLinks.wetterlingDoj1995,
    description:
      "Department of Justice archive announcing proposed federal guidance for state registration systems.",
  },
  {
    label: "Federal Register proposed Wetterling guidelines",
    href: sourceLinks.wetterlingFederalRegister,
    description:
      "Federal Register notice describing proposed DOJ guidelines for implementing the Wetterling Act.",
  },
  {
    label: "Megan's Law congressional bill page",
    href: sourceLinks.megansLawCongress,
    description:
      "Congress.gov bill record for H.R. 2137, the federal Megan's Law amendment.",
  },
  {
    label: "DOJ 1997 Megan's Law guidelines",
    href: sourceLinks.megansLawDoj1997,
    description:
      "Department of Justice archive announcing guidelines for Megan's Law and the Wetterling Act.",
  },
  {
    label: "SMART Office current federal SORNA law",
    href: sourceLinks.smartCurrentLaw,
    description:
      "Official SMART Office page for current federal sex-offender registration and notification law.",
  },
  {
    label: "SMART Office legislative history",
    href: sourceLinks.smartLegislativeHistory,
    description:
      "Federal legislative history of sex-offender registration and notification law.",
  },
  {
    label: "Smith v. Doe, 538 U.S. 84",
    href: sourceLinks.smithJustia,
    description:
      "U.S. Supreme Court decision treating Alaska's registry scheme as civil rather than punitive for ex post facto purposes.",
  },
  {
    label: "Does #1-5 v. Snyder, 834 F.3d 696",
    href: sourceLinks.snyderJustia,
    description:
      "Sixth Circuit decision analyzing punitive effects of Michigan registry restrictions.",
  },
  {
    label: "Packingham v. North Carolina",
    href: sourceLinks.packinghamSupremeCourt,
    description:
      "U.S. Supreme Court opinion addressing First Amendment limits on broad social-media bans.",
  },
  {
    label: "DOJ OPR Epstein report",
    href: sourceLinks.epsteinOprReport,
    description:
      "Office of Professional Responsibility report on the U.S. Attorney's Office resolution of the 2006-2008 Epstein investigation.",
  },
  {
    label: "Commonwealth v. Cosby",
    href: sourceLinks.cosbyPaSupremeCourt,
    description:
      "Pennsylvania Supreme Court opinion vacating Bill Cosby's conviction.",
  },
  {
    label: "People v. Weinstein",
    href: sourceLinks.weinsteinNyCourt,
    description:
      "New York Court of Appeals opinion reversing Harvey Weinstein's New York conviction.",
  },
  {
    label: "R. Kelly EDNY sentencing",
    href: sourceLinks.rKellyEdny,
    description:
      "Department of Justice announcement of the Eastern District of New York sentence.",
  },
  {
    label: "R. Kelly NDIL sentencing",
    href: sourceLinks.rKellyNdil,
    description:
      "Department of Justice announcement of the Northern District of Illinois sentence.",
  },
  {
    label: "Pennsylvania Grand Jury Report",
    href: sourceLinks.pennsylvaniaGrandJury,
    description:
      "Pennsylvania Attorney General report page for the clergy-abuse grand jury investigation.",
  },
  {
    label: "Nassar DOJ sentencing announcement",
    href: sourceLinks.nassarDoj,
    description:
      "Department of Justice announcement of Larry Nassar's federal sentence.",
  },
  {
    label: "DOJ OIG report on Nassar/FBI handling",
    href: sourceLinks.nassarOig,
    description:
      "Inspector General report on the FBI's handling of allegations against Larry Nassar.",
  },
  {
    label: "Human Rights Watch: Raised on the Registry",
    href: sourceLinks.hrwRaisedRegistry,
    description:
      "Research report on harms of youth registration and public registry policies.",
  },
  {
    label: "UK Child Sex Offender Disclosure Scheme",
    href: sourceLinks.govUkSarahsLaw,
    description:
      "Official GOV.UK page for the disclosure scheme often called Sarah's Law.",
  },
  {
    label: "Canada Sex Offender Information Registration Act",
    href: sourceLinks.canadaSoira,
    description:
      "Canadian statute establishing the national sex-offender information registration framework.",
  },
];

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="High-Profile Case Analysis | The SOLAR Project"
        description="A plain-language SOLAR resource guide explaining how high-profile cases, institutional failures, and public fear shaped registry law, and what they do and do not prove about prevention."
        keywords="sex offense registry history, Megan's Law, Jacob Wetterling Act, SORNA, Smith v Doe, Does v Snyder, Packingham, institutional abuse prevention, registry policy"
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
            High-Profile Case Analysis
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            How landmark cases, institutional failures, and public fear shaped
            sex-offense registry law — and what they do and do not prove about
            prevention.
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

        <GuideIntro title="Start Here" icon="🧭">
          <p>
            High-profile cases matter because they often become the stories
            lawmakers, courts, media, and communities use to explain sex-offense
            policy. But a famous case is not the same thing as a complete
            prevention strategy.
          </p>

          <p>
            This guide separates three things that often get mixed together:
            the cases that shaped registry law, the institutional failures that
            allowed harm to continue, and the prevention lessons that can make
            children and communities safer without relying only on public lists.
          </p>
        </GuideIntro>

        <GuideCallout tone="research" icon="🔎" title="How to read this page">
          <p>
            This is a non-graphic, policy-focused guide. It names cases and
            institutions because they changed law, public understanding, or
            prevention practice. It does not retell abuse details for shock
            value.
          </p>
        </GuideCallout>

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Pattern 1",
              title: "Law-making cases",
              icon: "⚖️",
              tone: "legal",
              description:
                "Some cases became symbols that drove federal registry laws, public notification, and constitutional litigation.",
            },
            {
              eyebrow: "Pattern 2",
              title: "Power and delayed accountability",
              icon: "🏛️",
              tone: "warning",
              description:
                "Celebrity, money, institutional status, and public trust can affect whether harm is reported, believed, charged, or punished.",
            },
            {
              eyebrow: "Pattern 3",
              title: "Real prevention lessons",
              icon: "🛡️",
              tone: "success",
              description:
                "Safety improves when systems reduce secrecy, limit unchecked access, document concerns, and respond early.",
            },
          ]}
        />

        <PullQuoteBlock>
          High-profile cases can explain why laws changed, but they should not
          be mistaken for a complete prevention strategy.
        </PullQuoteBlock>

<GuideSectionHeader
          id="framework"
          number="1"
          title="The legal framework: how registry law grew"
          subtitle="The modern U.S. registry system developed through federal incentives, public-notification laws, and court decisions about whether registration is civil regulation or punishment."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The{" "}
              <a
                href={sourceLinks.wetterlingReginfo}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jacob Wetterling Act
              </a>{" "}
              began the federal registry framework in 1994 by encouraging
              states to establish registration systems for people convicted of
              certain offenses against children and sexually violent offenses.
              Early guidance was directed largely at state systems and law
              enforcement implementation, as reflected in the{" "}
              <a
                href={sourceLinks.wetterlingDoj1995}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                DOJ's 1995 guidance announcement
              </a>{" "}
              and the{" "}
              <a
                href={sourceLinks.wetterlingFederalRegister}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Federal Register proposed guidelines
              </a>
              .
            </p>

            <p>
              The federal{" "}
              <a
                href={sourceLinks.megansLawCongress}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Megan's Law amendment
              </a>{" "}
              changed the public-facing direction of registry policy by pushing
              community notification and public access. The{" "}
              <a
                href={sourceLinks.megansLawDoj1997}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                DOJ's 1997 Megan's Law guidelines
              </a>{" "}
              show how notification became part of the federal implementation
              framework.
            </p>

            <p>
              The{" "}
              <a
                href={sourceLinks.smartCurrentLaw}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sex Offender Registration and Notification Act
              </a>{" "}
              under the Adam Walsh Act later created more comprehensive federal
              baselines. The SMART Office's{" "}
              <a
                href={sourceLinks.smartLegislativeHistory}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                legislative history
              </a>{" "}
              places the Wetterling Act, Megan's Law, and SORNA in sequence.
              The SMART Office has described the Adam Walsh Act as establishing
              baseline registration and notification standards and expanding
              the range of offenses those systems address.
            </p>
          </GuideProse>

          <GuideCallout tone="legal" icon="⚖️" title="Court labels matter">
            <p>
              Courts have often treated registration as civil regulation rather
              than punishment. But modern registry systems can include public
              exposure, in-person reporting, geographic restrictions, internet
              rules, and long-term collateral consequences. That is why newer
              litigation often focuses on the practical effects of the law, not
              just the label lawmakers give it.
            </p>
          </GuideCallout>

          <TimelineGuidanceGrid
            title="Key federal law and constitutional milestones"
            stages={[
              {
                stage: "1994: Jacob Wetterling Act",
                icon: "📍",
                whatChanges:
                  "Federal law encouraged states to create registration systems tied to certain offenses against children and sexually violent offenses.",
                whatToDo:
                  "Use this as the starting point for understanding federal registry incentives, not as the full story of public notification.",
              },
              {
                stage: "1996: Megan's Law",
                icon: "📣",
                whatChanges:
                  "Federal policy moved toward community notification and public access to registry information.",
                whatToDo:
                  "Separate registration from public notification; they are related, but not identical policy choices.",
              },
              {
                stage: "2003: Smith v. Doe",
                icon: "🏛️",
                whatChanges:
                  "The Supreme Court treated Alaska's registry as civil and nonpunitive for ex post facto purposes.",
                whatToDo:
                  "When citing this case, also explain that later registry systems may be more burdensome than the system the Court reviewed.",
              },
              {
                stage: "2006: Adam Walsh Act / SORNA",
                icon: "🧾",
                whatChanges:
                  "SORNA created federal baseline standards, including offense-based tiers and broader implementation rules.",
                whatToDo:
                  "Check whether a claim is about federal SORNA, a state registry law, local restrictions, or supervision conditions.",
              },
              {
                stage: "2016: Does v. Snyder",
                icon: "🚧",
                whatChanges:
                  "The Sixth Circuit found that Michigan's amended registry scheme imposed punitive effects when applied retroactively.",
                whatToDo:
                  "Use this case to show that courts can examine real-world burdens, not only statutory labels.",
              },
              {
                stage: "2017: Packingham",
                icon: "💬",
                whatChanges:
                  "The Supreme Court struck down a broad social-media restriction on First Amendment grounds.",
                whatToDo:
                  "Use this case carefully: it does not erase registration rules, but it does limit overbroad speech and internet bans.",
              },
            ]}
          />

          <SoftDivider label="Case anchors" />

          <GuideProse>
            <p>
              In{" "}
              <a
                href={sourceLinks.smithJustia}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Smith v. Doe
              </a>
              , the Supreme Court held that Alaska's registry law was civil
              rather than punitive for purposes of retroactive application. The{" "}
              <a
                href={sourceLinks.smithOyez}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Oyez case summary
              </a>{" "}
              is useful for a quick orientation, but the full opinion is the
              better source for precise legal language.
            </p>

            <p>
              In{" "}
              <a
                href={sourceLinks.snyderJustia}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Does #1-5 v. Snyder
              </a>
              , the Sixth Circuit analyzed Michigan's registry amendments and
              concluded that the challenged scheme imposed punitive effects
              when applied retroactively. A{" "}
              <a
                href={sourceLinks.snyderMitchellHamline}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mitchell Hamline case page
              </a>{" "}
              provides a litigation-policy summary, but the court decision is
              the primary legal anchor.
            </p>

            <p>
              In{" "}
              <a
                href={sourceLinks.packinghamSupremeCourt}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Packingham v. North Carolina
              </a>
              , the Supreme Court addressed a broad ban on access to social
              networking websites. The{" "}
              <a
                href={sourceLinks.packinghamOyez}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Oyez page
              </a>{" "}
              is a helpful overview, but the Supreme Court PDF should be used
              for exact wording.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="high-profile-cases"
          number="2"
          title="When high-profile cases shape public fear"
          subtitle="Celebrity and media-heavy cases can reveal real failures, but they can also distort what the public thinks typical risk looks like."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              High-profile cases can become policy shorthand. They can show
              real harm, real institutional failure, and real accountability
              gaps. But they can also make rare fact patterns look like the
              whole problem.
            </p>

            <p>
              The safer policy question is not simply, “Was this case
              horrifying?” The safer question is, “What system failed, who had
              power, who had access, who ignored warnings, and what prevention
              measure would have made earlier intervention more likely?”
            </p>
          </GuideProse>

          <DualDepthSection
            simpleTitle="Plain-language takeaway"
            deepTitle="Deeper policy point"
            simple={
              <p>
                Famous cases are useful when they reveal patterns. They are
                dangerous when they become the only pattern lawmakers see.
              </p>
            }
            deep={
              <p>
                Registry expansion often follows public outrage, but prevention
                depends on more than public identification after conviction. It
                also depends on reporting pathways, oversight, institutional
                accountability, treatment access, stable reentry, and rules
                that focus on actual risk instead of symbolic punishment.
              </p>
            }
          />

          <DoDontJudgment
            dos={[
              <span>
                Use named cases to explain a specific policy lesson, such as
                delayed reporting, institutional shielding, prosecutorial
                discretion, or overbroad collateral consequences.
              </span>,
              <span>
                Anchor claims to court opinions, official reports, agency
                records, or reputable research whenever possible.
              </span>,
              <span>
                Keep the focus on prevention, accountability, and public safety
                rather than graphic details.
              </span>,
            ]}
            donts={[
              <span>
                Do not treat celebrity cases as proof that every case, person,
                risk level, or registry category is the same.
              </span>,
              <span>
                Do not use sensational cases to justify laws without asking
                whether the law would have prevented the harm.
              </span>,
              <span>
                Do not erase victims, but do not turn harm into spectacle.
              </span>,
            ]}
            judgment={[
              <span>
                Some media sources are useful for dates and procedural history.
                For legal claims, prefer court records, official reports, and
                agency documents.
              </span>,
            ]}
          />

          <GuideProse>
            <p>
              The long-running{" "}
              <a
                href={sourceLinks.polanskiLaCourt}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Roman Polanski case
              </a>{" "}
              is often cited as an example of unresolved accountability,
              celebrity status, flight, and the limits of delayed prosecution.
              It is useful as a justice-system case study, not as a model for
              ordinary registry policy.
            </p>

            <p>
              The{" "}
              <a
                href={sourceLinks.epsteinNpa}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jeffrey Epstein non-prosecution agreement
              </a>{" "}
              and the DOJ Office of Professional Responsibility's{" "}
              <a
                href={sourceLinks.epsteinOprReport}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                report on the 2006-2008 federal investigation
              </a>{" "}
              are especially important for understanding power, access to elite
              counsel, victim-notification failures, and the damage caused when
              institutions resolve serious allegations quietly.
            </p>

            <p>
              The Pennsylvania Supreme Court's decision in{" "}
              <a
                href={sourceLinks.cosbyPaSupremeCourt}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Commonwealth v. Cosby
              </a>{" "}
              is not mainly a registry case. It is a due-process and
              prosecution-history case. It shows why public outrage and legal
              process are different things, and why advocates should be precise
              about what a court actually held.
            </p>

            <p>
              The New York Court of Appeals decision in{" "}
              <a
                href={sourceLinks.weinsteinNyCourt}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                People v. Weinstein
              </a>{" "}
              and the Los Angeles District Attorney's announcement of the{" "}
              <a
                href={sourceLinks.weinsteinLaDa}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Los Angeles conviction
              </a>{" "}
              show why procedural rules, appellate review, and separate
              jurisdictions matter. A reversed conviction does not mean the
              public questions disappeared; it means the court found a legal
              error in the proceeding it reviewed.
            </p>

            <p>
              The federal sentences in the R. Kelly cases, including the{" "}
              <a
                href={sourceLinks.rKellyEdny}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Eastern District of New York sentence
              </a>{" "}
              and the{" "}
              <a
                href={sourceLinks.rKellyNdil}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Northern District of Illinois sentence
              </a>
              , are useful for understanding how celebrity, long-term access,
              networks, and delayed accountability can interact.
            </p>
          </GuideProse>
        </GuideSectionCard>

<GuideSectionHeader
          id="institutions"
          number="3"
          title="Where real risk often sits: authority, access, and shielding"
          subtitle="Many major abuse cases were not driven by anonymous stranger danger. They involved trusted roles, repeated access, institutional silence, or failures to act on warnings."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              SOLAR's core prevention concern is not whether harm is serious.
              It is. The question is whether the policy response focuses on the
              places where harm often grows: authority, access, secrecy,
              grooming opportunities, weak reporting systems, and institutional
              self-protection.
            </p>

            <p>
              The Pennsylvania Attorney General's{" "}
              <a
                href={sourceLinks.pennsylvaniaGrandJury}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                grand jury report page on Catholic clergy abuse
              </a>{" "}
              is a major example of institutional records revealing patterns
              that were not solved by public registry logic alone. The issue was
              not just individual offending. It was the failure of trusted
              systems to stop, report, and prevent further harm.
            </p>

            <p>
              The Southern Baptist Convention's independently commissioned{" "}
              <a
                href={sourceLinks.sbcGuidepost}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Guidepost Solutions investigation report
              </a>{" "}
              is another example of why prevention has to examine internal
              reporting channels, leadership response, insurance and legal
              incentives, and whether survivors are heard or discouraged.
            </p>

            <p>
              The Larry Nassar case shows how youth sports, medical authority,
              institutional reputation, and delayed action can combine. The DOJ
              announced Nassar's{" "}
              <a
                href={sourceLinks.nassarDoj}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                federal sentence
              </a>
              , and the DOJ Inspector General later reviewed the{" "}
              <a
                href={sourceLinks.nassarOig}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                FBI's handling of allegations
              </a>
              .
            </p>

            <p>
              The Boy Scouts bankruptcy and abuse-claims process, including the{" "}
              <a
                href={sourceLinks.boyScoutsAp}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                $2.46 billion reorganization plan
              </a>{" "}
              and later appellate developments, shows how youth-serving
              institutions can face enormous delayed accountability after
              allegations accumulate across decades.
            </p>
          </GuideProse>

          <RedFlagGreenFlag
            red={
              <div className="space-y-3">
                <p>
                  A system is at higher risk when adults have private,
                  repeated, undocumented access to children or vulnerable people
                  and complaints are handled informally, internally, or through
                  reputation management.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>One adult alone with a child without visibility.</li>
                  <li>No clear reporting path outside the chain of command.</li>
                  <li>Complaints treated as public-relations problems.</li>
                  <li>Powerful people given quiet transfers or special access.</li>
                  <li>Background checks treated as the whole prevention plan.</li>
                </ul>
              </div>
            }
            green={
              <div className="space-y-3">
                <p>
                  A safer system reduces secrecy and makes early intervention
                  more likely.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Two-adult rules and open-door visibility practices.</li>
                  <li>Written reporting channels that bypass conflicted leaders.</li>
                  <li>Mandatory reporting training with real follow-through.</li>
                  <li>Independent review when complaints involve authority figures.</li>
                  <li>Documentation of boundary concerns before they escalate.</li>
                </ul>
              </div>
            }
          />

          <GuideCallout
            tone="success"
            icon="🛡️"
            title="Prevention is more than background checks"
          >
            <p>
              Background checks can matter, but many serious cases involve
              people who were not already on a registry or whose access came
              from trust, status, or institutional permission. Prevention has to
              include supervision, transparency, reporting, documentation, and
              willingness to act before a criminal conviction exists.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="policy-comparison"
          number="4"
          title="Policy comparison: public lists are not the only model"
          subtitle="The United States relies heavily on public registry access. Other systems use more controlled disclosure or police-access models."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              U.S. registry policy is often presented as the obvious or only
              model. It is not. The federal system grew through state
              incentives, public-notification laws, and SORNA baselines. But
              other countries have chosen different disclosure structures.
            </p>

            <p>
              The United Kingdom's Child Sex Offender Disclosure Scheme,
              commonly called{" "}
              <a
                href={sourceLinks.govUkSarahsLaw}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sarah's Law
              </a>
              , allows a person to ask police whether someone with contact with
              a child has a relevant record or poses a risk. The government's{" "}
              <a
                href={sourceLinks.govUkSarahsLawPdf}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                public guidance for applicants
              </a>{" "}
              describes the scheme as a controlled disclosure process, not a
              general public registry.
            </p>

            <p>
              Canada uses a national registration framework under the{" "}
              <a
                href={sourceLinks.canadaSoira}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sex Offender Information Registration Act
              </a>
              . Canadian materials describe the National Sex Offender Registry
              as a law-enforcement tool rather than a broad public website.
              That does not mean Canada's system is perfect; it means public
              disclosure is a policy choice, not an inevitability.
            </p>

            <p>
              Human Rights Watch has documented harms from public registration,
              especially for youth, in{" "}
              <a
                href={sourceLinks.hrwRaisedRegistry}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Raised on the Registry
              </a>{" "}
              and its accompanying summary,{" "}
              <a
                href={sourceLinks.hrwMoreHarm}
                className={externalLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Harm Than Good
              </a>
              . Those sources should not be the only evidence used in policy
              work, but they are important for understanding collateral harms,
              family impacts, and youth-specific concerns.
            </p>
          </GuideProse>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "United States",
                title: "Broad public registry model",
                icon: "🇺🇸",
                tone: "warning",
                description:
                  "Public-facing registry access is common, and federal baselines encourage substantial state implementation.",
              },
              {
                eyebrow: "United Kingdom",
                title: "Controlled disclosure model",
                icon: "🇬🇧",
                tone: "info",
                description:
                  "The disclosure scheme lets people ask police about a person with child contact, but it is not a general public registry.",
              },
              {
                eyebrow: "Canada",
                title: "Law-enforcement access model",
                icon: "🇨🇦",
                tone: "research",
                description:
                  "The national registry is structured as a police tool under federal registration law rather than a broad public lookup site.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🧠" title="The comparison question">
            <p>
              A good policy comparison does not ask, “Which country is soft or
              harsh?” It asks, “Which system improves prevention, reporting,
              accountability, proportionality, and reintegration with the fewest
              avoidable harms?”
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="how-to-use"
          number="5"
          title="How to use high-profile cases responsibly"
          subtitle="For advocacy, research, journalism, family conversations, or policy testimony, the goal is to be accurate without becoming sensational."
        />

        <GuideSectionCard>
          <RoleGuidanceGrid
            title="Different readers can use this guide in different ways"
            roles={[
              {
                role: "Advocates",
                icon: "📣",
                guidance:
                  "Use cases to show patterns, not to inflame fear. Ask whether a proposed law would have prevented the harm, or whether it only expands punishment after conviction.",
              },
              {
                role: "Families and loved ones",
                icon: "👪",
                guidance:
                  "Use this guide to understand why public cases shape fear, law, and stigma. It can help you separate headlines from practical safety planning.",
              },
              {
                role: "Researchers and policymakers",
                icon: "📚",
                guidance:
                  "Treat official reports, court opinions, and research as your anchors. Avoid relying on viral summaries when making legal or policy claims.",
              },
              {
                role: "People on registries",
                icon: "🧭",
                guidance:
                  "This guide can help explain why the law may feel broader than the public stories used to justify it. It is not legal advice and does not replace state-specific compliance guidance.",
              },
            ]}
          />

          <GuideChecklist
            id="responsible-case-use"
            title="Responsible use checklist"
            columns={1}
            items={[
              {
                id: "identify-pattern",
                label:
                  "Name the specific pattern the case illustrates: lawmaking, delayed reporting, authority, institutional shielding, procedural error, or prevention failure.",
              },
              {
                id: "use-primary-source",
                label:
                  "Anchor legal claims to a court opinion, statute, official agency page, or investigative report whenever possible.",
              },
              {
                id: "avoid-spectacle",
                label:
                  "Avoid graphic detail unless it is necessary to understand the policy issue.",
              },
              {
                id: "ask-prevention",
                label:
                  "Ask whether the proposed response would have prevented earlier access, secrecy, retaliation, or non-reporting.",
              },
              {
                id: "separate-systems",
                label:
                  "Separate criminal sentencing, civil registration, public notification, supervision conditions, school rules, and institutional safety protocols.",
              },
              {
                id: "check-date",
                label:
                  "Check dates and procedural posture. A conviction, reversal, resentencing, settlement, or appeal can change how a case should be described.",
              },
            ]}
          />

          <GuideProse>
            <p>
              In public education, the most useful sentence is often not “This
              terrible case happened.” It is: “This case shows why prevention
              has to focus on access, authority, reporting, oversight, and
              accountability before harm is repeated.”
            </p>
          </GuideProse>
        </GuideSectionCard>

<GuideSectionHeader
          id="resources"
          number="6"
          title="Resources and next steps"
          subtitle="Use these links to verify the framework, compare policy models, and keep researching without relying only on headlines."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Best starting points"
            description="These sources are useful first stops because they are official, primary, or research-heavy."
            resources={[
              {
                label: "SMART Office federal legislative history",
                href: sourceLinks.smartLegislativeHistory,
                badge: "Official",
                description:
                  "Best starting point for the federal sequence from Wetterling to Megan's Law to SORNA.",
              },
              {
                label: "Smith v. Doe",
                href: sourceLinks.smithJustia,
                badge: "Court",
                description:
                  "Supreme Court decision often cited for the civil-regulatory framing of registry law.",
              },
              {
                label: "Does v. Snyder",
                href: sourceLinks.snyderJustia,
                badge: "Court",
                description:
                  "Sixth Circuit decision examining punitive effects of a modern registry scheme.",
              },
              {
                label: "Packingham v. North Carolina",
                href: sourceLinks.packinghamSupremeCourt,
                badge: "Court",
                description:
                  "Supreme Court decision on First Amendment limits for broad internet restrictions.",
              },
              {
                label: "Pennsylvania Grand Jury Report",
                href: sourceLinks.pennsylvaniaGrandJury,
                badge: "Official",
                description:
                  "Major official record on institutional abuse, delayed accountability, and systemic failures.",
              },
              {
                label: "Human Rights Watch: Raised on the Registry",
                href: sourceLinks.hrwRaisedRegistry,
                badge: "Research",
                description:
                  "Detailed report on public-registration harms, especially for youth and families.",
              },
              {
                label: "UK Child Sex Offender Disclosure Scheme",
                href: sourceLinks.govUkSarahsLaw,
                badge: "Official",
                description:
                  "Example of a controlled disclosure model rather than a broad public registry.",
              },
              {
                label: "Canada SOIRA statute",
                href: sourceLinks.canadaSoira,
                badge: "Statute",
                description:
                  "Federal Canadian statute supporting a police-access registration framework.",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Legislative Advocacy Guide",
                description:
                  "Use this with policy testimony, bill analysis, and reform messaging.",
                to: "/resources/legislative-advocacy",
              },
              {
                title: "Know Your Rights",
                description:
                  "Helpful for readers who need practical legal orientation rather than policy history.",
                to: "/resources/know-your-rights",
              },
              {
                title: "Reentry Planning Guide",
                description:
                  "Connects policy history to practical stability after incarceration or supervision.",
                to: "/resources/reentry-planning",
              },
              {
                title: "Family Support Guide",
                description:
                  "Helps loved ones communicate, plan, and stay grounded while navigating stigma and legal complexity.",
                to: "/resources/family-support",
              },
            ]}
          />

          <SourceList
            title="Sources and verification"
            note="Several links were live-checked while preparing this sandbox preview, especially official, court, DOJ, GOV.UK, HRW, and current-news sources. Before production publication, re-check fragile PDFs, DocumentCloud mirrors, and media links."
            sources={sourceInventory}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="source-manifest"
          number="7"
          title="Source & Link Manifest"
          subtitle="Compact audit trail for production review."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Use this manifest during review to decide whether each source is
              strong enough, whether a better primary source exists, and whether
              the link should remain in the final production guide.
            </p>

            <ul>
              <li>
                <strong>Jacob Wetterling Act sources:</strong> Reginfo, DOJ
                archive, and Federal Register pages support the origin and early
                implementation discussion. Source type: official. Validation:
                live-checked during sandbox drafting.
              </li>
              <li>
                <strong>Megan's Law sources:</strong> Congress.gov and DOJ
                archive pages support the public-notification discussion. Source
                type: official. Validation: live-checked during sandbox
                drafting.
              </li>
              <li>
                <strong>Adam Walsh Act / SORNA sources:</strong> SMART Office
                current-law and legislative-history pages support federal
                baseline and implementation claims. Source type: official
                agency. Validation: live-checked during sandbox drafting.
              </li>
              <li>
                <strong>Smith, Snyder, and Packingham:</strong> Justia, Oyez,
                court, and Supreme Court sources support constitutional-history
                discussion. Source type: court / legal summary. Validation:
                live-checked for major pages; exact PDF availability should be
                rechecked before production.
              </li>
              <li>
                <strong>Celebrity and high-profile prosecution examples:</strong>{" "}
                Polanski, Epstein, Cosby, Weinstein, and R. Kelly sources
                support procedural and accountability examples. Source type:
                court, DOJ, official agency, or document archive. Validation:
                partially live-checked; fragile court PDFs and DocumentCloud
                mirrors should be rechecked.
              </li>
              <li>
                <strong>Institutional abuse examples:</strong> Pennsylvania AG,
                SBC Guidepost, DOJ Nassar, DOJ OIG, and Boy Scouts/AP sources
                support the authority-access-shielding section. Source type:
                official, investigative report, media. Validation: partially
                live-checked; consider replacing DocumentCloud mirrors with
                original host pages if available.
              </li>
              <li>
                <strong>Registry harms and comparison sources:</strong> Human
                Rights Watch, GOV.UK, and Canadian statute links support public
                registry harms and international model comparisons. Source type:
                research, official guidance, statute. Validation: live-checked
                during sandbox drafting where available.
              </li>
            </ul>
          </GuideProse>

          <GuideCallout tone="warning" icon="⚠️" title="Production note">
            <p>
              This sandbox is intentionally comprehensive. Before replacing the
              production guide, decide whether to keep every named example or
              trim some media-heavy examples to reduce maintenance burden. The
              legal-framework, institutional-failure, prevention, and policy
              comparison sections should remain the spine of the final guide.
            </p>
          </GuideCallout>
        </GuideSectionCard>
      </main>
    </div>
  );
}