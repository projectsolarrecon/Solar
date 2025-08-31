import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function FinancialSupportStrategies(): JSX.Element {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Surviving the Financial Shock of a Criminal Case | The SOLAR Project"
        description="Practical, step-by-step advice for families managing legal fees, lost income, and ongoing expenses—without losing stability or hope."
        keywords="criminal case financial impact, family financial support, legal fees management, financial crisis help, family financial planning, criminal defense costs"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-600/90 text-white shadow-xl print:bg-none print:shadow-none">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="mb-6">
            <Link to="/resources" className="inline-flex items-center text-slate-200 hover:text-white transition-colors group">
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Resources
            </Link>
          </div>
          
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide font-medium">
              👨‍👩‍👧‍👦 RESOURCE GUIDE
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
            Surviving the Financial Shock of a Criminal Case
          </h1>
          
          <p className="text-white/90 max-w-3xl text-lg">
            Practical, step-by-step advice for families managing legal fees, lost income, and ongoing expenses—without losing stability or hope.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3 no-print">
            <button 
              onClick={handlePrint}
              className="rounded-2xl bg-white/90 text-slate-900 hover:bg-white px-4 py-2 font-medium shadow transition-colors"
            >
              🖨️ Print Guide
            </button>
            <Link
              to="/resources"
              className="rounded-2xl bg-slate-600/50 text-white hover:bg-slate-600/70 px-4 py-2 font-medium shadow transition-colors"
            >
              📚 More Resources
            </Link>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400"></div>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-10">

        {/* Important Notice */}
        <section className="rounded-xl border border-blue-200 bg-blue-50 p-5 avoid-break">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600 flex-shrink-0">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 5a.75.75 0 10-1.5 0v6.25c0 .414.336.75.75.75h4a.75.75 0 100-1.5H12.75V7z"/>
            </svg>
            <p className="text-sm leading-relaxed text-blue-800">
              <span className="font-semibold">This guide is not legal or financial advice.</span> It's a practical playbook to help families stabilize cash flow and protect credit while a case is pending. Use official links embedded throughout to speak with qualified professionals and to verify eligibility in your state.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-800">You're Not Alone in This</h2>
          </div>
          
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              When someone you love is facing charges, it can feel like the ground has been ripped out from under your feet — emotionally, socially, and financially. Bills don't stop coming just because you're in crisis. In fact, the costs often rise sharply. This guide is here to help you <strong>take back control, one small step at a time.</strong>
            </p>
            <p>
              Think of it like a life jacket in rough water: you don't have to swim all the way to shore right now — you just need to stay afloat and protect your family's stability. Each section is designed to be followed <strong>step by step</strong>, with concrete actions you can take today, tomorrow, and in the weeks ahead. Keep a notebook or folder handy, use the checklist at the end, and remember: you are not alone, and you do not have to figure this out from scratch.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-white shadow-lg p-6 border-l-4 border-red-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">1</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Stage 1</p>
                <h3 className="font-semibold text-slate-800">48-Hour Money Triage</h3>
              </div>
            </div>
            <p className="text-sm text-slate-600">Freeze non-essentials, list essentials, and map immediate due dates.</p>
          </div>
          
          <div className="rounded-2xl bg-white shadow-lg p-6 border-l-4 border-amber-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold text-sm">2</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Stage 2</p>
                <h3 className="font-semibold text-slate-800">Stabilize & Negotiate</h3>
              </div>
            </div>
            <p className="text-sm text-slate-600">Prioritize housing, utilities, food & transport; set up payment plans and hardship options.</p>
          </div>
          
          <div className="rounded-2xl bg-white shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Stage 3</p>
                <h3 className="font-semibold text-slate-800">Protect & Plan</h3>
              </div>
            </div>
            <p className="text-sm text-slate-600">Protect credit, avoid high-cost debt, and line up credible help.</p>
          </div>
        </section>

        {/* First Things First */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              1
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">First Things First: Don't Panic, Make a List</h2>
              <p className="text-sm text-slate-600">Start with what you can control right now</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>Get a notebook or folder. Paper is fine if you don't have easy internet access.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>Write down your <strong>must-pay bills</strong>: rent/mortgage, utilities, food, transportation, child support, phone/internet, medical.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>Put a ★ next to the bills that keep your family housed, fed, and connected to work/school/court.</div>
              </li>
            </ul>
          </div>
          
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              <p className="font-semibold text-amber-800">Reminder</p>
            </div>
            <p className="text-sm text-amber-800">Those starred bills go first. Everything else can be paused, reduced, or renegotiated.</p>
          </div>
        </section>

        {/* 48-Hour Money Triage */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              2
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">The 48-Hour Money Triage</h2>
              <p className="text-sm text-slate-600">Immediate actions to stop the bleeding</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div><strong>Cancel extras.</strong> Stop auto-pays for streaming, gyms, and subscriptions.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                  </svg>
                </div>
                <div><strong>Make a visible calendar.</strong> Post due dates where everyone can see them.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div><strong>Call before you're late.</strong> Script: "We're going through a legal emergency. We want to stay in good standing. What hardship or payment options do you offer, and what documentation do you need?"</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div><strong>Document everything.</strong> Record who you spoke with, the date, and what was agreed; save letters/emails.</div>
              </li>
            </ul>
          </div>
        </section>

        {/* Stabilizing Cash Flow */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              3
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Stabilizing Cash Flow</h2>
              <p className="text-sm text-slate-600">Secure the essentials first</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4 space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm leading-6">
                <strong>Housing.</strong> Call your landlord/mortgage servicer. Ask for a payment plan, smaller weekly payments, or temporary forbearance/modification. Get free help from a <a href="https://www.consumerfinance.gov/find-a-housing-counselor/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">HUD-approved housing counselor</a>.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-sm leading-6">
                <strong>Utilities.</strong> Ask about budget billing, shut-off protections, and energy aid like <a href="https://www.acf.hhs.gov/ocs/low-income-home-energy-assistance-program-liheap" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">LIHEAP</a>. If stuck, dial <a href="https://www.211.org/get-help/i-need-help-paying-my-bills" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">211</a>.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="text-sm leading-6">
                <strong>Food.</strong> Use <a href="https://www.feedingamerica.org/find-your-local-foodbank" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Feeding America's locator</a> and apply for <a href="https://www.benefits.gov/benefit/361" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">SNAP</a> early.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="text-sm leading-6">
                <strong>Phone/Internet.</strong> Ask your provider for hardship/low-income plans; check <a href="https://www.lifelinesupport.org/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Lifeline</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Costs */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              4
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Legal Costs Without Going Broke</h2>
              <p className="text-sm text-slate-600">Manage attorney fees strategically</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div><strong>Get it in writing:</strong> retainer, scope, hourly/flat-fee terms, billing cadence; itemized invoices; monthly cap.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                </div>
                <div><strong>Negotiate stages:</strong> e.g., a flat fee through preliminary hearing, then revisit.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 14a2 2 0 002 2h8a2 2 0 002-2v-2H4v2z"></path>
                  </svg>
                </div>
                <div><strong>Payment plans:</strong> ask early; confirm refunds of unused retainers.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div><strong>Lower-cost help:</strong> <a href="https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">LSC legal aid</a> (civil), <a href="https://www.abafreelegalanswers.org/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">ABA Free Legal Answers</a> (civil Q&A), and <a href="https://www.fd.org/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Federal Public Defenders (CJA)</a> for eligible federal cases.</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <p className="font-semibold text-emerald-800">Pro Tip</p>
            </div>
            <p className="text-sm text-emerald-800">Ask counsel for a <em>case budget</em> with milestones and decision points. It reduces surprise invoices and keeps everyone aligned.</p>
          </div>
        </section>

        {/* Medical Bills */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              5
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Taming Medical Bills</h2>
              <p className="text-sm text-slate-600">Navigate healthcare costs strategically</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <ol className="space-y-3 text-sm leading-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-pink-600 font-bold text-xs">1</span>
                </div>
                <div>Never ignore bills; call the billing office to keep accounts out of collections.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-pink-600 font-bold text-xs">2</span>
                </div>
                <div>Request an <strong>itemized bill</strong> to check accuracy.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-pink-600 font-bold text-xs">3</span>
                </div>
                <div>Ask about <strong>financial assistance/charity care</strong> (required at nonprofits per <a href="https://www.irs.gov/charities-non-profits/financial-assistance-policy-and-emergency-medical-care-policy-section-501r4" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">IRS 501(r)</a>).</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-pink-600 font-bold text-xs">4</span>
                </div>
                <div>Invoke rights under the <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">No Surprises Act</a> for certain emergency/out-of-network bills.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-pink-600 font-bold text-xs">5</span>
                </div>
                <div>Negotiate prompt-pay discounts; request <strong>0% interest</strong> payment plans; get agreements in writing.</div>
              </li>
            </ol>
          </div>
        </section>

        {/* Taxes */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              6
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">If Taxes Are a Stressor</h2>
              <p className="text-sm text-slate-600">Handle tax obligations without panic</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>Check balances and options at <a href="https://www.irs.gov/payments" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">IRS.gov/payments</a>.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 14a2 2 0 002 2h8a2 2 0 002-2v-2H4v2z"></path>
                  </svg>
                </div>
                <div>Short-term (≤120 days) and long-term installment plans available; set up online.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>If truly unable to pay, explore <strong>Offer in Compromise</strong> (rare but possible).</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>Get help: <a href="https://www.taxpayeradvocate.irs.gov/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Taxpayer Advocate Service</a> and <a href="https://www.irs.gov/advocate/low-income-taxpayer-clinics" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Low-Income Taxpayer Clinics</a>.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>Free tax prep: <a href="https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">VITA/TCE</a>.</div>
              </li>
            </ul>
          </div>
        </section>

        {/* Credit Protection */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              7
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Protect Credit; Avoid Debt Traps</h2>
              <p className="text-sm text-slate-600">Safeguard your financial future</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>Pull free credit reports weekly at <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AnnualCreditReport.com</a> and dispute errors.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>Consider a <a href="https://consumer.ftc.gov/articles/credit-freeze-or-fraud-alert-whats-right-your-credit-report" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">credit freeze or fraud alert</a>; report identity theft at <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">IdentityTheft.gov</a>.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>Avoid payday/title loans. Consider <a href="https://mycreditunion.gov/manage-your-money/consumer-loans-credit-cards/payday-alternative-loans" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">credit-union PALs</a> and low-fee <a href="https://joinbankon.org/accounts/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Bank On accounts</a> (also called "Second Chance" or "Fresh Start" at some institutions).</div>
              </li>
            </ul>
          </div>
        </section>

        {/* Child Support */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              8
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">If Child Support Is Involved</h2>
              <p className="text-sm text-slate-600">Act quickly to prevent arrears</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-sm leading-6">
              If income drops due to arrest/jail, request a review and modification <em>immediately</em>. Incarceration is generally treated as involuntary unemployment under federal policy—ask your local office how to document this. Start here: <a href="https://www.acf.hhs.gov/css/parents/change-support-order" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">ACF—Change a support order</a>.
            </p>
          </div>
        </section>

        {/* Family Tips & Checklist */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white shadow-lg p-6 avoid-break">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-slate-800">Family Tips</h3>
            </div>
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>Centralize logins, due dates, account numbers, and a shared calendar of court obligations.</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>Automate the most critical bills once a plan is in place.</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>Track every agreement in writing; set reminders one week before each payment.</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>Protect the caregiver's credit—avoid co-signing high-risk debt.</div>
              </li>
            </ul>
          </div>
          
          <div className="rounded-2xl bg-white shadow-lg p-6 avoid-break">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-slate-800">Family Financial Checklist</h3>
            </div>
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Call landlord/servicer → request hardship plan</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Contact utilities → budget billing or LIHEAP</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Secure food → food bank + SNAP</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Review medical bills → itemized + charity care</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">If taxes owed → set up payment plan</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Pull credit reports; dispute errors</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Freeze credit if worried about fraud</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Avoid payday loans; use PAL/Bank On accounts</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Request child support modification</label>
              </li>
            </ul>
          </div>
        </section>

        {/* Official Resources */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800">Official Resources</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm leading-6">
            <div className="space-y-2">
              <div className="font-medium text-slate-700">Housing & Utilities</div>
              <ul className="space-y-1 text-slate-600">
                <li>• <a href="https://www.consumerfinance.gov/find-a-housing-counselor/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">HUD-approved counselors</a></li>
                <li>• <a href="https://www.usa.gov/emergency-pay-rent" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Emergency rent assistance</a></li>
                <li>• <a href="https://www.acf.hhs.gov/ocs/low-income-home-energy-assistance-program-liheap" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">LIHEAP</a></li>
                <li>• <a href="https://www.211.org/get-help/utilities-expenses" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">211 utility help</a></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <div className="font-medium text-slate-700">Food & Benefits</div>
              <ul className="space-y-1 text-slate-600">
                <li>• <a href="https://www.feedingamerica.org/find-your-local-foodbank" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Food bank locator</a></li>
                <li>• <a href="https://www.benefits.gov/benefit/361" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">SNAP</a></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <div className="font-medium text-slate-700">Medical & Taxes</div>
              <ul className="space-y-1 text-slate-600">
                <li>• <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">No Surprises Act</a></li>
                <li>• <a href="https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">VITA/TCE</a></li>
                <li>• <a href="https://www.taxpayeradvocate.irs.gov/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Taxpayer Advocate Service</a></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <div className="font-medium text-slate-700">Credit & Legal</div>
              <ul className="space-y-1 text-slate-600">
                <li>• <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AnnualCreditReport.com</a></li>
                <li>• <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">IdentityTheft.gov</a></li>
                <li>• <a href="https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">LSC legal aid</a></li>
                <li>• <a href="https://www.acf.hhs.gov/css/parents/change-support-order" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Child support changes</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Important Reminders */}
        <section className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 avoid-break">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-yellow-800">Important Reminders</h3>
          </div>
          
          <ul className="space-y-2 text-sm leading-6 text-yellow-800">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>Call <em>before</em> you're late—hardship programs are easier to access proactively.</div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>Get every arrangement in writing and store it in your case binder.</div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>Beware of high-cost lenders and debt-relief scams. Use official links above.</div>
            </li>
          </ul>
        </section>

        {/* Closing */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h2 className="font-semibold text-lg text-slate-800">You Will Get Through This</h2>
          </div>
          
          <div className="space-y-4 text-sm leading-6 text-slate-700">
            <p>
              This season will be hard, but it won't last forever. Every phone call you make, every note you keep, and every payment plan you negotiate is a brick in the foundation of your family's stability. You've already shown resilience by picking up this guide and looking for answers — that in itself is a powerful step forward.
            </p>
            <p>
              If you can focus on the essentials, keep communication open with creditors, and avoid traps like payday loans, you'll protect your family not just in the short term but in the years to come. Remember: this isn't about being perfect — it's about progress, one decision at a time. <strong>You can and will get through this.</strong>
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="rounded-2xl bg-gradient-to-r from-slate-100 to-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/resources/family-support-guide" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Family Support Guide</h4>
                  <p className="text-sm text-slate-600">Comprehensive support for families</p>
                </div>
              </div>
            </Link>
            
            <Link to="/resources/financial-planning-guide" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Financial Planning Guide</h4>
                  <p className="text-sm text-slate-600">Long-term financial recovery</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}