import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "../../components/layouts/GuideLayout";
import {
  SectionBand,
  SectionCard,
  Callout,
  Divider,
  TOC,
  Checklist,
} from "../../components/solar";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function PrisonCommunicationMailVisitsMonitoring(): JSX.Element {
  return (
    <GuideLayout
      title="Prison Communication, Mail, Visits & Monitoring"
      description="A comprehensive, real-world guide to how communication actually works—and how to navigate it safely, especially in sex-offense cases."
      keywords="prison communication rules, jail phone monitoring, TRULINCS messaging, sex offense incarceration communication, prison mail rules"
      date="Apr 12, 2026"
      readTime="20 min"
      badge="📘 RESOURCE GUIDE"
      lede="A practical, plain-language guide to how communication really works—and how to protect yourself and your family while staying connected."
      showTOC={true}
    >
      <div className="mb-6">
        <TOC />
      </div>

      {/* ========================= */}
      {/* START HERE */}
      {/* ========================= */}

      <SectionBand title="Start Here" emblem="🧭" />
      <SectionCard>
        <p>
          Communication during incarceration is one of the most confusing—and emotionally loaded—parts of the entire process.
        </p>

        <p>
          Calls don’t go through. Messages disappear. Mail takes weeks. Rules change without warning. And almost no one explains why.
        </p>

        <Callout variant="info" title="If this feels overwhelming, that’s normal" icon="🔵">
          Most of what feels personal is actually systemic. Delays, silence, and restrictions are usually about the system—not the relationship.
        </Callout>

        <p className="mt-4">
          This guide will help you understand:
        </p>

        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>How communication changes across custody stages</li>
          <li>What is actually monitored—and how seriously</li>
          <li>How sex-offense cases change the way rules are applied</li>
          <li>What families should expect (and not panic about)</li>
          <li>How to communicate safely without shutting down connection</li>
        </ul>
      </SectionCard>

      {/* ========================= */}
      {/* QUICK REALITY */}
      {/* ========================= */}

      <SectionBand title="Quick Reality Check" emblem="⚠️" />
      <SectionCard>
        <Checklist
          id="quick-rules"
          items={[
            { id: "1", label: <>Assume all communication is monitored</> },
            { id: "2", label: <>Rules depend on location—not the case itself</> },
            { id: "3", label: <>Silence during transfers is normal</> },
            { id: "4", label: <>What you say can be misunderstood later</> },
            { id: "5", label: <>Consistency matters more than intensity</> },
          ]}
        />

        <Callout variant="warning" title="The core truth" icon="🟡">
          This system is built for monitoring and control—not communication. Everything makes more sense once you accept that.
        </Callout>
      </SectionCard>

      {/* ========================= */}
      {/* STAGES */}
      {/* ========================= */}

      <SectionBand title="How Communication Changes by Stage" emblem="🔄" />
      <SectionCard>
        <h3 className="font-semibold">Pretrial (Local Jail)</h3>
        <p>
          Most restrictive and unpredictable. Limited access, heavy monitoring, inconsistent systems.
        </p>

        <h3 className="mt-4 font-semibold">Transfer / Holdover</h3>
        <p>
          Communication often disappears entirely for periods of time.
        </p>

        <h3 className="mt-4 font-semibold">Final Facility (BOP)</h3>
        <p>
          More structured systems (TRULINCS, scheduled calls), but still monitored.
        </p>

        <Callout variant="info" title="What this means for families" icon="🔵">
          Silence—especially during transfers—is extremely common. It usually reflects movement, not avoidance.
        </Callout>
      </SectionCard>

      {/* ========================= */}
      {/* MONITORING */}
      {/* ========================= */}

      <SectionBand title="Monitoring: What Actually Happens" emblem="👁️" />
      <SectionCard>
        <p>
          Nearly all communication is monitored, stored, or reviewable.
        </p>

        <h3 className="mt-4 font-semibold">What people get wrong</h3>
        <p>
          People assume monitoring only matters for obvious wrongdoing. In reality, context and interpretation matter just as much.
        </p>

        <Callout variant="urgent" title="The real rule" icon="🔴">
          Assume anything you say can be taken out of context, misunderstood, or revisited later.
        </Callout>
      </SectionCard>

      {/* ========================= */}
      {/* CASE DISCUSSION */}
      {/* ========================= */}

      <SectionBand title="Talking About the Case (Nuanced Reality)" emblem="⚖️" />
      <SectionCard>
        <p>
          “Never talk about the case” is common advice—but it’s incomplete.
        </p>

        <h3 className="mt-4 font-semibold">Pretrial (highest risk)</h3>
        <p>
          Avoid discussing facts, allegations, or strategy entirely on monitored communication.
        </p>

        <h3 className="mt-4 font-semibold">Later stages</h3>
        <p>
          Some level of honesty may happen—but must be controlled.
        </p>

        <h3 className="mt-4 font-semibold">Safe boundaries</h3>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>No new admissions</li>
          <li>No contradictions of legal record</li>
          <li>No emotionally charged rehashing of events</li>
        </ul>

        <Callout variant="warning" title="Better question to ask" icon="🟡">
          Not “can we talk about it?”  
          But “can this be misunderstood, repeated, or used later?”
        </Callout>

        <h3 className="mt-4 font-semibold">What you *can* talk about</h3>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Emotional reality</li>
          <li>Support and stability</li>
          <li>Future plans and goals</li>
          <li>Family connection</li>
        </ul>
      </SectionCard>

      {/* ========================= */}
      {/* SEX OFFENSE SPECIFIC */}
      {/* ========================= */}

      <SectionBand title="Sex-Offense Case Realities" emblem="🚨" />
      <SectionCard>
        <p>
          Written policies may be the same—but real-world enforcement often isn’t.
        </p>

        <h3 className="mt-4 font-semibold">What changes in practice</h3>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>More conservative interpretation of communication</li>
          <li>Higher sensitivity around content</li>
          <li>Closer scrutiny of patterns and tone</li>
        </ul>

        <Callout variant="urgent" title="Key reality" icon="🔴">
          The same message may be interpreted differently depending on the case type.
        </Callout>

        <h3 className="mt-4 font-semibold">Topics to handle carefully</h3>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Anything involving minors</li>
          <li>Sexual or relationship content</li>
          <li>Detailed discussion of offense conduct</li>
        </ul>
      </SectionCard>

      {/* ========================= */}
      {/* FAMILY SECTION */}
      {/* ========================= */}

      <SectionBand title="For Families & Loved Ones" emblem="🏠" />
      <SectionCard>
        <p>
          Families often feel like they are walking a tightrope—trying to support someone while avoiding saying the wrong thing.
        </p>

        <h3 className="mt-4 font-semibold">Common reactions</h3>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Fear of communication</li>
          <li>Overcorrection into silence</li>
          <li>Emotional conversations that escalate risk</li>
        </ul>

        <Callout variant="info" title="Better approach" icon="🔵">
          You don’t need to choose between silence and risk. You need structure.
        </Callout>

        <h3 className="mt-4 font-semibold">What helps</h3>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Consistency over intensity</li>
          <li>Calm communication</li>
          <li>Clear boundaries</li>
        </ul>
      </SectionCard>

      {/* ========================= */}
      {/* MINORS */}
      {/* ========================= */}

      <SectionBand title="Minors, Children & Sensitivity" emblem="👶" />
      <SectionCard>
        <p>
          Communication involving children can become one of the most sensitive areas in sex-offense cases.
        </p>

        <Callout variant="warning" title="Important" icon="🟡">
          Even well-intentioned communication about children may be viewed more cautiously.
        </Callout>

        <p className="mt-4">
          This includes:
        </p>

        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Letters mentioning children</li>
          <li>Phone calls involving children</li>
          <li>Visit requests involving minors</li>
        </ul>

        <p className="mt-4">
          Always verify rules before assuming something is allowed.
        </p>
      </SectionCard>

      {/* ========================= */}
      {/* STRATEGY */}
      {/* ========================= */}

      <SectionBand title="Communication Strategy" emblem="🧠" />
      <SectionCard>
        <h3 className="font-semibold">For the incarcerated person</h3>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Stay consistent</li>
          <li>Avoid testing boundaries</li>
          <li>Think long-term</li>
        </ul>

        <h3 className="mt-4 font-semibold">For families</h3>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Expect inconsistency</li>
          <li>Don’t take silence personally</li>
          <li>Focus on stability</li>
        </ul>

        <Callout variant="reminder" title="Best overall approach" icon="🟡">
          Lower drama = lower risk = more consistent communication over time.
        </Callout>
      </SectionCard>

      {/* ========================= */}
      {/* CHECKLIST */}
      {/* ========================= */}

      <SectionBand title="Quick Checklist" emblem="✅" />
      <SectionCard>
        <Checklist
          id="communication-checklist"
          items={[
            { id: "1", label: <>Assume monitoring</> },
            { id: "2", label: <>Avoid risky topics</> },
            { id: "3", label: <>Stay consistent</> },
            { id: "4", label: <>Expect delays</> },
            { id: "5", label: <>Verify facility rules</> },
          ]}
        />
      </SectionCard>

      {/* ========================= */}
      {/* RELATED */}
      {/* ========================= */}

      <SectionBand title="Related Guides" emblem="🔗" />
      <SectionCard>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link className={linkCls} to="/resources/children-disclosure-toolkit">
              Children & Disclosure Toolkit
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/reentry-checklist">
              Reentry Checklist
            </Link>
          </li>
        </ul>
      </SectionCard>

    </GuideLayout>
  );
}