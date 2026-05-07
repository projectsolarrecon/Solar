import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";
import {
  GuideSectionHeader,
  GuideSectionCard,
  GuideCallout,
  GuideIntro,
  PullQuoteBlock,
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
  PathwayCard,
  RoleGuidanceGrid,
  TimelineGuidanceGrid,
  DoDontJudgment,
  RedFlagGreenFlag,
  DualDepthSection,
} from "../../components/solar";

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="SOLAR Resource Guide Sandbox | The SOLAR Project"
        description="Internal preview page for testing SOLAR resource guide components, spacing, mobile readability, and reusable guide patterns."
        keywords="SOLAR resource guide sandbox, design system, component preview"
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
            Internal Sandbox
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            SOLAR Resource Guide Sandbox
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A temporary workshop page for testing the new SOLAR guide components before replacing any live resource guide.
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

        <GuideCallout tone="warning" icon="🧪" title="Sandbox note">
          <p>
            This page is not meant to be a public resource guide. It is a visual test page for spacing, mobile readability, icons,
            callouts, scripts, checklists, and reusable guide recipes.
          </p>
        </GuideCallout>

        <GuideIntro title="What this sandbox is testing" icon="🧭">
          <p>
            The goal is to make SOLAR guides feel warm, practical, organized, and readable on a phone — without turning every guide
            into an overstuffed encyclopedia.
          </p>
          <p>
            This page intentionally shows several component types. Real guides should select only the modules that fit the reader’s
            problem, promise, and primary action.
          </p>
        </GuideIntro>

        <GuideSectionHeader
          id="crisis-recipe"
          number="1"
          title="Crisis Guide Recipe"
          subtitle="For guides where the reader needs immediate stabilization, scripts, proof, and next steps."
        />

        <GuideSectionCard>
          <QuickStartPanel
            title="If this just happened"
            subtitle="Use this when the reader needs a small number of immediate actions before the deeper guide begins."
            icon="⚡"
            urgentActions={[
              <span>
                Write down the basic facts: what happened, when it happened, who was involved, and what deadline or risk you are facing.
              </span>,
              <span>
                Do not make a rushed decision while panicked. Pause before signing, posting, moving, paying, or calling someone hostile.
              </span>,
              <span>
                Identify one safe next contact: lawyer, clerk, registry office, housing authority, trusted family member, or support hotline.
              </span>,
            ]}
            nextActions={[
              <span>Start a simple paper folder or phone note for documents, dates, names, and screenshots.</span>,
              <span>Use one clear script instead of improvising under stress.</span>,
            ]}
            reminder={
              <span>
                The first goal is not to solve everything. The first goal is to stop the situation from getting worse.
              </span>
            }
          />

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Phase 1",
                title: "Stabilize",
                icon: "🧯",
                tone: "urgent",
                description: "Protect housing, money, deadlines, communication, or safety before moving into deeper planning.",
              },
              {
                eyebrow: "Phase 2",
                title: "Document",
                icon: "🗂️",
                tone: "legal",
                description: "Build a simple proof packet so the reader has facts, copies, names, and dates in one place.",
              },
              {
                eyebrow: "Phase 3",
                title: "Ask carefully",
                icon: "☎️",
                tone: "info",
                description: "Use scripts and verification boxes to contact the right person without oversharing or guessing.",
              },
            ]}
          />

          <ScriptBox
            title="Sample phone script"
            tone="neutral"
            context="Use this pattern for clerks, housing offices, registry units, job centers, or other official contacts."
            script={`Hello, my name is [Name]. I am trying to understand the correct next step for [issue].\n\nCan you tell me who handles that, what I should ask for, and whether there is a form or deadline I need to know about?\n\nI am taking notes. Could you please repeat your name or department so I can write it down correctly?`}
          />

          <DocumentPacket
            title="Build your proof packet"
            intro="This pattern turns overwhelming problems into a concrete task: collect and save the documents that matter."
            categories={[
              {
                title: "Identity & status",
                items: ["ID or driver’s license", "Court or supervision paperwork", "Registration or agency notices"],
              },
              {
                title: "Proof & communication",
                items: ["Receipts or payment proof", "Screenshots", "Letters, emails, notes, or call logs"],
              },
            ]}
          />

          <VerifyBeforeActing
            whoToAsk="The office or person with actual authority over the decision."
            whatToAsk="Ask the exact question tied to your next action, not a broad hypothetical."
            whatToSave="Save the date, name, department, written reply, screenshot, or confirmation number."
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="roadmap-recipe"
          number="2"
          title="Roadmap Guide Recipe"
          subtitle="For guides where the reader needs stages, rules of thumb, cautions, and a clear path forward."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="How timing changes the advice"
            stages={[
              {
                stage: "Before action",
                icon: "🧭",
                whatChanges: "The reader may still have options and should avoid locking in a bad choice.",
                whatToDo: "Verify, document, ask questions, and pause before signing or moving.",
              },
              {
                stage: "During process",
                icon: "⏳",
                whatChanges: "Deadlines, staff instructions, forms, or supervision rules may control the next step.",
                whatToDo: "Track dates, save proof, and follow the official process carefully.",
              },
              {
                stage: "After decision",
                icon: "📌",
                whatChanges: "The reader may need to appeal, correct errors, comply, or adjust plans.",
                whatToDo: "Ask what can be reviewed, changed, corrected, or documented going forward.",
              },
              {
                stage: "Long term",
                icon: "🌱",
                whatChanges: "The issue becomes about routine, prevention, and reducing future risk.",
                whatToDo: "Build habits, keep records, and revisit trusted resources as rules change.",
              },
            ]}
          />

          <DoDontJudgment
            dos={[
              "Keep communication short, calm, and factual.",
              "Save copies of important documents and messages.",
              "Ask for clarification before acting when the stakes are high.",
            ]}
            donts={[
              "Do not rely only on memory for dates, names, or instructions.",
              "Do not assume one state, facility, landlord, or officer uses the same rules as another.",
              "Do not ignore deadlines because you feel overwhelmed.",
            ]}
            judgment={[
              "Not every situation needs escalation. Sometimes the safest move is a written question and a saved answer.",
              "When guidance conflicts, slow down and verify with the source that has authority.",
            ]}
          />

          <RedFlagGreenFlag
            red="Someone gives a vague answer but refuses to put anything in writing or identify the rule they are relying on."
            green="You receive a written policy, form, confirmation, or official contact who can explain the next step."
          />

          <CommonMistakes
            mistakes={[
              {
                mistake: "Trying to solve the entire problem in one phone call.",
                whyItMatters: "Stress can cause oversharing, confusion, or accidental admissions.",
                betterMove: "Use one narrow question, take notes, and follow up in writing if possible.",
              },
              {
                mistake: "Treating internet research as final authority.",
                whyItMatters: "Rules can vary by state, facility, agency, supervision condition, or local policy.",
                betterMove: "Use online research to prepare better questions, then verify before acting.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="toolkit-recipe"
          number="3"
          title="Toolkit / Opportunity Guide Recipe"
          subtitle="For guides that help readers compare options, choose a path, and take practical steps."
        />

        <GuideSectionCard>
          <PathwayCard
            title="Example pathway: skills-first work"
            subtitle="A reusable pattern for employment, licensing, education, small business, and reentry planning guides."
            icon="🧰"
            whyItWorks="Some paths reward reliability, skill, proof of training, and personal referral more than perfect paper credentials."
            steps={[
              "Identify the realistic path that fits your restrictions, skills, transportation, and schedule.",
              "Find the lowest-cost way to learn the basics: library, workforce center, community college, apprenticeship, or local employer.",
              "Build proof: certificates, references, work samples, letters, or documented experience.",
            ]}
            details={[
              { label: "Best for", value: "Readers choosing between several practical routes." },
              { label: "Use sparingly", value: "Only when a guide truly has multiple paths to compare." },
              { label: "Avoid", value: "Turning every guide into a career-path matrix." },
              { label: "Reader job", value: "Help them pick a next step, not admire a giant list." },
            ]}
            bestFit="People who need a realistic starting point and a way to compare options without getting overwhelmed."
            offlineAlternatives={[
              "Call the workforce center and ask for printed program lists.",
              "Visit the library or community college in person.",
              "Ask a trusted person to print applications, forms, or program requirements.",
            ]}
          />

          <RoleGuidanceGrid
            title="Role-based guidance"
            roles={[
              {
                role: "Directly impacted person",
                icon: "👤",
                guidance: "Focus on what you can control today: documents, deadlines, habits, and calm communication.",
              },
              {
                role: "Spouse or partner",
                icon: "💞",
                guidance: "Help organize information, but avoid taking over decisions that the impacted person must own.",
              },
              {
                role: "Parent or caregiver",
                icon: "👪",
                guidance: "Protect routines and use simple, steady language when family stress affects children.",
              },
              {
                role: "Ally or advocate",
                icon: "🤝",
                guidance: "Offer practical help: rides, printing, proofreading, calls, forms, and emotional steadiness.",
              },
            ]}
          />

          <GuideChecklist
            id="sandbox-checklist"
            title="Mobile-friendly checklist example"
            columns={2}
            items={[
              { id: "facts", label: "Write down the basic facts." },
              { id: "deadline", label: "Mark the next deadline." },
              { id: "docs", label: "Save the relevant documents." },
              { id: "script", label: "Use a script before calling." },
              { id: "verify", label: "Verify before acting." },
              { id: "followup", label: "Follow up in writing if possible." },
            ]}
          />

          <OfflineOptions
            title="If internet access is limited"
            note="This should appear when a guide includes online tasks but readers may be incarcerated, on supervision, phone-only, or without reliable access."
            items={[
              "Ask for printed forms, packets, handbooks, or policy pages.",
              "Use a public library, clerk’s office, legal kiosk, job center, or trusted helper.",
              "Keep paper notes with dates, names, confirmation numbers, and next steps.",
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="tone-and-depth"
          number="4"
          title="Tone, depth, and readability tests"
          subtitle="These blocks test how the standard handles warmth, depth, emphasis, and restraint."
        />

        <GuideSectionCard>
          <DualDepthSection
            simpleTitle="Plain-language answer"
            deepTitle="More detail when needed"
            simple={
              <p>
                Start with the simple answer. Tell the reader what matters first, what to do next, and what not to panic about.
              </p>
            }
            deep={
              <p>
                Add detail only when it helps the reader act safely. Use deeper explanation to clarify risk, process, authority, or documentation — not to show off complexity.
              </p>
            }
          />

          <GuideCallout tone="family" icon="🫶" title="Warmth without false reassurance">
            <p>
              SOLAR guides should feel steady and humane. The reader may be scared, ashamed, angry, or exhausted. The page should lower the temperature without pretending everything is easy.
            </p>
          </GuideCallout>

          <GuideCallout tone="legal" icon="⚖️" title="Caution without panic">
            <p>
              Legal and compliance warnings should be clear, but not written in a way that makes the reader shut down. The job is to help them verify, document, and act carefully.
            </p>
          </GuideCallout>

          <PullQuoteBlock>
            A SOLAR guide should feel useful after 90 seconds and still valuable after 20 minutes.
          </PullQuoteBlock>

          <SoftDivider label="Restraint rule" />

          <p className="text-slate-700 leading-relaxed">
            Real guides should not use every component shown here. The sandbox proves the components exist; the recipe decides what belongs.
          </p>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resource-sections"
          number="5"
          title="Resources, related guides, and sources"
          subtitle="Testing the bottom-of-page support sections that should be consistent across guide types."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Official resources / outside help example"
            description="Use this when a guide needs to send readers to forms, agencies, directories, or hotlines."
            resources={[
              {
                label: "211",
                description: "Local housing, food, health, and emergency support referrals.",
                href: "https://211.org",
                badge: "Help",
              },
              {
                label: "LawHelp.org",
                description: "A legal aid finder for civil legal help by state and topic.",
                href: "https://www.lawhelp.org/find-help",
                badge: "Legal aid",
              },
              {
                label: "988 Lifeline",
                description: "Crisis support for people in emotional distress.",
                href: "https://988lifeline.org",
                phone: "Call or text 988",
                badge: "Crisis",
              },
              {
                label: "SOLAR Resources hub",
                description: "Return to the main SOLAR resource guide library.",
                to: "/resources",
                badge: "SOLAR",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Financial Support Strategies",
                description: "For stabilizing money, bills, and household support after a legal crisis.",
                to: "/resources/financial-support-strategies",
              },
              {
                title: "Prison Communication, Mail, Visits & Monitoring",
                description: "For understanding communication systems and avoiding common mistakes.",
                to: "/resources/prison-communication-mail-visits-monitoring",
              },
              {
                title: "Registry Rules by State",
                description: "For finding state-specific registry rules and practical compliance notes.",
                to: "/resources/state-registry",
              },
            ]}
          />

          <SourceList
            note="Sandbox sources are examples only. Real guide sources should be live-validated before publication."
            sources={[
              {
                label: "The SOLAR Project Resources hub",
                href: "https://thesolarproject.org/resources",
                description: "Used here as a live example of a related internal resource destination.",
              },
              {
                label: "211.org",
                href: "https://211.org",
                description: "Example of a public resource finder commonly useful in SOLAR guides.",
              },
              {
                label: "LawHelp.org Find Help",
                href: "https://www.lawhelp.org/find-help",
                description: "Example of a legal aid lookup resource that may appear in housing, appeals, or rights guides.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}
