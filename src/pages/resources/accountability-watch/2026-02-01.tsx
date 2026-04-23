// src/pages/resources/accountability-watch/2026-02-01.tsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Scale, Shield, FileText, Quote, Info } from 'lucide-react';
import ShareBar from '../../../components/solar/ShareBar';

export const teaserHighlights = [
  'January 2026 clustered around law-enforcement, educator, clergy, and medical-authority defendants, with many cases reaching sentencing rather than just arrest.',
  'Several included cases are CSAM prosecutions involving teachers, doctors, and other trusted professionals, reinforcing that authority-linked risk often sits outside registry-centered stereotypes.',
  'A Winnsboro ISD concealment case widened the month beyond primary offenders, highlighting institutional shielding and delayed accountability inside a school system.',
];

type Stage =
  | 'Arrested / Charged'
  | 'Indicted'
  | 'Investigative subcommittee opened'
  | 'Civil lawsuit filed'
  | 'Convicted'
  | 'Guilty plea'
  | 'Sentenced'
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
  <span className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
    {children}
  </span>
);

const StageBadge: React.FC<{ stage: Stage }> = ({ stage }) => {
  let tone = 'bg-slate-50 text-slate-900 ring-slate-200';

  if (stage === 'Civil lawsuit filed') {
    tone = 'bg-sky-50 text-sky-900 ring-sky-200';
  } else if (stage === 'Arrested / Charged') {
    tone = 'bg-rose-50 text-rose-900 ring-rose-200';
  } else if (stage === 'Indicted') {
    tone = 'bg-indigo-50 text-indigo-900 ring-indigo-200';
  } else if (stage === 'Investigative subcommittee opened') {
    tone = 'bg-indigo-50 text-indigo-900 ring-indigo-200';
  } else if (stage === 'Convicted') {
    tone = 'bg-violet-50 text-violet-900 ring-violet-200';
  } else if (stage === 'Sentenced') {
    tone = 'bg-emerald-50 text-emerald-900 ring-emerald-200';
  }

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${tone}`}>
      {stage}
    </span>
  );
};

const RegistryChip: React.FC<{ status: CaseRowProps['registry'] }> = ({ status }) => {
  let tone = 'bg-emerald-50 text-emerald-900 ring-emerald-200';
  let label = 'No prior registration noted';

  if (status === 'Previously registered') {
    tone = 'bg-rose-50 text-rose-900 ring-rose-200';
    label = 'Previously registered';
  } else if (status === 'No prior registration noted') {
    label = 'No prior registration noted';
  } else if (status === 'Registry status not mentioned') {
    label = 'No prior registration noted';
  }

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${tone}`}>
      Registry: {label}
    </span>
  );
};

const Section: React.FC<{
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:p-8">
    <div className="mb-5 flex items-center gap-3">
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-200 ring-1 ring-slate-800">
          {icon}
        </div>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
    </div>
    <div className="space-y-5 text-slate-200">{children}</div>
  </section>
);

