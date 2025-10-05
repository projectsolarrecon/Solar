import React from "react";
import {
  MapPin, FileText, Clock, AlertTriangle, BookOpen, CheckCircle,
  GraduationCap, Globe, Database, Plane, Shield, Users, DollarSign,
  Gavel, ListChecks, Link as LinkIcon, Quote
} from "lucide-react";

export type RecentChange =
  | { type: "case"; name: string; court: string; date: string; holding: string; link: string }
  | { type: "statute"; bill: string; session: string; effective: string; summary: string; link: string }
  | { type: "rule"; cite: string; effective: string; summary: string; link: string };

export interface StateRegistryData {
  state: string;
  lastReviewedUTC: string; // ISO date
  atAGlance: {
    mustRegister?: string;
    initialDeadline?: string;
    verificationCadence?: string;
    primaryMethod?: string;
    topGotchas?: string[];
    officialLinks?: {
      statuteIndex?: string;
      adminRules?: string;
      statePoliceRegistry?: string;
      formsPortal?: string;
      publicWebsite?: string;
    };
  };
  whoMustRegister?: string;
  deadlinesReporting?: string[];
  verificationInPerson?: string[];
  residencyPresence?: string;
  employmentEducationInternet?: string[];
  publicWebsiteExposure?: string[];
  travelInterstate?: string[];
  complianceEnforcement?: string;
  reliefPaths?: string[];
  specialPopulations?: string[];
  costs?: string[];
  recentChangesLitigation?: RecentChange[];
  checklistsScripts?: {
    newArrivalChecklist?: string[];
    movingOutChecklist?: string[];
    recordsRequestTemplate?: string;
    reliefPetitionOutline?: string;
  };
  resources?: {
    legalAid?: { name: string; link: string }[];
    advocacy?: { name: string; link: string }[];
    reentry?: { name: string; link: string }[];
  };
  citations?: string[];
}

