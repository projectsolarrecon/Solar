// src/pages/resources/accountability-watch/2026-10-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Info, Quote, Scale, Shield } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "September 2026 shows the same prevention gap across very different settings: classrooms, churches, treatment rooms, prisons, homes, athletics programs, elected office, and entertainment power all appear in the same month.",
  "The strongest cases are not simply people with impressive job titles. They involve direct trusted access or a clear structural-risk nexus between the alleged conduct and the children, patients, incarcerated people, congregants, or communities those roles were supposed to protect.",
  "Several of the month’s clearest accountability stories concern systems rather than isolated defendants: alleged school concealment, fragmented youth-sports oversight, Title IX failures, clergy-abuse findings, civil settlements, and reopened institutional investigations.",
  "Only a small minority of the included individual cases were publicly identified as involving someone already required to register, underscoring how little registry-centered warning systems explain about where new risk actually emerges.",
];

type Stage =
  | "Arrested / Charged"
  | "Charged / Indicted"
  | "Re-arrest / added charges"
  | "Guilty plea"
  | "Convicted"
  | "Sentenced"
  | "Civil lawsuit filed"
  | "Institutional settlement"
  | "Investigative report"
  | "Resolution agreement"
  | "Investigation reopened"
  | string;

type RegistryStatus =
  | "No prior registration noted"
  | "Previously registered"
  | "Registry status not mentioned";

type SourceLink = {
  label: string;
  href: string;
};

type CaseRowProps = {
  name: string;
  role: string;
  jurisdiction: string;
  stage: Stage;
  date: string;
  summary: React.ReactNode;
  registry: RegistryStatus;
  sources: SourceLink[];
  emoji?: string;
  whyIncluded?: React.ReactNode;
};

function Badge({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-500/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
      {icon}
      {children}
    </span>
  );
}

function StageBadge({ stage }: { stage: Stage }) {
  const tones: Record<string, string> = {
    "Civil lawsuit filed": "border-sky-300 bg-sky-50 text-sky-800",
    "Institutional settlement": "border-sky-300 bg-sky-50 text-sky-800",
    "Investigative report": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Resolution agreement": "border-sky-300 bg-sky-50 text-sky-800",
    "Investigation reopened": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    "Charged / Indicted": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Re-arrest / added charges": "border-rose-300 bg-rose-50 text-rose-800",
    "Guilty plea": "border-violet-300 bg-violet-50 text-violet-800",
    Convicted: "border-violet-300 bg-violet-50 text-violet-800",
    Sentenced: "border-emerald-300 bg-emerald-50 text-emerald-800",
  };

  return (
    <span
      className={
        "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold " +
        (tones[stage] ?? "border-slate-300 bg-slate-50 text-slate-800")
      }
    >
      {stage}
    </span>
  );
}

function RegistryChip({ status }: { status: RegistryStatus }) {
  const isPreviouslyRegistered = status === "Previously registered";
  const display = isPreviouslyRegistered
    ? "Registry: Previously registered"
    : "Registry: No prior registration noted";

  return (
    <span
      className={
        "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold " +
        (isPreviouslyRegistered
          ? "border-rose-300 bg-rose-50 text-rose-800"
          : "border-emerald-300 bg-emerald-50 text-emerald-800")
      }
    >
      {display}
    </span>
  );
}

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-950">{title}</h2>
      {children}
    </section>
  );
}

function Subgroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 mt-8 border-l-4 border-slate-300 bg-slate-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-700 first:mt-0">
      {children}
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
        <Quote className="h-4 w-4" />
        Accountability frame
      </div>
      <p className="text-sm leading-6">{children}</p>
    </div>
  );
}

