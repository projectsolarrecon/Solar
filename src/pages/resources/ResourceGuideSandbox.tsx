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
    duration: "Weeks to years",
    icon: "🔎",
    summary:
      "Federal agents and prosecutors gather information before charges are filed. Some people know they are under investigation; others do not learn until an arrest, search, subpoena, or target letter.",
    whatHappens: [
      "A federal agency may investigate, execute search warrants, issue subpoenas, interview witnesses, or refer information to the U.S. Attorney’s Office.",
      "A prosecutor may review evidence and decide whether to pursue charges, present the matter to a grand jury, seek a plea before indictment, or decline prosecution.",
      "The person being investigated may be treated as a witness, subject, or target, but those labels can change.",
    ],
    federalActors: [
      "Investigating agency, such as FBI, HSI, Postal Inspection Service, or another federal agency",
      "Assistant U.S. Attorney",
      "Federal grand jury, if the government seeks an indictment",
      "Defense attorney or Federal Public Defender, if counsel is appointed or retained",
    ],
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
    duration: "Often within days of arrest",
    icon: "🏛️",
    summary:
      "After arrest or summons, the first federal court appearance usually addresses identity, rights, counsel, charging status, and temporary release or detention questions.",
    whatHappens: [
      "The person appears before a magistrate judge.",
      "The court addresses whether counsel is retained or appointed.",
      "The government may ask for detention, release conditions, or a later detention hearing.",
      "Pretrial Services may interview the person and prepare information for the court.",
    ],
    federalActors: [
      "U.S. Marshals Service",
      "Magistrate judge",
      "Assistant U.S. Attorney",
      "Federal defender or retained defense counsel",
      "Pretrial Services officer",
    ],
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
    duration: "Timing varies by case and custody status",
    icon: "📄",
    summary:
      "Federal felony charges often move through a grand jury indictment unless waived. Arraignment is where charges are formally read or acknowledged and a plea is entered.",
    whatHappens: [
      "The government may proceed by complaint, indictment, information, superseding indictment, or other charging document.",
      "A grand jury decides whether there is probable cause to charge a federal felony, unless indictment is waived.",
      "At arraignment, the person is advised of the charges and enters a plea, usually not guilty at the start.",
      "The court may set scheduling orders, discovery deadlines, motion deadlines, or status conferences.",
    ],
    federalActors: [
      "Grand jury",
      "Assistant U.S. Attorney",
      "Magistrate judge or district judge",
      "Defense counsel",
      "Court clerk",
    ],
    practicalMoves: [
      "Review the charging document with counsel, not alone.",
      "Ask counsel what each count means, what the maximum and mandatory penalties are, and what deadlines are coming.",
      "Keep a copy of the indictment, arraignment minute entry, scheduling order, and bond or detention paperwork.",
      "Avoid researching penalties without counsel’s help; federal sentencing depends on statutes, guidelines, facts, criminal history, and negotiated issues.",
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
    whatHappens: [
      "The government provides discovery through defense counsel under court rules, protective orders, and case-specific instructions.",
      "Defense counsel may investigate facts, consult experts, review devices or records, and discuss possible motions.",
      "Pretrial motions may address suppression, warrants, statements, discovery disputes, severance, expert evidence, or other legal issues.",
      "Many cases also involve plea discussions during this stage.",
    ],
    federalActors: [
      "Assistant U.S. Attorney",
      "Defense counsel",
      "Federal agents or forensic examiners",
      "District judge or magistrate judge",
      "Court staff handling scheduling and filings",
    ],
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
        title="Federal Criminal Process Guide | The SOLAR Project"
        description="A plain-language roadmap to the federal criminal process, from investigation through court, custody, supervised release, and registration-related handoffs."
        keywords="federal criminal process, federal sex offense case, federal court, BOP, supervised release, federal probation, registry, SOLAR Project"
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
            Federal Criminal Process Guide
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
              title: "Custody and federal supervision",
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
              Federal cases do not all move at the same speed. Timing can change because of detention status, discovery volume, continuances, plea negotiations, court scheduling, expert review, new charges, or changes in counsel.
            </p>

            <p>
              Treat the timelines here as orientation, not a promise. The most reliable information for a specific case usually comes from defense counsel, filed court orders, the docket, Pretrial Services, U.S. Probation, BOP, or the registration office that actually has authority over the step being taken.
            </p>

            <p>
              Families can be helpful without taking over the case. The most useful support is often quiet and practical: save documents, write down names and dates, help counsel receive organized information, and avoid public posts or side conversations that could create risk.
            </p>
          </GuideProse>

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
          id="federal-timeline"
          number="2"
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

              <h4>What usually happens</h4>
              <ul>
                {stage.whatHappens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h4>Federal actors you may hear about</h4>
              <ul>
                {stage.federalActors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GuideProse>

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
              Many federal cases resolve by plea agreement, but some proceed to trial. The choice between plea and trial belongs to the person charged after consultation with counsel. Family can support the person, but should be careful not to pressure, promise, or threaten a decision.
            </p>

            <h4>What usually happens</h4>
            <ul>
              <li>
                Defense counsel and the prosecutor may discuss possible plea terms, guideline issues, dismissed counts, appeal waivers, stipulations, and factual admissions.
              </li>
              <li>
                If there is a plea, the judge usually conducts a plea hearing to make sure the plea is knowing and voluntary.
              </li>
              <li>
                If there is a trial, the government must prove the charges beyond a reasonable doubt, and the defense can challenge the evidence through counsel.
              </li>
              <li>
                A conviction after plea or trial usually moves the case toward a presentence investigation and sentencing.
              </li>
            </ul>

            <h4>Federal actors you may hear about</h4>
            <ul>
              <li>District judge</li>
              <li>Assistant U.S. Attorney</li>
              <li>Defense counsel</li>
              <li>Jury, if the case goes to trial</li>
              <li>U.S. Probation, after conviction and before sentencing</li>
            </ul>
          </GuideProse>

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
              After conviction, U.S. Probation usually prepares a presentence report for the court. This report can affect guideline calculations, objections, sentencing arguments, custody recommendations, supervision conditions, and future BOP classification.
            </p>

            <h4>What usually happens</h4>
            <ul>
              <li>
                U.S. Probation interviews the person and gathers information about the offense, history, finances, health, family, education, work, treatment, and criminal history.
              </li>
              <li>
                The defense and prosecution may object to parts of the presentence report.
              </li>
              <li>
                The judge considers the advisory sentencing guidelines, statutory penalties, sentencing factors, arguments from both sides, and any required conditions.
              </li>
              <li>
                The sentence may include imprisonment, supervised release, fines, restitution, special assessments, treatment conditions, computer or internet conditions, contact restrictions, and other terms.
              </li>
            </ul>

            <h4>Federal actors you may hear about</h4>
            <ul>
              <li>U.S. Probation officer conducting the presentence investigation</li>
              <li>District judge</li>
              <li>Assistant U.S. Attorney</li>
              <li>Defense counsel</li>
              <li>U.S. Sentencing Commission guidelines and policy materials</li>
            </ul>
          </GuideProse>

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
              If the sentence includes federal imprisonment, the Bureau of Prisons decides designation and custody administration. The sentencing judge may make recommendations, but BOP controls placement, classification, transfer decisions, custody rules, and many day-to-day prison procedures.
            </p>

            <h4>What usually happens</h4>
            <ul>
              <li>
                The court may order immediate remand or allow self-surrender.
              </li>
              <li>
                BOP reviews designation factors and assigns a facility.
              </li>
              <li>
                BOP rules control communication, visitation, commissary, programming, discipline, transfers, release calculation, and custody classification.
              </li>
              <li>
                As release approaches, BOP may be involved in release planning, Residential Reentry Center placement, home confinement review, or coordination with U.S. Probation.
              </li>
            </ul>

            <h4>Federal actors you may hear about</h4>
            <ul>
              <li>Bureau of Prisons Designation and Sentence Computation Center</li>
              <li>Facility case manager or unit team</li>
              <li>U.S. Marshals Service, if the person is remanded or transported</li>
              <li>U.S. Probation, especially before release to supervision</li>
              <li>Sentencing court, for limited post-sentencing issues</li>
            </ul>
          </GuideProse>

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
              This stage is not general reentry planning. This guide focuses on the federal-process pieces: release from BOP custody, the transition to U.S. Probation supervision, federal supervised release conditions, and the handoff to state or local registration systems when registration applies.
            </p>

            <h4>What usually happens</h4>
            <ul>
              <li>
                BOP releases the person according to federal custody calculations and release procedures.
              </li>
              <li>
                U.S. Probation supervises the person under the conditions ordered by the federal court.
              </li>
              <li>
                The federal court may later address modification, clarification, early termination, or revocation of supervised release.
              </li>
              <li>
                Registration duties may involve federal law, state law, local law enforcement practice, and supervision conditions, but the actual reporting office is often state or local.
              </li>
            </ul>

            <h4>Federal actors you may hear about</h4>
            <ul>
              <li>Bureau of Prisons</li>
              <li>U.S. Probation officer</li>
              <li>Federal sentencing judge</li>
              <li>Federal prosecutor and defense counsel, if supervision litigation arises</li>
              <li>SMART Office or SORNA materials as federal background, not a substitute for local registration instructions</li>
            </ul>
          </GuideProse>

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
          number="3"
          title="Verify before acting"
          subtitle="The safest answer often depends on which authority controls the specific step."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A federal case can involve overlapping systems. A probation officer may not control a BOP designation. A BOP case manager may not control a federal court condition. A federal court condition may not tell you every local registration rule. Before acting, identify the office with actual authority over the exact question.
            </p>
          </GuideProse>

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
          number="4"
          title="Common mistakes to avoid"
          subtitle="These are not moral judgments. They are practical ways people accidentally make a federal case harder."
        />

        <GuideSectionCard>
          <GuideProse>
            <ul>
              <li>
                <strong>Talking to investigators without counsel.</strong> Even a calm explanation can be misunderstood, incomplete, or used later.
              </li>
              <li>
                <strong>Posting about the case online.</strong> Public posts, comments, fundraisers, private groups, and messages may travel farther than expected.
              </li>
              <li>
                <strong>Contacting witnesses, alleged victims, co-defendants, or family members connected to the case.</strong> This can create serious risk even if the intent is peaceful.
              </li>
              <li>
                <strong>Assuming federal, state, and local rules are the same.</strong> Federal supervision, BOP custody, and registration reporting can involve different authorities.
              </li>
              <li>
                <strong>Missing paperwork deadlines.</strong> Court dates, motion deadlines, presentence deadlines, surrender instructions, probation reporting, and registration deadlines should be saved and double-checked.
              </li>
              <li>
                <strong>Sending sensitive materials through monitored systems.</strong> Jail calls, prison email, mail, texts, and some digital platforms may not be private.
              </li>
              <li>
                <strong>Using generic internet advice for a specific case.</strong> Federal procedure is real, but the exact answer can depend on the district, judge, charges, plea terms, custody status, and court orders.
              </li>
            </ul>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="limited-access"
          number="5"
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
          number="6"
          title="Official resources and related SOLAR guides"
          subtitle="Use official sources for verification, then use SOLAR guides for practical next steps."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Official federal resources"
            resources={[
              {
                label: "FBI Field Offices",
                description:
                  "Find local FBI field office contact information and coverage areas.",
                href: "https://www.fbi.gov/contact-us/field-offices",
                badge: "Official",
              },
              {
                label: "Federal criminal cases overview",
                description:
                  "U.S. Courts overview of criminal cases in federal court.",
                href: "https://www.uscourts.gov/about-federal-courts/types-cases/criminal-cases",
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
                label: "U.S. Sentencing Commission Guidelines Manual",
                description:
                  "Current federal sentencing guidelines manual and related guideline materials.",
                href: "https://www.ussc.gov/guidelines/2025-guidelines-manual",
                badge: "Official",
              },
              {
                label: "BOP Locations",
                description:
                  "Bureau of Prisons facility and location information.",
                href: "https://www.bop.gov/locations/",
                badge: "Official",
              },
              {
                label: "U.S. Probation and Pretrial Services",
                description:
                  "General U.S. Courts information about federal probation and pretrial services.",
                href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services",
                badge: "Official",
              },
              {
                label: "SMART Office SORNA information",
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
            note="Links were selected from official federal sources where possible. Before production publication, re-check any route-specific SOLAR links and any district-specific court practices."
            sources={[
              {
                label: "Original SOLAR FederalProcessGuide.tsx",
                href: "https://github.com/projectsolarrecon/Solar/blob/main/src%2Fpages%2Fresources%2FFederalProcessGuide.tsx",
                description:
                  "Source guide used as the basis for this sandbox rebuild.",
              },
              {
                label: "FBI Field Offices",
                href: "https://www.fbi.gov/contact-us/field-offices",
                description:
                  "Official FBI field office directory and local office information.",
              },
              {
                label: "U.S. Courts — Criminal Cases",
                href: "https://www.uscourts.gov/about-federal-courts/types-cases/criminal-cases",
                description:
                  "General federal court explanation of criminal cases.",
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
                label: "U.S. Courts — Probation and Pretrial Services",
                href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services",
                description:
                  "Official overview of federal probation and pretrial services.",
              },
              {
                label: "U.S. Sentencing Commission — 2025 Guidelines Manual",
                href: "https://www.ussc.gov/guidelines/2025-guidelines-manual",
                description:
                  "Official guidelines manual and sentencing guideline materials.",
              },
              {
                label: "Bureau of Prisons — Locations",
                href: "https://www.bop.gov/locations/",
                description:
                  "Official BOP location and facility information.",
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