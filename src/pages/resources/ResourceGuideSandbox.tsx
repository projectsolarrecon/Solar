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

const federalStages = [
  {
    id: "investigation",
    number: "1",
    title: "Investigation",
    duration: "Timing varies widely",
    icon: "🔎",
    summary:
      "Federal agents and prosecutors gather information before charges are filed. Some people know they are under investigation; others do not learn until an arrest, search, subpoena, or target letter.",
    concepts: [
      {
        icon: <span aria-hidden="true">🕵️</span>,
        title: "Federal agency involvement",
        description:
          "An agency may investigate, execute search warrants, issue subpoenas, interview witnesses, or refer information to the U.S. Attorney’s Office.",
      },
      {
        icon: <span aria-hidden="true">⚖️</span>,
        title: "Prosecutor review",
        description:
          "A federal prosecutor may pursue charges, present the case to a grand jury, seek a plea before indictment, or decline prosecution.",
      },
      {
        icon: <span aria-hidden="true">🧭</span>,
        title: "Witness, subject, or target",
        description:
          "A person’s status can change. Those labels should be discussed with counsel before anyone speaks to investigators.",
      },
    ],
    actors:
      "Investigating agency, Assistant U.S. Attorney, grand jury if used, and defense counsel if retained or appointed.",
    practicalMoves: [
      "Contact a federal criminal defense attorney before speaking with investigators.",
      "Do not consent to interviews, searches, or device access without legal advice.",
      "Save subpoenas, warrants, business cards, letters, receipts, and written instructions.",
      "Write down dates, names, agencies, phone numbers, and what was said.",
    ],
  },
  {
    id: "arrest-initial-appearance",
    number: "2",
    title: "Arrest and Initial Appearance",
    duration: "Usually soon after arrest or summons",
    icon: "🏛️",
    summary:
      "After arrest or summons, the first federal court appearance usually addresses identity, rights, counsel, charging status, and temporary release or detention questions. This stage can feel frightening and disorienting because families may have little information at first, and decisions about release or detention can happen quickly.",
    concepts: [
      {
        icon: <span aria-hidden="true">👤</span>,
        title: "Counsel and rights",
        description:
          "The magistrate judge addresses counsel, the charge, and basic rights at the start of the case.",
      },
      {
        icon: <span aria-hidden="true">🔐</span>,
        title: "Release or detention",
        description:
          "The government may seek detention, release conditions, or a later detention hearing.",
      },
      {
        icon: <span aria-hidden="true">📋</span>,
        title: "Pretrial Services",
        description:
          "Pretrial Services may interview the person and provide information to the court about release or detention.",
      },
    ],
    actors:
      "U.S. Marshals Service, magistrate judge, Assistant U.S. Attorney, defense counsel, and Pretrial Services.",
    practicalMoves: [
      "Confirm who the defense attorney is and how family can share information with counsel.",
      "Ask counsel what release or detention issues will be addressed next.",
      "Save all release conditions, detention orders, court dates, and attorney instructions.",
      "Do not contact alleged victims, witnesses, co-defendants, or investigators unless counsel says it is safe and lawful.",
    ],
  },
  {
    id: "charging-arraignment",
    number: "3",
    title: "Charging, Indictment, and Arraignment",
    duration: "Depends on charging posture and custody status",
    icon: "📄",
    summary:
      "Federal felony charges often move through a grand jury indictment unless waived. Arraignment is where charges are formally read or acknowledged and a plea is entered.",
    concepts: [
      {
        icon: <span aria-hidden="true">📑</span>,
        title: "Charging document",
        description:
          "The case may proceed by complaint, indictment, information, superseding indictment, or another filing.",
      },
      {
        icon: <span aria-hidden="true">👥</span>,
        title: "Grand jury",
        description:
          "A grand jury decides whether there is probable cause to charge a federal felony unless indictment is waived.",
      },
      {
        icon: <span aria-hidden="true">🗓️</span>,
        title: "Arraignment and schedule",
        description:
          "The court may set discovery, motion, status conference, plea, or trial deadlines.",
      },
    ],
    actors:
      "Grand jury, Assistant U.S. Attorney, magistrate or district judge, defense counsel, and court clerk.",
    practicalMoves: [
      "Review the charging document with counsel, not alone.",
      "Ask counsel what each count means, what the maximum and mandatory penalties are, and what deadlines are coming.",
      "Keep a copy of the indictment, arraignment minute entry, scheduling order, and bond or detention paperwork.",
      "Avoid relying on generic penalty information without counsel’s help.",
    ],
  },
  {
    id: "discovery-motions",
    number: "4",
    title: "Discovery and Pretrial Motions",
    duration: "Often months; complex cases can take longer",
    icon: "🗂️",
    summary:
      "This is the evidence and litigation stage. Defense counsel reviews the government’s discovery, investigates defenses, negotiates with prosecutors, and files motions when appropriate.",
    concepts: [
      {
        icon: <span aria-hidden="true">🗃️</span>,
        title: "Discovery review",
        description:
          "The government provides discovery through defense counsel under court rules, protective orders, and case-specific instructions.",
      },
      {
        icon: <span aria-hidden="true">🔬</span>,
        title: "Defense investigation",
        description:
          "Counsel may review records, consult experts, investigate facts, and discuss possible defenses.",
      },
      {
        icon: <span aria-hidden="true">📝</span>,
        title: "Pretrial motions",
        description:
          "Motions may address warrants, statements, discovery disputes, expert evidence, severance, or other legal issues.",
      },
    ],
    actors:
      "Assistant U.S. Attorney, defense counsel, federal agents or forensic examiners, judge, and court staff.",
    practicalMoves: [
      "Do not ask counsel to send sensitive discovery to family unless counsel says it is allowed.",
      "Save court scheduling orders and motion deadlines.",
      "Give counsel organized background records only when requested and in the format counsel prefers.",
      "Ask counsel before discussing case facts by phone, email, text, jail messaging, social media, or recorded systems.",
    ],
  },
];

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Federal Sex-Crime Process Guide | The SOLAR Project"
        description="A plain-language roadmap to the federal sex-crime process, from investigation through court, custody, supervised release, and registration-related handoffs."
        keywords="federal sex-crime process, federal criminal process, federal court, BOP, supervised release, federal probation, registry, SOLAR Project"
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
            Federal Sex-Crime Process Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical roadmap for understanding how the federal government is involved from investigation through court, custody, supervised release, and registration-related handoffs.
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
            A federal case can feel impossible to understand because several systems may be involved at once: investigators, prosecutors, courts, Pretrial Services, the Bureau of Prisons, U.S. Probation, and state or local registration offices.
          </p>
          <p>
            This guide is not legal advice and cannot predict what will happen in one case. Its job is to help you understand the usual federal sequence, know which office may be involved, save the right paperwork, and ask safer questions before acting.
          </p>
        </GuideIntro>

        <GuideCallout tone="legal" icon="⚖️" title="Use counsel as the center point">
          <p>
            In a federal criminal case, the safest first assumption is simple: do not speak with investigators, contact witnesses, explain the case publicly, or make case decisions without defense counsel. Family and supporters can help most by documenting, organizing, and asking counsel what is safe to do.
          </p>
        </GuideCallout>

        <OverviewCards
          columns={4}
          cards={[
            {
              eyebrow: "Phase 1",
              title: "Investigation and charging",
              icon: "🔎",
              tone: "legal",
              description:
                "Federal agents and prosecutors decide whether and how charges will be brought.",
            },
            {
              eyebrow: "Phase 2",
              title: "Early court decisions",
              icon: "🏛️",
              tone: "warning",
              description:
                "The court addresses counsel, release or detention, arraignment, and scheduling.",
            },
            {
              eyebrow: "Phase 3",
              title: "Resolution and sentencing",
              icon: "📘",
              tone: "info",
              description:
                "Discovery, motions, plea negotiations, trial decisions, presentence investigation, and sentencing shape the outcome.",
            },
            {
              eyebrow: "Phase 4",
              title: "Custody and supervision",
              icon: "🧭",
              tone: "reentry",
              description:
                "BOP custody, release processing, supervised release, and registration handoffs involve different authorities.",
            },
          ]}
        />

        <GuideSectionHeader
          id="how-to-use"
          number="1"
          title="How to use this guide"
          subtitle="Start with the stage you are in, then work backward to what you need to save and forward to what may happen next."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Federal cases do not all move at the same speed. Timing can change because of detention status, discovery volume, continuances, plea negotiations, expert review, new charges, court scheduling, counsel changes, and local practice.
            </p>

            <p>
              Treat the timelines here as orientation, not a promise. The most reliable information for a specific case usually comes from defense counsel, filed court orders, the docket, Pretrial Services, U.S. Probation, BOP, or the registration office that actually has authority over the step being taken.
            </p>
          </GuideProse>

          <GuideIconList
            title="Three things to keep separate"
            columns={3}
            items={[
              {
                icon: <span aria-hidden="true">🏛️</span>,
                title: "The court case",
                description:
                  "Charges, hearings, plea or trial decisions, sentencing, and later supervision litigation.",
              },
              {
                icon: <span aria-hidden="true">🏢</span>,
                title: "Federal custody",
                description:
                  "BOP designation, sentence computation, facility rules, transfers, and release processing.",
              },
              {
                icon: <span aria-hidden="true">🧾</span>,
                title: "Registration and supervision",
                description:
                  "Federal supervised release conditions may overlap with state or local registration duties, but they are not the same system.",
              },
            ]}
          />

          <SoftDivider />

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
                  "Charging documents, court notices, release or detention orders, and scheduling orders.",
              },
              {
                id: "agency-info",
                label:
                  "Business cards, letters, subpoenas, warrants, receipts, and agency contact information.",
              },
              {
                id: "conditions",
                label:
                  "Any written conditions from the court, Pretrial Services, BOP, U.S. Probation, or registration office.",
              },
              {
                id: "notes",
                label:
                  "A paper or digital log of dates, names, departments, instructions, and confirmation numbers.",
              },
              {
                id: "questions",
                label:
                  "A running question list for counsel, kept separate from emotional notes or social media drafts.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="family-support"
          number="2"
          title="How family can help without creating risk"
          subtitle="Support matters. The safest help is organized, quiet, and checked with counsel before it touches the case."
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
                  "Track court dates, attorney calls, reporting instructions, and paperwork deadlines.",
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
                  "Collect records counsel requests and keep notices, names, dates, and written instructions in one place.",
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
                  "Ask counsel what kind of help is safe before contacting agencies, gathering records, or speaking with anyone connected to the case.",
              },
              {
                id: "family-track-instructions",
                label:
                  "Save attorney instructions, court notices, Pretrial Services instructions, BOP paperwork, probation directions, and registration instructions.",
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
              Family support is often most useful when it reduces chaos around the person instead of trying to control the defense. Keep notes, preserve paperwork, support daily logistics, and let counsel guide case-related action.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="what-this-may-feel-like"
          number="3"
          title="What this may feel like"
          subtitle="The federal process is not just paperwork. It can be emotionally intense even when everyone is doing the next practical step."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Federal cases can feel frightening, humiliating, confusing, and dehumanizing. Court hearings may describe the case in harsh terms. Detention arguments may make family members hear things no one wants to hear about someone they love. Custody can make a person feel reduced to a number, even while federal agencies still have duties to follow rules, provide basic care, and protect people in custody.
            </p>

            <p>
              Those reactions are real. They do not mean the case is over, that the person has no rights, or that family support has no place. The safer response is to slow down, write things down, work through counsel, and separate what you are hearing emotionally from what you need to do procedurally.
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
                  "Focus first on counsel, release or detention conditions, and the next court date.",
              },
              {
                icon: <span aria-hidden="true">🏛️</span>,
                title: "Hearings can feel exposing",
                description:
                  "The government may argue its view forcefully. That is not the whole defense story.",
              },
              {
                icon: <span aria-hidden="true">🧱</span>,
                title: "Custody can feel dehumanizing",
                description:
                  "BOP still has rules and duties around safety, medical care, classification, communication, and release processing.",
              },
              {
                icon: <span aria-hidden="true">🧭</span>,
                title: "Supervision can feel intrusive",
                description:
                  "Conditions are serious. Some questions may be clarified or addressed through counsel, U.S. Probation, or the court.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="📝" title="A hard moment is not the same as the final answer">
            <p>
              Write down what happened, who said it, and what the next deadline is. Then bring the question back to counsel or the office with authority instead of trying to solve it in panic.
            </p>
          </GuideCallout>
        </GuideSectionCard>
<GuideSectionHeader
          id="federal-timeline"
          number="4"
          title="The federal process, stage by stage"
          subtitle="Each stage has a different federal actor, different paperwork, and different risks."
        />

        {federalStages.map((stage) => (
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

            <GuideCallout tone="neutral" icon="👥" title="Federal actors at this stage">
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

        <GuideSectionCard>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Stage 5 · Case resolution
              </div>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                <span className="mr-2" aria-hidden="true">
                  ⚖️
                </span>
                Plea Agreement or Trial
              </h3>
            </div>
          </div>

          <GuideProse>
            <p>
              Many federal cases resolve by plea agreement, but some proceed to trial. The choice between plea and trial belongs to the person charged after consultation with counsel. This stage can feel heavy because the person may be weighing risk, pressure, fear, possible punishment, and the desire to be heard all at once. Family can support the person, but should be careful not to pressure, promise, or threaten a decision.
            </p>
          </GuideProse>

          <GuideIconList
            title="What this stage usually means"
            columns={3}
            items={[
              {
                icon: <span aria-hidden="true">🤝</span>,
                title: "Plea discussions",
                description:
                  "Counsel and the prosecutor may discuss plea terms, dismissed counts, stipulations, guideline issues, and appeal waivers.",
              },
              {
                icon: <span aria-hidden="true">🧑‍⚖️</span>,
                title: "Plea hearing",
                description:
                  "If there is a plea, the judge usually confirms that the plea is knowing and voluntary.",
              },
              {
                icon: <span aria-hidden="true">👥</span>,
                title: "Trial",
                description:
                  "At trial, the government must prove the charges beyond a reasonable doubt, and the defense challenges the case through counsel.",
              },
            ]}
          />

          <GuideCallout tone="neutral" icon="👥" title="Federal actors at this stage">
            <p>
              District judge, Assistant U.S. Attorney, defense counsel, jury if the case goes to trial, and U.S. Probation after conviction.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="plea-trial-practical-moves"
            title="Practical moves at this stage"
            columns={1}
            items={[
              {
                id: "plea-trial-ask-options",
                label:
                  "Ask counsel to explain the practical difference between plea, trial, sentencing exposure, appeal rights, and collateral consequences.",
              },
              {
                id: "plea-trial-dont-pressure",
                label:
                  "Do not pressure the person to plead or go to trial. Support them in asking counsel clear questions.",
              },
              {
                id: "plea-trial-court",
                label:
                  "Save plea agreements, hearing notices, trial schedules, jury instructions if provided, and written court orders.",
              },
              {
                id: "plea-trial-media",
                label:
                  "If the case may draw public attention, ask counsel before anyone speaks publicly, posts online, or responds to reporters.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionCard>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Stage 6 · Usually after conviction
              </div>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                <span className="mr-2" aria-hidden="true">
                  📘
                </span>
                Presentence Investigation and Sentencing
              </h3>
            </div>
          </div>

          <GuideProse>
            <p>
              After conviction, U.S. Probation usually prepares a presentence report for the court. This report can affect guideline calculations, objections, sentencing arguments, custody recommendations, supervision conditions, and future BOP classification. Sentencing can feel exposing because private history, harm, mitigation, risk, punishment, and family impact may be discussed in open court.
            </p>
          </GuideProse>

          <GuideIconList
            title="What this stage usually means"
            columns={3}
            items={[
              {
                icon: <span aria-hidden="true">📋</span>,
                title: "Presentence report",
                description:
                  "U.S. Probation gathers offense, history, guideline, victim impact, financial, and background information for the court.",
              },
              {
                icon: <span aria-hidden="true">✍️</span>,
                title: "Objections and arguments",
                description:
                  "Counsel may object to parts of the report and present sentencing arguments or mitigation.",
              },
              {
                icon: <span aria-hidden="true">⚖️</span>,
                title: "Sentence and conditions",
                description:
                  "The judge imposes the sentence and any supervised release, financial, treatment, technology, contact, or reporting conditions.",
              },
            ]}
          />

          <GuideCallout tone="neutral" icon="👥" title="Federal actors at this stage">
            <p>
              U.S. Probation officer, district judge, Assistant U.S. Attorney, defense counsel, and U.S. Sentencing Commission guideline materials.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="sentencing-practical-moves"
            title="Practical moves at this stage"
            columns={1}
            items={[
              {
                id: "sentencing-psr",
                label:
                  "Ask counsel what information should and should not be shared with U.S. Probation during the presentence process.",
              },
              {
                id: "sentencing-letters",
                label:
                  "Send character letters, treatment records, employment records, and other mitigation materials only in the way counsel requests.",
              },
              {
                id: "sentencing-guidelines",
                label:
                  "Ask counsel to explain the guideline range, objections, mandatory minimums if any, and the difference between advisory guidelines and the judge’s final sentence.",
              },
              {
                id: "sentencing-judgment",
                label:
                  "After sentencing, save the judgment, statement of reasons if available to counsel, surrender instructions, and all written supervision conditions.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="📝" title="Character letters should go through counsel">
            <p>
              A heartfelt letter can still create problems if it minimizes harm, attacks others, includes inaccurate facts, or is sent to the wrong place. Ask counsel what tone, deadline, format, and delivery method to use.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionCard>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Stage 7 · After sentencing if custody is ordered
              </div>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                <span className="mr-2" aria-hidden="true">
                  🏢
                </span>
                BOP Designation, Surrender, and Federal Custody
              </h3>
            </div>
          </div>

          <GuideProse>
            <p>
              If the sentence includes federal imprisonment, the Bureau of Prisons decides designation and custody administration. The sentencing judge may make recommendations, but BOP controls placement, classification, transfer decisions, custody rules, sentence computation, and many day-to-day prison procedures. Custody can feel dehumanizing, especially at intake or during transfers, but BOP still has rules and responsibilities around safety, medical care, communication, classification, and release processing.
            </p>
          </GuideProse>

          <GuideIconList
            title="What this stage usually means"
            columns={3}
            items={[
              {
                icon: <span aria-hidden="true">📍</span>,
                title: "Designation",
                description:
                  "BOP decides the facility assignment through its designation and sentence computation process.",
              },
              {
                icon: <span aria-hidden="true">📨</span>,
                title: "Surrender or transport",
                description:
                  "The person may self-surrender if allowed or be remanded and transported by federal authorities.",
              },
              {
                icon: <span aria-hidden="true">🏘️</span>,
                title: "Release processing",
                description:
                  "As release approaches, BOP may coordinate RRC placement, home confinement review, or handoff to U.S. Probation.",
              },
            ]}
          />

          <GuideCallout tone="neutral" icon="👥" title="Federal actors at this stage">
            <p>
              Bureau of Prisons, Designation and Sentence Computation Center, facility case manager or unit team, U.S. Marshals Service if remanded or transported, and U.S. Probation before release to supervision.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="bop-practical-moves"
            title="Practical moves at this stage"
            columns={1}
            items={[
              {
                id: "bop-save-designation",
                label:
                  "Save the judgment, surrender order, designation notice, BOP register number, facility contact information, and any written surrender instructions.",
              },
              {
                id: "bop-authority",
                label:
                  "Remember that court recommendations and BOP decisions are not the same thing. Ask counsel which issues belong to the court and which belong to BOP.",
              },
              {
                id: "bop-communications",
                label:
                  "Check BOP and facility rules before sending mail, funds, books, photos, emails, or visitation requests.",
              },
              {
                id: "bop-release",
                label:
                  "As release approaches, ask what federal office is handling release timing, RRC or home confinement review, and the handoff to U.S. Probation.",
              },
            ]}
          />
        </GuideSectionCard>
<GuideSectionCard>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Stage 8 · Release from BOP custody and after
              </div>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                <span className="mr-2" aria-hidden="true">
                  🧭
                </span>
                Supervised Release and Registration Handoffs
              </h3>
            </div>
          </div>

          <GuideProse>
            <p>
              This stage is not general reentry planning. This guide focuses on the federal-process pieces: release from BOP custody, the transition to U.S. Probation supervision, federal supervised release conditions, and the handoff to state or local registration systems when registration applies. Supervision and registration can feel intrusive because ordinary choices may require permission, reporting, or documentation, but the first step is still to identify the exact rule and the office with authority over it.
            </p>
          </GuideProse>

          <GuideIconList
            title="What this stage usually means"
            columns={3}
            items={[
              {
                icon: <span aria-hidden="true">🚪</span>,
                title: "BOP release",
                description:
                  "BOP releases the person according to federal custody calculations and release procedures.",
              },
              {
                icon: <span aria-hidden="true">🧑‍💼</span>,
                title: "U.S. Probation",
                description:
                  "Federal supervision usually begins under written conditions ordered by the federal court.",
              },
              {
                icon: <span aria-hidden="true">🧾</span>,
                title: "Registration handoff",
                description:
                  "Registration can involve federal law, state law, local practice, and individual supervision or court conditions.",
              },
            ]}
          />

          <GuideCallout tone="neutral" icon="👥" title="Federal actors at this stage">
            <p>
              Bureau of Prisons, U.S. Probation officer, federal sentencing judge, federal prosecutor and defense counsel if supervision litigation arises, and SMART Office or SORNA materials as federal background.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="supervision-registration-practical-moves"
            title="Practical moves at this stage"
            columns={1}
            items={[
              {
                id: "supervision-conditions",
                label:
                  "Get a copy of the written supervised release conditions and ask U.S. Probation how reporting, travel, treatment, internet, contact, and search conditions will be handled.",
              },
              {
                id: "supervision-authority",
                label:
                  "Separate the systems: BOP handles custody release; U.S. Probation handles federal supervision; the federal court handles supervision orders; state or local offices often handle registry reporting.",
              },
              {
                id: "registration-deadlines",
                label:
                  "Before relying on any registration assumption, verify the deadline, location, documents required, address rules, travel rules, and update rules with the registering authority.",
              },
              {
                id: "save-confirmation",
                label:
                  "Save written instructions, reporting receipts, appointment cards, names, dates, badge numbers, confirmation numbers, and copies of forms submitted.",
              },
            ]}
          />

          <GuideCallout tone="reentry" icon="🔁" title="Keep this guide focused on the federal handoff">
            <p>
              For personal reentry planning such as housing, documents, health care, transportation, employment, and family support, use SOLAR’s dedicated guides. This section is about what changes because federal custody is ending and federal supervision or registration-related obligations may begin.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="verify"
          number="5"
          title="Verify before acting"
          subtitle="The safest answer often depends on which authority controls the specific step."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A federal case can involve overlapping systems. A probation officer may not control a BOP designation. A BOP case manager may not control a federal court condition. A federal court condition may not tell you every local registration rule. Before acting, identify the office with actual authority over the exact question.
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
                  "Orders, hearings, sentencing, and supervised release modification or revocation.",
              },
              {
                icon: <span aria-hidden="true">🏢</span>,
                title: "BOP",
                description:
                  "Custody, designation, sentence computation, facility rules, and release processing.",
              },
              {
                icon: <span aria-hidden="true">🧑‍💼</span>,
                title: "U.S. Probation",
                description:
                  "Pretrial services, presentence investigation, and supervised release supervision.",
              },
              {
                icon: <span aria-hidden="true">🧾</span>,
                title: "Registration office",
                description:
                  "Local reporting instructions, deadlines, forms, receipts, and update requirements.",
              },
            ]}
          />

          <VerifyBeforeActing
            whoToAsk="Defense counsel first when the question could affect the case, custody, supervision, registration, travel, housing, contact rules, or court compliance. Then ask the specific office with authority, such as Pretrial Services, BOP, U.S. Probation, the court clerk, or the registration office."
            whatToAsk="Ask one narrow question at a time: What rule applies to this action, what deadline applies, who approves it, what form is required, and can I get the answer in writing?"
            whatToSave="Save the date, name, title, department, phone number, email, form, written answer, receipt, confirmation number, and any follow-up instruction."
          />

          <GuideCallout tone="warning" icon="⚠️" title="Do not treat verbal permission as enough when the stakes are high">
            <p>
              Verbal guidance may help you understand what to do next, but written confirmation is safer when a mistake could affect release, detention, supervision, registration, housing, travel, or court compliance.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="avoid-mistakes"
          number="6"
          title="Common mistakes to avoid"
          subtitle="These are not moral judgments. They are practical ways people accidentally make a federal case harder."
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
                  "Public posts, private groups, fundraisers, and messages may travel farther than expected.",
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
                  "Federal supervision, BOP custody, and registration reporting can involve different authorities.",
              },
              {
                icon: <span aria-hidden="true">⏰</span>,
                title: "Missing deadlines",
                description:
                  "Court dates, motion deadlines, surrender instructions, probation reporting, and registration deadlines need tracking.",
              },
              {
                icon: <span aria-hidden="true">🔓</span>,
                title: "Using monitored systems carelessly",
                description:
                  "Jail calls, prison email, mail, texts, and some digital platforms may not be private.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🧭" title="Generic internet advice is not enough">
            <p>
              Federal procedure is real, but the exact answer can depend on the district, judge, charges, plea terms, custody status, court orders, and local practice. Use this guide for orientation, then verify the specific step.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="limited-access"
          number="7"
          title="If internet access is limited"
          subtitle="Federal cases often affect people who are detained, incarcerated, on supervision, phone-only, or relying on family for paperwork."
        />

        <GuideSectionCard>
          <OfflineOptions
            title="Lower-internet ways to keep the process organized"
            items={[
              "Keep one paper folder for court papers, one for attorney notes, and one for supervision or registration instructions.",
              "Ask counsel, the clerk, BOP, U.S. Probation, or the registration office to mail or print forms when online access is not realistic.",
              "Write down names, dates, departments, phone numbers, badge numbers, and confirmation numbers during every important call.",
              "Ask one trusted person to be the document helper so instructions do not get scattered across texts, screenshots, and social media messages.",
              "Use a public library, courthouse, clerk’s office, or trusted helper for printing only when doing so does not violate supervision, release, or technology restrictions.",
            ]}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Privacy still matters">
            <p>
              Do not use a shared computer, public printer, monitored account, or jail or prison messaging system for sensitive case strategy unless counsel has said it is safe.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="8"
          title="Official resources and related SOLAR guides"
          subtitle="Use official sources for verification, then use SOLAR guides for practical next steps."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Official federal resources"
            resources={[
              {
                label: "U.S. Courts: Criminal Cases",
                description:
                  "Federal judiciary overview of criminal cases in federal court.",
                href: "https://www.uscourts.gov/about-federal-courts/types-cases/criminal-cases",
                badge: "Official",
              },
              {
                label: "Federal Rules of Criminal Procedure",
                description:
                  "Current federal criminal procedure rules from U.S. Courts.",
                href: "https://www.uscourts.gov/forms-rules/current-rules-practice-procedure/federal-rules-criminal-procedure",
                badge: "Official",
              },
              {
                label: "Federal Defender Programs",
                description:
                  "Federal defender directory and federal defender program resources.",
                href: "https://www.fd.org/other-resources/federal-defender-programs",
                badge: "Official",
              },
              {
                label: "Pretrial Services",
                description:
                  "U.S. Courts explanation of pretrial services in federal cases.",
                href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/pretrial-services",
                badge: "Official",
              },
              {
                label: "Presentence Investigations",
                description:
                  "U.S. Courts explanation of the presentence investigation process.",
                href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/presentence-investigations",
                badge: "Official",
              },
              {
                label: "Post-Conviction Supervision",
                description:
                  "U.S. Courts explanation of federal post-conviction supervision.",
                href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision",
                badge: "Official",
              },
              {
                label: "U.S. Sentencing Commission Guidelines Manual",
                description:
                  "Current federal sentencing guidelines manual and related guideline materials.",
                href: "https://www.ussc.gov/guidelines/2025-guidelines-manual",
                badge: "Official",
              },
              {
                label: "BOP Designations",
                description:
                  "BOP information about classification and designation functions.",
                href: "https://www.bop.gov/inmates/custody_and_care/designations.jsp",
                badge: "Official",
              },
              {
                label: "BOP Sentence Computations",
                description:
                  "BOP information about sentence computation functions.",
                href: "https://www.bop.gov/inmates/custody_and_care/sentence_computations.jsp",
                badge: "Official",
              },
              {
                label: "BOP Residential Reentry Management Centers",
                description:
                  "BOP explanation of RRCs and residential reentry management.",
                href: "https://www.bop.gov/about/facilities/residential_reentry_management_centers.jsp",
                badge: "Official",
              },
              {
                label: "SMART Office: SORNA",
                description:
                  "Federal background on SORNA. Verify actual registration duties with the state or local registering authority.",
                href: "https://smart.ojp.gov/sorna",
                badge: "Official",
              },
            ]}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "Know Your Rights Guide",
                description:
                  "Use this when you need a rights-focused overview for law enforcement contact, searches, questioning, and legal representation.",
                to: "/resources/know-your-rights",
              },
              {
                title: "Prison Communication Guide",
                description:
                  "Use this for practical guidance on calls, mail, email, visitation, privacy, and communication limits during custody.",
                to: "/resources/prison-communication",
              },
              {
                title: "Reentry Planning Guide",
                description:
                  "Use this for personal reentry planning beyond the federal-process handoff, including documents, housing, health care, transportation, and support.",
                to: "/resources/reentry",
              },
              {
                title: "Housing Search Guide",
                description:
                  "Use this for housing strategy after release or during supervision, especially where registry or supervision restrictions may apply.",
                to: "/resources/housing-search",
              },
              {
                title: "Job Search Strategies",
                description:
                  "Use this for employment planning, applications, disclosure decisions, and rebuilding work options.",
                to: "/resources/job-search",
              },
            ]}
          />

          <SoftDivider />

          <SourceList
            note="Rules and agency practices can change. Use the official links below to verify current federal process information, and confirm case-specific questions with counsel or the office that has authority over the issue."
            sources={[
              {
                label: "U.S. Courts — Criminal Cases",
                href: "https://www.uscourts.gov/about-federal-courts/types-cases/criminal-cases",
                description:
                  "General federal court explanation of criminal cases.",
              },
              {
                label: "U.S. Courts — Federal Rules of Criminal Procedure",
                href: "https://www.uscourts.gov/forms-rules/current-rules-practice-procedure/federal-rules-criminal-procedure",
                description:
                  "Current federal criminal procedure rules.",
              },
              {
                label: "Federal Defender Programs",
                href: "https://www.fd.org/other-resources/federal-defender-programs",
                description:
                  "Federal defender directory and program resources.",
              },
              {
                label: "U.S. Courts — Pretrial Services",
                href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/pretrial-services",
                description:
                  "Official overview of the role of pretrial services officers.",
              },
              {
                label: "U.S. Courts — Presentence Investigations",
                href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/presentence-investigations",
                description:
                  "Official overview of presentence investigation work by probation officers.",
              },
              {
                label: "U.S. Courts — Post-Conviction Supervision",
                href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision",
                description:
                  "Official overview of federal post-conviction supervision.",
              },
              {
                label: "U.S. Sentencing Commission — 2025 Guidelines Manual",
                href: "https://www.ussc.gov/guidelines/2025-guidelines-manual",
                description:
                  "Official guidelines manual and sentencing guideline materials.",
              },
              {
                label: "BOP — Designations",
                href: "https://www.bop.gov/inmates/custody_and_care/designations.jsp",
                description:
                  "BOP information about designation and classification functions.",
              },
              {
                label: "BOP — Sentence Computations",
                href: "https://www.bop.gov/inmates/custody_and_care/sentence_computations.jsp",
                description:
                  "BOP information about sentence computation functions.",
              },
              {
                label: "BOP — Residential Reentry Management Centers",
                href: "https://www.bop.gov/about/facilities/residential_reentry_management_centers.jsp",
                description:
                  "BOP explanation of residential reentry centers and reentry management.",
              },
              {
                label: "SMART Office — SORNA",
                href: "https://smart.ojp.gov/sorna",
                description:
                  "Federal background on SORNA minimum standards. Local registration duties still need local verification.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}