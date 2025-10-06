import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface StateSummary {
  state: string;
  lastReviewedUTC: string;
}

export default function StateRegistryHubList(): JSX.Element {
  const [search, setSearch] = useState("");
  const [states, setStates] = useState<StateSummary[]>([]);

  useEffect(() => {
    // Static list of states — corresponding JSON filenames (e.g. "fl.json", "tn.json", etc.)
    const list: StateSummary[] = [
      { state: "Alabama", lastReviewedUTC: "" },
      { state: "Alaska", lastReviewedUTC: "" },
      { state: "Arizona", lastReviewedUTC: "" },
      { state: "Arkansas", lastReviewedUTC: "" },
      { state: "California", lastReviewedUTC: "" },
      { state: "Colorado", lastReviewedUTC: "" },
      { state: "Connecticut", lastReviewedUTC: "" },
      { state: "Delaware", lastReviewedUTC: "" },
      { state: "Florida", lastReviewedUTC: "" },
      { state: "Georgia", lastReviewedUTC: "" },
      { state: "Hawaii", lastReviewedUTC: "" },
      { state: "Idaho", lastReviewedUTC: "" },
      { state: "Illinois", lastReviewedUTC: "" },
      { state: "Indiana", lastReviewedUTC: "" },
      { state: "Iowa", lastReviewedUTC: "" },
      { state: "Kansas", lastReviewedUTC: "" },
      { state: "Kentucky", lastReviewedUTC: "" },
      { state: "Louisiana", lastReviewedUTC: "" },
      { state: "Maine", lastReviewedUTC: "" },
      { state: "Maryland", lastReviewedUTC: "" },
      { state: "Massachusetts", lastReviewedUTC: "" },
      { state: "Michigan", lastReviewedUTC: "" },
      { state: "Minnesota", lastReviewedUTC: "" },
      { state: "Mississippi", lastReviewedUTC: "" },
      { state: "Missouri", lastReviewedUTC: "" },
      { state: "Montana", lastReviewedUTC: "" },
      { state: "Nebraska", lastReviewedUTC: "" },
      { state: "Nevada", lastReviewedUTC: "" },
      { state: "New Hampshire", lastReviewedUTC: "" },
      { state: "New Jersey", lastReviewedUTC: "" },
      { state: "New Mexico", lastReviewedUTC: "" },
      { state: "New York", lastReviewedUTC: "" },
      { state: "North Carolina", lastReviewedUTC: "" },
      { state: "North Dakota", lastReviewedUTC: "" },
      { state: "Ohio", lastReviewedUTC: "" },
      { state: "Oklahoma", lastReviewedUTC: "" },
      { state: "Oregon", lastReviewedUTC: "" },
      { state: "Pennsylvania", lastReviewedUTC: "" },
      { state: "Rhode Island", lastReviewedUTC: "" },
      { state: "South Carolina", lastReviewedUTC: "" },
      { state: "South Dakota", lastReviewedUTC: "" },
      { state: "Tennessee", lastReviewedUTC: "" },
      { state: "Texas", lastReviewedUTC: "" },
      { state: "Utah", lastReviewedUTC: "" },
      { state: "Vermont", lastReviewedUTC: "" },
      { state: "Virginia", lastReviewedUTC: "" },
      { state: "Washington", lastReviewedUTC: "" },
      { state: "West Virginia", lastReviewedUTC: "" },
      { state: "Wisconsin", lastReviewedUTC: "" },
      { state: "Wyoming", lastReviewedUTC: "" }
    ];
    setStates(list);
  }, []);

  const filtered = states.filter(s =>
    s.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search Box */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search for your state..."
          className="border border-slate-300 rounded-lg p-2 w-full max-w-md shadow-sm focus:ring focus:ring-slate-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* State Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filtered.map((s) => {
          const slug = s.state.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link
              key={s.state}
              to={`/resources/state-registry/states/${slug}`}
              className="block bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md p-3 text-center hover:bg-slate-50 transition"
            >
              <span className="font-semibold text-slate-800">{s.state}</span>
              {s.lastReviewedUTC && (
                <p className="text-xs text-slate-500 mt-1">
                  Reviewed {new Date(s.lastReviewedUTC).toLocaleDateString()}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}