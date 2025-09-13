import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function ChildrenDisclosureToolkit(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Children & Disclosure + Relationship Rebuilding Toolkit | The SOLAR Project"
        description="Step-by-step strategies and resources for families navigating disclosure to children, rebuilding trust, and long-term resilience."
        keywords="children disclosure toolkit, rebuilding trust, registry families, SOLAR Project, resilience, family support"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-600 text-white py-16 shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 uppercase tracking-wide mb-2 text-sm font-semibold">
            SOLAR Resource Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🌱 Children & Disclosure + Relationship Rebuilding Toolkit
          </h1>
          <p className="text-lg md:text-xl text-slate-100">
            For families of an impacted individual in any stage: investigation, pretrial, incarceration, supervision, registry
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={handlePrint}
              className="bg-white text-slate-700 px-4 py-2 rounded-lg shadow hover:bg-slate-100 transition"
            >
              🖨️ Print
            </button>
            <Link
              to="/resources"
              className="bg-slate-500 text-white px-4 py-2 rounded-lg shadow hover:bg-slate-600 transition"
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* INTRO_START */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
  {/* Section header */}
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">🌟 Introduction</h2>
    <p className="text-slate-100 mt-1">Warm, practical guidance for hard seasons—clear steps, gentle language, and real tools.</p>
  </div>

  {/* Lead paragraphs */}
  <p className="mb-4">
    When someone in your family is arrested, investigated, incarcerated, or placed on a registry, it can feel like
    your entire world has been turned inside out. Overnight, the life you thought you knew changes — and suddenly you
    are faced with impossible questions: <em>What do I tell my children? How do I face relatives or neighbors? How do
    we keep moving forward?</em>
  </p>

  <p className="mb-4">
    If you are reading this, you may feel fear, shame, confusion, or even anger. Please know: <strong>you are not
    alone.</strong> Thousands of families walk this path every year, and while no two stories are the same, there are
    safe, thoughtful ways to navigate these conversations and rebuild trust.
  </p>

  {/* Two-approach card list */}
  <div className="grid gap-4 md:grid-cols-2 mb-6">
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <div className="flex items-start gap-3">
        <span className="text-2xl" aria-hidden>📖</span>
        <div>
          <h3 className="font-semibold text-slate-800">Step-by-Step Guide</h3>
          <p className="text-slate-700 text-sm">
            Clear, age-appropriate strategies for talking with children and family.
          </p>
        </div>
      </div>
    </div>
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <div className="flex items-start gap-3">
        <span className="text-2xl" aria-hidden>🛠️</span>
        <div>
          <h3 className="font-semibold text-slate-800">Practical Toolkit</h3>
          <p className="text-slate-700 text-sm">
            Scripts, exercises, and resources to help you begin healing and reconnecting.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Note on language (warm callout) */}
  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mb-6">
    <div className="flex items-start gap-3">
      <span className="text-xl" aria-hidden>🗣️</span>
      <div>
        <p className="text-slate-800">
          <strong>Note on language:</strong> In this guide we use the term <em>“impacted individual”</em> to describe
          the person at the center of the legal process — whether they are under investigation, incarcerated, on
          supervision, or on the registry. It avoids labels like <em>“offender”</em> or <em>“accused”</em> that may not
          apply at every stage, and keeps the focus on the person’s humanity.
        </p>
      </div>
    </div>
  </div>

  {/* Gentle reassurance (mint callout) */}
  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
    <div className="flex items-start gap-3">
      <span className="text-xl" aria-hidden>✨</span>
      <p className="text-slate-800">
        You do not have to get this perfect. What matters most is showing up with honesty, love, and consistency. With
        patience and courage, families can move through even the most difficult circumstances together.
      </p>
    </div>
  </div>
