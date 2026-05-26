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
} from "../../components/solar";

const lastChecked = "May 25, 2026";

const immediateCrisisResources = [
  {
    label: "988 Suicide & Crisis Lifeline",
    href: "https://988lifeline.org/",
    phone: "Call or text 988",
    badge: "24/7 crisis support",
    description:
      "Free crisis support in the United States for suicidal thoughts, emotional distress, substance-use crisis, or concern about someone else.",
  },
  {
    label: "988 Lifeline chat",
    href: "https://chat.988lifeline.org/",
    badge: "Chat",
    description:
      "Online chat option for people who cannot safely or privately call. Use a safe device if you have supervision, court, or monitoring restrictions.",
  },
  {
    label: "Crisis Text Line",
    href: "https://www.crisistextline.org/",
    phone: "Text HOME to 741741",
    badge: "Text support",
    description:
      "Free, 24/7 text-based crisis support in the United States with a trained crisis counselor.",
  },
  {
    label: "Emergency care",
    href: "https://www.nimh.nih.gov/site-info/contact-nimh",
    phone: "Call 911 or go to the nearest ER",
    badge: "Immediate danger",
    description:
      "Use emergency care when someone cannot stay physically safe, has already harmed themselves, is medically unsafe, is violent, or cannot be left alone.",
  },
];

const followUpResources = [
  {
    label: "SAMHSA Safety Plan",
    href: "https://www.samhsa.gov/resource/988/safety-plan",
    badge: "Printable tool",
    description:
      "A printable safety-plan tool modified from Stanley-Brown, useful after the immediate danger is lower.",
  },
  {
    label: "Stanley-Brown Safety Planning Intervention",
    href: "https://suicidesafetyplan.com/",
    badge: "Safety planning",
    description:
      "A widely used safety-planning model for identifying warning signs, coping steps, support contacts, professional resources, and ways to make the environment safer.",
  },
  {
    label: "VA/DOD Safety Plan Worksheet",
    href: "https://www.healthquality.va.gov/guidelines/MH/srb/Patient_Safety_Planfillable-508.pdf",
    badge: "Worksheet",
    description:
      "A fillable worksheet organized around warning signs, coping strategies, social support, professional contacts, and safer environments.",
  },
  {
    label: "SAMHSA FindTreatment.gov",
    href: "https://findtreatment.gov/",
    badge: "Treatment locator",
    description:
      "A confidential treatment locator for mental health and substance-use services in the United States and territories.",
  },
  {
    label: "USA.gov legal aid finder",
    href: "https://www.usa.gov/legal-aid",
    badge: "Legal help",
    description:
      "A starting point for finding free or low-cost legal help. Use after the immediate safety crisis is stabilized.",
  },
];

