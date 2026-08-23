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
  GuideChecklist,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
} from "../../components/solar";

const sourceLinks = {
  zgobaMitchell: "https://doi.org/10.1007/s11292-021-09480-z",
  prescottRockoff: "https://www.journals.uchicago.edu/doi/10.1086/658485",
  agan: "https://www.journals.uchicago.edu/doi/10.1086/658483",
  sandlerFreemanSocia: "https://doi.org/10.1037/a0013881",
  duweDonnay: "https://doi.org/10.1111/j.1745-9125.2008.00114.x",
  letourneauRecidivism: "https://doi.org/10.1177/0887403409353148",
  letourneauJudicial: "https://doi.org/10.1177/0734016809360330",
  newJersey:
    "https://nij.ojp.gov/library/publications/megans-law-assessing-practical-and-monetary-efficacy",
  levensonCotter:
    "https://scholars.lynn.edu/en/publications/the-effect-of-megans-law-on-sex-offender-reintegration/",
  andersonSample:
    "https://www.ojp.gov/ncjrs/virtual-library/abstracts/public-awareness-and-action-resulting-sex-offender-community",
  bonnarKidd: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2820068/",
  freeman: "https://doi.org/10.1177/0011128708330852",
  lasherMcGrath: "https://doi.org/10.1177/0306624X10387524",
  cubellis: "https://doi.org/10.1177/0306624X16667574",
  harrisLawEnforcement: "https://doi.org/10.1177/0887403416651671",
} as const;

const relatedGuideRoutes = {
  risk: "/resources/risk-assessment-guide",
  recidivism: "/resources/recidivism-evidence-guide",
} as const;

const linkCls =
  "font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900";

const navLinkCls =
  "rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950";

