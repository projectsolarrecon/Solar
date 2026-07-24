import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  ContextualActionCard,
  Divider,
  PullQuote,
} from "../../components/solar";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "journalist",
  primaryPositionId: "closer-to-home",
  secondaryPositionId: "ineffective",
  formatId: "letter-to-editor",
  headline: "Ask public coverage to examine where prevention failed",
  description:
    "Coverage of sexual harm and child safety should examine trusted access, institutional safeguards, reporting failures, oversight gaps, and whether registry-centered policy would actually have prevented the harm being discussed.",
  recommendation: {
    audienceLabel:
      "Journalists, editorial boards, and public-facing commentators covering sexual harm, child safety, criminal justice, schools, churches, youth organizations, law enforcement, and institutional abuse",
    suggestion:
      "Write a letter to the editor or public-facing media message asking for evidence-based coverage of prevention, trusted access, and institutional accountability.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "When covering sexual harm or child safety policy, please examine whether the reported facts involve trusted access, institutional failure, ignored warnings, or prevention gaps, and avoid framing public registries as a complete prevention strategy when the evidence points to known perpetrators and familiar settings.",
  personalContext:
    "I am writing after reading SOLAR’s explanation of why Accountability Watch exists: to track patterns of trusted access, institutional failure, and missed prevention opportunities that registry-centered public safety often fails to address.",
  source: {
    title: "Why We Publish Accountability Watch",
    path: "/blog/why-we-publish-accountability-watch",
    type: "blog",
  },
};

