import React from "react";

export default function NYRegistryPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* ---------------- HERO ---------------- */}
      <h1 className="text-4xl font-bold text-slate-800">
        New York Registry Rules
      </h1>
      <p className="mt-2 text-slate-600 italic">
        Last reviewed: <span className="font-semibold">—</span>
      </p>

      {/* ---------------- AT A GLANCE ---------------- */}
      <section className="mt-8 p-6 bg-blue-50 rounded-2xl">
        <h2 className="text-2xl font-semibold text-slate-800">At a Glance</h2>
        <ul className="mt-4 list-disc pl-6 text-slate-700">
          <li>Who must register</li>
          <li>Initial deadlines</li>
          <li>Verification cadence</li>
          <li>Primary registration authority</li>
          <li>Top “gotchas”</li>
          <li>Official links (statutes, forms, registry)</li>
        </ul>
      </section>

      {/* ---------------- WHO MUST REGISTER & DURATION ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Who Must Register &amp; Duration
        </h2>
        <p className="mt-3 text-slate-700">
          Explain covered offenses, tiering scheme, registration duration by
          tier, and juvenile applicability.
        </p>
      </section>

      {/* ---------------- DEADLINES & REPORTING ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Deadlines &amp; Reporting Triggers
        </h2>
        <p className="mt-3 text-slate-700">
          Initial registration timing, move/employer/vehicle updates, online
          identifiers, and temporary travel reporting.
        </p>
      </section>

      {/* ---------------- VERIFICATION ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Verification &amp; In-Person Requirements
        </h2>
        <p className="mt-3 text-slate-700">
          Frequency, location, documentation, and required fees.
        </p>
      </section>

      {/* ---------------- RESIDENCY / PRESENCE RESTRICTIONS ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Residency, Presence, &amp; Loitering Restrictions
        </h2>
        <p className="mt-3 text-slate-700">
          Include distances, zones, exemptions, and court limitations.
        </p>
      </section>

      {/* ---------------- EMPLOYMENT / EDUCATION / INTERNET ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Employment, Education, &amp; Internet Use
        </h2>
        <p className="mt-3 text-slate-700">
          Summarize restrictions, disclosure requirements, and special license
          or profession issues.
        </p>
      </section>

      {/* ---------------- PUBLIC WEBSITE EXPOSURE ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Public Website Exposure
        </h2>
        <p className="mt-3 text-slate-700">
          What gets listed, when removal or suppression is possible.
        </p>
      </section>

      {/* ---------------- TRAVEL & INTERSTATE ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Travel &amp; Interstate Moves
        </h2>
        <p className="mt-3 text-slate-700">
          Explain notification rules, temporary stays, and IML passport impacts.
        </p>
      </section>

      {/* ---------------- COMPLIANCE & ENFORCEMENT ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Compliance &amp; Enforcement
        </h2>
        <p className="mt-3 text-slate-700">
          Common violations, typical penalties, and examples from case law.
        </p>
      </section>

      {/* ---------------- RELIEF PATHS ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">Relief Paths</h2>
        <p className="mt-3 text-slate-700">
          Outline early termination, re-tiering, or removal petitions, with
          citation placeholders.
        </p>
      </section>

      {/* ---------------- SPECIAL POPULATIONS ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Special Populations
        </h2>
        <p className="mt-3 text-slate-700">
          Juveniles, students, unhoused, disabled, military, etc.
        </p>
      </section>

      {/* ---------------- COSTS & FEES ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">Costs &amp; Fees</h2>
        <p className="mt-3 text-slate-700">
          Registration fees, verification costs, and known waivers.
        </p>
      </section>

      {/* ---------------- RECENT CHANGES ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Recent Changes &amp; Litigation
        </h2>
        <p className="mt-3 text-slate-700">
          Add new or pending bills, court cases, and AG opinions affecting
          enforceability.
        </p>
      </section>

      {/* ---------------- CHECKLISTS ---------------- */}
      <section className="mt-10 p-6 bg-yellow-50 rounded-2xl">
        <h2 className="text-2xl font-semibold text-slate-800">
          Compliance Checklists &amp; Scripts
        </h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>New arrival 30-day checklist</li>
          <li>Moving out checklist</li>
          <li>Records request template</li>
          <li>Relief petition starter</li>
        </ul>
      </section>

      {/* ---------------- RESOURCES ---------------- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Official Links &amp; Resources
        </h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>State police / registry portal</li>
          <li>Forms and instructions</li>
          <li>Legal aid / advocacy contacts</li>
        </ul>
      </section>

      {/* ---------------- CITATIONS ---------------- */}
      <section className="mt-10 border-t border-slate-200 pt-6">
        <h2 className="text-xl font-semibold text-slate-800">Citations</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Ala. Code § 15-20A-10(b)(3)</li>
          <li>State v. X, 412 So.3d (2024)</li>
        </ul>
      </section>
    </div>
  );
}