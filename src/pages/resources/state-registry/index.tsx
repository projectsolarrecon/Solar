import React, { useMemo, useState } from "react";
import { MapPin, Search, Layers, BookOpen, Globe, Shield, Filter } from "lucide-react";

// Auto-import all state JSONs
const files = import.meta.glob("/src/data/state-registry/*.json", { eager: true });

type Entry = {
  code: string;
  state: string;
  badges?: {
    residencyZones?: boolean;
    lifetimePossible?: boolean;
    verificationQuarterly?: boolean;
  };
};

function entries(): Entry[] {
  return Object.keys(files)
    .map((k) => {
      const code = k.split("/").pop()!.replace(".json", "");
      // @ts-ignore
      const data = files[k]?.default || files[k];
      const state = data?.state || code.toUpperCase();

      // Heuristics to auto-derive badges (optional; can be removed if you set badges in JSON)
      const textBlob = JSON.stringify(data || {}).toLowerCase();
      const badges = {
        residencyZones: /residenc(y|e)\s+zone|distance|buffer/.test(textBlob),
        lifetimePossible: /lifetime/.test(textBlob),
        verificationQuarterly: /quarterly/.test(textBlob),
        ...(data?.badges || {}),
      };

      return { code, state, badges } as Entry;
    })
    .sort((a, b) => a.state.localeCompare(b.state));
}

const STATE_TO_REGION: Record<string, string> = {
  // Northeast
  CT: "Northeast", ME: "Northeast", MA: "Northeast", NH: "Northeast", RI: "Northeast", VT: "Northeast",
  NJ: "Northeast", NY: "Northeast", PA: "Northeast",
  // Midwest
  IL: "Midwest", IN: "Midwest", MI: "Midwest", OH: "Midwest", WI: "Midwest",
  IA: "Midwest", KS: "Midwest", MN: "Midwest", MO: "Midwest", NE: "Midwest", ND: "Midwest", SD: "Midwest",
  // South
  DE: "South", DC: "South", FL: "South", GA: "South", MD: "South", NC: "South", SC: "South", VA: "South", WV: "South",
  AL: "South", KY: "South", MS: "South", TN: "South", AR: "South", LA: "South", OK: "South", TX: "South",
  // West
  AZ: "West", CO: "West", ID: "West", MT: "West", NV: "West", NM: "West", UT: "West", WY: "West",
  AK: "West", CA: "West", HI: "West", OR: "West", WA: "West"
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-0.5 text-xs border border-slate-200">
      {children}
    </span>
  );
}