</section>
{/* INTRO_END */}
        
        {/* STEP1_START */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
  {/* Slate gradient header */}
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">🧘 Step 1: Stabilize &amp; Ground Yourself</h2>
    <p className="text-slate-100 mt-1">Put on your oxygen mask first—steady yourself so you can steady your family.</p>
  </div>

  {/* Lead copy */}
  <p className="mb-4">
    When a crisis erupts, your body and mind may go into survival mode—racing thoughts, panic, exhaustion, or numbness.
    Before you can support children, rebuild relationships, or make thoughtful decisions, steady yourself first.
    Think of this as putting on your own oxygen mask before helping others.
  </p>
  <p className="mb-6">
    This step is about <strong>finding your footing</strong>, so the storm around you doesn’t sweep you away.
  </p>

  {/* Universal Guidance */}
  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
      <span aria-hidden>🌍</span> Universal Guidance
    </h3>
    <ul className="space-y-3">
      <li className="flex items-start gap-3">
        <span aria-hidden>🌬️</span>
        <div>
          <p className="font-medium text-slate-800">Breathe and slow down</p>
          <p className="text-slate-700 text-sm">
            Your nervous system is likely on high alert. Inhale through your nose, hold for three seconds, exhale slowly. Repeat.
            Even 60 seconds can lower panic—an approach aligned with{" "}
            <a
              className="text-blue-700 underline"
              href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach"
              target="_blank"
              rel="noopener noreferrer"
            >
              trauma-informed care
            </a>.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span aria-hidden>📝</span>
        <div>
          <p className="font-medium text-slate-800">Name the crisis, not just the feelings</p>
          <p className="text-slate-700 text-sm">
            Write a simple sentence with the facts (e.g., “My partner was arrested today.”). Facts reduce “what-if” spirals.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span aria-hidden>🍎</span>
        <div>
          <p className="font-medium text-slate-800">Ground in basics</p>
          <p className="text-slate-700 text-sm">
            Eat, hydrate, and sleep if you can. These are the foundation for bigger decisions. The{" "}
            <a
              className="text-blue-700 underline"
              href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Child Traumatic Stress Network
            </a>{" "}
            notes that daily routine stability strongly anchors both children and adults.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span aria-hidden>🤝</span>
        <div>
          <p className="font-medium text-slate-800">Identify safe people</p>
          <p className="text-slate-700 text-sm">
            Call one person who won’t judge or gossip. If no one comes to mind, consider a helpline or local reentry/family services.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span aria-hidden>🛑</span>
        <div>
          <p className="font-medium text-slate-800">Avoid rash decisions</p>
          <p className="text-slate-700 text-sm">
            Delay big disclosures, money moves, or confrontations while you’re in shock. Focus on 24-hour survival blocks:
            “What do I need to get through <em>today</em> safely?”
          </p>
        </div>
      </li>
    </ul>
  </div>

  {/* Pro Tip callout */}
  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mb-8">
    <div className="flex items-start gap-3">
      <span aria-hidden>💡</span>
      <p className="text-slate-800">
        <strong>Pro Tip:</strong> In the first 72 hours of a crisis, it’s normal to feel like you’re drowning.
        Small acts of care—a shower, a walk, a phone call—are lifelines.
      </p>
    </div>
  </div>

  {/* Role-Based Self-Care */}
  <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 mb-6">
    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
      <span aria-hidden>🎭</span> Role-Based Self-Care
    </h3>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="font-medium text-slate-800 mb-1">👤 For the Impacted Individual</p>
        <ul className="text-slate-700 text-sm space-y-1">
          <li>Use structure (facility rules, supervision) to anchor your day.</li>
          <li>Write short affirmations or loving notes to family to calm your mind and offer reassurance.</li>
          <li>If possible, request mental health support early (crisis counselors/chaplains are often available).</li>
        </ul>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="font-medium text-slate-800 mb-1">👪 For Parents/Guardians at Home</p>
        <ul className="text-slate-700 text-sm space-y-1">
          <li>Give yourself private space to cry, vent, or write.</li>
          <li>Protect sleep—exhaustion fuels reactivity and poor decisions.</li>
          <li>Set boundaries—you don’t owe explanations to everyone right now.</li>
        </ul>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="font-medium text-slate-800 mb-1">💞 For Spouses/Partners</p>
        <ul className="text-slate-700 text-sm space-y-1">
          <li>Grief and love can coexist—both are valid.</li>
          <li>Process with a peer/therapist so kids aren’t carrying adult emotions.</li>
          <li>Delay major decisions until you feel steadier.</li>
        </ul>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="font-medium text-slate-800 mb-1">👵 For Extended Family</p>
        <ul className="text-slate-700 text-sm space-y-1">
          <li>Ground yourself before helping—kids feel your emotional state.</li>
          <li>Do calming activities (walks, prayer, journaling) before childcare or errands.</li>
          <li>Support without judgment; your calm presence matters more than advice.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Timeline Guidance */}
  <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-8">
    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
      <span aria-hidden>🕒</span> Timeline Guidance
    </h3>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="font-medium text-slate-800">🚨 Early Stage (Arrest / Pre-Trial)</p>
        <ul className="text-slate-700 text-sm space-y-1">
          <li>Shock is highest—focus on immediate needs (food, housing, childcare, legal).</li>
          <li>Limit news/social media; it fuels panic.</li>
        </ul>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="font-medium text-slate-800">⛓️ Incarceration Stage</p>
        <ul className="text-slate-700 text-sm space-y-1">
          <li>Build routine (set times for calls, letters, meals).</li>
          <li>Create a support calendar to reduce isolation and overwhelm.</li>
        </ul>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="font-medium text-slate-800">🏠 Reentry / Supervision</p>
        <ul className="text-slate-700 text-sm space-y-1">
          <li>Expect stress spikes—ask “What’s in my control today?”</li>
          <li>Rebuild household rhythms gradually; “normal” won’t return overnight.</li>
        </ul>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="font-medium text-slate-800">📜 Registry / Long-Term</p>
        <ul className="text-slate-700 text-sm space-y-1">
          <li>Practice pacing—balance advocacy, parenting, and self-care to avoid burnout.</li>
          <li>Normalize the new reality for yourself first; therapy/peer support can sustain resilience.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Checklist (interactive) */}
  <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
      <span aria-hidden>✅</span> Self-Stabilization Checklist
    </h3>
    <ul className="space-y-2">
      {[
        { id: "s1-breathe", label: "Pause and take three deep breaths." },
        { id: "s1-facts", label: "Write down the facts of what has happened." },
        { id: "s1-care", label: "Eat, hydrate, and rest before making major decisions." },
        { id: "s1-safe", label: "Identify one safe person to talk to." },
        { id: "s1-boundaries", label: "Avoid oversharing or overexplaining until calmer." },
        { id: "s1-goal", label: "Set one small goal for today (call lawyer, pick up kids, take a walk)." }
      ].map((item) => (
        <li key={item.id} className="flex items-start gap-3">
          <input
            id={item.id}
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300"
            checked={!!checkedItems[item.id]}
            onChange={() => toggleCheck(item.id)}
          />
          <label htmlFor={item.id} className="text-slate-800">{item.label}</label>
        </li>
      ))}
    </ul>
  </div>
