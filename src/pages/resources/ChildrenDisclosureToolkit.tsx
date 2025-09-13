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
        {/* ===== INTRO - paste your prose here ===== */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">🌟 Introduction</h2>
            <p className="text-slate-100 mt-1">
              Use this section for your opening context and framing.
            </p>
          </div>

          <p className="mb-4">
            {/* Paste your introduction paragraphs here. Keep plain paragraphs wrapped in <p className="mb-4">...</p> */}
          </p>

          {/* Warm callout example */}
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl" aria-hidden>✨</div>
              <div>
                <p className="font-semibold text-amber-900">Pro Tip</p>
                <p className="text-amber-900/90">
                  Keep callouts like this for short, encouraging guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STEP 1 - paste your prose here ===== */}
        {/* ===== STEP 1 - paste your prose here ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">🧘 Step 1: Stabilize &amp; Ground Yourself</h2>
    <p className="text-slate-100 mt-1">Find your footing first so the storm doesn’t sweep you away.</p>
  </div>

  <p className="mb-4">
    When a crisis erupts, your body and mind may go into survival mode — racing thoughts, panic, exhaustion, or numbness.
    Before you can support children, rebuild relationships, or make thoughtful decisions, steady yourself. Think of this as
    putting on your own oxygen mask before helping others.
  </p>

  {/* Universal Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🌍</span> Universal Guidance
  </h3>

  <ul className="space-y-4 mb-6">
    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2"><span aria-hidden>🌬️</span> Breathe and Slow Down</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Your nervous system is likely on high alert. Inhale through your nose, hold for three seconds, exhale slowly.</li>
        <li>
          Even 60 seconds of intentional breathing can lower panic enough to think clearly — a practice recommended in{" "}
          <a className="text-blue-700 underline" href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener noreferrer">
            trauma-informed care (SAMHSA)
          </a>.
        </li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2"><span aria-hidden>📝</span> Name the Crisis, Not Just the Feelings</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Write down exactly what happened in simple terms: <em>“My partner was arrested today.”</em></li>
        <li>Writing concrete facts can stop your mind from spinning in endless “what-ifs.”</li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2"><span aria-hidden>🍎</span> Ground in Basics</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Eat something nourishing. Hydrate. Sleep if you can.</li>
        <li>
          These aren’t small — they’re the foundation for bigger decisions. The{" "}
          <a className="text-blue-700 underline" href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener noreferrer">
            NCTSN
          </a>{" "}
          notes routines are powerful anchors during trauma.
        </li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2"><span aria-hidden>🤝</span> Identify Safe People</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Who can you call right now who won’t judge or gossip? One trusted person is enough.</li>
        <li>If no one in your circle feels safe, reach out to a helpline, peer group, chaplain, or counselor.</li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2"><span aria-hidden>🛑</span> Avoid Rash Decisions</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Delay big disclosures, financial moves, or confrontations while your body is still in shock.</li>
        <li>Think in 24-hour blocks: <em>“What do I need to get through today safely?”</em></li>
      </ul>
    </li>
  </ul>

  {/* Warm callouts */}
  <div className="grid gap-4 md:grid-cols-2 mb-8">
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <div className="flex items-start gap-3">
        <div className="text-2xl" aria-hidden>💡</div>
        <div>
          <p className="font-semibold text-emerald-900">Pro Tip (First 72 Hours)</p>
          <p className="text-emerald-900/90">
            Feeling like you’re drowning is normal. Small acts — a shower, a walk, a phone call — are lifelines.
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
      <div className="flex items-start gap-3">
        <div className="text-2xl" aria-hidden>🫶</div>
        <div>
          <p className="font-semibold text-rose-900">Permission Slip</p>
          <p className="text-rose-900/90">
            You’re allowed to pause, grieve, and not have answers yet. Stabilizing yourself <em>is</em> taking care of your family.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Role-Based Self-Care */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🎭</span> Role-Based Self-Care
  </h3>

  <div className="grid gap-4 md:grid-cols-2 mb-8">
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👤</span> For the Impacted Individual</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Use the structure around you (facility rules, supervision) as anchors for routine.</li>
        <li>Write brief notes of love or affirmation — it calms you and reassures family later.</li>
        <li>Request mental health support early if possible (counselor, chaplain, peer groups).</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👪</span> For Parents/Guardians at Home</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Let yourself cry or vent in private spaces.</li>
        <li>Prioritize sleep; exhaustion fuels reactivity.</li>
        <li>Set boundaries with relatives/neighbors; you don’t owe instant explanations.</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>💞</span> For Spouses/Partners</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Grief and love can coexist. Both are valid.</li>
        <li>Process with a safe adult (therapist, friend, group) so kids don’t carry your load.</li>
        <li>Delay irreversible decisions until you feel steadier.</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👵</span> For Extended Family</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Ground yourself before “helping.” Kids feel your state.</li>
        <li>Do regulating activities first (walk, prayer, journaling).</li>
        <li>Support without judgment; your calm presence is more valuable than advice.</li>
      </ul>
    </div>
  </div>

  {/* Timeline Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🕒</span> Timeline Guidance
  </h3>

  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🚨</span> Early (Arrest / Pre-Trial)</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Focus on immediate needs: food, housing, childcare, legal help.</li>
        <li>Limit news/social media; it fuels panic.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>⛓️</span> Incarceration</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Build a routine (set call/letter times). Predictability stabilizes you.</li>
        <li>Rotate helpers with a simple support calendar.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🏠</span> Reentry / Supervision</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Expect stress spikes. Ask: “What’s in my control today?”</li>
        <li>Rebuild rhythms gradually; “normal” won’t return overnight.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>📜</span> Registry / Long-Term</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Balance advocacy, parenting, and self-care to avoid burnout.</li>
        <li>Normalize the new reality for yourself first; peer/therapy support helps.</li>
      </ul>
    </div>
  </div>

  {/* Self-Stabilization Checklist (non-interactive) */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>✅</span> Self-Stabilization Checklist
  </h3>
  <ul className="space-y-2 text-slate-800">
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Pause and take three deep breaths.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Write down the facts of what has happened.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Eat, hydrate, and rest before making major decisions.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Identify one safe person to talk to.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Avoid oversharing or overexplaining until calmer.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Set one small goal for today (call lawyer, pick up kids, take a walk).</span></li>
  </ul>
</section>

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
