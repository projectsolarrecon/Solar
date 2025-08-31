              import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function PlayingFieldsAndSchoolyards() {
  return (
    <div className="bg-white">
      <SEO 
        title="Playing Fields & Schoolyards: Where the Protection Myth Fails - The SOLAR Project"
        description="Long-form investigative exposé on abuse in schools and sports. Why registry maps miss the real risk—and what actually protects kids. Verified sources and SOLAR's prevention roadmap."
        keywords="school abuse, sports abuse, Jerry Sandusky, Larry Nassar, educator sexual misconduct, youth sports safety, registry effectiveness, child protection, institutional abuse"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 backdrop-blur-sm text-white py-16">
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
            <span className="bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              📰 INVESTIGATIVE SERIES · PART 4
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Playing Fields & Schoolyards: Where the Protection Myth Fails
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            Parents send their kids to school and practice believing two things are keeping them safe: the adults in charge and the map. The adults are vetted, credentialed, celebrated. The map—our sex-offender registry—puts "danger" somewhere else. But case after case shows what the map can't: the most catastrophic harm was inside systems families were told to trust.
          </p>
          
          <div className="flex items-center text-sm text-slate-300">
            <span className="flex items-center mr-6">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              16 min read
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              August 29, 2025
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🏈</span>
            The coach with keys—and a community that looked away
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Start at Penn State. <strong>Jerry Sandusky</strong> wasn't a stranger in a trench coat; he was the assistant coach with an office down the hall, a charity for vulnerable boys, and the social capital to quiet whispers. The Pennsylvania grand jury presentment laid out years of abuse, grooming, and a pattern of institutional actions that muffled alarms. The later <a href="https://media.pennlive.com/midstate_impact/other/REPORT_FINAL_071212.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Freeh inquiry</a> detailed leadership failures that left children unprotected while the brand was preserved. None of that shows up on a neighborhood map; all of it thrived in a revered program where <em>access</em>, not address, was the risk. (<a href="https://info.publicintelligence.net/SanduskyGrandJuryPresentment.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">grand jury presentment PDF</a>)
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            What should unsettle parents most is how long credible red flags were contained internally—warnings filtered through administrators and campus police, delayed, minimized, or reframed as "misunderstandings," all while Sandusky retained status that drew new kids into his orbit. Even after the scandal, review documents and criminal complaints are a tutorial in how prestige creates pressure to disbelieve, discredit, and defer.
          </p>

          <blockquote className="relative overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-red-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/>
              </svg>
              <p className="text-red-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "The map of registered offenders doesn't show the man your child's coach turned out to be."
                </span>
              </p>
            </div>
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🩺</span>
            The doctor in the training room: white coats as camouflage
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Gymnastics parents were told, "Go see Dr. Larry." For years, USA Gymnastics and Michigan State University sent athletes to <strong>Larry Nassar</strong>, who used his medical authority to assault children and young women under the guise of "treatment." When survivors finally forced a reckoning, the <a href="https://oig.justice.gov/sites/default/files/reports/21-096.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Justice Department's Inspector General</a> documented how the FBI mishandled early allegations—an institutional failure so grave that the federal government later agreed to a nine-figure settlement with victims. Michigan State paid <strong>$500 million</strong>; USA Gymnastics and the U.S. Olympic & Paralympic Committee agreed to <strong>$380 million</strong> for hundreds of survivors. (<a href="https://msutoday.msu.edu/news/2018/05/larry-nassar-survivors-and-michigan-state-university-announce-they-have-successfully-resolved-e" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">MSU</a>; <a href="https://apnews.com/article/sports-2020-tokyo-olympics-sexual-abuse-gymnastics-larry-nassar-40c88c269a8fedf28b5fada59b9079ef" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">AP</a>)
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Congress responded with the <a href="https://www.congress.gov/bill/115th-congress/senate-bill/534" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">SafeSport Authorization Act</a>, creating a national body to investigate and sanction abuse in Olympic sports. Yet recent cases show delayed bans and spotty reporting endure.
          </p>

          <blockquote className="relative overflow-hidden rounded-2xl border border-cyan-200 bg-cyan-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-cyan-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
              </svg>
              <p className="text-cyan-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "A doctor's title has more power than a red dot ever will."
                </span>
              </p>
            </div>
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">📊</span>
            The numbers schools don't publish—and the ones we have
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            How common is abuse by school personnel? The U.S. Department of Education's commissioned synthesis (<a href="https://files.eric.ed.gov/fulltext/ED483143.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Shakeshaft</a>) found the <strong>best estimate</strong>—based on nationally representative AAUW survey data—is that <strong>about 9.6%</strong> of students experience some form of educator sexual misconduct over their K–12 years. Even if researchers debate definitions—verbal vs. physical—the takeaway is the same: the harm overwhelmingly involves <strong>known adults inside schools</strong>.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Juvenile victimization patterns align with what survivors have said for decades: most victims <strong>know</strong> the perpetrator. <a href="https://rainn.org/facts-statistics-the-scope-of-the-problem/statistics-children-teens/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">RAINN</a> summarizes DOJ data this way—<strong>93%</strong> of victims under 18 knew the abuser (family or acquaintance). That's the opposite of the "unknown stranger" narrative registry maps invite the public to fixate on.
          </p>

          <blockquote className="relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-amber-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
              </svg>
              <p className="text-amber-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "The familiar face in the classroom is more likely to be the danger than the stranger across town."
                </span>
              </p>
            </div>
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">📚</span>
            Teacher–student abuse is not an artifact of the past
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Iconic cases grab attention—<strong>Mary Kay Letourneau</strong>'s felony convictions for raping a 12-year-old student became a late-night punchline—but the steady drumbeat of prosecutions and disciplinary actions today is the real story. Educator sexual misconduct remains a contemporary, not historical, threat; mainstream coverage repeatedly documents cases across districts each year. The lesson is grimly consistent: familiar faces with unsupervised access pose the risk maps cannot show.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            District-level audits reveal the scale when someone finally counts. After the <em>Chicago Tribune</em>'s 2018 <a href="https://news.wttw.com/2018/06/01/cps-failed-protect-students-sex-abuse-tribune-report" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener"><strong>Betrayed</strong> series</a>, Chicago Public Schools stood up an Office of Student Protections and Title IX and published detailed reforms; the CPS Inspector General's <a href="https://cpsoig.org/uploads/3/5/5/6/35562484/cpsoig_annual_report_fy2024.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">annual reports</a> continue to track allegations, investigations, and discipline for staff sexual misconduct. Transparency, not cartography, starts to change behavior.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🗂️</span>
            "Passing the trash": how systems quietly move the problem
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            For years, schools relied on separation agreements and bland references to ease out abusers—who then surfaced in new districts. Congress eventually prohibited <strong>aiding and abetting</strong> sexual misconduct in K–12 through <strong>ESEA §8546</strong> (Every Student Succeeds Act). The U.S. Department of Education's 2022 study and guidance pressed states to adopt anti-"passing the trash" policies. Laws matter. But policies only protect children if hiring managers and HR follow them—and if complaints trigger law enforcement, not just conference-room risk management. (<a href="https://www.ed.gov/sites/ed/files/2022/06/Study-of-State-Policies-to-Prohibit-Aiding-and-Abetting-Sexual-Misconduct-in-Schools.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">ED study</a>; <a href="https://www.ed.gov/sites/ed/files/policy/elsec/leg/essa/section8546dearcolleagueletter.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">ED guidance</a>)
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🏊</span>
            Youth sports beyond the headlines: it wasn't just Nassar
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In swimming, the <strong>Rick Curl</strong> case revealed a culture of silence, NDAs, and missed alarms. USA Swimming ultimately banned the high-profile coach for life; contemporaneous reporting detailed hush payments while a teenage swimmer's abuse remained buried. Olympic swimmer <strong>Ariana Kukors</strong> later alleged USA Swimming ignored years of grooming by her coach, <strong>Sean Hutchison</strong>. The governing body has strengthened policies, but survivor suits and SafeSport sanctions show how hard it is to retrofit accountability after years of deference. (<a href="https://www.washingtonpost.com/sports/olympics/rick-curl-receives-lifetime-ban-from-usa-swimming/2012/09/19/fb9762f4-0289-11e2-91e7-2962c74e7738_story.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Washington Post</a>; <a href="https://www.washingtonpost.com/sports/my-insides-are-shattered-former-olympian-ariana-kukors-tells-of-alleged-abuse/2018/02/12/404eb868-0f66-11e8-9065-e55346f6de81_story.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Kukors case</a>)
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            College athletics had their own reckoning. At <strong>Ohio State</strong>, an independent investigation concluded team physician <strong>Richard Strauss</strong> sexually abused at least <strong>177</strong> students over two decades while complaints went unheeded—a governance failure, not a failure of public notification about people who already have convictions. (<a href="https://straussinvestigation.osu.edu/home" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">OSU Strauss report portal</a>)
          </p>

          <blockquote className="relative overflow-hidden rounded-2xl border border-cyan-200 bg-cyan-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-cyan-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 717.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
              </svg>
              <p className="text-cyan-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "Institutional prestige can shield predators longer than any registry ever could."
                </span>
              </p>
            </div>
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🎯</span>
            Why the registry keeps missing the real risk
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Registries show where <em>convicted</em> people live, not <strong>who has authority over your child tomorrow</strong>. In schools and sports, abuse is a function of <strong>proximity + power + secrecy</strong>:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Gatekeeping:</strong> Coaches and teachers control time, access, and evaluation; kids learn compliance as a survival skill in competitive environments.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Halo effects:</strong> Prestige and winning records dampen suspicion; complaints sound like disloyalty.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Internalization:</strong> Institutions treat abuse as a PR or liability event before a safeguarding emergency—routing reports to risk managers rather than detectives.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Underreporting:</strong> Federal data and RAINN's summaries show most victims don't report; when they do, few cases produce convictions, so the names never hit a registry in the first place.
                </div>
              </li>
            </ul>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Even recidivism data—so often weaponized to justify ever-harsher registry rules—doesn't support the "frightening and high" folklore. The <a href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">BJS study</a> most cited by policymakers found <strong>5.3%</strong> of released sex-offense prisoners were rearrested for a new sex crime within three years. The registry can't stop an abuser who's never been convicted, and it can't fix supervisory systems that keep choosing reputation over children.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🛡️</span>
            What works: build protection where kids actually are
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">1</span>
                </div>
                <div>
                  <strong>Independent reporting & escalation.</strong> External, 24/7 reporting channels that bypass local power structures, with automatic referral to law enforcement for alleged crimes. (Chicago's OSP/Title IX model publishes data and process.)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">2</span>
                </div>
                <div>
                  <strong>No-secrets supervision.</strong> Mandatory chaperones for medical/athletic exams; no closed-door one-on-ones; transparent locker-room protocols; random audits.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">3</span>
                </div>
                <div>
                  <strong>Real hiring due diligence.</strong> Fully implement ESEA §8546 anti-"aiding and abetting" rules; centralized misconduct checks; document adverse findings so predators can't reboot elsewhere.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">4</span>
                </div>
                <div>
                  <strong>Independent investigations with public reporting.</strong> Outside investigators for credible allegations in K–12 and universities, with timelines and survivor-support obligations.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">5</span>
                </div>
                <div>
                  <strong>Athlete-safety enforcement with teeth.</strong> Tie eligibility and funding to SafeSport reporting compliance, discipline transparency, and measurable response times.
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🧭</span>
            The cultural tell: comfort vs. safety
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Parents check the registry, feel reassured, and drive to practice. Meanwhile, the real determinants of risk—access, secrecy, status—aren't on the map. High-profile cases in schools and sports didn't expose failures of public notification; they exposed failures of <strong>adult courage</strong>: to report a colleague, to escalate beyond the brand, to believe kids when it's inconvenient.
          </p>

          <blockquote className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
              </svg>
              <p className="text-emerald-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "Safety is not a dot on a map—it's whether the adults in charge act when the alarms sound."
                </span>
              </p>
            </div>
          </blockquote>
        </section>

        {/* Sources Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Selected Sources (Verified)</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Penn State & High-Profile Cases</h4>
              <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                <li><a href="https://info.publicintelligence.net/SanduskyGrandJuryPresentment.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Penn State Grand Jury Presentment (2011)</a></li>
                <li><a href="https://media.pennlive.com/midstate_impact/other/REPORT_FINAL_071212.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Freeh Report PDF</a> · <a href="https://www.documentcloud.org/documents/396518-freeh-report-into-penn-state-university/" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">DocumentCloud</a></li>
                <li><a href="https://oig.justice.gov/sites/default/files/reports/21-096.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">DOJ OIG — FBI Handling of Nassar Allegations (2021)</a></li>
                <li><a href="https://msutoday.msu.edu/news/2018/05/larry-nassar-survivors-and-michigan-state-university-announce-they-have-successfully-resolved-e" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">MSU $500M settlement</a></li>
                <li><a href="https://apnews.com/article/sports-2020-tokyo-olympics-sexual-abuse-gymnastics-larry-nassar-40c88c269a8fedf28b5fada59b9079ef" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">AP — USAG/USOPC $380M settlement</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Legislative & Policy Response</h4>
              <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                <li><a href="https://www.congress.gov/bill/115th-congress/senate-bill/534" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Congress — SafeSport Authorization Act (2018)</a></li>
                <li><a href="https://files.eric.ed.gov/fulltext/ED483143.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">DOE — Educator Sexual Misconduct Synthesis (Shakeshaft, 2004)</a></li>
                <li><a href="https://www.ed.gov/sites/ed/files/2022/06/Study-of-State-Policies-to-Prohibit-Aiding-and-Abetting-Sexual-Misconduct-in-Schools.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">ED — ESEA §8546 Study (2022)</a></li>
                <li><a href="https://www.ed.gov/sites/ed/files/policy/elsec/leg/essa/section8546dearcolleagueletter.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">ED — Dear Colleague Letter (2018)</a></li>
                <li><a href="https://www.ed.gov/media/document/elementary-and-secondary-education-act-provisions-prohibiting-aiding-and-abetting-of-sexual-misconduct-schools-june-2022-12504.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">ED — ESEA §8546 fact sheet</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Data & Research</h4>
              <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                <li><a href="https://rainn.org/facts-statistics-the-scope-of-the-problem/statistics-children-teens/" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">RAINN — Children & Teens Statistics</a></li>
                <li><a href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">BJS — Sex Offender Recidivism (9-year follow-up)</a></li>
                <li><a href="https://news.wttw.com/2018/06/01/cps-failed-protect-students-sex-abuse-tribune-report" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">WTTW — Chicago Tribune Betrayed series coverage</a></li>
                <li><a href="https://www.cps.edu/about/departments/office-of-student-protections-and-title-ix/" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">CPS — Office of Student Protections</a></li>
                <li><a href="https://cpsoig.org/uploads/3/5/5/6/35562484/cpsoig_annual_report_fy2024.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">CPS Inspector General FY2024 report</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Sports Cases & Coverage</h4>
              <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                <li><a href="https://www.washingtonpost.com/sports/olympics/rick-curl-receives-lifetime-ban-from-usa-swimming/2012/09/19/fb9762f4-0289-11e2-91e7-2962c74e7738_story.html" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Washington Post — Rick Curl ban</a></li>
                <li><a href="https://www.espn.com/olympics/swimming/story/_/id/8398669/rick-curl-banned-life-usa-swimming-having-improper-relationship" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">ESPN — Rick Curl case</a></li>
                <li><a href="https://www.washingtonpost.com/local/ex-swimming-coach-rick-curl-to-be-sentenced-in-child-sex-abuse-case/2013/05/23/d80320f2-c3a5-11e2-9fe2-6ee52d0eb7c1_story.html" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Washington Post — Rick Curl sentencing</a></li>
                <li><a href="https://www.washingtonpost.com/sports/my-insides-are-shattered-former-olympian-ariana-kukors-tells-of-alleged-abuse/2018/02/12/404eb868-0f66-11e8-9065-e55346f6de81_story.html" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Washington Post — Ariana Kukors case</a></li>
                <li><a href="https://abcnews.go.com/Politics/congress-alleged-sexual-abuse-usa-swimming-olympic-sports/story?id=55364290" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">ABC News — Congressional hearing coverage</a></li>
                <li><a href="https://straussinvestigation.osu.edu/home" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">OSU — Richard Strauss investigation portal</a></li>
                <li><a href="https://content.presspage.com/uploads/2170/perkinscoiereport-revised-351287.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Perkins Coie — Strauss report PDF</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Series Navigation */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Investigative Series</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/blog/political-theater" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📰</span>
                <div>
                  <h4 className="font-medium text-gray-800">Part 1: Political Theater</h4>
                  <p className="text-sm text-gray-600">Why We Chose the Wrong Crime to Register</p>
                </div>
              </div>
            </Link>
            
            <Link to="/blog/the-enforcers" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚓</span>
                <div>
                  <h4 className="font-medium text-gray-800">Part 2: The Enforcers</h4>
                  <p className="text-sm text-gray-600">When Police, Judges & Prosecutors Offend</p>
                </div>
              </div>
            </Link>

            <Link to="/blog/sanctuary-and-silence" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⛪</span>
                <div>
                  <h4 className="font-medium text-gray-800">Part 3: Sanctuary and Silence</h4>
                  <p className="text-sm text-gray-600">Faith Institutions & Registry Failures</p>
                </div>
              </div>
            </Link>
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
    </div>
  );
}

export default PlayingFieldsAndSchoolyards;