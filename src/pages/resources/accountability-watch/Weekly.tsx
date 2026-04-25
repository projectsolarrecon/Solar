import React, { Suspense } from "react";
import { useParams, Link } from "react-router-dom";

// Auto-import all dated Accountability Watch files in this folder (e.g., 2026-04-01.tsx)
// IMPORTANT: keep published files named exactly YYYY-MM-DD.tsx and default-export a React component.
const weeklyModules = import.meta.glob("./*.tsx");

function isValidDateSlug(slug: string) {
  // YYYY-MM-DD basic check
  return /^\d{4}-\d{2}-\d{2}$/.test(slug);
}

export default function AccountabilityWatchWeekly() {
  const { date } = useParams<{ date: string }>();

  if (!date || !isValidDateSlug(date)) {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <h1 className="text-xl font-semibold text-slate-900">Accountability Watch</h1>
        <p className="mt-2 text-slate-700">
          Missing or invalid date. Pick a roundup from the index.
        </p>
        <Link
          className="mt-4 inline-block rounded-md bg-slate-900 px-3 py-1.5 text-white"
          to="/resources/accountability-watch"
        >
          Go to Index
        </Link>
      </main>
    );
  }

  // Resolve module path that matches ./YYYY-MM-DD.tsx
  const modulePath = `./${date}.tsx`;
  const loader = weeklyModules[modulePath] as
    | (() => Promise<{ default: React.ComponentType }>)
    | undefined;

  if (!loader) {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <h1 className="text-xl font-semibold text-slate-900">Accountability Watch</h1>
        <p className="mt-2 text-slate-700">
          Roundup <span className="font-mono">{date}</span> not found. It may
          not be published yet.
        </p>
        <Link
          className="mt-4 inline-block rounded-md bg-slate-900 px-3 py-1.5 text-white"
          to="/resources/accountability-watch"
        >
          Go to Index
        </Link>
      </main>
    );
  }

  const LazyRoundup = React.lazy(loader);

  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl p-6 text-slate-700">
          Loading roundup…
        </div>
      }
    >
      <LazyRoundup />
    </Suspense>
  );
}