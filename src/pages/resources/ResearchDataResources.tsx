import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";
import {
  GuideCallout,
  GuideIntro,
  GuideProse,
  GuideSectionCard,
  GuideSectionHeader,
  OverviewCards,
  ResourceLinkGrid,
} from "../../components/solar";
import { anchorSourceIds, positions, sourceCatalog, sourceGroups } from "./researchDataLibrary";
import type { ResearchSourceId } from "./researchDataLibrary";

const renderSourceLinks = (ids: readonly ResearchSourceId[]) => (
  <div className="flex flex-wrap gap-2">
    {ids.map((id) => (
      <a key={id} href={sourceCatalog[id].href} target="_blank" rel="noopener noreferrer"
        title={sourceCatalog[id].title}
        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-200 transition-colors">
        <span className="text-slate-500">{id}</span> · {sourceCatalog[id].title}
      </a>
    ))}
  </div>
);

const researchGateways = [
  { label: "Bureau of Justice Statistics", description: "Official federal statistics and reports on crime, victimization, corrections, and recidivism.", href: "https://bjs.ojp.gov/", badge: "Official" },
  { label: "SMART Office", description: "Federal resources on registry management, SORNA, case law, research, treatment, and policy.", href: "https://smart.ojp.gov/", badge: "Official" },
  { label: "U.S. Sentencing Commission", description: "Federal sentencing data and research, including reports on non-production CSEM offenses and recidivism.", href: "https://www.ussc.gov/research", badge: "Official" },
  { label: "National Institute of Justice", description: "Research and evaluation materials on criminal justice policy and public safety.", href: "https://nij.ojp.gov/", badge: "Official" },
  { label: "PubMed", description: "Search peer-reviewed biomedical, behavioral, treatment, and public-health research.", href: "https://pubmed.ncbi.nlm.nih.gov/", badge: "Research" },
  { label: "Google Scholar", description: "Search academic literature, citations, related studies, and newer work building on the sources in this guide.", href: "https://scholar.google.com/", badge: "Research" },
  { label: "U.S. Supreme Court opinions on Justia", description: "Readable access to Supreme Court opinions, including Smith v. Doe and Packingham v. North Carolina.", href: "https://supreme.justia.com/", badge: "Court" },
];

function SourceCard({ id }: { id: ResearchSourceId }) {
  const source = sourceCatalog[id];
  return (
    <article className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{id}</span>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">{source.type}</span>
      </div>
      <h4 className="mt-3 font-bold text-slate-950">{source.title}</h4>
      <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{source.organization}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{source.usefulFor}</p>
      <a href={source.href} target="_blank" rel="noopener noreferrer"
        className="mt-3 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">Open source</a>
    </article>
  );
}

