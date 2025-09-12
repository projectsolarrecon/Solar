import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";

/* ---------- Local helpers (warm, friendly look) ---------- */

function Divider() {
  return <div className="my-10 h-px bg-gradient-to-r from-amber-200 via-rose-200 to-amber-200" />;
}

function BandHeader({
  step,
  title,
  subtitle,
  emoji,
}: {
  step: React.ReactNode;
  title: string;
  subtitle?: string;
  emoji?: string;
}) {
  return (
    <section className="bg-gradient-to-r from-amber-600/90 to-rose-500/90 text-white rounded-xl shadow-lg mb-8">
      <div className="max-w-4xl mx-auto px-5 py-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-white/90 text-amber-700 font-bold flex items-center justify-center shrink-0">
          {step}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
            {emoji && <span aria-hidden>{emoji}</span>}
            {title}
          </h2>
          {subtitle && <p className="text-white/90 mt-1">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}

function Callout({
  tone = "note",
  title,
  children,
  icon,
}: {
  tone?: "tip" | "note" | "warn" | "success";
  title?: string;
  children: React.ReactNode;
  icon?: string;
}) {
  const toneMap: Record<string, string> = {
    tip: "bg-emerald-50 text-emerald-900 ring-emerald-200",
    note: "bg-amber-50 text-amber-900 ring-amber-200",
    warn: "bg-rose-50 text-rose-900 ring-rose-200",
    success: "bg-teal-50 text-teal-900 ring-teal-200",
  };
  return (
    <div className={`rounded-xl ring-1 p-4 md:p-5 ${toneMap[tone]} not-prose`}>
      {(title || icon) && (
        <div className="font-semibold mb-2 flex items-center gap-2">
          {icon && <span aria-hidden>{icon}</span>}
          {title}
        </div>
      )}
      <div className="prose prose-slate max-w-none">{children}</div>
    </div>
  );
}

function ChecklistItem({
  id,
  checked,
  onToggle,
  children,
}: {
  id: string;
  checked: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
        checked={checked}
        onChange={() => onToggle(id)}
      />
      <span className={checked ? "line-through text-gray-500" : ""}>{children}</span>
    </label>
  );
}

/* ------------------- Page Component ------------------- */

export default function ChildrenDisclosureToolkit(): JSX.Element {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div className="bg-white">
      <SEO
        title="SOLAR Resource Guide: Children & Disclosure + Relationship Rebuilding Toolkit | The SOLAR Project"
        description="A warm, practical toolkit for families navigating disclosure to children, managing wider family reactions, rebuilding trust, and sustaining resilience across investigation, incarceration, supervision, and registry."
        keywords="SOLAR, disclosure to children, family toolkit, incarceration, supervision, registry, relationship rebuilding, trauma-informed, resilience"
      />

      {/* Hero / Header */}
      <section className="bg-gradient-to-r from-amber-700/90 to-rose-600/90 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/resources"
              className="inline-flex items-center text-white/90 hover:text-white underline underline-offset-4"
            >
              ← Back to Resources
            </Link>
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 ring-1 ring-white/30">
            Family Toolkit
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4">
            🌱 Children & Disclosure + Relationship Rebuilding Toolkit
          </h1>
          <p className="mt-4 text-white/90 max-w-3xl">
            <em>(For families of an impacted individual in any stage: investigation, pretrial, incarceration, supervision, registry)</em>
          </p>

          <p className="mt-5 text-lg text-white/95 max-w-3xl">
            A step-by-step guide with age-appropriate language, scripts, and exercises to support disclosure to
            children, manage extended family reactions, rebuild trust, and grow resilience over time.
          </p>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-amber-600 to-rose-500" />

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ShareBar />

        <article className="prose prose-slate max-w-none prose-a:text-blue-700 hover:prose-a:text-blue-900 prose-strong:font-semibold">
          {/* Intro */}
          <h1>🌟 Introduction</h1>
          <p>
            When someone in your family is arrested, investigated, incarcerated, or placed on a registry, it can feel like
            your entire world has been turned inside out. Overnight, the life you thought you knew changes — and suddenly
            you are faced with impossible questions: <em>What do I tell my children? How do I face relatives or neighbors?
            How do we keep moving forward?</em>
          </p>
          <p>
            If you are reading this, you may feel fear, shame, confusion, or even anger. Please know: <strong>you are not
            alone.</strong> Thousands of families walk this path every year, and while no two stories are the same, there
            are safe, thoughtful ways to navigate these conversations and rebuild trust.
          </p>
          <p>
            This guide is designed to be a <strong>hand to hold</strong> in that journey. It blends two approaches:
          </p>
          <ul>
            <li>📖 A <strong>step-by-step guide</strong> with clear, age-appropriate strategies for talking with children and family.</li>
            <li>🛠️ A <strong>practical toolkit</strong> filled with scripts, exercises, and resources to help you and your loved ones begin healing and reconnecting.</li>
          </ul>
          <p>
            👉 <strong>Note on language:</strong> In this guide we use the term <em>“impacted individual”</em> to describe
            the person at the center of the legal process — whether they are under investigation, incarcerated, on
            supervision, or on the registry. It avoids labels like <em>“offender”</em> or <em>“accused”</em> that may not
            apply at every stage, and keeps the focus on the person’s humanity.
          </p>
          <p>
            ✨ You do not have to get this perfect. What matters most is showing up with honesty, love, and consistency.
            With patience and courage, families can move through even the most difficult circumstances together.
          </p>

          <Callout tone="note" title="Important Reminder" icon="⚠️">
            <p>
              Every state is different. Some boards block registrants outright, others only for certain crimes, and many
              now have <strong>fair-chance laws</strong> that require them to look at rehabilitation and relevance instead
              of issuing blanket bans. <strong>Always check your own state’s rules first.</strong>
            </p>
          </Callout>

          <Divider />

          {/* Step 1 */}
          <BandHeader
            step="1"
            emoji="🧘"
            title="Step 1: Stabilize & Ground Yourself"
            subtitle="Put on your own oxygen mask first so you can support children and make thoughtful decisions."
          />
          <p>
            When a crisis erupts, your body and mind may go into survival mode — racing thoughts, panic, exhaustion, or
            numbness. Before you can support children, rebuild relationships, or make thoughtful decisions, you must first
            steady yourself. Think of this as putting on your own oxygen mask before helping others.
          </p>
          <p>This step is about <strong>finding your footing</strong>, so that the storm around you doesn’t sweep you away.</p>

          <h3>🌍 Universal Guidance</h3>
          <ol>
            <li>
              🌬️ <strong>Breathe and Slow Down</strong>
              <ul>
                <li>Inhale deeply through your nose, hold for three seconds, exhale slowly. Repeat.</li>
                <li>
                  Even 60 seconds of intentional breathing can lower panic enough to think clearly — a practice recommended
                  in <a href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener">
                  trauma-informed care</a>.
                </li>
              </ul>
            </li>
            <li>
              📝 <strong>Name the Crisis, Not Just the Feelings</strong>
              <ul>
                <li>Write down exactly what has happened in simple terms: <em>“My partner was arrested today.”</em></li>
                <li>Writing facts keeps your mind from spinning in endless “what-ifs.”</li>
              </ul>
            </li>
            <li>
              🍎 <strong>Ground in Basics</strong>
              <ul>
                <li>Eat something nourishing. Drink water. Sleep if you can.</li>
                <li>
                  Stability in routines helps adults and children — see{" "}
                  <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">
                    National Child Traumatic Stress Network
                  </a>.
                </li>
              </ul>
            </li>
            <li>
              🤝 <strong>Identify Safe People</strong>
              <ul>
                <li>Call one person who won’t judge or gossip — one trusted person is enough.</li>
                <li>If needed, use a helpline or professional support; many reentry orgs maintain confidential hotlines.</li>
              </ul>
            </li>
            <li>
              🛑 <strong>Avoid Rash Decisions</strong>
              <ul>
                <li>Delay big disclosures, financial changes, or confrontations while in shock.</li>
                <li>Focus on the next 24 hours: <em>“What do I need to get through today safely?”</em></li>
              </ul>
            </li>
          </ol>

          <Callout tone="tip" title="Pro Tip" icon="💡">
            <p>
              In the first 72 hours of a crisis, it’s normal to feel like you’re drowning. Small acts of care — a shower,
              a walk, a phone call — are lifelines.
            </p>
          </Callout>

          <h3>🎭 Role-Based Self-Care</h3>
          <ul>
            <li>
              👤 <strong>For the Impacted Individual</strong>
              <ul>
                <li>Use the structure of your environment to anchor routines.</li>
                <li>Write brief letters of love for future reassurance.</li>
                <li>Request mental-health support early if possible.</li>
              </ul>
            </li>
            <li>
              👪 <strong>For Parents/Guardians (Caregivers at Home)</strong>
              <ul>
                <li>Give yourself permission to process emotions in private.</li>
                <li>Prioritize rest; exhaustion fuels poor decisions.</li>
                <li>Set boundaries; you don’t owe explanations to everyone.</li>
              </ul>
            </li>
            <li>
              💞 <strong>For Spouses/Partners</strong>
              <ul>
                <li>Acknowledge grief or betrayal; they can coexist with love.</li>
                <li>Find one peer (group/therapist) so you don’t unload onto children.</li>
                <li>Delay big decisions until you’re steadier.</li>
              </ul>
            </li>
            <li>
              👵 <strong>For Extended Family</strong>
              <ul>
                <li>Stabilize yourself before stepping in.</li>
                <li>Do grounding activities (walks, journaling, prayer) before offering help.</li>
                <li>Support without judgment; your calm presence matters most.</li>
              </ul>
            </li>
          </ul>

          <h3>🕒 Timeline Guidance</h3>
          <ul>
            <li>
              🚨 <strong>Early Stage (Arrest / Pre-Trial)</strong>
              <ul>
                <li>Shock is highest. Focus on food, housing, childcare, legal counsel.</li>
                <li>Limit media consumption.</li>
              </ul>
            </li>
            <li>
              ⛓️ <strong>Incarceration Stage</strong>
              <ul>
                <li>Build predictable routines (calls, letters, meals).</li>
                <li>Create a support calendar so you’re not isolated.</li>
              </ul>
            </li>
            <li>
              🏠 <strong>Reentry / Supervision</strong>
              <ul>
                <li>Expect stress spikes. Ask: <em>“What’s in my control today?”</em></li>
                <li>Rebuild household rhythms gradually.</li>
              </ul>
            </li>
            <li>
              📜 <strong>Registry / Long-Term</strong>
              <ul>
                <li>Practice pacing to avoid burnout.</li>
                <li>Normalize the new reality for yourself; peer support helps sustain resilience.</li>
              </ul>
            </li>
          </ul>

          <h3>✅ Self-Stabilization Checklist</h3>
          <div className="not-prose space-y-2">
            <ChecklistItem id="s1" checked={!!checked["s1"]} onToggle={toggle}>
              Pause and take three deep breaths.
            </ChecklistItem>
            <ChecklistItem id="s2" checked={!!checked["s2"]} onToggle={toggle}>
              Write down the facts of what has happened.
            </ChecklistItem>
            <ChecklistItem id="s3" checked={!!checked["s3"]} onToggle={toggle}>
              Eat, hydrate, and rest before major decisions.
            </ChecklistItem>
            <ChecklistItem id="s4" checked={!!checked["s4"]} onToggle={toggle}>
              Identify one safe person to talk to.
            </ChecklistItem>
            <ChecklistItem id="s5" checked={!!checked["s5"]} onToggle={toggle}>
              Avoid oversharing until calmer.
            </ChecklistItem>
            <ChecklistItem id="s6" checked={!!checked["s6"]} onToggle={toggle}>
              Set one small goal for today (call lawyer, pick up kids, take a walk).
            </ChecklistItem>
          </div>

          <Divider />

          {/* Step 2 */}
          <BandHeader
            step="2"
            emoji="👶"
            title="Step 2: Disclosure to Children"
            subtitle="Age-appropriate truth, reassurance, and safety — delivered over many conversations."
          />
          <p>
            Few moments feel as impossible as telling a child that a loved one is in legal trouble. Whether your child is
            three, thirteen, or twenty-three, your instinct may be to protect them from the truth. But children sense when
            something is wrong — and silence can be more frightening than honesty.
          </p>
          <p>
            Children who are left in the dark may imagine worst-case scenarios, blame themselves, or feel abandoned.
            Thoughtful disclosure, by contrast, gives children language for what is happening, reassures them that they are
            not at fault, and builds trust that adults will tell them the truth — even when it’s hard.{" "}
            <a
              href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx"
              target="_blank"
              rel="noopener"
            >
              American Academy of Pediatrics
            </a>{" "}
            emphasizes the importance of clear, age-appropriate truth.
          </p>
          <p>
            Disclosure does not have to happen all at once. It is a <strong>process of many conversations</strong> that
            evolve as your child grows and as your family’s circumstances change. Your role is not to provide every detail,
            but to offer <strong>age-appropriate truth, reassurance, and safety</strong>.
          </p>

          <Callout tone="tip" title="Pro Tip" icon="💡">
            <p>
              End each conversation with something grounding — a meal, a bedtime story, a walk. This signals that even
              after hard talks, life goes on and safety remains.
            </p>
          </Callout>

          <h3>🌍 Universal Guidance</h3>
          <ol>
            <li>
              <strong>Prepare Yourself First</strong>
              <ul>
                <li>Practice what you want to say with another adult before speaking to children.</li>
                <li>Write it down; saying it aloud privately helps fine-tune your words.</li>
              </ul>
            </li>
            <li>
              <strong>Choose the Right Moment</strong>
              <ul>
                <li>Pick a quiet, private space. Turn off devices. Sit at their level.</li>
                <li>Avoid “drive-by disclosures” (e.g., en route to school).</li>
              </ul>
            </li>
            <li>
              <strong>Keep It Simple, Honest, and Short</strong>
              <ul>
                <li>Use one or two sentences at a time, then pause for questions.</li>
                <li>Answer what they ask — not what you fear they might ask.</li>
              </ul>
            </li>
            <li>
              <strong>Reassure Safety and Love</strong>
              <ul>
                <li>Say: “You are safe.” “You are loved.” Repeat often.</li>
                <li>
                  See{" "}
                  <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">
                    NCTSN guidance
                  </a>
                  .
                </li>
              </ul>
            </li>
            <li>
              <strong>Expect Reactions</strong>
              <ul>
                <li>Tears, silence, anger, withdrawal, or even laughter are normal.</li>
                <li>Don’t force a “right” reaction. Give time.</li>
              </ul>
            </li>
            <li>
              <strong>Return to the Conversation</strong>
              <ul>
                <li>Think of disclosure as planting seeds; water them with follow-ups over time.</li>
              </ul>
            </li>
          </ol>
          <h3>🗣️ Age-Appropriate Approaches & Scripts</h3>

          <p>📚 <strong>Preschool (3–5 years)</strong></p>
          <ul>
            <li>Script: <em>“Daddy can’t live at home right now because he broke a rule. The helpers are making sure he learns how to do better. You are safe, and you are loved.”</em></li>
            <li>Follow-up: <em>“This is a grown-up problem. You did nothing wrong.”</em></li>
            <li>✅ Keep it under 30 seconds. Offer a hug or drawing activity right after.</li>
          </ul>

          <p>🖍️ <strong>Elementary (6–10 years)</strong></p>
          <ul>
            <li>Script: <em>“Mom is in trouble because she broke an important rule. The people in charge want to make sure it doesn’t happen again. She still loves you, and we are keeping our family safe.”</em></li>
            <li>Follow-up: <em>“I don’t have all the answers right now, but I will always tell you the truth in words you can understand.”</em></li>
            <li>✅ Be ready for repeated questions. It’s okay to say, <em>“I don’t know yet, but I’ll tell you when I do.”</em></li>
          </ul>

          <p>🎒 <strong>Middle School (11–13 years)</strong></p>
          <ul>
            <li>Script: <em>“Uncle made serious mistakes and has to follow special rules given by the court. You can ask me anything, and I’ll always tell you the truth.”</em></li>
            <li>Follow-up: <em>“You may feel embarrassed or angry — that’s normal. You can always talk to me, even if your feelings change from day to day.”</em></li>
            <li>✅ Normalize feelings: <em>“It’s okay to feel confused, upset, or angry.”</em></li>
          </ul>

          <p>📱 <strong>Teenagers (14–18 years)</strong></p>
          <ul>
            <li>Script: <em>“Your dad is on supervision because of choices he made that broke the law. That doesn’t change his love for you. We can talk about what this means for our family.”</em></li>
            <li>Follow-up: <em>“You have a right to your feelings. Even if they’re hard, I’ll listen without judgment.”</em></li>
            <li>✅ Allow space for anger or distance; avoid lecturing.</li>
          </ul>

          <p>🎓 <strong>Young Adults (18+)</strong></p>
          <ul>
            <li>Script: <em>“Here are the facts about the legal situation. You may have strong feelings about it, and that’s okay. Let’s keep talking openly about how this affects you and our family.”</em></li>
            <li>Follow-up: <em>“If you’d like, I can connect you with resources or someone outside the family to talk to.”</em></li>
            <li>✅ Treat them as partners; offer resources for independent processing.</li>
          </ul>

          <p>
            🧸 Resources like{" "}
            <a href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener">
              Sesame Workshop’s incarceration toolkit
            </a>{" "}
            give age-specific videos, storybooks, and caregiver guides.
          </p>

          <h3>🎭 Role-Based Guidance</h3>
          <ul>
            <li>
              👤 <strong>For the Impacted Individual</strong>
              <ul>
                <li>If you cannot be present, write a brief message of love a caregiver can read aloud.</li>
                <li>Keep it simple. Share love, not guilt.</li>
                <li>Don’t take anger or distance personally; it’s part of processing.</li>
              </ul>
            </li>
            <li>
              👪 <strong>For Parents/Guardians (Caregivers at Home)</strong>
              <ul>
                <li>Decide on one script together for consistency.</li>
                <li>Expect to repeat the same words many times.</li>
                <li>It’s okay to say, <em>“I don’t know, but I’ll find out.”</em></li>
              </ul>
            </li>
            <li>
              💞 <strong>For Spouses/Partners</strong>
              <ul>
                <li>Don’t let your own anger spill into the disclosure.</li>
                <li>Validate children’s feelings even if different from yours.</li>
                <li>Practice active listening (“I hear you’re upset”) before correcting.</li>
              </ul>
            </li>
            <li>
              👵 <strong>For Extended Family</strong>
              <ul>
                <li>Support with calm presence, not probing questions.</li>
                <li>Use the family’s chosen script if children ask.</li>
                <li>Redirect kindly: <em>“That’s something your parents will talk to you about.”</em></li>
              </ul>
            </li>
          </ul>

          <h3>🕒 Timeline Guidance</h3>
          <ul>
            <li>
              🚨 <strong>Early Stage (Arrest / Pre-Trial)</strong>
              <ul>
                <li>Keep explanations minimal. Focus on safety and temporary changes.</li>
                <li>Script: <em>“Dad isn’t home because adults are helping him with a problem. You are safe.”</em></li>
              </ul>
            </li>
            <li>
              ⛓️ <strong>Incarceration Stage</strong>
              <ul>
                <li>Prepare children for visit realities (security, uniforms, waiting rooms).</li>
                <li>Create pre/post-visit rituals (draw before, ice cream after) for stability.</li>
                <li>Be honest about limits: <em>“We may not be able to hug, but we’ll see each other.”</em></li>
              </ul>
            </li>
            <li>
              🏠 <strong>Reentry / Supervision</strong>
              <ul>
                <li>Explain new rules simply (curfews, check-ins).</li>
                <li>Celebrate small routines returning (family dinners, bedtime rituals).</li>
                <li>Acknowledge fears without defensiveness.</li>
              </ul>
            </li>
            <li>
              📜 <strong>Registry / Long-Term</strong>
              <ul>
                <li>Introduce what a registry means as children mature.</li>
                <li>Frame it as one part of life; model dignity when explaining to others.</li>
              </ul>
            </li>
          </ul>

          <h3>✅ Disclosure Checklist</h3>
          <div className="not-prose space-y-2">
            <ChecklistItem id="d1" checked={!!checked["d1"]} onToggle={toggle}>
              Write down what you plan to say.
            </ChecklistItem>
            <ChecklistItem id="d2" checked={!!checked["d2"]} onToggle={toggle}>
              Choose a quiet, private setting.
            </ChecklistItem>
            <ChecklistItem id="d3" checked={!!checked["d3"]} onToggle={toggle}>
              Use short, age-appropriate explanations.
            </ChecklistItem>
            <ChecklistItem id="d4" checked={!!checked["d4"]} onToggle={toggle}>
              Reassure love and safety directly.
            </ChecklistItem>
            <ChecklistItem id="d5" checked={!!checked["d5"]} onToggle={toggle}>
              Expect questions — answer simply; don’t overexplain.
            </ChecklistItem>
            <ChecklistItem id="d6" checked={!!checked["d6"]} onToggle={toggle}>
              End with a comforting, normal activity.
            </ChecklistItem>
            <ChecklistItem id="d7" checked={!!checked["d7"]} onToggle={toggle}>
              Revisit the conversation as children grow.
            </ChecklistItem>
            <ChecklistItem id="d8" checked={!!checked["d8"]} onToggle={toggle}>
              Normalize all reactions — silence, tears, anger.
            </ChecklistItem>
            <ChecklistItem id="d9" checked={!!checked["d9"]} onToggle={toggle}>
              Remind: <em>“This is not your fault.”</em>
            </ChecklistItem>
          </div>

          <Divider />

          {/* Step 3 */}
          <BandHeader
            step="3"
            emoji="👨‍👩‍👧"
            title="Step 3: Managing Family Reactions & Extended Network"
            subtitle="Protect your stability and your children with boundaries and consistent messaging."
          />
          <p>
            Once the immediate shock settles, you may find yourself facing the wider circle of family, friends, and
            community. Grandparents, siblings, co-parents, and neighbors may have questions — or judgments. Some may rally
            to support you, while others may withdraw or even lash out.
          </p>
          <p>
            The{" "}
            <a
              href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/"
              target="_blank"
              rel="noopener"
            >
              Children of Incarcerated Parents Bill of Rights
            </a>{" "}
            reminds us that children have the right to be protected from shame and judgment. That starts with how adults —
            relatives, neighbors, friends — handle their reactions.
          </p>
          <p>
            This step is about <strong>navigating those reactions without losing your stability</strong>. Remember: you are
            not required to share every detail with everyone. You can set boundaries. Your goal is to protect your children
            and yourself while maintaining healthy connections where possible.
          </p>

          <h3>🌍 Universal Guidance</h3>
          <ol>
            <li>
              <strong>Sort Your Circle</strong>
              <ul>
                <li>
                  Make three lists: <em>Trusted helpers</em> / <em>Practical contacts</em> / <em>Not safe to share with</em>.
                </li>
                <li>This guides who gets details vs. anchor phrases.</li>
              </ul>
            </li>
            <li>
              <strong>Create Anchor Phrases</strong>
              <ul>
                <li>“It’s a difficult situation. We’re focusing on keeping the kids safe.”</li>
                <li>“We’re taking it one day at a time. Thank you for understanding.”</li>
              </ul>
            </li>
          </ol>

          <Callout tone="note" title="Why scripts help" icon="🗣️">
            <p>
              Using pre-prepared scripts reduces anxiety and ensures consistency, a strategy supported by{" "}
              <a href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse" target="_blank" rel="noopener">
                Stop It Now!
              </a>
              .
            </p>
          </Callout>

          <ol start={3}>
            <li>
              <strong>Expect a Spectrum of Reactions</strong>
              <ul>
                <li>Supportive relatives may offer meals, childcare, or listening ears.</li>
                <li>Others may express fear, anger, or harsh judgment.</li>
                <li>Their reactions reflect <em>their</em> fears and biases, not your worth.</li>
              </ul>
            </li>
            <li>
              <strong>Protect Children from Adult Conversations</strong>
              <ul>
                <li>
                  If relatives argue or gossip in front of kids, step in: <em>“We’re not discussing this around the kids.”</em>
                </li>
                <li>Never use children as messengers or mediators.</li>
              </ul>
            </li>
            <li>
              <strong>Find Your Allies</strong>
              <ul>
                <li>Even one or two safe adults can make a world of difference.</li>
                <li>Ask them to echo your anchor phrases to lighten your load.</li>
              </ul>
            </li>
          </ol>

          <Callout tone="tip" title="Pro Tip" icon="💡">
            <p>
              You don’t have to answer every question. <em>Silence is also a boundary.</em> A simple “That’s not something I
              can discuss” is enough.
            </p>
          </Callout>

          <h3>🎭 Role-Based Guidance</h3>
          <ul>
            <li>
              👤 <strong>For the Impacted Individual</strong>
              <ul>
                <li>Accept that some relatives may feel anger or betrayal; don’t demand instant forgiveness.</li>
                <li>Show accountability first, not excuses: “I caused pain. I’m working to do better.”</li>
              </ul>
            </li>
            <li>
              👪 <strong>For Parents/Guardians (Caregivers at Home)</strong>
              <ul>
                <li>Stand firm when pressed for details: “I won’t discuss specifics, but I appreciate your support.”</li>
                <li>Your priority is children’s stability — not satisfying others’ curiosity.</li>
              </ul>
            </li>
            <li>
              💞 <strong>For Spouses/Partners</strong>
              <ul>
                <li>Expect conflicting emotions from your own family; ask for time and respect.</li>
                <li>Don’t get pulled into defending choices repeatedly; set limits.</li>
              </ul>
            </li>
            <li>
              👵 <strong>For Extended Family</strong>
              <ul>
                <li>Help with <em>actions</em>, not opinions: meals, rides, reading with kids.</li>
                <li>Avoid venting or pressuring around children.</li>
              </ul>
            </li>
          </ul>

          <h3>🕒 Timeline Guidance</h3>
          <ul>
            <li>
              🚨 <strong>Early Stage (Arrest / Pre-Trial)</strong>
              <ul>
                <li>Limit sharing to essentials with those who must know.</li>
                <li>Use short phrases: “This is a legal matter. We’re focusing on the children.”</li>
              </ul>
            </li>
            <li>
              ⛓️ <strong>Incarceration Stage</strong>
              <ul>
                <li>
                  Prepare relatives for visit realities; ask them not to quiz kids after. See{" "}
                  <a href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener">
                    Sesame Workshop
                  </a>
                  .
                </li>
                <li>Encourage letters or drawings instead of grilling for updates.</li>
              </ul>
            </li>
            <li>
              🏠 <strong>Reentry / Supervision</strong>
              <ul>
                <li>Acknowledge concerns without defending every choice.</li>
                <li>Limit exposure to relatives who can’t be respectful around children.</li>
              </ul>
            </li>
            <li>
              📜 <strong>Registry / Long-Term</strong>
              <ul>
                <li>Address stigma directly; focus on what you can control as a family.</li>
                <li>Invite supportive relatives into advocacy or education efforts.</li>
              </ul>
            </li>
          </ul>

          <h3>✅ Managing Family Reactions Checklist</h3>
          <div className="not-prose space-y-2">
            <ChecklistItem id="f1" checked={!!checked["f1"]} onToggle={toggle}>
              Identify who truly needs to know details.
            </ChecklistItem>
            <ChecklistItem id="f2" checked={!!checked["f2"]} onToggle={toggle}>
              Create one “anchor phrase” to use consistently.
            </ChecklistItem>
            <ChecklistItem id="f3" checked={!!checked["f3"]} onToggle={toggle}>
              Protect children from overhearing adult discussions.
            </ChecklistItem>
            <ChecklistItem id="f4" checked={!!checked["f4"]} onToggle={toggle}>
              Prepare supportive relatives before visits.
            </ChecklistItem>
            <ChecklistItem id="f5" checked={!!checked["f5"]} onToggle={toggle}>
              Expect both support and criticism.
            </ChecklistItem>
            <ChecklistItem id="f6" checked={!!checked["f6"]} onToggle={toggle}>
              Lean on one or two trusted allies for consistent messaging.
            </ChecklistItem>
            <ChecklistItem id="f7" checked={!!checked["f7"]} onToggle={toggle}>
              Accept that some relationships may shift — and that’s okay.
            </ChecklistItem>
          </div>

          <Divider />

          {/* Step 4 */}
          <BandHeader
            step="4"
            emoji="🤝"
            title="Step 4: Trust Rebuilding Toolkit"
            subtitle="Small, steady, reliable acts prove safety and care over time."
          />
          <p>
            When the legal system enters your life, it doesn’t just take away freedom — it often takes away jobs, income,
            housing, friendships, and social standing. Invitations vanish. Neighbors avoid eye contact. Some people walk out
            of your life entirely.
          </p>
          <p>
            That is why relationships with those who remain — your children, partner, parents, or a handful of trusted
            friends — are more than just important. They are your lifeline.
          </p>
          <p>
            Trust, once broken, can feel impossible to restore. But it is possible. Not through instant fixes or big
            promises, but through <strong>small, steady, reliable acts that prove safety and care over time</strong>. Even
            when everything else is lost, rebuilding trust inside your closest relationships gives you the foundation to
            face the outside world again.
          </p>

          <h3>🌍 Universal Guidance</h3>
          <ol>
            <li>
              <strong>Acknowledge the Break</strong>
              <ul>
                <li>Name what everyone feels: “Trust has been damaged.” Avoid pretending nothing happened.</li>
                <li>
                  Honesty opens the door to repair. See{" "}
                  <a href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust" target="_blank" rel="noopener">
                    APA on rebuilding trust
                  </a>
                  .
                </li>
              </ul>
            </li>
            <li>
              <strong>Begin with Basics</strong>
              <ul>
                <li>Don’t promise to “fix everything.” Focus on stability and following rules.</li>
                <li>Basics are the building blocks of trust.</li>
              </ul>
            </li>
            <li>
              <strong>Consistency Is Everything</strong>
              <ul>
                <li>Trust grows through a thousand small, consistent actions.</li>
              </ul>
            </li>
            <li>
              <strong>Repair, Don’t Defend</strong>
              <ul>
                <li>Own misses quickly: “I didn’t follow through. I’m sorry. Here’s my plan to make it right.”</li>
              </ul>
            </li>
            <li>
              <strong>Build Shared Rituals of Connection</strong>
              <ul>
                <li>Family meetings, bedtime check-ins, Sunday walks create predictability and safety.</li>
              </ul>
            </li>
          </ol>

          <Callout tone="tip" title="Pro Tip" icon="💡">
            <p>Trust is rebuilt less through “big talks” and more through daily actions that show reliability.</p>
          </Callout>

          <h3>🛠️ Practical Tools & Exercises</h3>
          <p>
            Evidence-based family therapy programs such as{" "}
            <a href="https://www.mstservices.com/what-is-mst" target="_blank" rel="noopener">
              Multisystemic Therapy (MST)
            </a>{" "}
            and{" "}
            <a href="https://www.functionalfamilytherapy.com/" target="_blank" rel="noopener">
              Functional Family Therapy (FFT)
            </a>{" "}
            emphasize small, consistent commitments and structured family rituals.
          </p>
          <ul>
            <li>
              <strong>Micro-Commitments</strong> — start with one promise per week and keep it; build gradually.
            </li>
            <li>
              <strong>Family “
                {/* Step 5 */}
          <BandHeader
            step="5"
            emoji="🌄"
            title="Step 5: Ongoing Support & Resilience"
            subtitle="Grow strength, routines, and support networks for the long haul."
          />
          <p>
            The crisis may begin with an arrest, but it doesn’t end there. The reality of long investigations,
            incarceration, supervision, and the registry can stretch for years — sometimes decades. Families need more than
            survival skills; they need <strong>resilience strategies</strong> that carry them through the long haul.
          </p>
          <p>
            Resilience doesn’t mean pretending everything is fine. It means building the strength, routines, and support
            networks that allow your family to keep moving forward, even when challenges continue. This step is about
            finding hope and support not just for today, but for tomorrow and beyond.
          </p>

          <h3>🌍 Universal Guidance</h3>
          <ol>
            <li>
              <strong>Build a Long-Term Support System</strong>
              <ul>
                <li>Identify safe, trustworthy people — even one or two matter.</li>
                <li>
                  Consider programs like the{" "}
                  <a href="https://www.osborneny.org/" target="_blank" rel="noopener">
                    Osborne Association
                  </a>
                  .
                </li>
              </ul>
            </li>
            <li>
              <strong>Invest in Professional Help When Possible</strong>
              <ul>
                <li>Trauma-informed therapists and family counselors offer tools families can’t create alone.</li>
                <li>
                  See{" "}
                  <a
                    href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach"
                    target="_blank"
                    rel="noopener"
                  >
                    SAMHSA’s principles of trauma-informed care
                  </a>
                  .
                </li>
              </ul>
            </li>
            <li>
              <strong>Create Family Routines of Resilience</strong>
              <ul>
                <li>Meetings, game nights, walks, journaling — activities that reinforce a team identity.</li>
              </ul>
            </li>
            <li>
              <strong>Balance Privacy and Connection</strong>
              <ul>
                <li>Protect sensitive details without isolating. Healthy social contact is vital.</li>
                <li>
                  The{" "}
                  <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">
                    NCTSN
                  </a>{" "}
                  warns that isolation compounds child trauma.
                </li>
              </ul>
            </li>
            <li>
              <strong>Keep Perspective</strong>
              <ul>
                <li>Hard seasons don’t last forever. Your family can adapt, grow, and thrive.</li>
                <li>You are more than your hardest moment.</li>
              </ul>
            </li>
          </ol>

          <Callout tone="tip" title="Pro Tip" icon="💡">
            <p>
              Resilience grows best when families celebrate even the smallest victories — a school day completed, a job
              interview taken, a rule followed without reminders.
            </p>
          </Callout>

          <h3>🎭 Role-Based Guidance</h3>
          <ul>
            <li>
              👤 <strong>For the Impacted Individual</strong>
              <ul>
                <li>Invest in growth (therapy, education, work programs) — it’s an investment in family resilience.</li>
                <li>Be transparent about rules and restrictions; clarity strengthens trust.</li>
                <li>Model healthy coping for children.</li>
              </ul>
            </li>
            <li>
              👪 <strong>For Parents/Guardians (Caregivers at Home)</strong>
              <ul>
                <li>Prioritize your mental health to avoid burnout.</li>
                <li>Build your own support team; don’t carry it alone.</li>
                <li>Teach children practical coping tools (breathing, journaling, sports, art).</li>
              </ul>
            </li>
            <li>
              💞 <strong>For Spouses/Partners</strong>
              <ul>
                <li>Roles will shift over time; allow space for joy, not just duty.</li>
                <li>Hold onto your own dreams; resilient families include resilient partners.</li>
              </ul>
            </li>
            <li>
              👵 <strong>For Extended Family</strong>
              <ul>
                <li>Show up for milestones and ordinary days alike; practical help lightens the load.</li>
              </ul>
            </li>
          </ul>

          <h3>🕒 Timeline Guidance</h3>
          <ul>
            <li>
              🚨 <strong>Early Stage (Arrest / Pre-Trial)</strong>
              <ul>
                <li>Anchor resilience in stability: meals, school, sleep, daily life continuing.</li>
              </ul>
            </li>
            <li>
              ⛓️ <strong>Incarceration Stage</strong>
              <ul>
                <li>Normalize contact routines (letters, visits, calls); prepare kids for mixed feelings.</li>
              </ul>
            </li>
            <li>
              🏠 <strong>Reentry / Supervision</strong>
              <ul>
                <li>Manage expectations: “This won’t be perfect at first, but we’ll adjust together.”</li>
                <li>Frame rules as family safety, not punishment.</li>
              </ul>
            </li>
            <li>
              📜 <strong>Registry / Long-Term</strong>
              <ul>
                <li>Shift from survival to growth routines: traditions, trips, advocacy, projects.</li>
                <li>Teach teens to handle stigma with dignity; shared purpose builds resilience.</li>
              </ul>
            </li>
          </ul>

          <h3>✅ Resilience Checklist</h3>
          <div className="not-prose space-y-2">
            <ChecklistItem id="r1" checked={!!checked["r1"]} onToggle={toggle}>
              Identify at least one safe support person or group.
            </ChecklistItem>
            <ChecklistItem id="r2" checked={!!checked["r2"]} onToggle={toggle}>
              Create a weekly family ritual that builds connection.
            </ChecklistItem>
            <ChecklistItem id="r3" checked={!!checked["r3"]} onToggle={toggle}>
              Celebrate small victories to build hope.
            </ChecklistItem>
            <ChecklistItem id="r4" checked={!!checked["r4"]} onToggle={toggle}>
              Seek professional support if available.
            </ChecklistItem>
            <ChecklistItem id="r5" checked={!!checked["r5"]} onToggle={toggle}>
              Protect privacy while maintaining healthy social connections.
            </ChecklistItem>
            <ChecklistItem id="r6" checked={!!checked["r6"]} onToggle={toggle}>
              Remind children (and yourself): “We are more than this situation.”
            </ChecklistItem>
          </div>

          <Divider />

          {/* Conclusion */}
          <h1>🌟 Conclusion: A Path Forward</h1>
          <p>
            If you’ve read this far, it means you are committed to holding your family together in the middle of one of the
            hardest journeys imaginable. That commitment alone is an act of love and resilience.
          </p>
          <p>
            The truth is: there are no perfect words and no perfect steps. Disclosure may feel messy. Trust may take longer
            to rebuild than you hoped. Family reactions may surprise you, for better or worse. And resilience may sometimes
            feel like survival.
          </p>
          <p>
            But you are not alone. Families across the country are finding ways to adapt, to grow, and to keep their love
            intact — supported by resources like{" "}
            <a href="https://sesameworkshop.org/resources/coping-with-incarceration" target="_blank" rel="noopener">
              Sesame Workshop’s caregiver tools
            </a>{" "}
            and{" "}
            <a
              href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse"
              target="_blank"
              rel="noopener"
            >
              Stop It Now!’s family safety guides
            </a>
            .
          </p>
          <p>
            Your children don’t need you to have all the answers. They need your honesty, your steadiness, and your
            willingness to show up, again and again. Your partner, parents, or siblings may not always understand, but with
            patience, boundaries, and compassion, relationships can heal and even deepen.
          </p>
          <p>
            🌅 There is life beyond this moment. It may look different than the life you imagined, but it can still hold
            safety, joy, dignity, and connection. With courage, love, and the support of others who understand, your family
            can emerge not only surviving, but stronger and wiser.
          </p>

          <Divider />
                  
{/* Sources & Resources */}
<section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12" id="sources-resources">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
    <div className="flex items-center">
      <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">📚</div>
      <div>
        <h2 className="text-2xl font-bold">Sources & Resources</h2>
        <p className="text-slate-200">Trusted, family-friendly materials you can reference and share</p>
      </div>
    </div>
  </div>

  <div className="p-6">
    <ul className="list-disc pl-6 space-y-2 text-slate-800">
      <li>
        <a
          href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx"
          target="_blank"
          rel="noopener"
          className="text-blue-700 underline"
        >
          American Academy of Pediatrics – Tips to Support Children When a Parent is in Prison
        </a>
      </li>
      <li>
        <a
          href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach"
          target="_blank"
          rel="noopener"
          className="text-blue-700 underline"
        >
          SAMHSA – 6 Guiding Principles of Trauma-Informed Approach
        </a>
      </li>
      <li>
        <a
          href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma"
          target="_blank"
          rel="noopener"
          className="text-blue-700 underline"
        >
          National Child Traumatic Stress Network – About Child Trauma
        </a>
      </li>
      <li>
        <a
          href="https://sesameworkshop.org/resources/coping-with-incarceration/"
          target="_blank"
          rel="noopener"
          className="text-blue-700 underline"
        >
          Sesame Workshop – Coping With Incarceration
        </a>
      </li>
      <li>
        <a
          href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse"
          target="_blank"
          rel="noopener"
          className="text-blue-700 underline"
        >
          Stop It Now! – Parents Talking to Children About Sexual Abuse
        </a>
      </li>
      <li>
        <a
          href="https://www.atsa.com/atsa-practice-guidelines"
          target="_blank"
          rel="noopener"
          className="text-blue-700 underline"
        >
          Association for the Treatment and Prevention of Sexual Abuse (ATSA) – Practice Guidelines
        </a>
      </li>
      <li>
        <a
          href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/"
          target="_blank"
          rel="noopener"
          className="text-blue-700 underline"
        >
          Children of Incarcerated Parents Bill of Rights – Osborne Association
        </a>
      </li>
      <li>
        <a
          href="https://www.mstservices.com/what-is-mst"
          target="_blank"
          rel="noopener"
          className="text-blue-700 underline"
        >
          Multisystemic Therapy (MST)
        </a>
        {" "}and{" "}
        <a
          href="https://www.functionalfamilytherapy.com/"
          target="_blank"
          rel="noopener"
          className="text-blue-700 underline"
        >
          Functional Family Therapy (FFT)
        </a>
      </li>
      <li>
        <a
          href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust"
          target="_blank"
          rel="noopener"
          className="text-blue-700 underline"
        >
          American Psychological Association – Rebuilding Trust
        </a>
      </li>
    </ul>
  </div>
</section>

</article>
</main>
</div>
