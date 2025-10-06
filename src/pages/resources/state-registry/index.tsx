import React from "react";
import GuideLayout from "../../../components/layouts/GuideLayout";
import {
  SectionBand,
  SectionCard,
  Callout,
  TOC,
} from "../../../components/solar";
import StateRegistryHubList from "../../../components/solar/StateRegistryHubList";

export default function RegistryHub(): JSX.Element {
  return (
    <GuideLayout
      title="U.S. Sex Offense Registry Hub"
      description="Find your state’s rules and learn the national framework: SORNA, Adam Walsh, International Megan’s Law, interstate transfers, and practical checklists."
      keywords="sex offender registry, SORNA, Adam Walsh Act, International Megan's Law, ICAOS, reentry, compliance"
      date="Oct 6, 2025"
      readTime="10 min"
      badge="📍 REGISTRY HUB"
      lede="Front door to every state’s registry rules, plus plain-language national guidance, verified links, and practical checklists."
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
        <Callout variant="neutral" title="Tip">
          <p>
            States shown with a “LIVE” badge have detailed guides. “COMING SOON” states will appear
            automatically as they’re published.
          </p>
        </Callout>
      </SectionCard>

      {/* NATIONAL OVERVIEW */}
      <SectionCard>
        <SectionBand title="National Overview: The Federal Framework" emblem="🧭" />
        <p className="text-slate-700">
          U.S. registry systems are guided by federal laws and implemented by states. The{" "}
          <a href="https://smart.ojp.gov/sorna" target="_blank" rel="noopener">
            Sex Offender Registration and Notification Act (SORNA)
          </a>{" "}
          — Title I of the Adam Walsh Act (2006) — sets minimum national standards, administered by
          the DOJ’s{" "}
          <a
            href="https://smart.ojp.gov/office-sex-offender-sentencing-monitoring-apprehending-registering-and-tracking"
            target="_blank"
            rel="noopener"
          >
            SMART Office
          </a>
          . States still write their own statutes and procedures, so details vary.
        </p>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Callout variant="info" title="What SORNA Does">
            <ul>
              <li>Sets minimum registration/notification standards nationwide.</li>
              <li>Requires periodic in-person verification and timely updates.</li>
              <li>
                Provides federal rules/interpretation (see{" "}
                <a href="https://smart.ojp.gov/sorna/current-law" target="_blank" rel="noopener">
                  SORNA current law & guidelines
                </a>
                ).
              </li>
            </ul>
          </Callout>

          <Callout variant="legal" title="Federal Liability">
            <p>
              Crossing state lines and failing to register can trigger federal charges under 18 U.S.C.
              § 2250. See DOJ overview:{" "}
              <a
                href="https://www.justice.gov/criminal/criminal-ceos/sex-offender-registration-and-notification-act-sorna"
                target="_blank"
                rel="noopener"
              >
                SORNA at DOJ
              </a>
              .
            </p>
          </Callout>
        </div>

        <Callout variant="info" title="International Megan’s Law (IML)">
          <p>
            IML adds international travel notice requirements and a passport identifier for certain
            registrants. See the U.S. State Department’s page:{" "}
            <a
              href="https://travel.state.gov/content/travel/en/passports/legal-matters/passports-and-international-megans-law.html"
              target="_blank"
              rel="noopener"
            >
              Passports & International Megan’s Law
            </a>{" "}
            and SMART Office brief (PDF):{" "}
            <a
              href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/International_Megans_Law_SORNA_statute_in_review082019.pdf"
              target="_blank"
              rel="noopener"
            >
              IML — Statute in Review
            </a>
            .
          </p>
        </Callout>
      </SectionCard>

      {/* COMMON DUTIES */}
      <SectionCard>
        <SectionBand title="Common Registry Duties (Most States)" emblem="📝" />
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            Register residential address, employment, and school within deadlines (often 48 hours to
            10 days, depending on the state).
          </li>
          <li>
            Periodically verify in person or by mail (annually, semi-annually, or quarterly per
            statute/classification).
          </li>
          <li>Update internet identifiers (emails, usernames, social apps) where required.</li>
          <li>
            Coordinate travel — international trips often require advance notice under IML; some
            states require in-state travel notification as well.
          </li>
          <li>Keep copies/receipts for every submission and update.</li>
        </ul>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Callout variant="warning" title="Gotchas">
            <ul>
              <li>
                Missing a mailed verification letter can count as non-compliance in some states.
              </li>
              <li>Short hotel stays can trigger “temporary residence” rules in certain states.</li>
            </ul>
          </Callout>
          <Callout variant="info" title="Where to Confirm">
            <p>
              Federal overview:{" "}
              <a href="https://smart.ojp.gov/sorna" target="_blank" rel="noopener">
                SMART Office SORNA
              </a>{" "}
              · Data snapshot:{" "}
              <a
                href="https://bjs.ojp.gov/library/publications/sex-offender-registration-and-notification-systems-2022-update"
                target="_blank"
                rel="noopener"
              >
                BJS — SORN Systems Update
              </a>
              .
            </p>
          </Callout>
        </div>
      </SectionCard>

      {/* INTERSTATE MOVES & SUPERVISION TRANSFERS */}
      <SectionCard>
        <SectionBand title="Moving Between States (Interstate Transfers)" emblem="🚚" />
        <p className="text-slate-700">
          If you are under supervision (probation/parole), interstate moves are handled through the{" "}
          <a href="https://interstatecompact.org/" target="_blank" rel="noopener">
            Interstate Compact for Adult Offender Supervision (ICAOS)
          </a>
          . ICAOS governs how supervision transfers work across all 50 states, DC, and territories.
          If you’re not under supervision, you still must comply with registration rules in both the
          origin and destination states.
        </p>
        <Callout variant="reminder" title="Before You Move">
          <ul>
            <li>Contact your current registering agency to confirm exit steps and deadlines.</li>
            <li>Confirm the destination state’s initial registration window and documents needed.</li>
            <li>Bring proof of housing/employment if requested.</li>
          </ul>
        </Callout>
        <Callout variant="info" title="Learn More">
          <p>
            About the Compact:{" "}
            <a
              href="https://compacts.csg.org/compact/interstate-compact-for-adult-offender-supervision/"
              target="_blank"
              rel="noopener"
            >
              CSG — ICAOS Overview
            </a>{" "}
            · Official site:{" "}
            <a href="https://interstatecompact.org/" target="_blank" rel="noopener">
              interstatecompact.org
            </a>
            .
          </p>
        </Callout>
      </SectionCard>

      {/* QUICK PRACTICAL CHECKLISTS */}
      <SectionCard>
        <SectionBand title="Quick Checklists" emblem="📋" />
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-800">Travel / Vacation</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Check if your destination state has a short-stay registration trigger.</li>
              <li>
                For international trips, ask your registering agency about IML notice requirements
                and timing. See{" "}
                <a
                  href="https://travel.state.gov/content/travel/en/passports/legal-matters/passports-and-international-megans-law.html"
                  target="_blank"
                  rel="noopener"
                >
                  State Dept — IML
                </a>
                .
              </li>
              <li>
                Keep itinerary copies and confirmations; document all contacts with agencies (dates,
                times, names).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Address / Job / School Changes</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Know your state’s deadline (some are 48–72 hours).</li>
              <li>Update internet identifiers if your email/usernames change.</li>
              <li>Retain stamped receipts or delivery tracking for any mailed forms.</li>
            </ul>
          </div>
        </div>
        <Callout variant="neutral" title="Documentation Tip">
          <p>
            Create a simple “compliance folder” (paper or cloud) with copies of every registry action
            and verification. It’s invaluable if questions arise later.
          </p>
        </Callout>
      </SectionCard>

      {/* DATA & RESEARCH */}
      <SectionCard>
        <SectionBand title="Data & Research" emblem="📈" />
        <Callout variant="research" title="Big Picture">
          <p>
            National research from the{" "}
            <a href="https://www.ussc.gov/research/research-reports/recidivism-federal-offenders-released-2010" target="_blank" rel="noopener">
              U.S. Sentencing Commission
            </a>{" "}
            and{" "}
            <a href="https://bjs.ojp.gov/" target="_blank" rel="noopener">
              Bureau of Justice Statistics
            </a>{" "}
            provides context on reoffending, supervision outcomes, and registry system design.
          </p>
          <p>
            For legal baselines and the latest federal rule updates, see DOJ’s SORNA pages and the
            2021 Federal Register rule:{" "}
            <a
              href="https://www.federalregister.gov/documents/2021/12/08/2021-26420/registration-requirements-under-the-sex-offender-registration-and-notification-act"
              target="_blank"
              rel="noopener"
            >
              SORNA Registration Requirements (Final Rule)
            </a>
            .
          </p>
        </Callout>
      </SectionCard>

      {/* NATIONAL ADVOCACY & SUPPORT */}
      <SectionCard>
        <SectionBand title="Advocacy, Legal Aid & Reentry (National)" emblem="🤝" />
        <div className="grid md:grid-cols-2 gap-4">
          <Callout variant="info" title="Legal & Policy">
            <ul>
              <li>
                <a href="https://www.narsol.org/" target="_blank" rel="noopener">
                  NARSOL — National Association for Rational Sexual Offense Laws
                </a>
              </li>
              <li>
                <a href="https://all4consolaws.org/" target="_blank" rel="noopener">
                  ACSOL — Alliance for Constitutional Sex Offense Laws
                </a>
              </li>
              <li>
                <a href="https://www.nacdl.org/registry" target="_blank" rel="noopener">
                  NACDL Registry Resource Center
                </a>
              </li>
            </ul>
          </Callout>
          <Callout variant="info" title="Reentry & Support">
            <ul>
              <li>
                <a href="https://nationalreentryresourcecenter.org/" target="_blank" rel="noopener">
                  National Reentry Resource Center (NRRC)
                </a>
              </li>
              <li>
                <a href="https://www.hudexchange.info/programs/reentry/" target="_blank" rel="noopener">
                  HUD Reentry Housing Toolkit
                </a>
              </li>
              <li>
                <a href="https://fortunesociety.org/" target="_blank" rel="noopener">
                  The Fortune Society
                </a>{" "}
                ·{" "}
                <a href="https://www.prisonfellowship.org/" target="_blank" rel="noopener">
                  Prison Fellowship
                </a>
              </li>
            </ul>
          </Callout>
        </div>
      </SectionCard>

      {/* FOOTER / DISCLAIMER */}
      <footer className="mt-8 text-xs text-slate-500 border-t border-slate-200 pt-4">
        <p>
          🤝 This hub blends official sources with AI-assisted research for clarity and accessibility.
          We strive for accuracy and empathy — if you see something out of date, please let us know
          so we can correct it for everyone.
        </p>
        <p className="mt-2 italic">Informational only; not legal advice.</p>
      </footer>
    </GuideLayout>
  );
}