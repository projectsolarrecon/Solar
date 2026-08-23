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
  ScriptBox,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
} from "../../components/solar";

const sourceLinks = {
  bjsSex1994: {
    label: "BJS 1994 sex-offender prison-release study",
    href: "https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-prison-1994",
  },
  bjsSex2005: {
    label: "BJS 2005 rape/sexual-assault 9-year follow-up",
    href: "https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14",
  },
  bjsAll1994: {
    label: "BJS 1994 all-prisoner recidivism report",
    href: "https://bjs.ojp.gov/content/pub/pdf/rpr94.pdf",
  },
  bjsAll2012: {
    label: "BJS 2012 prisoner recidivism 5-year follow-up",
    href: "https://bjs.ojp.gov/sites/g/files/xyckuh236/files/media/document/rpr34s125yfup1217.pdf",
  },
  ussc2010: {
    label: "USSC federal offenders released in 2010",
    href: "https://www.ussc.gov/sites/default/files/pdf/research-and-publications/research-publications/2021/20210930_Recidivism.pdf",
  },
  usscCsem: {
    label: "USSC non-production child pornography report",
    href: "https://www.ussc.gov/research/research-reports/federal-sentencing-child-pornography-non-production-offenses",
  },
  federalCsem: {
    label: "Federal Probation CSEM supervision study",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/federal-probation-journal/2023/06/building-a-risk-tool-persons-placed-federal-post-conviction-supervision-child-sexual-exploitation",
  },
  simpleQuestion: {
    label: "Sex Offender Recidivism: A Simple Question",
    href: "https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sx-ffndr-rcdvsm/index-en.aspx",
  },
  updatedMetaAnalysis: {
    label: "Predictors of Sexual Recidivism: An Updated Meta-Analysis",
    href: "https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/2004-02-prdctrs-sxl-rcdvsm-pdtd/index-en.aspx",
  },
  onlineOffenders: {
    label: "Seto, Hanson, and Babchishin online-offense meta-analyses",
    href: "https://doi.org/10.1177/1079063210369013",
  },
  treatmentMetaAnalysis: {
    label: "Schmucker and Lösel treatment-effectiveness meta-analysis",
    href: "https://doi.org/10.1007/s11292-015-9241-z",
  },
} as const;

