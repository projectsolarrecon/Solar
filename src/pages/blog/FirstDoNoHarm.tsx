import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

/** ========= Shared UI (scoped to this file) ========= **/

const ICONS = {
  info: 'ℹ️',
  legal: '⚖️',
  urgent: '⛔',
  privacy: '🔒',
  reminder: '📝',
  research: '🧪',
  policy: '🧭',
  success: '✅',
  warning: '⚠️',
  tip: '💡',
  action: '🚀',
  check: '☑️',
  script: '🗣️',
  resources: '🔗',
  planning: '🗓️',
  checklist: '📋',
  mental: '🧠',
  reentry: '🌱',
  incarceration: '🏛️',
  data: '📊',
  clinic: '🥼',
  campus: '🎓',
  money: '💵',
  trust: '🤝',
  exam: '💊',
  pediatric: '🧸',
  shield: '🛡️',
  map: '🗺️',
} as const;

const CALLOUT_STYLES: Record<string, string> = {
  info: 'bg-blue-50 ring-blue-200 text-blue-900',
  legal: 'bg-orange-50 ring-orange-200 text-orange-900',
  urgent: 'bg-red-50 ring-red-200 text-red-900',
  privacy: 'bg-purple-50 ring-purple-200 text-purple-900',
  reminder: 'bg-yellow-50 ring-yellow-200 text-yellow-900',
  research: 'bg-teal-50 ring-teal-200 text-teal-900',
  policy: 'bg-pink-50 ring-pink-200 text-pink-900',
  success: 'bg-emerald-50 ring-emerald-200 text-emerald-900',
  warning: 'bg-amber-50 ring-amber-200 text-amber-900',
  neutral: 'bg-slate-50 ring-slate-200 text-slate-900',
};

