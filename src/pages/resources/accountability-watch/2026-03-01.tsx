// src/pages/resources/accountability-watch/2026-03-01.tsx

import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote, Info } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "February’s strongest cases clustered around schools, youth sports, law enforcement, and child-facing therapeutic roles.",
  "The Aliceville matter stood out as a multi-person institutional cluster involving police and school personnel.",
  "Federal Project Safe Childhood cases provided the strongest source base for pleas and sentencings.",
  "Several entries involved non-registrant institutional actors, with no prior registry history mentioned in the source material.",
];

type Stage =
  | "Civil lawsuit filed"
  | "Arrested / Charged"
  | "Indicted"
  | "Investigative subcommittee opened"
  | "Guilty plea"
  | "Convicted"
  | "Sentenced"
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
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
      {icon}
      {children}
    </span>
  );
}

function StageBadge({ stage }: { stage: Stage }) {
  const tones: Record<string, string> = {
    "Civil lawsuit filed": "border-sky-300 bg-sky-50 text-sky-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    Indicted: "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Investigative subcommittee opened": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Guilty plea": "border-violet-300 bg-violet-50 text-violet-800",
    Convicted: "border-violet-300 bg-violet-50 text-violet-800",
    Sentenced: "border-emerald-300 bg-emerald-50 text-emerald-800",
  };

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${tones[stage] ?? "border-slate-300 bg-slate-50 text-slate-700"}`}>
      {stage}
    </span>
  );
}

function RegistryChip({ status }: { status: RegistryStatus }) {
  const isPreviouslyRegistered = status === "Previously registered";
  const display = isPreviouslyRegistered ? "Registry: Previously registered" : "Registry: No prior registration noted";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${
        isPreviouslyRegistered
          ? "border-rose-300 bg-rose-50 text-rose-800"
          : "border-emerald-300 bg-emerald-50 text-emerald-800"
      }`}
      title={status === "Registry status not mentioned" ? "Source material reviewed did not mention prior registration history." : undefined}
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
    <section className="rounded-3xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm md:p-7">
      {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{eyebrow}</p>}
      <h2 className="mb-5 text-2xl font-bold text-slate-950">{title}</h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-800">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
        <Quote className="h-4 w-4" />
        Accountability frame
      </div>
      <div className="text-sm leading-6">{children}</div>
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
  emoji = "🧾",
  whyIncluded,
}: CaseRowProps) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-100 shadow-md shadow-slate-950/10 md:p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-3">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-2xl" aria-hidden="true">
            {emoji}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-sm font-medium leading-6 text-slate-300">{role}</p>
          </div>
        </div>
        <div className="text-left md:text-right">
          <p className="text-sm font-semibold text-slate-100">{date}</p>
          <p className="text-xs leading-5 text-slate-400">{jurisdiction}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <StageBadge stage={stage} />
        <RegistryChip status={registry} />
      </div>

      <div className="mt-4 text-sm leading-6 text-slate-300">{summary}</div>

      {whyIncluded && (
        <div className="mt-4 rounded-xl border border-amber-300/40 bg-amber-100/10 p-3 text-sm leading-6 text-amber-100">
          <span className="font-semibold text-amber-50">Why included: </span>
          {whyIncluded}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {sources.map((source) => (
          <a
            key={`${name}-${source.href}`}
            href={source.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-blue-300/70 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 underline underline-offset-2 hover:bg-blue-100"
          >
            {source.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default function AccountabilityWatch20260301() {
  const pageTitle = "Accountability Watch — February 2026 Roundup | SOLAR";

  return (
    <main className="min-h-screen bg-slate-100">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="February 2026 Accountability Watch roundup covering authority, access, and institutional-accountability cases involving sexual offenses and child exploitation."
        />
      </Helmet>

      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <div className="mb-5 flex flex-wrap gap-2">
            <Badge icon={<Shield className="h-3.5 w-3.5" />}>Accountability Watch</Badge>
            <Badge icon={<Scale className="h-3.5 w-3.5" />}>February 2026 roundup</Badge>
            <Badge icon={<FileText className="h-3.5 w-3.5" />}>Verified-source shortlist</Badge>
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Accountability Watch — February 2026 Roundup
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 md:text-lg">
            Search window: February 1, 2026, 12:00 AM ET through February 28, 2026, 11:59 PM ET. This page is a disciplined catch-up shortlist focused on authority, access, and institutional accountability.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-600 bg-slate-950/45 p-4 text-sm leading-6 text-slate-200">
            <div className="mb-2 flex items-center gap-2 font-semibold text-white">
              <Info className="h-4 w-4" />
              Framing note
            </div>
            Allegations are not findings of guilt. Entries are included because the approved case set involved public trust, school or youth-program access, law-enforcement authority, child-facing professional roles, or civic legitimacy.
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 md:px-6">
        <ShareBar title="Accountability Watch — February 2026 Roundup" />

        <Section title="At a Glance" eyebrow="Monthly pattern">
          <div className="grid gap-3 md:grid-cols-2">
            {teaserHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800">
                {item}
              </div>
            ))}
          </div>
          <PullQuote>
            The approved February set is concentrated in schools, youth sports, law enforcement, and child-facing therapeutic roles. Political and public-role entries were fewer but high-salience because they layered public legitimacy onto alleged or proven misconduct.
          </PullQuote>
        </Section>

        <Section title="New Arrests & Charges" eyebrow="School, youth-program, coaching, and institutional-access cases">
          <CaseRow
            name="Xaviour Smith"
            role="Prince George’s County Public Schools employee / youth dance academy founder"
            jurisdiction="Maryland / federal"
            stage="Indicted"
            date="Feb. 19, 2026"
            registry="Registry status not mentioned"
            emoji="🏫"
            summary={
              <>
                Federal prosecutors say Smith was charged in a child-exploitation case involving minors. DOJ also identified him as the founder of a youth dance academy serving ages 8–18.
              </>
            }
            whyIncluded="School-system employment plus youth-program leadership created a trust-and-access profile around minors."
            sources={[
              {
                label: "DOJ / USAO Maryland",
                href: "https://www.justice.gov/usao-md/pr/pg-county-schools-employee-indicted-alleged-child-sex-abuse-crimes",
              },
            ]}
          />

          <CaseRow
            name="Andre Scione"
            role="Warhill High School teacher / former Toano Middle School employee"
            jurisdiction="James City County, Virginia"
            stage="Arrested / Charged"
            date="Feb. 23, 2026"
            registry="Registry status not mentioned"
            emoji="🏫"
            summary={
              <>
                James City County police said Scione was charged after allegations involving three WJCC students, with conduct alleged to have begun when the students were at the middle school where he previously worked.
              </>
            }
            whyIncluded="The official account describes an educator/student nexus and alleged abuse of school-based access."
            sources={[
              {
                label: "James City County Police",
                href: "https://www.jamescitycountyva.gov/CivicAlerts.aspx?AID=6697",
              },
            ]}
          />

          <CaseRow
            name="Scott Marino"
            role="Malden Public Schools teacher and basketball coach"
            jurisdiction="Massachusetts"
            stage="Arrested / Charged"
            date="Feb. 25, 2026"
            registry="Registry status not mentioned"
            emoji="🏀"
            summary={
              <>
                The Middlesex District Attorney’s Office said Marino was arrested in an alleged assault case involving an 18-year-old known to him and was also charged with furnishing alcohol to a person under 21.
              </>
            }
            whyIncluded="Included because the approved set treats the educator/coach authority role as central, even though the alleged victim was not described as a student."
            sources={[
              {
                label: "Middlesex DA",
                href: "https://www.middlesexda.com/press-releases/news/malden-teacher-arrested-and-charged-sexual-assault",
              },
            ]}
          />

          <CaseRow
            name="Caminion Gary, Antonius Belgrave, Winston Bishop, Roderick Granger, Lakethia Wilkins"
            role="Aliceville police officer and four school faculty members"
            jurisdiction="Pickens County, Alabama"
            stage="Arrested / Charged"
            date="Feb. 18, 2026"
            registry="Registry status not mentioned"
            emoji="🚨"
            summary={
              <>
                Local reporting, citing prosecutor and school-system statements, described arrests involving an Aliceville police officer and four school faculty members in a child-exploitation and minor-related abuse investigation. The school district reported personnel actions.
              </>
            }
            whyIncluded="This is an unusually concentrated institutional cluster involving both law enforcement and school personnel."
            sources={[
              {
                label: "ABC 33/40 — DA / school statements",
                href: "https://abc3340.com/news/local/one-officer-and-four-school-faculty-members-arrested-for-child-pornography-related-charges",
              },
              {
                label: "ABC 33/40 — ALEA follow-up",
                href: "https://abc3340.com/news/local/alea-details-charges-in-ongoing-pickens-county-child-exploitation-investigation-aliceville-police",
              },
            ]}
          />

          <CaseRow
            name="Dennis Johnson Jr."
            role="Former Arkansas High School coach"
            jurisdiction="Texarkana, Arkansas"
            stage="Arrested / Charged"
            date="Feb. 20, 2026"
            registry="Registry status not mentioned"
            emoji="🏈"
            summary={
              <>
                Texarkana Today reported that Texarkana Arkansas police described a juvenile outcry, warrant review, and charges tied to Johnson’s position of influence as a coach at Arkansas High School.
              </>
            }
            whyIncluded="The police account cited by local reporting makes the coach/student authority-access logic explicit."
            sources={[
              {
                label: "Texarkana Today / TAPD account",
                href: "https://txktoday.com/news/texarkana-arkansas-police-former-arkansas-high-coach-charged-in-sexual-assault-case/",
              },
            ]}
          />

          <CaseRow
            name="Danielle Weaver"
            role="Former Lee County High School teacher"
            jurisdiction="Leesburg / Lee County, Georgia"
            stage="Arrested / Charged"
            date="Feb. 18, 2026"
            registry="Registry status not mentioned"
            emoji="🏫"
            summary={
              <>
                The Georgia Bureau of Investigation said Weaver was arrested after allegations involving a juvenile student at Lee County High School.
              </>
            }
            whyIncluded="Direct teacher/student authority-access nexus, supported by an official state investigative source."
            sources={[
              {
                label: "Georgia Bureau of Investigation",
                href: "https://gbi.georgia.gov/press-releases/2026-02-18/gbi-arrests-lee-county-teacher-child-molestation-and-improper-sexual",
              },
            ]}
          />

          <CaseRow
            name="Benjamin Shroats"
            role="Figure skating coach / former coach of Olympian Amber Glenn"
            jurisdiction="Collin County, Texas"
            stage="Arrested / Charged"
            date="Feb. 18, 2026"
            registry="Registry status not mentioned"
            emoji="⛸️"
            summary={
              <>
                PEOPLE and NBC 5 Dallas-Fort Worth reported Shroats was arrested in Collin County after allegations involving former skating students. The reports describe an ongoing Allen Police investigation.
              </>
            }
            whyIncluded="Youth-sports coaching access and the February arrest window make the case relevant, with source-strength noted because an official written release was not located in the initial pass."
            sources={[
              {
                label: "PEOPLE",
                href: "https://people.com/amber-glenn-former-coach-arrested-accusations-sex-crimes-with-students-11910455",
              },
              {
                label: "NBC 5 Dallas-Fort Worth",
                href: "https://www.nbcdfw.com/news/local/figure-skating-coach-arrested-in-collin-county/3986622/",
              },
            ]}
          />
        </Section>

        <Section title="Pleas / Convictions / Sentencings" eyebrow="Federal and court-resolved cases inside the February window">
          <CaseRow
            name="Joseph Garofalo"
            role="Assistant high school lacrosse coach"
            jurisdiction="Long Island, New York / federal"
            stage="Guilty plea"
            date="Feb. 5, 2026"
            registry="Registry status not mentioned"
            emoji="🥍"
            summary={
              <>
                DOJ said Garofalo pleaded guilty in a federal child-exploitation case and identified him as an assistant high school lacrosse coach at the time of the offense.
              </>
            }
            whyIncluded="Youth-coach authority role plus a large multi-victim exploitation pattern in a federal Project Safe Childhood case."
            sources={[
              {
                label: "DOJ / USAO EDNY",
                href: "https://www.justice.gov/usao-edny/pr/long-island-assistant-high-school-lacrosse-coach-pleads-guilty-sexual-exploitation",
              },
            ]}
          />

          <CaseRow
            name="Matthew Ozol"
            role="Former teacher"
            jurisdiction="Jersey City, New Jersey / federal"
            stage="Guilty plea"
            date="Feb. 11, 2026"
            registry="Registry status not mentioned"
            emoji="📚"
            summary={
              <>
                DOJ said Ozol pleaded guilty to possessing illegal materials involving minors. Investigators also cited messages about children as part of the federal case.
              </>
            }
            whyIncluded="Former educator with a child-exploitation offense and no prior-registration history noted in the source material."
            sources={[
              {
                label: "DOJ / USAO New Jersey",
                href: "https://www.justice.gov/usao-nj/pr/former-teacher-admits-possessing-child-pornography",
              },
            ]}
          />

          <CaseRow
            name="Renee Hoberman, also known as “Rina”"
            role="Licensed social worker / child and adolescent mental health counselor"
            jurisdiction="Long Island, New York / federal"
            stage="Sentenced"
            date="Feb. 20, 2026"
            registry="Registry status not mentioned"
            emoji="🧠"
            summary={
              <>
                DOJ said Hoberman was sentenced to 84 months in a federal case involving illegal materials involving minors and identified her as a licensed social worker.
              </>
            }
            whyIncluded="Child-facing therapeutic trust role combined with a federal child-exploitation offense."
            sources={[
              {
                label: "DOJ / USAO EDNY",
                href: "https://www.justice.gov/usao-edny/pr/long-island-child-therapist-sentenced-84-months-distributing-child-pornography",
              },
            ]}
          />

          <CaseRow
            name="Otilio Green"
            role="Former Yale University police officer"
            jurisdiction="Connecticut / federal"
            stage="Guilty plea"
            date="Feb. 27, 2026"
            registry="Registry status not mentioned"
            emoji="🚔"
            summary={
              <>
                DOJ said Green pleaded guilty in a federal child-exploitation case and was employed as a Yale University police officer at the time of the offense.
              </>
            }
            whyIncluded="Law-enforcement authority role, qualifying offense, and a meaningful plea inside the February window."
            sources={[
              {
                label: "DOJ / USAO Connecticut",
                href: "https://www.justice.gov/usao-ct/pr/former-police-officer-pleads-guilty-federal-child-exploitation-offense",
              },
            ]}
          />
        </Section>

        <Section title="Institutional / Political Misconduct" eyebrow="Public-role and civic-legitimacy cases">
          <CaseRow
            name="Andrew LaBruno"
            role="Former Dumont mayor / Jersey City police sergeant"
            jurisdiction="Bergen County, New Jersey"
            stage="Indicted"
            date="Feb. 24, 2026"
            registry="Registry status not mentioned"
            emoji="🏛️"
            summary={
              <>
                New Jersey Globe reported LaBruno was indicted in a minor-involved abuse case that also includes an official-misconduct allegation tied to his police status while on duty.
              </>
            }
            whyIncluded="High-salience political and law-enforcement authority case with an official-misconduct allegation."
            sources={[
              {
                label: "New Jersey Globe",
                href: "https://newjerseyglobe.com/local/ex-mayor-indicted-for-drugging-raping-boy-will-be-arraigned-next-week/",
              },
            ]}
          />

          <CaseRow
            name="Naheed Ejaz and Diwan Khan"
            role="Former Bracknell Forest mayor and former mayoral consort"
            jurisdiction="Bracknell Forest / Winchester Crown Court, U.K."
            stage="Convicted"
            date="Feb. 11, 2026; council statement Feb. 13, 2026"
            registry="Registry status not mentioned"
            emoji="🏛️"
            summary={
              <>
                Bracknell Forest Council said Khan was convicted of a serious sexual offense and Ejaz of obstructive conduct. The council stated the crimes were not committed in their civic roles but involved former public figures.
              </>
            }
            whyIncluded="Public-profile and civic-legitimacy case with a qualifying sexual-misconduct conviction and related accountability statement."
            sources={[
              {
                label: "Bracknell Forest Council",
                href: "https://www.bracknell-forest.gov.uk/news/2026/02/former-mayor-and-former-mayoral-consort",
              },
            ]}
          />
        </Section>

        <Section title="Watchlist" eyebrow="Follow-up points">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Xaviour Smith — federal case posture after indictment; watch for detention rulings, superseding charges, and institutional notice questions.",
              "Aliceville cluster — additional charges, school-district personnel actions, and whether a stronger official written release becomes available.",
              "Joseph Garofalo — sentencing and any victim-count updates from FBI or DOJ.",
              "Andrew LaBruno — arraignment, official-misconduct count, and disclosures about alleged use of police status.",
              "Benjamin Shroats — official court or police records needed to strengthen the source base.",
              "Danielle Weaver — next hearings, indictment status, and any Lee County school-system accountability disclosures.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </Section>

        <div className="rounded-3xl border border-slate-300 bg-white p-5 text-sm leading-6 text-slate-700 shadow-sm md:p-7">
          <div className="mb-2 flex items-center gap-2 font-bold text-slate-950">
            <Scale className="h-5 w-5" />
            Legal and registry note
          </div>
          Defendants are presumed innocent unless and until proven guilty. Charges, indictments, and arrests are allegations, not findings of guilt. Registry notes are limited to the reviewed source material: “Registry status not mentioned” is displayed as “Registry: No prior registration noted” to preserve the series’ prevention-policy framing without inventing registry history.
        </div>
      </div>
    </main>
  );
}