// src/pages/resources/accountability-watch/2026-11-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Info, Quote, Scale, Shield } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "October's prosecutions and lawsuits show how access through police custody, therapy rooms, youth activities, religious roles, foster placement, and elite social circles can matter more than the familiar stranger-danger story.",
  "Status and wealth were unusually visible: the Alexander brothers' sentencing and civil allegations involving prominent political and sports figures raise questions about how resources and influence shape opportunity and accountability.",
  "Some of the sharpest prevention failures were alleged in institutions themselves: Nebraska's youth custody facility, a Florida church and school, and districts facing longstanding complaints.",
  "Outcomes vary sharply across the 40 entries: some defendants have been convicted, others only charged or sued, and still others faced professional discipline or institutional investigation. Those differences are fundamental.",
];

type Stage =
  | "Arrested / Charged"
  | "Charged / Indicted"
  | "Re-arrest / added charges"
  | "Guilty plea"
  | "Convicted"
  | "Sentenced"
  | "Civil lawsuit filed"
  | "AG settlement / stipulated judgment"
  | "AG report / investigative findings"
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
    "AG settlement / stipulated judgment": "border-sky-300 bg-sky-50 text-sky-800",
    "AG report / investigative findings": "border-indigo-300 bg-indigo-50 text-indigo-800",
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


