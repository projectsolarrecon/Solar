import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function AppealsGuide(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="SOLAR Appeals Guide | The SOLAR Project"
        description="A step-by-step hand-holder for challenging convictions, sentences, supervision/registry decisions, and for preserving future remedies."
        keywords="appeals guide, notice of appeal, FRAP, post-conviction, registry relief, supervision conditions, deadlines"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-600 text-white py-16 shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 uppercase tracking-wide mb-2 text-sm font-semibold">
            SOLAR Resource Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">📜 SOLAR Appeals Guide</h1>
          <p className="text-lg md:text-xl text-slate-100">
            Supporting appeals of convictions, sentences, supervision/registry decisions, and preserving future remedies.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={handlePrint}
              className="bg-white text-slate-700 px-4 py-2 rounded-lg shadow hover:bg-slate-100 transition"
            >
              🖨️ Print
            </button>
            <Link
              to="/resources"
              className="bg-slate-500 text-white px-4 py-2 rounded-lg shadow hover:bg-slate-600 transition"
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* 👉 I will send each content section to paste right here, one-by-one. */}
        {/* ===== INTRODUCTION ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200 avoid-break">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">🧭 Introduction: What Appeals Really Are (and How to Use This Guide)</h2>
  </div>

  <div className="prose prose-slate max-w-none text-slate-800">
    <p>
      If you are reading this, chances are you or someone you care about just received a ruling or decision that feels
      unfair, confusing, or simply wrong. You may be wondering: <em>What now? Do I have any options?</em> The answer is
      often <strong>yes</strong>, but success requires understanding both the opportunities and the limits of the appeals process.
    </p>

    <p>
      An <strong>appeal</strong> can mean different things depending on context. In criminal cases, it often refers to
      asking a higher court to review the trial court’s decisions for legal errors that affected the outcome. But appeals
      are not limited to trial verdicts or sentencing — many people must also navigate <strong>administrative remedies</strong>, 
      such as challenging registry classifications, supervision conditions, agency decisions, or parole board determinations.
      The unifying principle is the same: you are asking a higher authority to examine a decision and determine whether it
      was correct, fair, or lawful.
    </p>

    <p>
      This guide is designed as a <strong>practical companion</strong>:
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>If you just received a ruling, start with the <strong>Quick-Start Checklist</strong> to protect immediate rights and deadlines.</li>
      <li>If you’re still in earlier stages, use the <strong>Roadmap</strong> to preserve issues at arrest, arraignment, pretrial, trial, and sentencing.</li>
      <li>If you are past conviction, see the <strong>Direct Appeal</strong>, <strong>Post-Conviction Relief</strong>, and <strong>Registry/Supervision</strong> sections to understand next steps.</li>
      <li>Wherever possible, we’ve included <strong>embedded links</strong> to rules, cases, and forms, and suggested <strong>offline alternatives</strong> for those with limited internet access.</li>
    </ul>
  </div>

  {/* Disclaimer callout */}
  <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4">
    <div className="flex items-start gap-3">
      <div className="text-2xl" aria-hidden>🛑</div>
      <div>
        <p className="font-semibold text-rose-900">Disclaimer</p>
        <p className="text-rose-900/90">
          The SOLAR Project is not a law firm, and nothing in this guide is legal advice. Laws and procedures vary widely
          by jurisdiction and type of case. This guide is educational only — a roadmap to help you understand what’s possible,
          organize your paperwork, and communicate more effectively with counsel or the court. If retaining a lawyer is
          feasible and accessible, rely on their advice above any general information here.
        </p>
      </div>
    </div>
  </div>
