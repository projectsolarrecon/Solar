import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function FinancialPlanningGuide(): JSX.Element {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Financial Planning After Conviction and Reentry | The SOLAR Project"
        description="Managing finances, building credit, and planning for the future after a conviction and reentry. Step-by-step guide with trusted resources and practical actions."
        keywords="financial planning after conviction, reentry financial guide, rebuilding credit after prison, post-conviction budgeting, second chance banking, financial recovery"
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
              💰 RESOURCE GUIDE
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
            Financial Planning After Conviction and Reentry
          </h1>
          
          <p className="text-white/90 max-w-3xl text-lg">
            Managing finances, building credit, and planning for the future after a conviction and reentry.
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
              <span className="font-semibold">This guide is educational, not personalized financial advice.</span> It provides step-by-step actions and credible resources tailored to common reentry challenges; verify eligibility and rules in your state.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-800">Getting Started</h2>
          </div>
          
          <p className="text-slate-700 leading-relaxed">
            Reentry is more than just walking out the door — it's rebuilding a life, piece by piece. Money can feel like the most overwhelming piece. You may be behind on bills, unsure about credit, or not sure how to plan for a future that feels uncertain. That's normal.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This guide is designed to <strong>meet you where you are.</strong> Start with the basics — get your ID, open a safe account, make a simple budget — then move step by step into rebuilding credit, finding stable income, and creating a sense of financial security. Each section offers small, doable actions with links to trusted resources.
          </p>
        </section>

        {/* Overview */}
        <section className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-white shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Phase 1</p>
                <h3 className="font-semibold text-slate-800">Stabilize</h3>
              </div>
            </div>
            <p className="text-sm text-slate-600">Get ID, open account, make a 30-day budget.</p>
          </div>
          
          <div className="rounded-2xl bg-white shadow-lg p-6 border-l-4 border-amber-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold text-sm">2</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Phase 2</p>
                <h3 className="font-semibold text-slate-800">Repair</h3>
              </div>
            </div>
            <p className="text-sm text-slate-600">Clean credit reports, address debts, set plans.</p>
          </div>
          
          <div className="rounded-2xl bg-white shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Phase 3</p>
                <h3 className="font-semibold text-slate-800">Build</h3>
              </div>
            </div>
            <p className="text-sm text-slate-600">Rebuild credit, grow income, save & insure.</p>
          </div>
        </section>

        {/* Start With the Basics */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              1
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Start With the Basics</h2>
              <p className="text-sm text-slate-600">Essential first steps for financial stability</p>
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
                <div>
                  <strong>Get your ID.</strong> Birth certificate (from state of birth), Social Security card (<a href="https://www.ssa.gov/ssnumber/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">SSA.gov</a>), and a state ID/driver's license (bring release papers if needed).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <strong>Open a safe bank account.</strong> Ask about "Second Chance" or "Fresh Start" accounts if you've been denied before. Prefer a <a href="https://joinbankon.org/accounts/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Bank On certified account</a> (low fees, no overdraft).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <strong>Make a 30-day budget.</strong> List income (job, benefits, family help) and essentials (rent, utilities, food, parole/probation fees). Templates: <a href="https://consumer.gov/managing-your-money/make-budget" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Consumer.gov budget worksheets</a>.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Clean Up Old Debts */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              2
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Clean Up Old Debts</h2>
              <p className="text-sm text-slate-600">Address past financial obligations systematically</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <ol className="space-y-3 text-sm leading-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-600 font-bold text-xs">1</span>
                </div>
                <div>
                  Pull all three reports at <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AnnualCreditReport.com</a> (free weekly).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-600 font-bold text-xs">2</span>
                </div>
                <div>
                  Highlight errors; dispute with <a href="https://consumer.ftc.gov/articles/sample-letters-credit-bureau" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">FTC sample letters</a>.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-600 font-bold text-xs">3</span>
                </div>
                <div>
                  For valid debts, call creditors: "I want to pay, but can't pay in full. Can you reduce it or set a monthly plan?"
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-600 font-bold text-xs">4</span>
                </div>
                <div>
                  Student loans: apply for <a href="https://studentaid.gov/manage-loans/repayment/plans/income-driven" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Income-Driven Repayment</a> (payments can be as low as $0 based on income).
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Rebuild Credit */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              3
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Rebuild Credit</h2>
              <p className="text-sm text-slate-600">Establish positive credit history step by step</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4 space-y-4">
            <div>
              <p className="text-sm leading-6 mb-3">
                <strong>Secured credit cards</strong> (you place a deposit, typically $200–$300). National options:
              </p>
              <ul className="space-y-2 text-sm leading-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <a href="https://www.discover.com/credit-cards/secured/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Discover it® Secured</a>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <a href="https://www.capitalone.com/credit-cards/platinum-secured/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Capital One Platinum Secured</a>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <a href="https://www.openskycc.com/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">OpenSky® Secured Visa</a> (no credit check)
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm leading-6 text-green-800">
                <strong>How to use:</strong> Make one small purchase per month, then pay in full on time. After 6–12 months, your score should begin to rise.
              </p>
            </div>
            
            <p className="text-sm leading-6">
              <strong>Alternative:</strong> Ask your credit union about a <a href="https://www.consumerfinance.gov/consumer-tools/credit-builder-loans/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">credit-builder loan</a>.
            </p>
          </div>
        </section>

        {/* Make Money and Build Skills */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              4
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Make Money and Build Skills</h2>
              <p className="text-sm text-slate-600">Find income opportunities and develop marketable skills</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <strong>Employment:</strong> Reentry-friendly employers, staffing agencies, and apprenticeships at <a href="https://www.apprenticeship.gov/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Apprenticeship.gov</a>. Ask your supervising officer for local leads.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <strong>Gig work:</strong> Delivery/rideshare/trades can help, but confirm your supervision conditions before signing up.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <strong>Small business:</strong> Explore the <a href="https://www.sba.gov/business-guide/plan-your-business/prepare-your-business-reentry" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">SBA reentry guide</a> for low-cost ways to start legally.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Build Stability */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              5
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Build Stability</h2>
              <p className="text-sm text-slate-600">Create long-term financial security</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm leading-6 text-blue-800">
                <strong>Emergency fund:</strong> Start with $10–$25/month in a separate savings account (prevents accidental spending).
              </p>
            </div>
            
            <p className="text-sm leading-6">
              <strong>Retirement:</strong> If available, enroll in your employer's 401(k). Otherwise open an IRA with low-fee providers like <a href="https://www.fidelity.com/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Fidelity</a> or <a href="https://investor.vanguard.com/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Vanguard</a>.
            </p>
            
            <p className="text-sm leading-6">
              <strong>Insurance:</strong> Health coverage via <a href="https://www.healthcare.gov/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Healthcare.gov</a>; consider renters insurance ($10–$20/mo); shop auto insurance for state-minimum coverage.
            </p>
          </div>
        </section>

        {/* Keep Learning */}
        <section className="rounded-2xl bg-white shadow-lg p-6 space-y-4 avoid-break">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              6
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Keep Learning</h2>
              <p className="text-sm text-slate-600">Continue your financial education journey</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div>
                  Free credit counseling: <a href="https://www.nfcc.org/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NFCC</a>.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div>
                  Free money education: <a href="https://www.fdic.gov/resources/consumers/money-smart/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">FDIC Money Smart</a>.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div>
                  Local reentry classes: ask your supervising officer or community center.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Reentry Checklist */}
        <section className="rounded-2xl bg-white shadow-lg p-6 avoid-break">
          <div className="flex items-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Reentry Checklist</h2>
              <p className="text-sm text-slate-600">Track your progress with these essential steps</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Get ID, Social Security card, and birth certificate</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Open a Bank On or Second Chance account</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Make a 30-day budget</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Pull and clean up credit reports</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Apply for a secured credit card or credit-builder loan</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Negotiate old debts or repayment plans</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Apply for benefits you qualify for</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Find a reentry-friendly job or training program</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Start an emergency savings account</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label className="text-slate-700">Take a free financial counseling session or class</label>
              </li>
            </ul>
          </div>
        </section>

        {/* Closing */}
        <section className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 avoid-break">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h2 className="font-semibold text-lg text-yellow-800">Closing</h2>
          </div>
          
          <div className="space-y-4 text-sm leading-6 text-yellow-800">
            <p>
              Reentry is not just about surviving — it's about laying the groundwork to thrive. The road may be long, but every action you take, no matter how small, is a building block for your future.
            </p>
            <p>
              When you pull your first credit report, open your first safe bank account, or set aside your first $10 in savings, you are proving to yourself that you have what it takes to rebuild. And you don't have to do it alone — there are counselors, nonprofits, and reentry programs ready to walk beside you. <strong>You are more than your conviction.</strong>
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="rounded-2xl bg-gradient-to-r from-slate-100 to-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/resources/employment-guide" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Employment Guide</h4>
                  <p className="text-sm text-slate-600">Finding work after conviction</p>
                </div>
              </div>
            </Link>
            
            <Link to="/resources/housing-guide" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Housing Guide</h4>
                  <p className="text-sm text-slate-600">Securing stable housing</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}