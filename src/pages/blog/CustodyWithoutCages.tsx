import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function CustodyWithoutCages(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Custody Without Cages: Why Clements v. Secretary, DOC Could Redefine Liberty | The SOLAR Project"
        description="Florida's registration and residency restrictions impose parole-like restraints. The Eleventh Circuit remanded Clements for a facts-first look at whether those combined restraints amount to 'custody' for habeas corpus. Evidence, law, and what's at stake."
        keywords="Clements v Secretary DOC, habeas corpus custody, Florida registry residency restrictions, sex offender registration, Eleventh Circuit, federal habeas review"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-slate-200 hover:text-white transition-colors group">
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Blog
            </Link>
          </div>
          
          <div className="mb-4">
            <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Legal Analysis
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Custody Without Cages: Why <em>Clements v. Secretary, DOC</em> Could Redefine Liberty
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-4xl">
            Do Florida's registry and residency rules amount to "custody" for habeas corpus? The Eleventh Circuit wants a fact-driven answer. Here is the law, data, lived reality—and what's at stake.
          </p>
          
          <div className="text-sm text-slate-300">
            <span>By SOLAR</span>
            <span className="mx-2">•</span>
            <span>August 27, 2025</span>
            <span className="mx-2">•</span>
            <span>Legal analysis with verified sources</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* TL;DR Callout */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <div className="text-2xl mr-4">💡</div>
            <div className="text-blue-800">
              <strong>TL;DR:</strong> Florida's registry and residency rules impose frequent, compelled, in-person reporting, geographic exclusion zones, and felony exposure for technical missteps—all while enlisting the public to monitor compliance. The Eleventh Circuit remanded <em>Clements</em> so the district court can decide if those combined restraints are "custody" for habeas. If yes, it opens a federal forum for people long past their sentences.
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Case: Why the Eleventh Circuit Hit Pause</h2>
          <p className="text-lg text-slate-700 mb-6">
            Habeas corpus—the "Great Writ"—is meant to guard against unlawful restraint. The threshold question is whether a person is "in custody." In <a href="https://media.ca11.uscourts.gov/opinions/unpub/files/202112540.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Clements I</em> (11th Cir. 2023)</a>, the court affirmed dismissal, holding Florida's registration/reporting alone wasn't enough. But in <a href="https://media.ca11.uscourts.gov/opinions/unpub/files/202411353.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Clements II</em> (July 2025)</a>, the Eleventh Circuit vacated and <strong>remanded</strong> for factual development on Florida's residency restrictions in combination with registration burdens.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            Following remand, the Middle District of Florida reopened the case and set briefing into mid-November 2025. See the advocacy update from the Florida Action Committee <a href="https://floridaactioncommittee.org/order-reopening-clements-will-residency-restrictions-tip-the-scales/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">here</a> and their follow-up on the "opportunity to help" <a href="https://floridaactioncommittee.org/opportunity-to-help-in-an-important-legal-challenge/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">here</a>.
          </p>

          <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">⏰</div>
              <div className="text-amber-800">
                <strong>Key insight:</strong> The Eleventh Circuit didn't answer the custody question—it <em>insisted on facts</em>. That alone is a turning point, because modern registry regimes are built from details: deadlines, distances, check-ins, and penalties.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What "Custody" Actually Means in Habeas</h2>
          <p className="text-lg text-slate-700 mb-6">
            Supreme Court doctrine focuses on <em>restraint</em>, not labels. In <a href="https://supreme.justia.com/cases/federal/us/371/236/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Jones v. Cunningham</em> (1963)</a>, <strong>parole was custody</strong> because of ongoing control and the threat of reincarceration. In <a href="https://supreme.justia.com/cases/federal/us/411/345/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Hensley v. Municipal Court</em> (1973)</a>, even release on recognizance was custody due to compelled appearances. By contrast, <a href="https://supreme.justia.com/cases/federal/us/490/488/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Maleng v. Cook</em> (1989)</a> held that <em>collateral consequences</em> of a fully expired sentence don't qualify.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            That's why the circuits split on registries. The <strong>Third Circuit</strong> held Pennsylvania's scheme was custody in <a href="https://casetext.com/case/piasecki-v-court-of-common-pleas" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Piasecki</em> (2019)</a>, emphasizing <em>compelled, in-person</em> reporting under threat of criminal sanction. By contrast, the <strong>Fourth</strong> and <strong>Sixth</strong> Circuits (and others) deemed their states' regimes non-custodial: see <a href="https://casetext.com/case/wilson-v-flaherty-2" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Wilson v. Flaherty</em> (4th Cir. 2012)</a> and <a href="https://casetext.com/case/hautzenroeder-v-dewine-1" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Hautzenroeder v. DeWine</em> (6th Cir. 2018)</a>.
          </p>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">⚖️</div>
              <div className="text-blue-800">
                <strong>Key point:</strong> "Custody" turns on the <em>severity of restraint</em> (compelled appearances, movement limits, threat of incarceration)—not whether a legislature calls a scheme "civil." Our <Link to="/resources/know-your-rights" className="text-blue-600 hover:text-blue-800 underline font-semibold">Know Your Rights guide</Link> explains how these legal distinctions affect your protections.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Florida's Rules, Not the Labels</h2>
          <p className="text-lg text-slate-700 mb-6">
            Florida's statute, <a href="https://www.flsenate.gov/Laws/Statutes/2024/943.0435" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">§ 943.0435</a>, requires in-person reporting within <strong>48 hours</strong> of many changes (address, vehicles, employment, email identifiers), with <strong>transient individuals</strong> required to show up <strong>every 30 days</strong>. Noncompliance is a <strong>felony</strong>. The state residency rule in <a href="https://www.flsenate.gov/Laws/Statutes/2024/775.215" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">§ 775.215</a> bars living within <strong>1,000 feet</strong> of schools, parks, playgrounds, or child-care centers for specified offenses; local ordinances, such as <a href="https://www.miamidade.gov/global/service.page?Mduid_service=ser1548359719410115" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Miami-Dade's 2,500-foot ordinance</a>, expand exclusion zones even further.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            Florida also runs a public notification and alert system through FDLE, making registry data widely accessible and encouraging community monitoring (<a href="https://offender.fdle.state.fl.us/offender/sops/home.jsf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">FDLE registry portal</a>). According to the Legislature's oversight arm (<a href="https://oppaga.fl.gov/products/2024-11" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">OPPAGA 2024</a>), enforcement involves <strong>multiple agencies</strong> (FDLE, DOC, sheriffs, local police) that verify addresses and share data—an <em>operational supervision network</em>, not a passive list.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🚨</div>
              <div className="text-red-800">
                <strong>Reality check:</strong> If a probation officer ordered monthly in-person check-ins, barred most neighborhoods, and made a late email update a felony—we would call that <strong>custody</strong>. Florida calls it <strong>registration</strong>.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Supervision by Other Means</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li><strong>Compelled presence:</strong> frequent in-person reporting (and every 30 days if unhoused) mirrors probationary oversight (<a href="https://www.flsenate.gov/Laws/Statutes/2024/943.0435" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">§ 943.0435</a>).</li>
            <li><strong>Geographic exile:</strong> statewide 1,000-ft buffers plus local 2,500-ft zones erase practical housing in dense areas (<a href="https://www.miamidade.gov/global/service.page?Mduid_service=ser1548359719410115" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Miami-Dade ordinance</a>).</li>
            <li><strong>Felony exposure for technical lapses:</strong> noncompliance is a crime, not a civil infraction (<a href="https://oppaga.fl.gov/products/2024-11" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">OPPAGA 2024</a>).</li>
            <li><strong>Citizen deputization:</strong> FDLE alerts invite neighbors and landlords to watch and report (<a href="https://offender.fdle.state.fl.us/offender/sops/home.jsf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">FDLE portal</a>).</li>
            <li><strong>Multi-agency verification:</strong> FDLE/DOC/sheriffs actively cross-check and enforce (<a href="https://oppaga.fl.gov/products/2024-11" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">OPPAGA 2024</a>).</li>
          </ul>

          <div className="bg-purple-50 border border-purple-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🔍</div>
              <div className="text-purple-800">
                <strong>Pattern recognition:</strong> These aren't isolated requirements—they're an integrated system of control that would be familiar to any parole officer. Our <Link to="/blog/federal-sex-crime-process" className="text-purple-600 hover:text-purple-800 underline font-semibold">federal process guide</Link> explains how supervision typically works in the criminal justice system.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What the Data Say</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Housing exclusion & clustering</h3>
          <p className="text-lg text-slate-700 mb-4">
            Urban geospatial analyses show severe scarcity of lawful housing under overlapping buffers. For example, Orange County mapping tied 1,000–2,500-foot buffers to a collapse of viable parcels (<a href="https://www.tandfonline.com/doi/abs/10.1080/01944360903053327" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Zandbergen & Hart, 2009</a>). In South Florida, a 2,500-ft zone helped produce homeless encampments, litigated in <a href="https://law.justia.com/cases/federal/appellate-courts/ca11/17-14176/17-14176-2019-04-08.html" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Doe v. Miami-Dade</em> (11th Cir. 2019)</a>.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">No safety benefit from proximity laws</h3>
          <p className="text-lg text-slate-700 mb-4">
            The <a href="https://mn.gov/doc/assets/08-07SexOffenderResidencyRestrictions_tcm1089-272781.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Minnesota DOC (2007)</a> found that residential proximity to schools/parks did <em>not</em> predict sexual reoffense and that residency bans would not have prevented the studied crimes.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Recidivism reality</h3>
          <p className="text-lg text-slate-700 mb-4">
            The <a href="https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-prison-30-states-2005-2014" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Bureau of Justice Statistics (2019)</a> 9-year study reported a <strong>7.7%</strong> sexual rearrest rate for those released on sex offenses—far lower than many property/drug/gun categories—undercutting the premise that registrants uniquely require lifetime geographic exile.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Florida's own auditors</h3>
          <p className="text-lg text-slate-700 mb-6">
            The Legislature's <a href="https://oppaga.fl.gov/products/2024-11" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">OPPAGA (2024)</a> links residency bans to <strong>homelessness and transience</strong>, complicating monitoring and potentially <em>reducing</em> public safety through instability.
          </p>

          <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">✅</div>
              <div className="text-emerald-800">
                <strong>Evidence over fear:</strong> Broad residency bans don't reduce sexual reoffending, but they <em>do</em> increase homelessness. Stability—housing, employment, treatment—is what improves safety. Our <Link to="/blog/dangerous-myth" className="text-emerald-600 hover:text-emerald-800 underline font-semibold">myth-busting analysis</Link> explores this evidence in detail.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How Courts Have Split</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Custody recognized</h3>
          <p className="text-lg text-slate-700 mb-4">
            The Third Circuit in <a href="https://casetext.com/case/piasecki-v-court-of-common-pleas" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Piasecki</em> (2019)</a> held that compelled, in-person reporting and ongoing criminal liability created custody for habeas purposes.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Custody rejected</h3>
          <p className="text-lg text-slate-700 mb-6">
            Other circuits—e.g., <a href="https://casetext.com/case/hautzenroeder-v-dewine-1" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Hautzenroeder</em> (6th Cir. 2018)</a> and <a href="https://casetext.com/case/wilson-v-flaherty-2" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Wilson</em> (4th Cir. 2012)</a>—treated their registries as collateral. But those opinions often addressed <em>older</em> or <em>lighter-touch</em> schemes and did not consider the full, modern layering of residency zones plus short-fuse in-person demands.
          </p>

          <div className="bg-indigo-50 border border-indigo-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">⚖️</div>
              <div className="text-indigo-800">
                <strong>Why <em>Clements</em> matters:</strong> The Eleventh Circuit's remand signals that <em>facts</em>—maps, affidavits, agency practices—will decide whether Florida's combined regime is indistinguishable from supervision.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What's at Stake</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li><strong>Access to federal review:</strong> If this is custody, people bound by registries can use habeas to challenge unconstitutional convictions—even years after release.</li>
            <li><strong>Civil liberties:</strong> Letting states impose parole-like control while calling it "civil" risks hollowing out the Great Writ.</li>
            <li><strong>Public safety:</strong> Stability—not exclusion—is correlated with desistance. Residency bans push in the wrong direction.</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🎯</div>
              <div className="text-yellow-800">
                <strong>Broader implications:</strong> This case could affect registry challenges nationwide. If Florida's system constitutes custody, similar regimes in other states may face renewed scrutiny. Our <Link to="/advocacy" className="text-yellow-600 hover:text-yellow-800 underline font-semibold">advocacy work</Link> tracks these developments across jurisdictions.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">SOLAR's Lens: Evidence Over Fear</h2>
          <p className="text-lg text-slate-700 mb-4">
            The SOLAR Project's core positions align with the record developing in <em>Clements</em>:
          </p>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li><strong>Ineffectiveness & harm:</strong> Registries and buffer zones are <em>not</em> evidence-based and inflict collateral damage on families and communities.</li>
            <li><strong>Stranger-danger myth:</strong> Most abuse involves known individuals; school-centric maps don't target real risk.</li>
            <li><strong>Disproportionate civil punishment:</strong> Other high-risk crimes don't trigger lifetime public shaming and housing exile.</li>
            <li><strong>Individualization:</strong> Risk-based, tailored conditions (where necessary) beat blanket rules every time.</li>
            <li><strong>Dignity & redemption:</strong> People are more than their worst act; laws should reflect pathways to reintegration, not permanent underclasses.</li>
          </ul>

          <div className="bg-cyan-50 border border-cyan-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">💡</div>
              <div className="text-cyan-800">
                <strong>Bottom line:</strong> The question isn't whether the registry is called "civil." It's whether its restraints—on movement, housing, and daily life—are so severe that, in substance, they are <em>custody</em>. Our <Link to="/blog/rethinking-registry" className="text-cyan-600 hover:text-cyan-800 underline font-semibold">registry analysis</Link> explores these constitutional questions in depth.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What to Watch Before November 14</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li><strong>Briefing deadline:</strong> Parties are expected to brief by mid-November 2025 (FAC coverage <a href="https://floridaactioncommittee.org/opportunity-to-help-in-an-important-legal-challenge/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">here</a>).</li>
            <li><strong>Factual record:</strong> Expect maps of exclusion zones, affidavits on displacement and reporting burdens, and documentation of multi-agency verification practices.</li>
            <li><strong>Amici:</strong> Civil-liberties groups and criminologists may weigh in on custody, efficacy, and public-safety impacts.</li>
          </ul>

          <div className="bg-teal-50 border border-teal-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">📋</div>
              <div className="text-teal-800">
                <strong>Stay informed:</strong> This case represents a potential watershed moment for registry law. Follow our <Link to="/blog" className="text-teal-600 hover:text-teal-800 underline font-semibold">blog</Link> for updates as the briefing develops and the court considers the evidence.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion: Invisible Fences, Real Custody</h2>
          <p className="text-lg text-slate-700 mb-6">
            Custody isn't just bars and chains. Sometimes it's the monthly trek to the sheriff's office, the housing desert drawn by 2,500-foot circles, and the neighbors deputized to surveil. <em>Clements</em> asks the courts to see what the evidence shows: when the fences are invisible but inescapable, liberty is restrained all the same.
          </p>

          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🔓</div>
              <div className="text-rose-800">
                <strong>The stakes:</strong> If courts recognize that modern registry regimes constitute custody, it opens federal habeas review for thousands who thought their legal options were exhausted. That's not just a legal technicality—it's a pathway to justice for people trapped in systems that exceed constitutional bounds.
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-200 my-12" />

        <section className="mb-12">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Sources & Further Reading</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Eleventh Circuit: <a href="https://media.ca11.uscourts.gov/opinions/unpub/files/202112540.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Clements I</em> (2023)</a>; <a href="https://media.ca11.uscourts.gov/opinions/unpub/files/202411353.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Clements II</em> (July 2025, remand)</a>.</li>
            <li>• Supreme Court habeas "custody": <a href="https://supreme.justia.com/cases/federal/us/371/236/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Jones v. Cunningham</em> (1963)</a>; <a href="https://supreme.justia.com/cases/federal/us/411/345/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Hensley v. Municipal Court</em> (1973)</a>; <a href="https://supreme.justia.com/cases/federal/us/490/488/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Maleng v. Cook</em> (1989)</a>.</li>
            <li>• Florida statutes: <a href="https://www.flsenate.gov/Laws/Statutes/2024/943.0435" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">§ 943.0435</a> (registration, 48-hour updates, transient 30-day check-ins); <a href="https://www.flsenate.gov/Laws/Statutes/2024/775.215" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">§ 775.215</a> (state 1,000-ft residency rule).</li>
            <li>• FDLE registry & alerts: <a href="https://offender.fdle.state.fl.us/offender/sops/home.jsf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">FDLE portal</a>.</li>
            <li>• Florida OPPAGA (Legislative oversight): <a href="https://oppaga.fl.gov/products/2024-11" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">2024 report</a> (multi-agency verification; transience; local overlays).</li>
            <li>• Local SORR example: <a href="https://www.miamidade.gov/global/service.page?Mduid_service=ser1548359719410115" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Miami-Dade 2,500-ft ordinance</a>; Eleventh Circuit decision <a href="https://law.justia.com/cases/federal/appellate-courts/ca11/17-14176/17-14176-2019-04-08.html" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Doe v. Miami-Dade</em> (2019)</a>.</li>
            <li>• Efficacy research: <a href="https://mn.gov/doc/assets/08-07SexOffenderResidencyRestrictions_tcm1089-272781.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Minnesota DOC (2007) Residency Restrictions Study</a>.</li>
            <li>• Recidivism data: <a href="https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-prison-30-states-2005-2014" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">BJS (2019) 9-year follow-up</a>.</li>
            <li>• Geospatial housing scarcity: <a href="https://www.tandfonline.com/doi/abs/10.1080/01944360903053327" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Zandbergen & Hart (2009)</a>.</li>
            <li>• Circuit split exemplars: <a href="https://casetext.com/case/piasecki-v-court-of-common-pleas" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Piasecki</em> (3d Cir. 2019)</a>; <a href="https://casetext.com/case/hautzenroeder-v-dewine-1" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Hautzenroeder</em> (6th Cir. 2018)</a>; <a href="https://casetext.com/case/wilson-v-flaherty-2" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline"><em>Wilson</em> (4th Cir. 2012)</a>.</li>
            <li>• Advocacy coverage: Florida Action Committee updates—<a href="https://floridaactioncommittee.org/order-reopening-clements-will-residency-restrictions-tip-the-scales/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">order reopening</a>; <a href="https://floridaactioncommittee.org/opportunity-to-help-in-an-important-legal-challenge/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">briefing window</a>.</li>
          </ul>
        </section>

      </article>
    </div>
  );
}