function CardLink({ e }: { e: Entry }) {
  return (
    <a
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
      <div className="mt-3 flex flex-wrap gap-2">
        {e.badges?.residencyZones && <Badge>Residency zones</Badge>}
        {e.badges?.lifetimePossible && <Badge>Lifetime possible</Badge>}
        {e.badges?.verificationQuarterly && <Badge>Quarterly verify</Badge>}
      </div>
      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-slate-300 transition" />
    </a>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition
        ${active ? "bg-slate-800 text-white" : "bg-white text-slate-700 hover:bg-slate-50"}`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <h2 className="flex items-center text-2xl font-semibold text-slate-800">
        {icon} <span className="ml-2">{title}</span>
      </h2>
      <div className="mt-3 text-slate-700">{children}</div>
    </section>
  );
}

export default function StateRegistryHub() {
  const list = useMemo(entries, []);
  const [tab, setTab] = useState<"overview" | "states" | "map" | "faq">("overview");
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<"All" | "Northeast" | "Midwest" | "South" | "West">("All");

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return list.filter((e) => {
      const matchesQuery =
        !ql ||
        e.state.toLowerCase().includes(ql) ||
        e.code.toLowerCase().includes(ql);
      if (!matchesQuery) return false;

      if (tab === "map" && region !== "All") {
        const code = e.code.toUpperCase();
        return STATE_TO_REGION[code] === region;
      }
      return true;
    });
  }, [list, q, tab, region]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-600 text-white py-10 px-6 rounded-b-3xl shadow-md print:bg-none">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight">Registry Rules by State</h1>
          <p className="mt-3 text-slate-200 text-lg max-w-2xl mx-auto">
            SOLAR’s state-by-state analysis of registration requirements, restrictions,
            and compliance steps — with citations and relief-path guidance.
          </p>
          <p className="mt-2 text-slate-300 text-sm italic">
            Use the tabs below to explore the nationwide overview, find your state, or read FAQs.
          </p>
        </div>
      </header>

      {/* TABS */}
      <nav className="max-w-5xl mx-auto px-6 mt-6">
        <div className="inline-flex gap-2 rounded-2xl bg-white p-1 border border-slate-200 shadow-sm">
          <TabButton active={tab === "overview"} onClick={() => setTab("overview")} icon={<BookOpen className="w-4 h-4" />}>
            Overview
          </TabButton>
          <TabButton active={tab === "states"} onClick={() => setTab("states")} icon={<Layers className="w-4 h-4" />}>
            States A–Z
          </TabButton>
          <TabButton active={tab === "map"} onClick={() => setTab("map")} icon={<Globe className="w-4 h-4" />}>
            Map (beta)
          </TabButton>
          <TabButton active={tab === "faq"} onClick={() => setTab("faq")} icon={<Shield className="w-4 h-4" />}>
            FAQ & Glossary
          </TabButton>
        </div>
      </nav>

      {/* BODY */}
      <main className="max-w-5xl mx-auto px-6 py-8 space-y-10 print:py-6">
        {(tab === "states" || tab === "map") && (
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by state name or code (e.g., 'Texas' or 'TX')"
                  className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  aria-label="Search states"
                />
              </div>
              {tab === "map" && (
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-slate-500" />
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value as any)}
                    className="rounded-xl border border-slate-200 px-3 py-2 bg-white"
                    aria-label="Filter by region"
                  >
                    <option>All</option>
                    <option>Northeast</option>
                    <option>Midwest</option>
                    <option>South</option>
                    <option>West</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        )}

        {tab === "overview" && (
          <section className="space-y-8">
            <SectionCard title="How to Use This Hub" icon={<BookOpen className="w-6 h-6 text-indigo-600" />}>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Start with the nationwide overview below for context (federal frameworks, common terms).</li>
                <li>Go to <strong>States A–Z</strong> or <strong>Map (beta)</strong> to open your state’s deep-dive page.</li>
                <li>Each state page follows a standardized format with “At a Glance,” deadlines, restrictions, relief paths, resources, and citations—plus a plain-language summary.</li>
              </ul>
            </SectionCard>

            <SectionCard title="Nationwide Frameworks (What’s Uniform vs. State-by-State)" icon={<Shield className="w-6 h-6 text-emerald-600" />}>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li><strong>SORNA / Adam Walsh Act:</strong> Federal baseline and data standards; states vary in adoption and implementation.</li>
                <li><strong>Megan’s Law:</strong> Public notification exists nationwide but differs in scope and display.</li>
                <li><strong>International Megan’s Law (IML):</strong> Passport marking & notifications for certain travellers.</li>
                <li><strong>Interstate moves:</strong> Moving/visiting can trigger new registration; deadlines and thresholds vary by state.</li>
                <li><strong>Local ordinances:</strong> Some cities/counties add residency/presence rules; courts in some states limit or preempt them.</li>
                <li><strong>Relief paths:</strong> Early termination, re-tiering, or removal petitions are state-specific and time-bound.</li>
              </ul>
              <p className="mt-3 text-slate-600 text-sm">
                ⚠️ Informational only—verify with primary sources; consider consulting counsel.
              </p>
            </SectionCard>

            <SectionCard title="Quick Tips for Compliance" icon={<Shield className="w-6 h-6 text-amber-600" />}>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Know your <strong>initial registration window</strong> on release/arrival.</li>
                <li>Track <strong>reporting triggers</strong>: address (including temporary lodging), employer/school, vehicles, and online identifiers.</li>
                <li>Save <strong>dated proof</strong> of submissions (receipts, emails, stamped forms).</li>
              </ul>
            </SectionCard>
          </section>
        )}

        {tab === "states" && (
          <section>
            {filtered.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {filtered.map((e) => <CardLink key={e.code} e={e} />)}
              </div>
            ) : (
              <p className="text-slate-500 italic">No states match your search.</p>
            )}
          </section>
        )}

        {tab === "map" && (
          <section className="space-y-4">
            <p className="text-slate-600">
              Select a region (top-right) or search a state. A clickable SVG map is planned; this “beta” uses region filters for accessibility and speed.
            </p>
            {filtered.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {filtered.map((e) => <CardLink key={e.code} e={e} />)}
              </div>
            ) : (
              <p className="text-slate-500 italic">No states match your region/search.</p>
            )}
          </section>
        )}

        {tab === "faq" && (
          <section className="space-y-8">
            <SectionCard title="Frequently Asked Questions" icon={<Shield className="w-6 h-6 text-sky-600" />}>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-semibold">Is this legal advice?</p>
                  <p>This hub is informational only. Laws change; verify with primary sources and consider consulting an attorney.</p>
                </div>
                <div>
                  <p className="font-semibold">What if state and local rules conflict?</p>
                  <p>Courts may limit or preempt local ordinances; your state page notes major cases where relevant.</p>
                </div>
                <div>
                  <p className="font-semibold">How current is each state page?</p>
                  <p>Each page shows a “Last reviewed” date. We update as statutes, rules, or cases change.</p>
                </div>
                <div>
                  <p className="font-semibold">Can I suggest a correction?</p>
                  <p>Yes—use the contact link on any state page (coming soon) to report updates or errors with a citation.</p>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Glossary (Plain Language)" icon={<BookOpen className="w-6 h-6 text-purple-600" />}>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li><strong>SORNA:</strong> Federal standards for registration/notification that states implement differently.</li>
                <li><strong>Verification:</strong> Required re-appearance or update cadence (e.g., annually or quarterly).</li>
                <li><strong>Reporting trigger:</strong> A change you must report (address, job/school, vehicle, online ID).</li>
                <li><strong>Residency zone:</strong> State/local rule restricting where someone can live or be present.</li>
                <li><strong>Relief path:</strong> A legal process that may reduce duration, tier, or remove registration.</li>
              </ul>
            </SectionCard>
          </section>
        )}
      </main>
    </div>
  );
}