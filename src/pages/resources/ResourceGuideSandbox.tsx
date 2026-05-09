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
  QuickStartPanel,
  GuideChecklist,
  ScriptBox,
  OfflineOptions,
  DocumentPacket,
  VerifyBeforeActing,
  CommonMistakes,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
  TimelineGuidanceGrid,
} from "../../components/solar";

const sourceLinks = [
  {
    label: "Federal Rule of Appellate Procedure 4",
    href: "https://www.law.cornell.edu/rules/frap/rule_4",
    description:
      "Readable rule text for federal appeal timing, including criminal notice-of-appeal timing and the prisoner mailbox rule.",
  },
  {
    label: "Federal Rule of Appellate Procedure 9",
    href: "https://www.law.cornell.edu/rules/frap/rule_9",
    description:
      "Readable rule text for release in a criminal case and related custody review during appeal.",
  },
  {
    label: "Federal Rule of Appellate Procedure 24",
    href: "https://www.law.cornell.edu/rules/frap/rule_24",
    description:
      "Readable rule text for proceeding in forma pauperis on appeal in federal court.",
  },
  {
    label: "Federal Rules of Appellate Procedure — official PDF",
    href: "https://www.uscourts.gov/sites/default/files/2025-02/federal-rules-of-appellate-procedure-dec-1-2024_0.pdf",
    description:
      "Official U.S. Courts rules PDF for federal appellate procedure verification.",
  },
  {
    label: "U.S. Courts AO 435 Transcript Order",
    href: "https://www.uscourts.gov/forms-rules/forms/transcript-order",
    description:
      "Official federal transcript order form page for ordering trial, hearing, and sentencing transcripts.",
  },
  {
    label: "Supreme Court Guide for Prospective Indigent Petitioners",
    href: "https://www.supremecourt.gov/casehand/IFPGuide2026.pdf",
    description:
      "Official Supreme Court self-represented guide, including certiorari timing basics.",
  },
  {
    label: "California Courts CR-415",
    href: "https://selfhelp.courts.ca.gov/jcc-form/CR-415",
    description:
      "Official California petition form to ask a court to terminate a sex offender registration requirement.",
  },
  {
    label: "California Courts CR-415-INFO",
    href: "https://selfhelp.courts.ca.gov/jcc-form/CR-415-INFO",
    description:
      "Official California information sheet explaining steps for a court to consider registry termination.",
  },
  {
    label: "California Courts — how to ask to end registration",
    href: "https://selfhelp.courts.ca.gov/clean-your-record/ask-PC290-relief",
    description:
      "Official California self-help page explaining basic filing steps and attachments for Penal Code 290 relief.",
  },
];

