import React from "react";
import {
  MapPin,
  FileText,
  Clock,
  AlertTriangle,
  BookOpen,
  CheckCircle,
  GraduationCap,
  Globe,
  Database,
  Plane,
  Shield,
  Users,
  DollarSign,
  Gavel,
  ListChecks,
  Link as LinkIcon,
  Quote,
} from "lucide-react";

export default function NYRegistryPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ---------- HERO ---------- */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-600 text-white py-10 px-6 rounded-b-3xl shadow-md print:bg-none print:shadow-none">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight">New York Registry Rules</h1>
          <p className="mt-2 text-slate-200 text-lg">
            Registration Requirements &amp; Restrictions
          </p>
          <p className="mt-2 text-slate-300 text-sm italic">
            Last reviewed: <span className="font-semibold">—</span>
          </p>
        </div>
      </header>

      {/* ---------- BODY ---------- */}
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8 print:py-6">
        {/* 1) At-a-Glance */}
        <Card title="At a Glance" icon={<FileText className="w-6 h-6 text-blue-600" />}>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
            <li>Who must register</li>
            <li>Initial deadlines</li>
            <li>Verification cadence</li>
            <li>Primary registration authority</li>
            <li>Top “gotchas”</li>
            <li>Official links (statutes, forms, registry)</li>
          </ul>
        </Card>

        {/* 2) Who Must Register & Duration */}
        <Card title="Who Must Register & Duration" icon={<BookOpen className="w-6 h-6 text-slate-600" />}>
          <p className="text-slate-700">
            Explain covered offenses, tiering scheme, duration by tier, and juvenile applicability.
            Include when the clock starts/stops (incarceration vs. release).
          </p>
        </Card>

        {/* 3) Deadlines & Reporting Triggers */}
        <Card title="Deadlines & Reporting Triggers" icon={<Clock className="w-6 h-6 text-slate-600" />}>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Initial registration timing on release/arrival</li>
            <li>Move / address change / temporary lodging thresholds</li>
            <li>Employer / school / vehicle updates</li>
            <li>Online identifiers and phones/devices</li>
            <li>In-state short stays vs. out-of-state travel notifications</li>
          </ul>
        </Card>

        {/* 4) Verification & In-Person Requirements */}
        <Card title="Verification & In-Person Requirements" icon={<Shield className="w-6 h-6 text-slate-600" />}>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Frequency (e.g., annual / semiannual / quarterly)</li>
            <li>Where to report (sheriff / police / central office)</li>
            <li>Documents and proof required (ID, lease, utility, etc.)</li>
            <li>Fees and payment methods; hardship waivers if any</li>
          </ul>
        </Card>

        {/* 5) Residency, Presence, & Loitering Restrictions */}
        <Card title="Residency, Presence, & Loitering Restrictions" icon={<MapPin className="w-6 h-6 text-slate-600" />}>
          <p className="text-slate-700">
            Summarize any statewide distances/zones, local ordinances (if relevant), carve-outs, and court rulings that
            limit or enjoin enforcement. Note definitions for “reside,” “loiter,” “child safety zone,” etc.
          </p>
        </Card>

        {/* 6) Employment, Education, & Internet Use */}
        <Card title="Employment, Education, & Internet Use" icon={<GraduationCap className="w-6 h-6 text-slate-600" />}>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Prohibited roles/locations; license boards with special rules</li>
            <li>On-campus rules for students; practicum/clinical limits</li>
            <li>Social media / online identifier reporting; bans if any</li>
            <li>Disclosure requirements to employers or schools</li>
          </ul>
        </Card>

        {/* 7) Public Website Exposure */}
        <Card title="Public Website Exposure" icon={<Database className="w-6 h-6 text-slate-600" />}>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>What data is public (photo, aliases, vehicles, employer, etc.)</li>
            <li>When removal or suppression is possible and how</li>
            <li>Juvenile / Level 1 practices if different</li>
          </ul>
        </Card>

        {/* 8) Travel & Interstate Moves */}
        <Card title="Travel & Interstate Moves" icon={<Plane className="w-6 h-6 text-slate-600" />}>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Before-you-move checklist; notification windows</li>
            <li>Temporary visits thresholds (days/nights) triggering registration</li>
            <li>Interstate compact quirks; dual registration traps</li>
            <li>International travel notes (IML passport marking/30-day notices)</li>
          </ul>
        </Card>

        {/* 9) Compliance & Enforcement */}
        <Card title="Compliance & Enforcement" icon={<AlertTriangle className="w-6 h-6 text-yellow-600" />}>
          <p className="text-slate-700">
            Common violations (strict-liability issues), typical charges/penalties, and notable case interpretations.
            Call out “gotcha” scenarios (e.g., late online identifier update).
          </p>
        </Card>

        {/* 10) Relief Paths */}
        <Card title="Relief Paths" icon={<CheckCircle className="w-6 h-6 text-emerald-600" />}>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Early termination / re-tiering (standards &amp; timelines)</li>
            <li>Petitions to modify / remove; burdens of proof</li>
            <li>Juvenile sealing / youthful offender considerations</li>
          </ul>
        </Card>

        {/* 11) Special Populations */}
        <Card title="Special Populations" icon={<Users className="w-6 h-6 text-slate-600" />}>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Juveniles and youthful adjudications</li>
            <li>Students (K-12 and higher ed), campus housing rules</li>
            <li>Unhoused persons, disability accommodations</li>
            <li>Military members and base housing/PCS issues</li>
          </ul>
        </Card>

        {/* 12) Costs & Payments */}
        <Card title="Costs & Payments" icon={<DollarSign className="w-6 h-6 text-slate-600" />}>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Registration/verification fees; monitoring costs</li>
            <li>Waivers/hardship standards if any</li>
            <li>Accepted payment methods; receipts requirements</li>
          </ul>
        </Card>

        {/* 13) Recent Changes & Litigation */}
        <Card title="Recent Changes & Litigation" icon={<Gavel className="w-6 h-6 text-slate-600" />}>
          <p className="text-slate-700">
            List statutory changes (with effective dates), AG opinions, and appellate cases in the last 3–5 years that
            affect enforceability. Keep entries short with deep links and pin-cites.
          </p>
        </Card>

        {/* 14) Compliance Checklists & Scripts */}
        <Card title="Compliance Checklists & Scripts" icon={<ListChecks className="w-6 h-6 text-amber-600" />}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-800">New Arrival: First 30 Days</h3>
              <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-1">
                <li>Get ID, confirm address docs, schedule verification</li>
                <li>Report employer/school, vehicles, online identifiers</li>
                <li>Save receipts and proof of submission</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Moving Out / Traveling</h3>
              <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-1">
                <li>Advance notice to current authority</li>
                <li>Arrival notice to destination state (if required)</li>
                <li>Keep a copy of all notices while in transit</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-slate-800">Templates</h3>
            <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-1">
              <li>Records request (statute citations + requested fields)</li>
              <li>Relief petition starter outline</li>
            </ul>
          </div>
        </Card>

        {/* 15) Official Links & Resources */}
        <Card title="Official Links & Resources" icon={<LinkIcon className="w-6 h-6 text-indigo-600" />}>
          <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-1">
            <li>Statutes &amp; Administrative Rules (deep links)</li>
            <li>State police/AG registry portal and forms</li>
            <li>Public registry site (if applicable)</li>
            <li>Legal aid, advocacy orgs, reentry supports</li>
          </ul>
        </Card>

        {/* 16) Citations */}
        <section className="border-t border-slate-200 pt-6">
          <h2 className="text-xl font-semibold text-slate-800 flex items-center">
            <Quote className="w-5 h-5 mr-2 text-slate-600" /> Citations
          </h2>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
            <li>N.Y. Corr. Law § 168-a et seq. (deep link to specific subsection)</li>
            <li>Example Case, 123 N.Y.3d 456 (Year) (pin-cite)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

/* ---------- Helper Card Component ---------- */
function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 print:border-none print:shadow-none">
      <h2 className="flex items-center text-2xl font-semibold text-slate-800 mb-3">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <div className="text-slate-700">{children}</div>
    </section>
  );
}