const PullQuote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm leading-7 text-amber-100">
    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
      <Quote size={14} />
      Editorial frame
    </div>
    <p>{children}</p>
  </div>
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
  <article className="rounded-2xl border border-slate-800/90 bg-slate-900/55 p-5 md:p-6">
    <div className="flex items-start gap-4">
      <div className="mt-0.5 text-2xl" aria-hidden="true">
        {emoji}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-tight text-white">
              <span className="font-bold">{name}</span>
            </h3>
            <p className="mt-1 text-sm text-slate-300">{role}</p>
          </div>

          <div className="shrink-0 text-left md:text-right">
            <div className="text-sm font-medium text-slate-100">{date}</div>
            <div className="text-sm text-slate-400">{jurisdiction}</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <StageBadge stage={stage} />
          <RegistryChip status={registry} />
        </div>

        <div className="mt-4 text-sm leading-7 text-slate-200">
          {summary}
        </div>

        {whyIncluded && (
          <div className="mt-4 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
              Why this case is included
            </div>
            <div className="text-sm leading-7 text-amber-50">{whyIncluded}</div>
          </div>
        )}

        {sources.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {sources.map((source) => (
              <a
                key={`${name}-${source.href}`}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 underline underline-offset-2 hover:bg-blue-500/20"
              >
                {source.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  </article>
);

const AccountabilityWatch2026_02_01: React.FC = () => {
  const pageTitle = 'Accountability Watch — January 2026 Roundup';

  return (
    <>
      <Helmet>
        <title>{pageTitle} · SOLAR</title>
        <meta
          name="description"
          content="Monthly roundup of January 2026 authority, access, and institutional-accountability cases involving sexual offenses and child exploitation."
        />
      </Helmet>

      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_32%),linear-gradient(180deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <header className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/50 md:p-8">
            <div className="flex flex-wrap gap-3">
              <Badge>Accountability Watch</Badge>
              <Badge>Monthly roundup</Badge>
              <Badge>Authority &amp; access</Badge>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
              <div>
                <div className="mb-4 flex items-center gap-3 text-slate-300">
                  <Scale size={20} />
                  <span className="text-sm font-medium uppercase tracking-[0.18em]">January 2026 catch-up</span>
                </div>

                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  Authority, legitimacy, and institutional-access cases for January 2026
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                  Monthly snapshot of arrests, pleas, sentencings, and institutional-accountability developments involving
                  defendants who held meaningful roles of trust, authority, legitimacy, or institutional access. This roundup
                  uses the broader January standard: inclusion can rest on the defendant’s trusted role even when the charged
                  conduct was not necessarily directed at someone in that person’s immediate care.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Jurisdictions: U.S. federal and state; local institutions. Window: January 1, 2026, 12:00 AM through
                  January 31, 2026, 11:59 PM (America/New_York).
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    <Shield size={14} />
                    Presumption of innocence
                  </div>
                  <p className="text-sm leading-7 text-slate-200">
                    Defendants are presumed innocent unless and until proven guilty. Entries marked as guilty pleas,
                    convictions, or sentencings reflect the procedural stage reached in the cited reporting.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    <Info size={14} />
                    Registry note
                  </div>
                  <p className="text-sm leading-7 text-slate-200">
                    Registry status is shown only where the reporting clearly supports it. When reporting did not mention prior
                    registration, the chip display remains intentionally conservative.
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="mt-6">
            <ShareBar
              title={pageTitle}
              url="/resources/accountability-watch/2026-02-01"
              description="January 2026 roundup of authority, access, and institutional-accountability cases involving sexual offenses and child exploitation."
            />
          </div>

          <div className="mt-8 space-y-8">
            <Section title="At a Glance" icon={<FileText size={18} />}>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-slate-200">
                <li>
                  January 2026 produced a heavy concentration of law-enforcement-linked cases, including current or former
                  officers in Washington, D.C., North Carolina, Missouri, Georgia, and New York.
                </li>
                <li>
                  Educator-linked defendants were also prominent: Jesus Moore, Carl David Innmon, Martin Bayhan, Jack Wilder,
                  and Erika L. Morton all reached January plea or sentencing events, while the Winnsboro ISD matter centered
                  on alleged concealment by school leadership.
                </li>
                <li>
                  The broader standard surfaced several medical-trust cases that a narrower pass might underweight, including
                  Khursheed Haider, Christopher Sheerer, Jesse Roger Armstrong, and Calvin Eriksen.
                </li>
                <li>
                  The month was not limited to primary-offender stories. The Winnsboro ISD case stands out as an institutional
                  shielding and oversight-failure entry, not a direct sexual-offense prosecution against the superintendents
                  themselves.
                </li>
                <li>
                  Only one included case was clearly described in-source as involving a previously registered offender:
                  Linwood Barnhill. Most others were not presented that way, reinforcing the editorial point that risk often
                  emerges outside registry-centered assumptions.
                </li>
              </ul>

              <PullQuote>
                January’s mix is unusually useful for the project’s broader frame: police, educators, clergy, legislators,
                physicians, and school executives all appear in one month, with both direct offending and institutional
                shielding represented.
              </PullQuote>
            </Section>

            <Section title="New Arrests & Charges" icon={<Scale size={18} />}>
              <CaseRow
                name="Withman Benjamin"
                role="Cobb County police officer"
                jurisdiction="Georgia"
                stage="Arrested / Charged"
                date="January 14, 2026"
                registry="Registry status not mentioned"
                emoji="🚔"
                summary={
                  <>
                    Georgia authorities announced the arrest of Cobb County Police Officer Withman Benjamin on a charge of
                    sexual battery against a child under 16. The GBI said the case arose from a child-abuse investigation and
                    that the matter would be provided to the district attorney for prosecution.
                  </>
                }
                whyIncluded={
                  <>
                    This is a straightforward authority-and-access case involving a current officer, a child-victim allegation,
                    and a direct official source.
                  </>
                }
                sources={[
                  {
                    label: 'GBI release',
                    href: 'https://gbi.georgia.gov/press-releases/2026-01-14/gbi-arrests-cobb-county-police-officer-sexual-battery-against-child',
                  },
                ]}
              />

              <CaseRow
                name="Michael William Mohr"
                role="Reverend / church official"
                jurisdiction="Illinois / Eastern District of Missouri"
                stage="Arrested / Charged"
                date="January 29, 2026"
                registry="Registry status not mentioned"
                emoji="⛪"
                summary={
                  <>
                    Federal prosecutors announced the arrest of an Illinois church official on a production charge after
                    investigators alleged hidden-camera recordings involving juveniles. The charge places the case squarely in
                    a clergy-and-institutional-access context.
                  </>
                }
                whyIncluded={
                  <>
                    The defendant’s religious role and church-linked legitimacy make this a strong fit for the project’s
                    authority framework.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-edmo/pr/illinois-reverend-arrested-accused-producing-child-pornography',
                  },
                ]}
              />
            </Section>
<Section title="Pleas / Convictions / Sentencings" icon={<Shield size={18} />}>
              <CaseRow
                name="Linwood Barnhill"
                role="Former Metropolitan Police Department officer"
                jurisdiction="Washington, D.C."
                stage="Sentenced"
                date="January 9, 2026"
                registry="Previously registered"
                emoji="🚨"
                summary={
                  <>
                    A former D.C. police officer was sentenced to 27 years in prison after prosecutors said he recruited minor
                    girls to engage in commercial sex. The DOJ release described Barnhill as a registered sex offender at the
                    time of sentencing.
                  </>
                }
                whyIncluded={
                  <>
                    Clear law-enforcement authority case involving direct exploitation of minors, repeat offending, and the one
                    included January source that clearly identified prior registry history.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-dc/pr/former-metropolitan-police-department-officer-sentenced-27-years-sex-trafficking-minors',
                  },
                ]}
              />

              <CaseRow
                name="Jesus Moore"
                role="Basketball coach at Lawrence High School / former school employee"
                jurisdiction="Massachusetts / New Hampshire"
                stage="Sentenced"
                date="January 13, 2026"
                registry="Registry status not mentioned"
                emoji="🏫"
                summary={
                  <>
                    A former school employee was sentenced to 121 months in federal prison for traveling with intent to engage
                    in illicit sexual conduct with a student. The DOJ release said the case involved transporting a student
                    across state lines, supplying alcohol, and sexual conduct when the student could not consent.
                  </>
                }
                whyIncluded={
                  <>
                    Textbook educator-and-coach abuse-of-trust case involving direct student access and misuse of institutional
                    position.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-nh/pr/former-school-employee-sentenced-121-months-federal-prison-travel-intent-engage-illicit',
                  },
                ]}
              />

              <CaseRow
                name="August Price Gildehaus"
                role="Former Grain Valley police officer"
                jurisdiction="Missouri"
                stage="Sentenced"
                date="January 28, 2026"
                registry="Registry status not mentioned"
                emoji="🚓"
                summary={
                  <>
                    A former police officer was sentenced to 20 years in federal prison for enticing a 15-year-old girl and
                    producing sexual images and videos. The case joins a broader January cluster of police-linked misconduct.
                  </>
                }
                whyIncluded={
                  <>
                    Strong police-authority case involving minor exploitation and image production, with clear public-trust and
                    legitimacy concerns.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-wdmo/pr/former-police-officer-sentenced-20-years-child-sexual-exploitation',
                  },
                ]}
              />

              <CaseRow
                name="Carl David Innmon"
                role="Former Austin ISD elementary teacher"
                jurisdiction="Austin, Texas"
                stage="Guilty plea"
                date="January 6, 2026"
                registry="Registry status not mentioned"
                emoji="📚"
                summary={
                  <>
                    A former elementary school teacher pleaded guilty in federal court to possessing child sexual abuse
                    material. The January event was a plea rather than a student-abuse charge, but the school role remains
                    central to the editorial frame.
                  </>
                }
                whyIncluded={
                  <>
                    Under the broadened standard, the trusted elementary-school role itself is material: this is an authority
                    case even without a current-student allegation in the plea event.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-wdtx/pr/former-austin-isd-elementary-teacher-pleads-guilty-possessing-child-sexual-abuse',
                  },
                ]}
              />

              <CaseRow
                name="Martin Bayhan"
                role="Former Catholic-school teacher"
                jurisdiction="Ohio"
                stage="Sentenced"
                date="January 29, 2026"
                registry="Registry status not mentioned"
                emoji="🎓"
                summary={
                  <>
                    Bayhan was sentenced to seven years in prison for possessing child pornography. The DOJ release also noted
                    that he had been fired decades earlier for hands-on sex offenses against students while serving as a
                    Catholic-school teacher.
                  </>
                }
                whyIncluded={
                  <>
                    The January event was a possession sentencing, but the source directly ties the case back to prior abuse in
                    a school setting, strengthening the institutional-risk frame.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-sdoh/pr/former-teacher-sentenced-7-years-prison-possessing-child-pornography',
                  },
                ]}
              />

              <CaseRow
                name="Jack Wilder"
                role="Former teacher"
                jurisdiction="New Jersey"
                stage="Sentenced"
                date="January 27, 2026"
                registry="Registry status not mentioned"
                emoji="🧑‍🏫"
                summary={
                  <>
                    A former teacher was sentenced to 78 months in federal prison for receiving and possessing child sexual
                    abuse material. The January sentencing again puts a trusted school-role defendant in a CSAM-centered case.
                  </>
                }
                whyIncluded={
                  <>
                    Another educator case where the trusted role remains editorially significant even though the January event
                    was a CSAM sentence rather than a current student-abuse allegation.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-nj/pr/union-county-former-teacher-sentenced-78-months-receiving-and-possessing-child',
                  },
                ]}
              />

              <CaseRow
                name="Calvin Eriksen"
                role="Surgeon"
                jurisdiction="Wisconsin"
                stage="Sentenced"
                date="January 29, 2026"
                registry="Registry status not mentioned"
                emoji="🩺"
                summary={
                  <>
                    Dr. Calvin Eriksen was sentenced to 72 months in federal prison for distributing child pornography. The
                    case reflects how child-exploitation offending can appear inside high-trust medical roles.
                  </>
                }
                whyIncluded={
                  <>
                    Medical authority and public legitimacy make this more than a generic CSAM case for Accountability Watch’s
                    institutional-risk frame.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-edwi/pr/surgeon-sentenced-6-years-federal-prison-distribution-child-pornography',
                  },
                ]}
              />

              <CaseRow
                name="Khursheed Haider"
                role="Pulmonologist / doctor"
                jurisdiction="California"
                stage="Sentenced"
                date="January 9, 2026"
                registry="Registry status not mentioned"
                emoji="🏥"
                summary={
                  <>
                    A Placer County doctor was sentenced to nine years in prison for distribution of child sexual abuse
                    material. Federal prosecutors explicitly highlighted the significance of prosecuting defendants in positions
                    of trust like Haider.
                  </>
                }
                whyIncluded={
                  <>
                    The physician role is central here. The source itself frames Haider as part of the positions-of-trust
                    problem the project tracks.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-edca/pr/placer-county-doctor-sentenced-9-years-prison-distribution-child-sexual-abuse-material',
                  },
                ]}
              />
