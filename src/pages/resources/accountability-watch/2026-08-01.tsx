// src/pages/resources/accountability-watch/2026-08-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Info, Quote, Scale, Shield } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "July 2026 was dominated by trusted-access cases: teachers, school employees, youth ministers, coaches, clergy, juvenile-detention staff, corrections officers, healthcare professionals, and public-profile defendants appeared across arrests, charges, sentencings, and institutional actions.",
  "Education was the densest lane, but the strongest pattern was broader than schools: private lessons, school leadership, elementary settings, civil failure-to-protect claims, youth sports, Scouting, and youth ministry all showed how access is built before accountability begins.",
  "Closed and high-trust institutions mattered: juvenile detention, federal custody, medical care, and correctional settings created extreme power imbalances that ordinary registry-centered prevention narratives do not address.",
  "Status and legitimacy were also access mechanisms: celebrity influence, technology work tied to children’s products, cruise-ship service access, academic prestige, public office, and elite wealth appeared alongside more traditional authority roles.",
];

type Stage =
  | "Arrested"
  | "Arrested / Charged"
  | "Charged"
  | "Charged / Indicted"
  | "Indicted"
  | "Arraigned / detained"
  | "Guilty plea"
  | "Convicted"
  | "Sentenced"
  | "Civil lawsuit filed"
  | "Federal agreement / settlement"
  | "Federal guidance / initiative"
  | "Investigative findings"
  | "Inquiry / arrest"
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

function Badge({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
      {icon}
      {children}
    </span>
  );
}

