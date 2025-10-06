import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "../../components/layouts/GuideLayout";
import {
  SectionBand,
  SectionCard,
  Callout,
  TOC,
} from "../../components/solar";
// Assuming you have a StateSearch or StateRegistryHubList component
import StateRegistryHubList from "../../components/solar/StateRegistryHubList";

export default function RegistryHub(): JSX.Element {
  return (
    <GuideLayout
      title="U.S. Sex Offense Registry Hub"
      description="National overview, resources, and guides for sex offense registry obligations across all 50 states."
      keywords="sex offender registry, SORNA, state registry, national resources, reentry"
      date="Oct 6, 2025"
      readTime="8 min"
      badge="📍 REGISTRY HUB"
      lede="Find your state’s registry requirements and get oriented to national rules, common obligations, and support resources."
      showTOC={true}
    >
      <div className="mb-6">
        <TOC />
      </div>

      {/* HERO / STATE SEARCH */}
      <SectionCard>
        <SectionBand title="Find Your State" emblem="🔍" />
        <div className="mt-4 mb-8">
          <StateRegistryHubList />
        </div>
      </SectionCard>

      {/* National Overview */}
      <SectionCard>
        <SectionBand title="National Overview: The Federal Framework" emblem="🧭" />
        <p className="text-slate-700">
          All 50 states participate in the federal sex offender registration program mandated by the
          Adam Walsh Act (specifically SORNA). But each state implements these rules differently;
          this hub helps you understand the common threads and your state-specific obligations.
        </p>
        <Callout variant="info" title="Federal Roots">
          <p>
            The SMART Office (U.S. Department of Justice) publishes guidelines and oversight for
            SORNA. <a href="https://smart.ojp.gov/" target="_blank" rel="noopener">SMART Office</a>
          </p>
        </Callout>
      </SectionCard>

      {/* Common Duties Across States */}
      <SectionCard>
        <SectionBand title="Common Registry Duties" emblem="📝" />
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Register your address, employment, and school changes within required deadlines.</li>
          <li>Periodic verification (annually, semi-annually, or quarterly, depending on classification).</li>
          <li>Update internet identifiers, email, usernames in many states.</li>
          <li>Report travel abroad under International Megan’s Law in many states.</li>
        </ul>
        <Callout variant="legal" title="Why It Matters">
          <p>
            Failure to comply can trigger both state felony sanctions *and* federal liability under
            18 U.S.C. § 2250 (interstate offender noncompliance).
          </p>
        </Callout>
      </SectionCard>

      {/* National Advocacy & Support */}
      <SectionCard>
        <SectionBand title="National Advocacy & Legal Resources" emblem="🧑‍⚖️" />
        <div className="space-y-4">
          <Callout variant="info" title="NARSOL">
            <p>
              The National Association for Rational Sexual Offense Laws offers state-by-state guides,
              legal referrals, and advocacy. <a href="https://www.narsol.org/" target="_blank" rel="noopener">narsol.org</a>
            </p>
          </Callout>
          <Callout variant="info" title="ACSOL / ALL4CONSOLAWS">
            <p>
              The Alliance for Constitutional Sex Offense Laws provides legal support and education in multiple states.
              <a href="https://all4consolaws.org/" target="_blank" rel="noopener">all4consolaws.org</a>
            </p>
          </Callout>
          <Callout variant="info" title="CURE National">
            <p>
              Advocates for criminal justice reform and provides reentry resources.
              <a href="https://www.curenational.org/" target="_blank" rel="noopener">curenational.org</a>
            </p>
          </Callout>
        </div>
      </SectionCard>

      {/* Quick Practical Checklists */}
      <SectionCard>
        <SectionBand title="Quick Checklist: Moves, Travel & Updates" emblem="📋" />
        <p className="text-slate-700 mb-4">
          These are tasks every registrant should consider — depending on their state rules:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Before moving: check how your new state handles registry transfer and compliance.</li>
          <li>Before traveling: confirm whether travel notification or registration is required in your destination state.</li>
          <li>After change of address, job, school: always update your registration record immediately.</li>
          <li>Always keep records (stamped receipts, proof of mailing, screenshots) in case of disputes.</li>
        </ul>
      </SectionCard>

      {/* Data & Research Callout */}
      <SectionCard>
        <SectionBand title="Data & Trends in Registration" emblem="📈" />
        <Callout variant="research" title="Did You Know?">
          <p>
            Some studies show that registrants have among the lowest recidivism rates of any felony group.
            The U.S. Sentencing Commission publishes recidivism data; the Bureau of Justice Statistics 
            tracks national registry and conviction stats.
          </p>
          <p>
            <a href="https://bjs.ojp.gov/" target="_blank" rel="noopener">BJS Reports</a> &middot; 
            <a href="https://www.ussc.gov/" target="_blank" rel="noopener">USSC</a>
          </p>
        </Callout>
      </SectionCard>

      {/* Footer / Disclaimer */}
      <footer className="mt-8 text-xs text-slate-500 border-t border-slate-200 pt-4">
        <p>
          🤝 This hub combines official statutes, state registry codes, and AI-assisted research. We strive
          for clarity, accuracy, and empathy — if you see something out of date, please let us know.
        </p>
        <p className="mt-2 italic">
          Informational only; not legal advice.
        </p>
      </footer>
    </GuideLayout>
  );
}