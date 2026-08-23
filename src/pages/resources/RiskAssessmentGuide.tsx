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
  QuickStartPanel,
  GuideChecklist,
  GuideIconList,
  VerifyBeforeActing,
  OverviewCards,
  SourceList,
} from "../../components/solar";

const sourceLinks = {
  federalCsem:
    "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/federal-probation-journal/2023/06/building-a-risk-tool-persons-placed-federal-post-conviction-supervision-child-sexual-exploitation",
  actuarialMeta: "https://pubmed.ncbi.nlm.nih.gov/19290762/",
  staticAge: "https://doi.org/10.1177/1079063211409951",
  staticCalibration: "https://doi.org/10.1177/0093854812443648",
  staticCoding:
    "https://www.waspc.org/assets/Static%2099%20Coding_manual_2016_v2.pdf",
  staticWorkbook:
    "https://www.oregon.gov/boppps/Documents/R%26R/Static%20Evaluators_Workbook_2021-09-28.pdf",
  static2002:
    "https://www.securitepublique.gc.ca/cnt/rsrcs/pblctns/sttc-2002/index-en.aspx",
  stable: "https://doi.org/10.1177/0093854815602094",
  acute:
    "https://bja.ojp.gov/sites/g/files/xyckuh186/files/media/document/acute.pdf",
  cportDevelopment: "https://pubmed.ncbi.nlm.nih.gov/25844514/",
  cportValidation: "https://pubmed.ncbi.nlm.nih.gov/29592774/",
  cportSpanish: "https://pubmed.ncbi.nlm.nih.gov/32482122/",
  cportCritical: "https://pubmed.ncbi.nlm.nih.gov/37471014/",
  casic: "https://pubmed.ncbi.nlm.nih.gov/28383984/",
  pcra: "https://www.uscourts.gov/file/22846/download",
  sotips: "https://pubmed.ncbi.nlm.nih.gov/22368161/",
  vrsFoundational: "https://pubmed.ncbi.nlm.nih.gov/17845123/",
  vrsUpdated: "https://pubmed.ncbi.nlm.nih.gov/29708372/",
};

const inlineLinkCls =
  "font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900";

const toolJumpLinkCls =
  "font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900";

const conceptHeadingCls =
  "mt-8 border-l-4 border-slate-400 pl-3 text-lg font-bold text-slate-900";

