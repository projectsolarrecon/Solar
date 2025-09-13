import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function ChildrenDisclosureToolkit(): JSX.Element {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      <SEO
        title="Children & Disclosure + Relationship Rebuilding Toolkit | The SOLAR Project"
        description="Step-by-step strategies and resources for families navigating disclosure to children, rebuilding trust, and maintaining resilience when a loved one is involved in the legal system."
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
            For families of an impacted individual in any stage: investigation,
            pretrial, incarceration, supervision, registry
          </p>

          {/* Action Buttons */}
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">🌟 Introduction</h2>
          <p className="mb-4">
            [Introduction content goes here...]
          </p>
        </section>

        {/* Step 1 */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">🧘 Step 1: Stabilize & Ground Yourself</h2>
          <p className="mb-4">
            [Step 1 content goes here...]
          </p>
        </section>

        {/* Step 2 */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">👂 Step 2: [Placeholder]</h2>
          <p className="mb-4">
            [Step 2 content goes here...]
          </p>
        </section>

        {/* Step 3 */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">💬 Step 3: [Placeholder]</h2>
          <p className="mb-4">
            [Step 3 content goes here...]
          </p>
        </section>

        {/* Step 4 */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">❤️ Step 4: [Placeholder]</h2>
          <p className="mb-4">
            [Step 4 content goes here...]
          </p>
        </section>

        {/* Conclusion */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">🌟 Conclusion</h2>
          <p className="mb-4">
            [Conclusion content goes here...]
          </p>
        </section>

        {/* Sources & Resources */}
        <section id="sources-resources" className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">📚</div>
              <div>
                <h2 className="text-2xl font-bold">Sources &amp; Resources</h2>
                <p className="text-slate-200">Trusted, family-friendly materials you can reference and share</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <ul className="list-disc pl-6 space-y-2 text-slate-800">
              <li>[Link 1]</li>
              <li>[Link 2]</li>
              <li>[Link 3]</li>
            </ul>
          </div> {/* end: sources inner padding */}
        </section> {/* end: sources section */}

      </div> {/* end: content container */}
    </div> {/* end: page wrapper */}
  );
}
