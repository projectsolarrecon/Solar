import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type StateFile = {
  state: string;
  lastReviewedUTC?: string;
};

const ALL_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana",
  "Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana",
  "Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina",
  "North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming"
];

// Keep URL slugs consistent with your dynamic state page route
function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function StateRegistryHubList(): JSX.Element {
  const [search, setSearch] = useState("");

  // ✅ Only load files named like "fl.ts" or "fl.json" (two lowercase letters)
  const files = import.meta.glob<StateFile>("../../data/state-registry/[a-z][a-z].{ts,json}", { eager: true });

  const liveMap = useMemo(() => {
    const map = new Map<string, { lastReviewedUTC?: string; code: string }>();
    for (const [path, mod] of Object.entries(files)) {
      const raw = mod as any;
      const data = (raw?.default ?? raw) as StateFile; // TS default export or raw JSON
      if (!data?.state) continue;
      const code = path.split("/").pop()!.replace(/\.(ts|json)$/i, ""); // "fl"
      map.set(data.state, { lastReviewedUTC: data.lastReviewedUTC, code });
    }
    return map;
  }, [files]);

  const filtered = ALL_STATES.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search for your state…"
          className="border border-slate-300 rounded-lg p-2 w-full max-w-md shadow-sm focus:ring focus:ring-slate-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search states"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filtered.map((name) => {
          const hit = liveMap.get(name);

          if (hit) {
            return (
              <Link
                key={name}
                to={`/resources/state-registry/states/${hit.code}`}
                className="block bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md p-3 transition hover:bg-slate-50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">{name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                    LIVE
                  </span>
                </div>
                {hit.lastReviewedUTC && (
                  <p className="text-xs text-slate-500 mt-1">
                    Reviewed {new Date(hit.lastReviewedUTC).toLocaleDateString()}
                  </p>
                )}
              </Link>
            );
          }

          return (
            <div
              key={name}
              className="bg-white border border-slate-200 rounded-lg shadow-sm p-3 opacity-80"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">{name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                  COMING SOON
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}