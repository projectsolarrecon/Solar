            import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function ResearchDataResources(): JSX.Element {
  return (
    <div className="bg-gray-50 text-gray-800">
      <SEO 
        title="SOLAR Research & Data Resource Guide"
        description="Authoritative studies, statistics, and journalism supporting registry reform"
        keywords="sex offender registry research, recidivism data, registry effectiveness, constitutional challenges, advocacy resources"
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800/90 to-slate-600/90 text-white py-10 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase text-sm font-semibold tracking-wide">Resource Guide</p>
          <h1 className="text-4xl font-extrabold">Research & Data Resources</h1>
          <p className="mt-3 text-lg text-slate-200">Authoritative studies, statistics, and journalism supporting registry reform</p>
        </div>
      </header>

      {/* Divider */}
      <div className="h-2 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700"></div>

      <main className="max-w-4xl mx-auto p-6 space-y-10">

        {/* Section 1: Recidivism */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="flex items-center text-2xl font-bold text-slate-800 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-slate-700 text-white rounded-full mr-3">1</span>
            Recidivism
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://bjs.ojp.gov/content/pub/pdf/18upr9yfup0514.pdf" target="_blank" rel="noopener" className="font-semibold text-slate-700 hover:text-slate-900 underline">Bureau of Justice Statistics (2019)</a> – Only <strong>7.7%</strong> of released sex offenders were rearrested for a new sex crime within 9 years.</li>
            <li><a href="https://bjs.ojp.gov/library/publications/2018-update-prisoner-recidivism-9-year-follow-period-2005-2014" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">BJS National Data</a> – About <strong>60%</strong> of drug offenders, <strong>64%</strong> of property offenders, and <strong>43%</strong> of violent offenders were rearrested for the same type of crime within 9 years.</li>
            <li><a href="https://dmv.ca.gov/portal/uploads/2025/06/Recidivism-and-Crash-Risk-Among-Californias-Drug-Involved-DUI-Offenders.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">California DMV Study (2025)</a> – Between <strong>21–47%</strong> of DUI offenders are reconvicted for DUI within 5 years.</li>
            <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9978178/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Arson Recidivism Study</a> – About <strong>9%</strong> of arsonists are convicted of a new arson within 9 years.</li>
          </ul>
          <div className="mt-4 p-4 bg-teal-100 border-l-4 border-teal-500 text-teal-800 rounded">
            <p><strong>Research Highlight:</strong> Same-type recidivism for sex offenses (7.7%) is dramatically lower than for drug (60%), property (64%), DUI (21–47%), or violent crimes (43%).</p>
          </div>
        </section>

        {/* Section 2: Constitutionality */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="flex items-center text-2xl font-bold text-slate-800 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-slate-700 text-white rounded-full mr-3">2</span>
            Constitutionality
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://supreme.justia.com/cases/federal/us/538/84/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Smith v. Doe (2003)</a> – Upheld Alaska's registry as "civil," relying on now-debunked "frightening and high" myth.</li>
            <li><a href="https://casetext.com/case/does-v-snyder-4" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Does v. Snyder (6th Cir., 2016)</a> – Michigan's registry restrictions found punitive, violating the Ex Post Facto Clause.</li>
            <li><a href="https://supreme.justia.com/cases/federal/us/582/137/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Packingham v. North Carolina (2017)</a> – Struck down broad internet bans; Court acknowledged severe burdens.</li>
            <li><a href="https://repository.uchastings.edu/hastings_law_journal/vol63/iss4/2" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Carpenter & Beverlin (2012)</a> – Legal scholarship showing registries have "evolved into punishment."</li>
          </ul>
          <div className="mt-4 p-4 bg-orange-100 border-l-4 border-orange-500 text-orange-800 rounded">
            <p><strong>Legal Callout:</strong> Courts are increasingly skeptical of registries' constitutionality, especially when retroactively applied.</p>
          </div>
        </section>

        {/* Section 3: Effectiveness */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="flex items-center text-2xl font-bold text-slate-800 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-slate-700 text-white rounded-full mr-3">3</span>
            Effectiveness
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://www.ojp.gov/ncjrs/virtual-library/abstracts/megan-law-assessing-practical-and-monetary-efficacy" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NIJ Megan's Law Study (2008)</a> – Found <strong>no reduction</strong> in sex crime rates or recidivism in New Jersey.</li>
            <li><a href="https://www.americanbar.org/groups/crsj/publications/human_rights_magazine_home/2017-vol--43/vol-43--no-2--immigration/restricting-sex-offender-residences/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">ABA Review</a> – Residency restrictions failed to prevent crime and increased homelessness.</li>
            <li><a href="https://www.sentencingproject.org/reports/incarceration-and-crime-a-weak-relationship/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Sentencing Project (2023)</a> – Registry growth has not contributed to long-term crime decline.</li>
          </ul>
          <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-800 rounded">
            <p><strong>Urgent Finding:</strong> No credible evidence shows registries reduce sex crimes; some research suggests they worsen outcomes.</p>
          </div>
        </section>

        {/* Section 4: Harms */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="flex items-center text-2xl font-bold text-slate-800 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-slate-700 text-white rounded-full mr-3">4</span>
            Harms & Collateral Consequences
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://journals.sagepub.com/doi/10.1177/0022427805277537" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Levenson & Cotter (2005)</a> – Over half of registrants lost jobs or housing due to public disclosure.</li>
            <li><a href="https://www.nytimes.com/2007/08/21/us/21offender.html" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NYT Reporting (2007)</a> – Residency restrictions in Miami forced dozens to live under a highway bridge.</li>
            <li><a href="https://www.vice.com/en/article/bjpxdm/how-sex-offender-registries-can-result-in-vigilante-murder" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Vice News (2018)</a> – Public registries have led to assaults and even murders of registrants.</li>
            <li><a href="https://journals.sagepub.com/doi/10.1177/0093854807302550" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Levenson & Tewksbury (2009)</a> – Family members of registrants report harassment, bullying, and social ostracism.</li>
          </ul>
          <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded">
            <p><strong>Reminder:</strong> The registry punishes not only individuals but also their families, children, and communities.</p>
          </div>
        </section>

        {/* Section 5: Society & Civics */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="flex items-center text-2xl font-bold text-slate-800 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-slate-700 text-white rounded-full mr-3">5</span>
            Societal & Civic Impact
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://www.sentencingproject.org/reports/responding-to-crimes-of-a-sexual-nature-what-we-really-want-is-no-more-victims/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Sentencing Project (2023)</a> – Crime declines pre-date registries; Patty Wetterling now calls laws overly broad and ineffective.</li>
            <li><a href="https://www.newyorker.com/magazine/2016/08/29/the-list" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">New Yorker (2016)</a> – Human stories show lives destroyed for low-level or juvenile offenses.</li>
            <li><a href="https://radiolab.org/podcast/the-list" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Radiolab – The List</a> – Explores the history of registries, myths, and realities.</li>
          </ul>
          <div className="mt-4 p-4 bg-cyan-100 border-l-4 border-cyan-500 text-cyan-800 rounded">
            <p><strong>Advocacy Note:</strong> Registries were born of panic. Evidence-based reform is now widely recognized as essential for true public safety.</p>
          </div>
        </section>

      </main>

      {/* Important Reminders */}
      <aside className="max-w-4xl mx-auto mt-10 mb-16 px-6">
        <div className="p-5 bg-yellow-200 border-l-4 border-yellow-600 text-yellow-900 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Important Reminder</h3>
          <p>Sex offense registries were built on myths of high recidivism. Evidence consistently shows they <strong>do not prevent crime</strong>, while causing severe collateral harm. Reform must focus on evidence, fairness, and real prevention strategies.</p>
        </div>
      </aside>

    </div>
  );
}