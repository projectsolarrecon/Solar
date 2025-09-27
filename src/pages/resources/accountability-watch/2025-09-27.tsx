// Accountability Watch — Week of Sep 21–27, 2025
// SOLAR Project

import React from "react";
import { Helmet } from "react-helmet";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold ring-1 ring-white/50 backdrop-blur print:ring-0">
      {children}
    </span>
  );
}

function Section({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm print:shadow-none">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
        <span aria-hidden>{icon ?? "📑"}</span>
        <span>{title}</span>
      </h2>
      <div className="prose prose-slate max-w-none text-slate-800">{children}</div>
    </section>
  );
}

function CaseRow({
  name,
  role,
  jurisdiction,
  stage,
  date,
  summary,
  registry,
  sources,
}: {
  name: string;
  role: string;
  jurisdiction: string;
  stage: string;
  date: string;
  summary: React.ReactNode;
  registry: string;
  sources: { label: string; href: string }[];
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{name}</span>
        <span>— {role}</span>
        <span className="ml-auto whitespace-nowrap">{date}</span>
      </div>
      <div className="mt-1 text-sm text-slate-600">
        <div>
          <span className="font-medium">Jurisdiction:</span> {jurisdiction} ·{" "}
          <span className="font-medium">Stage:</span> {stage}
        </div>
        <div className="mt-1 text-slate-800">{summary}</div>
        <div className="mt-2 text-xs">
          <span className="font-medium">Registry Status:</span> {registry}
        </div>
        {sources?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {sources.map((s, i) => (
              <a
                key={i}
                className="inline-flex items-center gap-1 rounded-full border px-2 py-1 hover:bg-slate-100"
                href={s.href}
                target="_blank"
                rel="noopener"
              >
                🔗 <span className="underline underline-offset-2">{s.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AccountabilityWatch_2025_09_27() {
  const pageTitle = "Accountability Watch — Week of Sep 21–27, 2025 | SOLAR";

  const atAGlance = [
    "SC lawmaker RJ May enters guilty plea to federal CSAM counts.",
    "Former LA official & ex-priest Mark Ford arrested on severe abuse charges.",
    "NYC teacher Christopher Ward federally charged for CSAM offenses.",
    "UK running back Jamarion Wilcox arrested for sexual abuse.",
    "Texas physician Kenneth Haygood plea/dismissal controversy.",
  ];

  const newArrestsCharges = [
    {
      name: "Mark Francis Ford",
      role: "former Louisiana state official & ex-priest",
      jurisdiction: "New Orleans, LA / Indiana (extradition)",
      stage: "Arrested / Charged",
      date: "Sep 26, 2025",
      summary: <>Accused of long-term abuse of a disabled child; arrested in Indiana on Louisiana warrants.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "Guardian", href: "https://www.theguardian.com/us-news/2025/sep/26/former-priest-official-arrested-louisiana" },
        { label: "WWL-TV", href: "https://www.wwltv.com/" },
      ],
    },
    {
      name: "Christopher Ward",
      role: "NYC first-grade public school teacher",
      jurisdiction: "SDNY / Queens, NY",
      stage: "Federal charges unsealed (CSAM)",
      date: "Sep 25, 2025",
      summary: <>Complaint alleges possession & distribution of CSAM; includes admissions by Ward.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "SDNY Press Release", href: "https://www.justice.gov/usao-sdny" },
        { label: "ABC7NY", href: "https://abc7ny.com/" },
      ],
    },
    {
      name: "Jamarion (Jamairon) Wilcox",
      role: "University of Kentucky running back (SEC)",
      jurisdiction: "Lexington, KY",
      stage: "Arrested / Charged (first-degree sexual abuse)",
      date: "Sep 26, 2025",
      summary: <>Police allege unwanted sexual contact from Aug 20 incident. Suspended from team.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "Spectrum News 1 KY", href: "https://spectrumnews1.com/ky/lexington" },
        { label: "WHAS11", href: "https://www.whas11.com/" },
      ],
    },
  ];

  const pleasUpdates = [
    {
      name: "RJ May (Robert John May III)",
      role: "former South Carolina state representative",
      jurisdiction: "Federal (South Carolina)",
      stage: "Plea agreement (guilty to 5 counts CSAM distribution)",
      date: "Sep 26, 2025",
      summary: <>Agreed to plead guilty to 5 counts of distributing CSAM; prosecutors to drop 5 other counts.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "DOJ / USAO-SC", href: "https://www.justice.gov/usao-sc/pr/west-columbia-man-indicted-distributing-child-sexual-abuse-material" },
        { label: "AP", href: "https://apnews.com/" },
        { label: "Live5 News", href: "https://www.live5news.com/" },
      ],
    },
    {
      name: "Dr. Kenneth D. Haygood",
      role: "Texas physician (suspended)",
      jurisdiction: "Tyler, TX",
      stage: "Plea / dismissals controversy",
      date: "Sep 26, 2025",
      summary: <>Plea accepted, some charges dismissed; victims say they were not notified before the hearing.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "KLTV", href: "https://www.kltv.com/" },
        { label: "CBS19 Tyler", href: "https://www.cbs19.tv/" },
      ],
    },
  ];

  const watchlist = [
    "NYC DOE/UFT responses to Ward charges.",
    "RJ May sentencing hearing next week.",
    "Wilcox case pretrial in October.",
    "Ford extradition timeline (IN → LA).",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Weekly roundup of verified arrests, charges, pleas, convictions, and sentencings involving public figures and gatekeepers, with registry-status context."
        />
      </Helmet>

      <header className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-10 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <Badge>🧭 Accountability Watch • Weekly</Badge>
          <h1 className="mt-3 text-2xl font-bold">Accountability Watch — Week of Sep 21–27, 2025</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            Verified roundup of arrests, charges, pleas, convictions, and sentencings involving public figures.
            Allegations remain allegations unless proven in court.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10">
        <Section title="At a Glance" icon="📰">
          <ul className="list-disc pl-5">{atAGlance.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </Section>

        <Section title="New Arrests & Charges" icon="⚖️">
          <div className="grid gap-3">{newArrestsCharges.map((c, i) => <CaseRow key={i} {...c} />)}</div>
        </Section>

        <Section title="Pleas & Case Updates" icon="🔁">
          <div className="grid gap-3">{pleasUpdates.map((c, i) => <CaseRow key={i} {...c} />)}</div>
        </Section>

        <Section title="Watchlist" icon="👀">
          <ul className="list-disc pl-5">{watchlist.map((w, i) => <li key={i}>{w}</li>)}</ul>
        </Section>

        <div className="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">Disclaimer</p>
          <p className="mt-1">
            All defendants are presumed innocent unless and until proven guilty in a court of law. Registry status reflects
            only what has been publicly reported; absence of mention is not definitive.
          </p>
        </div>
      </div>
    </main>
  );
      }
