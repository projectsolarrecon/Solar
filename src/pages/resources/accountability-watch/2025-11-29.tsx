// src/pages/resources/accountability-watch/2025-11-29.tsx

import React from 'react';
import { Helmet } from 'react-helmet';
import { Scale, Shield, FileText, Quote, Info } from 'lucide-react';
import ShareBar from '../../../components/solar/ShareBar';

export const teaserHighlights = [
  'Former Celina ISD teacher-coach federally indicted; investigators say at least 39 alleged student victims and multiple civil suits now name the district.',
  'Ohio/LDS lay leader charged in federal child-exploitation case after decades of alleged internal warnings—no prior sex-offender registration noted.',
  'Megachurch in suburban Chicago faces civil suit alleging its pastor failed to report a youth leader after learning of prior abuse, allowing new abuse to occur.',
];

type Stage =
  | 'Arrested / Charged'
  | 'Indicted'
  | 'Sentenced'
  | 'Civil lawsuit filed'
  | 'Investigative subcommittee opened'
  | string;

interface SourceLink {
  label: string;
  href: string;
}

interface CaseRowProps {
  name: string;
  role: string;
  jurisdiction: string;
  stage: Stage;
  date: string;
  summary: React.ReactNode;
  registry: 'No prior registration noted' | 'Registry status not mentioned' | 'Previously registered';
  sources: SourceLink[];
  emoji?: string;
  whyIncluded?: React.ReactNode;
}

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-100">
    {children}
  </span>
);

const StageBadge: React.FC<{ stage: Stage }> = ({ stage }) => {
  let base =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset';

  let tone = 'bg-slate-50 text-slate-900 ring-slate-200';

  if (stage === 'Civil lawsuit filed') {
    tone = 'bg-sky-50 text-sky-900 ring-sky-200';
  } else if (stage === 'Arrested / Charged') {
    tone = 'bg-rose-50 text-rose-900 ring-rose-200';
  } else if (stage === 'Indicted') {
    tone = 'bg-indigo-50 text-indigo-900 ring-indigo-200';
  } else if (stage === 'Investigative subcommittee opened') {
    tone = 'bg-indigo-50 text-indigo-900 ring-indigo-200';
  } else if (stage === 'Sentenced') {
    tone = 'bg-emerald-50 text-emerald-900 ring-emerald-200';
  }

  return <span className={`${base} ${tone}`}>{stage}</span>;
};

