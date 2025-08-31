    import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function SanctuaryAndSilence() {
  return (
    <div className="bg-white">
      <SEO 
        title="Sanctuary and Silence — Faith Institutions, Abuse, and the False Comforts of the Registry - The SOLAR Project"
        description="Long-form investigative exposé: clergy and faith-institution abuse across denominations, why registries create false comfort, and what real prevention looks like."
        keywords="clergy abuse, faith institution abuse, Catholic Church scandal, Southern Baptist abuse, Jehovah's Witnesses abuse, sex offender registry effectiveness, institutional abuse prevention"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-700/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-slate-200 hover:text-white transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
          
          <div className="mb-4">
            <span className="bg-slate-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              📰 INVESTIGATIVE SERIES · PART 3
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Sanctuary and Silence — Faith Institutions, Abuse, and the False Comforts of the Registry
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            The sanctuary is supposed to be the safest room in town. But for countless children, the most dangerous place wasn't a dark alley or a stranger's car—it was a pew, a rectory, a youth room, a church van, a kingdom hall. That's not a failure of maps; it's a failure of power. And it exposes how sex-offense registries offer comfort without protection.
          </p>
          
          <div className="flex items-center text-sm text-slate-300">
            <span className="flex items-center mr-6">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              18 min read
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              August 28, 2025
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
          {["Clergy Abuse", "Faith Institutions", "Registry Reform", "Child Protection", "Investigative Series"].map((tag) => (
            <span key={tag} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200">
              {tag}
            </span>
          ))}
        </div>

        {/* Content with standardized typography */}
        <div className="prose prose-lg prose-blue max-w-none">
          
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🚪</span>
              The door Pennsylvania opened—and the house behind it
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In August 2018, a Pennsylvania statewide grand jury released a seismic report: more than <strong>300 Catholic clerics</strong> had abused <strong>over 1,000 children</strong> across six dioceses spanning seven decades. Names, assignments, transfer patterns—the document read like a ledger of institutional self-protection. Pennsylvania wasn't the whole house; it was just the first door many Americans finally opened.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Next came the state-by-state echoes. In <strong>Illinois</strong>, a multi-year attorney general probe across all six dioceses identified <strong>451 credibly accused clergy and religious brothers</strong> and <strong>1,997 survivors</strong>, with case timelines and "years of abuse opportunity" visualized across reassignment histories. In <strong>Maryland</strong>, investigators described "widespread abuse and systemic cover-up" and cataloged <strong>hundreds of victims</strong>, including cases where multiple abusers targeted the same child over time.
            </p>

            {/* Reality Check Callout */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-cyan-200 bg-cyan-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-cyan-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
                <p className="text-cyan-900 text-lg leading-relaxed">
                  <span className="font-semibold">Reality check:</span> These weren't stranger-danger crimes. They were proximity crimes—made possible by trust, authority, and insulation.
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-gray-700 leading-relaxed">
              Sources: <a href="https://www.attorneygeneral.gov/report/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">PA AG — Grand Jury report portal</a>; <a href="https://clergyreport.illinoisattorneygeneral.gov/resources/Illinois_Attorney_General_Catholic_Clergy_Abuse_Report_2023.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">Illinois AG — 2023 Report (PDF)</a> & <a href="https://clergyreport.illinoisattorneygeneral.gov/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">Illinois AG — Clergy Abuse Report portal</a>; <a href="https://www.marylandattorneygeneral.gov/reports/OAG_Redacted_Report_on_Child_Sexual_Abuse.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">Maryland AG — Redacted report (PDF)</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">⛪</span>
              What the Church knew—and what it did
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Two landmark studies commissioned by the U.S. Conference of Catholic Bishops—the <strong>John Jay reports</strong>—charted allegations against priests from <strong>1950–2002</strong> and informed the 2002 <strong>Charter for the Protection of Children and Young People</strong> ("Dallas Charter"). Background checks, training, reporting protocols, and lay review boards followed. But reforms arrived after decades of damage—and their application remains uneven and subject to local will.
            </p>

            {/* Pull Quote */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-slate-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                </svg>
                <p className="text-slate-900 text-lg leading-relaxed font-semibold">
                  "We had policies" is not the same as "children were protected."
                </p>
              </div>
            </blockquote>

            {/* Scarlet Letter Illusion Callout */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-red-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"/>
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z"/>
                </svg>
                <div>
                  <p className="text-red-900 text-lg leading-relaxed">
                    <span className="font-semibold">Scarlet-letter illusion:</span> Publicly branding outsiders creates the feeling of punishment-as-protection while insiders in collars and robes remained untouchable for decades.
                  </p>
                </div>
              </div>
            </blockquote>

            <p className="text-lg text-gray-700 leading-relaxed">
              Sources: <a href="https://www.usccb.org/offices/child-and-youth-protection/research" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">USCCB — John Jay research page</a>; <a href="https://www.usccb.org/offices/child-and-youth-protection/charter-protection-children-and-young-people" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">USCCB — Charter for Protection of Children</a>; <a href="https://www.usccb.org/issues-and-action/child-and-youth-protection/audits" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">USCCB — Annual audit framework</a>; early <em>Spotlight</em>-era coverage from the <a href="https://www.bostonglobe.com/metro/specials/spotlight/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">Boston Globe — Spotlight Team</a>. For additional context, see the <a href="https://clergyreport.illinoisattorneygeneral.gov/resources/Illinois_Attorney_General_Catholic_Clergy_Abuse_Report_2023.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">Illinois AG — Clergy Report (PDF)</a> and <a href="https://en.wikipedia.org/wiki/John_Jay_Report" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">John Jay Report summary</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🏛️</span>
              The Southern Baptist reckoning: decentralization as deniability
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The <strong>Southern Baptist Convention (SBC)</strong> offered a different diagram of failure. A 2022 <strong>Guidepost Solutions</strong> investigation found senior leaders <strong>stonewalled survivors</strong>, minimized credible reports, and treated advocates as enemies. Days later, SBC leadership released a previously secret <strong>205-page list</strong> naming <strong>700+</strong> individuals "convicted or credibly accused"—kept out of public view for years while offenders moved on.
            </p>

            {/* Institutional Immunity Callout */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-amber-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                </svg>
                <div>
                  <p className="text-amber-900 text-lg leading-relaxed">
                    <span className="font-semibold">Institutional-immunity illusion:</span> The registry convinces the public the danger is the neighbor down the street while leaders literally kept a secret list in a filing cabinet.
                  </p>
                </div>
              </div>
            </blockquote>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In 2024, the U.S. Department of Justice <strong>closed its investigation</strong> into the SBC Executive Committee with no further action. A closure letter is not absolution; it simply means enforcement didn't proceed. Survivors still live with the facts the report established, and the structural fixes it recommended remain essential.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Sources: <a href="https://static.sbcam.net/wp-content/uploads/2022/05/Guidepost-Solutions-Independent-Investigation.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">SBC — Guidepost report (PDF)</a>; <a href="https://storage.cloversites.com/southernbaptistconvention/documents/20220522%20ERC%20List%20of%20Offenders%20-%20Final%20Redactions.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">SBC — List of Offenders (PDF)</a>; <a href="https://www.npr.org/2024/03/07/1236355306/justice-department-southern-baptist-convention-investigation-ends" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">NPR — DOJ closes investigation</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🏢</span>
              Jehovah's Witnesses: secrecy, privilege, and a global paper trail
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For <strong>Jehovah's Witnesses</strong>, some of the most revealing evidence is international. Australia's <strong>Royal Commission into Institutional Responses to Child Sexual Abuse</strong> devoted a case study to organizational policies: elders' manuals, two-witness rules, internal judicial committees, and communication barriers that discouraged going to police. The findings were stark: systems prioritizing internal handling over child safety.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In the U.S., courts have highlighted how <strong>legal shields</strong> can collide with protection. In 2020, the <strong>Montana Supreme Court</strong> reversed a $35 million verdict against Watchtower, ruling that under state law, the <strong>clergy-penitent privilege</strong> excused mandatory reporting in the circumstances of that case. The ruling didn't say abuse didn't happen; it said the <em>law</em> didn't require reporting.
            </p>

            {/* Legislative Action Illusion Callout */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-amber-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.589-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.589-1.202L5.25 4.971Z"/>
                </svg>
                <div>
                  <p className="text-amber-900 text-lg leading-relaxed">
                    <span className="font-semibold">Legislative-action = protection illusion:</span> We congratulate ourselves for passing tougher laws, but statutory loopholes like clergy privilege can quietly undo the protection survivors need.
                  </p>
                </div>
              </div>
            </blockquote>

            <p className="text-lg text-gray-700 leading-relaxed">
              Sources: <a href="https://www.childabuseroyalcommission.gov.au/case-studies/case-study-29-institutional-responses-child-sexual-abuse-jehovahs-witnesses" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">Royal Commission — JW Case Study 29</a>; Elders' policies in evidence <a href="https://www.childabuseroyalcommission.gov.au/sites/default/files/STAT.0806.001.0063_R.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">Royal Commission — Exhibit PDF</a>; <em>Nunez v. Watchtower Bible & Tract Society of New York, Inc.</em>, <a href="https://casetext.com/case/nunez-v-watchtower-bible-tract-socy-of-ny-inc" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">Nunez v Watchtower (2020 MT 3)</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🗺️</span>
              The myth of the map—and the other comfort-blanket illusions
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The registry promises safety by mapping addresses of people with prior convictions. But clergy abuse is the definition of <em>non-map</em> danger: it happens in church basements, youth rooms, confessionals, mission trips—inside institutions families are taught to trust. The harm unfolded for years because abusers had <strong>access</strong> and <strong>authority</strong>, reinforced by <strong>institutional cover</strong> and <strong>legal loopholes</strong>.
            </p>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">The Five Comfort-Blanket Illusions:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-xs">1</span>
                  </div>
                  <div>
                    <strong>Scarlet-letter illusion:</strong> Branding outsiders creates the feeling of protection; it didn't stop insiders with collars and titles.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-xs">2</span>
                  </div>
                  <div>
                    <strong>All-offenders-are-alike illusion:</strong> Registries flatten risk across teenagers, low-risk cases, and serial predators—while churches needed <em>granular</em> internal risk controls and swift removal.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-xs">3</span>
                  </div>
                  <div>
                    <strong>Eternal-risk illusion:</strong> Treating people as forever dangerous fuels policy theater; meanwhile institutions tout new committees as instant absolution without hard audits.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-xs">4</span>
                  </div>
                  <div>
                    <strong>Institutional-immunity illusion:</strong> The public fixates on marked neighbors, not unmarked authorities who control access to children.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-xs">5</span>
                  </div>
                  <div>
                    <strong>Legislative-action = protection illusion:</strong> Passing another registry bill feels like progress while privileges and secrecy rules keep reports out of law enforcement.
                  </div>
                </li>
              </ul>
            </div>

            {/* Thesis Callout */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-cyan-200 bg-cyan-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-cyan-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                </svg>
                <div>
                  <p className="text-cyan-900 text-lg leading-relaxed">
                    <span className="font-semibold">Thesis:</span> Registries are address maps for yesterday's crimes. The real risk lives in today's <em>power relationships</em> and the systems that shield them.
                  </p>
                </div>
              </div>
            </blockquote>

            <p className="text-lg text-gray-700 leading-relaxed">
              Data echo the narrative: most abused children are harmed by <strong>someone they know</strong>, not an unknown stranger. (<a href="https://rainn.org/statistics/children-and-teens" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">RAINN — Youth abuse stats</a>)
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🔄</span>
              What changed—and what didn't
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Many dioceses now tout "safe-environment" programs—background checks, training, review boards, and external auditors. These matter. But audits can turn into paper compliance if not stress-tested; whistleblowers still face retaliation; decentralized churches struggle to enforce standards across autonomous congregations.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              "We have policies" is not the same as "children were protected."
            </p>

            {/* Do the Drill Callout */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-red-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-1.57 1.57a2.25 2.25 0 0 1-1.591.659H6.862a2.25 2.25 0 0 1-1.591-.659L3.7 14.5m16.1 0V9.75a6 6 0 0 0-6-6.75 6 6 0 0 0-6 6.75v4.75"/>
                </svg>
                <div>
                  <p className="text-red-900 text-lg leading-relaxed">
                    <span className="font-semibold">Do the drill:</span> Any institution that says it's safe should prove it—unannounced checks, hotline tests, and automatic outside referrals when staff or clergy are accused.
                  </p>
                </div>
              </div>
            </blockquote>

            <p className="text-lg text-gray-700 leading-relaxed">
              See USCCB's <a href="https://www.usccb.org/issues-and-action/child-and-youth-protection/audits" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">annual audit framework</a> alongside independent scrutiny and survivor reporting to gauge reality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🔗</span>
              The throughline across faiths
            </h2>
            
            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>Proximity and authority</strong>—not geography—drive risk. Children were abused by people their families trusted with their spiritual lives.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>Institutional self-protection</strong> shapes outcomes. Centralized or decentralized, systems defaulted to reputation management over child protection.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>Legal architecture</strong> can shield harm. Privileges and limitation statutes kept cases out of public view.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>Registries</strong> don't touch any of that. They brand neighbors; they don't reform institutions.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">💡</span>
              What would actually protect children (SOLAR's case)
            </h2>
            
            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">1</span>
                  </div>
                  <div>
                    <strong>Independent safeguarding with teeth.</strong> Outside audits, surprise inspections, and mandatory reporting directly to law enforcement—no internal "wait and see." Confidential channels outside the hierarchy; anti-retaliation rules enforced.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">2</span>
                  </div>
                  <div>
                    <strong>Uniform conduct rules.</strong> Chaperone ratios, glass-panel doors, no closed-door one-on-ones, approved communications policies (texts/DMs), travel rules, and immediate removal pending investigation.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">3</span>
                  </div>
                  <div>
                    <strong>Fix legal blind spots.</strong> Revisit clergy-penitent privileges when they block child protection; extend or revive statutes of limitation so survivors can be heard; fund cold-case units for institutional abuse.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">4</span>
                  </div>
                  <div>
                    <strong>Evidence-based law design.</strong> Prioritize <em>law-enforcement registration</em> and targeted compliance checks; limit public notification to high-risk cases. 
                    <br /><br />
                    Strong studies show broad public shaming doesn't reduce sexual reoffending and can worsen outcomes. (<a href="https://www.journals.uchicago.edu/doi/pdf/10.1086/658485" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">Prescott & Rockoff (PDF)</a>; <a href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies-0" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">NIJ — SORN effectiveness</a>; <a href="https://journals.sagepub.com/doi/10.1177/0887403409353148" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline transition-colors">Letourneau et al. (2010)</a>)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">5</span>
                  </div>
                  <div>
                    <strong>Survivor-first resourcing.</strong> Compensation without gag clauses; independent ombuds; trauma-informed care; funding tied to actual prevention metrics, not press releases.
                  </div>
                </li>
              </ol>
            </div>

            {/* Bottom Line Callout */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
                <div>
                  <p className="text-emerald-900 text-lg leading-relaxed">
                    <span className="font-semibold">Bottom line:</span> Stop mapping strangers. Stop pretending stigma equals safety. Start dismantling shields of power.
                  </p>
                </div>
              </div>
            </blockquote>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🎭</span>
              The takeaway the sanctuary keeps teaching
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If the registry worked the way politicians say, these sanctuary scandals wouldn't have unfolded for <em>decades</em>. But it's not just the "map" that failed us. It's the scarlet-letter illusion, the eternal-risk illusion, the institutional-immunity illusion, the one-size-fits-all illusion.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              All of them are theater. None of them protected children.
            </p>

            {/* Final Choice Callout */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-red-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"/>
                </svg>
                <div>
                  <p className="text-red-900 text-lg leading-relaxed">
                    <span className="font-semibold">The choice:</span> Comfort that looks like safety—or policies that actually prevent abuse where it happens.
                  </p>
                </div>
              </div>
            </blockquote>
          </section>

          {/* Sources Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Selected Sources (Verified)</h3>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>• <a href="https://www.attorneygeneral.gov/report/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">PA AG — Grand Jury report portal</a></li>
              <li>• <a href="https://clergyreport.illinoisattorneygeneral.gov/resources/Illinois_Attorney_General_Catholic_Clergy_Abuse_Report_2023.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Illinois AG — 2023 Report (PDF)</a> · <a href="https://clergyreport.illinoisattorneygeneral.gov/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Illinois AG — Clergy Abuse Report portal</a></li>
              <li>• <a href="https://www.marylandattorneygeneral.gov/reports/OAG_Redacted_Report_on_Child_Sexual_Abuse.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Maryland AG — Redacted report (PDF)</a></li>
              <li>• <a href="https://www.usccb.org/offices/child-and-youth-protection/research" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">USCCB — John Jay research page</a> · <a href="https://www.usccb.org/offices/child-and-youth-protection/charter-protection-children-and-young-people" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">USCCB — Charter for Protection of Children</a> · <a href="https://www.usccb.org/issues-and-action/child-and-youth-protection/audits" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">USCCB — Annual audit framework</a></li>
              <li>• <a href="https://www.bostonglobe.com/metro/specials/spotlight/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Boston Globe — Spotlight Team</a> · <a href="https://clergyreport.illinoisattorneygeneral.gov/resources/Illinois_Attorney_General_Catholic_Clergy_Abuse_Report_2023.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Illinois AG — Clergy Report (PDF)</a> · <a href="https://en.wikipedia.org/wiki/John_Jay_Report" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">John Jay Report summary</a></li>
              <li>• <a href="https://static.sbcam.net/wp-content/uploads/2022/05/Guidepost-Solutions-Independent-Investigation.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">SBC — Guidepost report (PDF)</a> · <a href="https://storage.cloversites.com/southernbaptistconvention/documents/20220522%20ERC%20List%20of%20Offenders%20-%20Final%20Redactions.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">SBC — List of Offenders (PDF)</a> · <a href="https://www.npr.org/2024/03/07/1236355306/justice-department-southern-baptist-convention-investigation-ends" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NPR — DOJ closes investigation</a></li>
              <li>• <a href="https://www.childabuseroyalcommission.gov.au/case-studies/case-study-29-institutional-responses-child-sexual-abuse-jehovahs-witnesses" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Royal Commission — JW Case Study 29</a> · <a href="https://www.childabuseroyalcommission.gov.au/sites/default/files/STAT.0806.001.0063_R.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Royal Commission — Exhibit PDF</a> · <a href="https://casetext.com/case/nunez-v-watchtower-bible-tract-socy-of-ny-inc" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Nunez v Watchtower (2020 MT 3)</a></li>
              <li>• <a href="https://rainn.org/statistics/children-and-teens" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">RAINN — Youth abuse stats</a> · <a href="https://www.journals.uchicago.edu/doi/pdf/10.1086/658485" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Prescott & Rockoff (PDF)</a> · <a href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies-0" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NIJ — SORN effectiveness</a> · <a href="https://journals.sagepub.com/doi/10.1177/0887403409353148" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Letourneau et al. (2010)</a></li>
            </ul>
          </div>
        </div>

        {/* Share and Navigation */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              to="/blog" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              ← Back to All Posts
            </Link>
            <div className="flex space-x-4">
              <Link 
                to="/resources" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                View Resources
              </Link>
              <Link 
                to="/contact" 
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Series Navigation */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Investigative Series</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/blog/politics-and-hypocrisy" className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📰</span>
                <div>
                  <h4 className="font-medium text-gray-800">Part 1: Politics & Hypocrisy</h4>
                  <p className="text-sm text-gray-600">When Lawmakers Are the Offenders</p>
                </div>
              </div>
            </Link>
            
            <Link to="/blog/the-enforcers" className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚓</span>
                <div>
                  <h4 className="font-medium text-gray-800">Part 2: The Enforcers</h4>
                  <p className="text-sm text-gray-600">When Police, Judges & Prosecutors Offend</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SanctuaryAndSilence;