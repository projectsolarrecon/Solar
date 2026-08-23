import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function RiskAssessmentGuide(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Understanding Sex-Offense Risk Assessment | The SOLAR Project"
        description="A practical SOLAR guide to understanding risk-assessment reports, scores, categories, tools, and responsible interpretation."
        keywords="risk assessment, Static-99R, CPORT, STABLE-2007, PCRA, AUC, calibration, sexual recidivism"
      />

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm text-slate-200 hover:text-white transition-colors"
          >
            ← Back to Resources
          </Link>

          <div className="mt-5 inline-flex rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
            SOLAR Resource Guide
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
            Understanding Sex-Offense Risk Assessment
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-100 leading-relaxed">
            A practical guide to understanding risk-assessment reports, scores,
            categories, reference groups, common tools, and what a result does —
            and does not — mean.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Guide in development
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Full guide coming soon
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            This guide will help readers identify what kind of risk assessment they
            are looking at, decode scores and categories, understand concepts such
            as static and dynamic risk, relative and absolute risk, AUC and
            calibration, and ask better questions when an assessment affects
            treatment, supervision, sentencing, release planning, or another
            decision.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The completed guide is being built from SOLAR&apos;s verified evidence
            matrix and will include practical explanations of major tools such as
            Static-99R, Static-2002R, STABLE-2007, ACUTE-2007, CPORT, CASIC, PCRA,
            SOTIPS, and VRS-SO.
          </p>
        </div>
      </main>
    </div>
  );
}
