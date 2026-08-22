import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function HousingCrisisHomelessnessDisasterSurvivalGuide(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Housing Crisis, Homelessness & Disaster Survival Guide | The SOLAR Project"
        description="A practical SOLAR survival guide for sudden housing loss, homelessness, temporary lodging, disaster evacuation, communication continuity, and registry or supervision complications during crisis."
        keywords="housing crisis, homelessness, disaster evacuation, emergency housing, transient registration, registry compliance, supervised release, probation, parole, SOLAR Project"
      />

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm text-slate-200 hover:text-white transition-colors"
          >
            ← Back to Resources
          </Link>

          <div className="mt-5 inline-flex rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
            SOLAR Resource Guide — In Development
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Housing Crisis, Homelessness & Disaster Survival Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A crisis-first guide for people who suddenly lose housing, enter homelessness,
            need temporary lodging, or are displaced by disaster while also navigating
            registration, supervision, communication, documents, money, medications,
            transportation, and the need to find a safe place to sleep.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Guide in development</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            The production file is reserved. The completed guide will replace this
            placeholder without changing the component or file name.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              to="/resources/registry-compliance-verification-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition-colors"
            >
              <p className="font-semibold text-slate-900">
                Registry Compliance & Verification Survival Guide
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Reporting duties, verification, receipts, proof, agency conflicts,
                closures, and missed-deadline response.
              </p>
            </Link>

            <Link
              to="/resources/police-registry-cps-encounters"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition-colors"
            >
              <p className="font-semibold text-slate-900">
                Police, Registry & CPS Encounters
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Live government encounters, authority, consent, searches, mixed agencies,
                and CPS contact.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
