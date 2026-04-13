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

<SectionBand
  title="Start Here"
  subtitle="What’s actually happening—and what matters most"
  emblem="🧭"
/>
<SectionCard>
  <p>
    Communication during incarceration is one of the most confusing—and emotionally loaded—parts of the entire process.
  </p>

  <p>
    Calls don’t go through. Messages disappear. Mail takes weeks. Rules change without warning. And almost none of it is explained clearly.
  </p>

  <Callout variant="info" title="If this feels chaotic, that’s normal" icon="🔵">
    What feels personal is usually procedural. Most communication problems are driven by the system—not the relationship.
  </Callout>

  <Divider label="What this guide actually helps you do" />

  <ul className="list-disc pl-6 space-y-2">
    <li>Understand why communication changes depending on location</li>
    <li>Know what is actually monitored (and how seriously)</li>
    <li>Avoid the most common mistakes families make</li>
    <li>Communicate safely without shutting down connection</li>
    <li>Navigate sex-offense-specific sensitivities and risks</li>
  </ul>
</SectionCard>

{/* ========================= */}
{/* QUICK REALITY */}
{/* ========================= */}

<SectionBand
  title="Quick Reality Check"
  subtitle="If you only remember a few things, remember these"
  emblem="⚠️"
/>
<SectionCard>
  <Checklist
    id="quick-rules"
    items={[
      { id: "1", label: <>Assume everything is monitored</> },
      { id: "2", label: <>Rules depend on location—not the case</> },
      { id: "3", label: <>Silence during transfer is normal</> },
      { id: "4", label: <>What you say can be misunderstood later</> },
      { id: "5", label: <>Consistency matters more than intensity</> },
    ]}
  />

  <Callout variant="warning" title="The system reality" icon="🟡">
    This system is designed for monitoring and control—not communication. Everything becomes easier to understand once you accept that.
  </Callout>
</SectionCard>

{/* ========================= */}
{/* STAGES */}
{/* ========================= */}

<SectionBand
  title="How Communication Changes by Stage"
  subtitle="Why pretrial, transfer, and final placement feel like completely different worlds"
  emblem="🔄"
/>

{/* PRETRIAL */}
<SectionCard>
  <div className="flex items-start gap-3">
    <div className="text-2xl">🏢</div>
    <div>
      <h3 className="font-semibold text-lg">Pretrial (Local Jail)</h3>
      <p className="text-sm text-slate-500">U.S. Marshals custody, local facility control</p>
    </div>
  </div>

  <Divider />

  <p>
    This is the most restrictive and unpredictable phase. Communication systems are often outdated, inconsistent, or limited.
  </p>

  <h4 className="font-semibold mt-4">What it actually feels like</h4>
  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>Calls may be expensive, short, or unreliable</li>
    <li>Messaging may not exist or may be heavily delayed</li>
    <li>Mail processing can be slow or inconsistent</li>
  </ul>

  <h4 className="font-semibold mt-4">What families often misunderstand</h4>
  <p>
    Lack of communication is often interpreted as avoidance or emotional distance. In reality, it is usually a system limitation.
  </p>

  <Callout variant="info" title="What to do" icon="🔵">
    Focus on consistency, not volume. Even short, predictable communication matters more than trying to force frequent contact.
  </Callout>
</SectionCard>

{/* TRANSFER */}
<SectionCard>
  <div className="flex items-start gap-3">
    <div className="text-2xl">🚐</div>
    <div>
      <h3 className="font-semibold text-lg">Transfer / Holdover</h3>
      <p className="text-sm text-slate-500">Movement between facilities</p>
    </div>
  </div>

  <Divider />

  <p>
    This is the most misunderstood stage. Communication often disappears entirely for periods of time.
  </p>

  <h4 className="font-semibold mt-4">What actually happens</h4>
  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>No access to phone or messaging systems</li>
    <li>Uncertain timelines and locations</li>
    <li>Administrative delays at every step</li>
  </ul>

  <h4 className="font-semibold mt-4">What families often assume</h4>
  <p>
    Silence is often interpreted as something being wrong. In reality, it usually means the person is in transit or processing.
  </p>

  <Callout variant="warning" title="Critical expectation" icon="🟡">
    Silence during transfer is extremely common—and usually has nothing to do with the relationship.
  </Callout>

  <Callout variant="success" title="What to do" icon="🟢">
    Stay steady. Avoid panic. Wait for reestablished communication rather than trying to chase answers that may not exist yet.
  </Callout>
</SectionCard>

{/* FINAL FACILITY */}
<SectionCard>
  <div className="flex items-start gap-3">
    <div className="text-2xl">🏛️</div>
    <div>
      <h3 className="font-semibold text-lg">Final Facility (BOP)</h3>
      <p className="text-sm text-slate-500">More structured, but still monitored</p>
    </div>
  </div>

  <Divider />

  <p>
    Communication becomes more predictable here, but not private.
  </p>

  <h4 className="font-semibold mt-4">What improves</h4>
  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>Access to TRULINCS messaging</li>
    <li>Scheduled phone calls</li>
    <li>More consistent mail flow</li>
  </ul>

  <h4 className="font-semibold mt-4">What does NOT improve</h4>
  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>Monitoring and recording</li>
    <li>Content review</li>
    <li>Potential for misinterpretation</li>
  </ul>

  <Callout variant="info" title="What this means long-term" icon="🔵">
    Communication becomes more reliable—but never truly private. Habits you build early matter here.
  </Callout>
</SectionCard>

{/* STAGE COMPARISON */}
<SectionCard>
  <h3 className="font-semibold text-lg mb-2">What Changes the Most</h3>

  <ul className="list-disc pl-6 space-y-2">
    <li><strong>Access:</strong> Limited → None → Structured</li>
    <li><strong>Predictability:</strong> Low → None → Moderate</li>
    <li><strong>Monitoring:</strong> High → High → High</li>
  </ul>

  <Callout variant="warning" title="Most common mistake" icon="🟡">
    Expecting consistency across stages. Each stage operates like a completely different system.
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