export default function ResearchDataResources(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO title="Research & Data Resources | The SOLAR Project"
        description="Explore the research and data behind SOLAR's positions on registries, recidivism, child safety, collateral harm, constitutional concerns, and evidence-based reform."
        keywords="registry research, registry reform evidence, recidivism data, registration and notification, collateral consequences, prevention, SOLAR Project" />

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white py-12 sm:py-16 no-print">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/resources" className="inline-flex items-center text-sm text-slate-200 hover:text-white">← Back to Resources</Link>
          <div className="mt-5 inline-flex rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">SOLAR Resource Guide</div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">Research & Data Resources</h1>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100">Explore the research behind SOLAR’s positions on registries, recidivism, child safety, public policy, reintegration, and reform.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button type="button" onClick={() => window.print()} className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100">🖨️ Print Guide</button>
            <a href="#source-library" className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 text-center">Jump to source library</a>
          </div>
        </div>
      </section>
      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ShareBar />
        <GuideIntro title="The evidence behind our advocacy" icon="🧭">
          <p>SOLAR is an advocacy organization. We read the research, compare findings across disciplines and jurisdictions, and use that evidence to shape the positions that guide our public education and reform work.</p>
          <p>This guide brings those positions and their supporting sources together in one place—for readers who want to see where our conclusions come from, explore the underlying research, or use the same sources in their own advocacy and analysis.</p>
          <p>No single study carries the whole argument. Taken together, these sources shape our understanding of what registry policy does, what it fails to do, who is actually at risk, and what evidence-based public safety can look like instead.</p>
        </GuideIntro>

        <GuideCallout tone="research" icon="🔎" title="A note on recidivism data">
          <p>Recidivism can be measured by rearrest, reconviction, reincarceration, or other recorded events. Those measures are not identical, not every offense is reported or detected, and follow-up periods and study populations matter.</p>
        </GuideCallout>

        <GuideSectionHeader id="solar-positions" number="1" title="SOLAR positions and supporting evidence" subtitle="Our nine core advocacy positions, paired with the research and data that inform them." />
        <OverviewCards columns={3} cards={positions.map((p, i) => ({ eyebrow: `Position ${i + 1}`, title: p.overviewTitle, icon: p.icon, tone: "neutral", description: p.body }))} />
        <div className="mt-6 grid gap-5">
          {positions.map((p, i) => (
            <div key={p.id} id={p.id} className="scroll-mt-24"><GuideSectionCard>
              <div className="flex items-start gap-3"><span className="text-2xl" aria-hidden="true">{p.icon}</span><div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">SOLAR Position {i + 1}</p>
                <h3 className="mt-1 text-xl font-bold text-slate-950">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-700">{p.body}</p>
              </div></div>
              <div className="mt-5 border-t border-slate-200 pt-4"><p className="mb-3 text-sm font-semibold text-slate-900">Supporting research and data</p>{renderSourceLinks(p.sourceIds)}</div>
            </GuideSectionCard></div>
          ))}
        </div>

        <GuideSectionHeader id="anchor-sources" number="2" title="Key sources to start with" subtitle="A front shelf of especially useful studies, reports, and cases for understanding the evidence behind SOLAR’s positions." />
        <GuideSectionCard><GuideProse><p>If you are new to the subject, these sources are good entry points. They cover registry effectiveness, recidivism, child safety, constitutional law, collateral harm, desistance, and evidence-based reform from several different angles.</p></GuideProse>
          <div className="mt-6 grid gap-4 md:grid-cols-2">{anchorSourceIds.map((id) => <SourceCard key={id} id={id} />)}</div>
        </GuideSectionCard>

        <GuideSectionHeader id="federal-non-production" number="3" title="A closer look at federal non-production recidivism" subtitle="U.S. Sentencing Commission research gives us a particularly useful view of one often-misunderstood subgroup." />
        <GuideSectionCard><GuideProse>
          <p>Federal non-production CSEM cases are frequently discussed as though repeat sexual offending is nearly inevitable. The Sentencing Commission’s own research does not support that picture.</p>
          <p>In the Commission’s 2021 study, 4.3% of the studied non-production cohort was rearrested for a sex offense within three years. Earlier longer-follow-up work found similarly low known sexual and contact-sexual recidivism relative to common public assumptions and contact-offender comparison groups.</p>
          <p>These findings reinforce a broader principle running throughout this guide: offense labels are poor substitutes for individualized risk.</p>
        </GuideProse><div className="mt-5">{renderSourceLinks(["SE29", "SE30"])}</div></GuideSectionCard>

        <GuideSectionHeader id="source-library" number="4" title="Complete source library" subtitle="Browse the full external evidence catalog used across this guide and the Supported Claims Library, organized by research domain." />
        <GuideCallout tone="research" icon="📚" title="A complete, cross-referenced evidence shelf">
          <p>This library includes all 67 external sources currently cited across this guide and SOLAR’s Supported Claims Library. The seven domains below are organized by research question rather than advocacy position, so a source can appear in more than one domain when it materially informs more than one question.</p>
        </GuideCallout>
        <div className="mt-6 grid gap-5">
          {sourceGroups.map((group) => <GuideSectionCard key={group.title}>
            <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{group.description}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">{group.ids.map((id) => <SourceCard key={`${group.title}-${id}`} id={id} />)}</div>
          </GuideSectionCard>)}
        </div>

        <GuideSectionHeader id="research-tools" number="5" title="Keep researching" subtitle="Official databases, research indexes, and legal resources for going beyond the sources collected here." />
        <GuideSectionCard><ResourceLinkGrid title="Research starting points" resources={researchGateways} /></GuideSectionCard>
      </main>
    </div>
  );
}
