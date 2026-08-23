import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  ContextualActionCard,
  PullQuote,
  Divider,
} from "../../components/solar";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "state-lawmaker",
  primaryPositionId: "ineffective",
  secondaryPositionId: "one-size-fits-all",
  formatId: "email",
  headline: "Ask lawmakers to measure registry policy by outcomes, not assumptions",
  description:
    "This article argues that broad public registry policy should be judged by demonstrated prevention outcomes, individualized risk, and proportionality rather than by visibility or political reassurance. State lawmakers have direct authority over many of the rules governing notification, duration, review, and public exposure.",
  recommendation: {
    audienceLabel: "your state lawmakers",
    suggestion:
      "Ask lawmakers to review whether your state’s registry and public-notification rules are supported by measurable public-safety outcomes and meaningful individualized risk distinctions.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Review the state’s public registry and notification laws against current evidence on individualized risk, recidivism, effectiveness, and collateral consequences; support meaningful individualized review and narrower public disclosure where broad categorical exposure cannot demonstrate a proportionate public-safety benefit.",
  personalContext:
    "I am writing after reviewing SOLAR’s synthesis of evidence on risk assessment, recidivism, and registry effectiveness. The evidence raises serious questions about whether broad public exposure and long-duration categorical requirements produce safety benefits proportionate to their documented burdens.",
  source: {
    title: "What Good Is the Registry?",
    path: "/blog/what-good-is-the-registry",
    type: "blog",
  },
};