function StageBadge({ stage }: { stage: Stage }) {
  const tones: Record<string, string> = {
    Arrested: "border-rose-300 bg-rose-50 text-rose-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    Charged: "border-rose-300 bg-rose-50 text-rose-800",
    "Charged / Indicted": "border-indigo-300 bg-indigo-50 text-indigo-800",
    Indicted: "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Arraigned / detained": "border-rose-300 bg-rose-50 text-rose-800",
    "Inquiry / arrest": "border-amber-300 bg-amber-50 text-amber-900",
    "Guilty plea": "border-violet-300 bg-violet-50 text-violet-800",
    Convicted: "border-violet-300 bg-violet-50 text-violet-800",
    Sentenced: "border-emerald-300 bg-emerald-50 text-emerald-800",
    "Civil lawsuit filed": "border-sky-300 bg-sky-50 text-sky-800",
    "Federal agreement / settlement": "border-sky-300 bg-sky-50 text-sky-800",
    "Federal guidance / initiative": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Investigative findings": "border-indigo-300 bg-indigo-50 text-indigo-800",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
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
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
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
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
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
    <div className="my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-slate-900">
      <div className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-amber-900">
        <Quote className="h-4 w-4" />
        Accountability frame
      </div>
      <div className="text-base font-semibold leading-relaxed">{children}</div>
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
        <div>
          <div className="flex items-center gap-2">
            {emoji && <span className="text-xl">{emoji}</span>}
            <h3 className="text-xl font-black text-slate-950">{name}</h3>
          </div>
          <p className="mt-1 text-sm font-semibold text-slate-700">{role}</p>
          <p className="mt-1 text-sm text-slate-600">
            {date} • {jurisdiction}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <StageBadge stage={stage} />
          <RegistryChip status={registry} />
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-800">
        <p>{summary}</p>
        {whyIncluded && (
          <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">
            <span className="font-black text-slate-950">Why included: </span>
            {whyIncluded}
          </p>
        )}
      </div>

      {sources.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {sources.map((source) => (
            <a
              key={`${source.label}-${source.href}`}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-bold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
            >
              {source.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function AccountabilityWatch20260801() {
  const pageTitle = "Accountability Watch — July 2026 Roundup | SOLAR";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="July 2026 Accountability Watch roundup tracking authority, access, legitimacy, institutional shielding, and failed prevention in sexual-offense and child-exploitation cases."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge icon={<Shield className="h-4 w-4" />}>Accountability Watch</Badge>
              <Badge icon={<FileText className="h-4 w-4" />}>July 2026 roundup</Badge>
              <Badge icon={<Scale className="h-4 w-4" />}>Verified-source shortlist</Badge>
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-300">
              The SOLAR Project
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Accountability Watch — July 2026 Roundup
            </h1>

            <div className="mt-6 max-w-4xl space-y-4 text-lg leading-relaxed text-slate-100">
              <p>
                July’s cases belong together because they show the same prevention
                gap from many angles: trusted adults, respected institutions,
                household control, public-safety power, healthcare authority,
                youth-facing programs, and status-based access all appearing
                before formal accountability began.
              </p>
              <p>
                The pattern is not a random crime ledger. It is a month of
                authority, legitimacy, proximity, custody, prestige, and institutional
                response failures repeatedly showing where real prevention has to look.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-relaxed text-slate-100">
              <div className="mb-2 flex items-center gap-2 font-black uppercase tracking-[0.18em] text-white">
                <Info className="h-4 w-4" />
                Framing note
              </div>
              <p>
                Allegations are not findings of guilt. Entries are included because
                the approved July case set involved school or youth-program access,
                clergy or religious legitimacy, juvenile-detention vulnerability,
                corrections custody, healthcare authority, household control,
                public office, celebrity or wealth-based influence, or formal
                institutional-accountability action.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <ShareBar title="Accountability Watch — July 2026 Roundup" />

          <div className="mt-8 space-y-8">
            <Section title="At a Glance" eyebrow="Pattern summary">
              <div className="space-y-4 text-base leading-relaxed text-slate-800">
                <p>
                  July’s through-line is trusted access. The included cases are
                  not interchangeable crime items; they cluster around roles and
                  institutions that gave adults credibility, privacy, power,
                  repeated proximity, or social permission before criminal,
                  civil, or institutional accountability surfaced.
                </p>
                <p>
                  Education cases were numerous, but the month was not only about
                  schools. Youth sports, Scouting, churches, juvenile detention,
                  federal custody, medical institutions, household placement,
                  online children’s products, public office, and celebrity or
                  wealth-based status all appeared as pathways of legitimacy and access.
                </p>
                <p>
                  The recurring absence of prior-registration information is part
                  of the accountability frame. These cases are best understood
                  through authority, legitimacy, custody, status, institutional
                  trust, and delayed intervention — not through a simplified
                  public-warning model of risk.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {teaserHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-relaxed text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <PullQuote>
                July was not a stranger-danger story. It was a month of classroom
                trust, youth-program access, clergy legitimacy, custodial power,
                medical authority, household dependency, professional status, and
                public influence showing where prevention actually has to look.
              </PullQuote>
            </Section>

            <Section title="New Arrests & Charges" eyebrow="Criminal procedure">
              <Subgroup>Education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Jesse L. Heubel"
                role="Freehold Township High School teacher"
                jurisdiction="Monmouth County, New Jersey"
                stage="Arrested / Charged"
                date="July 14, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Prosecutors charged Heubel, a high-school teacher, in a case
                    alleging sexual assault of a student under 18, with reporting
                    describing repeated alleged conduct connected to school and
                    other locations.
                  </>
                }
                whyIncluded={
                  <>
                    This is a direct teacher-student authority case. The alleged
                    school-linked access makes the professional role central to
                    the prevention and accountability frame.
                  </>
                }
                sources={[
                  {
                    label: "Monmouth Journal / prosecutor reporting",
                    href: "https://themonmouthjournalwestern.com/freehold-township-high-school-teacher-charged-with-having-sex-with-student-p20390-73.htm",
                  },
                  {
                    label: "CBS New York",
                    href: "https://www.cbsnews.com/newyork/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Paul Campbell"
                role="Former Brinker Elementary / Plano ISD teacher"
                jurisdiction="Plano, Texas"
                stage="Arrested / Charged"
                date="July 8–31, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Campbell, a longtime elementary teacher, was arrested and
                    faced additional charges in a child-sex-abuse investigation.
                    A related lawsuit alleged that Plano ISD ignored earlier
                    warning signs before alleged abuse of an 8-year-old.
                  </>
                }
                whyIncluded={
                  <>
                    The case combines elementary-school access with failed-prevention
                    allegations, making it one of July’s clearest examples of
                    how warning signs and institutional response matter before
                    criminal intervention.
                  </>
                }
                sources={[
                  {
                    label: "NBC DFW",
                    href: "https://www.nbcdfw.com/news/local/plano-teacher-arrested-child-sexual-abuse-charge/4046805/",
                  },
                  {
                    label: "NBC DFW — added charges",
                    href: "https://www.nbcdfw.com/news/local/plano-isd-teacher-faces-three-new-charges-in-child-sexual-abuse-investigation/4054814/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏛️"
                name="David Elliott Pritt"
                role="West Virginia state delegate and teacher"
                jurisdiction="Fayette County / Southern District of West Virginia"
                stage="Charged"
                date="July 22–27, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Pritt, a sitting lawmaker and teacher, was accused in a
                    federal enticement case involving a minor student and later
                    resigned from public office.
                  </>
                }
                whyIncluded={
                  <>
                    The dual public-trust role is the point: elected office and
                    teacher authority both confer legitimacy, deference, and access
                    that ordinary stranger-danger narratives miss.
                  </>
                }
                sources={[
                  {
                    label: "New York Post",
                    href: "https://nypost.com/2026/07/23/us-news/teacher-lawmaker-accused-of-using-roblox-to-lure-student-15-for-sex/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Evan Michael Sands"
                role="Broward teacher"
                jurisdiction="Southern District of Florida / Broward County, Florida"
                stage="Arraigned / detained"
                date="July 31, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors said Sands, a Broward teacher, was charged
                    in a case alleging online exploitation of children as young
                    as five and was ordered detained pending trial.
                  </>
                }
                whyIncluded={
                  <>
                    The formal education role makes public trust central even
                    where the alleged conduct occurred online. The case shows how
                    digital access and school legitimacy can intersect.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of Florida",
                    href: "https://www.justice.gov/usao-sdfl/pr/broward-teacher-charged-exploiting-children-young-five",
                  },
                ]}
              />

                         <CaseRow
                emoji="🎼"
                name="Nathaniel Acton"
                role="Former Nebraska band teacher"
                jurisdiction="York County, Nebraska"
                stage="Arrested / Charged"
                date="July 19–24, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Acton, a former band teacher, was accused of grooming and
                    sexually assaulting a student over about three years, including
                    during private music lessons.
                  </>
                }
                whyIncluded={
                  <>
                    Private instruction can intensify teacher-student trust by
                    moving access beyond the ordinary classroom into one-on-one
                    settings with less visibility.
                  </>
                }
                sources={[
                  {
                    label: "KOLN / Gray",
                    href: "https://www.1011now.com/",
                  },
                  {
                    label: "Arizona’s Family / Gray",
                    href: "https://www.azfamily.com/2026/07/24/band-teacher-accused-sexually-assaulting-student-3-years-during-private-music-lessons/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Tymond Tran"
                role="Former Massachusetts “Amazon Teacher of the Year”"
                jurisdiction="Essex County, Massachusetts"
                stage="Arrested / Charged"
                date="July 23–24, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Tran, a former award-winning teacher, pleaded not guilty to
                    sex-crime charges involving a 14-year-old student.
                  </>
                }
                whyIncluded={
                  <>
                    Public recognition and teacher prestige amplify legitimacy.
                    The case matters because professional honor can increase trust
                    and lower suspicion before formal accountability begins.
                  </>
                }
                sources={[
                  {
                    label: "CBS Boston",
                    href: "https://www.cbsnews.com/boston/news/amazon-teacher-of-the-year-arrested-tymond-tran/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Jesse Sifuentes"
                role="Houston ISD teacher"
                jurisdiction="Harris County, Texas"
                stage="Arrested / Charged"
                date="July 9–19, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Court-record reporting said Sifuentes, a teacher at the High
                    School for Law and Justice, was charged with an improper
                    sexual relationship with a student.
                  </>
                }
                whyIncluded={
                  <>
                    Texas educator-student law makes the professional authority
                    relationship central even where age or consent questions might
                    otherwise obscure the institutional power imbalance.
                  </>
                }
                sources={[
                  {
                    label: "Houston Chronicle",
                    href: "https://www.houstonchronicle.com/news/houston-texas/education/hisd/article/jesse-sifuentes-teacher-charge-22361952.php",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Christopher Verras"
                role="Bridgeport elementary teacher"
                jurisdiction="Bridgeport, Connecticut"
                stage="Arrested / Charged"
                date="July 7–9, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Verras was charged in an alleged sexual assault of a
                    paraprofessional, with risk-of-injury counts tied to allegations
                    that a student was present during incidents.
                  </>
                }
                whyIncluded={
                  <>
                    This is not a student-victim case, but the alleged conduct
                    occurred in an elementary-school setting and involved workplace
                    power and alleged child exposure.
                  </>
                }
                sources={[
                  {
                    label: "CT Post",
                    href: "https://www.ctpost.com/news/article/bridgeport-teacher-sex-assault-christopher-verras-22338699.php",
                  },
                ]}
              />

              <CaseRow
                emoji="⚕️"
                name="Chintan Shah"
                role="UF Health doctor / University of Florida assistant professor"
                jurisdiction="Alachua County, Florida"
                stage="Arrested"
                date="July 8, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Deputies arrested Shah, a UF Health doctor and assistant
                    professor, on CSAM possession/transmission and related
                    communication-device charges.
                  </>
                }
                whyIncluded={
                  <>
                    Medical and academic titles confer public trust and professional
                    legitimacy, making the role relevant even where the charged
                    conduct was digital rather than patient-facing.
                  </>
                }
                sources={[
                  {
                    label: "WCJB",
                    href: "https://www.wcjb.com/2026/07/08/uf-health-doctor-arrested-child-porn-charges-alachua-county-deputies-say/",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Noel Walker"
                role="Houston-area youth pastor / worship leader, Infinity Church"
                jurisdiction="Montgomery County, Texas"
                stage="Arrested / Charged"
                date="July 2–8, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Walker, identified in reporting as a youth pastor and worship
                    leader, was charged after an online child-exploitation tip
                    led to CSAM-related allegations.
                  </>
                }
                whyIncluded={
                  <>
                    Youth-ministry trust and church-based legitimacy are central.
                    The role gives adults credibility around children and families
                    before any public warning system is involved.
                  </>
                }
                sources={[
                  {
                    label: "FOX 26 Houston",
                    href: "https://www.fox26houston.com/news/houston-area-youth-pastor-arrested-child-exploitation",
                  },
                  {
                    label: "KBTX",
                    href: "https://www.kbtx.com/",
                  },
                ]}
              />

              <CaseRow
                emoji="⛪"
                name="Jorge Gonzalez Martinez"
                role="Pastor, Iglesia Internacional Poder y Gloria"
                jurisdiction="Edinburg, Texas"
                stage="Arrested / Charged"
                date="Late July 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Martinez, a South Texas pastor, was charged with multiple
                    indecency-with-a-child counts after one girl reported him and
                    other children came forward.
                  </>
                }
                whyIncluded={
                  <>
                    Pastoral authority is a direct trust marker. Reporting that
                    additional children came forward makes the institutional and
                    congregational-access questions especially important.
                  </>
                }
                sources={[
                  {
                    label: "Chron",
                    href: "https://www.chron.com/culture/religion/article/south-texas-pastor-arrested-22368764.php",
                  },
                ]}
              />

              <CaseRow
                emoji="⛪"
                name="Jeffrey Nowak"
                role="Diocese of Buffalo priest on administrative leave"
                jurisdiction="Western District of New York / Buffalo, New York"
                stage="Arrested / Charged"
                date="July 8–9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors charged Nowak with receipt and possession
                    of child pornography. DOJ said he had been placed on
                    administrative leave in 2019 after allegations involving
                    inappropriate contact with children and harassment of a seminarian.
                  </>
                }
                whyIncluded={
                  <>
                    The clergy role and administrative-leave history make this
                    an institutional-accountability case as well as a criminal
                    charge: prior concern, church response, and public trust all matter.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Western District of New York",
                    href: "https://www.justice.gov/usao-wdny/pr/priest-administrative-leave-arrested-charged-receipt-and-possession-child-pornography",
                  },
                ]}
              />

              <Subgroup>Healthcare / therapy / juvenile justice</Subgroup>

              <CaseRow
                emoji="⚕️"
                name="Sofia Ann-Buitron Drotts"
                role="Former behavioral-health clinician at Contra Costa County juvenile detention"
                jurisdiction="Contra Costa County, California"
                stage="Arrested / Charged"
                date="July 14–29, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Prosecutors alleged Drotts, a juvenile-detention therapist,
                    groomed a minor patient and sexually abused him after release.
                    The family also filed a claim alleging county failures.
                  </>
                }
                whyIncluded={
                  <>
                    This is one of July’s strongest accountability cases: therapist
                    authority, juvenile-detention vulnerability, institutional
                    custody, boundary failure, and a civil failure-to-protect claim
                    all converge.
                  </>
                }
                sources={[
                  {
                    label: "People",
                    href: "https://people.com/therapist-allegedly-groomed-minor-at-juvenile-hall-then-abused-him-12029590",
                  },
                  {
                    label: "CBS San Francisco",
                    href: "https://www.cbsnews.com/sanfrancisco/news/contra-costa-county-juvenile-hall-therapist-charged-teen-sexual-abuse/",
                  },
                ]}
              />

              <Subgroup>Law enforcement / corrections</Subgroup>

              <CaseRow
                emoji="🚓"
                name="Dylan Ford"
                role="Lane County sheriff’s deputy"
                jurisdiction="Lane County, Oregon / District of Oregon"
                stage="Charged"
                date="July 29, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors charged Ford, a Lane County sheriff’s
                    deputy, with child-exploitation offenses after an investigation
                    involving alleged online conduct with a minor.
                  </>
                }
                whyIncluded={
                  <>
                    Law-enforcement authority and public-safety legitimacy make
                    the accountability pattern clear: the accused role is one the
                    public is taught to associate with protection.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO District of Oregon",
                    href: "https://www.justice.gov/usao-or/pr/lane-county-sheriffs-deputy-charged-child-exploitation-offenses",
                  },
                  {
                    label: "KMTR / NBC 16",
                    href: "https://nbc16.com/news/local/lane-county-deputy-arrested-after-probe-into-alleged-online-relationship-with-minor-eugene-oregon",
                  },
                ]}
              />

              <CaseRow
                emoji="🏛️"
                name="Jordan Pensak"
                role="Federal correctional officer, FCI Fort Dix"
                jurisdiction="District of New Jersey"
                stage="Charged"
                date="July 29, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors charged Pensak with sexually abusing an
                    individual in federal custody.
                  </>
                }
                whyIncluded={
                  <>
                    Custody cases are direct power-imbalance cases: the confined
                    person has limited freedom while the accused officer holds
                    institutional authority.
                  </>
                }
                sources={[
                  {
                    label: "New York Post",
                    href: "https://nypost.com/2026/07/29/us-news/nj-female-prison-guard-discovered-canoodling-with-inmate-who-paid-other-prisoners-to-be-on-lookout-during-sex-trysts-feds/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏛️"
                name="Kyle Brown"
                role="Former federal correctional officer, FCI Otisville"
                jurisdiction="Southern District of New York"
                stage="Charged / Indicted"
                date="July 15, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors said Brown was indicted and arrested for
                    sexual abuse of an inmate over whom he had authority at FCI Otisville.
                  </>
                }
                whyIncluded={
                  <>
                    The case centers on custodial authority inside a closed
                    institution, where hierarchy, isolation, and dependence can
                    make abuse harder to report or resist.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of New York",
                    href: "https://www.justice.gov/usao-sdny/pr/federal-correctional-officer-charged-sexual-abuse-inmate-fci-otisville",
                  },
                ]}
              />

              <Subgroup>Business / professional legitimacy / travel access</Subgroup>

              <CaseRow
                emoji="🛳️"
                name="Pranit Narayan Pawar"
                role="Cruise-ship hairstylist aboard Virgin Voyages’ Brilliant Lady"
                jurisdiction="Western District of Washington / maritime jurisdiction"
                stage="Charged"
                date="July 6, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Prosecutors said Pawar, a cruise-ship hairstylist, used
                    unauthorized massage-like service interactions to abuse
                    passengers in secluded service areas.
                  </>
                }
                whyIncluded={
                  <>
                    Professional service access in a semi-contained travel setting
                    created trust, isolation, and repeated opportunity outside
                    traditional school, clergy, or household categories.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Western District of Washington",
                    href: "https://www.justice.gov/usao-wdwa",
                  },
                  {
                    label: "People",
                    href: "https://people.com/",
                  },
                ]}
              />

              <Subgroup>Youth sports</Subgroup>

              <CaseRow
                emoji="🥎"
                name="Jason Rockhold"
                role="Youth travel softball coach"
                jurisdiction="Woodford County, Illinois"
                stage="Arrested"
                date="July 27–31, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Rockhold, a youth travel softball coach, was arrested after
                    allegations of sexual offenses against a minor over several years.
                    Reporting also noted a SafeSport temporary suspension.
                  </>
                }
                whyIncluded={
                  <>
                    Youth sports create repeated unsupervised access, coach
                    authority, travel and practice routines, and community trust
                    around children.
                  </>
                }
                sources={[
                  {
                    label: "25News Now / WEEK",
                    href: "https://www.25newsnow.com/2026/07/30/washington-man-detained-accused-allegations-sex-offenses-against-minor/",
                  },
                ]}
              />

              <CaseRow
                emoji="🥍"
                name="Robert James “Coach Rosco” Rece"
                role="Head of Volusia Lacrosse / youth lacrosse coach"
                jurisdiction="Volusia County, Florida"
                stage="Arrested"
                date="July 11–13, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    The Volusia County Sheriff’s Office said Rece was arrested in
                    a child-sex sting after traveling to meet someone he believed
                    was a child. Local reporting identified him as head of a co-ed
                    youth lacrosse league.
                  </>
                }
                whyIncluded={
                  <>
                    Unlike a generic sting case, the youth-coach role makes the
                    authority and access logic central to the accountability frame.
                  </>
                }
                sources={[
                  {
                    label: "Volusia Sheriff’s Office",
                    href: "https://www.volusiasheriff.gov/news/volusia-county-sheriff/7-arrested-for-traveling-to-meet-a-minor-during-operation-tor-pedo.stml",
                  },
                ]}
              />

              <Subgroup>Household / caregiver authority</Subgroup>

              <CaseRow
                emoji="🏠"
                name="Dawson James Brown"
                role="Pastor’s son in household/church-linked setting"
                jurisdiction="Pearl River County, Mississippi"
                stage="Arrested / Charged"
                date="July 17–22, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Brown was charged with statutory rape, sexual battery, and
                    human trafficking after allegedly abusing and impregnating a
                    14-year-old who was living with his family. Reporting said his
                    mother and the victim’s mother also faced alleged cover-up-related charges.
                  </>
                }
                whyIncluded={
                  <>
                    The central issue is household control: a dependent living
                    arrangement, access through a pastor’s family home, and alleged
                    cover-up conduct are the prevention failures to watch.
                  </>
                }
                sources={[
                  {
                    label: "WLOX",
                    href: "https://www.wlox.com/2026/07/21/new-details-pastors-son-accused-impregnating-14-year-old-girl-while-she-was-living-with-family/",
                  },
                  {
                    label: "People",
                    href: "https://people.com/",
                  },
                ]}
              />

              <Subgroup>Technology / business legitimacy</Subgroup>

              <CaseRow
                emoji="💻"
                name="Josh Felker"
                role="Former Meta engineer who worked on children’s digital products"
                jurisdiction="New York / federal oversight context"
                stage="Inquiry / arrest"
                date="July 20–29, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Reporting said Felker, a former Meta engineer connected to
                    children’s digital experiences, was arrested after an undercover
                    child-exploitation sting. Sen. Chuck Grassley later asked Meta
                    for records connected to the case.
                  </>
                }
                whyIncluded={
                  <>
                    Include because the alleged conduct intersects with a children’s-products
                    role and institutional vetting questions at a major platform.
                    The access mechanism is business legitimacy and child-facing
                    technology work, not a traditional caregiver role.
                  </>
                }
                sources={[
                  {
                    label: "New York Post",
                    href: "https://nypost.com/2026/07/20/us-news/meta-worker-who-developed-digital-experiences-for-kids-admits-to-trying-to-sext-child-in-undercover-nyc-sting/",
                  },
                  {
                    label: "Sen. Grassley letter",
                    href: "https://www.grassley.senate.gov/download/grassley-to-meta_-employee-arrest",
                  },
                ]}
              />

              <Subgroup>Celebrity / public profile / wealth and public influence</Subgroup>

              <CaseRow
                emoji="📣"
                name="Andrew Tate and Tristan Tate"
                role="Public-profile influencers / “manosphere” celebrities"
                jurisdiction="United Kingdom / United States extradition posture"
                stage="Arrested / Charged"
                date="July 18–19, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    The Crown Prosecution Service authorized additional sexual-offense
                    charges tied to four further alleged victims, while AP and
                    Reuters reported the brothers’ U.S. arrest and extradition fight.
                    Andrew Tate also faces charges involving indecent images of a
                    child and extreme pornography.
                  </>
                }
                whyIncluded={
                  <>
                    This is a strong status and public-profile case. Fame, wealth,
                    online influence, and platform power are central to the accountability
                    frame and should not be flattened into a generic celebrity item.
                  </>
                }
                sources={[
                  {
                    label: "Crown Prosecution Service",
                    href: "https://www.cps.gov.uk/national-news/news/cps-decides-prosecute-tate-brothers-additional-sexual-offences",
                  },
                  {
                    label: "AP",
                    href: "https://apnews.com/article/82b6638219839dcf653c09309da66f16",
                  },
                  {
                    label: "Reuters",
                    href: "https://www.reuters.com/legal/government/andrew-tristan-tate-seek-release-us-jail-while-fighting-extradition-2026-07-27/",
                  },
                ]}
              />
            </Section>

            <Section title="Pleas / Convictions / Sentencings" eyebrow="Adjudicated or post-plea events">
              <Subgroup>Education / school leadership</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Sean Roby"
                role="Former Pensacola High School assistant principal"
                jurisdiction="Escambia County, Florida"
                stage="Sentenced"
                date="July 29–30, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Roby, a former assistant principal, was sentenced to 14 years
                    in a video-voyeurism and child-pornography case.
                  </>
                }
                whyIncluded={
                  <>
                    The reported crimes were not framed as school-site crimes, so
                    the inclusion rests on school-leadership status, public trust,
                    and the institutional legitimacy attached to an assistant-principal role.
                  </>
                }
                sources={[
                  {
                    label: "WEAR",
                    href: "https://weartv.com/news/local/former-pensacola-hs-assistant-principal-gets-14-years-in-video-voyeurism-child-porn-case",
                  },
                ]}
              />

              <Subgroup>Youth groups / Scouting</Subgroup>

              <CaseRow
                emoji="🏕️"
                name="Robert Alan Mark"
                role="Former Scouting America / Boy Scouts troop leader"
                jurisdiction="Western District of Michigan"
                stage="Sentenced"
                date="July 29–31, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Mark, a former Scout leader, was sentenced to 208 months for
                    using hidden cameras to record minors. Prosecutors said he
                    exploited his Scouting role and hosted events that created access.
                  </>
                }
                whyIncluded={
                  <>
                    This is one of July’s strongest youth-organization cases:
                    role-based trust, home-hosted activities, and concealed recording
                    show how access can be created through community legitimacy.
                  </>
                }
                sources={[
                  {
                    label: "Big Rapids News",
                    href: "https://www.bigrapidsnews.com/news/article/michigan-scout-leader-sentenced-22369020.php",
                  },
                ]}
              />

              <Subgroup>Clergy / youth ministry</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Jacob Ryan Barnett"
                role="Former youth pastor"
                jurisdiction="Western District of Virginia"
                stage="Sentenced"
                date="July 28, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Barnett, a former youth pastor, was sentenced to 20 years for
                    attempted sexual exploitation of a child after prosecutors said
                    he groomed children across social media platforms.
                  </>
                }
                whyIncluded={
                  <>
                    Youth-pastor legitimacy plus cross-platform grooming connects
                    institutional trust with digital access, showing how authority
                    can move across physical and online spaces.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Western District of Virginia",
                    href: "https://www.justice.gov/usao-wdva/pr/former-youth-pastor-sentenced-attempted-sexual-exploitation-child",
                  },
                ]}
              />

              <Subgroup>Education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Peter Aaron Leach"
                role="Former Stockdale ISD teacher"
                jurisdiction="Wilson County, Texas"
                stage="Sentenced"
                date="July 30, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Leach, a former teacher, was sentenced to 13 years for offenses
                    including improper relationship with a student, indecency with
                    a child, child grooming, and evidence tampering.
                  </>
                }
                whyIncluded={
                  <>
                    Teacher-student grooming and evidence-tampering facts place
                    the case squarely in the education authority, trust, and access lane.
                  </>
                }
                sources={[
                  {
                    label: "San Antonio Express-News",
                    href: "https://www.expressnews.com/news/article/peter-leach-plea-prison-child-sex-stockdale-22367465.php",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Adriana Mariel Rullan"
                role="Former United ISD teacher"
                jurisdiction="Laredo / Webb County, Texas"
                stage="Sentenced"
                date="July 5, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Rullan, a former teacher, was sentenced to 33 years after
                    conviction for continuous sexual abuse of a child under 14,
                    improper educator-student relationship, and indecency with a child.
                  </>
                }
                whyIncluded={
                  <>
                    The teacher-student relationship and long-term grooming pattern
                    make the case a clear authority, trust, and access entry.
                  </>
                }
                sources={[
                  {
                    label: "Laredo Morning Times",
                    href: "https://www.lmtonline.com/local/article/court-adriana-rullan-educator-sex-abuse-sentence-22329124.php",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Carl David Innmon"
                role="Former Austin ISD elementary teacher"
                jurisdiction="Austin, Texas / Western District of Texas"
                stage="Sentenced"
                date="July 10, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Innmon, a former fifth-grade Austin ISD teacher who had also
                    worked as a substitute at about 20 district schools, was
                    sentenced to 200 months for receipt and possession of child
                    sexual-abuse material.
                  </>
                }
                whyIncluded={
                  <>
                    Elementary-school status and substitute access across many
                    campuses make the child-safety trust attached to the role
                    relevant even where the conviction is CSAM-based.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Western District of Texas",
                    href: "https://www.justice.gov/usao-wdtx/pr/former-austin-isd-elementary-teacher-sentenced-16-years-federal-prison-possessing",
                  },
                ]}
              />

              <Subgroup>Youth sports</Subgroup>

              <CaseRow
                emoji="⚽"
                name="Camilo Campos-Hurtado"
                role="Franklin soccer coach"
                jurisdiction="Middle District of Tennessee"
                stage="Sentenced"
                date="July 2, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Campos-Hurtado, a soccer coach, was sentenced to 30 years in
                    a child-exploitation and immigration-offense case.
                  </>
                }
                whyIncluded={
                  <>
                    Coach authority and youth-sports access place the case inside
                    the required non-school youth-access lane.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Middle District of Tennessee",
                    href: "https://www.justice.gov/usao-mdtn/pr/franklin-soccer-coach-sentenced-30-years-federal-prison-child-exploitation-and",
                  },
                ]}
              />

              <Subgroup>First responders / public-safety authority</Subgroup>

              <CaseRow
                emoji="🚑"
                name="Andrew Childs"
                role="Former Durham EMS district supervisor"
                jurisdiction="Durham, North Carolina"
                stage="Sentenced"
                date="July 16–31, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Childs, a former Durham EMS district supervisor, was sentenced
                    to 18 years after pleading guilty to distribution of CSAM and
                    production of an animal-crush video.
                  </>
                }
                whyIncluded={
                  <>
                    EMS supervisory status carries public-safety legitimacy and
                    trust, making the role relevant beyond the underlying digital offense.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Middle District of North Carolina",
                    href: "https://www.justice.gov/usao-mdnc/pr/north-carolina-man-sentenced-18-years-prison-distributing-child-sexual-abuse-materials",
                  },
                  {
                    label: "WRAL",
                    href: "https://www.wral.com/news/local/former-durham-ems-supervisor-sentenced-18-years-child-pornography-july-2026/",
                  },
                ]}
              />

              <Subgroup>Higher education / professional legitimacy</Subgroup>

              <CaseRow
                emoji="🎓"
                name="Rodger Githens"
                role="Former university professor and college consultant"
                jurisdiction="Eastern District of California"
                stage="Sentenced"
                date="July 24, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Githens, a former professor and college consultant, was
                    sentenced to 18 years and 6 months for attempted enticement of
                    a minor and receipt/distribution of CSAM.
                  </>
                }
                whyIncluded={
                  <>
                    Academic status and college-consulting legitimacy matter to
                    the status/access frame even though the criminal conduct was online.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of California",
                    href: "https://www.justice.gov/usao-edca/pr/former-university-professor-sentenced-child-sexual-exploitation-offenses",
                  },
                ]}
              />

              <Subgroup>Law enforcement / corrections</Subgroup>

              <CaseRow
                emoji="🏛️"
                name="Ralph Contreras Jr."
                role="Former corrections sergeant, Central California Women’s Facility"
                jurisdiction="Eastern District of California"
                stage="Sentenced"
                date="July 13, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Contreras, a former corrections sergeant, was sentenced to
                    15 years for dealing child sexual-abuse material while employed
                    in corrections.
                  </>
                }
                whyIncluded={
                  <>
                    Corrections authority is a public-trust role. The case belongs
                    because the professional status underscores institutional
                    legitimacy and public-safety hypocrisy.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of California",
                    href: "https://www.justice.gov/usao-edca/pr/former-corrections-sergeant-sentenced-15-years-prison-dealing-child-sexual-abuse",
                  },
                ]}
              />

              <CaseRow
                emoji="🏛️"
                name="Cornelius Alexander Thompson"
                role="Federal correctional officer"
                jurisdiction="Middle District of Florida"
                stage="Guilty plea"
                date="July 28, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Thompson, a federal correctional officer, pleaded guilty to
                    sexual abuse of an inmate and receipt of a bribe by a public official.
                  </>
                }
                whyIncluded={
                  <>
                    Custodial sexual abuse plus bribery directly fits authority
                    misuse inside a closed institution where the power imbalance
                    is built into the setting.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Middle District of Florida",
                    href: "https://www.justice.gov/usao-mdfl/pr/federal-correctional-officer-arrested-sexual-abuse-federal-inmate-and-receipt-bribe",
                  },
                ]}
              />

              <Subgroup>Familiarity / built-in social access</Subgroup>

              <CaseRow
                emoji="🏠"
                name="Tony Michael Crisco"
                role="Wilmington man with familiarity-based child access"
                jurisdiction="Eastern District of North Carolina"
                stage="Sentenced"
                date="July 22, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors said Crisco was sentenced to 50 years for
                    producing and distributing CSAM involving very young children
                    and grooming a teen he met through friends.
                  </>
                }
                whyIncluded={
                  <>
                    This is not a formal-role case, but the facts describe
                    familiarity-based access and grooming, which fits the “real
                    risk closer to home” lane.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of North Carolina",
                    href: "https://www.justice.gov/usao-ednc/pr/wilmington-man-sentenced-federal-prison-child-porn",
                  },
                ]}
              />

              <CaseRow
                emoji="🏠"
                name="Johnny Chandler"
                role="Acquaintance / familiarity-access defendant"
                jurisdiction="Blount County, Alabama"
                stage="Sentenced"
                date="July 14, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Chandler was sentenced to life after conviction in the
                    kidnapping and rape of a 10-year-old girl who had been hidden
                    in a basement wall.
                  </>
                }
                whyIncluded={
                  <>
                    Include cautiously under familiarity and household-neighborhood
                    access, not as an institutional-role case. The case undercuts
                    a random-stranger frame when the access pattern involved
                    familiarity and grooming.
                  </>
                }
                sources={[
                  {
                    label: "People",
                    href: "https://people.com/man-who-raped-10-year-old-girl-hid-her-in-basement-wall-learns-fate-12022725",
                  },
                ]}
              />
            </Section>

            <Section title="Civil / Administrative Actions" eyebrow="Non-criminal accountability">
              <Subgroup>Healthcare / institutional oversight failure</Subgroup>

              <CaseRow
                emoji="⚕️"
                name="Weill Cornell Medicine / Dr. Darius Paduch institutional case"
                role="Medical institution and abuse-prevention agreement context"
                jurisdiction="New York"
                stage="Federal agreement / settlement"
                date="July 27–28, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Weill Cornell resolved a federal criminal investigation with a
                    $30 million abuse-prevention agreement after the Paduch
                    patient-abuse case and more than $1 billion in civil settlements.
                  </>
                }
                whyIncluded={
                  <>
                    This is a major institutional-accountability case involving
                    patient trust, medical authority, alleged safeguard failures,
                    reporting systems, monitoring, and prevention reforms.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of New York",
                    href: "https://www.justice.gov/usao-sdny/pr/weill-cornell-medicine-resolves-criminal-investigation-agreement-maintain-and-enhance",
                  },
                  {
                    label: "AP",
                    href: "https://apnews.com/",
                  },
                ]}
              />

              <Subgroup>Education / institutional oversight failure</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Plano ISD / Brinker Elementary"
                role="Civil lawsuit involving district, principal, and former teacher Paul Campbell"
                jurisdiction="Plano, Texas"
                stage="Civil lawsuit filed"
                date="July 30–31, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Parents sued Plano ISD, the principal, and former teacher Paul
                    Campbell, alleging the district failed to act on earlier warning
                    signs before alleged abuse of an 8-year-old.
                  </>
                }
                whyIncluded={
                  <>
                    The lawsuit directly raises the prevention question: who knew
                    what, when they knew it, and whether institutional response
                    failed before criminal intervention.
                  </>
                }
                sources={[
                  {
                    label: "NBC DFW",
                    href: "https://www.nbcdfw.com/news/local/plano-isd-teacher-faces-three-new-charges-in-child-sexual-abuse-investigation/4054814/",
                  },
                  {
                    label: "FOX 4 Dallas-Fort Worth",
                    href: "https://www.fox4news.com/",
                  },
                ]}
              />

              <Subgroup>Juvenile justice / therapy / institutional oversight failure</Subgroup>

              <CaseRow
                emoji="⚖️"
                name="Contra Costa County / juvenile hall therapist case"
                role="Tort claim / civil precursor involving Sofia Drotts allegations"
                jurisdiction="Contra Costa County, California"
                stage="Civil lawsuit filed"
                date="July 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    The family of a teen allegedly groomed by therapist Sofia
                    Drotts filed a claim accusing county officials and affiliated
                    agencies of failing to protect him.
                  </>
                }
                whyIncluded={
                  <>
                    The civil posture raises detention-center supervision,
                    mandated-reporting, therapist-boundary, and institutional
                    custody questions beyond the individual criminal charge.
                  </>
                }
                sources={[
                  {
                    label: "CBS San Francisco",
                    href: "https://www.cbsnews.com/sanfrancisco/news/contra-costa-county-juvenile-hall-therapist-charged-teen-sexual-abuse/",
                  },
                  {
                    label: "ABC7 Bay Area",
                    href: "https://abc7news.com/",
                  },
                ]}
              />
            </Section>

            <Section title="Institutional Shielding & Findings" eyebrow="Oversight, findings, and public accountability">
              <Subgroup>Education / national oversight failure</Subgroup>

              <CaseRow
                emoji="🏫"
                name="U.S. Department of Education K–12 adult sexual-misconduct initiative"
                role="National federal guidance and enforcement initiative"
                jurisdiction="National"
                stage="Federal guidance / initiative"
                date="July 10, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    The Department of Education launched a national K–12 initiative
                    and issued guidance on sexual misconduct by adults in positions
                    of authority in schools.
                  </>
                }
                whyIncluded={
                  <>
                    This is not an individual-defendant case, but it directly
                    supports the Accountability Watch thesis: schools have recurring
                    failures involving adults in positions of authority, and
                    prevention requires systems beyond public registries.
                  </>
                }
                sources={[
                  {
                    label: "U.S. Department of Education",
                    href: "https://www.ed.gov/about/news/press-release/us-department-of-education-launches-national-k-12-initiative-protect-students-adult-sexual-predators-schools",
                  },
                ]}
              />

              <Subgroup>Education / oversight failure</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Edmonds School District / Meadowdale Elementary"
                role="Investigative reporting on warnings before alleged student harm"
                jurisdiction="Washington"
                stage="Investigative findings"
                date="July 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    InvestigateWest and partner outlets reported that administrators
                    received years of warnings about a teacher before a student
                    alleged sexual assault.
                  </>
                }
                whyIncluded={
                  <>
                    This is a classic shielding and failure-to-act case: repeated
                    warnings, institutional response, delayed accountability, and
                    eventual alleged student harm.
                  </>
                }
                sources={[
                  {
                    label: "KUOW / InvestigateWest",
                    href: "https://www.kuow.org/education/2026-07-15/before-a-student-alleged-sexual-assault-edmonds-schools-received-years-of-warnings-about-her-teacher",
                  },
                ]}
              />

              <Subgroup>Wealth / public influence / elite access</Subgroup>

              <CaseRow
                emoji="💼"
                name="Al-Fayed / Harrods-linked abuse allegations"
                role="Elite employer and wealth-status institutional-accountability case"
                jurisdiction="Scotland / United Kingdom"
                stage="Investigative findings"
                date="July 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Police Scotland reopened an investigation into allegations
                    against Mohamed Al Fayed after new witness information, amid
                    broader claims from former Harrods workers.
                  </>
                }
                whyIncluded={
                  <>
                    This is outside the U.S., but it fits the wealth, status, and
                    institutional-shielding lane: elite employer power, alleged
                    serial misconduct, and long-delayed accountability questions.
                  </>
                }
                sources={[
                  {
                    label: "The Times",
                    href: "https://www.thetimes.com/uk/scotland/article/police-scotland-reopen-mohamed-al-fayed-sexual-assault-inquiry-jwj87kvm8",
                  },
                ]}
              />
            </Section>

            <Section title="Monitoring Items / Watchlist" eyebrow="What to watch next">
              <ul className="space-y-3 text-sm leading-relaxed text-slate-800">
                <li>
                  <span className="font-black text-slate-950">Plano ISD / Paul Campbell:</span>{" "}
                  monitor amended complaints, district response, TEA/SBEC discipline,
                  principal accountability, and additional complainants.
                </li>
                <li>
                  <span className="font-black text-slate-950">Contra Costa juvenile hall / Sofia Drotts:</span>{" "}
                  monitor arraignment, charging documents, county tort-claim response,
                  probation-department supervision records, and mandated-reporting issues.
                </li>
                <li>
                  <span className="font-black text-slate-950">David Elliott Pritt:</span>{" "}
                  monitor indictment, school-district response, legislative fallout,
                  and whether additional students or institutional failures emerge.
                </li>
                <li>
                  <span className="font-black text-slate-950">Jeffrey Nowak / Diocese of Buffalo:</span>{" "}
                  monitor church administrative-leave history, diocesan knowledge,
                  prior allegation handling, and federal case movement.
                </li>
                <li>
                  <span className="font-black text-slate-950">Dawson James Brown / Pearl River County:</span>{" "}
                  monitor charging documents, alleged cover-up charges, the role of
                  household placement, and the trafficking count.
                </li>
                <li>
                  <span className="font-black text-slate-950">Andrew and Tristan Tate:</span>{" "}
                  monitor extradition posture, CPS charges, U.S. arrest proceedings,
                  and public-profile/status-access framing.
                </li>
                <li>
                  <span className="font-black text-slate-950">Edmonds School District:</span>{" "}
                  monitor whether the reporting leads to state education oversight,
                  litigation, personnel consequences, or district reforms.
                </li>
                <li>
                  <span className="font-black text-slate-950">Weill Cornell / Paduch reforms:</span>{" "}
                  monitor implementation of the $30 million prevention agreement
                  and whether reporting and monitoring mechanisms become public.
                </li>
                <li>
                  <span className="font-black text-slate-950">Josh Felker / Meta:</span>{" "}
                  monitor whether official records or congressional follow-up clarify
                  institutional vetting, child-product work, and platform response.
                </li>
                <li>
                  <span className="font-black text-slate-950">Alexander brothers / elite real-estate case:</span>{" "}
                  keep as a continuing wealth/status-access watchlist item unless
                  a distinct July procedural event is verified.
                </li>
              </ul>
            </Section>

            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="mb-3 flex items-center gap-2 text-2xl font-black tracking-tight text-slate-950">
                <Scale className="h-6 w-6" />
                Legal and registry note
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                <p>
                  Arrests, charges, indictments, civil allegations, investigative
                  findings, and institutional claims are not convictions. Defendants
                  are presumed innocent unless and until proven guilty in court.
                  Convictions, pleas, sentencings, settlements, and institutional
                  findings are identified according to their procedural posture
                  and cited source language.
                </p>
                <p>
                  Registry-status notes are limited to reviewed public source
                  material. Under the current series display convention, “Registry
                  status not mentioned” is displayed as “Registry: No prior
                  registration noted” to preserve the prevention-policy frame
                  without inventing registry history.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}