export default function RegistryEffectivenessEvidenceGuide(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Registry Effectiveness: What Does the Evidence Show? | The SOLAR Project"
        description="A plain-language SOLAR evidence guide examining whether sex-offense registration and public notification produce measurable public-safety benefits, what narrower findings show, and how costs and collateral effects belong in the analysis."
        keywords="sex offense registry effectiveness, SORN evidence, sex offender registration research, public notification effectiveness, recidivism, registry policy, Megan's Law, SOLAR Project"
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
            SOLAR Evidence Guide
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Registry Effectiveness: What Does the Evidence Show?
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Registration and public notification are often treated as obviously
            protective. This guide asks the harder question: what measurable
            public-safety benefit do they actually produce?
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
            Sex-offense registration and notification laws are usually defended
            as public-safety measures. But a policy is not proven effective
            simply because it collects information, makes people visible, or
            feels precautionary. Effectiveness has to be measured against an
            outcome that matters: fewer offenses, fewer victims, lower
            recidivism, better protective behavior, or some other demonstrated
            safety gain.
          </p>
          <p>
            This guide uses the SOLAR Evidence Matrix to separate the major
            registry components, examine the strongest broad evidence, and show
            where narrower findings do—and do not—support claims of benefit.
          </p>
        </GuideIntro>

        <GuideCallout tone="family" icon="🏠" title="For people living with the system">
          <p>
            If registration has reshaped where you can live, where you can work,
            how your family is treated, or whether your address is publicly
            searchable, it is reasonable to ask what measurable public-safety
            benefit those burdens produce. This guide takes that question
            seriously.
          </p>
        </GuideCallout>

        <GuideSectionCard>
          <GuideProse>
            <h2>The third guide in SOLAR’s evidence sequence</h2>
            <p>
              The{" "}
              <Link to={relatedGuideRoutes.risk} className={linkCls}>
                Understanding Sex-Offense Risk Assessment
              </Link>{" "}
              guide explains why risk is heterogeneous and why individualized
              assessment matters. The{" "}
              <Link to={relatedGuideRoutes.recidivism} className={linkCls}>
                Understanding Recidivism Evidence
              </Link>{" "}
              guide explains why recidivism depends on population, outcome,
              follow-up, subgroup, and comparison.
            </p>
            <p>
              This guide takes the next step: given what we know about risk and
              recidivism, does categorical registration or public notification
              produce enough measurable safety benefit to justify the system
              built around it?
            </p>
          </GuideProse>
        </GuideSectionCard>

        <nav
          aria-label="Guide sections"
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
            On this page
          </h2>
          <div className="mt-3 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            <a className={navLinkCls} href="#supposed-to-accomplish">What the registry is supposed to do</a>
            <a className={navLinkCls} href="#effectiveness">What effectiveness means</a>
            <a className={navLinkCls} href="#policy-components">Policy components</a>
            <a className={navLinkCls} href="#best-broad-evidence">Best broad evidence</a>
            <a className={navLinkCls} href="#repeat-offending">Repeat offending</a>
            <a className={navLinkCls} href="#first-time-and-public-use">First-time offending and public use</a>
            <a className={navLinkCls} href="#targeted-versus-universal">Targeted vs. universal disclosure</a>
            <a className={navLinkCls} href="#state-evaluations">State evaluations</a>
            <a className={navLinkCls} href="#costs-and-collateral">Costs and collateral effects</a>
            <a className={navLinkCls} href="#operational-reality">Operational reality</a>
            <a className={navLinkCls} href="#what-evidence-supports">What the evidence supports saying</a>
            <a className={navLinkCls} href="#questions-to-ask">Questions to ask</a>
            <a className={navLinkCls} href="#bottom-line">Bottom line</a>
            <a className={navLinkCls} href="#sources">Sources</a>
          </div>
        </nav>

        <GuideSectionHeader
          id="supposed-to-accomplish"
          number="1"
          title="What Is the Registry Supposed to Accomplish?"
          subtitle="The theory contains several different mechanisms, and they should not be collapsed into one."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Registry laws can serve several claimed functions at once. A
              law-enforcement database may be intended to help police identify
              or locate people. Public notification may be intended to help
              residents change their behavior. Verification rules may be
              intended to keep records current. Some policies are also defended
              as deterrence: the prospect of registration or public exposure is
              supposed to discourage offending.
            </p>
            <p>
              Those are different mechanisms. A database can have investigative
              utility without proving that public Internet disclosure reduces
              sexual offending. A website can be widely available without
              proving that people use it, act on it, or prevent victimization.
            </p>
          </GuideProse>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Mechanism 1",
                title: "Information",
                icon: "🗂️",
                tone: "info",
                description:
                  "Keep identifying and location information available to law enforcement.",
              },
              {
                eyebrow: "Mechanism 2",
                title: "Public warning",
                icon: "📣",
                tone: "warning",
                description:
                  "Give the public information that might change protective behavior or increase surveillance.",
              },
              {
                eyebrow: "Mechanism 3",
                title: "Deterrence",
                icon: "🛑",
                tone: "legal",
                description:
                  "Create consequences or visibility that are expected to discourage future offending.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="effectiveness"
          number="2"
          title="What Does “Effectiveness” Mean?"
          subtitle="Administrative activity is not the same thing as a public-safety outcome."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A fair evaluation begins by naming the outcome. Researchers can
              ask whether a policy changes sexual recidivism, overall
              recidivism, first-time sexual offending, victimization,
              deterrence, apprehension, public protective behavior, information
              accuracy, administrative workload, cost, or collateral effects.
            </p>
            <p>
              Calling a registry “effective” without specifying which outcome
              improved can hide the central question. People looking at a
              website is not the same outcome as fewer victims. Police having
              access to a database is not the same outcome as lower
              recidivism.
            </p>
          </GuideProse>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Safety outcome",
                title: "Repeat offending",
                icon: "📉",
                tone: "research",
                description:
                  "Does registration or notification reduce sexual or overall recidivism?",
              },
              {
                eyebrow: "Safety outcome",
                title: "First-time offending",
                icon: "🧭",
                tone: "research",
                description:
                  "Does the policy deter sexual offending by people who are not already registered?",
              },
              {
                eyebrow: "Mechanism",
                title: "Protective action",
                icon: "👥",
                tone: "info",
                description:
                  "Do people access the information and change behavior in ways that plausibly improve safety?",
              },
              {
                eyebrow: "System quality",
                title: "Accuracy and utility",
                icon: "✅",
                tone: "neutral",
                description:
                  "Is the information accurate, usable, current, and interpretable by the people expected to rely on it?",
              },
              {
                eyebrow: "Burden",
                title: "Cost and administration",
                icon: "💵",
                tone: "warning",
                description:
                  "What money, staff time, enforcement effort, and operational complexity does the system require?",
              },
              {
                eyebrow: "Burden",
                title: "Reintegration effects",
                icon: "🏘️",
                tone: "reentry",
                description:
                  "What happens to housing, work, relationships, stability, privacy, and ordinary community life?",
              },
            ]}
          />

          <GuideCallout tone="research" icon="🔎" title="The measurement rule">
            <p>
              Precaution is not the same thing as demonstrated effectiveness.
              Visibility is not itself a public-safety outcome. A policy that
              imposes large and durable burdens should be evaluated against the
              measurable benefits it actually produces.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="policy-components"
          number="3"
          title="Registration Is Not the Same as Public Notification"
          subtitle="The evidence becomes clearer when the intervention is identified before the result is interpreted."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The SOLAR Evidence Matrix separates registry-related policies
              because studies do not all evaluate the same intervention. This is
              essential to reading the evidence accurately.
            </p>
          </GuideProse>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "A",
                title: "Registration database",
                icon: "🗃️",
                tone: "info",
                description:
                  "Identity, address, and related information maintained for official or law-enforcement use.",
              },
              {
                eyebrow: "B",
                title: "Public notification",
                icon: "📢",
                tone: "warning",
                description:
                  "Disclosure through websites, notices, meetings, or other public-facing methods.",
              },
              {
                eyebrow: "C",
                title: "Targeted high-risk notification",
                icon: "🎯",
                tone: "research",
                description:
                  "Notification focused on a selected higher-risk group, such as Minnesota Level 3 cases.",
              },
              {
                eyebrow: "D",
                title: "Broad Internet disclosure",
                icon: "🌐",
                tone: "legal",
                description:
                  "Large-scale public access that may include far more people than a selected high-risk group.",
              },
              {
                eyebrow: "E",
                title: "Broad SORN packages",
                icon: "🧩",
                tone: "neutral",
                description:
                  "Studies where registration and notification changed together or cannot be cleanly separated.",
              },
              {
                eyebrow: "F",
                title: "Verification and reporting",
                icon: "📝",
                tone: "reminder",
                description:
                  "Address updates, periodic verification, change reporting, and compliance administration.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⚖️" title="Keep adjacent policies separate">
            <p>
              Residence restrictions and similar exclusion rules may use
              registry status as a trigger, but they are separate policies.
              Evidence about residence restrictions should not be presented as
              evidence that registration itself reduces—or increases—sexual
              offending.
            </p>
          </GuideCallout>

          <GuideProse>
            <p>
              A useful example comes from{" "}
              <a
                href={sourceLinks.prescottRockoff}
                className={linkCls}
                target="_blank"
                rel="noreferrer"
              >
                Prescott and Rockoff
              </a>
              . Their study estimated different effects for registration and
              public notification. Registration was associated with reductions
              in some reported sex offenses against local victims, while public
              notification appeared to operate through a different mechanism
              and may have increased recidivism among people already registered.
            </p>
            <p>
              The lesson is not that one study settles the whole debate. The
              lesson is that “registration” and “public notification” are not
              interchangeable concepts.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="best-broad-evidence"
          number="4"
          title="The Best Broad Evidence"
          subtitle="The strongest pooled evidence in the SOLAR matrix has not demonstrated an overall recidivism-reduction effect."
        />

        <GuideSectionCard>
          <GuideCallout tone="research" icon="📊" title="The major empirical anchor">
            <p>
              Across 25 years of evaluated SORN policies, the strongest broad
              quantitative synthesis in the SOLAR Evidence Matrix did not find a
              statistically significant overall reduction in recidivism.
            </p>
          </GuideCallout>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Worked example
            </div>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              What does the broadest quantitative synthesis say?
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-500">Research articles</div>
                <div className="mt-1 text-2xl font-bold text-slate-900">18</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-500">Individuals</div>
                <div className="mt-1 text-2xl font-bold text-slate-900">474,640</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-500">Effect sizes</div>
                <div className="mt-1 text-2xl font-bold text-slate-900">42</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-500">Overall result</div>
                <div className="mt-1 text-lg font-bold text-slate-900">No significant pooled effect</div>
              </div>
            </div>

            <GuideProse>
              <p>
                In{" "}
                <a
                  href={sourceLinks.zgobaMitchell}
                  className={linkCls}
                  target="_blank"
                  rel="noreferrer"
                >
                  Zgoba and Mitchell’s meta-analysis
                </a>
                , the random-effects pooled analysis found no statistically
                significant overall SORN effect on recidivism. The null also
                persisted when outcomes were separated into sexual versus
                nonsexual recidivism and arrest versus conviction.
              </p>
              <p>
                <strong>Interpretation:</strong> the best broad pooled evidence
                in the matrix has not demonstrated the overall
                recidivism-reduction effect commonly assumed in public debate.
              </p>
              <p>
                <strong>Boundary:</strong> SORN studies combine different
                policy designs, populations, and eras. A pooled null does not
                prove that every specific registry component has exactly zero
                effect. It does mean that narrower favorable findings should not
                be generalized into a claim that broad SORN has demonstrated an
                overall recidivism benefit.
              </p>
            </GuideProse>
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="repeat-offending"
          number="5"
          title="Does SORN Reduce Repeat Sexual Offending?"
          subtitle="Several major evaluations found no detectable recidivism benefit, while component-specific studies complicate blanket claims."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The pooled result is supported by several influential individual
              evaluations.{" "}
              <a href={sourceLinks.agan} className={linkCls} target="_blank" rel="noreferrer">Agan</a>{" "}
              analyzed three different datasets and found no detectable
              public-safety benefit across the designs examined.{" "}
              <a href={sourceLinks.letourneauRecidivism} className={linkCls} target="_blank" rel="noreferrer">
                Letourneau and colleagues’ South Carolina analysis
              </a>{" "}
              found that registration status did not significantly predict
              sexual recidivism in the modeled analyses.
            </p>
            <p>
              A{" "}
              <a href={sourceLinks.sandlerFreemanSocia} className={linkCls} target="_blank" rel="noreferrer">
                New York time-series study by Sandler, Freeman, and Socia
              </a>{" "}
              found no support for SORN reducing the studied categories of
              sexual offending, including sexual recidivists and first-time
              offenders. Because it is a time-series study, it cannot perfectly
              isolate registration from notification or broader secular trends.
            </p>
            <p>
              A large{" "}
              <a href={sourceLinks.freeman} className={linkCls} target="_blank" rel="noreferrer">
                Freeman notified-versus-non-notified comparison
              </a>{" "}
              also sits uneasily with a simple claim that notification lowers
              recidivism. Notified people were rearrested about twice as quickly
              for a sexual offense and 47% more quickly for a nonsexual offense.
              That result should <strong>not</strong> be read as proof that
              notification caused faster rearrest: notification assignment,
              baseline risk, surveillance intensity, and detection can all
              confound the comparison.
            </p>
          </GuideProse>

          <GuideCallout tone="research" icon="🧠" title="What this section supports">
            <p>
              It is accurate to say that the strongest broad pooled evidence has
              not demonstrated an overall SORN recidivism-reduction effect and
              that several major evaluations found no detectable benefit. It is
              not accurate to say that every study proves every registry
              component does nothing.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="first-time-and-public-use"
          number="6"
          title="Does Public Notification Prevent First-Time Offending?"
          subtitle="Some evidence points to deterrence, but public availability still has to travel through a real behavioral chain."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Public notification is sometimes defended as a general deterrent,
              not only as a recidivism intervention. In{" "}
              <a href={sourceLinks.prescottRockoff} className={linkCls} target="_blank" rel="noreferrer">
                Prescott and Rockoff
              </a>
              , notification appeared to reduce offending by people who were not
              already registered. That finding matters because it identifies a
              possible benefit operating through a mechanism different from
              reducing recidivism among registered people.
            </p>
            <p>
              But the public-notification theory still contains a chain of
              assumptions: information must be available, people must find and
              understand it, they must change behavior, and those changes must
              prevent victimization. Each step can fail even if the website
              itself functions exactly as designed.
            </p>
          </GuideProse>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["1", "Information is public", "The website or notice exists."],
              ["2", "People use it", "Residents actually access the information."],
              ["3", "Behavior changes", "Users take a protective action."],
              ["4", "Victimization falls", "The action produces a measurable safety gain."],
            ].map(([step, title, description]) => (
              <div key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Step {step}</div>
                <div className="mt-1 font-semibold text-slate-900">{title}</div>
                <div className="mt-1 text-sm leading-relaxed text-slate-600">{description}</div>
              </div>
            ))}
          </div>

          <GuideProse>
            <p>
              The{" "}
              <a href={sourceLinks.andersonSample} className={linkCls} target="_blank" rel="noreferrer">
                Anderson and Sample Nebraska survey
              </a>{" "}
              directly tested part of that chain. Among respondents with valid
              access data, 34.8% had accessed the registry and 65.2% had not.
              Among registry users with action data, 37.6% reported taking a
              preventative action and 62.4% did not.
            </p>
            <p>
              That does not mean nobody uses registries. It means public
              availability does not automatically produce public use, and public
              use does not by itself establish a measurable crime-prevention
              effect.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="targeted-versus-universal"
          number="7"
          title="Targeted Notification Is Not Universal Public Disclosure"
          subtitle="A narrower policy can show benefit without proving that broad Internet disclosure works the same way."
        />

        <GuideSectionCard>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Worked example</div>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Can a narrower notification policy show benefit even when broad SORN evidence is weak?
            </h3>

            <GuideProse>
              <p>
                Yes.{" "}
                <a href={sourceLinks.duweDonnay} className={linkCls} target="_blank" rel="noreferrer">
                  Duwe and Donnay’s Minnesota study
                </a>{" "}
                examined broad community notification for selected high-risk
                Level 3 individuals. The study found significant reductions or
                delays in sexual rearrest, reconviction, and reincarceration
                relative to comparison groups.
              </p>
              <p>
                <strong>What it supports:</strong> at least one strong
                quasi-experimental study found benefit for targeted notification
                of a selected high-risk group.
              </p>
              <p>
                <strong>What it does not support:</strong> the conclusion that
                universal public Internet disclosure produces the same effect
                across a far broader registry population.
              </p>
            </GuideProse>
          </div>

          <GuideCallout tone="info" icon="🎯" title="Why policy specificity matters">
            <p>
              Targeting changes the population, the intensity of the
              intervention, the information available to the public, and the
              resources required to administer the policy. Evidence for a
              selected Level 3 notification system should not be silently
              transferred to a universal website.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="state-evaluations"
          number="8"
          title="What State Evaluations Found"
          subtitle="State studies help show what broad policy looks like when benefits and implementation are measured in the real world."
        />

        <GuideSectionCard>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Worked example</div>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              New Jersey: what happens when benefits and costs are measured together?
            </h3>

            <GuideProse>
              <p>
                The{" "}
                <a href={sourceLinks.newJersey} className={linkCls} target="_blank" rel="noreferrer">
                  National Institute of Justice evaluation of New Jersey Megan’s Law
                </a>{" "}
                reported no demonstrated effect on overall sexual offenses, time
                to first rearrest, sexual reoffending, type of sexual reoffense,
                first-time sexual offending, or number of victims.
              </p>
              <p>
                The same evaluation documented implementation costs:
                approximately <strong>$555,565 in start-up costs</strong> and
                approximately <strong>$3.9 million in reported 2007 current
                county costs</strong> among responding counties.
              </p>
              <p>
                Those figures are historical New Jersey costs—not a nationwide
                estimate. Their importance is conceptual: when an evaluation
                measures both burden and outcome, the question becomes,
                “What measurable benefit was purchased for the cost?”
              </p>
            </GuideProse>
          </div>

          <GuideProse>
            <h3>New York</h3>
            <p>
              The New York time-series study found no support for SORN reducing
              the studied categories of sexual offending. Its design cannot
              fully separate registration from notification or eliminate every
              broader time trend, but it remains an important major-state
              evaluation showing no detectable policy effect.
            </p>

            <h3>South Carolina</h3>
            <p>
              In the South Carolina recidivism analysis, registration status did
              not significantly predict sexual recidivism. A separate{" "}
              <a href={sourceLinks.letourneauJudicial} className={linkCls} target="_blank" rel="noreferrer">
                South Carolina study of judicial decisions
              </a>{" "}
              found changes in charging and disposition patterns across policy
              periods. That is a reminder that registry policy can affect the
              justice system in ways that do not appear as a straightforward
              recidivism change.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="costs-and-collateral"
          number="9"
          title="What the Registry Costs—and Why Collateral Effects Belong in Safety Analysis"
          subtitle="Housing, work, stability, privacy, and administrative burden are not side issues when a policy is justified in the name of safety."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Collateral consequences matter for two separate reasons. First,
              they are human and fairness costs borne by people on registries
              and their families. Second, they can affect the stability that
              public-safety systems ordinarily try to build: housing, work,
              relationships, treatment engagement, and successful reintegration.
            </p>
            <p>
              The matrix does not support saying that notification simply
              “causes people to reoffend.” It does support saying that recurring
              reintegration burdens are well documented and that more intrusive
              notification has been associated with more socially destabilizing
              consequences.
            </p>
          </GuideProse>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Reintegration",
                title: "Housing",
                icon: "🏠",
                tone: "reentry",
                description:
                  "Housing loss, difficulty securing housing, relocation pressure, and reduced housing stability recur in notification and reintegration research.",
              },
              {
                eyebrow: "Reintegration",
                title: "Employment",
                icon: "💼",
                tone: "reentry",
                description:
                  "Job loss and employment barriers appear repeatedly in notification research.",
              },
              {
                eyebrow: "Personal safety",
                title: "Threats and harassment",
                icon: "⚠️",
                tone: "warning",
                description:
                  "Surveys report threats, harassment, property damage, and other public-exposure consequences.",
              },
              {
                eyebrow: "Well-being",
                title: "Social and psychological effects",
                icon: "🧠",
                tone: "family",
                description:
                  "Negative psychological effects and social isolation are recurring findings in reintegration studies.",
              },
              {
                eyebrow: "System quality",
                title: "Inaccurate information",
                icon: "🧾",
                tone: "neutral",
                description:
                  "Some studies report inaccurate registry information, which can weaken both fairness and practical utility.",
              },
              {
                eyebrow: "Administration",
                title: "Staff and fiscal burden",
                icon: "🏛️",
                tone: "legal",
                description:
                  "Verification, updates, public disclosure, enforcement, and inter-agency communication all require resources.",
              },
            ]}
          />

          <GuideProse>
            <p>
              The{" "}
              <a href={sourceLinks.lasherMcGrath} className={linkCls} target="_blank" rel="noreferrer">
                Lasher and McGrath quantitative review
              </a>{" "}
              synthesized eight studies involving 1,503 people and found
              recurring housing, employment, social, and psychological burdens.
              The review also found that more intrusive notification strategies
              were associated with more socially destabilizing consequences.
            </p>
            <p>
              Earlier work by{" "}
              <a href={sourceLinks.levensonCotter} className={linkCls} target="_blank" rel="noreferrer">
                Levenson and Cotter
              </a>{" "}
              likewise documented job and housing loss, threats or harassment,
              psychological effects, and reports of inaccurate Internet-registry
              information among surveyed respondents.
            </p>
          </GuideProse>

          <GuideCallout tone="research" icon="⚖️" title="The proportionality question">
            <p>
              Where demonstrated public-safety gains are null, narrow,
              inconsistent, or limited to particular policy designs, financial,
              administrative, and reintegration burdens become central to
              judging whether the policy is proportionate.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="operational-reality"
          number="10"
          title="Does the System Work the Way Its Theory Assumes?"
          subtitle="A registry’s safety mechanism depends on information quality, implementation, public understanding, and usable scale."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Even if a registry has some informational value, the safety theory
              still depends on implementation. Information must be accurate.
              Systems must communicate. Homelessness and transience must be
              handled in ways that do not make location data meaningless.
              Public-facing information must be understandable. Agencies must
              have enough capacity to maintain the system they are asked to
              operate.
            </p>
            <p>
              National law-enforcement research by{" "}
              <a href={sourceLinks.harrisLawEnforcement} className={linkCls} target="_blank" rel="noreferrer">
                Harris and colleagues
              </a>{" "}
              identified concerns involving information reliability and utility,
              inter-system communication, homelessness and transience, and the
              public’s ability to interpret registry information.
            </p>
            <p>
              A separate study by{" "}
              <a href={sourceLinks.cubellis} className={linkCls} target="_blank" rel="noreferrer">
                Cubellis, Walfield, and Harris
              </a>{" "}
              found mixed law-enforcement views. Respondents in states with
              larger registries expressed greater concern about collateral
              consequences and less belief in SORN public-safety efficacy, while
              personnel more engaged in SORN work also sometimes reported more
              belief in its effectiveness.
            </p>
          </GuideProse>

          <GuideCallout tone="neutral" icon="🛠️" title="What the practitioner evidence supports">
            <p>
              The people responsible for administering registry systems describe
              real limitations in information quality, implementation, scale,
              and public interpretation. That is different from saying law
              enforcement uniformly thinks registries are useless.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="what-evidence-supports"
          number="11"
          title="What the Evidence Supports Saying"
          subtitle="Strong public claims do not need to be absolute to be consequential."
        />

        <GuideSectionCard>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "The best broad pooled recidivism evidence has not demonstrated a statistically significant overall SORN recidivism-reduction effect.",
              "Registration and public notification are different interventions and should be evaluated separately.",
              "Some narrower or targeted notification systems have shown favorable effects.",
              "Targeted high-risk findings do not establish that universal public Internet disclosure is effective.",
              "Several major state evaluations found no detectable reduction in sexual offending or sexual recidivism.",
              "Public availability does not automatically translate into public use or measurable prevention.",
              "Registry systems impose real administrative, fiscal, housing, employment, social, and psychological burdens.",
              "Those burdens belong inside public-safety analysis because a policy’s burden should be proportionate to its demonstrated benefit.",
            ].map((claim) => (
              <div key={claim} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex gap-3">
                  <span aria-hidden="true" className="mt-0.5">✓</span>
                  <p className="m-0 leading-relaxed text-slate-700">{claim}</p>
                </div>
              </div>
            ))}
          </div>

          <GuideCallout tone="warning" icon="🚫" title="Claims this evidence does not justify">
            <GuideProse>
              <ul>
                <li>“Registries do nothing.”</li>
                <li>“No registry has ever prevented a crime.”</li>
                <li>“All registry research proves failure.”</li>
                <li>“Nobody uses the registry.”</li>
                <li>“Notification causes recidivism.”</li>
                <li>“Every person on a registry is low risk.”</li>
              </ul>
            </GuideProse>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="questions-to-ask"
          number="12"
          title="Questions to Ask About Any Registry Policy"
          subtitle="A disciplined policy discussion starts by identifying the intervention, outcome, population, and tradeoffs."
        />

        <GuideSectionCard>
          <GuideChecklist
            id="registry-policy-questions"
            title="Use these questions to test an effectiveness claim"
            columns={2}
            items={[
              { id: "component", label: "Which component is being evaluated: registration, notification, Internet disclosure, targeted notification, verification, or something else?" },
              { id: "outcome", label: "What measurable outcome improved: sexual recidivism, first-time offending, victimization, apprehension, public behavior, or only an administrative function?" },
              { id: "population", label: "Which population was studied, and can the result fairly be generalized beyond that group?" },
              { id: "comparison", label: "What was the comparison group or pre-policy baseline?" },
              { id: "magnitude", label: "How large was the measured benefit, and was it statistically distinguishable from no effect?" },
              { id: "burden", label: "What financial, administrative, housing, employment, privacy, family, and reintegration burdens came with the policy?" },
              { id: "mechanism", label: "Did the proposed safety mechanism actually occur—for example, public use followed by protective behavior?" },
              { id: "alternatives", label: "Could the same resources be directed toward interventions whose safety benefits are more directly demonstrated?" },
            ]}
          />

          <GuideProse>
            <p>
              These questions also connect back to SOLAR’s earlier evidence
              guides. If risk is heterogeneous, then a finding about a selected
              high-risk group should not automatically be generalized to
              everyone with a registry label. If recidivism varies by
              population, outcome, subgroup, and time, then policy evaluation
              should be at least as specific.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="bottom-line"
          number="13"
          title="The Bottom Line: What Measurable Safety Benefit Are We Buying?"
          subtitle="The strongest conclusion is a proportionality argument, not a claim that every conceivable registry function equals zero."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The component-level literature is heterogeneous, but the center of
              the evidence is not neutral. The strongest broad pooled evidence
              in the SOLAR matrix has not demonstrated an overall
              recidivism-reduction effect. Several major evaluations found no
              detectable benefit. Public-notification systems impose measurable
              burdens. And narrower favorable findings—especially for selected
              high-risk notification—do not establish that universal public
              disclosure produces the same result.
            </p>
            <p>
              That leaves a legitimate public-safety question:{" "}
              <strong>what measurable safety benefit are we buying with all of this?</strong>
            </p>
            <p>
              A policy can have some administrative or informational utility and
              still fail to justify its scale, publicity, duration, collateral
              consequences, or categorical design. Evidence-based public safety
              should be willing to distinguish individualized risk, targeted
              intervention, focused supervision where warranted, effective
              treatment, and prevention aimed at actual pathways to harm from a
              broad system whose benefits are too often assumed rather than
              demonstrated.
            </p>
          </GuideProse>

          <GuideCallout tone="success" icon="🌱" title="The evidence standard">
            <p>
              Burdens should not be presumed justified simply because the policy
              concerns sexual offending. Effectiveness must be measured, not
              assumed.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="sources"
          number="14"
          title="Sources and Further Reading"
          subtitle="Primary studies, government evaluations, and evidence syntheses used in this guide."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Start with these evidence anchors"
            resources={[
              { label: "Zgoba & Mitchell — SORN meta-analysis", description: "The strongest broad quantitative synthesis in the SOLAR Evidence Matrix.", href: sourceLinks.zgobaMitchell, badge: "Meta-analysis" },
              { label: "National Institute of Justice — New Jersey Megan’s Law evaluation", description: "State evaluation combining public-safety outcomes with implementation-cost analysis.", href: sourceLinks.newJersey, badge: "Government" },
              { label: "Prescott & Rockoff — registration vs. notification", description: "Important component-specific study separating possible registration and notification mechanisms.", href: sourceLinks.prescottRockoff, badge: "Research" },
              { label: "Duwe & Donnay — Minnesota Level 3 notification", description: "Key quasi-experimental evidence of benefit for targeted notification of a selected high-risk group.", href: sourceLinks.duweDonnay, badge: "Research" },
            ]}
          />

          <RelatedGuides
            guides={[
              { title: "Understanding Sex-Offense Risk Assessment", description: "How individualized risk assessment differs from categorical assumptions about people with sex-offense histories.", to: relatedGuideRoutes.risk },
              { title: "Understanding Recidivism Evidence", description: "How population, outcome, subgroup, follow-up, and comparison shape what recidivism statistics actually mean.", to: relatedGuideRoutes.recidivism },
            ]}
          />

          <SourceList
            note="Source scope and wording are controlled by the SOLAR Evidence Matrix. Canonical URLs are retained here so readers can follow the evidence path."
            sources={[
              { label: "Zgoba, K. M., & Mitchell, M. M. (2023). The effectiveness of Sex Offender Registration and Notification: A meta-analysis of 25 years of findings.", href: sourceLinks.zgobaMitchell, description: "Meta-analysis of 18 research articles, 474,640 individuals, and 42 effect sizes; no statistically significant overall pooled SORN recidivism effect." },
              { label: "Prescott, J. J., & Rockoff, J. E. (2011). Do Sex Offender Registration and Notification Laws Affect Criminal Behavior?", href: sourceLinks.prescottRockoff, description: "Separates registration from notification and reports different estimated mechanisms and effects." },
              { label: "Agan, A. Y. (2011). Sex Offender Registries: Fear without Function?", href: sourceLinks.agan, description: "Multiple empirical designs that did not support the hypothesis that registries increased public safety." },
              { label: "Sandler, J. C., Freeman, N. J., & Socia, K. M. (2008). Does a Watched Pot Boil?", href: sourceLinks.sandlerFreemanSocia, description: "New York time-series analysis finding no support for SORN reducing the studied categories of sexual offending." },
              { label: "Duwe, G., & Donnay, W. (2008). The Impact of Megan’s Law on Sex Offender Recidivism: The Minnesota Experience.", href: sourceLinks.duweDonnay, description: "Quasi-experimental study reporting benefit for targeted Level 3 community notification." },
              { label: "Letourneau, E. J., et al. (2010). Effects of South Carolina’s Sex Offender Registration and Notification Policy on Adult Recidivism.", href: sourceLinks.letourneauRecidivism, description: "Registration status did not significantly predict sexual recidivism in the modeled analyses." },
              { label: "Letourneau, E. J., et al. (2010). The Effects of Sex Offender Registration and Notification on Judicial Decisions.", href: sourceLinks.letourneauJudicial, description: "South Carolina analysis of justice-system charging and disposition effects across policy periods." },
              { label: "Zgoba, K. M., Witt, P. H., Dalessandro, M., & Veysey, B. M. (2008). Megan’s Law: Assessing the Practical and Monetary Efficacy.", href: sourceLinks.newJersey, description: "NIJ/New Jersey evaluation reporting no demonstrated sexual-offense benefit across several outcomes and documenting implementation costs." },
              { label: "Anderson, A. L., & Sample, L. L. (2008). Public Awareness and Action Resulting from Sex Offender Community Notification Laws.", href: sourceLinks.andersonSample, description: "Community survey examining registry access and self-reported preventative action." },
              { label: "Freeman, N. J. (2012). The Public Safety Impact of Community Notification Laws: Rearrest of Convicted Sex Offenders.", href: sourceLinks.freeman, description: "Large notified-versus-non-notified comparison; causal interpretation is limited by assignment, risk, surveillance, and detection confounding." },
              { label: "Lasher, M. P., & McGrath, R. J. (2012). The Impact of Community Notification on Sex Offender Reintegration: A Quantitative Review of the Research Literature.", href: sourceLinks.lasherMcGrath, description: "Quantitative review documenting recurring housing, employment, social, and psychological burdens." },
              { label: "Levenson, J. S., & Cotter, L. P. (2005). The Effect of Megan’s Law on Sex Offender Reintegration.", href: sourceLinks.levensonCotter, description: "Survey evidence on housing, employment, harassment, psychosocial effects, and registry-information accuracy." },
              { label: "Cubellis, M. A., Walfield, S. M., & Harris, A. J. (2018). Collateral Consequences and Effectiveness of Sex Offender Registration and Notification: Law Enforcement Perspectives.", href: sourceLinks.cubellis, description: "Law-enforcement perspectives on SORN effectiveness, collateral consequences, and registry scale." },
              { label: "Harris, A. J., Levenson, J. S., Lobanov-Rostovsky, C., & Walfield, S. M. (2018). Law Enforcement Perspectives on Sex Offender Registration and Notification: Effectiveness, Challenges, and Policy Priorities.", href: sourceLinks.harrisLawEnforcement, description: "National practitioner research on information quality, communication, homelessness/transience, public interpretation, and operational challenges." },
              { label: "Bonnar-Kidd, K. K. (2010). Sexual Offender Laws and Prevention of Sexual Violence or Recidivism.", href: sourceLinks.bonnarKidd, description: "Peer-reviewed policy review used as synthesis/context for heterogeneous registry-related policies and collateral effects." },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}
