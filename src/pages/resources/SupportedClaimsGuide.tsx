import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";

const positions = [
  "The sex offender registry system is ineffective, harmful, and rooted in misinformation.",
  "Registry systems cause lasting harm to individuals, families, and communities.",
  "Sexual harm to children is primarily a relationship-and-access problem, not a stranger-location problem.",
  "Other types of crime present a greater and more consistent danger to public safety.",
  "Registries are punitive in practice, not administrative in nature.",
  "One-size-fits-all registry laws are fundamentally flawed.",
  "Registries create a permanent underclass.",
  "Public-safety policy should be judged by measurable outcomes, not presumed benefits.",
];

export default function SupportedClaimsGuide(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="SOLAR Supported Claims Library | The SOLAR Project"
        description="A source-backed library of the strongest claims SOLAR believes the available evidence supports on registries, risk, recidivism, public safety, and reintegration."
        keywords="SOLAR supported claims, registry evidence, sex offense recidivism, risk assessment, registry effectiveness, public notification, evidence-based policy"
      />

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm text-slate-200 transition-colors hover:text-white"
          >
            ← Back to Resources
          </Link>

          <div className="mt-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100 ring-1 ring-white/20">
            SOLAR Evidence Resource
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Supported Claims Library
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-100 sm:text-xl">
            The public-facing companion to SOLAR’s evidence matrix: publication-safe
            claims, plain-language counterparts, and direct source trails organized
            around SOLAR’s established advocacy positions.
          </p>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400" />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <ShareBar />

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
            Guide in development
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            This route is ready for the Supported Claims build.
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
            The completed resource will translate SOLAR’s internal evidence matrix
            into a curated public claims library. Each entry will lead with the
            strongest formulation SOLAR believes can withstand competent journalistic
            or editorial review, followed by a conversational explanation and direct
            links to the evidence supporting that claim.
          </p>
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Controlling structure
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              SOLAR’s eight advocacy positions
            </h2>
          </div>

          <div className="space-y-4">
            {positions.map((position, index) => (
              <article
                key={position}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Position {index + 1}
                </div>
                <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900">
                  {position}
                </h3>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
