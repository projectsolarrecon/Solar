import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";
import {
  GuideSectionHeader,
  GuideSectionCard,
  GuideCallout,
  GuideIntro,
  SoftDivider,
  GuideChecklist,
  ScriptBox,
  OfflineOptions,
  VerifyBeforeActing,
  CommonMistakes,
  OverviewCards,
  RelatedGuides,
  SourceList,
  TimelineGuidanceGrid,
} from "../../components/solar";

const sourceLinks = {
  bopCommunications: "https://www.bop.gov/inmates/communications.jsp",
  bopTrulincs: "https://www.bop.gov/inmates/trulincs.jsp",
  bopVisiting: "https://www.bop.gov/inmates/visiting.jsp",
  bopLocator: "https://www.bop.gov/inmateloc/",
  bopLocations: "https://www.bop.gov/locations/",
  bopCorrespondencePolicy: "https://www.bop.gov/policy/progstat/5265_014.pdf",
  bopTrulincsPolicy: "https://www.bop.gov/policy/progstat/5265_013.pdf",
  bopTelephonePolicy: "https://www.bop.gov/policy/progstat/5264_008.pdf",
  bopVisitingPolicy: "https://www.bop.gov/policy/progstat/5267_09.pdf",
  bopSpecialMailNotice: "https://www.bop.gov/policy/forms/BP_A0493.pdf",
  bopVisitorForm: "https://www.bop.gov/policy/forms/BP_A0629.pdf",
  usaGovPrisonerRecords: "https://www.usa.gov/prisoner-records",
};

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Prison Communication, Mail, Visits & Monitoring | The SOLAR Project"
        description="A calm, practical SOLAR guide for families and supporters navigating prison mail, calls, messaging, visits, monitoring, legal mail, and facility-specific communication rules."
        keywords="prison communication, prison mail, prison visits, prison phone calls, TRULINCS, CorrLinks, legal mail, prison monitoring, incarcerated loved one, SOLAR Project"
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
            Prison Communication, Mail, Visits & Monitoring
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical guide for families, loved ones, and supporters trying to
            stay connected during incarceration without creating preventable
            risk, confusion, or privacy problems.
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

        <GuideIntro title="Start Here" icon="🧭">
          <p>
            Communication during incarceration is one of the most confusing and
            emotionally loaded parts of the process. Calls may not go through.
            Messages may disappear. Mail may take weeks. Visits may be delayed,
            cancelled, or denied for reasons that are not explained clearly.
          </p>

          <p>
            What feels personal is often procedural. Most prison communication
            problems are driven by facility systems, transfer delays, monitoring
            rules, vendor accounts, staffing limits, and security policies — not
            by the strength of the relationship.
          </p>

          <GuideCallout
            tone="privacy"
            icon="🔎"
            title="Start with this assumption"
          >
            <p>
              Assume ordinary prison communication is monitored, recorded,
              screened, delayed, or reviewable unless a qualified attorney or
              official written policy tells you otherwise. That includes many
              phone calls, electronic messages, video visits, and general mail.
            </p>
          </GuideCallout>
        </GuideIntro>

        <OverviewCards
          columns={4}
          cards={[
            {
              eyebrow: "Channel 1",
              title: "Mail",
              icon: "✉️",
              tone: "info",
              description:
                "Letters, cards, photos, publications, packages, and rejected-mail notices all depend on facility rules.",
            },
            {
              eyebrow: "Channel 2",
              title: "Calls & messages",
              icon: "☎️",
              tone: "privacy",
              description:
                "Phone calls, electronic messaging, and video systems are usually monitored and may require approved contacts or vendor accounts.",
            },
            {
              eyebrow: "Channel 3",
              title: "Visits",
              icon: "🪪",
              tone: "family",
              description:
                "Visits usually require approval, ID, scheduling, dress-code compliance, and facility-specific confirmation.",
            },
            {
              eyebrow: "Channel 4",
              title: "Legal mail",
              icon: "⚖️",
              tone: "legal",
              description:
                "Attorney and legal mail may receive special handling, but only if the correct procedure, markings, and sender information are used.",
            },
          ]}
        />

        <GuideSectionHeader
          id="stages"
          number="1"
          title="Communication changes by stage"
          subtitle="A silence that feels alarming may mean transfer, intake, classification, lockdown, or account delay."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="What changes over time"
            stages={[
              {
                stage: "Pretrial or local jail",
                icon: "🏛️",
                whatChanges:
                  "This is often the most restrictive and unpredictable phase. The person may be held by one authority while housed in another facility, and the jail’s communication system may be outdated, expensive, inconsistent, or limited.",
                whatToDo:
                  "Expect short calls, delayed mail, limited messaging, and unclear answers. Focus on steady support rather than high-volume contact. Ask the jail or detention facility what communication systems are available and what rules apply right now.",
              },
              {
                stage: "Transfer or holdover",
                icon: "🚌",
                whatChanges:
                  "Communication may disappear entirely during movement between facilities. The person may not have access to phone, messaging, commissary, property, or a stable mailing address.",
                whatToDo:
                  "Do not assume silence means rejection, danger, or punishment. Check the official locator when available, save the last known location, and wait for communication to reestablish before flooding facilities with calls.",
              },
              {
                stage: "Intake and classification",
                icon: "📋",
                whatChanges:
                  "The facility may be setting up housing, contact lists, phone accounts, visiting lists, medical screening, and security classification. Rules may not feel settled yet.",
                whatToDo:
                  "Ask for the facility’s current mail, phone, messaging, and visiting instructions. Save the person’s register number or facility ID, the correct mailing format, and any account setup steps.",
              },
              {
                stage: "Routine facility placement",
                icon: "🏢",
                whatChanges:
                  "Communication may become more predictable, but not private. Mail may flow more consistently, calls may follow schedules, and electronic messaging may become available in systems that use it.",
                whatToDo:
                  "Build calm routines. Keep messages supportive and low-risk. Avoid case facts, emotionally charged rehashing, coded language, or anything that could be misunderstood when reviewed later.",
              },
              {
                stage: "Discipline, lockdown, or investigation",
                icon: "🚧",
                whatChanges:
                  "Access to calls, visits, messaging, commissary, or movement may be limited with little warning. The family may receive incomplete information.",
                whatToDo:
                  "Stay steady. Document what changed, when you noticed it, who you contacted, and what they said. Avoid escalating language with staff or sending messages that sound accusatory or coded.",
              },
              {
                stage: "Pre-release and reentry planning",
                icon: "🌤️",
                whatChanges:
                  "Communication may shift toward release planning, housing, transportation, supervision, registry obligations, treatment, and family boundaries.",
                whatToDo:
                  "Use communication to plan carefully: where the person is going, who is picking them up, what rules apply, and what needs to be verified before release day.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🧩" title="What families often misunderstand">
            <p>
              Each stage can feel like a completely different system. Access,
              predictability, and response time may change sharply even when the
              relationship has not changed at all.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="verify"
          number="2"
          title="Verify before acting"
          subtitle="Use the facility’s current rule before relying on memory, another prison’s policy, or a social media answer."
        />

        <GuideSectionCard>
          <VerifyBeforeActing
            whoToAsk={
              <span>
                The facility mailroom, visiting office, unit team, records
                office, counselor, case manager, or the person’s attorney —
                depending on the question. For legal-mail questions, ask the
                attorney and the facility’s written legal or special mail policy.
              </span>
            }
            whatToAsk={
              <span>
                Ask the narrow question tied to the action you are about to take:
                “Can I send this item?”, “What is the exact mailing format?”,
                “Am I approved to visit?”, “Are children allowed under this
                order or facility rule?”, “Will this be treated as legal mail?”,
                or “Which vendor/account system does this facility use?”
              </span>
            }
            whatToSave={
              <span>
                Save the date, staff name or department, phone number, written
                policy, rejection notice, confirmation number, account receipt,
                visitor approval, and any written instruction you receive.
              </span>
            }
          />

          <GuideCallout tone="legal" icon="⚖️" title="Sex-offense-specific caution">
            <p>
              Written communication rules may look the same for everyone, but
              real-world review can be more conservative when the case involves
              a sex offense. Court orders, no-contact orders, victim-related
              restrictions, treatment rules, supervision conditions, minor-contact
              restrictions, and facility policy can all change what is allowed or
              wise.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="mail"
          number="3"
          title="Mail, publications, and rejected mail"
          subtitle="Mail can be steady and meaningful, but it is rule-bound and often inspected."
        />

        <GuideSectionCard>
          <p className="text-slate-700 leading-relaxed">
            Mail is often the most durable form of connection because it gives
            the incarcerated person something they can reread. It can also be
            slow, screened, rejected, copied, scanned, returned, or delayed. A
            small mistake in format or content can create weeks of confusion.
          </p>

          <GuideChecklist
            id="mail-prep"
            title="Before sending mail"
            columns={1}
            items={[
              {
                id: "correct-address",
                label:
                  "Confirm the person’s full committed name, register number or facility ID, housing unit if required, and the exact facility mailing address.",
              },
              {
                id: "facility-rules",
                label:
                  "Check the facility’s current rules for envelopes, paper, cards, photos, stickers, drawings, printouts, books, magazines, publications, and packages.",
              },
              {
                id: "no-extra-items",
                label:
                  "Do not include stamps, cash, laminated items, Polaroids, glitter, perfume, labels, unknown printouts, or extra objects unless the written rule clearly allows them.",
              },
              {
                id: "publication-policy",
                label:
                  "For books or magazines, verify whether they must come directly from a publisher, bookstore, approved vendor, or facility-approved source.",
              },
              {
                id: "save-copy",
                label:
                  "For important letters, keep a photo or copy of what you sent and note the date mailed.",
              },
              {
                id: "rejection-notice",
                label:
                  "If mail is rejected, save the notice and ask what rule was applied before sending the same item again.",
              },
            ]}
          />

          <GuideCallout tone="warning" icon="⚠️" title="Rejected mail is not always personal">
            <p>
              A rejected letter or delayed package may reflect a formatting
              mistake, a changed mail policy, a facility vendor rule, staff
              backlog, a transfer, or a content concern. Treat it as something
              to document and clarify, not as proof that the relationship is
              failing.
            </p>
          </GuideCallout>

          <SoftDivider />

          <p className="text-slate-700 leading-relaxed">
            Legal mail is different from ordinary mail, but it is not magic. It
            usually requires clear attorney identification, correct markings, and
            facility-specific handling. If legal mail is not marked or handled
            correctly, it may be treated as general correspondence.
          </p>

          <GuideCallout tone="legal" icon="📬" title="Legal mail needs correct handling">
            <p>
              Do not put legal strategy, case facts, admissions, witness issues,
              or sensitive attorney communications in ordinary mail or ordinary
              electronic messages. Ask the attorney how legal communication
              should happen and verify the facility’s special-mail procedure.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="calls-messages-video"
          number="4"
          title="Calls, messaging, video, and monitoring"
          subtitle="Connection matters, but monitored systems reward calm, clear, low-risk communication."
        />

        <GuideSectionCard>
          <p className="text-slate-700 leading-relaxed">
            Phone calls, electronic messaging, tablets, and video visits can help
            families stay connected, but they are built inside correctional
            systems. They may require approved contacts, account funding, vendor
            registration, identity checks, facility approval, message screening,
            time limits, and behavior rules.
          </p>

          <GuideCallout tone="privacy" icon="🎙️" title="Assume review is possible">
            <p>
              People often think monitoring only matters if someone is doing
              something obviously wrong. In practice, tone, context, jokes,
              frustration, coded language, relationship conflict, and emotional
              rehashing can all be misunderstood later.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="calls-messages-video"
            title="Before relying on calls, messages, or video"
            columns={1}
            items={[
              {
                id: "approved-contact",
                label:
                  "Confirm whether the incarcerated person must add you to an approved contact list before calls, messages, or video can work.",
              },
              {
                id: "vendor",
                label:
                  "Verify the correct vendor or platform for that specific facility; do not assume the same provider is used everywhere.",
              },
              {
                id: "costs-limits",
                label:
                  "Check costs, time limits, funding rules, blocked-number rules, refund policies, and whether messages can be delayed or rejected.",
              },
              {
                id: "attorney-separate",
                label:
                  "Keep attorney communication separate from ordinary family calls or messages unless the attorney specifically tells you otherwise.",
              },
              {
                id: "topic-boundaries",
                label:
                  "Avoid discussing facts, allegations, witnesses, victims, minors, strategy, discipline, facility investigations, or anything that sounds like pressure or coaching.",
              },
              {
                id: "supportive-topics",
                label:
                  "Use ordinary communication for support, stability, family updates, future goals, health, routines, and practical planning.",
              },
            ]}
          />

          <GuideCallout tone="family" icon="🤝" title="Support does not require risky details">
            <p>
              You do not have to choose between silence and risk. You can say,
              “I care about you,” “I am keeping things steady here,” “Let’s talk
              about daily life and next steps,” or “Please save legal details for
              your attorney.”
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="visits"
          number="5"
          title="Visits and family planning"
          subtitle="Visits can be meaningful, but they require preparation and facility-specific confirmation."
        />

        <GuideSectionCard>
          <p className="text-slate-700 leading-relaxed">
            Visiting rules vary by facility, custody level, housing unit,
            schedule, staffing, discipline status, and security concerns. Even
            when a general visiting policy exists, the local institution may have
            its own visiting hours, dress code, approval process, visitor limits,
            child visitor rules, and cancellation practices.
          </p>

          <GuideChecklist
            id="visit-prep"
            title="Before planning a visit"
            columns={1}
            items={[
              {
                id: "approved-list",
                label:
                  "Confirm that you are on the approved visiting list and that approval is active before buying tickets or arranging transportation.",
              },
              {
                id: "schedule",
                label:
                  "Check visiting days, hours, arrival rules, cancellation notices, holiday schedules, lockdown status, and whether appointments are required.",
              },
              {
                id: "id",
                label:
                  "Bring the exact identification the facility requires. If your name has changed, ask what documents you need.",
              },
              {
                id: "dress-code",
                label:
                  "Read the dress code carefully. Bring a backup outfit if travel distance, weather, or cost makes denial especially hard.",
              },
              {
                id: "children",
                label:
                  "Verify child and minor-visitor rules before bringing or discussing children, especially when any court order, supervision rule, treatment rule, victim-related restriction, or facility rule may apply.",
              },
              {
                id: "money-property",
                label:
                  "Check what you may bring inside, including keys, phones, money, medication, baby supplies, paperwork, and religious or medical items.",
              },
            ]}
          />

          <GuideCallout tone="warning" icon="🧒" title="Communication involving children is sensitive">
            <p>
              Letters mentioning children, calls involving children, photos of
              children, and visit requests involving minors may be reviewed more
              carefully in sex-offense-related cases. Well-intentioned family
              contact can still create problems if it conflicts with an order,
              rule, treatment instruction, or facility policy.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="scripts-offline"
          number="6"
          title="When communication is blocked, delayed, or confusing"
          subtitle="Use calm scripts, written notes, and offline backups instead of guessing."
        />

        <GuideSectionCard>
          <ScriptBox
            title="Script: calling the facility about communication rules"
            tone="neutral"
            context={
              <span>
                Use this when you need the current mail, call, messaging, or
                visiting rule and do not know which office handles it.
              </span>
            }
            script={`Hello, my name is [Name]. I am trying to understand the current communication rules for [Person's full name and register/facility number, if known].

Can you tell me which office handles [mail / phone accounts / electronic messaging / visiting approval]?

I am taking notes. Could you please tell me:
1. The correct rule or policy I should follow;
2. Whether there is a form, account, approval list, or deadline;
3. Where I can find the rule in writing; and
4. Your name or department so I can write down who I spoke with?

Thank you. I am trying to follow the facility rule correctly.`}
          />

          <div className="mt-6">
            <ScriptBox
              title="Script: asking about rejected mail"
              tone="warning"
              context={
                <span>
                  Use this when a letter, photo, book, card, or package was
                  returned, denied, or never delivered.
                </span>
              }
              script={`Hello, my name is [Name]. I mailed [type of item] to [Person's name and number] on [date]. It was [returned / rejected / not received], and I am trying to understand what rule applied.

Can you tell me:
1. Whether the mailroom has a record of the item;
2. The specific reason it was rejected or delayed;
3. Whether I should send it differently; and
4. Whether there is a written policy or rejection notice I can rely on?

I am not trying to argue. I just want to avoid repeating the same mistake.`}
            />
          </div>

          <div className="mt-6">
            <OfflineOptions
              title="If internet access, printing, or privacy is limited"
              icon="📝"
              note={
                <span>
                  Many families are phone-only, and many incarcerated people
                  cannot access online rules, forms, or private communication.
                  Build a paper backup.
                </span>
              }
              items={[
                "Call the facility and ask for the mailroom, visiting office, records office, counselor, or case manager.",
                "Ask whether the facility can mail or provide printed visiting rules, mail rules, and account instructions.",
                "Keep a paper folder with facility addresses, register numbers, rejection notices, visiting approvals, receipts, account confirmations, and staff notes.",
                "Write down names, dates, departments, phone numbers, confirmation numbers, and exact instructions after every important call.",
                "Ask a trusted person, library, reentry nonprofit, legal aid office, or faith/community support person to print rules or forms when needed.",
                "Do not rely on memory when a court order, minor-contact rule, no-contact rule, supervision condition, or treatment instruction may apply.",
              ]}
            />
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes"
          number="7"
          title="Common mistakes to avoid"
          subtitle="These are not moral judgments. They are predictable traps that can make communication harder."
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Assuming ordinary calls, messages, video, or mail are private.",
                whyItMatters:
                  "Correctional communication systems are often monitored, recorded, screened, retained, or reviewable.",
                betterMove:
                  "Save sensitive legal, case, victim, witness, discipline, and strategy conversations for the attorney through the proper legal channel.",
              },
              {
                mistake: "Treating silence during transfer as proof something is wrong.",
                whyItMatters:
                  "Transfers and holdovers can temporarily cut off phones, messaging, mail access, commissary, property, and stable location information.",
                betterMove:
                  "Check official location tools when available, then wait for communication to reestablish before assuming the relationship has changed.",
              },
              {
                mistake: "Using one facility’s rule for another facility.",
                whyItMatters:
                  "Mail, visiting, phone, messaging, package, publication, and child-visitor rules can vary sharply by facility and can change without much notice.",
                betterMove:
                  "Verify the current rule with the specific facility before sending items, setting up travel, or relying on a vendor account.",
              },
              {
                mistake: "Discussing the case because the conversation feels emotionally necessary.",
                whyItMatters:
                  "Facts, allegations, contradictions, admissions, pressure, coded language, and emotional rehashing can be misunderstood or used later.",
                betterMove:
                  "Talk about support, daily life, stability, health, practical planning, and future goals. Redirect case details to counsel.",
              },
              {
                mistake: "Bringing children into communication without checking every rule first.",
                whyItMatters:
                  "Minor contact can be affected by facility rules, court orders, victim-related restrictions, treatment instructions, and supervision conditions.",
                betterMove:
                  "Verify child contact, child visits, child photos, and child-related discussion before acting. Save the answer in writing if possible.",
              },
              {
                mistake: "Letting fear turn into total silence.",
                whyItMatters:
                  "Families often overcorrect because they are afraid of saying the wrong thing. That can increase isolation and make reentry planning harder.",
                betterMove:
                  "Use structured, calm, low-risk communication. Consistency matters more than intensity.",
              },
            ]}
          />

          <GuideCallout tone="success" icon="🌱" title="A steadier goal">
            <p>
              Lower drama usually means lower risk. Calm, consistent,
              rule-aware communication helps families stay connected without
              turning every call, message, or visit into a crisis.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="related"
          number="8"
          title="Related SOLAR guides"
          subtitle="Use these when the communication issue connects to family disclosure, prison survival, reentry, or legal-stage planning."
        />

        <GuideSectionCard>
          <RelatedGuides
            guides={[
              {
                title: "Prison Dos & Don’ts Guide",
                description:
                  "Pairs with this guide for safety, daily-life expectations, boundaries, and reentry preparation during incarceration.",
                to: "/resources/prison-dos-and-donts",
              },
              {
                title: "Children & Disclosure + Relationship Rebuilding Toolkit",
                description:
                  "Helpful when communication involves children, family trust, disclosure questions, or rebuilding relationships safely.",
                to: "/resources/children-disclosure-toolkit",
              },
              {
                title: "The SOLAR Family & Allies Guide",
                description:
                  "A broader support roadmap for loved ones trying to stay grounded from arrest through reentry and beyond.",
                to: "/resources/family-support-guide",
              },
              {
                title: "Reentry Checklist",
                description:
                  "Use when communication shifts toward release planning, housing, transportation, registry obligations, and supervision.",
                to: "/resources/reentry-checklist",
              },
              {
                title: "Federal Sex-Crime Process Guide",
                description:
                  "Useful for understanding how federal custody, designation, transfer, sentencing, and BOP placement fit into the larger process.",
                to: "/resources/federal-process-guide",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="sources"
          number="9"
          title="Sources and verification"
          subtitle="Use official facility and agency pages first. Communication rules change, and local policy may control the answer."
        />

        <GuideSectionCard>
          <SourceList
            note={
              <span>
                These links were selected for the sandbox preview because they
                are official government or agency sources. Before replacing the
                production guide, recheck any facility-specific or vendor-specific
                links used in the final version.
              </span>
            }
            sources={[
              {
                label: "Bureau of Prisons — Community Ties: Correspondence, telephone, email, visiting",
                href: sourceLinks.bopCommunications,
                description:
                  "Official BOP overview of communication options, including general correspondence and monitored communication context.",
              },
              {
                label: "Bureau of Prisons — TRULINCS topics",
                href: sourceLinks.bopTrulincs,
                description:
                  "Official BOP page for TRULINCS correspondence and troubleshooting.",
              },
              {
                label: "Bureau of Prisons — How to visit a federal inmate",
                href: sourceLinks.bopVisiting,
                description:
                  "Official BOP page explaining visitor pre-approval and general visiting process.",
              },
              {
                label: "Bureau of Prisons — Inmate Locator",
                href: sourceLinks.bopLocator,
                description:
                  "Official federal locator for people in BOP custody or released from federal custody since 1982.",
              },
              {
                label: "Bureau of Prisons — Locations",
                href: sourceLinks.bopLocations,
                description:
                  "Official BOP location finder for facility pages and local visiting information.",
              },
              {
                label: "BOP Program Statement 5265.14 — Correspondence",
                href: sourceLinks.bopCorrespondencePolicy,
                description:
                  "Official BOP correspondence policy, including general and special mail handling.",
              },
              {
                label: "BOP Program Statement 5265.13 — TRULINCS Electronic Messaging",
                href: sourceLinks.bopTrulincsPolicy,
                description:
                  "Official BOP policy for electronic messaging, including contact approval and monitoring consent language.",
              },
              {
                label: "BOP Program Statement 5264.08 — Inmate Telephone Regulations",
                href: sourceLinks.bopTelephonePolicy,
                description:
                  "Official BOP policy for inmate telephone privileges, restrictions, and institutional security limits.",
              },
              {
                label: "BOP Program Statement 5267.09 — Visiting Regulations",
                href: sourceLinks.bopVisitingPolicy,
                description:
                  "Official BOP visiting policy addressing approval, visiting limits, institution discretion, and security concerns.",
              },
              {
                label: "BOP Special Mail Notice form",
                href: sourceLinks.bopSpecialMailNotice,
                description:
                  "Official BOP form explaining special mail markings and the risk of mail being treated as general correspondence if requirements are not met.",
              },
              {
                label: "BOP Visitor Information form",
                href: sourceLinks.bopVisitorForm,
                description:
                  "Official BOP visitor questionnaire/release form used in the visitor approval process.",
              },
              {
                label: "USAGov — How to look up prisoners and prison records",
                href: sourceLinks.usaGovPrisonerRecords,
                description:
                  "Official federal public-information page pointing readers to prisoner and prison-record lookup tools.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}