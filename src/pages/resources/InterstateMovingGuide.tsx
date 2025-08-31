import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function InterstateMovingGuide(): JSX.Element {
  return (
    <div className="bg-slate-50 text-slate-800">
      <SEO 
        title="SOLAR Resource Guide – Moving While on the Registry"
        description="A practical framework for safely relocating across state lines while on the registry — covering legal rules, housing, and family support."
        keywords="interstate moving, sex offender registry, relocation, ICAOS, housing restrictions, registry compliance"
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-white py-10 px-6 shadow-lg">
        <div className="max-w-5xl mx-auto">
          <Link to="/resources" className="text-sm underline hover:text-slate-200 no-print">← Back to Resources</Link>
          <div className="mt-2">
            <span className="inline-block bg-slate-600/70 text-xs uppercase tracking-wide rounded-full px-3 py-1">Resource Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">Moving While on the Registry</h1>
          <p className="mt-2 text-lg text-slate-200 max-w-3xl">A practical framework for safely relocating across state lines while on the registry — covering legal rules, housing, and family support.</p>
          <div className="flex gap-3 mt-5 no-print">
            <button onClick={() => window.print()} className="bg-white text-slate-700 px-4 py-2 rounded-xl shadow hover:bg-slate-100 text-sm font-medium">🖨️ Print</button>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-300"></div>

      {/* Section 1 */}
      <section className="max-w-5xl mx-auto py-8 px-6">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="flex items-center text-xl font-semibold text-slate-800 mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white mr-3">1</span>
            Legal Basics
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>If on supervision:</strong> You need <span className="font-semibold">Interstate Compact (ICAOS)</span> approval before moving. Don't leave until written permission is granted.</li>
            <li><strong>If off supervision:</strong> Notify your current state before departure. Register in the new state quickly — usually within <span className="bg-red-100 text-red-700 px-1 rounded">3–10 days</span>.</li>
            <li>Each state sets its own registry rules. A 10-year term in one state may mean <span className="bg-red-100 text-red-700 px-1 rounded">lifetime</span> in another.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="flex items-center text-xl font-semibold text-slate-800 mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white mr-3">2</span>
            Registration Must-Knows
          </h2>
          <div className="space-y-3">
            <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-md text-sm">
              <strong className="text-red-700">Urgent:</strong> Deadlines are short — missing one can mean new criminal charges.
            </div>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Deadlines:</strong> Most states require registration within 72 hours to one week.</li>
              <li><strong>In-person:</strong> Bring ID, proof of address, and past registration paperwork.</li>
              <li><strong>Rules may change:</strong> New reporting schedules, ID card markings, or job restrictions may apply.</li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="flex items-center text-xl font-semibold text-slate-800 mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white mr-3">3</span>
            Housing Challenges
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Residency restrictions:</strong> Many states/cities ban registrants from living within 500–2,500 ft of schools, daycares, or parks.</li>
            <li><strong>Renting:</strong> Private landlords may be more flexible than big complexes. Be honest on applications.</li>
            <li><strong>Buying:</strong> Mortgages aren't usually impacted, but check HOA/condo rules before purchasing.</li>
            <li><strong>Public housing:</strong> Lifetime registrants are barred from Section 8/public housing.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="flex items-center text-xl font-semibold text-slate-800 mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white mr-3">4</span>
            Community Concerns
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Notification:</strong> All states list registrants online. Some mail flyers or hold meetings.</li>
            <li><strong>Neighbors:</strong> Stay compliant, courteous, and low-profile.</li>
            <li><strong>Family:</strong> Talk openly about stigma. Plan for school and social situations.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="flex items-center text-xl font-semibold text-slate-800 mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white mr-3">5</span>
            Practical To-Dos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Before the Move</h3>
              <ul className="space-y-2">
                <li>☑️ Tell your supervising officer (if on probation/parole)</li>
                <li>☑️ Research new state laws</li>
                <li>☑️ Confirm housing is compliant</li>
                <li>☑️ Notify your current state of departure</li>
                <li>☑️ Gather ID, lease, vehicle info, and paperwork</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">After Arrival</h3>
              <ul className="space-y-2">
                <li>☑️ Register in person immediately</li>
                <li>☑️ Get a new state ID/driver's license</li>
                <li>☑️ Report to your new supervising officer</li>
                <li>☑️ Update vehicles, employment, accounts</li>
                <li>☑️ Keep proof of registration & note deadlines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="flex items-center text-xl font-semibold text-slate-800 mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white mr-3">6</span>
            Resources & Support
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://narsol.org" target="_blank" rel="noopener" className="text-blue-700 underline">NARSOL</a> – Reform advocacy with state affiliates</li>
            <li><a href="https://all4consolaws.org" target="_blank" rel="noopener" className="text-blue-700 underline">ACSOL</a> – Legal advocacy and national meetings</li>
            <li><a href="https://womenagainstregistry.org" target="_blank" rel="noopener" className="text-blue-700 underline">Women Against Registry</a> – Family support</li>
            <li>📞 Support hotline: <a href="tel:8889977765" className="text-blue-700 underline">888-997-7765</a></li>
            <li><a href="https://211.org" target="_blank" rel="noopener" className="text-blue-700 underline">211.org</a> – Local housing, jobs, and assistance</li>
          </ul>
        </div>
      </section>

      {/* Important Reminders */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-md shadow-sm">
          <h3 className="text-yellow-800 font-semibold mb-2">Important Reminder</h3>
          <p className="text-yellow-900">Plan ahead, know the rules, and document everything. Moving while on the registry is stressful, but with preparation and persistence, you and your family can make a safe and legal fresh start.</p>
        </div>
      </section>

    </div>
  );
}