export default function WhatGoodistheRegistry(): JSX.Element {
  return (
    <BlogLayout
      title="What Good Is the Registry?"
      description="SOLAR examines what risk, recidivism, and registry-effectiveness evidence actually show—and asks whether broad public registration justifies its extraordinary burdens."
      keywords="sex offender registry effectiveness, sex offense registry, registry effectiveness, public notification, sex offense recidivism, risk assessment, sex offender recidivism, registry reform, public safety, collateral consequences, individualized risk"
      date="Aug 23, 2026"
      readTime="16 minutes"
      badge="📝 BLOG"
      lede="SOLAR has published the evidence on risk, recidivism, and registry effectiveness. The question now is not whether the registry does anything—it is whether what it demonstrably does justifies what we have allowed it to become."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR" icon="🔎">
          <p>
            SOLAR’s evidence guides show that risk is heterogeneous, recidivism
            cannot responsibly be reduced to a single frightening category-wide
            number, and broad registration-and-notification systems have not
            demonstrated an overall safety benefit proportionate to their burdens.
            This essay asks what the registry actually accomplishes—and whether
            visibility, stigma, political reassurance, and permanent exclusion have
            been mistaken for prevention.
          </p>
        </Callout>

        <p>
          For years, defenders of sex-offense registries have been able to rely on
          something more powerful than evidence: assumption.
        </p>

        <div className="not-prose my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-sm">
          <div className="border-b border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
            The assumptions beneath the system
          </div>
          <div className="divide-y divide-white/10 px-5 sm:px-6">
            <p className="py-4 text-base leading-relaxed text-slate-100">
              The assumption that people convicted of sex offenses form a uniquely
              dangerous class.
            </p>
            <p className="py-4 text-base leading-relaxed text-slate-100">
              The assumption that they remain dangerous in roughly the same way.
            </p>
            <p className="py-4 text-base leading-relaxed text-slate-100">
              The assumption that sexual recidivism is extraordinarily high.
            </p>
            <p className="py-4 text-base leading-relaxed text-slate-100">
              The assumption that putting names, photographs, addresses, and labels in
              front of the public must therefore make people safer.
            </p>
          </div>
        </div>

        <p>SOLAR has now published the evidence trail behind those claims.</p>

        <p>
          Our guide to{" "}
          <strong>
            <Link className={linkCls} to="/resources/risk-assessment-guide">
              sex-offense risk assessment
            </Link>
          </strong>{" "}
          explains why risk cannot responsibly be inferred from an offense label
          alone. Our{" "}
          <strong>
            <Link className={linkCls} to="/resources/recidivism-evidence-guide">
              Recidivism Evidence Guide
            </Link>
          </strong>{" "}
          examines what recidivism statistics actually measure, why absolute rates
          and subgroup differences matter, and why one sweeping number cannot
          describe an enormous and heterogeneous population. And our{" "}
          <strong>
            <Link
              className={linkCls}
              to="/resources/registry-effectiveness-evidence-guide"
            >
              Registry Effectiveness Evidence Guide
            </Link>
          </strong>{" "}
          asks the question registry policy itself has to answer: does registration
          and public notification measurably reduce future offending?
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            The evidence behind this essay
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <Link
              to="/resources/risk-assessment-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white"
            >
              <div className="font-bold text-slate-900">Risk Assessment</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-600">
                why a label is not a risk assessment
              </div>
            </Link>
            <Link
              to="/resources/recidivism-evidence-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white"
            >
              <div className="font-bold text-slate-900">Recidivism Evidence</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-600">
                why one category-wide rate misleads
              </div>
            </Link>
            <Link
              to="/resources/registry-effectiveness-evidence-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white"
            >
              <div className="font-bold text-slate-900">Registry Effectiveness</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-600">
                what broad SORN evidence actually finds
              </div>
            </Link>
          </div>
        </div>

        <p>
          We published those guides so readers do not have to take SOLAR’s word for
          any of this.
        </p>

        <p>
          You can inspect the studies. You can examine the definitions. You can look
          at favorable findings as well as null findings. You can see where the
          evidence is strong, where it is limited, and where policies that are
          casually treated as interchangeable actually work through different
          mechanisms.
        </p>

        <p>Now comes the editorial question.</p>

        <p>
          If risk is individualized, if recidivism is routinely distorted by
          category-wide rhetoric, and if broad registration-and-notification systems
          have not demonstrated the overall reduction in recidivism that their
          political mythology implies, then what exactly are we preserving?
        </p>

        <p>What good is the registry?</p>

        <BandHeader title="The Registry Depends on a Story About Risk" />

        <p>
          A public registry makes intuitive sense only if the label itself tells us
          something unusually powerful.
        </p>

        <p>
          The entire structure invites the public to see a legal category and
          translate it into a present-tense prediction:{" "}
          <strong>dangerous person lives here</strong>.
        </p>

        <p>But that is not how serious risk assessment works.</p>

        <p>
          SOLAR’s Risk Assessment Guide exists precisely because risk assessment is
          more complicated than reading an offense title. Structured tools
          distinguish historical factors from changeable factors. Different
          instruments are built for different populations and different outcomes.
          Age can matter. Treatment can matter. Time can matter. Population fit
          matters. Even an actuarial score is not a diagnosis, a moral ranking, or
          certainty about an individual future.
        </p>

        <p>
          In other words: <strong>a label is not a risk assessment.</strong>
        </p>

        <p>
          That should be obvious. Yet broad registry policy routinely acts as though
          the opposite were true.
        </p>

        <p>
          A person’s conviction may trigger years or decades of public exposure even
          when the law has made little meaningful attempt to determine what that
          person’s present risk actually is. Different conduct, different ages,
          different histories, different treatment trajectories, different amounts
          of offense-free time, and different empirical risk profiles can all
          collapse into the same public category.
        </p>

        <p>That is not evidence-based risk management.</p>

        <p>It is categorical risk theater.</p>

        <p>
          SOLAR’s position is that one-size-fits-all registry laws are fundamentally
          flawed because public safety should respond to actual risk rather than
          political shorthand. The evidence architecture now makes the reason plain:
          risk is not evenly distributed merely because a legislature has placed
          many different people under one label.
        </p>

        <p>
          If government possesses tools capable of distinguishing among people,
          circumstances, trajectories, and levels of risk, then refusing to
          distinguish is itself a policy choice.
        </p>

        <BandHeader title="It Also Depends on a Story About Recidivism" />

        <p>
          The second story is even more culturally powerful: people convicted of sex
          offenses are assumed to reoffend at extraordinary rates.
        </p>

        <p>That claim has done enormous political work.</p>

        <p>
          It helps turn temporary sentences into permanent suspicion. It makes review
          sound reckless. It allows individualized arguments to be dismissed before
          they are heard. It turns redemption into naïveté and evidence of change
          into something the public is told not to trust.
        </p>

        <Callout variant="info" title="How ‘frightening and high’ became conventional wisdom" icon="📚">
          <p>
            That assumption also acquired institutional authority. In{" "}
            <em>McKune v. Lile</em> in 2002, a Supreme Court plurality cited an
            estimate that the recidivism rate of untreated people convicted of sex
            offenses could be “as high as 80%.” The following year,{" "}
            <em>Smith v. Doe</em> described the risk of recidivism as “frightening and
            high,” expressly relying on <em>McKune</em>. (
            <a
              className={linkCls}
              href="https://www.law.cornell.edu/supremecourt/text/00-1187"
              target="_blank"
              rel="noopener noreferrer"
            >
              law.cornell.edu
            </a>
            )
          </p>

          <p>
            Ira and Tara Ellman later traced that 80% estimate backward. In their 2015
            article, <em>“‘Frightening and High’: The Supreme Court’s Crucial Mistake
            About Sex Crime Statistics,”</em> they showed that the National Institute
            of Corrections publication cited in <em>McKune</em> ultimately relied on a{" "}
            <em>Psychology Today</em> article whose 80% assertion was not itself
            supported by an empirical citation. (
            <a
              className={linkCls}
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2616429"
              target="_blank"
              rel="noopener noreferrer"
            >
              papers.ssrn.com
            </a>
            )
          </p>

          <p>
            A dramatic claim with almost no empirical foundation acquired the
            authority of Supreme Court language, and that language then helped the
            claim survive as common knowledge.
          </p>
        </Callout>

        <p>
          But once you actually read recidivism research carefully, the simplicity
          disappears.
        </p>

        <p>
          There is no single “recidivism rate.” Rearrest is not reconviction, and any
          recidivism is not the same as sexual-specific recidivism. Follow-up length
          matters. So do absolute versus relative risk and differences among
          populations and subgroups.
        </p>

        <p>
          Our Recidivism Evidence Guide walks through those distinctions because they
          change what the numbers mean.
        </p>

        <p>
          The point is not that risk is imaginary. It is not that nobody reoffends.
          It is not that every subgroup has a low rate under every measure.
        </p>

        <p>
          The point is that the political category{" "}
          <strong>“sex offender” is a crude substitute for empirical risk</strong>.
        </p>

        <p>
          That matters because an extraordinary policy burden requires an
          extraordinary justification.
        </p>

        <p>
          If the state is going to expose people publicly for decades, subject them
          to recurring reporting requirements, make housing and employment harder,
          and create legal structures that often follow them long after a sentence
          or supervision period has ended, then “everybody knows these people always
          do it again” is not good enough.
        </p>

        <p>The evidence does not describe one permanently dangerous human type.</p>

        <p>So policy should stop pretending that it does.</p>

        <BandHeader title="Even If the Stories Were True, the Policy Would Still Have to Work" />

        <p>This is the question registry debates too often skip.</p>

        <p>
          Suppose, for the sake of argument, that public beliefs about risk were
          substantially more accurate than the evidence suggests.
        </p>

        <p>Suppose recidivism were considerably higher.</p>

        <p>
          Suppose we agreed that some people require intensive, long-term
          intervention.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-300 bg-slate-50 px-5 py-5 sm:px-6">
          <p className="m-0 text-xl font-bold leading-snug text-slate-950">
            The registry would <strong>still have to work</strong>.
          </p>
          <div className="mt-4 space-y-1.5 text-base font-semibold leading-relaxed text-slate-800">
            <p className="m-0">Fear does not validate a mechanism.</p>
            <p className="m-0">Seriousness of harm does not validate a mechanism.</p>
            <p className="m-0">Moral condemnation does not validate a mechanism.</p>
          </div>
        </div>

        <p>
          A policy sold as a public-safety intervention has to demonstrate a
          public-safety benefit.
        </p>

        <p>That is where the evidence becomes difficult for broad registry policy.</p>

        <p>
          The strongest pooled evidence examined in SOLAR’s Registry Effectiveness
          Guide has not demonstrated a statistically significant{" "}
          <strong>overall SORN recidivism-reduction effect</strong>. That conclusion
          does not mean every registry component has exactly zero utility. It does
          not erase every favorable study. Registration, public notification,
          law-enforcement access, verification, and targeted high-risk notification
          are not identical policies, and they should not be treated as though they
          are.
        </p>

        <p>
          There is favorable evidence worth acknowledging. A Minnesota study of
          community notification involving selected higher-risk Level 3 individuals
          found reductions or delays in several recidivism outcomes relative to
          comparison groups. Other research has suggested that registration and
          notification can operate through different mechanisms, including possible
          deterrent effects in some settings.
        </p>

        <p>Those findings belong in the conversation.</p>

        <p>
          But they do not establish what lawmakers and the public so often assume
          they establish.
        </p>

        <p>
          <strong>
            Evidence that a targeted intervention involving a selected higher-risk
            population may help does not prove that universal or near-universal
            public disclosure is justified.
          </strong>
        </p>

        <p>That distinction should change the policy debate.</p>

        <p>
          Instead, it is often reversed: the narrowest favorable finding is used to
          defend the broadest possible system.
        </p>

        <p>
          If individualized risk matters, then targeted intervention is evidence for
          targeting—not for abandoning individualization.
        </p>

        <BandHeader title="So What Does the Registry Actually Do?" />

        <p>This is where the question becomes uncomfortable.</p>

        <p>Because the registry performs one function extremely well:</p>

        <p>
          <strong>It tells the public who the designated bad people are.</strong>
        </p>

        <p>
          It gives communities a map, a label, and a ritual of exclusion. It tells
          everyone else where danger supposedly lives. It transforms a complicated
          problem of access, opportunity, family systems, institutional failure,
          treatment, supervision, and individualized risk into something emotionally
          simpler:
        </p>

        <p>
          <strong>those people are the danger.</strong>
        </p>

        <p>That may be psychologically satisfying.</p>

        <p>
          <strong>It is not the same thing as prevention.</strong>
        </p>

        <p>A registry is visible in ways that prevention rarely is.</p>

        <p>Prevention does not usually come with red dots on a map.</p>

        <p>Good treatment is not searchable by ZIP code.</p>

        <p>A strong family disclosure system does not generate a mug shot.</p>

        <p>
          Institutional safeguards, careful hiring, meaningful supervision, safe
          reporting channels, better professional boundaries, earlier intervention,
          and evidence-based risk management are difficult to photograph.
        </p>

        <p>The registry is easy.</p>

        <p>
          <strong>Names. Addresses. Photographs. Alerts. Search boxes.</strong>
        </p>

        <p>It makes vigilance tangible.</p>

        <p>
          And that may help explain why evidence alone has so much difficulty
          dislodging it.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-300 bg-slate-50 p-5 shadow-sm sm:p-6">
          <p className="m-0 text-lg font-semibold leading-relaxed text-slate-900">
            The registry survives not because the evidence proves that broad public
            exposure works as advertised, but in significant part because it satisfies
            political and psychological needs that measurable prevention does not
            satisfy nearly as neatly. It gives the public a visible class of people to
            fear, watch, exclude, and blame.
          </p>
        </div>

        <p>It divides society into watchers and watched.</p>

        <p>People inside the category are marked.</p>

        <p>People outside it are reassured.</p>

        <p>
          The political incentives reinforce the arrangement. Expanding registry
          laws can be presented as toughness. Narrowing them requires explaining
          nuance about risk, proportionality, and evidence in a political
          environment where almost no officeholder wants to be accused of being
          insufficiently punitive about sexual harm.
        </p>

        <p>No conspiracy is necessary.</p>

        <p>The incentive is structural.</p>

        <p>
          When the political cost of expansion is low and the political cost of
          restraint is high, ineffective systems can grow simply because nobody
          receives an electoral reward for asking the harder question.
        </p>

        <PullQuote>
          “The registry’s greatest success may not be preventing sexual harm. It may
          be convincing everyone who is not on it that danger has been identified,
          contained, and assigned to somebody else.”
        </PullQuote>

        <BandHeader title="The Cruelty Is Not Incidental" />

        <p>
          It is tempting to describe registry harms as “collateral consequences,” as
          though they were minor externalities around an otherwise functioning
          safety system.
        </p>

        <p>They are not minor.</p>

        <p>
          The evidence reviewed by SOLAR documents recurring effects involving
          housing, employment, threats and harassment, social isolation,
          psychological distress, family burdens, privacy, and the administrative
          demands of maintaining public-registration systems.
        </p>

        <p>
          That does not prove that every collateral consequence causes future
          offending.
        </p>

        <p>We should not make that claim.</p>

        <p>
          It does establish something simpler and harder to dismiss:{" "}
          <strong>the burdens are real, recurring, and predictable.</strong>
        </p>

        <p>A person can complete a sentence and still remain publicly searchable.</p>

        <p>A family can lose housing because of a label carried by one member.</p>

        <p>Children can inherit stigma they did nothing to create.</p>

        <p>Employment can disappear.</p>

        <p>Educational and financial opportunities can narrow.</p>

        <p>Relationships can fracture under public exposure.</p>

        <p>
          People can face harassment because the government has made their
          identities and locations unusually easy to find.
        </p>

        <p>
          And the system does not merely expose. It requires continuing participation
          through reporting, verification, updates, and compliance rules whose
          violations can themselves generate serious consequences.
        </p>

        <p>
          Whatever legal doctrine may call a registry in a particular jurisdiction,
          the lived structure can operate as continuing punishment.
        </p>

        <p>
          SOLAR says registries are punitive in practice because punishment is not
          experienced as a vocabulary exercise.
        </p>

        <p>
          If the state tells you where you may live, repeatedly requires you to
          report, publicly displays your history and location, exposes your family to
          collateral stigma, and makes ordinary reintegration extraordinarily
          difficult after the formal sentence has ended, “administrative” is a
          remarkably thin description of what is happening.
        </p>

        <p>
          If those burdens purchased a dramatic and demonstrable public-safety
          benefit, society would at least have a difficult proportionality question
          to debate.
        </p>

        <p>But that is precisely the problem.</p>

        <p>
          <strong>
            The burdens are certain and visible. The public-safety return is far harder
            to demonstrate.
          </strong>
        </p>

        <BandHeader title="We Have Confused Condemnation With Prevention" />

        <p>Sexual harm is wrong.</p>

        <p>Completely.</p>

        <p>Nothing about registry reform requires ambiguity on that point.</p>

        <p>
          But there is a mistake hidden inside much registry politics: because the
          underlying harm is morally serious, every punishment imposed in its name
          begins to feel morally serious too.
        </p>

        <p>That does not follow.</p>

        <PullQuote>
          “We have mistaken our certainty that sexual harm is wrong for evidence
          that every policy imposed in its name must therefore be useful.”
        </PullQuote>

        <p>A prison sentence may express punishment.</p>

        <p>Probation or supervised release may impose lawful controls.</p>

        <p>Treatment may address identified needs.</p>

        <p>Individualized monitoring may respond to actual risk.</p>

        <p>
          A registry, however, is routinely defended as something more: a mechanism
          of <strong>public safety</strong>.
        </p>

        <p>That claim is empirical.</p>

        <p>It can be tested.</p>

        <p>
          And once it is tested, moral disgust cannot be allowed to substitute for
          results.
        </p>

        <p>
          This distinction matters far beyond registry policy. Other serious harms
          to children, families, and communities are generally addressed through
          combinations of criminal sentences, treatment, regulation, prevention,
          supervision, licensing, civil remedies, and institutional safeguards. We
          do not ordinarily assume that the seriousness of an offense automatically
          requires lifelong public branding of everyone convicted of it.
        </p>

        <p>
          That inconsistency raises a proportionality question SOLAR has repeatedly
          asked: why is one category treated as though permanent public exposure is
          the natural extension of accountability while similarly grave harms are
          handled through sentence-bound systems?
        </p>

        <p>The point is not that society should build registries for everybody.</p>

        <p>
          The point is that if the public would recognize universal lifelong
          conviction branding as destabilizing, excessive, and punitive, those
          objections do not become meaningless merely because the people being
          branded are politically easier to despise.
        </p>

        <p>Accountability should be serious.</p>

        <p>It should also end somewhere.</p>

        <BandHeader title="The Danger the Map Doesn’t Show" />

        <p>There is another reason the registry can distort public safety.</p>

        <p>It teaches people where to look.</p>

        <p>Open the map and danger appears geographically organized.</p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-300 bg-slate-900 p-5 text-white sm:p-6">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
              What the map shows
            </div>
            <div className="mt-4 space-y-2 text-lg font-semibold">
              <p className="m-0">Here is a person.</p>
              <p className="m-0">Here is an address.</p>
              <p className="m-0">Here is a photograph.</p>
              <p className="m-0">Here is the threat.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              What the map doesn’t show
            </div>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
              <p className="m-0">It does not show the family member who has never been convicted.</p>
              <p className="m-0">It does not show the coach who has cultivated trust.</p>
              <p className="m-0">It does not show the teacher whose access has gone unquestioned.</p>
              <p className="m-0">It does not show the clergy member protected by institutional deference.</p>
              <p className="m-0">It does not show the respected community leader.</p>
              <p className="m-0">
                It does not show the person inside an organization that has weak reporting
                systems, poor boundaries, or incentives to protect its own reputation.
              </p>
              <p className="m-0">
                It does not show the person whose first detectable offense has not happened
                yet.
              </p>
            </div>
          </div>
        </div>

        <PullQuote>
          “A map of people we have already caught is not a map of where the next harm
          will come from.”
        </PullQuote>

        <p>
          This does not mean every sexual offense involves a known person or trusted
          authority. It means public-safety policy cannot responsibly organize itself
          around the fantasy that future harm can be plotted mainly by publishing
          the addresses of people previously convicted.
        </p>

        <p>
          That is why SOLAR insists that the real prevention conversation has to
          include access, opportunity, family systems, institutional controls,
          reporting, treatment, supervision, and actual pathways to offending.
        </p>

        <p>
          A registry can tell a parent that somebody convicted years ago lives three
          blocks away.
        </p>

        <p>
          It cannot tell that parent whether the person currently earning a child’s
          trust has safe boundaries.
        </p>

        <p>
          It cannot tell a school whether its reporting culture discourages
          disclosure.
        </p>

        <p>It cannot tell a church whether status is shielding misconduct.</p>

        <p>
          It cannot tell a youth organization whether adults have unsupervised
          access they should not have.
        </p>

        <p>
          It cannot tell a family how grooming, secrecy, coercion, or boundary
          violations may actually present.
        </p>

        <p>Yet these are prevention questions.</p>

        <p>The map is vivid.</p>

        <p>The danger outside the map is not.</p>

        <p>
          That imbalance can produce something worse than incomplete safety:{" "}
          <strong>misdirected attention</strong>.
        </p>

        <BandHeader title="A Permanent Underclass Is Not a Safety Strategy" />

        <p>
          SOLAR exists to Support, Organize, Lead, Advance, and Reform—to provide Sex
          Offense Learning, Advocacy, and Resources in pursuit of Safety,
          Opportunity, Liberty, Accountability, and Redemption.
        </p>

        <p>Those values belong together.</p>

        <div className="not-prose my-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="space-y-3 text-base leading-relaxed text-slate-800">
            <p className="m-0 font-semibold">Safety without opportunity can become exclusion.</p>
            <p className="m-0 font-semibold">Accountability without proportionality can become permanent punishment.</p>
            <p className="m-0 font-semibold">
              Liberty without responsibility is incomplete, but responsibility without
              the possibility of redemption becomes social death.
            </p>
          </div>
        </div>

        <p>Registry systems too often create exactly that condition.</p>

        <p>
          The cumulative effect is broader than any single lost job, rejected lease,
          or disrupted relationship. It is permanent civic exclusion: a system in
          which ordinary reintegration remains conditional, fragile, or unreachable
          long after formal punishment has ended.
        </p>

        <p>
          The message is not simply:{" "}
          <em>you did something wrong and were held accountable.</em>
        </p>

        <p>
          The message becomes: <em>you belong to a permanent public caste.</em>
        </p>

        <p>That is why SOLAR describes registry systems as creating an underclass.</p>

        <p>
          And it is why the question of stability cannot be dismissed as sympathy.
        </p>

        <p>
          The conditions that make ordinary reintegration possible—stability,
          support, treatment engagement, and community connection—are also
          public-safety infrastructure.
        </p>

        <p>
          A system that systematically obstructs the conditions public-safety
          institutions normally try to build should have to demonstrate an
          extraordinary benefit before those costs are accepted as unavoidable.
        </p>

        <p>Broad public registration has not met that standard.</p>

        <BandHeader title="So: What Good Is the Registry?" />

        <p>The responsible answer is not “literally none.”</p>

        <p>
          Law-enforcement databases can have administrative and investigative
          utility.
        </p>

        <p>
          Accurate identifying and location information can sometimes assist an
          investigation.
        </p>

        <p>
          Certain targeted notification approaches aimed at selected higher-risk
          individuals may produce benefit.
        </p>

        <p>
          Some studies identify mechanisms or outcomes that deserve continued
          investigation.
        </p>

        <p>
          SOLAR should acknowledge all of that because an honest argument does not
          need false absolutes.
        </p>

        <p>
          But none of those points establishes the necessity of broad, categorical,
          long-duration public exposure of a vast and heterogeneous population.
        </p>

        <p>
          None proves that a low-risk person and a high-risk person should be
          subjected to the same public-warning architecture.
        </p>

        <p>
          None proves that public access should continue for decades without
          meaningful review.
        </p>

        <p>
          None proves that the immense collateral burden imposed on people and their
          families produces a comparable safety return.
        </p>

        <p>And none changes the most important question.</p>

        <p>
          The issue is not whether the registry does <em>anything</em>.
        </p>

        <p>Almost any enormous government system does something.</p>

        <p>The question is:</p>

        <p>
          <strong>
            Does what it demonstrably does justify what we have allowed it to become?
          </strong>
        </p>

        <p>SOLAR’s answer is no.</p>

        <p>
          Very little in the evidence justifies a system this broad, this public,
          this categorical, this enduring, and this destructive of ordinary
          reintegration.
        </p>

        <p>
          What the evidence points toward instead is not the abandonment of
          accountability.
        </p>

        <p>It is better accountability.</p>

        <div className="not-prose my-8 grid gap-3 md:grid-cols-2">
          {[
            "Individualized risk assessment instead of offense-label destiny.",
            "Targeted intervention instead of blanket suspicion.",
            "Treatment instead of fatalism.",
            "Institutional safeguards instead of stranger-danger mythology.",
            "Stable housing and employment instead of engineered exclusion.",
            "Review instead of permanence.",
            "Measured outcomes instead of presumed benefits.",
            "Prevention instead of spectacle.",
            "Truth instead of reassurance.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold leading-relaxed text-slate-800"
            >
              {item}
            </div>
          ))}
        </div>

        <p>
          The registry performs one function extremely well: it tells the public who
          the designated bad people are.
        </p>

        <p>But moral sorting is not a prevention strategy.</p>

        <p>A map is not a prevention strategy.</p>

        <p>Stigma is not a prevention strategy.</p>

        <p>Permanent civic exclusion is not a prevention strategy.</p>

        <p>The work of safety is harder than that.</p>

        <p>
          It requires looking where harm actually develops, distinguishing people
          according to actual risk, intervening before victimization when possible,
          holding institutions accountable for the access and secrecy they permit,
          supporting effective treatment, and building conditions in which people
          who have been held accountable can return to stable and law-abiding lives.
        </p>

        <p>That is less emotionally simple than a list.</p>

        <p>It is also far more serious.</p>

        <div className="not-prose my-8 rounded-2xl bg-slate-900 px-5 py-6 text-white shadow-sm sm:px-7">
          <p className="m-0 text-lg font-bold leading-relaxed sm:text-xl">
            We do not oppose accountability. We oppose pretending that permanent
            exposure is accountability, that stigma is prevention, or that a list is
            a safety strategy.
          </p>
        </div>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and related reading" />

        <BandHeader title="Data Sources" />

        <ul className="list-disc pl-6">
          <li>
            <em>McKune v. Lile</em> —{" "}
            <a
              className={linkCls}
              href="https://www.law.cornell.edu/supremecourt/text/00-1187"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supreme Court opinion
            </a>
            . Source for the plurality’s “as high as 80%” recidivism language.
          </li>

          <li>
            <em>Smith v. Doe</em> —{" "}
            <a
              className={linkCls}
              href="https://supreme.justia.com/cases/federal/us/538/84/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supreme Court opinion
            </a>
            . Source for the Court’s “frightening and high” language and reliance on{" "}
            <em>McKune</em>.
          </li>

          <li>
            Ira and Tara Ellman —{" "}
            <a
              className={linkCls}
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2616429"
              target="_blank"
              rel="noopener noreferrer"
            >
              “‘Frightening and High’: The Supreme Court’s Crucial Mistake About Sex
              Crime Statistics”
            </a>
            . Traces the source history of the 80% estimate.
          </li>

          <li>
            Zgoba and Mitchell —{" "}
            <a
              className={linkCls}
              href="https://doi.org/10.1007/s11292-021-09480-z"
              target="_blank"
              rel="noopener noreferrer"
            >
              meta-analysis of 25 years of SORN findings
            </a>
            . Examines the overall recidivism-reduction evidence for registration and
            notification systems.
          </li>

          <li>
            Duwe and Donnay —{" "}
            <a
              className={linkCls}
              href="https://doi.org/10.1111/j.1745-9125.2008.00114.x"
              target="_blank"
              rel="noopener noreferrer"
            >
              Minnesota community-notification study
            </a>
            . Examines notification involving selected higher-risk Level 3
            individuals.
          </li>

          <li>
            Lasher and McGrath —{" "}
            <a
              className={linkCls}
              href="https://doi.org/10.1177/0306624X10387524"
              target="_blank"
              rel="noopener noreferrer"
            >
              quantitative review of community-notification consequences
            </a>
            . Reviews reported social and psychological effects including housing
            and employment burdens.
          </li>

          <li>
            SOLAR —{" "}
            <Link className={linkCls} to="/resources/risk-assessment-guide">
              Understanding Sex-Offense Risk Assessment
            </Link>
            . Evidence synthesis and primary-study gateway for heterogeneous and
            individualized risk.
          </li>

          <li>
            SOLAR —{" "}
            <Link className={linkCls} to="/resources/recidivism-evidence-guide">
              Understanding Recidivism Evidence
            </Link>
            . Evidence synthesis covering outcome definitions, follow-up periods,
            subgroup differences, and absolute versus relative measures.
          </li>

          <li>
            SOLAR —{" "}
            <Link
              className={linkCls}
              to="/resources/registry-effectiveness-evidence-guide"
            >
              Registry Effectiveness: What Does the Evidence Show?
            </Link>
            . Evidence synthesis separating broad SORN effects, targeted
            notification, mechanisms, and documented collateral burdens.
          </li>
        </ul>

        <BandHeader title="Related Reading" />

        <ul className="list-disc pl-6">
          <li>
            <Link
              className={linkCls}
              to="/blog/the-registry-is-not-a-prevention-plan"
            >
              The Registry Is Not a Prevention Plan
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/recidivism-evidence-guide">
              Understanding Recidivism Evidence
            </Link>
          </li>
          <li>
            <Link
              className={linkCls}
              to="/resources/registry-effectiveness-evidence-guide"
            >
              Registry Effectiveness: What Does the Evidence Show?
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}
