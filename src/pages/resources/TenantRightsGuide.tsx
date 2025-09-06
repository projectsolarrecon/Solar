import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
// Reusable gradient section header (icon + title)
// Usage: <SectionHeader icon="📄" title="What is a lease, really?" id="lease-basics" />
function SectionHeader({
  icon,
  title,
  id,
}: {
  icon: React.ReactNode;
  title: string;
  id?: string;
}) {
  return (
    <div id={id} className="mb-6">
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white rounded-2xl shadow-md">
        <div className="px-5 py-4 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-2xl">
            <span aria-hidden="true">{icon}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  );
}
export default function TenantRightsGuide(): JSX.Element {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="bg-white">
      <SEO 
        title="SOLAR Resource Guide: Tenant Rights Survival Guide | The SOLAR Project"
        description="Practical, plain-language guidance for registrants and families navigating tenant rights, housing discrimination, and compliance with residency restrictions."
        keywords="tenant rights, eviction, public housing, sex offender registry, SOLAR Project, housing discrimination, fair chance housing, HUD, Section 8, PHA"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white py-16 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">
            <Link to="/resources" className="text-slate-200 underline hover:text-white">← Back to Resources</Link>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tenant Rights Survival Guide</h1>
          <p className="text-lg md:text-xl opacity-90">
            For people on the registry and their families. Plain-language help + legal deep dives. Step-by-step strategies to keep you housed.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button 
              onClick={handlePrint} 
              className="px-4 py-2 bg-white text-slate-700 font-semibold rounded-xl shadow hover:bg-slate-100"
            >
              🖨️ Print
            </button>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          {/* OLD: <h2 className="text-2xl font-bold mb-4">1) What is a lease, really?</h2> */}
          <SectionHeader icon="📄" title="What is a lease, really?" id="lease-basics" />

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <p className="mb-2">Think of a lease like a <strong>two-way promise written on paper</strong>. You promise to pay rent on time and follow the rules. Your landlord promises to give you a safe, livable home.</p>
            <p className="mb-2">Most people don’t realize: <strong>a lease is negotiable before you sign</strong>. It’s like ordering at a restaurant — you can ask for “no onions.” You might not get everything you ask for, but you have the right to ask. Once you sign, it’s locked in.</p>
            <div className="bg-red-50 border-l-4 border-red-400 p-3 my-3 rounded-md">
              <p><strong>🚩 Red flag:</strong> Any line that says the landlord can kick you out “immediately” or “without court.” Almost always illegal.</p>
              <p><strong>✅ Green flag:</strong> Clear repair promises or fair guest rules (e.g., “Guests may stay up to 14 nights with notice”).</p>
            </div>
            <p>If you don’t understand something, <strong>circle it, ask in writing, and keep their reply</strong> in your binder.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">📘 Why this matters (Deep Dive)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>A lease is a <strong>contract</strong>—if you break it, a landlord can ask a court to evict you. If the landlord breaks it, you may have rights under <strong>habitability laws</strong>.</li>
              <li><strong>HUD</strong> = U.S. Department of Housing and Urban Development. They fund housing programs and enforce fair housing laws.</li>
              <li><strong>FHA</strong> = Fair Housing Act. This bans housing discrimination, though <strong>registry status is not protected</strong>.</li>
              <li><strong>PHA</strong> = Public Housing Authority. Your local office that runs HUD programs like Section 8 and public housing.</li>
            </ul>
            <p className="mt-3"><a href="https://www.hud.gov/topics/rental_assistance/tenantrights" target="_blank" rel="noopener" className="text-blue-600 underline">HUD: Tenant Rights</a></p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          {/* OLD: <h2 className="text-2xl font-bold mb-4">2) Build your “Tenant Binder”</h2> */}
<SectionHeader icon="🗂️" title="Build your “Tenant Binder”" id="tenant-binder" />
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <p className="mb-2">Imagine you’re walking into court. The landlord says, “They never paid rent.” You say, “Yes I did.” Who wins? The one with <strong>the papers</strong>.</p>
            <p>Your binder is your <strong>armor</strong>. Start today:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lease, rules, and any addenda.</li>
              <li>Photos/videos of apartment (time-stamped).</li>
              <li>Every text, email, letter, or notice.</li>
              <li>A call log (date, time, who, what was said).</li>
              <li>Rent receipts or bank statements.</li>
              <li>A “proof packet” with references, letters, certificates.</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">📘 Why this matters (Deep Dive)</h3>
            <p>Court and housing officers rely on <strong>documents, not memories</strong>. In public housing hearings, PHAs must give notice and allow you to respond—but without proof, you’ll lose. A binder creates a timeline that makes your story real.</p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          {/* OLD: <h2 className="text-2xl font-bold mb-4">3) Never move out unless a judge says so</h2> */}
<SectionHeader icon="⚖️" title="Never move out unless a judge says so" id="no-self-eviction" />
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <p>Picture this: your landlord changes the locks or shuts off the heat and says, “You’re out.” It feels terrifying. But the truth is: <strong>only a judge can evict you</strong>.</p>
            <p>If it happens:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Stay calm. Don’t pack up.</li>
              <li>Call non-emergency police: “I am a tenant at [address]. My landlord locked me out without a court order. This is illegal.”</li>
              <li>Take photos/videos of the lock or notice.</li>
              <li>Write down the police report number.</li>
              <li>Call legal aid that day.</li>
            </ol>
            <div className="bg-red-50 border-l-4 border-red-400 p-3 my-3 rounded-md">
              <p><strong>🚩 Red flag:</strong> Landlord says “I don’t need court.”</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">📘 Why this matters (Deep Dive)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>“Self-help evictions” are illegal in almost every state.</li>
              <li>Landlords must file in court and win before removing you.</li>
              <li>HUD housing requires <strong>notice and hearing rights</strong> before eviction.</li>
            </ul>
            <p className="mt-3">
              <a href="https://www.nyc.gov/site/mayorspeu/resources/illegal-lockouts.page" target="_blank" rel="noopener" className="text-blue-600 underline">NYC: Illegal Lockouts Help</a> · 
              <a href="https://www.nolo.com/legal-encyclopedia/lock-out-tenant-illegal-29799.html" target="_blank" rel="noopener" className="text-blue-600 underline ml-2">Nolo: Lockouts</a>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">4) Background checks & denials</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <p>Landlords often run background checks. If yours comes back bad:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Ask for the <strong>adverse action notice</strong> (official denial letter).</li>
              <li>Demand your <strong>free copy</strong> of the report.</li>
              <li>Check for mistakes: wrong name, old arrests, sealed/expunged cases.</li>
              <li>Dispute errors <strong>in writing</strong>.</li>
              <li>Ask for an <strong>individual review</strong>.</li>
            </ol>
            <div className="bg-red-50 border-l-4 border-red-400 p-3 my-3 rounded-md">
              <p><strong>🚩 Red flag:</strong> “We don’t rent to felons” or “registry = automatic no.”</p>
              <p><strong>✅ Green flag:</strong> Landlord listens and considers your proof.</p>
            </div>
            <button 
              onClick={() => copyToClipboard("Hello [Manager], I was told my application was denied based on a screening report. Please send me the required adverse action notice and a free copy of the report. I also request an individualized review that considers my stable job, on-time rent history, references, and rehabilitation. Thank you.")} 
              className="px-3 py-2 bg-slate-700 text-white rounded-md shadow hover:bg-slate-800 mt-3"
            >
              📋 Copy Sample Script
            </button>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">📘 Why this matters (Deep Dive)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>FCRA (Fair Credit Reporting Act):</strong> requires notice and free copy if denied based on a report. <a href="https://www.consumerfinance.gov/rules-policy/tenant-background-checks/" target="_blank" rel="noopener" className="text-blue-600 underline">CFPB Guide</a></li>
              <li><strong>HUD 2016 Guidance:</strong> Blanket bans like “no felons” may violate the FHA. <a href="https://www.hud.gov/sites/documents/HUD_OGCGUIDAPPFHASTANDCR.PDF" target="_blank" rel="noopener" className="text-blue-600 underline">HUD Guidance PDF</a></li>
              <li><strong>Public housing:</strong> Arrests alone can’t be used. <a href="https://www.hud.gov/sites/documents/15-19pihn.pdf" target="_blank" rel="noopener" className="text-blue-600 underline">HUD PIH 2015-19</a></li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section 5 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">5) Registry-specific survival tips</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <p className="mb-2">
              Residency rules are like <strong>invisible tripwires</strong>. You might qualify for an apartment and still
              get in trouble later for being too close to a school, park, or daycare.
            </p>
            <p className="mb-2">Before you sign anything, do a <strong>compliance check</strong>:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Search: “<em>[Your city]</em> sex offender residency ordinance/map”.</li>
              <li>Call the registry unit (police/sheriff): <em>“Is <strong>[address]</strong> compliant? How is distance measured here (property line or door-to-door)?”</em></li>
              <li>If on supervision, ask your PO for a <strong>written map or letter</strong> showing allowed areas.</li>
              <li>Save GIS screenshots and keep them in your binder.</li>
            </ul>
            <div className="bg-red-50 border-l-4 border-red-400 p-3 my-3 rounded-md">
              <p><strong>🚩 Red flag:</strong> “We don’t check that.” — You will be the one held responsible.</p>
              <p><strong>✅ Green flag:</strong> You have written confirmation from police/PO that the address is compliant.</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">📘 Why this matters (Deep Dive)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://mn.gov/doc/assets/04-07SexOffenderReport-Proximity_tcm1089-272769.pdf" target="_blank" rel="noopener" className="text-blue-600 underline">Minnesota DOC proximity study</a> found distance bans <strong>do not reduce</strong> reoffending but can increase homelessness.</li>
              <li>Local codes define “<strong>residence</strong>” and measurements. Example: <a href="https://www.legis.iowa.gov/docs/code/692A.pdf" target="_blank" rel="noopener" className="text-blue-600 underline">Iowa Code § 692A</a>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">6) Public housing & vouchers</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <p className="mb-2">Public Housing Authorities (PHAs) run programs like vouchers (Section 8) and public housing apartments.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>If applying:</strong> If anyone in your household is on <strong>lifetime registration</strong>, the PHA <strong>must deny</strong> admission. Ask intake staff up front so you don’t lose months waiting.</li>
              <li><strong>If already housed:</strong> PHAs generally <strong>cannot terminate you solely</strong> for being on the registry. They still can act on real lease violations (nonpayment, serious misconduct).</li>
              <li><strong>Arrests alone</strong> can’t be used to deny/evict in assisted housing.</li>
              <li>Ask for the PHA’s <strong>Administrative Plan (HCV)</strong> or <strong>ACOP (Public Housing)</strong> and note <strong>appeal deadlines</strong>.</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">📘 Why this matters (Deep Dive)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Federal rules: <a href="https://www.law.cornell.edu/cfr/text/24/982.553" target="_blank" rel="noopener" className="text-blue-600 underline">24 CFR § 982.553</a> (vouchers) and <a href="https://www.law.cornell.edu/cfr/text/24/960.204" target="_blank" rel="noopener" className="text-blue-600 underline">24 CFR § 960.204</a> (public housing) — lifetime-registration bar at <strong>admission</strong>.</li>
              <li>HUD FAQ: current tenants generally <strong>not terminated solely</strong> for lifetime registration if already assisted — <a href="https://www.hudexchange.info/faqs/3987/can-a-public-housing-tenant-who-is-listed-on-a-lifetime-sex-offender/" target="_blank" rel="noopener" className="text-blue-600 underline">see HUD FAQ</a>.</li>
              <li>Arrests alone are insufficient in assisted housing — <a href="https://www.hud.gov/sites/documents/15-19pihn.pdf" target="_blank" rel="noopener" className="text-blue-600 underline">HUD PIH 2015-19</a>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">7) Fighting denials</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <p className="mb-2">If a landlord says, “We don’t rent to people with records,” here’s your playbook:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Send your <strong>proof packet</strong> (income, on-time rent history, references, certificates).</li>
              <li>Ask for an <strong>individualized review</strong> — time since offense, nature, age at offense, rehabilitation, rental history, references, current stability.</li>
              <li>If they refuse or ghost you, <strong>escalate</strong>:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>File with HUD: <a href="https://www.hud.gov/reporthousingdiscrimination" target="_blank" rel="noopener" className="text-blue-600 underline">Report Housing Discrimination</a></li>
                  <li>File with your local/state fair housing agency (search “<em>[City]</em> fair housing complaint”).</li>
                  <li>Call legal aid via <a href="https://www.lawhelp.org/find-help" target="_blank" rel="noopener" className="text-blue-600 underline">LawHelp.org</a>.</li>
                </ul>
              </li>
            </ol>

            <button
              onClick={() =>
                copyToClipboard(
`Subject: Request for individualized review

Hi [Name],
Please reconsider my application using an individualized review. It has been [X years] since my offense. I have stable income, on-time rent history, and strong references (attached). I’ve completed programs showing rehabilitation. I’m a reliable tenant and welcome any additional documentation that would help.
Thank you.`
                )
              }
              className="px-3 py-2 bg-slate-700 text-white rounded-md shadow hover:bg-slate-800 mt-3"
            >
              📋 Copy Reconsideration Script
            </button>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">📘 Why this matters (Deep Dive)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>HUD’s 2016 guidance warns blanket bans can violate the FHA; providers should use <strong>case-by-case</strong> review. <a href="https://www.hud.gov/sites/documents/HUD_OGCGUIDAPPFHASTANDCR.PDF" target="_blank" rel="noopener" className="text-blue-600 underline">HUD Guidance PDF</a></li>
              <li>Fair-chance examples to cite:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li><a href="https://www.nyc.gov/assets/cchr/downloads/pdf/FairChanceHousingFAQ.pdf" target="_blank" rel="noopener" className="text-blue-600 underline">NYC Fair Chance Housing (effective 2025)</a></li>
                  <li><a href="https://www.nj.gov/dca/divisions/codes/publications/pdf_lti/Fair_Chance_in_Housing_Act.pdf" target="_blank" rel="noopener" className="text-blue-600 underline">NJ Fair Chance in Housing Act (2022)</a></li>
                  <li>Seattle’s <em>Yim</em> decision narrowed the inquiry ban but left other protections — opinion: <a href="https://cdn.ca9.uscourts.gov/datastore/opinions/2023/03/21/21-35567.pdf" target="_blank" rel="noopener" className="text-blue-600 underline">9th Cir. PDF</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">8) Reasonable accommodations (for disabilities)</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <p className="mb-2">
              If you or a family member has a <strong>disability</strong> (including many mental-health conditions),
              you can ask the landlord or PHA to <strong>adjust a rule</strong> so you can use your home like anyone else.
            </p>
            <p className="mb-2">Common examples:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Extra time to comply with a rule due to treatment schedules.</li>
              <li>Permission for a <strong>service/assistance animal</strong> even in “no-pets” housing.</li>
              <li>A unit transfer away from restricted zones or stressors.</li>
            </ul>

            <button
              onClick={() =>
                copyToClipboard(
`Subject: Reasonable accommodation request

Hello,
I have a disability as defined by fair-housing laws. I’m requesting a reasonable accommodation: [state your request]. This change will help me fully use and enjoy my home. I can provide verification if needed. Please respond in writing within 10 days.
Thank you.`
                )
              }
              className="px-3 py-2 bg-slate-700 text-white rounded-md shadow hover:bg-slate-800 mt-3"
            >
              📋 Copy Accommodation Request
            </button>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">📘 Why this matters (Deep Dive)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>The <strong>Fair Housing Act</strong> requires reasonable accommodations when necessary for equal use/enjoyment.</li>
              <li><strong>Section 504</strong> of the Rehabilitation Act applies to HUD-funded housing.</li>
              <li>Guidance: <a href="https://www.hud.gov/sites/documents/huddojstatement.pdf" target="_blank" rel="noopener" className="text-blue-600 underline">HUD/DOJ Joint Statement on Reasonable Accommodations</a></li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section 9 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">9) Your “Go-Bag”</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <p className="mb-2">Think of this as your <strong>emergency kit</strong>. If things heat up, you grab it and go. Keep paper + digital copies of:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Denial notices from landlords or PHAs.</li>
              <li>Tenant screening report + your dispute letters.</li>
              <li>Rent receipts, bank statements, or ledger showing payment history.</li>
              <li>References, certificates, and letters of support.</li>
              <li>Residency-rule maps or letters confirming compliance.</li>
              <li>Your lease, house rules, and accommodation requests.</li>
            </ul>
            <p className="mt-3">👉 Having this ready makes appeals, hearings, or emergencies far less overwhelming.</p>
          </div>
        </div>
      </section>

      {/* Section 10 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">10) Find local help today</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <p className="mb-2">Don’t freeze — start searching. Use these phrases (swap in your city/state):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>“tenant rights handbook PDF [state]”</li>
              <li>“fair housing complaint [city]”</li>
              <li>“legal aid landlord tenant hotline [state]”</li>
              <li>“continuum of care housing reentry [city]”</li>
              <li>“sex offender residency ordinance map [state]”</li>
            </ul>
            <p className="mt-3">📞 Direct help:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://www.hud.gov/reporthousingdiscrimination" target="_blank" rel="noopener" className="text-blue-600 underline">HUD: Report Housing Discrimination</a></li>
              <li><a href="https://www.lawhelp.org/find-help" target="_blank" rel="noopener" className="text-blue-600 underline">LawHelp.org – Free Legal Aid Finder</a></li>
              <li><a href="https://211.org" target="_blank" rel="noopener" className="text-blue-600 underline">211.org – Local resources 24/7</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 11 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">11) Daily reminders</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">✨ Survival Advice (ELI5)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>🗓️ <strong>Mark deadlines</strong> (rent due dates, appeal windows, court hearings) on a calendar.</li>
              <li>✍️ <strong>Put everything in writing</strong> — recap phone calls with a text or email.</li>
              <li>📂 <strong>Show up</strong> to hearings with your binder in hand.</li>
              <li>🤝 <strong>Don’t isolate</strong> — ask a friend to proofread letters or go with you.</li>
              <li>📞 <strong>Call 211</strong> if you’re stuck and don’t know where to turn.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 12 */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">12) Handy scripts you can copy</h2>

          <div className="space-y-6">
            <div>
              <p className="font-semibold mb-2">🚪 Illegal lockout (to police):</p>
              <pre className="bg-slate-100 p-3 rounded-md text-sm whitespace-pre-wrap">
I’m a lawful tenant at [address]. My landlord [changed locks/shut off utilities] without a court order. 
This is an illegal lockout. Please help me get back in. My lease and ID are here.
              </pre>
            </div>

            <div>
              <p className="font-semibold mb-2">📄 Adverse action (to landlord):</p>
              <pre className="bg-slate-100 p-3 rounded-md text-sm whitespace-pre-wrap">
Please send me the adverse action notice and free copy of my screening report. 
I request an individualized review of my application, considering my rent history, stability, and references.
              </pre>
            </div>

            <div>
              <p className="font-semibold mb-2">🐕 Accommodation request:</p>
              <pre className="bg-slate-100 p-3 rounded-md text-sm whitespace-pre-wrap">
I’m requesting a reasonable accommodation under fair-housing laws: [your request]. 
This will help me fully use and enjoy my home.
              </pre>
            </div>

            <div>
              <p className="font-semibold mb-2">📍 Residency compliance (to registry office):</p>
              <pre className="bg-slate-100 p-3 rounded-md text-sm whitespace-pre-wrap">
I’m considering renting [address]. Is this location compliant with residency rules? 
How is distance measured here (property line or door-to-door)? Could you send me a map or letter?
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Final Pep Talk */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <blockquote className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-md shadow-inner">
          <h2 className="text-2xl font-bold mb-4">💛 Final Pep Talk</h2>
          <p className="mb-4">
            Housing with a record or registry status feels like an uphill climb. But you are not powerless.
            Your <strong>binder</strong>, your <strong>scripts</strong>, your <strong>deadlines</strong>, and your <strong>proof</strong> 
            are tools. Use them.
          </p>
          <p className="mb-4">
            Call 211, reach out to legal aid, and remember: only a judge can legally take your housing away.
          </p>
          <p className="font-semibold">
            Step by step, you <em>can</em> stay housed. You and your family deserve stability, safety, and dignity.
          </p>
        </blockquote>
      </section>
    </div>
  );
}
