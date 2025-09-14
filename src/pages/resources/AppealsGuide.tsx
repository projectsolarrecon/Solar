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
