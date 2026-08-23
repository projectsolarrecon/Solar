
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
  GuideChecklist,
  VerifyBeforeActing,
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
  stable: "https://doi.org/10.1177/0093854815602094",
  cportDevelopment: "https://pubmed.ncbi.nlm.nih.gov/25844514/",
  cportValidation: "https://pubmed.ncbi.nlm.nih.gov/29592774/",
  cportSpanish: "https://pubmed.ncbi.nlm.nih.gov/32482122/",
  cportCritical: "https://pubmed.ncbi.nlm.nih.gov/37471014/",
  pcra: "https://www.uscourts.gov/file/22846/download",
  sotips: "https://pubmed.ncbi.nlm.nih.gov/22368161/",
  vrsFoundational: "https://pubmed.ncbi.nlm.nih.gov/17845123/",
  vrsUpdated: "https://pubmed.ncbi.nlm.nih.gov/29708372/",
};

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Understanding Sex-Offense Risk Assessment | The SOLAR Project"
        description="A plain-language SOLAR guide to sexual-recidivism risk tools, dynamic assessment, AUC, calibration, base rates, population fit, and responsible interpretation."
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
            What common risk tools actually measure, what their scores do and do
            not mean, and what to ask before a group-based estimate is used as if
            it were a certain prediction about one person.
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
            Risk assessment is not one thing. Different instruments answer
            different questions: long-term baseline risk, changeable treatment or
            supervision needs, short-term changes, CSEM-specific risk, general
            federal recidivism risk, or treatment progress.
          </p>
          <p>
            The safest way to read any score is to start with the question the
            tool was built to answer. Then check the population, outcome,
            follow-up period, coding rules, reference group, and whether the result
            is a ranking, a category, or an absolute rate.
          </p>
        </GuideIntro>

        <GuideCallout
          tone="research"
          icon="🔎"
          title="The core principle"
        >
          <p>
            Risk should be assessed as accurately, individually, transparently,
            and empirically as possible rather than inferred categorically from
            offense labels, intuition, or fear. Structured empirical assessment can
            add useful information without producing certainty about an
            individual future.
          </p>
        </GuideCallout>

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Baseline",
              title: "What does history suggest?",
              icon: "🧱",
              tone: "neutral",
              description:
                "Static-99R and Static-2002R use historical factors to estimate relative long-term sexual-recidivism risk within defined populations.",
            },
            {
              eyebrow: "Change",
              title: "What can move over time?",
              icon: "📈",
              tone: "info",
              description:
                "STABLE-2007, ACUTE-2007, SOTIPS, and VRS-SO address changeable factors, short-term concerns, treatment progress, or both baseline and change.",
            },
            {
              eyebrow: "Scope",
              title: "Is this the right tool?",
              icon: "🎯",
              tone: "legal",
              description:
                "CPORT is CSEM-specific; CASIC is a proxy used within that context; PCRA/PCRA-R are general federal risk-and-needs tools, not specialized sexual-risk probability calculators.",
            },
          ]}
        />

        <GuideSectionHeader
          id="foundations"
          number="1"
          title="First, Learn the Language"
          subtitle="These concepts matter more than any single score."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>Static vs. dynamic factors</h3>
            <p>
              <strong>Static factors</strong> are historical facts that do not
              change because time has passed or treatment has occurred: for
              example, parts of a person&apos;s prior offense or supervision
              history. Static tools are mainly about baseline group risk.
            </p>
            <p>
              <strong>Dynamic factors</strong> are intended to capture
              risk-relevant characteristics that can change. Some change over
              months or years; others may shift much more quickly. A dynamic score
              is not a promise that change has been measured perfectly. It is an
              attempt to add current, change-sensitive information to historical
              baseline information.
            </p>

            <SoftDivider />

            <h3>Actuarial, structured professional judgment, and unstructured judgment</h3>
            <p>
              <strong>Actuarial tools</strong> use specified empirical items and
              scoring rules to place people into relative risk groups or
              categories. <strong>Structured professional judgment (SPJ)</strong>
              also uses a defined framework, but leaves more room for professional
              synthesis of case information. <strong>Unstructured judgment</strong>
              is professional intuition without a comparable standardized
              empirical structure.
            </p>
            <p>
              Meta-analytic evidence in the SOLAR evidence matrix supports
              empirically derived actuarial approaches over unstructured
              professional intuition on average, with SPJ performing differently
              from both and generally falling between them. That does not mean a
              score should replace relevant individualized information. It means
              unsupported intuition should not displace an empirical baseline
              merely because it sounds individualized.
            </p>

            <SoftDivider />

            <h3>Relative risk vs. absolute risk</h3>
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

            <h3>Base rates</h3>
            <p>
              A base rate is how often the outcome occurs in the population being
              studied before a particular score is considered. When the outcome is
              uncommon, precise individual prediction becomes harder. Even a tool
              that sorts people better than chance will still make errors when
              applied to a low-frequency outcome.
            </p>

            <SoftDivider />

            <h3>AUC: ranking, not probability</h3>
            <p>
              AUC is a discrimination statistic. In plain English: if you randomly
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
            <h3>Calibration</h3>
            <p>
              Calibration asks a different question: do the predicted or
              reference-group percentages line up with the observed rates in the
              population where the tool is being used? A tool can rank people
              reasonably well and still overpredict or underpredict absolute rates
              in another setting.
            </p>
            <p>
              The workbook flags this problem for Static-99R/Static-2002R and
              CPORT. Static meta-analytic research found more stability in relative
              predictive accuracy than in absolute rates across samples. A Spanish
              CPORT validation found observed sexual recidivism substantially below
              developer expectations, illustrating why population-specific norms
              and reference groups matter.
            </p>

            <SoftDivider />

            <h3>Validation population and population fit</h3>
            <p>
              Every validation study has a population: a jurisdiction, setting,
              offense mix, sex composition, age range, entry point, and follow-up
              design. A tool validated in one population is not automatically
              calibrated for another. Before relying on a percentage, ask which
              reference group generated it and whether that group resembles the
              person and setting at issue.
            </p>

            <SoftDivider />

            <h3>Outcome definition and follow-up period</h3>
            <p>
              Rearrest, charge, reconviction, reincarceration, self-report, and
              detected offending are not interchangeable. Official outcomes can
              miss undetected conduct; self-report has different limitations. A
              recidivism rate is incomplete unless it tells you the outcome
              definition, population, follow-up period, and starting point.
            </p>
            <p>
              A five-year rearrest rate beginning at supervision start is not the
              same quantity as a ten-year reconviction rate beginning at release.
              Comparing them as if they were the same can create false precision.
            </p>

            <SoftDivider />

            <h3>Group prediction vs. individual certainty</h3>
            <p>
              Risk instruments estimate patterns across groups and place an
              individual within those empirical patterns. They do not observe the
              future. A group rate is evidence about a reference group, not an
              individual destiny.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <PullQuoteBlock>
          A useful risk estimate can be informative without being certain. The
          question is not whether the tool is perfect, but whether it is being
          used for the right question, population, outcome, and purpose.
        </PullQuoteBlock>

        <GuideSectionHeader
          id="baseline-static"
          number="2"
          title="Baseline / Static Sexual-Recidivism Risk"
          subtitle="Tools that ask what historical factors suggest about relative long-term risk."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>Static-99R</h3>
          </GuideProse>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-900">What question does it ask?</h4>
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
              <h4 className="font-semibold text-slate-900">Who was it built for?</h4>
              <p className="mt-1 text-slate-700">
                Adult men with qualifying sexual-offense histories under the
                instrument&apos;s coding and eligibility rules.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">What output does it produce?</h4>
              <p className="mt-1 text-slate-700">
                A score that can be interpreted using risk levels, relative-risk
                information, and current normative recidivism estimates tied to
                reference groups.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">What does the evidence say?</h4>
              <p className="mt-1 text-slate-700">
                The workbook identifies Static-99R as an established static
                actuarial tool, while emphasizing that age weighting was revised
                because age contributes meaningful predictive information and that
                absolute rates vary across samples.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">What should be checked before use?</h4>
              <p className="mt-1 text-slate-700">
                Eligibility, current coding rules, the version used, the norm or
                reference group, and whether the case type fits the instrument.
                CSEM-only cases require particular care; not every person convicted
                of a sexual offense is automatically appropriate to score.
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
            <h3>Static-2002R</h3>
          </GuideProse>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-900">What question does it ask?</h4>
              <p className="mt-1 text-slate-700">
                Like Static-99R, it asks about relative long-term
                sexual-recidivism risk from static historical information, but it
                uses a different item/domain structure.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">What goes into it?</h4>
              <p className="mt-1 text-slate-700">
                Static historical domains including age and offense history,
                scored under specific coding rules.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">What does the evidence say?</h4>
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
                designed for every CSEM-only case, and an old score-to-percentage
                table should not be treated as timeless.
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
          number="3"
          title="Changeable / Dynamic Risk and Needs"
          subtitle="These tools ask different questions from static baseline tools."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>STABLE-2007</h3>
            <p>
              STABLE-2007 is designed to assess relatively stable but changeable
              risk and need factors relevant to sexual recidivism. Ratings draw on
              structured interview, file, treatment, and supervision information.
              The output is used for risk/need formulation and treatment or
              supervision planning rather than as a stand-alone long-term
              probability.
            </p>
            <p>
              A prospective Canadian study in the workbook followed 768
              community-supervised adult men and found that STABLE measures
              predicted sexual, violent, and any recidivism. The workbook treats
              this as evidence that dynamic information can add clinically and
              practically relevant information beyond static history.
            </p>

            <h3>ACUTE-2007</h3>
            <p>
              ACUTE-2007 is aimed at shorter-term, rapidly changing concerns during
              community supervision. It is meant to be reassessed repeatedly and
              interpreted in its supervision context. It does not establish a
              person&apos;s long-term actuarial risk and does not diagnose
              dangerousness.
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
          number="4"
          title="CSEM-Specific Assessment"
          subtitle="Specialized tools should be judged within the populations and questions they were designed for."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>CPORT</h3>
          </GuideProse>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-900">What question does it ask?</h4>
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
              <h4 className="font-semibold text-slate-900">What output does it produce?</h4>
              <p className="mt-1 text-slate-700">
                A summed score used for relative-risk grouping. The score is not,
                by itself, an individualized probability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">What does the broader validation evidence say?</h4>
              <p className="mt-1 text-slate-700">
                The workbook includes development and validation studies showing
                meaningful predictive discrimination, including an independent
                validation AUC of .70 in a small 80-person cohort and combined
                sample AUCs of .72 for any sexual recidivism and .74 for a new
                CSEM offense. Those findings are not universal calibration claims.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">What happened in the federal cohort?</h4>
              <p className="mt-1 text-slate-700">
                In a large federal CSEM validation cohort, CPORT produced modest
                discrimination for five-year sexual rearrest: AUC .62, with a 95%
                confidence interval of .58–.65.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Why does population fit matter?</h4>
              <p className="mt-1 text-slate-700">
                A Spanish validation observed a much lower five-year sexual
                recidivism base rate than the development sample and found
                calibration concerns relative to developer expectations. The
                federal implementation also used MITRE-extracted data elements
                that differed from some standard CPORT scoring.
              </p>
            </div>
          </div>

          <GuideCallout
            tone="research"
            icon="⚖️"
            title="CPORT is neither scientifically worthless nor a universal answer"
          >
            <p>
              The workbook supports a mixed, population-sensitive reading:
              CPORT has real empirical validation evidence; performance and
              calibration vary; federal implementation produced only modest
              discrimination; and later or stronger studies should not be erased
              because one cohort was weaker.
            </p>
          </GuideCallout>

          <SoftDivider />

          <GuideProse>
            <h3>CASIC</h3>
            <p>
              CASIC is a structured proxy/index related to evidence of sexual
              interest in children. It was developed in part to operationalize a
              CPORT-related factor when direct admission or other evidence is
              unavailable. The workbook describes it as relying on historical or
              behavioral correlates, not as a stand-alone recidivism instrument.
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
          number="5"
          title="General Federal Risk / Needs Assessment"
          subtitle="General recidivism tools can contain relevant information without becoming specialized sexual-risk instruments."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>PCRA and PCRA-R</h3>
            <p>
              The federal Post Conviction Risk Assessment family is used for
              general recidivism risk, criminogenic needs, supervision planning,
              and allocation of intervention resources in federal post-conviction
              supervision. It combines criminal-history information with dynamic
              needs and officer-assessment fields.
            </p>
            <p>
              That scope distinction matters. PCRA can include factors that
              correlate with sexual recidivism, but its primary validated purpose
              is general federal risk and needs. Correlation with a specialized
              outcome does not transform it into a specialized sexual-risk
              probability calculator.
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
          number="6"
          title="Treatment Progress / Change-Sensitive Assessment"
          subtitle="These instruments are designed to capture information that a purely historical score cannot."
        />

        <GuideSectionCard>
          <GuideProse>
            <h3>SOTIPS</h3>
            <p>
              The Sex Offender Treatment Intervention and Progress Scale is a
              structured, change-sensitive assessment used in treatment and
              supervision contexts. It measures dynamic, treatment-relevant
              factors over time rather than asking only what happened in the past.
            </p>
            <p>
              The primary validation study in the workbook involved 759 adult men
              under correctional supervision in Vermont community treatment.
              SOTIPS ratings predicted sexual, violent, and any recidivism and
              return to prison. Reductions in SOTIPS scores were associated with
              lower recidivism, and combining SOTIPS with Static-99R improved
              prediction in that validation study.
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
            <h3>VRS-SO</h3>
            <p>
              The Violence Risk Scale–Sexual Offense version combines static and
              dynamic information. It is designed to assess baseline risk,
              treatment targets, and treatment-related change and is more
              intensive than a quick screening instrument.
            </p>
            <p>
              The workbook&apos;s foundational validation involved 321 adult men
              and found prediction of sexual and nonsexual violent recidivism over
              an average follow-up of about ten years. Later multisite work
              developed updated risk categories and five- and ten-year recidivism
              estimates using pretreatment risk and change information.
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
          number="7"
          title="Where Structured Professional Judgment Fits"
          subtitle="Structured professional judgment is not the same thing as unsupported clinical intuition."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              SPJ uses defined risk factors and a structured process, while leaving
              room for professional synthesis. That makes it meaningfully
              different from an unstructured impression such as “this person feels
              dangerous” or “my experience tells me the score is wrong.”
            </p>
            <p>
              The meta-analytic evidence in the workbook found empirically derived
              actuarial approaches more accurate than unstructured professional
              judgment across sexual, violent, and any recidivism outcomes. SPJ
              performance was intermediate between actuarial and unstructured
              judgment in that synthesis.
            </p>
            <p>
              The practical lesson is not “scores only.” Individualized
              professional information can matter. The lesson is that a
              professional opinion does not become individualized science merely
              because a professional expresses it. A defensible assessment should
              connect judgment to a structured method, relevant case facts, and an
              empirical baseline.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="worked-example"
          number="8"
          title="Worked Example: One Federal CSEM Cohort"
          subtitle="A bounded example of outcome definition, base rates, population fit, and modest discrimination."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The federal study in the workbook examined a validation cohort of
              <strong> 5,768 male federal CSEM supervisees</strong> using a fixed
              <strong> 60-month follow-up</strong> beginning at supervision start
              or initial PCRA assessment.
            </p>
            <ul>
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
              probability. The federal CPORT data extraction also differed from
              some standard scoring elements, which limits how broadly the result
              should be generalized.
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
          number="9"
          title="Questions to Ask When Someone Gives You a Risk Score"
          subtitle="You do not need to self-score a professional instrument to ask whether it is being interpreted responsibly."
        />

        <GuideSectionCard>
          <GuideChecklist
            id="risk-score-questions"
            title="Use these questions in a report review, meeting, hearing, or conversation"
            columns={1}
            items={[
              {
                id: "instrument",
                label: "What instrument was used, and what question was it designed to answer?",
              },
              {
                id: "eligibility",
                label: "Was the person actually eligible to be scored with it under current rules?",
              },
              {
                id: "version",
                label: "Which version, coding rules, and norms were used?",
              },
              {
                id: "population",
                label: "What population was the tool validated on, and how well does that population fit this case?",
              },
              {
                id: "outcome",
                label: "What exact outcome does it predict or measure: rearrest, reconviction, charge, reincarceration, or something else?",
              },
              {
                id: "followup",
                label: "Over what follow-up period, and starting from what point?",
              },
              {
                id: "output",
                label: "Is this score being presented as relative risk, an absolute rate, a risk category, or something else?",
              },
              {
                id: "reference",
                label: "What reference group generated any percentage being quoted?",
              },
              {
                id: "dynamic",
                label: "Were current dynamic or treatment-change factors considered where relevant?",
              },
              {
                id: "scorer",
                label: "Who scored the instrument, and what training or coding process was used?",
              },
              {
                id: "override",
                label: "Were any overrides or professional adjustments applied? If so, what specific evidence supported them?",
              },
              {
                id: "purpose",
                label: "Is the result being used for a purpose the tool was not designed or validated for?",
              },
              {
                id: "certainty",
                label: "Is someone treating a group estimate, AUC, or risk category as an individualized certainty?",
              },
            ]}
          />

          <VerifyBeforeActing
            whoToAsk="The evaluator or agency using the score, plus counsel or another qualified professional when the score affects a legal decision."
            whatToAsk="Ask for the instrument name, version, eligibility basis, coding rules, outcome, follow-up period, reference group, and any override rationale."
            whatToSave="Save the written report, score sheet if disclosure is permitted, cited norms, evaluator explanation, corrections, and any written response to a disputed coding item."
          />

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
          number="10"
          title="What Risk Language Does Not Mean"
          subtitle="These are the most common interpretation errors to stop before they spread."
        />

        <GuideSectionCard>
          <GuideProse>
            <ul>
              <li>
                <strong>“Low risk” does not mean zero risk.</strong>
              </li>
              <li>
                <strong>“High relative risk” does not automatically mean a high absolute probability.</strong>
              </li>
              <li>
                <strong>AUC .70 does not mean a 70% chance of recidivism.</strong>
              </li>
              <li>
                <strong>A group recidivism rate is not an individual destiny.</strong>
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
                <strong>PCRA is not a specialized sexual-risk probability calculator.</strong>
              </li>
              <li>
                <strong>Dynamic improvement does not guarantee no future offending.</strong>
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
          number="11"
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
                label: "Federal CSEM risk-tool study — Cohen (2023), Federal Probation",
                href: sourceLinks.federalCsem,
                description:
                  "Federal 5,768-person CSEM validation cohort; five-year sexual rearrest; PCRA and CPORT discrimination; federal implementation limitations.",
              },
              {
                label: "Hanson & Morton-Bourgon (2009) — risk-assessment accuracy meta-analysis",
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
                label: "Helmus et al. (2012) — Static absolute rates across samples",
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
                label: "Hanson, Helmus & Harris (2015) — STABLE-2007 prospective study",
                href: sourceLinks.stable,
                description:
                  "Prospective evidence on dynamic risk/need assessment alongside static measures.",
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
                label: "Critical review of CPORT use in CSEM-exclusive cases (2023)",
                href: sourceLinks.cportCritical,
                description:
                  "Population-specific limitations, small recidivist counts, missing data, and U.S.-validation concerns at the time of review.",
              },
              {
                label: "Johnson et al. (2011) — PCRA construction and validation",
                href: sourceLinks.pcra,
                description:
                  "Primary scope source for PCRA as a general federal post-conviction risk-and-needs instrument.",
              },
              {
                label: "McGrath, Lasher & Cumming (2012) — SOTIPS validation",
                href: sourceLinks.sotips,
                description:
                  "Primary 759-person validation source for SOTIPS predictive validity, change, and incremental value with Static-99R.",
              },
              {
                label: "Olver et al. (2007) — VRS-SO validity and reliability",
                href: sourceLinks.vrsFoundational,
                description:
                  "Foundational validation for VRS-SO risk and treatment-change assessment.",
              },
              {
                label: "Olver et al. (2018) — VRS-SO updated risk categories",
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