<CaseRow
                name="Christopher Sheerer"
                role="Former Boston Children’s Hospital anesthesiology fellow; previously affiliated with Johns Hopkins"
                jurisdiction="Massachusetts"
                stage="Sentenced"
                date="January 29, 2026"
                registry="Registry status not mentioned"
                emoji="🏛️"
                summary={
                  <>
                    A former pediatric cardiac anesthesiology fellow at Boston Children’s Hospital was sentenced to 22 years
                    in prison for producing, possessing, and distributing child sexual abuse material. DOJ also noted his prior
                    fellowship affiliation with Johns Hopkins.
                  </>
                }
                whyIncluded={
                  <>
                    High-salience institution-linked case involving elite pediatric-hospital credentials, underscoring how
                    prestige and professional legitimacy can mask serious risk.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-ma/pr/former-boston-childrens-hospital-anesthesiologist-sentenced-22-years-prison-child',
                  },
                ]}
              />

              <CaseRow
                name="Stuart J. McHenry"
                role="Former Steuben County sheriff’s deputy"
                jurisdiction="New York"
                stage="Sentenced"
                date="January 15, 2026"
                registry="Registry status not mentioned"
                emoji="🚔"
                summary={
                  <>
                    A former sheriff’s deputy was sentenced to 108 months in prison on child-pornography charges. Prosecutors
                    said the case also involved seeking, receiving, and distributing files.
                  </>
                }
                whyIncluded={
                  <>
                    Law-enforcement legitimacy remains editorially significant even where the January event centers on CSAM
                    rather than direct badge-mediated abuse.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-wdny/pr/former-steuben-county-sheriffs-deputy-going-prison-child-pornography-charges',
                  },
                ]}
              />

              <CaseRow
                name="Jesse Roger Armstrong"
                role="Former physician / psychiatric resident"
                jurisdiction="Florida"
                stage="Sentenced"
                date="January 23, 2026"
                registry="Registry status not mentioned"
                emoji="⚕️"
                summary={
                  <>
                    A former physician was sentenced to 90 months in federal prison for distribution of child pornography.
                    Like other January healthcare entries, the case highlights child-exploitation risk within professional
                    authority roles.
                  </>
                }
                whyIncluded={
                  <>
                    Another healthcare-authority case where the trusted role matters even without a patient-specific allegation
                    in the January event.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-ndfl/pr/former-physician-sentenced-over-seven-years-federal-prison-distribution-child',
                  },
                ]}
              />

              <CaseRow
                name="Erika L. Morton"
                role="Former kindergarten teacher"
                jurisdiction="Missouri"
                stage="Guilty plea"
                date="January 28, 2026"
                registry="Registry status not mentioned"
                emoji="🧒"
                summary={
                  <>
                    A former kindergarten teacher pleaded guilty to possessing child pornography and admitted sending child
                    sexual abuse material through Kik. The offense did not need to involve a current classroom victim for the
                    institutional-trust point to matter.
                  </>
                }
                whyIncluded={
                  <>
                    A clear educator-role case supporting the broader editorial point that trusted school actors do not have to
                    offend directly against children in their classrooms for the institutional-risk issue to be real.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-edmo/pr/missouri-kindergarten-teacher-admits-possessing-child-pornography',
                  },
                ]}
              />

              <CaseRow
                name="David S. Becker"
                role="Former paramedic / firefighter"
                jurisdiction="Missouri"
                stage="Sentenced"
                date="January 7, 2026"
                registry="Registry status not mentioned"
                emoji="🚒"
                summary={
                  <>
                    Becker was sentenced to 151 months in prison for attempted coercion and enticement of a minor and child
                    pornography-related charges. The case places a former first responder inside the same January authority and
                    legitimacy pattern seen across police, education, clergy, and medicine.
                  </>
                }
                whyIncluded={
                  <>
                    Trusted first-responder role plus serious child-sex-related charges make this a strong example of how
                    public-service legitimacy does not insulate against exploitative offending.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-edmo/pr/st-louis-county-man-sentenced-151-months-prison-child-sex-related-charges',
                  },
                ]}
              />
            </Section>

            <Section title="Institutional / Political Misconduct" icon={<Info size={18} />}>
              <CaseRow
                name="Rayshawn Deon Taylor"
                role="Former Durham Police Department corporal"
                jurisdiction="Durham, North Carolina"
                stage="Sentenced"
                date="January 15, 2026"
                registry="Registry status not mentioned"
                emoji="⚖️"
                summary={
                  <>
                    A former Durham police officer was sentenced after admitting he sexually assaulted a man during a welfare
                    check and threatened arrest if the victim reported it. The DOJ release also said Taylor deleted a
                    translation application used during the encounter and did not activate his body-worn camera.
                  </>
                }
                whyIncluded={
                  <>
                    This is direct misuse of police authority, with sexual abuse carried out through official power and
                    coercive efforts to suppress disclosure.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/opa/pr/former-durham-police-department-officer-sentenced-sexual-assault',
                  },
                ]}
              />

              <CaseRow
                name='Robert John "RJ" May III'
                role="Former South Carolina state lawmaker"
                jurisdiction="South Carolina"
                stage="Sentenced"
                date="January 14, 2026"
                registry="Registry status not mentioned"
                emoji="🏛️"
                summary={
                  <>
                    A former state legislator was sentenced to more than 17 years in federal prison for distributing child
                    sexual abuse material. The case carries unusual editorial value because the defendant held elected
                    legitimacy rather than a classic caregiving role.
                  </>
                }
                whyIncluded={
                  <>
                    Public-official case showing that serious child-exploitation risk can sit outside registry-centered
                    stereotypes and outside the most familiar institutional-abuse categories.
                  </>
                }
                sources={[
                  {
                    label: 'DOJ release',
                    href: 'https://www.justice.gov/usao-sc/pr/former-sc-lawmaker-sentenced-federal-prison-distributing-child-sexual-abuse-material',
                  },
                ]}
              />

              <CaseRow
                name="Brian David Wilcox and Aaron David Nation"
                role="Former and current Winnsboro ISD superintendents"
                jurisdiction="Texas"
                stage="Arrested / Charged"
                date="January 12–18, 2026"
                registry="Registry status not mentioned"
                emoji="🏫"
                summary={
                  <>
                    Arrest affidavits reported by KLTV alleged that the former superintendent and current superintendent at
                    Winnsboro ISD failed to report two separate sex crimes involving district employees, and that the current
                    superintendent also refused to turn over evidence and wiped his phone ahead of a meeting with a Texas
                    Ranger.
                  </>
                }
                whyIncluded={
                  <>
                    Important shielding and oversight-failure case. The inclusion logic here is institutional concealment, not
                    primary sexual offending by the superintendents themselves.
                  </>
                }
                sources={[
                  {
                    label: 'KLTV reporting',
                    href: 'https://www.kltv.com/2026/01/13/documents-allege-winnsboro-school-leaders-covered-up-2-child-sex-crimes/',
                  },
                ]}
              />
            </Section>