</section>
{/* STEP1_END */}

        {/* ===== STEP 2 - paste your prose here ===== */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">👶 Step 2: Disclosure to Children</h2>
            <p className="text-slate-100 mt-1">Age-appropriate truth, safety, and reassurance.</p>
          </div>

          <p className="mb-4">Paste your Step 2 paragraphs here.</p>

          {/* Warm callout (rose) */}
          <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl" aria-hidden>💬</div>
              <div>
                <p className="font-semibold text-rose-900">Script Helper</p>
                <p className="text-rose-900/90">
                  Use this callout for short scripts or anchor phrases you want to highlight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STEP 3 - paste your prose here ===== */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">👨‍👩‍👧 Step 3: Managing Family Reactions</h2>
            <p className="text-slate-100 mt-1">Boundaries, anchor phrases, and protecting kids from adult conversations.</p>
          </div>

          <p className="mb-4">Paste your Step 3 paragraphs here.</p>

          {/* Warm callout (amber) */}
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl" aria-hidden>🧭</div>
              <div>
                <p className="font-semibold text-amber-900">Anchor Phrase</p>
                <p className="text-amber-900/90">
                  Keep one short, repeatable line for tough moments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STEP 4 - paste your prose here ===== */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">🤝 Step 4: Trust Rebuilding Toolkit</h2>
            <p className="text-slate-100 mt-1">Small, steady, reliable acts rebuild safety over time.</p>
          </div>

          <p className="mb-4">Paste your Step 4 paragraphs here.</p>

          {/* Warm callout (sky) */}
          <div className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl" aria-hidden>🧱</div>
              <div>
                <p className="font-semibold text-sky-900">Micro-Commitment</p>
                <p className="text-sky-900/90">
                  One promise a week, kept consistently, beats big speeches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STEP 5 - paste your prose here ===== */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">🌄 Step 5: Ongoing Support &amp; Resilience</h2>
            <p className="text-slate-100 mt-1">Build long-term routines, supports, and perspective.</p>
          </div>

          <p className="mb-4">Paste your Step 5 paragraphs here.</p>

          {/* Warm callout (violet) */}
          <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50 p-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl" aria-hidden>🌱</div>
              <div>
                <p className="font-semibold text-violet-900">Resilience Boost</p>
                <p className="text-violet-900/90">
                  Celebrate even tiny wins—momentum beats perfection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONCLUSION - paste your prose here ===== */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">🌟 Conclusion: A Path Forward</h2>
            <p className="text-slate-100 mt-1">
              Warmth, honesty, routines, and support carry families through the long journey.
            </p>
          </div>

          <p className="mb-4">Paste your conclusion paragraphs here.</p>
        </section>

        {/* ===== SOURCES & RESOURCES (blue background card) ===== */}
        <section id="sources-resources" className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                📚
              </div>
              <div>
                <h2 className="text-2xl font-bold">Sources &amp; Resources</h2>
                <p className="text-slate-200">Trusted, family-friendly materials you can reference and share</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <ul className="list-disc pl-6 space-y-2 text-slate-800">
              {/* Replace these with your real links (kept minimal to avoid paste errors) */}
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  American Academy of Pediatrics – Tips to Support Children When a Parent is in Prison
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAMHSA – 6 Guiding Principles of Trauma-Informed Approach
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Child Traumatic Stress Network – About Child Trauma
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://sesameworkshop.org/resources/coping-with-incarceration/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sesame Workshop – Coping With Incarceration
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stop It Now! – Parents Talking to Children About Sexual Abuse
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.atsa.com/atsa-practice-guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Association for the Treatment and Prevention of Sexual Abuse (ATSA) – Practice Guidelines
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Children of Incarcerated Parents Bill of Rights – Osborne Association
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.mstservices.com/what-is-mst"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Multisystemic Therapy (MST)
                </a>
                <span> and </span>
                <a
                  className="text-blue-700 underline"
                  href="https://www.functionalfamilytherapy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Functional Family Therapy (FFT)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  American Psychological Association – Rebuilding Trust
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>{/* end: main content container */}
    </div>
  );
}

export default ChildrenDisclosureToolkit;
