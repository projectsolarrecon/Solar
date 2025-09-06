import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function WhoIsSOLAR(): JSX.Element {
  return (
    <div className="bg-white">
      <SEO 
        title="Who Is SOLAR, and Why Should I Care? - The SOLAR Project"
        description="Meet SOLAR: evidence-first, person-centered advocacy replacing stigma with safety, opportunity, liberty, accountability, and redemption."
        keywords="SOLAR Project, sex offense laws, registry reform, RECON, evidence-based policy, Patty Wetterling, Does v. Snyder, Packingham, In re Taylor, BJS recidivism, NIJ SORN"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-slate-100/90 hover:text-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Blog
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Who Is SOLAR, and Why Should I Care?</h1>
          <p className="mt-3 text-lg text-slate-100/90 max-w-3xl">
            Shining light where there’s been only darkness—replacing myth with data, fear with compassion, and permanent punishment with real safety.
          </p>
          <div className="mt-6 flex flex-wrap items-center text-sm text-slate-200/90">
            <span className="mr-3">By The SOLAR Project</span>
            <span className="mx-3 opacity-60">•</span>
            <time dateTime="2025-07-04">July 4, 2025</time>
            <span className="mx-3 opacity-60">•</span>
            <span>~12–15 min read</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lead */}
        <section className="prose prose-slate max-w-none">
          <p>
            For decades, the public conversation about sex offense laws has been dominated by fear, misinformation, and stigma. 
            In that climate, policies have grown harsher, broader, and often unconstitutional—<em>but not safer</em>. Families are torn apart, 
            communities destabilized, and people with past convictions locked into <strong>permanent punishment</strong>.
          </p>
          <p>
            <strong>The SOLAR Project</strong> was born from lived experience and grounded in evidence. We exist to shine a light in that darkness—
            replacing myth with data, fear with compassion, and punishment with real paths toward safety and reintegration.
          </p>
        </section>

        {/* Callout: Rhetorical */}
        <div className="mt-8 p-5 rounded-2xl bg-red-50 border border-red-200">
          <div className="flex items-start">
            <div className="mt-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.001 10h2v5h-2z"/><path d="M12 3C7.031 3 3 7.031 3 12s4.031 9 9 9 9-4.031 9-9-4.031-9-9-9zm0 16a7 7 0 110-14 7 7 0 010 14z"/>
              </svg>
            </div>
            <p className="text-sm sm:text-base text-red-900">
              Let’s be honest: America’s obsession with registries isn’t about safety. It’s about fear—and political theater—
              while gun deaths, domestic violence, and DUIs pile up without lifelong public shaming.
            </p>
          </div>
        </div>

        {/* Three Meanings of SOLAR */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800">SOLAR Means Three Things</h2>

          <div className="mt-6 space-y-8">
            {/* 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center mb-3">
                <div className="mr-3 rounded-full bg-slate-200 w-9 h-9 flex items-center justify-center">
                  <span className="text-slate-700 font-semibold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Sex Offense Learning, Advocacy, and Resources</h3>
              </div>
              <p className="text-slate-700">
                This is our core identity. We confront sex offense laws because current systems do not work. 
                We emphasize <strong>person-first language</strong>: people are more than their worst moment.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex">
                  <span className="mt-1 mr-2">📚</span>
                  <span><strong>Learning:</strong> DOJ/BJS data, recidivism research, and lived experience guide our work.</span>
                </li>
                <li className="flex">
                  <span className="mt-1 mr-2">📣</span>
                  <span><strong>Advocacy:</strong> We oppose ineffective, unconstitutional, and harmful policies and propose evidence-based alternatives.</span>
                </li>
                <li className="flex">
                  <span className="mt-1 mr-2">🧭</span>
                  <span><strong>Resources:</strong> Practical guides for registration, housing, employment, travel, and navigating stigma.</span>
                </li>
              </ul>
              <p className="mt-4 text-slate-700">
                And yes—the registry includes people who have done serious harm. We don’t minimize that. 
                But real accountability requires <strong>proportionate, evidence-based responses</strong>, not one-size-fits-all punishment.
              </p>
            </div>

            {/* 2 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center mb-3">
                <div className="mr-3 rounded-full bg-slate-200 w-9 h-9 flex items-center justify-center">
                  <span className="text-slate-700 font-semibold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Supporting, Organizing, Leading, Advancing, Reforming</h3>
              </div>
              <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-slate-700">
                <li>🤝 <strong>Supporting</strong> individuals and families with credible resources and community.</li>
                <li>🧩 <strong>Organizing</strong> voices for reform and coalition-building.</li>
                <li>🧪 <strong>Leading</strong> with data that challenges myth-driven policy.</li>
                <li>🛡️ <strong>Advancing</strong> prevention, treatment, stability, and reintegration.</li>
                <li>⚙️ <strong>Reforming</strong> overbroad laws that perpetuate harm.</li>
              </ul>
              <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <p className="text-amber-900 text-sm">
                  If “public safety” justifies permanent public registries, why limit them to one class of offense? 
                  Where are the registries for repeat DUI, gun crime, or domestic violence? Selective registries look less like safety—and more like stigma.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center mb-3">
                <div className="mr-3 rounded-full bg-slate-200 w-9 h-9 flex items-center justify-center">
                  <span className="text-slate-700 font-semibold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Safety, Opportunity, Liberty, Accountability, Redemption</h3>
              </div>

              {/* Safety */}
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <span className="mr-2">🔒</span>
                  <h4 className="font-semibold text-slate-900">Safety</h4>
                </div>
                <p className="text-slate-700">
                  Same-type recidivism for sex offenses is lower than for many other offense categories; public resources should track actual risk, not stigma. 
                  See the Bureau of Justice Statistics overview of 2012 releases (<a className="text-sky-700 hover:underline" href="https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-34-states-2012-5-year-follow-period-2012-2017" target="_blank" rel="noopener">BJS</a>), 
                  the U.S. Sentencing Commission’s studies of firearms offenders (<a className="text-sky-700 hover:underline" href="https://www.ussc.gov/sites/default/files/pdf/research-and-publications/research-publications/2019/20190627_Recidivism_Firearms.pdf" target="_blank" rel="noopener">USSC 2019</a>, <a className="text-sky-700 hover:underline" href="https://www.ussc.gov/research/research-reports/recidivism-federal-firearms-offenders-released-2010" target="_blank" rel="noopener">USSC 2022</a>), 
                  and NHTSA’s research on DWI/DUI recidivism (<a className="text-sky-700 hover:underline" href="https://www.nhtsa.gov/sites/nhtsa.dot.gov/files/811991-dwi_recidivism_in_usa-tsf-rn.pdf" target="_blank" rel="noopener">NHTSA</a>).
                </p>
                <div className="mt-3 p-4 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-red-900 text-sm">
                    It makes no sense to pour billions into branding registrants for life while ignoring groups that cause far more harm. 
                    That’s not safety. That’s political theater—with dead kids in the wings.
                  </p>
                </div>
              </div>

              {/* Opportunity */}
              <div className="mt-6">
                <div className="flex items-center mb-2">
                  <span className="mr-2">💼</span>
                  <h4 className="font-semibold text-slate-900">Opportunity</h4>
                </div>
                <p className="text-slate-700">
                  Structural barriers—housing bans, passport identifiers, in-person reporting—undercut desistance and community safety. 
                  See federal passport identifier info under International Megan’s Law (<a className="text-sky-700 hover:underline" href="https://travel.state.gov/content/travel/en/passports/legal-matters/passports-and-international-megans-law.html" target="_blank" rel="noopener">State Department</a>) and Miami’s well-documented homelessness caused by residency zones 
                  (<a className="text-sky-700 hover:underline" href="https://www.miamiherald.com/news/local/crime/article237545129.html" target="_blank" rel="noopener">Miami Herald 2019</a>; 
                  <a className="text-sky-700 hover:underline" href="https://mitchellhamline.edu/sex-offense-litigation-policy/2019/11/23/miami-herald-miami-dade-uproots-sex-offender-camp-yet-again-does-harsh-law-really-make-public-safer/" target="_blank" rel="noopener">case archive</a>).
                </p>
                <div className="mt-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="text-amber-900 text-sm">
                    We claim we want reintegration, then slam doors on housing, work, and even passports. Instability isn’t an accident—it’s the policy.
                  </p>
                </div>
              </div>

              {/* Liberty */}
              <div className="mt-6">
                <div className="flex items-center mb-2">
                  <span className="mr-2">🗽</span>
                  <h4 className="font-semibold text-slate-900">Liberty</h4>
                </div>
                <p className="text-slate-700">
                  Courts repeatedly flag overbreadth and punitive effect: 
                  <em> Packingham v. North Carolina</em> (U.S. 2017) (First Amendment) 
                  (<a className="text-sky-700 hover:underline" href="https://www.supremecourt.gov/opinions/16pdf/15-1194_08l1.pdf" target="_blank" rel="noopener">opinion</a>), 
                  <em>Does v. Snyder</em> (6th Cir. 2016) (Ex Post Facto) 
                  (<a className="text-sky-700 hover:underline" href="https://www.opn.ca6.uscourts.gov/opinions.pdf/16a0207p-06.pdf" target="_blank" rel="noopener">opinion</a>; <a className="text-sky-700 hover:underline" href="https://www.aclumich.org/en/news/what-you-need-know-about-does-v-snyder-ii" target="_blank" rel="noopener">case explainer</a>), and 
                  <em>In re Taylor</em> (Cal. 2015) (residency restrictions unconstitutional as applied) 
                  (<a className="text-sky-700 hover:underline" href="https://law.justia.com/cases/california/supreme-court/2015/s206143.html" target="_blank" rel="noopener">opinion</a>; <a className="text-sky-700 hover:underline" href="https://scocal.stanford.edu/opinion/re-taylor-34391" target="_blank" rel="noopener">case summary</a>).
                </p>
                <div className="mt-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <p className="text-blue-900 text-sm">
                    If laws keep losing in court for being too broad, maybe the problem isn’t the courts—maybe the laws are broken.
                  </p>
                </div>
              </div>

              {/* Accountability */}
              <div className="mt-6">
                <div className="flex items-center mb-2">
                  <span className="mr-2">⚖️</span>
                  <h4 className="font-semibold text-slate-900">Accountability</h4>
                </div>
                <p className="text-slate-700">
                  Evidence-based conditions (treatment, targeted supervision) matter—but so does <em>institutional</em> accountability. 
                  See NIJ’s evaluations of SORN effectiveness (<a className="text-sky-700 hover:underline" href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" target="_blank" rel="noopener">NIJ summary</a>; 
                  <a className="text-sky-700 hover:underline" href="https://www.ojp.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener">empirical evaluation</a>).
                </p>
                <div className="mt-3 p-4 rounded-xl bg-slate-100 border border-slate-200">
                  <p className="text-slate-800 text-sm">
                    We demand accountability from individuals. When policy choices make people homeless under bridges, who holds the state accountable?
                  </p>
                </div>
              </div>

              {/* Redemption */}
              <div className="mt-6">
                <div className="flex items-center mb-2">
                  <span className="mr-2">🌱</span>
                  <h4 className="font-semibold text-slate-900">Redemption</h4>
                </div>
                <p className="text-slate-700">
                  Stable housing, employment, and family connection are protective; indiscriminate restrictions increase instability—and risk. 
                  See collateral-consequence reporting and scholarship (<a className="text-sky-700 hover:underline" href="https://www.marshallproject.org/2015/03/31/public-shamings" target="_blank" rel="noopener">The Marshall Project</a>). 
                </p>
                <div className="mt-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p className="text-emerald-900 text-sm">
                    We know redemption works—it’s why risk declines over time. Permanent punishment is cowardice masquerading as safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Position Statements */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-800">Our Position Statements</h2>
          <p className="mt-3 text-slate-700">
            SOLAR is guided by eight core positions, grounded in research and lived experience:
          </p>

          <ol className="mt-6 space-y-6 list-decimal list-inside text-slate-800">
            <li>
              <strong>Registries are ineffective, harmful, and rooted in misinformation.</strong>{' '}
              Most sexual harm is committed by people not on a registry; recidivism rates are lower than for many other crimes, 
              yet registrants face harsher lifelong consequences (<a className="text-sky-700 hover:underline" href="https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-34-states-2012-5-year-follow-period-2012-2017" target="_blank" rel="noopener">BJS overview</a>).
            </li>
            <li>
              <strong>Registries harm individuals, families, and communities.</strong>{' '}
              Fear, discrimination, and vigilante risks are real; children of registrants bear collateral damage they did not cause 
              (context in <a className="text-sky-700 hover:underline" href="https://www.nationalaffairs.com/publications/detail/rethinking-sex-offender-registries" target="_blank" rel="noopener">National Affairs</a>, 
              case reporting in <a className="text-sky-700 hover:underline" href="https://www.newyorker.com/magazine/2016/03/14/when-kids-are-accused-of-sex-crimes" target="_blank" rel="noopener">The New Yorker</a>).
            </li>
            <li>
              <strong>Real risk to children often lies closer to home.</strong>{' '}
              Most child sexual harm is perpetrated by someone known to the child or family (<a className="text-sky-700 hover:underline" href="https://www.cdc.gov/child-abuse-neglect/about/about-child-sexual-abuse.html" target="_blank" rel="noopener">CDC</a>).
            </li>
            <li>
              <strong>Other crimes present greater, more consistent dangers to public safety.</strong>{' '}
              Compare firearms and DUI recidivism to sexual reoffending (<a className="text-sky-700 hover:underline" href="https://www.ussc.gov/sites/default/files/pdf/research-and-publications/research-publications/2019/20190627_Recidivism_Firearms.pdf" target="_blank" rel="noopener">USSC</a>; 
              <a className="text-sky-700 hover:underline" href="https://www.nhtsa.gov/sites/nhtsa.dot.gov/files/811991-dwi_recidivism_in_usa-tsf-rn.pdf" target="_blank" rel="noopener">NHTSA</a>).
            </li>
            <li>
              <strong>Registries are punitive in practice, not merely administrative.</strong>{' '}
              Courts have recognized punitive effects in specific regimes, raising Ex Post Facto and other constitutional problems 
              (<a className="text-sky-700 hover:underline" href="https://www.opn.ca6.uscourts.gov/opinions.pdf/16a0207p-06.pdf" target="_blank" rel="noopener">Does v. Snyder, 6th Cir. 2016</a>; 
              residency bans constrained in <a className="text-sky-700 hover:underline" href="https://law.justia.com/cases/california/supreme-court/2015/s206143.html" target="_blank" rel="noopener">In re Taylor, Cal. 2015</a>).
            </li>
            <li>
              <strong>One-size-fits-all registry laws are fundamentally flawed.</strong>{' '}
              Overbroad, categorical restrictions ignore individual risk and needs, undermining prevention and safety 
              (see <a className="text-sky-700 hover:underline" href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" target="_blank" rel="noopener">NIJ</a>).
            </li>
            <li>
              <strong>Registries create a permanent underclass.</strong>{' '}
              Housing/employment exclusion and “scarlet letter” effects are well documented—Miami’s cycles of forced displacement are emblematic 
              (<a className="text-sky-700 hover:underline" href="https://www.miamiherald.com/news/local/crime/article237545129.html" target="_blank" rel="noopener">Miami Herald</a>).
            </li>
            <li>
              <strong>People are more than their worst act.</strong>{' '}
              Stability and support reduce risk over time; broad shaming increases instability (see 
              <a className="text-sky-700 hover:underline" href="https://www.marshallproject.org/2015/03/31/public-shamings" target="_blank" rel="noopener">The Marshall Project</a>).
            </li>
          </ol>

          {/* Patty Wetterling Pull-Quote */}
          <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-200">
            <blockquote className="text-slate-900">
              <p className="text-lg font-medium">
                “Initially, this was supposed to be a private law-enforcement tool… I’ve turned 180 degrees from where I was.”
              </p>
              <footer className="mt-2 text-sm text-slate-700">
                — <strong>Patty Wetterling</strong>, reflecting on how public registries evolved beyond their intended scope. 
                Sources: <a className="text-sky-700 hover:underline" href="https://www.apmreports.org/story/2016/10/04/sex-offender-registries-wetterling-abduction" target="_blank" rel="noopener">APM Reports (2016)</a>, 
                <a className="text-sky-700 hover:underline" href="https://www.nationalaffairs.com/publications/detail/rethinking-sex-offender-registries" target="_blank" rel="noopener">National Affairs</a>.
              </footer>
            </blockquote>
          </div>
        </section>

        {/* RECON */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-800">RECON: Register Every Convict or None</h2>
          <p className="mt-3 text-slate-700">
            <strong>RECON</strong> is our campaign that exposes the hypocrisy of selective registries. If public safety truly requires permanent public 
            registries, fairness demands they include <em>every conviction type</em>—or we admit it’s not really about safety.
          </p>
          <div className="mt-4 p-5 rounded-2xl bg-fuchsia-50 border border-fuchsia-200">
            <p className="text-fuchsia-900 text-sm">
              We don’t put drunk drivers on yard signs. We don’t force burglars to report every time they sleep somewhere new. 
              We don’t ban people with gun felonies from living within 1,000 feet of schools. Yet we pretend registries for one class 
              of offense are the linchpin of public safety. It’s nonsense—and everyone knows it.
            </p>
          </div>
        </section>

        {/* Why SOLAR, Why Now */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-800">Why SOLAR, Why Now</h2>
          <p className="mt-3 text-slate-700">
            Registries have become political theater, but the victims are real: families evicted, children bullied, opportunities lost, lives destroyed. 
            SOLAR stands for something better—credible because we ground everything in research; relatable because we live these realities; 
            accountable because we hold ourselves and institutions to evidence; and real—neighbors, parents, partners, professionals—committed to shining light where there has been shadow.
          </p>
          <div className="mt-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
            <p className="text-emerald-900 text-sm">
              SOLAR is not just a project—it’s a movement for dignity, redemption, and evidence-based reform.
            </p>
          </div>
        </section>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link to="/blog" className="inline-flex items-center text-slate-700 hover:text-slate-900 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Blog
          </Link>
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} The SOLAR Project</div>
        </div>
      </main>
    </div>
  );
}
