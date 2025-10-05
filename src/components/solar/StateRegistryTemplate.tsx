import React from "react";
import {
  MapPin, FileText, Clock, AlertTriangle, BookOpen, CheckCircle,
  GraduationCap, Database, Plane, Shield, Users, DollarSign,
  Gavel, ListChecks, Link as LinkIcon, Quote
} from "lucide-react";

/**
 * If you have SOLAR components like SEO, ShareBar, PrintButton, Callout, etc.,
 * you can uncomment and point these imports to your actual components.
 *
 * import SEO from "@/components/solar/SEO";
 * import ShareBar from "@/components/solar/ShareBar";
 * import PrintButton from "@/components/solar/PrintButton";
 */

export type RecentChange =
  | { type: "case"; name: string; court: string; date: string; holding: string; link?: string }
  | { type: "statute"; bill: string; session: string; effective: string; summary: string; link?: string }
  | { type: "rule"; cite: string; effective: string; summary: string; link?: string };

export interface PlainLanguageBlurb {
  summary?: string[];
  watchOuts?: string[];
  edgeCases?: string[];
  confidence?: "high" | "medium" | "needs-review";
  citations?: string[];
  reviewedBy?: string;
  reviewedUTC?: string;
}

export interface StateRegistryData {
  state: string;
  lastReviewedUTC: string; // ISO
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
  badges?: {
    residencyZones?: boolean;
    lifetimePossible?: boolean;
    verificationQuarterly?: boolean;
  };
  // NEW: Plain-language layer with guardrails
  plainLanguage?: {
    [sectionKey: string]: PlainLanguageBlurb;
  };
}

