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
  DocumentPacket,
  VerifyBeforeActing,
  CommonMistakes,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
  DoDontJudgment,
  RedFlagGreenFlag,
  RoleGuidanceGrid,
} from "../../components/solar";

const sourceLinks = {
  smartSornaCurrentLaw: "https://www.smart.ojp.gov/sorna/current-law",
  smartSornaImplementation:
    "https://smart.ojp.gov/sorna/current-law/implementation-documents",
  smartSornaInPerson:
    "https://smart.ojp.gov/sorna/current-law/implementation-documents/person-verification",
  nsopwAllRegistries: "https://www.nsopw.gov/all-registries",
  usCourtsSupervisionConditions:
    "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions",
  usCourtsSearchConditions:
    "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-search-and-seizure-probation-and-supervised-release",
  usCourtsMirandaSummary:
    "https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/fifth-amendment-activities/miranda-v-arizona/facts-and-case-summary-miranda-v-arizona",
  terry: "https://www.law.cornell.edu/supremecourt/text/392/1",
  bostick: "https://www.law.cornell.edu/supremecourt/text/501/429",
  miranda: "https://www.law.cornell.edu/supremecourt/text/384/436",
  hiibel: "https://www.law.cornell.edu/supremecourt/text/542/177",
  schneckloth: "https://www.oyez.org/cases/1972/71-732",
  riley: "https://www.law.cornell.edu/supremecourt/text/13-132",
  consentSearches:
    "https://constitution.congress.gov/browse/essay/amdt4-6-2/ALDE_00000792/",
  georgiaRandolph:
    "https://supreme.justia.com/cases/federal/us/547/103/",
  fernandez: "https://www.law.cornell.edu/supremecourt/text/12-7822",
  griffin: "https://www.law.cornell.edu/supremecourt/text/483/868",
  knights:
    "https://www.ojp.gov/ncjrs/virtual-library/abstracts/us-v-knights-supreme-court-rules-searches-probationers-police",
  samson: "https://www.law.cornell.edu/supct/html/04-9728.ZO.html",
  usMarshalsSexOffenderInvestigations:
    "https://www.usmarshals.gov/sex-offender-investigations",
  childWelfareStateLaws:
    "https://www.childwelfare.gov/resources/state-statutes/",
  childWelfarePolicyLinks:
    "https://www.childwelfare.gov/resources/links-state-and-tribal-child-welfare-law-and-policy/",
  childWelfareHowSystemWorks:
    "https://www.childwelfare.gov/topics/systemwide/how-system-works/",
  rcfpRecordingGuide: "https://www.rcfp.org/reporters-recording-guide/",
  usaLegalAid: "https://www.usa.gov/legal-aid",
  lawHelp: "https://www.lawhelp.org/",
  stateBarDirectory:
    "https://www.americanbar.org/groups/legal_services/flh-home/flh-bar-directories-and-lawyer-finders/",
};

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Police, Registry & CPS Encounters | The SOLAR Project"
        description="A practical SOLAR guide for police, registry, probation/parole, task-force, and CPS encounters: identify authority, preserve rights, avoid preventable mistakes, and document what happened."
        keywords="police encounter, registry verification, CPS investigation, probation search, parole visit, sex offense registry, consent search, government encounter, SOLAR Project"
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
            Internal Sandbox Preview
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Police, Registry & CPS Encounters
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            When police, registry staff, probation, parole, federal officers, or
            CPS contact you at home, work, by phone, or in public, the safest
            first step is to slow the moment down. This guide helps you identify
            who is contacting you, what authority they may be using, what they
            are asking you to do, what may change because of registration or
            supervision, and how to document what happened afterward.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100 transition-colors"
            >
              🖨️ Print Sandbox
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

        <GuideIntro title="Start here: slow the encounter down" icon="🧭">
          <p>
            A government encounter can feel urgent even when it is not clear
            what kind of encounter it is. Before you explain, agree, sign,
            unlock, invite someone in, or answer detailed questions, try to
            identify three things: the actor, the authority, and the request.
          </p>

          <p>
            This guide is not a substitute for legal advice. It is a practical
            first-response tool for reducing avoidable risk while you figure out
            who is contacting you, what they say gives them authority, what they
            are asking you to do, and what you need to write down afterward.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If this is happening right now"
          subtitle="Use this before guessing, arguing, oversharing, or assuming you have no choice."
          icon="⚡"
          urgentActions={[
            <span key="identify">
              Ask for name, agency, badge or ID number, phone number, and
              purpose.
            </span>,
            <span key="authority">
              Ask whether they are requesting, ordering, verifying, serving
              paperwork, executing a warrant, or acting under a supervision or
              court condition.
            </span>,
            <span key="calm">
              Do not physically block, argue at the threshold, destroy anything,
              guess, or explain more than necessary.
            </span>,
            <span key="exposure">
              If children, devices, a search, a safety plan, new allegations,
              arrest, or a violation threat are involved, treat the exposure as
              higher.
            </span>,
          ]}
          nextActions={[
            <span key="log">
              Write down what happened as soon as possible.
            </span>,
            <span key="save">
              Save cards, papers, notices, warrants, texts, emails, voicemails,
              property receipts, and names.
            </span>,
            <span key="help">
              Contact the right kind of help: criminal defense,
              supervision/revocation counsel, dependency or family counsel,
              public defender, legal aid, or a trusted advocate.
            </span>,
          ]}
          reminder={
            <span>
              Calm does not mean passive. You can ask clarifying questions,
              avoid physical resistance, preserve your position, and document
              what happened.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Step 1",
              title: "Identify the actor",
              icon: "👤",
              tone: "info",
              description:
                "Who is contacting you: registry staff, police, sheriff, probation, parole, CPS, federal officers, or a mixed team?",
            },
            {
              eyebrow: "Step 2",
              title: "Identify the authority",
              icon: "⚖️",
              tone: "legal",
              description:
                "What rule, warrant, court order, supervision condition, agency role, or emergency claim are they relying on?",
            },
            {
              eyebrow: "Step 3",
              title: "Identify the request",
              icon: "❓",
              tone: "warning",
              description:
                "Are they asking to talk, enter, inspect, search, interview a child, take property, photograph something, or schedule follow-up?",
            },
            {
              eyebrow: "Step 4",
              title: "Preserve rights",
              icon: "🛡️",
              tone: "privacy",
              description:
                "Do not assume a request is a lawful order, and do not assume a duty to report means consent to every question, entry, or search.",
            },
            {
              eyebrow: "Step 5",
              title: "Document and get help",
              icon: "🗂️",
              tone: "success",
              description:
                "Write down what happened while memory is fresh, save paperwork, and get legal help when exposure increases.",
            },
          ]}
        />

        <GuideCallout
          tone="legal"
          icon="⚖️"
          title="Sandbox note for reviewers"
        >
          <p>
            This preview intentionally keeps constitutional doctrine operational
            rather than exhaustive. The broader doctrine belongs in the Know
            Your Rights guide; full supervision management belongs in the
            Supervision Conditions guide; and calendars, receipts, and ordinary
            registry reporting systems belong in the Registry Compliance &
            Verification guide.
          </p>
        </GuideCallout>

        <GuideSectionHeader
          id="who-is-here"
          number="1"
          title="Who is here, and what authority are they using?"
          subtitle="Separate the person at the door from the legal authority they say they are using."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A badge, agency shirt, business card, or official vehicle tells
              you something, but not everything. The important question is not
              only “Who are you?” It is “What are you here for, and what
              authority are you relying on?”
            </p>

            <p>
              A registry officer may be verifying an address. A police officer
              may be investigating. A probation or parole officer may be acting
              under a written supervision condition. CPS may be asking for
              voluntary cooperation, acting under agency authority, seeking a
              court order, or responding to an emergency claim. A mixed team may
              include more than one agency with more than one purpose.
            </p>

            <p>
              Do not guess. Ask, write it down, and save any card, notice,
              warrant, court order, referral number, case number, or form they
              show or leave.
            </p>
          </GuideProse>

          <GuideChecklist
            id="actor-authority-request"
            title="At the start, try to identify"
            columns={1}
            items={[
              {
                id: "name",
                label:
                  "Name, agency, badge number, ID number, phone number, and supervisor or office if available.",
              },
              {
                id: "purpose",
                label:
                  "Purpose: registry verification, police investigation, supervision visit, CPS contact, warrant, court order, paperwork service, address check, worksite verification, or something else.",
              },
              {
                id: "authority",
                label:
                  "Authority claimed: request, law, registry duty, court order, warrant, supervision condition, CPS authority, emergency authority, or consent.",
              },
              {
                id: "request",
                label:
                  "What they are asking you to do: answer questions, step outside, let someone in, show documents, unlock a device, sign a plan, allow a child interview, or schedule follow-up.",
              },
              {
                id: "paperwork",
                label:
                  "What paperwork exists: warrant, order, condition, notice, referral, business card, property receipt, safety plan, or written instruction.",
              },
            ]}
          />

          <ScriptBox
            title="Script 1: door identification"
            tone="neutral"
            context="Use this to slow a threshold encounter down and create a record without escalating."
            script={`Hello. I want to understand what this is about. Can you please tell me your name, agency, badge or ID number, and the purpose of the visit? Are you here for registry verification, supervision, CPS, a warrant or court order, or something else? I am going to write down what you tell me.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="registry-verification"
          number="2"
          title="Registry or address-verification visits"
          subtitle="Handle live verification without turning this guide into a full registry-compliance calendar."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Registry and address-verification visits can involve a sheriff’s
              office, police department, state registry unit, local registering
              agency, task force, or another official channel. SORNA creates
              federal baseline registration standards, but many live details —
              including who verifies, how often, what happens at a residence,
              and how worksite verification is handled — depend on state,
              tribal, territorial, local, and agency rules.
            </p>

            <p>
              A duty to register or verify information is not automatically the
              same thing as consent to enter a home, search a room, inspect a
              device, question every household member, or answer investigative
              questions unrelated to verification. The practical move is to ask
              what they are verifying, what authority they are relying on, and
              whether they are requesting something or saying a specific legal
              duty applies now.
            </p>
          </GuideProse>

          <GuideChecklist
            id="registry-visit-checklist"
            title="During a registry or address-verification contact"
            columns={1}
            items={[
              {
                id: "verify-purpose",
                label:
                  "Ask whether the contact is address verification, worksite verification, a registration update, a compliance check, a criminal investigation, or a mixed-purpose visit.",
              },
              {
                id: "ask-scope",
                label:
                  "Ask what information they need to verify and whether any request goes beyond verification.",
              },
              {
                id: "entry-request",
                label:
                  "If entry is requested, ask whether they are asking for consent, relying on a warrant or court order, or relying on a supervision condition.",
              },
              {
                id: "supervision-overlap",
                label:
                  "If you are on probation, parole, or supervised release, ask whether this is also a supervision visit or search.",
              },
              {
                id: "worksite",
                label:
                  "If worksite verification is involved, write down who contacted the employer, what was said, and whether any follow-up or reporting duty was created.",
              },
              {
                id: "save-proof",
                label:
                  "Save cards, notices, forms, receipts, emails, texts, voicemails, and your after-encounter notes.",
              },
            ]}
          />

          <GuideCallout
            tone="reminder"
            icon="🧩"
            title="Keep the rulebooks separate"
          >
            <p>
              Registry duties, supervision duties, police investigations, and
              CPS concerns can overlap, but they are not always the same
              rulebook. Ask which authority controls the specific request in
              front of you.
            </p>
          </GuideCallout>

          <RelatedGuides
            title="Related SOLAR guides for registry encounters"
            guides={[
              {
                title: "Registry Compliance & Verification Survival Guide",
                description:
                  "Use this for reporting duties, calendars, receipts, verification appointments, and compliance proof packets.",
                to: "/resources/registry-compliance-verification-guide",
              },
              {
                title: "Registry Rules by State",
                description:
                  "Use this to begin state-specific registry research before relying on a national summary.",
                to: "/resources/state-registry",
              },
              {
                title: "Supervision Conditions Survival Guide",
                description:
                  "Use this when a visit may also involve probation, parole, supervised release, treatment rules, or a search condition.",
                to: "/resources/supervision-conditions-guide",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="police-sheriff-contact"
          number="3"
          title="Police or sheriff contact"
          subtitle="Translate general rights principles into registry-specific police encounters."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Police contact can be a consensual conversation, a detention, an
              arrest, a request for consent, a warrant situation, or something
              else. Those categories matter, but they are not always obvious in
              the moment. Questions about registry status, travel, address,
              work, internet use, devices, children, or reporting history can
              create higher exposure even when the conversation sounds casual.
            </p>

            <p>
              You do not have to solve the legal category at the door. A safer
              move is to ask whether you are required to answer now, whether you
              are free to leave or end the conversation, and whether you may
              speak with a lawyer before answering more questions.
            </p>
          </GuideProse>

          <GuideChecklist
            id="police-contact-checklist"
            title="Police or sheriff contact: practical checks"
            columns={1}
            items={[
              {
                id: "contact-type",
                label:
                  "Ask whether this is a request for conversation, a detention, an arrest, a warrant, a registry issue, or another official action.",
              },
              {
                id: "free-to-leave",
                label:
                  "If safe, ask whether you are free to leave, step away, or end the conversation.",
              },
              {
                id: "lawyer",
                label:
                  "Ask whether you may speak with a lawyer before answering more questions.",
              },
              {
                id: "devices",
                label:
                  "Treat phones, computers, cloud accounts, apps, passwords, and biometric unlocking requests as higher-risk issues.",
              },
              {
                id: "children",
                label:
                  "Treat questions involving children, household members, school, childcare, custody, or CPS as higher-risk issues.",
              },
              {
                id: "document",
                label:
                  "Afterward, write down the questions asked, answers given, names, agencies, case numbers, and any next deadline.",
              },
            ]}
          />

          <ScriptBox
            title="Script 2: police questioning"
            tone="legal"
            context="Use this to avoid guessing or oversharing during investigative questioning."
            script={`I want to cooperate with lawful requirements, but I do not want to guess or explain something incorrectly. Am I required to answer this right now, am I free to leave or end this conversation, and may I speak with a lawyer before answering more questions?`}
          />

          <CommonMistakes
            title="Common police-contact mistakes"
            mistakes={[
              {
                mistake: "Trying to talk your way out of uncertainty.",
                whyItMatters:
                  "A detailed explanation can create new questions, contradictions, or statements that are later used in another setting.",
                betterMove:
                  "Ask what is required right now, whether you can end the conversation, and whether you may speak with counsel first.",
              },
              {
                mistake:
                  "Assuming a friendly or informal tone means the contact has no legal risk.",
                whyItMatters:
                  "Casual questions can still become part of a police, registry, supervision, CPS, or violation record.",
                betterMove:
                  "Stay calm, answer only what you are required to answer, and document what was asked.",
              },
              {
                mistake:
                  "Unlocking, handing over, deleting, hiding, or changing device content in panic.",
                whyItMatters:
                  "Device issues can create criminal, supervision, registry, employment, privacy, or family-court exposure.",
                betterMove:
                  "Do not destroy or alter anything. Ask what authority is being used and contact counsel promptly.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="supervision-encounters"
          number="4"
          title="Probation, parole, or supervised-release encounters"
          subtitle="Supervision can change the analysis, but the details still matter."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Supervision status can reduce privacy expectations and create
              duties to answer, report, permit visits, submit to inspections, or
              comply with searches. But probation, parole, and supervised
              release are not identical, and the answer can depend on the
              written condition, jurisdiction, suspicion requirement, scope,
              actor, place, purpose, and whether police or another agency is
              involved.
            </p>

            <p>
              Do not rely on broad statements like “being on paper means you
              cannot refuse a warrantless search.” That shortcut can be
              dangerous in both directions. The safer question is narrower: what
              does the written condition say, who is acting under it, what place
              or item is being searched or inspected, and what reason or purpose
              is being given?
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Verify the supervision authority before assuming the answer"
            whoToAsk="Your supervising officer, defense or revocation counsel, the supervision office, or the court paperwork that lists your actual conditions."
            whatToAsk="Ask what condition applies, whether it covers the place or item involved, who may act under it, whether suspicion is required, and what you must do right now."
            whatToSave="Save the written condition, officer name, date, instruction, search paperwork, property receipt, violation warning, and any follow-up deadline."
          />

          <GuideChecklist
            id="supervision-visit-checklist"
            title="During a supervision-related encounter"
            columns={1}
            items={[
              {
                id: "written-condition",
                label:
                  "Ask which written condition or court order applies to the request.",
              },
              {
                id: "actor",
                label:
                  "Identify who is acting: probation, parole, supervised release, police, registry, CPS, treatment, or a mixed team.",
              },
              {
                id: "scope",
                label:
                  "Ask what area, item, device, vehicle, account, room, workplace, or document is within the claimed scope.",
              },
              {
                id: "purpose",
                label:
                  "Ask whether the purpose is supervision compliance, violation investigation, new criminal investigation, registry verification, CPS safety, or another purpose.",
              },
              {
                id: "no-resistance",
                label:
                  "Do not physically resist. If you dispute the scope, state your position calmly, do not interfere, and document what happened.",
              },
            ]}
          />

          <GuideCallout
            tone="warning"
            icon="⚠️"
            title="Police overlap raises the stakes"
          >
            <p>
              When police participate in a supervision contact, the line between
              supervision management and criminal investigation can matter. Do
              not argue the law at the threshold. Preserve your position, avoid
              physical interference, write down who did what, and seek counsel
              promptly if the search, questioning, seizure, or violation threat
              is disputed.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="consent-warrants-searches"
          number="5"
          title="Consent, warrants, searches, and shared spaces"
          subtitle="Consent, warrants, emergency claims, supervision conditions, CPS orders, and third-party consent are different pathways."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A search request can come wrapped in many different words:
              “Can we look around?” “We need to verify the address.” “Your
              officer said this is required.” “CPS needs to see the home.” “Your
              roommate said it is okay.” “We have paperwork.” These are not all
              the same thing.
            </p>

            <p>
              Shared homes need special caution. A spouse, roommate, parent,
              adult child, landlord, employer, or other third party may have
              some authority over some spaces or property in some circumstances,
              but there is no safe universal rule that another person can always
              consent to search everything. Common spaces, private bedrooms,
              locked containers, devices, work property, children’s property,
              and cloud accounts can raise different questions.
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              <span key="ask-authority">
                Ask what authority is being used and what area or item is at
                issue.
              </span>,
              <span key="say-position">
                If you do not consent, say so calmly and clearly.
              </span>,
              <span key="avoid-interference">
                Avoid physical interference, threats, blocking, or sudden
                movements.
              </span>,
              <span key="write-down">
                Write down who entered, who objected, who consented, what was
                searched, and what was taken or copied.
              </span>,
            ]}
            donts={[
              <span key="destroy">
                Do not delete, hide, move, destroy, wipe, or alter anything.
              </span>,
              <span key="universal">
                Do not assume a roommate, spouse, landlord, or employer can
                always consent to everything.
              </span>,
              <span key="same">
                Do not treat refusing consent as the same thing as disobeying a
                lawful order.
              </span>,
              <span key="fight">
                Do not physically resist a search even if you believe it is too
                broad.
              </span>,
            ]}
            judgment={[
              <span key="devices">
                Devices, passwords, biometric unlocking, work property, child
                materials, cloud accounts, and locked spaces usually deserve
                immediate legal help.
              </span>,
              <span key="supervision">
                If you are supervised, compare the request against the written
                condition before assuming the scope.
              </span>,
            ]}
          />

          <ScriptBox
            title="Script 3: no-consent / no-interference"
            tone="legal"
            context="Use this to preserve the no-consent position while avoiding physical resistance."
            script={`I do not consent to a search. I will not physically interfere. Please tell me what authority you are relying on and what area or item you intend to search.`}
          />

          <GuideChecklist
            id="search-scope-checklist"
            title="If a search, entry, inspection, or viewing request happens"
            columns={1}
            items={[
              {
                id: "authority",
                label:
                  "Ask whether the authority is consent, warrant, court order, supervision condition, CPS document, emergency authority, or another source.",
              },
              {
                id: "scope",
                label:
                  "Ask what place, room, vehicle, document, account, device, app, container, or item is included.",
              },
              {
                id: "who-consented",
                label:
                  "Write down who consented, who objected, who was present, and whether anyone was removed or separated.",
              },
              {
                id: "paperwork",
                label:
                  "Ask for a copy of any warrant, order, condition, inventory, receipt, safety plan, or written instruction.",
              },
              {
                id: "seized",
                label:
                  "If anything is taken, copied, photographed, downloaded, or viewed, use the seizure checklist later in this guide.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="mixed-agency"
          number="6"
          title="Mixed-agency and task-force encounters"
          subtitle="More uniforms do not automatically mean one merged authority."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Mixed-agency encounters are confusing by design or by necessity.
              A registry officer may arrive with police. Probation may arrive
              with detectives. CPS may arrive with law enforcement. U.S.
              Marshals or task-force officers may participate in sex-offender
              registration investigations. The presence of one agency does not
              automatically mean every person there has the same authority for
              every request.
            </p>

            <p>
              Your goal is not to debate the authority at the door. Your goal is
              to identify who is in charge, what each agency is there to do, and
              whether the action is a request, an order, paperwork service, a
              warrant, a court order, a supervision condition, CPS action, or
              something else.
            </p>
          </GuideProse>

          <GuideChecklist
            id="mixed-agency-checklist"
            title="When more than one agency is involved"
            columns={1}
            items={[
              {
                id: "lead",
                label:
                  "Ask who is leading the contact and who will answer questions about authority and scope.",
              },
              {
                id: "agency-purpose",
                label:
                  "Ask what each agency is there for: registry, supervision, police investigation, CPS, warrant, task-force work, or another purpose.",
              },
              {
                id: "request-order",
                label:
                  "Ask whether each action is a request, a legal requirement, paperwork service, a warrant, a court order, or a supervision condition.",
              },
              {
                id: "separate-notes",
                label:
                  "Write separate notes for each agency: names, titles, questions asked, areas searched, documents shown, and property handled.",
              },
              {
                id: "exposure",
                label:
                  "Treat mixed CPS + police, probation + police, registry + police, or USMS + local encounters as higher exposure.",
              },
            ]}
          />

          <ScriptBox
            title="Script 4: mixed-agency clarification"
            tone="warning"
            context="Use this to separate actor, agency, authority, and request during confusing multi-agency contacts."
            script={`I see more than one agency here. Can you please tell me who is in charge of this contact, what each agency is here for, and whether you are asking, ordering, serving paperwork, or acting under a warrant, court order, or supervision condition?`}
          />

          <GuideCallout
            tone="legal"
            icon="🧭"
            title="Federal task-force caution"
          >
            <p>
              The U.S. Marshals Service has specific sex-offender investigation
              roles under federal law and works with state, local, tribal, and
              territorial authorities. That role should not be turned into a
              blanket assumption that every federal or task-force encounter
              authorizes entry, search, questioning, or seizure without looking
              at the specific authority being used.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="cps"
          number="7"
          title="CPS / child-protective-services encounters"
          subtitle="CPS is not simply police, and CPS requests, safety plans, court orders, and emergency authority are not the same thing."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              CPS, DCF, DHS, child protective services, child welfare, family
              services, and dependency agencies use different names in different
              places. Their authority usually comes from state, tribal, local,
              administrative, and family or dependency-court systems. CPS may
              request voluntary cooperation, ask to inspect a home, seek to
              interview a child, propose a safety plan, coordinate with police,
              seek a court order, or act under emergency authority.
            </p>

            <p>
              Allegations involving a registrant, a person with a sex-offense
              conviction, or a person on supervision can increase practical
              exposure. That does not mean the same legal answer applies in
              every state or every family. Safety plans, child interviews,
              parent-rights notices, emergency removals, registry-status risk
              factors, and CPS/police coordination are state-specific issues.
            </p>

            <p>
              Treat signing, agreeing, allowing interviews, making detailed
              statements, or changing household arrangements as serious steps.
              The safest move is to ask what authority CPS is using, whether the
              request is voluntary or required, what paperwork exists, and
              whether you can speak with the right kind of lawyer before signing
              or answering more questions.
            </p>
          </GuideProse>

          <GuideChecklist
            id="cps-checklist"
            title="CPS contact: clarify before you agree"
            columns={1}
            items={[
              {
                id: "agency",
                label:
                  "Ask for the worker’s name, agency, phone number, supervisor, case or referral number, and reason for contact.",
              },
              {
                id: "voluntary-required",
                label:
                  "Ask whether the request is voluntary, required by a court order, based on emergency authority, or something CPS is asking you to agree to.",
              },
              {
                id: "paperwork",
                label:
                  "Ask for copies of any safety plan, notice, court order, rights form, referral document, or written instruction.",
              },
              {
                id: "child-interview",
                label:
                  "Ask what authority is being used for any child interview and whether a parent, lawyer, advocate, or other person may be present.",
              },
              {
                id: "police-overlap",
                label:
                  "If police are present or contacted, ask what police are there for and whether there is a criminal investigation.",
              },
              {
                id: "before-signing",
                label:
                  "Do not sign a safety plan, voluntary agreement, release, or written statement casually. Ask for time to speak with the right kind of lawyer.",
              },
            ]}
          />

          <GuideCallout
            tone="family"
            icon="👨‍👩‍👧‍👦"
            title="CPS can affect more than one legal system"
          >
            <p>
              A CPS statement or agreement may affect family court, dependency
              court, criminal exposure, supervision compliance, housing,
              visitation, custody, treatment, and household stability. You may
              need criminal defense counsel, dependency or family counsel, or
              both.
            </p>
          </GuideCallout>

          <ScriptBox
            title="Script 5: CPS clarification"
            tone="family"
            context="Use this to avoid treating CPS requests, safety plans, court orders, and emergency authority as the same thing."
            script={`I want to understand what you are asking and what authority you are using. Is this request voluntary, required by a court order, based on emergency authority, or something you are asking me to agree to? May I have a copy of any paperwork and time to speak with the right kind of lawyer before signing anything?`}
          />

          <RoleGuidanceGrid
            title="Different people in the household may need different guidance"
            roles={[
              {
                role: "Parent or caregiver contacted by CPS",
                icon: "🧑‍🍼",
                guidance:
                  "Ask what CPS is requesting, what authority applies, what paperwork exists, and whether you can speak with dependency or family counsel before signing or making detailed statements.",
              },
              {
                role: "Registrant or supervised person in the home",
                icon: "🧭",
                guidance:
                  "Treat CPS contact as a possible family, supervision, registry, and criminal exposure issue. Avoid guessing, document the contact, and get legal advice before statements or agreements.",
              },
              {
                role: "Supportive family member or roommate",
                icon: "🏠",
                guidance:
                  "Do not assume you can consent for everyone or explain the legal situation for another adult. Write down what happened and encourage the directly affected person to seek counsel.",
              },
              {
                role: "Advocate or trusted helper",
                icon: "🗂️",
                guidance:
                  "Help preserve paperwork, names, dates, and deadlines. Avoid coaching anyone to hide facts or destroy records.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="remote-contact"
          number="8"
          title="Phone, text, email, and remote contact"
          subtitle="An encounter does not have to happen at the door to create legal or supervision exposure."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some contacts begin with a voicemail, text, email, portal message,
              blocked number, social-media message, or request for documents.
              A remote request can still matter for registry compliance,
              supervision, CPS, or a criminal investigation.
            </p>

            <p>
              Before sending photos, documents, screenshots, account
              information, device information, travel details, work details, or
              family information, verify identity, agency, purpose, deadline,
              and the authority for the request. When possible, ask for written
              confirmation through an official channel.
            </p>
          </GuideProse>

          <ScriptBox
            title="Script 6: phone / text / email verification"
            tone="privacy"
            context="Use this before you send information or answer questions remotely."
            script={`Thank you for contacting me. Before I answer questions or send documents, can you please confirm your name, agency, phone number, email address, and the reason for the request? If there is a deadline, form, court order, supervision condition, or case number, please send that in writing or tell me exactly what to write down.`}
          />

          <GuideChecklist
            id="remote-contact-checklist"
            title="Before responding remotely"
            columns={1}
            items={[
              {
                id: "identity",
                label:
                  "Confirm name, agency, role, official phone number, official email address, and office location.",
              },
              {
                id: "purpose",
                label:
                  "Ask for the reason for the request and whether it relates to registry, supervision, CPS, police, court, or another process.",
              },
              {
                id: "deadline",
                label:
                  "Ask whether there is a deadline, appointment, form, order, condition, case number, or referral number.",
              },
              {
                id: "written",
                label:
                  "Ask for written confirmation when possible, especially before sending documents, photos, screenshots, account information, or device information.",
              },
              {
                id: "save",
                label:
                  "Save texts, emails, voicemails, screenshots, call logs, letters, portal messages, and your notes.",
              },
            ]}
          />

          <GuideCallout
            tone="privacy"
            icon="🔐"
            title="Remote does not always mean low risk"
          >
            <p>
              A quick text asking for a photo, location, password, document, or
              explanation may seem routine. If the request touches devices,
              children, travel, work, housing, supervision, registry status, or
              new allegations, slow down and verify before responding.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="workplace"
          number="9"
          title="Workplace encounters"
          subtitle="Handle worksite verification and official contact at work without turning this into an employment-law guide."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Registry, police, probation, parole, or supervised-release contact
              at work can create practical harm even when the underlying purpose
              is routine. Worksite verification authority varies by state and
              local practice. Employer contact can also affect supervision
              reporting, workplace privacy, job stability, coworkers, and
              employer-owned devices or documents.
            </p>

            <p>
              If officials contact you at work or contact your employer, write
              down who came, who they spoke with, what they said the purpose was,
              whether any documents or devices were requested, and whether you
              were given a new instruction or deadline.
            </p>
          </GuideProse>

          <GuideChecklist
            id="workplace-contact-checklist"
            title="If contact happens at work"
            columns={1}
            items={[
              {
                id: "purpose",
                label:
                  "Ask whether this is worksite verification, supervision contact, police investigation, CPS contact, warrant service, or something else.",
              },
              {
                id: "privacy",
                label:
                  "If possible, ask to speak in a private area rather than in front of coworkers, customers, or clients.",
              },
              {
                id: "employer",
                label:
                  "Write down whether the employer, supervisor, HR, security, coworkers, or clients were contacted.",
              },
              {
                id: "property",
                label:
                  "Note whether work devices, employer records, schedules, badges, emails, vehicles, or files were requested, viewed, copied, or taken.",
              },
              {
                id: "follow-up",
                label:
                  "Afterward, check whether you must report the contact to supervision, registry, counsel, employer, HR, or another authority.",
              },
            ]}
          />

          <RelatedGuides
            title="Related SOLAR guides for workplace issues"
            guides={[
              {
                title: "Job Search Strategies",
                description:
                  "Use this for employer communication, job stability, disclosure planning, and work-search strategy.",
                to: "/resources/job-search-guide",
              },
              {
                title: "Registry Compliance & Verification Survival Guide",
                description:
                  "Use this for employment reporting duties, verification records, and proof of what you submitted.",
                to: "/resources/registry-compliance-verification-guide",
              },
              {
                title: "Supervision Conditions Survival Guide",
                description:
                  "Use this when a worksite contact may involve supervision approval, employment conditions, or violation risk.",
                to: "/resources/supervision-conditions-guide",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="recording-documentation"
          number="10"
          title="Recording, notes, and evidence preservation"
          subtitle="Document what happened without relying on a stale state recording-law chart."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Documentation matters. But recording law varies by state, setting,
              audio or video, public or private place, expectation of privacy,
              phone-call rules, and whether supervision or device restrictions
              apply. A static recording chart can become stale quickly, so this
              guide does not include one.
            </p>

            <p>
              If you are unsure whether recording is allowed, the safer fallback
              is to write detailed notes immediately afterward and save all
              paperwork, messages, cards, receipts, voicemails, photos of
              documents, and property forms. If recording is allowed and safe,
              do not interfere with officials, do not secretly violate a rule
              you are unsure about, and do not escalate the encounter just to
              record it.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Before relying on recording"
            whoToAsk="A lawyer in your state, a reliable state-specific legal resource, your supervision officer or condition if you are under technology limits, or an official recording-law source."
            whatToAsk="Ask whether audio recording, video recording, phone-call recording, recording inside a home, recording public officials, or recording while supervised is allowed in your exact setting."
            whatToSave="Save the source you checked, the date, the rule or advice, and your fallback written notes."
          />

          <DocumentPacket
            title="After-Encounter Documentation Log"
            intro={
              <span>
                Use this universal log as soon as possible after any police,
                registry, supervision, CPS, task-force, workplace, phone, text,
                email, or mixed-agency encounter.
              </span>
            }
            categories={[
              {
                title: "Basic details",
                items: [
                  "Date:",
                  "Start and end time:",
                  "Location:",
                  "How contact happened: door / phone / text / email / workplace / public / other",
                  "Names of officials:",
                  "Agencies:",
                  "Badge, ID, business-card, case, or referral numbers:",
                  "Who else was present:",
                ],
              },
              {
                title: "Purpose and authority",
                items: [
                  "Stated purpose:",
                  "Was this described as registry verification, police contact, supervision, CPS, warrant/order, or mixed?",
                  "What documents were shown:",
                  "Was entry requested?",
                  "Was consent requested?",
                  "Was a warrant, court order, supervision condition, or emergency authority mentioned?",
                ],
              },
              {
                title: "What happened",
                items: [
                  "What questions were asked:",
                  "What answers were given:",
                  "What was viewed, searched, photographed, copied, downloaded, or seized:",
                  "Were children, household members, employer, landlord, or coworkers contacted:",
                  "Were instructions given:",
                  "Were papers, cards, notices, or receipts left:",
                ],
              },
              {
                title: "Follow-up",
                items: [
                  "Follow-up date or deadline:",
                  "Who needs to be contacted now:",
                  "Notes written by:",
                  "Time notes were written:",
                ],
              },
            ]}
          />

          <GuideChecklist
            id="seizure-checklist"
            title="If anything was taken, copied, photographed, or downloaded"
            columns={1}
            items={[
              {
                id: "authority",
                label: "Ask what authority is being used.",
              },
              {
                id: "receipt",
                label: "Ask for a receipt or inventory.",
              },
              {
                id: "item",
                label:
                  "Write down the item, device, document, account, or file involved.",
              },
              {
                id: "serial",
                label: "Write down serial numbers if known.",
              },
              {
                id: "owner",
                label:
                  "Note whether the item belongs to you, another resident, an employer, a child, or someone else.",
              },
              {
                id: "action",
                label:
                  "Note whether the item was taken, copied, photographed, downloaded, or only viewed.",
              },
              {
                id: "access",
                label:
                  "Note whether passwords, passcodes, biometric access, cloud accounts, or apps were requested.",
              },
              {
                id: "paperwork",
                label:
                  "Note whether a warrant, court order, supervision condition, CPS document, or consent form was shown.",
              },
              {
                id: "save",
                label:
                  "Save any receipt, property form, warrant, card, or case number.",
              },
              {
                id: "counsel",
                label:
                  "Contact counsel promptly if devices, work property, child-related material, registry allegations, supervision violations, or new criminal allegations are involved.",
              },
            ]}
          />

          <OfflineOptions
            title="If recording, printing, or internet access is limited"
            icon="📝"
            items={[
              "Use a notebook, envelope, or printed log page kept near the door or in a safe folder.",
              "Write notes immediately after the encounter, before memory changes.",
              "Ask a trusted person to help preserve voicemails, texts, emails, cards, notices, receipts, or photos of documents.",
              "Keep paper copies of supervision conditions, registry paperwork, CPS forms, court orders, and lawyer contact information.",
              "If you are incarcerated, in treatment, in a shelter, or under technology restrictions, ask how to make legal calls, receive mailed forms, or preserve paper records.",
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="call-counsel"
          number="11"
          title="When to stop explaining and call counsel"
          subtitle="Use an escalation ladder instead of trying to talk through high-exposure situations alone."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some encounters are routine. Others can affect criminal charges,
              supervision, registry status, CPS, family court, employment,
              housing, custody, or device access. When exposure increases, the
              safest move is often to stop explaining and get the right kind of
              help.
            </p>

            <p>
              “The right kind of lawyer” may mean criminal defense counsel,
              public defender, supervision or revocation counsel, dependency or
              family counsel, appellate or post-conviction counsel, legal aid,
              or a lawyer familiar with registry issues in your state.
            </p>
          </GuideProse>

          <RedFlagGreenFlag
            red={
              <ul className="list-disc pl-6 space-y-2">
                <li>New allegations, arrest threat, or violation threat.</li>
                <li>Warrant, court order, safety plan, or emergency removal claim.</li>
                <li>Device seizure, password request, biometric unlocking request, cloud-account issue, or work-device issue.</li>
                <li>CPS request to sign, leave the home, restrict contact, allow child interviews, or change custody/visitation.</li>
                <li>Mixed agency contact involving police + CPS, police + supervision, registry + police, or task-force officers.</li>
                <li>Conflicting instructions from registry, supervision, CPS, police, court, employer, or treatment.</li>
              </ul>
            }
            green={
              <ul className="list-disc pl-6 space-y-2">
                <li>You have names, agencies, paperwork, and a clear stated purpose.</li>
                <li>You understand whether the contact is a request, legal requirement, warrant/order, supervision condition, CPS action, or follow-up appointment.</li>
                <li>You preserved your position without physical interference.</li>
                <li>You wrote notes quickly and saved cards, notices, messages, receipts, or orders.</li>
                <li>You know which lawyer, office, advocate, or legal-aid resource to contact next.</li>
              </ul>
            }
          />

          <GuideChecklist
            id="escalation-checklist"
            title="Call for help promptly when"
            columns={1}
            items={[
              {
                id: "warrant",
                label:
                  "A warrant, court order, emergency order, safety plan, or removal threat appears.",
              },
              {
                id: "arrest",
                label:
                  "Someone threatens arrest, a new charge, revocation, violation, detention, or removal of a child.",
              },
              {
                id: "devices",
                label:
                  "Phones, computers, cloud accounts, apps, storage devices, work devices, or passwords are involved.",
              },
              {
                id: "children",
                label:
                  "CPS, child interviews, custody, visitation, school, childcare, or household safety planning is involved.",
              },
              {
                id: "mixed",
                label:
                  "Multiple agencies are present or the purpose changes during the encounter.",
              },
              {
                id: "conflict",
                label:
                  "You receive conflicting instructions or are asked to sign something you do not understand.",
              },
            ]}
          />

          <GuideCallout
            tone="legal"
            icon="⚖️"
            title="Carefully framed counsel language"
          >
            <p>
              Asking for counsel can have different legal effects depending on
              whether this is police questioning, supervision, registry
              administration, CPS, family court, or another process. This
              language is meant to slow the moment down and preserve clarity; it
              is not a substitute for legal advice.
            </p>

            <p>
              “I want to understand this and respond appropriately, but I do not
              want to guess or make things worse. I would like to speak with the
              right kind of lawyer or advocate before answering more questions
              or signing anything, unless you are telling me there is a specific
              legal requirement I must respond to right now. Please tell me what
              authority you are relying on and what deadline or immediate action
              you say applies.”
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="12"
          title="Resources, related SOLAR guides, and sources"
          subtitle="Use official sources to verify the rule that applies to your exact encounter."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Official and high-authority resources"
            description={
              <span>
                These sources help verify federal baselines, supervision
                conditions, federal task-force roles, CPS state-law materials,
                recording-law cautions, and legal-help pathways.
              </span>
            }
            resources={[
              {
                label: "SMART Office: SORNA current law",
                href: sourceLinks.smartSornaCurrentLaw,
                badge: "Official",
                description:
                  "Federal SORNA baseline for registration and keeping registration current.",
              },
              {
                label: "SMART Office: SORNA implementation documents",
                href: sourceLinks.smartSornaImplementation,
                badge: "Official",
                description:
                  "Federal implementation materials, including in-person verification guidance.",
              },
              {
                label: "NSOPW: all registries",
                href: sourceLinks.nsopwAllRegistries,
                badge: "Official",
                description:
                  "Directory of state, territory, and tribal registry sites for jurisdiction-specific starting points.",
              },
              {
                label: "U.S. Courts: supervision conditions overview",
                href: sourceLinks.usCourtsSupervisionConditions,
                badge: "Official",
                description:
                  "Federal probation and supervised-release condition overview.",
              },
              {
                label: "U.S. Courts: search and seizure conditions",
                href: sourceLinks.usCourtsSearchConditions,
                badge: "Official",
                description:
                  "Federal supervised-release search-condition discussion and sample condition context.",
              },
              {
                label: "U.S. Marshals: sex offender investigations",
                href: sourceLinks.usMarshalsSexOffenderInvestigations,
                badge: "Official",
                description:
                  "USMS role in Adam Walsh Act / sex-offender registration investigations.",
              },
              {
                label: "Child Welfare Information Gateway: state statutes",
                href: sourceLinks.childWelfareStateLaws,
                badge: "Official",
                description:
                  "State child-welfare statute starting point for CPS-specific authority questions.",
              },
              {
                label: "Child Welfare Information Gateway: state and tribal policy links",
                href: sourceLinks.childWelfarePolicyLinks,
                badge: "Official",
                description:
                  "Links to state and tribal child-welfare law and policy materials.",
              },
              {
                label: "Reporters Committee recording guide",
                href: sourceLinks.rcfpRecordingGuide,
                badge: "Legal resource",
                description:
                  "State-by-state recording-law starting point; verify before relying on it in a live encounter.",
              },
              {
                label: "USA.gov legal aid finder",
                href: sourceLinks.usaLegalAid,
                badge: "Legal help",
                description:
                  "National starting point for legal aid and public legal-help resources.",
              },
              {
                label: "LawHelp.org",
                href: sourceLinks.lawHelp,
                badge: "Legal help",
                description:
                  "Legal-aid directory for state-specific help and self-help resources.",
              },
              {
                label: "ABA lawyer referral directories",
                href: sourceLinks.stateBarDirectory,
                badge: "Referral",
                description:
                  "State bar and lawyer-referral starting point when legal aid is unavailable or not the right fit.",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Your Rights at Every Stage",
                description:
                  "Use this for the broader constitutional framework behind police questioning, searches, silence, counsel, and documentation.",
                to: "/resources/know-your-rights",
              },
              {
                title: "Supervision Conditions Survival Guide",
                description:
                  "Use this for probation, parole, supervised release, treatment, search conditions, violations, and officer communication.",
                to: "/resources/supervision-conditions-guide",
              },
              {
                title: "Registry Compliance & Verification Survival Guide",
                description:
                  "Use this for registry reporting duties, verification appointments, receipts, calendars, and compliance proof packets.",
                to: "/resources/registry-compliance-verification-guide",
              },
              {
                title: "Registry Rules by State",
                description:
                  "Use this as the starting point for state-specific registration, verification, and restriction research.",
                to: "/resources/state-registry",
              },
              {
                title: "Interstate Moving Guide",
                description:
                  "Use this when address changes, temporary presence, travel, or relocation may trigger multiple jurisdictions.",
                to: "/resources/interstate-moving-guide",
              },
              {
                title: "Tenant Rights Survival Guide",
                description:
                  "Use this for housing entry, landlord, lease, shared-residence, and tenant-stability questions.",
                to: "/resources/tenant-rights",
              },
              {
                title: "Housing Search Guide",
                description:
                  "Use this for housing verification, landlord communication, and address-planning strategy.",
                to: "/resources/housing-search-guide",
              },
              {
                title: "The SOLAR Family & Allies Guide",
                description:
                  "Use this for family support, communication, boundaries, and crisis navigation.",
                to: "/resources/family-support-guide",
              },
              {
                title: "Children & Disclosure + Relationship Rebuilding Toolkit",
                description:
                  "Use this for child-sensitive communication, family relationships, and disclosure planning.",
                to: "/resources/children-disclosure-toolkit",
              },
              {
                title: "Job Search Strategies",
                description:
                  "Use this for employer communication, workplace stability, and disclosure planning.",
                to: "/resources/job-search-guide",
              },
            ]}
          />

          <SourceList
            title="Sources & verification"
            note={
              <span>
                Sources were live-checked for this sandbox draft. State law,
                local policy, supervision conditions, CPS procedures, recording
                rules, and court orders still need state- and case-specific
                verification before a reader relies on them.
              </span>
            }
            sources={[
              {
                label: "SMART Office: SORNA current law",
                href: sourceLinks.smartSornaCurrentLaw,
                description:
                  "Supports the federal baseline that SORNA requires registration to be kept current where a person resides, works, or attends school.",
              },
              {
                label: "SMART Office: implementation documents",
                href: sourceLinks.smartSornaImplementation,
                description:
                  "Supports the boundary between federal standards and jurisdiction-specific implementation details.",
              },
              {
                label: "SMART Office: in-person verification",
                href: sourceLinks.smartSornaInPerson,
                description:
                  "Supports the limited registry-verification framing without treating verification as blanket search authority.",
              },
              {
                label: "U.S. Courts: supervision conditions overview",
                href: sourceLinks.usCourtsSupervisionConditions,
                description:
                  "Supports the distinction between court-imposed supervision conditions and other rulebooks.",
              },
              {
                label: "U.S. Courts: search and seizure conditions",
                href: sourceLinks.usCourtsSearchConditions,
                description:
                  "Supports careful treatment of federal supervised-release search conditions, including scope and purpose.",
              },
              {
                label: "Terry v. Ohio",
                href: sourceLinks.terry,
                description:
                  "Supports the distinction between investigative detention and other police contact.",
              },
              {
                label: "Florida v. Bostick",
                href: sourceLinks.bostick,
                description:
                  "Supports the practical distinction between police requests and situations where compliance is conveyed as required.",
              },
              {
                label: "Miranda v. Arizona",
                href: sourceLinks.miranda,
                description:
                  "Supports the custodial-interrogation caution and careful counsel language.",
              },
              {
                label: "Hiibel v. Sixth Judicial District Court",
                href: sourceLinks.hiibel,
                description:
                  "Supports the warning that identification duties vary by state and context.",
              },
              {
                label: "Schneckloth v. Bustamonte",
                href: sourceLinks.schneckloth,
                description:
                  "Supports the consent-search caution and the need to avoid assuming consent.",
              },
              {
                label: "Riley v. California",
                href: sourceLinks.riley,
                description:
                  "Supports extra caution around phones, digital devices, and digital information.",
              },
              {
                label: "Library of Congress Constitution Annotated: consent searches",
                href: sourceLinks.consentSearches,
                description:
                  "Supports third-party consent cautions and the shared-residence decision aid.",
              },
              {
                label: "Georgia v. Randolph",
                href: sourceLinks.georgiaRandolph,
                description:
                  "Supports the caution that co-occupant consent issues are fact-specific.",
              },
              {
                label: "Fernandez v. California",
                href: sourceLinks.fernandez,
                description:
                  "Supports careful treatment of later co-occupant consent after an objecting occupant is removed.",
              },
              {
                label: "Griffin v. Wisconsin",
                href: sourceLinks.griffin,
                description:
                  "Supports the supervision-search discussion without overclaiming that supervision erases all privacy interests.",
              },
              {
                label: "OJP summary of United States v. Knights",
                href: sourceLinks.knights,
                description:
                  "Supports the probation-search caution involving police and reasonable suspicion.",
              },
              {
                label: "Samson v. California",
                href: sourceLinks.samson,
                description:
                  "Supports the parole-search caution while avoiding blanket claims across all supervision types.",
              },
              {
                label: "U.S. Marshals Service: sex offender investigations",
                href: sourceLinks.usMarshalsSexOffenderInvestigations,
                description:
                  "Supports the federal task-force role caution without converting that role into blanket entry or search authority.",
              },
              {
                label: "Child Welfare Information Gateway: how the child welfare system works",
                href: sourceLinks.childWelfareHowSystemWorks,
                description:
                  "Supports the national-level distinction between CPS systems and police systems.",
              },
              {
                label: "Child Welfare Information Gateway: state statutes",
                href: sourceLinks.childWelfareStateLaws,
                description:
                  "Supports the warning that CPS entry, interviews, safety plans, and emergency authority are state-specific.",
              },
              {
                label: "Child Welfare Information Gateway: state and tribal law and policy links",
                href: sourceLinks.childWelfarePolicyLinks,
                description:
                  "Supports state- and tribal-specific CPS verification before acting.",
              },
              {
                label: "Reporters Committee: recording guide",
                href: sourceLinks.rcfpRecordingGuide,
                description:
                  "Supports the recording-law verification boundary and the decision not to include a static recording-law chart.",
              },
              {
                label: "USA.gov legal aid",
                href: sourceLinks.usaLegalAid,
                description:
                  "Supports the legal-help escalation section.",
              },
              {
                label: "LawHelp.org",
                href: sourceLinks.lawHelp,
                description:
                  "Supports finding state-specific legal aid and self-help resources.",
              },
              {
                label: "ABA state lawyer referral directories",
                href: sourceLinks.stateBarDirectory,
                description:
                  "Supports referral pathways when a public defender, legal aid, or existing counsel is not available.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}