const sourceLinks = [
  {
    label: "SAMHSA — 988 Frequently Asked Questions",
    href: "https://www.samhsa.gov/mental-health/988/faqs",
    description:
      "Supports 988 as a national crisis support option for mental health, substance-use, and emotional distress crises.",
  },
  {
    label: "988 Lifeline — What to Expect",
    href: "https://988lifeline.org/get-help/what-to-expect/",
    description:
      "Supports plain-language guidance that 988 offers free, judgment-free support by call, text, chat, and Deaf/HoH access.",
  },
  {
    label: "Crisis Text Line",
    href: "https://www.crisistextline.org/",
    description:
      "Supports the text-based off-ramp: text HOME to 741741 in the United States for free, confidential crisis support.",
  },
  {
    label: "Stanley-Brown Safety Planning Intervention",
    href: "https://suicidesafetyplan.com/",
    description:
      "Supports the guide’s safety-planning structure: warning signs, coping steps, support contacts, professional resources, and making the environment safer.",
  },
  {
    label: "SAMHSA — Safety Plan",
    href: "https://www.samhsa.gov/resource/988/safety-plan",
    description:
      "Supports printable safety-plan guidance and the use of safety plans by counselors, clinicians, and helpers.",
  },
  {
    label: "VA/DOD Safety Plan Worksheet",
    href: "https://www.healthquality.va.gov/guidelines/MH/srb/Patient_Safety_Planfillable-508.pdf",
    description:
      "Supports the worksheet format used for warning signs, coping strategies, people to contact, professionals, and safer-environment planning.",
  },
  {
    label: "Suicide Prevention Resource Center — Reduce Access to Means of Suicide",
    href: "https://sprc.org/effective-prevention/a-comprehensive-approach-to-suicide-prevention/reduce-access-to-means-of-suicide/",
    description:
      "Supports reducing access to lethal means during a crisis window, including removing lethal means from the household until the situation improves.",
  },
  {
    label: "National Institute of Mental Health — Crisis Contact Guidance",
    href: "https://www.nimh.nih.gov/site-info/contact-nimh",
    description:
      "Supports emergency escalation language: call 911 or go to the nearest emergency room in life-threatening situations.",
  },
  {
    label: "CDC — Preventing Suicide",
    href: "https://www.cdc.gov/suicide/prevention/",
    description:
      "Supports the public-health framing that suicide prevention includes individual, family, and community protective strategies.",
  },
  {
    label: "SAMHSA — Treatment Locators",
    href: "https://www.samhsa.gov/find-help/locators",
    description:
      "Supports after-crisis treatment lookup and follow-up care planning.",
  },
  {
    label: "USA.gov — Find a Lawyer for Affordable Legal Aid",
    href: "https://www.usa.gov/legal-aid",
    description:
      "Supports legal-aid lookup after immediate safety needs are addressed.",
  },
];

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Crisis Planning Guide for Registrants and Families | The SOLAR Project"
        description="A practical crisis survival protocol for people and families facing registry stress, shame, public exposure, supervision fear, suicidal thoughts, or dangerous panic."
        keywords="crisis planning, 988, safety plan, registry stress, reentry crisis, family crisis support, suicide prevention"
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
            Crisis Planning Guide for Registrants and Families
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            What to do when shame, fear, registry stress, family panic, or
            suicidal thoughts become dangerous.
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
            This guide is for the dangerous moment: when someone may not be safe
            tonight, when panic is turning into despair, or when shame feels too
            heavy to carry alone.
          </p>
          <p>
            It is written for people accused or convicted of a sex offense,
            people on registries, people under supervision, people preparing for
            incarceration or reentry, and families trying to respond without
            making the situation worse.
          </p>
          <p>
            You do not have to solve the case, the registry, the family rupture,
            the job loss, the housing problem, or the future tonight. The job
            right now is simpler and more urgent: stay alive, reduce access to
            danger, get near another person, and postpone decisions that can
            wait.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If there is danger right now"
          subtitle="Use this before reading the rest of the guide."
          icon="🚨"
          urgentActions={[
            <span>
              <strong>Call or text 988 now</strong> if you may hurt yourself,
              cannot calm down, feel trapped, or are scared to be alone.
            </span>,
            <span>
              <strong>Call 911 or go to an emergency room</strong> if someone
              has already been harmed, has a weapon or lethal means in hand, is
              medically unsafe, is violent, or cannot be kept physically safe.
            </span>,
            <span>
              <strong>Move away from lethal means</strong>: weapons, pills,
              cords, cars, heights, garages, sheds, bathrooms, isolated rooms,
              or any place where privacy becomes danger.
            </span>,
          ]}
          nextActions={[
            <span>
              <strong>Get near another person.</strong> Sit in the same room,
              on the porch, in a lobby, at a nurses’ station, near staff, or on
              the phone with someone who will stay present.
            </span>,
            <span>
              <strong>Say one clear sentence:</strong> “I am not safe alone
              right now.” You do not have to explain every detail to deserve
              help.
            </span>,
            <span>
              <strong>Postpone irreversible decisions.</strong> Do not make
              legal, family, financial, travel, social media, confession, or
              goodbye decisions while your body is in crisis.
            </span>,
          ]}
          reminder={
            <span>
              Accountability may still matter. Survival comes first tonight. You
              cannot repair harm, comply with rules, face consequences, support
              your family, or rebuild anything if you do not stay alive.
            </span>
          }
        />

