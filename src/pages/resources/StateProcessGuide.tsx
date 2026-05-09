import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";
import {
  GuideSectionHeader,
  GuideSectionCard,
  GuideProse,
  GuideCallout,
  GuideIntro,
  SoftDivider,
  OverviewCards,
  GuideChecklist,
  GuideIconList,
  OfflineOptions,
  VerifyBeforeActing,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
} from "../../components/solar";

const stateStages = [
  {
    id: "investigation",
    number: "1",
    title: "Investigation",
    duration: "Timing varies widely",
    icon: "🔎",
    summary:
      "State and local investigations may involve police departments, sheriff’s offices, child-protection agencies, state investigators, ICAC task forces, or prosecutors. Some people know they are under investigation; others first learn through a search, interview request, subpoena, warrant, arrest, or device seizure.",
    concepts: [
      {
        icon: <span aria-hidden="true">📱</span>,
        title: "Digital evidence may be central",
        description:
          "Sex-offense investigations may involve phones, computers, cloud accounts, social media, apps, images, messages, location data, or forensic review.",
      },
      {
        icon: <span aria-hidden="true">🧭</span>,
        title: "Your status can change",
        description:
          "A person may be treated as a witness, suspect, target, or potential defendant. Do not rely on informal labels without counsel.",
      },
      {
        icon: <span aria-hidden="true">🚪</span>,
        title: "Searches and interviews matter",
        description:
          "Consent, warrants, statements, and device access can shape the case. Get legal advice before speaking or agreeing to a search.",
      },
    ],
    actors:
      "Local police, sheriff’s office, state investigators, ICAC task force, child-protection agency, prosecutor, defense counsel, and sometimes federal partners.",
    practicalMoves: [
      "Contact a qualified state criminal defense attorney before speaking with investigators.",
      "Do not consent to interviews, searches, device access, account access, or polygraphs without legal advice.",
      "Save business cards, warrants, subpoenas, receipts, letters, phone numbers, and written instructions.",
      "Do not post about the accusation, the investigation, the alleged victim, witnesses, police, or the family situation.",
    ],
  },
  {
    id: "arrest-booking-first-appearance",
    number: "2",
    title: "Arrest, Booking, and First Appearance",
    duration: "Usually soon after arrest, but state law controls",
    icon: "🏛️",
    summary:
      "After arrest or summons, the person may be booked, brought before a judge, advised of charges or rights, and considered for release, bond, bail, or detention. This stage can feel chaotic because family may have limited information while release conditions are being set quickly.",
    concepts: [
      {
        icon: <span aria-hidden="true">🔐</span>,
        title: "Release conditions can be immediate",
        description:
          "No-contact orders, stay-away orders, device limits, internet limits, travel limits, or child-contact restrictions may begin early.",
      },
      {
        icon: <span aria-hidden="true">💵</span>,
        title: "Bail and bond vary locally",
        description:
          "Some states use bail schedules, some use risk assessment, and some use different pretrial release systems.",
      },
      {
        icon: <span aria-hidden="true">📋</span>,
        title: "Written orders matter",
        description:
          "The exact wording of release, bond, or pretrial conditions controls what the person may and may not do.",
      },
    ],
    actors:
      "Jail or booking staff, magistrate or judge, prosecutor, defense counsel, pretrial services or bond office, and sometimes victim-witness staff.",
    practicalMoves: [
      "Confirm who represents the person before discussing case facts.",
      "Get and save all bond, bail, release, no-contact, device, internet, travel, and reporting conditions.",
      "Ask counsel before arranging contact with anyone connected to the case, including family members who may be witnesses.",
      "Write down the next court date, the court location, the case number, and who has authority over release conditions.",
    ],
  },
  {
    id: "charging-arraignment",
    number: "3",
    title: "Charging, Arraignment, and Early Case Settings",
    duration: "Depends on state law, custody status, and local practice",
    icon: "📄",
    summary:
      "The prosecutor decides what charges to file and how the case will proceed. Depending on the state, charges may begin by complaint, information, indictment, citation, or another charging document. Arraignment or an early court setting usually addresses the formal charge, plea entry, counsel, and future dates.",
    concepts: [
      {
        icon: <span aria-hidden="true">⚖️</span>,
        title: "Charge names are state-specific",
        description:
          "The same conduct may be labeled differently by state, and penalties can depend on age, relationship, force, consent definitions, images, devices, or prior history.",
      },
      {
        icon: <span aria-hidden="true">🗓️</span>,
        title: "Local calendars drive timing",
        description:
          "Court dates may depend on the county, judge, prosecutor, custody status, counsel availability, and local scheduling practice.",
      },
      {
        icon: <span aria-hidden="true">🧾</span>,
        title: "Conditions may be revisited",
        description:
          "Bond, no-contact, technology, residence, travel, and supervision conditions may be clarified or modified through the court.",
      },
    ],
    actors:
      "Prosecutor, judge or magistrate, court clerk, defense counsel, pretrial services or bond office, and sometimes victim-witness staff.",
    practicalMoves: [
      "Review the charging document with counsel and ask what each count means under that state’s law.",
      "Ask counsel about possible mandatory penalties, registration consequences, supervision terms, and collateral consequences.",
      "Save all charging documents, arraignment notices, written conditions, scheduling orders, and clerk instructions.",
      "Do not rely on another state’s law, a different county’s practice, or a generic internet summary.",
    ],
  },
  {
    id: "discovery-motions",
    number: "4",
    title: "Discovery and Pretrial Motions",
    duration: "Often the longest phase",
    icon: "🗂️",
    summary:
      "This is the evidence-review and litigation stage. Defense counsel receives discovery, investigates facts, considers experts or evaluations, and files motions when appropriate. In sex-offense cases, discovery may be sensitive, restricted, or subject to protective orders.",
    concepts: [
      {
        icon: <span aria-hidden="true">🔒</span>,
        title: "Discovery may be restricted",
        description:
          "Reports, images, videos, forensic data, interviews, or protected information may not be shareable with family.",
      },
      {
        icon: <span aria-hidden="true">🔬</span>,
        title: "Experts may matter",
        description:
          "Counsel may consider digital forensic review, psychological evaluation, medical evidence, or other expert issues depending on the case.",
      },
      {
        icon: <span aria-hidden="true">📝</span>,
        title: "Motions can shape the case",
        description:
          "Motions may address searches, statements, warrants, discovery disputes, evidence limits, experts, or trial issues.",
      },
    ],
    actors:
      "Defense counsel, prosecutor, judge, police or forensic examiners, expert witnesses, court staff, and sometimes treatment or evaluation providers.",
    practicalMoves: [
      "Ask counsel what discovery can be discussed, copied, stored, or shared.",
      "Do not ask the person to describe sensitive discovery through jail calls, monitored messages, texts, or social media.",
      "Give counsel organized records only in the way counsel requests.",
      "Track motion deadlines, hearing dates, protective orders, and written court rulings.",
    ],
  },
  {
    id: "plea-trial",
    number: "5",
    title: "Plea Negotiation or Trial",
    duration: "Varies by court calendar and case posture",
    icon: "⚖️",
    summary:
      "Many state cases resolve by plea agreement, while some proceed to bench trial or jury trial. In sex-offense cases, plea decisions often involve more than custody exposure; registration, treatment, supervision, housing, technology limits, appeal rights, and future relief eligibility may all matter.",
    concepts: [
      {
        icon: <span aria-hidden="true">🤝</span>,
        title: "Plea terms can carry long consequences",
        description:
          "A plea may affect registration, supervision, treatment, contact rules, housing, work, immigration, appeals, or future relief options.",
      },
      {
        icon: <span aria-hidden="true">👥</span>,
        title: "Trial is public and stressful",
        description:
          "Trials can involve sensitive testimony, exhibits, expert evidence, and arguments that are difficult for families to hear.",
      },
      {
        icon: <span aria-hidden="true">🧭</span>,
        title: "The choice belongs to the person charged",
        description:
          "Family can help ask questions and provide support, but should not pressure, promise, threaten, or decide for the person.",
      },
    ],
    actors:
      "Defense counsel, prosecutor, judge, jury if applicable, witnesses, victim-witness staff, court clerk, and court security.",
    practicalMoves: [
      "Ask counsel to explain plea, trial, sentencing, registration, supervision, appeal, and collateral-consequence risks together.",
      "Do not pressure the person to accept or reject a plea.",
      "Ask counsel whether any proposed plea affects registration duration, offense classification, treatment, supervision, or later relief.",
      "If media or community attention is possible, ask counsel before anyone posts, speaks publicly, or responds to reporters.",
    ],
  },
{
    id: "sentencing",
    number: "6",
    title: "Presentence Investigation and Sentencing",
    duration: "Usually after conviction; timing varies",
    icon: "📘",
    summary:
      "After a plea or conviction, the court may order a presentence investigation, evaluation, psychosexual assessment, risk assessment, or treatment recommendation depending on state law and local practice. Sentencing can feel exposing because private history, harm, risk, mitigation, family impact, treatment, and punishment may be discussed in court.",
    concepts: [
      {
        icon: <span aria-hidden="true">📋</span>,
        title: "Reports may affect the outcome",
        description:
          "Presentence reports or evaluations can influence custody, probation, parole, treatment, registration, and conditions.",
      },
      {
        icon: <span aria-hidden="true">⚖️</span>,
        title: "Sentencing systems vary",
        description:
          "Some states use guidelines, scoring systems, mandatory minimums, judicial discretion, treatment tracks, or local practices.",
      },
      {
        icon: <span aria-hidden="true">🧾</span>,
        title: "Conditions should be saved",
        description:
          "Probation, treatment, internet, search, contact, travel, housing, work, and registration-related conditions should be kept in writing.",
      },
    ],
    actors:
      "Judge, probation or presentence investigator, prosecutor, defense counsel, treatment or evaluation provider, and court clerk.",
    practicalMoves: [
      "Ask counsel what information should and should not be shared during the presentence or evaluation process.",
      "Send letters, treatment records, work records, family information, and mitigation materials only through counsel’s process.",
      "Ask counsel to explain the sentence, credit rules, supervision terms, registration consequences, and appeal deadlines.",
      "Save the judgment, sentencing order, probation conditions, treatment orders, no-contact orders, and reporting instructions.",
    ],
  },
  {
    id: "custody",
    number: "7",
    title: "Jail, Prison, or State Custody",
    duration: "Depends on sentence and custody authority",
    icon: "🏢",
    summary:
      "A state sentence may involve county jail, state prison, treatment placement, probation with jail time, or another custody arrangement. Custody can feel dehumanizing, especially at intake or transfer, but facilities still have rules and responsibilities around safety, medical care, classification, communication, and release processing.",
    concepts: [
      {
        icon: <span aria-hidden="true">🏛️</span>,
        title: "County and state custody differ",
        description:
          "County jail, state prison, and treatment placement may have different rules, contacts, property limits, visitation, and release procedures.",
      },
      {
        icon: <span aria-hidden="true">📨</span>,
        title: "Communication rules are facility-specific",
        description:
          "Mail, calls, tablets, email, books, photos, money, visits, and video visits depend on the facility’s policy.",
      },
      {
        icon: <span aria-hidden="true">🧭</span>,
        title: "Release planning is a handoff",
        description:
          "The process may shift from custody staff to probation, parole, community supervision, treatment, or a registration office.",
      },
    ],
    actors:
      "County jail, state Department of Corrections, facility staff, classification staff, probation, parole, court, and treatment providers.",
    practicalMoves: [
      "Save the sentencing order, commitment paperwork, facility name, booking or inmate number, and release instructions.",
      "Check the specific facility’s rules before sending mail, money, books, photos, or visitation requests.",
      "Ask which agency controls release timing, credits, transfer decisions, parole review, or post-release supervision.",
      "Use SOLAR’s prison communication and reentry guides for custody communication and personal reentry planning.",
    ],
  },
  {
    id: "registration-supervision",
    number: "8",
    title: "Probation, Parole, Registration, and Local Handoffs",
    duration: "Begins when the controlling rule says it begins",
    icon: "🧾",
    summary:
      "After conviction or release, a person may have probation, parole, post-release supervision, treatment, monitoring, no-contact rules, and state or local registration duties. This stage can feel intrusive because ordinary choices may require permission, reporting, documentation, or in-person updates.",
    concepts: [
      {
        icon: <span aria-hidden="true">🧑‍💼</span>,
        title: "Supervision and registration are not the same",
        description:
          "Probation or parole may supervise behavior, while a local registration office may control reporting forms, deadlines, and receipts.",
      },
      {
        icon: <span aria-hidden="true">📍</span>,
        title: "Local office practice matters",
        description:
          "Registration may be handled by a sheriff, police department, state police, registry unit, or another office depending on the state.",
      },
      {
        icon: <span aria-hidden="true">🔁</span>,
        title: "Updates may be required",
        description:
          "Address, employment, school, vehicle, travel, internet identifier, or other updates may have deadlines under state law or conditions.",
      },
    ],
    actors:
      "Probation, parole, state DOC, local law enforcement, state registry office, treatment provider, court, and defense counsel for modification or relief questions.",
    practicalMoves: [
      "Get written supervision conditions and ask who approves travel, residence, employment, internet, contact, or treatment questions.",
      "Verify registration deadline, location, required documents, update rules, travel rules, and receipt process with the registering authority.",
      "Save receipts, appointment cards, forms, names, badge numbers, dates, and written instructions.",
      "Ask counsel about modification, clarification, early termination, relief from registration, or appeal options before filing anything yourself.",
    ],
  },
];