function Badge({ color = 'red-600', children }: { color?: string; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-${color}/10 text-${color} ring-1 ring-${color}/30`}>{children}</span>
  );
}

function BandHeader({ title, icon }: { title: string; icon?: string }) {
  return (
    <div className="mt-10 mb-4 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-4 py-2 flex items-center gap-2 shadow-sm">
        {icon && <span aria-hidden>{icon}</span>}
        <span className="font-semibold tracking-tight">{title}</span>
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle, emoji }: { title: string; subtitle?: string; emoji?: string }) {
  return (
    <header className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
        {emoji && <span aria-hidden>{emoji}</span>}{title}
      </h2>
      {subtitle && <p className="text-slate-600 mt-1">{subtitle}</p>}
    </header>
  );
}

function Callout({
  variant = 'info',
  title,
  icon,
  children,
}: {
  variant?: keyof typeof CALLOUT_STYLES;
  title?: string;
  icon?: string;
  children: React.ReactNode;
}) {
  const styles = CALLOUT_STYLES[variant] ?? CALLOUT_STYLES.info;
  return (
    <div className={`my-6 rounded-xl ring-1 p-4 md:p-5 ${styles}`}>
      {(title || icon) && (
        <div className="font-semibold mb-1 flex items-center gap-2">
          {icon && <span aria-hidden>{icon}</span>}
          {title}
        </div>
      )}
      <div className="prose prose-slate max-w-none">{children}</div>
    </div>
  );
}

const Info = (p: any) => <Callout variant="info" icon={ICONS.info} {...p} />;
const Legal = (p: any) => <Callout variant="legal" icon={ICONS.legal} {...p} />;
const Urgent = (p: any) => <Callout variant="urgent" icon={ICONS.urgent} {...p} />;
const Research = (p: any) => <Callout variant="research" icon={ICONS.research} {...p} />;
const Warning = (p: any) => <Callout variant="warning" icon={ICONS.warning} {...p} />;

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 pl-4 md:pl-6 border-l-4 border-red-300 italic text-slate-800 text-lg">{children}</blockquote>
  );
}

function Divider() {
  return <div className="my-10 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />;
}

function SourceList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 text-slate-700 space-y-1">{children}</ul>;
}

/** ========= Post ========= **/

export default function FirstDoNoHarm(): JSX.Element {
  return (
    <div className="bg-white">
      <SEO
        title="First, Do No Harm — White Coats, Comfort Blankets, and the Betrayal of Trust | The SOLAR Project"
        description="Doctors swore an oath. Institutions sold safety. Survivors show abuse thrived in exam rooms while registry maps offered false comfort. Here’s what real prevention looks like."
        keywords="Larry Nassar, Robert Hadden, George Tyndall, James Heaps, Richard Strauss, Robert Anderson, Earl Bradley, Darius Paduch, Zhi Alan Cheng, Patricia Hill, medical sexual abuse, pediatric abuse, campus clinic abuse, Weill Cornell, USC, Columbia, UCLA, Ohio State, University of Michigan, sex offender registry effectiveness, SOLAR Project, SORN research"
      />

      {/* Hero/Header */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="mb-3 flex items-center gap-3">
              <Link to="/blog" className="text-white/80 hover:text-white underline underline-offset-4">← Back to Blog</Link>
              <Badge color="red-600">📰 INVESTIGATIVE SERIES</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">First, Do No Harm — White Coats, Comfort Blankets, and the Betrayal of Trust</h1>
            <p className="mt-3 text-white/90">We fear strangers on maps. The record shows the danger lived in exam rooms, student clinics, and elite hospitals—behind white coats and brand prestige.</p>
            <div className="mt-5 text-sm text-white/80">
              By <span className="font-semibold">The SOLAR Project</span> • <time dateTime="2025-09-09">September 9, 2025</time> • 15 min read
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Make links unmistakably visible; enlarge headings via prose modifiers */}
        <article className="prose prose-slate max-w-none prose-a:text-blue-700 prose-a:underline hover:prose-a:text-blue-900 prose-strong:font-semibold prose-h2:text-3xl prose-h3:text-2xl">

          <BandHeader title="White coats as camouflage, registries as comfort" icon={ICONS.clinic} />
          <SectionHeader
            title="The comfort blanket vs. the exam room"
            subtitle="Authority and access — not geography — explain where the harm happened."
            emoji={ICONS.map}
          />
          <p>We like to believe the white coat is armor. That the initials after a name — M.D., D.O., N.P. — are a firewall against danger. And we like to believe the red dots on a registry map are where the real threats live. But in case after case, <strong>the white coat itself became camouflage</strong>, and the registry was a comfort blanket — helping us sleep while the harm happened in plain sight.</p>
          <p>These aren’t stories about “strangers.” They’re about <strong>doctors, dentists, and nurse practitioners</strong> — people parents trusted enough to place their children on exam tables. The real risk lived in <strong>access and authority</strong>, not in a neighbor’s address. And every case shows what SOLAR has argued from the start: the public-facing registry is <strong>ineffective, harmful, and misdirected</strong>. It makes announcements; it doesn’t make children safer.</p>

          <Info title="SOLAR’s stance">
            <p>Public safety comes from <strong>oversight in rooms where power meets vulnerability</strong> — not from bigger maps. We advocate independent audits, chaperone protocols for sensitive exams, mandatory dual reporting to medical boards and law enforcement, and trauma-informed survivor care.</p>
          </Info>

          {/* Nassar */}
          <BandHeader title="Dr. Larry Nassar — prestige, federal failure, lifelong harm" icon={ICONS.campus} />
          <h3>USA Gymnastics, MSU, and a federal miss</h3>
          <p>Sports-medicine osteopath <strong>Dr. Larry Nassar</strong>, trained at the University of Michigan and Michigan State, embedded himself in <a href="https://www.usagym.org/" target="_blank" rel="noopener">USA Gymnastics</a> and MSU athletics. Complaints surfaced long before accountability. The <a href="https://oig.justice.gov/sites/default/files/reports/21-093.pdf" target="_blank" rel="noopener">DOJ Inspector General</a> found the FBI <em>“made numerous and serious errors”</em> in handling early allegations; the U.S. government later agreed to a <strong>$138.7M</strong> civil settlement acknowledging those failures (<a href="https://www.reuters.com/legal/us-reaches-1387-million-civil-settlement-with-victims-larry-nassar-2024-04-23/" target="_blank" rel="noopener">Reuters</a>). Michigan State paid <strong>$500M</strong> (<a href="https://msutoday.msu.edu/news/2018/msu-reaches-agreement-in-principle-to-resolve-nassar-claims" target="_blank" rel="noopener">MSU</a>); USA Gymnastics and USOPC added <strong>$380M</strong> (<a href="https://apnews.com/article/business-sports-gymnastics-lawsuits-sexual-abuse-1d6df0e3d21a5f9b14ed1321281870b8" target="_blank" rel="noopener">AP</a>).</p>
          <PullQuote>“We are more than victims. We are survivors.” — <a href="https://www.pbs.org/newshour/show/aly-raisman-wins-her-self-worth-back-from-nassar" target="_blank" rel="noopener">Aly Raisman</a></PullQuote>
          <Warning title="Victim impact">
            <p>Survivors report PTSD, anxiety in medical settings, and careers derailed. The registry had nothing to do with stopping him; <strong>institutional oversight did — and failed</strong>.</p>
          </Warning>

          {/* Hadden */}
          <BandHeader title="Dr. Robert Hadden — Columbia’s reckoning and a 20-year sentence" icon={ICONS.legal} />
          <h3>Prestige hospitals, permissive systems</h3>
          <p><strong>Dr. Robert Hadden</strong>, a New York Medical College graduate, practiced OB-GYN at <a href="https://www.nyp.org/" target="_blank" rel="noopener">NewYork-Presbyterian</a>/<a href="https://www.cuimc.columbia.edu/" target="_blank" rel="noopener">Columbia</a> from the late 1980s to 2012. After a criticized 2016 plea spared him jail, federal prosecutors secured a <strong>20-year sentence</strong> for enticing victims to travel for “appointments” he weaponized for abuse (<a href="https://www.justice.gov/usao-sdny/pr/former-obstetriciangynecologist-robert-hadden-sentenced-20-years-prison-sexually" target="_blank" rel="noopener">DOJ SDNY</a>). Columbia later notified <strong>6,500</strong> former patients and reached settlements exceeding <strong>$1B</strong>, including a <strong>$750M</strong> agreement in 2025 (<a href="https://www.theguardian.com/us-news/2025/may/10/robert-hadden-sexual-assault-columbia-university-gynecologist" target="_blank" rel="noopener">The Guardian</a>).</p>
          <PullQuote>“I thought I was safe. He was a doctor at one of the best hospitals in the country. I trusted him, and he abused that trust.” — survivor account</PullQuote>

          {/* Tyndall */}
          <BandHeader title="Dr. George Tyndall — the campus clinic that failed its students" icon={ICONS.campus} />
          <h3>Three decades in a student health monopoly</h3>
          <p>For nearly three decades, <strong>Dr. George Tyndall</strong> was USC’s only full-time gynecologist. Complaints began in the 1990s; real action came much later. USC’s payouts exceed <strong>$1.1B</strong> across a <strong>$215M</strong> federal class action and an <strong>$852M</strong> global settlement (<a href="https://change.usc.edu/tyndall-issues/federal-class-action-settlement/" target="_blank" rel="noopener">USC</a>, <a href="https://apnews.com/article/3b8b9e032d614f230a72e705c015f3d2" target="_blank" rel="noopener">AP</a>).</p>
          <Info title="Secondary harm">
            <p>“I left student health never trusting care again,” one survivor said. Maps of “strangers” never touched the danger living <strong>inside the campus clinic</strong>.</p>
          </Info>

          {/* Heaps */}
          <BandHeader title="Dr. James Heaps — a top earner at UCLA, then 11 years in prison" icon={ICONS.money} />
          <h3>High compensation, low accountability</h3>
          <p>Over more than 30 years, <strong>Dr. James Heaps</strong> became one of UCLA’s highest-paid clinicians — and later a convicted predator. In 2023 he received an <strong>11-year sentence</strong> (<a href="https://www.cbsnews.com/news/ex-ucla-gynecologist-james-heaps-sexual-abuse-patients-11-year-sentence/" target="_blank" rel="noopener">CBS</a>). The University of California has paid <strong>nearly $700M</strong> to survivors (<a href="https://www.latimes.com/california/story/2023-04-26/full-coverage-of-former-ucla-gynecologist-james-heaps" target="_blank" rel="noopener">LA Times</a>). Some now <strong>avoid cancer screenings</strong> out of fear — an avoidable harm created by institutional failure, not by neighbors’ addresses.</p>

          {/* Strauss */}
          <BandHeader title="Dr. Richard Strauss — the open secret at Ohio State" icon={ICONS.data} />
          <h3>Elite résumés, ordinary guardrails</h3>
          <p>With a University of Chicago M.D. and Harvard fellowship, <strong>Dr. Richard Strauss</strong> abused athletes for decades at Ohio State. The university’s independent portal documents the timeline and scope (<a href="https://news.osu.edu/independent-investigation-reports-findings/" target="_blank" rel="noopener">OSU</a>). Survivors describe PTSD, lost scholarships, and lifelong distrust of sports medicine.</p>
          <PullQuote>“We were sacrificed for football. They knew, and they let it happen.” — former OSU wrestler</PullQuote>

          {/* Anderson */}
          <BandHeader title="Dr. Robert Anderson — Michigan’s decades-long failure" icon={ICONS.data} />
          <h3>Institutional continuity over patient safety</h3>
          <p>An independent probe commissioned by the <strong>U-M Regents</strong> confirmed decades of abuse by <strong>Dr. Robert Anderson</strong>; in 2022, U-M agreed to a <strong>$490M</strong> settlement (<a href="https://record.umich.edu/articles/u-m-reaches-490-million-settlement-with-survivors-of-robert-anderson/" target="_blank" rel="noopener">U-M Record</a>). Former student-athletes report nightmares, hypervigilance, and avoidance of care — clear evidence that <strong>authority + access</strong> is the real risk vector.</p>

          {/* Bradley */}
          <BandHeader title="Dr. Earl Bradley — Delaware’s worst pediatric case" icon={ICONS.pediatric} />
          <h3>Brightly lit rooms, darkest crimes</h3>
          <p><strong>Dr. Earl Bradley</strong>, a Temple-trained pediatrician, constructed a carnival-themed office parents trusted. He filmed and abused <strong>infants and toddlers</strong> for years. The <a href="https://courts.delaware.gov/opinions/download.aspx?ID=178080" target="_blank" rel="noopener">Delaware Supreme Court</a> affirmed <strong>14 life sentences plus 164 years</strong>.</p>
          <PullQuote>“I strapped my baby into the car seat and drove him to his abuser. I’ll never forgive myself — even though I didn’t know.” — parent of a Bradley victim</PullQuote>

          {/* Paduch */}
          <BandHeader title="Dr. Darius Paduch — Weill Cornell prestige, minors among victims" icon={ICONS.exam} />
          <h3>Specialty prestige as cover</h3>
          <p><strong>Dr. Darius Paduch</strong>, a men’s health specialist at Weill Cornell/NewYork-Presbyterian, abused patients — including minors — over more than a decade. In 2024 he was <strong>sentenced to life in prison</strong> (<a href="https://apnews.com/article/ee959927300c581837b832c1fa36f564" target="_blank" rel="noopener">AP</a>). Survivors report shame, PTSD, and fear of future clinical exams. Prestige is not a safeguard; <strong>audited practice is</strong>.</p>

          {/* Cheng */}
          <BandHeader title="Dr. Zhi Alan Cheng — sedated patients, 24-year sentence" icon={ICONS.urgent} />
          <h3>Sedation as a weapon</h3>
          <p>In 2025, <strong>Dr. Zhi Alan Cheng</strong> was sentenced to <strong>24 years</strong> for raping patients — some sedated — and recording assaults (<a href="https://apnews.com/article/alan-cheng-doctor-rape-patients-nyc-sentenced-9a24a3fa7d138c1f04e86f6d2c21cfb3" target="_blank" rel="noopener">AP</a>). Survivors learned they were violated without memory — a shattering trauma no residency buffer can foresee. Sedation logs or cameras aren’t enough without <strong>live chaperones, spot audits, and tamper-evident protocols</strong>.</p>

          {/* Clyne */}
          <BandHeader title="Dr. Patrick Clyne — foster-care pediatrician, license surrendered" icon={ICONS.privacy} />
          <h3>The most vulnerable, the fewest choices</h3>
          <p>After <strong>two decades</strong> of allegations involving foster youth, California’s medical board published <strong>Dr. Patrick Clyne’s</strong> license surrender in 2025 (<a href="https://www2.mbc.ca.gov/BreezePDL/document.aspx?did=AAAJD250516143252227.DID&path=%5CDIDOCS%5C20250516%5CDMRAAAJD1%5C" target="_blank" rel="noopener">Medical Board of California</a>). Foster survivors describe silencing and fear of retaliation, trapped in systems with no meaningful ability to choose another clinician.</p>

          {/* Atha */}
          <BandHeader title="Jason Atha, D.D.S. — licensure as cover, sting as intervention" icon={ICONS.warning} />
          <h3>Professional standing ≠ protection</h3>
          <p>A Colorado dentist, <strong>Jason Atha</strong>, arranged to travel for sex with an “8-year-old” in an HSI sting; he pled guilty and received <strong>15 years</strong> (<a href="https://www.justice.gov/usao-sdfl/pr/colorado-dentist-pleads-guilty-attempting-solicit-minor-online-and-transporting-child" target="_blank" rel="noopener">DOJ SDFL</a>). Clinical licensure and community trust can be leveraged for predation — risks the registry does not surveil.</p>

          {/* Female clinicians */}
          <BandHeader title="Female clinicians — authority, not gender, drives risk" icon="♀️" />
          <h3>Outliers that prove the rule</h3>
          <p>Abuse by clinicians is overwhelmingly committed by men, but not exclusively. In 2022, Tennessee pediatric N.P. <strong>Patricia Hill</strong> was indicted for molesting a <strong>4-year-old</strong> patient (<a href="https://tennessean.com/story/news/crime/2022/05/10/knoxville-pediatric-nurse-practitioner-indicted-for-child-molestation/9725622002/" target="_blank" rel="noopener">Tennessean</a>). The constant lesson: <strong>authority + access</strong> is the risk vector, regardless of gender.</p>

          <Legal title="The data lawmakers keep ignoring">
            <p><a href="https://www.rainn.org/statistics/children-and-teens" target="_blank" rel="noopener">RAINN</a> summarizes national crime data bluntly: <strong>93%</strong> of juvenile sexual assault victims knew the perpetrator. Rigorous evaluations — including the <a href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" target="_blank" rel="noopener">NIJ evidence brief</a> and the <a href="https://www.prisonlegalnews.org/media/publications/The_Effectiveness_of_Sex_Offender_Registration_and_Notification_Sept._2021.pdf" target="_blank" rel="noopener">Campbell Systematic Review</a> — find that broad, public-facing SORN regimes often <strong>do not reduce</strong> recidivism and can worsen outcomes by destabilizing housing and work.</p>
          </Legal>

          <Research title="Surveillance ≠ prevention">
            <ul>
              <li><strong>Law-enforcement–only registration</strong> can aid investigations; public shaming maps have not shown reliable prevention effects.</li>
              <li>Collateral harms (housing, employment) can <strong>increase</strong> risk — the opposite of prevention.</li>
            </ul>
          </Research>

          <BandHeader title="SOLAR’s position — where prevention actually lives" icon={ICONS.shield} />
          <SectionHeader title="Trade optics for oversight" emoji={ICONS.policy} />
          <ul>
            <li><strong>Mandatory, auditable safeguards</strong> for intimate exams (clear, documented consent; chaperone availability; posted patient rights), consistent with professional guidance.</li>
            <li><strong>Dual-channel reporting</strong> to state medical boards <em>and</em> law enforcement for defined complaints — with penalties for institutions that fail to escalate (see <a href="https://www.fsmb.org/siteassets/advocacy/policies/report-of-workgroup-on-sexual-misconduct-adopted-version.pdf" target="_blank" rel="noopener">FSMB policy</a>).</li>
            <li><strong>Independent ombuds & whistleblower protections</strong> outside hospital hierarchies.</li>
            <li><strong>Rapid, transparent discipline</strong> and searchable board actions.</li>
            <li><strong>Budget shift</strong> from public shaming maps to audits, survivor services, and compliance where harm actually occurs.</li>
          </ul>

          <BandHeader title="Camouflage vs. comfort — the choice we keep avoiding" icon={ICONS.map} />
          <PullQuote>“We published addresses online while the danger lived behind the clinic door.”</PullQuote>
          <p>These were not monsters in shadows. They were <strong>doctors, dentists, nurse practitioners</strong> invited into families’ lives. Their white coats were <strong>camouflage</strong>. Our registry system was the <strong>comfort blanket</strong> we clutched while children were abused in clinics, hospitals, and universities. We can keep pretending maps protect us — or we can face the truth these cases scream: <strong>danger is in authority, not geography</strong>; <strong>betrayal thrives in silence, not in shadows</strong>; and <strong>safety requires institutions brave enough to police themselves</strong>. SOLAR’s ask is simple: <strong>trade optics for oversight</strong>. Build systems that cannot be gamed by a white coat.</p>

          <Divider />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Sources (verified)</h2>
          <SourceList>
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
            <li><strong>The Guardian</strong> — Columbia/Hadden $750M (total &gt;$1B): <a href="https://www.theguardian.com/us-news/2025/may/10/robert-hadden-sexual-assault-columbia-university-gynecologist" target="_blank" rel="noopener">Article</a></li>
            <li><strong>AP</strong> — Paduch life sentence: <a href="https://apnews.com/article/ee959927300c581837b832c1fa36f564" target="_blank" rel="noopener">Article</a></li>
            <li><strong>PBS</strong> — Aly Raisman statement: <a href="https://www.pbs.org/newshour/show/aly-raisman-wins-her-self-worth-back-from-nassar" target="_blank" rel="noopener">Segment</a></li>
            <li><strong>RAINN</strong> — Children & Teens stats: <a href="https://www.rainn.org/statistics/children-and-teens" target="_blank" rel="noopener">RAINN</a></li>
            <li><strong>NIJ</strong> — SORN effectiveness: <a href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" target="_blank" rel="noopener">Evidence brief</a></li>
            <li><strong>Campbell Review (2021)</strong> — SORN impact: <a href="https://www.prisonlegalnews.org/media/publications/The_Effectiveness_of_Sex_Offender_Registration_and_Notification_Sept._2021.pdf" target="_blank" rel="noopener">PDF</a></li>
            <li><strong>Tennessean</strong> — Patricia Hill indictment: <a href="https://tennessean.com/story/news/crime/2022/05/10/knoxville-pediatric-nurse-practitioner-indicted-for-child-molestation/9725622002/" target="_blank" rel="noopener">Article</a></li>
          </SourceList>
        </article>
      </main>
    </div>
  );
            }
