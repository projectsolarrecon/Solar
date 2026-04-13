import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "../../components/layouts/GuideLayout";
import {
  SectionBand,
  SectionCard,
  Callout,
  TOC,
  Divider,
} from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function PrisonCommunicationMailVisitsMonitoring(): JSX.Element {
  return (
    <GuideLayout
      title="Prison Communication, Mail, Visits & Monitoring"
      description="How communication actually works from pretrial detention through final incarceration—what changes at each stage, how federal and state systems differ, and what families need to know about monitoring, restrictions, and sex-offense-specific scrutiny."
      keywords="prison communication, prison mail rules, prison visits, prison phone calls, TRULINCS, BOP visiting, pretrial detention, US Marshals custody, incarceration guide"
      date="Apr 12, 2026"
      readTime="14 min"
      badge="📘 RESOURCE GUIDE"
      lede="A plain-language guide to how mail, calls, messaging, and visits really work in custody—especially when a person moves from pretrial detention to transport to a long-term facility."
      showTOC={true}
    >
      <div className="mb-6">
        <TOC />
      </div>

      <SectionBand
        title="Why This Guide Exists"
        subtitle="Communication rules are not one system"
        emblem="📬"
      />
      <SectionCard>
        <h2>Why This Guide Exists</h2>
        <p>
          Most people assume there is one set of prison communication rules. There
          is not.
        </p>
        <p>Communication depends on who has custody, where the person is housed, what stage of the case they are in, and how that facility implements its own policies.</p>
        <p>
          In federal cases especially, one person may move from local detention under{" "}
          <a
            className={linkCls}
            href="https://www.usmarshals.gov/what-we-do/prisoners"
            target="_blank"
            rel="noopener"
          >
            U.S. Marshals Service custody
          </a>{" "}
          to transfer or holdover movement, and then into a final{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/inmates/communications.jsp"
            target="_blank"
            rel="noopener"
          >
            Bureau of Prisons communication system
          </a>
          . Those are not the same thing.
        </p>
        <Callout variant="info" title="Key Reality" icon="🔵">
          The same person can experience multiple communication systems within a
          single case, and the rules can change with almost no warning.
        </Callout>
      </SectionCard>

      <SectionBand
        title="How Jurisdiction Changes Everything"
        subtitle="Federal, state, and local systems do not run the same way"
        emblem="⚖️"
      />
      <SectionCard>
        <h2>How Jurisdiction Changes Everything</h2>
        <p>
          In federal cases, pretrial detention is usually managed by the{" "}
          <a
            className={linkCls}
            href="https://www.usmarshals.gov/what-we-do/prisoners"
            target="_blank"
            rel="noopener"
          >
            U.S. Marshals Service
          </a>
          , and many detainees are housed in state, local, or contract facilities
          rather than in a final BOP prison. The Marshals state that they are
          responsible for confinement and transport until acquittal or delivery to
          the Bureau of Prisons. That distinction matters because the place where a
          person is physically housed usually controls the day-to-day communication
          rules.
        </p>
        <p>
          State systems are different. A state Department of Corrections sets its
          own communication rules, chooses its own vendors, and implements its own
          approval process. County and local jails are often even less predictable,
          especially in pretrial detention, because staff discretion and local
          practice can shape what communication actually looks like.
        </p>
        <Callout variant="warning" title="What Families Miss" icon="🟡">
          The facility—not the courtroom label—is what usually determines your
          day-to-day communication reality.
        </Callout>
      </SectionCard>

      <SectionBand
        title="The Three Stages of Custody"
        subtitle="Why communication changes as a case moves"
        emblem="🔄"
      />
      <SectionCard>
        <h2>The Three Stages of Custody</h2>
        <h3>1. Pretrial Detention</h3>
        <p>
          This is usually the most confusing phase. In federal cases, people are
          commonly held in local or contract detention under Marshals custody, not
          in the standardized BOP communication environment. The federal detention
          standards require access to telephones, mail inspection, and visitation
          procedures, but the practical experience still depends heavily on the
          facility running the unit.
        </p>
        <p>
          That means families often hear “federal case” and expect “federal prison
          rules,” when the real answer is local jail rules under federal custody.
        </p>

        <h3>2. Transfer and Holdover</h3>
        <p>
          This is the most disruptive phase. Court transport, holdovers, and
          movement between institutions commonly interrupt calls, messaging, mail,
          and approved contact continuity. Silence during transport is common and
          is not, by itself, evidence that something has gone wrong.
        </p>
        <Callout variant="info" title="During Transfer" icon="🔵">
          Silence during transfer is common. The system—not the person—is usually
          the cause.
        </Callout>

        <h3>3. Final Facility</h3>
        <p>
          Once a person reaches a long-term facility, communication usually becomes
          more stable. In the federal system that can include phone access,
          approved visiting lists, and TRULINCS electronic messaging through the{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/inmates/communications.jsp"
            target="_blank"
            rel="noopener"
          >
            BOP’s Community Ties system
          </a>
          .
        </p>
      </SectionCard>

      <SectionBand
        title="What Stays True Almost Everywhere"
        subtitle="Monitoring is the baseline, not the exception"
        emblem="👁️"
      />
      <SectionCard>
        <h2>What Stays True Almost Everywhere</h2>
        <p>
          Across federal, state, and local systems, some things are consistently
          true: communication is monitored, approvals matter, delays are normal,
          and staff discretion can change the lived reality fast.
        </p>
        <p>
          The BOP states that phone calls are monitored, TRULINCS messages are
          screened, and mail is inspected under its communication policies and
          correspondence rules.
        </p>
        <Callout variant="urgent" title="Assume Monitoring" icon="🔴">
          Anything you say in ordinary mail, on most calls, or through institutional
          messaging can surface later in discipline, investigation, or litigation.
        </Callout>
      </SectionCard>

      <SectionBand
        title="What Varies Between Systems"
        subtitle="The details that change from place to place"
        emblem="🧭"
      />
      <SectionCard>
        <h2>What Varies Between Systems</h2>
        <p>
          Technology varies. Some places offer tablets and messaging systems. Others
          still rely mostly on phones and mail.
        </p>
        <p>
          Costs vary. Approval systems vary. Some facilities scan or copy mail.
          Others still deliver originals. Some institutions lean heavily on video
          visits, while others prioritize in-person visiting or restrict it more
          tightly.
        </p>
        <p>
          Minor-contact rules also vary sharply by facility and by case type. This
          is one of the least uniform parts of the system.
        </p>
      </SectionCard>

      <SectionBand
        title="Mail"
        subtitle="Treat every letter like staff may read it"
        emblem="✉️"
      />
      <SectionCard>
        <h2>Mail</h2>
        <p>
          Mail is usually opened and inspected, and in some systems it is scanned,
          copied, or delayed for review. In BOP correspondence policy, non-special
          outgoing mail from a pretrial inmate may not be sealed by the inmate and
          may be read and inspected by staff.
        </p>
        <p>
          That should shape how people write. Emotional escalation, sexual content,
          case details, or language that can be misread are all obvious risk areas.
        </p>
        <Callout variant="privacy" title="Letter-Writing Rule" icon="🟣">
          Write every letter assuming staff may read it.
        </Callout>
      </SectionCard>

      <SectionBand
        title="Phone Calls"
        subtitle="Useful, but not private"
        emblem="☎️"
      />
      <SectionCard>
        <h2>Phone Calls</h2>
        <p>
          In the federal system, phone privileges exist to maintain community ties,
          but the BOP expressly states that calls are monitored, with limited
          exceptions for attorney calls in certain circumstances. Approved-number
          systems and institutional restrictions are normal.
        </p>
        <p>
          The biggest mistake is treating calls like private conversation. They are
          not.
        </p>
        <Callout variant="urgent" title="Phone Safety Rule" icon="🔴">
          Never discuss your case, charges, allegations, or sensitive strategy on
          an ordinary monitored call.
        </Callout>
      </SectionCard>

      <SectionBand
        title="Messaging and Tablets"
        subtitle="It is not normal email"
        emblem="💻"
      />
      <SectionCard>
        <h2>Messaging and Tablets</h2>
        <p>
          Many families hear “email” and assume open internet access. That is not
          how federal messaging works. The BOP states that TRULINCS users do not
          get internet access, contacts must consent, messages are monitored, and
          attachments are not delivered in the ordinary way.
        </p>
        <p>
          Written communication is often easier for staff to archive, search, and
          review later than a phone call.
        </p>
        <Callout variant="info" title="TRULINCS Reality" icon="🔵">
          Messaging is convenient, but it is controlled, permanent, and reviewable.
        </Callout>
      </SectionCard>

      <SectionBand
        title="Visits"
        subtitle="Approval, identification, supervision"
        emblem="🪪"
      />
      <SectionCard>
        <h2>Visits</h2>
        <p>
          In the BOP, visitors must generally be placed on an approved visiting
          list before they can visit. The agency also requires visitors to review
          local rules, follow dress standards, and expect screening and oversight.
        </p>
        <p>
          Visits can be denied, delayed, shortened, or limited by local procedures,
          housing status, staffing, security concerns, or transfer timing. Physical
          contact may be limited even when visits are allowed.
        </p>
      </SectionCard>

      <SectionBand
        title="Sex-Offense Case Considerations"
        subtitle="Same written rules, stricter enforcement"
        emblem="🚨"
      />
      <SectionCard>
        <h2>Sex-Offense Case Considerations</h2>
        <p>
          This is where communication rules are often enforced more conservatively.
          Even when written policy is neutral, monitoring decisions can become more
          cautious in practice.
        </p>
        <h3>Minor Contact</h3>
        <p>
          Under BOP visiting regulations, inmates identified as having a Walsh Act
          assignment involving a minor have that status noted in the visiting
          program, and their visits may be closely monitored under procedures set
          locally by the warden.
        </p>
        <p>
          In practice, that can mean tighter scrutiny, extra approval requirements,
          restrictions on minor contact, or denials that families did not expect.
        </p>
        <p>
          Topics involving relationships, minors, sexual content, or case details
          are especially sensitive in communication review.
        </p>
        <Callout variant="urgent" title="Case-Specific Scrutiny" icon="🔴">
          The same communication may be interpreted more strictly depending on the
          case, the facility, and who is reviewing it.
        </Callout>
      </SectionCard>

      <SectionBand
        title="Communication Strategy"
        subtitle="Lower drama, lower risk"
        emblem="🧠"
      />
      <SectionCard>
        <h2>Communication Strategy</h2>
        <h3>For the incarcerated person</h3>
        <p>
          Keep communication consistent, neutral, and low-risk. Avoid emotional
          escalation. Avoid detailed case discussion. Avoid trying to test limits.
        </p>

        <h3>For family and friends</h3>
        <p>
          Expect delays. Do not assume silence is personal. Keep messages simple,
          supportive, and clean. Consistency matters more than intensity.
        </p>

        <Callout variant="reminder" title="Best Family Approach" icon="🟡">
          Consistency matters more than length or frequency.
        </Callout>

        <Divider label="Related practical guides" />

        <p>
          Families dealing with the money side of incarceration should also read the{" "}
          <Link className={linkCls} to="/resources/financial-planning-guide">
            Financial Planning Guide
          </Link>
          . For release planning, start with the{" "}
          <Link className={linkCls} to="/resources/reentry-checklist">
            Reentry Checklist
          </Link>
          . For what changes after release or when crossing systems, use{" "}
          <Link className={linkCls} to="/resources/state-registry">
            Registry Rules by State
          </Link>
          .
        </p>
      </SectionCard>

      <SectionBand
        title="Common Mistakes and How to Find the Real Rules"
        subtitle="General guidance is not enough"
        emblem="🛑"
      />
      <SectionCard>
        <h2>Common Mistakes</h2>
        <ul className="list-disc pl-6">
          <li>Discussing case details on monitored calls.</li>
          <li>Sending risky or easily misread content.</li>
          <li>Trying to bypass restrictions through third parties.</li>
          <li>Letting someone else use an account, number, or contact setup.</li>
          <li>Assuming privacy where none exists.</li>
        </ul>

        <h2>How to Find Your Facility’s Rules</h2>
        <ol className="list-decimal pl-6">
          <li>Identify who has custody.</li>
          <li>Identify the exact facility.</li>
          <li>Check the official source for that facility.</li>
        </ol>
        <p>
          Federal prison rules usually start at{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov"
            target="_blank"
            rel="noopener"
          >
            bop.gov
          </a>
          . Federal pretrial questions often start with the facility and{" "}
          <a
            className={linkCls}
            href="https://www.usmarshals.gov/what-we-do/prisoners"
            target="_blank"
            rel="noopener"
          >
            the U.S. Marshals Service
          </a>
          . State cases usually require the state DOC. Jail cases usually require
          the county sheriff or jail website.
        </p>
        <Callout variant="info" title="Final Authority" icon="🔵">
          The facility’s official website is the final authority—not general advice,
          not social media, and not what another family experienced somewhere else.
        </Callout>
      </SectionCard>

      <SectionBand
        title="Final Reminders"
        subtitle="Understanding the system is protection"
        emblem="🧩"
      />
      <SectionCard>
        <h2>Final Reminders</h2>
        <p>
          Communication systems are built for monitoring, not privacy. Rules change
          with custody status, physical location, and local implementation.
          Violations can affect privileges, housing, discipline, and sometimes
          release planning.
        </p>
        <Callout variant="reminder" title="Bottom Line" icon="🟡">
          Understanding the system is not paranoia. It is protection.
        </Callout>
      </SectionCard>

      <SectionBand title="Data Sources" emblem="📚" />
      <SectionCard>
        <h2>Data Sources</h2>
        <ul className="list-disc pl-6">
          <li>
            U.S. Marshals Service —{" "}
            <a
              className={linkCls}
              href="https://www.usmarshals.gov/what-we-do/prisoners"
              target="_blank"
              rel="noopener"
            >
              Custody of Prisoners
            </a>
          </li>
          <li>
            U.S. Marshals Service —{" "}
            <a
              className={linkCls}
              href="https://www.usmarshals.gov/sites/default/files/media/document/federal-performance-based-detention-standards-12.pdf"
              target="_blank"
              rel="noopener"
            >
              Federal Performance-Based Detention Standards Handbook
            </a>
          </li>
          <li>
            Federal Bureau of Prisons —{" "}
            <a
              className={linkCls}
              href="https://www.bop.gov/inmates/communications.jsp"
              target="_blank"
              rel="noopener"
            >
              Community Ties / Communications
            </a>
          </li>
          <li>
            Federal Bureau of Prisons —{" "}
            <a
              className={linkCls}
              href="https://www.bop.gov/policy/progstat/5265_011.pdf"
              target="_blank"
              rel="noopener"
            >
              Program Statement 5265.11, Correspondence
            </a>
          </li>
          <li>
            Federal Bureau of Prisons —{" "}
            <a
              className={linkCls}
              href="https://www.bop.gov/policy/progstat/5265_013.pdf"
              target="_blank"
              rel="noopener"
            >
              Program Statement 5265.12, TRULINCS Electronic Messaging
            </a>
          </li>
          <li>
            Federal Bureau of Prisons —{" "}
            <a
              className={linkCls}
              href="https://www.bop.gov/inmates/visiting.jsp"
              target="_blank"
              rel="noopener"
            >
              How to Visit a Federal Inmate
            </a>
          </li>
          <li>
            Federal Bureau of Prisons —{" "}
            <a
              className={linkCls}
              href="https://www.bop.gov/policy/progstat/5267_09.pdf"
              target="_blank"
              rel="noopener"
            >
              Program Statement 5267.09, Visiting Regulations
            </a>
          </li>
        </ul>
      </SectionCard>

     <SectionBand title="Related Reading" emblem="🔗" />
      <SectionCard>
        <h2>Related Reading</h2>
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/resources/financial-planning-guide">
              Financial Planning Guide
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/reentry-checklist">
              Reentry Checklist
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/state-registry">
              Registry Rules by State
            </Link>
          </li>
        </ul>
      </SectionCard>
    </GuideLayout>
  );
}