</section>
        {/* ===== QUICK-START CHECKLIST ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200 avoid-break">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">⚡ Quick-Start Checklist</h2>
    <p className="text-slate-100 mt-1">When a bad ruling just landed — protect deadlines, preserve rights, and set the table for appeal.</p>
  </div>

  <div className="prose prose-slate max-w-none text-slate-800">
    <ol className="list-decimal pl-6 space-y-3">
      <li>
        <strong>Write the deadline down — today.</strong>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Federal criminal notice of appeal often due <strong>14 days</strong> from entry of judgment/order. (See <a className="text-blue-700 underline" href="https://www.law.cornell.edu/rules/frap/rule_4" target="_blank" rel="noopener noreferrer">FRAP 4(b)</a>.)</li>
          <li>If incarcerated, use the “prison mailbox rule” — keep proof of legal mail and postmark.</li>
        </ul>
      </li>

      <li>
        <strong>File a Notice of Appeal (or ask the clerk to help you file).</strong>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>File with the trial court clerk. Keep a copy and a stamped receipt.</li>
        </ul>
      </li>

      <li>
        <strong>Ask for counsel &amp; fee relief if needed.</strong>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Apply for <em>in forma pauperis</em> (IFP) and appointment of appellate counsel if eligible (<a className="text-blue-700 underline" href="https://www.law.cornell.edu/rules/frap/rule_24" target="_blank" rel="noopener noreferrer">FRAP 24</a>; 28 U.S.C. § 1915).</li>
        </ul>
      </li>

      <li>
        <strong>Preserve release options.</strong>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Move for release pending appeal (<a className="text-blue-700 underline" href="https://www.law.cornell.edu/rules/frap/rule_9" target="_blank" rel="noopener noreferrer">FRAP 9</a>; 18 U.S.C. § 3143(b)).</li>
          <li>Photograph or document any conditions of release or restriction.</li>
        </ul>
      </li>

      <li>
        <strong>Order transcripts &amp; lock down the record.</strong>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Use AO-435 to order transcripts for all hearings/trial/sentencing.</li>
          <li>Designate exhibits, orders, motions, clerk’s minutes — everything you may cite.</li>
        </ul>
      </li>

      <li>
        <strong>Calendar the next wave of deadlines.</strong>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Briefing (<a className="text-blue-700 underline" href="https://www.law.cornell.edu/rules/frap/rule_28" target="_blank" rel="noopener noreferrer">FRAP 28</a>), responses, possible rehearing, and (if applicable) Supreme Court certiorari.</li>
        </ul>
      </li>

      <li>
        <strong>If registry or supervision is involved:</strong>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Save classification letters, tier notices, and supervision condition orders.</li>
          <li>Research termination/relief processes (e.g., CA PC § 290.5 / Form CR-415).</li>
        </ul>
      </li>

      <li>
        <strong>Offline action plan (if no internet or limited access):</strong>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Go to the clerk’s office to get forms and ask where the notice of appeal is filed.</li>
          <li>Use public law libraries or courthouse terminals for record access.</li>
          <li>If incarcerated, request law library access; document any denials/obstacles.</li>
        </ul>
      </li>
    </ol>
  </div>

  {/* Warm callouts */}
  <div className="mt-6 grid gap-4 md:grid-cols-2">
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
      <div className="flex items-start gap-3">
        <div className="text-2xl" aria-hidden>⏰</div>
        <div>
          <p className="font-semibold text-amber-900">Deadline Alarm</p>
          <p className="text-amber-900/90">
            Mark the notice-of-appeal due date on a paper calendar <em>and</em> in your phone. Missing it can end your appeal before it starts.
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
      <div className="flex items-start gap-3">
        <div className="text-2xl" aria-hidden>📦</div>
        <div>
          <p className="font-semibold text-sky-900">Build the Record</p>
          <p className="text-sky-900/90">
            Order transcripts early and keep a file with stamped copies of every filing, receipt, and mailing proof.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* ===== ROADMAP ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200 avoid-break">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">🗺️ The Roadmap (Why Each Step Matters &amp; How to Do It)</h2>
  </div>

  <div className="prose prose-slate max-w-none text-slate-800">
    {/* Step 1 */}
    <h3>1. Deadlines &amp; “tolling” basics</h3>
    <p><strong>Why:</strong> Missed deadlines = lost appeal rights.</p>
    <p><strong>How:</strong></p>
    <ul>
      <li>Understand FRAP 4(b) for criminal cases; other rules for civil or administrative.</li>
      <li>Note when judgment is “entered” and when any post-trial motions (Rule 29, 33, etc.) are resolved.</li>
      <li>Use prison mailbox rule if applicable.</li>
      <li><strong>Offline:</strong> Ask clerk for local rule sheets; write down dates, keep a physical calendar.</li>
    </ul>

    {/* Callout */}
    <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
      <div className="flex items-start gap-3">
        <div className="text-2xl" aria-hidden>⚠️</div>
        <div>
          <p className="font-semibold text-amber-900">Important</p>
          <p className="text-amber-900/90">
            What qualifies as “entry of judgment” varies; sometimes it's when the judge signs, sometimes when filed with clerk.
            If you’re not sure, ask the clerk in writing and keep it in your file.
          </p>
        </div>
      </div>
    </div>

    {/* Step 2 */}
    <h3 className="mt-8">2. File the Notice of Appeal</h3>
    <p><strong>Why:</strong> It is the gateway; without it, appeal courts may refuse to hear you.</p>
    <p><strong>How:</strong></p>
    <ul>
      <li>Complete notice indicating which decision you are appealing.</li>
      <li>File with district/trial court clerk; keep stamped receipt.</li>
      <li>If incarcerated, follow legal mail procedures and keep proof of deposit.</li>
      <li><strong>Offline:</strong> Use available pro se forms; ask clerk whether a template is available.</li>
    </ul>

    {/* Step 3 */}
    <h3 className="mt-8">3. Ask for appointed counsel &amp; fee waivers</h3>
    <p><strong>Why:</strong> Appeals can be complex and costly.</p>
    <p><strong>How:</strong></p>
    <ul>
      <li>Apply under FRAP 24 + statute. Include affidavit of finances.</li>
      <li>Request transcript fee waiver under 28 U.S.C. § 753(f) if you cannot pay.</li>
      <li><strong>Offline:</strong> Get IFP form from clerk; ask law library for sample completed forms.</li>
    </ul>

    {/* Step 4 */}
    <h3 className="mt-8">4. Protect liberty &amp; conditions during appeal</h3>
    <p><strong>Why:</strong> You might be stuck with harmful conditions while waiting.</p>
    <p><strong>How:</strong></p>
    <ul>
      <li>Motion for release pending appeal (FRAP 9; § 3143(b)).</li>
      <li>Motion to modify supervision conditions. Cite case law when possible.</li>
      <li><strong>Offline:</strong> Draft simple motion, use clerk’s form, attach your reasons, request a hearing.</li>
    </ul>

    {/* Step 5 */}
    <h3 className="mt-8">5. Build the record: transcripts &amp; exhibits</h3>
    <p><strong>Why:</strong> Appellate courts can’t see what you didn’t enter into the record.</p>
    <p><strong>How:</strong></p>
    <ul>
      <li>Order transcripts via AO-435; designate all the hearings you need.</li>
      <li>Ensure rulings and objections are in writing or on record.</li>
      <li><strong>Offline:</strong> Hand-deliver transcript order to court reporter; ask for clerk’s docket and indexed exhibits.</li>
    </ul>

    {/* Step 6 */}
    <h3 className="mt-8">6. Brief the case clearly</h3>
    <p><strong>Why:</strong> Your brief is how you persuade the appellate court.</p>
    <p><strong>How:</strong></p>
    <ul>
      <li>State issues clearly. For each: the legal standard of review, what went wrong, where in the record, and what relief you want.</li>
      <li>Follow FRAP 28, local rules for formatting.</li>
      <li><strong>Offline:</strong> Use printed sample briefs from appellate courts or public libraries.</li>
    </ul>

    {/* Step 7 */}
    <h3 className="mt-8">7. After the decision: Rehearing, Mandate, &amp; Supreme Court</h3>
    <p><strong>Why:</strong> Additional procedural options may extend or alter relief.</p>
    <p><strong>How:</strong></p>
    <ul>
      <li>Panel rehearing or en banc under FRAP 40–41.</li>
      <li>Supreme Court certiorari under Rule 13 (90 days).</li>
      <li><strong>Offline:</strong> Request pro se guide from Supreme Court; find forms at clerk’s office.</li>
    </ul>
  </div>