export default function WhyWePublishAccountabilityWatch(): JSX.Element {
  return (
    <BlogLayout
      title="Why We Publish Accountability Watch"
      description="SOLAR publishes Accountability Watch to track patterns of trusted access, institutional failure, and prevention gaps that registry-centered public safety often misses."
      keywords="Accountability Watch, trusted access, institutional failure, stranger danger, registry myths, real prevention, child safety, public safety theater, SOLAR Accountability Watch"
      date="Jul 23, 2026"
      readTime="8 min read"
      badge="📝 BLOG"
      lede="Accountability Watch is not a crime roundup. It is SOLAR’s record of the gap between stranger-danger mythology and the real prevention work communities keep avoiding."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR" icon="🔎">
          <p>
            Accountability Watch tracks patterns, not spectacle. It asks readers
            to notice where trusted access, institutional failure, and missed
            prevention opportunities appear — and why registry-centered public
            safety often points attention in the wrong direction.
          </p>
        </Callout>

        <p>Accountability Watch is not a crime roundup.</p>

        <p>
          It is not a scandal feed. It is not a list of people to hate, fear,
          mock, or publicly destroy. SOLAR does not publish Accountability Watch
          because individual cases are shocking. We publish it because the
          patterns are impossible to ignore.
        </p>

        <p>
          Again and again, serious harm is alleged, revealed, investigated, or
          proven in places where people were told to feel safe: homes, schools,
          churches, youth programs, medical offices, police departments,
          corrections systems, public agencies, workplaces, political
          institutions, and other spaces built on trust.
        </p>

        <p>That matters because the public has been trained to look somewhere else.</p>

        <p>
          For decades, public safety messaging around sexual harm has leaned
          heavily on the image of the unknown stranger: the person outside the
          home, outside the institution, outside the trusted circle, already
          marked as dangerous and visible on a public list. But the available
          evidence points in a different direction. The CDC says{" "}
          <a
            className={linkCls}
            href="https://www.cdc.gov/child-abuse-neglect/about/about-child-sexual-abuse.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            about 90% of child sexual abuse is perpetrated by someone known and
            trusted by the child or the child’s family
          </a>
          . RAINN, citing Bureau of Justice Statistics data on cases reported to
          law enforcement, reports that{" "}
          <a
            className={linkCls}
            href="https://rainn.org/facts-statistics-the-scope-of-the-problem/statistics-children-teens/"
            target="_blank"
            rel="noopener noreferrer"
          >
            93% of juvenile victims knew the perpetrator: 59% were
            acquaintances, 34% were family members, and only 7% were strangers
          </a>
          .
        </p>

        <p>That is the dissonance Accountability Watch exists to expose.</p>

        <p>
          The public is told to look outward for danger. Real prevention often
          requires looking inward.
        </p>

        <BandHeader
          title="Accountability Watch Tracks Patterns, Not Spectacle"
          icon="🔎"
        />

        <p>There is a difference between documenting harm and exploiting it.</p>

        <p>
          Accountability Watch is not about turning allegations into
          entertainment or treating every arrest as proof of guilt. Charges are
          not convictions. Allegations are not findings. Civil claims are not
          criminal proof. Institutional accountability must not become public
          punishment of accused individuals.
        </p>

        <p>The point is not to sensationalize individual cases.</p>

        <p>
          The point is to ask what each case reveals about access, authority,
          oversight, institutional response, and public safety mythology.
        </p>

        <p>Who had access?</p>
        <p>Who was trusted?</p>
        <p>Were there warning signs?</p>
        <p>Did someone report concerns?</p>
        <p>Did an institution protect its reputation before protecting people?</p>
        <p>Would a registry map have prevented this?</p>
        <p>
          What prevention system should have existed before the criminal legal
          system became involved?
        </p>

        <p>Those are the questions Accountability Watch is built to keep asking.</p>

        <BandHeader title="The Safety Story That Feels Easier to Believe" icon="🗺️" />

        <p>
          Registry-centered public safety survives partly because it gives the
          public a simple story.
        </p>

        <p>
          Danger is identifiable. Danger is external. Danger has already been
          convicted. Danger can be placed on a map.
        </p>

        <p>
          That story is emotionally satisfying. It lets people believe safety
          can be achieved by checking a list, avoiding a house, or warning
          children about strangers.
        </p>

        <p>But real prevention is rarely that simple.</p>

        <p>
          Real prevention asks harder questions. Who has unsupervised access to
          children? Who is protected by institutional reputation? What warning
          signs were minimized? What reporting systems failed? What happens when
          the person causing harm is trusted, credentialed, popular, religious,
          connected, respected, or professionally powerful?
        </p>

        <p>
          Those questions are less comfortable because they move the focus away
          from the already-marked outsider and toward the systems people rely on
          every day.
        </p>

        <p>It is easier to fear a stranger than to audit a trusted institution.</p>

        <p>It is easier to expand a list than to fund prevention.</p>

        <p>
          It is easier to punish people after the fact than to build systems
          that interrupt abuse before it happens.
        </p>

        <p>
          It is easier to say “check the registry” than to ask whether a school
          district, church, medical system, employer, police department,
          licensing board, youth organization, family network, or political
          institution ignored the conditions that allowed harm to occur.
        </p>

        <p>
          But SOLAR has already documented why those settings matter. The danger
          can be{" "}
          <Link className={linkCls} to="/blog/inside-the-house">
            inside the house
          </Link>
          , in{" "}
          <Link
            className={linkCls}
            to="/blog/playing-fields-and-schoolyards"
          >
            playing fields and schoolyards
          </Link>
          , behind{" "}
          <Link className={linkCls} to="/blog/sanctuary-and-silence">
            sanctuary and silence
          </Link>
          , inside medical systems that promised to{" "}
          <Link className={linkCls} to="/blog/first-do-no-harm">
            first do no harm
          </Link>
          , among{" "}
          <Link className={linkCls} to="/blog/the-enforcers">
            the enforcers
          </Link>
          , in youth organizations marked by{" "}
          <Link className={linkCls} to="/blog/community-betrayal">
            community betrayal
          </Link>
          , in workplaces and local authority structures shaped by{" "}
          <Link className={linkCls} to="/blog/community-ties">
            community ties
          </Link>
          , and in the public hypocrisy of leaders who write the rules while
          escaping the logic they impose on others in{" "}
          <Link className={linkCls} to="/blog/politics-and-hypocrisy">
            Politics &amp; Hypocrisy
          </Link>
          .
        </p>

        <p>
          That is the point: Accountability Watch does not introduce a new
          argument. It keeps documenting the same pattern as it appears in real
          time.
        </p>

        <BandHeader title="The Disparity Is Not Subtle" icon="⚖️" />

        <p>
          Public policy often treats people on registries as the central public
          threat, even though the vast majority of sex offenses are committed by
          people who are not on any public registry.
        </p>

        <p>
          That does not mean no person on a registry can pose risk. It does not
          mean prior harm should be ignored. It does not mean accountability is
          optional.
        </p>

        <p>
          It means the public has been sold a dangerously incomplete prevention
          model.
        </p>

        <p>
          If child sexual abuse is overwhelmingly committed by someone known to
          the child or family, then prevention cannot be reduced to stranger
          warnings and public maps. Prevention has to address proximity,
          familiarity, trust, secrecy, opportunity, institutional culture,
          reporting pathways, supervision, and meaningful intervention.
        </p>

        <p>
          A registry map cannot supervise a classroom or locker room. SOLAR’s
          trusted-access work on{" "}
          <Link
            className={linkCls}
            to="/blog/playing-fields-and-schoolyards"
          >
            schools and youth sports
          </Link>{" "}
          shows why prevention has to examine the adults and systems already
          inside those spaces.
        </p>

        <p>
          It cannot audit a church, youth ministry, rectory, or faith community.{" "}
          <Link className={linkCls} to="/blog/sanctuary-and-silence">
            Sanctuary and Silence
          </Link>{" "}
          explains why spiritual authority and institutional reputation can
          become part of the risk environment.
        </p>

        <p>
          It cannot fix a medical complaint system.{" "}
          <Link className={linkCls} to="/blog/first-do-no-harm">
            First, Do No Harm
          </Link>{" "}
          shows why healthcare settings require oversight where privacy,
          vulnerability, and professional authority meet.
        </p>

        <p>
          It cannot make a youth organization, employer, licensing board, or
          civic institution act earlier.{" "}
          <Link className={linkCls} to="/blog/community-betrayal">
            Community Betrayal
          </Link>{" "}
          and{" "}
          <Link className={linkCls} to="/blog/community-ties">
            Community Ties
          </Link>{" "}
          show why safeguarding cannot depend on public maps after the fact.
        </p>

        <p>
          It cannot make a police department, court system, probation office, or
          correctional agency transparent.{" "}
          <Link className={linkCls} to="/blog/the-enforcers">
            The Enforcers
          </Link>{" "}
          shows why the people entrusted to police harm must also be subject to
          scrutiny.
        </p>

        <p>
          And it cannot force powerful public figures to live under the same
          moral logic they demand for everyone else.{" "}
          <Link className={linkCls} to="/blog/politics-and-hypocrisy">
            Politics &amp; Hypocrisy
          </Link>{" "}
          is part of that same accountability record.
        </p>

        <p>
          Accountability Watch exists because these are not isolated
          categories. They are recurring prevention failures hiding behind
          trusted access, status, institutional comfort, and public myths about
          where danger lives.
        </p>

        <BandHeader title="Why the Public Keeps Choosing the Map" icon="📍" />

        <p>The public does not fall for registry-centered safety by accident.</p>

        <p>The map is visible. Prevention infrastructure is not.</p>

        <p>
          The map gives people a place to point. Prevention asks them to examine
          relationships, institutions, and policies that may be close to home.
        </p>

        <PullQuote>
          “The map offers moral distance. Prevention forces moral proximity.”
        </PullQuote>

        <p>
          It is easier to believe danger lives somewhere else — in another
          neighborhood, another family, another category of person, another
          public list — than to accept that risk can emerge inside familiar
          systems with respected names attached.
        </p>

        <p>
          Politicians understand this. Expanding punishment is easier to campaign
          on than funding prevention, treatment, training, reporting systems,
          family support, school safeguards, reentry stability, or institutional
          oversight. Fear produces faster headlines than evidence. A new
          restriction is easier to explain than a prevention system.
        </p>

        <p>
          Institutions understand this too. Real prevention can threaten
          reputations, budgets, leadership, liability, donor confidence, public
          trust, and professional status. When harm occurs inside a trusted
          system, the institution often has incentives to minimize, delay, deny,
          isolate, or frame the problem as one bad actor rather than a failure of
          oversight.
        </p>

        <p>That is why public safety mythology matters.</p>

        <p>
          A community trained to look only at registries may miss the actual
          conditions that allow abuse to happen.
        </p>

        <p>
          A public trained to fear only outsiders may fail to recognize danger
          when it comes with credentials, charisma, authority, family access,
          spiritual trust, professional legitimacy, political power, or
          institutional protection.
        </p>

        <BandHeader title="This Is Not Anti-Accountability" icon="🧭" />

        <p>SOLAR is not anti-accountability.</p>

        <p>
          Accountability Watch exists because accountability has to be real, not
          selective.
        </p>

        <p>
          Real accountability does not mean permanent public punishment for one
          politically despised category while institutions escape scrutiny for
          preventable failures. It does not mean focusing public rage on people
          already marked by the state while ignoring systems that repeatedly
          give trusted people access, authority, and cover.
        </p>

        <p>Real accountability asks harder questions.</p>

        <p>It asks why prevention failed before harm occurred.</p>
        <p>It asks who had power.</p>
        <p>It asks who had access.</p>
        <p>It asks who was ignored.</p>
        <p>It asks who was protected.</p>

        <p>
          It asks whether the public response is actually designed to reduce
          harm or simply to reassure people that something visible has been
          done.
        </p>

        <p>
          <Link className={linkCls} to="/advocacy">
            SOLAR’s broader position
          </Link>{" "}
          is not that sexual harm is unimportant. It is that responses to harm
          must be honest, effective, proportional, humane, and grounded in
          evidence rather than fear.
        </p>

        <p>
          Accountability Watch is one way SOLAR keeps that principle concrete.
        </p>

        <BandHeader title="What We Want Readers to Notice" icon="👁️" />

        <p>
          When you read{" "}
          <Link
            className={linkCls}
            to="/resources/accountability-watch"
          >
            Accountability Watch
          </Link>
          , do not only ask, “What happened?”
        </p>

        <p>Ask what the case reveals.</p>
        <p>Ask whether the person had trusted access.</p>
        <p>Ask whether the setting created opportunity.</p>
        <p>Ask whether an institution had warning signs.</p>
        <p>Ask whether reporting systems worked.</p>
        <p>Ask whether oversight failed.</p>

        <p>
          Ask whether public policy would have prevented the harm or merely
          responded afterward.
        </p>

        <p>
          Ask whether the story fits the stranger-danger model the public has
          been sold.
        </p>

        <p>Often, it will not.</p>

        <p>That is the point.</p>

        <Callout variant="research" title="Pay Attention to the Pattern" icon="🔎">
          <p>
            Accountability Watch is not asking readers to panic. It is asking
            readers to pay attention — to patterns, access, authority, missed
            prevention, and institutions that claim trust while avoiding
            scrutiny.
          </p>
        </Callout>

        <p>Not to spectacle.</p>
        <p>To patterns.</p>
        <p>To access.</p>
        <p>To authority.</p>
        <p>To missed prevention.</p>
        <p>To institutions that claim trust while avoiding scrutiny.</p>
        <p>To public policy that performs safety while failing to build it.</p>

        <BandHeader title="Read the Trusted Access Series" icon="📖" />

        <p>
          Accountability Watch is the ongoing record. SOLAR’s trusted-access
          series explains the pattern in depth.
        </p>

        <p>
          Start with{" "}
          <Link className={linkCls} to="/blog/inside-the-house">
            The Call Is Coming from Inside the House
          </Link>{" "}
          for the family and proximity problem. Then read{" "}
          <Link
            className={linkCls}
            to="/blog/playing-fields-and-schoolyards"
          >
            Playing Fields &amp; Schoolyards
          </Link>
          ,{" "}
          <Link className={linkCls} to="/blog/sanctuary-and-silence">
            Sanctuary and Silence
          </Link>
          ,{" "}
          <Link className={linkCls} to="/blog/first-do-no-harm">
            First, Do No Harm
          </Link>
          ,{" "}
          <Link className={linkCls} to="/blog/community-betrayal">
            Community Betrayal
          </Link>
          ,{" "}
          <Link className={linkCls} to="/blog/community-ties">
            Community Ties
          </Link>
          ,{" "}
          <Link className={linkCls} to="/blog/the-enforcers">
            The Enforcers
          </Link>
          , and{" "}
          <Link className={linkCls} to="/blog/politics-and-hypocrisy">
            Politics &amp; Hypocrisy
          </Link>
          .
        </p>

        <p>
          Together, those pieces explain why Accountability Watch keeps
          returning to the same questions: who had access, who had authority,
          who was trusted, who was warned, who failed to act, and why the
          registry-centered story did not prevent the harm.
        </p>

        <BandHeader title="The Point Is Better Prevention" icon="🌱" />

        <p>
          The question is not whether communities should care about sexual harm.
          They should.
        </p>

        <p>
          The question is whether they are willing to care in ways that actually
          make people safer.
        </p>

        <p>
          That means moving beyond the false comfort of the map. It means
          investing in prevention before abuse happens, not only punishment
          after it is discovered. It means strengthening reporting systems,
          funding treatment and intervention, improving institutional
          safeguards, supporting families, listening to warning signs, and
          refusing to let trusted systems hide behind their own reputations.
        </p>

        <p>
          It also means telling the truth about what registries can and cannot
          do.
        </p>

        <p>A registry can label people with prior convictions.</p>

        <p>
          It cannot explain where most first-time, hidden, or trusted-access harm
          emerges.
        </p>

        <p>It cannot replace prevention.</p>

        <p>It cannot substitute for institutional accountability.</p>

        <p>
          It cannot make a community safe simply by giving fear a searchable
          address.
        </p>

        <p>That is why SOLAR publishes Accountability Watch.</p>

        <p>
          Because if public safety keeps looking in the wrong direction, it will
          keep missing the places where prevention was possible.
        </p>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and further reading" />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            Centers for Disease Control and Prevention —{" "}
            <a
              className={linkCls}
              href="https://www.cdc.gov/child-abuse-neglect/about/about-child-sexual-abuse.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC’s child sexual abuse prevention overview
            </a>
            . Supports the estimate that about 90% of child sexual abuse is
            perpetrated by someone known and trusted by the child or the child’s
            family.
          </li>
          <li>
            RAINN —{" "}
            <a
              className={linkCls}
              href="https://rainn.org/facts-statistics-the-scope-of-the-problem/statistics-children-teens/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RAINN’s statistics on children and teens
            </a>
            . Summarizes law-enforcement-reported data showing that 93% of
            juvenile victims knew the perpetrator.
          </li>
          <li>
            Bureau of Justice Statistics —{" "}
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/library/publications/sexual-assault-young-children-reported-law-enforcement-victim-incident-and"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sexual Assault of Young Children as Reported to Law Enforcement
            </a>
            . Provides the underlying government data on victim-offender
            relationships in reported cases.
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />

        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/inside-the-house">
              The Call Is Coming from Inside the House
            </Link>
          </li>
          <li>
            <Link
              className={linkCls}
              to="/blog/playing-fields-and-schoolyards"
            >
              Playing Fields &amp; Schoolyards
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/sanctuary-and-silence">
              Sanctuary and Silence
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}