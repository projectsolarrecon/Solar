// src/pages/resources/accountability-watch/2026-09-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Info, Quote, Scale, Shield } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "August 2026 was education-heavy, but the stronger pattern was broader: schools, churches, healthcare settings, public-safety roles, military status, entertainment work, and institutional settlements all created or concealed access.",
  "Teacher, coach, principal, aide, and school-staff cases remained prominent, especially where youth-facing roles gave adults credibility, proximity, privacy, or repeated access before criminal intervention.",
  "Clergy and healthcare cases sharpened the month’s accountability frame: youth ministry, pastoral authority, hospice chaplaincy, at-home therapy, and medical care all appeared as high-trust access points.",
  "Civil and institutional items showed how accountability often arrives through diocesan discipline, school settlements, bankruptcy disputes, survivor claims, and public pressure rather than prevention before harm.",
];

type Stage =
  | "Arrested / Charged"
  | "Charged / Indicted"
  | "Re-arrest / added charges"
  | "Guilty plea"
  | "Convicted"
  | "Sentenced"
  | "Civil lawsuit filed"
  | "Administrative action"
  | "Institutional settlement"
  | "Institutional findings"
  | string;

type RegistryStatus =
  | "No prior registration noted"
  | "Previously registered";

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
    "Administrative action": "border-sky-300 bg-sky-50 text-sky-800",
    "Institutional settlement": "border-sky-300 bg-sky-50 text-sky-800",
    "Institutional findings": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    "Charged / Indicted": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Re-arrest / added charges": "border-rose-300 bg-rose-50 text-rose-800",
    "Guilty plea": "border-violet-300 bg-violet-50 text-violet-800",
    Convicted: "border-violet-300 bg-violet-50 text-violet-800",
    Sentenced: "border-emerald-300 bg-emerald-50 text-emerald-800",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
        tones[stage] ?? "border-slate-300 bg-slate-50 text-slate-800"
      }`}
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
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
        isPreviouslyRegistered
          ? "border-rose-300 bg-rose-50 text-rose-800"
          : "border-emerald-300 bg-emerald-50 text-emerald-800"
      }`}
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