export default function StateProcessGuide(): React.JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="State Sex-Crime Process Guide | The SOLAR Project"
        description="A plain-language roadmap to the state sex-crime process, from investigation through court, custody, supervision, and registration-related local handoffs."
        keywords="state sex-crime process, state criminal court, sex offense case, probation, parole, registry, state court, SOLAR Project"
      />

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white py-12 sm:py-16 no-print">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm text-slate-200 hover:text-white transition-colors"
          >
            ← Back to Resources
          </Link>

          <div className="mt-5 inline-flex rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
            SOLAR Resource Guide
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            State Sex-Crime Process Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical roadmap for understanding how state and local systems may be involved from investigation through court, custody, supervision, and registration.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100 transition-colors"
            >
              🖨️ Print Guide
            </button>

            <a
              href="#sources"
              className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Jump to Sources
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ShareBar />

        <GuideIntro title="Start Here" icon="🧭">
          <p>
            State sex-crime cases share a recognizable shape, but the answers that control your situation usually come from the specific state, county, court, supervision agency, registry office, and written conditions involved.
          </p>
          <p>
            This guide is not legal advice and cannot cover every state. Its job is to help you understand the common process, know what can vary, ask better local questions, save the right paperwork, and support a loved one without creating new risk.
          </p>
        </GuideIntro>

        <GuideCallout tone="legal" icon="⚖️" title="Use defense counsel as the center point">
          <p>
            In an active state case, the safest first assumption is simple: do not speak with investigators, contact witnesses, explain the case publicly, or make case decisions without defense counsel. Family and supporters can help most by documenting, organizing, and asking counsel what support is safe.
          </p>
        </GuideCallout>

        <OverviewCards
          columns={4}
          cards={[
            {
              eyebrow: "Phase 1",
              title: "Investigation and arrest",
              icon: "🔎",
              tone: "legal",
              description:
                "Police, sheriffs, ICAC task forces, or state investigators may gather evidence before or after arrest.",
            },
            {
              eyebrow: "Phase 2",
              title: "Charging and early court",
              icon: "🏛️",
              tone: "warning",
              description:
                "The court addresses charges, counsel, release, bond, no-contact orders, and early deadlines.",
            },
            {
              eyebrow: "Phase 3",
              title: "Discovery, plea, or trial",
              icon: "🗂️",
              tone: "info",
              description:
                "Evidence review, motions, negotiations, and trial decisions shape the case and its consequences.",
            },
            {
              eyebrow: "Phase 4",
              title: "Sentencing and handoffs",
              icon: "🧾",
              tone: "reentry",
              description:
                "Custody, probation, parole, treatment, supervision, and registration often involve different authorities.",
            },
          ]}
        />

        <GuideSectionHeader
          id="state-variance"
          number="1"
          title="Why state cases vary so much"
          subtitle="The process has a common shape, but the controlling answer is usually local."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A state sex-crime case is not one national system. State statutes define most charges and penalties. County prosecutors decide how many cases are charged. Local judges and court calendars affect timing. Pretrial services, bond offices, probation, parole, state corrections, treatment providers, and registry offices may each control different pieces.
            </p>

            <p>
              That does not mean everything is unknowable. It means the safest approach is to use the roadmap below, then verify the specific step with the person or office that actually has authority over it.
            </p>
          </GuideProse>

          <GuideIconList
            title="What can change by state or county"
            columns={3}
            items={[
              {
                icon: <span aria-hidden="true">📜</span>,
                title: "Charge names and penalties",
                description:
                  "Definitions, felony levels, mandatory penalties, and registration consequences vary by state law.",
              },
              {
                icon: <span aria-hidden="true">🔐</span>,
                title: "Release conditions",
                description:
                  "Bond, no-contact orders, device limits, internet rules, and travel restrictions can be very local.",
              },
              {
                icon: <span aria-hidden="true">⚖️</span>,
                title: "Court practice",
                description:
                  "Arraignment, discovery, motion, plea, and trial timing may depend on county calendars and local rules.",
              },
              {
                icon: <span aria-hidden="true">📘</span>,
                title: "Sentencing systems",
                description:
                  "Some states use guidelines or scoring systems; others rely more on statutory ranges and judicial discretion.",
              },
              {
                icon: <span aria-hidden="true">🏢</span>,
                title: "Custody authority",
                description:
                  "A sentence may involve county jail, state prison, treatment placement, parole, or community supervision.",
              },
              {
                icon: <span aria-hidden="true">🧾</span>,
                title: "Registration practice",
                description:
                  "Registration may be handled by a sheriff, police department, state police, or specialized registry office.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🧭" title="Use this guide as a map, not a substitute for local rules">
            <p>
              The useful question is not only “What usually happens?” It is also “Who controls this exact step in this state, county, court, supervision office, or registry office — and what can I save in writing?”
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="how-to-use"
          number="2"
          title="How to use this guide"
          subtitle="Start with the stage you are in, then identify what must be verified locally."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Timing can change because of custody status, charge level, discovery volume, continuances, plea negotiations, evaluations, expert review, local court calendars, counsel changes, prosecutor practice, and state or county procedure.
            </p>

            <p>
              Treat the timelines here as orientation, not promises. The most reliable information usually comes from defense counsel, written court orders, the docket, pretrial services or bond office, probation or parole, the state Department of Corrections, or the local registration office that has authority over the step.
            </p>
          </GuideProse>

          <GuideChecklist
            id="first-things-to-save"
            title="First things to save"
            columns={2}
            items={[
              {
                id: "attorney-contact",
                label:
                  "Defense attorney name, phone number, email, and after-hours instructions.",
              },
              {
                id: "court-papers",
                label:
                  "Charging documents, case number, court notices, bond paperwork, and scheduling orders.",
              },
              {
                id: "conditions",
                label:
                  "No-contact, stay-away, device, internet, travel, residence, treatment, and reporting conditions.",
              },
              {
                id: "agency-info",
                label:
                  "Business cards, subpoenas, warrants, receipts, forms, and agency contact information.",
              },
              {
                id: "supervision-registration",
                label:
                  "Probation, parole, DOC, treatment, and registration instructions or receipts.",
              },
              {
                id: "notes",
                label:
                  "A dated log of names, departments, phone numbers, badge numbers, instructions, and confirmation numbers.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="family-support"
          number="3"
          title="How family can help without creating risk"
          subtitle="Support is useful when it reduces chaos without interfering with the case."
        />

        <GuideSectionCard>
          <GuideIconList
            title="Helpful roles for family and supporters"
            columns={3}
            items={[
              {
                icon: <span aria-hidden="true">🗓️</span>,
                title: "Calendar keeper",
                description:
                  "Track court dates, attorney calls, bond deadlines, treatment appointments, and reporting instructions.",
              },
              {
                icon: <span aria-hidden="true">🏠</span>,
                title: "Household stabilizer",
                description:
                  "Help with childcare, work coverage, transportation, bills, pets, or other needs that keep daily life from collapsing.",
              },
              {
                icon: <span aria-hidden="true">🗂️</span>,
                title: "Document organizer",
                description:
                  "Collect records counsel requests and keep notices, conditions, dates, and written instructions in one place.",
              },
            ]}
          />

          <SoftDivider />

          <GuideChecklist
            id="family-safe-help"
            title="Safe support checklist"
            columns={1}
            items={[
              {
                id: "family-ask-counsel",
                label:
                  "Ask counsel what help is safe before contacting agencies, gathering records, or speaking with anyone connected to the case.",
              },
              {
                id: "family-track-instructions",
                label:
                  "Save attorney instructions, court notices, bond conditions, probation directions, treatment instructions, and registration paperwork.",
              },
              {
                id: "family-organize-documents",
                label:
                  "Organize documents for counsel by topic and date instead of sending scattered screenshots or long emotional summaries.",
              },
              {
                id: "family-avoid-contact",
                label:
                  "Do not contact alleged victims, witnesses, co-defendants, investigators, or people connected to the case unless counsel has clearly said it is safe and lawful.",
              },
              {
                id: "family-avoid-posting",
                label:
                  "Avoid public posts, private-group speculation, fundraising claims, media responses, or online investigation about the case.",
              },
            ]}
          />

          <GuideCallout tone="family" icon="🤝" title="You do not have to solve the legal case">
            <p>
              Family support is often most useful when it lowers stress around the person instead of trying to control the defense. Keep notes, preserve paperwork, support daily logistics, and let counsel guide case-related action.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="what-this-may-feel-like"
          number="4"
          title="What this may feel like"
          subtitle="State cases can move through public, local systems that feel fast, exposing, and personal."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A state sex-crime case can feel frightening, humiliating, confusing, and isolating. Arrest and booking can feel chaotic. Court hearings may describe the case in harsh terms. Bond conditions may immediately affect home life, devices, work, parenting, transportation, or contact with people the family cares about.
            </p>

            <p>
              Those reactions are real. They do not mean the case is over, that the person has no rights, or that family support has no place. The safest response is to slow down, write things down, work through counsel, and separate what you are hearing emotionally from what you need to do procedurally.
            </p>
          </GuideProse>

          <GuideIconList
            title="Emotional reality checks"
            columns={2}
            items={[
              {
                icon: <span aria-hidden="true">🌪️</span>,
                title: "Arrest can feel chaotic",
                description:
                  "Focus first on counsel, written release conditions, and the next court date.",
              },
              {
                icon: <span aria-hidden="true">🏛️</span>,
                title: "Hearings can feel public",
                description:
                  "Local courtrooms can feel exposing. The government’s version is not the whole defense story.",
              },
              {
                icon: <span aria-hidden="true">🔐</span>,
                title: "Restrictions can feel sudden",
                description:
                  "No-contact, housing, device, travel, internet, or child-contact rules may change daily life immediately.",
              },
              {
                icon: <span aria-hidden="true">🧭</span>,
                title: "Registration can feel overwhelming",
                description:
                  "Deadlines and local reporting rules are serious. Verify the exact rule and save proof.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="state-timeline"
          number="5"
          title="The state process, stage by stage"
          subtitle="The stages are common, but the controlling rules are state, county, and case-specific."
        />

        {stateStages.map((stage) => (
          <GuideSectionCard key={stage.id}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Stage {stage.number} · {stage.duration}
                </div>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  <span className="mr-2" aria-hidden="true">
                    {stage.icon}
                  </span>
                  {stage.title}
                </h3>
              </div>
            </div>

            <GuideProse>
              <p>{stage.summary}</p>
            </GuideProse>

            <GuideIconList
              title="What this stage usually means"
              columns={3}
              items={stage.concepts}
            />

            <GuideCallout tone="neutral" icon="👥" title="Who may be involved">
              <p>{stage.actors}</p>
            </GuideCallout>

            <GuideChecklist
              id={`${stage.id}-practical-moves`}
              title="Practical moves at this stage"
              columns={1}
              items={stage.practicalMoves.map((item, index) => ({
                id: `${stage.id}-move-${index + 1}`,
                label: item,
              }))}
            />
          </GuideSectionCard>
        ))}
<GuideSectionHeader
          id="state-federal-differences"
          number="6"
          title="How state cases differ from federal cases"
          subtitle="State cases can look familiar, but the authority, timing, custody, and registration rules often work differently."
        />

        <GuideSectionCard>
          <GuideIconList
            title="Key differences to keep in mind"
            columns={3}
            items={[
              {
                icon: <span aria-hidden="true">🗓️</span>,
                title: "Local speed",
                description:
                  "State cases may move quickly in some counties and slowly in others. Court calendars and custody status matter.",
              },
              {
                icon: <span aria-hidden="true">💵</span>,
                title: "Bail and bond",
                description:
                  "Pretrial release systems vary widely. Conditions can still be strict even when release is granted.",
              },
              {
                icon: <span aria-hidden="true">📘</span>,
                title: "Sentencing systems",
                description:
                  "There is no single national state sentencing system. Statutes, guidelines, scoring, and local practice vary.",
              },
              {
                icon: <span aria-hidden="true">🏢</span>,
                title: "Custody authority",
                description:
                  "County jail, state prison, treatment placement, probation, parole, and state DOC may control different steps.",
              },
              {
                icon: <span aria-hidden="true">🧾</span>,
                title: "Registration authority",
                description:
                  "State law may set the duty, but local offices often control reporting instructions and receipts.",
              },
              {
                icon: <span aria-hidden="true">⚖️</span>,
                title: "Dual sovereignty",
                description:
                  "In some situations, state and federal authorities may both have interests in similar conduct.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⚖️" title="Ask directly about state, federal, or parallel-investigation risk">
            <p>
              Do not assume one state case, dismissal, plea, or sentence automatically prevents another jurisdiction from acting. Ask counsel whether there is any federal interest, another state’s interest, or parallel-investigation risk.
            </p>
          </GuideCallout>

          <RelatedGuides
            guides={[
              {
                title: "Federal Sex-Crime Process Guide",
                description:
                  "Compare state-process issues with federal investigation, court, BOP custody, and supervised release handoffs.",
                to: "/resources/federal-process-guide",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="verify"
          number="7"
          title="Verify before acting"
          subtitle="The safest answer usually comes from the office with authority over the exact step."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              State cases often involve overlapping systems. A court clerk may not control bond conditions. A probation officer may not control registration deadlines. A registry office may not be able to change a court order. A treatment provider may have policies that are separate from court rules. Before acting, identify who controls the specific question.
            </p>
          </GuideProse>

          <GuideIconList
            title="Authority check"
            columns={4}
            items={[
              {
                icon: <span aria-hidden="true">⚖️</span>,
                title: "Court",
                description:
                  "Charges, hearings, bond, orders, sentencing, modification, and violations.",
              },
              {
                icon: <span aria-hidden="true">🔐</span>,
                title: "Pretrial or bond office",
                description:
                  "Release reporting, monitoring, check-ins, travel approval, and condition questions.",
              },
              {
                icon: <span aria-hidden="true">🧑‍💼</span>,
                title: "Probation or parole",
                description:
                  "Supervision reporting, permission requests, treatment, monitoring, and violation issues.",
              },
              {
                icon: <span aria-hidden="true">🧾</span>,
                title: "Registration office",
                description:
                  "Reporting deadlines, address updates, forms, receipts, travel notices, and local instructions.",
              },
            ]}
          />

          <VerifyBeforeActing
            whoToAsk="Defense counsel first when the question could affect the case, custody, supervision, registration, housing, work, technology, contact rules, travel, or court compliance. Then ask the specific office with authority."
            whatToAsk="Ask one narrow question at a time: Which state or local rule applies, what deadline applies, who approves it, what form is required, and can I get the answer in writing?"
            whatToSave="Save the date, name, title, department, phone number, email, form, written answer, receipt, confirmation number, and any follow-up instruction."
          />

          <GuideCallout tone="warning" icon="⚠️" title="Do not treat another person’s case as your rule">
            <p>
              Another person’s outcome, county, supervision condition, registry instruction, or state law may not apply to this case. Use examples to form better questions, not as permission to act.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="avoid-mistakes"
          number="8"
          title="Common mistakes to avoid"
          subtitle="These are practical ways people accidentally make a state case harder."
        />

        <GuideSectionCard>
          <GuideIconList
            title="High-risk moves"
            columns={2}
            items={[
              {
                icon: <span aria-hidden="true">🚫</span>,
                title: "Talking without counsel",
                description:
                  "Even a calm explanation to investigators can be misunderstood, incomplete, or used later.",
              },
              {
                icon: <span aria-hidden="true">📣</span>,
                title: "Posting about the case",
                description:
                  "Public posts, private groups, fundraisers, comments, and messages may travel farther than expected.",
              },
              {
                icon: <span aria-hidden="true">☎️</span>,
                title: "Contacting case-related people",
                description:
                  "Reaching out to alleged victims, witnesses, co-defendants, or investigators can create serious risk.",
              },
              {
                icon: <span aria-hidden="true">🔀</span>,
                title: "Blending systems together",
                description:
                  "Court orders, bond rules, probation, parole, treatment, custody, and registration can each have different authority.",
              },
              {
                icon: <span aria-hidden="true">⏰</span>,
                title: "Missing local deadlines",
                description:
                  "Court dates, bond reporting, evaluations, treatment intake, registration, and update deadlines need tracking.",
              },
              {
                icon: <span aria-hidden="true">🔓</span>,
                title: "Using monitored systems carelessly",
                description:
                  "Jail calls, prison email, texts, social media, and shared devices may not be private.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🧭" title="General information is not enough">
            <p>
              The state-process roadmap is useful, but the exact answer can depend on state law, county practice, judge, prosecutor, custody status, court orders, supervision conditions, and registry office practice.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="limited-access"
          number="9"
          title="If internet access is limited"
          subtitle="State cases often affect people who are detained, incarcerated, phone-only, on supervision, or relying on family for paperwork."
        />

        <GuideSectionCard>
          <OfflineOptions
            title="Lower-internet ways to keep the process organized"
            items={[
              "Keep one paper folder for court papers, one for attorney notes, and one for supervision or registration instructions.",
              "Ask counsel, the clerk, jail, DOC, probation, parole, or registration office to mail or print forms when online access is not realistic.",
              "Write down names, dates, departments, phone numbers, badge numbers, and confirmation numbers during every important call.",
              "Ask one trusted person to be the document helper so instructions do not get scattered across texts, screenshots, and social media messages.",
              "Use a public library, courthouse, clerk’s office, law library, or trusted helper for printing only when doing so does not violate release, supervision, technology, or contact restrictions.",
            ]}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Privacy still matters">
            <p>
              Do not use a shared computer, public printer, monitored account, jail or prison messaging system, or shared family device for sensitive case strategy unless counsel has said it is safe.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="10"
          title="Official resources and related SOLAR guides"
          subtitle="Use official sources and state-specific offices for verification, then use SOLAR guides for practical next steps."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="State-process resources and lookup tools"
            resources={[
              {
                label: "ICAC Task Force Program",
                description:
                  "Federal background on the Internet Crimes Against Children task force network used in many online exploitation investigations.",
                href: "https://www.icactaskforce.org/",
                badge: "Official",
              },
              {
                label: "ABA Bar Directories and Lawyer Finders",
                description:
                  "State bar directories and lawyer-finder tools for locating licensed legal help.",
                href: "https://www.americanbar.org/groups/legal_services/flh-home/flh-bar-directories-and-lawyer-finders/",
                badge: "Directory",
              },
              {
                label: "ABA Lawyer Referral Directory",
                description:
                  "Lookup tool for state and local bar lawyer referral services.",
                href: "https://www.americanbar.org/groups/lawyer_referral/resources/lawyer-referral-directory/",
                badge: "Directory",
              },
              {
                label: "California Courts Criminal Court Overview",
                description:
                  "Example of a state court self-help overview. Use your own state court site for controlling local guidance.",
                href: "https://selfhelp.courts.ca.gov/criminal-court/overview",
                badge: "State example",
              },
              {
                label: "USA.gov State Departments of Corrections",
                description:
                  "Directory for state corrections departments and custody-related contact information.",
                href: "https://www.usa.gov/state-corrections",
                badge: "Official",
              },
              {
                label: "NCSL Sex Offender Enactments Database",
                description:
                  "State legislation database for policy research. It is not a substitute for local registration instructions.",
                href: "https://www.ncsl.org/civil-and-criminal-justice/sex-offender-enactments-database",
                badge: "Policy",
              },
              {
                label: "NCSL Community Supervision Legislation Database",
                description:
                  "State legislation database on probation, parole, and community supervision policy.",
                href: "https://www.ncsl.org/civil-and-criminal-justice/community-supervision-legislation-database",
                badge: "Policy",
              },
              {
                label: "CCRC Relief from Registration Comparison",
                description:
                  "50-state comparison focused on relief from sex offense registration obligations.",
                href: "https://ccresourcecenter.org/state-restoration-profiles/50-state-comparison-relief-from-sex-offender-registration-obligations/",
                badge: "Research",
              },
            ]}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "Federal Sex-Crime Process Guide",
                description:
                  "Compare state-process issues with federal investigation, court, BOP custody, and supervised release handoffs.",
                to: "/resources/federal-process-guide",
              },
              {
                title: "Know Your Rights Guide",
                description:
                  "Use this when you need rights-focused guidance for police contact, questioning, searches, and legal representation.",
                to: "/resources/know-your-rights",
              },
              {
                title: "Prison Communication Guide",
                description:
                  "Use this for practical guidance on calls, mail, email, visitation, privacy, and communication limits during custody.",
                to: "/resources/prison-communication-mail-visits-monitoring",
              },
              {
                title: "Reentry Planning Guide",
                description:
                  "Use this for personal reentry planning beyond the state-process handoff.",
                to: "/resources/reentry-checklist",
              },
            ]}
          />

          <SoftDivider />

          <SourceList
            note="State laws, county procedures, court practices, supervision rules, and registry-office instructions can change. Use these links for orientation and lookup, then verify the specific answer with counsel or the office that has authority."
            sources={[
              {
                label: "ICAC Task Force Program",
                href: "https://www.icactaskforce.org/",
                description:
                  "Background on ICAC task forces used in many online child-exploitation investigations.",
              },
              {
                label: "ABA Bar Directories and Lawyer Finders",
                href: "https://www.americanbar.org/groups/legal_services/flh-home/flh-bar-directories-and-lawyer-finders/",
                description:
                  "State bar directory and lawyer-finder resources.",
              },
              {
                label: "ABA Lawyer Referral Directory",
                href: "https://www.americanbar.org/groups/lawyer_referral/resources/lawyer-referral-directory/",
                description:
                  "State and local lawyer referral service lookup.",
              },
              {
                label: "California Courts — Criminal Court Overview",
                href: "https://selfhelp.courts.ca.gov/criminal-court/overview",
                description:
                  "Example of a state court self-help overview; not a national rule.",
              },
              {
                label: "USA.gov — State Departments of Corrections",
                href: "https://www.usa.gov/state-corrections",
                description:
                  "Directory for state corrections departments.",
              },
              {
                label: "NCSL — Sex Offender Enactments Database",
                href: "https://www.ncsl.org/civil-and-criminal-justice/sex-offender-enactments-database",
                description:
                  "State legislation database for sex-offense registration and related policy research.",
              },
              {
                label: "NCSL — Community Supervision Legislation Database",
                href: "https://www.ncsl.org/civil-and-criminal-justice/community-supervision-legislation-database",
                description:
                  "State legislation database on probation, parole, and supervision policy.",
              },
              {
                label: "Collateral Consequences Resource Center — Relief from Registration",
                href: "https://ccresourcecenter.org/state-restoration-profiles/50-state-comparison-relief-from-sex-offender-registration-obligations/",
                description:
                  "50-state comparison focused on relief from sex offense registration obligations.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}