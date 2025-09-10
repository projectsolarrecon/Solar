import React from "react";
import BlogLayout from "../../components/layouts/BlogLayout";
// If you've created shared UI components as we discussed:
import BandHeader from "../../components/solar/BandHeader";
import Callout from "../../components/solar/Callout";
import PullQuote from "../../components/solar/PullQuote";
// If you don't have a shared SourceList yet, keep a styled <ul> instead.
import SEO from "../../components/SEO"; // BlogLayout already uses SEO, but we keep import available if needed.

export default function FirstDoNoHarm(): JSX.Element {
  return (
    <BlogLayout
      title="First, Do No Harm — White Coats, Comfort Blankets, and the Betrayal of Trust | The SOLAR Project"
      description="Doctors swore an oath. Institutions sold safety. Survivors show abuse thrived in exam rooms while registry maps offered false comfort. Here’s what real prevention looks like."
      keywords="Larry Nassar, Robert Hadden, George Tyndall, James Heaps, Richard Strauss, Robert Anderson, Earl Bradley, Darius Paduch, Zhi Alan Cheng, Patricia Hill, medical sexual abuse, pediatric abuse, campus clinic abuse, Weill Cornell, USC, Columbia, UCLA, Ohio State, University of Michigan, sex offender registry effectiveness, SOLAR Project, SORN research"
      date="September 9, 2025"
      readTime="15 min read"
      badge="📰 INVESTIGATIVE SERIES"
      lede="We fear strangers on maps. The record shows the danger lived in exam rooms, student clinics, and elite hospitals—behind white coats and brand prestige."
    >
      <article className="prose prose-slate max-w-none prose-a:text-blue-700 prose-a:underline hover:prose-a:text-blue-900 prose-strong:font-semibold prose-h2:text-3xl prose-h3:text-2xl">

        <BandHeader title="White coats as camouflage, registries as comfort" icon="🥼" />
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
          🗺️ The comfort blanket vs. the exam room
        </h2>
        <p>
          We like to believe the white coat is armor. That the initials after a name — M.D., D.O., N.P. — are a firewall against danger. And we like to believe the red dots on a registry map are where the real threats live. But in case after case, <strong>the white coat itself became camouflage</strong>, and the registry was a comfort blanket — helping us sleep while the harm happened in plain sight.
        </p>
        <p>
          These aren’t stories about “strangers.” They’re about <strong>doctors, dentists, and nurse practitioners</strong> — people parents trusted enough to place their children on exam tables. The real risk lived in <strong>access and authority</strong>, not in a neighbor’s address. And every case shows what SOLAR has argued from the start: the public-facing registry is <strong>ineffective, harmful, and misdirected</strong>. It makes announcements; it doesn’t make children safer.
        </p>

        <Callout variant="info" title="SOLAR’s stance" icon="ℹ️">
          <p>
            Public safety comes from <strong>oversight in rooms where power meets vulnerability</strong> — not from bigger maps. We advocate independent audits, chaperone protocols for sensitive exams, mandatory dual reporting to medical boards and law enforcement, and trauma-informed survivor care.
          </p>
        </Callout>

        {/* Nassar */}
        <BandHeader title="Dr. Larry Nassar — prestige, federal failure, lifelong harm" icon="🎓" />
        <h3>USA Gymnastics, MSU, and a federal miss</h3>
        <p>
          Sports-medicine osteopath <strong>Dr. Larry Nassar</strong> embedded himself in USA Gymnastics and MSU athletics. Complaints surfaced long before accountability. The DOJ Inspector General found the FBI <em>“made numerous and serious errors”</em> in handling early allegations; the U.S. government later agreed to a <strong>$138.7M</strong> civil settlement acknowledging those failures. Michigan State paid <strong>$500M</strong>; USA Gymnastics and USOPC added <strong>$380M</strong>.
          (<a href="https://oig.justice.gov/sites/default/files/reports/21-093.pdf" target="_blank" rel="noopener">DOJ OIG</a>,
          <a href="https://www.reuters.com/legal/us-reaches-1387-million-civil-settlement-with-victims-larry-nassar-2024-04-23/" target="_blank" rel="noopener">Reuters</a>,
          <a href="https://msutoday.msu.edu/news/2018/msu-reaches-agreement-in-principle-to-resolve-nassar-claims" target="_blank" rel="noopener">MSU</a>,
          <a href="https://apnews.com/article/business-sports-gymnastics-lawsuits-sexual-abuse-1d6df0e3d21a5f9b14ed1321281870b8" target="_blank" rel="noopener">AP</a>)
        </p>
        <PullQuote>“We are more than victims. We are survivors.” — <a href="https://www.pbs.org/newshour/show/aly-raisman-wins-her-self-worth-back-from-nassar" target="_blank" rel="noopener">Aly Raisman</a></PullQuote>
        <Callout variant="warning" title="Victim impact" icon="⚠️">
          <p>Survivors report PTSD, anxiety in medical settings, and careers derailed. The registry had nothing to do with stopping him; <strong>institutional oversight did — and failed</strong>.</p>
        </Callout>

        {/* Hadden */}
        <BandHeader title="Dr. Robert Hadden — Columbia’s reckoning and a 20-year sentence" icon="⚖️" />
        <h3>Prestige hospitals, permissive systems</h3>
        <p>
          <strong>Dr. Robert Hadden</strong> practiced OB-GYN at NewYork-Presbyterian/Columbia for decades. After a criticized 2016 plea spared him jail, federal prosecutors secured a <strong>20-year sentence</strong>. Columbia later notified <strong>6,500</strong> former patients and reached settlements exceeding <strong>$1B</strong>, including a <strong>$750M</strong> agreement in 2025.
          (<a href="https://www.justice.gov/usao-sdny/pr/former-obstetriciangynecologist-robert-hadden-sentenced-20-years-prison-sexually" target="_blank" rel="noopener">DOJ SDNY</a>,
          <a href="https://www.theguardian.com/us-news/2025/may/10/robert-hadden-sexual-assault-columbia-university-gynecologist" target="_blank" rel="noopener">The Guardian</a>)
        </p>
        <PullQuote>“I thought I was safe. He was a doctor at one of the best hospitals in the country. I trusted him, and he abused that trust.” — survivor account</PullQuote>

        {/* Tyndall */}
        <BandHeader title="Dr. George Tyndall — the campus clinic that failed its students" icon="🎓" />
        <h3>Three decades in a student health monopoly</h3>
        <p>
          For nearly three decades, <strong>Dr. George Tyndall</strong> was USC’s only full-time gynecologist. Complaints began in the 1990s; real action came much later. USC’s payouts exceed <strong>$1.1B</strong> across a <strong>$215M</strong> federal class action and an <strong>$852M</strong> global settlement.
          (<a href="https://change.usc.edu/tyndall-issues/federal-class-action-settlement/" target="_blank" rel="noopener">USC</a>,
          <a href="https://apnews.com/article/3b8b9e032d614f230a72e705c015f3d2" target="_blank" rel="noopener">AP</a>)
        </p>
        <Callout variant="info" title="Secondary harm" icon="ℹ️">
          <p>“I left student health never trusting care again,” one survivor said. Maps of “strangers” never touched the danger living <strong>inside the campus clinic</strong>.</p>
        </Callout>

        {/* Heaps */}
        <BandHeader title="Dr. James Heaps — a top earner at UCLA, then 11 years in prison" icon="💵" />
        <h3>High compensation, low accountability</h3>
        <p>
          Over more than 30 years, <strong>Dr. James Heaps</strong> became one of UCLA’s highest-paid clinicians — and later a convicted predator. In 2023 he received an <strong>11-year sentence</strong>. The University of California has paid <strong>nearly $700M</strong> to survivors.
          (<a href="https://www.cbsnews.com/news/ex-ucla-gynecologist-james-heaps-sexual-abuse-patients-11-year-sentence/" target="_blank" rel="noopener">CBS</a>,
          <a href="https://www.latimes.com/california/story/2023-04-26/full-coverage-of-former-ucla-gynecologist-james-heaps" target="_blank" rel="noopener">LA Times</a>)
        </p>

        {/* Strauss */}
        <BandHeader title="Dr. Richard Strauss — the open secret at Ohio State" icon="📊" />
        <h3>Elite résumés, ordinary guardrails</h3>
        <p>
          With elite credentials, <strong>Dr. Richard Strauss</strong> abused athletes for decades at Ohio State. The university’s independent portal documents the timeline and scope.
          (<a href="https://news.osu.edu/independent-investigation-reports-findings/" target="_blank" rel="noopener">OSU</a>)
        </p>
        <PullQuote>“We were sacrificed for football. They knew, and they let it happen.” — former OSU wrestler</PullQuote>

        {/* Anderson */}
        <BandHeader title="Dr. Robert Anderson — Michigan’s decades-long failure" icon="📊" />
        <h3>Institutional continuity over patient safety</h3>
        <p>
          An independent probe confirmed decades of abuse by <strong>Dr. Robert Anderson</strong>; in 2022, U-M agreed to a <strong>$490M</strong> settlement.
          (<a href="https://record.umich.edu/articles/u-m-reaches-490-million-settlement-with-survivors-of-robert-anderson/" target="_blank" rel="noopener">U-M Record</a>)
        </p>

        {/* Bradley */}
        <BandHeader title="Dr. Earl Bradley — Delaware’s worst pediatric case" icon="🧸" />
        <h3>Brightly lit rooms, darkest crimes</h3>
        <p>
          <strong>Dr. Earl Bradley</strong> constructed a carnival-themed office parents trusted — and abused <strong>infants and toddlers</strong> for years.
          (<a href="https://courts.delaware.gov/opinions/download.aspx?ID=178080" target="_blank" rel="noopener">Delaware Supreme Court opinion</a>)
        </p>
        <PullQuote>“I strapped my baby into the car seat and drove him to his abuser.” — parent of a Bradley victim</PullQuote>

        {/* Paduch */}
        <BandHeader title="Dr. Darius Paduch — Weill Cornell prestige, minors among victims" icon="💊" />
        <h3>Specialty prestige as cover</h3>
        <p>
          <strong>Dr. Darius Paduch</strong>, a men’s health specialist at Weill Cornell/NewYork-Presbyterian, abused patients — including minors — over more than a decade. In 2024 he was <strong>sentenced to life in prison</strong>.
          (<a href="https://apnews.com/article/ee959927300c581837b832c1fa36f564" target="_blank" rel="noopener">AP</a>)
        </p>

        {/* Cheng */}
        <BandHeader title="Dr. Zhi Alan Cheng — sedated patients, 24-year sentence" icon="⛔" />
        <h3>Sedation as a weapon</h3>
        <p>
          In 2025, <strong>Dr. Zhi Alan Cheng</strong> was sentenced to <strong>24 years</strong> for raping patients — some sedated — and recording assaults.
          (<a href="https://apnews.com/article/alan-cheng-doctor-rape-patients-nyc-sentenced-9a24a3fa7d138c1f04e86f6d2c21cfb3" target="_blank" rel="noopener">AP</a>)
        </p>

        {/* Clyne */}
        <BandHeader title="Dr. Patrick Clyne — foster-care pediatrician, license surrendered" icon="🔒" />
        <h3>The most vulnerable, the fewest choices</h3>
        <p>
          After <strong>two decades</strong> of allegations involving foster youth, California’s medical board published <strong>Dr. Patrick Clyne’s</strong> license surrender in 2025.
          (<a href="https://www2.mbc.ca.gov/BreezePDL/document.aspx?did=AAAJD250516143252227.DID&path=%5CDIDOCS%5C20250516%5CDMRAAAJD1%5C" target="_blank" rel="noopener">MBC document</a>)
        </p>

        {/* Atha */}
        <BandHeader title="Jason Atha, D.D.S. — licensure as cover, sting as intervention" icon="⚠️" />
        <h3>Professional standing ≠ protection</h3>
        <p>
          Colorado dentist <strong>Jason Atha</strong> pled guilty after an HSI sting and received <strong>15 years</strong>.
          (<a href="https://www.justice.gov/usao-sdfl/pr/colorado-dentist-pleads-guilty-attempting-solicit-minor-online-and-transporting-child" target="_blank" rel="noopener">DOJ SDFL</a>)
        </p>

        {/* Female clinicians */}
        <BandHeader title="Female clinicians — authority, not gender, drives risk" icon="♀️" />
        <h3>Outliers that prove the rule</h3>
        <p>
          Abuse by clinicians is overwhelmingly committed by men, but not exclusively. In 2022, Tennessee pediatric N.P. <strong>Patricia Hill</strong> was indicted for molesting a <strong>4-year-old</strong> patient.
          (<a href="https://tennessean.com/story/news/crime/2022/05/10/knoxville-pediatric-nurse-practitioner-indicted-for-child-molestation/9725622002/" target="_blank" rel="noopener">Tennessean</a>)
        </p>

        <Callout variant="legal" title="The data lawmakers keep ignoring" icon="⚖️">
          <p>
            <a href="https://www.rainn.org/statistics/children-and-teens" target="_blank" rel="noopener">RAINN</a> summarizes national crime data bluntly: <strong>93%</strong> of juvenile sexual assault victims knew the perpetrator. Rigorous evaluations — including the <a href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" target="_blank" rel="noopener">NIJ evidence brief</a> and the <a href="https://www.prisonlegalnews.org/media/publications/The_Effectiveness_of_Sex_Offender_Registration_and_Notification_Sept._2021.pdf" target="_blank" rel="noopener">Campbell Systematic Review</a> — find that broad, public-facing SORN regimes often <strong>do not reduce</strong> recidivism and can worsen outcomes by destabilizing housing and work.
          </p>
        </Callout>

        <Callout variant="research" title="Surveillance ≠ prevention" icon="🧪">
          <ul>
            <li><strong>Law-enforcement–only registration</strong> can aid investigations; public shaming maps have not shown reliable prevention effects.</li>
            <li>Collateral harms (housing, employment) can <strong>increase</strong> risk — the opposite of prevention.</li>
          </ul>
        </Callout>

        <BandHeader title="SOLAR’s position — where prevention actually lives" icon="🛡️" />
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">🧭 Trade optics for oversight</h2>
        <ul>
          <li><strong>Mandatory, auditable safeguards</strong> for intimate exams (clear, documented consent; chaperone availability; posted patient rights).</li>
          <li><strong>Dual-channel reporting</strong> to state medical boards <em>and</em> law enforcement for defined complaints — with penalties for institutions that fail to escalate.</li>
          <li><strong>Independent ombuds & whistleblower protections</strong> outside hospital hierarchies.</li>
          <li><strong>Rapid, transparent discipline</strong> and searchable board actions.</li>
          <li><strong>Budget shift</strong> from public shaming maps to audits, survivor services, and compliance where harm actually occurs.</li>
        </ul>

        <BandHeader title="Camouflage vs. comfort — the choice we keep avoiding" icon="🗺️" />
        <PullQuote>“We published addresses online while the danger lived behind the clinic door.”</PullQuote>
        <p>
          These were not monsters in shadows. They were <strong>doctors, dentists, nurse practitioners</strong> invited into families’ lives. Their white coats were <strong>camouflage</strong>. Our registry system was the <strong>comfort blanket</strong> we clutched while children were abused in clinics, hospitals, and universities. We can keep pretending maps protect us — or we can face the truth these cases scream: <strong>danger is in authority, not geography</strong>; <strong>betrayal thrives in silence, not in shadows</strong>; and <strong>safety requires institutions brave enough to police themselves</strong>. SOLAR’s ask is simple: <strong>trade optics for oversight</strong>. Build systems that cannot be gamed by a white coat.
        </p>

        {/* Sources */}
        <div className="my-10 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Sources (verified)</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li><strong>DOJ OIG</strong> — FBI handling of Nassar: <a href="https://oig.justice.gov/sites/default/files/reports/21-093.pdf" target="_blank" rel="noopener">Report</a></li>
          <li><strong>U.S. civil settlement</strong> — $138.7M for FBI failures in Nassar: <a href="https://www.reuters.com/legal/us-reaches-1387-million-civil-settlement-with-victims-larry-nassar-2024-04-23/" target="_blank" rel="noopener">Reuters</a></li>
          <li><strong>DOJ SDNY</strong> — Hadden 20-year sentence: <a href="https://www.justice.gov/usao-sdny/pr/former-obstetriciangynecologist-robert-hadden-sentenced-20-years-prison-sexually" target="_blank" rel="noopener">Press release</a></li>
          <li><strong>AP</strong> — Dr. Zhi Alan Cheng 24-year sentence: <a href="https://apnews.com/article/alan-cheng-doctor-rape-patients-nyc-sentenced-9a24a3fa7d138c1f04e86f6d2c21cfb3" target="_blank" rel="noopener">Article</a></li>
          <li><strong>Delaware Supreme Court</strong> — State v. Bradley (life sentences): <a href="https://courts.delaware.gov/opinions/download.aspx?ID=178080" target="_blank" rel="noopener">Opinion (PDF)</a></li>
          <li><strong>DOJ SDFL</strong> — Atha plea & sentence (15 years): <a href="https://www.justice.gov/usao-sdfl/pr/colorado-dentist-pleads-guilty-attempting-solicit-minor-online-and-transporting-child" target="_blank" rel="noopener">Press release</a></li>
          <li><strong>MSU</strong> — $500M Nassar settlement: <a href="https://msutoday.msu.edu/news/2018/msu-reaches-agreement-in-principle-to-resolve-nassar-claims" target="_blank" rel="noopener">MSU statement</a></li>
          <li><strong>USC</strong> — Tyndall settlements: <a href="https://change.usc.edu/tyndall-issues/federal-class-action-settlement/" target="_blank" rel="noopener">USC portal</a></li>
          <li><strong>Ohio State</strong> — Independent investigation (Strauss): <a href="https://news.osu.edu/independent-investigation-reports-findings/" target="_blank" rel="noopener">OSU portal</a></li>
          <li><strong>University of Michigan</strong> — $490M Anderson settlement: <a href="https://record.umich.edu/articles/u-m-reaches-490-million-settlement-with-survivors-of-robert-anderson/" target="_blank" rel="noopener">U-M Record</a></li>
          <li><strong>Medical Board of California</strong> — Clyne license surrender: <a href="https://www2.mbc.ca.gov/BreezePDL/document.aspx?did=AAAJD250516143252227.DID&path=%5CDIDOCS%5C20250516%5CDMRAAAJD1%5C" target="_blank" rel="noopener">Public document</a></li>
          <li><strong>AP</strong> — USAG/USOPC $380M: <a href="https://apnews.com/article/business-sports-gymnastics-lawsuits-sexual-abuse-1d6df0e3d21a5f9b14ed1321281870b8" target="_blank" rel="noopener">Article</a></li>
          <li><strong>CBS</strong> — Heaps 11-year sentence: <a href="https://www.cbsnews.com/news/ex-ucla-gynecologist-james-heaps-sexual-abuse-patients-11-year-sentence/" target="_blank" rel="noopener">Article</a></li>
          <li><strong>LA Times</strong> — Heaps settlements coverage: <a href="https://www.latimes.com/california/story/2023-04-26/full-coverage-of-former-ucla-gynecologist-james-heaps" target="_blank" rel="noopener">Coverage</a></li>
          <li><strong>AP</strong> — USC/Tyndall payout coverage: <a href="https://apnews.com/article/3b8b9e032d614f230a72e705c015f3d2" target="_blank" rel="noopener">Article</a></li>
          <li><strong>The Guardian</strong> — Columbia/Hadden $750M (total > $1B): <a href="https://www.theguardian.com/us-news/2025/may/10/robert-hadden-sexual-assault-columbia-university-gynecologist" target="_blank" rel="noopener">Article</a></li>
          <li><strong>AP</strong> — Paduch life sentence: <a href="https://apnews.com/article/ee959927300c581837b832c1fa36f564" target="_blank" rel="noopener">Article</a></li>
          <li><strong>PBS</strong> — Aly Raisman statement: <a href="https://www.pbs.org/newshour/show/aly-raisman-wins-her-self-worth-back-from-nassar" target="_blank" rel="noopener">Segment</a></li>
          <li><strong>RAINN</strong> — Children & Teens stats: <a href="https://www.rainn.org/statistics/children-and-teens" target="_blank" rel="noopener">RAINN</a></li>
          <li><strong>NIJ</strong> — SORN effectiveness: <a href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" target="_blank" rel="noopener">Evidence brief</a></li>
          <li><strong>Campbell Review (2021)</strong> — SORN impact: <a href="https://www.prisonlegalnews.org/media/publications/The_Effectiveness_of_Sex_Offender_Registration_and_Notification_Sept._2021.pdf" target="_blank" rel="noopener">PDF</a></li>
          <li><strong>Tennessean</strong> — Patricia Hill indictment: <a href="https://tennessean.com/story/news/crime/2022/05/10/knoxville-pediatric-nurse-practitioner-indicted-for-child-molestation/9725622002/" target="_blank" rel="noopener">Article</a></li>
        </ul>
      </article>
    </BlogLayout>
  );
}
