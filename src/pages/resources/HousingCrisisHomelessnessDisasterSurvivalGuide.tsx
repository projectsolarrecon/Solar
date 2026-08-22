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
  RoleGuidanceGrid,
  TimelineGuidanceGrid,
  DoDontJudgment,
  RedFlagGreenFlag,
} from "../../components/solar";

const sourceLinks = {
  hudFindShelter: "https://www.hud.gov/findshelter",
  usaGovDisasterHousing: "https://www.usa.gov/disaster-housing-shelter",
  unitedWay211: "https://211.org/about-us/your-local-211",
  uspsGeneralDelivery: "https://www.usps.com/locator/glossary.htm",
  smartSornaCurrentLaw: "https://www.smart.ojp.gov/sorna/current-law",
  smartResidenceHomelessTransient:
    "https://smart.ojp.gov/sorna/current-law/implementation-documents/determination-residence-homeless-offenders-and-transient-workers",
  nsopwAllRegistries: "https://www.nsopw.gov/all-registries",
  usCourtsSupervision:
    "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions",
  hhsEmergencyPreparedness:
    "https://www.hhs.gov/civil-rights/for-individuals/special-topics/emergency-preparedness/index.html",
  abaDisasterLegalServices:
    "https://www.americanbar.org/groups/young_lawyers/about/initiatives/disaster-legal-services/free-legal-assistance-to-natural-disaster-survivors/",
  legalAid: "https://www.usa.gov/legal-aid",
  lscLegalAid:
    "https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help",
  findTreatment: "https://findtreatment.gov/locator",
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

export default function HousingCrisisHomelessnessDisasterSurvivalGuide(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Housing Crisis, Homelessness & Disaster Survival Guide | The SOLAR Project"
        description="A practical SOLAR crisis guide for people who lost housing, are entering homelessness, are displaced by disaster, or need to stabilize the next 72 hours while avoiding registry or supervision mistakes."
        keywords="housing crisis, homelessness, disaster evacuation, transient registration, emergency shelter, registry compliance, supervision conditions, sex offense registry, SOLAR Project"
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
            Housing Crisis, Homelessness & Disaster Survival Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            If you may not have a safe or lawful place to sleep tonight, start
            with safety, communication, documents, medication, money, and the
            few legal questions that cannot wait.
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

        <GuideIntro title="Start here: solve tonight first" icon="🧭">
          <p>
            Housing crises destroy normal planning assumptions. You may be
            dealing with a lockout, eviction, motel loss, family conflict,
            disaster evacuation, shelter denial, release without workable
            housing, or a registry or supervision rule that suddenly made a
            place unusable.
          </p>

          <p>
            This guide is for the first hours and days. It helps you stabilize,
            stay reachable, protect documents and medication, verify whether a
            temporary location creates registry or supervision consequences, and
            build a proof packet. It is not a full registry-compliance manual,
            tenant-rights guide, benefits guide, technology guide, or long-term
            housing search guide.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="I lost housing today"
          subtitle="Do these before trying to solve every long-term problem at once."
          icon="⚡"
          urgentActions={[
            <span key="physical-safety">
              Get physically safe: leave danger, call emergency services if
              needed, and move away from fire, flood, violence, heat, cold, or
              immediate threat.
            </span>,
            <span key="sleep-tonight">
              Identify the most realistic place to sleep tonight, then verify
              whether it creates a registry, supervision, local-law,
              child-contact, shelter-policy, or transportation problem.
            </span>,
            <span key="essentials">
              Put ID, wallet, phone, charger, medication, keys, glasses, court
              papers, registry paperwork, supervision conditions, and insurance
              cards in one bag if you can.
            </span>,
            <span key="contacts">
              Contact supervision if you are required to do so or if approval
              may be needed. Treat registry and supervision as separate
              rulebooks.
            </span>,
            <span key="reachable">
              Decide how people can reach you tonight: phone, voicemail, text,
              email, trusted contact, shelter phone, library phone, or written
              callback plan.
            </span>,
          ]}
          nextActions={[
            <span key="proof">
              Start a simple notes page with the date, time, why housing became
              unavailable, where you are sleeping, who you contacted, and what
              proof you saved.
            </span>,
            <span key="resources">
              Use local crisis systems such as <ExternalGuideLink href={sourceLinks.unitedWay211}>211</ExternalGuideLink>, <ExternalGuideLink href={sourceLinks.hudFindShelter}>HUD Find Shelter</ExternalGuideLink>, local
              emergency management, disaster shelters, <ExternalGuideLink href={sourceLinks.legalAid}>legal aid</ExternalGuideLink>, or a reentry
              provider.
            </span>,
            <span key="tomorrow">
              By tomorrow, work on mail, replacement documents, medication
              continuity, transportation, longer temporary housing, and legal
              follow-up.
            </span>,
          ]}
          reminder={
            <span>
              You do not have to solve everything today. But safety, sleep,
              medication, reachability, and legal triage cannot be ignored.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Tonight",
              title: "Stabilize",
              icon: "🛟",
              tone: "urgent",
              description:
                "Find a realistic sleeping option, protect medication and documents, charge your phone, and keep dependents or pets safe.",
            },
            {
              eyebrow: "Before relying on a location",
              title: "Verify",
              icon: "⚖️",
              tone: "legal",
              description:
                "Check whether the temporary location creates registry, supervision, residence, presence, shelter, local-law, or child-contact issues.",
            },
            {
              eyebrow: "All week",
              title: "Document",
              icon: "🗂️",
              tone: "success",
              description:
                "Keep receipts, call logs, closure notices, evacuation records, shelter paperwork, photos, messages, names, and instructions.",
            },
          ]}
        />

        <GuideCallout
          tone="legal"
          icon="⚖️"
          title="National guidance can help you stabilize. Local rules still control legal details."
        >
          <p>
            This guide can safely tell you how to triage, document, preserve
            communication, and find crisis resources. It cannot safely tell you
            that a shelter, motel, couch, campground, vehicle, or mailing address
            is always allowed or always reportable. Those answers can change by
            state law, local ordinance, registering agency, court order,
            supervision condition, shelter policy, and emergency-management
            decision.
          </p>
        </GuideCallout>

        <GuideSectionHeader
          id="kind-of-crisis"
          number="1"
          title="Identify what kind of crisis this is"
          subtitle="The label matters only because it tells you what systems to activate and what proof to save."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A housing crisis can start because the outside world breaks — a
              wildfire, hurricane, flood, fire, tornado, utility failure, or
              evacuation order. It can also start because the housing system
              breaks — eviction, lockout, shelter loss, motel loss, family
              conflict, residence rejection, or release from jail or prison
              without workable housing.
            </p>

            <p>
              Both kinds of emergencies can create registry or supervision
              consequences. The first job is not to name the perfect legal
              category. The first job is to see what must be activated:
              emergency shelter, <ExternalGuideLink href={sourceLinks.usaGovDisasterHousing}>disaster housing or shelter assistance</ExternalGuideLink>, <InternalGuideLink to="/resources/tenant-rights">tenant-rights help</InternalGuideLink>, supervision
              contact, registry triage, medication replacement, transportation,
              mail, or a family safety plan.
            </p>
          </GuideProse>

          <GuideChecklist
            id="crisis-type-checklist"
            title="What happened?"
            columns={1}
            items={[
              {
                id: "housing-loss",
                label:
                  "Housing became unavailable: eviction, lockout, landlord termination, roommate or family conflict, shelter exit, motel loss, or unsafe residence.",
              },
              {
                id: "disaster",
                label:
                  "A disaster or emergency made the residence unsafe or unreachable: fire, flood, hurricane, tornado, wildfire, storm, utility failure, evacuation, or closure.",
              },
              {
                id: "rule-created-crisis",
                label:
                  "A registry, supervision, local-law, child-contact, residence-approval, or housing-restriction issue made the planned location unusable.",
              },
              {
                id: "release-discharge",
                label:
                  "You were released from jail, prison, hospital, treatment, or a program without a workable place to go.",
              },
              {
                id: "vehicle-infrastructure",
                label:
                  "A vehicle breakdown, tow, impoundment, dead battery, insurance lapse, or fuel problem removed both transportation and sleeping/storage access.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="sleep-tonight"
          number="2"
          title="Where can I sleep tonight?"
          subtitle="Choose the safest realistic option, then verify before relying on it."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A temporary sleeping place is not automatically lawful,
              reportable, unreportable, supervision-approved, or safe just
              because it is only for one night. A family couch, motel, shelter,
              vehicle, campground, disaster shelter, or reentry bed can each
              raise different questions.
            </p>

            <p>
              That does not mean every option is impossible. It means the safer
              move is to ask narrow questions, save the answer, and have a
              backup plan before spending your last cash or traveling across
              town.
            </p>
          </GuideProse>

          <GuideChecklist
            id="sleeping-location-verification"
            title="Emergency sleeping-location verification"
            columns={1}
            items={[
              {
                id: "address",
                label:
                  "Write down the exact place: street address, shelter name, motel name, campsite, parking location, or clear geographic description.",
              },
              {
                id: "jurisdiction",
                label:
                  "Identify the city, county, state, tribal land, or other jurisdiction where the place is located.",
              },
              {
                id: "registry-question",
                label:
                  "Ask whether staying there, even temporarily, creates a registration, address, residence, transient, presence, or reporting issue.",
              },
              {
                id: "supervision-question",
                label:
                  "If supervised, ask whether the stay needs advance approval, immediate notice, travel permission, child-contact review, or curfew adjustment.",
              },
              {
                id: "local-law",
                label:
                  "Check local rules when relevant: vehicle sleeping, camping, loitering, proximity restrictions, shelter zones, parks, school zones, or anti-camping ordinances.",
              },
              {
                id: "provider-policy",
                label:
                  "Ask the shelter, motel, program, campground, or host what its own admission, ID, curfew, background, child, pet, medication, and mail rules are.",
              },
              {
                id: "proof",
                label:
                  "Save proof: call log, name of person spoken to, text, email, receipt, intake paper, screenshot, business card, voicemail, or written notes.",
              },
            ]}
          />

          <VerifyBeforeActing
            title="Before you rely on a temporary location"
            whoToAsk={
              <span>
                The registering agency, your supervision officer if applicable,
                the shelter or lodging provider, local emergency-management
                staff, an <ExternalGuideLink href={sourceLinks.legalAid}>appropriate legal-aid resource</ExternalGuideLink> or defense lawyer, or the SOLAR <InternalGuideLink to="/resources/state-registry">Registry Rules by State</InternalGuideLink> source for your jurisdiction.
              </span>
            }
            whatToAsk={
              <span>
                “I am temporarily displaced and may sleep at [location] from
                [date/time] to [date/time]. Does this create any reporting,
                residence, transient, presence, supervision, child-contact, or
                local-law issue I need to handle today?”
              </span>
            }
            whatToSave={
              <span>
                Date, time, name, agency or provider, phone number, exact
                question, exact answer, and any written confirmation.
              </span>
            }
          />

          <GuideCallout
            tone="warning"
            icon="🚗"
            title="Vehicle sleeping is both a housing issue and an infrastructure issue"
          >
            <p>
              If a vehicle is your sleeping place, it may also hold your
              documents, phone charger, medication, clothes, work tools, and
              transportation to appointments. A tow, impoundment, dead battery,
              fuel problem, or insurance issue can collapse several systems at
              once. Treat the vehicle as both shelter and critical
              infrastructure.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="registry-supervision-triage"
          number="3"
          title="Registry and supervision triage during displacement"
          subtitle="Spot the issue, separate the rulebooks, and route detailed compliance questions to the deeper guides."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Losing housing can matter because many registry systems require
              current residence information, and some jurisdictions use terms
              such as “homeless,” “transient,” “no fixed residence,” “temporary
              residence,” or “habitual location.” The exact rule is not
              nationally uniform. The SOLAR <InternalGuideLink to="/resources/registry-compliance-verification-guide">Registry Compliance & Verification Survival Guide</InternalGuideLink> owns the detailed reporting, proof, closure, and missed-deadline workflow.
            </p>

            <p>
              Supervision is separate. Probation, parole, supervised release,
              treatment, or court conditions may require approval or immediate
              contact even when the registry rule is different. Do not assume
              notifying one office automatically satisfies the other. Use the SOLAR <InternalGuideLink to="/resources/supervision-conditions-guide">Supervision Conditions Survival Guide</InternalGuideLink> when the controlling question is a supervision condition.
            </p>
          </GuideProse>

          <GuideChecklist
            id="registry-supervision-triage-checklist"
            title="Questions to answer today"
            columns={1}
            items={[
              {
                id: "lost-residence",
                label:
                  "Did losing the prior residence create a change-of-address, change-of-residence, or no-fixed-address issue?",
              },
              {
                id: "temporary-location",
                label:
                  "Does the temporary place count as a residence, temporary residence, shelter stay, lodging, transient location, or reportable location?",
              },
              {
                id: "no-address",
                label:
                  "If there is no ordinary street address, what information does the jurisdiction accept: shelter name, intersection, vehicle location, geographic description, or reporting to a specific office?",
              },
              {
                id: "frequency",
                label:
                  "Does homeless or transient status trigger more frequent in-person reporting, verification, or location updates?",
              },
              {
                id: "separate-supervision",
                label:
                  "Does supervision require separate permission, immediate notice, travel approval, curfew change, residence approval, or treatment-program communication?",
              },
              {
                id: "written-record",
                label:
                  "Did you preserve proof of every call, visit, message, office closure, instruction, and attempted contact?",
              },
            ]}
          />

          <ScriptBox
            title="Script: registry emergency-displacement notification"
            tone="legal"
            context="Use this only as a short triage script. Detailed reporting, receipts, and deadline disputes belong in the Registry Compliance & Verification guide."
            script={`Hello, my name is [Name]. I am registered in [jurisdiction]. I lost access to my housing on [date/time] because [brief reason]. I am trying to understand what I must do today while I am temporarily displaced.\n\nMy current temporary location is [location or “not yet stable”]. Who handles emergency displacement, homeless or transient reporting, and temporary-location questions? What exactly should I report, how should I report it, and how can I get written proof of the instruction or attempted contact?`}
          />

          <ScriptBox
            title="Script: supervision emergency-housing notification"
            tone="warning"
            context="Use this separately from registry contact if you are on probation, parole, supervised release, treatment supervision, or another court condition."
            script={`Hello, this is [Name]. I am under supervision with [officer/office]. I lost access to my housing on [date/time] because [brief reason]. I need to know what housing, travel, curfew, contact, child-contact, and reporting instructions apply right now.\n\nMy possible temporary location is [location]. Is this approved, not approved, or do you need more information? If I cannot reach you again, what should I document and where should I go for written instructions?`}
          />

          <RelatedGuides
            title="Use these deeper guides when triage turns into compliance"
            guides={[
              {
                title: "Registry Compliance & Verification Survival Guide",
                description:
                  "For exact reporting duties, receipts, proof of attempted compliance, office closures, failed reporting channels, missed deadlines, and disputed instructions.",
                to: "/resources/registry-compliance-verification-guide",
              },
              {
                title: "Supervision Conditions Survival Guide",
                description:
                  "For residence approval, travel limits, curfew, treatment rules, search conditions, device limits, contact restrictions, and violation risk.",
                to: "/resources/supervision-conditions-guide",
              },
              {
                title: "Registry Rules by State",
                description:
                  "For state-specific registry sources before relying on a national summary.",
                to: "/resources/state-registry",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="homeless-transient-registration"
          number="4"
          title="Homeless, transient, and no-fixed-address registration"
          subtitle="Do not guess the rule. Learn the terms your jurisdiction uses and document the answer."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some jurisdictions have special procedures for people without a
              fixed residence. Others use different words or fold the issue into
              residence, address, temporary lodging, location, or in-person
              verification rules. A national guide cannot safely turn that into
              one rule.
            </p>

            <p>
              <ExternalGuideLink href={sourceLinks.smartResidenceHomelessTransient}>SMART’s SORNA implementation guidance on residence, homeless registrants, and transient workers</ExternalGuideLink> says jurisdictions must
              register homeless and transient people and must collect a
              description of where someone habitually lives with as much
              definiteness as possible under the circumstances. But that federal
              implementation guidance still leaves jurisdictions room to decide
              how they determine residence, what local process applies, and how
              people should report in practice.
            </p>

            <p>
              Your goal is to find the controlling words, ask the narrow
              question, and save the answer. A mailing address, shelter mail
              desk, trusted friend’s address, or post office option may help
              officials reach you. It does not automatically answer where you
              legally reside or what you must report.
            </p>
          </GuideProse>

          <GuideChecklist
            id="homeless-transient-verification"
            title="Terms and questions to verify"
            columns={1}
            items={[
              {
                id: "terms",
                label:
                  "Search or ask about these terms: homeless, transient, no fixed residence, no fixed address, temporary residence, habitual location, residence, place where you sleep, shelter address, vehicle, geographic description, change of residence, and temporary presence.",
              },
              {
                id: "classification",
                label:
                  "Ask whether the jurisdiction has a homeless, transient, no-fixed-address, or similar classification.",
              },
              {
                id: "required-information",
                label:
                  "Ask what information must be reported when there is no conventional address.",
              },
              {
                id: "frequency",
                label:
                  "Ask whether the status changes reporting frequency, in-person verification, check-ins, or location updates.",
              },
              {
                id: "locations",
                label:
                  "Ask whether each shelter, motel, couch, vehicle location, campground, or outdoor sleeping area must be reported separately.",
              },
              {
                id: "proof-to-keep",
                label:
                  "Keep proof of where you slept, dates, attempts to report, agency instructions, shelter paperwork, motel receipts, transportation limits, and office closures.",
              },
            ]}
          />

          <GuideCallout
            tone="reminder"
            icon="📬"
            title="Mailing address and residence are different questions"
          >
            <p>
              A place to receive mail can be important for benefits, notices,
              employers, lawyers, agencies, and family. But it may not satisfy a
              registry residence duty, supervision residence-approval rule, or
              local-law requirement. Treat mail continuity as a communication
              tool, not as a substitute for legal verification.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="shelters-emergency-housing"
          number="5"
          title="Shelters, disaster shelters, and emergency housing"
          subtitle="Call ahead when possible, ask narrow questions, and build a backup plan."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Emergency shelter access can depend on several different systems:
              state law, local rule, emergency-management decision, provider
              policy, supervision condition, ID requirement, bed availability,
              family composition, disability need, medication storage, pet
              policy, and safety planning.
            </p>

            <p>
              Do not assume people on registries are always excluded. Do not
              assume every shelter must accept you. The practical move is to call
              before traveling across town when possible, ask what rule controls,
              and write down the answer.
            </p>

            <p>
              For immediate searches, use <ExternalGuideLink href={sourceLinks.hudFindShelter}>HUD Find Shelter</ExternalGuideLink> or your <ExternalGuideLink href={sourceLinks.unitedWay211}>local 211</ExternalGuideLink>. If the housing loss is disaster-related, the federal <ExternalGuideLink href={sourceLinks.usaGovDisasterHousing}>disaster housing and shelter guide</ExternalGuideLink> collects FEMA, transitional-hotel, Red Cross, and 211 pathways.
            </p>
          </GuideProse>

          <GuideChecklist
            id="shelter-call-ahead-checklist"
            title="Shelter or emergency-housing call-ahead checklist"
            columns={1}
            items={[
              {
                id: "eligibility",
                label:
                  "Ask whether the program accepts adults in your situation and whether any registry, supervision, warrant, ID, family, or local-policy issue affects intake.",
              },
              {
                id: "intake",
                label:
                  "Ask intake hours, location, transportation options, what to bring, what not to bring, and whether beds are first-come, referral-only, or coordinated-entry.",
              },
              {
                id: "documents",
                label:
                  "Ask what ID, paperwork, medication list, prescriptions, release papers, benefit letters, or referral documents are needed.",
              },
              {
                id: "rules",
                label:
                  "Ask about curfew, length of stay, bag limits, phone charging, medication storage, mail, visitors, work schedules, and appointment conflicts.",
              },
              {
                id: "family",
                label:
                  "Ask whether partners, children, dependent adults, service animals, or pets can stay together and what proof or referral is needed.",
              },
              {
                id: "backup",
                label:
                  "If denied, ask whether they know another program, warming or cooling center, coordinated-entry point, reentry provider, domestic-violence program, disaster shelter, or 211 referral.",
              },
            ]}
          />

          <ScriptBox
            title="Script: shelter eligibility call"
            tone="neutral"
            context="Use this before spending limited money, battery, or transportation on a trip that may not work."
            script={`Hello, my name is [Name]. I need emergency shelter for [tonight/date]. Before I travel there, I need to ask about eligibility and intake.\n\nDo you accept someone in my situation? Are there any registry, supervision, ID, warrant, family, child, medication, pet, service-animal, or local-policy issues I should know before coming? If you cannot help, who should I call next?`}
          />

          <GuideCallout
            tone="privacy"
            icon="🛡️"
            title="Domestic-violence shelters may be the right emergency pathway for some readers"
          >
            <p>
              Domestic-violence and survivor-services programs can have specific
              eligibility, confidentiality, safety, child-related, location, and
              admission policies. This guide does not replace survivor-safety
              planning. Contact the program directly, a survivor-services
              hotline, or an appropriate advocate if that pathway may fit your
              situation.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="disaster-evacuation"
          number="6"
          title="Disaster evacuation and office closures"
          subtitle="When normal systems break, preserve proof of what happened and what you tried to do."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A fire, flood, hurricane, tornado, wildfire, evacuation order,
              power outage, destroyed residence, road closure, or office closure
              can make ordinary reporting and supervision routines impossible.
              The unique job here is survival plus documentation. For current federal shelter and temporary-housing pathways, use <ExternalGuideLink href={sourceLinks.usaGovDisasterHousing}>USAGov’s disaster housing guide</ExternalGuideLink>.
            </p>

            <p>
              If registry or supervision obligations are affected, use this
              guide to keep yourself alive, reachable, and documented. Use the
              <InternalGuideLink to="/resources/registry-compliance-verification-guide">Registry Compliance & Verification Survival Guide</InternalGuideLink> for detailed reporting
              attempts, receipts, missed deadlines, and disputed instructions. If a disaster creates a civil legal problem beyond registry compliance, <ExternalGuideLink href={sourceLinks.abaDisasterLegalServices}>ABA Disaster Legal Services</ExternalGuideLink> explains where free disaster-related legal assistance may be activated.
            </p>
          </GuideProse>

          <GuideChecklist
            id="disaster-proof-checklist"
            title="Disaster and evacuation proof to save"
            columns={1}
            items={[
              {
                id: "order",
                label:
                  "Evacuation order, emergency alert, county or state notice, FEMA or local emergency-management update, shelter notice, or disaster declaration.",
              },
              {
                id: "housing-damage",
                label:
                  "Photos or videos of damage, fire report, utility outage notice, landlord message, insurance message, repair notice, or safety notice.",
              },
              {
                id: "temporary-stay",
                label:
                  "Shelter intake record, hotel or motel receipt, campground receipt, host message, transportation receipt, gas receipt, toll receipt, or parking record.",
              },
              {
                id: "office-closure",
                label:
                  "Registry office closure notice, supervision office closure notice, voicemail recording details, website notice, door sign photo, or email auto-reply.",
              },
              {
                id: "attempts",
                label:
                  "Call logs, emails, texts, voicemail notes, names, badge or employee numbers, confirmation numbers, and the exact instructions given.",
              },
              {
                id: "return-plan",
                label:
                  "Date you left, date you returned or tried to return, why you could not return, and what changed about the residence.",
              },
            ]}
          />

          <GuideCallout
            tone="legal"
            icon="⚖️"
            title="Proof helps explain what happened. It does not automatically prove compliance."
          >
            <p>
              A closure notice, evacuation order, receipt, or call log can be
              extremely important. But it does not automatically mean every legal
              duty was satisfied. Save the proof, then use the detailed
              compliance guide or legal help to evaluate what else is required.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="communication-continuity"
          number="7"
          title="Phone, charging, internet, and communication continuity"
          subtitle="Treat communication as crisis infrastructure, not a convenience."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              In a housing crisis, a dead phone can mean missed agency calls,
              missed employer contact, missed shelter updates, missed pharmacy
              information, missed legal help, and no proof of attempted contact.
              Communication is part of survival.
            </p>

            <p>
              This section stays crisis-focused. Device monitoring, internet
              bans, platform rules, searches, and supervision technology
              conditions belong in the future Technology Access & Monitoring
              guide and the existing <InternalGuideLink to="/resources/supervision-conditions-guide">Supervision Conditions Survival Guide</InternalGuideLink>.
            </p>
          </GuideProse>

          <GuideChecklist
            id="communication-checklist"
            title="Communication continuity checklist"
            columns={1}
            items={[
              {
                id: "battery",
                label:
                  "Charge whenever safe: shelter, library, community center, courthouse, hospital, transit station, car charger, workplace, or trusted person.",
              },
              {
                id: "numbers",
                label:
                  "Write key numbers on paper: supervision, registering agency, lawyer, family helper, employer, pharmacy, doctor, shelter, 211, and emergency contacts.",
              },
              {
                id: "voicemail",
                label:
                  "Keep voicemail working if possible. Clear space for messages and write down callback numbers immediately.",
              },
              {
                id: "backup-contact",
                label:
                  "Choose a trusted callback contact if you cannot keep your phone charged or active. Tell agencies exactly how to reach you.",
              },
              {
                id: "email",
                label:
                  "Use email when available because it creates a timestamped record. If you cannot access email, keep paper notes.",
              },
              {
                id: "privacy",
                label:
                  "If calls are not private at a shelter, library, or public place, keep questions narrow and ask how to follow up securely.",
              },
            ]}
          />

          <OfflineOptions
            title="If internet, power, or privacy is limited"
            icon="📝"
            items={[
              "Use a notebook as your contact log: date, time, number called, person reached, message left, and next step.",
              "Ask a shelter, library, legal-aid office, social worker, or trusted helper about phone access, printing, charging, and faxing.",
              "Carry paper copies of the most important numbers and instructions because your phone may die or be lost.",
              "If you have written technology conditions, follow those conditions. If a substitute device, account, public computer, or third-party phone may be restricted, verify promptly and document why you used or avoided it during the emergency.",
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="documents-mail-address"
          number="8"
          title="ID, documents, mail, and address continuity"
          subtitle="Protect what helps you prove who you are, where you were, and how agencies can reach you."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Identification and paperwork can determine whether you can enter a
              shelter, fill a prescription, get a motel room, access benefits,
              talk to an agency, replace money, verify supervision conditions,
              or prove where you were during a crisis.
            </p>

            <p>
              Mail continuity matters too. You may need a trusted person,
              service provider, shelter, <ExternalGuideLink href={sourceLinks.uspsGeneralDelivery}>USPS General Delivery option</ExternalGuideLink>, PO box, or
              agency-approved mailing contact. But do not confuse mail with
              residence. Ask each agency what address it needs and what that
              address does legally.
            </p>
          </GuideProse>

          <DocumentPacket
            title="Emergency document grab list"
            intro={
              <span>
                Keep originals when safe. If originals are lost or unsafe to
                carry, keep photos or copies where allowed and keep a paper list
                of what must be replaced.
              </span>
            }
            categories={[
              {
                title: "Identity and basic access",
                items: [
                  "State ID or driver license",
                  "Social Security card or number record",
                  "Birth certificate",
                  "Passport or immigration documents if applicable",
                  "Insurance card, Medicaid/Medicare card, or benefit card",
                  "Emergency contacts and trusted helper information",
                ],
              },
              {
                title: "Legal and supervision records",
                items: [
                  "Registry paperwork and registering-agency contact information",
                  "Supervision conditions, officer name, office number, and reporting schedule",
                  "Court orders, release papers, treatment-program paperwork, and appointment notices",
                  "Attorney, public defender, legal-aid, or advocate contact information",
                ],
              },
              {
                title: "Housing, money, health, and transportation",
                items: [
                  "Lease, eviction notice, lockout notice, shelter papers, motel receipts, or landlord messages",
                  "Prescription bottles, medication list, pharmacy information, and medical-device information",
                  "Bank card, cash, benefit card, prepaid card, checkbook, or card-replacement information",
                  "Vehicle registration, insurance, title/lien information, parking records, and transit cards",
                ],
              },
            ]}
          />

          <VerifyBeforeActing
            title="Before relying on a mailing arrangement"
            whoToAsk={
              <span>
                The agency that needs to contact you, the registering agency,
                supervision if applicable, USPS or the mail provider, and legal
                help if the address will be used for legal notices.
              </span>
            }
            whatToAsk={
              <span>
                “Is this address only for mail, or are you treating it as my
                residence, temporary residence, service address, shelter address,
                or official contact address?”
              </span>
            }
            whatToSave={
              <span>
                The address used, purpose of the address, date provided, agency
                name, staff name, written confirmation, and any limits on using
                that address.
              </span>
            }
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="money-health-transportation"
          number="9"
          title="Money, medication, healthcare, and transportation"
          subtitle="Keep the systems that get you through tomorrow from collapsing tonight."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              This guide does not become a full benefits, banking, medical, or
              transportation manual. The crisis job is narrower: protect enough
              money, medication, health access, and mobility to survive the next
              few days and attend required appointments. If mental-health or substance-use treatment continuity is part of the crisis, <ExternalGuideLink href={sourceLinks.findTreatment}>FindTreatment.gov’s locator</ExternalGuideLink> is a direct national search tool.
            </p>
          </GuideProse>

          <GuideChecklist
            id="basic-systems-checklist"
            title="Basic systems checklist"
            columns={1}
            items={[
              {
                id: "money",
                label:
                  "Protect wallet, cards, cash, benefit cards, prepaid phone funds, and account access. If cards are stolen, ask the issuer about freezing or replacing them.",
              },
              {
                id: "expenses",
                label:
                  "Before spending all available cash on one motel night, check whether shelter, 211, emergency assistance, family help, disaster housing, or a reentry provider can reduce the immediate cost.",
              },
              {
                id: "receipts",
                label:
                  "Save receipts for motel, gas, food, transit, prescriptions, phone service, storage, repairs, towing, and emergency supplies.",
              },
              {
                id: "medication",
                label:
                  "Keep prescription bottles, medication list, pharmacy name, prescriber name, insurance card, and refill dates together.",
              },
              {
                id: "healthcare",
                label:
                  "If medication, medical devices, mobility aids, mental-health treatment, or treatment-program attendance are interrupted, contact the pharmacy, provider, clinic, shelter social worker, or supervision/treatment contact as soon as possible.",
              },
              {
                id: "transportation",
                label:
                  "Protect access to required appointments, shelter, pharmacy, food, work, charging, and legal help. Check transit, gas, rides, shelter transport, disaster routes, and vehicle safety.",
              },
              {
                id: "vehicle-compound-risk",
                label:
                  "If your car is also your shelter or storage, protect it from towing, impoundment, dead battery, fuel loss, parking tickets, and unsafe parking when possible.",
              },
            ]}
          />

          <GuideCallout
            tone="reentry"
            icon="🧩"
            title="Benefits and assistance belong here only as crisis navigation"
          >
            <p>
              SNAP, Medicaid, SSI/SSDI, unemployment, HUD programs, rental
              assistance, and disaster aid may matter. This guide should help you
              identify what to gather and who to contact first. Deeper
              eligibility, applications, appeals, and long-term administration
              belong in the future Benefits & Basic Administration guide. Longer-term household recovery can also use SOLAR’s <InternalGuideLink to="/resources/financial-planning-guide">Financial Planning Guide</InternalGuideLink>.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="family-hosts-pets"
          number="10"
          title="Family, temporary hosts, household members, and animals"
          subtitle="A well-meant offer can help, but it still needs safety and rule checks."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Housing crises often involve other people: a partner, child,
              roommate, elderly parent, disabled household member, family host,
              friend, landlord, social worker, shelter staff, or pet caretaker.
              Do not assume the only question is whether someone is kind enough
              to offer space. The SOLAR <InternalGuideLink to="/resources/family-support-guide">Family & Allies Guide</InternalGuideLink> is the deeper resource for supporters helping someone through a crisis.
            </p>

            <p>
              A couch, spare room, motel room, or family home may create issues
              involving residence approval, child contact, proximity, local law,
              supervision, registry reporting, household consent, privacy, or
              search conditions. Verify before settling in if there is time to do
              so safely. If police or CPS become involved, switch to the SOLAR <InternalGuideLink to="/resources/police-registry-cps-encounters">Police, Registry & CPS Encounters</InternalGuideLink> guide.
            </p>
          </GuideProse>

          <RoleGuidanceGrid
            title="Different people need different instructions"
            roles={[
              {
                role: "Person who lost housing",
                icon: "🧭",
                guidance:
                  "Ask whether the temporary location creates registry, supervision, child-contact, residence, travel, or local-law issues. Save the answer and keep your own notes.",
              },
              {
                role: "Temporary host or family member",
                icon: "🏠",
                guidance:
                  "Do not promise that the arrangement is legally safe until the affected person has checked supervision, registry, and local restrictions. Avoid giving legal answers you cannot verify.",
              },
              {
                role: "Household with children or dependents",
                icon: "👪",
                guidance:
                  "Verify child-contact conditions, household rules, court orders, supervision instructions, and any CPS or family-court implications before assuming the arrangement works.",
              },
              {
                role: "Supporter helping from a distance",
                icon: "☎️",
                guidance:
                  "Help with calls, printing, charging, transportation, receipts, and notes. Do not pressure the person to hide information, ignore supervision, or guess at registry rules.",
              },
            ]}
          />

          <GuideChecklist
            id="temporary-host-checklist"
            title="Temporary host checklist"
            columns={1}
            items={[
              {
                id: "who-lives-there",
                label:
                  "Who lives at the location, including children, dependent adults, roommates, visitors, or people under court orders?",
              },
              {
                id: "rules",
                label:
                  "Could supervision, registry, residence restrictions, child-contact rules, local ordinances, landlord rules, or lease terms affect the stay?",
              },
              {
                id: "duration",
                label:
                  "What is the expected start date, end date, sleeping space, mail plan, transportation plan, and backup plan?",
              },
              {
                id: "privacy",
                label:
                  "Will agency calls, legal calls, medication, documents, and personal information be private enough?",
              },
              {
                id: "animals",
                label:
                  "If pets or service animals are involved, ask shelters, motels, hosts, transportation providers, and disaster programs about rules before relying on the location.",
              },
            ]}
          />

          <GuideCallout
            tone="family"
            icon="🐾"
            title="Pets and service animals belong in the crisis plan"
          >
            <p>
              In disaster shelters serving disaster survivors, <ExternalGuideLink href={sourceLinks.hhsEmergencyPreparedness}>HHS civil-rights guidance on emergency preparedness</ExternalGuideLink> requires shelter providers to allow a person with a
              disability to be accompanied by a service animal, and a service
              animal is not treated as a pet. Other settings — motels, private
              hosts, transportation, non-disaster shelters, and temporary lodging
              programs — may involve different rules or additional verification.
              Ask directly and save the answer.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="first-week-plan"
          number="11"
          title="First 6 hours, 24 hours, 72 hours, and 7 days"
          subtitle="Use this as a printable crisis ladder. Legal deadlines may be faster."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              This timeline is a planning aid, not a legal deadline. Registry,
              supervision, court, treatment, shelter, or disaster rules may
              require faster action. When a real legal deadline exists, follow
              the legal deadline. Once the immediate crisis stabilizes, use SOLAR’s <InternalGuideLink to="/resources/housing-search-guide">Housing Search Guide</InternalGuideLink> for longer-term housing and the <InternalGuideLink to="/resources/interstate-moving-guide">Interstate Moving Guide</InternalGuideLink> if temporary displacement becomes a state or jurisdictional relocation.
            </p>
          </GuideProse>

          <TimelineGuidanceGrid
            title="Crisis stabilization ladder"
            stages={[
              {
                stage: "First 6 hours",
                icon: "⏱️",
                whatChanges:
                  "The main risk is immediate collapse: no safe place, no medication, no phone, no way to contact required people, and no proof of what happened.",
                whatToDo:
                  "Get physically safe. Identify tonight’s sleeping option. Gather ID, medication, phone, charger, wallet, keys, and legal papers. Contact supervision if needed. Start a notes page.",
              },
              {
                stage: "First 24 hours",
                icon: "🌙",
                whatChanges:
                  "Temporary choices may start creating registry, supervision, work, medication, transportation, shelter, or family consequences.",
                whatToDo:
                  "Verify the temporary location. Call shelter or lodging before travel. Preserve receipts and call logs. Tell agencies how to reach you. Ask about mail, medication, and transportation.",
              },
              {
                stage: "By 72 hours",
                icon: "📌",
                whatChanges:
                  "The crisis shifts from one night to a temporary system. Missing documents, mail, refills, appointments, and proof gaps become harder to fix.",
                whatToDo:
                  "Build the documentation packet. Arrange mail or callback contact. Replace essential documents if lost. Contact legal aid, 211, reentry services, or disaster aid. Make a backup sleeping plan.",
              },
              {
                stage: "First week",
                icon: "🗓️",
                whatChanges:
                  "The focus moves toward stable housing, health continuity, benefits navigation, property storage, transportation, and agency follow-up.",
                whatToDo:
                  "Begin longer housing search. Follow up with registry and supervision if needed. Review notes for missing proof. Keep receipts. Recheck whether the temporary location is still lawful and workable.",
              },
            ]}
          />

          <DoDontJudgment
            dos={[
              <span key="sleep">
                Solve physical safety, sleep, medication, phone, and reachability
                first.
              </span>,
              <span key="verify">
                Verify legal consequences before relying on a shelter, couch,
                motel, vehicle, campground, or cross-jurisdiction move.
              </span>,
              <span key="document">
                Document names, dates, instructions, attempted contacts,
                receipts, and proof while memory is fresh.
              </span>,
            ]}
            donts={[
              <span key="guess">
                Do not guess that “temporary” means “not reportable” or
                “automatically approved.”
              </span>,
              <span key="overspend">
                Do not spend your last money without checking shelter, 211,
                disaster, reentry, or legal-aid options when available.
              </span>,
              <span key="ignore">
                Do not ignore supervision, registry, court, treatment, or
                child-contact instructions because the crisis feels unfair or
                overwhelming.
              </span>,
            ]}
            judgment={[
              <span key="wait">
                Long-term benefits, document replacement, storage, and housing
                applications may be urgent soon, but they may not be the first
                problem to solve tonight.
              </span>,
              <span key="help">
                A trusted helper can make calls, print documents, charge a
                phone, or organize receipts, but legal decisions still need
                qualified guidance.
              </span>,
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="documentation-packet"
          number="12"
          title="Crisis documentation packet"
          subtitle="Create a record of what happened, what you did, and what still needs an answer."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Documentation is not busywork. It can help you explain
              displacement, preserve proof of attempted contact, request help,
              replace records, show where you stayed, and remember instructions
              when stress makes memory unreliable.
            </p>

            <p>
              This packet proves what happened and what you tried to do. It does
              not automatically prove that every legal obligation was satisfied.
            </p>
          </GuideProse>

          <DocumentPacket
            title="Housing crisis proof packet"
            intro={
              <span>
                Use paper, photos, screenshots, envelopes, folders, or a
                notebook. The system only works if you can find the proof later.
              </span>
            }
            categories={[
              {
                title: "Crisis basics",
                items: [
                  "Date and time housing became unavailable",
                  "Reason housing became unavailable",
                  "Last stable residence",
                  "People present when the crisis started",
                  "Property left behind and how to retrieve it if safe",
                ],
              },
              {
                title: "Temporary-location log",
                items: [
                  "Date and time arrived",
                  "Sleeping location or geographic description",
                  "City, county, state, or jurisdiction",
                  "Who approved, denied, or gave instructions",
                  "Proof kept: receipt, intake record, message, photo, call log, or written note",
                ],
              },
              {
                title: "Agency contact-attempt log",
                items: [
                  "Agency or office contacted",
                  "Phone number, email, website, or physical office visited",
                  "Date and time of attempt",
                  "Person spoken to or message left",
                  "Instructions given, closure notice, confirmation number, or next appointment",
                ],
              },
              {
                title: "Disaster, shelter, health, money, and transportation proof",
                items: [
                  "Evacuation orders, emergency alerts, fire reports, damage photos, utility notices, or closure notices",
                  "Shelter papers, motel receipts, campground receipts, host messages, or denial records",
                  "Medication records, pharmacy contacts, clinic messages, and treatment-program contacts",
                  "Bank, benefit-card, card-replacement, cash, fuel, transit, towing, storage, or repair receipts",
                ],
              },
            ]}
          />

          <OfflineOptions
            title="If you only have paper"
            icon="✍️"
            items={[
              "Use one envelope for receipts and one notebook page for calls.",
              "Write the same five things every time: date, time, place, person, instruction.",
              "Ask a shelter worker, librarian, social worker, advocate, or trusted person to photocopy or photograph key documents.",
              "Keep one small card with emergency contacts, medications, supervision, registry office, lawyer, pharmacy, and shelter numbers.",
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes-escalation"
          number="13"
          title="Common mistakes and when to get help now"
          subtitle="Avoid panic moves, and escalate when the risk is bigger than a checklist."
        />

        <GuideSectionCard>
          <CommonMistakes
            title="Common crisis mistakes"
            mistakes={[
              {
                mistake:
                  "Assuming a temporary place cannot create legal consequences.",
                whyItMatters:
                  "Some jurisdictions and supervision conditions treat temporary locations, shelters, vehicles, motels, or no-fixed-residence situations as legally important.",
                betterMove:
                  "Verify before relying on the location and save the answer.",
              },
              {
                mistake:
                  "Treating registry and supervision as one notification.",
                whyItMatters:
                  "One office may not control the other rulebook. A registry update may not satisfy supervision, and supervision approval may not satisfy registry reporting.",
                betterMove:
                  "Make separate contacts or document separate attempts when both systems may apply.",
              },
              {
                mistake:
                  "Losing proof because everything is on a dying phone.",
                whyItMatters:
                  "Screenshots, call logs, receipts, and messages can disappear when a phone dies, breaks, is lost, or is stolen.",
                betterMove:
                  "Use paper backup, ask a trusted helper to save copies, and write down the essentials immediately.",
              },
              {
                mistake:
                  "Spending all available money on the first option.",
                whyItMatters:
                  "One motel night can leave no money for food, fuel, phone service, medication, storage, or transportation.",
                betterMove:
                  "Check 211, shelter systems, local emergency assistance, reentry providers, disaster resources, or family support before using all remaining funds when possible.",
              },
            ]}
          />

          <RedFlagGreenFlag
            red={
              <ul className="list-disc pl-6 space-y-2">
                <li>No safe or lawful place to sleep tonight.</li>
                <li>Threat of arrest, violation, warrant, or missed reporting deadline.</li>
                <li>Conflicting instructions from registry, supervision, shelter, police, court, or treatment.</li>
                <li>Child, dependent adult, domestic-violence, CPS, or family-court risk.</li>
                <li>Lost medication, stolen ID, vehicle impoundment, or inability to reach required offices.</li>
                <li>Disaster, office closure, power outage, or transportation failure has made ordinary compliance impossible.</li>
              </ul>
            }
            green={
              <ul className="list-disc pl-6 space-y-2">
                <li>You have a safe sleeping plan for tonight and a backup plan.</li>
                <li>You know who controls registry, supervision, shelter, and local-rule questions.</li>
                <li>You have names, dates, phone numbers, receipts, messages, closure notices, or other proof.</li>
                <li>You have a way to receive calls, texts, email, mail, or third-party messages.</li>
                <li>You know what must happen tomorrow and what can wait a few days.</li>
              </ul>
            }
          />

          <GuideCallout
            tone="urgent"
            icon="🚩"
            title="Get help quickly when the checklist is not enough"
          >
            <p>
              Contact the right kind of help when there is no safe place to
              sleep, a child or dependent is at risk, a shelter denies access, a
              deadline may be missed, a vehicle is impounded, a medication is
              unavailable, instructions conflict, <InternalGuideLink to="/resources/police-registry-cps-encounters">police or CPS are involved</InternalGuideLink>, or
              disaster conditions make ordinary reporting impossible. For civil legal help, use <ExternalGuideLink href={sourceLinks.legalAid}>USA.gov’s legal-aid finder</ExternalGuideLink> or the <ExternalGuideLink href={sourceLinks.lscLegalAid}>Legal Services Corporation finder</ExternalGuideLink>.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="14"
          title="Resources and next steps"
          subtitle="Use national resources for triage, then verify legal details locally."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="National crisis and verification resources"
            description={
              <span>
                These links help with resource navigation and source checking.
                They do not guarantee shelter eligibility or answer
                state-specific registry or supervision questions.
              </span>
            }
            resources={[
              {
                label: "HUD Find Shelter",
                href: sourceLinks.hudFindShelter,
                badge: "Official",
                description:
                  "Search for shelter, food, health care, clothing, and homeless-assistance resources by location.",
              },
              {
                label: "USAGov disaster housing and shelter",
                href: sourceLinks.usaGovDisasterHousing,
                badge: "Official",
                description:
                  "Federal overview of finding shelter and temporary housing after disasters.",
              },
              {
                label: "211 local help finder",
                href: sourceLinks.unitedWay211,
                badge: "Referral",
                description:
                  "Find a local 211 for housing, food, transportation, health care, disaster recovery, and other basic needs.",
                phone: "Dial 211 where available",
              },
              {
                label: "USPS location services and General Delivery glossary",
                href: sourceLinks.uspsGeneralDelivery,
                badge: "Official",
                description:
                  "Starting point for mail-location services. Verify locally before relying on any mail arrangement.",
              },
              {
                label: "SMART Office SORNA current law",
                href: sourceLinks.smartSornaCurrentLaw,
                badge: "Federal",
                description:
                  "Federal baseline registry-law materials. State and local rules still control many practical details.",
              },
              {
                label: "SMART Office residence, homeless, and transient guidance",
                href: sourceLinks.smartResidenceHomelessTransient,
                badge: "Federal",
                description:
                  "Direct SMART implementation guidance on residence determination, homeless registrants, and transient workers under SORNA.",
              },
              {
                label: "NSOPW all registries",
                href: sourceLinks.nsopwAllRegistries,
                badge: "Official",
                description:
                  "Directory of state, territory, tribal, and federal registry links for source checking.",
              },
              {
                label: "U.S. Courts supervision conditions overview",
                href: sourceLinks.usCourtsSupervision,
                badge: "Federal",
                description:
                  "Federal overview of probation and supervised-release conditions; individual orders and local practice still matter.",
              },
              {
                label: "FindTreatment.gov locator",
                href: sourceLinks.findTreatment,
                badge: "Health",
                description:
                  "Direct treatment locator for mental-health and substance-use services. Use for continuity, not emergency medical advice.",
              },
              {
                label: "USA.gov legal aid finder",
                href: sourceLinks.legalAid,
                badge: "Legal help",
                description:
                  "Government starting point for free or low-cost legal-help resources.",
              },
              {
                label: "Legal Services Corporation: find legal aid",
                href: sourceLinks.lscLegalAid,
                badge: "Legal help",
                description:
                  "Location-based finder for LSC-funded civil legal-aid organizations.",
              },
            ]}
          />

          <RelatedGuides
            title="Related SOLAR guides"
            guides={[
              {
                title: "Registry Compliance & Verification Survival Guide",
                description:
                  "Use this for detailed reporting duties, receipts, attempted compliance, office closures, missed deadlines, and disputed instructions.",
                to: "/resources/registry-compliance-verification-guide",
              },
              {
                title: "Police, Registry & CPS Encounters",
                description:
                  "Use this if police, registry staff, CPS, probation, parole, or a mixed-agency team contacts you during the crisis.",
                to: "/resources/police-registry-cps-encounters",
              },
              {
                title: "Housing Search Guide",
                description:
                  "Use this after immediate stabilization when you are ready to look for longer-term housing.",
                to: "/resources/housing-search-guide",
              },
              {
                title: "Tenant Rights Survival Guide",
                description:
                  "Use this for eviction notices, lockouts, leases, landlord entry, repairs, and tenant-law questions.",
                to: "/resources/tenant-rights",
              },
              {
                title: "Supervision Conditions Survival Guide",
                description:
                  "Use this for probation, parole, supervised release, residence approval, travel, curfew, treatment, and violation-risk questions.",
                to: "/resources/supervision-conditions-guide",
              },
              {
                title: "Interstate Moving Guide",
                description:
                  "Use this if emergency displacement becomes state or jurisdictional relocation rather than a short-term temporary stay.",
                to: "/resources/interstate-moving-guide",
              },
              {
                title: "Financial Planning Guide",
                description:
                  "Use this after the immediate crisis for budgeting, emergency reserves, debt, insurance, and longer-term financial recovery.",
                to: "/resources/financial-planning-guide",
              },
              {
                title: "Family & Allies Guide",
                description:
                  "Use this when family members, partners, hosts, or supporters need practical ways to help without making the situation worse.",
                to: "/resources/family-support-guide",
              },
            ]}
          />

          <SourceList
            sources={[
              {
                label: "HUD Find Shelter",
                href: sourceLinks.hudFindShelter,
                description:
                  "Supports national referral language for shelter, food, health care, clothing, and homeless-assistance lookup.",
              },
              {
                label: "USAGov — How to find housing after a disaster",
                href: sourceLinks.usaGovDisasterHousing,
                description:
                  "Supports disaster shelter, FEMA shelter search, Red Cross shelter, 211, and transitional sheltering references.",
              },
              {
                label: "211 local help finder",
                href: sourceLinks.unitedWay211,
                description:
                  "Supports local-resource referral language for housing, food, transportation, health care, and crisis needs.",
              },
              {
                label: "USPS location glossary",
                href: sourceLinks.uspsGeneralDelivery,
                description:
                  "Supports mail-continuity issue spotting; does not answer registry residence questions.",
              },
              {
                label: "SMART Office — SORNA current law",
                href: sourceLinks.smartSornaCurrentLaw,
                description:
                  "Supports the national-versus-state registry boundary and federal baseline framing.",
              },
              {
                label:
                  "SMART Office — Determination of Residence, Homeless Offenders and Transient Workers",
                href: sourceLinks.smartResidenceHomelessTransient,
                description:
                  "Supports Section 4’s direct homeless/transient registration framing under SORNA while preserving the state/local implementation boundary.",
              },
              {
                label: "NSOPW — All registries",
                href: sourceLinks.nsopwAllRegistries,
                description:
                  "Supports state, territory, and tribal registry source-checking pathways.",
              },
              {
                label:
                  "U.S. Courts — Overview of probation and supervised release conditions",
                href: sourceLinks.usCourtsSupervision,
                description:
                  "Supports the distinction between registry duties and supervision conditions.",
              },
              {
                label: "HHS Emergency Preparedness",
                href: sourceLinks.hhsEmergencyPreparedness,
                description:
                  "Supports accessibility, emergency communication, disability, service-animal, and whole-community disaster planning language.",
              },
              {
                label: "ABA Disaster Legal Services",
                href: sourceLinks.abaDisasterLegalServices,
                description:
                  "Supports disaster legal-help routing where disaster legal services are activated.",
              },
              {
                label: "Legal Services Corporation — I Need Legal Help",
                href: sourceLinks.lscLegalAid,
                description:
                  "Supports direct location-based civil legal-aid routing.",
              },
            ]}
            note="National sources support crisis navigation, disaster shelter lookup, local-resource referrals, mail issue-spotting, and verification pathways. State, local, agency, court, and supervision sources are still required before publishing any jurisdiction-specific rule."
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}