const RegistryChip: React.FC<{ status: CaseRowProps['registry'] }> = ({ status }) => {
  let tone = 'bg-emerald-50 text-emerald-900 ring-emerald-200';
  let label = 'No prior registration noted';

  if (status === 'Previously registered') {
    tone = 'bg-rose-50 text-rose-900 ring-rose-200';
    label = 'Previously registered';
  } else if (status === 'Registry status not mentioned') {
    tone = 'bg-emerald-50 text-emerald-900 ring-emerald-200';
    label = 'No prior registration noted';
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${tone}`}
    >
      <span className="mr-1 font-semibold">Registry:</span>
      {label}
    </span>
  );
};

const Section: React.FC<{
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <section className="space-y-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur">
    <header className="flex items-center gap-3 border-b border-slate-100 pb-3">
      {icon && <div className="rounded-xl bg-slate-100 p-2 text-slate-700">{icon}</div>}
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
    </header>
    <div className="space-y-4 text-sm text-slate-800">{children}</div>
  </section>
);

const PullQuote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <figure className="border-l-4 border-slate-400 pl-4 text-sm italic text-slate-700">
    <Quote className="mb-2 h-4 w-4 text-slate-400" />
    <blockquote>{children}</blockquote>
  </figure>
);

const CaseRow: React.FC<CaseRowProps> = ({
  name,
  role,
  jurisdiction,
  stage,
  date,
  summary,
  registry,
  sources,
  emoji = '🧾',
  whyIncluded,
}) => (
  <article className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="text-lg" aria-hidden>
          {emoji}
        </span>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{name}</h3>
          <p className="text-xs text-slate-600">{role}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1 text-right">
        <p className="text-xs font-medium text-slate-700">{date}</p>
        <p className="text-xs text-slate-500">{jurisdiction}</p>
      </div>
    </div>

    <div className="flex flex-wrap items-center gap-2">
      <StageBadge stage={stage} />
      <RegistryChip status={registry} />
    </div>

    <div className="text-sm text-slate-800">{summary}</div>

    {whyIncluded && (
      <div className="rounded-lg bg-amber-50 p-3 text-xs text-amber-900 ring-1 ring-amber-100">
        <div className="mb-1 flex items-center gap-1 font-semibold">
          <Info className="h-3 w-3" />
          <span>Why this case is included</span>
        </div>
        <div>{whyIncluded}</div>
      </div>
    )}

    {sources.length > 0 && (
      <div className="flex flex-wrap gap-2 pt-1">
        {sources.map((source) => (
          <a
            key={source.href}
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 underline hover:bg-slate-100"
          >
            {source.label}
          </a>
        ))}
      </div>
    )}
  </article>
);

const AccountabilityWatch2025_11_29: React.FC = () => {
  const pageTitle = 'Accountability Watch – Authority & Access Cases for November 23–29, 2025';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pb-12 text-slate-100">
        <header className="border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-3">
                <Badge>Accountability Watch · SOLAR</Badge>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Authority & Access · Week of November 23–29, 2025
                </h1>
                <p className="max-w-2xl text-sm text-slate-300">
                  Weekly snapshot of arrests, charges, sentencings, and civil actions involving
                  people in positions of institutional or household authority. Emphasis is on cases
                  where risk emerged inside roles like teacher, coach, clergy, or administrator
                  rather than through prior sex-offender registration.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  <span>Jurisdictions: U.S. federal & state; local institutions.</span>
                  <span>Window: Sunday–Saturday, Nov 23–29, 2025 (America/New_York).</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-2 rounded-2xl bg-slate-900/70 px-4 py-3 ring-1 ring-slate-700">
                  <Scale className="h-5 w-5 text-emerald-300" />
                  <div className="text-xs text-slate-200">
                    <p className="font-semibold">Presumption of innocence</p>
                    <p>All defendants are presumed innocent unless and until proven guilty.</p>
                  </div>
                </div>
                <ShareBar
                  title={pageTitle}
                  url="https://solarcoalition.org/resources/accountability-watch/2025-11-29"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto mt-8 flex max-w-5xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          {/* At a Glance */}
          <Section
            title="At a Glance"
            icon={<Shield className="h-5 w-5 text-slate-700" aria-hidden />}
          >
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold">
                  School-based authority remains central to this week’s developments.
                </span>{' '}
                A former Celina ISD teacher and football coach in Texas now faces federal charges
                and an additional local charge, with police reporting{' '}
                <span className="font-semibold">39 alleged student victims</span> and multiple civil
                suits against the district.
              </li>
              <li>
                In Missouri, Nebraska, Utah, Florida, Michigan/Indiana, and Texas,{' '}
                <span className="font-semibold">teachers, coaches, and a vice-principal</span> were
                sentenced or arrested in cases involving students or children they first met through
                school roles—none with prior sex-offender registration noted.
              </li>
              <li>
                A Dublin, Ohio man with a long history of lay leadership in The Church of Jesus
                Christ of Latter-day Saints was arrested on federal child-exploitation charges tied
                to alleged abuse in Ohio and Utah, after years of reported internal warnings rather
                than registry-based safeguards.
              </li>
              <li>
                In Texas, a priest incardinated into the Diocese of Laredo was suspended after an
                allegation of historical sexual misconduct with a minor, with the canonical
                investigation handled by his prior Mexican diocese while civil authorities were
                notified.
              </li>
              <li>
                In Illinois, Chapelstreet Church (formerly First Baptist Church of Geneva) and its
                interim lead pastor are sued over alleged failure to report a youth leader after
                learning of prior abuse, raising questions about mandated reporting and institutional
                accountability.
              </li>
            </ul>
          </Section>

          {/* Criminal cases – educators and school authority */}
          <Section
            title="Criminal Cases – Educators, Coaches, and School Administrators"
            icon={<FileText className="h-5 w-5 text-slate-700" aria-hidden />}
          >
            <div className="space-y-4">
              <CaseRow
                name="William Caleb Elliott"
                role="Former middle-school social studies teacher & football coach, Celina ISD (Moore Middle School)"
                jurisdiction="Collin County, Texas · U.S. District Court for the Eastern District of Texas"
                stage="Indicted"
                date="Key developments reported Nov. 26, 2025"
                registry="No prior registration noted"
                emoji="🏈"
                summary={
                  <>
                    <p>
                      Federal prosecutors and local police describe Elliott, 26, as a former Celina
                      ISD teacher and football coach who allegedly coerced numerous boys into
                      sexually explicit conduct in 2025 in order to produce images and videos. A
                      federal grand jury indicted him on{' '}
                      <span className="font-semibold">
                        seven counts of production of child pornography and one count of attempted
                        production
                      </span>
                      ; local authorities later announced an additional charge of sexual performance
                      of a child.
                    </p>
                    <p className="mt-2">
                      According to Celina police and court documents summarized by local coverage,
                      Elliott allegedly recorded boys in the locker room at Moore Middle School and
                      coerced at least one student into performing nude exercises to get his
                      backpack back. A recent police update states that the{' '}
                      <span className="font-semibold">
                        number of alleged victims has risen to 39
                      </span>
                      , and he remains in custody. Multiple families have also filed civil lawsuits
                      against Celina ISD alleging that the district failed to supervise him and
                      effectively concealed prior concerns.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Elliott is a textbook case of{' '}
                    <span className="font-semibold">authority and access inside a school</span>,
                    where students report that abuse occurred in spaces that parents and staff
                    assumed were monitored (locker rooms and classrooms). There is no indication he
                    was previously on a registry. Instead, the case surfaced through current
                    students’ reports and subsequent police and federal investigation, highlighting
                    how registries do not meaningfully protect against first-time exposure in
                    school-based authority roles.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ ED Texas – significant prosecutions (includes Elliott indictment)',
                    href: 'https://www.justice.gov/usao-edtx/pr/icymi-significant-federal-prosecutions-eastern-district-texas-during-nation-wide',
                  },
                  {
                    label: 'CBS Texas – victim count rises to 39; new charge',
                    href: 'https://www.cbsnews.com/texas/news/former-celina-isd-teacher-caleb-elliott-new-charge-victim-count-rises-39/',
                  },
                  {
                    label: 'Texas Scorecard – third lawsuit vs. Celina ISD over locker room recordings',
                    href: 'https://texasscorecard.com/local/third-lawsuit-filed-in-celina-isd-locker-room-recording-scandal/',
                  },
                ]}
              />

              <CaseRow
                name="Scott Liggett"
                role="Vice-principal, Mars Elementary School (Berrien Springs, MI); former academic dean at elementary schools in Elkhart, IN"
                jurisdiction="St. Joseph County, Indiana"
                stage="Arrested / Charged"
                date="Arrest reported Nov. 25–26, 2025"
                registry="No prior registration noted"
                emoji="🏫"
                summary={
                  <>
                    <p>
                      Liggett, in his early 40s, was arrested on child-seduction charges out of St.
                      Joseph County, Indiana. Court documents reported by local outlets allege he
                      began grooming a girl around 2015 when he served as an academic dean at Mary
                      Daly Elementary School in Elkhart, and that the child later became his foster
                      and then adopted daughter. The alleged sexual abuse is said to have occurred
                      over several years in the context of that foster/adoptive relationship.
                    </p>
                    <p className="mt-2">
                      At the time of his arrest, Liggett was serving as vice-principal of Mars
                      Elementary in Berrien Springs, Michigan. Berrien Springs Public Schools stated
                      that the charges do not involve Mars students and that he has been removed
                      from campus, but the case raises concerns about how district hiring and
                      information-sharing operate across state lines and between districts.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Liggett’s case illustrates how{' '}
                    <span className="font-semibold">
                      school authority can extend into household authority
                    </span>
                    . The child allegedly first knew him through his role in her school, then
                    entered his home as a foster/adoptive daughter. There is no reporting that he
                    was on any sex-offender registry before these charges, underscoring that the
                    registry did not play a preventive role even as he held significant
                    administrative authority over children.
                  </>
                }
                sources={[
                  {
                    label: 'WNDU – Mars Elementary vice-principal arrested on child-seduction charges',
                    href: 'https://www.wndu.com/2025/11/25/elementary-school-vice-principal-berrien-springs-arrested-child-seduction-charges/',
                  },
                  {
                    label: 'WSBT – former elementary school leader faces child-seduction charges',
                    href: 'https://wwmt.com/news/state/former-vice-principal-arrested-on-warrant-for-alleged-misconduct-assault-mart-daly-elementary-victim-documents-school-jail-st-joseph-county-indiana',
                  },
                ]}
              />

              <CaseRow
                name="Carissa Smith"
                role="Former substitute teacher, Dixon Middle School (Dixon R-I School District)"
                jurisdiction="Pulaski County, Missouri"
                stage="Sentenced"
                date="Sentencing covered Nov. 21–23, 2025"
                registry="No prior registration noted"
                emoji="📚"
                summary={
                  <>
                    <p>
                      Smith, 30, a former substitute middle-school teacher, was sentenced to{' '}
                      <span className="font-semibold">10 years in prison</span> after pleading
                      guilty in September to two counts of sexual contact with a student and one
                      count of first-degree endangering the welfare of a child. Prosecutors alleged
                      that she paid underage students in cash and through payment apps and provided
                      alcohol and marijuana in exchange for sexual acts, sometimes transporting
                      students to her home or other locations.
                    </p>
                    <p className="mt-2">
                      Earlier charging documents had listed a much larger slate of counts, including
                      statutory rape, trafficking, and sodomy. The plea reduced the charges but
                      still reflects a pattern of exploitation of students over whom she had
                      educational authority. Local reporting notes that the district expressed
                      distress when she was first arrested but does not describe earlier internal
                      discipline prior to criminal charges.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Smith’s case involves a teacher using her position and relationship with
                    students to facilitate abuse and to recruit additional victims. Coverage does
                    not indicate any previous sex-offense conviction or registry listing. The case
                    demonstrates that, for families and hiring entities, the{' '}
                    <span className="font-semibold">
                      first clear public signal of risk came only after her arrest and prosecution
                    </span>
                    .
                  </>
                }
                sources={[
                  {
                    label: 'KRCG – former Dixon R-1 teacher sentenced to ten years',
                    href: 'https://krcgtv.com/news/local/former-dixon-r-1-teacher-sentenced-to-ten-years-for-sexually-abusing-a-student',
                  },
                  {
                    label: 'People – middle school teacher sentenced after paying students for sex',
                    href: 'https://people.com/middle-school-teacher-sentenced-paid-students-for-sex-with-cash-drugs-and-alcohol-11855406',
                  },
                ]}
              />

              <CaseRow
                name="Nixel Ortiz"
                role="Former teacher, Madison Public Schools (Nebraska)"
                jurisdiction="Madison County, Nebraska"
                stage="Sentenced"
                date="Sentencing reported Nov. 21–25, 2025"
                registry="No prior registration noted"
                emoji="🧑‍🏫"
                summary={
                  <>
                    <p>
                      Ortiz, 30, was initially charged with first-degree sexual abuse by a school
                      employee involving an 18-year-old high school student (still a minor under
                      Nebraska law). Court records show the charge was later amended, and she
                      pleaded guilty to{' '}
                      <span className="font-semibold">attempted sexual abuse by a school employee</span>, a
                      Class 3A felony.
                    </p>
                    <p className="mt-2">
                      She received <span className="font-semibold">24 months of probation</span>, a{' '}
                      <span className="font-semibold">$2,000 fine</span>, and conditions including
                      counseling and restrictions on contact with minors. Critically, Ortiz was
                      ordered to register as a sex offender in Nebraska for{' '}
                      <span className="font-semibold">25 years</span>. Local reporting does not
                      indicate any prior sex-offense convictions or registry status.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Ortiz’s case shows the registry functioning as a{' '}
                    <span className="font-semibold">post hoc label</span> applied only after a
                    teacher is prosecuted for misconduct involving a student. There is no
                    suggestion she was previously on a registry before this case, despite being in a
                    classroom authority role; registration is imposed only now, after the first
                    public case.
                  </>
                }
                sources={[
                  {
                    label: '1011 NOW – former Nebraska teacher sentenced to probation',
                    href: 'https://www.1011now.com/2025/11/21/former-nebraska-teacher-sentenced-probation-after-sexually-abusing-student/',
                  },
                  {
                    label: 'KNLV Radio – former Madison teacher sentenced, required to register',
                    href: 'https://www.knlvradio.com/2025/11/24/former-madison-teacher-sentenced-required-to-register-as-sex-offender/',
                  },
                ]}
              />

              <CaseRow
                name="Alisha Marie George"
                role="Honors language arts teacher & volleyball coach, Hawthorn Academy (West Jordan, UT)"
                jurisdiction="West Jordan, Utah · Salt Lake County"
                stage="Arrested / Charged"
                date="Arrest reported Nov. 25–26, 2025"
                registry="No prior registration noted"
                emoji="🏐"
                summary={
                  <>
                    <p>
                      George, about 40, teaches at Hawthorn Academy and also coaches volleyball. She
                      was arrested and booked into jail on multiple counts including attempted rape,
                      forcible sodomy, object rape, forcible sexual abuse, and distributing
                      pornographic material. According to a police affidavit reported by Utah media,
                      a former student, now 15, alleged that George developed a close “mother
                      figure” relationship with him while he was in her 8th grade class and on the
                      team she coached, and that the relationship later became sexual.
                    </p>
                    <p className="mt-2">
                      The alleged abuse reportedly occurred over several months and included
                      physical sexual acts and sharing of sexual material. West Jordan police
                      describe the investigation as ongoing. Hawthorn Academy has not publicly
                      detailed its internal response beyond confirming her employment.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    George represents a combined{' '}
                    <span className="font-semibold">teacher–coach authority role</span> in which a
                    student describes strong emotional reliance on an adult who then allegedly
                    crossed into abuse. Reporting does not indicate previous sex-offense convictions
                    or registration. The risk was tied to her authority and access in the classroom
                    and on the team, not to any prior registry listing.
                  </>
                }
                sources={[
                  {
                    label: 'KSL – West Jordan teacher arrested in student abuse case',
                    href: 'https://www.ksl.com/article/51410989/utah-middle-school-teacher-arrested-accused-of-sexually-abusing-student',
                  },
                  {
                    label: 'Fox 13 Utah – teacher arrested after alleged abuse of former student',
                    href: 'https://www.fox13now.com/news/crime/west-jordan-teacher-arrested-after-allegedly-sexually-abusing-former-student',
                  },
                  {
                    label: 'Hoodline – overview of charges against Alisha George',
                    href: 'https://hoodline.com/2025/11/utah-teacher-alisha-marie-george-charged-with-sexual-abuse-of-a-minor-at-hawthorn-academy/',
                  },
                ]}
              />

              <CaseRow
                name="Julio Padilla"
                role="Teacher, Deltona Middle School (Volusia County Schools)"
                jurisdiction="Volusia County, Florida"
                stage="Arrested / Charged"
                date="Arrest reported Nov. 25–26, 2025"
                registry="No prior registration noted"
                emoji="📝"
                summary={
                  <>
                    <p>
                      Padilla, 51, was arrested on a{' '}
                      <span className="font-semibold">child abuse</span> charge after a student
                      reported that he rubbed her back, shoulder, and across her chest while helping
                      her with an assignment. According to the Volusia County Sheriff’s Office, the
                      investigation began in mid-September 2025; the district removed him from the
                      classroom and reassigned him to a non-student-contact role, then later placed
                      him on administrative leave.
                    </p>
                    <p className="mt-2">
                      Deputies publicly asked for potential additional victims to contact the
                      sheriff’s office. Coverage focusing on the arrest does not report any prior
                      sex-offense convictions or registry status for Padilla.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Even when charged under a general child-abuse statute rather than an explicitly
                    sexual offense label, the underlying allegations concern{' '}
                    <span className="font-semibold">boundary violations by a teacher in class</span>{' '}
                    against a student. There is no indication that a registry flag played any role
                    in parents’ or the school’s understanding of risk; the case came to light
                    through a student disclosure and a local investigation.
                  </>
                }
                sources={[
                  {
                    label: 'ClickOrlando – Deltona teacher arrested for inappropriately touching student',
                    href: 'https://www.clickorlando.com/news/local/2025/11/25/deltona-middle-school-teacher-arrested-for-inappropriately-touching-student-deputies-say/',
                  },
                  {
                    label: 'WFTV – Volusia County teacher accused of inappropriately touching student',
                    href: 'https://www.wftv.com/news/local/volusia-county-teacher-accused-inappropriately-touching-female-student/IEMLIU3MKFD7ZDMR7OY2N6WS4Y/',
                  },
                  {
                    label: 'WESH – deputies detail child-abuse charge against Deltona teacher',
                    href: 'https://www.wesh.com/article/deltona-middle-school-teacher-child-abuse-arrest/69546175',
                  },
                ]}
              />

              <CaseRow
                name="Wilfred (Wilfredo / Wilbert) Sequeiros"
                role="Former elementary-school teacher & soccer coach, Klein ISD and Houston ISD"
                jurisdiction="Harris County, Texas"
                stage="Arrested / Charged"
                date="Re-arrest and extradition reported Nov. 25–26, 2025"
                registry="No prior registration noted"
                emoji="⚽"
                summary={
                  <>
                    <p>
                      Sequeiros, 60, previously taught at Epps Island Elementary (Klein ISD) and
                      Northline Elementary (Houston ISD) and also coached soccer. He is accused of
                      sexually assaulting at least seven students between roughly 2014 and 2019.
                      According to Harris County authorities and subsequent reporting, he allegedly
                      isolated children in his classroom and assaulted them in a classroom closet,
                      threatening them to stay silent.
                    </p>
                    <p className="mt-2">
                      He had been arrested on similar charges in 2020 and 2021 and released on bond
                      in both cases. Investigators say he fled to Peru in 2023 while still facing
                      charges, and was arrested there in November 2025 after a joint operation
                      involving U.S. Marshals and Peruvian authorities. He has now been returned to
                      Harris County Jail. Reporting notes prior arrests but does not state that he
                      was on a sex-offender registry.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Sequeiros&apos;s case shows how a{' '}
                    <span className="font-semibold">
                      multi-year pattern of alleged classroom abuse can persist across districts
                    </span>{' '}
                    without any indication of prior registration. The key safeguards that failed or
                    lagged here were bond conditions and cross-jurisdiction supervision, not
                    background checks against a registry.
                  </>
                }
                sources={[
                  {
                    label: 'Houston Chronicle – former HISD/Klein ISD teacher arrested after fleeing to Peru',
                    href: 'https://www.houstonchronicle.com/news/houston-texas/article/former-hisd-klein-isd-teacher-arrested-child-21208106.php',
                  },
                  {
                    label: 'Houston Chronicle – extradition from Peru to face child-sex charges',
                    href: 'https://www.chron.com/news/houston-texas/article/teacher-peru-houston-wilbert-sequeiros-21209393.php',
                  },
                  {
                    label: 'Texas Scorecard – ex-Houston elementary teacher re-arrested after fleeing US',
                    href: 'https://texasscorecard.com/local/ex-houston-elementary-teacher-accused-of-sexually-assaulting-students-re-arrested-after-fleeing-us/',
                  },
                ]}
              />
            </div>
          </Section>

          {/* Religious authority & lay leadership */}
          <Section
            title="Religious Authority & Lay Leadership"
            icon={<Shield className="h-5 w-5 text-slate-700" aria-hidden />}
          >
            <div className="space-y-4">
              <CaseRow
                name="Wade S. Christofferson"
                role="Longtime lay leader in The Church of Jesus Christ of Latter-day Saints (various callings in Ohio and Utah)"
                jurisdiction="U.S. District Court, Southern District of Ohio · arrest in Utah"
                stage="Arrested / Charged"
                date="Federal complaint unsealed Nov. 25, 2025"
                registry="No prior registration noted"
                emoji="⛪"
                summary={
                  <>
                    <p>
                      Christofferson, 72, of Dublin, Ohio, was arrested in Utah and charged in
                      federal court with attempting to sexually exploit a minor and coercion and
                      enticement. According to the complaint and news summaries, investigators
                      allege that he abused at least two minors—one in Ohio, one in Utah—through
                      repeated in-person abuse and sexually explicit video calls, and that he used
                      letters and coded language to discuss sexual activity with one victim.
                    </p>
                    <p className="mt-2">
                      A Project Safe Childhood press release notes that he searched online for
                      whether clergy must report abuse disclosed in confessional-type settings. A
                      detailed timeline compiled by independent researchers and survivor reports
                      describes decades of alleged abuse, an excommunication and later rebaptism,
                      and subsequent priesthood and teaching roles in LDS congregations with
                      access to youth and families.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Christofferson&apos;s case exemplifies{' '}
                    <span className="font-semibold">
                      long-term religious authority and access to youth handled internally rather
                      than through early criminal adjudication
                    </span>
                    . Public reporting of the federal charges does not indicate any prior
                    sex-offense conviction or registry listing. The allegations, if proven, show
                    that institutional knowledge and internal church processes—not a public
                    registry—were the primary mechanisms by which risk was known for years.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ SD Ohio – Dublin man arrested on federal child-exploitation charges',
                    href: 'https://www.justice.gov/usao-sdoh/pr/dublin-man-arrested-utah-federal-child-exploitation-charges',
                  },
                  {
                    label: 'KSL – Ohio man arrested in Utah on child-sex abuse charges',
                    href: 'https://www.ksl.com/article/51410662/ohio-man-arrested-in-utah-on-child-sex-abuse-charges',
                  },
                  {
                    label: 'Floodlit – Wade S. Christofferson case timeline',
                    href: 'https://floodlit.org/a/b428/',
                  },
                ]}
              />

              <CaseRow
                name="Fr. Luis Efraín Mares"
                role="Catholic priest, incardinated in the Diocese of Laredo (originally Diocese of Piedras Negras, Mexico)"
                jurisdiction="Diocese of Laredo (Texas) · Diocese of Piedras Negras (Mexico)"
                stage="Investigative subcommittee opened"
                date="Suspension and allegation reported Nov. 28–29, 2025"
                registry="No prior registration noted"
                emoji="✝️"
                summary={
                  <>
                    <p>
                      The Diocese of Laredo announced that it suspended the priestly faculties of
                      Fr. Mares in May 2025 after being informed that the Diocese of Piedras Negras
                      had received an allegation of sexual misconduct with a minor regarding conduct
                      allegedly occurring about 18 years earlier in Mexico. Local reporting
                      indicates that the canonical investigation is being led by the Mexican
                      diocese, which has jurisdiction over the place and time of the alleged abuse.
                    </p>
                    <p className="mt-2">
                      Laredo&apos;s statement says there were no prior accusations against Mares in
                      that diocese, and that both dioceses have notified civil authorities and are
                      following Vatican procedures. No public criminal charging documents were
                      identified as of this week&apos;s reporting.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Mares&apos;s case highlights how{' '}
                    <span className="font-semibold">
                      cross-border clerical assignments and canonical investigations
                    </span>{' '}
                    can move on a separate track from criminal processes, with the public learning
                    of an allegation years after the alleged conduct and primarily through diocesan
                    statements. There is no indication of prior registration; the risk, if
                    substantiated, was handled inside church and canonical systems rather than
                    through registry-based checks.
                  </>
                }
                sources={[
                  {
                    label: 'LMT Online – Diocese of Laredo suspends priest amid misconduct allegation',
                    href: 'https://www.lmtonline.com/local/article/laredo-priest-allegation-sexual-abuse-assault-21213297.php',
                  },
                  {
                    label: 'KGNS – Laredo priest accused of sexual misconduct with minor in Mexico',
                    href: 'https://www.kgns.tv/2025/11/29/laredo-priest-accused-sexual-misconduct-with-minor-mexico-suspension-announced-6-months-after/',
                  },
                ]}
              />
            </div>
          </Section>

          {/* Institutional accountability – Chapelstreet civil suit */}
          <Section
            title="Institutional Accountability & Civil Actions"
            icon={<Scale className="h-5 w-5 text-slate-700" aria-hidden />}
          >
            <div className="space-y-4">
              <CaseRow
                name="Chapelstreet Church & interim lead pastor Brian Coffey (civil suit)"
                role="Evangelical megachurch (formerly First Baptist Church of Geneva); interim lead pastor and former youth leader"
                jurisdiction="Kane County, Illinois (civil court)"
                stage="Civil lawsuit filed"
                date="Watchdog coverage Nov. 24–25, 2025 (lawsuit filed earlier in November)"
                registry="No prior registration noted"
                emoji="📜"
                summary={
                  <>
                    <p>
                      A civil lawsuit filed in Kane County names Chapelstreet Church in Geneva,
                      Illinois (formerly First Baptist Church of Geneva), interim lead pastor Brian
                      Coffey, and former youth leader Don Vanthournout. The plaintiff, identified as
                      John Doe, alleges Vanthournout molested him decades ago at another church.
                      Years later, concerned that Vanthournout was serving as a youth leader at
                      Chapelstreet, Doe says he told Coffey about the earlier abuse.
                    </p>
                    <p className="mt-2">
                      The suit alleges that Coffey failed to report the disclosure to authorities
                      and that Chapelstreet allowed Vanthournout to continue in positions of
                      leadership and authority in youth and student ministries between roughly 2011
                      and 2018. During that period, Vanthournout is alleged to have sexually abused
                      another boy whose missionary family stayed with him and attended Chapelstreet.
                      Kane County authorities told reporters they were not aware of anyone from the
                      church reporting the suspected abuse.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    This case underscores{' '}
                    <span className="font-semibold">
                      institutional and pastoral accountability rather than only individual
                      criminality
                    </span>
                    . The claims focus on whether a prominent megachurch and its interim lead pastor
                    complied with mandated-reporting obligations after learning of past abuse, not
                    on any prior registry flag. If the allegations are accurate, a youth leader with
                      a known allegation was placed or left in roles with access to children for years
                      without civil authorities being notified.
                  </>
                }
                sources={[
                  {
                    label: 'Chicago Sun-Times – watchdog report on Chapelstreet lawsuit',
                    href: 'https://chicago.suntimes.com/the-watchdogs/2025/11/24/chapelstreet-church-geneva-brian-coffey-lawsuit-child-sexual-abuse-baptist-evangelical',
                  },
                  {
                    label: 'Shaw Local – details of Chapelstreet Church youth-leader lawsuit',
                    href: 'https://www.shawlocal.com/kane-county-chronicle/2025/11/03/lawsuit-claims-chapelstreet-church-youth-leader-sexually-abused-boy-after-lead-pastor-told-of-past-allegation/',
                  },
                  {
                    label: 'MinistryWatch – overview of Chapelstreet abuse lawsuit',
                    href: 'https://ministrywatch.com/chicago-area-megachurch-sued-in-sexual-abuse-case/',
                  },
                ]}
              />

              <PullQuote>
                In cases like Celina ISD, Chapelstreet Church, and the Christofferson complaint,
                alleged risk emerges most clearly from{' '}
                <span className="font-semibold">patterns of authority, access, and internal
                knowledge</span>—not from prior sex-offender registration status. Registries remain
                largely reactive labels, applied after the first public case, and often after years
                of reported concerns inside institutions.
              </PullQuote>
            </div>
          </Section>

          {/* Disclaimer */}
          <section className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-xs text-slate-200">
            <div className="mb-2 flex items-center gap-2 font-semibold text-slate-100">
              <Info className="h-4 w-4 text-emerald-300" />
              <span>Methodology & disclaimer</span>
            </div>
            <p className="mb-2">
              This Accountability Watch entry focuses on individuals in positions of institutional
              or household authority—such as teachers, coaches, clergy, administrators, or caregivers—
              whose alleged misconduct was reported during the week of November 23–29, 2025. Only
              reputable sources (e.g., DOJ press releases, state and local news, and court filings)
              are used, and links are provided directly to article pages or official documents, not
              to homepages.
            </p>
            <p className="mb-2">
              All defendants are presumed innocent unless and until proven guilty in a court of law.
              Civil complaints and canonical investigations describe allegations only. Descriptions
              here are non-graphic and use legal or journalistic terminology such as “sexual abuse,”
              “exploitation,” or “child pornography offenses.”
            </p>
            <p>
              Registry notes are based solely on what is mentioned in the cited coverage. When a case
              is marked “No prior registration noted,” that reflects the absence of reporting about
              prior registration or sex-offense convictions in the sources reviewed; it does not
              guarantee that no prior record exists. The aim is to highlight how frequently first-time
              public exposure of alleged abuse by authority figures occurs without any advance warning
              from existing registry systems.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default AccountabilityWatch2025_11_29;
                  