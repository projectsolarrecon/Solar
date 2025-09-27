import React from "react";
import { Link } from "react-router-dom";
import { accountabilityWatch } from "../../../data/accountabilityWatch";
import { Helmet } from "react-helmet";

export default function AccountabilityWatchIndex() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Accountability Watch (Weekly) | SOLAR</title>
        <meta
          name="description"
          content="Weekly roundup of verified arrests, charges, pleas, convictions, and sentencings involving public figures—sourced from official filings and reputable reporting."
        />
      </Helmet>

      <header className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-10 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/30">
            🧭 Accountability Watch • Weekly
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight">Accountability Watch</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            Verified arrests, charges, pleas, convictions, and sentencings involving people in positions of trust or public
            influence—with a registry-status note for context. Allegations are not findings of guilt.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10">
        <ul className="grid gap-3">
          {accountabilityWatch.map((w) => (
            <li key={w.slug} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{w.title}</span>
                <span className="ml-auto">{w.date}</span>
              </div>
              <p className="mt-1 text-slate-700">{w.summary}</p>
              <Link
                to={w.path}
                className="mt-3 inline-block rounded-md bg-slate-900 px-3 py-1.5 text-white hover:bg-slate-800"
              >
                Open week
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
