import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout, PullQuote, Divider } from "../../components/solar";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function ResultsDontSpeakForThemselves(): JSX.Element {
  return (
    <BlogLayout
      title="The Results Don’t Speak for Themselves"
      description="Jacksonville says 535 compliance checks and 59 arrests speak for themselves. They don’t. Arrests measure enforcement. Public safety requires a different question."
      keywords="Operation Riverwatch, Jacksonville sex offender sweep, sex offender compliance checks, registry enforcement, public safety outcomes, law enforcement arrest numbers, registry effectiveness, public safety metrics, Jacksonville Sheriff’s Office"
      date="Sep 8, 2026"
      readTime="10–12 min read"
      badge="📝 BLOG"
      lede="Jacksonville checked 535 registered people and made 59 arrests. Officials called that public safety. But the numbers they released do not tell us whether anyone was safer."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR" icon="🔎">
          <p>
            Operation Riverwatch gives the public a familiar formula: hours,
            checks, arrests, safety. The problem is that the numbers measure
            enforcement activity and arrest outputs, not the public-safety
            outcome the announcement asks readers to assume.
          </p>
        </Callout>

        <div className="not-prose my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-sm">
          <div className="border-b border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
            Operation Riverwatch
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            <div className="bg-slate-950 px-5 py-5 text-center">
              <div className="text-3xl font-bold">230+</div>
              <div className="mt-1 text-sm text-slate-300">
                investigator-hours
              </div>
            </div>
            <div className="bg-slate-950 px-5 py-5 text-center">
              <div className="text-3xl font-bold">535</div>
              <div className="mt-1 text-sm text-slate-300">
                compliance checks
              </div>
            </div>
            <div className="bg-slate-950 px-5 py-5 text-center">
              <div className="text-3xl font-bold">59</div>
              <div className="mt-1 text-sm text-slate-300">arrests</div>
            </div>
          </div>
          <div className="px-5 py-4 text-center text-sm text-slate-300">
            What those numbers do not tell us: whether sexual harm was
            prevented.
          </div>
        </div>

        <p>
          On Tuesday, the Jacksonville Sheriff’s Office announced the results
          of a two-month sex-offender compliance operation called{" "}
          <a
            className={linkCls}
            href="https://www.actionnewsjax.com/news/local/operation-riverwatch-jacksonville-sheriffs-office-arrests-59-sex-offenders-compliance-sweep/PWRGFYO4RJDRNKDI452LDCVYI4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Operation Riverwatch
          </a>
          .
        </p>

        <p>
          The numbers were impressive: more than 230 investigator-hours, 535
          compliance checks, and 59 arrests. And then came the line:
        </p>

        <p>
          <strong>“The results speak for themselves.”</strong>
        </p>

        <p>They don’t.</p>

        <p>
          Operation Riverwatch ran from June 15 through August 14 as a joint
          effort between the Jacksonville Sheriff’s Office Offender Tracking
          Unit and the U.S. Marshals Service. According to JSO and{" "}
          <a
            className={linkCls}
            href="https://www.actionnewsjax.com/news/local/operation-riverwatch-jacksonville-sheriffs-office-arrests-59-sex-offenders-compliance-sweep/PWRGFYO4RJDRNKDI452LDCVYI4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            local reporting
          </a>
          , investigators checked registered sexual offenders and predators
          across Jacksonville and arrested 59 people accused of violating
          requirements imposed on them after release from jail or prison.
        </p>

        <p>
          The operation was framed explicitly as a public-safety effort.{" "}
          <a
            className={linkCls}
            href="https://www.foxnews.com/us/florida-sheriffs-office-arrests-59-sex-offenders-joint-operation-us-marshals"
            target="_blank"
            rel="noopener noreferrer"
          >
            JSO described the work
          </a>{" "}
          as keeping watch on local sexual offenders and career offenders “to
          keep you and your families safe.” The public was given the arrest
          total, shown the names of those arrested, and told that the results
          required no further explanation.
        </p>

        <p>But they do require explanation.</p>

        <p>In fact, that is the entire problem.</p>

        <BandHeader title="1. What exactly was the result?" />

        <p>Start with the simplest question.</p>

        <p>Fifty-nine people were arrested.</p>

        <p>For what?</p>

        <p>
          The announcement says they violated rules they were legally required
          to follow. But it does not provide the public with a meaningful
          breakdown of the conduct underlying those arrests. Contemporary
          reporting repeats the same topline figures — 535 checks, more than
          230 investigator-hours, 59 arrests — while also{" "}
          <a
            className={linkCls}
            href="https://cbs12.com/news/local/florida-crime-news-jacksonville-sheriff-office-arrests-59-sex-offenders-sexual-predators-career-offenders-joint-operation-with-us-marshals-operation-riverwatch"
            target="_blank"
            rel="noopener noreferrer"
          >
            noting that JSO did not specify the alleged violation or charge
            tied to each arrest
          </a>
          .
        </p>

        <p>
          That omission matters because sex-offender registration laws regulate
          an enormous amount of conduct. A registrant may be required to report
          where they live, where they work, vehicles they use, internet
          identifiers, changes in information, and other details, often within
          specific statutory deadlines. Some violations may involve deliberate
          concealment. Others may involve failures to update information
          correctly or on time.
        </p>

        <p>So what happened in Jacksonville?</p>

        <p>
          How many people had intentionally provided false residence
          information? How many had missed a reporting deadline? How many had
          failed to report employment, a vehicle, an internet identifier, or
          some other required piece of information? How many had outstanding
          warrants or supervision violations? How many were accused of conduct
          suggesting an immediate or elevated risk of sexual harm?
        </p>

        <p>
          Maybe some of the cases are serious. Maybe some are trivial. Maybe
          all 59 involved conduct that would make a reasonable person genuinely
          concerned about public safety.
        </p>

        <p>If so, tell us.</p>

        <BandHeader title="2. Arrests are not the same thing as safety" />

        <p>
          There is nothing mysterious about the numbers Jacksonville released.
          They measure real things.
        </p>

        <p>
          Investigator-hours measure police activity. Compliance checks measure
          police activity. Arrests measure enforcement output.
        </p>

        <p>All three can be counted accurately.</p>

        <p>None of them, by themselves, measure public safety.</p>

        <p>
          That distinction matters because the sheriff’s office did not merely
          announce that investigators had performed 535 checks and made 59
          arrests. It placed those numbers inside a claim about keeping
          families safe and then told the public that the meaning of the
          numbers was self-evident.
        </p>

        <p>That is the leap.</p>

        <p>The evidence establishes something like:</p>

        <p>
          <strong>checks → detected violations → arrests</strong>
        </p>

        <p>The rhetoric quietly converts that into:</p>

        <p>
          <strong>checks → arrests → safer families</strong>
        </p>

        <p>
          Maybe that second proposition is true. But the first one does not
          establish it.
        </p>

        <PullQuote>
          Public safety is an outcome. Enforcement is an activity. Arrest is an
          output.
        </PullQuote>

        <p>
          They are related concepts, but they are not interchangeable.
        </p>

        <p>
          This is not an academic distinction. If an agency says an operation
          prevented sexual harm, the relevant question is whether sexual harm
          was actually prevented. How many doors officers knocked on and how
          many people they booked into jail may be part of that story, but they
          cannot substitute for it.
        </p>

        <PullQuote>
          The numbers tell us what police did. They do not yet tell us what
          police accomplished.
        </PullQuote>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
              What we know
            </div>
            <div className="mt-3 text-lg font-bold text-slate-950">
              535 checks → detected violations → 59 arrests
            </div>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
              What is being implied
            </div>
            <div className="mt-3 text-lg font-bold text-slate-950">
              535 checks → 59 arrests → safer families
            </div>
          </div>
        </div>

        <BandHeader title="3. Apparently, the numbers often speak for themselves" />

        <p>Jacksonville is not alone in asking the public to make that leap.</p>

        <p>
          Law-enforcement agencies around the country use remarkably similar
          language when announcing enforcement operations. Sometimes the phrase
          is literally <strong>“the results speak for themselves.”</strong>{" "}
          Sometimes it becomes <strong>“the numbers speak for themselves,”
          “successful operation,” “successful sweep,”</strong> or a declaration
          that a community has been made safer immediately after a list of
          arrests and seizures.
        </p>

        <p>
          In New Jersey in 2025, the U.S. Marshals Service announced{" "}
          <a
            className={linkCls}
            href="https://www.usmarshals.gov/news/press-release/us-marshals-new-york-new-jersey-regional-fugitive-task-force-completes-operation"
            target="_blank"
            rel="noopener noreferrer"
          >
            264 arrests during Operation Apex Hammer
          </a>
          . The Marshal praised the operation and concluded:{" "}
          <strong>“The results speak for themselves.”</strong>
        </p>

        <p>
          In Toledo in 2022, after announcing{" "}
          <a
            className={linkCls}
            href="https://www.usmarshals.gov/news/press-release/us-marshals-and-toledo-police-combat-gang-and-gun-violence-operation-triple-beam"
            target="_blank"
            rel="noopener noreferrer"
          >
            127 fugitive arrests, 78 firearms seized, narcotics recovered, and
            a decline in ShotSpotter incidents during the operational period
            compared with the prior year
          </a>
          , the U.S. Marshal used the same phrase and immediately added that the
          operation <strong>“made Toledo a safer place to live, work and
          play.”</strong>
        </p>

        <p>
          In Washington, D.C., in 2026, the Marshals Service marked a year of a
          federal crime task force by announcing{" "}
          <a
            className={linkCls}
            href="https://prod.usmarshals.gov/news/press-release/make-dc-safe-and-beautiful-task-force-marks-one-year-of-relentless-action"
            target="_blank"
            rel="noopener noreferrer"
          >
            more than 16,000 arrests
          </a>{" "}
          under the heading: <strong>“One year later, the results speak for
          themselves.”</strong>
        </p>

        <p>
          And in Albany, Oregon, police did not even need the phrase. They
          simply titled their 2024 announcement{" "}
          <a
            className={linkCls}
            href="https://flashalert.net/id/AlbanyPolice/173676"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>“Successful Sex Offender Sweep in Albany.”</strong>
          </a>{" "}
          The operation targeted 161 registered people and produced two
          arrests, one criminal citation, one arrest warrant served, and
          several warnings. The release nevertheless described the operation
          as important to keeping the community safe and reducing future
          reoffending.
        </p>

        <p>
          Oregon State Police now maintains an official page describing
          compliance sweeps themselves as an{" "}
          <a
            className={linkCls}
            href="https://www.oregon.gov/osp/programs/sor/pages/sex-offender-compliance-sweeps.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>“effective operational tool.”</strong>
          </a>
        </p>

        <Callout variant="neutral" title="A familiar pattern">
          <div className="space-y-3">
            <p className="my-0">
              <strong>NEW JERSEY, 2025</strong> — 264 arrests — “The results
              speak for themselves.”
            </p>
            <p className="my-0">
              <strong>TOLEDO, 2022</strong> — 127 fugitive arrests — “The
              results speak for themselves.” / “It made Toledo a safer place to
              live, work and play.”
            </p>
            <p className="my-0">
              <strong>JACKSONVILLE, 2026</strong> — 535 checks — 59 arrests —
              “The results speak for themselves.”
            </p>
            <p className="my-0">
              <strong>ALBANY, OREGON, 2024</strong> — 161 checks — 2 arrests —
              “Successful Sex Offender Sweep”
            </p>
            <p className="mb-0 mt-4 text-sm">
              Different operations. Different arrest rates. Familiar
              conclusion.
            </p>
          </div>
        </Callout>

        <p>
          There is nothing inherently wrong with law enforcement being pleased
          with a successful operation. Some operations produce outcomes where
          the connection is fairly direct. If police locate missing children
          and return them to safety, for example, the “result” is considerably
          easier to identify. In a{" "}
          <a
            className={linkCls}
            href="https://www.usmarshals.gov/news/press-release/us-marshals-operation-results-recovery-of-27-missing-children"
            target="_blank"
            rel="noopener noreferrer"
          >
            2020 Marshals operation that recovered 27 missing children
          </a>
          , an official said “the results speak for themselves” and then
          identified the result: those children were safe again.
        </p>

        <p>
          That is qualitatively different from announcing an arrest count and
          allowing “public safety” to emerge by implication.
        </p>

        <p>
          But the same rhetorical shortcut appears over and over: present an
          impressive number, call it a result, and let the audience supply the
          causal conclusion.
        </p>

        <p>And most of us do.</p>

        <p>
          We hear 59 arrests and think: <em>good operation.</em>
        </p>

        <p>
          We hear 264 arrests and think:{" "}
          <em>dangerous people taken off the street.</em>
        </p>

        <p>
          We hear 535 sex-offender checks and think: <em>families protected.</em>
        </p>

        <p>
          The numbers feel like they speak for themselves because we have
          already been trained to understand what they are supposed to say.
        </p>

        <BandHeader title="4. And then there are the words “sex offenders”" />

        <p>Now imagine the Jacksonville headline stripped of one crucial label:</p>

        <div className="not-prose my-6 rounded-xl border border-slate-300 bg-white p-6 text-center shadow-sm">
          <div className="text-2xl font-black uppercase tracking-tight text-slate-950">
            59 people arrested
          </div>
          <div className="mt-1 text-lg font-bold uppercase tracking-wide text-slate-600">
            for regulatory noncompliance
          </div>
        </div>

        <p>That headline creates questions.</p>

        <p>
          What regulation? What did they do? Was anyone endangered? Were these
          serious violations? Were these arrests worth more than 230
          investigator-hours? Did the enforcement accomplish something
          important?
        </p>

        <p>Now restore the actual category:</p>

        <div className="not-prose my-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          versus
        </div>

        <div className="not-prose my-6 rounded-xl border-2 border-slate-950 bg-slate-950 p-6 text-center text-white shadow-sm">
          <div className="text-3xl font-black uppercase tracking-tight">
            59 sex offenders arrested
          </div>
        </div>

        <p className="text-center text-sm text-slate-600">
          Which version makes you ask what they actually did?
        </p>

        <p>For many readers, the questions disappear.</p>

        <p>
          <em>Good.</em>
        </p>

        <p>
          <em>Get them off the streets.</em>
        </p>

        <p>
          <em>Nice work.</em>
        </p>

        <p>
          <em>Keep our kids safe.</em>
        </p>

        <PullQuote>
          The category supplies the conclusion before the underlying conduct
          has even been described.
        </PullQuote>

        <p>
          That is what makes this particular kind of announcement so powerful.
          Law enforcement does not have to explain why each arrest represents a
          public-safety victory because the words{" "}
          <strong>“sex offender arrested”</strong> already feel like a
          public-safety victory.
        </p>

        <p>
          And surely, the intuition goes, police are not mounting multi-agency
          operations and putting people in jail over paperwork. Surely there
          must be something serious behind those 59 arrests. Surely these
          people were doing something dangerous. Surely Jacksonville is safer
          tonight.
        </p>

        <p>That may be true.</p>

        <p>
          But notice how much work the word <strong>“surely”</strong> is doing.
        </p>

        <p>The sheriff’s office has not given us enough information to know.</p>

        <p>And there is another reason the omission matters.</p>

        <p>
          Law-enforcement agencies know how to write self-congratulatory press
          releases. They do it all the time. When an operation uncovers
          something dramatic, they do not bury the most compelling fact. They
          lead with it.
        </p>

        <p>
          If one of those 59 people had been a long-sought fugitive, we would
          reasonably expect to hear about it. If a compliance check had
          uncovered a new allegation of a particularly serious crime, that
          would almost certainly become part of the story. If investigators
          had walked into a residence and rescued an alleged victim, found
          evidence of active abuse, or interrupted conduct posing an immediate
          danger to a child, it is difficult to imagine that fact being omitted
          while the agency instead led with investigator-hours and
          compliance-check totals.
        </p>

        <p>
          Those are the kinds of results that actually do speak rather loudly
          for themselves.
        </p>

        <p>
          Perhaps something like that happened during Riverwatch and
          Jacksonville simply chose not to mention it. That is possible.
        </p>

        <p>
          But it is also reasonable to notice what the agency did choose to
          tell us — and what it did not.
        </p>

        <p>We got 535 checks.</p>

        <p>We got more than 230 investigator-hours.</p>

        <p>We got 59 names.</p>

        <p>We got 59 arrests.</p>

        <p>
          We got{" "}
          <a
            className={linkCls}
            href="https://www.foxnews.com/us/florida-sheriffs-office-arrests-59-sex-offenders-joint-operation-us-marshals"
            target="_blank"
            rel="noopener noreferrer"
          >
            “breaking the rules.”
          </a>
        </p>

        <p>
          What we did not get was a single highlighted example showing how one
          of those arrests prevented sexual harm or removed an identifiable
          danger from the community.
        </p>

        <PullQuote>
          If there were an obvious public-safety story buried inside those 59
          cases, Jacksonville had every opportunity to tell it.
        </PullQuote>

        <p>
          The absence of that information may be the closest thing in this
          announcement to a result that actually <strong>does</strong> speak
          for itself.
        </p>

        <p>
          This is where the structure of the registry itself intersects with
          the structure of the press release.
        </p>

        <p>
          First, the state identifies a person through a prior conviction and
          assigns them a permanent legal category. Their identity is recorded.
          Their address is recorded. In many jurisdictions they are mapped for
          public consumption. They are subjected to a continuing web of
          reporting obligations that can extend years or decades beyond the
          original sentence.
        </p>

        <p>Then comes enforcement.</p>

        <p>
          A registrant may deliberately disappear. A registrant may lie about a
          residence. A registrant may also miss a reporting deadline,
          misunderstand a requirement, fail to update a piece of information,
          or make some other error within a regulatory system containing many
          opportunities for noncompliance.
        </p>

        <p>The state detects a violation.</p>

        <p>The person is arrested.</p>

        <p>The announcement goes out:</p>

        <p>
          <strong>SEX OFFENDERS ARRESTED IN COMPLIANCE CRACKDOWN.</strong>
        </p>

        <p>
          And the arrest itself becomes evidence that the system has protected
          us.
        </p>

        <p>Marked person. Mapped person. Violation. Arrest. Success.</p>

        <p>Repeat.</p>

        <p>The underlying conduct almost disappears.</p>

        <p>
          That is not merely a quirk of how journalists write headlines. It is
          the rhetorical architecture of these announcements. Jacksonville did
          not lead by telling the public what 59 people were actually alleged
          to have done. It led with the category of the people arrested and the
          number arrested.
        </p>

        <p>The public supplies the rest.</p>

        <p>
          And that psychological shortcut makes the system extraordinarily easy
          to validate.
        </p>

        <p>
          Suppose a sweep finds many people out of compliance. That proves the
          operation was needed: look how many violations police uncovered.
        </p>

        <p>
          Suppose another sweep finds almost everyone compliant. That can
          validate the operation too: look how effectively the system is
          maintaining compliance.
        </p>

        <p>
          Suppose Albany checks 161 targeted registrants and makes two arrests.
          The department calls it a{" "}
          <strong>successful sex-offender sweep.</strong>
        </p>

        <p>
          Suppose Jacksonville makes 59 arrests. The results speak for
          themselves.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-300 bg-slate-50 p-6 shadow-sm">
          <h3 className="m-0 text-lg font-black uppercase tracking-wide text-slate-950">
            When does the sweep fail?
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <div className="text-sm font-bold text-slate-900">
                High noncompliance
              </div>
              <div className="mt-1 text-sm text-slate-600">
                “The sweep was necessary.”
              </div>
            </div>

            <div className="rounded-lg bg-white p-4">
              <div className="text-sm font-bold text-slate-900">
                Low noncompliance
              </div>
              <div className="mt-1 text-sm text-slate-600">
                “The sweep is working.”
              </div>
            </div>

            <div className="rounded-lg bg-white p-4">
              <div className="text-sm font-bold text-slate-900">
                Many arrests
              </div>
              <div className="mt-1 text-sm text-slate-600">
                “Successful enforcement.”
              </div>
            </div>

            <div className="rounded-lg bg-white p-4">
              <div className="text-sm font-bold text-slate-900">
                Few arrests
              </div>
              <div className="mt-1 text-sm text-slate-600">
                “Successful compliance.”
              </div>
            </div>
          </div>

          <p className="mb-0 mt-5 font-semibold text-slate-900">
            If every observable result validates the intervention, what result
            would count against it?
          </p>
        </div>

        <p>
          There is almost no observable outcome that forces the institution to
          say: perhaps this operation did not produce much public-safety value.
        </p>

        <p>
          That should bother us — not because compliance enforcement must
          therefore be useless, but because a system that can interpret every
          possible result as evidence of its own effectiveness is not
          meaningfully evaluating effectiveness at all.
        </p>

        <p>
          And the words <strong>“sex offender”</strong> make that circularity
          much easier to miss.
        </p>

        <p>
          Few people instinctively demand a cost-benefit analysis after reading
          that 59 sex offenders have been arrested. The emotional response
          arrives first. The analytical question, if it arrives at all, comes
          later.
        </p>

        <p>Law enforcement agencies understand their audience.</p>

        <p>
          “The results speak for themselves” works precisely because the public
          usually nods and agrees.
        </p>

        <p>
          <em>
            Yeah. Fifty-nine sex offenders arrested. Those results certainly
            sound good.
          </em>
        </p>

        <p>
          But what if one of those “results” was a person arrested because a
          database contained information they failed to update correctly?
        </p>

        <p>Would that change how we interpret the number?</p>

        <p>What if ten were?</p>

        <p>What if thirty were?</p>

        <p>What if none were?</p>

        <p>We cannot answer because Jacksonville has not told us.</p>

        <p>
          And that is exactly why the results do not speak for themselves.
        </p>

        <BandHeader title="5. Give us the results that matter" />

        <p>There is a simple way to resolve this.</p>

        <p>Give the public better results.</p>

        <p>
          If Operation Riverwatch is an important sexual-harm prevention
          strategy, tell us what it found. Break down the 59 arrests. Tell us
          how many involved false residence information, how many involved
          other reporting violations, how many involved warrants or new
          criminal conduct, and how many involved circumstances suggesting an
          actual elevated risk of sexual offending.
        </p>

        <p>
          Tell us how many of the 535 checks found people fully compliant.
        </p>

        <p>
          Tell us what happened after earlier compliance operations. Did people
          arrested for registry violations subsequently commit fewer sexual
          offenses? Does intensive compliance checking produce lower sexual
          victimization than less intensive approaches? Did Riverwatch identify
          dangerous situations that would otherwise have gone undetected?
        </p>

        <p>
          Tell us what 230-plus investigator-hours bought Jacksonville in
          public-safety terms.
        </p>

        <p>Those are harder questions than counting arrests.</p>

        <p>That is exactly why they matter.</p>

        <p>
          SOLAR raised a similar issue recently in{" "}
          <Link
            className={linkCls}
            to="/blog/adam-walsh-act-20-years-results"
          >
            <strong>
              “20 Years In, What Has the Adam Walsh Act Achieved? We Wish We
              Could Tell You.”
            </strong>
          </Link>{" "}
          Federal officials could readily count the machinery: grants awarded,
          registries operating, searches performed, notifications transmitted,
          and enforcement activity completed.
        </p>

        <p>
          What was much harder to find was an answer to the question the entire
          system ostensibly exists to answer:
        </p>

        <p>
          <strong>Did it reduce sexual victimization?</strong>
        </p>

        <p>Operation Riverwatch is the same problem viewed from street level.</p>

        <div className="not-prose my-7 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-blue-800">
            Related analysis
          </div>
          <Link
            className="mt-2 block text-lg font-bold text-blue-900 underline underline-offset-2 hover:text-blue-950"
            to="/blog/adam-walsh-act-20-years-results"
          >
            20 Years In, What Has the Adam Walsh Act Achieved? We Wish We Could
            Tell You.
          </Link>
          <p className="mb-0 mt-2 text-sm text-slate-700">
            At the federal level, SOLAR found the same problem: the government
            could count the machinery far more easily than it could demonstrate
            the outcome.
          </p>
        </div>

        <p>At the federal level, the progression becomes:</p>

        <p>
          <strong>money → systems → searches → notifications → success</strong>
        </p>

        <p>At the local level:</p>

        <p>
          <strong>hours → checks → arrests → safety</strong>
        </p>

        <p>In both cases, the machinery is visible.</p>

        <p>The outcome is assumed.</p>

        <p>
          And once activity itself becomes evidence of effectiveness, the
          machinery begins generating the statistics that justify more
          machinery. More reporting requirements create more opportunities for
          noncompliance. More compliance checks discover more violations. More
          violations create more arrests. More arrests become evidence that
          enforcement is necessary.
        </p>

        <p>Then the next operation begins.</p>

        <p>Maybe Operation Riverwatch made Jacksonville safer.</p>

        <p>
          Some of those 59 arrests may have interrupted genuinely dangerous
          situations. If so, Jacksonville should tell us.
        </p>

        <p>
          Others may have involved regulatory violations with little connection
          to sexual violence. If so, Jacksonville should tell us that too.
        </p>

        <p>
          That is not an unreasonable demand from people asking the public to
          celebrate an enforcement operation in the name of safety.
        </p>

        <p>Five hundred thirty-five checks do not tell us whether children were safer.</p>

        <p>
          More than 230 investigator-hours do not tell us whether sexual
          victimization declined.
        </p>

        <p>
          Fifty-nine arrests do not tell us whether 59 dangerous situations
          were stopped.
        </p>

        <p>Those numbers tell us what police did.</p>

        <p>They do not tell us what police accomplished.</p>

        <p>
          <strong>The results do not speak for themselves.</strong>
        </p>

        <p>
          <strong>That is why we measure them.</strong>
        </p>

        <Divider label="Sources and related reading" />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            <a
              className={linkCls}
              href="https://www.actionnewsjax.com/news/local/operation-riverwatch-jacksonville-sheriffs-office-arrests-59-sex-offenders-compliance-sweep/PWRGFYO4RJDRNKDI452LDCVYI4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Action News Jax’s report on Operation Riverwatch
            </a>{" "}
            — Operation dates, joint-agency structure, investigator-hours,
            compliance checks, arrests, and reported post-release violations.
          </li>

          <li>
            <a
              className={linkCls}
              href="https://www.facebook.com/JacksonvilleSheriffsOffice/photos/keeping-watch-on-local-sexual-offenders-and-career-offenders-to-keep-you-and-you/1511008311060771/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jacksonville Sheriff’s Office’s Operation Riverwatch post
            </a>{" "}
            — Official agency announcement and family-safety framing. The
            platform link may require Facebook access.
          </li>

          <li>
            <a
              className={linkCls}
              href="https://www.foxnews.com/us/florida-sheriffs-office-arrests-59-sex-offenders-joint-operation-us-marshals"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fox News’s report quoting the JSO post
            </a>{" "}
            — Corroborates “breaking the rules,” family-safety framing, and the
            absence of individualized violation details in the post.
          </li>

          <li>
            <a
              className={linkCls}
              href="https://cbs12.com/news/local/florida-crime-news-jacksonville-sheriff-office-arrests-59-sex-offenders-sexual-predators-career-offenders-joint-operation-with-us-marshals-operation-riverwatch"
              target="_blank"
              rel="noopener noreferrer"
            >
              CBS12’s report on the JSO announcement
            </a>{" "}
            — Notes that JSO did not specify the alleged violation or charge
            tied to each arrest.
          </li>

          <li>
            <a
              className={linkCls}
              href="https://www.usmarshals.gov/news/press-release/us-marshals-new-york-new-jersey-regional-fugitive-task-force-completes-operation"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Marshals Service’s Operation Apex Hammer release
            </a>{" "}
            — 264 arrests and “The results speak for themselves.”
          </li>

          <li>
            <a
              className={linkCls}
              href="https://www.usmarshals.gov/news/press-release/us-marshals-and-toledo-police-combat-gang-and-gun-violence-operation-triple-beam"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Marshals Service’s Operation Triple Beam release
            </a>{" "}
            — 127 fugitive arrests, firearms and narcotics seizures,
            ShotSpotter comparison data, and the stated safer-community
            conclusion.
          </li>

          <li>
            <a
              className={linkCls}
              href="https://prod.usmarshals.gov/news/press-release/make-dc-safe-and-beautiful-task-force-marks-one-year-of-relentless-action"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Marshals Service’s D.C. task-force one-year release
            </a>{" "}
            — More than 16,000 arrests and “the results speak for themselves”
            framing.
          </li>

          <li>
            <a
              className={linkCls}
              href="https://flashalert.net/id/AlbanyPolice/173676"
              target="_blank"
              rel="noopener noreferrer"
            >
              Albany Police Department’s “Successful Sex Offender Sweep in
              Albany” release
            </a>{" "}
            — 161 checks, address-verification results, two arrests, one
            criminal citation, one warrant served, warnings, and community
            safety framing.
          </li>

          <li>
            <a
              className={linkCls}
              href="https://www.oregon.gov/osp/programs/sor/pages/sex-offender-compliance-sweeps.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oregon State Police’s sex-offender compliance sweeps page
            </a>{" "}
            — Describes compliance sweeps as an “effective operational tool.”
          </li>

          <li>
            <a
              className={linkCls}
              href="https://www.usmarshals.gov/news/press-release/us-marshals-operation-results-recovery-of-27-missing-children"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Marshals Service’s 2020 missing-children recovery release
            </a>{" "}
            — Fairness example in which “the results speak for themselves” was
            paired with an identified outcome: 27 children safe again.
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />

        <ul className="list-disc pl-6">
          <li>
            <Link
              className={linkCls}
              to="/blog/adam-walsh-act-20-years-results"
            >
              20 Years In, What Has the Adam Walsh Act Achieved? We Wish We
              Could Tell You.
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/what-good-is-the-registry">
              What Good Is the Registry?
            </Link>
          </li>
          <li>
            <Link
              className={linkCls}
              to="/blog/the-registry-is-not-a-prevention-plan"
            >
              The Registry Is Not a Prevention Plan
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}