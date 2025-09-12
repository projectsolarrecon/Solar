import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

/** Simple helpers kept local to avoid import issues */
function Divider() {
  return <div className="h-1 bg-gradient-to-r from-slate-200 to-slate-100 my-10" />;
}

type CalloutProps = {
  title?: string;
  tone?: "info" | "tip" | "warn" | "note" | "success";
  children: React.ReactNode;
};
function Callout({ title, tone = "info", children }: CalloutProps) {
  const tones: Record<string, string> = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    tip: "bg-emerald-50 border-emerald-200 text-emerald-800",
    warn: "bg-amber-50 border-amber-200 text-amber-800",
    note: "bg-violet-50 border-violet-200 text-violet-800",
    success: "bg-green-50 border-green-200 text-green-800",
  };
  return (
    <div className={`rounded-xl border p-5 not-prose ${tones[tone] || tones.info}`}>
      {title ? <h3 className="font-semibold mb-2">{title}</h3> : null}
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export default function ChildrenDisclosureToolkit(): JSX.Element {
  return (
    <div className="bg-white">
      <SEO
        title="SOLAR Resource Guide: Children & Disclosure + Relationship Rebuilding Toolkit"
        description="Warm, step-by-step toolkit for families navigating disclosure to children, managing reactions, rebuilding trust, and growing long-term resilience."
        keywords="SOLAR, disclosure, talking to children, incarceration, supervision, registry, family resilience, trust rebuilding"
      />

      {/* Header / Hero */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Link
              to="/resources"
              className="inline-flex items-center text-slate-200 hover:text-white transition-colors group"
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
              Back to Resources
            </Link>
          </div>

          <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
            Family Toolkit
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 leading-tight">
            🌱 Children & Disclosure + Relationship Rebuilding Toolkit
          </h1>
          <p className="text-slate-100 text-lg">
            <em>(For families of an impacted individual in any stage: investigation, pretrial, incarceration,
            supervision, registry)</em>
          </p>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600" />

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
          {/* Introduction */}
          <h1 id="introduction">🌟 Introduction</h1>
          <p>
            When someone in your family is arrested, investigated, incarcerated, or placed on a registry, it can
            feel like your entire world has been turned inside out. Overnight, the life you thought you knew changes
            — and suddenly you are faced with impossible questions: <em>What do I tell my children? How do I face
            relatives or neighbors? How do we keep moving forward?</em>
          </p>
          <p>
            If you are reading this, you may feel fear, shame, confusion, or even anger. Please know: <strong>you are
            not alone.</strong> Thousands of families walk this path every year, and while no two stories are the same,
            there are safe, thoughtful ways to navigate these conversations and rebuild trust.
          </p>
          <p>
            This guide is designed to be a <strong>hand to hold</strong> in that journey. It blends two approaches:
          </p>
          <ul>
            <li>📖 A <strong>step-by-step guide</strong> with clear, age-appropriate strategies for talking with children and family.</li>
            <li>🛠️ A <strong>practical toolkit</strong> filled with scripts, exercises, and resources to help you and your loved ones begin healing and reconnecting.</li>
          </ul>
          <p>
            👉 <strong>Note on language:</strong> In this guide we use the term <em>“impacted individual”</em> to
            describe the person at the center of the legal process — whether they are under investigation, incarcerated,
            on supervision, or on the registry. It avoids labels like <em>“offender”</em> or <em>“accused”</em> that may
            not apply at every stage, and keeps the focus on the person’s humanity.
          </p>
          <p>
            ✨ You do not have to get this perfect. What matters most is showing up with honesty, love, and consistency.
            With patience and courage, families can move through even the most difficult circumstances together.
          </p>

          <Divider />

          {/* Step 1 */}
          <h1 id="step-1">🧘 Step 1: Stabilize & Ground Yourself</h1>
          <p>
            When a crisis erupts, your body and mind may go into survival mode — racing thoughts, panic, exhaustion, or
            numbness. Before you can support children, rebuild relationships, or make thoughtful decisions, you must
            first steady yourself. Think of this as putting on your own oxygen mask before helping others.
          </p>
          <p>This step is about <strong>finding your footing</strong>, so that the storm around you doesn’t sweep you away.</p>

          <h2>🌍 Universal Guidance</h2>
          <ol>
            <li>
              🌬️ <strong>Breathe and Slow Down</strong>
              <ul>
                <li>Your nervous system is likely on high alert. Inhale deeply through your nose, hold for three seconds, exhale slowly. Repeat.</li>
                <li>
                  Even 60 seconds of intentional breathing can lower panic enough to think clearly — a practice recommended in{" "}
                  <a href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener">
                    trauma-informed care
                  </a>.
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
                  These sound small, but they are the foundation for every bigger decision you will need to make. The{" "}
                  <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">
                    National Child Traumatic Stress Network
                  </a>{" "}
                  notes that stability in daily routines is one of the strongest anchors for children and adults facing trauma.
                </li>
              </ul>
            </li>
            <li>
              🤝 <strong>Identify Safe People</strong>
              <ul>
                <li>Who can you call right now who won’t judge or gossip? One trusted person is enough.</li>
                <li>If you don’t have someone in your circle, reach out to a helpline or professional support — many reentry and family service organizations maintain confidential hotlines.</li>
              </ul>
            </li>
            <li>
              🛑 <strong>Avoid Rash Decisions</strong>
              <ul>
                <li>Don’t rush into big disclosures, major financial changes, or confrontations while your body is still in shock.</li>
                <li>Focus on 24-hour survival blocks: <em>“What do I need to get through today safely?”</em></li>
              </ul>
            </li>
          </ol>

          <Callout title="💡 Pro Tip" tone="tip">
            <p>In the first 72 hours of a crisis, it’s normal to feel like you’re drowning. Small acts of care — a shower, a walk, a phone call — are lifelines.</p>
          </Callout>

          <h2>🎭 Role-Based Self-Care</h2>
          <ul>
            <li>
              👤 <strong>For the Impacted Individual</strong>
              <ul>
                <li>Use the structure of your environment (jail, bond conditions, supervision) to your advantage — routines can anchor you.</li>
                <li>Write affirmations or short letters of love; this can calm your mind while offering future reassurance for family.</li>
                <li>If possible, request mental health support early. Many facilities have crisis counselors or chaplains.</li>
              </ul>
            </li>
            <li>
              👪 <strong>For Parents/Guardians (Caregivers at Home)</strong>
              <ul>
                <li>Give yourself permission to step away and cry, scream, or write — in private.</li>
                <li>Prioritize rest: exhaustion fuels poor decisions and emotional overreactions.</li>
                <li>Set boundaries: you don’t owe explanations to every neighbor or relative right away.</li>
              </ul>
            </li>
            <li>
              💞 <strong>For Spouses/Partners</strong>
              <ul>
                <li>Acknowledge your grief and betrayal, if present. Both can coexist with love.</li>
                <li>Connect with one peer (support group, friend, therapist) to process, so you don’t unload onto children.</li>
                <li>Allow yourself to delay big choices (divorce, moving, financial shifts) until you are steadier.</li>
              </ul>
            </li>
            <li>
              👵 <strong>For Extended Family</strong>
              <ul>
                <li>Stabilize yourself before stepping in to “help.” If you are panicked, children will feel it.</li>
                <li>Do grounding activities (gardening, prayer, walks, journaling) before offering childcare or meals.</li>
                <li>Check your role: support without judgment. Your calm presence is more valuable than advice.</li>
              </ul>
            </li>
          </ul>

          <h2>🕒 Timeline Guidance</h2>
          <ul>
            <li>
              🚨 <strong>Early Stage (Arrest / Pre-Trial)</strong>
              <ul>
                <li>Shock is at its peak. Focus only on immediate needs: food, housing, childcare, legal representation.</li>
                <li>Limit news/social media consumption — it fuels panic.</li>
              </ul>
            </li>
            <li>
              ⛓️ <strong>Incarceration Stage</strong>
              <ul>
                <li>Build your own routine: set daily times for calls, meals, or letters. Predictability will stabilize you.</li>
                <li>Create a support calendar: rotate friends/family to help so you’re not isolated or overwhelmed.</li>
              </ul>
            </li>
            <li>
              🏠 <strong>Reentry / Supervision</strong>
              <ul>
                <li>Expect your stress to spike again with the adjustment. Use self-check-ins: <em>“What’s in my control today?”</em></li>
                <li>Build new household rhythms gradually; don’t expect “normal” to return overnight.</li>
              </ul>
            </li>
            <li>
              📜 <strong>Registry / Long-Term</strong>
              <ul>
                <li>Practice pacing: balance advocacy, parenting, and self-care so burnout doesn’t consume you.</li>
                <li>Normalize the new reality in your own mind before trying to normalize it for children. Therapy or peer support can help sustain resilience.</li>
              </ul>
            </li>
          </ul>

          <h2>✅ Self-Stabilization Checklist</h2>
          <ul>
            <li>[ ] Pause and take three deep breaths.</li>
            <li>[ ] Write down the facts of what has happened.</li>
            <li>[ ] Eat, hydrate, and rest before making major decisions.</li>
            <li>[ ] Identify one safe person to talk to.</li>
            <li>[ ] Avoid oversharing or overexplaining until calmer.</li>
            <li>[ ] Set one small goal for today (call lawyer, pick up kids, take a walk).</li>
          </ul>
          <Divider />

          {/* Step 2 */}
          <h1 id="step-2">👶 Step 2: Disclosure to Children</h1>
          <p>
            Few moments feel as impossible as telling a child that a loved one is in legal trouble. Whether your child
            is three, thirteen, or twenty-three, your instinct may be to protect them from the truth. But children sense
            when something is wrong — and silence can be more frightening than honesty.
          </p>
          <p>
            Children who are left in the dark may imagine worst-case scenarios, blame themselves, or feel abandoned.
            Thoughtful disclosure, by contrast, gives children language for what is happening, reassures them that they
            are not at fault, and builds trust that adults will tell them the truth — even when it’s hard.{" "}
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
            evolve as your child grows and as your family’s circumstances change. Your role is not to provide every
            detail, but to offer <strong>age-appropriate truth, reassurance, and safety</strong>.
          </p>

          <h2>🌍 Universal Guidance</h2>
          <ol>
            <li>
              <strong>Prepare Yourself First</strong>
              <ul>
                <li>Children mirror your emotional state. Practice what you want to say with another adult before speaking to them.</li>
                <li>Write it down. Saying words aloud in private helps you notice phrases that may be too heavy or confusing.</li>
              </ul>
            </li>
            <li>
              <strong>Choose the Right Moment</strong>
              <ul>
                <li>Pick a quiet, private space. Turn off phones and TV. Sit at their level if they’re young.</li>
                <li>Avoid “drive-by disclosures” (e.g., in the car on the way to school).</li>
              </ul>
            </li>
            <li>
              <strong>Keep It Simple, Honest, and Short</strong>
              <ul>
                <li>Use one or two sentences at a time. Pause. Let them ask questions.</li>
                <li>Don’t overload them with details — answer what they ask, not what you fear they might ask.</li>
              </ul>
            </li>
            <li>
              <strong>Reassure Safety and Love</strong>
              <ul>
                <li>Say directly: <em>“You are safe.”</em></li>
                <li>
                  Say directly: <em>“You are loved.”</em> Repeat often. The{" "}
                  <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">
                    NCTSN
                  </a>{" "}
                  emphasizes that children in traumatic situations most need repeated reassurance of safety and care.
                </li>
              </ul>
            </li>
            <li>
              <strong>Expect Reactions</strong>
              <ul>
                <li>Tears, silence, anger, withdrawal, or even laughter are all normal.</li>
                <li>Don’t force a “right” reaction. Give them time.</li>
              </ul>
            </li>
            <li>
              <strong>Return to the Conversation</strong>
              <ul>
                <li>Children’s understanding grows with age. A preschooler’s disclosure may last 30 seconds, while a teen’s may last an hour — and both are valid.</li>
                <li>Think of disclosure as planting seeds: you water them with follow-up conversations over time.</li>
              </ul>
            </li>
          </ol>

          <Callout title="💡 Pro Tip" tone="tip">
            <p>
              End each conversation with something grounding — a meal, a bedtime story, a walk. This signals that even
              after hard talks, life goes on and safety remains.
            </p>
          </Callout>

          <h2>🗣️ Age-Appropriate Approaches & Scripts</h2>
          <ul>
            <li>
              📚 <strong>Preschool (3–5 years)</strong>
              <ul>
                <li>
                  Script: <em>“Daddy can’t live at home right now because he broke a rule. The helpers are making
                  sure he learns how to do better. You are safe, and you are loved.”</em>
                </li>
                <li>Follow-up line: <em>“This is a grown-up problem. You did nothing wrong.”</em></li>
                <li>✅ Keep it under 30 seconds. Offer a hug, playtime, or drawing activity right after.</li>
              </ul>
            </li>
            <li>
              🖍️ <strong>Elementary (6–10 years)</strong>
              <ul>
                <li>
                  Script: <em>“Mom is in trouble because she broke an important rule. The people in charge want to make sure it doesn’t happen again. She still loves you, and we are keeping our family safe.”</em>
                </li>
                <li>Follow-up line: <em>“I don’t have all the answers right now, but I will always tell you the truth in words you can understand.”</em></li>
                <li>✅ Be ready for repeated questions. It’s okay to say, <em>“That’s a good question. I don’t know the answer yet, but I’ll tell you when I do.”</em></li>
              </ul>
            </li>
            <li>
              🎒 <strong>Middle School (11–13 years)</strong>
              <ul>
                <li>
                  Script: <em>“Uncle made serious mistakes and has to follow special rules given by the court. You can ask me anything, and I’ll always tell you the truth.”</em>
                </li>
                <li>Follow-up line: <em>“You may feel embarrassed or angry — that’s normal. You can always talk to me, even if your feelings change from day to day.”</em></li>
                <li>✅ This age group may feel embarrassment. Normalize feelings: <em>“It’s okay to feel confused, upset, or even angry.”</em></li>
              </ul>
            </li>
            <li>
              📱 <strong>Teenagers (14–18 years)</strong>
              <ul>
                <li>
                  Script: <em>“Your dad is on supervision because of choices he made that broke the law. That doesn’t change his love for you. We can talk about what this means for our family.”</em>
                </li>
                <li>Follow-up line: <em>“You have a right to your feelings. Even if they’re hard, I’ll listen without judgment.”</em></li>
                <li>✅ Allow space for anger or rejection. Avoid lecturing. Validate their feelings, even if they’re hard to hear.</li>
              </ul>
            </li>
            <li>
              🎓 <strong>Young Adults (18+)</strong>
              <ul>
                <li>
                  Script: <em>“Here are the facts about the legal situation. You may have strong feelings about it, and that’s okay. Let’s keep talking openly about how this affects you and our family.”</em>
                </li>
                <li>Follow-up line: <em>“If you’d like, I can connect you with resources or someone outside the family to talk to.”</em></li>
                <li>✅ Treat them as partners in the conversation. Offer resources (articles, support groups, therapy) for independent processing.</li>
              </ul>
            </li>
          </ul>
          <p>
            🧸 Resources like{" "}
            <a href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener">
              Sesame Workshop’s incarceration toolkit
            </a>{" "}
            give age-specific videos, storybooks, and caregiver guides.
          </p>

          <h2>🎭 Role-Based Guidance</h2>
          <ul>
            <li>
              👤 <strong>For the Impacted Individual</strong>
              <ul>
                <li>If you cannot be present, write a brief message of love that another caregiver can read aloud.</li>
                <li>Keep it simple. Share your love, not your guilt.</li>
                <li>If children express anger or distance, don’t take it personally — this is part of their processing.</li>
              </ul>
            </li>
            <li>
              👪 <strong>For Parents/Guardians (Caregivers at Home)</strong>
              <ul>
                <li>Decide on one script together. Consistency prevents confusion and anxiety.</li>
                <li>Expect to repeat the same words many times — consistency builds safety.</li>
                <li>Prepare yourself for tough questions, but also know it’s okay to say, <em>“I don’t know, but I’ll find out.”</em></li>
              </ul>
            </li>
            <li>
              💞 <strong>For Spouses/Partners</strong>
              <ul>
                <li>Don’t let your own anger at the impacted individual spill into the disclosure.</li>
                <li>Reassure children that <em>their feelings</em> matter and can be different from yours.</li>
                <li>Practice “active listening”: reflect back what children say (“I hear you’re upset”) instead of correcting them immediately.</li>
              </ul>
            </li>
            <li>
              👵 <strong>For Extended Family</strong>
              <ul>
                <li>Support children with calm presence, not probing questions.</li>
                <li>
                  Use the family’s chosen script if children ask. Example: <em>“Your mom isn’t here because she broke a rule. Your dad will explain more when it’s time.”</em>
                </li>
                <li>Avoid over-explaining. If unsure, redirect gently: <em>“That’s something your parents will talk to you about.”</em></li>
              </ul>
            </li>
          </ul>

          <h2>🕒 Timeline Guidance</h2>
          <ul>
            <li>
              🚨 <strong>Early Stage (Arrest / Pre-Trial)</strong>
              <ul>
                <li>Keep explanations minimal. Focus on temporary changes and immediate safety.</li>
                <li>Script: <em>“Dad isn’t home because adults are helping him with a problem. You are safe.”</em></li>
                <li>Expect confusion. Reassure with routine (school, meals, bedtime).</li>
              </ul>
            </li>
            <li>
              ⛓️ <strong>Incarceration Stage</strong>
              <ul>
                <li>Prepare children for what visits will look like: uniforms, security, waiting rooms.</li>
                <li>Create pre- and post-visit rituals (drawing a picture before, ice cream after) to stabilize emotions.</li>
                <li>Be honest about limits: <em>“We may not be able to hug at visits, but we’ll still see each other.”</em></li>
              </ul>
            </li>
            <li>
              🏠 <strong>Reentry / Supervision</strong>
              <ul>
                <li>Explain new rules simply: <em>“Mom has to be home at 7 p.m. every night. That’s one of the rules she must follow.”</em></li>
                <li>Celebrate small routines that restore family life — family dinners, bedtime rituals.</li>
                <li>Give children space to share fears that rules might be broken again. Acknowledge their concerns without defensiveness.</li>
              </ul>
            </li>
            <li>
              📜 <strong>Registry / Long-Term</strong>
              <ul>
                <li>As children mature, gradually introduce what a registry means.</li>
                <li>Frame it as one part of life, not the whole story: <em>“This is a rule we live with, but it doesn’t define who we are.”</em></li>
                <li>With teens, talk openly about stigma and how to handle peers’ questions. Model dignity and calm when explaining the registry to others.</li>
              </ul>
            </li>
          </ul>

          <h2>✅ Disclosure Checklist</h2>
          <ul>
            <li>[ ] Write down what you plan to say.</li>
            <li>[ ] Choose a quiet, private setting.</li>
            <li>[ ] Use short, age-appropriate explanations.</li>
            <li>[ ] Reassure love and safety directly.</li>
            <li>[ ] Expect questions — answer simply, don’t overexplain.</li>
            <li>[ ] End with a comforting, normal activity.</li>
            <li>[ ] Revisit the conversation as children grow.</li>
            <li>[ ] Normalize all reactions — from silence to tears to anger.</li>
            <li>[ ] Remind children: <em>“This is not your fault.”</em></li>
          </ul>

          <Divider />

          {/* Step 3 */}
          <h1 id="step-3">👨‍👩‍👧 Step 3: Managing Family Reactions & Extended Network</h1>
          <p>
            Once the immediate shock settles, you may find yourself facing the wider circle of family, friends, and
            community. Grandparents, siblings, co-parents, and neighbors may have questions — or judgments. Some may
            rally to support you, while others may withdraw or even lash out.
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
            reminds us that children have the right to be protected from shame and judgment. That starts with how adults
            — relatives, neighbors, friends — handle their reactions.
          </p>
          <p>
            This step is about <strong>navigating those reactions without losing your stability</strong>. Remember: you
            are not required to share every detail with everyone. You can set boundaries. Your goal is to protect your
            children and yourself while maintaining healthy connections where possible.
          </p>

          <h2>🌍 Universal Guidance</h2>
          <ol>
            <li>
              <strong>Sort Your Circle</strong>
              <ul>
                <li>Make three lists:</li>
                <li>
                  <em>Trusted helpers</em> (those who will support without judgment).
                </li>
                <li>
                  <em>Practical contacts</em> (those who may need limited info for childcare, school, logistics).
                </li>
                <li>
                  <em>Not safe to share with</em> (those likely to gossip, criticize, or harm).
                </li>
                <li>This helps you decide who gets details and who only gets anchor phrases.</li>
              </ul>
            </li>
            <li>
              <strong>Create Anchor Phrases</strong>
              <ul>
                <li>
                  These are short, repeatable lines you can use whenever someone pries: <em>“It’s a difficult
                  situation. We’re focusing on keeping the kids safe.”</em>
                </li>
                <li><em>“We’re taking it one day at a time. Thank you for understanding.”</em></li>
                <li>Repetition builds confidence and avoids over-explaining when you’re under stress.</li>
              </ul>
            </li>
          </ol>
          <p>
            — Using pre-prepared scripts reduces anxiety and ensures consistency, a strategy supported by{" "}
            <a
              href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse"
              target="_blank"
              rel="noopener"
            >
              Stop It Now!
            </a>
            .
          </p>

          <ol start={3}>
            <li>
              <strong>Expect a Spectrum of Reactions</strong>
              <ul>
                <li>Supportive relatives may offer meals, childcare, or listening ears.</li>
                <li>Others may express fear, anger, or harsh judgment.</li>
                <li>Their reactions reflect <em>their own fears and biases</em>, not your worth.</li>
              </ul>
            </li>
            <li>
              <strong>Protect Children from Adult Conversations</strong>
              <ul>
                <li>
                  If relatives argue, gossip, or express judgment in front of children, step in calmly:{" "}
                  <em>“We’re not discussing this around the kids. Please respect that.”</em>
                </li>
                <li>Never allow children to be used as messengers or mediators between adults.</li>
              </ul>
            </li>
            <li>
              <strong>Find Your Allies</strong>
              <ul>
                <li>Even one or two safe adults can make a world of difference.</li>
                <li>Ask them to echo your anchor phrases when others ask, so you aren’t carrying the burden alone.</li>
              </ul>
            </li>
          </ol>

          <Callout title="💡 Pro Tip" tone="tip">
            <p>
              You don’t have to answer every question. <em>Silence is also a boundary.</em> A simple{" "}
              <em>“That’s not something I can discuss”</em> is enough.
            </p>
          </Callout>

          <h2>🎭 Role-Based Guidance</h2>
          <ul>
            <li>
              👤 <strong>For the Impacted Individual</strong>
              <ul>
                <li>Accept that some relatives may feel anger or betrayal. Don’t demand instant forgiveness.</li>
                <li>
                  If possible, show accountability first, not excuses. Even short phrases like,{" "}
                  <em>“I know I caused pain. I’m working to do better.”</em> go further than defensiveness.
                </li>
              </ul>
            </li>
            <li>
              👪 <strong>For Parents/Guardians (Caregivers at Home)</strong>
              <ul>
                <li>
                  Stand firm when relatives pressure you for details. You can say,{" "}
                  <em>“I won’t discuss specifics, but I appreciate your support.”</em>
                </li>
                <li>Remember: your primary duty is to protect your child’s stability, not to satisfy someone’s curiosity.</li>
              </ul>
            </li>
            <li>
              💞 <strong>For Spouses/Partners</strong>
              <ul>
                <li>Expect conflicting emotions from your own family. Some may pressure you to leave; others may expect you to stay.</li>
                <li>
                  Allow yourself to say: <em>“I need time to make my own decisions. Please respect that.”</em>
                </li>
                <li>Protect yourself from being pulled into defending your choice repeatedly.</li>
              </ul>
            </li>
            <li>
              👵 <strong>For Extended Family</strong>
              <ul>
                <li>If you want to help, focus on <strong>actions, not opinions</strong>: bring meals, offer rides, read with children.</li>
                <li>Avoid pressuring parents for details or venting frustration around kids. The family already feels under a microscope.</li>
              </ul>
            </li>
          </ul>

          <h2>🕒 Timeline Guidance</h2>
          <ul>
            <li>
              🚨 <strong>Early Stage (Arrest / Pre-Trial)</strong>
              <ul>
                <li>Limit sharing to essentials. Focus on who <em>must</em> know (childcare providers, close relatives involved in support).</li>
                <li>Use short phrases: <em>“This is a legal matter. We’re focusing on the children.”</em></li>
              </ul>
            </li>
            <li>
              ⛓️ <strong>Incarceration Stage</strong>
              <ul>
                <li>
                  Relatives may have questions about visits. Prepare them with clear expectations:{" "}
                  <em>“The visit will involve security and waiting. Please don’t quiz the kids about what they saw.”</em>
                </li>
                <li>Encourage supportive family to send letters or drawings rather than grilling you for updates.</li>
                <li>
                  <a href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener">
                    Sesame Workshop
                  </a>{" "}
                  offers child-friendly resources for preparing kids for visitation experiences.
                </li>
              </ul>
            </li>
            <li>
              🏠 <strong>Reentry / Supervision</strong>
              <ul>
                <li>
                  Some relatives may struggle with trust. Acknowledge their concerns without defending every choice:{" "}
                  <em>“We’re following all supervision rules, and rebuilding step by step. We appreciate patience.”</em>
                </li>
                <li>Limit exposure to relatives who cannot be respectful in front of children.</li>
              </ul>
            </li>
            <li>
              📜 <strong>Registry / Long-Term</strong>
              <ul>
                <li>
                  Family may fear stigma if neighbors or community find out. Address it directly:{" "}
                  <em>“Yes, there are restrictions. We’re adapting as a family. We’d love your support in focusing on what we can control.”</em>
                </li>
                <li>Invite supportive relatives to stand with you in advocacy or education. Shared purpose reduces isolation.</li>
              </ul>
            </li>
          </ul>

          <h2>✅ Managing Family Reactions Checklist</h2>
          <ul>
            <li>[ ] Identify who truly needs to know details.</li>
            <li>[ ] Create one “anchor phrase” to use consistently.</li>
            <li>[ ] Protect children from overhearing adult discussions.</li>
            <li>[ ] Prepare supportive relatives before visits.</li>
            <li>[ ] Expect both support and criticism.</li>
            <li>[ ] Lean on one or two trusted allies for consistent messaging.</li>
            <li>[ ] Accept that some relationships may shift — and that’s okay.</li>
          </ul>
          <Divider />

          {/* Step 4 */}
          <h1 id="step-4">🤝 Step 4: Trust Rebuilding Toolkit</h1>
          <p>
            When the legal system enters your life, it doesn’t just take away freedom — it often takes away jobs,
            income, housing, friendships, and social standing. Invitations vanish. Neighbors avoid eye contact. Some
            people walk out of your life entirely.
          </p>
          <p>
            That is why relationships with those who remain — your children, partner, parents, or a handful of trusted
            friends — are more than just important. They are your lifeline.
          </p>
          <p>
            Trust, once broken, can feel impossible to restore. But it is possible. Not through instant fixes or big
            promises, but through <strong>small, steady, reliable acts that prove safety and care over time</strong>.
            Even when everything else is lost, rebuilding trust inside your closest relationships gives you the
            foundation to face the outside world again.
          </p>

          <h2>🌍 Universal Guidance</h2>
          <ol>
            <li>
              <strong>Acknowledge the Break</strong>
              <ul>
                <li>Start by naming what everyone feels: <em>“Trust has been damaged.”</em> Avoid pretending nothing happened.</li>
                <li>
                  Honesty about the rupture opens the door to honest repair. The{" "}
                  <a href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust" target="_blank" rel="noopener">
                    American Psychological Association
                  </a>{" "}
                  notes acknowledgement is a critical first step.
                </li>
              </ul>
            </li>
            <li>
              <strong>Begin with Basics</strong>
              <ul>
                <li>Don’t promise to “fix everything.” Instead, focus on daily stability: being where you say you’ll be, following rules, keeping routines.</li>
                <li>These basics are not small — they are the building blocks of trust.</li>
              </ul>
            </li>
            <li>
              <strong>Consistency Is Everything</strong>
              <ul>
                <li>Families learn to trust again not through words, but through a thousand small, consistent actions.</li>
                <li>Reliability in daily life (meals, calls, chores, curfews) is more powerful than dramatic apologies.</li>
              </ul>
            </li>
            <li>
              <strong>Repair, Don’t Defend</strong>
              <ul>
                <li>
                  When you break a promise — and it will happen sometimes — repair quickly:{" "}
                  <em>“I didn’t follow through. I’m sorry. Here’s how I’ll make it right.”</em>
                </li>
                <li>Defensiveness (“It’s not my fault!”) drains trust. Accountability restores it.</li>
              </ul>
            </li>
            <li>
              <strong>Build Shared Rituals of Connection</strong>
              <ul>
                <li>Weekly family meetings, bedtime check-ins, Sunday walks — routines build predictability and safety.</li>
              </ul>
            </li>
          </ol>

          <Callout title="💡 Pro Tip" tone="tip">
            <p>Trust is rebuilt less through “big talks” and more through daily actions that show reliability.</p>
          </Callout>

          <h2>🛠️ Practical Tools & Exercises</h2>
          <p>
            Evidence-based family therapy programs such as{" "}
            <a href="https://www.mstservices.com/what-is-mst" target="_blank" rel="noopener">
              Multisystemic Therapy (MST)
            </a>{" "}
            and{" "}
            <a href="https://www.functionalfamilytherapy.com/" target="_blank" rel="noopener">
              Functional Family Therapy (FFT)
            </a>{" "}
            emphasize the importance of small, consistent commitments and structured family rituals.
          </p>
          <ul>
            <li>
              <strong>Micro-Commitments</strong> — Start with one promise per week and keep it. Build up gradually.
            </li>
            <li>
              <strong>Family “Talk Circle”</strong> — Once a week, each family member gets 5 minutes to share how they’re feeling. Others listen without interrupting.
            </li>
            <li>
              <strong>Letter Exchange</strong> — Write letters to each other — even short notes — and respond in writing. This builds safety for expressing difficult emotions.
            </li>
            <li>
              <strong>Trust Jar</strong> — Each time someone keeps a promise, write it on a slip of paper and drop it in a jar. Review together after a month to see progress.
            </li>
            <li>
              <strong>Celebrating Progress</strong> — End the week by noticing one thing each family member did that built trust. It reinforces hope and shows progress is real.
            </li>
          </ul>

          <h2>🎭 Role-Based Guidance</h2>
          <ul>
            <li>
              👤 <strong>For the Impacted Individual</strong>
              <ul>
                <li>Understand that your loved ones may doubt you for a long time. This is normal. Don’t rush them.</li>
                <li>Replace words like <em>“Trust me”</em> with consistent actions. Let your behavior speak.</li>
                <li>
                  If children or partners express anger, listen without arguing. Their pain is part of the repair
                  process.{" "}
                  <a href="https://www.atsa.com/atsa-practice-guidelines" target="_blank" rel="noopener">
                    ATSA guidelines
                  </a>{" "}
                  emphasize accountability over defensiveness.
                </li>
              </ul>
            </li>
            <li>
              👪 <strong>For Parents/Guardians (Caregivers at Home)</strong>
              <ul>
                <li>Your consistency anchors children when the world feels chaotic.</li>
                <li>Keep promises small and simple: <em>“I’ll pick you up after school at 3:00.”</em> Then do it.</li>
                <li>
                  Teach children to make small commitments too, and celebrate when they keep them — it makes rebuilding
                  a family project, not a burden on one person.
                </li>
              </ul>
            </li>
            <li>
              💞 <strong>For Spouses/Partners</strong>
              <ul>
                <li>You may feel torn between wanting to trust again and fearing more disappointment. That’s normal.</li>
                <li>Ask directly for what you need: <em>“I need you to be on time tonight. That helps me feel safe.”</em></li>
                <li>Allow space for your own joy, not just duty.</li>
              </ul>
            </li>
            <li>
              👵 <strong>For Extended Family</strong>
              <ul>
                <li>Trust may take longer for you. Show support in small, steady ways: offer childcare, share a meal, send a note of encouragement.</li>
                <li>Avoid putting children in the middle: don’t ask them to report on the impacted individual’s behavior.</li>
              </ul>
            </li>
          </ul>

          <h2>🕒 Timeline Guidance</h2>
          <ul>
            <li>
              🚨 <strong>Early Stage (Arrest / Pre-Trial)</strong>
              <ul>
                <li>
                  Trust may feel shattered. Focus only on survival: making sure kids are safe, routines continue, and
                  basic communication happens.
                </li>
                <li>
                  Say out loud: <em>“We don’t have all the answers, but we’re facing this together.”</em> Naming unity,
                  even in crisis, plants the first seeds of trust.
                </li>
              </ul>
            </li>
            <li>
              ⛓️ <strong>Incarceration Stage</strong>
              <ul>
                <li>Use predictable communication (letters, scheduled calls). Even short messages build trust.</li>
                <li>Prepare children for ups and downs: sometimes calls may be missed due to facility rules. Reassure them it’s not rejection.</li>
              </ul>
            </li>
            <li>
              🏠 <strong>Reentry / Supervision</strong>
              <ul>
                <li>
                  Transition can be bumpy. Build resilience by managing expectations:{" "}
                  <em>“This won’t be perfect at first, but we’ll adjust together.”</em>
                </li>
                <li>Reassure children that rules are part of safety, not punishment for the family.</li>
              </ul>
            </li>
            <li>
              📜 <strong>Registry / Long-Term</strong>
              <ul>
                <li>Over time, shift from survival routines to growth routines: family traditions, vacations, advocacy, family projects.</li>
                <li>Teach older children and teens how to handle stigma with dignity and calm.</li>
                <li>Shared purpose (e.g., advocacy, volunteering, family projects) turns trust repair into resilience.</li>
              </ul>
            </li>
          </ul>

          <h2>✅ Trust Rebuilding Checklist</h2>
          <ul>
            <li>[ ] Acknowledge that trust was broken.</li>
            <li>[ ] Make one small, realistic promise. Keep it.</li>
            <li>[ ] Build consistency through daily routines.</li>
            <li>[ ] Use rituals of connection (weekly meals, bedtime, letters).</li>
            <li>[ ] Repair quickly when mistakes happen.</li>
            <li>[ ] Celebrate small wins as a family.</li>
            <li>[ ] Remind yourself: rebuilding takes time — and that’s okay.</li>
          </ul>

          <Divider />

          {/* Step 5 */}
          <h1 id="step-5">🌄 Step 5: Ongoing Support & Resilience</h1>
          <p>
            The crisis may begin with an arrest, but it doesn’t end there. The reality of long investigations,
            incarceration, supervision, and the registry can stretch for years — sometimes decades. Families need more
            than survival skills; they need <strong>resilience strategies</strong> that carry them through the long haul.
          </p>
          <p>
            Resilience doesn’t mean pretending everything is fine. It means building the strength, routines, and support
            networks that allow your family to keep moving forward, even when challenges continue. This step is about
            finding hope and support not just for today, but for tomorrow and beyond.
          </p>

          <h2>🌍 Universal Guidance</h2>
          <ol>
            <li>
              <strong>Build a Long-Term Support System</strong>
              <ul>
                <li>Identify safe, trustworthy people you can lean on — even if it’s just one or two.</li>
                <li>
                  Look for peer support groups, faith communities, or online networks where stigma is less heavy. The{" "}
                  <a href="https://www.osborneny.org/" target="_blank" rel="noopener">
                    Osborne Association
                  </a>{" "}
                  offers family-focused support programs.
                </li>
              </ul>
            </li>
            <li>
              <strong>Invest in Professional Help When Possible</strong>
              <ul>
                <li>Trauma-informed therapists, family counselors, or reentry programs can provide tools families cannot create alone.</li>
                <li>
                  <a
                    href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach"
                    target="_blank"
                    rel="noopener"
                  >
                    SAMHSA
                  </a>{" "}
                  notes that trauma-informed care is built on safety, trust, collaboration, and empowerment.
                </li>
              </ul>
            </li>
            <li>
              <strong>Create Family Routines of Resilience</strong>
              <ul>
                <li>Weekly family meetings, game nights, walks, or journaling together help families feel like a team.</li>
                <li>Rituals remind everyone that the family’s identity is bigger than the legal system.</li>
              </ul>
            </li>
            <li>
              <strong>Balance Privacy and Connection</strong>
              <ul>
                <li>Protect sensitive details, but don’t isolate completely. Healthy friendships and social contact are vital.</li>
                <li>
                  The{" "}
                  <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">
                    NCTSN
                  </a>{" "}
                  warns that isolation compounds trauma for children.
                </li>
              </ul>
            </li>
            <li>
              <strong>Keep Perspective</strong>
              <ul>
                <li>Hard seasons don’t last forever. Your family will adapt, grow, and even find ways to thrive.</li>
                <li>Remember: you are more than your hardest moment.</li>
              </ul>
            </li>
          </ol>

          <Callout title="💡 Pro Tip" tone="tip">
            <p>
              Resilience grows best when families celebrate even the smallest victories — a first day of school
              completed, a job interview taken, a rule followed without reminders.
            </p>
          </Callout>

          <h2>🎭 Role-Based Guidance</h2>
          <ul>
            <li>
              👤 <strong>For the Impacted Individual</strong>
              <ul>
                <li>Stay focused on growth: therapy, education, or work programs are investments in the family’s resilience.</li>
                <li>Be transparent about rules and restrictions. Surprises erode trust; clarity strengthens it.</li>
                <li>Model resilience for your children: let them see you cope with stress in healthy ways.</li>
              </ul>
            </li>
            <li>
              👪 <strong>For Parents/Guardians (Caregivers at Home)</strong>
              <ul>
                <li>Prioritize your own mental health. Burnout is real and can affect your children.</li>
                <li>Build your own support team — friends, therapists, or support groups — so you don’t carry everything alone.</li>
                <li>Teach children coping tools (breathing exercises, journaling, sports, art) so they develop resilience too.</li>
              </ul>
            </li>
            <li>
              💞 <strong>For Spouses/Partners</strong>
              <ul>
                <li>Recognize that your role may shift over time — sometimes caregiver, sometimes partner, sometimes advocate.</li>
                <li>Allow yourself breaks and outlets for joy, not just duty.</li>
                <li>Hold onto your own dreams. A resilient family includes a resilient partner.</li>
              </ul>
            </li>
            <li>
              👵 <strong>For Extended Family</strong>
              <ul>
                <li>Your presence matters. Even if you don’t agree with choices made, showing up for birthdays, school plays, or Sunday dinners strengthens family resilience.</li>
                <li>Offer practical help — transportation, meals, childcare — to lighten the daily load.</li>
              </ul>
            </li>
          </ul>

          <h2>🕒 Timeline Guidance</h2>
          <ul>
            <li>
              🚨 <strong>Early Stage (Arrest / Pre-Trial)</strong>
              <ul>
                <li>Focus resilience on <em>stability</em>: meals, school, sleep, and daily life continuing.</li>
                <li>Children need proof that life isn’t collapsing, even when adults feel it is.</li>
              </ul>
            </li>
            <li>
              ⛓️ <strong>Incarceration Stage</strong>
              <ul>
                <li>Expect emotional ups and downs. Build resilience by normalizing contact routines: letters, visits, calls.</li>
                <li>Prepare children for mixed feelings — it’s okay to love and miss the impacted individual and still feel angry.</li>
              </ul>
            </li>
            <li>
              🏠 <strong>Reentry / Supervision</strong>
              <ul>
                <li>
                  Transition can be bumpy. Build resilience by managing expectations:{" "}
                  <em>“This won’t be perfect at first, but we’ll adjust together.”</em>
                </li>
                <li>Reassure children that rules are part of safety, not punishment.</li>
              </ul>
            </li>
            <li>
              📜 <strong>Registry / Long-Term</strong>
              <ul>
                <li>Over time, shift from survival routines to growth routines: family traditions, vacations, advocacy, family projects.</li>
                <li>Teach older children and teens how to handle stigma with dignity and calm.</li>
                <li>Shared purpose (e.g., advocacy, volunteering, family projects) turns trust repair into resilience.</li>
              </ul>
            </li>
          </ul>

          <h2>✅ Resilience Checklist</h2>
          <ul>
            <li>[ ] Identify at least one safe support person or group.</li>
            <li>[ ] Create a weekly family ritual that builds connection.</li>
            <li>[ ] Celebrate small victories to build hope.</li>
            <li>[ ] Seek professional support if available.</li>
            <li>[ ] Protect privacy while maintaining healthy social connections.</li>
            <li>[ ] Remind children (and yourself): <em>“We are more than this situation.”</em></li>
          </ul>

          <Divider />

          {/* Conclusion */}
          <h1 id="conclusion">🌟 Conclusion: A Path Forward</h1>
          <p>
            If you’ve read this far, it means you are committed to holding your family together in the middle of one of
            the hardest journeys imaginable. That commitment alone is an act of love and resilience.
          </p>
          <p>
            The truth is: there are no perfect words and no perfect steps. Disclosure may feel messy. Trust may take
            longer to rebuild than you hoped. Family reactions may surprise you, for better or worse. And resilience may
            sometimes feel like survival.
          </p>
          <p>
            But you are not alone. Families across the country are finding ways to adapt, to grow, and to keep their
            love intact — supported by resources like{" "}
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
            willingness to show up, again and again. Your partner, parents, or siblings may not always understand, but
            with patience, boundaries, and compassion, relationships can heal and even deepen.
          </p>
          <p>
            🌅 There is life beyond this moment. It may look different than the life you imagined, but it can still hold
            safety, joy, dignity, and connection. With courage, love, and the support of others who understand, your
            family can emerge not only surviving, but stronger and wiser.
          </p>

          <Divider />

          {/* Sources (single clean block) */}
          <section id="sources-resources" className="not-prose">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 rounded-t-xl">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span aria-hidden>📚</span> Sources & Resources
              </h2>
              <p className="text-slate-200">Trusted, family-friendly materials you can reference and share</p>
            </div>
            <div className="bg-white border-x border-b border-slate-200 rounded-b-xl p-6">
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
                    Association for the Treatment and Prevention of Sexual Abuse (ATSA)
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
                  </a>{" "}
                  and{" "}
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
  );
}