export default function AccountabilityWatch20260901() {
  const pageTitle = "Accountability Watch — August 2026 Roundup | SOLAR";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="August 2026 Accountability Watch roundup tracking authority, access, institutional accountability, status-based legitimacy, and registry-relevance patterns in sexual-offense and child-exploitation cases."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield className="h-3.5 w-3.5" />}>Accountability Watch</Badge>
              <Badge icon={<Scale className="h-3.5 w-3.5" />}>August 2026 roundup</Badge>
              <Badge icon={<FileText className="h-3.5 w-3.5" />}>Authority and access</Badge>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Accountability Watch — August 2026 Roundup
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              August’s cases belong together because they show how serious harm can emerge
              through trusted systems before any public warning mechanism matters: schools,
              youth sports, churches, medical care, law enforcement, military status,
              entertainment work, and institutional settlements all appear in the same month.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              The pattern is not a generic list of allegations. It is a map of credibility,
              proximity, privacy, status, and institutional handling — the conditions that can
              place risk inside ordinary community trust while public-safety narratives remain
              fixed on strangers and registries.
            </p>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
              <div className="mb-2 flex items-center gap-2 font-bold uppercase tracking-[0.16em] text-slate-300">
                <Info className="h-4 w-4" />
                Framing note
              </div>
              Allegations are not findings of guilt. Entries are included because the approved
              August case set involved school authority, youth-facing access, clergy or
              religious legitimacy, healthcare trust, badge or public-safety authority, military
              status, entertainment-industry access, wealth or public-profile credibility, or
              formal institutional-accountability action.
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <ShareBar title="Accountability Watch — August 2026 Roundup" />

          <div className="mt-6 space-y-6">
            <Section title="At a Glance" eyebrow="What August shows">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                <p>
                  August 2026 was education-heavy, but not school-only. Teachers, coaches,
                  principals, aides, and school-linked defendants remained prominent because
                  those roles can create direct proximity to children. But the month’s stronger
                  accountability story is broader: clergy trust, healthcare authority,
                  public-safety legitimacy, military status, entertainment access, and
                  institutional settlements all belonged in the same frame.
                </p>
                <p className="mt-3">
                  The cases cluster around systems that gave adults credibility or access before
                  formal accountability began. A youth pastor, an at-home occupational therapist,
                  a physician, a sheriff’s sergeant, former public-safety personnel, a military
                  security-forces member, and an actor/producer all show why prevention cannot be
                  reduced to checking a public registry.
                </p>
                <p className="mt-3">
                  The recurring registry label is intentionally simple: no prior registration
                  noted. Where public reporting does not identify prior registration, the
                  meaningful access point was not a registry warning. It was trust, authority,
                  professional legitimacy, household or institutional proximity, public status,
                  or delayed institutional response.
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
                August’s cases are not best understood as isolated crime items. They show how
                risk can sit inside trusted roles and high-legitimacy spaces — classrooms,
                locker rooms, churches, patient care, public-safety agencies, entertainment work,
                and institutional settlement systems — before public accountability arrives.
              </PullQuote>
            </Section>

            <Section title="New Arrests & Charges" eyebrow="Criminal procedure">
              <Subgroup>Education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Eric Sanville"
                role="Elementary school teacher, North Penn School District"
                jurisdiction="Pennsylvania / federal"
                stage="Arrested / Charged"
                date="August 27, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors alleged manufacture and attempted manufacture of child
                    sexual abuse material involving children contacted through messaging apps
                    while Sanville was employed as an elementary school teacher.
                  </>
                }
                whyIncluded={
                  <>
                    A current elementary teacher role makes this a direct school-authority and
                    child-access case, with alleged exploitation tied to the trust and legitimacy
                    that adults can hold before criminal intervention.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of Pennsylvania",
                    href: "https://www.justice.gov/usao-edpa/pr/elementary-school-teacher-arrested-child-pornography-charge",
                  },
                ]}
              />

              <CaseRow
                emoji="🏛️"
                name="David Elliott Pritt"
                role="Ex-teacher and former West Virginia state legislator"
                jurisdiction="West Virginia / federal"
                stage="Charged / Indicted"
                date="August 19, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    A federal grand jury indicted Pritt for alleged child sexual exploitation,
                    coercion and enticement, and witness tampering.
                  </>
                }
                whyIncluded={
                  <>
                    The case combines educator status with elected-office legitimacy, making
                    school trust, civic credibility, and alleged child exploitation central to
                    the accountability frame.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of West Virginia",
                    href: "https://www.justice.gov/usao-sdwv/pr/federal-grand-jury-indicts-ex-teacher-and-former-state-legislator-child-sexual",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Sadie M. Flores"
                role="Graves County Middle School teacher"
                jurisdiction="Kentucky"
                stage="Arrested / Charged"
                date="August 7, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Flores was charged with felony grooming of a minor after a school-district
                    report of an alleged improper relationship with a student.
                  </>
                }
                whyIncluded={
                  <>
                    The alleged conduct arose through teacher-student access, underscoring how
                    school trust can create proximity before criminal accountability begins.
                  </>
                }
                sources={[
                  {
                    label: "Spectrum News 1 Kentucky",
                    href: "https://spectrumnews1.com/ky/louisville/news/2026/08/12/graves-county-grooming-arrest",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Eric Cato"
                role="Former principal, KIPP Washington Heights Middle School"
                jurisdiction="New York"
                stage="Charged / Indicted"
                date="August 12–20, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Cato was indicted and arraigned on sexual-abuse and child-endangerment
                    charges involving students at the school.
                  </>
                }
                whyIncluded={
                  <>
                    Principal-level authority over students makes this an institutional-access
                    case; reported prior concerns make school oversight and prevention failure
                    important follow-up questions.
                  </>
                }
                sources={[
                  {
                    label: "Gothamist",
                    href: "https://gothamist.com/news/manhattan-middle-school-principal-charged-with-sexually-abusing-kids",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Paul Pearcy"
                role="Former MacArthur High School teacher"
                jurisdiction="Texas"
                stage="Charged / Indicted"
                date="August 27–31, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Pearcy was indicted on aggravated sexual assault of a child and
                    indecency-with-a-child charges.
                  </>
                }
                whyIncluded={
                  <>
                    Former educator status and alleged child sexual-abuse charges place the case
                    inside the school-authority and youth-access pattern.
                  </>
                }
                sources={[
                  {
                    label: "San Antonio Express-News",
                    href: "https://www.expressnews.com/news/article/neisd-teacher-child-sexual-assault-indictment-22410997.php",
                  },
                ]}
              />

              <Subgroup>Education / youth sports</Subgroup>

              <CaseRow
                emoji="🏃"
                name="Douglas Melvin MacAlpine"
                role="Former Rock Hill teacher / track coach"
                jurisdiction="South Carolina / federal"
                stage="Charged / Indicted"
                date="August 10, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    A federal grand jury indicted MacAlpine for possession and distribution of
                    CSAM; local reporting identified prior school and coaching roles and earlier
                    state allegations.
                  </>
                }
                whyIncluded={
                  <>
                    Teacher and coach roles created youth-facing legitimacy, and the reported
                    history makes this a clear authority-and-access case.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO South Carolina",
                    href: "https://www.justice.gov/usao-sc/pr/former-rock-hill-teacher-indicted-possession-and-distribution-child-sexual-abuse",
                  },
                ]}
              />

              <CaseRow
                emoji="🏅"
                name="Paul A. Farnsworth"
                role="Longtime teacher and coach, Cabrillo Unified / Half Moon Bay High"
                jurisdiction="California"
                stage="Arrested / Charged"
                date="August 14, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Farnsworth was arrested after a former student reported abuse beginning when
                    he was her coach; investigators said there may be additional victims.
                  </>
                }
                whyIncluded={
                  <>
                    The alleged abuse beginning in a coaching relationship shows the prevention
                    gap created by long-term teacher-coach authority and institutional trust.
                  </>
                }
                sources={[
                  {
                    label: "CBS San Francisco",
                    href: "https://www.cbsnews.com/sanfrancisco/news/coach-teacher-arrested-alleged-sex-crimes-former-student-half-moon-bay-high-school-cabrillo-unified/",
                  },
                ]}
              />

              <CaseRow
                emoji="⚽"
                name="Lewis Connor Stott"
                role="Former Galloway School teacher, PE teacher, substitute, and soccer coach"
                jurisdiction="Texas"
                stage="Re-arrest / added charges"
                date="August 7 and August 14, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Stott was charged with continuous sexual abuse of a young child; later
                    reporting said additional alleged victims came forward.
                  </>
                }
                whyIncluded={
                  <>
                    Multiple school and coaching roles allegedly created repeated access to
                    young children, making this a major school-safeguarding and
                    institutional-monitoring item.
                  </>
                }
                sources={[
                  {
                    label: "Friendswood Police activity report",
                    href: "https://www.ci.friendswood.tx.us/CivicSend/ViewMessage/message/297560",
                  },
                ]}
              />

              <CaseRow
                emoji="🤼"
                name="Corey Bellino"
                role="Carroll High School teacher and head wrestling coach"
                jurisdiction="Texas"
                stage="Arrested / Charged"
                date="August 19, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Bellino was charged with sexual assault of a child after a former student
                    accused him of abuse while she was underage.
                  </>
                }
                whyIncluded={
                  <>
                    Teacher-coach authority and alleged abuse of a student fit the recurring
                    pattern of trusted school-based access.
                  </>
                }
                sources={[
                  {
                    label: "KRIS 6 News",
                    href: "https://www.kristv.com/news/local-news/in-your-neighborhood/corpus-christi/southside/ccisd-employee-charged-with-sexual-assault-of-a-child-after-former-students-outcry",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Jared Barber"
                role="Former Cypress Christian School teacher and coach"
                jurisdiction="Texas / Georgia"
                stage="Charged / Indicted"
                date="August 18, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    A Georgia indictment alleged grooming-related and obscene-material
                    communications with a minor; reporting tied Barber to school coaching and
                    teaching roles.
                  </>
                }
                whyIncluded={
                  <>
                    School and coaching legitimacy are central to the access frame, even where
                    the alleged conduct is described through communications rather than
                    in-school abuse.
                  </>
                }
                sources={[
                  {
                    label: "Houston Chronicle",
                    href: "https://www.chron.com/news/article/texas-coach-indicted-messages-minor-22411029.php",
                  },
                ]}
              />

              <Subgroup>Education / business or professional legitimacy</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Austin Knoob"
                role="Former Carbondale Community High School teacher’s aide; former nightclub owner"
                jurisdiction="Illinois / federal"
                stage="Arrested / Charged"
                date="August 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Knoob was charged with child sexual exploitation after an FBI affidavit
                    alleged online coercion of a minor and connections to broader exploitation
                    networks.
                  </>
                }
                whyIncluded={
                  <>
                    The school-employee and local business-profile elements make this more than
                    an online exploitation allegation; the case also raises questions about
                    adult legitimacy, community standing, and access.
                  </>
                }
                sources={[
                  {
                    label: "MyJournalCourier",
                    href: "https://www.myjournalcourier.com/news/article/educator-accused-exploiting-girl-violent-online-22404846.php",
                  },
                ]}
              />

              <Subgroup>Law enforcement / corrections</Subgroup>

              <CaseRow
                emoji="🛡️"
                name="Justin Thomas Lee Forman"
                role="Stafford County sheriff’s sergeant"
                jurisdiction="Virginia / federal"
                stage="Arrested / Charged"
                date="August 3, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    A sheriff’s sergeant was charged with receipt of CSAM after an FBI search
                    and seizure of electronic devices; he entered a not-guilty plea at an
                    August 3 hearing.
                  </>
                }
                whyIncluded={
                  <>
                    Badge authority and public trust are central because law-enforcement roles
                    carry credibility, power, and community legitimacy.
                  </>
                }
                sources={[
                  {
                    label: "FBI Richmond",
                    href: "https://www.fbi.gov/contact-us/field-offices/richmond/news/stafford-county-sheriffs-deputy-arrested-for-receipt-of-child-sexual-abuse-material",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Jason Coulter"
                role="Youth pastor, Green River Pentecostal Church; funeral director"
                jurisdiction="Kentucky"
                stage="Arrested / Charged"
                date="August 21, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Coulter was charged with sexual-exploitation offenses involving a minor.
                  </>
                }
                whyIncluded={
                  <>
                    Youth-pastor access and church-based trust make the religious-institution
                    role central, not incidental.
                  </>
                }
                sources={[
                  {
                    label: "WNKY",
                    href: "https://www.wnky.com/lincoln-county-youth-pastor-charged-with-sexual-exploitation-charges-involving-minor/",
                  },
                ]}
              />

              <CaseRow
                emoji="⛪"
                name="Jeremiah E. Swaw"
                role="Former Hopkinsville youth pastor; guardian / power-of-attorney figure"
                jurisdiction="Kentucky"
                stage="Arrested / Charged"
                date="August 21, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Swaw was charged under Kentucky’s grooming-minor law after reports involving
                    a 16-year-old; reporting stated Swaw and his spouse held guardianship power
                    of attorney.
                  </>
                }
                whyIncluded={
                  <>
                    The case combines youth-ministry trust with household or guardianship
                    access, placing it squarely in the authority-and-control pattern.
                  </>
                }
                sources={[
                  {
                    label: "K105",
                    href: "https://www.k105.com/2026/08/21/second-youth-pastor-this-week-accused-of-having-inappropriate-relationship-with-juvenile-from-church/",
                  },
                ]}
              />

              <CaseRow
                emoji="⛪"
                name="Timothy Chaneyfield"
                role="Pastor, St. James United American Free Will Baptist Church; hospice chaplain"
                jurisdiction="Florida"
                stage="Arrested / Charged"
                date="Reported August 4–6, 2026 after July 29 arrest"
                registry="No prior registration noted"
                summary={
                  <>
                    Authorities alleged sexual abuse involving a 14-year-old; reporting also
                    identified Chaneyfield’s hospice chaplain role and prior school substitute
                    work.
                  </>
                }
                whyIncluded={
                  <>
                    Pastor and hospice chaplain roles are direct legitimacy and trust markers,
                    and reports that investigators sought information about possible additional
                    victims make this a significant monitoring item.
                  </>
                }
                sources={[
                  {
                    label: "People",
                    href: "https://people.com/florida-pastor-arrested-in-alleged-sexual-abuse-of-14-year-old-12035456",
                  },
                  {
                    label: "MySuncoast",
                    href: "https://www.mysuncoast.com/2026/08/04/hiv-positive-winter-haven-pastor-charged-with-lewd-battery-14-year-old/",
                  },
                ]}
              />

              <Subgroup>Healthcare / therapy</Subgroup>

              <CaseRow
                emoji="🩺"
                name="Lewis Trudell Barber"
                role="At-home occupational therapist"
                jurisdiction="Texas"
                stage="Arrested / Charged"
                date="August 10–11, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Barber was charged with continuous sexual abuse of a child under 14;
                    reporting said the alleged victim was an autistic child patient under his
                    care.
                  </>
                }
                whyIncluded={
                  <>
                    This is one of the strongest non-education August cases because the alleged
                    access came through a therapeutic care relationship with a vulnerable child
                    patient.
                  </>
                }
                sources={[
                  {
                    label: "San Antonio Express-News",
                    href: "https://www.expressnews.com/news/article/therapist-sexual-abuse-girl-autism-san-antonio-22383262.php",
                  },
                  {
                    label: "ABC 33/40",
                    href: "https://abc3340.com/news/nation-world/at-home-therapist-accused-of-sexually-assaulting-autistic-girl-for-8-years-report-says-san-antonio-texas-investigation-evidence-police",
                  },
                ]}
              />

              <CaseRow
                emoji="🩺"
                name="Michael Rousseau"
                role="Physician, The Urology Group"
                jurisdiction="Ohio"
                stage="Arrested / Charged"
                date="August 5, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Rousseau was charged after a patient alleged sexual assault during medical
                    care.
                  </>
                }
                whyIncluded={
                  <>
                    Medical authority and patient vulnerability are central access factors; the
                    case shows why prevention cannot be reduced to public registry monitoring.
                  </>
                }
                sources={[
                  {
                    label: "Fox19",
                    href: "https://www.fox19.com/2026/08/05/doctor-charged-after-admitting-sexually-assaulting-disabled-patient-court-docs/",
                  },
                ]}
              />

              <Subgroup>Celebrity / public profile; business / professional legitimacy</Subgroup>

              <CaseRow
                emoji="🎬"
                name="Shane Ryan Gledhill"
                role="Actor / producer"
                jurisdiction="California"
                stage="Re-arrest / added charges"
                date="August 3–15, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Gledhill was charged with 24 felony counts in an alleged child sexual-abuse
                    case; investigators said online casting calls and film work were allegedly
                    used to contact minors.
                  </>
                }
                whyIncluded={
                  <>
                    Entertainment-industry status, casting access, and professional legitimacy
                    allegedly created opportunity, making this a strong status-access case
                    rather than a generic celebrity-crime item.
                  </>
                }
                sources={[
                  {
                    label: "Fox News",
                    href: "https://www.foxnews.com/entertainment/actor-charged-24-felony-counts-alleged-child-sexual-abuse-case",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions — additional charge development</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Andrew Showers"
                role="Former Madison priest"
                jurisdiction="Wisconsin"
                stage="Re-arrest / added charges"
                date="August 20–24, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Showers faced new grooming and bail-jumping charges while out on bond after
                    an undercover Wausau investigation; Diocese of Madison statements were
                    quoted in reporting on the new allegations.
                  </>
                }
                whyIncluded={
                  <>
                    A former priest already facing child-sex-crime charges allegedly engaged in
                    new conduct while on bond, making the case relevant to monitoring,
                    supervision, and institutional accountability.
                  </>
                }
                sources={[
                  {
                    label: "BishopAccountability Abuse Tracker",
                    href: "https://www.bishop-accountability.org/category/news-archive/abusetracker/",
                  },
                ]}
              />
            </Section>

            <Section title="Pleas / Convictions / Sentencings" eyebrow="Case outcomes">
              <Subgroup>Education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="John Aaron Gass"
                role="Former D.C. high school history teacher"
                jurisdiction="District of Columbia / federal"
                stage="Guilty plea"
                date="August 10, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Gass pleaded guilty to charges tied to sexual abuse of a minor victim.
                  </>
                }
                whyIncluded={
                  <>
                    Former teacher status and a minor-victim exploitation case create direct
                    institutional-access relevance.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO District of Columbia",
                    href: "https://www.justice.gov/usao-dc/pr/former-dc-high-school-teacher-pleads-guilty-coercing-and-enticing-minor",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Benjamin Smith"
                role="Former Durango middle school teacher"
                jurisdiction="Colorado / federal"
                stage="Sentenced"
                date="August 18, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Smith was sentenced to 40 years after pleading guilty to production of child
                    pornography, coercion, and enticement; DOJ said he admitted victimizing 37
                    adolescent boys, including some who had been his students.
                  </>
                }
                whyIncluded={
                  <>
                    This is a severe multi-victim teacher-access case, showing how trusted
                    school roles can create opportunity before accountability arrives.
                  </>
                }
                sources={[
                  {
                    label: "FBI Denver",
                    href: "https://www.fbi.gov/contact-us/field-offices/denver/news/former-durango-middle-school-teacher-sentenced-to-40-years-in-prison-after-pleading-guilty-to-production-of-child-pornography-coercion-and-enticement-charges",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Dennis Adlai Hernandez"
                role="Former elementary school teacher / school-district employee"
                jurisdiction="Missouri / federal"
                stage="Guilty plea"
                date="August 19, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Hernandez pleaded guilty to 13 child-pornography offenses involving 12
                    minor victims.
                  </>
                }
                whyIncluded={
                  <>
                    Former elementary educator status and multi-victim child-exploitation
                    conduct make this a direct authority-and-access case.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Western District of Missouri",
                    href: "https://www.justice.gov/usao-wdmo/pr/former-elementary-school-teacher-pleads-guilty-child-pornography-offenses",
                  },
                ]}
              />

              <Subgroup>Law enforcement / public safety / military</Subgroup>

              <CaseRow
                emoji="🛡️"
                name="Otilio Green"
                role="Former police officer"
                jurisdiction="Connecticut / federal"
                stage="Sentenced"
                date="August 14, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Green was sentenced to 72 months for a federal child-exploitation offense
                    involving CSAM.
                  </>
                }
                whyIncluded={
                  <>
                    A former police officer’s child-exploitation conviction implicates public
                    trust and badge-linked legitimacy.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Connecticut",
                    href: "https://www.justice.gov/usao-ct/pr/former-police-officer-sentenced-7-years-federal-court-child-exploitation-offense",
                  },
                ]}
              />

              <CaseRow
                emoji="🚒"
                name="Dylan Jamescupp"
                role="Former Kansas emergency responder / EMT"
                jurisdiction="Kansas / federal"
                stage="Guilty plea"
                date="August 5, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Jamescupp pleaded guilty to distribution of child pornography; DOJ said
                    phone location data indicated receipt of CSAM while working at the Kansas
                    City, Kansas Fire Department.
                  </>
                }
                whyIncluded={
                  <>
                    Emergency-responder status carries public trust, and DOJ’s workplace-location
                    detail makes the public-safety setting relevant.
                  </>
                }
                sources={[
                  {
                    label: "FBI Kansas City",
                    href: "https://www.fbi.gov/contact-us/field-offices/kansascity/news/former-kansas-first-responder-pleads-guilty-to-child-pornography-distribution",
                  },
                ]}
              />

              <CaseRow
                emoji="🛟"
                name="Bradford Simmons"
                role="Former Coast Guard rescue swimmer"
                jurisdiction="Alabama / federal"
                stage="Sentenced"
                date="August 11, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Simmons was sentenced to five years after pleading guilty to possession of
                    child pornography.
                  </>
                }
                whyIncluded={
                  <>
                    The former federal rescue and public-safety role makes this a public-trust
                    institutional case.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of Alabama",
                    href: "https://www.justice.gov/usao-sdal/pr/former-coast-guard-rescue-swimmer-sentenced-5-years-prison-possessing-child",
                  },
                ]}
              />

              <CaseRow
                emoji="🎖️"
                name="Nicholas Wells"
                role="Former Massachusetts National Guard Master Sergeant, 102 Security Forces"
                jurisdiction="Massachusetts / federal"
                stage="Sentenced"
                date="August 20, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Wells was sentenced for possession and distribution of CSAM.
                  </>
                }
                whyIncluded={
                  <>
                    Security-forces rank and military/public-trust status make this a legitimacy
                    and authority case.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Massachusetts",
                    href: "https://www.justice.gov/usao-ma/pr/former-massachusetts-national-guardsman-sentenced-over-six-years-prison-possession-and",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Joshua Lucero"
                role="Youth pastor, Word Alive Church"
                jurisdiction="Colorado"
                stage="Sentenced"
                date="August 24, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Lucero was sentenced to 13 years to life after conviction for sexual assault
                    on a child by one in a position of trust; reporting said he mentored teens
                    and supervised overnight retreats.
                  </>
                }
                whyIncluded={
                  <>
                    Youth-ministry trust, mentorship, and overnight-supervision access make this
                    a classic position-of-trust case.
                  </>
                }
                sources={[
                  {
                    label: "Denver Gazette",
                    href: "https://www.denvergazette.com/2026/08/24/thornton-youth-pastor-convicted-of-child-sex-assault-sentenced-to-13-years-to-life-in-prison/",
                  },
                ]}
              />
            </Section>

            <Section title="Civil / Administrative Actions" eyebrow="Formal non-criminal accountability">
              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Christopher R. Clay"
                role="Former Diocese of Scranton priest; former chaplain and theology teacher"
                jurisdiction="Pennsylvania / Catholic Church"
                stage="Administrative action"
                date="Effective July 24; announced August 11, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    The Diocese of Scranton announced that Clay was removed from the clerical
                    state after credible accusations of sexual abuse of a minor.
                  </>
                }
                whyIncluded={
                  <>
                    This is a formal church accountability action involving prior chaplain and
                    teaching assignments, long-running ministry restrictions, and institutional
                    access questions.
                  </>
                }
                sources={[
                  {
                    label: "Diocese of Scranton",
                    href: "https://www.dioceseofscranton.org/notice-to-the-christian-faithful-of-the-diocese-of-scranton-regarding-christopher-r-clay/",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions / education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Jesuit High School of New Orleans settlement"
                role="Catholic school / institutional abuse claim"
                jurisdiction="Louisiana"
                stage="Institutional settlement"
                date="Reported August 9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    The Guardian reported that Jesuit High School agreed to a second payout over
                    child sexual-abuse accusations tied to alleged abuse decades earlier by a
                    janitor at the institution.
                  </>
                }
                whyIncluded={
                  <>
                    This is a strong institutional-accountability case involving a prominent
                    Catholic school, alleged abuse inside an institutional setting, and civil
                    resolution rather than criminal prosecution.
                  </>
                }
                sources={[
                  {
                    label: "The Guardian",
                    href: "https://www.theguardian.com/us-news/2026/aug/09/new-orleans-catholic-high-school-settlement",
                  },
                  {
                    label: "BishopAccountability",
                    href: "https://www.bishop-accountability.org/2026/08/jesuit-high-school-agrees-to-second-payout-over-child-sexual-abuse-accusations/",
                  },
                ]}
              />
            </Section>

            <Section title="Institutional Shielding & Findings" eyebrow="Systems accountability">
              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="New Orleans Archdiocese abuse bankruptcy settlement"
                role="Catholic institutional abuse / bankruptcy resolution"
                jurisdiction="Louisiana"
                stage="Institutional settlement"
                date="August 28, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Guardian and WWL reporting documented survivor anger and confusion after
                    abuse-claim valuations in the Archdiocese of New Orleans bankruptcy
                    settlement, including reporting that the maximum 100-point payout equated to
                    an estimated distribution of $641,425.64.
                  </>
                }
                whyIncluded={
                  <>
                    This is not an ordinary individual prosecution. It is a systems-accountability
                    entry involving decades of alleged clergy abuse, bankruptcy-channel
                    resolution, survivor compensation, and institutional failure.
                  </>
                }
                sources={[
                  {
                    label: "The Guardian",
                    href: "https://www.theguardian.com/us-news/2026/aug/28/new-orleans-catholic-church-sex-abuse-settlement",
                  },
                ]}
              />
            </Section>

            <Section title="Monitoring Items / Watchlist" eyebrow="What to keep watching">
              <div className="space-y-4 text-sm leading-7 text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-950">Lewis Connor Stott / Galloway School</h3>
                  <p className="mt-1">
                    Monitor added charges, additional alleged victims, and any school or
                    institutional civil claims. This is one of the strongest education and
                    youth-sports monitoring items because the reporting indicates multiple
                    school roles and possible additional victims.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-950">Eric Cato / KIPP Washington Heights</h3>
                  <p className="mt-1">
                    Monitor court proceedings and any reporting on prior warnings, complaints,
                    or school response. The principal role makes the case significant on
                    authority grounds, while the oversight questions require careful
                    source-grounded follow-up.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-950">Shane Ryan Gledhill</h3>
                  <p className="mt-1">
                    Monitor whether investigators identify additional victims tied to casting or
                    film-industry access. The key accountability frame is public-profile and
                    entertainment-industry legitimacy, not celebrity status alone.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-950">
                    New Orleans Archdiocese / Jesuit High School
                  </h3>
                  <p className="mt-1">
                    Monitor bankruptcy payout implementation, survivor challenges, and any
                    further school or church settlements. These entries show institutional
                    accountability operating through civil and bankruptcy systems rather than
                    ordinary criminal prosecution.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-950">Alexander brothers</h3>
                  <p className="mt-1">
                    Keep as a verify-before-final item for future coverage unless the August 2026
                    docket date and procedural posture are confirmed. The case remains a strong
                    status, wealth, elite-access, and professional-legitimacy candidate if the
                    relevant event falls inside a future confirmed search window.
                  </p>
                  <a
                    href="https://abcnews.go.com/US/alexander-brothers-luxury-real-estate-brokers-face-sex/story?id=127464666"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:border-slate-500 hover:text-slate-950"
                  >
                    ABC News
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-950">Timothy Chaneyfield</h3>
                  <p className="mt-1">
                    Monitor whether additional alleged victims or institutional-role details
                    emerge from Polk County Sheriff or local court records. The pastor and
                    hospice chaplain roles make this a strong clergy and public-trust case.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-950">
                    Federal sex-trafficking enforcement reporting
                  </h3>
                  <p className="mt-1">
                    Reuters’ August 13 reporting is a systems-level watchlist item rather than an
                    individual authority/access abuse case. It may fit a policy or
                    institutional-performance sidebar if a later edition includes that lane.
                  </p>
                  <a
                    href="https://www.reuters.com/legal/government/trump-promised-sex-trafficking-crackdown-his-justice-department-hasnt-delivered-2026-08-13/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:border-slate-500 hover:text-slate-950"
                  >
                    Reuters
                  </a>
                </div>
              </div>
            </Section>

            <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold tracking-tight text-slate-950">
                Legal and registry note
              </h2>
              <p className="mt-3">
                Arrests, charges, indictments, and civil allegations are not convictions.
                Defendants are presumed innocent unless and until proven guilty in court. Civil
                settlements, church administrative actions, investigative findings, and
                bankruptcy developments are distinct from criminal adjudications.
              </p>
              <p className="mt-3">
                Registry labels reflect cited public reporting and the series convention. “No
                prior registration noted” means the reviewed sources did not identify prior
                sex-offense registration. Because prior registration would ordinarily be a
                notable part of public reporting, the absence of such a mention supports the
                accountability frame: these cases largely arose through trust, access, authority,
                institutional credibility, professional legitimacy, household control, public
                status, or shielding dynamics — not through a registry-centered “stranger danger”
                prevention model.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}