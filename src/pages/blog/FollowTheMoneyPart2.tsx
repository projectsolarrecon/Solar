import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
} from "../../components/solar";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function FollowTheMoneyPart2(): JSX.Element {
  return (
    <BlogLayout
      title="Fees, Fines, and Families: The Hidden Cost of “Compliance”"
      description="Part 2 of the Follow the Money series exposes the hidden financial burden of sex-offense supervision — how compliance fees and private contracts trap families in cycles of debt."
      keywords="sex offense policy, supervision fees, fines, probation, polygraph, criminal justice, rehabilitation, Follow the Money series"
      date="Oct 5, 2025"
      readTime="13 min"
      badge="📝 BLOG"
      lede="When justice becomes subscription-based, freedom is never free. Part 2 follows the money into the pockets of those who profit from 'compliance.'"
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR" icon="💡">
          <p className="mt-6">
            Court-ordered supervision, treatment, and registration aren’t just
            punitive—they’re profitable. “Compliance” has become a
            multi-million-dollar economy, billed directly to the people least
            able to pay.{" "}
            <Link className={linkCls} to="/blog/follow-the-money-part1">
              Read Part 1
            </Link>{" "}
            for the origins of this system.
          </p>
        </Callout>

        <BandHeader title="🧾 Month One" icon="📄" />

        <p className="mt-6">
          Picture <strong>month one</strong> after release. You’re out.
          Technically.
        </p>

        <p className="mt-6">
          Your welcome-home packet lists conditions that read like a utility
          bill written by Kafka:
        </p>
        <ul className="list-disc pl-6 mt-6">
          <li>$50/month supervision fee</li>
          <li>$100 annual registration fee</li>
          <li>$200 for mandated “treatment”</li>
          <li>$75 per polygraph exam</li>
          <li>$30 for drug testing</li>
          <li>Plus whatever the court still says you owe</li>
        </ul>

        <p className="mt-6">
          You’re told these are for <em>“accountability.”</em> What they really
          are is <strong>revenue.</strong> Each agency takes its cut, and the
          more layers of “compliance” you have, the more stable everyone’s
          funding becomes—except yours. Miss a payment, miss a session, miss a
          test? You’re in violation. And a violation means overtime for
          officers, new billing for therapists, and another day in court.
        </p>

        <PullQuote>
          “Every dollar extracted from people trying to reenter society keeps
          someone else comfortably employed within it.”
        </PullQuote>

        <p className="mt-6">That’s how the cycle feeds itself.</p>

        <Divider label="Section 1" />

        <BandHeader
          title="💰 The User-Pays System: When Compliance Becomes a Commodity"
          icon="🪙"
        />

        <p className="mt-6">
          The National Institute of Justice calls it bluntly:
          <br />
          <em>
            “The costs of community supervision are increasingly shifted to
            those being supervised.”
          </em>{" "}
          (
          <a
            className={linkCls}
            href="https://nij.ojp.gov/library/publications/price-sex-offense-conviction-comparative-analysis-costs-community-supervision?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener"
          >
            NIJ, 2022
          </a>
          )
        </p>

        <p className="mt-6">
          Probation and parole offices don’t just monitor compliance—they{" "}
          <strong>monetize</strong> it. The Fines & Fees Justice Center’s{" "}
          <a
            className={linkCls}
            href="https://finesandfeesjusticecenter.org/articles/50-state-survey-probation-and-parole-fees/?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener"
          >
            50-state survey
          </a>{" "}
          shows that <em>47 states</em> authorize monthly supervision fees, plus
          add-ons for classes, counseling, and electronic monitoring.
        </p>

        <p className="mt-6">
          If your livelihood depends on collecting from the very people you’re
          supposed to help reintegrate, the incentive isn’t rehabilitation—it’s{" "}
          <strong>retention.</strong> The “success story” becomes the one who
          keeps paying. “Public safety” doubles as a business model.
        </p>

        <Divider label="Section 2" />

        <BandHeader
          title="🧠 Therapy, Polygraphs, and the Pseudoscience Economy"
          icon="🧩"
        />

        <p className="mt-6">
          Mandatory therapy sounds rehabilitative until you realize it’s also a{" "}
          <strong>cash crop.</strong> Most states require those convicted of
          sexual offenses to attend court-approved treatment programs—and to pay
          out of pocket.
        </p>

        <p className="mt-6">
          Group sessions often cost <strong>$25–$50 each</strong>, weekly, for
          years. Miss one? You’re noncompliant. Complain about quality? Find
          another provider—if your probation officer approves. These programs
          are rarely audited for efficacy, but religiously audited for payment.
        </p>

        <p className="mt-6">
          Then come the <strong>polygraphs</strong>—the most literal form of
          junk science with a federal résumé. Despite decades of criticism and
          no scientific consensus on accuracy (
          <a
            className={linkCls}
            href="https://nap.nationalacademies.org/catalog/10420/the-polygraph-and-lie-detection?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener"
          >
            National Academy of Sciences
          </a>
          ), polygraph testing remains baked into sex-offender treatment
          nationwide. Each exam costs hundreds, billed directly to the subject.
          Fail or refuse one, and you risk a violation—even when “failure” means
          nothing more than a spike in your pulse.
        </p>

        <p className="mt-6">
          Add <strong>drug testing</strong>, <strong>psych evaluations</strong>,
          and <strong>digital-use monitoring</strong>, and suddenly “treatment”
          looks less like rehabilitation and more like an{" "}
          <strong>industry</strong>—an assembly line of private vendors with
          guaranteed customers and state-backed collection.
        </p>

        <p className="mt-6">
          The <em>USSC Primer on Sex Offense Register</em> confirms that under
          federal law, sex-offense supervised release can extend{" "}
          <em>up to life.</em>{" "}
          (
          <a
            className={linkCls}
            href="https://www.ussc.gov/sites/default/files/pdf/training/primers/2016_Primer_Sex_Offense_Register.pdf?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener"
          >
            USSC, 2016
          </a>
          )
        </p>

        <Divider label="Section 3" />

        <BandHeader
          title="🔄 Supervision for Sale: The Never-Ending Sentence"
          icon="♾️"
        />

        <p className="mt-6">
          Supervision itself has become a <strong>product.</strong> As early as
          the 1980s, probation departments discovered they could supplement
          budgets through “offender-funded” fees.{" "}
          (
          <a
            className={linkCls}
            href="https://www.uscourts.gov/sites/default/files/76_1_7_0.pdf?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener"
          >
            U.S. Courts Policy Study
          </a>
          )
        </p>

        <p className="mt-6">
          By now, that logic has metastasized: longer supervision equals more
          months to bill. Some states even authorize revocation or extended
          supervision for nonpayment—meaning{" "}
          <strong>poverty itself becomes criminal.</strong>
        </p>

        <p className="mt-6">
          And for thousands of people, the meter never stops running. Under{" "}
          <strong>18 U.S.C. § 3583(k)</strong>, individuals convicted of certain
          non-violent sex offenses can be sentenced to{" "}
          <strong>lifetime supervised release.</strong>{" "}
          (
          <a
            className={linkCls}
            href="https://www.ussc.gov/sites/default/files/pdf/training/primers/2024_Primer_Supervised_Release.pdf?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener"
          >
            USSC Primer 2024
          </a>
          )
        </p>

        <p className="mt-6">
          Meanwhile, lifetime registration is required in many states even for
          low-level or non-contact offenses.{" "}
          (
          <a
            className={linkCls}
            href="https://smart.ojp.gov/sorna/implementation-status?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener"
          >
            SMART Office State Summaries
          </a>
          )
        </p>

        <PullQuote>
          “There’s no parole from the paperwork, no end date to the fees. The
          sentence ends; the billing cycle doesn’t.”
        </PullQuote>

        <Divider label="Section 4" />

        <BandHeader
          title="🏚️ Collateral Damage: When the Bill Comes Due"
          icon="🏠"
        />

        <p className="mt-6">
          Every dollar squeezed from a probationer comes from somewhere
          else—a kid’s backpack, an empty pantry, a missed rent payment.
        </p>

        <p className="mt-6">
          Families refinance cars to pay for treatment. Parents pick up second
          jobs to cover supervision fees. Partners work double shifts to pay
          registry renewals that, in some states, are{" "}
          <strong>mandatory for life.</strong>
        </p>

        <p className="mt-6">
          The NIJ notes that the <em>“economic precarity”</em> of those under
          sex-offense supervision <em>“further amplifies the costs of
          punishment.”</em>{" "}
          (
          <a
            className={linkCls}
            href="https://nij.ojp.gov/library/publications/price-sex-offense-conviction-comparative-analysis-costs-community-supervision?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener"
          >
            NIJ, 2022
          </a>
          )
        </p>

        <p className="mt-6">
          We’re not excusing the harm that led to these convictions. But it’s
          impossible to ignore how the system’s financial architecture depends
          on <strong>perpetual guilt</strong>—both moral and monetary. The
          moment someone tries to move on, the invoices start rolling in.
        </p>

        <p className="mt-6">
          This isn’t rehabilitation; it’s <strong>indentured compliance</strong>
          —a structure that ensures the “customer” can never graduate.
        </p>

        <Divider label="Closing" />

        <BandHeader
          title="⚖️ Closing the Loop: The Business of Perpetual Control"
          icon="⚖️"
        />

        <p className="mt-6">
          The genius of the modern sex-offense economy isn’t that it punishes—it’s
          that it <strong>bills</strong> for punishment.
        </p>

        <p className="mt-6">
          Every link in the chain—from probation office to therapy group to
          polygraph vendor—extracts its margin and calls it{" "}
          <em>accountability.</em> The government funds it, private industry
          services it, and families finance it. Reform threatens everyone’s
          revenue stream.
        </p>

        <p className="mt-6">
          So the system doesn’t need to conspire—it only needs to keep running.
          People cycle in and out, paying at every stage. For the rest of us,
          it’s easy to believe this is about “safety.” For those trapped inside,
          it’s obvious what it really is:{" "}
          <strong>a subscription model for state control.</strong>
        </p>

        <p className="mt-6">
          Next:{" "}
          <Link className={linkCls} to="/blog/follow-the-money-part3">
            Part 3 — Shackled for Profit
          </Link>
          , where we’ll follow the ankle monitors, software contracts, and
          surveillance lobby that turned “public safety” into a booming tech
          sector.
        </p>

        <Divider label="References" />

        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6 mt-6">
          <li>
            NIJ (2022) —{" "}
            <a
              className={linkCls}
              href="https://nij.ojp.gov/"
              target="_blank"
              rel="noopener"
            >
              National Institute of Justice
            </a>
          </li>
          <li>
            USSC Primers —{" "}
            <a
              className={linkCls}
              href="https://www.ussc.gov/"
              target="_blank"
              rel="noopener"
            >
              United States Sentencing Commission
            </a>
          </li>
          <li>
            Fines & Fees Justice Center —{" "}
            <a
              className={linkCls}
              href="https://finesandfeesjusticecenter.org/"
              target="_blank"
              rel="noopener"
            >
              https://finesandfeesjusticecenter.org
            </a>
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6 mt-6">
          <li>
            <Link className={linkCls} to="/blog/follow-the-money">
              Follow the Money: Part 1
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/community-ties">
              Community Ties
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/legislative-advocacy">
              Legislative Advocacy Guide
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}