</section>
        {/* ===== REGISTRY & SUPERVISION ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200 avoid-break">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">🔐 Registry &amp; Supervision: Special Paths</h2>
  </div>

  <div className="prose prose-slate max-w-none text-slate-800">
    <ul>
      <li>
        <strong>Administrative classification challenges</strong> — hearing rights, notice, and internal review processes may be available depending on jurisdiction.
      </li>
      <li>
        <strong>Tier termination petitions or statutory relief</strong> — some states allow petitions to reduce or terminate registration (e.g. California PC § 290.5 / Form CR-415).
      </li>
      <li>
        <strong>Condition challenges</strong> — such as broad internet bans or GPS monitoring. These may be contested under constitutional arguments or statutory limits.
      </li>
    </ul>
  </div>

  {/* Callout */}
  <div className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-4">
    <div className="flex items-start gap-3">
      <div className="text-2xl" aria-hidden>📌</div>
      <div>
        <p className="font-semibold text-sky-900">Tip</p>
        <p className="text-sky-900/90">
          Always keep copies of classification notices, supervision orders, and any correspondence with agencies. These documents are
          essential for filing petitions or motions later.
        </p>
      </div>
    </div>
  </div>
</section>
        

        {/* ===== SOURCES & RESOURCES (blue card) ===== */}
        <section id="sources-resources" className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                📚
              </div>
              <div>
                <h2 className="text-2xl font-bold">Sources &amp; Resources</h2>
                <p className="text-slate-200">Trusted, court and agency references you can cite or bring to the clerk</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <ul className="list-disc pl-6 space-y-2 text-slate-800">
              {/* Federal Rules / Procedures */}
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.law.cornell.edu/rules/frap/rule_4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FRAP Rule 4 — Appeal as of Right: When Taken (Cornell LII)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.ca5.uscourts.gov/docs/default-source/forms-and-documents---clerks-office/rules/federalrulesofappellateprocedure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Federal Rules of Appellate Procedure (PDF, 5th Cir. example incl. FRAP 4(b))
                </a>
              </li>

              {/* Registry / State Relief (California example) */}
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://selfhelp.courts.ca.gov/jcc-form/CR-415"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CA Form CR-415 — Petition to Terminate Sex Offender Registration (PC § 290.5)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://courts.ca.gov/sites/default/files/courts/default/2024-11/cr415.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CR-415 — Direct PDF
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://sjcda.org/docs/sjcdalibraries/resource-docs/sb384/cr415info-petition-to-terminate-info.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  “CR-415 INFO” — Filing Guidance (Info Sheet)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://codes.findlaw.com/ca/penal-code/pen-sect-290-5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  California Penal Code § 290.5 — Law Text
                </a>
              </li>

              {/* FAQs / Explanatory Guides */}
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.sandiegocounty.gov/content/sdc/public_defender/PC290_Relief_FAQ.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  San Diego County Public Defender — PC 290 Relief FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.sexcrimesdefenselawyer.com/post/petition-to-terminate-sex-offender-registration-pc-290-5-sb384-forms-information"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Overview of PC 290.5 Relief Requirements (Explainer)
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>{/* end: main content container */}
    </div>
  );
}