const resourceLinks = [
  {
    label: "Federal appeal timing rule",
    href: "https://www.law.cornell.edu/rules/frap/rule_4",
    badge: "Federal rule",
    description:
      "Use this to verify federal appeal deadlines. State and agency deadlines may be different.",
  },
  {
    label: "Release during federal criminal appeal",
    href: "https://www.law.cornell.edu/rules/frap/rule_9",
    badge: "Federal rule",
    description:
      "Federal rule source for release or detention review in a criminal case during appeal.",
  },
  {
    label: "Federal in forma pauperis rule",
    href: "https://www.law.cornell.edu/rules/frap/rule_24",
    badge: "Federal rule",
    description:
      "Federal rule source for asking to proceed without prepaying fees on appeal.",
  },
  {
    label: "AO 435 Transcript Order",
    href: "https://www.uscourts.gov/forms-rules/forms/transcript-order",
    badge: "Official form",
    description:
      "Use this federal form page when transcripts are needed for an appeal record.",
  },
  {
    label: "Supreme Court IFP guide",
    href: "https://www.supremecourt.gov/casehand/IFPGuide2026.pdf",
    badge: "Official guide",
    description:
      "For people considering a petition for certiorari without prepaying Supreme Court filing costs.",
  },
  {
    label: "California CR-415 registry termination petition",
    href: "https://selfhelp.courts.ca.gov/jcc-form/CR-415",
    badge: "State example",
    description:
      "Example of a state-specific registration relief form. Your state may use a different process.",
  },
  {
    label: "California CR-415-INFO",
    href: "https://selfhelp.courts.ca.gov/jcc-form/CR-415-INFO",
    badge: "State example",
    description:
      "Explains the California registration termination petition process in plain language.",
  },
];

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="SOLAR Appeals Guide | The SOLAR Project"
        description="A calm, practical guide for people charged with or convicted of sex offenses, registrants, and families trying to protect appeal deadlines, preserve records, and understand legal review options."
        keywords="sex offense appeal guide, registry appeal, supervision condition appeal, notice of appeal, post-conviction relief, SOLAR Project"
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
            SOLAR Appeals Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A step-by-step hand-holder for people charged with or convicted of
            sex offenses, registrants, and families trying to challenge a ruling,
            protect deadlines, preserve records, or understand what review path
            may still exist.
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
            If you are reading this, something may have just happened that feels
            frightening, unfair, confusing, or final: a conviction, sentence,
            plea-related ruling, supervision condition, registry classification,
            parole decision, civil commitment order, or agency notice.
          </p>

          <p>
            A bad ruling does not always mean there are no options. But appeal
            and review deadlines can be short, technical, and unforgiving. You do
            not have to solve the whole case today. Your first job is to protect
            deadlines, save proof, and find out exactly what was entered, when it
            was entered, and who has authority to review it.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If a ruling just landed"
          subtitle="Use this first when a conviction, sentence, condition, registry notice, or agency decision just came in."
          icon="⚡"
          urgentActions={[
            <span>
              Write down the decision date, the docket entry date if there is
              one, and the date you received notice. These may not be the same.
            </span>,
            <span>
              Ask the clerk, lawyer, public defender, or agency what deadline
              applies and where the notice, petition, or review request must be
              filed.
            </span>,
            <span>
              Save proof of everything: envelopes, mail logs, receipts, stamped
              copies, screenshots, confirmation numbers, and the name of anyone
              who gave instructions.
            </span>,
          ]}
          nextActions={[
            <span>
              Ask whether a notice of appeal, request for appointed counsel, fee
              waiver, transcript order, or administrative review request is
              needed immediately.
            </span>,
            <span>
              Start one paper or digital appeal folder with the judgment, order,
              registry notice, supervision condition, docket sheet, and all
              mailing proof.
            </span>,
            <span>
              If you are incarcerated, use legal-mail procedures and ask for
              proof of the date you deposited the filing.
            </span>,
          ]}
          reminder={
            <span>
              This guide is educational, not legal advice. For your own case,
              rely on your lawyer or the court or agency with authority over the
              decision. When in doubt, verify the deadline before doing anything
              else.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Path 1",
              title: "Direct appeal",
              icon: "⚖️",
              tone: "legal",
              description:
                "A higher court reviews legal errors from a conviction, sentence, suppression ruling, trial ruling, or other appealable order.",
            },
            {
              eyebrow: "Path 2",
              title: "Post-conviction relief",
              icon: "🧾",
              tone: "warning",
              description:
                "A later challenge may raise issues such as constitutional violations, ineffective assistance, newly discovered evidence, or other claims allowed by law.",
            },
            {
              eyebrow: "Path 3",
              title: "Registry, supervision, or agency review",
              icon: "🗂️",
              tone: "reentry",
              description:
                "Some decisions are challenged through petitions, agency review, hearings, motions to modify conditions, or state-specific registration relief processes.",
            },
          ]}
        />

        <GuideCallout tone="legal" icon="⚠️" title="Deadlines come first">
          <p>
            Federal criminal appeals often use a 14-day notice-of-appeal rule,
            but that is not the deadline for every case, state, agency, registry
            petition, civil commitment order, probation decision, or supervision
            condition. Treat every decision as having its own deadline until you
            verify otherwise.
          </p>
        </GuideCallout>