export default function AccountabilityWatch20261101() {
  const pageTitle = "Accountability Watch — October 2026 Roundup | SOLAR";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="October 2026 Accountability Watch: verified developments involving trusted authority, household and youth access, wealth and public influence, professional misconduct, and institutional oversight." />
      </Helmet>
      <main className="min-h-screen bg-slate-100">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield className="h-3.5 w-3.5" />}>Accountability Watch</Badge>
              <Badge icon={<Scale className="h-3.5 w-3.5" />}>October 2026 roundup</Badge>
              <Badge icon={<FileText className="h-3.5 w-3.5" />}>Source-grounded cases</Badge>
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">Accountability Watch — October 2026 Roundup</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">The cases in October are not limited to schools, clergy, or the federal criminal docket. They span police custody, medical care, foster homes, youth sports, influential business circles, and institutions that allegedly failed to act on warnings.</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">Their common thread is access: power, familiarity, prestige, and institutional legitimacy can expose people to harm before criminal cases, professional discipline, or civil litigation force a response.</p>
            <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
              <div className="mb-2 flex items-center gap-2 font-bold uppercase tracking-[0.16em] text-slate-300"><Info className="h-4 w-4" /> Framing note</div>
              October 1–31, 2026. Allegations, indictments, and civil claims are not findings of guilt. Cases are grouped by their October procedural developments and interpreted through the role of authority, access, wealth, legitimacy, and institutional oversight.
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <ShareBar title="Accountability Watch — October 2026 Roundup" />
          <div className="mt-6 space-y-6">
            <Section title="At a Glance" eyebrow="What October reveals">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                <p>October's 40 included case entries span new charges, convictions and sentences, civil and administrative proceedings, and a major examination of congressional misconduct safeguards. They do not suggest that all allegations are proven or that every authority role was used to commit an offense. They do show how varied the conditions of trusted access can be.</p>
                <p className="mt-3">A badge can carry coercive power; a clinic can bring patients into private examination rooms; foster placement creates household dependency; and wealth or political status can provide social credibility and influence. Allegations of institutional shielding require a different question still: who knew, what safeguards existed, and whether complaints were heard before harm continued.</p>
                <p className="mt-3">Those are prevention questions that a public registry cannot answer by itself. Registry-history statements below reflect only the sources reviewed, not independent national records checks.</p>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">October's prosecutions and lawsuits show how access through police custody, therapy rooms, youth activities, religious roles, foster placement, and elite social circles can matter more than the familiar stranger-danger story.</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">Status and wealth were unusually visible: the Alexander brothers' sentencing and civil allegations involving prominent political and sports figures raise questions about how resources and influence shape opportunity and accountability.</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">Some of the sharpest prevention failures were alleged in institutions themselves: Nebraska's youth custody facility, a Florida church and school, and districts facing longstanding complaints.</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">Outcomes vary sharply across the 40 entries: some defendants have been convicted, others only charged or sued, and still others faced professional discipline or institutional investigation. Those differences are fundamental.</div>
              </div>
              <PullQuote>October's accountability test is not simply whether an offender appears on a list. It is whether people with power, access, and institutional backing can be questioned before warning signs become another criminal case or civil lawsuit.</PullQuote>
            </Section>
            <Section title="New Arrests & Charges" eyebrow="Criminal proceedings">
              <Subgroup>Clergy / religious institutions; business / executive authority</Subgroup>
              <CaseRow
                  name="Scott Richard Hartman"
                  role="Former Catholic Foundation senior vice president and chief development officer"
                  jurisdiction="Ohio / Franklin County"
                  stage="Arrested / Charged"
                  date="October 1, 2026"
                  registry="No prior registration noted"
                summary={<>Franklin County investigators arrested Hartman following allegations of online sexual exploitation of a minor. The Catholic Foundation ended his employment after the arrest; the initial charges included grooming and offenses concerning sexualized material involving a minor.</>}
                whyIncluded={<>Senior charitable and religious-sector leadership conferred public credibility and professional legitimacy. The alleged conduct demonstrates why prominence and internal screening cannot replace safeguarding and accountability.</>}
                sources={[
                    { label: "Franklin County Sheriff's Office", href: "https://sheriff.franklincountyohio.gov/About-Us/Public-Affairs-Media-Relations/2026/Catholic-Foundation-Executive-arrested-following-ICAC-Investigation" },
                    { label: "WOSU", href: "https://www.wosu.org/2026-10-01/catholic-foundation-executive-arrested-for-online-sexual-abuse-of-a-minor-fired-from-position" },
                ]}
              />
              <Subgroup>Law enforcement / corrections</Subgroup>
              <CaseRow
                  name="Dohnya Dozier"
                  role="Former Harris County sheriff's deputy"
                  jurisdiction="Texas / Harris County"
                  stage="Arrested / Charged"
                  date="October 1, 2026"
                  registry="No prior registration noted"
                summary={<>Dozier was charged with attempted sexual assault and official oppression. Prosecutors allege he threatened a woman with arrest while on duty in an attempt to obtain sex. He had previously been removed from law enforcement.</>}
                whyIncluded={<>The alleged coercion depended on the power of arrest and the credibility of police authority rather than ordinary private access.</>}
                sources={[
                    { label: "Houston Chronicle", href: "https://www.houstonchronicle.com/news/houston-texas/crime/article/dohnya-dozier-sex-assualt-deputy-charged-22463032.php" },
                ]}
              />
              <Subgroup>Business / professional legitimacy</Subgroup>
              <CaseRow
                  name="Ryan Hemphill"
                  role="Attorney"
                  jurisdiction="New York / Manhattan"
                  stage="Charged / Indicted"
                  date="October 6, 2026"
                  registry="No prior registration noted"
                summary={<>Prosecutors filed a new 41-count indictment alleging predatory sexual assault against a seventh woman. This followed an earlier indictment involving allegations made by six other women. All counts in the new indictment remain accusations.</>}
                whyIncluded={<>The allegations raise repeated-access questions involving a professionally prominent defendant. Available charging materials do not establish an attorney-client access nexus, and that distinction matters.</>}
                sources={[
                    { label: "Manhattan District Attorney", href: "https://manhattanda.org/d-a-bragg-announces-new-charges-against-attorney-ryan-hemphill-for-predatory-sexual-assault-of-7th-woman/" },
                ]}
              />
              <Subgroup>Clergy / religious institutions</Subgroup>
              <CaseRow
                  name="Andrew Benton"
                  role="Former youth pastor"
                  jurisdiction="Oklahoma / Stephens County"
                  stage="Arrested / Charged"
                  date="October 8, 2026"
                  registry="No prior registration noted"
                summary={<>Benton was arrested on two child-sexual-abuse charges after investigators documented allegations involving teenagers during his youth-ministry work, church activities, and related travel.</>}
                whyIncluded={<>The allegations focus on youth-ministry supervision and repeated trusted contact, including situations where adults and young people traveled together for religious activities.</>}
                sources={[
                    { label: "KSWO / court records", href: "https://www.kswo.com/2026/10/08/former-duncan-youth-pastor-arrested-child-sexual-abuse-charges/" },
                ]}
              />
              <Subgroup>Law enforcement / corrections</Subgroup>
              <CaseRow
                  name="Torre Dyson"
                  role="Riverview police officer"
                  jurisdiction="Missouri / St. Louis County"
                  stage="Arrested / Charged"
                  date="October 14, 2026"
                  registry="No prior registration noted"
                summary={<>Dyson was charged with sexual conduct in the course of public duty involving a detainee. Investigators allege the woman was in his custody when he transported her to a police facility without properly notifying dispatch.</>}
                whyIncluded={<>A person in police custody depends on the officer exercising restraint and following safeguards. The alleged incident directly concerns that imbalance of power.</>}
                sources={[
                    { label: "St. Louis County Police", href: "https://www.stlouiscountypolice.com/department-news/press-releases/news-release-riverview-police-officer-charged-with-sexual-misconduct/" },
                    { label: "First Alert 4", href: "https://www.firstalert4.com/2026/10/14/riverview-officer-charged-accused-sexually-assaulting-handcuffed-woman-inside-police-department/" },
                ]}
              />
              <Subgroup>Healthcare / therapy</Subgroup>
              <CaseRow
                  name="Tariq Lamki"
                  role="Neurologist"
                  jurisdiction="New York / Manhattan"
                  stage="Charged / Indicted"
                  date="October 13, 2026"
                  registry="No prior registration noted"
                summary={<>A Manhattan grand jury indicted Lamki on charges arising from alleged sexual abuse of two patients during medical appointments. Prosecutors describe the alleged conduct as occurring during examinations in a closed treatment room.</>}
                whyIncluded={<>Patients rely on clinical expertise, confidentiality, and privacy; those same conditions can make abuse difficult to detect or challenge.</>}
                sources={[
                    { label: "Manhattan District Attorney", href: "https://manhattanda.org/d-a-bragg-neurologist-indicted-for-allegedly-sexually-abusing-two-patients/" },
                    { label: "amNewYork", href: "https://www.amny.com/law/manhattan-neurologist-sexually-abusing-patients/" },
                ]}
              />
              <Subgroup>Law enforcement / corrections</Subgroup>
              <CaseRow
                  name="William Dennis Boyd"
                  role="Catahoula Parish correctional deputy"
                  jurisdiction="Louisiana / Catahoula Parish"
                  stage="Arrested / Charged"
                  date="October 16, 2026"
                  registry="No prior registration noted"
                summary={<>Louisiana State Police arrested Boyd on charges including sexual battery of juveniles. Investigators have not stated that the alleged offenses occurred in a correctional facility or while he was working.</>}
                whyIncluded={<>A public-trust employee faces serious sexual-offense allegations, but the available reporting does not establish misuse of official custodial access. That limitation is important.</>}
                sources={[
                    { label: "KALB / Louisiana State Police", href: "https://www.kalb.com/2026/10/16/catahoula-parish-correctional-deputy-arrested-sexual-battery-juveniles/" },
                ]}
              />
              <Subgroup>Education / community professional legitimacy</Subgroup>
              <CaseRow
                  name="Maurice Cotton Sr."
                  role="Elementary teacher and barber"
                  jurisdiction="Maryland / Somerset County"
                  stage="Arrested / Charged"
                  date="October 20, 2026"
                  registry="No prior registration noted"
                summary={<>Cotton was charged following an allegation of sexual assault involving a 16-year-old acquaintance at a barbershop. Police identified him as both a public-school teacher and barber, but did not connect the alleged incident to school duties.</>}
                whyIncluded={<>Professional and neighborhood familiarity can produce access outside formal school settings; the distinction between school employment and the allegation's location must remain clear.</>}
                sources={[
                    { label: "Maryland State Police", href: "https://mdsp.maryland.gov/about-us/newsroom/maryland-state-police-arrest-somerset-county-man-following-sexual-assault-investigation" },
                    { label: "WBOC", href: "https://www.wboc.com/news/east-salisbury-elementary-teacher-charged-in-sexual-assault-investigation/article_e173ce21-7837-49a5-a0f2-f39f7dfaa745.html" },
                ]}
              />
              <Subgroup>Clergy / religious institutions; youth programs</Subgroup>
              <CaseRow
                  name="Zachary Turnage"
                  role="Church after-school program worker"
                  jurisdiction="South Carolina / Richland County"
                  stage="Arrested / Charged"
                  date="October 10 arrest; October 26 reporting"
                  registry="No prior registration noted"
                summary={<>A church after-school worker was charged with second-degree assault and battery and contributing to the delinquency of a minor. Deputies allege inappropriate contact with a child attending the program.</>}
                whyIncluded={<>The alleged access point was the after-school care setting itself: parents entrusted a church program with their child's supervision.</>}
                sources={[
                    { label: "WIS / Richland County Sheriff", href: "https://www.wistv.com/2026/10/26/richland-county-church-worker-charged-after-alleged-sexual-assault/" },
                    { label: "ABC Columbia", href: "https://www.abccolumbia.com/2026/10/26/church-staff-member-arrested-in-connection-with-assault-of-child/" },
                ]}
              />
              <Subgroup>Clergy / religious institutions</Subgroup>
              <CaseRow
                  name="Richard Channing Shealy"
                  role="Former worship pastor"
                  jurisdiction="South Carolina / federal"
                  stage="Charged / Indicted"
                  date="October 21, 2026"
                  registry="No prior registration noted"
                summary={<>Federal prosecutors announced an indictment alleging production, distribution, and possession of child sexual abuse material. The indictment also describes previously recorded material tied to alleged abuse years earlier.</>}
                whyIncluded={<>Religious leadership is a community-trust role, but prosecutors have not established that ministry responsibilities themselves facilitated the alleged offenses.</>}
                sources={[
                    { label: "DOJ / South Carolina", href: "https://www.justice.gov/usao-sc/pr/former-lexington-pastor-indicted-producing-and-distributing-child-sexual-abuse-material" },
                ]}
              />
              <CaseRow
                  name="Benjamin 'Ben' Garate"
                  role="Pastor"
                  jurisdiction="Colorado / Montrose"
                  stage="Arrested / Charged"
                  date="October 21, 2026"
                  registry="No prior registration noted"
                summary={<>Police arrested Garate after investigating alleged sexual assault of a child. Charges include sexual assault on a child by a person in a position of trust; his former church removed him from pastoral duties.</>}
                whyIncluded={<>Position-of-trust allegations and religious leadership place the focus on familiar adults with community legitimacy, rather than an unknown offender.</>}
                sources={[
                    { label: "City of Montrose Police", href: "https://www.cityofmontrose.org/CivicSend/ViewMessage/message/304349" },
                    { label: "Daily Sentinel", href: "https://www.gjsentinel.com/news/western_colorado/pastor-arrested-on-suspicion-of-sexual-abuse/article_b094a981-e3ee-48b0-875e-f604755d98de.html" },
                ]}
              />
              <Subgroup>Clergy / religious institutions; alleged concealment</Subgroup>
              <CaseRow
                  name="James Lamont Newton and Jimmy L. Butler"
                  role="Pastors; defendant and alleged accessory"
                  jurisdiction="Oklahoma / Comanche County"
                  stage="Arrested / Charged"
                  date="October 21–23, 2026"
                  registry="No prior registration noted"
                summary={<>Newton was arrested on multiple rape and child-sexual-abuse charges involving boys. Investigators allege he used church status, gifts, and financial help to control them. Butler was separately charged with accessory to a felony for allegedly facilitating or concealing abuse.</>}
                whyIncluded={<>The allegation of assistance by a second church figure makes this a potential institutional-shielding case as well as an alleged abuse-of-trust case.</>}
                sources={[
                    { label: "KSWO / court documents", href: "https://www.kswo.com/2026/10/23/lawton-pastor-arrested-multiple-sexual-abuse-charges/" },
                ]}
              />
              <Subgroup>Healthcare / therapy</Subgroup>
              <CaseRow
                  name="Joseph Heinecke"
                  role="Chiropractor"
                  jurisdiction="Colorado / Grand Junction"
                  stage="Arrested / Charged"
                  date="October 22, 2026"
                  registry="No prior registration noted"
                summary={<>Grand Junction police arrested Heinecke on four counts of unlawful sexual contact during medical treatment following complaints from multiple people about examinations.</>}
                whyIncluded={<>The alleged conduct took place where patients relied on clinical expertise and consent boundaries in a professional treatment environment.</>}
                sources={[
                    { label: "Grand Junction Police", href: "https://www.gjcity.org/m/NewsFlash/Home/Detail/2296" },
                ]}
              />
              <Subgroup>Business / executive authority; residential youth care</Subgroup>
              <CaseRow
                  name="Randall J. MacKendrick"
                  role="Former CEO, Fox Run Center for Children and Adolescents"
                  jurisdiction="Ohio / federal"
                  stage="Arrested / Charged"
                  date="October 26, 2026"
                  registry="No prior registration noted"
                summary={<>Federal prosecutors announced possession and attempted-enticement charges against a former residential treatment-center CEO. They also described separate investigations involving a former teenage patient and an alleged kidnapping and rape; those are not convictions in this federal case.</>}
                whyIncluded={<>Executive oversight of a facility serving vulnerable children creates unusual power and proximity. The reported contact with a former patient also raises questions about safeguards and supervision.</>}
                sources={[
                    { label: "DOJ / Southern District of Ohio", href: "https://www.justice.gov/usao-sdoh/pr/federal-agents-arrest-former-ceo-child-adolescent-residential-treatment-center-federal" },
                ]}
              />
              <Subgroup>Law enforcement / other institutional authority</Subgroup>
              <CaseRow
                  name="Matthew Baxter"
                  role="Former Pensacola police and contract security officer"
                  jurisdiction="Florida / Escambia County"
                  stage="Re-arrest / added charges"
                  date="October 26, 2026"
                  registry="No prior registration noted"
                summary={<>The Florida Department of Law Enforcement filed additional charges including possession of child sexual abuse material and digital voyeurism after examining devices seized in a separate investigation.</>}
                whyIncluded={<>A police and security background gave Baxter access to public-facing security roles. The charges do not establish that workplace children were harmed; the ensuing background-check review shows institutional screening concerns.</>}
                sources={[
                    { label: "WALA / FDLE", href: "https://www.fox10tv.com/2026/10/26/former-pensacola-officer-arrested-again-faces-child-sexual-abuse-material-charges-police-say/?outputType=amp" },
                ]}
              />
              <Subgroup>Household / caregiver authority</Subgroup>
              <CaseRow
                  name="William Eric Webb"
                  role="Former foster parent"
                  jurisdiction="Missouri / Clinton County"
                  stage="Arrested / Charged"
                  date="October 28, 2026"
                  registry="No prior registration noted"
                summary={<>Authorities charged Webb with child-molestation and related offenses after former foster children alleged years of abuse in his home. Investigators also allege he failed to report abuse disclosed about another man.</>}
                whyIncluded={<>Foster placement makes the household itself a source of state-authorized dependency, and the failure-to-report allegation deepens the protective-oversight question.</>}
                sources={[
                    { label: "KCTV5 / Clinton County Sheriff", href: "https://www.kctv5.com/2026/10/28/gower-man-charged-after-allegedly-sexually-abusing-foster-children-his-care/" },
                ]}
              />
              <Subgroup>Law enforcement / corrections</Subgroup>
              <CaseRow
                  name="Seth Kimbrough"
                  role="Former Killen police officer"
                  jurisdiction="Alabama / Lauderdale County"
                  stage="Arrested / Charged"
                  date="October 14, 2026"
                  registry="No prior registration noted"
                summary={<>Kimbrough surrendered after a grand-jury indictment that included first-degree sexual abuse. A sheriff's investigation concerned alleged unwanted sexual contact with a woman while Kimbrough was on duty.</>}
                whyIncluded={<>The workplace authority of a police officer is directly tied to the alleged incident, and the October indictment brought an older investigation into formal criminal process.</>}
                sources={[
                    { label: "WAFF / Lauderdale County Sheriff", href: "https://www.waff.com/2026/10/15/former-killen-police-officer-arrested-sex-abuse/" },
                ]}
              />
            </Section>

            <Section title="Pleas / Convictions / Sentencings" eyebrow="Court outcomes">
              <Subgroup>Wealth / public influence; elite social status</Subgroup>
              <CaseRow
                  name="Alon, Oren, and Tal Alexander"
                  role="Luxury real estate and business figures"
                  jurisdiction="New York / federal"
                  stage="Sentenced"
                  date="October 27, 2026"
                  registry="No prior registration noted"
                summary={<>A federal judge sentenced all three brothers to 30 years each following their March sex-trafficking convictions. Prosecutors described a yearslong scheme supported by high-end social circles, luxury experiences, and business prominence.</>}
                whyIncluded={<>The case demonstrates wealth and social legitimacy functioning as means of access, deception, and concealment, rather than merely appearing as celebrity context around an ordinary offense.</>}
                sources={[
                    { label: "DOJ / Southern District of New York", href: "https://www.justice.gov/usao-sdny/pr/alon-oren-and-tal-alexander-sentenced-30-years-prison-decade-long-sex-trafficking-and" },
                    { label: "CBS News", href: "https://www.cbsnews.com/news/alexander-brothers-sentenced-sex-trafficking/" },
                ]}
              />
              <Subgroup>Law enforcement / first responders</Subgroup>
              <CaseRow
                  name="Kedreyon K. Williams"
                  role="Former police officer and volunteer firefighter"
                  jurisdiction="Louisiana / Pointe Coupee Parish"
                  stage="Convicted"
                  date="October 1, 2026"
                  registry="No prior registration noted"
                summary={<>A jury convicted Williams of multiple sexual offenses involving children. Prosecutors said some conduct occurred in fire stations where he served as a volunteer firefighter.</>}
                whyIncluded={<>Access to publicly trusted emergency-service facilities and roles formed part of the setting in which the crimes occurred.</>}
                sources={[
                    { label: "18th Judicial District Attorney", href: "https://18thjda.org/former-new-roads-officer-firefighter-convicted-of-rape-of-juveniles-possession-of-pornography-involving-juveniles/" },
                    { label: "WAFB", href: "https://www.wafb.com/2026/10/01/former-new-roads-cop-firefighter-convicted-raping-children-faces-mandatory-life-prison/" },
                ]}
              />
              <Subgroup>Education / youth sports</Subgroup>
              <CaseRow
                  name="Michael Pusateri"
                  role="Youth softball coach"
                  jurisdiction="Maryland / Baltimore County"
                  stage="Sentenced"
                  date="October 1, 2026"
                  registry="No prior registration noted"
                summary={<>A judge sentenced Pusateri to ten years in prison for sexual abuse involving a teenage softball player. The judge described grooming and exploitation through his coaching relationship.</>}
                whyIncluded={<>A coach's access to young athletes depends on families and institutions trusting that adults will maintain appropriate boundaries.</>}
                sources={[
                    { label: "Baltimore Banner", href: "https://www.thebanner.com/community/criminal-justice/michael-pusateri-softball-coach-baltimore-county-sex-abuse-sentence-Q5ZONE32XVCODCXDKCLIZFE3U4/" },
                ]}
              />
              <Subgroup>Politics / civic leadership</Subgroup>
              <CaseRow
                  name="Frank Kovacs"
                  role="Former mayor of Laurens"
                  jurisdiction="New York / Otsego County"
                  stage="Convicted"
                  date="October 8, 2026"
                  registry="No prior registration noted"
                summary={<>An Otsego County jury convicted Kovacs of first-degree rape while acquitting him on several other counts. Separate allegations involving the same complainant were pending in Saratoga County.</>}
                whyIncluded={<>His elected position gave him civic status; the conviction is distinct from the unresolved related charges and must be described separately.</>}
                sources={[
                    { label: "Times Union / prosecutor interviews", href: "https://www.timesunion.com/news/article/frank-kovacs-mayor-laurens-convicted-rape-22478490.php" },
                ]}
              />
              <Subgroup>Education / youth sports</Subgroup>
              <CaseRow
                  name="Ryan Brungardt"
                  role="Former teacher and wrestling coach"
                  jurisdiction="Kansas / federal"
                  stage="Guilty plea"
                  date="October 14–15, 2026"
                  registry="No prior registration noted"
                summary={<>Brungardt pleaded guilty to three federal production counts stemming from secretly recording minors during wrestling events while he had coaching access to school locker rooms.</>}
                whyIncluded={<>The school-athletics context provided access to private areas where young athletes expected supervision and protection.</>}
                sources={[
                    { label: "DOJ / District of Kansas", href: "https://www.justice.gov/usao-ks/pr/salina-man-pleads-guilty-production-child-pornography-crimes" },
                    { label: "KWCH", href: "https://www.kwch.com/2026/10/15/former-salina-teacher-wrestling-coach-pleads-guilty-producing-child-porn-faces-decades-prison/" },
                ]}
              />
              <Subgroup>Household / familiar-access authority</Subgroup>
              <CaseRow
                  name="Larry Wayne Riddle"
                  role="Close family acquaintance"
                  jurisdiction="Florida / Sarasota County"
                  stage="Convicted / Sentenced"
                  date="October 14–15, 2026"
                  registry="Registry status not mentioned"
                summary={<>Riddle was convicted after a jury trial and sentenced for attempted sexual battery and related offenses involving a child while staying with the child's family. Prosecutors noted prior child-sex-offense convictions, but the reviewed release did not establish a prior registry status.</>}
                whyIncluded={<>Familial familiarity and household hospitality afforded proximity. This case also cautions against assuming that prior convictions and registry history are interchangeable facts.</>}
                sources={[
                    { label: "Florida 12th Judicial Circuit State Attorney", href: "https://www.sao12.org/press-release-larry-wayne-riddle/" },
                ]}
              />
              <Subgroup>Youth sports / youth groups</Subgroup>
              <CaseRow
                  name="Sean Gardner"
                  role="Former gymnastics coach"
                  jurisdiction="Mississippi / federal"
                  stage="Sentenced"
                  date="October 15, 2026"
                  registry="No prior registration noted"
                summary={<>A federal judge sentenced Gardner to 90 years for producing child sexual abuse material through secret recordings of young gymnasts at a facility where he coached. Initial reports to SafeSport were an important investigative step.</>}
                whyIncluded={<>The abuse depended on trusted facility access. The case also highlights the importance of reporting channels and cross-institutional coordination in youth sports.</>}
                sources={[
                    { label: "DOJ / Southern District of Mississippi", href: "https://www.justice.gov/usao-sdms/pr/former-gymnastics-coach-sentenced-90-years-federal-prison-production-child-sexual" },
                ]}
              />
              <Subgroup>Clergy / religious institutions; youth sports</Subgroup>
              <CaseRow
                  name="John A. Camardo III"
                  role="Former executive pastor and youth soccer coach"
                  jurisdiction="New York / Erie County"
                  stage="Sentenced"
                  date="October 19, 2026"
                  registry="No prior registration noted"
                summary={<>Camardo received an eight-year sentence after pleading guilty in July to offenses involving two children he knew. The crimes were not reported as occurring during church ministry.</>}
                whyIncluded={<>Multiple public-facing youth and religious roles conferred credibility, even though the available facts tie victim access to personal familiarity rather than a proved church assignment.</>}
                sources={[
                    { label: "Erie County District Attorney", href: "https://www4.erie.gov/da/press/williamsville-man-sentenced-child-sexual-abuse" },
                ]}
              />
              <Subgroup>Law enforcement / corrections</Subgroup>
              <CaseRow
                  name="Patrick Cacho"
                  role="Former Park City police officer"
                  jurisdiction="Illinois / Lake County"
                  stage="Convicted"
                  date="October 21, 2026"
                  registry="No prior registration noted"
                summary={<>A jury convicted Cacho on 20 counts involving sexual abuse and official misconduct during traffic stops. Prosecutors described threats, failures to record stops, and misuse of an officer's power.</>}
                whyIncluded={<>The coercive authority of traffic enforcement was central to the offenses. Procedural safeguards intended to document encounters were reportedly avoided.</>}
                sources={[
                    { label: "Lake County State's Attorney", href: "https://content.govdelivery.com/accounts/ILLAKE/bulletins/43019e3" },
                    { label: "NBC Chicago", href: "https://www.nbcchicago.com/news/local/former-suburban-police-officer-convicted-of-sexually-abusing-woman-during-traffic-stops/4006393/" },
                ]}
              />
              <Subgroup>Clergy / religious institutions</Subgroup>
              <CaseRow
                  name="Paul Lewis"
                  role="Pastor, Messengers for Christ World Healing Center"
                  jurisdiction="New York / Brooklyn"
                  stage="Sentenced"
                  date="October 26, 2026"
                  registry="No prior registration noted"
                summary={<>Lewis was sentenced to 14 years after a September conviction for repeated sexual abuse of a child whose family belonged to his congregation.</>}
                whyIncluded={<>Pastoral familiarity gave the defendant trusted contact with a congregation family beyond the church building itself.</>}
                sources={[
                    { label: "Brooklyn District Attorney", href: "https://www.brooklynda.org/2026/10/26/brooklyn-pastor-sentenced-to-14-years-in-prison-for-repeatedly-sexually-assaulting-a-member-of-his-congregation-when-she-was-a-child/" },
                    { label: "News 12 Brooklyn", href: "https://brooklyn.news12.com/2026/10/26/pastor-sentenced-for-sexually-abusing-child-in-his-congregation/33Azo6xJieg0jQs0EEkVIR" },
                ]}
              />
              <Subgroup>Youth sports / youth groups</Subgroup>
              <CaseRow
                  name="Aydan Trueblood"
                  role="Youth sports coach"
                  jurisdiction="Illinois / Peoria County"
                  stage="Sentenced"
                  date="October 28, 2026"
                  registry="No prior registration noted"
                summary={<>A judge sentenced Trueblood to 26 years for sexually assaulting a 12-year-old athlete he coached, following his August guilty plea.</>}
                whyIncluded={<>A coach-athlete relationship created familiarity, opportunity, and a serious duty of care toward the minor.</>}
                sources={[
                    { label: "Peoria County State's Attorney", href: "https://www.peoriacounty.gov/m/NewsFlash/Home/Detail/1417" },
                    { label: "25 News Now", href: "https://www.25newsnow.com/2026/10/28/central-illinois-youth-sports-coach-receives-over-20-years-prison/" },
                ]}
              />
              <Subgroup>Education / healthcare</Subgroup>
              <CaseRow
                  name="Lindsey Post"
                  role="High-school athletic trainer"
                  jurisdiction="Texas / Collin County"
                  stage="Guilty plea / Sentenced"
                  date="October 16 plea; October 29 sentencing announcement"
                  registry="No prior registration noted"
                summary={<>Post pleaded guilty to sexual assault of a child and an improper educator-student relationship and received a five-year sentence. Prosecutors said she developed access to the student through school-based injury treatment.</>}
                whyIncluded={<>Athletic training sits between education and healthcare: a student receiving treatment relies on medical privacy and professional care inside a school.</>}
                sources={[
                    { label: "Collin County District Attorney", href: "https://collincountyda.com/da-greg-willis-announces-5-year-prison-sentence-for-mckinney-trainer-convicted-of-sexual-assault-of-a-child-and-improper-relationship-between-educator-and-student/" },
                ]}
              />
            </Section>

            <Section title="Civil / Administrative Actions" eyebrow="Civil and professional accountability">
              <Subgroup>Politics / civic leadership; wealth / public influence</Subgroup>
              <CaseRow
                  name="Matt Gaetz, Joel Greenberg, and Chris Dorworth"
                  role="Former elected officials; defendants in a civil action"
                  jurisdiction="Florida / federal civil court"
                  stage="Civil lawsuit filed"
                  date="October 15, 2026"
                  registry="Registry status not mentioned"
                summary={<>Two women brought a federal civil lawsuit alleging sexual exploitation through arrangements involving money, travel, and powerful political connections. Gaetz denied the allegations and was not criminally charged in this matter. Greenberg has a separate prior conviction.</>}
                whyIncluded={<>The complaint specifically alleges that public office, economic resources, and influence enabled exploitation. The civil allegations must not be confused with any person's separate criminal status.</>}
                sources={[
                    { label: "Roll Call", href: "https://rollcall.com/2026/10/15/former-rep-matt-gaetz-faces-civil-suit/" },
                    { label: "ClickOrlando", href: "https://www.clickorlando.com/news/local/2026/10/15/2-alleged-sex-trafficking-victims-sue-former-rep-matt-gaetz-and-ex-tax-collector-joel-greenberg/" },
                ]}
              />
              <Subgroup>Celebrity / public profile</Subgroup>
              <CaseRow
                  name="Marcellus Wiley"
                  role="Former NFL player and sports commentator"
                  jurisdiction="California / Los Angeles County"
                  stage="Civil lawsuit filed"
                  date="October 27, 2026"
                  registry="No prior registration noted"
                summary={<>A former USC student sued Wiley, alleging sexual assault in 1999. The new filing adds to a broader history of civil accusations. Wiley has denied allegations against him; this complaint has not been adjudicated.</>}
                whyIncluded={<>Athletic celebrity, media prominence, and social access warrant attention, while the age of the alleged events and disputed civil posture require precise attribution.</>}
                sources={[
                    { label: "Los Angeles Times", href: "https://www.latimes.com/sports/story/2026-10-28/marcellus-wiley-another-sexual-assault-allegation-lawsuit" },
                ]}
              />
              <Subgroup>Institutional shielding / oversight failure</Subgroup>
              <CaseRow
                  name="Nebraska YRTC-Kearney"
                  role="State youth rehabilitation and treatment center"
                  jurisdiction="Nebraska / federal civil court"
                  stage="Civil lawsuit filed"
                  date="October 1 and 19, 2026"
                  registry="Registry status not mentioned"
                summary={<>Two federal lawsuits alleged that boys held in state custody were sexually abused by facility employees and that other employees ignored complaints, conducted deficient investigations, or punished young people who reported abuse.</>}
                whyIncluded={<>Incarcerated children cannot simply leave unsafe settings; the allegations concern a state's duty to supervise its staff and respond before additional harm occurs.</>}
                sources={[
                    { label: "Flatwater Free Press reporting, October 1", href: "https://www.centralnebraskatoday.com/2026/10/01/new-federal-lawsuit-alleges-yrtc-employees-abused-omaha-teen-who-was-then-punished-when-he-reported-abuse/" },
                    { label: "Flatwater Free Press reporting, October 21", href: "https://www.centralnebraskatoday.com/2026/10/21/second-lawsuit-over-alleged-abuse-at-kearney-youth-center-names-10-employees-cites-insidious-culture-that-allowed-it/" },
                ]}
              />
              <Subgroup>Education; clergy; institutional oversight</Subgroup>
              <CaseRow
                  name="Richard Tripp and Camron Armstrong / institutional defendants"
                  role="Edgewater Alliance Church and Warner Christian Academy"
                  jurisdiction="Florida / Volusia County"
                  stage="Civil lawsuit filed"
                  date="October 21–23, 2026"
                  registry="Registry status not mentioned"
                summary={<>Two civil actions allege that a church and a Christian school failed to act on warning signs before giving Matthew Clark Graziotti, later federally convicted in a separate case, unsupervised access to children.</>}
                whyIncluded={<>The alleged failure is institutional: warnings and screening concerns existed before the conduct the plaintiffs attribute to an adult trusted by church and school leaders.</>}
                sources={[
                    { label: "WFTV", href: "https://www.wftv.com/news/local/volusia-county/two-lawsuits-filed-against-volusia-county-church-groups-over-alleged-sexual-abuse/N64ARCXKEJHAVEYH4PQESBI2XY/" },
                ]}
              />
              <Subgroup>Clergy / religious institutions; professional legitimacy</Subgroup>
              <CaseRow
                  name="Ronnie Goines and Koinonia Christian Church"
                  role="Pastor and religious institution"
                  jurisdiction="Texas / Dallas County"
                  stage="Civil lawsuit filed"
                  date="October 27, 2026"
                  registry="No prior registration noted"
                summary={<>A woman sued Goines and his church, alleging grooming and sexual assault after the pastor offered professional contacts and religious guidance. Goines publicly denied assault, and the church faces supervision allegations.</>}
                whyIncluded={<>The lawsuit describes overlapping sources of trust: claimed spiritual direction and professional networking. The institutional duty of supervision is separately disputed.</>}
                sources={[
                    { label: "FOX 4 Dallas", href: "https://www.fox4news.com/news/arlington-pastor-faces-new-lawsuit-over-alleged-sexual-assaults-grooming" },
                ]}
              />
              <Subgroup>Healthcare / therapy</Subgroup>
              <CaseRow
                  name="Gary Parsons"
                  role="Chiropractor"
                  jurisdiction="Iowa / state chiropractic board"
                  stage="Professional license surrendered"
                  date="October 14 agreement; October 21 public action"
                  registry="No prior registration noted"
                summary={<>Parsons surrendered his chiropractic license following board charges alleging improper sexual contact with a patient. He did not admit wrongdoing as part of the agreement; the board action is not a criminal conviction.</>}
                whyIncluded={<>This is non-criminal professional accountability concerning clinician-patient boundaries and regulatory responsibility.</>}
                sources={[
                    { label: "KWQC / Iowa Capital Dispatch", href: "https://www.kwqc.com/2026/10/21/amid-criminal-investigation-iowa-chiropractor-surrenders-his-license/" },
                ]}
              />
              <Subgroup>Education; institutional oversight</Subgroup>
              <CaseRow
                  name="Freeburg School District / Robin 'Rob' Hawkins"
                  role="Former school superintendent and district"
                  jurisdiction="Illinois / St. Clair County"
                  stage="Civil lawsuit filed"
                  date="October 2026 filing; October 27 reporting"
                  registry="Registry status not mentioned"
                summary={<>A tenth man filed a lawsuit alleging abuse years earlier by the late superintendent, and that district officials allowed him access to students despite multiple reported concerns over decades.</>}
                whyIncluded={<>The complaint focuses on longstanding institutional knowledge and the failure to protect students despite recurring warnings.</>}
                sources={[
                    { label: "Belleville News-Democrat report (republished)", href: "https://www.aol.com/articles/tenth-man-alleges-sexual-abuse-100000000.html" },
                ]}
              />
              <CaseRow
                  name="Evergreen Public Schools / Byron Ellsworth Hall III"
                  role="School district and former school staff member"
                  jurisdiction="Washington / Clark County"
                  stage="Civil lawsuit filed"
                  date="October 2026; October 28 reporting"
                  registry="Registry status not mentioned"
                summary={<>A former student filed a complaint alleging sexual abuse during school years and that employees knew or should have known of improper conduct. The district disputed neither nor confirmed the allegations in the reviewed report and declined comment on the litigation.</>}
                whyIncluded={<>School events and one-on-one instruction can create proximity. The claim specifically alleges failures of supervision and reporting.</>}
                sources={[
                    { label: "KOIN report (republished)", href: "https://www.aol.com/articles/former-student-sues-evergreen-public-001540000.html" },
                ]}
              />
              <Subgroup>Education / youth sports; institutional oversight</Subgroup>
              <CaseRow
                  name="Ranier Rackley / Wake County Board of Education"
                  role="Former Rolesville coach and public school district"
                  jurisdiction="North Carolina / Wake County"
                  stage="Civil lawsuit reported"
                  date="October 23, 2026 reporting on earlier complaint"
                  registry="No prior registration noted"
                summary={<>October reporting detailed an earlier-filed civil complaint alleging sexual abuse at a high school and inadequate district intervention. Police previously marked the investigation unfounded, no criminal charges were filed, and the defendant has denied the allegations.</>}
                whyIncluded={<>This is an unresolved civil institutional-accountability dispute, not a conviction. It tests whether a district fulfilled its supervision duties and how allegations are investigated.</>}
                sources={[
                    { label: "WRAL / court and police records", href: "https://www.wral.com/news/local/wake-county-schools-rackley-sexual-abuse-civil-lawsuit-october-2026/" },
                ]}
              />
              <Subgroup>Law enforcement / corrections; institutional oversight</Subgroup>
              <CaseRow
                  name="Doe v. County of Lake"
                  role="County juvenile detention facility"
                  jurisdiction="California / federal civil court"
                  stage="Court ruling in civil case"
                  date="October 6, 2026"
                  registry="Registry status not mentioned"
                summary={<>A federal judge allowed some claims arising from alleged sexual abuse and institutional failures at Lake County Juvenile Hall to proceed while dismissing others. The order did not decide whether the underlying abuse allegations are true.</>}
                whyIncluded={<>Judicial examination of custody-facility safeguards underscores the unusually strong duty of care owed to confined minors.</>}
                sources={[
                    { label: "Federal court order via Justia", href: "https://law.justia.com/cases/federal/district-courts/california/candce/3%3A2026cv02878/467088/43/" },
                ]}
              />
            </Section>

            <Section title="Institutional Shielding & Findings" eyebrow="Oversight and structural risk">
              <Subgroup>Politics / civic leadership; institutional shielding</Subgroup>
              <CaseRow
                  name="U.S. House of Representatives"
                  role="Congressional workplace misconduct and reporting rules"
                  jurisdiction="Washington, D.C. / Congress"
                  stage="Investigative report"
                  date="October 24, 2026"
                  registry="Registry status not mentioned"
                summary={<>Associated Press reporting described a bipartisan review of congressional sexual-harassment procedures, including concerns about retaliation, difficult reporting channels, and complaint deadlines, against the backdrop of ethics proceedings.</>}
                whyIncluded={<>The accountability issue is structural: employees may fear loss of careers when reporting misconduct by powerful officials. The report is journalism about a working-group review, not a new judicial finding.</>}
                sources={[
                    { label: "Associated Press", href: "https://apnews.com/article/2966245df0c1aaf29d9239a100307e39" },
                ]}
              />
            </Section>


            <Section title="Watchlist" eyebrow="Developments worth tracking">
              <ul className="list-disc space-y-3 pl-6 text-sm leading-7 text-slate-700">
                <li><strong>Fox Run / Randall MacKendrick:</strong> monitor the federal charges and separate investigations, including any oversight or licensing reviews tied to youth residential care.</li>
                <li><strong>Newton / Butler:</strong> track the accessory allegation, prior reports, and whether the church or other leaders knew of warning signs.</li>
                <li><strong>Nebraska YRTC-Kearney:</strong> follow the civil claims, employee charges, official investigations, and safety reforms at the state-operated facility.</li>
                <li><strong>High-profile proceedings:</strong> monitor substantive rulings and appeals in the Florida civil action involving Gaetz, Greenberg, and Dorworth and in the Alexander brothers' federal cases.</li>
                <li><strong>Institutional defendants:</strong> watch for filings and findings involving the Volusia church and school, Freeburg, Evergreen, and Koinonia Christian Church.</li>
              </ul>
            </Section>
            <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm sm:p-7">
              <h2 className="mb-3 text-xl font-bold text-slate-950">Legal and registry note</h2>
              <p>Arrests, charges, indictments, lawsuits, and investigative reports do not establish guilt. Defendants are presumed innocent unless and until proven guilty; a disciplinary decision or procedural court ruling is not a criminal conviction. Facts attributed to prosecutors, plaintiffs, or investigators should be read in their appropriate legal posture.</p>
              <p className="mt-3">Registry labels are based only on the public sources reviewed. “No prior registration noted” does not establish that a person was never registered, and it is not a nationwide registry search. To preserve the existing series display convention, an entry marked “Registry status not mentioned” also appears as “Registry: No prior registration noted” in its case card. A statement that a convicted person must register after sentencing does not by itself establish prior registration.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
