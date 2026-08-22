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
  QuickStartPanel,
  GuideChecklist,
  ScriptBox,
  OfflineOptions,
  VerifyBeforeActing,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
} from "../../components/solar";

const sourceLinks = {
  smartCurrentLaw: "https://www.smart.ojp.gov/sorna/current-law",
  smartFaqs: "https://www.smart.ojp.gov/faqs",
  smartInPerson:
    "https://smart.ojp.gov/sorna/current-law/implementation-documents/person-verification",
  smartResidenceHomelessTransient:
    "https://smart.ojp.gov/sorna/current-law/implementation-documents/determination-residence-homeless-offenders-and-transient-workers",
  smartImplementation:
    "https://smart.ojp.gov/sorna/current-law/implementation-documents",
  nsopwAllRegistries: "https://www.nsopw.gov/all-registries",
  dojSorna:
    "https://www.justice.gov/criminal/criminal-ceos/sex-offender-registration-and-notification-act-sorna",
  usCourtsConditions:
    "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions",
  usCourtsSearch:
    "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-search-and-seizure-probation-and-supervised-release",
  icaosReporting:
    "https://interstatecompact.org/icaos-rules/chapter/ch3/rule-3-103-3",
  icaosTransfer:
    "https://interstatecompact.org/icaos-rules/chapter/ch3/rule-3-101-3",
  usaLegalAid: "https://www.usa.gov/legal-aid",
  usMarshalsSexOffenderInvestigations:
    "https://www.usmarshals.gov/sites/default/files/media/document/2022-Sex-Offender-investigations.pdf",
};

const inlineLinkClass =
  "font-medium text-blue-700 underline decoration-blue-600 underline-offset-2 hover:text-blue-900 hover:decoration-blue-900";

function ExternalGuideLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={inlineLinkClass}
    >
      {children}
    </a>
  );
}

function InternalGuideLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Link to={to} className={inlineLinkClass}>
      {children}
    </Link>
  );
}

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Registry Compliance & Verification Survival Guide | The SOLAR Project"
        description="A practical SOLAR guide for verifying registry duties, calendaring deadlines, reporting changes, saving proof of what you did, and handling unclear or disputed instructions."
        keywords="registry compliance, sex offense registry, registration verification, reporting duties, supervision conditions, proof of reporting, SOLAR Project"
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
            Registry Compliance & Verification Survival Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical system for figuring out what may need to be reported,
            who controls the rule, how to verify the requirement, how to
            calendar deadlines, and how to save proof of what you did.
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

        <GuideIntro title="Start Here: The Compliance Survival Loop" icon="🧭">
          <p>
            Registry rules can feel like a maze, especially when instructions
            are verbal, offices are closed, portals fail, or different people
            give different answers. This guide gives you a steady operating
            system: verify the rule, calendar the deadline, report through the
            required channel, document what happened, preserve proof, and resolve
            conflicts carefully.
          </p>

          <p>
            This guide is not a replacement for your state law, tribal law,
            territorial rule, court order, supervision condition, registry
            notice, or legal advice. It is a practical survival guide for
            building records and reducing avoidable risk while you verify the
            rule that applies to your exact situation.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If you are worried about a deadline or reporting duty"
          subtitle="Use this before guessing, waiting, or relying on memory."
          icon="⚡"
          urgentActions={[
            <span key="verify">
              Identify the exact duty you are worried about: address, work,
              school, travel, online identifier, vehicle, temporary location, or
              something else.
            </span>,
            <span key="authority">
              Find the authority that controls that duty in your jurisdiction
              and ask for the deadline, method, and form or written instruction.
            </span>,
            <span key="calendar">
              Put the deadline and follow-up reminders somewhere you will
              actually see them.
            </span>,
          ]}
          nextActions={[
            <span key="report">
              Report through the required channel, not just the easiest or most
              familiar channel.
            </span>,
            <span key="save">
              Save proof of what you did: receipt, stamped copy, screenshot,
              confirmation number, email, certified-mail record, or call notes.
            </span>,
            <span key="clarify">
              If instructions conflict, document both answers and keep asking
              which authority controls the exact duty.
            </span>,
          ]}
          reminder={
            <span>
              A saved record can help show what you did and what you were told.
              It does not automatically prove that every legal requirement was
              satisfied.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Step 1",
              title: "Verify",
              icon: "🔎",
              tone: "legal",
              description:
                "Ask which authority controls this exact duty, where the rule is written, what deadline applies, and what method is required.",
            },
            {
              eyebrow: "Step 2",
              title: "Calendar",
              icon: "📅",
              tone: "info",
              description:
                "Build reminder layers around the deadlines that apply to you. Do not rely on memory or one alert.",
            },
            {
              eyebrow: "Step 3",
              title: "Report",
              icon: "📨",
              tone: "success",
              description:
                "Use the required reporting channel and ask for a receipt, confirmation, or written record when possible.",
            },
            {
              eyebrow: "Step 4",
              title: "Document",
              icon: "📝",
              tone: "neutral",
              description:
                "Write down who you contacted, what you asked, what you were told, and what next step or deadline was given.",
            },
            {
              eyebrow: "Step 5",
              title: "Preserve proof",
              icon: "🗂️",
              tone: "reminder",
              description:
                "Keep a paper and/or digital packet showing proof of appearance, proof of submission, proof of attempt, and instructions received.",
            },
            {
              eyebrow: "Step 6",
              title: "Resolve conflicts carefully",
              icon: "⚖️",
              tone: "warning",
              description:
                "When answers conflict or a deadline may be disputed, avoid oversharing and seek legal help before making statements that could create risk.",
            },
          ]}
        />

        <GuideCallout tone="legal" icon="⚖️" title="Important legal boundary">
          <p>
            Registry duties, supervision duties, court conditions, and local
            office procedures can overlap, but they are not always the same
            rulebook. When the stakes are high, verify the exact rule with the
            authority responsible for that duty and save the answer if possible.
          </p>
        </GuideCallout>

        <GuideSectionHeader
          id="who-controls"
          number="2"
          title="Who Controls This Rule?"
          subtitle="The safest question is not “which kind of official?” It is “which authority controls this exact duty, and where is that documented?”"
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A registry office, sheriff’s office, police department, state
              police unit, tribal office, territory agency, court, or supervision
              officer may all matter in different situations. But do not assume
              they are separate in every place, and do not assume that the person
              who answers the phone controls every rule.
            </p>

            <p>
              Start by naming the specific duty. Then ask who controls that duty
              in that jurisdiction, where the duty is written, what deadline
              applies, what method is required, and what proof you can receive or
              keep. The SOLAR <InternalGuideLink to="/resources/state-registry">Registry Rules by State</InternalGuideLink> hub is a practical starting point for jurisdiction-specific official sources.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            whoToAsk="The office or authority responsible for the exact duty you are trying to satisfy: the registering agency, court, supervision officer, compact office, tribal office, territory agency, or another official source."
            whatToAsk="Ask: Which authority controls this requirement? Where is it written? What deadline applies? What method is required? Is there a form, portal, appointment, receipt, or written confirmation?"
            whatToSave="Save the source of the answer, the date, the name or department, the phone number or email, the rule or form cited, and any receipt or written instruction."
          />

          <GuideChecklist
            id="authority-map"
            title="Authority map: questions to answer before relying on an instruction"
            columns={1}
            items={[
              {
                id: "exact-duty",
                label:
                  "What exact duty am I trying to satisfy: registration, verification, address change, employment, school, travel, online identifier, vehicle, temporary location, supervision approval, or something else?",
              },
              {
                id: "controls-duty",
                label:
                  "Which authority controls this exact duty in this jurisdiction?",
              },
              {
                id: "written-source",
                label:
                  "Where is the rule written: statute, regulation, agency form, registry notice, court order, supervision condition, compact instruction, or portal instruction?",
              },
              {
                id: "required-method",
                label:
                  "What method is required: in person, portal, phone, email, mail, appointment, written form, or another method?",
              },
              {
                id: "proof-available",
                label:
                  "What proof can I keep: receipt, stamped copy, confirmation number, email, screenshot, certified-mail record, or contact log?",
              },
            ]}
          />

          <GuideCallout
            tone="reminder"
            icon="🧩"
            title="Registry duties and supervision duties may overlap"
          >
            <p>
              A supervision officer may give instructions that matter to your
              supervision, while a registry agency may control a separate
              registration duty. If you are supervised, ask both questions when
              needed: “What does my supervision condition require?” and “What
              does the registry rule require?”
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="first-registration"
          number="3"
          title="First Registration and Recurring Verification"
          subtitle="Prepare for appointments without assuming national deadlines, cadence, documents, or office procedures."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              First registration and recurring verification are common registry
              events, but the timing, documents, office, method, and frequency
              can vary. Some places use appointments. Some require <ExternalGuideLink href={sourceLinks.smartInPerson}>in-person verification</ExternalGuideLink>. Some use forms or portals. Some jurisdictions may
              require verification more often than federal minimums.
            </p>

            <p>
              The safe move is to prepare before you go, ask what the appointment
              is updating, and save proof of appearance or submission when the
              office provides it.
            </p>
          </GuideProse>

          <GuideChecklist
            id="appointment-preparation"
            title="Appointment preparation checklist"
            columns={1}
            items={[
              {
                id: "confirm-place",
                label:
                  "Confirm the correct office, address, appointment time, parking or entry instructions, and whether walk-ins are accepted.",
              },
              {
                id: "confirm-documents",
                label:
                  "Ask what documents to bring: identification, proof of residence, employment or school information, vehicle information, travel information, court paperwork, supervision paperwork, or other required records.",
              },
              {
                id: "bring-notices",
                label:
                  "Bring appointment notices, prior registration forms, verification letters, and any written instructions you received.",
              },
              {
                id: "ask-updated",
                label:
                  "Ask what information is being updated and whether anything still needs to be submitted after the appointment.",
              },
              {
                id: "request-proof",
                label:
                  "Ask whether the office can provide a receipt, stamped copy, confirmation number, or other proof of appearance or submission.",
              },
              {
                id: "save-after",
                label:
                  "After the appointment, write down the date, time, office, person or department, what happened, and any next deadline.",
              },
            ]}
          />

          <ScriptBox
            title="Script: ask before an appointment"
            tone="neutral"
            context="Use this when you are trying to prepare without guessing what to bring."
            script={`Hello, my name is [Name]. I have a registration or verification appointment on [date], or I am trying to schedule one.

Can you tell me what documents I need to bring, what information will be updated, what deadline applies, and whether I can receive a receipt, stamped copy, confirmation number, or other written proof of appearance or submission?

I am taking notes. Could you please tell me the office or department name for my record?`}
          />

          <GuideCallout tone="warning" icon="⚠️" title="Do not assume cadence">
            <p>
              Do not rely on a national verification schedule or someone else’s
              reporting pattern. Verify your own cadence, your own deadline, and
              your own required method with the authority that controls your
              registration.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="reporting-triggers"
          number="4"
          title="Reporting Triggers: What Changes Might Need Notice?"
          subtitle="Use this as an issue-spotting checklist, not as a universal list of legal duties."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              <ExternalGuideLink href={sourceLinks.dojSorna}>SORNA uses residence, employment, and school as core registration categories</ExternalGuideLink>, but the details of deadlines, methods, and required
              updates depend on the jurisdiction. Your jurisdiction may also
              require updates for other categories. Verify the category, the
              deadline, the method, who receives the notice, and what proof to
              save.
            </p>
          </GuideProse>

          <GuideChecklist
            id="possible-triggers"
            title="Possible reporting categories to verify"
            columns={2}
            items={[
              {
                id: "residence-address",
                label: "Residence, address, mailing address, or where you stay.",
              },
              {
                id: "temporary-location",
                label:
                  "Temporary location, overnight stay, short-term housing, hotel, shelter, or other temporary place.",
              },
              {
                id: "employment",
                label:
                  "Employment, work location, contract work, gig work, volunteer work, or work schedule changes.",
              },
              {
                id: "school",
                label:
                  "School, training, certification program, college, trade program, or campus attendance.",
              },
              {
                id: "vehicle",
                label:
                  "Vehicle, license plate, vehicle access, or vehicle ownership or use.",
              },
              {
                id: "phone",
                label: "Phone number, device, app-based number, or contact method.",
              },
              {
                id: "email",
                label: "Email address or other electronic contact information.",
              },
              {
                id: "online-id",
                label:
                  "Online identifier, username, social media account, gaming handle, or platform profile.",
              },
              {
                id: "name-change",
                label: "Legal name change, alias, or other identity information.",
              },
              {
                id: "travel",
                label:
                  "Travel, overnight stay, temporary relocation, out-of-state trip, or international travel.",
              },
              {
                id: "homelessness",
                label: (
                  <span>
                    <ExternalGuideLink href={sourceLinks.smartResidenceHomelessTransient}>
                      Homelessness or transient status
                    </ExternalGuideLink>
                    , unstable housing, sleeping in a vehicle, or emergency shelter.
                  </span>
                ),
              },
              {
                id: "displacement",
                label:
                  "Emergency displacement after eviction, fire, storm, family crisis, hospitalization, or disaster.",
              },
            ]}
          />

          <VerifyBeforeActing
            whoToAsk="The registering agency or other authority that controls the specific category in your jurisdiction. If you are supervised, also ask the officer or office responsible for your supervision condition."
            whatToAsk="Ask whether this category must be reported, what counts as a reportable change, when the clock starts, how notice must be given, and whether proof of reporting is available."
            whatToSave="Save the written answer, form, portal instructions, receipt, confirmation number, screenshot, or call note showing what you asked and what you were told."
          />

          <GuideCallout
            tone="privacy"
            icon="🔐"
            title="Technology-related duties need extra care"
          >
            <p>
              Online identifiers, phones, email, monitoring software, device
              restrictions, and private platform rules are different systems.
              Registry law, supervision conditions, treatment rules, monitoring
              requirements, and platform policies may not say the same thing.
              Verify the rule that controls the action you are about to take.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="trigger-mistakes"
            title="Common mistakes to avoid"
            columns={1}
            items={[
              {
                id: "assuming-not-trigger",
                label:
                  "Assuming a change does not count because it seems small, temporary, informal, unpaid, or inconvenient to report.",
              },
              {
                id: "asking-wrong-office",
                label:
                  "Relying on an answer from an office that does not control the exact duty.",
              },
              {
                id: "no-proof",
                label:
                  "Reporting a change but saving no proof of what you submitted, when you submitted it, or who received it.",
              },
              {
                id: "confusing-supervision",
                label:
                  "Assuming supervision approval automatically satisfies a registry duty, or assuming registry reporting automatically satisfies a supervision duty.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="compliance-system"
          number="5"
          title="Build Your Compliance System"
          subtitle="A reliable system matters more than memory, willpower, or one perfect reminder."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The goal is not to build a fancy calendar. The goal is to make
              deadlines hard to miss and easy to prove. Use reminder layers that
              fit the duty. For some recurring deadlines, you may want reminders
              weeks ahead. For short-notice reporting duties, you may need
              same-day and next-day reminders. The point is not one perfect
              schedule; the point is not relying on memory.
            </p>

            <p>
              Weekends, holidays, office closures, portal failures, storms, and
              disasters do not automatically change a deadline unless the
              authority that controls the duty says they do. Build your system so
              you can act early when possible and document obstacles when early
              action is not possible.
            </p>
          </GuideProse>

          <GuideChecklist
            id="deadline-worksheet"
            title="Deadline worksheet"
            columns={1}
            items={[
              {
                id: "name-duty",
                label:
                  "Name the duty: registration, verification, address change, employment update, school update, travel notice, online identifier, vehicle update, or another category.",
              },
              {
                id: "source",
                label:
                  "Write the source: statute, agency form, registry notice, portal instruction, supervision condition, court order, compact instruction, or written agency answer.",
              },
              {
                id: "deadline",
                label:
                  "Write the deadline exactly as given. Include when the clock starts, not just when it ends.",
              },
              {
                id: "method",
                label:
                  "Write the required method: in person, portal, email, mail, phone, appointment, form, or another method.",
              },
              {
                id: "backup",
                label:
                  "Write the backup method or office contact if the primary method fails.",
              },
              {
                id: "proof",
                label:
                  "Write what proof you can save: receipt, stamped copy, screenshot, confirmation number, email, certified-mail record, or call log.",
              },
            ]}
          />

          <GuideChecklist
            id="reminder-layers"
            title="Reminder layers tool"
            columns={1}
            items={[
              {
                id: "calendar-main",
                label:
                  "Put the deadline on a calendar you check daily or weekly.",
              },
              {
                id: "early-warning",
                label:
                  "Add an early warning far enough ahead to gather documents, arrange transportation, request time off, or ask for clarification.",
              },
              {
                id: "near-warning",
                label:
                  "Add a closer reminder for short-notice tasks or final confirmation.",
              },
              {
                id: "human-backup",
                label:
                  "Use a trusted person, case manager, attorney, or family member as a backup reminder when safe and appropriate.",
              },
              {
                id: "paper-backup",
                label:
                  "Keep a paper calendar or deadline sheet if phone access, internet access, or supervision technology restrictions make digital reminders unreliable.",
              },
              {
                id: "review-rhythm",
                label:
                  "Review upcoming registry and supervision deadlines at the same time each week.",
              },
            ]}
          />

          <OfflineOptions
            title="If internet or phone access is limited"
            items={[
              "Use a paper calendar, notebook, or printed monthly calendar.",
              "Ask for mailed forms, printed appointment notices, or written instructions.",
              "Keep agency phone numbers, office addresses, and hours in your paper folder.",
              "Ask a trusted helper to print forms or save official pages, but do not rely on them to interpret the rule for you.",
              "If you are incarcerated, in treatment, in a shelter, or under technology limits, ask staff how to request forms, make official calls, or mail notices.",
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="report-save-record"
          number="6"
          title="Report It and Save the Record"
          subtitle="Use the required channel, then save proof of what you did—not just what you meant to do."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Reporting is only part of the system. The other part is preserving
              a record of the action: proof of appearance, proof of submission,
              proof of reporting, proof of attempt, or a record of the
              instruction received.
            </p>

            <p>
              A receipt, stamped copy, screenshot, certified-mail record, call
              log, email, confirmation number, or portal message can help show
              what you did. That does not automatically mean a court or agency
              will decide the legal obligation was fully satisfied. Use careful
              language: proof of what you did.
            </p>
          </GuideProse>

          <GuideChecklist
            id="reporting-record"
            title="After you report, save the record"
            columns={1}
            items={[
              {
                id: "required-channel",
                label:
                  "Confirm you used the required channel, not only the channel that was easiest.",
              },
              {
                id: "receipt",
                label:
                  "Ask for a receipt, stamped copy, confirmation number, portal message, email, or other written proof of appearance or submission.",
              },
              {
                id: "screenshot",
                label:
                  "If using a portal, save screenshots showing the date, time, account, submitted information, and confirmation screen when safe and allowed.",
              },
              {
                id: "mail-proof",
                label:
                  "If mailing, save copies of what you mailed and the certified-mail, tracking, or delivery record.",
              },
              {
                id: "contact-log",
                label:
                  "If calling, write a contact log with the date, time, office, person or department, number called, question asked, and answer given.",
              },
              {
                id: "next-deadline",
                label:
                  "Write down the next deadline or follow-up step before putting the paperwork away.",
              },
            ]}
          />

          <ScriptBox
            title="Script: ask for a receipt or written confirmation"
            tone="neutral"
            context="Use this after submitting information, appearing in person, or receiving instructions."
            script={`Can I please receive a receipt, stamped copy, confirmation number, email, or other written confirmation showing that I appeared or submitted this information today?

If that is not available, can you tell me what record the office keeps and what I should write down for my own file?`}
          />

          <GuideCallout
            tone="reminder"
            icon="🗂️"
            title="About a “Compliance Proof Packet”"
          >
            <p>
              A Compliance Proof Packet is a user-friendly name for your records
              folder. A packet can help show what you did and what you were told.
              It does not automatically prove that every legal requirement was
              satisfied.
            </p>
          </GuideCallout>

          <OfflineOptions
            title="Low-tech ways to preserve proof"
            items={[
              "Use a folder, envelope, binder, or notebook labeled with the year.",
              "Ask for stamped copies when you hand-deliver forms.",
              "Write call notes immediately after the call, while details are fresh.",
              "Keep postal receipts stapled to copies of what you mailed.",
              "If you cannot print, write down the exact portal confirmation number, date, time, and page title.",
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="unclear-instructions"
          number="7"
          title="When the Instructions Are Not Clear"
          subtitle="Verbal, conflicting, unavailable, or unclear instructions need careful documentation—not guessing."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Sometimes the person you reach is unsure. Sometimes one office
              points you to another. Sometimes an instruction is verbal. Sometimes
              an agency portal is unclear. Your job is to slow the situation
              down, ask narrow questions, avoid oversharing, and preserve a
              record of the answer.
            </p>

            <p>
              When instructions conflict, do not simply rely on whichever
              official was available. Keep asking which authority controls the
              exact duty and where that authority has documented the rule.
            </p>
          </GuideProse>

          <ScriptBox
            title="Script: narrow clarification request"
            tone="neutral"
            context="Use this when you need the office to identify the duty, deadline, and method."
            script={`Hello, my name is [Name]. I am trying to make sure I follow the correct reporting procedure for [issue].

Which office handles this requirement, what deadline applies, and is there a form, portal instruction, or written rule I should use?

I am taking notes. Could you please tell me your name or department and the best way to confirm this in writing?`}
          />

          <ScriptBox
            title="Script: confirm a verbal instruction in writing"
            tone="neutral"
            context="Use this after a phone call or in-person conversation when the instruction matters."
            script={`Thank you for speaking with me today. I want to make sure I understood correctly.

My notes say that on [date] at [time], [office/department/person] told me [instruction], with a deadline of [deadline] and a next step of [next step].

If I misunderstood anything, please let me know what I should correct. If there is a form or written instruction I should follow, please send it or tell me where to find it.`}
          />

          <GuideChecklist
            id="verbal-instruction-notes"
            title="Verbal instruction notes"
            columns={1}
            items={[
              { id: "date", label: "Date and time of the conversation." },
              { id: "office", label: "Office, agency, department, or location." },
              {
                id: "person",
                label:
                  "Person’s name, badge number, title, or department if available.",
              },
              {
                id: "contact",
                label: "Phone number, email address, portal, or office address.",
              },
              { id: "question", label: "The exact question you asked." },
              { id: "answer", label: "The answer or instruction given." },
              { id: "deadline", label: "Any deadline or clock-start date stated." },
              {
                id: "next-step",
                label: "Any next step, form, appointment, or office referral.",
              },
              {
                id: "written-request",
                label:
                  "Whether you asked for written confirmation and what response you received.",
              },
            ]}
          />

          <VerifyBeforeActing
            whoToAsk="The authority responsible for the exact duty, not merely the most available person."
            whatToAsk="Ask whether the instruction is official, where it is written, what deadline applies, and how to document your action."
            whatToSave="Save your notes, the written clarification request, any response, screenshots, emails, portal messages, and follow-up attempts."
          />

          <GuideChecklist
            id="unclear-mistakes"
            title="Common mistakes when instructions are unclear"
            columns={1}
            items={[
              {
                id: "guessing",
                label:
                  "Guessing instead of asking a narrow question tied to the exact duty.",
              },
              {
                id: "oversharing",
                label:
                  "Volunteering unnecessary details when the goal is only to identify the correct procedure.",
              },
              {
                id: "no-notes",
                label: "Relying on memory after a verbal instruction.",
              },
              {
                id: "no-authority-check",
                label:
                  "Treating a helpful answer as controlling without checking whether that office has authority over the duty.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="moves-temporary-locations"
          number="8"
          title="Moves and Temporary Locations"
          subtitle="This section covers the reporting-and-proof workflow, not the full interstate moving process."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Moving can create questions in both the old jurisdiction and the
              new jurisdiction. Temporary locations can also matter, depending on
              the rule. Your job is to verify what notice is required before
              leaving, what must happen after arrival, and what proof to save in
              both places when required.
            </p>

            <p>
              <ExternalGuideLink href={sourceLinks.icaosTransfer}>Interstate supervision transfer</ExternalGuideLink> is not the same thing as registry
              reporting. A supervision compact instruction may control where and
              how a supervised person reports for supervision, while registry
              duties may still require separate registration or notice steps.
              For the fuller relocation workflow, use the SOLAR <InternalGuideLink to="/resources/interstate-moving-guide">Interstate Moving Guide</InternalGuideLink>.
            </p>
          </GuideProse>

          <GuideChecklist
            id="move-notice-proof"
            title="Move-notice proof worksheet"
            columns={1}
            items={[
              {
                id: "old-jurisdiction",
                label:
                  "Ask the old jurisdiction what notice is required before leaving and what proof of notice is available.",
              },
              {
                id: "new-jurisdiction",
                label:
                  "Ask the new jurisdiction what registration, appearance, appointment, or notice is required after arrival.",
              },
              {
                id: "temporary",
                label:
                  "Ask whether a temporary stay, hotel, shelter, hospital, family home, vehicle, or other short-term location creates a reporting duty.",
              },
              {
                id: "method",
                label:
                  "Confirm whether notice must be in person, by portal, by mail, by email, by phone, or through a specific form.",
              },
              {
                id: "proof",
                label:
                  "Save proof of notice, proof of appearance, proof of submission, proof of attempt, and instructions received in both places.",
              },
            ]}
          />

          <GuideChecklist
            id="before-after-move"
            title="Before leaving / after arrival / after completion"
            columns={1}
            items={[
              {
                id: "before-leaving",
                label:
                  "Before leaving: verify old-jurisdiction notice requirements, supervision travel or transfer rules, and any deadline that starts before departure.",
              },
              {
                id: "after-arrival",
                label:
                  "After arrival: verify new-jurisdiction registration or notice requirements and calendar the first required appearance or deadline.",
              },
              {
                id: "after-completion",
                label:
                  "After completion: save receipts, stamped forms, emails, screenshots, certified-mail records, and contact logs in one packet.",
              },
            ]}
          />

          <GuideCallout tone="warning" icon="🚧" title="Do not combine systems">
            <p>
              Approval to travel, relocate, or transfer supervision may not
              satisfy a registry reporting duty. Registry reporting may not
              satisfy a supervision condition. When both systems apply, verify
              both and keep records for both.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="compliance-visits"
          number="9"
          title="Compliance / Address Verification Visits"
          subtitle="This section is administrative documentation only. It is not a live-encounter rights guide."
        />

        <GuideSectionCard>
          <GuideCallout tone="legal" icon="⚖️" title="Scope boundary">
            <p>
              This section does not answer whether officers can enter, search,
              ask questions, require consent, rely on another resident’s consent,
              prevent recording, or question you under supervision conditions.
              Those issues depend on the facts, the jurisdiction, your status,
              and your conditions. Use <InternalGuideLink to="/resources/police-registry-cps-encounters">Police, Registry & CPS Encounters</InternalGuideLink>, <InternalGuideLink to="/resources/know-your-rights">Your Rights at Every Stage</InternalGuideLink>, and <InternalGuideLink to="/resources/supervision-conditions-guide">Supervision Conditions Survival Guide</InternalGuideLink> for those questions.
            </p>
          </GuideCallout>

          <GuideProse>
            <p>
              Compliance or address verification visits may involve local, state,
              tribal, territorial, or federal actors depending on the place and
              the issue. This guide focuses only on what to document after the
              visit so you have a clear administrative record.
            </p>
          </GuideProse>

          <GuideChecklist
            id="visit-notes"
            title="Compliance-visit notes sheet"
            columns={1}
            items={[
              { id: "visit-date", label: "Date and approximate time of the visit." },
              { id: "agency", label: "Agency, office, department, or unit involved." },
              {
                id: "names",
                label:
                  "Names, badge numbers, business cards, or identifying information if available.",
              },
              {
                id: "stated-purpose",
                label:
                  "What the visit was described as: address verification, compliance check, investigation, supervision contact, or something else.",
              },
              {
                id: "documents",
                label:
                  "Any forms, notices, cards, receipts, or written instructions provided.",
              },
              {
                id: "follow-up",
                label:
                  "Any deadline, requested follow-up, appointment, or instruction given.",
              },
              {
                id: "witnesses",
                label:
                  "Who else was present, including household members, property managers, or support people.",
              },
            ]}
          />

          <GuideChecklist
            id="after-visit"
            title="After-visit documentation checklist"
            columns={1}
            items={[
              {
                id: "write-notes",
                label: "Write notes as soon as you can, while details are fresh.",
              },
              {
                id: "save-paper",
                label:
                  "Save any written notice, card, receipt, or document in your packet.",
              },
              {
                id: "calendar-followup",
                label: "Calendar any follow-up deadline or appointment.",
              },
              {
                id: "ask-clarify",
                label:
                  "If an instruction was unclear, ask a narrow clarification question in writing when possible.",
              },
              {
                id: "legal-help",
                label:
                  "If the visit becomes an investigation, allegation, search, questioning, threat of arrest, or possible violation, shift to Know Your Rights and legal-help steps.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="obstacles-emergencies"
          number="10"
          title="Office Closed, Portal Failed, Disaster, or Emergency Displacement"
          subtitle="Document attempts and ask for the next available method. Do not assume the obstacle excuses the deadline."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Offices close. Portals fail. Holidays happen. Storms, fires,
              evictions, hospitalizations, family emergencies, and disasters can
              disrupt ordinary reporting plans. These events may matter, but they
              do not automatically excuse a deadline unless the authority that
              controls the duty says so.
            </p>

            <p>
              When an obstacle appears, document the obstacle, document your
              attempts, seek instructions from the authority responsible for the
              duty, and preserve proof of what happened.
            </p>
          </GuideProse>

          <GuideChecklist
            id="office-closed-portal-failed"
            title="Office-closed / portal-failed documentation checklist"
            columns={1}
            items={[
              {
                id: "attempt-date",
                label:
                  "Write the date and time you attempted to report or contact the office.",
              },
              {
                id: "closure-proof",
                label:
                  "Save proof of closure, outage, holiday notice, voicemail, website message, portal error, or emergency notice.",
              },
              {
                id: "alternate-method",
                label:
                  "Look for an official alternate method: emergency phone line, email, portal message, mail, another office, or next available appointment.",
              },
              {
                id: "request-instruction",
                label:
                  "Ask what method to use now and whether the office will document your attempted reporting.",
              },
              {
                id: "save-attempts",
                label:
                  "Save screenshots, call logs, emails, certified-mail records, appointment requests, and notes.",
              },
            ]}
          />

          <GuideChecklist
            id="emergency-displacement"
            title="Emergency displacement reporting checklist"
            columns={1}
            items={[
              {
                id: "safe-location",
                label:
                  "Stabilize immediate safety first, then identify where you are actually staying or reachable.",
              },
              {
                id: "verify-transient",
                label:
                  "Ask whether homelessness, transient status, shelter stay, vehicle sleeping, hotel stay, or temporary family housing creates a special reporting duty.",
              },
              {
                id: "supervision",
                label:
                  "If supervised, ask your supervision officer or office about emergency movement, housing approval, and reporting expectations.",
              },
              {
                id: "documents",
                label:
                  "Save eviction papers, shelter letters, disaster notices, hotel receipts, hospital paperwork, closure notices, or other records explaining the displacement.",
              },
              {
                id: "followup",
                label:
                  "Calendar the next required contact, appointment, or update after the emergency step.",
              },
            ]}
          />

          <ScriptBox
            title="Script: attempted reporting / next available method"
            tone="neutral"
            context="Use this when an office is closed, a portal fails, or an emergency blocks the ordinary method."
            script={`Hello, my name is [Name]. I am trying to report or confirm [issue] before the deadline.

I attempted to [call/use the portal/come to the office/mail/email] on [date/time], but [office closed/portal error/disaster/emergency displacement] prevented the usual method.

What method should I use now, and can the office document that I attempted to report? I am saving records of my attempts and would appreciate written instructions if available.`}
          />

          <OfflineOptions
            title="If technology fails or access is limited"
            items={[
              "Use phone, mail, in-person office contact, or a trusted helper only if that method is allowed or officially accepted.",
              "Take a photo of posted closure signs or write down the exact sign text if photography is not safe or allowed.",
              "Keep envelopes, tracking numbers, returned mail, delivery records, and written notes together.",
              "If you cannot access a portal, write down the error message, time, device used, and any help-desk ticket number.",
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="missed-disputed"
          number="11"
          title="Missed, Disputed, or Alleged Noncompliance"
          subtitle="Triage carefully. The more criminal exposure is possible, the less you should guess or volunteer."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A deadline problem is not always the same kind of problem. The
              safest next step depends on whether a deadline is still coming, is
              unclear, may have been missed, is being disputed, or may create
              criminal exposure.
            </p>

            <p>
              <ExternalGuideLink href={sourceLinks.dojSorna}>Knowingly failing to register or update as required under SORNA can be a federal crime</ExternalGuideLink>, and state or tribal failure-to-register
              penalties vary. If the facts may create criminal exposure, do not
              try to talk your way out of it alone. Preserve records, avoid
              guessing, and seek <ExternalGuideLink href={sourceLinks.usaLegalAid}>legal advice if possible</ExternalGuideLink>.
            </p>
          </GuideProse>

          <OverviewCards
            columns={1}
            cards={[
              {
                eyebrow: "Level 1",
                title: "A deadline is approaching",
                icon: "📅",
                tone: "info",
                description:
                  "Verify the rule, calendar reminders, prepare documents, report through the required method, and save proof of what you did.",
              },
              {
                eyebrow: "Level 2",
                title: "It is unclear whether a deadline was missed",
                icon: "❓",
                tone: "warning",
                description:
                  "Collect the rule, notices, dates, and records. Ask narrow procedural questions without volunteering unnecessary facts.",
              },
              {
                eyebrow: "Level 3",
                title: "A reporting duty is disputed or possibly missed",
                icon: "🧾",
                tone: "legal",
                description:
                  "Preserve proof, identify the controlling authority, and consider legal help before making explanations that could be used against you.",
              },
              {
                eyebrow: "Level 4",
                title: "An agency alleges noncompliance",
                icon: "🚨",
                tone: "urgent",
                description:
                  "Save all notices and records. Do not guess, argue, or provide broad explanations without understanding your legal risk.",
              },
              {
                eyebrow: "Level 5",
                title: "The facts may create criminal exposure",
                icon: "⚖️",
                tone: "urgent",
                description:
                  "Prioritize legal counsel, Know Your Rights guidance, proof preservation, and careful silence over self-incriminating explanations.",
              },
            ]}
          />

          <GuideChecklist
            id="missed-disputed-do"
            title="Do / do not / use judgment"
            columns={1}
            items={[
              {
                id: "do-preserve",
                label:
                  "Do preserve records: notices, receipts, screenshots, call logs, emails, forms, mail records, portal messages, and witness information.",
              },
              {
                id: "do-identify",
                label:
                  "Do identify the exact duty, the source of the duty, the deadline, the required method, and the authority responsible.",
              },
              {
                id: "do-legal",
                label:
                  "Do seek legal advice if an agency alleges noncompliance or the facts may create criminal exposure.",
              },
              {
                id: "do-not-explain",
                label:
                  "Do not give a broad explanation of what happened to an agency if the issue may be criminal without legal advice.",
              },
              {
                id: "do-not-guess",
                label:
                  "Do not guess dates, times, locations, or reasons. Guessing can make records less reliable and statements more risky.",
              },
              {
                id: "judgment",
                label:
                  "Use judgment with narrow procedural questions, such as asking where to submit a form, who controls the rule, or how to request a receipt.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⚖️" title="If criminal exposure is possible">
            <p>
              This guide does not tell you how to answer investigative questions
              or explain a possible violation. Preserve proof, avoid unnecessary
              statements, and use legal counsel or <InternalGuideLink to="/resources/know-your-rights">Your Rights at Every Stage</InternalGuideLink> before discussing facts that could be used against you.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="counsel-packet"
            title="Packet to prepare for legal counsel"
            columns={1}
            items={[
              {
                id: "timeline",
                label: "A timeline of dates, deadlines, attempts, and contacts.",
              },
              {
                id: "notices",
                label: "All notices, forms, letters, emails, and portal messages.",
              },
              {
                id: "proof",
                label:
                  "Receipts, stamped copies, screenshots, certified-mail records, tracking numbers, and call logs.",
              },
              {
                id: "instructions",
                label: "Verbal instruction notes and written clarification requests.",
              },
              {
                id: "conditions",
                label:
                  "Court orders, supervision conditions, travel approvals, or compact instructions.",
              },
              {
                id: "allegation",
                label:
                  "Any allegation, citation, warrant notice, violation report, or agency letter.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="durable-packet"
          number="12"
          title="Durable Compliance Proof Packet"
          subtitle="Keep records organized enough that a stressed future version of you can find them quickly."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A durable packet is a paper and/or digital record system for proof
              of what you did, what you were told, and what instructions you
              received. It is not a guarantee that every obligation was legally
              satisfied. It is a way to make your actions easier to verify and
              explain to a lawyer, supervision officer, registry office, court,
              or advocate if needed.
            </p>

            <p>
              Store sensitive records carefully. Your packet may include
              addresses, identifiers, case information, supervision details,
              travel plans, and family information. Keep it accessible to you,
              but do not leave it where others can casually copy, photograph, or
              misuse it.
            </p>
          </GuideProse>

          <GuideChecklist
            id="packet-categories"
            title="Compliance Proof Packet categories"
            columns={2}
            items={[
              { id: "registration", label: "Registration paperwork and forms." },
              {
                id: "verification",
                label: "Verification receipts and appointment records.",
              },
              {
                id: "appointment",
                label: "Appointment notices and scheduling records.",
              },
              {
                id: "change-notices",
                label:
                  "Change notices for address, work, school, travel, vehicles, identifiers, or other categories.",
              },
              {
                id: "correspondence",
                label: "Agency correspondence, emails, letters, and portal messages.",
              },
              {
                id: "screenshots",
                label: "Portal screenshots and confirmation pages.",
              },
              {
                id: "mail",
                label:
                  "Certified-mail receipts, tracking records, returned mail, and delivery proof.",
              },
              { id: "logs", label: "Call logs and contact logs." },
              {
                id: "verbal",
                label: "Verbal instruction notes and clarification requests.",
              },
              {
                id: "moves",
                label: "Move notices and old/new jurisdiction records.",
              },
              {
                id: "emergency",
                label:
                  "Emergency, closure, outage, displacement, shelter, hotel, or disaster proof.",
              },
              {
                id: "supervision",
                label:
                  "Supervision approvals, travel permissions, compact instructions, and court conditions.",
              },
              {
                id: "legal",
                label: "Attorney, defender, legal aid, or advocate contacts.",
              },
            ]}
          />

          <OfflineOptions
            title="Paper and digital backup options"
            items={[
              "Use a binder, accordion folder, envelope system, or notebook if digital access is unreliable.",
              "Keep the most important current documents in one easy-to-find section.",
              "Scan or photograph documents when safe, but keep originals when they matter.",
              "Use clear filenames such as 2026-08-21-address-update-receipt.pdf.",
              "Keep a simple index page listing the most recent deadline, next appointment, and emergency contact numbers.",
            ]}
          />

          <GuideCallout tone="privacy" icon="🔐" title="Protect the packet">
            <p>
              If someone helps you manage records, choose that person carefully.
              A helper may need access to deadlines or forms, but they do not
              automatically need every case detail, login, password, or private
              document.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources-sources"
          number="13"
          title="Official Resources, Related SOLAR Guides, and Sources"
          subtitle="Use official sources for verification, then use SOLAR guides for practical next steps."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Official verification resources"
            resources={[
              {
                label: "SMART Office — SORNA Current Law",
                description:
                  "Federal source spine for SORNA statutes, guidelines, rules, and implementation documents.",
                href: sourceLinks.smartCurrentLaw,
                badge: "Official",
              },
              {
                label: "SMART Office — SORNA FAQs",
                description:
                  "Federal FAQ page explaining SORNA implementation, jurisdiction review, and minimum-standard concepts.",
                href: sourceLinks.smartFaqs,
                badge: "Official",
              },
              {
                label: "SMART Office — In-Person Registration / Verification",
                description:
                  "Implementation document discussing SORNA in-person registration and verification requirements.",
                href: sourceLinks.smartInPerson,
                badge: "Official",
              },
              {
                label: "SMART Office — Residence, Homeless, and Transient Guidance",
                description:
                  "Implementation document addressing residence determination, homeless registrants, and transient workers under SORNA.",
                href: sourceLinks.smartResidenceHomelessTransient,
                badge: "Official",
              },
              {
                label: "NSOPW — All Registries",
                description:
                  "Directory of public state, territory, and tribal registry links for finding jurisdiction-specific sources.",
                href: sourceLinks.nsopwAllRegistries,
                badge: "Official",
              },
              {
                label: "DOJ Criminal Division — SORNA",
                description:
                  "Federal overview noting SORNA registration/update duties and federal failure-to-register exposure.",
                href: sourceLinks.dojSorna,
                badge: "Official",
              },
              {
                label: "U.S. Courts — Probation and Supervised Release Conditions",
                description:
                  "Federal court resource explaining probation and supervised release condition structure.",
                href: sourceLinks.usCourtsConditions,
                badge: "Official",
              },
              {
                label: "ICAOS — Reporting Instructions for Sex Offenders",
                description:
                  "Interstate compact rule source for supervised interstate reporting-instruction context.",
                href: sourceLinks.icaosReporting,
                badge: "Official",
              },
              {
                label: "USA.gov — Legal Aid",
                description:
                  "Government starting point for finding free or low-cost legal help.",
                href: sourceLinks.usaLegalAid,
                badge: "Official",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "State Registry Hub",
                description:
                  "Use this to find state, territory, or tribal registry pages and official jurisdiction-specific information.",
                to: "/resources/state-registry",
              },
              {
                title: "Supervision Conditions",
                description:
                  "Use this when a probation, parole, supervised release, or treatment condition may control the next step.",
                to: "/resources/supervision-conditions-guide",
              },
              {
                title: "Know Your Rights",
                description:
                  "Use this before answering investigative questions, consenting to searches, or explaining facts that may create criminal exposure.",
                to: "/resources/know-your-rights",
              },
              {
                title: "Police, Registry & CPS Encounters",
                description:
                  "Use this for live registry, police, supervision, mixed-agency, or CPS contacts involving entry, searches, questioning, or property.",
                to: "/resources/police-registry-cps-encounters",
              },
              {
                title: "Interstate Moving",
                description:
                  "Use this for the fuller moving process. This guide only covers the reporting-and-proof workflow.",
                to: "/resources/interstate-moving-guide",
              },
              {
                title: "International Travel",
                description:
                  "Use this when travel crosses a national border or may trigger federal, state, destination-country, or supervision rules.",
                to: "/resources/international-travel-guide",
              },
              {
                title: "Housing Search",
                description:
                  "Use this when housing instability, displacement, shelters, or address rules affect registration planning.",
                to: "/resources/housing-search-guide",
              },
              {
                title: "Reentry Checklist",
                description:
                  "Use this for broader release planning, document gathering, housing, work, supervision, and first-week tasks.",
                to: "/resources/reentry-checklist",
              },
              {
                title: "Employment / Job Search Resources",
                description:
                  "Use this when work location, job applications, disclosure, or employment changes may affect reporting duties.",
                to: "/resources/job-search-guide",
              },
            ]}
          />

          <SourceList
            note="Links were selected as official verification starting points. State, territory, tribal, court, supervision, and agency-specific rules should still be checked before relying on any deadline, method, office, or reporting category."
            sources={[
              {
                label: "SMART Office — SORNA Current Law",
                href: sourceLinks.smartCurrentLaw,
                description:
                  "Supports the federal framework and implementation-document source spine.",
              },
              {
                label: "SMART Office — SORNA FAQs",
                href: sourceLinks.smartFaqs,
                description:
                  "Supports jurisdictional variation, minimum-standard framing, and verification caution.",
              },
              {
                label:
                  "SMART Office — SORNA In-Person Registration Requirements",
                href: sourceLinks.smartInPerson,
                description:
                  "Supports the discussion of registration and verification as common system events while avoiding universal appointment rules.",
              },
              {
                label: "SMART Office — Determination of Residence, Homeless Offenders and Transient Workers",
                href: sourceLinks.smartResidenceHomelessTransient,
                description:
                  "Supports the homeless/transient reporting issue-spotting language while preserving the jurisdiction-specific implementation boundary.",
              },
              {
                label: "SMART Office — Implementation Documents",
                href: sourceLinks.smartImplementation,
                description:
                  "Supports the idea that implementation guidance and jurisdiction procedures matter.",
              },
              {
                label: "NSOPW — All Registries",
                href: sourceLinks.nsopwAllRegistries,
                description:
                  "Supports directing readers to official state, territory, and tribal registry sources.",
              },
              {
                label: "DOJ Criminal Division — SORNA",
                href: sourceLinks.dojSorna,
                description:
                  "Supports residence, employment, and school as core SORNA categories and the federal failure-to-register caution.",
              },
              {
                label:
                  "U.S. Courts — Overview of Probation and Supervised Release Conditions",
                href: sourceLinks.usCourtsConditions,
                description:
                  "Supports the distinction between supervision conditions and registry duties.",
              },
              {
                label: "U.S. Courts — Search and Seizure Conditions",
                href: sourceLinks.usCourtsSearch,
                description:
                  "Included only to route search/seizure and supervision-search questions away from this administrative documentation guide.",
              },
              {
                label: "ICAOS — Reporting Instructions for Sex Offenders",
                href: sourceLinks.icaosReporting,
                description:
                  "Supports the boundary between interstate supervision reporting instructions and registry reporting duties.",
              },
              {
                label: "ICAOS — Transfer of Supervision of Sex Offenders",
                href: sourceLinks.icaosTransfer,
                description:
                  "Supports the reminder that supervision transfer and registry reporting are separate systems.",
              },
              {
                label: "USA.gov — Legal Aid",
                href: sourceLinks.usaLegalAid,
                description:
                  "Supports legal-help routing when noncompliance is disputed, alleged, or may create criminal exposure.",
              },
              {
                label: "U.S. Marshals Service — Sex Offender Investigations",
                href: sourceLinks.usMarshalsSexOffenderInvestigations,
                description:
                  "Supports narrow federal enforcement/compliance context without turning this guide into an encounter-rights guide.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}