<GuideSectionHeader
          id="what-appeals-are"
          number="1"
          title="What appeals really are"
          subtitle="Appeals are not just for trial verdicts. They are review paths for decisions that may be legally wrong, unfair, unsupported, or entered through the wrong process."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              In a criminal case, an appeal usually means asking a higher court
              to review whether the trial court made legal errors that affected
              the outcome. That may involve a conviction, sentence, suppression
              ruling, plea issue, probation condition, restitution order, or
              another order the law allows someone to challenge.
            </p>

            <p>
              For people charged with or convicted of sex offenses, appeal work
              may also involve issues outside the ordinary courtroom path:
              registration tiers, lifetime registration, residence restrictions,
              internet conditions, treatment requirements, GPS monitoring,
              no-contact conditions, parole board decisions, civil commitment,
              immigration consequences, or agency classifications.
            </p>

            <p>
              The unifying question is simple: who made the decision, what rule
              gives them authority, what review process exists, and what deadline
              controls the next step?
            </p>
          </GuideProse>

          <SoftDivider />

          <GuideCallout tone="reminder" icon="🧭" title="Appeals are not retrials">
            <p>
              Most appellate courts do not simply start over. They usually review
              the record that already exists. That is why objections, motions,
              transcripts, exhibits, written orders, and proof of notice matter
              so much.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="timeline"
          number="2"
          title="What to do by stage"
          subtitle="The right move changes depending on where the case is. Use this as a map, then verify the rule in your court, agency, or state."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="Appeal and review timeline"
            stages={[
              {
                stage: "Same day or immediately",
                icon: "⏰",
                whatChanges:
                  "The clock may already be running. A spoken ruling, written order, docket entry, agency notice, or mailed decision can each matter differently.",
                whatToDo:
                  "Write down every date. Ask what was entered, when it was entered, what deadline applies, and where the notice or review request must be filed.",
              },
              {
                stage: "First few days",
                icon: "📄",
                whatChanges:
                  "The safest first filing may be a notice of appeal, request for review, request for counsel, fee waiver, or motion to modify conditions.",
                whatToDo:
                  "Confirm whether counsel will file. If not, ask the clerk for self-represented forms and filing instructions. Keep stamped copies and mailing proof.",
              },
              {
                stage: "First weeks",
                icon: "🗂️",
                whatChanges:
                  "The appeal may shift from deadline protection to record-building: transcripts, exhibits, orders, docket entries, and agency records.",
                whatToDo:
                  "Order transcripts, request the docket sheet, gather notices and conditions, and make a simple index so a lawyer or clinic can understand the file quickly.",
              },
              {
                stage: "While review is pending",
                icon: "☎️",
                whatChanges:
                  "Housing, supervision, registration, treatment, travel, device access, and family contact restrictions may continue while the appeal moves slowly.",
                whatToDo:
                  "Ask whether a stay, release request, condition modification, or agency hold is available. Do not violate a condition because you believe it is wrong.",
              },
              {
                stage: "After a decision",
                icon: "🔁",
                whatChanges:
                  "There may be limited next steps: rehearing, mandate, higher-court review, remand, post-conviction relief, or a later registry-relief petition.",
                whatToDo:
                  "Save the decision, calendar the next deadline, ask what the mandate or remand requires, and update your appeal folder before documents disappear.",
              },
            ]}
          />

          <GuideCallout tone="family" icon="👥" title="For family and supporters">
            <p>
              A family member can help without becoming the legal expert. The
              most useful support is often practical: make calls, print forms,
              organize records, keep a calendar, save envelopes, and help the
              person ask counsel clear written questions.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="deadlines"
          number="3"
          title="Deadlines, notices, and the first filing"
          subtitle="The first filing often protects the right to be heard. Do not wait for the whole record before asking what must be filed now."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A notice of appeal is often the gateway document. In many cases, it
              does not need to contain the full argument. Its job is to tell the
              court that you are appealing a specific judgment, sentence, order,
              or decision.
            </p>

            <p>
              In federal criminal cases, the defendant’s notice of appeal is
              often due within 14 days after the judgment or order is entered, or
              after the government files its notice of appeal. But federal rules
              are only one example. State criminal appeals, civil commitment
              orders, probation decisions, parole decisions, administrative
              classifications, and registry petitions can have different timing.
            </p>

            <p>
              If you are incarcerated, legal-mail rules may matter. Ask staff how
              to send legal mail, how to document the deposit date, and how to get
              a receipt, log entry, or other proof. Keep a copy of what you sent.
            </p>
          </GuideProse>

          <GuideChecklist
            id="first-filing-checklist"
            title="First-filing checklist"
            columns={1}
            items={[
              {
                id: "decision",
                label:
                  "Identify the decision you are challenging: conviction, sentence, order, supervision condition, registry notice, civil commitment decision, agency classification, or parole decision.",
              },
              {
                id: "entry-date",
                label:
                  "Ask for the entry date or official decision date, not just the day someone told you about it.",
              },
              {
                id: "deadline",
                label:
                  "Ask what deadline applies and whether weekends, holidays, mail delays, or post-trial motions change the calculation.",
              },
              {
                id: "where-file",
                label:
                  "Ask where the notice, petition, or review request must be filed and how service must be completed.",
              },
              {
                id: "proof",
                label:
                  "Keep stamped copies, legal-mail logs, receipts, envelopes, confirmation numbers, and written instructions.",
              },
            ]}
          />

          <VerifyBeforeActing
            title="Verify before relying on a deadline"
            whoToAsk={
              <span>
                The clerk of the court that entered the judgment or order, the
                appellate clerk, your lawyer or public defender, or the agency
                office that issued the decision.
              </span>
            }
            whatToAsk={
              <span>
                “What was entered, on what date, what deadline applies, where do
                I file the notice or review request, and is there a local rule,
                form, or service requirement?”
              </span>
            }
            whatToSave={
              <span>
                The name, office, date and time of the answer, the docket entry,
                the written instruction if available, and proof of filing or
                mailing.
              </span>
            }
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="counsel-fees-conditions"
          number="4"
          title="Ask about counsel, fees, transcripts, release, and conditions"
          subtitle="These are practical support requests, not side issues. They can affect whether the appeal can actually move forward."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The first filing protects the door. The next question is whether
              the person has the tools to walk through it: counsel, forms, filing
              access, transcripts, and a safe plan for custody or supervision
              conditions while review is pending.
            </p>

            <p>
              In sex-offense cases, this can matter immediately. A person may be
              trying to appeal from custody, comply with registration, follow
              device restrictions, maintain housing, preserve family contact, or
              challenge a condition that makes ordinary life impossible.
            </p>
          </GuideProse>

          <GuideChecklist
            id="support-requests-checklist"
            title="Practical requests to ask about"
            columns={1}
            items={[
              {
                id: "appointed-counsel",
                label:
                  "Ask whether appointed appellate counsel, an appellate defender, conflict counsel, or a public defender can be requested.",
              },
              {
                id: "fee-waiver",
                label:
                  "Ask for fee waiver or in forma pauperis forms if filing costs, transcript costs, or copying costs are a barrier.",
              },
              {
                id: "transcripts",
                label:
                  "Ask how to order transcripts, whether a transcript-cost waiver exists, and whether any hearing needs to be ordered quickly.",
              },
              {
                id: "release-pending-appeal",
                label:
                  "If the person is in custody, ask counsel whether release pending appeal, bond review, or detention review is legally available.",
              },
              {
                id: "conditions",
                label:
                  "If a supervision, registry, GPS, internet, housing, travel, treatment, or no-contact condition is causing immediate harm, ask whether clarification, modification, stay, or emergency review is available.",
              },
              {
                id: "written-confirmation",
                label:
                  "Ask for the answer in writing when possible, especially if the issue affects a deadline, custody, registration, supervision, housing, or family contact.",
              },
            ]}
          />

          <GuideCallout
            tone="warning"
            icon="🧷"
            title="Do not confuse challenge with permission"
          >
            <p>
              Challenging a condition usually does not mean the person can ignore
              it. Until a court, agency, or supervising authority changes the
              rule, treat the condition as active and ask how to seek relief
              safely.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="record"
          number="5"
          title="Build the record"
          subtitle="Appeals usually depend on what is in the file. A clean record packet helps counsel, clinics, family, and self-represented people move faster."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Appellate courts generally review the record, not rumors or memory.
              If an issue was never raised, never written down, never transcribed,
              or never included in the file, it may be harder to use later.
            </p>

            <p>
              For sex-offense cases, the record may include more than trial
              documents. It may include psychosexual evaluations, treatment
              reports, risk assessments, presentence reports, registration
              notices, supervision conditions, device-search terms, no-contact
              orders, exclusion-zone maps, civil commitment filings, and agency
              classification letters.
            </p>
          </GuideProse>