const linkClass =
  "font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900";

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Understanding Recidivism Evidence | The SOLAR Project"
        description="A SOLAR resource guide for understanding recidivism statistics, sexual-offense comparator evidence, absolute risk, relative risk, CSEM-specific evidence, and common interpretation mistakes."
        keywords="sex offense recidivism, recidivism evidence, sexual recidivism, CSEM recidivism, offense specialization, risk assessment, SOLAR Project"
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
            Understanding Recidivism Evidence
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A plain-language guide to what recidivism statistics do and do not
            show — and how to read them without turning group data into fear,
            certainty, or myth.
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
            There is no single “sex-offender recidivism rate.” The number
            changes depending on who was studied, what counted as recidivism,
            how long people were followed, when the clock started, and what
            comparison group was used.
          </p>

          <p>
            This guide is a companion to SOLAR’s risk-assessment guide. The risk
            guide asks, “What does this score or tool mean?” This guide asks,
            “What do observed reoffending data actually show?”
          </p>

          <p>
            The strongest takeaway is simple: people convicted of sexual
            offenses are not uniquely or uniformly high-recidivism compared with
            other major offense groups. The evidence is more specific, more
            useful, and much less compatible with slogans.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="Read a recidivism statistic in this order"
          subtitle="Before accepting a claim, slow the number down and identify what it is really measuring."
          icon="⚡"
          urgentActions={[
            <span>
              Check the <strong>population</strong>: prison releases,
              supervision starts, CSEM-only cases, contact offenses, adults,
              youth, federal cases, state cases, or another group.
            </span>,
            <span>
              Check the <strong>outcome</strong>: any rearrest, sexual rearrest,
              charge, reconviction, reincarceration, self-report, or another
              measure.
            </span>,
          ]}
          nextActions={[
            <span>
              Check the <strong>follow-up</strong>: three years, five years,
              nine years, fifteen years, or another period.
            </span>,
            <span>
              Check the <strong>comparison</strong>: compared with whom, in the
              same study, using the same clock and outcome?
            </span>,
          ]}
          reminder={
            <span>
              A dramatic relative-risk statement can describe a small absolute
              rate. Always ask, “What were the actual percentages?”
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "First question",
              title: "What counted?",
              icon: "📏",
              tone: "info",
              description:
                "Rearrest, reconviction, reincarceration, official detection, and self-report are different measurements.",
            },
            {
              eyebrow: "Second question",
              title: "Who was studied?",
              icon: "👥",
              tone: "research",
              description:
                "Offense subtype, age, prior record, supervision context, and jurisdiction can materially change the picture.",
            },
            {
              eyebrow: "Third question",
              title: "Compared with what?",
              icon: "⚖️",
              tone: "legal",
              description:
                "Same-study comparisons are safer than pulling percentages from unrelated studies and treating them as equivalent.",
            },
          ]}
        />

        <GuideCallout tone="research" icon="🔎" title="The public misconception this guide addresses">
          <p>
            Public discussion often treats people convicted of sexual offenses
            as uniquely, uniformly, or “shockingly” high-recidivism. Large
            official datasets do not support that simplified claim. They show a
            more careful pattern: overall recidivism is often lower than many
            other offense groups, sexual-specific rearrest is a different
            outcome, same-type specialization occurs across many offense
            categories, and absolute detected sexual-recidivism rates are far
            below popular assumptions of inevitable repeat offending.
          </p>
        </GuideCallout>

        <nav
          aria-label="Guide sections"
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
            On this page
          </h2>
          <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <a className={linkClass} href="#no-single-rate">
              No single rate
            </a>
            <a className={linkClass} href="#definitions">
              What recidivism means
            </a>
            <a className={linkClass} href="#five-checks">
              Five checks
            </a>
            <a className={linkClass} href="#overall-sexual">
              Overall vs. sexual recidivism
            </a>
            <a className={linkClass} href="#absolute-relative">
              Absolute vs. relative risk
            </a>
            <a className={linkClass} href="#comparators">
              Comparator evidence
            </a>
            <a className={linkClass} href="#specialization">
              Same-type specialization
            </a>
            <a className={linkClass} href="#csem">
              CSEM-specific evidence
            </a>
            <a className={linkClass} href="#individual-variation">
              Individual variation
            </a>
            <a className={linkClass} href="#treatment-change">
              Treatment and change
            </a>
            <a className={linkClass} href="#worked-examples">
              Worked examples
            </a>
            <a className={linkClass} href="#final-checklist">
              Final checklist
            </a>
          </div>
        </nav>

        <GuideSectionHeader
          id="no-single-rate"
          number="1"
          title="There Is No Single “Sex-Offender Recidivism Rate”"
          subtitle="A recidivism number is only meaningful after you know the population, outcome, clock, and comparison."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Recidivism is not one natural fact waiting to be quoted. It is a
              measurement choice. A three-year rearrest rate for people released
              from state prison is not the same thing as a five-year
              reconviction rate for people starting federal supervision. A
              CSEM-only cohort is not the same thing as a broader contact-offense
              cohort. A study of any rearrest is not answering the same question
              as a study of another detected sexual offense.
            </p>

            <p>
              This is why SOLAR treats precise recidivism claims as more useful
              than broad labels. A good public statement should preserve the
              population, outcome, measurement basis, follow-up length, and
              starting point.
            </p>
          </GuideProse>

          <SoftDivider />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-bold text-slate-900">
                Weak claim
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                “Sex offenders have a high recidivism rate.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-base font-bold text-emerald-950">
                Stronger claim
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                “In this specific cohort, using this specific outcome, over this
                specific follow-up period, the observed rate was ___.”
              </p>
            </div>
          </div>

          <GuideCallout tone="reminder" icon="🧩" title="The label is never the whole measurement">
            <p>
              Offense subtype, age, prior record, follow-up period,
              jurisdiction, treatment history, supervision context, and outcome
              definition can all change the meaning of a recidivism statistic.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="definitions"
          number="2"
          title="What Does “Recidivism” Mean?"
          subtitle="Different measures answer different questions. They should not be collapsed into one generic rate."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              “Recidivism” can mean several different things. Some measures are
              easier to count but less precise. Others are narrower but miss
              conduct that was never detected or never prosecuted.
            </p>
          </GuideProse>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              {
                term: "Rearrest",
                meaning:
                  "A new arrest was recorded. This is commonly used in large official datasets, including BJS and USSC reports.",
                caution:
                  "Rearrest is not the same as proof, conviction, or all offending.",
              },
              {
                term: "Charge",
                meaning:
                  "A formal charge was filed after an accusation or arrest.",
                caution:
                  "Charging practices vary by jurisdiction and case type.",
              },
              {
                term: "Reconviction",
                meaning:
                  "A new conviction occurred after plea or trial.",
                caution:
                  "This is narrower than rearrest and depends on prosecution and court outcomes.",
              },
              {
                term: "Reincarceration",
                meaning:
                  "A person returned to custody after a new sentence or a violation.",
                caution:
                  "This can mix new crimes with supervision or release-condition violations.",
              },
              {
                term: "Official detected offending",
                meaning:
                  "Behavior captured through official systems such as arrests, charges, convictions, or corrections records.",
                caution:
                  "It undercounts undetected conduct and should not be treated as a full measure of all behavior.",
              },
              {
                term: "Self-report",
                meaning:
                  "A person reports past conduct, often in treatment, research, or clinical settings.",
                caution:
                  "It may reveal behavior official records missed, but it is not the same as prospective future recidivism.",
              },
            ].map((item) => (
              <div
                key={item.term}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900">
                  {item.term}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  <strong>Watch for:</strong> {item.caution}
                </p>
              </div>
            ))}
          </div>

          <GuideCallout tone="warning" icon="⚠️" title="Do not swap measures mid-argument">
            <p>
              A person can quote a rearrest study, call it “reoffending,” and
              then talk as if it proved all future conduct. That move is
              misleading. Keep the measurement basis attached to the claim.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="five-checks"
          number="3"
          title="Five Things to Check Before Believing a Recidivism Statistic"
          subtitle="Most misuse becomes visible once you ask five simple questions."
        />

        <GuideSectionCard>
          <GuideChecklist
            id="five-checks-before-believing"
            title="The five checks"
            columns={1}
            items={[
              {
                id: "population",
                label:
                  "Population: Who was studied — state prison releases, federal supervision cases, CSEM-only cases, contact offenses, adults, youth, or another group?",
              },
              {
                id: "outcome",
                label:
                  "Outcome: What counted — any rearrest, sexual rearrest, same-type rearrest, reconviction, reincarceration, self-report, or something else?",
              },
              {
                id: "follow-up",
                label:
                  "Follow-up length: How long were people followed — three years, five years, nine years, fifteen years, or another period?",
              },
              {
                id: "starting-point",
                label:
                  "Starting point: When did the clock begin — prison release, supervision start, assessment date, treatment completion, or another milestone?",
              },
              {
                id: "comparison",
                label:
                  "Comparison group: Compared with whom — and was it the same study, same clock, same outcome, and same jurisdictional setting?",
              },
            ]}
          />

          <ScriptBox
            title="A simple way to ask for clarification"
            tone="neutral"
            context="Use this when someone quotes a recidivism number in a meeting, article, hearing, family conversation, or policy discussion."
            script={`When you say that recidivism rate, what population was studied, what counted as recidivism, how long were people followed, when did the follow-up clock start, and what comparison group are you using?`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="overall-sexual"
          number="4"
          title="Overall Recidivism and Sexual Recidivism Are Different Questions"
          subtitle="A group can have lower overall recidivism than many other groups while still showing elevated sexual-specific rearrest compared with nonsexual-offense groups."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The phrase “recidivism rate” often hides two different questions.
              <strong> Overall recidivism</strong> asks whether a person had any
              new detected justice-system event, such as any rearrest.
              <strong> Sexual-specific recidivism</strong> asks whether the new
              detected event was another sexual offense.
            </p>

            <p>
              The{" "}
              <a
                href={sourceLinks.bjsSex2005.href}
                className={linkClass}
                target="_blank"
                rel="noreferrer"
              >
                BJS 2005 rape/sexual-assault 9-year follow-up
              </a>{" "}
              illustrates the difference. It reported that people released after
              rape or sexual assault were less likely than other released
              prisoners to be arrested for any crime over nine years, but more
              likely to be arrested for rape or sexual assault.
            </p>
          </GuideProse>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-slate-900">
                Overall recidivism
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Asks: “Was there any new detected justice-system event?”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                This is the better measure for broad claims about whether one
                offense group is “high recidivism” in general.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-slate-900">
                Sexual-specific recidivism
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Asks: “Was there another detected sexual offense?”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                This is a narrower question. It should not be used to imply that
                overall recidivism is uniquely high.
              </p>
            </div>
          </div>

          <GuideCallout tone="info" icon="🧠" title="These facts are not contradictory">
            <p>
              A sexual-offense release group can have lower overall rearrest
              than many other offense groups, while also having a higher relative
              likelihood of another detected sexual offense than people whose
              prior offenses were nonsexual. The key is to keep the outcome
              attached to the claim.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="absolute-relative"
          number="5"
          title="Relative Risk and Absolute Risk Can Sound Very Different"
          subtitle="A statement can be mathematically true and still rhetorically misleading if the absolute rates are hidden."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Relative-risk language compares one group to another. Absolute
              risk tells you the actual percentage. Both can be useful, but they
              answer different questions.
            </p>

            <p>
              In the{" "}
              <a
                href={sourceLinks.bjsSex1994.href}
                className={linkClass}
                target="_blank"
                rel="noreferrer"
              >
                BJS 1994 sex-offender prison-release study
              </a>
              , people released after sex offenses were more likely than
              non-sex-offense releases to be rearrested for a sex crime. The
              absolute rates were 5.3% versus 1.3% over three years.
            </p>
          </GuideProse>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-lg font-bold text-amber-950">
                Relative framing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-900">
                “More than four times as likely to be rearrested for a sex
                crime.”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-amber-900">
                This sounds dramatic because it compares one rate to another.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-bold text-emerald-950">
                Absolute framing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                “5.3% versus 1.3% over three years.”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-emerald-900">
                This shows the actual observed detected rates.
              </p>
            </div>
          </div>

          <GuideCallout tone="research" icon="📌" title="The practical question">
            <p>
              When a statistic sounds shocking, ask: “What are the actual
              absolute rates?” That question does not deny relative elevation. It
              keeps the number from being turned into a myth of inevitable repeat
              offending.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="comparators"
          number="6"
          title="Are Sexual-Offense Populations Uniquely High-Recidivism?"
          subtitle="Large official datasets do not support that broad claim when the outcome is overall rearrest."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The strongest way to compare offense groups is to use the same
              dataset, same follow-up clock, and same outcome. Same-study
              comparisons avoid mixing unrelated percentages from different
              populations.
            </p>

            <p>
              Two Bureau of Justice Statistics reports are especially useful for
              this guide: the{" "}
              <a
                href={sourceLinks.bjsSex1994.href}
                className={linkClass}
                target="_blank"
                rel="noreferrer"
              >
                1994 sex-offender prison-release report
              </a>{" "}
              and the{" "}
              <a
                href={sourceLinks.bjsSex2005.href}
                className={linkClass}
                target="_blank"
                rel="noreferrer"
              >
                2005 rape/sexual-assault 9-year follow-up
              </a>
              . Both undermine the simple claim that people released after sexual
              offenses are the highest-recidivating offense group overall.
            </p>
          </GuideProse>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="bg-slate-100 px-4 py-3">
              <h3 className="text-base font-bold text-slate-900">
                Same-study comparator examples
              </h3>
            </div>

            <div className="divide-y divide-slate-200">
              <div className="grid gap-3 p-4 md:grid-cols-[1fr_1fr_1.2fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Study
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    BJS 1994 state-prison release cohort
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Outcome and clock
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Any rearrest within three years of prison release.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    What it showed
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    43% of released sex-offense prisoners were rearrested for
                    any offense, compared with 68% of released non-sex-offense
                    prisoners.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 p-4 md:grid-cols-[1fr_1fr_1.2fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Study
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    BJS 2005 rape/sexual-assault release cohort
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Outcome and clock
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Any arrest within nine years of prison release.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    What it showed
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    67% of rape/sexual-assault releases were arrested for any
                    crime, compared with 84% of other released prisoners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <GuideCallout tone="success" icon="✅" title="Strong public takeaway">
            <p>
              People convicted of sexual offenses are not uniquely or uniformly
              high-recidivism compared with other major offense groups. The
              answer changes when the outcome changes, which is exactly why
              “recidivism” must be defined before it is cited.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="specialization"
          number="7"
          title="Same-Type Recidivism and Offense Specialization"
          subtitle="Elevated same-type rearrest is a broader criminal-recidivism pattern, not something unique to sexual offending."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              People released after many kinds of offenses are
              disproportionately likely to be rearrested for the same type of
              offense. Researchers often call this <strong>offense specialization</strong>.
              It matters because sexual-specific rearrest is sometimes treated
              as if it proves sexual offending is uniquely persistent. The data
              show a broader pattern.
            </p>

            <p>
              The{" "}
              <a
                href={sourceLinks.bjsAll1994.href}
                className={linkClass}
                target="_blank"
                rel="noreferrer"
              >
                BJS 1994 all-prisoner recidivism report
              </a>{" "}
              included a same-offense relative-likelihood table across many
              release-offense categories.
            </p>
          </GuideProse>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Homicide", "1.4×"],
              ["Rape", "4.2×"],
              ["Other sexual assault", "5.9×"],
              ["Robbery", "2.7×"],
              ["Assault", "1.9×"],
              ["Burglary", "3.7×"],
              ["Theft", "3.0×"],
              ["Motor-vehicle theft", "2.9×"],
              ["Fraud", "5.3×"],
              ["Stolen property", "3.4×"],
              ["Drug offenses", "2.1×"],
              ["Public-order offenses", "1.2×"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-600">{label}</p>
                <p className="mt-1 text-2xl font-bold text-slate-950">
                  {value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Relative likelihood of rearrest for the same offense type.
                </p>
              </div>
            ))}
          </div>

          <GuideCallout tone="research" icon="🧭" title="What this does — and does not — show">
            <p>
              The magnitude of specialization differs across offense categories.
              Category definitions and base rates also differ. But the pattern
              itself is not unique to sexual offending. Elevated
              sexual-specific rearrest should be understood partly as offense
              specialization, not as proof that sexual offending alone is
              uniquely persistent.
            </p>
          </GuideCallout>

          <SoftDivider />

          <GuideProse>
            <h3>Same-type rates are not uniquely high either</h3>
            <p>
              The{" "}
              <a
                href={sourceLinks.bjsAll2012.href}
                className={linkClass}
                target="_blank"
                rel="noreferrer"
              >
                BJS 2012 prisoner recidivism 5-year follow-up
              </a>{" "}
              reported that 4% of prisoners released after rape or sexual
              assault were arrested for rape or sexual assault within five
              years. In the same report, same-type rearrest was much higher for
              broader categories such as assault, property, drug, and
              public-order releases.
            </p>

            <p>
              The point is not to force a perfect ranking across differently
              sized categories. The point is simpler: raw same-type recidivism
              data do not support the claim that sexual offenses are uniquely
              characterized by repetition of the same offense type.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="offense-categories"
          number="8"
          title="Why Offense Categories Matter"
          subtitle="Broad sexual-offense statistics should not be casually applied to every subgroup."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              “Sex offense” is a broad legal and social category. It can include
              contact offenses, non-contact offenses, CSEM-only offenses,
              solicitation-related cases, registration-status offenses, and
              mixed-history cases. Those groups should not be treated as if they
              are empirically identical.
            </p>
          </GuideProse>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Contact-offense groups
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                May include people whose index offense involved physical contact
                or attempted contact. Comparator reports often use categories
                such as rape or sexual assault.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                CSEM-only groups
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Should be read through CSEM-specific evidence when available,
                not automatically replaced with broader contact-offense
                statistics.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Broader mixed groups
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                May combine different offense histories, ages, jurisdictions,
                supervision settings, and measurement rules.
              </p>
            </div>
          </div>

          <GuideCallout tone="reminder" icon="📍" title="Use the closest population you can defend">
            <p>
              A broad prison-release sexual-offense statistic may be useful for
              a broad public claim. It is usually not the best evidence for a
              narrow person-specific or subgroup-specific claim.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="csem"
          number="9"
          title="CSEM-Specific Evidence Is Its Own Empirical Lane"
          subtitle="CSEM-only populations should not be treated as interchangeable with broader sexual-offense populations."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              CSEM stands for child sexual exploitation material. CSEM cases are
              serious. They also require careful evidence use. Broad
              contact-offense statistics should not be casually applied to
              CSEM-only populations when CSEM-specific recidivism evidence is
              available.
            </p>
          </GuideProse>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Federal supervision cohort
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                5,768 federal male CSEM supervisees
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                The{" "}
                <a
                  href={sourceLinks.federalCsem.href}
                  className={linkClass}
                  target="_blank"
                  rel="noreferrer"
                >
                  Federal Probation CSEM supervision study
                </a>{" "}
                reported a fixed 60-month follow-up. In that cohort, 4.5% were
                rearrested for any sexual offense, and fewer than 1% were
                rearrested for a contact sex crime.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                <strong>Scope:</strong> rearrest, five years, federal male CSEM
                supervision cohort — not lifetime risk and not all undetected
                conduct.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Pooled online/CSEM literature
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Prospective online-offense follow-up studies
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                The{" "}
                <a
                  href={sourceLinks.onlineOffenders.href}
                  className={linkClass}
                  target="_blank"
                  rel="noreferrer"
                >
                  Seto, Hanson, and Babchishin online-offense meta-analyses
                </a>{" "}
                reported 4.6% new sexual offending, 2.0% new contact sexual
                offending, and 3.4% new CSEM offending over follow-up periods of
                roughly 1.5 to 6 years.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                <strong>Scope:</strong> pooled online-offense studies,
                prospective follow-up, fixed study windows — not lifetime risk.
              </p>
            </div>
          </div>

          <GuideCallout tone="research" icon="🧾" title="Past hidden conduct is a different question">
            <p>
              Some self-report studies of online-offense populations found more
              prior undisclosed contact behavior than official records captured.
              That is a history or prevalence finding. It is not the same as a
              prospective recidivism rate. A study finding previously
              undisclosed behavior does not establish that the same percentage
              will commit a future offense.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="individual-variation"
          number="10"
          title="Age, Criminal History, and Individual Variation"
          subtitle="Offense label alone is a poor shorthand for individual recidivism risk."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Group statistics are useful, but they are not individual certainty.
              Age, prior record, supervision history, offense history, and other
              empirically relevant factors can materially change observed
              recidivism likelihood.
            </p>

            <p>
              The{" "}
              <a
                href={sourceLinks.ussc2010.href}
                className={linkClass}
                target="_blank"
                rel="noreferrer"
              >
                USSC federal offenders released in 2010 report
              </a>{" "}
              illustrates why offense labels are incomplete. In that federal
              cohort, age and Criminal History Category were strongly associated
              with rearrest differences. The matrix-supported takeaway is not
              that any one factor explains everything; it is that category labels
              alone are too blunt for individual or policy decisions.
            </p>
          </GuideProse>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              A better way to think about individual variation
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                {
                  label: "Offense category",
                  text: "A starting point, not the whole risk picture.",
                },
                {
                  label: "Age",
                  text: "Risk patterns change across the life course.",
                },
                {
                  label: "Criminal history",
                  text: "Prior record can separate risk levels within the same broad category.",
                },
                {
                  label: "Change over time",
                  text: "Treatment, supervision, stability, and offense-free time can matter.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-bold text-slate-900">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <GuideCallout tone="legal" icon="⚖️" title="Connect this to risk assessment">
            <p>
              Recidivism evidence shows what happened in studied groups. Risk
              assessment asks how risk is estimated for a person or subgroup.
              For score interpretation, calibration, and tool limits, use
              SOLAR’s companion{" "}
              <Link
                to="/resources/understanding-sex-offense-risk-assessment"
                className={linkClass}
              >
                Understanding Sex-Offense Risk Assessment
              </Link>{" "}
              guide.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="treatment-change"
          number="11"
          title="Treatment, Change, and Desistance"
          subtitle="Risk is not fixed destiny. Structured intervention can change outcomes on average."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Recidivism evidence should not be read as permanent fate.
              Structured intervention, supervision practices, age, offense-free
              time, and stability can all matter. The public-safety question is
              not only “What was the original label?” It is also “What has
              changed, what supports stability, and what does the best available
              evidence show now?”
            </p>

            <p>
              The{" "}
              <a
                href={sourceLinks.treatmentMetaAnalysis.href}
                className={linkClass}
                target="_blank"
                rel="noreferrer"
              >
                Schmucker and Lösel treatment-effectiveness meta-analysis
              </a>{" "}
              found lower average sexual recidivism among treated groups than
              comparison groups across eligible studies. The supported claim is
              restrained but important: treatment can reduce risk on average. It
              is not a guarantee for any one person.
            </p>
          </GuideProse>

          <PullQuoteBlock
            quote="Risk is not fixed destiny. The evidence supports individualized, change-aware thinking rather than permanent categorical assumptions."
            attribution="SOLAR evidence-literacy principle"
          />

          <GuideCallout tone="success" icon="🌱" title="The practical public-safety point">
            <p>
              Stability, treatment, supervision quality, housing, work, family
              support, and time offense-free are not soft extras. They are part
              of serious public-safety thinking because they affect the real
              conditions under which people live.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="worked-examples"
          number="12"
          title="Worked Examples"
          subtitle="Apply the evidence-literacy questions to real datasets before accepting the headline version."
        />

        <GuideSectionCard>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Example 1
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                BJS comparator evidence
              </h3>

              <GuideProse>
                <p>
                  A common claim says people convicted of sexual offenses are
                  uniquely high-recidivism. The{" "}
                  <a
                    href={sourceLinks.bjsSex2005.href}
                    className={linkClass}
                    target="_blank"
                    rel="noreferrer"
                  >
                    BJS 2005 rape/sexual-assault follow-up
                  </a>{" "}
                  shows why that claim is too broad.
                </p>

                <ul>
                  <li>
                    <strong>Population:</strong> people released from state
                    prison in 2005 after rape or sexual assault, compared with
                    other released prisoners.
                  </li>
                  <li>
                    <strong>Outcome:</strong> any arrest and rape/sexual-assault
                    arrest.
                  </li>
                  <li>
                    <strong>Follow-up:</strong> nine years after prison release.
                  </li>
                  <li>
                    <strong>What it showed:</strong> lower overall arrest than
                    other released prisoners, but higher rape/sexual-assault
                    arrest.
                  </li>
                </ul>

                <p>
                  The accurate interpretation is not “no risk” and not “unique
                  inevitable recidivism.” It is: the answer depends on the
                  outcome being measured.
                </p>
              </GuideProse>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Example 2
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Federal CSEM cohort
              </h3>

              <GuideProse>
                <p>
                  A broad sexual-offense statistic should not automatically be
                  applied to CSEM-only cases. The{" "}
                  <a
                    href={sourceLinks.federalCsem.href}
                    className={linkClass}
                    target="_blank"
                    rel="noreferrer"
                  >
                    federal CSEM supervision study
                  </a>{" "}
                  gives a more specific lane.
                </p>

                <ul>
                  <li>
                    <strong>Population:</strong> 5,768 federal male CSEM
                    supervisees.
                  </li>
                  <li>
                    <strong>Outcome:</strong> rearrest for any sexual offense
                    and rearrest for a contact sex crime.
                  </li>
                  <li>
                    <strong>Follow-up:</strong> fixed 60-month period.
                  </li>
                  <li>
                    <strong>What it showed:</strong> 4.5% rearrest for any
                    sexual offense and fewer than 1% rearrest for a contact sex
                    crime.
                  </li>
                </ul>

                <p>
                  The accurate interpretation is not a lifetime safety claim. It
                  is a fixed-period, official-detection finding showing why
                  CSEM-only populations need subgroup-specific evidence.
                </p>
              </GuideProse>
            </div>
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="final-checklist"
          number="13"
          title="Questions to Ask Before Accepting a Recidivism Statistic"
          subtitle="Use this as a practical guardrail when reading articles, policy testimony, court filings, supervision claims, or advocacy materials."
        />

        <GuideSectionCard>
          <GuideChecklist
            id="recidivism-statistic-checklist"
            title="Before accepting the number, ask"
            columns={1}
            items={[
              { id: "who", label: "Who was studied?" },
              { id: "population", label: "What offense population was studied?" },
              {
                id: "counted",
                label: "What counted as recidivism?",
              },
              {
                id: "basis",
                label:
                  "Was it rearrest, charge, reconviction, reincarceration, self-report, or something else?",
              },
              {
                id: "length",
                label: "How long were people followed?",
              },
              {
                id: "start",
                label: "When did follow-up begin?",
              },
              {
                id: "overall-same-type",
                label:
                  "Is this overall recidivism, sexual-specific recidivism, or same-type recidivism?",
              },
              {
                id: "absolute-relative",
                label:
                  "Is the statement using absolute rates, relative comparisons, or both?",
              },
              {
                id: "comparison",
                label: "What is the comparison group?",
              },
              {
                id: "comparable",
                label:
                  "Is the population comparable to the person, subgroup, or policy being discussed?",
              },
              {
                id: "history-future",
                label:
                  "Is historical undisclosed conduct being confused with future offending?",
              },
              {
                id: "individual-certainty",
                label:
                  "Is a group statistic being treated as an individual prediction?",
              },
            ]}
          />

          <GuideCallout tone="warning" icon="🚫" title="What recidivism statistics do not mean">
            <p>
              A group-level rate does not tell you with certainty what one
              person will do. A fixed-period follow-up rate is not a lifetime
              rate. A rearrest rate is not all offending. A CSEM-only finding is
              not automatically interchangeable with a broad contact-offense
              finding. A relative-risk statement is not complete until the
              absolute rates are visible.
            </p>
          </GuideCallout>

          <ScriptBox
            title="A calm way to correct an overbroad claim"
            tone="neutral"
            context="Use this when someone treats one number as if it settles the entire question."
            script={`That statistic may be important, but it only answers the question it actually measured. We need to know the population, outcome definition, follow-up length, starting point, and comparison group before using it as a public claim.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="14"
          title="Resources and Next Steps"
          subtitle="Use these sources to verify claims, compare datasets, and keep moving through SOLAR’s evidence guides."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Key public evidence sources"
            resources={[
              {
                label: "BJS 2005 rape/sexual-assault 9-year follow-up",
                description:
                  "Official same-cohort comparator evidence for overall arrest and rape/sexual-assault arrest after prison release.",
                href: sourceLinks.bjsSex2005.href,
                badge: "Official",
              },
              {
                label: "BJS 1994 sex-offender prison-release report",
                description:
                  "Official three-year comparator evidence often cited for the 5.3% versus 1.3% sexual rearrest example.",
                href: sourceLinks.bjsSex1994.href,
                badge: "Official",
              },
              {
                label: "BJS 1994 all-prisoner recidivism report",
                description:
                  "Official same-offense specialization table across multiple offense categories.",
                href: sourceLinks.bjsAll1994.href,
                badge: "Official PDF",
              },
              {
                label: "BJS 2012 prisoner recidivism 5-year follow-up",
                description:
                  "Official same-type rearrest comparator data across broad offense categories.",
                href: sourceLinks.bjsAll2012.href,
                badge: "Official PDF",
              },
              {
                label: "USSC federal offenders released in 2010",
                description:
                  "Federal recidivism data showing variation by offense type, age, and criminal history.",
                href: sourceLinks.ussc2010.href,
                badge: "Official PDF",
              },
              {
                label: "Federal Probation CSEM supervision study",
                description:
                  "Large federal CSEM-specific cohort with fixed 60-month follow-up.",
                href: sourceLinks.federalCsem.href,
                badge: "Government journal",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Understanding Sex-Offense Risk Assessment",
                description:
                  "Use this companion guide when the question is how risk tools, scores, AUC, calibration, and structured assessment should be interpreted.",
                to: "/resources/understanding-sex-offense-risk-assessment",
              },
              {
                title: "Reentry Planning Guide",
                description:
                  "Use this when the practical question is how to build stability after incarceration, supervision, or registry-related disruption.",
                to: "/resources/reentry-planning",
              },
              {
                title: "Family Support Guide",
                description:
                  "Use this when loved ones need plain-language help understanding evidence, fear, boundaries, and support.",
                to: "/resources/family-support",
              },
            ]}
          />

          <SourceList
            note="Sources below were selected from the canonical SOLAR Evidence Matrix and public URLs were live-checked during this sandbox drafting pass where browsing access allowed."
            sources={[
              {
                label: "Alper & Durose, BJS — Recidivism of Sex Offenders Released from State Prison: A 9-Year Follow-Up (2005–14)",
                href: sourceLinks.bjsSex2005.href,
                description:
                  "Supports same-cohort comparison of overall arrest and rape/sexual-assault arrest among 2005 rape/sexual-assault releases and other released prisoners.",
              },
              {
                label: "Langan, Schmitt & Durose, BJS — Recidivism of Sex Offenders Released from Prison in 1994",
                href: sourceLinks.bjsSex1994.href,
                description:
                  "Supports the 43% versus 68% overall rearrest comparison and the 5.3% versus 1.3% sex-crime rearrest example.",
              },
              {
                label: "Langan & Levin, BJS — Recidivism of Prisoners Released in 1994",
                href: sourceLinks.bjsAll1994.href,
                description:
                  "Supports offense-specialization relative-likelihood comparisons across homicide, rape, sexual assault, robbery, assault, property, fraud, drug, and public-order categories.",
              },
              {
                label: "Antenangeli & Durose, BJS — Recidivism of Prisoners Released in 34 States in 2012",
                href: sourceLinks.bjsAll2012.href,
                description:
                  "Supports same-type rearrest comparisons across broad offense categories, including rape/sexual assault, assault, property, drug, and public-order releases.",
              },
              {
                label: "United States Sentencing Commission — Recidivism of Federal Offenders Released in 2010",
                href: sourceLinks.ussc2010.href,
                description:
                  "Supports federal offense-type, age, and criminal-history heterogeneity claims.",
              },
              {
                label: "United States Sentencing Commission — Federal Sentencing of Child Pornography: Non-Production Offenses",
                href: sourceLinks.usscCsem.href,
                description:
                  "Supports CSEM-specific federal non-production child-pornography recidivism context.",
              },
              {
                label: "Cohen, Federal Probation — Building a Risk Tool for Federal CSEM Supervisees",
                href: sourceLinks.federalCsem.href,
                description:
                  "Supports the 5,768-person federal male CSEM supervision cohort, 60-month follow-up, 4.5% sexual rearrest, and fewer-than-1% contact-sex-crime rearrest findings.",
              },
              {
                label: "Harris & Hanson — Sex Offender Recidivism: A Simple Question",
                href: sourceLinks.simpleQuestion.href,
                description:
                  "Supports long-follow-up sexual recidivism benchmarks and the principle that rates vary by follow-up length and subgroup.",
              },
              {
                label: "Hanson & Morton-Bourgon — Predictors of Sexual Recidivism: An Updated Meta-Analysis",
                href: sourceLinks.updatedMetaAnalysis.href,
                description:
                  "Supports outcome-measurement and general sexual-recidivism evidence used as background in the matrix.",
              },
              {
                label: "Seto, Hanson & Babchishin — Contact Sexual Offending by Men With Online Sexual Offenses",
                href: sourceLinks.onlineOffenders.href,
                description:
                  "Supports pooled online/CSEM prospective findings and the distinction between prior hidden conduct and future recidivism.",
              },
              {
                label: "Schmucker & Lösel — The Effects of Sexual Offender Treatment on Recidivism",
                href: sourceLinks.treatmentMetaAnalysis.href,
                description:
                  "Supports the restrained treatment-and-change claim that structured intervention can reduce sexual recidivism on average.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}