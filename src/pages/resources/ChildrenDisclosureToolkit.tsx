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
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">🧘 Step 1: Stabilize &amp; Ground Yourself</h2>
            <p className="text-slate-100 mt-1">Settle your body and mind before big conversations.</p>
          </div>

          {/* Replace these placeholders with your Step 1 content */}
          <p className="mb-4">Paste your Step 1 paragraphs here.</p>

          {/* Warm callout (mint) */}
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl" aria-hidden>🌿</div>
              <div>
                <p className="font-semibold text-emerald-900">Grounding</p>
                <p className="text-emerald-900/90">
                  Short, practical reminders or a one-minute exercise can go here.
                </p>
              </div>
            </div>
          </div>
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
