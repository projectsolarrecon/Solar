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

export default function FollowTheMoneyPart3(): JSX.Element {
  return (
    <BlogLayout
      title="Shackled for Profit: How Surveillance Became the New Prison Wall"
      description="The rise of for-profit surveillance and electronic monitoring has created a new kind of incarceration—without bars, but with fees, data extraction, and endless control."
      keywords="mass incarceration, electronic monitoring, private prisons, GEO Group, surveillance capitalism, probation, reentry, prison reform"
      date="Oct 10, 2025"
      readTime="9 min"
      badge="📝 BLOG"
      lede="A black plastic cuff hums against your ankle — a reminder that freedom now comes with a monthly service plan. Step outside your geo-zone, let the battery die, or hit a rural dead spot, and a silent alarm goes off somewhere in a sheriff’s office or private call center."
    >
      <article className="prose prose-slate max-w-none">

        <Callout variant="info" title="TL;DR" icon="🔎">
          <p>
            The U.S. criminal justice system has quietly replaced steel bars with digital shackles. 
            Private vendors now run surveillance-as-a-service programs where the “clients” are the people being monitored. 
            What began as an alternative to incarceration has become a lucrative subscription model — punishment outsourced for profit. 
            Learn more in our series{" "}
            <Link className={linkCls} to="/blog/CashingInOnCaptivity">
              Cashing In on Captivity
            </Link>.
          </p>
        </Callout>

        <BandHeader title="🚨 The Prison Without Bars" icon="🔒" />
        <p>
          You’re out, but not free. A black plastic cuff hums against your ankle — a reminder that freedom now comes with a monthly service plan. 
        </p>
                <p className="mt-6">
          Step outside your “geo-zone,” let the battery die, or hit a rural dead spot, and a silent alarm goes off somewhere in a sheriff’s office or private call center.
        </p>
                <p className="mt-6">
          When you call the help line, a vendor representative — not a law-enforcement officer — tells you it’s “probably user error.” 
        </p>
                <p className="mt-6">
          This is the modern face of American punishment: the public duty of supervision <strong>outsourced</strong> to private companies whose shareholders expect growth. 
        </p>
                <p className="mt-6">
          Law enforcement is no longer a civic function; it’s a <strong>service contract</strong>, awarded to whoever promises the biggest savings and the smallest headlines.
        </p>

        <PullQuote>“Freedom now comes with a monthly service plan.”</PullQuote>

        <Divider label="Structural Incentives" />

        <BandHeader title="🏢 The Outsourced State" icon="🏢" />
        <p>
          Electronic monitoring is no longer a sideline of probation. It’s an <strong>industry.</strong> 
          Companies like <strong>BI Incorporated</strong> (owned by GEO Group), <strong>Attenti</strong>, and <strong>Satellite Tracking of People</strong> 
          have turned GPS surveillance into a multibillion-dollar business.
        </p>
        <Callout variant="research" title="Follow the Contracts" icon="📄">
          <p>
            In 2023, BI secured a <strong>$2.2 billion federal contract</strong> to monitor migrants under ICE’s 
            <em> Intensive Supervision Appearance Program</em>.{" "}
            <a
              className={linkCls}
              href="https://www.reuters.com/world/us/us-immigration-agency-extends-geo-groups-22-billion-surveillance-contract-2023-09-21/"
              target="_blank"
              rel="noopener"
            >
              (Reuters)
            </a>
          </p>
        </Callout>
        <p>
          The same hardware and software appear in probation and parole offices nationwide. 
          The government pays the vendors; the vendors bill the people wearing the shackles.
        </p>
                <p className="mt-6">
          Daily “user fees” average <strong>$5–$15</strong>, adding up to hundreds per month — more than many spend on food. 
          A missed payment is a violation. The punishment becomes self-funding.
        </p>
                <p className="mt-6">
          The{" "}
          <a
            className={linkCls}
            href="https://www.prisonpolicy.org/reports/supervision.html"
            target="_blank"
            rel="noopener"
          >
            Prison Policy Initiative
          </a>{" "}
          estimates that <em>hundreds of thousands</em> of Americans now live under electronic supervision — more than triple a decade ago. 
          Each one is a line item in someone’s quarterly earnings report.
        </p>

        <Divider label="Cost Illusion" />

        <BandHeader title="💸 The Myth of Savings" icon="💳" />
        <p>
          Politicians love to say GPS monitoring “saves money.” It does — for the prison system. 
          For the person wearing the monitor, it’s like being forced into a <strong>cell-phone contract that never ends and keeps raising its rates.</strong>
        </p>
        <Callout variant="warning" title="Audit Findings" icon="📊">
          <p>
            The{" "}
            <a
              className={linkCls}
              href="https://www.gao.gov/products/gao-22-104707"
              target="_blank"
              rel="noopener"
            >
              GAO
            </a>{" "}
            found that most monitoring programs are structured to shift costs to the individual while agencies tout “budget efficiency.” 
            A{" "}
            <a
              className={linkCls}
              href="https://www.auditor.illinois.gov/Audit-Reports/Performance-Audits/Electronic-Monitoring/EM-Perf-Full.pdf"
              target="_blank"
              rel="noopener"
            >
              2021 Illinois audit
            </a>{" "}
            found participants paying <strong>$300–$500 a month</strong> — often under contracts with minimum-device quotas.
          </p>
        </Callout>
        <p>
          The result is a perverse incentive: <strong>keep more people shackled to meet the contract’s quota.</strong> 
          It’s not rehabilitation — it’s customer retention.
        </p>

        <PullQuote>
          “This isn’t cost-cutting; it’s cost-laundering — the system keeping its balance sheets clean by charging the people it crushed.”
        </PullQuote>

        <p>
          When people can’t pay, the consequences cascade: rent slips, utilities lapse, jobs disappear, desperation grows. 
          Then come the “violations” for missed payments or curfew breaches, and the cycle restarts. 
          This isn’t cost-cutting. It’s <strong>cost-laundering</strong> — a moral shell game that hides public failure behind private invoices.
        </p>

        <Divider label="Data Economy" />

        <BandHeader title="🧠 Surveillance as a Service" icon="🧠" />
        <p>
          The new frontier isn’t hardware — it’s <strong>data.</strong>  
          Firms like <strong>Track Group</strong>, <strong>Calyx Intelligence</strong>, and <strong>Command Center 360</strong> now pitch “behavioral analytics” 
          that promise to predict recidivism or “risk escalation.” 
          No one can explain how it works, and no independent study has ever validated the claims.{" "}
          <a
            className={linkCls}
            href="https://www.aclu.org/report/predictive-policing-and-criminal-justice-technology"
            target="_blank"
            rel="noopener"
          >
            (ACLU, 2023)
          </a>
        </p>
                <p className="mt-6">
          Still, governments buy it. It sounds futuristic, and more importantly, it <strong>sounds cheap.</strong>
        </p>
        <Callout variant="info" title="Data Exploitation" icon="💾">
          <p>
            These systems collect and store massive troves of GPS coordinates, device pings, and metadata — sometimes for years. 
            Some vendors even reserve the right to sell “anonymized data” to “research partners.”{" "}
            <a
              className={linkCls}
              href="https://www.euractiv.com/section/data-protection/news/location-data-brokers-fail-to-protect-sensitive-information/"
              target="_blank"
              rel="noopener"
            >
              (Euractiv, 2022)
            </a>
          </p>
        </Callout>

        <PullQuote>“Freedom as a service. Data as collateral.”</PullQuote>

        <Divider label="Automation & Punishment" />

        <BandHeader title="⚙️ When the Algorithm Becomes the Judge" icon="⚙️" />
        <p>
          The tech is brittle, but the consequences are real. A 2021 study in{" "}
          <em>Criminology & Public Policy</em> found that{" "}
          <strong>technical violations — not new crimes — cause over half of re-incarcerations</strong> 
          for people on GPS monitoring.{" "}
          <a
            className={linkCls}
            href="https://onlinelibrary.wiley.com/doi/10.1111/1745-9133.12531"
            target="_blank"
            rel="noopener"
          >
            (Criminology & Public Policy, 2021)
          </a>
        </p>
                <p className="mt-6">
          False alerts, dead batteries, or cell dead zones all become “evidence” of noncompliance. 
          Every glitch creates paperwork — and paperwork means billable hours.
        </p>
        <Callout variant="urgent" title="Human Cost" icon="🚨">
          <p>
            People skip work to stay near outlets. Parents miss their kids’ games. A dropped signal becomes a police knock at the door. 
            Officers shrug and say, <em>“the computer flagged it.”</em>
          </p>
        </Callout>

        <PullQuote>“The device doesn’t just record behavior — it defines it.”</PullQuote>

        <Divider label="Recurring Revenue" />

        <BandHeader title="📈 The Business Model of Endless Guilt" icon="📈" />
        <p>
          GEO Group’s 2024 SEC filing calls BI Technologies’ community-supervision division a 
          <em> “growth engine with recurring revenue.” </em>
          <a
            className={linkCls}
            href="https://www.sec.gov/ix?doc=/Archives/edgar/data/923796/000092379624000012/geo-20231231.htm"
            target="_blank"
            rel="noopener"
          >
            (SEC 10-K, 2024)
          </a>
        </p>
                <p className="mt-6">
          That’s not a justice system. That’s a <strong>subscription model with people as the product.</strong>  
          The more fear you sell, the more budgets grow.
        </p>

        <PullQuote>“If incarceration is the warehouse, electronic supervision is the franchise.”</PullQuote>

        <Divider label="Infinite Sentences" />

        <BandHeader title="♾️ The Infinite Sentence" icon="♾️" />
        <p>
          For thousands under sex-offense supervision, there is no finish line. 
          Federal law — <strong>18 U.S.C. § 3583(k)</strong> — allows <strong>lifetime supervised release</strong> 
          for certain non-violent offenses. 
          State registries stack lifetime GPS monitoring on top of lifetime registration.{" "}
          <a
            className={linkCls}
            href="https://smart.ojp.gov/sorna/implementation-status"
            target="_blank"
            rel="noopener"
          >
            (SMART Office, 2025)
          </a>
        </p>
        <Callout variant="reminder" title="Perpetual Punishment" icon="⏳">
          <p>
            Every “upgrade” in technology becomes another reason to extend oversight. 
            “Smart” monitoring doesn’t reduce punishment; it <strong>institutionalizes</strong> it. 
            The product sold as an alternative to prison became a portable version of one.
          </p>
        </Callout>

        <Divider label="Ethics & Accountability" />

        <BandHeader title="⚖️ Closing: The Outsourcing of Conscience" icon="⚖️" />
        <p>
          Once upon a time, the state claimed the monopoly on punishment because it was bound — however imperfectly — by public accountability. 
          Now, punishment is subcontracted to corporations that answer to shareholders, not citizens.
        </p>
        <Callout variant="policy" title="Accountability Gap" icon="⚠️">
          <p>
            Law enforcement is <strong>not supposed to be a lowest-bidder industry.</strong>  
            But that’s exactly what it’s become — a market that profits from perpetual supervision, 
            from fear dressed up as technology, from lives converted into line items.
          </p>
        </Callout>
        <p>
          Every ping, every payment, every false alarm is revenue. And every year, the contract renews.
        </p>

        <PullQuote>
          “The ankle monitor doesn’t just track people — it tracks the moral decline of a nation that found a way to privatize even its conscience.”
        </PullQuote>

        <Divider label="Further Reading" />

        <BandHeader title="Data Sources" icon="📚" />
        <Callout variant="info" title="Primary Sources" icon="📘">
          <ul className="list-disc pl-6">
            <li>
              Reuters —{" "}
              <a className={linkCls} href="https://www.reuters.com/world/us/us-immigration-agency-extends-geo-groups-22-billion-surveillance-contract-2023-09-21/" target="_blank" rel="noopener">
                ICE Contract Extension, 2023
              </a>
            </li>
            <li>
              Prison Policy Initiative —{" "}
              <a className={linkCls} href="https://www.prisonpolicy.org/reports/supervision.html" target="_blank" rel="noopener">
                Mass Supervision Report, 2022
              </a>
            </li>
            <li>
              GAO Report 22-104707 —{" "}
              <a className={linkCls} href="https://www.gao.gov/products/gao-22-104707" target="_blank" rel="noopener">
                Federal Cost-Shift Analysis
              </a>
            </li>
            <li>
              Illinois Auditor General —{" "}
              <a className={linkCls} href="https://www.auditor.illinois.gov/Audit-Reports/Performance-Audits/Electronic-Monitoring/EM-Perf-Full.pdf" target="_blank" rel="noopener">
                Electronic Monitoring Audit, 2021
              </a>
            </li>
            <li>
              ACLU Report —{" "}
              <a className={linkCls} href="https://www.aclu.org/report/predictive-policing-and-criminal-justice-technology" target="_blank" rel="noopener">
                Predictive Policing and Criminal Justice Technology, 2023
              </a>
            </li>
            <li>
              Euractiv —{" "}
              <a className={linkCls} href="https://www.euractiv.com/section/data-protection/news/location-data-brokers-fail-to-protect-sensitive-information/" target="_blank" rel="noopener">
                Location Data Brokers Fail to Protect Sensitive Information, 2022
              </a>
            </li>
            <li>
              Criminology & Public Policy —{" "}
              <a className={linkCls} href="https://onlinelibrary.wiley.com/doi/10.1111/1745-9133.12531" target="_blank" rel="noopener">
                Technical Violations Study, 2021
              </a>
            </li>
            <li>
              SEC 10-K —{" "}
              <a className={linkCls} href="https://www.sec.gov/ix?doc=/Archives/edgar/data/923796/000092379624000012/geo-20231231.htm" target="_blank" rel="noopener">
                GEO Group Filing, 2024
              </a>
            </li>
            <li>
              SMART Office —{" "}
              <a className={linkCls} href="https://smart.ojp.gov/sorna/implementation-status" target="_blank" rel="noopener">
                SORNA Implementation Status, 2025
              </a>
            </li>
          </ul>
        </Callout>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/CommunityTies">
              Community Ties: Why Local Networks Matter After Incarceration
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/SurveillanceCapitalism">
              Surveillance Capitalism and the Carceral State
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/ReentryRealities">
              Reentry Realities: The Hidden Costs of “Freedom”
            </Link>
          </li>
        </ul>

      </article>
    </BlogLayout>
  );
}