<DocumentPacket
            title="Appeal and review packet"
            intro={
              <span>
                Use one folder, binder, envelope, or digital folder. Add a simple
                index page at the front with document names and dates.
              </span>
            }
            categories={[
              {
                title: "Court documents",
                items: [
                  "Judgment, sentencing order, written ruling, minute order, or agency decision.",
                  "Docket sheet and case number.",
                  "Notice of appeal or review request, plus stamped copy or proof of submission.",
                  "Motions, objections, plea paperwork, sentencing memoranda, and written orders.",
                ],
              },
              {
                title: "Record materials",
                items: [
                  "Transcript order forms and receipts.",
                  "Trial, plea, suppression, sentencing, revocation, or commitment hearing transcripts.",
                  "Exhibits, exhibit lists, admitted evidence, and excluded evidence if preserved.",
                  "Rulings on objections, jury instructions, verdict forms, and special findings.",
                ],
              },
              {
                title: "Sex-offense-specific materials",
                items: [
                  "Registration tier notices, classification letters, and termination or relief notices.",
                  "Probation, parole, supervised release, or treatment conditions.",
                  "Polygraph, GPS, internet, device-search, travel, housing, employment, or family-contact restrictions.",
                  "Civil commitment filings, risk assessments, treatment reports, and review decisions.",
                ],
              },
              {
                title: "Proof and access records",
                items: [
                  "Envelopes, postmarks, legal-mail logs, certified mail receipts, and confirmation numbers.",
                  "Names, departments, dates, and instructions from clerks, lawyers, officers, or agencies.",
                  "Requests for law library access, transcript access, forms, or legal mail, including denials or delays.",
                ],
              },
            ]}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Be careful with sensitive records">
            <p>
              Some records may contain victim information, child-protection
              information, sealed material, treatment records, mental-health
              records, or private family information. Share only what is needed,
              use secure storage when possible, and ask counsel before sending
              sensitive documents widely.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="registry-supervision"
          number="6"
          title="Registry, supervision, and sex-offense-specific review paths"
          subtitle="Some of the most serious consequences happen outside the trial itself. They may have their own review process."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A person charged with or convicted of a sex offense may face
              decisions that do not look like a traditional conviction appeal but
              still shape daily life: registration length, tier level, public
              website placement, exclusion zones, housing restrictions,
              employment limits, internet conditions, GPS monitoring, treatment
              requirements, or family-contact rules.
            </p>

            <p>
              These decisions may be reviewed through different paths depending
              on the state, supervision status, sentence, agency, and court
              order. Some require an administrative appeal. Some require a motion
              in the sentencing court. Some require a statutory petition. Some
              require exhausting an internal process before going to court.
            </p>
          </GuideProse>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Classification",
                title: "Registry tier or public listing",
                icon: "📌",
                tone: "warning",
                description:
                  "Save the notice, tier letter, score sheet, and instructions. Ask whether there is a hearing, objection deadline, or petition process.",
              },
              {
                eyebrow: "Conditions",
                title: "Supervision or release terms",
                icon: "🧭",
                tone: "legal",
                description:
                  "Do not violate a condition because you think it is unconstitutional. Ask whether modification, clarification, stay, or appeal is available.",
              },
              {
                eyebrow: "Relief",
                title: "Termination, reduction, or exemption",
                icon: "🕊️",
                tone: "success",
                description:
                  "Some states allow petitions to reduce or end registration duties after eligibility rules are met. The process is state-specific.",
              },
            ]}
          />

          <GuideCallout tone="reentry" icon="🏠" title="Practical risk">
            <p>
              Registry and supervision decisions can affect housing, work,
              travel, treatment, family contact, internet use, and safety. Treat
              every notice as something to save, calendar, and verify before
              relying on memory or informal advice.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="self-advocacy"
          number="7"
          title="Brief or explain the issue clearly"
          subtitle="Even when a lawyer is involved, a simple issue summary can help everyone understand what happened and what relief is being requested."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Appeals often turn on structured questions: what ruling was wrong,
              where it appears in the record, what legal standard applies, why it
              mattered, and what remedy is being requested. You do not need to
              sound like a lawyer to organize the issue clearly.
            </p>

            <p>
              For a person convicted of or charged with a sex offense, this can
              include trial errors, sentencing issues, plea problems, overbroad
              supervision conditions, registry classifications, civil commitment
              findings, treatment-related decisions, or restrictions affecting
              family contact, housing, work, travel, or internet access.
            </p>
          </GuideProse>

          <GuideChecklist
            id="issue-summary-checklist"
            title="One-page issue summary"
            columns={1}
            items={[
              {
                id: "ruling",
                label:
                  "Name the exact ruling, condition, classification, sentence, or agency decision being challenged.",
              },
              {
                id: "record-citation",
                label:
                  "List where it appears: docket number, transcript date and page if known, exhibit number, written order, notice, or letter.",
              },
              {
                id: "error",
                label:
                  "Write one plain sentence explaining what seems legally wrong, unsupported, unconstitutional, unfair, or procedurally defective.",
              },
              {
                id: "harm",
                label:
                  "Explain the practical harm: custody, registration, housing loss, family contact, employment, treatment access, travel, internet use, or future relief.",
              },
              {
                id: "standard",
                label:
                  "If counsel has identified a standard of review, write it down. If not, leave space for counsel or a clinic to add it later.",
              },
              {
                id: "relief",
                label:
                  "State what is being requested: reversal, new hearing, resentencing, condition modification, tier correction, remand, stay, or another specific remedy.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="scripts"
          number="8"
          title="Words to use"
          subtitle="Use calm, narrow questions. You do not need to explain your whole life story to ask for the next procedural step."
        />

        <GuideSectionCard>
          <ScriptBox
            title="One-page triage script"
            tone="legal"
            context="Use this when you need to ask about several urgent appeal tasks in one call or message."
            script={`Hello, my name is [Name]. I am trying to protect rights in case number [case number].

I need to know:
1. What judgment, order, condition, registry decision, or agency decision was entered?
2. What is the official entry date or decision date?
3. What deadline applies to a notice of appeal, review request, petition, or motion?
4. Where do I file it, and how must it be served?
5. Are there forms for appointment of counsel, fee waiver / in forma pauperis, transcript order, extension of time, release pending appeal, condition modification, or registry/supervision review?
6. If I am incarcerated or under supervision, is there a specific legal-mail, filing, or permission process I must use?

I am taking notes. Could you please repeat your name, department, and the best number or address for follow-up?`}
          />

          <ScriptBox
            title="Clerk script: appeal deadline and first filing"
            tone="legal"
            context="Use this with a court clerk when you need to protect a deadline."
            script={`Hello, my name is [Name]. I am calling about case number [case number].

I am trying to protect an appeal or review deadline. Can you tell me what judgment, order, or decision was entered, the entry date, where a notice of appeal or review request is filed, and whether your court has a self-represented packet or local rule sheet?

I am taking notes. Could you please repeat your name or department so I can write it down correctly?`}
          />

          <ScriptBox
            title="Counsel script: confirm who is filing"
            tone="neutral"
            context="Use this with trial counsel, public defender, appellate defender, or post-conviction counsel."
            script={`Hello [Counsel Name],

I am writing to confirm the appeal deadline in [case number]. Will you be filing the notice of appeal or any immediate review request? If yes, please tell me the filing date when it is done.

If you will not be filing it, please tell me immediately so I can ask the clerk how to protect the deadline myself. Thank you.`}
          />

          <ScriptBox
            title="Legal mail script: incarcerated filing proof"
            tone="warning"
            context="Use this when a person in custody needs proof that legal mail was deposited on time."
            script={`I need to send legal mail for case number [case number]. This filing may involve an appeal or review deadline.

Please provide proof of the date I deposited the filing, the address used, and any legal-mail log number or receipt available. I also need to keep a copy for my records.`}
          />

          <ScriptBox
            title="Registry or supervision script: ask for the review path"
            tone="reentry"
            context="Use this for registry offices, probation, parole, treatment providers, or agencies."
            script={`Hello, my name is [Name]. I received a decision or condition about [registry tier / registration duty / supervision condition / GPS / internet access / housing / travel / treatment].

I am not asking you for legal advice. I am asking what review process exists, what deadline applies, what form or office handles it, and how I can get the answer in writing.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="offline"
          number="9"
          title="If internet, phone, or printer access is limited"
          subtitle="Appeals can still move forward with paper, phone calls, courthouse forms, legal mail, and careful notes."
        />

        <GuideSectionCard>
          <OfflineOptions
            title="Offline and limited-access options"
            icon="📬"
            note={
              <span>
                This section is especially important for people in jail or
                prison, people on device restrictions, families without printers,
                and anyone relying on public computers.
              </span>
            }
            items={[
              "Ask the clerk for paper appeal forms, self-represented packets, local rule sheets, and the mailing address for filings.",
              "Use courthouse terminals, public law libraries, prison law libraries, or public libraries to print rules and forms.",
              "Ask a trusted person to print official forms and mail them, but keep copies of exactly what was sent.",
              "Use legal-mail procedures if incarcerated. Keep the log, receipt, or written proof of deposit date.",
              "Write down every call: date, time, number called, person or department, question asked, and answer received.",
              "Keep a paper calendar with the appeal deadline, transcript deadline, briefing dates, hearing dates, and agency review dates.",
            ]}
          />

          <GuideCallout tone="reminder" icon="✍️" title="Paper notes count">
            <p>
              A simple notebook can protect you. Write down names, dates,
              addresses, instructions, case numbers, and confirmation numbers.
              Put copies of filings and envelopes behind the note page.
            </p>
          </GuideCallout>
        </GuideSectionCard>
<GuideSectionHeader
          id="mistakes"
          number="10"
          title="Common mistakes to avoid"
          subtitle="These are normal mistakes under stress. The goal is not shame. The goal is prevention."
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Waiting for transcripts before filing the first notice.",
                whyItMatters:
                  "The notice deadline may arrive before transcripts are ready.",
                betterMove:
                  "Ask whether a notice of appeal or review request must be filed now, then order transcripts and build the record.",
              },
              {
                mistake: "Assuming an appeal is a new trial.",
                whyItMatters:
                  "Most appellate courts review legal errors in the existing record.",
                betterMove:
                  "Focus on orders, objections, rulings, transcript pages, exhibits, and the relief you are asking for.",
              },
              {
                mistake: "Relying on a phone answer without writing it down.",
                whyItMatters:
                  "People forget names, departments, and instructions. Agencies may disagree later.",
                betterMove:
                  "Record the date, time, name, department, question, answer, and whether a written confirmation is available.",
              },
              {
                mistake:
                  "Assuming registry or supervision relief uses the same rules as a criminal appeal.",
                whyItMatters:
                  "A tier challenge, termination petition, probation condition, or agency classification may have a different process.",
                betterMove:
                  "Identify the decision-maker and ask what review path applies to that exact decision.",
              },
              {
                mistake: "Throwing away envelopes, receipts, and mail logs.",
                whyItMatters:
                  "Proof of mailing, notice, or legal-mail deposit can matter when timing is disputed.",
                betterMove:
                  "Save envelopes, postmarks, legal-mail logs, certified mail receipts, tracking numbers, and stamped copies.",
              },
              {
                mistake:
                  "Violating a condition because you believe it is unfair or unconstitutional.",
                whyItMatters:
                  "A violation can create new custody, supervision, housing, or registry consequences while the challenge is pending.",
                betterMove:
                  "Ask about modification, clarification, stay, appeal, or emergency relief before acting against the condition.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="after-decision"
          number="11"
          title="After the decision"
          subtitle="An appellate decision may create a new deadline, a new court step, or a new practical problem to solve."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              When a court or agency issues a decision, save the full decision,
              the date it was entered, the envelope or notice, and any docket
              update. The next step may depend on whether the case is over,
              remanded, reopened, denied, partly granted, or sent back for more
              proceedings.
            </p>

            <p>
              Depending on the case and court, possible next steps may include
              rehearing, reconsideration, en banc review, mandate, remand, a
              petition for higher-court review, Supreme Court certiorari,
              post-conviction relief, or a later registry-relief petition. The
              terms sound technical, but the practical question is still the same:
              what deadline applies now, and who has authority over the next
              step?
            </p>
          </GuideProse>

          <GuideChecklist
            id="after-decision-checklist"
            title="After-decision checklist"
            columns={1}
            items={[
              {
                id: "save-decision",
                label:
                  "Save the decision, order, mandate notice, docket entry, and envelope or electronic notice.",
              },
              {
                id: "ask-next-deadline",
                label:
                  "Ask counsel or the clerk whether there is a rehearing, reconsideration, mandate, remand, certiorari, or other deadline.",
              },
              {
                id: "remand",
                label:
                  "If the case is remanded, ask what the lower court or agency must do next and whether a hearing will be scheduled.",
              },
              {
                id: "conditions-after",
                label:
                  "If custody, supervision, registration, treatment, housing, travel, internet, or family-contact conditions change after the decision, ask for the new rule in writing.",
              },
              {
                id: "future-remedies",
                label:
                  "Ask whether the issue should be preserved for post-conviction relief, later law changes, registry termination, or another future remedy.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⏳" title="Supreme Court timing is separate">
            <p>
              A petition for Supreme Court review has its own rules and timing.
              Do not assume the same deadline as the lower appeal. If Supreme
              Court review is being considered, verify the deadline immediately
              with counsel or the Supreme Court’s current filing guidance.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources-next"
          number="12"
          title="Resources and next steps"
          subtitle="Use official sources first, then ask the court, agency, or counsel how they apply to your case."
        />

        <GuideSectionCard>
          <GuideChecklist
            id="forms-to-ask-for"
            title="Common forms to ask for"
            columns={1}
            items={[
              {
                id: "notice-appeal",
                label:
                  "Notice of appeal, notice of review, administrative appeal request, or petition form.",
              },
              {
                id: "extension",
                label:
                  "Motion or application for extension of time, if a deadline problem exists and the rules allow it.",
              },
              {
                id: "ifp",
                label:
                  "Fee waiver, in forma pauperis, or indigency affidavit forms.",
              },
              {
                id: "counsel",
                label:
                  "Request for appointed counsel, appellate defender referral, or conflict counsel request.",
              },
              {
                id: "transcript",
                label:
                  "Transcript order form, transcript-cost waiver request, or court-reporter contact instructions.",
              },
              {
                id: "custody-conditions",
                label:
                  "Release pending appeal, bond review, detention review, stay request, or supervision-condition modification form.",
              },
              {
                id: "registry",
                label:
                  "Registry tier review, registration termination petition, agency appeal, or condition clarification form if applicable.",
              },
            ]}
          />

          <SoftDivider />

          <ResourceLinkGrid
            title="Official resources and forms"
            description={
              <span>
                These links are starting points, not a substitute for the rule in
                your exact court, state, agency, or supervision order.
              </span>
            }
            resources={resourceLinks}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "Federal Sex-Crime Process Guide",
                description:
                  "Useful if the appeal grows out of a federal investigation, plea, trial, sentencing, or BOP-related issue.",
                to: "/resources/federal-process-guide",
              },
              {
                title: "State Sex-Crime Process Guide",
                description:
                  "Useful if the appeal or post-conviction issue comes from a state prosecution, sentence, or state-court order.",
                to: "/resources/state-process-guide",
              },
              {
                title: "Your Rights at Every Stage",
                description:
                  "Helpful for understanding rights during investigation, prosecution, custody, supervision, and reentry.",
                to: "/resources/know-your-rights",
              },
              {
                title: "Registry Rules by State",
                description:
                  "Use this when the issue involves registration duties, state-specific rules, travel, relief eligibility, or compliance risk.",
                to: "/resources/state-registry",
              },
              {
                title: "Family & Allies Guide",
                description:
                  "For supporters helping with paperwork, calls, transportation, money, emotional strain, and practical follow-through.",
                to: "/resources/family-support-guide",
              },
            ]}
          />

          <SoftDivider />

          <SourceList
            title="Sources & verification"
            note="These sources were selected because they are official court/government sources or stable legal rule references. Always verify the local rule, state rule, agency rule, and current deadline before relying on any general guide."
            sources={sourceLinks}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="closing"
          number="13"
          title="Moving forward with realism and hope"
          subtitle="Appeals are technical and often slow, but preserving rights is still meaningful work."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Appeals and review petitions are not easy. They can be slow,
              technical, expensive, and emotionally draining. Many are denied.
              Standards of review can feel stacked against the person trying to
              challenge the decision.
            </p>

            <p>
              But appeal work still matters. It can correct errors, reduce
              punishment, change conditions, preserve issues for later law
              changes, challenge overbroad restrictions, protect family contact,
              and create a record that future lawyers, clinics, courts, and
              reform advocates can use.
            </p>

            <p>
              You do not have to do everything perfectly today. Start with the
              next safe step: calendar the deadline, save the proof, ask the
              narrow question, and keep the paper trail moving.
            </p>
          </GuideProse>

          <GuideCallout tone="success" icon="🕊️" title="Keep momentum, not perfection">
            <p>
              Calendar every deadline, save every receipt, and keep a one-page
              case log. Progress compounds even when today’s answer is “not
              yet.”
            </p>
          </GuideCallout>
        </GuideSectionCard>
      </main>
    </div>
  );
}