export default function StateRegistryTemplate({
  data,
}: {
  data: StateRegistryData;
}) {
  const d = data;
  const fmtDate = (iso?: string) => (iso ? new Date(iso).toLocaleDateString() : "—");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Optional: <SEO ... /> */}

      {/* HERO */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-600 text-white py-10 px-6 rounded-b-3xl shadow-md print:bg-none print:shadow-none">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight">{d.state} Registry Rules</h1>
          <p className="mt-2 text-slate-200 text-lg">Registration Requirements &amp; Restrictions</p>
          <p className="mt-2 text-slate-300 text-sm italic">
            Last reviewed: <span className="font-semibold">{fmtDate(d.lastReviewedUTC)}</span>
          </p>
          {/* Optional utilities: Share/Print */}
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
            {Array.isArray(d.atAGlance?.topGotchas) &&
              d.atAGlance!.topGotchas!.map((g, i) => <li key={i}>⚠️ {g}</li>)}
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

          {/* Plain language layer */}
          <PlainBox pl={d.plainLanguage?.atAGlance} />
        </Card>

        <Card title="Who Must Register & Duration" icon={<BookOpen className="w-6 h-6 text-slate-600" />}>
          <P>{d.whoMustRegister}</P>
          <PlainBox pl={d.plainLanguage?.whoMustRegister} />
        </Card>

        <Card title="Deadlines & Reporting Triggers" icon={<Clock className="w-6 h-6 text-slate-600" />}>
          <List items={d.deadlinesReporting} />
          <PlainBox pl={d.plainLanguage?.deadlinesReporting} />
        </Card>

        <Card title="Verification & In-Person Requirements" icon={<Shield className="w-6 h-6 text-slate-600" />}>
          <List items={d.verificationInPerson} />
          <PlainBox pl={d.plainLanguage?.verificationInPerson} />
        </Card>

        <Card title="Residency, Presence, & Loitering Restrictions" icon={<MapPin className="w-6 h-6 text-slate-600" />}>
          <P>{d.residencyPresence}</P>
          <PlainBox pl={d.plainLanguage?.residencyPresence} />
        </Card>

        <Card title="Employment, Education, & Internet Use" icon={<GraduationCap className="w-6 h-6 text-slate-600" />}>
          <List items={d.employmentEducationInternet} />
          <PlainBox pl={d.plainLanguage?.employmentEducationInternet} />
        </Card>

        <Card title="Public Website Exposure" icon={<Database className="w-6 h-6 text-slate-600" />}>
          <List items={d.publicWebsiteExposure} />
          <PlainBox pl={d.plainLanguage?.publicWebsiteExposure} />
        </Card>

        <Card title="Travel & Interstate Moves" icon={<Plane className="w-6 h-6 text-slate-600" />}>
          <List items={d.travelInterstate} />
          <PlainBox pl={d.plainLanguage?.travelInterstate} />
        </Card>

        <Card title="Compliance & Enforcement" icon={<AlertTriangle className="w-6 h-6 text-yellow-600" />}>
          <P>{d.complianceEnforcement}</P>
          <PlainBox pl={d.plainLanguage?.complianceEnforcement} />
        </Card>

        <Card title="Relief Paths" icon={<CheckCircle className="w-6 h-6 text-emerald-600" />}>
          <List items={d.reliefPaths} />
          <PlainBox pl={d.plainLanguage?.reliefPaths} />
        </Card>

        <Card title="Special Populations" icon={<Users className="w-6 h-6 text-slate-600" />}>
          <List items={d.specialPopulations} />
          <PlainBox pl={d.plainLanguage?.specialPopulations} />
        </Card>

        <Card title="Costs & Payments" icon={<DollarSign className="w-6 h-6 text-slate-600" />}>
          <List items={d.costs} />
          <PlainBox pl={d.plainLanguage?.costs} />
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
                    {"link" in rc && (rc as any).link && <a className="underline" href={(rc as any).link} target="_blank" rel="noopener">link</a>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <P>—</P>
          )}
          <PlainBox pl={d.plainLanguage?.recentChangesLitigation} />
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
          <PlainBox pl={d.plainLanguage?.checklistsScripts} title="Tips for using these checklists" />
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
function Pre({ children }: { children?: string }) {
  if (!children) return <P>—</P>;
  return <pre className="mt-2 whitespace-pre-wrap bg-slate-50 rounded-lg p-3 border border-slate-100">{children}</pre>;
}
function PlainBox({ pl, title = "What this means in practice" }: { pl?: PlainLanguageBlurb; title?: string }) {
  if (!pl || (!pl.summary && !pl.watchOuts && !pl.edgeCases)) return null;
  return (
    <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <div className="text-xs text-slate-500">
          {pl.confidence ? `Confidence: ${pl.confidence}` : null}
          {pl.reviewedBy ? ` • Reviewed by ${pl.reviewedBy}` : null}
        </div>
      </div>
      {Array.isArray(pl.summary) && pl.summary.length > 0 && (
        <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-1">
          {pl.summary.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      )}
      {Array.isArray(pl.watchOuts) && pl.watchOuts.length > 0 && (
        <>
          <p className="mt-3 font-medium text-slate-800">Watch-outs</p>
          <ul className="mt-1 list-disc pl-6 text-slate-700 space-y-1">
            {pl.watchOuts.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </>
      )}
      {Array.isArray(pl.edgeCases) && pl.edgeCases.length > 0 && (
        <>
          <p className="mt-3 font-medium text-slate-800">Edge cases</p>
          <ul className="mt-1 list-disc pl-6 text-slate-700 space-y-1">
            {pl.edgeCases.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </>
      )}
      {Array.isArray(pl.citations) && pl.citations.length > 0 && (
        <p className="mt-3 text-xs text-slate-500">
          Sources: {pl.citations.join("; ")}
        </p>
      )}
      {(pl.reviewedUTC || pl.reviewedBy) && (
        <p className="mt-1 text-xs text-slate-400">
          {pl.reviewedUTC ? `Reviewed ${new Date(pl.reviewedUTC).toLocaleDateString()}` : ""}
        </p>
      )}
    </div>
  );
}