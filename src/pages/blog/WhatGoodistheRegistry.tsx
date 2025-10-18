import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
} from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function WhatGoodistheRegistry(): JSX.Element {
  return (
    <BlogLayout
      title="What Good Is the Registry?"
      description="If it can’t stop first-time offenders, doesn’t cut repeat offending beyond tools we already use, and makes communities less stable, what exactly is it doing?"
      keywords="sex offender registry, public safety, recidivism, policy reform, criminal justice"
      date="Oct 18, 2025"
      readTime="12 min"
      badge="📝 BLOG"
      lede="If it can’t stop first-time offenders, doesn’t cut repeat offending beyond tools we already use, and makes communities less stable, what exactly is it doing?"
    >
      <article className="prose prose-slate max-w-none">
        <BandHeader title="The Promise We Keep Repeating" icon="📜" />

        <p className="mt-6">
          A quarter century ago, the United States made a public promise in the wake of
          headline-grabbing tragedies: put people with sex convictions on a list,
          publish their names and addresses, and families will be safer. The idea was
          simple and emotionally persuasive. Knowing where a former offender lived would
          let the public stay vigilant. That vision hardened into law. Today, state and
          territorial registries list <strong>hundreds of thousands of people</strong>,
          and federal summaries place the figure at{" "}
          <strong>approaching one million nationwide</strong>—a scale confirmed by the{" "}
          <a
            className={linkCls}
            href="https://www.ojp.gov/sites/g/files/xyckuh241/files/archives/blogs-2018/2018-blog-smart-nsopw.htm"
            target="_blank"
            rel="noopener"
          >
            SMART Office
          </a>{" "}
          and{" "}
          <a
            className={linkCls}
            href="https://www.missingkids.org/"
            target="_blank"
            rel="noopener"
          >
            NCMEC
          </a>
          ’s combined reporting.
        </p>

        <p className="mt-6">
          But the promise was always bound to fail for a reason that’s uncomfortable to
          admit: <strong>the registry can only track people already caught.</strong> It
          cannot see the next person who will harm someone—especially when that person is
          a family member, coach, neighbor, or trusted acquaintance with no prior
          sex-crime conviction. That’s not a loophole; it’s the central fact. So the
          question this essay asks, from the outset and without euphemism, is this:
        </p>

        <PullQuote>
          <strong>
            “If the registry cannot stop first-time offenders, and it doesn’t reduce
            repeat offending beyond the tools the justice system already has, then what
            good is it?”
          </strong>
        </PullQuote>

        <p className="mt-6">Everything that follows answers that question.</p>

        <Divider label="Evidence vs. Myth" />

        <BandHeader
          title="What the Data Actually Shows About “Who Offends”"
          icon="📊"
        />

        <p className="mt-6">
          The American fear narrative imagines a dangerous stranger who must be
          monitored. The data say something else.{" "}
          <strong>Most sexual abuse is committed by someone the victim knows</strong>,
          often with authority or access. Victimization data show this clearly:
          acquaintance, intimate partner, or relative accounts dominate the statistics (
          <a
            className={linkCls}
            href="https://rainn.org/statistics/perpetrators-sexual-violence"
            target="_blank"
            rel="noopener"
          >
            RAINN
          </a>
          ,{" "}
          <a
            className={linkCls}
            href="https://www.nsvrc.org/statistics"
            target="_blank"
            rel="noopener"
          >
            NSVRC
          </a>
          ).
        </p>

        <p className="mt-6">
          A long-term <em>New York State</em> time-series study found that{" "}
          <strong>over 95 percent</strong> of sexual-offense arrests were committed by{" "}
          <strong>first-time offenders</strong>—people with{" "}
          <strong>no prior sex-crime conviction</strong> and therefore{" "}
          <strong>no registry entry</strong> at the time (
          <a
            className={linkCls}
            href="https://psycnet.apa.org/doi/10.1037/1076-8971.14.4.284"
            target="_blank"
            rel="noopener"
          >
            Sandler et al. 2008
          </a>
          ).
        </p>

        <PullQuote>
          <strong>
            “If 95 percent of arrests are first-timers, the registry cannot prevent the
            vast majority of sexual offenses.”
          </strong>
        </PullQuote>

        <p className="mt-6">
          That statistic isn’t advocacy—it’s peer-reviewed. The registry can publish
          names; it can’t intervene in abuse by someone unseen, someone trusted, someone
          whose history doesn’t include a prior felony conviction. The simple truth: most
          sexual offenses come from people <strong>not on</strong> any registry.
        </p>

        <Divider label="Reality Check" />

        <BandHeader
          title="What Happens With People Who Are on the Registry"
          icon="🔍"
        />

        <p className="mt-6">
          Let’s unpack some inflated myths: that all “sex offenders” are likely to
          reoffend quickly, that there’s “no curing” them, and that public registration is
          the sole safety tool. None of this holds up.
        </p>

        <p className="mt-6">
          The <strong>Bureau of Justice Statistics</strong> reported that of adult men
          released from state prison,{" "}
          <strong>5.3 percent were rearrested for a new rape or sexual assault within
          three years</strong>{" "}
          (
          <a
            className={linkCls}
            href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf"
            target="_blank"
            rel="noopener"
          >
            BJS Report 2019
          </a>
          ). Five-point-three. That is the figure that matters. It undermines the
          “inevitable re-offender” myth and frames realistic public-safety ambitions.
        </p>

        <p className="mt-6">
          If registration were as protective as claimed, you’d expect that 5.3 percent to
          shrink significantly. But it didn’t. Evaluations in{" "}
          <strong>New Jersey, South Carolina, and Minnesota</strong> found{" "}
          <strong>no statistically detectable reduction</strong> in sexual re-offense
          attributable to registration and community-notification efforts (
          <a
            className={linkCls}
            href="https://mn.gov/doc/assets/04-07_Sex_Offender_Report-Recidivism_tcm1089-272768.pdf"
            target="_blank"
            rel="noopener"
          >
            Minnesota DOC report
          </a>
          ).
        </p>

        <PullQuote>
          <strong>
            “Adding a public shaming list doesn’t make communities safer—it just makes
            rehabilitation harder.”
          </strong>
        </PullQuote>

        <p className="mt-6">
          Research from economists and policy analysts—including the{" "}
          <a
            className={linkCls}
            href="https://www.cato.org/commentary/do-sex-offender-registries-make-us-less-safe"
            target="_blank"
            rel="noopener"
          >
            Cato Institute
          </a>
          —warns that notification laws show <strong>no public-safety benefit</strong> and
          may <strong>raise risk</strong> by undermining housing and employment
          stability—the very protective factors that correlate with lower re-offense.
        </p>

        <p className="mt-6">
          The key policy judgment isn’t whether supervision and treatment reduce
          risk—they do. It’s whether adding mass public exposure—name, photo, address,
          lifetime label—adds anything. The answer is this: <strong>No.</strong>
        </p>

        <Divider label="Collateral Damage" />
<BandHeader
          title="What the Registry Does Instead: Collateral Harm and False Security"
          icon="⚠️"
        />

        <p className="mt-6">
          If a policy fails at prevention and doesn’t reduce repeat offences beyond
          existing supervision, what does it do? Public registries do two things:{" "}
          <strong>they harm</strong> and <strong>they distract</strong>.
        </p>

        <p className="mt-6">
          <strong>They harm.</strong> Publicly listing someone with a lifetime label
          produces predictable harms: locked-out apartments, homelessness, job loss,
          children bullied, spouses harassed. It also enables vigilantism.
        </p>

        <Callout variant="urgent" title="This isn’t just harassment; it’s deadly." icon="🚨">
          <p>
            In 2025, a California man used a public registry to locate a 71-year-old
            registrant—and murdered him (
            <a
              className={linkCls}
              href="https://www.latimes.com/california/story/2025-09-26/california-man-turned-vigilante-kills-child-sex-offender-charged-with-murder-police-allege"
              target="_blank"
              rel="noopener"
            >
              LA Times 2025
            </a>
            ).
          </p>
        </Callout>

        <p className="mt-6">
          These harms matter because they undermine the stability that protects against
          re-offense. Rather than supporting reintegration, they push people into
          isolation, instability, despair.
        </p>

        <p className="mt-6">
          <strong>They distract.</strong> The registry also channels public attention
          into browsing maps of names while the bigger safety work is ignored: education
          on consent, trauma-responsive services for survivors, robust screening in
          schools and youth programs, and early-intervention supports. Every dollar and
          minute spent updating a million-person website is a dollar and minute{" "}
          <strong>not</strong> spent deploying what we know works.
        </p>

        <PullQuote>
          <strong>
            “The registry looks like protection, but functions like theater.”
          </strong>
        </PullQuote>

        <p className="mt-6">It sells the appearance of vigilance but doesn’t produce it.</p>

        <Divider label="Reframing Safety" />

        <BandHeader
          title="Reframing Safety: What Works (and Why We Haven’t Done It)"
          icon="🧭"
        />

        <p className="mt-6">
          If the goal is fewer victims, policy must align with how sexual harm happens and
          how risk is reduced.
        </p>

        <ul className="list-disc pl-6 mt-6">
          <li>
            <strong>Prevent first-time harm.</strong> Because the next offense is most
            likely to be a first-time offense by a known person, prevention must go
            upstream: families, schools, youth teams, and congregations need
            evidence-based education on boundaries and consent, safe-reporting
            mechanisms, and active supervision.
          </li>
          <li className="mt-3">
            <strong>Stabilize those already convicted.</strong> For individuals under
            supervision, what works is risk assessment, targeted treatment, stable housing
            and employment, and focused monitoring—not public lifetime exposure.
          </li>
          <li className="mt-3">
            <strong>Retire what doesn’t add safety.</strong> Many nations maintain
            registries for law-enforcement, not public shaming, and achieve safety
            outcomes no worse than ours. America’s uniquely public model buys politics,
            not protection.
          </li>
        </ul>

        <PullQuote>
          <strong>
            “Real safety doesn’t come from maps of monsters—it comes from preventing harm
            before it starts.”
          </strong>
        </PullQuote>

        <p className="mt-6">
          This isn't about being soft—it’s about being smart. If a policy doesn’t prevent
          first-time abuse, doesn’t meaningfully reduce repeat offending, and undermines
          stability, then it’s not a safety policy—it’s a performance.
        </p>

        <Divider label="Public Perception" />

        <BandHeader
          title="A Hard Question for Those Who Still Believe 'I Want to Know Who’s Dangerous Nearby'"
          icon="❓"
        />

        <p className="mt-6">
          If knowing names and addresses is really protective, ask yourself: why don’t we
          publish <strong>registries for violent offenders, repeat DUI drivers,
          gun-possession felons, or major drug traffickers</strong>—especially when{" "}
          <strong>guns and accidents are the #1 and #2 causes of child death</strong> in
          America? If exposure equals safety, why stop at one category?
        </p>

        <p className="mt-6">
          Knowing an address may satisfy curiosity, but it doesn’t equal real-world
          protection. The person statistically most likely to harm your child isn’t the
          stranger down the block — it’s someone with <strong>access</strong>: in the
          home, the classroom, the team, the congregation.{" "}
          <strong>Maps don’t protect against proximity you already invited in.</strong>
        </p>

        <p className="mt-6">
          <strong>“But I want to know if someone dangerous lives nearby.”</strong>
          <br />
          Knowing an address may feel empowering—but it doesn’t make you safer.
        </p>

        <p className="mt-6">
          <strong>“Why not keep it if it could stop one crime?”</strong>
          <br />
          Because decades of data show it doesn’t—and it actively harms families.
          Safety-policy must be judged by outcomes, not intentions.
        </p>

        <p className="mt-6">
          <strong>“Some offenders really are dangerous.”</strong>
          <br />
          True—but law-enforcement already handles them via supervised release, GPS
          monitoring, risk-based conditions. That’s targeted safety. Public registries add
          stigma, not precision.
        </p>

        <p className="mt-6">
          <strong>“Isn’t public knowledge a deterrent?”</strong>
          <br />
          Studies say no. The same New York research that found{" "}
          <strong>95 percent of arrests were first-time offenders</strong> also found{" "}
          <strong>no deterrent effect</strong> from public notification. Shame doesn’t
          prevent crime; stability does.
        </p>

        <Divider label="The Bottom Line" />

        <BandHeader
          title="The Moral (and Practical) Bottom Line"
          icon="⚖️"
        />

        <p className="mt-6">
          The registry was built on a comforting story: that danger is “out there,”
          trackable, mappable, manageable by disclosure. The evidence shows otherwise.{" "}
          <strong>
            Most sexual abuse comes from people with access and trust. Most arrests involve
            first-time offenders.
          </strong>{" "}
          Among those already caught,{" "}
          <strong>
            public registration does not deliver additional reductions in sexual
            re-offense beyond what supervision and treatment already accomplish.
          </strong>{" "}
          Meanwhile,{" "}
          <strong>
            public labeling makes housing, work, and family stability harder
          </strong>
          —and those conditions are linked to <em>higher</em> risk, not lower.
        </p>

        <PullQuote>
          <strong>
            “If the registry cannot stop first-time offenders and does not reduce repeat
            offending beyond the tools we already have, what good is it?”
          </strong>
        </PullQuote>

        <p className="mt-6">
          The honest answer is: <strong>very little.</strong> The system has outlived its
          usefulness. The costs—financial, social, human—keep piling up. Children,
          families, and survivors deserve better than illusion. They deserve policies
          aligned with how harm actually happens and evaluated by whether they reduce it.
        </p>

        <Divider label="Data & Sources" />
<BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li>
            National count of registrants —{" "}
            <a
              className={linkCls}
              href="https://www.ojp.gov/sites/g/files/xyckuh241/files/archives/blogs-2018/2018-blog-smart-nsopw.htm"
              target="_blank"
              rel="noopener"
            >
              SMART Office blog
            </a>
          </li>
          <li>
            Victim-knower data —{" "}
            <a
              className={linkCls}
              href="https://rainn.org/statistics/perpetrators-sexual-violence"
              target="_blank"
              rel="noopener"
            >
              RAINN
            </a>
            ,{" "}
            <a
              className={linkCls}
              href="https://www.nsvrc.org/statistics"
              target="_blank"
              rel="noopener"
            >
              NSVRC
            </a>
          </li>
          <li>
            First-time offender data —{" "}
            <a
              className={linkCls}
              href="https://psycnet.apa.org/doi/10.1037/1076-8971.14.4.284"
              target="_blank"
              rel="noopener"
            >
              Sandler et al. 2008 PDF
            </a>
          </li>
          <li>
            Recidivism (5.3%) —{" "}
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf"
              target="_blank"
              rel="noopener"
            >
              BJS Report 2019 PDF
            </a>
          </li>
          <li>
            Minnesota recidivism and program report —{" "}
            <a
              className={linkCls}
              href="https://mn.gov/doc/assets/04-07_Sex_Offender_Report-Recidivism_tcm1089-272768.pdf"
              target="_blank"
              rel="noopener"
            >
              Minnesota DOC PDF
            </a>
          </li>
          <li>
            Policy analysis —{" "}
            <a
              className={linkCls}
              href="https://www.cato.org/commentary/do-sex-offender-registries-make-us-less-safe"
              target="_blank"
              rel="noopener"
            >
              Cato Institute: “Do Sex Offender Registries Make Us Less Safe?”
            </a>
          </li>
          <li>
            Vigilante murder case —{" "}
            <a
              className={linkCls}
              href="https://www.latimes.com/california/story/2025-09-26/california-man-turned-vigilante-kills-child-sex-offender-charged-with-murder-police-allege"
              target="_blank"
              rel="noopener"
            >
              LA Times 2025
            </a>
          </li>
        </ul>

        <Divider label="Related Reading" />

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/community-ties">
              Community Ties: Reentry and Local Support Networks
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/policy-harm">
              Policy Harm: When Laws Do More Damage Than Good
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/myth-vs-data">
              Myth vs. Data: The Real Numbers Behind Public Safety
            </Link>
          </li>
        </ul>

        <div className="mt-10">
          {/* Layout-provided ShareBar will render automatically */}
        </div>
      </article>
    </BlogLayout>
  );
}