export default function StateRegistryTemplate({ data }: { data: StateRegistryData }) {
  const d = data;
  const fmtDate = (iso?: string) => (iso ? new Date(iso).toLocaleDateString() : "—");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-600 text-white py-10 px-6 rounded-b-3xl shadow-md print:bg-none print:shadow-none">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight">{d.state} Registry Rules</h1>
          <p className="mt-2 text-slate-200 text-lg">Registration Requirements &amp; Restrictions</p>
          <p className="mt-2 text-slate-300 text-sm italic">
            Last reviewed: <span className="font-semibold">{fmtDate(d.lastReviewedUTC)}</span>
          </p>
        </div>
      </header>

      {/* BODY */}
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8 print:py-6">
        {/* 1) At-a-Glance */}
        <Card title="At a Glance" icon={<FileText className="w-6 h-6 text-blue-600" />}>
          <ul className="mt-1 list-disc pl-6 text-slate-700 space-y-1">
            {d.atAGlance?.mustRegister && <li><strong>Who must register:</strong> {d.atAGlance.mustRegister}</li>}
            {d.atAGlance?.initialDeadline && <li><strong>Initial deadline:</strong> {d.atAGlance.initialDeadline}</li>}
            {d.atAGlance?.verificationCadence && <li><strong>Verification:</strong> {d.atAGlance.verificationCadence}</li>}
            {d.atAGlance?.primaryMethod && <li><strong>Primary method:</strong> {d.atAGlance.primaryMethod}</li>}
            {Array.isArray(d.atAGlance?.topGotchas) && d.atAGlance!.topGotchas!.map((g, i) => <li key={i}>⚠️ {g}</li>)}
          </ul>
          {d.atAGlance?.officialLinks && (
            <div className="mt-3">
              <h3 className="font-semibold text-slate-800">Official Links</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                {d.atAGlance.officialLinks.statuteIndex && <li><a className="underline" href={d.atAGlance.officialLinks.statuteIndex} target="_blank" rel="noopener">Statutes</a></li>}
                {d.atAGlance.officialLinks.adminRules && <li><a className="underline" href={d.atAGlance.officialLinks.adminRules} target="_blank" rel="noopener">Admin Rules</a></li>}
                {d.atAGlance.officialLinks.statePoliceRegistry && <li><a className="underline" href={d.atAGlance.officialLinks.statePoliceRegistry} target="_blank" rel="noopener">Registry Portal</a></li>}
                {d.atAGlance.officialLinks.formsPortal && <li><a className="underline" href={d.atAGlance.officialLinks.formsPortal} target="_blank" rel="noopener">Forms</a></li>}
                {d.atAGlance.officialLinks.publicWebsite && <li><a className="underline" href={d.atAGlance.officialLinks.publicWebsite} target="_blank" rel="noopener">Public Website</a></li>}
              </ul>
            </div>
          )}
        </Card>

        <Card title="Who Must Register & Duration" icon={<BookOpen className="w-6 h-6 text-slate-600" />}>
          <P>{d.whoMustRegister}</P>
        </Card>

        <Card title="Deadlines & Reporting Triggers" icon={<Clock className="w-6 h-6 text-slate-600" />}>
          <List items={d.deadlinesReporting} />
        </Card>

        <Card title="Verification & In-Person Requirements" icon={<Shield className="w-6 h-6 text-slate-600" />}>
          <List items={d.verificationInPerson} />
        </Card>

        <Card title="Residency, Presence, & Loitering Restrictions" icon={<MapPin className="w-6 h-6 text-slate-600" />}>
          <P>{d.residencyPresence}</P>
        </Card>

        <Card title="Employment, Education, & Internet Use" icon={<GraduationCap className="w-6 h-6 text-slate-600" />}>
          <List items={d.employmentEducationInternet} />
        </Card>

        <Card title="Public Website Exposure" icon={<Database className="w-6 h-6 text-slate-600" />}>
          <List items={d.publicWebsiteExposure} />
        </Card>

        <Card title="Travel & Interstate Moves" icon={<Plane className="w-6 h-6 text-slate-600" />}>
          <List items={d.travelInterstate} />
        </Card>

        <Card title="Compliance & Enforcement" icon={<AlertTriangle className="w-6 h-6 text-yellow-600" />}>
          <P>{d.complianceEnforcement}</P>
        </Card>

        <Card title="Relief Paths" icon={<CheckCircle className="w-6 h-6 text-emerald-600" />}>
          <List items={d.reliefPaths} />
        </Card>

        <Card title="Special Populations" icon={<Users className="w-6 h-6 text-slate-600" />}>
          <List items={d.specialPopulations} />
        </Card>

        <Card title="Costs & Payments" icon={<DollarSign className="w-6 h-6 text-slate-600" />}>
          <List items={d.costs} />
        </Card>

        <Card title="Recent Changes & Litigation" icon={<Gavel className="w-6 h-6 text-slate-600" />}>
          {Array.isArray(d.recentChangesLitigation) && d.recentChangesLitigation.length > 0 ? (
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              {d.recentChangesLitigation.map((rc, i) => {
                if ("name" in rc) {
                  return (
                    <li key={i}>
                      <strong>Case:</strong> {rc.name} — {rc.court} ({rc.date}) — {rc.holding}{" "}
                      {rc.link && <a className="underline" href={rc.link} target="_blank" rel="noopener">link</a>}
                    </li>
                  );
                }
                if ("bill" in rc) {
                  return (
                    <li key={i}>
                      <strong>Statute:</strong> {rc.bill} — {rc.session}; effective {rc.effective}. {rc.summary}{" "}
                      {rc.link && <a className="underline" href={rc.link} target="_blank" rel="noopener">link</a>}
                    </li>
                  );
                }
                return (
                  <li key={i}>
                    <strong>Rule:</strong> {rc.cite}; effective {rc.effective}. {rc.summary}{" "}
                    {"link" in rc && rc.link && <a className="underline" href={rc.link} target="_blank" rel="noopener">link</a>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <P>—</P>
          )}
        </Card>

        <Card title="Compliance Checklists & Scripts" icon={<ListChecks className="w-6 h-6 text-amber-600" />}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-800">New Arrival: First 30 Days</h3>
              <List items={d.checklistsScripts?.newArrivalChecklist} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Moving Out / Traveling</h3>
              <List items={d.checklistsScripts?.movingOutChecklist} />
            </div>
          </div>
          {d.checklistsScripts?.recordsRequestTemplate && (
            <div className="mt-4">
              <h3 className="font-semibold text-slate-800">Records Request Template</h3>
              <Pre>{d.checklistsScripts.recordsRequestTemplate}</Pre>
            </div>
          )}
          {d.checklistsScripts?.reliefPetitionOutline && (
            <div className="mt-4">
              <h3 className="font-semibold text-slate-800">Relief Petition Outline</h3>
              <Pre>{d.checklistsScripts.reliefPetitionOutline}</Pre>
            </div>
          )}
        </Card>

        <Card title="Official Links & Resources" icon={<LinkIcon className="w-6 h-6 text-indigo-600" />}>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-slate-800">Legal Aid</h3>
              <Links items={d.resources?.legalAid} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Advocacy</h3>
              <Links items={d.resources?.advocacy} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Reentry</h3>
              <Links items={d.resources?.reentry} />
            </div>
          </div>
        </Card>

        {/* Citations */}
        <section className="border-t border-slate-200 pt-6">
          <h2 className="text-xl font-semibold text-slate-800 flex items-center">
            <Quote className="w-5 h-5 mr-2 text-slate-600" /> Citations
          </h2>
          {Array.isArray(d.citations) && d.citations.length > 0 ? (
            <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
              {d.citations.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          ) : (
            <p className="mt-2 text-slate-600">—</p>
          )}
        </section>
      </main>
    </div>
  );
}

/* ---------- Small helpers ---------- */
function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 print:border-none print:shadow-none">
      <h2 className="flex items-center text-2xl font-semibold text-slate-800 mb-3">
        {icon}<span className="ml-2">{title}</span>
      </h2>
      <div className="text-slate-700">{children}</div>
    </section>
  );
}
function P({ children }: { children?: React.ReactNode }) {
  return <p className="text-slate-700">{children || "—"}</p>;
}
function List({ items }: { items?: string[] }) {
  if (!Array.isArray(items) || items.length === 0) return <P>—</P>;
  return <ul className="list-disc pl-6 text-slate-700 space-y-1">{items.map((x, i) => <li key={i}>{x}</li>)}</ul>;
}
function Links({ items }: { items?: { name: string; link: string }[] }) {
  if (!Array.isArray(items) || items.length === 0) return <P>—</P>;
  return (
    <ul className="list-disc pl-6 text-slate-700 space-y-1">
      {items.map((x, i) => (
        <li key={i}>
          <a className="underline" href={x.link} target="_blank" rel="noopener">{x.name}</a>
        </li>
      ))}
    </ul>
  );
}
function Pre({ children }: { children?: string }) {
  if (!children) return <P>—</P>;
  return <pre className="mt-2 whitespace-pre-wrap bg-slate-50 rounded-lg p-3 border border-slate-100">{children}</pre>;
}