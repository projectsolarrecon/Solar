import React from "react";
import { MapPin } from "lucide-react";

// Auto-import all state JSONs
const files = import.meta.glob("/src/data/state-registry/*.json", { eager: true });

function entries() {
  return Object.keys(files)
    .map((k) => {
      const code = k.split("/").pop()!.replace(".json", "");
      // @ts-ignore
      const data = files[k]?.default || files[k];
      return { code, state: data?.state || code.toUpperCase() };
    })
    .sort((a, b) => a.state.localeCompare(b.state));
}

export default function StateRegistryHub() {
  const list = entries();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ---------- HERO ---------- */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-600 text-white py-10 px-6 rounded-b-3xl shadow-md print:bg-none">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight">Registry Rules by State</h1>
          <p className="mt-3 text-slate-200 text-lg max-w-2xl mx-auto">
            Explore SOLAR’s state-by-state analysis of registration requirements, restrictions,
            and compliance steps under SORNA and related laws.
          </p>
          <p className="mt-2 text-slate-300 text-sm italic">
            Updated automatically as new states are added.
          </p>
        </div>
      </header>

      {/* ---------- BODY ---------- */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {list.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {list.map((e) => (
              <a
                key={e.code}
                href={`/resources/state-registry/states/${e.code}`}
                className="group relative block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
                aria-label={`View ${e.state} registry rules`}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-colors" />
                  <span className="text-lg font-semibold text-slate-800 group-hover:text-slate-900">
                    {e.state}
                  </span>
                </div>
                <div className="text-slate-500 text-sm mt-1 uppercase tracking-wide">{e.code}</div>
                <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-slate-300 transition" />
              </a>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic text-center">
            Add your first state by dropping <code>xx.json</code> into
            <code> /src/data/state-registry/</code>.
          </p>
        )}
      </main>
    </div>
  );
}