<Section title="Watchlist" icon={<Quote size={18} />}>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-slate-200">
                <li>
                  <strong>Winnsboro ISD:</strong> watch for additional administrator or staff charges, civil litigation, and
                  more detail on the two underlying employee sex-crime matters.
                </li>
                <li>
                  <strong>Michael William Mohr:</strong> watch for added counts, additional victims, or broader church and
                  institutional questions as the federal case develops.
                </li>
                <li>
                  <strong>Withman Benjamin:</strong> watch for added state charges, prior-complaint reporting, or departmental
                  oversight issues.
                </li>
                <li>
                  <strong>Medical-trust cluster:</strong> Sheerer, Haider, Armstrong, and Eriksen are worth tracking for
                  licensing, credentialing, hospital, or medical-board consequences.
                </li>
                <li>
                  <strong>Law-enforcement cluster:</strong> Barnhill, Taylor, Gildehaus, McHenry, and Benjamin collectively
                  make police-linked offending one of January’s clearest patterns to monitor for appeals, decertification,
                  civil claims, or department-response fallout.
                </li>
              </ul>
            </Section>

            <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-sm leading-7 text-slate-300 md:p-8">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <Info size={14} />
                Framing note
              </div>
              <p>
                This roundup tracks accountability developments involving people in positions of trust, authority, legitimacy,
                or institutional access. Inclusion does not imply all cases are identical, and it does not imply that prior
                sex-offender registration was present or would have functioned as an effective warning system.
              </p>
              <p className="mt-3">
                Defendants are presumed innocent unless and until proven guilty. Registry-status notes are limited to what the
                cited reporting clearly states and should not be read as a substitute for the full procedural history of any
                case.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountabilityWatch2026_02_01;