export default function RiskAssessmentGuide(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Understanding Sex-Offense Risk Assessment | The SOLAR Project"
        description="A practical plain-language SOLAR guide to understanding risk-assessment reports, sexual-recidivism tools, dynamic assessment, AUC, calibration, base rates, population fit, and responsible interpretation."
        keywords="risk assessment, Static-99R, Static-2002R, STABLE-2007, ACUTE-2007, CPORT, CASIC, PCRA, SOTIPS, VRS-SO, AUC, calibration, sexual recidivism"
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
            Understanding Sex-Offense Risk Assessment
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            If a risk score, evaluation, treatment report, or supervision
            assessment has suddenly appeared in your life, this guide helps you
            figure out what you are looking at, what the result actually means,
            and what questions to ask before anyone treats it as certainty.
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
            Risk assessment is not one thing. A report may contain several
            different kinds of information at once: a historical score, a
            changeable-risk assessment, a treatment-need rating, a risk category,
            a percentage, supervision recommendations, and professional comments.
          </p>
          <p>
            Those are not automatically the same thing. A treatment recommendation
            is not automatically a recidivism probability. A supervision decision
            is not automatically the instrument score. And a professional opinion
            may include information that was never part of the actuarial result.
          </p>
          <p>
            You do not need to master the statistics before you can begin. Start by
            identifying what tool was used, what result it produced, what outcome
            it is talking about, what time period applies, and what group the
            result is being compared with.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If you have a report or score in front of you"
          subtitle="Find these five things before deciding what the result actually means."
          icon="🔍"
          urgentActions={[
            <span key="tool">
              <strong>1. Find the instrument name.</strong>{" "}
              <a href="#baseline-static" className={toolJumpLinkCls}>
                Static-99R
              </a>
              ?{" "}
              <a href="#csem" className={toolJumpLinkCls}>
                CPORT
              </a>
              ?{" "}
              <a href="#dynamic" className={toolJumpLinkCls}>
                STABLE-2007
              </a>
              ?{" "}
              <a href="#federal-general" className={toolJumpLinkCls}>
                PCRA
              </a>
              ?{" "}
              <a href="#change-sensitive" className={toolJumpLinkCls}>
                SOTIPS
              </a>
              ? Something else?
            </span>,
            <span key="result">
              <strong>2. Find the actual result.</strong> Is it a raw score, risk
              category, relative-risk level, estimated percentage, or several of
              those?
            </span>,
            <span key="outcome">
              <strong>3. Find the outcome.</strong> Sexual rearrest? Sexual
              reconviction? Any recidivism? Treatment need? Short-term supervision
              concern?
            </span>,
          ]}
          nextActions={[
            <span key="time">
              <strong>4. Find the time period.</strong> Five years? Ten years?
              Ongoing supervision? A shorter-term monitoring period?
            </span>,
            <span key="group">
              <strong>5. Find the comparison group.</strong> What population,
              norm, or reference group is being used to interpret the score?
            </span>,
          ]}
          reminder={
            <span>
              If you can answer those five questions, you can usually begin
              interpreting the result. If you cannot, the report may be giving you
              a conclusion without enough information to understand what the
              conclusion means.
            </span>
          }
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>Go where you need to go</h3>
            <p>
              If you only need help understanding a report in front of you,
              Sections 1–4 are the best place to start. The later sections explain
              particular tools, research findings, and questions to ask when the
              assessment is being used in a decision.
            </p>
          </GuideProse>

          <nav
            aria-label="Guide sections"
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            <a
              href="#encounter"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              1. Why am I seeing this?
            </a>

            <a
              href="#decode"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              2. Decode the result
            </a>

            <a
              href="#glossary"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              3. Words in the report
            </a>

            <a
              href="#foundations"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              4. Understand the science
            </a>

            <a
              href="#baseline-static"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Look up a tool
            </a>

            <a
              href="#questions"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              12. Questions to ask
            </a>
          </nav>
        </GuideSectionCard>

        <GuideCallout
          tone="research"
          icon="🔎"
          title="The core principle"
        >
          <p>
            Risk should be assessed as accurately, individually, transparently,
            and empirically as possible rather than inferred categorically from
            offense labels, intuition, or fear. Structured empirical assessment can
            add useful information without producing certainty about an individual
            future.
          </p>
        </GuideCallout>

        <GuideSectionHeader
          id="encounter"
          number="1"
          title="Why Am I Seeing a Risk Assessment?"
          subtitle="What the process may look like before you ever get to the score."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Depending on the setting, you may be interviewed, records may be
              reviewed, one or more instruments may be scored, treatment providers
              or supervision officers may add information, and a final report may
              combine several different kinds of conclusions.
            </p>

            <p>
              Different settings also use assessment for different purposes.
              Depending on the case, an assessment may inform sentencing,
              treatment planning, supervision intensity, release planning,
              institutional decisions, civil proceedings, or another specific
              decision. The purpose matters because a tool designed for one
              question should not automatically be treated as answering every
              other one.
            </p>

            <p>
              If the assessment is part of a federal criminal case, the{" "}
              <Link to="/resources/federal-process-guide" className={inlineLinkCls}>
                Federal Sex-Crime Process Guide
              </Link>{" "}
              explains where sentencing and related evaluations fit in the larger
              federal process.
            </p>

            <p className="font-semibold text-slate-900">
              You might see all of the following in one document:
            </p>

            <ul className="space-y-2">
              <li>
                <strong>Historical or static risk score:</strong> a score based on
                historical factors;
              </li>
              <li>
                <strong>Dynamic or change-sensitive assessment:</strong> an
                assessment of factors intended to change over time;
              </li>
              <li>
                <strong>Risk category or relative-risk level:</strong> a group
                classification or comparison;
              </li>
              <li>
                <strong>Reference-group recidivism estimate:</strong> an observed
                or estimated rate tied to a comparison population;
              </li>
              <li>
                <strong>Treatment targets or needs:</strong> issues identified for
                treatment or intervention;
              </li>
              <li>
                <strong>Supervision recommendations:</strong> recommendations about
                case management or supervision;
              </li>
              <li>
                <strong>Professional judgment or an override:</strong> a conclusion
                or adjustment beyond the instrument output;
              </li>
              <li>
                <strong>Other case-specific comments:</strong> additional
                information the evaluator considers relevant.
              </li>
            </ul>

            <p>
              The practical problem is that these pieces can look like one unified
              scientific conclusion even when they came from different methods and
              answer different questions.
            </p>
          </GuideProse>

          <GuideCallout
            tone="legal"
            icon="🧩"
            title="The score and the final decision may not be the same thing"
          >
            <p>
              An instrument may produce one result while an evaluator, probation
              officer, agency, treatment provider, or decision-maker reaches a
              broader conclusion using additional information.
            </p>
            <p>
              When that happens, separate the two: <strong>What did the instrument
              actually say?</strong> And <strong>what did the person or agency
              decide?</strong> Then ask what information caused the difference.
            </p>
          </GuideCallout>

          <GuideProse>
            <p>
              That distinction matters because a recommendation can be stricter,
              more lenient, or simply different from the instrument output. The
              difference may reflect another assessment, a treatment issue, an
              agency rule, case-specific information, or an explicit professional
              override.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="decode"
          number="2"
          title="How to Read the Result in Front of You"
          subtitle="Start with the anatomy of the report before moving into the statistics behind it."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>A fictional anatomy of a risk-assessment result</h3>

            <p>
              Imagine that a report contains the following kinds of entries. These
              are deliberately illustrative rather than real scoring instructions:
            </p>

            <ul className="space-y-2">
              <li>
                <strong>Instrument:</strong>{" "}
                <a href="#baseline-static" className={toolJumpLinkCls}>
                  Static-99R
                </a>
              </li>
              <li>
                <strong>Raw score:</strong> [score]
              </li>
              <li>
                <strong>Risk level:</strong> [risk category]
              </li>
              <li>
                <strong>Relative risk:</strong> [comparison with a reference group]
              </li>
              <li>
                <strong>Estimated five-year rate:</strong> [percentage for the
                applicable norm group]
              </li>
              <li>
                <strong>Professional conclusion:</strong> [treatment, supervision,
                or case recommendation]
              </li>
            </ul>

            <p>
              Those lines are related, but they are not interchangeable.
            </p>

            <p>
              A real report may include only some of these layers. For example, it
              may give a score and category without an absolute percentage, or it
              may discuss treatment needs without reporting a separate actuarial
              estimate. The point of this example is to show how different kinds
              of information fit together when they do appear.
            </p>
          </GuideProse>

          <GuideIconList
            title="What each line is doing"
            items={[
              {
                icon: "🔢",
                title: "Raw score",
                description:
                  "The instrument's scored total. By itself, it is not automatically a probability.",
              },
              {
                icon: "🏷️",
                title: "Risk category",
                description:
                  "A group classification used to organize or interpret scores.",
              },
              {
                icon: "↔️",
                title: "Relative risk",
                description:
                  "A comparison with another group. It answers higher or lower compared with whom.",
              },
              {
                icon: "📅",
                title: "Absolute estimate",
                description:
                  "A group-based observed or estimated event rate over a defined follow-up period.",
              },
              {
                icon: "👥",
                title: "Reference group",
                description:
                  "The population whose data are being used to interpret the score or percentage.",
              },
              {
                icon: "🧑‍⚖️",
                title: "Professional recommendation",
                description:
                  "A conclusion that may incorporate information beyond the instrument itself.",
              },
            ]}
          />

          <GuideCallout
            tone="warning"
            icon="⚠️"
            title="If the recommendation and score seem inconsistent"
          >
            <p>
              Ask whether another assessment, dynamic information, agency policy,
              case-specific information, or an override changed the final
              conclusion. Do not assume the instrument itself produced every
              statement that appears in the report.
            </p>
          </GuideCallout>

          <SoftDivider />

          <GuideProse>
            <h3>A five-step interpretation workflow</h3>
          </GuideProse>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "1",
                title: "Identify",
                icon: "🔍",
                tone: "neutral",
                description:
                  "Identify the tool, version, and type of assessment.",
              },
              {
                eyebrow: "2",
                title: "Translate",
                icon: "🗣️",
                tone: "info",
                description:
                  "Translate the raw score, category, percentage, or recommendation into plain language.",
              },
              {
                eyebrow: "3",
                title: "Compare",
                icon: "👥",
                tone: "research",
                description:
                  "Find the population, norm, or reference group being used.",
              },
              {
                eyebrow: "4",
                title: "Check",
                icon: "✅",
                tone: "legal",
                description:
                  "Check the outcome, follow-up, coding rules, dynamic information, and any override.",
              },
              {
                eyebrow: "5",
                title: "Question",
                icon: "❓",
                tone: "warning",
                description:
                  "Question any conclusion that goes beyond what the tool was designed or validated to say.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="glossary"
          number="3"
          title="Words You May See in a Report"
          subtitle="A compact glossary for the terms that matter most."
        />

        <GuideSectionCard>
          <GuideIconList
            title="Keep these definitions handy"
            items={[
              {
                icon: "🔁",
                title: "Recidivism",
                description:
                  "A new measured criminal-justice or study outcome after a defined starting point. Always ask exactly how the study defined it.",
              },
              {
                icon: "🧱",
                title: "Static",
                description:
                  "Based on historical facts that do not change because treatment occurs or time passes.",
              },
              {
                icon: "🔄",
                title: "Dynamic",
                description:
                  "Based on factors intended to capture characteristics that can change over time.",
              },
              {
                icon: "🧮",
                title: "Actuarial",
                description:
                  "Uses defined items and scoring rules derived from empirical data.",
              },
              {
                icon: "👥",
                title: "Norm / reference group",
                description:
                  "The comparison group used to interpret a score, category, relative-risk value, or estimated percentage.",
              },
              {
                icon: "🧪",
                title: "Validation",
                description:
                  "Testing how a tool performs in a population, setting, or sample beyond the data used to create or develop it.",
              },
              {
                icon: "🏷️",
                title: "Risk category",
                description:
                  "A group classification. It is not a statement that one individual will or will not reoffend.",
              },
              {
                icon: "↪️",
                title: "Override",
                description:
                  "A departure from, adjustment to, or broader conclusion beyond the instrument result.",
              },
              {
                icon: "📊",
                title: "AUC",
                description:
                  "A statistic describing how well a tool ranks higher- versus lower-risk cases. It is not an individual probability.",
              },
              {
                icon: "🎯",
                title: "Calibration",
                description:
                  "How well estimated or expected event rates line up with what is actually observed in a population.",
              },
              {
                icon: "💻",
                title: "CSEM",
                description:
                  "Child sexual exploitation material. Some instruments are designed specifically for people with CSEM-related offenses rather than sexual offenses generally.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="foundations"
          number="4"
          title="The Concepts Behind the Score"
          subtitle="Once you know what kind of result you are looking at, these concepts explain how to interpret it responsibly."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3 className={conceptHeadingCls}>Relative risk vs. absolute risk</h3>
            <p>
              <strong>Relative risk</strong> answers a comparison question:
              higher or lower compared with whom? <strong>Absolute risk</strong>
              is an observed or estimated event rate over a defined period, such
              as a five-year rate in a particular reference group.
            </p>
            <p>
              A person can be higher than a low-risk comparison group while the
              absolute event rate remains modest. A dramatic-sounding relative
              difference does not automatically mean a high individual
              probability.
            </p>

            <SoftDivider />

            <h3 className={conceptHeadingCls}>Group prediction vs. individual certainty</h3>
            <p>
              Risk instruments estimate patterns across groups and place an
              individual within those empirical patterns. They do not observe the
              future. A group rate is evidence about a reference group, not an
              individual destiny.
            </p>

            <SoftDivider />

            <h3 className={conceptHeadingCls}>Outcome definition and follow-up period</h3>
            <p>
              <strong>Rearrest, charge, reconviction, reincarceration, self-report,
              and detected offending are not interchangeable.</strong> Official outcomes can
              miss undetected conduct; self-report has different limitations.
            </p>
            <p>
              A recidivism rate is incomplete unless it tells you the outcome
              definition, population, follow-up period, and starting point.
            </p>
            <p>
              A five-year rearrest rate beginning at supervision start is not the
              same quantity as a ten-year reconviction rate beginning at release.
              Comparing them as if they were the same can create false precision.
            </p>

            <SoftDivider />

            <h3 className={conceptHeadingCls}>Validation population and population fit</h3>
            <p>
              Every validation study has a population: a jurisdiction, setting,
              offense mix, sex composition, age range, entry point, and follow-up
              design. A tool validated in one population is not automatically
              calibrated for another.
            </p>
            <p>
              Before relying on a percentage, ask which reference group generated
              it and whether that group resembles the person and setting at issue.
            </p>

            <SoftDivider />

            <h3 className={conceptHeadingCls}>Static vs. dynamic factors</h3>
            <p>
              <strong>Static factors</strong> are historical facts that do not
              change because time has passed or treatment has occurred: for
              example, parts of a person&apos;s prior offense or supervision
              history. Static tools are mainly about baseline group risk.
            </p>
            <p>
              <strong>Dynamic factors</strong> are intended to capture
              risk-relevant characteristics that can change. Some change over
              months or years; others may shift much more quickly.
            </p>
            <p>
              A dynamic score is not a promise that change has been measured
              perfectly. It is an attempt to add current, change-sensitive
              information to historical baseline information.
            </p>

            <SoftDivider />

            <h3 className={conceptHeadingCls}>Actuarial, structured professional judgment, and unstructured judgment</h3>
            <p>
              <strong>Actuarial tools</strong> use specified empirical items and
              scoring rules to place people into relative risk groups or
              categories.
            </p>
            <p>
              <strong>Structured professional judgment (SPJ)</strong> also uses a
              defined framework, but leaves more room for professional synthesis of
              case information.
            </p>
            <p>
              <strong>Unstructured judgment</strong> is professional intuition
              without a comparable standardized empirical structure.
            </p>
            <p>
              Meta-analytic evidence in the SOLAR evidence matrix supports
              empirically derived actuarial approaches over unstructured
              professional intuition on average, with SPJ performing differently
              from both and generally falling between them.
            </p>

            <SoftDivider />

            <h3 className={conceptHeadingCls}>Base rates</h3>
            <p>
              <strong>A base rate</strong> is how often the outcome occurs in the population being
              studied before a particular score is considered. When the outcome is
              uncommon, precise individual prediction becomes harder.
            </p>
            <p>
              Even a tool that sorts people better than chance will still make
              errors when applied to a low-frequency outcome.
            </p>

            <SoftDivider />

            <h3 className={conceptHeadingCls}>AUC: ranking, not probability</h3>
            <p>
              <strong>AUC is a discrimination statistic.</strong> In plain English: if you randomly
              select one person who later had the measured recidivism outcome and
              one who did not, the AUC estimates how often the tool ranks the
              person with the later outcome as higher risk.
            </p>
          </GuideProse>

          <GuideCallout
            tone="warning"
            icon="⚠️"
            title="AUC .70 does not mean 70% chance of recidivism"
          >
            <p>
              AUC does not itself give an individual probability. It does not
              establish calibration, causation, or certainty. Moderate
              discrimination can still contain useful information, but
              better-than-chance ranking is not the same as knowing what one
              person will do.
            </p>
          </GuideCallout>

          <GuideProse>
            <h3 className={conceptHeadingCls}>Calibration</h3>
            <p>
              <strong>Calibration asks a different question:</strong> do the predicted or
              reference-group percentages line up with the observed rates in the
              population where the tool is being used?
            </p>
            <p>
              A tool can rank people reasonably well and still overpredict or
              underpredict absolute rates in another setting.
            </p>
            <p>
              The workbook flags this issue for Static-99R/Static-2002R and CPORT.
              Static meta-analytic research found more stability in relative
              predictive accuracy than in absolute rates across samples. A Spanish
              CPORT validation found observed sexual recidivism substantially below
              developer expectations, illustrating why population-specific norms
              and reference groups matter.
            </p>
            <p>
              Readers who want to go deeper into SOLAR&apos;s research sources,
              definitions, and evidence base can continue to{" "}
              <Link to="/resources/research-data-resources" className={inlineLinkCls}>
                Research &amp; Data Resources
              </Link>
              .
            </p>
          </GuideProse>
        </GuideSectionCard>

        <PullQuoteBlock>
          A useful risk estimate can be informative without being certain. The
          question is not whether the tool is perfect, but whether it is being used
          for the right question, population, outcome, and purpose.
        </PullQuoteBlock>

        <GuideSectionHeader
          id="baseline-static"
          number="5"
          title="Baseline / Static Sexual-Recidivism Risk"
          subtitle="Tools that ask what historical factors suggest about relative long-term risk."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>
              <a
                href={sourceLinks.staticCoding}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                Static-99R
              </a>
            </h3>
          </GuideProse>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-900">
                What question does it ask?
              </h4>
              <p className="mt-1 text-slate-700">
                How does this person&apos;s static historical profile compare with
                other eligible adult men on long-term sexual-recidivism risk?
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">What is it?</h4>
              <p className="mt-1 text-slate-700">
                A static actuarial sexual-recidivism instrument using ten
                historical factors.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Who was it built for?
              </h4>
              <p className="mt-1 text-slate-700">
                Adult men with qualifying sexual-offense histories under the
                instrument&apos;s coding and eligibility rules.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Where might you encounter it?
              </h4>
              <p className="mt-1 text-slate-700">
                In evaluations that need a baseline actuarial estimate of
                sexual-recidivism risk, including some sentencing, treatment,
                supervision, civil, or correctional settings.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                What output does it produce?
              </h4>
              <p className="mt-1 text-slate-700">
                A score that can be interpreted using risk levels, relative-risk
                information, and current normative recidivism estimates tied to
                reference groups.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                What does the evidence say?
              </h4>
              <p className="mt-1 text-slate-700">
                The workbook identifies Static-99R as an established static
                actuarial tool, while emphasizing that age weighting was revised
                because age contributes meaningful predictive information and that
                absolute rates vary across samples.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                What should be checked before use?
              </h4>
              <p className="mt-1 text-slate-700">
                Eligibility, the{" "}
                <a
                  href={sourceLinks.staticCoding}
                  className={inlineLinkCls}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  current coding rules
                </a>
                , the version used, the{" "}
                <a
                  href={sourceLinks.staticWorkbook}
                  className={inlineLinkCls}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  norm or reference group
                </a>
                , and whether the case type fits the instrument.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Why does eligibility matter?
              </h4>
              <p className="mt-1 text-slate-700">
                CSEM-only cases require particular care. Not every person convicted
                of a sexual offense is automatically appropriate to score with
                Static-99R.
              </p>
            </div>
          </div>

          <GuideCallout
            tone="legal"
            icon="🧾"
            title="What a Static-99R score does not mean"
          >
            <p>
              It is not a diagnosis, a moral-severity ranking, proof that someone
              will reoffend, proof that someone will not reoffend, or an
              individualized certainty. Current coding and current norms matter.
            </p>
          </GuideCallout>

          <SoftDivider />

          <GuideProse>
            <h3>
              <a
                href={sourceLinks.static2002}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                Static-2002R
              </a>
            </h3>
          </GuideProse>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-900">
                What question does it ask?
              </h4>
              <p className="mt-1 text-slate-700">
                Like Static-99R, it asks about relative long-term
                sexual-recidivism risk from static historical information, but it
                uses a different item and domain structure.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Where might you encounter it?
              </h4>
              <p className="mt-1 text-slate-700">
                In settings seeking a baseline actuarial sexual-recidivism
                assessment using the Static-2002R framework.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                What goes into it?
              </h4>
              <p className="mt-1 text-slate-700">
                Static historical domains including age and offense history,
                scored under specific coding rules.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                What does the evidence say?
              </h4>
              <p className="mt-1 text-slate-700">
                The workbook reports that revised age weights improved fit for
                older people and that relative predictive accuracy was more stable
                across samples than absolute recidivism rates within score groups.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Main limitation</h4>
              <p className="mt-1 text-slate-700">
                Eligibility and the selected reference group matter. It is not
                designed for every CSEM-only case.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                What should not be assumed?
              </h4>
              <p className="mt-1 text-slate-700">
                An old score-to-percentage table should not be treated as timeless.
                Norms and reference-group choices matter to interpretation.
              </p>
            </div>
          </div>

          <GuideCallout
            tone="reminder"
            icon="🧠"
            title="SOLAR takeaway"
          >
            <p>
              Static tools can provide an empirical baseline, but baseline is not
              destiny. Their value depends on proper eligibility, coding, norms,
              and interpretation.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="dynamic"
          number="6"
          title="Changeable / Dynamic Risk and Needs"
          subtitle="These tools ask different questions from static baseline tools."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>
              <a
                href={sourceLinks.stable}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                STABLE-2007
              </a>
            </h3>
            <p>
              STABLE-2007 is designed to assess relatively stable but changeable
              risk and need factors relevant to sexual recidivism. Ratings draw on
              structured interview, file, treatment, and supervision information.
            </p>
            <p>
              The output is used for risk/need formulation and treatment or
              supervision planning rather than as a stand-alone long-term
              probability.
            </p>
            <p>
              <strong>Where might you encounter it?</strong> Most often in
              treatment or community-supervision settings where professionals are
              trying to understand changeable risk and need factors rather than
              relying only on historical baseline information.
            </p>
            <p>
              A prospective Canadian study in the workbook followed 768
              community-supervised adult men and found that STABLE measures
              predicted sexual, violent, and any recidivism. The workbook treats
              this as evidence that dynamic information can add clinically and
              practically relevant information beyond static history.
            </p>

            <h3>
              <a
                href={sourceLinks.acute}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                ACUTE-2007
              </a>
            </h3>
            <p>
              ACUTE-2007 is aimed at shorter-term, rapidly changing concerns during
              community supervision. It is meant to be reassessed repeatedly and
              interpreted in its supervision context.
            </p>
            <p>
              <strong>Where might you encounter it?</strong> In ongoing community
              supervision or monitoring where short-term changes may matter to
              immediate case management.
            </p>
            <p>
              It does not establish a person&apos;s long-term actuarial risk and
              does not diagnose dangerousness.
            </p>
          </GuideProse>

          <GuideCallout
            tone="info"
            icon="🔄"
            title="Stable dynamic is not the same as acute"
          >
            <p>
              STABLE-2007 focuses on changeable factors that generally move over a
              longer period. ACUTE-2007 focuses on shorter-term changes that may
              matter for ongoing supervision. Neither should be treated as if it
              were answering the same question as a static baseline score.
            </p>
          </GuideCallout>

          <GuideCallout
            tone="warning"
            icon="⚠️"
            title="Dynamic improvement does not guarantee safety"
          >
            <p>
              A lower dynamic score can be meaningful evidence of change without
              proving that no future offending will occur. The same is true in the
              other direction: a concerning rating is not certainty that an
              offense will occur.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="csem"
          number="7"
          title="CSEM-Specific Assessment"
          subtitle="Specialized tools should be judged within the populations and questions they were designed for."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>
              <a
                href={sourceLinks.cportDevelopment}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                CPORT
              </a>
            </h3>
          </GuideProse>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-900">
                What question does it ask?
              </h4>
              <p className="mt-1 text-slate-700">
                CPORT estimates relative sexual-recidivism risk among adult men
                convicted of CSEM offenses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">What is it?</h4>
              <p className="mt-1 text-slate-700">
                A primarily static actuarial tool using seven binary factors
                involving age, criminal or supervision history, contact sexual
                offending, sexual-interest evidence, and content indicators.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Where might you encounter it?
              </h4>
              <p className="mt-1 text-slate-700">
                In assessments involving adult men with CSEM-related offenses,
                where a CSEM-specific empirical risk estimate is being considered.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                What output does it produce?
              </h4>
              <p className="mt-1 text-slate-700">
                A summed score used for relative-risk grouping. The score is not,
                by itself, an individualized probability.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                What does the broader validation evidence say?
              </h4>
              <p className="mt-1 text-slate-700">
                The workbook includes development and{" "}
                <a
                  href={sourceLinks.cportValidation}
                  className={inlineLinkCls}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  independent validation evidence
                </a>{" "}
                showing meaningful predictive discrimination, including an
                independent validation AUC of .70 in a small 80-person cohort and
                combined sample AUCs of .72 for any sexual recidivism and .74 for a
                new CSEM offense.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                What happened in the federal cohort?
              </h4>
              <p className="mt-1 text-slate-700">
                In a large federal CSEM validation cohort, CPORT produced modest
                discrimination for five-year sexual rearrest: AUC .62, with a 95%
                confidence interval of .58–.65.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Why does population fit matter?
              </h4>
              <p className="mt-1 text-slate-700">
                A Spanish validation observed a much lower five-year sexual
                recidivism base rate than the development sample and found
                calibration concerns relative to developer expectations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                What coding issue matters in the federal study?
              </h4>
              <p className="mt-1 text-slate-700">
                The federal implementation used MITRE-extracted data elements that
                differed from some standard CPORT scoring. That limits how broadly
                the federal result should be generalized.
              </p>
            </div>
          </div>

          <GuideCallout
            tone="research"
            icon="⚖️"
            title="CPORT is neither scientifically worthless nor a universal answer"
          >
            <p>
              The workbook supports a mixed, population-sensitive reading. CPORT
              has real empirical validation evidence; performance and calibration
              vary; federal implementation produced only modest discrimination;
              and later or stronger studies should not be erased because one
              cohort was weaker.
            </p>
          </GuideCallout>

          <SoftDivider />

          <GuideProse>
            <h3>
              <a
                href={sourceLinks.casic}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                CASIC
              </a>
            </h3>
            <p>
              CASIC is a structured proxy/index related to evidence of sexual
              interest in children. It was developed in part to operationalize a
              CPORT-related factor when direct admission or other evidence is
              unavailable.
            </p>
            <p>
              <strong>Where might you encounter it?</strong> Within CPORT-related
              CSEM assessment work where an evaluator needs a structured way to
              code the relevant sexual-interest factor.
            </p>
            <p>
              The workbook describes CASIC as relying on historical or behavioral
              correlates, not as a stand-alone recidivism instrument.
            </p>
          </GuideProse>

          <GuideCallout
            tone="urgent"
            icon="🚫"
            title="CASIC is not a diagnosis"
          >
            <p>
              A CASIC threshold does not diagnose pedophilia, does not establish
              that a person will sexually offend, and should not be presented as a
              stand-alone recidivism probability.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="federal-general"
          number="8"
          title="General Federal Risk / Needs Assessment"
          subtitle="General recidivism tools can contain relevant information without becoming specialized sexual-risk instruments."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>
              <a
                href={sourceLinks.pcra}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                PCRA and PCRA-R
              </a>
            </h3>
            <p>
              The federal{" "}
              <a
                href={sourceLinks.pcra}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                Post Conviction Risk Assessment
              </a>{" "}
              family is used for general recidivism risk, criminogenic needs,
              supervision planning, and allocation of intervention resources in
              federal post-conviction supervision.
            </p>
            <p>
              It combines criminal-history information with dynamic needs and
              officer-assessment fields.
            </p>
            <p>
              <strong>Where might you encounter it?</strong> In federal
              post-conviction supervision, where probation officers use a general
              risk-and-needs framework to support supervision planning. For the
              practical rules and decisions that may follow, see SOLAR&apos;s{" "}
              <Link
                to="/resources/supervision-conditions-guide"
                className={inlineLinkCls}
              >
                Supervision Conditions Survival Guide
              </Link>
              .
            </p>
            <p>
              That scope distinction matters. PCRA can include factors that
              correlate with sexual recidivism, but its primary validated purpose
              is general federal risk and needs.
            </p>
            <p>
              Correlation with a specialized outcome does not transform it into a
              specialized sexual-risk probability calculator.
            </p>
          </GuideProse>

          <GuideCallout
            tone="warning"
            icon="🎯"
            title="Do not make PCRA answer a question it was not built to answer"
          >
            <p>
              In the federal CSEM cohort, PCRA&apos;s AUC for five-year sexual
              rearrest was approximately .61. That is a discrimination result for
              that cohort and outcome. It does not tell a court one individual
              person&apos;s probability of committing another sex offense.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="change-sensitive"
          number="9"
          title="Treatment Progress / Change-Sensitive Assessment"
          subtitle="These instruments are designed to capture information that a purely historical score cannot."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>
              <a
                href={sourceLinks.sotips}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                SOTIPS
              </a>
            </h3>
            <p>
              The Sex Offender Treatment Intervention and Progress Scale is a
              structured, change-sensitive assessment used in treatment and
              supervision contexts. It measures dynamic, treatment-relevant
              factors over time rather than asking only what happened in the past.
            </p>
            <p>
              <strong>Where might you encounter it?</strong> In community treatment
              or supervision where practitioners are monitoring treatment-relevant
              needs and change over time.
            </p>
            <p>
              The primary validation study in the workbook involved 759 adult men
              under correctional supervision in Vermont community treatment.
              SOTIPS ratings predicted sexual, violent, and any recidivism and
              return to prison.
            </p>
            <p>
              Reductions in SOTIPS scores were associated with lower recidivism,
              and combining SOTIPS with Static-99R improved prediction in that
              validation study.
            </p>
          </GuideProse>

          <GuideCallout
            tone="research"
            icon="📊"
            title="Read the SOTIPS AUC range carefully"
          >
            <p>
              The reported SOTIPS AUC range of .60–.85 spans different outcomes
              and assessment times. The combined SOTIPS + Static-99R range of
              .67–.89 also spans multiple outcomes. Neither range should be
              presented as one single sexual-recidivism AUC.
            </p>
          </GuideCallout>

          <SoftDivider />

          <GuideProse>
            <h3>
              <a
                href={sourceLinks.vrsFoundational}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                VRS-SO
              </a>
            </h3>
            <p>
              The Violence Risk Scale–Sexual Offense version combines static and
              dynamic information. It is designed to assess baseline risk,
              treatment targets, and treatment-related change and is more
              intensive than a quick screening instrument.
            </p>
            <p>
              <strong>Where might you encounter it?</strong> In more intensive
              treatment or evaluation settings where baseline risk and
              treatment-related change are both being assessed.
            </p>
            <p>
              The workbook&apos;s foundational validation involved 321 adult men
              and found prediction of sexual and nonsexual violent recidivism over
              an average follow-up of about ten years.
            </p>
            <p>
              Later multisite work developed updated risk categories and five- and
              ten-year recidivism estimates using pretreatment risk and change
              information.
            </p>
          </GuideProse>

          <GuideCallout
            tone="warning"
            icon="⚠️"
            title="Change scores are evidence, not verdicts"
          >
            <p>
              A VRS-SO change score does not prove someone is safe or unsafe.
              Treatment-related change can matter while the resulting inference
              remains probabilistic and group based.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="spj"
          number="10"
          title="Where Structured Professional Judgment Fits"
          subtitle="Structured professional judgment is not the same thing as unsupported clinical intuition."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              <strong>SPJ uses defined risk factors and a structured process</strong>, while leaving
              room for professional synthesis. That makes it meaningfully
              different from an unstructured impression such as “this person feels
              dangerous” or “my experience tells me the score is wrong.”
            </p>
            <p>
              The meta-analytic evidence in the workbook found empirically derived
              actuarial approaches more accurate than unstructured professional
              judgment across sexual, violent, and any recidivism outcomes.
            </p>
            <p>
              SPJ performance was intermediate between actuarial and unstructured
              judgment in that synthesis.
            </p>
            <p>
              <strong>The practical lesson is not “scores only.”</strong> Individualized
              professional information can matter.
            </p>
            <p>
              The lesson is that a professional opinion does not become
              individualized science merely because a professional expresses it. A
              defensible assessment should connect judgment to a structured method,
              relevant case facts, and an empirical baseline.
            </p>
          </GuideProse>

          <GuideCallout
            tone="legal"
            icon="↔️"
            title="Separate instrument output from professional judgment"
          >
            <p>
              If a report says the actuarial result is one thing but the final
              classification or recommendation is another, ask where the
              difference came from. Was another instrument used? Were dynamic
              factors considered? Was there a formal override? Was the change
              driven by policy rather than the assessment itself?
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="worked-example"
          number="11"
          title="Worked Example: One Federal CSEM Cohort"
          subtitle="A bounded example of outcome definition, base rates, population fit, and modest discrimination."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The{" "}
              <a
                href={sourceLinks.federalCsem}
                className={inlineLinkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                federal CSEM risk-tool study
              </a>{" "}
              examined a validation cohort of
              <strong> 5,768 male federal CSEM supervisees</strong> using a fixed
              <strong> 60-month follow-up</strong> beginning at supervision start
              or initial PCRA assessment.
            </p>

            <ul className="space-y-2">
              <li>
                <strong>Outcome:</strong> rearrest for any new sexual offense.
              </li>
              <li>
                <strong>Observed five-year rate:</strong> 4.5% (262 of 5,768).
              </li>
              <li>
                <strong>Contact sex-crime rearrest:</strong> fewer than 1%.
              </li>
              <li>
                <strong>PCRA discrimination:</strong> AUC .61 (95% CI .58–.64).
              </li>
              <li>
                <strong>CPORT discrimination:</strong> AUC .62 (95% CI .58–.65).
              </li>
            </ul>

            <p>
              Those facts teach several different things at once. The outcome was
              <em> rearrest</em>, not all offending. The population was male,
              federal, and CSEM-specific. The follow-up was fixed at five years.
              The sexual-rearrest base rate was low. And both AUCs showed modest
              ranking ability rather than individualized certainty.
            </p>
          </GuideProse>

          <GuideCallout
            tone="research"
            icon="🧪"
            title="What this example does not show"
          >
            <p>
              It does not prove CPORT is useless, prove PCRA is a sexual-risk
              instrument, establish lifetime risk, or turn either AUC into a
              probability.
            </p>
            <p>
              The federal CPORT data extraction also differed from some standard
              scoring elements, which limits how broadly the result should be
              generalized.
            </p>
          </GuideCallout>

          <GuideCallout
            tone="neutral"
            icon="🗂️"
            title="Cohort boundary"
          >
            <p>
              This worked example does not combine the separate nearly
              6,900-person FY2017–FY2021 federal supervision-override cohort with
              the 5,768-person validation cohort. They answer different questions
              and should remain separate.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="questions"
          number="12"
          title="Questions to Ask When Someone Gives You a Risk Score"
          subtitle="You do not need to self-score a professional instrument to ask whether it is being interpreted responsibly."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>Use the five-step workflow first</h3>
            <p>
              <strong>Identify → Translate → Compare → Check → Question.</strong>
            </p>
            <p>
              That short workflow gets you oriented. The fuller checklist below is
              for the details that matter when a score affects treatment,
              supervision, sentencing, litigation, reporting, or policy.
            </p>
          </GuideProse>

          <GuideChecklist
            id="risk-score-questions"
            title="Full risk-score review checklist"
            columns={1}
            items={[
              {
                id: "instrument",
                label:
                  "What instrument was used, and what question was it designed to answer?",
              },
              {
                id: "eligibility",
                label:
                  "Was the person actually eligible to be scored with it under current rules?",
              },
              {
                id: "version",
                label:
                  "Which version, coding rules, and norms were used?",
              },
              {
                id: "population",
                label:
                  "What population was the tool validated on, and how well does that population fit this case?",
              },
              {
                id: "outcome",
                label:
                  "What exact outcome does it predict or measure: rearrest, reconviction, charge, reincarceration, treatment need, or something else?",
              },
              {
                id: "followup",
                label:
                  "Over what follow-up period, and starting from what point?",
              },
              {
                id: "output",
                label:
                  "Is this score being presented as relative risk, an absolute rate, a risk category, or something else?",
              },
              {
                id: "reference",
                label:
                  "What reference group generated any percentage being quoted?",
              },
              {
                id: "dynamic",
                label:
                  "Were current dynamic or treatment-change factors considered where relevant?",
              },
              {
                id: "scorer",
                label:
                  "Who scored the instrument, and what training or coding process was used?",
              },
              {
                id: "override",
                label:
                  "Were any overrides or professional adjustments applied? If so, what specific evidence supported them?",
              },
              {
                id: "purpose",
                label:
                  "Is the result being used for a purpose the tool was not designed or validated for?",
              },
              {
                id: "certainty",
                label:
                  "Is someone treating a group estimate, AUC, or risk category as an individualized certainty?",
              },
            ]}
          />

          <VerifyBeforeActing
            whoToAsk="The evaluator or agency using the score, plus counsel or another qualified professional when the score affects a legal decision."
            whatToAsk="Ask for the instrument name, version, eligibility basis, coding rules, outcome, follow-up period, reference group, and any override rationale."
            whatToSave="Save the written report, score sheet if disclosure is permitted, cited norms, evaluator explanation, corrections, and any written response to a disputed coding item."
          />

          <GuideProse>
            <p>
              If the disagreement involves a government action or legal process,
              SOLAR&apos;s{" "}
              <Link to="/resources/know-your-rights" className={inlineLinkCls}>
                Your Rights at Every Stage
              </Link>{" "}
              guide can help identify the separate legal questions. A disagreement
              about scoring or interpretation, by itself, does not establish a
              rights violation.
            </p>
          </GuideProse>

          <GuideCallout
            tone="legal"
            icon="📌"
            title="Do not turn this guide into a self-scoring exercise"
          >
            <p>
              Some instruments require professional training, controlled coding
              rules, or records that a reader may not have. The goal here is to
              understand and question interpretation, not to produce an unofficial
              score and assume it is valid.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="does-not-mean"
          number="13"
          title="What Risk Language Does Not Mean"
          subtitle="These are the most common interpretation errors to stop before they spread."
        />

        <GuideSectionCard>
          <GuideProse>
            <ul className="space-y-2">
              <li>
                <strong>“Low risk” does not mean zero risk.</strong>
              </li>
              <li>
                <strong>
                  “High relative risk” does not automatically mean a high absolute
                  probability.
                </strong>
              </li>
              <li>
                <strong>
                  AUC .70 does not mean a 70% chance of recidivism.
                </strong>
              </li>
              <li>
                <strong>
                  A group recidivism rate is not an individual destiny.
                </strong>
              </li>
              <li>
                <strong>A static score is not moral severity.</strong>
              </li>
              <li>
                <strong>CASIC is not a pedophilia diagnosis.</strong>
              </li>
              <li>
                <strong>CPORT is not proof someone will offend.</strong>
              </li>
              <li>
                <strong>
                  PCRA is not a specialized sexual-risk probability calculator.
                </strong>
              </li>
              <li>
                <strong>
                  Dynamic improvement does not guarantee no future offending.
                </strong>
              </li>
              <li>
                <strong>
                  A professional recommendation is not automatically the same thing
                  as the instrument result.
                </strong>
              </li>
              <li>
                <strong>
                  Unstructured intuition is not individualized science simply
                  because a professional expresses it.
                </strong>
              </li>
            </ul>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="sources"
          number="14"
          title="Sources and Verification"
          subtitle="The evidence below is the public-facing source backbone for the guide."
        />

        <GuideSectionCard>
          <GuideCallout
            tone="research"
            icon="📚"
            title="How to read the evidence"
          >
            <p>
              Each numerical claim in this guide is tied to the canonical SOLAR
              Evidence Matrix and its verified source record. Population, outcome,
              follow-up, and important caveats are preserved in the text rather
              than collapsed into a generic “recidivism rate.”
            </p>
          </GuideCallout>

          <SourceList
            note="Source inventory drawn from the canonical SOLAR Evidence Matrix. Workbook records list these sources as verified through August 22–23, 2026."
            sources={[
              {
                label:
                  "Federal CSEM risk-tool study — Cohen (2023), Federal Probation",
                href: sourceLinks.federalCsem,
                description:
                  "Federal 5,768-person CSEM validation cohort; five-year sexual rearrest; PCRA and CPORT discrimination; federal implementation limitations.",
              },
              {
                label:
                  "Hanson & Morton-Bourgon (2009) — risk-assessment accuracy meta-analysis",
                href: sourceLinks.actuarialMeta,
                description:
                  "Comparative evidence on actuarial assessment, structured professional judgment, and unstructured professional judgment.",
              },
              {
                label: "Helmus et al. (2012) — revised age weights",
                href: sourceLinks.staticAge,
                description:
                  "Age-related revision evidence for Static-99/Static-2002 and older-person fit.",
              },
              {
                label:
                  "Helmus et al. (2012) — Static absolute rates across samples",
                href: sourceLinks.staticCalibration,
                description:
                  "Key calibration evidence: relative accuracy can be more stable than absolute recidivism rates across samples.",
              },
              {
                label: "Static-99R Coding Rules Revised 2016",
                href: sourceLinks.staticCoding,
                description:
                  "Eligibility, coding, proper version use, and current-norm guidance.",
              },
              {
                label: "Static-99R Evaluators Workbook",
                href: sourceLinks.staticWorkbook,
                description:
                  "Reference-group, risk-level, relative-risk, and normative interpretation guidance.",
              },
              {
                label: "Static-2002 coding rules — Public Safety Canada",
                href: sourceLinks.static2002,
                description:
                  "Authoritative coding, target-population, domain, and interpretation guidance for Static-2002/Static-2002R.",
              },
              {
                label:
                  "Hanson, Helmus & Harris (2015) — STABLE-2007 prospective study",
                href: sourceLinks.stable,
                description:
                  "Prospective evidence on dynamic risk/need assessment alongside static measures.",
              },
              {
                label: "ACUTE-2007 — BJA Public Safety Risk Assessment Clearinghouse",
                href: sourceLinks.acute,
                description:
                  "Official tool profile describing ACUTE-2007 as a short-term dynamic monitoring instrument for sexual recidivism risk.",
              },
              {
                label: "Seto & Eke (2015) — CPORT development",
                href: sourceLinks.cportDevelopment,
                description:
                  "Development of the CSEM-specific CPORT and its initial five-year outcome evidence.",
              },
              {
                label: "Eke, Helmus & Seto (2019) — CPORT validation",
                href: sourceLinks.cportValidation,
                description:
                  "Independent validation and combined-sample discrimination evidence.",
              },
              {
                label: "Soldino et al. (2021) — Spanish CPORT validation",
                href: sourceLinks.cportSpanish,
                description:
                  "Low base-rate validation context and calibration concerns relative to developer expectations.",
              },
              {
                label:
                  "Critical review of CPORT use in CSEM-exclusive cases (2023)",
                href: sourceLinks.cportCritical,
                description:
                  "Population-specific limitations, small recidivist counts, missing data, and U.S.-validation concerns at the time of review.",
              },
              {
                label: "Seto & Eke (2017) — CASIC",
                href: sourceLinks.casic,
                description:
                  "Primary CASIC source on behavioral correlates of admitted sexual interest in children and use within CPORT-related assessment.",
              },
              {
                label:
                  "Johnson et al. (2011) — PCRA construction and validation",
                href: sourceLinks.pcra,
                description:
                  "Primary scope source for PCRA as a general federal post-conviction risk-and-needs instrument.",
              },
              {
                label:
                  "McGrath, Lasher & Cumming (2012) — SOTIPS validation",
                href: sourceLinks.sotips,
                description:
                  "Primary 759-person validation source for SOTIPS predictive validity, change, and incremental value with Static-99R.",
              },
              {
                label:
                  "Olver et al. (2007) — VRS-SO validity and reliability",
                href: sourceLinks.vrsFoundational,
                description:
                  "Foundational validation for VRS-SO risk and treatment-change assessment.",
              },
              {
                label:
                  "Olver et al. (2018) — VRS-SO updated risk categories",
                href: sourceLinks.vrsUpdated,
                description:
                  "Multisite updated risk categories and five- and ten-year recidivism estimates incorporating pretreatment risk and change.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}