function CaseRow({
  name,
  role,
  jurisdiction,
  stage,
  date,
  summary,
  registry,
  sources,
  emoji = "",
  whyIncluded,
}: CaseRowProps) {
  return (
    <article className="mb-5 rounded-2xl border border-slate-300/80 bg-slate-50/80 p-4 shadow-md shadow-slate-200/60 last:mb-0 sm:p-5">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          {emoji && <div className="pt-1 text-2xl">{emoji}</div>}
          <div>
            <h3 className="text-lg font-bold text-slate-950">{name}</h3>
            <p className="mt-0.5 text-sm font-semibold text-slate-700">{role}</p>
          </div>
        </div>
        <div className="text-left text-sm text-slate-600 sm:text-right">
          <p className="font-semibold text-slate-800">{date}</p>
          <p>{jurisdiction}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <StageBadge stage={stage} />
        <RegistryChip status={registry} />
      </div>

      <div className="mt-3 text-sm leading-6 text-slate-700">{summary}</div>

      {whyIncluded && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <span className="font-bold">Why included: </span>
          {whyIncluded}
        </div>
      )}

      {sources.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {sources.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:border-slate-500 hover:text-slate-950"
            >
              {source.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function AccountabilityWatch20261001() {
  const pageTitle = "Accountability Watch — September 2026 Roundup | SOLAR";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="September 2026 Accountability Watch roundup tracking authority, access, institutional accountability, status-based legitimacy, household control, and registry-relevance patterns in sexual-offense and child-exploitation cases."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield className="h-3.5 w-3.5" />}>Accountability Watch</Badge>
              <Badge icon={<Scale className="h-3.5 w-3.5" />}>September 2026 roundup</Badge>
              <Badge icon={<FileText className="h-3.5 w-3.5" />}>Authority, access, and failed prevention</Badge>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Accountability Watch — September 2026 Roundup
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              September’s cases show how risk can sit inside ordinary community trust long before
              any public warning system matters. Schools, churches, healthcare, corrections,
              family homes, youth sports, elected office, and entertainment power all appear in
              the same month — not as interchangeable headlines, but as recurring access systems.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              The through-line is authority and legitimacy: who is believed, who gets proximity,
              who can create privacy, and which institutions notice danger only after police,
              courts, reporters, regulators, or survivors force the issue into public view.
            </p>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
              <div className="mb-2 flex items-center gap-2 font-bold uppercase tracking-[0.16em] text-slate-300">
                <Info className="h-4 w-4" />
                Framing note
              </div>
              Arrests, charges, indictments, and civil allegations are not findings of guilt.
              September’s selections were chosen because the underlying role, access, status,
              household control, target population, or institutional response is materially
              relevant to the accountability story. Undercover-decoy cases are included where
              the alleged intended conduct maps directly onto the population a defendant was
              entrusted with in real life.
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <ShareBar title="Accountability Watch — September 2026 Roundup" />

          <div className="mt-6 space-y-6">
            <Section title="At a Glance" eyebrow="What September shows">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                <p>
                  September’s strongest cases span direct role-based access and structural-risk
                  cases. Teachers and coaches allegedly encountered students through school or
                  athletic authority; clergy cases involved congregational or spiritual trust;
                  healthcare cases involved patients in vulnerable settings; corrections cases
                  involved people subject to custodial power; and household cases involved adults
                  with parental, foster, adoptive, or caregiving control.
                </p>
                <p className="mt-3">
                  The month also shows why a narrow “occupation caused the offense” test misses
                  important prevention lessons. A middle-school assistant principal accused in an
                  undercover operation of trying to obtain sex from someone he believed was under
                  14 did not need to target an actual student for his school role to matter. His
                  real-world job placed him in daily authority over children of essentially the
                  same age. That is a structural-risk nexus, not an incidental résumé detail.
                </p>
                <p className="mt-3">
                  Several cases concern systems rather than a single defendant: an alleged
                  “passing the trash” concealment scheme, a federal youth-sports investigation
                  after a SafeSport ban failed to end coaching access, a Title IX resolution,
                  clergy-abuse settlements and findings, a reopened Cornell investigation, and a
                  lawsuit over safeguards at an elite youth-athletics event. These are the places
                  where prevention succeeds or fails before a registry ever becomes relevant.
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {teaserHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <PullQuote>
                Public safety is not just a question of who is already on a list. September’s
                cases repeatedly point to the people and institutions that already had trust,
                access, authority, status, or custody before formal accountability began.
              </PullQuote>
            </Section>

            <Section title="New Arrests & Charges" eyebrow="Criminal procedure">
              <Subgroup>Education / youth sports</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Sean Cassidy"
                role="Former Barrington Christian Academy teacher and athletics coach"
                jurisdiction="Rhode Island / federal"
                stage="Charged / Indicted"
                date="September 2–9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    A federal grand jury indicted Cassidy on child-exploitation, enticement,
                    possession, and false-federal-officer charges after an earlier complaint
                    alleged that he cultivated trust with a student through his teacher and coach
                    roles and falsely claimed FBI authority.
                  </>
                }
                whyIncluded={
                  <>
                    School and coaching access were direct trust mechanisms, and the alleged use
                    of invented federal authority added a second layer of legitimacy.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Rhode Island",
                    href: "https://www.justice.gov/usao-ri/pr/former-barrington-christian-academy-teacher-indicted-federal-child-exploitation-charges",
                  },
                  {
                    label: "Boston Globe",
                    href: "https://www.bostonglobe.com/2026/09/04/metro/ri-barrington-christian-academy-teacher-coach-sex-exploitation-charges/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Allegra Fey Mora"
                role="Former Muleshoe High School teacher"
                jurisdiction="Texas / federal"
                stage="Charged / Indicted"
                date="September 9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    A federal grand jury charged Mora with enticement of a minor in a case
                    involving an alleged sexual relationship with one of her students.
                  </>
                }
                whyIncluded={
                  <>
                    The alleged access point was the teacher-student relationship itself, making
                    school authority central rather than incidental.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of Texas",
                    href: "https://www.justice.gov/usao-ndtx/pr/project-safe-schools-federal-grand-jury-charges-former-high-school-teacher-enticement",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Daniel Bonet-Ojeda"
                role="Assistant principal, James Hillhouse High School"
                jurisdiction="Connecticut"
                stage="Arrested / Charged"
                date="September 14–15, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Bonet-Ojeda was charged with sexual offenses involving a student after police
                    investigated alleged conduct inside his school office. Reporting said the
                    student referred to him as her “school dad.”
                  </>
                }
                whyIncluded={
                  <>
                    Administrative authority had allegedly become quasi-parental trust, showing
                    how school legitimacy can create both access and emotional dependence.
                  </>
                }
                sources={[
                  {
                    label: "NBC Connecticut",
                    href: "https://www.nbcconnecticut.com/news/local/new-haven-high-school-assistant-principal-accused-of-sexually-assaulting-student/3775143/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏈"
                name="Nicholas Alan Codutti"
                role="Former high-school football coach and athletic coordinator"
                jurisdiction="Texas"
                stage="Arrested / Charged"
                date="September 25–26, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Codutti was charged with indecency with a child and sexual performance by a
                    child after allegations involving a former student and athlete from his time
                    at Tomball High School.
                  </>
                }
                whyIncluded={
                  <>
                    The alleged conduct was tied to coach-athlete and school access, including
                    reported encounters on school property.
                  </>
                }
                sources={[
                  {
                    label: "KPRC 2 Houston",
                    href: "https://www.click2houston.com/news/local/2026/09/27/klein-isd-coach-arrested/",
                  },
                  {
                    label: "San Antonio Express-News",
                    href: "https://www.expressnews.com/news/article/former-texas-football-coach-arrested-child-sex-22456985.php",
                  },
                ]}
              />

              <CaseRow
                emoji="🏈"
                name="William Adam Jones"
                role="Former high-school football coach and school security employee"
                jurisdiction="Florida"
                stage="Arrested / Charged"
                date="September 4–8, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Jones was arrested after a warrant alleged that he sexually assaulted a
                    student who had been working under his supervision in a school athletic
                    office.
                  </>
                }
                whyIncluded={
                  <>
                    The alleged victim was under his school-based supervision, making authority
                    and workplace access the relevant prevention issue.
                  </>
                }
                sources={[
                  {
                    label: "Local 10",
                    href: "https://www.local10.com/news/local/2026/09/08/ex-miami-dade-high-school-football-coach-accused-of-raping-student-in-2012/",
                  },
                ]}
              />

              <CaseRow
                emoji="🤼"
                name="Sean Sakaida"
                role="Former Moanalua High School girls’ wrestling coach"
                jurisdiction="Hawaii / federal"
                stage="Arrested / Charged"
                date="September 24–25, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors charged Sakaida with receipt and possession of CSAM after
                    alleging that he received explicit images from a minor with whom he had
                    frequent communications. The FBI later sought additional potential victims.
                  </>
                }
                whyIncluded={
                  <>
                    A girls’ wrestling coach held repeated youth-facing access and athletic
                    authority, and subsequent reporting tied the investigation to an athlete he
                    had coached.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Hawaii",
                    href: "https://www.justice.gov/usao-hi/pr/oahu-girls-wrestling-coach-charged-receipt-and-possession-child-pornography",
                  },
                  {
                    label: "Hawaii News Now",
                    href: "https://www.hawaiinewsnow.com/2026/09/29/federal-prosecutors-seek-keep-former-hawaii-wrestling-coach-behind-bars-charges-involving-child-sexual-abuse-images/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Ruben Guzman"
                role="Middle-school assistant principal"
                jurisdiction="California / federal"
                stage="Charged / Indicted"
                date="September 23, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Guzman was indicted for attempted sex trafficking and attempted enticement
                    after allegedly seeking a commercial sex act with a person he believed was
                    under 14. The person was an undercover decoy; no student was alleged to have
                    been victimized in the charged conduct.
                  </>
                }
                whyIncluded={
                  <>
                    This is a structural-risk case: a middle-school administrator was allegedly
                    seeking a child essentially the same age as the students over whom he held
                    daily authority. The absence of an actual child does not erase that nexus.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of California",
                    href: "https://www.justice.gov/usao-ndca/pr/middle-school-assistant-principal-charged-attempted-sex-trafficking-and-enticement",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Jeffrey Turner Taylor"
                role="Former youth minister, The Falls Church"
                jurisdiction="Virginia / federal"
                stage="Charged / Indicted"
                date="September 14–15, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Taylor was arrested and indicted on federal charges alleging enticement and
                    travel for illicit sexual conduct during years in youth ministry.
                  </>
                }
                whyIncluded={
                  <>
                    Prosecutors allege that spiritual guidance, church activities, and ministry
                    travel created trusted access to boys in the youth program.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of Virginia",
                    href: "https://www.justice.gov/usao-edva/pr/former-falls-church-youth-minister-indicted-sexual-abuse-children",
                  },
                  {
                    label: "Washington Post",
                    href: "https://www.washingtonpost.com/investigations/2026/09/17/former-youth-minister-indicted-sex-abuse-charges-after-fbi-probe/",
                  },
                ]}
              />

              <CaseRow
                emoji="⛪"
                name="Louie B. George II"
                role="Longtime Baptist pastor"
                jurisdiction="Texas"
                stage="Arrested / Charged"
                date="September 9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Texarkana police arrested George on a child sexual-assault charge involving a
                    person who had attended his church as a child. Police said additional
                    potential victims had been identified.
                  </>
                }
                whyIncluded={
                  <>
                    The alleged access originated inside a congregation where pastoral authority
                    and long-term community trust can make scrutiny less likely.
                  </>
                }
                sources={[
                  {
                    label: "KSLA",
                    href: "https://www.ksla.com/2026/09/11/pastor-texarkana-texas-arrested-sexually-assaulting-child/",
                  },
                ]}
              />

              <CaseRow
                emoji="⛪"
                name="Caleb Fischer Ray"
                role="Former church youth leader"
                jurisdiction="Florida"
                stage="Arrested / Charged"
                date="September 24, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Ray was arrested on felony sex charges after police said the alleged victim
                    first met him at church at about age nine and described a years-long grooming
                    process before later sexual conduct.
                  </>
                }
                whyIncluded={
                  <>
                    Youth-ministry access is the core of the allegation: church familiarity,
                    repeated contact, and a trusted youth role allegedly preceded the harm.
                  </>
                }
                sources={[
                  {
                    label: "WCJB",
                    href: "https://www.wcjb.com/2026/09/22/ocala-officers-arrest-youth-pastor-accused-grooming-underage-teen/",
                  },
                  {
                    label: "ClickOrlando",
                    href: "https://www.clickorlando.com/news/local/2026/09/23/ocala-police-former-church-leader-accused-of-grooming-child-for-years/",
                  },
                ]}
              />

              <Subgroup>Law enforcement / corrections</Subgroup>

              <CaseRow
                emoji="🛡️"
                name="Kent Ian Blacklidge"
                role="Homeland Security Investigations special agent"
                jurisdiction="Alabama"
                stage="Charged / Indicted"
                date="September 5–9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Blacklidge surrendered after a grand-jury indictment on rape, sodomy,
                    sexual-abuse, and incest charges involving a juvenile. Reporting said his HSI
                    work included child-exploitation investigations.
                  </>
                }
                whyIncluded={
                  <>
                    The household allegations independently qualify the case, while his
                    child-exploitation enforcement role adds a stark public-trust dimension.
                  </>
                }
                sources={[
                  {
                    label: "Fox News",
                    href: "https://www.foxnews.com/us/hsi-agent-who-investigated-child-exploitation-cases-indicted-rape-child-abuse-charges",
                  },
                ]}
              />

              <CaseRow
                emoji="🔒"
                name="David Perez"
                role="Former FCI Dublin disciplinary hearing officer"
                jurisdiction="California / federal"
                stage="Arrested / Charged"
                date="September 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors filed charges alleging that Perez sexually abused women
                    incarcerated at FCI Dublin while he served as a disciplinary hearing officer.
                  </>
                }
                whyIncluded={
                  <>
                    The allegations concern custodial power itself: prison authority allegedly
                    enabled isolation and access inside an institution already marked by a broader
                    abuse scandal.
                  </>
                }
                sources={[
                  {
                    label: "Bay City News / Danville San Ramon",
                    href: "https://www.danvillesanramon.com/crime/2026/09/20/another-former-dublin-prison-official-charged-in-sex-abuse-case/",
                  },
                ]}
              />

              <CaseRow
                emoji="⚖️"
                name="Eddie Wide"
                role="Former Clark County juvenile probation officer"
                jurisdiction="Nevada"
                stage="Charged / Indicted"
                date="September 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Wide pleaded not guilty after a grand-jury indictment accusing him of sexual
                    misconduct involving youths he was responsible for supervising.
                  </>
                }
                whyIncluded={
                  <>
                    Juvenile probation combines state authority, private access, and control over
                    young people whose liberty and case outcomes can depend on the officer.
                  </>
                }
                sources={[
                  {
                    label: "Las Vegas Review-Journal",
                    href: "https://www.reviewjournal.com/crime/courts/ex-probation-officer-accused-of-sexual-misconduct-with-children-pleads-not-guilty-3890034/",
                  },
                ]}
              />

              <Subgroup>Healthcare / therapy</Subgroup>

              <CaseRow
                emoji="🩺"
                name="Jason Kyle Davis"
                role="Mental-health nurse practitioner"
                jurisdiction="Texas"
                stage="Arrested / Charged"
                date="September 4–9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Davis was charged with sexual assault by a mental-health provider involving
                    an autistic patient.
                  </>
                }
                whyIncluded={
                  <>
                    Mental-health treatment creates unusual privacy and vulnerability, making
                    provider authority and patient dependence central to the accountability frame.
                  </>
                }
                sources={[
                  {
                    label: "KWTX",
                    href: "https://www.kwtx.com/2026/09/09/waco-mental-health-professional-charged-alleged-sexual-assault-autistic-patient/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏟️"
                name="Robert M. Murphy Jr."
                role="Former NC State director of sports medicine and head athletic trainer"
                jurisdiction="North Carolina"
                stage="Charged / Indicted"
                date="September 14–23, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Murphy was indicted and later arrested on numerous charges involving former
                    NC State athletes who alleged sexual contact under the pretext of medical
                    treatment.
                  </>
                }
                whyIncluded={
                  <>
                    Medical legitimacy embedded inside an elite athletics program allegedly
                    created repeated access, privacy, and credibility with student-athletes.
                  </>
                }
                sources={[
                  {
                    label: "Associated Press",
                    href: "https://apnews.com/article/1dd8959631bca9a8618d340ec05c1f2b",
                  },
                ]}
              />

              <CaseRow
                emoji="🩺"
                name="Arpit Saxena"
                role="Former Michigan State University resident physician"
                jurisdiction="Michigan"
                stage="Arrested / Charged"
                date="September 10–25, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Saxena was arrested and later arraigned in a sexual-assault investigation
                    involving former patients. MSU police established a hotline and said
                    additional reports were being evaluated.
                  </>
                }
                whyIncluded={
                  <>
                    The allegations arise from medical appointments, where professional authority
                    and patient vulnerability are the relevant access mechanisms.
                  </>
                }
                sources={[
                  {
                    label: "Michigan State University Police",
                    href: "https://dpps.msu.edu/news-and-alerts/news/msu-police-provide-update-to-sexual-assault-investigation/sexual-assault-investigation-suspect-arraigned",
                  },
                ]}
              />

              <CaseRow
                emoji="🩻"
                name="Gabriel Cruz"
                role="MRI technician"
                jurisdiction="Florida"
                stage="Arrested / Charged"
                date="September 16, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Port St. Lucie police arrested Cruz on a felony sexual-battery charge after a
                    hospital patient alleged she was assaulted during an MRI after receiving
                    medication that made her significantly drowsy.
                  </>
                }
                whyIncluded={
                  <>
                    Clinical access to a medicated patient is a direct healthcare-authority and
                    vulnerability nexus.
                  </>
                }
                sources={[
                  {
                    label: "WPBF",
                    href: "https://www.wpbf.com/article/florida-sexual-battery-patient-mri-hospital-tecnhician/73780264",
                  },
                ]}
              />

              <CaseRow
                emoji="🧠"
                name="Remington Yhap"
                role="Psychotherapist"
                jurisdiction="New York"
                stage="Charged / Indicted"
                date="September 16, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Manhattan prosecutors indicted Yhap on charges alleging months of sexual
                    misconduct culminating in rape of a teenage patient during therapy.
                  </>
                }
                whyIncluded={
                  <>
                    Therapy depends on confidentiality and trust with vulnerable patients; the
                    alleged conduct directly concerns exploitation of that professional role.
                  </>
                }
                sources={[
                  {
                    label: "Manhattan District Attorney",
                    href: "https://manhattanda.org/d-a-bragg-announces-indictment-of-therapist-remington-yhap-for-raping-teenage-patient/",
                  },
                ]}
              />

              <Subgroup>Household / caregiver authority</Subgroup>

              <CaseRow
                emoji="🏠"
                name="Jesse Daniel Skaggs"
                role="Registered nurse, former youth pastor, and parent"
                jurisdiction="Texas"
                stage="Arrested / Charged"
                date="September 8, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Skaggs was charged after allegations involving his infant son. Court-record
                    reporting also said he admitted to his wife that he had sexually assaulted
                    unconscious hospital patients; those hospital allegations were under
                    investigation and were not separate adjudicated charges at the time.
                  </>
                }
                whyIncluded={
                  <>
                    The case spans parental control, healthcare access to incapacitated patients,
                    and prior religious leadership — three different forms of trust and authority.
                  </>
                }
                sources={[
                  {
                    label: "San Antonio Express-News",
                    href: "https://www.expressnews.com/news/article/nurse-admits-sexual-assault-hospital-patients-22423976.php",
                  },
                  {
                    label: "San Antonio Express-News — church role",
                    href: "https://www.expressnews.com/news/article/jesse-skaggs-sex-crime-youth-pastor-purpose-church-22447769.php",
                  },
                ]}
              />

              <CaseRow
                emoji="🏠"
                name="Seth Day"
                role="Psychology professor and Christian author / speaker"
                jurisdiction="Texas"
                stage="Re-arrest / added charges"
                date="September 24–25, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Day was arrested on a child-injury charge and then charged with sexual assault
                    of a child. His wife, Christian author Heather Thompson Day, was separately
                    charged with injury to a child by omission; the available sources do not say
                    that she was charged with a sexual offense.
                  </>
                }
                whyIncluded={
                  <>
                    Household authority is the primary nexus. Academic and religious public
                    legitimacy add context, but the sexual charge against Seth should not be
                    conflated with Heather’s separate omission charge.
                  </>
                }
                sources={[
                  {
                    label: "Religion News Service",
                    href: "https://religionnews.com/2026/09/30/daughter-of-heather-thompson-day-and-seth-day-reported-alleged-abuse-leading-to-arrest/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏠"
                name="Dale Robert Nixon"
                role="Adoptive father, former foster parent, church elder, and youth volunteer"
                jurisdiction="Wisconsin"
                stage="Re-arrest / added charges"
                date="September 2, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Prosecutors added 20 felony CSAM-possession counts after a forensic search of
                    Nixon’s phone. He was already facing charges alleging repeated sexual abuse of
                    his adopted daughter.
                  </>
                }
                whyIncluded={
                  <>
                    Nixon combines household control, foster/adoptive authority, and long-term
                    church and youth-program legitimacy; the new September counts make it an
                    in-window development.
                  </>
                }
                sources={[
                  {
                    label: "Kenosha County Eye — added charges",
                    href: "https://kenoshacountyeye.com/2026/09/03/police-say-more-than-400-child-pornography-files-found-on-daybreak-youth-pastors-phone-20-new-felonies-added/",
                  },
                  {
                    label: "Kenosha County Eye — original case",
                    href: "https://kenoshacountyeye.com/2026/08/27/former-foster-parent-daybreak-church-elder-charged-with-sexually-assaulting-adopted-daughter-more-than-260-times-500k-bail-set/",
                  },
                ]}
              />

              <CaseRow
                emoji="🧸"
                name="Shannon M. Ishler"
                role="Adult with custody or control of young children"
                jurisdiction="Pennsylvania / federal"
                stage="Charged / Indicted"
                date="September 16, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    A federal grand jury charged Ishler with production of CSAM by a person having
                    custody or control of minors and with possession of CSAM, alleging material
                    involving multiple toddlers in her care.
                  </>
                }
                whyIncluded={
                  <>
                    Caregiver authority and custody — not stranger access — are the central facts
                    establishing why the case belongs in this series.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Middle District of Pennsylvania",
                    href: "https://www.justice.gov/usao-mdpa/pr/centre-county-woman-indicted-production-child-pornography-person-having-custody-or",
                  },
                ]}
              />

              <Subgroup>Celebrity / public profile</Subgroup>

              <CaseRow
                emoji="📱"
                name="Braden Eric Peters (“Clavicular”)"
                role="Social-media influencer"
                jurisdiction="Massachusetts"
                stage="Arrested / Charged"
                date="September 8, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Peters was charged with rape and drugging-related offenses in a case involving
                    a teenager who had reportedly been paid to appear in his livestream content.
                    His attorneys have contested the allegations.
                  </>
                }
                whyIncluded={
                  <>
                    Online celebrity, paid participation, and platform status allegedly created a
                    relationship of access and unequal social leverage rather than an ordinary
                    stranger encounter.
                  </>
                }
                sources={[
                  {
                    label: "Los Angeles Times",
                    href: "https://www.latimes.com/entertainment-arts/story/2026-09-22/clavicular-charged-rape-drugging-massachusetts",
                  },
                ]}
              />
            </Section>

            <Section title="Pleas / Convictions / Sentencings" eyebrow="Adjudicated developments">
              <Subgroup>Education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Ray Anthony Waller"
                role="Former Bullard High School teacher"
                jurisdiction="California / federal"
                stage="Guilty plea"
                date="September 15, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Waller pleaded guilty to federal child-exploitation offenses after admitting
                    communications that persuaded a minor to create and send CSAM while he was a
                    teacher at Bullard High School.
                  </>
                }
                whyIncluded={
                  <>
                    The teacher role and minor communications place the case squarely inside the
                    school-trust and youth-access pattern.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of California",
                    href: "https://www.justice.gov/usao-edca/pr/former-bullard-high-school-teacher-pleads-guilty-child-exploitation-offenses",
                  },
                  {
                    label: "GV Wire",
                    href: "https://gvwire.com/2026/09/15/former-bullard-high-teacher-pleads-guilty-to-child-exploitation-charges/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Katherine Albarado"
                role="Former Morgan City High School teacher"
                jurisdiction="Louisiana / federal"
                stage="Sentenced"
                date="September 9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Albarado was sentenced to five years in federal prison after a case involving
                    communications with a 16-year-old student while she worked as a teacher.
                  </>
                }
                whyIncluded={
                  <>
                    Teacher-student access was the relationship through which the federal offense
                    developed.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Western District of Louisiana",
                    href: "https://www.justice.gov/usao-wdla/pr/former-morgan-city-teacher-sentenced-five-years-federal-prison-sexually-enticing",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Todd Baldwin"
                role="Former high-school operations manager"
                jurisdiction="California / federal"
                stage="Guilty plea"
                date="September 22, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Baldwin pleaded guilty to enticement and receipt charges and admitted paying
                    multiple students to create CSAM, including additional uncharged victims.
                  </>
                }
                whyIncluded={
                  <>
                    His school employment placed him inside a student community where institutional
                    familiarity and youth access mattered to the offending pattern.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of California",
                    href: "https://www.justice.gov/usao-ndca/pr/former-high-school-operations-manager-pleads-guilty-enticement-underage-students",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Dwight Chris John"
                role="Former church elder"
                jurisdiction="Alaska / federal"
                stage="Guilty plea"
                date="September 14, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    John pleaded guilty to possessing CSAM. DOJ said a child depicted in material
                    was known to him through an institution in Mexico and that he admitted
                    producing sexually explicit photographs during trips there. He was already
                    serving a state sentence for sexually abusing another minor.
                  </>
                }
                whyIncluded={
                  <>
                    Religious and institutional access crossed borders and created familiarity
                    with a vulnerable child; his prior conviction is noted without inferring an
                    unreported registry status.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO District of Alaska",
                    href: "https://www.justice.gov/usao-ak/pr/former-ketchikan-church-elder-pleads-guilty-possessing-child-pornography",
                  },
                ]}
              />

              <CaseRow
                emoji="🌎"
                name="Jeriah Mast"
                role="Former Christian Aid Ministries missionary"
                jurisdiction="Ohio / federal"
                stage="Guilty plea"
                date="September 8, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Mast pleaded guilty to two federal counts of engaging in illicit sexual
                    conduct with minors in Haiti during years that included missionary travel.
                  </>
                }
                whyIncluded={
                  <>
                    Missionary status and cross-border religious legitimacy created access to
                    vulnerable children far from ordinary community oversight.
                  </>
                }
                sources={[
                  {
                    label: "DOJ Office of Public Affairs",
                    href: "https://www.justice.gov/opa/pr/ohio-missionary-enters-guilty-plea-child-exploitation-crimes-haiti",
                  },
                  {
                    label: "Associated Press",
                    href: "https://apnews.com/article/6ae3c891cf201027827f1fc051e08c0e",
                  },
                ]}
              />

              <CaseRow
                emoji="⛪"
                name="Eddy Noelsaint"
                role="Former pastor"
                jurisdiction="Florida"
                stage="Sentenced"
                date="September 11, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Noelsaint was sentenced to 30 years after conviction for sexual battery
                    involving a congregant who had sought him out for spiritual guidance.
                  </>
                }
                whyIncluded={
                  <>
                    Spiritual counseling and pastoral authority created the trust relationship
                    through which the victim approached him.
                  </>
                }
                sources={[
                  {
                    label: "ClickOrlando",
                    href: "https://www.clickorlando.com/news/local/2026/09/11/osceola-pastor-sentenced-to-30-years-in-prison-for-raping-congregant/",
                  },
                  {
                    label: "WESH",
                    href: "https://www.wesh.com/article/osceola-county-pastor-sentenced-30-years-sexual-battery/73690700",
                  },
                ]}
              />

              <Subgroup>Law enforcement / corrections</Subgroup>

              <CaseRow
                emoji="🚓"
                name="Jeremy Francis Plonski"
                role="Former Minnesota State Trooper"
                jurisdiction="Minnesota / federal"
                stage="Sentenced"
                date="September 8, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Plonski was sentenced to 27 years in federal prison for production and
                    distribution offenses. DOJ said he produced 23 videos and wore his State
                    Patrol uniform in some while sexually abusing the minor victim.
                  </>
                }
                whyIncluded={
                  <>
                    This is an unusually direct authority nexus: the uniform and badge legitimacy
                    were literally present within part of the offending conduct.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO District of Minnesota",
                    href: "https://www.justice.gov/usao-mn/pr/minnesota-state-trooper-sentenced-27-years-imprisonment-production-and-distribution",
                  },
                  {
                    label: "MPR News",
                    href: "https://www.mprnews.org/story/2026/09/09/jeremy-plonski-former-minnesota-state-trooper-sentenced-27-years-child-sexual-abuse-charges",
                  },
                ]}
              />

              <CaseRow
                emoji="🔒"
                name="Danny L. Spyker"
                role="Former federal corrections officer and cook supervisor"
                jurisdiction="Illinois / federal"
                stage="Sentenced"
                date="September 14, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Spyker was sentenced to three years and five months after a jury convicted him
                    of sexually abusing two people incarcerated at FCI Thomson while they were
                    under prison staff’s custodial, supervisory, and disciplinary authority.
                  </>
                }
                whyIncluded={
                  <>
                    The power imbalance is formal and total: incarceration placed the victims
                    under the authority of the institution and its employees.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of Illinois",
                    href: "https://www.justice.gov/usao-ndil/pr/former-federal-prison-employee-sentenced-more-three-years-prison-sexually-abusing-two",
                  },
                ]}
              />

              <Subgroup>Household / caregiver authority</Subgroup>

              <CaseRow
                emoji="🧸"
                name="Trinity Joy Johnson"
                role="Caregiver"
                jurisdiction="Florida / federal"
                stage="Guilty plea"
                date="September 15, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Johnson pleaded guilty to federal production, distribution, and possession
                    charges after admitting that she created exploitative material involving a
                    toddler she was supposed to be caring for.
                  </>
                }
                whyIncluded={
                  <>
                    Ordinary caregiving trust supplied the access; no institutional title or
                    stranger contact was necessary.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of Florida",
                    href: "https://www.justice.gov/usao-ndfl/pr/gainesville-woman-pleads-guilty-federal-production-and-distribution-child-pornography",
                  },
                  {
                    label: "Independent Florida Alligator",
                    href: "https://www.alligator.org/article/2026/09/gainesville-woman-pleads-guilty-child-porn",
                  },
                ]}
              />

              <CaseRow
                emoji="🏠"
                name="Andrew Wade Case"
                role="Adult with custody and care of a child"
                jurisdiction="Indiana / federal"
                stage="Sentenced"
                date="September 8, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Case was sentenced to 27 years and three months for federal child-exploitation
                    offenses involving a child under 12 who was in his custody and care.
                  </>
                }
                whyIncluded={
                  <>
                    The defining access mechanism was custody inside an existing caregiving
                    relationship.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of Indiana",
                    href: "https://www.justice.gov/usao-sdin/pr/columbus-man-receives-27-year-federal-sentence-sexually-exploiting-child-his-care",
                  },
                ]}
              />

              <CaseRow
                emoji="🏠"
                name="Terry Mead Jr."
                role="Caregiver already under a sex-offender registration duty"
                jurisdiction="New York / federal"
                stage="Convicted"
                date="September 16, 2026"
                registry="Previously registered"
                summary={
                  <>
                    A federal jury convicted Mead of sexually exploiting a four-year-old child
                    while the child was in his care, along with distribution and possession
                    offenses. DOJ said he was under a duty to register at the time.
                  </>
                }
                whyIncluded={
                  <>
                    Mead is an important comparison case because he was already subject to
                    registration, yet the relevant opportunity still arose through private
                    caregiving access.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of New York",
                    href: "https://www.justice.gov/usao-ndny/pr/sex-offender-convicted-sexually-exploiting-child",
                  },
                ]}
              />

              <CaseRow
                emoji="🏠"
                name="Keynan Santos"
                role="Adult caregiver already subject to lifetime registration"
                jurisdiction="Indiana / federal"
                stage="Sentenced"
                date="September 24, 2026"
                registry="Previously registered"
                summary={
                  <>
                    Santos was sentenced to 44 years and one month after pleading guilty to child
                    sexual-exploitation offenses and committing a felony while required to
                    register. DOJ said the child was under 12 and in his care and custody.
                  </>
                }
                whyIncluded={
                  <>
                    Like Mead, this case shows that a registry can coexist with serious private
                    caregiving access; the preventive failure was not simply lack of public
                    identification.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of Indiana",
                    href: "https://www.justice.gov/usao-sdin/pr/anderson-man-serve-more-four-decades-federal-prison-child-sexual-abuse-crimes",
                  },
                ]}
              />

              <CaseRow
                emoji="🏠"
                name="Jesse Lane Mitchell / Jacklyn Paige Roberts"
                role="Live-in caregiver and children’s mother"
                jurisdiction="Oklahoma / federal"
                stage="Sentenced"
                date="September 28, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Mitchell was sentenced for coercion and enticement involving a preteen he was
                    caring for while the child’s mother was incarcerated. Roberts was separately
                    sentenced after admitting she knew of the abuse and continued allowing
                    Mitchell access to the children.
                  </>
                }
                whyIncluded={
                  <>
                    This case combines household caregiving authority with an admitted failure by
                    another responsible adult to remove access after learning of abuse.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of Oklahoma",
                    href: "https://www.justice.gov/usao-ndok/pr/collinsville-man-sentenced-sexual-abuse-preteen-mother-imprisoned-allowing-access",
                  },
                ]}
              />

              <Subgroup>Youth sports / trusted adult</Subgroup>

              <CaseRow
                emoji="🥊"
                name="Willie Torres-Gerena"
                role="Former boxing coach and trusted father figure"
                jurisdiction="Puerto Rico / federal"
                stage="Convicted"
                date="September 3, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    A federal jury convicted Torres-Gerena of transporting a minor with intent to
                    engage in criminal sexual activity. DOJ said the former boxing coach was a
                    trusted father figure to the 16-year-old victim.
                  </>
                }
                whyIncluded={
                  <>
                    The relationship was not stranger contact; coaching familiarity had developed
                    into father-figure trust.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO District of Puerto Rico",
                    href: "https://www.justice.gov/usao-pr/pr/60-year-old-man-arecibo-found-guilty-child-exploitation",
                  },
                ]}
              />

              <Subgroup>Politics / civic leadership</Subgroup>

              <CaseRow
                emoji="🏛️"
                name="Justin Eichorn"
                role="Former Minnesota state senator"
                jurisdiction="Minnesota / federal"
                stage="Sentenced"
                date="September 23, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Eichorn was sentenced to 16 months after pleading guilty to attempted
                    possession of CSAM stemming from an undercover operation in which he believed
                    he was communicating with a 17-year-old girl.
                  </>
                }
                whyIncluded={
                  <>
                    His elected office did not create the decoy contact, so this is not a
                    child-access case like Guzman. It belongs through the separate public-trust
                    and civic-legitimacy lane: a sitting state senator held significant public
                    authority when the conduct occurred.
                  </>
                }
                sources={[
                  {
                    label: "MPR News",
                    href: "https://www.mprnews.org/story/2026/09/23/justin-eichorn-sentenced-to-16-months-in-federal-prison",
                  },
                  {
                    label: "Minnesota Star Tribune",
                    href: "https://www.startribune.com/ex-state-sen-justin-eichorn-sentenced-to-16-months-in-prison-in-child-solicitation-case/601892158",
                  },
                ]}
              />

              <Subgroup>Celebrity / entertainment power</Subgroup>

              <CaseRow
                emoji="🎬"
                name="Harvey Weinstein"
                role="Film producer and entertainment-industry power broker"
                jurisdiction="New York"
                stage="Sentenced"
                date="September 23, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Weinstein was sentenced to 15 years in state prison following his 2025 retrial
                    conviction for a criminal sexual act.
                  </>
                }
                whyIncluded={
                  <>
                    The accountability relevance is status-based access: industry power,
                    professional gatekeeping, and elite social legitimacy were central to the
                    broader pattern of repeated opportunity described in years of reporting and
                    litigation.
                  </>
                }
                sources={[
                  {
                    label: "Manhattan District Attorney",
                    href: "https://manhattanda.org/d-a-bragg-statement-on-sentencing-of-harvey-weinstein/",
                  },
                ]}
              />
            </Section>

            <Section title="Civil / Administrative Actions" eyebrow="Formal non-criminal accountability">
              <Subgroup>Youth sports / business legitimacy</Subgroup>

              <CaseRow
                emoji="👟"
                name="Nike Elite Program / National Scholastic Athletics Foundation"
                role="Elite high-school athletics program and event organizers"
                jurisdiction="Oregon / federal civil lawsuit"
                stage="Civil lawsuit filed"
                date="September 16, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    A federal lawsuit alleged that an underage elite athlete was sexually
                    assaulted while attending a Nike-backed event in Beaverton and that the
                    program failed to provide adequate safeguards. The allegations remain
                    unproven civil claims.
                  </>
                }
                whyIncluded={
                  <>
                    The accountability question is organizational control over an elite youth
                    environment: who created the setting, who supervised it, and what safeguards
                    existed before the alleged harm.
                  </>
                }
                sources={[
                  {
                    label: "Federal docket via Justia",
                    href: "https://dockets.justia.com/docket/oregon/ordce/3%3A2026cv01929/196585",
                  },
                  {
                    label: "OregonLive report via Yahoo",
                    href: "https://www.yahoo.com/news/videos/lawsuit-alleges-sexual-assault-during-210846089.html",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Archdiocese of Chicago"
                role="Catholic archdiocese"
                jurisdiction="Illinois"
                stage="Institutional settlement"
                date="September 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    The archdiocese reached settlements totaling about $5.4 million with nine
                    people who accused eight priests of childhood sexual abuse. Reporting noted
                    that four of the eight priests were not on the archdiocese’s public list of
                    clergy it deemed credibly accused.
                  </>
                }
                whyIncluded={
                  <>
                    The settlements are accountability events in their own right, while the gap
                    between settled allegations and an institution’s own public accounting raises
                    a separate transparency question.
                  </>
                }
                sources={[
                  {
                    label: "Chicago Sun-Times",
                    href: "https://chicago.suntimes.com/religion/2026/09/10/sexual-abuse-claims-priests-archdiocese-chicago",
                  },
                  {
                    label: "NBC Chicago",
                    href: "https://www.nbcchicago.com/news/local/roman-catholic-archdiocese-of-chicago-settles-9-sex-abuse-claims-paying-5-4m/3988180/",
                  },
                ]}
              />

              <Subgroup>Education / Title IX oversight</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Virginia Beach City Public Schools"
                role="Public school division"
                jurisdiction="Virginia / federal administrative"
                stage="Resolution agreement"
                date="September 17, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    The U.S. Department of Education’s Office for Civil Rights announced a
                    resolution agreement after determining that the district had failed to
                    adequately investigate and record reports of sexual misconduct against
                    students during the reviewed period.
                  </>
                }
                whyIncluded={
                  <>
                    This is prevention infrastructure: reporting, investigation, recordkeeping,
                    training, and institutional response are exactly the systems meant to act
                    before repeated harm becomes normalized.
                  </>
                }
                sources={[
                  {
                    label: "U.S. Department of Education",
                    href: "https://www.ed.gov/about/news/press-release/us-department-of-education-secures-resolution-agreement-virginia-beach-city-public-schools-restore-protections-against-sexual-misconduct",
                  },
                  {
                    label: "Virginia Mercury",
                    href: "https://virginiamercury.com/2026/09/21/virginia-beach-schools-civil-rights-office-reach-agreement-over-sexual-misconduct-investigations/",
                  },
                ]}
              />
            </Section>

            <Section title="Institutional Shielding & Findings" eyebrow="Systems, concealment, and oversight failure">
              <Subgroup>Education / alleged concealment</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Michael Raymond Roell / Wendy Bailey"
                role="Elementary teacher and former principal"
                jurisdiction="Texas / federal"
                stage="Charged / Indicted"
                date="September 16–18, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    A federal grand jury indicted Roell and former principal Wendy Bailey on an
                    alleged scheme to conceal Roell’s prior abuse and misconduct history so he
                    could obtain a special-education teaching position in another district.
                  </>
                }
                whyIncluded={
                  <>
                    The indictment is about the alleged shielding mechanism itself — the kind of
                    “passing the trash” failure that can move risk between schools while formal
                    background systems appear satisfied.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of Texas",
                    href: "https://www.justice.gov/usao-ndtx/pr/project-safe-schools-federal-grand-jury-returns-7-count-indictment-against-elementary",
                  },
                ]}
              />

              <Subgroup>Clergy / systemic findings</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Fall River, Springfield, and Worcester dioceses"
                role="Catholic dioceses reviewed by the Massachusetts Attorney General"
                jurisdiction="Massachusetts"
                stage="Investigative report"
                date="September 30, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    The Massachusetts Attorney General released a major report identifying more
                    than 270 Catholic clerics accused of sexually abusing nearly 1,000 children
                    and documenting institutional failures across three dioceses.
                  </>
                }
                whyIncluded={
                  <>
                    The point is not a single criminal case. It is a state-level accounting of
                    how institutions handled allegations over decades and where internal systems
                    failed to protect children.
                  </>
                }
                sources={[
                  {
                    label: "Massachusetts Attorney General",
                    href: "https://www.mass.gov/news/ag-campbell-releases-report-on-child-sexual-abuse-in-fall-river-springfield-and-worcester-dioceses",
                  },
                  {
                    label: "The Guardian",
                    href: "https://www.theguardian.com/us-news/2026/sep/30/catholic-clergy-massachusetts-sexual-abuse-report",
                  },
                ]}
              />

              <Subgroup>Higher education / institutional response</Subgroup>

              <CaseRow
                emoji="🎓"
                name="Cornell University / Chi Phi fraternity"
                role="University and fraternity accountability matter"
                jurisdiction="New York"
                stage="Investigation reopened"
                date="September 16 & 28, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    A civil lawsuit alleging a 2024 gang rape at a fraternity was followed by the
                    reopening of the criminal investigation and plans to present the matter to a
                    grand jury. Cornell said its own Title IX process had produced sanctions; the
                    accused have disputed the allegations.
                  </>
                }
                whyIncluded={
                  <>
                    The September development raises questions about how a university,
                    fraternity, campus process, and local criminal-justice system each responded
                    to a serious allegation inside an institutionally created social environment.
                  </>
                }
                sources={[
                  {
                    label: "Reuters",
                    href: "https://www.reuters.com/legal/government/prosecutors-reopen-investigation-into-alleged-2024-gang-rape-cornell-university-2026-09-28/",
                  },
                  {
                    label: "Washington Post",
                    href: "https://www.washingtonpost.com/education/2026/09/28/cornell-rape-allegations-prompt-prosecutor-reopen-criminal-investigation/",
                  },
                ]}
              />

              <Subgroup>Youth sports / fragmented oversight</Subgroup>

              <CaseRow
                emoji="🏐"
                name="Ryan Richardson"
                role="Volleyball coach previously banned by SafeSport"
                jurisdiction="Texas / federal investigation"
                stage="Investigative report"
                date="September 1, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    ProPublica reported that Homeland Security Investigations opened a child-
                    exploitation probe after earlier reporting showed Richardson continued
                    coaching teenage girls despite a SafeSport finding that made him permanently
                    ineligible.
                  </>
                }
                whyIncluded={
                  <>
                    This is a systems story about fragmented youth-sports governance: a formal
                    misconduct ban did not necessarily end access because other organizations and
                    structures could still permit coaching.
                  </>
                }
                sources={[
                  {
                    label: "ProPublica",
                    href: "https://www.propublica.org/article/volleyball-coach-ryan-richardson-homeland-security-investigations-child-exploitation",
                  },
                  {
                    label: "Washington Post",
                    href: "https://www.washingtonpost.com/sports/2026/09/01/volleyball-coach-ryan-richardson-faces-federal-investigation/",
                  },
                ]}
              />
            </Section>

            <Section title="Watchlist" eyebrow="Developments to monitor">
              <ul className="space-y-3 text-sm leading-6 text-slate-700">
                <li>
                  <span className="font-bold text-slate-950">Roell / Bailey and Project Safe Schools:</span>{" "}
                  watch for motions, trial developments, district records, and evidence about who knew of prior concerns and how hiring information moved between schools.
                </li>
                <li>
                  <span className="font-bold text-slate-950">Robert Murphy / NC State:</span>{" "}
                  monitor additional complainants, criminal-case discovery, university response, and interaction with the athletes’ civil claims.
                </li>
                <li>
                  <span className="font-bold text-slate-950">FCI Dublin / David Perez:</span>{" "}
                  watch for additional defendants, supervisory evidence, and whether the prosecution adds to the already substantial institutional record at the closed prison.
                </li>
                <li>
                  <span className="font-bold text-slate-950">Ryan Richardson / youth-sports oversight:</span>{" "}
                  monitor the HSI investigation and any response from SafeSport, AAU, JVA, USA Volleyball, or other organizations whose overlapping rules govern coaching access.
                </li>
                <li>
                  <span className="font-bold text-slate-950">Massachusetts diocesan report:</span>{" "}
                  monitor diocesan reforms, civil claims, legislative responses, and any administrative or criminal actions that follow the Attorney General’s findings.
                </li>
                <li>
                  <span className="font-bold text-slate-950">Cornell / Chi Phi:</span>{" "}
                  monitor the reopened criminal investigation, grand-jury process, external review, and any changes to university or fraternity oversight.
                </li>
              </ul>
            </Section>

            <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm sm:p-7">
              <h2 className="mb-3 text-xl font-bold text-slate-950">Legal and registry note</h2>
              <p>
                Arrests, charges, indictments, civil allegations, and investigative findings are
                not convictions. Defendants are presumed innocent unless and until proven guilty
                in court. Civil and institutional findings should be read according to their own
                legal posture and source language.
              </p>
              <p className="mt-3">
                Registry-status notes are limited to reviewed public source material. “No prior
                registration noted” means the cited sources reviewed for this roundup did not
                identify a prior registration history; it is not an independent nationwide
                registry search. Under the series display convention, entries whose sources do
                not mention registry status are also displayed as “Registry: No prior
                registration noted.” Only Terry Mead Jr. and Keynan Santos are identified in the
                cited sources as already subject to registration requirements before the
                September event.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
