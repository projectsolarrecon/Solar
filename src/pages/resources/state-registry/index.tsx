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
          <p className="leading-relaxed">
            States shown with a “LIVE” badge have detailed guides. “COMING SOON” states will appear
            automatically as they’re published.
          </p>
        </Callout>
      </SectionCard>

      {/* NATIONAL OVERVIEW */}
      <SectionCard>
        <SectionBand title="National Overview: The Federal Framework" emblem="🧭" />
        <div className="prose prose-slate max-w-none space-y-4 leading-relaxed">
          <p>
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
        </div>

        <div className="mt-5 grid md:grid-cols-2 gap-5">
          <Callout variant="info" title="What SORNA Does">
            <ul className="space-y-2 text-slate-700 leading-snug">
              <li>Sets minimum registration and notification standards nationwide.</li>
              <li>Requires periodic in-person verification and timely updates.</li>
              <li>
                Provides federal guidance (
                <a href="https://smart.ojp.gov/sorna/current-law" target="_blank" rel="noopener">
                  current law & guidelines
                </a>
                ).
              </li>
            </ul>
          </Callout>

          <Callout variant="legal" title="Federal Liability">
            <p className="leading-relaxed">
              Crossing state lines and failing to register can trigger federal charges under 18
              U.S.C. § 2250. See DOJ overview:{" "}
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
          <p className="leading-relaxed">
            IML adds international travel notice requirements and a passport identifier for certain
            registrants. See{" "}
            <a
              href="https://travel.state.gov/content/travel/en/passports/legal-matters/passports-and-international-megans-law.html"
              target="_blank"
              rel="noopener"
            >
              State Department overview
            </a>{" "}
            or{" "}
            <a
              href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/International_Megans_Law_SORNA_statute_in_review082019.pdf"
              target="_blank"
              rel="noopener"
            >
              SMART Office brief (PDF)
            </a>
            .
          </p>
        </Callout>
      </SectionCard>

      {/* COMMON DUTIES */}
      <SectionCard>
        <SectionBand title="Common Registry Duties (Most States)" emblem="📝" />
        <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
          <li>Register home, work, and school addresses within required deadlines.</li>
          <li>
            Verify periodically in person or by mail, usually every 3, 6, or 12 months depending on
            tier.
          </li>
          <li>Update internet identifiers and vehicles if your state requires it.</li>
          <li>
            Notify your registry agency before traveling; most require in-state notice, and federal
            law requires advance notice abroad.
          </li>
        </ul>

        <div className="mt-5 grid md:grid-cols-2 gap-5">
          <Callout variant="warning" title="Gotchas">
            <ul className="space-y-2 text-slate-700 leading-snug">
              <li>Missing a mailed verification letter can count as failure to register.</li>
              <li>Short hotel stays can trigger “temporary residence” status.</li>
            </ul>
          </Callout>
          <Callout variant="info" title="Where to Confirm">
            <p className="leading-relaxed">
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
                BJS — 2022 Update
              </a>
              .
            </p>
          </Callout>
        </div>
      </SectionCard>

      {/* INTERSTATE TRANSFERS */}
      <SectionCard>
        <SectionBand title="Moving Between States (Interstate Transfers)" emblem="🚚" />
        <div className="prose prose-slate max-w-none space-y-4 leading-relaxed">
          <p>
            Moves while on probation or parole are handled through the{" "}
            <a href="https://interstatecompact.org/" target="_blank" rel="noopener">
              Interstate Compact for Adult Offender Supervision (ICAOS)
            </a>
            . If you’re not under supervision, you still must comply with registration in both the
            origin and destination states.
          </p>
        </div>
        <Callout variant="reminder" title="Before You Move">
          <ul className="space-y-2 text-slate-700 leading-snug">
            <li>Confirm exit procedures with your current registry agency.</li>
            <li>Verify arrival deadlines and forms for your new state.</li>
            <li>Keep proof of communication and registration actions.</li>
          </ul>
        </Callout>
      </SectionCard>

      {/* ADVOCACY */}
      <SectionCard>
        <SectionBand title="Advocacy, Legal Aid & Reentry" emblem="🤝" />
        <div className="grid md:grid-cols-2 gap-5">
          <Callout variant="info" title="Legal & Policy">
            <ul className="space-y-2 text-slate-700 leading-snug">
              <li>
                <a href="https://www.narsol.org/" target="_blank" rel="noopener">
                  NARSOL
                </a>{" "}
                — Rational reform advocacy & education.
              </li>
              <li>
                <a href="https://all4consolaws.org/" target="_blank" rel="noopener">
                  ACSOL
                </a>{" "}
                — Litigation & policy reform.
              </li>
              <li>
                <a href="https://www.nacdl.org/registry" target="_blank" rel="noopener">
                  NACDL Registry Resource Center
                </a>
              </li>
            </ul>
          </Callout>

          <Callout variant="success" title="Reentry & Support">
            <ul className="space-y-2 text-slate-700 leading-snug">
              <li>
                <a href="https://nationalreentryresourcecenter.org/" target="_blank" rel="noopener">
                  National Reentry Resource Center
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
                &{" "}
                <a href="https://www.prisonfellowship.org/" target="_blank" rel="noopener">
                  Prison Fellowship
                </a>
              </li>
            </ul>
          </Callout>
        </div>
      </SectionCard>

      {/* FOOTER */}
      <footer className="mt-8 text-xs text-slate-500 border-t border-slate-200 pt-4 leading-relaxed">
        <p>
          🤝 This hub blends official sources with AI-assisted research for clarity and accessibility.
          We strive for accuracy and empathy — if you see something out of date, please let us know.
        </p>
        <p className="mt-2 italic">Informational only; not legal advice.</p>
      </footer>
    </GuideLayout>
  );
}