<OverviewCards
          columns={4}
          cards={[
            {
              eyebrow: "First 10 minutes",
              title: "Create distance from danger",
              icon: "🧯",
              tone: "urgent",
              description:
                "Move your body away from weapons, pills, cords, cars, heights, bathrooms, garages, sheds, and isolated spaces.",
            },
            {
              eyebrow: "Tonight",
              title: "Do not be alone",
              icon: "🧍",
              tone: "family",
              description:
                "Get near a person, staff member, family member, friend, crisis counselor, ER worker, or other responsible adult.",
            },
            {
              eyebrow: "Next 24 hours",
              title: "Postpone high-risk decisions",
              icon: "⏸️",
              tone: "warning",
              description:
                "Do not post, confess online, contact prohibited people, run, skip supervision, disappear, or decide your family is better off without you.",
            },
            {
              eyebrow: "Next 72 hours",
              title: "Make a written safety plan",
              icon: "📝",
              tone: "success",
              description:
                "Write down warning signs, support contacts, safer places, appointments, medication needs, and what must be removed or locked away.",
            },
          ]}
        />

        <GuideSectionHeader
          id="triage"
          number="1"
          title="Immediate Danger Triage"
          subtitle="Decide what level of help is needed before trying to solve anything else."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              In a crisis, people often try to argue with the facts, explain the
              whole situation, defend themselves, punish themselves, or solve
              the future. That is not the first task. The first task is safety.
            </p>

            <p>
              Registry-related crises can become dangerous very quickly because
              shame, fear, public exposure, supervision pressure, family loss,
              and legal uncertainty can all hit at the same time. A person may
              feel like there is no future before they have had time to talk to
              anyone qualified to help.
            </p>
          </GuideProse>

          <GuideCallout tone="urgent" icon="☎️" title="Use emergency help when safety cannot be maintained">
            <p>
              Call 911 or go to an emergency room if there is an attempt in
              progress, a weapon or lethal means is present, someone is
              medically unsafe, someone is intoxicated and unstable, someone is
              violent, or no responsible person can stay with the person in
              crisis.
            </p>
          </GuideCallout>

          <DoDontJudgment
            dos={[
              "Call or text 988 when someone is suicidal, overwhelmed, afraid of being alone, or not sure they can stay safe.",
              "Use 911 or an emergency room when there is immediate physical danger or medical risk.",
              "Remove or separate the person from lethal means until the crisis window passes.",
              "Keep the person near another responsible person whenever possible.",
            ]}
            donts={[
              "Do not leave a suicidal or dangerously panicked person alone because they promised they are fine.",
              "Do not argue about guilt, blame, punishment, family loyalty, politics, or the registry while the person is unsafe.",
              "Do not rely on alcohol, drugs, driving around, or isolation to get through the night.",
              "Do not treat public exposure, arrest, release, supervision fear, or family panic as something someone should simply tough out.",
            ]}
            judgment={[
              "Use 988 for crisis support and de-escalation when immediate physical danger can be managed.",
              "Use emergency medical care when the person cannot stay physically safe, cannot communicate clearly, or may need medical monitoring.",
              "If calling 911 creates fear because of legal status, still choose safety when someone’s life is at risk. You can use simple words: “This is a medical and mental health emergency.”",
            ]}
          />

          <VerifyBeforeActing
            title="Before making a legal or supervision decision tonight"
            whoToAsk="A lawyer, supervising officer, emergency clinician, crisis counselor, or another person with actual authority — not social media, rumors, or panic."
            whatToAsk="Ask the narrow safety question first: “What is the safest lawful step I can take tonight so no one is harmed and I do not make my legal situation worse?”"
            whatToSave="Write down who you contacted, when, what they told you, and any appointment, instruction, or emergency-care record."
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="ten-minutes"
          number="2"
          title="The First 10 Minutes"
          subtitle="When the body is flooded, make the next few minutes safer before trying to think clearly."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The first 10 minutes are about interrupting the dangerous loop. Do
              not wait until you can explain it well. Do not wait until you feel
              worthy of help. Do not wait until you know what to say.
            </p>

            <p>
              A person in this situation may be thinking, “Everyone will know,”
              “I ruined my family,” “I cannot survive prison,” “I will never
              work again,” “My children are better off without me,” or “There is
              no way back.” Those thoughts can feel final in the moment. They
              are still crisis thoughts. Treat them as a signal to get help, not
              as instructions.
            </p>
          </GuideProse>

          <GuideChecklist
            id="first-ten-minutes"
            title="First 10 minutes checklist"
            columns={1}
            items={[
              {
                id: "move",
                label:
                  "Move away from weapons, pills, cords, cars, heights, bathrooms, garages, sheds, isolated rooms, or any place where privacy increases danger.",
              },
              {
                id: "person",
                label:
                  "Get near another person: family member, friend, neighbor, staff member, nurse, officer, chaplain, coworker, lobby attendant, or crisis worker.",
              },
              {
                id: "message",
                label:
                  "Send one message or make one call: “I am not safe alone right now. Please stay with me or help me contact crisis support.”",
              },
              {
                id: "988",
                label:
                  "Call or text 988, use 988 chat, or text HOME to 741741 if talking feels impossible.",
              },
              {
                id: "delay",
                label:
                  "Delay legal, family, money, housing, travel, confession, apology, social media, and goodbye decisions.",
              },
              {
                id: "basic",
                label:
                  "Put both feet on the floor, drink water if safe, breathe slowly, and keep your phone charged and nearby.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⚖️" title="Do not create new legal risk while spiraling">
            <p>
              Do not contact alleged victims, protected people, witnesses,
              children, or anyone you are ordered not to contact. Do not post
              explanations, threats, apologies, confessions, or arguments
              online. Do not run, disappear, skip supervision, or make a
              desperate travel decision. Tonight is for safety.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="timeline"
          number="3"
          title="Tonight, 24 Hours, and 72 Hours"
          subtitle="A crisis plan should change as the immediate danger lowers."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="Use the smallest next time window"
            stages={[
              {
                stage: "Right now",
                icon: "🚨",
                whatChanges:
                  "The person may not be able to think clearly, judge risk, or safely be alone.",
                whatToDo:
                  "Create distance from lethal means, get near another person, contact 988 or emergency care, and stop all high-stakes decisions.",
              },
              {
                stage: "Tonight",
                icon: "🌙",
                whatChanges:
                  "The person may feel calmer for a few minutes and then spiral again, especially when alone or online.",
                whatToDo:
                  "Decide where the person will sleep, who will stay or check in, what items will be removed, and what online or legal decisions are postponed.",
              },
              {
                stage: "Next 24 hours",
                icon: "📅",
                whatChanges:
                  "The crisis may shift from immediate danger to shame, exhaustion, withdrawal, anger, or numbness.",
                whatToDo:
                  "Schedule follow-up care, tell one safe person the truth needed for support, document crisis contacts, and avoid social media explanations.",
              },
              {
                stage: "Next 72 hours",
                icon: "🗂️",
                whatChanges:
                  "The person may start facing practical fallout: housing, work, supervision, family, registration, court, custody, or media exposure.",
                whatToDo:
                  "Build a written safety plan, identify legal and clinical supports, make a compliance-safe task list, and keep decisions narrow.",
              },
            ]}
          />

          <GuideChecklist
            id="seventy-two-hour-plan"
            title="72-hour safety plan worksheet"
            columns={2}
            items={[
              {
                id: "sleep",
                label: "Where will I sleep tonight, and is that place safe?",
              },
              {
                id: "not-alone",
                label: "Who will stay with me or check on me at set times?",
              },
              {
                id: "remove",
                label: "What weapons, pills, cords, keys, vehicles, or other danger items need to be removed, locked, or held by someone else?",
              },
              {
                id: "warning-signs",
                label: "What are my warning signs that the crisis is coming back?",
              },
              {
                id: "coping",
                label: "What can I do for 10 minutes that does not involve another person and does not create risk?",
              },
              {
                id: "safe-people",
                label: "Which three people or places can provide distraction or support?",
              },
              {
                id: "professional",
                label: "What professional, hotline, clinic, ER, supervision contact, attorney, or support organization needs to be contacted?",
              },
              {
                id: "postpone",
                label: "What decisions am I postponing until I am safer and have advice?",
              },
              {
                id: "devices",
                label: "What device, internet, or social media access should be limited tonight?",
              },
              {
                id: "next-step",
                label: "What is the next safe step that does not require solving everything?",
              },
            ]}
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="registry-specific-triggers"
          number="4"
          title="Registry-Specific Crisis Triggers"
          subtitle="This guide is not generic. These pressures can create a crisis that other people may not understand."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some crises in this space are triggered by events that carry
              intense shame, fear, and uncertainty. The person may be facing
              real consequences, but the crisis voice often turns consequences
              into total hopelessness.
            </p>

            <p>
              Naming the trigger can help the helper respond to the right
              problem. The answer is not to minimize harm or pretend everything
              will be easy. The answer is to keep the person alive long enough
              to face the next step with support.
            </p>
          </GuideProse>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Legal shock",
                title: "Arrest, search, charge, plea, sentencing, or warrant",
                icon: "⚖️",
                tone: "legal",
                description:
                  "The person may believe their life is over before they have legal advice, treatment support, or a realistic plan.",
              },
              {
                eyebrow: "Exposure",
                title: "Media, registry listing, workplace discovery, or family finding out",
                icon: "📰",
                tone: "warning",
                description:
                  "Public shame can create a dangerous urge to hide, flee, self-punish, post online, or say goodbye.",
              },
              {
                eyebrow: "Stability loss",
                title: "Housing denial, job loss, relationship rupture, or child-contact loss",
                icon: "🏚️",
                tone: "family",
                description:
                  "Losing ordinary supports can make survival feel impossible even when there are still next steps.",
              },
              {
                eyebrow: "Supervision panic",
                title: "Violation fear, registration appointment panic, or rule confusion",
                icon: "📋",
                tone: "reentry",
                description:
                  "Fear of punishment can push people into silence, avoidance, missed appointments, or unsafe decisions.",
              },
              {
                eyebrow: "Custody / reentry",
                title: "Jail, prison, release, halfway house, or reentry fear",
                icon: "🚪",
                tone: "neutral",
                description:
                  "People may need direct medical or psychological help in custody, plus a plan for safe contact and documentation.",
              },
              {
                eyebrow: "Moral injury",
                title: "Guilt, remorse, disgust, or fear of permanent identity loss",
                icon: "🧭",
                tone: "research",
                description:
                  "Accountability is not the same as dying. A person can face harm, treatment, repair, consequences, and change only if they survive.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🕯️" title="A sentence this guide is built around">
            <p>
              Shame can be a warning sign, not a verdict. When shame turns into
              danger, the next right step is not punishment. The next right step
              is safety.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="scripts"
          number="5"
          title="Words to Use When Speaking Feels Impossible"
          subtitle="Scripts reduce the pressure to explain everything perfectly."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              You do not have to disclose every fact to get emergency help. You
              can name the level of danger first. Then give only the information
              needed for safety, medical care, supervision compliance, or legal
              protection.
            </p>
          </GuideProse>

          <ScriptBox
            title="Person in crisis: immediate safety script"
            tone="urgent"
            context="Use this with 988, a family member, friend, ER, jail staff, probation officer, chaplain, or another responsible person."
            script={`I am not safe alone right now.

I am in a legal or registry-related crisis, and I am afraid I may hurt myself. I do not need to explain everything perfectly right now. I need help staying safe tonight.

Please stay with me, help me move away from anything I could use to hurt myself, and help me contact crisis support or medical care.`}
          />

          <ScriptBox
            title="Person in crisis: when you are afraid to say the issue out loud"
            tone="privacy"
            context="Use this when shame is blocking you from asking for help."
            script={`I am scared to say the details out loud. The situation involves a sex-offense accusation, conviction, registry, supervision, or family crisis.

I am not asking you to solve the legal issue tonight. I am asking for help staying alive and not making the situation worse.`}
          />

          <ScriptBox
            title="Family or supporter: tonight is about survival"
            tone="family"
            context="Use this if you are angry, shocked, or scared but someone may not be safe."
            script={`Tonight is about staying alive. We are not going to solve the whole truth, the case, the registry, the family situation, or the future tonight.

I need you to move away from anything dangerous. I am going to stay nearby or get someone safe to stay with you. We can call or text 988 together. We will deal with the rest after you are safe.`}
          />

          <ScriptBox
            title="Custody, jail, prison, or facility script"
            tone="legal"
            context="Use the clearest possible medical language. If the person is incarcerated or detained, ask staff to document the request."
            script={`I need mental health or medical help now.

I am having suicidal thoughts or I am afraid I may harm myself. I need to be seen by psychology, medical, crisis staff, or a supervisor immediately.

Please document that I asked for emergency mental health help.`}
          />

          <ScriptBox
            title="Clinical disclosure script"
            tone="neutral"
            context="Use with a therapist, crisis clinician, doctor, or intake worker when the situation involves registry stress or sex-offense-related shame."
            script={`I need help with a crisis connected to a sex-offense accusation, conviction, registry status, supervision, reentry, or public exposure.

I am worried that shame and fear are becoming dangerous. I need help making a safety plan, reducing access to lethal means, and deciding what follow-up care is needed.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="family-response"
          number="6"
          title="Family and Supporter Response"
          subtitle="You can help without minimizing harm, interrogating the person, or trying to solve everything tonight."
        />

        <GuideSectionCard>
          <RoleGuidanceGrid
            title="What each person can do"
            roles={[
              {
                role: "Person in crisis",
                icon: "🧍",
                guidance:
                  "Say the danger plainly, move near another person, use 988 or emergency care, and postpone decisions that can wait. You do not have to earn help by explaining everything perfectly.",
              },
              {
                role: "Family member or loved one",
                icon: "🏠",
                guidance:
                  "Stay calm enough to reduce danger. Remove or secure lethal means, stay physically present if safe, avoid interrogation, and get another responsible person or crisis service involved.",
              },
              {
                role: "Friend, advocate, or reentry helper",
                icon: "🤝",
                guidance:
                  "Focus on immediate safety, not debate. Help the person make calls, write down instructions, avoid social media, and connect with longer-term help after the dangerous window passes.",
              },
              {
                role: "Person under supervision or in custody",
                icon: "📋",
                guidance:
                  "Use direct safety language. Ask for medical, mental health, crisis, or supervisory help. Document who was told, when, and what response was given.",
              },
            ]}
          />

          <GuideCallout tone="family" icon="🫶" title="For families: two things can be true">
            <p>
              You may be devastated, angry, afraid, betrayed, or unsure what you
              believe. And if someone may not be safe, tonight’s job is to keep
              them alive, reduce access to danger, and involve appropriate help.
              Survival is not the same as excusing harm.
            </p>
          </GuideCallout>

          <CommonMistakes
            title="Responses that can make the crisis worse"
            mistakes={[
              {
                mistake: "Demanding a full confession, timeline, apology, or explanation while the person is unsafe.",
                whyItMatters:
                  "A crisis brain may hear interrogation as proof that there is no way back.",
                betterMove:
                  "Say: “We will deal with the facts later. Right now I need you alive and away from danger.”",
              },
              {
                mistake: "Leaving the person alone because they became quiet.",
                whyItMatters:
                  "Quiet can mean calmer, but it can also mean the person has stopped reaching out.",
                betterMove:
                  "Stay nearby, arrange a check-in, call 988 together, or use emergency care if safety cannot be maintained.",
              },
              {
                mistake: "Taking phones, keys, or medication in a way that escalates conflict or creates a fight.",
                whyItMatters:
                  "Reducing access to danger matters, but it should be done as calmly and safely as possible.",
                betterMove:
                  "Ask for voluntary handoff, move dangerous items out of reach, involve another adult, or use emergency help if needed.",
              },
              {
                mistake: "Trying to solve legal strategy, custody, employment, housing, and family decisions tonight.",
                whyItMatters:
                  "Big decisions made during panic can create legal, relational, and safety harm.",
                betterMove:
                  "Write the decision down and mark it: “Not tonight. Revisit after sleep, safety, and advice.”",
              },
            ]}
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="after-crisis"
          number="7"
          title="After the Immediate Crisis"
          subtitle="When the danger is lower, shift from survival to a written plan and careful follow-up."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A crisis passing does not mean the underlying problem is gone. It
              means there is enough room to plan. This is when a written safety
              plan, follow-up care, support contacts, legal advice, supervision
              communication, and practical documentation become important.
            </p>

            <p>
              Keep the next steps narrow. The goal is not to fix an entire life
              in 72 hours. The goal is to make the next few days safer, reduce
              isolation, avoid preventable violations or legal mistakes, and
              connect to help that can continue.
            </p>
          </GuideProse>

          <DocumentPacket
            title="Crisis follow-up packet"
            intro="Save enough information that you do not have to reconstruct the crisis from memory later."
            categories={[
              {
                title: "Safety and medical notes",
                items: [
                  "Date and approximate time the crisis began.",
                  "Warning signs that showed the crisis was escalating.",
                  "Whether 988, Crisis Text Line, ER, 911, jail medical, or another crisis service was contacted.",
                  "Any discharge instructions, safety plan, medication changes, or follow-up appointments.",
                ],
              },
              {
                title: "Support contacts",
                items: [
                  "Names and numbers for people who agreed to check in.",
                  "The safest place to sleep for the next night or two.",
                  "Any person holding or securing lethal means, keys, medications, or other danger items.",
                ],
              },
              {
                title: "Legal, supervision, or reentry notes",
                items: [
                  "Any missed or upcoming court, supervision, treatment, registration, or housing deadlines.",
                  "Any instruction received from a lawyer, supervising officer, facility staff, or registering agency.",
                  "Questions to ask before contacting protected people, moving, traveling, posting online, or changing residence.",
                ],
              },
            ]}
          />

          <OfflineOptions
            title="If internet, phones, privacy, or supervision rules make this harder"
            icon="📵"
            note="Use the safest available communication method. If someone is in immediate danger, emergency safety comes first."
            items={[
              "Ask a trusted person to print this guide, the SAMHSA safety plan, or the VA/DOD safety-plan worksheet.",
              "Use a landline, facility phone, clinic phone, library phone, or supervised call if personal device use is restricted.",
              "Write the safety plan on paper: warning signs, safe people, safe places, crisis numbers, and what needs to be removed.",
              "If incarcerated or in a facility, use direct medical language: “I am suicidal” or “I am afraid I may harm myself.” Ask staff to document the request.",
              "If online access is restricted by supervision, ask a lawyer, officer, clinician, or trusted helper how to access crisis support without violating a device or internet rule.",
            ]}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Share enough to stay safe, not everything with everyone">
            <p>
              A crisis does not require public disclosure. Share the information
              needed for safety, treatment, supervision compliance, and legal
              advice. Avoid social media explanations, public apologies,
              arguments, or messages to people you may be prohibited from
              contacting.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="8"
          title="Immediate Off-Ramps and Follow-Up Tools"
          subtitle="This is not a directory. These are the core links that support the survival protocol."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Use now if someone may not be safe"
            description="Choose the fastest safe channel. In immediate physical danger, use emergency care."
            resources={immediateCrisisResources}
          />

          <ResourceLinkGrid
            title="Use after the danger is lower"
            description="These tools help with written safety planning, treatment lookup, and legal-aid lookup after the immediate crisis has been stabilized."
            resources={followUpResources}
          />

          <RelatedGuides
            guides={[
              {
                title: "Mental Health & Support Directory",
                description:
                  "Use this after the immediate crisis passes to look for crisis links, treatment locators, peer and family support organizations, clinical directories, and legal referral tools.",
                to: "/resources/mental-health-directory",
              },
              {
                title: "Housing Search Guide",
                description:
                  "Use this when housing instability is part of the crisis and the immediate safety danger has passed.",
                to: "/resources/housing-search-guide",
              },
              {
                title: "Reentry Planning Guide",
                description:
                  "Use this when release, supervision, documentation, and early reentry steps are part of the crisis picture.",
                to: "/resources/reentry-planning-guide",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="sources"
          number="9"
          title="Sources and Verification"
          subtitle="The guide translates accepted crisis-planning practices into registry-specific survival steps."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              This guide is not clinical care, legal advice, or a substitute for
              emergency services. It is a practical survival protocol based on
              widely used crisis practices: connect to crisis support, reduce
              access to lethal means, avoid isolation, make a written safety
              plan, and use emergency care when physical safety cannot be
              maintained.
            </p>

            <p>
              Source links were live-checked on {lastChecked}. Crisis-service
              availability, webpages, and local emergency procedures can change,
              so verify links and phone numbers before publication.
            </p>
          </GuideProse>

          <SourceList
            note="Core sources used for crisis access, safety planning, lethal-means safety, emergency escalation, and after-crisis treatment/legal lookup."
            sources={sourceLinks}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}