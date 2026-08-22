import React from "react";
import SEO from "../../components/SEO";

/**
 * Production placeholder for the SOLAR Scams, Extortion, Doxxing & Harassment Survival Guide.
 *
 * The completed guide is being developed in ResourceGuideSandbox.tsx and will replace
 * this placeholder during promotion.
 */
export default function ScamsExtortionDoxxingHarassmentSurvivalGuide(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Scams, Extortion, Doxxing & Harassment Survival Guide | The SOLAR Project"
        description="A practical SOLAR guide for people targeted by registry-related scams, impersonation, extortion, doxxing, stalking, threats, or harassment."
        keywords="registry scams, fake warrant scam, doxxing, harassment, extortion, evidence preservation, SOLAR Project"
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Production Placeholder
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Scams, Extortion, Doxxing & Harassment Survival Guide
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            This production file is reserved for the completed SOLAR guide now being finalized in the resource-guide sandbox.
          </p>
        </section>
      </main>
    </div>
  );
}
