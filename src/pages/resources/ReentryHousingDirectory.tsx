import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";

type HousingLead = {
  name: string;
  region: string;
  status: string;
  summary: string;
  eligibility: string;
  federalNote: string;
  phone: string;
  phoneHref: string;
  links: { label: string; href: string }[];
};

const lastReviewed = "October 29, 2026";

const oregonLeads: HousingLead[] = [
  {
    name: "Free on the Outside",
    region: "Oregon City / Portland metro (Clackamas, Multnomah and Washington counties)",
    status: "Current public intake listing; relevant experience documented",
    summary:
      "Offers transitional, shared, and sober-living housing. Oregon 211 lists a pre-screening intake process and says the program does not reject people solely for criminal history or credit.",
    eligibility:
      "Confirm which specific homes accommodate registrants, household/minor-contact restrictions, required sobriety, charges, waitlists and available locations. Its organization-wide housing includes family homes, which may not fit every applicant's conditions.",
    federalNote:
      "In a 2023 proposal filed with Deschutes County, the organization reported transitional housing for people under federal supervision and specialized sex-offense-related housing. This does NOT establish that BOP can place someone there before the end of a federal prison sentence.",
    phone: "(503) 867-3157 — men's intake; main: (503) 383-1834",
    phoneHref: "tel:+15038673157",
    links: [
      { label: "Organization", href: "https://www.freeontheoutside.org/" },
      { label: "211 intake listing", href: "https://gethelp.211info.org/agency/24863/21007/" },
      { label: "Federal Public Defender listing", href: "https://or.fd.org/housing" },
    ],
  },
  {
    name: "Sponsors, Inc.",
    region: "Eugene / Lane County",
    status: "Specialized housing historically documented; current federal eligibility unconfirmed",
    summary:
      "Sponsors offers reentry assistance and transitional housing in Lane County. Oregon State Police lists Sponsors as a transitional-housing resource, and local 211 describes its current reentry services.",
    eligibility:
      "Current public transitional-housing descriptions emphasize people released from Oregon state prisons or local jails and supervised in Lane County. Ask separately whether any housing for adults with sex-offense histories is currently operating and accepts out-of-state or federal releases.",
    federalNote:
      "A 2018 Federal Public Defender resource guide described dedicated longer-term housing for men with sex-offense backgrounds. That historical description is not evidence of present bed availability, pricing, or direct BOP prerelease placement.",
    phone: "(541) 485-8341 — main office",
    phoneHref: "tel:+15414858341",
    links: [
      { label: "Organization", href: "https://www.sponsorsinc.org/" },
      { label: "211 reentry listings", href: "https://www.211info.org/get-help/employment/ex-offender-reentry-programs/" },
      { label: "Oregon State Police resource page", href: "https://www.oregon.gov/osp/programs/sor/pages/offenderinformation.aspx" },
    ],
  },
];

