  import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function HighProfileCasesStrangerDanger(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="The Comfort Blanket: High-Profile Sex Crime Cases, Public Outrage—and a Registry That Doesn't Do What We Think"
        description="Long-form, case-driven analysis of high-profile sex crime scandals—Catholic Church, Boy Scouts, Sandusky, Nassar, Epstein, Cosby, Polanski, Hastert, Letourneau—and why U.S. sex offender registries don't address the real risks."
        keywords="sex offender registry, high-profile cases, Catholic Church abuse, Penn State scandal, USA Gymnastics, Boy Scouts settlement, Harvey Weinstein, Bill Cosby, Roman Polanski, Dennis Hastert, stranger danger myth, institutional abuse, Jeffrey Epstein, Larry Nassar"
      />

      {/* Header */}
      <header className="bg-gradient-to-b from-slate-900 to-slate-600 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-slate-200 hover:text-white transition-colors group">
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Blog
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            The Comfort Blanket: High-Profile Sex Crime Cases, Public Outrage—and a Registry That Doesn't Do What We Think
          </h1>
          
          <div className="text-sm text-slate-300 mt-6">
            <span>August 21, 2025</span>
            <span className="mx-2">•</span>
            <span>15 min read</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        
        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          You know the story. A headline drops—<a href="https://ww2.lacourt.org/hp/sg0tt2fzb0h5rinbsj3p4xxt/1374562163.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Roman Polanski</a>, <a href="https://www.pacourts.us/Storage/media/pdfs/20210630/203948-june.30.2021.opinionbyjusticewecht.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Bill Cosby</a>, <a href="https://www.justice.gov/opr/page/file/1336471/download" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Jeffrey Epstein</a>, a revered coach, a clergy member, a teacher, a politician—and the country convulses through the familiar stages of shock, denial, fury, and vows to "do something." Then we tuck ourselves back in under the sex-offender registry, convinced that the danger lives across town, marked in red on an interactive map. Meanwhile, the very cases that made us outraged keep reminding us: the real risks are in our schools, churches, families, locker rooms, casting couches, fundraisers, and donor suites—not lurking in a trench coat by the swing set.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg mb-8">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-orange-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-orange-800 font-semibold">
                The central contradiction: We fear the dark alley, while the real predators operate in positions of trust and authority—often for decades before being exposed.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-0 h-px bg-slate-200 my-7" />

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">The case files that defined an era—and how we keep missing the point</h2>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-blue-800">
                <strong>For detailed analysis of these cases and their policy implications, see our comprehensive <Link to="/resources/high-profile-cases" className="text-blue-600 hover:text-blue-800 underline font-semibold">High-Profile Cases Resource Guide</Link>.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              <strong>The Catholic Church</strong><br />
              If you remember one number from Pennsylvania's 2018 grand jury report, make it this: <a href="https://www.attorneygeneral.gov/wp-content/uploads/2023/05/INVESTIGATING-GRAND-JURY-REPORT-NO.-1_FINAL_May-2023_Redacted.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">over 1,000 children abused across six dioceses</a>—an accounting of horror spanning seven decades. And Pennsylvania was just a door, not the house. In Illinois, the attorney general's 2023 report identified <a href="https://clergyreport.illinoisattorneygeneral.gov/download/report.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><span className="bg-red-100 px-1 rounded font-semibold">451 credibly accused clergy and religious brothers and 1,997 survivors</span></a> across the state. Maryland's 2023 report documented <a href="https://www.marylandattorneygeneral.gov/reports/OAG_Redacted_Report_on_Child_Sexual_Abuse.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><span className="bg-red-100 px-1 rounded font-semibold">more than 600 victims</span></a> and a pattern of institutional concealment. Nationwide, independent compilers like <a href="https://www.bishop-accountability.org/accused-db-overview/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">BishopAccountability</a> track thousands of accused clerics, a grim ledger that keeps lengthening as state and diocesan files open to public view. Do we really think a public registry focused on strangers in the neighborhood is the main event?
            </p>
          </div>

          <div>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              <strong>The Boy Scouts (now Scouting America)</strong><br />
              The scale here is breathtaking: <a href="https://apnews.com/article/abuse-settlement-boy-scouts-2-46-billion-18a5bb76b31a8cbd010e40196516bffd" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><span className="bg-red-100 px-1 rounded font-semibold">more than 82,000 claims of abuse and a $2.46 billion settlement</span></a>—one of the largest in U.S. history. The organization has rebranded, but the magnitude of past harm remains, a map of trusted adults and closed rooms—not nameless "strangers"—where crimes occurred.
            </p>
          </div>

          <div>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              <strong>College sports and the halo effect</strong><br />
              <a href="https://www.espn.com/college-football/story/_/id/8077356/jerry-sandusky-found-guilty-45-48-counts-child-sex-abuse-case" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Jerry Sandusky</a>—45 counts, 10 boys, a "character" built from community service that doubled as camouflage. Sandusky's prison sentence—<a href="https://www.pbs.org/newshour/nation/jerry-sandusky-resentenced-to-30-60-years-for-sexual-abuse" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">30 to 60 years</a>—recognizes the severity, but the machine that enabled it operated in plain sight: campus prestige, football money, institutional deference. The danger didn't live next door; it had keys to the facility.
            </p>
          </div>

          <div>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              <strong>Olympic medals and open secrets</strong><br />
              <a href="https://www.justice.gov/usao-wdmi/pr/2017_12_07_LN" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Larry Nassar</a>—decades of abuse under a white coat, shielded by bureaucratic inertia. When survivors finally forced the reckoning, the <a href="https://oig.justice.gov/sites/default/files/reports/21-093.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Justice Department's Inspector General</a> found the FBI mishandled early allegations; the federal government later agreed to pay <a href="https://apnews.com/article/fbi-larry-nassar-settlement-gymnasts-3fe1a97e8f9b2d12a50cbbbf64d5b70a" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">nearly $139 million</a> to victims for those failures, on top of historic settlements by Michigan State and USA Gymnastics. We didn't need a registry map to find the harm; we needed basic accountability within powerful institutions.
            </p>
          </div>

          <div>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              <strong>The billionaire with a non-prosecution agreement</strong><br />
              <a href="https://www.justice.gov/opr/page/file/1336471/download" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Jeffrey Epstein</a> showcased power's gravitational pull on justice: a federal non-prosecution agreement that protected him and "potential co-conspirators"—later condemned by DOJ's Office of Professional Responsibility as the product of "poor judgment." We hang new rules on "stranger danger," then watch a wealthy repeat offender engineer a legal force field. The registry didn't stop him; influence did.
            </p>
          </div>

          <div>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              <strong>Celebrity and the two-track system</strong><br />
              <a href="https://www.pacourts.us/Storage/media/pdfs/20210630/203948-june.30.2021.opinionbyjusticewecht.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Bill Cosby's</a> 2018 conviction collapsed in 2021 because the Pennsylvania Supreme Court found prosecutors violated due process by reneging on a prior non-prosecution assurance—a ruling about constitutional fairness, not innocence. You don't have to like the outcome to see the lesson: our system bends when power, fame, and prosecutorial decisions intersect. Our public debate defaults to more registry; the cases scream fix institutions and rules.
            </p>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              <a href="https://ww2.lacourt.org/hp/sg0tt2fzb0h5rinbsj3p4xxt/1374562163.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Roman Polanski</a> pled guilty to unlawful sexual intercourse with a minor in 1977 and fled before sentencing; decades of legal maneuvering and elite sympathy followed. That's not a neighborhood-map problem—that's an accountability problem with a Hollywood gloss.
            </p>
          </div>

          <div>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              <strong>Politicians aren't a firewall either</strong><br />
              Ex-House Speaker <a href="https://www.justice.gov/usao-ndil/pr/statement-united-states-attorney-s-office-following-sentencing-former-us-speaker-house" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Dennis Hastert</a>—sentenced in 2016 for financial crimes tied to hush-money payments—was publicly labeled a "serial child molester" by the federal judge at sentencing; the abuse itself was too old to charge. Again, the risk vector wasn't a shadowy stranger—he wore a suit and commanded the gavel.
            </p>
          </div>

          <div>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              <strong>Teachers and coaches</strong><br />
              Iconic cases—from <a href="https://apnews.com/article/us-news-ap-top-news-seattle-wa-state-wire-0542b4631cb2e6f47c57dcc3de9e7dd9" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Mary Kay Letourneau</a> to high-school coaching scandals—prove the pattern repeats in classrooms and gyms nationwide. Familiar faces. Endorsed by institutions. Trusted by families. That's where prevention has to live.
            </p>
          </div>
        </div>

        <hr className="border-0 h-px bg-slate-200 my-7" />

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">The math we ignore: most abuse isn't "stranger danger"</h2>

        <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r-lg mb-8">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-cyan-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <div>
              <p className="text-cyan-800">
                <strong>The data tells a different story:</strong> Only <span className="bg-cyan-100 px-1 rounded font-semibold">5.3% of people convicted of sex offenses are rearrested for a new sex crime within 3 years</span>, while the vast majority of child sexual abuse is committed by someone the child knows. <em>We keep writing laws for the rare scenario and aiming them at the wrong target.</em>
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          The best-available national figures have said it for years: a large majority of child sexual abuse is committed by someone the child knows—family members and acquaintances, not unknown strangers. The Bureau of Justice Statistics has also shown that within three years of release, about <a href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">5.3%</a> of people convicted of sex offenses are rearrested for a new sex crime—a far cry from the infamous "frightening and high" mantra that seeped into Supreme Court doctrine from a flimsy citation and became public policy gospel. For more on this myth and its origins, see our analysis of <Link to="/blog/frightening-and-high-recidivism-myth" className="text-blue-600 hover:text-blue-800 underline">the "frightening and high" recidivism myth</Link>.
        </p>

        <hr className="border-0 h-px bg-slate-200 my-7" />

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What registries do—and don't—do</h2>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          Registries started as a law-enforcement tool; public notification came later. In <a href="https://tile.loc.gov/storage-services/service/ll/usrep/usrep538/usrep538084/usrep538084.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Smith v. Doe (2003)</a>, the Supreme Court said registration was a civil measure, not punishment, green-lighting retroactive application—language that helped supercharge expansion. Since then, a wave of research has forced hard questions: police-only registration can help investigations, but public notification often doesn't reduce new sex crimes and may increase recidivism by destabilizing housing, work, and social ties. This is not abolitionist sloganeering; it's economic and criminological analysis. Meanwhile, courts have begun to push back on excesses: the Sixth Circuit held Michigan's scheme punitive in effect; the Supreme Court struck down a blanket social-media ban for registrants in <a href="https://www.supremecourt.gov/opinions/16pdf/15-1194_08l1.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Packingham</a>. The direction of travel in the evidence and the law is clear: blunt, fear-driven policies are constitutionally brittle and operationally ineffective.
        </p>

        <hr className="border-0 h-px bg-slate-200 my-7" />

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">The contradiction at the center</h2>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg mb-8">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-purple-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-purple-800 font-semibold">
                The cognitive dissonance: We go to church believing the registry keeps our children safe, then learn about waves of clergy abuse. We cheer Friday-night lights, then discover a coach exploited access to kids for years. <em>The danger we fear is real, but the story we tell ourselves about where it lives is not.</em>
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          We go to church believing the registry keeps our children safe, then learn about waves of clergy abuse. We cheer Friday-night lights, then discover a coach exploited access to kids for years. We donate to youth organizations and find thousands of claims of abuse inside their ranks. We binge true-crime about wealthy predators and congratulate ourselves for locating them on a map—though their power, not their address, was the shield. The danger we fear is real, but the story we tell ourselves about where it lives is not.
        </p>

        <hr className="border-0 h-px bg-slate-200 my-7" />

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">If safety is the goal, stop confusing surveillance with prevention</h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Target the right risk</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Invest in trained, independent safeguarding across youth-serving institutions: unannounced audits, mandatory chaperone ratios, real background checks (beyond database boxes), and whistleblower protections that function. Don't just pass a policy; test it like a fire drill. <em className="text-blue-700">(When institutions failed, the worst cases thrived.)</em>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Follow the evidence on law design</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Where registration is retained, prioritize law-enforcement access and individualized risk assessment, not one-size-fits-all publicity. The <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1100663" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Prescott & Rockoff</a> work, and a body of state-level studies, suggest police-facing registration helps, while broad public shaming can backfire. <em className="text-green-700">If a measure predictably increases homelessness and job loss, your "safety policy" may be a "risk policy" in disguise.</em>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Fix the incentive structure</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The Nassar and Epstein files are tutorials in institutional failure. Create personal accountability for officials who bury complaints or cut corner-case deals. Protect and resource survivor reporting channels. <em className="text-purple-700">If that sounds obvious, ask yourself why it keeps not happening.</em>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Stop exporting myths into constitutional law</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Courts that once echoed the "frightening and high" trope now confront better data. Legislatures should, too. Policy built on a misquote becomes a machine for unintended harm. <em className="text-amber-700">Michigan's experience—and <em>Packingham</em>'s unanimous rebuke of sweeping internet bans—are warning lights.</em>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start">
              <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0 mt-1">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Redirect money to what works</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Every dollar poured into ever-expanding public notification is a dollar not spent on victim services, trauma-informed treatment, youth education, digital-age grooming investigations, and proactive compliance checks where kids actually spend time (schools, clubs, teams, faith communities). <em className="text-teal-700">The return on investment isn't performative; it's protective.</em>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-0 h-px bg-slate-200 my-7" />

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Why this matters to everyone—not just "people on the registry"</h2>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          If you're a parent, your best defense is institutional transparency and prevention protocols, not a map of prior convictions. If you're a survivor, a system obsessed with "strangers" can erase your reality. If you're a prosecutor or policymaker, your legacy is measured not by how harsh your press releases sound but by whether your policies reduce harm. If you're a neighbor, safety is collective: stable housing, employment, and treatment access reduce reoffending; banishment doesn't.
        </p>

        <hr className="border-0 h-px bg-slate-200 my-7" />

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What SOLAR stands for—and what we're asking policymakers to do</h2>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-8">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-green-800">
                <strong>SOLAR's evidence-based approach:</strong> For detailed policy recommendations and legislative priorities, see our <Link to="/about" className="text-green-600 hover:text-green-800 underline font-semibold">mission and policy platform</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-slate-700 leading-relaxed">
            Rebalance the registry toward evidence-based risk assessment and law-enforcement utility; stop treating it as a one-size-fits-all public billboard. (The data—and the courts—are already pointing that way.)
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Narrow residency, presence, and internet restrictions to conduct-based prohibitions that actually prevent contact offending (think grooming, unsupervised access), and abandon broad bans that courts—and common sense—keep rejecting.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Fund institutional safeguarding where kids are: auditing and training in schools, churches, youth sports, and clubs; independent ombuds; and serious penalties for cover-ups. (If these had existed, the headline cases would look very different.)
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Increase resources for survivor services, hotlines, and civil justice pathways—without relying on cathartic but ineffective criminal-justice theater. For families navigating these challenges, our <Link to="/resources/family-support-guide" className="text-blue-600 hover:text-blue-800 underline">Family & Allies Support Guide</Link> provides practical guidance.
          </p>
        </div>

        <hr className="border-0 h-px bg-slate-200 my-7" />

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">The takeaway we keep refusing to take away</h2>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-8">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-red-800 font-semibold">
                <strong>Bottom line:</strong> The registry feels like safety. It is theater when it's built around the wrong narrative. <span className="bg-red-100 px-1 rounded">We can keep clutching our comfort blanket, or we can build a system that actually protects people.</span>
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          The registry feels like safety. It is theater when it's built around the wrong narrative. The cases we can't stop talking about—church scandals, Olympic doctors, billionaire predators, storied coaches, beloved stars, and elected officials—tell a different story: power, proximity, and institutional failure are the real risk factors. We can keep clutching our comfort blanket, or we can build a system that actually protects people.
        </p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          The choice isn't between being "tough" or "soft." It's between policies that work and policies that let us sleep. The headlines aren't going away. Neither is the harm—unless we finally look where it's happening and fix that. For more resources on evidence-based approaches to prevention and policy reform, explore our <Link to="/resources" className="text-blue-600 hover:text-blue-800 underline">complete resource library</Link>.
        </p>

        <hr className="border-0 h-px bg-slate-200 my-7" />

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Sources (selected)</h2>
        <ul className="space-y-2 text-slate-700">
          <li>Catholic clergy abuse: <a href="https://www.attorneygeneral.gov/wp-content/uploads/2023/05/INVESTIGATING-GRAND-JURY-REPORT-NO.-1_FINAL_May-2023_Redacted.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Pennsylvania Grand Jury (2018)</a>; <a href="https://clergyreport.illinoisattorneygeneral.gov/download/report.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Illinois AG Report (2023)</a>; <a href="https://www.marylandattorneygeneral.gov/reports/OAG_Redacted_Report_on_Child_Sexual_Abuse.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Maryland AG Report (2023)</a>; <a href="https://www.bishop-accountability.org/accused-db-overview/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">BishopAccountability database</a>.</li>
          <li>Boy Scouts/Scouting America: <a href="https://apnews.com/article/abuse-settlement-boy-scouts-2-46-billion-18a5bb76b31a8cbd010e40196516bffd" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP coverage of 82,000 claims and $2.46B settlement</a>.</li>
          <li>Sandusky: <a href="https://www.espn.com/college-football/story/_/id/8077356/jerry-sandusky-found-guilty-45-48-counts-child-sex-abuse-case" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">ESPN verdict</a>; <a href="https://www.pbs.org/newshour/nation/jerry-sandusky-resentenced-to-30-60-years-for-sexual-abuse" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">PBS resentencing</a>.</li>
          <li>Nassar: <a href="https://www.justice.gov/usao-wdmi/pr/2017_12_07_LN" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ WDMI sentencing</a>; <a href="https://oig.justice.gov/sites/default/files/reports/21-093.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ OIG report</a>; <a href="https://apnews.com/article/fbi-larry-nassar-settlement-gymnasts-3fe1a97e8f9b2d12a50cbbbf64d5b70a" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP on federal $139M settlement</a>.</li>
          <li>Epstein: <a href="https://www.justice.gov/opr/page/file/1336471/download" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ OPR report</a>.</li>
          <li>Cosby: <a href="https://www.pacourts.us/Storage/media/pdfs/20210630/203948-june.30.2021.opinionbyjusticewecht.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Pennsylvania Supreme Court opinion (2021)</a>.</li>
          <li>Polanski: <a href="https://ww2.lacourt.org/hp/sg0tt2fzb0h5rinbsj3p4xxt/1374562163.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">L.A. Superior Court record</a>.</li>
          <li>Hastert: <a href="https://www.justice.gov/usao-ndil/pr/statement-united-states-attorney-s-office-following-sentencing-former-us-speaker-house" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ press release</a>.</li>
          <li>Myth vs. data: <a href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">SMART/BJS recidivism monograph</a>.</li>
          <li>Law & research: <a href="https://tile.loc.gov/storage-services/service/ll/usrep/usrep538/usrep538084/usrep538084.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Smith v. Doe (2003)</a>; <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1100663" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Prescott & Rockoff (2011)</a>; <a href="https://law.justia.com/cases/federal/appellate-courts/ca6/15-1536/15-1536-2016-08-25.html" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Doe v. Snyder (6th Cir. 2016)</a>; <a href="https://www.supremecourt.gov/opinions/16pdf/15-1194_08l1.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Packingham (2017)</a>.</li>
        </ul>

        <div className="border-t border-slate-200 mt-12 pt-8">
          <p className="text-sm text-slate-600">
            © The SOLAR Project. All rights reserved.
          </p>
        </div>

      </main>
    </div>
  );
}