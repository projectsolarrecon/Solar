import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { legislativeUpdates, LegislativeUpdateMeta } from '../../data/legislativeUpdates';

export default function LegislativeTracker(): JSX.Element {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const items = useMemo(() => {
    // Sort newest first by ISO date string YYYY-MM-DD
    return [...legislativeUpdates].sort((a, b) => (a.date < b.date ? 1 : -1));
  }, []);

  const latest = items[0];
  const archive = items.slice(1);

  const handlePrint = () => window.print();

  const copyText = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1600);
    } catch {
      // no-op
    }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Legislative Tracker & Advocacy Hub — The SOLAR Project"
        description="Weekly highlights, plain-English explanations, and concrete actions on policy and cases shaping life on and after the registry."
        keywords="legislative tracker, registry reform, reentry policy, court cases, testimony, SOLAR"
      />

      {/* Hero / Header */}
      <section className="relative overflow-hidden text-white">
        <div className="bg-gradient-to-r from-slate-700/90 to-slate-600/90">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-3">
              <Link to="/resources" className="inline-flex items-center gap-2 text-white/85 hover:underline print:hidden" aria-label="Back to Resources">
                <span>←</span>
                <span>Back to Resources</span>
              </Link>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/25 px-3 py-1 text-sm">
              <span role="img" aria-label="newspaper">📰</span>
              <span>Current Events & Legislative Updates</span>
            </div>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold">Legislative Tracker & Advocacy Hub</h1>
            <p className="mt-3 max-w-3xl text-white/90">Weekly highlights, plain-English explanations, and concrete ways to act on the policies and cases that shape life on and after the registry.</p>
            <div className="mt-6 flex flex-wrap gap-3 print:hidden">
              {latest && (
                <Link
                  to={`/resources/legislative-tracker/${latest.slug}`}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-800 px-4 py-2 font-medium shadow hover:shadow-md"
                >
                  <span role="img" aria-label="sparkles">✨</span>
                  <span>Read this week’s full update</span>
                </Link>
              )}
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/20 text-white px-4 py-2 font-medium ring-1 ring-white/30 hover:bg-slate-900/30"
              >
                <span role="img" aria-label="printer">🖨️</span>
                <span>Print</span>
              </button>
              <a href="#archive" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/20 text-white px-4 py-2 font-medium ring-1 ring-white/30 hover:bg-slate-900/30">
                <span role="img" aria-label="file box">🗂️</span>
                <span>Browse archive</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="compass">🧭</span> How to use this page</h2>
            <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
              <li><strong>Start at the top</strong>: “This Week at a Glance” gives you the short version in under a minute.</li>
              <li><strong>Open the highlights</strong> you care about for the ELI5 summary, <em>why it matters</em>, and <em>what to do</em>.</li>
              <li><strong>Browse the archive</strong> at the bottom for prior weeks and trendlines.</li>
            </ul>
            <div className="mt-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-blue-500" aria-hidden="true"></span>🔵 info</span>
              <span className="mx-3 inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-yellow-400" aria-hidden="true"></span>🟡 reminders</span>
              <span className="mx-3 inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-orange-500" aria-hidden="true"></span>🟧 legal requirements</span>
              <span className="mx-3 inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true"></span>🟩 reentry wins</span>
              <span className="mx-3 inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-rose-500" aria-hidden="true"></span>🟥 urgent/risks</span>
            </div>
          </div>
        </div>
      </section>

      {/* This Week at a Glance */}
      <section className="py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="calendar">🗓️</span> This Week at a Glance (ELI5)</h2>
            <ul className="mt-3 space-y-2 text-slate-800">
              <li>🏛️ <strong>Federal</strong> — <em>[Example]</em> A House subcommittee held a hearing on interstate registration data sharing. <strong>ELI5:</strong> Congress asked, “Are states talking to each other fast enough?”</li>
              <li>🗺️ <strong>States</strong> — <em>[Example]</em> <strong>Ohio SB 123</strong> moved out of committee; it adds residency bans near daycares. <strong>ELI5:</strong> More places where people can’t live.</li>
              <li>⚖️ <strong>Cases</strong> — <em>[Example]</em> <strong>Doe v. CityName</strong> (state appeals court) said a retroactive rule looked like extra punishment. <strong>ELI5:</strong> Court flagged “punishment after punishment.”</li>
              <li>📣 <strong>Action</strong> — Two hearings open for public comment this week; scripts and links below.</li>
            </ul>
            <blockquote className="mt-4 border-l-4 border-blue-400 pl-4 text-slate-700 italic">
              🔵 <strong>Why this matters (30 seconds):</strong> Policy moves quickly; families live with the outcomes for years. We translate the legalese and give you direct actions that actually help.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Highlight 1 — Federal */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="star">⭐</span> Highlight 1 — Federal</h3>
            <p className="mt-2 text-slate-700"><strong>What happened (ELI5):</strong> Congress looked at whether states are quickly updating who must register and what info is shared. Think: “Is the map up to date so people aren’t blindsided after they move?”</p>
            <div className="mt-3 rounded-xl bg-blue-50 text-blue-900 p-4">
              <div className="font-medium">🟦 Info callout</div>
              <p>Key questions: timelines for updates, error correction, and a national mechanism for fixing mistakes.</p>
            </div>
            <div className="mt-3 text-slate-700">
              <p><strong>Why it matters (plain language):</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Delays = surprise “you didn’t register here yet” problems, even when someone followed the rules.</li>
                <li>Better data-sharing <strong>reduces</strong> accidental non-compliance and unnecessary arrests.</li>
              </ul>
            </div>
            <div className="mt-4">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-medium">📣 Take action — email your Representative</div>
                  <button
                    onClick={() => copyText('script-fed', 'Hello, I’m writing to support clear timelines and an appeal process for interstate registration data updates. Delays create avoidable harms for families who are trying to comply. Please support measures that ensure timely updates and a fix/appeal mechanism. Thank you.')}
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    {copiedId === 'script-fed' ? 'Copied!' : 'Copy script'}
                  </button>
                </div>
                <p className="mt-2 text-slate-700 text-sm">We provide short scripts as a starting point. Personalize with a 2–3 sentence story if you can.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Highlight 2 — State Spotlight */}
      <section className="py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="label">🏷️</span> Highlight 2 — State Spotlight (Example: Ohio SB 123)</h3>
            <p className="mt-2 text-slate-700"><strong>ELI5:</strong> The bill would expand “no-live zones” around daycares. That sounds protective, but research shows <strong>residency bans don’t prevent crime</strong> and <strong>do</strong> cause homelessness and job loss.</p>
            <div className="mt-3 rounded-xl bg-orange-50 text-amber-900 p-4">
              <div className="font-medium">🟧 Legal/Policy callout</div>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>What changes:</strong> adds new restricted zones.</li>
                <li><strong>Who’s affected:</strong> people already compliant, families with kids, landlords nearby.</li>
                <li><strong>When:</strong> effective 90 days after passage (timeline and committees here).</li>
              </ul>
            </div>
            <div className="mt-3 rounded-xl bg-amber-50 text-amber-900 p-4">
              <div className="font-medium">🔶 Why it matters</div>
              <p>Evidence shows stability (housing + work) lowers risk; bans move people away from stability. This could push families to the margins without proven safety benefits.</p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <a className="rounded-xl ring-1 ring-slate-200 p-3 hover:bg-slate-50" href="#" target="_blank" rel="noopener">Official bill page</a>
              <a className="rounded-xl ring-1 ring-slate-200 p-3 hover:bg-slate-50" href="#" target="_blank" rel="noopener">Committee calendar</a>
              <a className="rounded-xl ring-1 ring-slate-200 p-3 hover:bg-slate-50" href="#" target="_blank" rel="noopener">Bill analysis</a>
            </div>
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="font-medium">📣 Submit testimony — 60-second voicemail / written note</div>
                <button
                  onClick={() => copyText('script-state', 'Chair and Members: Please oppose expanding residency bans in SB 123. Research shows these zones do not improve safety but do increase homelessness and job loss. Support evidence-based approaches that reduce harm and improve stability. Thank you.')}
                  className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                >
                  {copiedId === 'script-state' ? 'Copied!' : 'Copy script'}
                </button>
              </div>
              <p className="mt-2 text-slate-700 text-sm">We’ll link the real committee portal and deadlines on each weekly page.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Highlight 3 — Case Watch */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="scales">⚖️</span> Highlight 3 — Case Watch (Example: Doe v. CityName)</h3>
            <p className="mt-2 text-slate-700"><strong>ELI5:</strong> A person challenged new rules applied to them <strong>after</strong> their case was over. The appeals court said, “If it walks like punishment, it might be punishment,” even if the law says it’s “civil.”</p>
            <div className="mt-3 rounded-xl bg-violet-50 text-violet-900 p-4">
              <div className="font-medium">🟪 Policy lens</div>
              <ul className="list-disc pl-6 space-y-1">
                <li>Courts are re-examining “civil vs. punitive” claims as rules pile up.</li>
                <li>Retroactive add-ons can violate constitutional protections.</li>
              </ul>
            </div>
            <div className="mt-3 rounded-xl bg-yellow-50 text-yellow-900 p-4">
              <div className="font-medium">🟨 What this could mean for you</div>
              <ul className="list-disc pl-6 space-y-1">
                <li>If similar rules apply in your state, watch for copycat lawsuits or legislative fixes.</li>
                <li>Document concrete harms (lost housing, job denials) — those facts matter in court.</li>
              </ul>
            </div>
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="font-medium">📣 Do something — join amicus efforts</div>
                <button
                  onClick={() => copyText('script-case', 'I support efforts to challenge retroactive punitive measures that function as additional punishment. Please keep me informed about amicus opportunities and ways to document concrete harms affecting families.')}
                  className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                >
                  {copiedId === 'script-case' ? 'Copied!' : 'Copy interest note'}
                </button>
              </div>
              <p className="mt-2 text-slate-700 text-sm">We’ll list active amicus contacts when available and link to official dockets/opinions.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Practical Corner */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="toolbox">🧰</span> Practical Corner (Always-on mini-guides)</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2 text-slate-800">
              <li className="rounded-xl ring-1 ring-slate-200 p-4">🔎 <strong>Find & track a bill</strong> in your state (step-by-step with screenshots).</li>
              <li className="rounded-2xl ring-1 ring-slate-200 p-4">📨 <strong>Submit testimony</strong> in 10 minutes (template + copy button).</li>
              <li className="rounded-2xl ring-1 ring-slate-200 p-4">🗣️ <strong>Call your legislator</strong> (30-second voicemail script).</li>
              <li className="rounded-2xl ring-1 ring-slate-200 p-4">🧭 <strong>Moving to another state?</strong> Checklist for avoiding registration surprises.</li>
              <li className="rounded-2xl ring-1 ring-slate-200 p-4">🧾 <strong>If you get a notice</strong> you don’t understand: what to do first.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Archive (auto from data) */}
      <section id="archive" className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="file box">🗂️</span> Archive of Weekly Updates (Newest first)</h3>
            <ul className="mt-4 divide-y divide-slate-200">
              {items.map((u: LegislativeUpdateMeta) => (
                <li key={u.slug} className="py-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <Link to={`/resources/legislative-tracker/${u.slug}`} className="font-medium text-slate-800 hover:underline">{u.title}</Link>
                      <p className="text-sm text-slate-600 mt-1">{u.summary}</p>
                    </div>
                    <div className="text-sm text-slate-500">{u.date}</div>
                  </div>
                </li>
              ))}
              {items.length === 0 && (
                <li className="py-3 text-slate-500">No updates yet.</li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* How we track, vet, and curate sources (with AI disclosure) */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="lab">🧪</span> How we track, vet, and curate sources</h3>
            <p className="mt-2 text-slate-700">We rely on a mix of <strong>primary sources</strong> (bill text, committee agendas, court dockets, official press releases) and <strong>credible analysis</strong> (state agencies, legal reviews, academic research).</p>
            <div className="mt-4 rounded-2xl bg-blue-50 text-blue-900 p-4">
              <div className="font-medium">🔵 AI assist (friendly disclosure)</div>
              <p className="mt-1">We also use AI tools to <strong>scan and organize legislative activity nationwide</strong>. This helps us spot bills and cases across 50 states and federal courts that we couldn’t realistically monitor on our own.</p>
              <p className="mt-2">AI isn’t perfect — sometimes it misses nuance or includes less relevant items. We share it here anyway because it’s often a useful starting point.</p>
              <blockquote className="mt-3 border-l-4 border-blue-400 pl-4 italic">“We don’t have the staff to monitor every statehouse and federal docket — but AI helps us bring the important threads together in one place, so families can stay informed without drowning in legalese.”</blockquote>
              <p className="mt-3"><span className="font-medium">📣 Notice something off?</span> Please let us know so we can correct or clarify.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="book">📘</span> Quick glossary
            </h3>
            <dl className="mt-3 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-medium text-slate-800">Residency ban</dt>
                <dd className="text-slate-700">Law restricting where someone may live (e.g., near schools).</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-800">Retroactive</dt>
                <dd className="text-slate-700">Applied <strong>after</strong> a person’s case ended.</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-800">Amicus brief</dt>
                <dd className="text-slate-700">Expert “friend of the court” memo to help a judge decide.</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-800">Committee</dt>
                <dd className="text-slate-700">Small group of lawmakers that hears testimony and amends bills.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Important reminders */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-yellow-50 text-yellow-900 p-6 ring-1 ring-yellow-200">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="warning">🟨</span> Important reminders
            </h3>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li><strong>Laws vary by state.</strong> Always check your current state’s rules; don’t rely only on news coverage.</li>
              <li><strong>Deadlines matter.</strong> Missed testimony windows or reporting dates can create problems fast.</li>
              <li><strong>Document everything.</strong> If a policy harms you, specifics (dates, notices, denials) can be crucial later.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Where this lives in SOLAR */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="map">🧭</span> Where this lives in SOLAR
            </h3>
            <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
              <li><strong>Hub page (this):</strong> 
                <code className="bg-slate-100 px-1 rounded">/resources/legislative-tracker</code> 
                with highlights + archive.
              </li>
              <li><strong>Each week:</strong> its own page with full links, quotes, and sources.</li>
              <li><strong>Auto-updates:</strong> once you add a line in 
                <code className="bg-slate-100 px-1 rounded">src/data/legislativeUpdates.ts</code>, 
                the newest appears at the top.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Print styles */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .print\\:bg-white { background: white !important; }
          .print\\:text-slate-900 { color: #0f172a !important; }
          .print\\:shadow-none { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