const sourceLinks = [
  { label: "211 Oregon — Free on the Outside housing/intake", href: "https://gethelp.211info.org/agency/24863/21007/" },
  { label: "Free on the Outside — housing program", href: "https://www.freeontheoutside.org/" },
  { label: "Federal Public Defender (Oregon) — housing resources", href: "https://or.fd.org/housing" },
  { label: "Deschutes County public record — Free on the Outside's 2023 proposal (historical program description)", href: "https://mccmeetingspublic.blob.core.usgovcloudapi.net/deschutes-meet-3fcd88a2baf847848e2aa982f0a98b86/ITEM-Attachment-001-5cd80dd0b9e4490ebd475bdc51731635.pdf" },
  { label: "211 Oregon — reentry providers, including Sponsors", href: "https://www.211info.org/get-help/employment/ex-offender-reentry-programs/" },
  { label: "Oregon State Police — housing and reentry resources", href: "https://www.oregon.gov/osp/programs/sor/pages/offenderinformation.aspx" },
  { label: "Federal Public Defender — 2018 community services resource guide (historical Sponsors description)", href: "https://or.fd.org/sites/or/files/pdfs/2018-06-20%20Resource%20Guide%20to%20Community%20Programs%20and%20Services%20for%20Federal%20Offenders.pdf" },
  { label: "Oregon Legislature — ORS 144.102 (state post-prison supervision)", href: "https://www.oregonlegislature.gov/bills_laws/ors/ors144.html" },
  { label: "Oregon Legislature — ORS 137.540 (state probation)", href: "https://www.oregonlegislature.gov/bills_laws/ors/ors137.html" },
  { label: "BOP Program Statement 7310.04 — CCC/RRC referral limitations", href: "https://www.bop.gov/policy/progstat/7310_004.pdf" },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-sky-700 font-semibold underline underline-offset-2 hover:text-sky-900 break-words" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function ReentryHousingDirectory(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Transitional & Reentry Housing Leads: Oregon Pilot | The SOLAR Project"
        description="Source-backed Oregon reentry housing leads for people with sex-offense convictions, with federal release questions and a pre-application verification checklist."
        keywords="Oregon transitional housing, reentry housing, registered sex offenders, federal supervised release, BOP RRC, Sponsors Eugene, Free on the Outside"
      />

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 py-12 sm:py-16 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/resources" className="text-sm text-slate-200 hover:text-white">← Back to SOLAR Resources</Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-sky-200">SOLAR Housing & Reentry Resources</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Transitional & Reentry Housing Leads</h1>
          <p className="mt-3 text-lg text-slate-100">Oregon pilot directory — sources, eligibility questions, and the distinction between housing and prerelease custody.</p>
          <p className="mt-4 text-sm text-slate-200">Research reviewed: {lastReviewed}. No provider has confirmed current placement availability directly to SOLAR.</p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-9">
        <ShareBar />

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <h2 className="text-xl font-bold text-slate-900">These are leads, not approved beds</h2>
          <p className="mt-2 leading-relaxed">
            Public records and provider listings can show that a program exists and has worked with people with sex-offense convictions. They cannot establish that a room is open, that your specific conviction and conditions are accepted, or that the Bureau of Prisons will approve prerelease placement there. Confirm eligibility with the provider and placement authority before relying on an address, paying fees, or planning a release transfer.
          </p>
        </section>

        <section id="oregon-leads" aria-labelledby="oregon-leads-title">
          <h2 id="oregon-leads-title" className="text-2xl font-bold">Oregon organizations worth contacting</h2>
          <p className="mt-2 text-slate-600">Listed because relevant housing services or specialized experience are supported by published sources. A listing is not an endorsement or a promise of acceptance.</p>
          <div className="mt-5 grid gap-5">
            {oregonLeads.map((lead) => (
              <article key={lead.name} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{lead.region}</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">{lead.name}</h3>
                <p className="mt-2 text-sm font-medium text-slate-600">Evidence status: {lead.status}</p>
                <p className="mt-4 leading-relaxed">{lead.summary}</p>
                <h4 className="mt-4 font-semibold text-slate-900">What to verify before applying</h4>
                <p className="mt-1 leading-relaxed">{lead.eligibility}</p>
                <h4 className="mt-4 font-semibold text-slate-900">Federal release / supervision distinction</h4>
                <p className="mt-1 leading-relaxed">{lead.federalNote}</p>
                <p className="mt-4 text-sm"><strong>Contact:</strong> <a href={lead.phoneHref} className="underline underline-offset-2 text-sky-700">{lead.phone}</a></p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  {lead.links.map((item) => <ExternalLink key={item.href} href={item.href}>{item.label}</ExternalLink>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-2xl font-bold">Which kind of placement are you seeking?</h2>
          <div className="mt-4 space-y-4 leading-relaxed">
            <p><strong>BOP residential reentry center (RRC):</strong> A contracted correctional placement while a federal sentence is still being served. Ordinary private housing is not automatically an RRC. BOP Program Statement 7310.04 says people with a Sex Offender Public Safety Factor shall not ordinarily participate in community corrections programs; that wording is not an automatic universal denial.</p>
            <p><strong>BOP home confinement:</strong> A different way of serving the remaining custodial portion of a sentence at an individually approved residence, under required BOP/RRC oversight. A private home's willingness to rent does not establish BOP approval.</p>
            <p><strong>Housing after release to federal supervision:</strong> A private rental, sober-living residence, or nonprofit program may be an option when the provider accepts the person and the federal supervision authorities approve the location and living arrangement as required.</p>
            <p><strong>Oregon state corrections placements:</strong> Some provider programs are funded or restricted to people releasing from Oregon state prison or county jail. An applicant leaving a federal institution must ask whether federal referrals are eligible.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-2xl font-bold">A specific Oregon shared-housing issue</h2>
          <p className="mt-3 leading-relaxed">
            Oregon statutes addressing <strong>state</strong> probation and post-prison supervision restrict co-residence with other supervised people convicted of sex offenses unless appropriate approval is obtained (see ORS 137.540(4) and 144.102(4)(b)(M)); some treatment and halfway-house definitions and exceptions matter. These state supervision provisions should not be casually applied as if they were identical federal supervised-release conditions. Ask the provider and the actual supervising authority about shared occupancy, required approvals, and whether the facility is treated as a residence or specialized program.
          </p>
          <p className="mt-3 leading-relaxed">
            Also ask whether any household includes children or regular child visitors. Approval depends on the specific address, unit, house rules, conditions, and individual circumstances—not simply the program's name.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-2xl font-bold">Phone script: screen the program first</h2>
          <blockquote className="mt-4 border-l-4 border-sky-300 pl-4 italic leading-relaxed">
            Hello. I'm helping an adult prepare for release from federal prison to Oregon. The person has a sex-offense conviction and may have registration and supervision restrictions. Does your program consider applications with that background? Do you accept federal releases, and if so, only after the sentence ends or also as an authorized BOP prerelease placement? Who makes referrals, how early can we apply, and what information is needed for an address review?
          </blockquote>
          <h3 className="mt-5 font-bold">Follow-up questions</h3>
          <ul className="mt-2 list-disc pl-6 space-y-2 leading-relaxed">
            <li>What exact program or house would be proposed, and who approves that address?</li>
            <li>Is the unit shared with other supervised residents or children? Are visitors restricted?</li>
            <li>Are sobriety, treatment participation, employment, meetings, or curfews required?</li>
            <li>What are the current application, deposit, rent, funding and waiting-list arrangements?</li>
            <li>Will staff coordinate with a BOP case manager, RRC contractor, or U.S. Probation, as appropriate?</li>
            <li>Can the provider supply eligibility or denial information in writing for a release plan?</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-2xl font-bold">Additional help</h2>
          <p className="mt-3 leading-relaxed">
            <ExternalLink href="https://www.211info.org/get-help/employment/ex-offender-reentry-programs/">211info Oregon reentry listings</ExternalLink> and the <ExternalLink href="https://or.fd.org/housing">Federal Public Defender for Oregon's housing resource page</ExternalLink> are useful referral starting points. Confirm any provider's actual sex-offense eligibility; broad “reentry housing” labels often omit important exclusions.
          </p>
          <p className="mt-3 leading-relaxed">
            If an individual is still in BOP custody, coordinate with their case manager on prerelease referrals. For a proposed federal supervised-release address or interstate transfer, confirm with the responsible U.S. Probation offices before a lease or travel decision.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link className="text-sky-700 font-semibold underline underline-offset-2" to="/resources/housing-search-guide">Housing Search Guide</Link>
            <Link className="text-sky-700 font-semibold underline underline-offset-2" to="/resources/reentry-checklist">Reentry Checklist</Link>
            <Link className="text-sky-700 font-semibold underline underline-offset-2" to="/resources/state-registry">Registry Rules by State</Link>
          </div>
        </section>

        <section id="sources" className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-2xl font-bold">Sources and limitations</h2>
          <p className="mt-2 text-sm text-slate-600">
            Source review: {lastReviewed}. Some source materials describe programs as they existed in 2018 or 2023 and should not be read as current operational confirmation. Contact the housing provider before treating any reference as current.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm">
            {sourceLinks.map((source) => (
              <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
