import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout, PullQuote, Divider } from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function TheSafetyIllusion(): JSX.Element {
  return (
    <BlogLayout
      title="The Safety Illusion: What Uber’s Background Checks Reveal About Who We Actually Protect — and Who We Don’t"
      description="An examination of Uber’s background check policies and what they reveal about the illusions of safety in rideshare culture."
      keywords="Uber, background checks, sexual violence, registry policy, rideshare safety"
      date="Jan 7, 2026"
      readTime="9 min"
      badge="📝 BLOG"
      lede="Uber’s background check scandal exposes a deeper truth: our most visible safety systems often protect perception more than people."
    >
      <article className="prose prose-slate max-w-none">
        <BandHeader
          title="I. The Reporting That Should Have Changed the Conversation"
          icon="📰"
        />
        <p>
          In late December 2025, the{" "}
          <a
            className={linkCls}
            href="https://www.nytimes.com/2025/12/22/business/uber-background-checks-sexual-assault.html"
            target="_blank"
            rel="noopener"
          >
            New York Times published
          </a>{" "}
          a deeply unsettling investigation with a headline that should have forced a
          national reckoning: <em>Uber Cleared Violent Felons to Drive. Passengers Accused
          Them of Rape.</em>
        </p>
        <p>
          The reporting was not based on rumor or selective anecdotes. It drew from sealed
          court filings, internal company records, and litigation disclosures spanning
          years of rideshare operations in the United States. What emerged was not a story
          about isolated failures or bad actors slipping through the cracks. It was a
          portrait of a system functioning as designed.
        </p>
        <p>
          According to the investigation, Uber approved drivers with documented histories
          of violent crime — including assault, domestic violence, stalking, and child
          abuse — and placed them in roles that involved unsupervised, one-on-one access to
          strangers in confined spaces. In some of those cases, passengers later accused
          those drivers of rape or sexual assault.
        </p>
        <p>
          This was not a matter of outdated information or unknowable risk. The criminal
          histories existed. The patterns were familiar. The warning signs were not
          subtle.
        </p>
        <p>And yet the system moved forward anyway.</p>
        <p>
          If this reporting feels shocking, it is not because it reveals something we
          didn’t know about sexual violence. It is because it exposes how little our most
          visible “safety” measures are designed to confront it.
        </p>

        <Divider />

        <BandHeader title="II. What Uber Got “Right” — and Why That Matters" icon="⚖️" />
        <p>It is important to be precise about what Uber did — and did not — do.</p>
        <p>
          <a
            className={linkCls}
            href="https://www.uber.com/newsroom/background-checks/"
            target="_blank"
            rel="noopener"
          >
            Uber bars people on sex-offender registries
          </a>{" "}
          from driving on its platform. Registry status is a{" "}
          <a
            className={linkCls}
            href="https://help.uber.com/en/driving-and-delivering/article/what-background-checks-look-for?nodeId=ee210269-89bf-4bd9-87f6-43471300ebf2"
            target="_blank"
            rel="noopener"
          >
            categorical disqualifier
          </a>
          . There is no balancing test, no individualized review, no consideration of time
          elapsed or demonstrated desistance. If your name appears on a registry, you are
          out.
        </p>
        <p>
          This is not an accident. It is a deliberate policy choice that aligns neatly with
          public expectations. When people step into a rideshare vehicle, they want to
          believe that someone labeled a “sex offender” has been screened out. Uber can —
          and does — reassure riders that this is the case.
        </p>
        <p>
          In other words, Uber complied with the most politically legible demand society
          makes in the name of safety. It did the thing people point to as proof that
          sexual violence is being taken seriously.
        </p>
        <p>
          That fact matters, because it eliminates the easiest explanation for what
          followed. This was not a story about a company ignoring registries, cutting
          corners on the most obvious exclusions, or failing to “run the right list.”
        </p>
        <p>Uber ran the list.<br />Uber enforced the ban.<br />Uber passed the compliance test.</p>
        <p>And passengers were still harmed.</p>

        <Divider />

        <BandHeader title="III. And Yet — Passengers Were Still Harmed" icon="🚨" />
        <p>
          Here is the contradiction at the heart of the reporting, and the reason it cannot
          be dismissed as a procedural failure.
        </p>
        <p>
          Uber excluded people on sex-offender registries.<br />
          Uber approved people with histories of violent crime.<br />
          Uber placed those drivers in unsupervised, one-on-one settings with passengers.<br />
          And sexual assaults were reported anyway.
        </p>
<p>
          The rideshare environment is uniquely vulnerable to abuse: confined space,
          minimal oversight, asymmetry of power, and social pressure to comply. If any
          setting demands careful attention to real-world violence risk, this is it.
        </p>
        <p>
          Yet the system treated registry status as the decisive safety threshold — a legal
          label standing in for a serious assessment of who is most likely to commit harm
          in that environment.
        </p>
        <p>
          The uncomfortable implication is not that Uber failed to screen hard enough. It
          is that the screening society demands is misaligned with the danger it claims to
          prevent.
        </p>
        <p>
          If excluding people labeled “sex offenders” were meaningfully protective, this
          story should not exist. The registry box was checked. The reassurance was
          provided. The system did what it was designed to do.
        </p>
        <p>What it did not do was prevent sexual violence.</p>

        <Divider />

        <BandHeader title="IV. Legal Labels vs. Real-World Risk" icon="⚖️" />
        <p>
          The failure exposed by the reporting is not a failure to recognize danger. It is
          a failure to distinguish between <strong>legal labels</strong> and{" "}
          <strong>actual risk</strong>.
        </p>
        <p>
          Sex-offender registry status is a legal classification. It is binary,
          offense-based, and largely static. Once applied, it tends to follow a person
          regardless of time elapsed, age, rehabilitation, or context. It tells us
          something about a past conviction — but very little about how likely someone is
          to commit sexual violence in a particular setting, under particular conditions,
          today.
        </p>
        <p>
          That distinction is not academic. It goes to the heart of why the Uber screening
          system produced such predictable results.
        </p>
        <p>
          <a
            className={linkCls}
            href="https://pubmed.ncbi.nlm.nih.gov/23275472/"
            target="_blank"
            rel="noopener"
          >
            Decades of criminology and victimology research
          </a>{" "}
          have identified patterns that are far more predictive of sexual violence than
          registry status alone. Prior interpersonal violence. Domestic abuse. Stalking.
          Coercive behavior.{" "}
          <a
            className={linkCls}
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4616254/"
            target="_blank"
            rel="noopener"
          >
            Substance abuse combined with opportunity
          </a>
          . Entitlement reinforced by{" "}
          <a
            className={linkCls}
            href="https://www.who.int/news-room/fact-sheets/detail/violence-against-women"
            target="_blank"
            rel="noopener"
          >
            power imbalance
          </a>
          . These are not obscure{" "}
          <a
            className={linkCls}
            href="https://www.cdc.gov/sexual-violence/risk-factors/index.html"
            target="_blank"
            rel="noopener"
          >
            findings
          </a>
          . They are among the most consistent predictors in the{" "}
          <a
            className={linkCls}
            href="https://nccasa.org/wp-content/uploads/2020/01/Tharp-systematic-qualitative-review-of-risk-and-protective-factors-for-SV-perpetration.pdf"
            target="_blank"
            rel="noopener"
          >
            literature
          </a>
          .
        </p>
        <p>And they were present.</p>
        <p>
          The drivers approved by Uber were not blank slates. Many had documented histories
          of violent conduct that, taken seriously, should have triggered heightened
          scrutiny — especially in a context that places a single individual in control of
          a confined space with a stranger.
        </p>
        <p>
          Instead, the system treated registry exclusion as the endpoint. Once the legal
          label was absent, the risk conversation effectively stopped.
        </p>
        <p>
          This is the central misalignment: a static legal status was allowed to stand in
          for a dynamic assessment of danger, even in an environment where the conditions
          for abuse were well understood.
        </p>

        <Divider />

        <BandHeader
          title="V. The Registry as the Anchor of a Broader Exclusion Regime"
          icon="📜"
        />
        <p>The problem does not end with Uber, and it does not begin there either.</p>
        <p>
          Sex-offender registries rarely operate as stand-alone tools. They function as the
          moral and political anchor for a much broader regime of exclusion — one that
          extends into housing, employment, movement, and civic life.
        </p>
        <p>
          Residency bans.<br />
          Proximity restrictions.<br />
          Blanket employment exclusions.<br />
          Volunteer prohibitions.<br />
          Platform bans in housing, delivery, transportation, and gig work.
        </p>
        <p>
          These measures are often justified as necessary safeguards. Together, they create
          a highly visible architecture of control that signals seriousness and resolve.
          Communities can point to them. Companies can cite them. Policymakers can expand
          them.
        </p>
        <p>And everyone involved can say they are doing something to prevent sexual violence.</p>
        <p>
          What they rarely do is ask whether these exclusions meaningfully address the
          conditions under which sexual harm actually occurs.
        </p>
        <p>
          The registry, in this sense, becomes less a prevention tool than a{" "}
          <strong>permission structure</strong> — a way to declare the danger identified,
          isolated, and removed. Once the labeled group is excluded, institutions are free
          to stop there.
        </p>
        <p>
          Uber followed this script precisely. It excluded registrants. It complied with
          the most visible safety demand. And then it moved on, approving drivers whose
          histories aligned far more closely with known predictors of violence.
        </p>
        <p>
          The pattern is familiar. Exclude the people who feel dangerous. Tolerate the
          people who statistically are.
        </p>

        <Divider />

        <BandHeader
          title="VI. Safety Theater: When Exclusion Replaces Prevention"
          icon="🎭"
        />
        <p>
          This is where the concept that best explains the failure comes into focus:{" "}
          <strong>safety theater</strong>.
        </p>
        <p>
          Safety theater is not about doing nothing. It is about doing things that are
          highly legible, emotionally satisfying, and politically safe, while leaving the
          underlying risk untouched.
        </p>
        <p>
          Registries and the exclusion regimes built around them are particularly effective
          forms of safety theater because they offer clarity. There is a list. There is a
          boundary. There is a visible “other.” The public can be reassured that danger has
          been identified and pushed away.
        </p>
        <p>
          What safety theater does not require is the harder work of prevention.
        </p>
        <p>
          Prevention requires grappling with{" "}
          <a
            className={linkCls}
            href="https://static.prisonpolicy.org/scans/bjs/sdvv.pdf"
            target="_blank"
            rel="noopener"
          >
            uncomfortable realities
          </a>
          : that sexual violence is often committed by{" "}
          <a
            className={linkCls}
            href="https://bjs.ojp.gov/content/pub/pdf/FEMVIED.PDF"
            target="_blank"
            rel="noopener"
          >
            people without the most stigmatized labels
          </a>
          ; that risk is contextual and situational; that harm emerges from opportunity and
          power as much as pathology. It requires redesigning systems, accepting costs,
          slowing growth, and taking responsibility for foreseeable outcomes.
        </p>
        <p>Exclusion, by contrast, requires a rule and a press statement.</p>
        <p>
          Uber’s policies illustrate the appeal. By barring people on sex-offender
          registries, the company could credibly claim vigilance. Riders could feel
          reassured. The company could demonstrate compliance with public expectations —
          without fundamentally reconsidering how violence risk should be assessed in a
          rideshare environment.
        </p>
        <p>
          The result was a system that looked strict and felt safe, while repeatedly placing
          passengers in harm’s way.
        </p>
        <p>
          This is not a failure of imagination. It is the predictable outcome of a model
          that confuses visible exclusion with effective protection, and compliance with
          care.
        </p>
<Divider />

        <BandHeader
          title="VII. Institutional Incentives, Not Knowledge Gaps"
          icon="🏛️"
        />
        <p>
          By the time the facts in the Uber cases surfaced, there was no plausible argument
          left that institutions simply didn’t know better.
        </p>
        <p>
          The risk factors associated with sexual violence in unsupervised,
          power-imbalanced settings have been{" "}
          <a
            className={linkCls}
            href="https://stacks.cdc.gov/view/cdc/39126"
            target="_blank"
            rel="noopener"
          >
            studied for decades
          </a>
          . They are taught in criminal justice programs, used in{" "}
          <a
            className={linkCls}
            href="https://www.ojp.gov/pdffiles1/nij/179981.pdf"
            target="_blank"
            rel="noopener"
          >
            threat assessment
          </a>
          , and cited regularly in public-health{" "}
          <a
            className={linkCls}
            href="https://www.cdc.gov/violence-prevention/media/pdf/resources-for-action/SV-Prevention-Resource_508.pdf"
            target="_blank"
            rel="noopener"
          >
            literature
          </a>
          .
        </p>
        <p>None of this knowledge was proprietary or experimental.</p>
        <p>What was proprietary were the incentives.</p>
        <p>
          Excluding people with violent histories narrows labor pools. It slows onboarding.
          It increases costs. It raises questions about liability and oversight. It
          requires ongoing assessment rather than one-time compliance.
        </p>
        <p>
          Excluding people on sex-offender registries, by contrast, is simple. It is
          legible. It satisfies regulators and reassures customers. It creates a clear line
          between “safe” and “unsafe” without forcing institutions to confront more
          uncomfortable truths about how violence actually occurs.
        </p>
        <p>This is not ignorance. It is prioritization.</p>
        <p>
          Uber did not fail to imagine a safer system. It chose one that balanced risk
          against growth — and decided where to stop.
        </p>

        <Divider />

        <BandHeader title="VIII. Who We Restrict, and Who We Trust" icon="🔍" />
        <p>
          The Uber story forces a broader reckoning with how society allocates scrutiny.
        </p>
        <p>
          We impose sweeping, lifelong restrictions on people labeled sex offenders —
          regardless of offense type, context, or demonstrated desistance. We bar them from
          housing, employment, public spaces, volunteer roles, and entire categories of
          economic participation. These exclusions are often justified as necessary for
          safety, even when evidence of preventive benefit is thin or nonexistent.
        </p>
        <p>
          At the same time, we routinely reintegrate people with histories of violence —
          including domestic abuse, assault, and coercive behavior — once a certain amount
          of time has passed, or once the legal record no longer demands exclusion.
        </p>
        <p>The contradiction is stark.</p>
        <p>
          We restrict those who symbolize danger, while tolerating those who{" "}
          <a
            className={linkCls}
            href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/2004-02-prdctrs-sxl-rcdvsm-pdtd/index-en.aspx"
            target="_blank"
            rel="noopener"
          >
            statistically pose higher risk in specific environments
          </a>
          . We punish labels instead of{" "}
          <a
            className={linkCls}
            href="https://www.cdc.gov/sexual-violence/risk-factors/index.html"
            target="_blank"
            rel="noopener"
          >
            patterns
          </a>
          . We focus on identity rather than behavior. And then we express shock when harm
          occurs in exactly the conditions we failed to address.
        </p>
        <p>Uber did not invent this logic. It mirrored it.</p>

        <Divider />

        <BandHeader
          title="IX. What Real Prevention Would Actually Require"
          icon="🧭"
        />
        <p>
          If the goal were truly to reduce sexual violence — rather than to demonstrate
          concern for it — prevention would look very different.
        </p>
        <p>
          It would involve context-specific risk assessment rather than static labels.
          Continuous evaluation rather than lifetime exclusion. System design that accounts
          for opportunity, isolation, and power imbalance. Transparency about what
          screening can and cannot do. And accountability when foreseeable risks are
          ignored.
        </p>
        <p>None of this is mysterious. It is simply harder than exclusion.</p>
        <p>
          Prevention requires institutions to accept responsibility for the environments
          they create, not just the people they exclude. It requires confronting the
          uncomfortable reality that harm often comes from people who do not fit our most
          stigmatized categories.
        </p>
        <p>It requires work.</p>

        <Divider />

        <BandHeader
          title="X. The Cost of Confusing Comfort for Safety"
          icon="💡"
        />
        <p>
          The lesson of the Uber investigation is not subtle, and it does not require
          interpretation.
        </p>
        <p>
          Uber barred people on sex-offender registries from driving — and still placed
          passengers at risk, because registry status is a legal label that provides
          emotional reassurance, not a serious assessment of who is most likely to commit
          sexual violence in an unsupervised, intimate setting.
        </p>
        <p>
          That outcome was not accidental. It was the predictable result of a system
          designed to feel protective rather than to be protective.
        </p>
        <p>
          As long as registries and broad exclusion regimes are treated as substitutes for
          prevention — as long as institutions are rewarded for visible action rather than
          effective action — this pattern will repeat. The labels will change. The
          platforms will change. The assurances will sound familiar.
        </p>
        <p>And the harm will continue.</p>
        <p>
          If we are serious about preventing sexual violence, we have to stop confusing
          comfort with safety — and stop accepting safety theater in place of systems that
          actually do the work.
        </p>

        <Divider label="Data Sources" />

        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li>
            New York Times —{" "}
            <a
              className={linkCls}
              href="https://www.nytimes.com/2025/12/22/business/uber-background-checks-sexual-assault.html"
              target="_blank"
              rel="noopener"
            >
              Uber Cleared Violent Felons to Drive. Passengers Accused Them of Rape.
            </a>
          </li>
          <li>
            Uber Background Check Policy —{" "}
            <a
              className={linkCls}
              href="https://www.uber.com/newsroom/background-checks/"
              target="_blank"
              rel="noopener"
            >
              https://www.uber.com/newsroom/background-checks/
            </a>
          </li>
          <li>
            CDC: Risk Factors for Sexual Violence —{" "}
            <a
              className={linkCls}
              href="https://www.cdc.gov/sexual-violence/risk-factors/index.html"
              target="_blank"
              rel="noopener"
            >
              https://www.cdc.gov/sexual-violence/risk-factors/index.html
            </a>
          </li>
          <li>
            WHO Fact Sheet: Violence Against Women —{" "}
            <a
              className={linkCls}
              href="https://www.who.int/news-room/fact-sheets/detail/violence-against-women"
              target="_blank"
              rel="noopener"
            >
              https://www.who.int/news-room/fact-sheets/detail/violence-against-women
            </a>
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/safety-theater-in-policy">
              Safety Theater in Policy
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/registry-and-reform">
              Rethinking Registry-Based Policy
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/violence-prevention-design">
              Designing Systems for Real Prevention
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}