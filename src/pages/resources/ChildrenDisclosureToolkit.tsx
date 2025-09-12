import React from "react";
import { Link } from "react-router-dom";

function BandHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Link
            to="/resources"
            className="inline-flex items-center text-slate-200 hover:text-white transition-colors group"
          >
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>
        </div>
        {eyebrow && (
          <div className="mb-3">
            <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          🌱 Children & Disclosure + Relationship Rebuilding Toolkit
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-100 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

function Divider() {
  return <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600" />;
}

function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "tip" | "note" | "warn";
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  const map = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    tip: "bg-emerald-50 border-emerald-200 text-emerald-800",
    note: "bg-violet-50 border-violet-200 text-violet-800",
    warn: "bg-amber-50 border-amber-200 text-amber-800",
  } as const;
  return (
    <div className={`border rounded-lg p-6 ${map[tone]} not-prose`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="space-y-3 text-[0.975rem] leading-relaxed">{children}</div>
    </div>
  );
}

export default function ChildrenDisclosureToolkit(): JSX.Element {
  return (
    <div className="bg-white">
      <BandHeader
        eyebrow="Family Support"
        title="Children & Disclosure + Relationship Rebuilding Toolkit"
        subtitle="For families of an impacted individual in any stage: investigation, pretrial, incarceration, supervision, registry."
      />
      <Divider />

      <main>
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* INTRO */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">🌟 Introduction</h2>
            <p className="text-slate-800 mb-4">
              When someone in your family is arrested, investigated, incarcerated, or placed on a registry, it can feel like your entire world has been turned inside out. Overnight, the life you thought you knew changes — and suddenly you are faced with impossible questions: <em>What do I tell my children? How do I face relatives or neighbors? How do we keep moving forward?</em>
            </p>
            <p className="text-slate-800 mb-4">
              If you are reading this, you may feel fear, shame, confusion, or even anger. Please know: <strong>you are not alone.</strong> Thousands of families walk this path every year, and while no two stories are the same, there are safe, thoughtful ways to navigate these conversations and rebuild trust.
            </p>
            <p className="text-slate-800 mb-4">
              This guide is designed to be a <strong>hand to hold</strong> in that journey. It blends two approaches:
            </p>
            <ul className="list-disc pl-6 text-slate-800 mb-4">
              <li>📖 A <strong>step-by-step guide</strong> with clear, age-appropriate strategies for talking with children and family.</li>
              <li>🛠️ A <strong>practical toolkit</strong> filled with scripts, exercises, and resources to help you and your loved ones begin healing and reconnecting.</li>
            </ul>
            <p className="text-slate-800 mb-4">
              👉 <strong>Note on language:</strong> In this guide we use the term <em>“impacted individual”</em> to describe the person at the center of the legal process — whether they are under investigation, incarcerated, on supervision, or on the registry. It avoids labels like <em>“offender”</em> or <em>“accused”</em> that may not apply at every stage, and keeps the focus on the person’s humanity.
            </p>
            <p className="text-slate-800">
              ✨ You do not have to get this perfect. What matters most is showing up with honesty, love, and consistency. With patience and courage, families can move through even the most difficult circumstances together.
            </p>
          </section>

          {/* STEP 1 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">🧘 Step 1: Stabilize & Ground Yourself</h2>
            <p className="text-slate-800 mb-6">
              When a crisis erupts, your body and mind may go into survival mode — racing thoughts, panic, exhaustion, or numbness. Before you can support children, rebuild relationships, or make thoughtful decisions, you must first steady yourself. Think of this as putting on your own oxygen mask before helping others. This step is about <strong>finding your footing</strong>, so that the storm around you doesn’t sweep you away.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">🌍 Universal Guidance</h3>
            <ol className="list-decimal pl-6 text-slate-800 space-y-3 mb-6">
              <li>
                <strong>🌬️ Breathe and Slow Down</strong>
                <ul className="list-disc pl-6">
                  <li>Inhale deeply through your nose, hold for three seconds, exhale slowly. Repeat.</li>
                  <li>
                    Even 60 seconds of intentional breathing can lower panic — a practice recommended in{" "}
                    <a className="text-blue-700 underline" href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener">
                      trauma-informed care (SAMHSA)
                    </a>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>📝 Name the Crisis, Not Just the Feelings</strong>
                <div>Write down exactly what has happened in simple terms: <em>“My partner was arrested today.”</em></div>
              </li>
              <li>
                <strong>🍎 Ground in Basics</strong>
                <div>
                  Eat, hydrate, and sleep if you can. Stability in routines helps — noted by{" "}
                  <a className="text-blue-700 underline" href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">
                    NCTSN
                  </a>.
                </div>
              </li>
              <li>
                <strong>🤝 Identify Safe People</strong>
                <div>Call one trusted person who will not judge or gossip. One is enough.</div>
              </li>
              <li>
                <strong>🛑 Avoid Rash Decisions</strong>
                <div>Delay big disclosures or confrontations until your body is calmer. Focus on “today” blocks.</div>
              </li>
            </ol>

            <Callout tone="tip" title="💡 Pro Tip">
              <p>
                In the first 72 hours of a crisis, it’s normal to feel like you’re drowning. Small acts of care — a shower,
                a walk, a phone call — are lifelines.
              </p>
            </Callout>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🎭 Role-Based Self-Care</h3>
            <div className="space-y-4 text-slate-800">
              <p><strong>👤 For the Impacted Individual</strong></p>
              <ul className="list-disc pl-6">
                <li>Use structure (routine, facility rules) to anchor your day.</li>
                <li>Write short notes of love to family to calm and reassure.</li>
                <li>Request mental health support early if available.</li>
              </ul>
              <p><strong>👪 For Parents/Guardians (Caregivers at Home)</strong></p>
              <ul className="list-disc pl-6">
                <li>Step away privately to cry, journal, or breathe.</li>
                <li>Prioritize rest; exhaustion fuels reactivity.</li>
                <li>Set boundaries; you don’t owe explanations to everyone.</li>
              </ul>
              <p><strong>💞 For Spouses/Partners</strong></p>
              <ul className="list-disc pl-6">
                <li>Acknowledge grief or betrayal if present; both can coexist with love.</li>
                <li>Process with a peer/therapist so kids aren’t your outlet.</li>
                <li>Delay big decisions until steadier.</li>
              </ul>
              <p><strong>👵 For Extended Family</strong></p>
              <ul className="list-disc pl-6">
                <li>Ground yourself before “helping.” Kids feel your state.</li>
                <li>Do calming activities (walks, prayer, journaling) first.</li>
                <li>Support without judgment; your calm presence > advice.</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🕒 Timeline Guidance</h3>
            <div className="space-y-4 text-slate-800">
              <p><strong>🚨 Early Stage (Arrest / Pre-Trial)</strong> — focus on immediate needs; limit media intake.</p>
              <p><strong>⛓️ Incarceration</strong> — build routine and a support calendar; predictability stabilizes.</p>
              <p><strong>🏠 Reentry / Supervision</strong> — expect stress spikes; rebuild rhythms gradually.</p>
              <p><strong>📜 Registry / Long-Term</strong> — pace yourself; normalize reality with therapy/peers.</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-slate-900 mb-2">✅ Self-Stabilization Checklist</h4>
              <ul className="list-disc pl-6 text-slate-800 space-y-1">
                <li>Pause and take three deep breaths.</li>
                <li>Write down the facts of what has happened.</li>
                <li>Eat, hydrate, and rest before major decisions.</li>
                <li>Identify one safe person to talk to.</li>
                <li>Avoid oversharing until calmer.</li>
                <li>Set one small goal for today.</li>
              </ul>
            </div>
          </section>

          {/* STEP 2 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">👶 Step 2: Disclosure to Children</h2>
            <p className="text-slate-800 mb-4">
              Few moments feel as impossible as telling a child that a loved one is in legal trouble. Whether your child is three,
              thirteen, or twenty-three, your instinct may be to protect them from the truth. But children sense when something is
              wrong — and silence can be more frightening than honesty. Thoughtful disclosure gives language, reassurance, and trust.
            </p>
            <p className="text-slate-800 mb-6">
              Disclosure is a <strong>process of many conversations</strong> that evolve with age and circumstances. Your role is to offer
              <strong> age-appropriate truth, reassurance, and safety</strong>. See{" "}
              <a className="text-blue-700 underline" href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx" target="_blank" rel="noopener">
                AAP guidance
              </a>{" "}
              and{" "}
              <a className="text-blue-700 underline" href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">
                NCTSN
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">🌍 Universal Guidance</h3>
            <ol className="list-decimal pl-6 text-slate-800 space-y-3 mb-6">
              <li><strong>Prepare Yourself First</strong> — Practice with another adult; write it down and speak it once privately.</li>
              <li><strong>Choose the Right Moment</strong> — Quiet, private space; no phones/TV; sit at their level if young.</li>
              <li><strong>Keep It Simple, Honest, and Short</strong> — One–two sentences, then pause for questions.</li>
              <li><strong>Reassure Safety and Love</strong> — Say directly: “You are safe. You are loved.” Repeat often.</li>
              <li><strong>Expect Reactions</strong> — Tears, silence, anger, laughter — all normal; give time.</li>
              <li><strong>Return to the Conversation</strong> — Plant seeds now and revisit as they grow.</li>
            </ol>

            <Callout tone="tip" title="💡 Pro Tip">
              <p>End each conversation with something grounding — a meal, a bedtime story, a walk. It signals that even after hard talks, safety remains.</p>
            </Callout>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🗣️ Age-Appropriate Approaches & Scripts</h3>
            <div className="space-y-5 text-slate-800">
              <div>
                <p className="font-semibold">📚 Preschool (3–5)</p>
                <p className="italic">“Daddy can’t live at home right now because he broke a rule. The helpers are making sure he learns how to do better. You are safe, and you are loved.”</p>
                <p className="italic">“This is a grown-up problem. You did nothing wrong.”</p>
              </div>
              <div>
                <p className="font-semibold">🖍️ Elementary (6–10)</p>
                <p className="italic">“Mom is in trouble because she broke an important rule. The people in charge want to make sure it doesn’t happen again. She still loves you, and we are keeping our family safe.”</p>
                <p className="italic">“I don’t have all the answers yet, but I will always tell you the truth in words you can understand.”</p>
              </div>
              <div>
                <p className="font-semibold">🎒 Middle School (11–13)</p>
                <p className="italic">“Uncle made serious mistakes and has to follow special rules given by the court. You can ask me anything, and I’ll tell you the truth.”</p>
                <p className="italic">“You may feel embarrassed or angry — that’s normal.”</p>
              </div>
              <div>
                <p className="font-semibold">📱 Teenagers (14–18)</p>
                <p className="italic">“Your dad is on supervision because of choices he made that broke the law. That doesn’t change his love for you. We can talk about what this means for our family.”</p>
                <p className="italic">“You have a right to your feelings. I’ll listen without judgment.”</p>
              </div>
              <div>
                <p className="font-semibold">🎓 Young Adults (18+)</p>
                <p className="italic">“Here are the facts about the legal situation. You may have strong feelings, and that’s okay. Let’s keep talking about how this affects you and our family.”</p>
              </div>
              <p>
                🧸 See{" "}
                <a className="text-blue-700 underline" href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener">
                  Sesame Workshop’s incarceration toolkit
                </a>{" "}
                for age-specific videos and caregiver guides.
              </p>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🎭 Role-Based Guidance</h3>
            <div className="space-y-5 text-slate-800">
              <div>
                <p className="font-semibold">👤 For the Impacted Individual</p>
                <ul className="list-disc pl-6">
                  <li>If you can’t be present, write a brief message of love to be read aloud.</li>
                  <li>Keep it simple — offer love, not guilt.</li>
                  <li>If children express anger or distance, don’t take it personally.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">👪 For Parents/Guardians (Caregivers at Home)</p>
                <ul className="list-disc pl-6">
                  <li>Align on one script together to prevent confusion.</li>
                  <li>Expect repetition — consistency builds safety.</li>
                  <li>It’s okay to say, “I don’t know yet, but I’ll tell you when I do.”</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">💞 For Spouses/Partners</p>
                <ul className="list-disc pl-6">
                  <li>Keep your own anger out of the disclosure moment.</li>
                  <li>Validate kids’ feelings, even when hard to hear.</li>
                  <li>Practice active listening: reflect back before correcting.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">👵 For Extended Family</p>
                <ul className="list-disc pl-6">
                  <li>Support with calm presence; avoid probing kids.</li>
                  <li>Use the family script if asked; avoid over-explaining.</li>
                  <li>Redirect gently: “That’s something your parents will discuss.”</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🕒 Timeline Guidance</h3>
            <div className="space-y-4 text-slate-800">
              <div>
                <p className="font-semibold">🚨 Early Stage (Arrest / Pre-Trial)</p>
                <ul className="list-disc pl-6">
                  <li>Keep explanations minimal; focus on safety and routine.</li>
                  <li className="italic">“Dad isn’t home because adults are helping him with a problem. You are safe.”</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">⛓️ Incarceration Stage</p>
                <ul className="list-disc pl-6">
                  <li>Prep kids for visits (uniforms, security, wait times).</li>
                  <li>Create pre/post rituals (draw before, ice cream after).</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">🏠 Reentry / Supervision</p>
                <ul className="list-disc pl-6">
                  <li>Explain new rules simply (curfew, check-ins).</li>
                  <li>Celebrate small routines returning (dinners, bedtime).</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">📜 Registry / Long-Term</p>
                <ul className="list-disc pl-6">
                  <li>Introduce what a registry means as they mature.</li>
                  <li>Frame it as one part of life, not the whole story.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-slate-900 mb-2">✅ Disclosure Checklist</h4>
              <ul className="list-disc pl-6 text-slate-800 space-y-1">
                <li>Write down what you plan to say; choose a quiet setting.</li>
                <li>Use short, age-appropriate explanations.</li>
                <li>Reassure love and safety directly.</li>
                <li>Expect questions; don’t over-explain.</li>
                <li>End with something comforting and normal.</li>
                <li>Revisit as kids grow; normalize all reactions.</li>
                <li>Remind them: “This is not your fault.”</li>
              </ul>
            </div>
          </section>

          {/* STEP 3 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">👨‍👩‍👧 Step 3: Managing Family Reactions & Extended Network</h2>
            <p className="text-slate-800 mb-4">
              Once the immediate shock settles, you may face the wider circle — grandparents, siblings, co-parents, neighbors. Some will support you; others may judge. Your goal is to protect children and yourself while maintaining healthy connections where possible.
            </p>
            <p className="text-slate-800 mb-6">
              The{" "}
              <a className="text-blue-700 underline" href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/" target="_blank" rel="noopener">
                Children of Incarcerated Parents Bill of Rights
              </a>{" "}
              reminds us that children have the right to be protected from shame and judgment. That starts with how adults handle their reactions.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">🌍 Universal Guidance</h3>
            <ol className="list-decimal pl-6 text-slate-800 space-y-3 mb-6">
              <li>
                <strong>Sort Your Circle</strong>
                <ul className="list-disc pl-6">
                  <li><em>Trusted helpers</em>: support without judgment</li>
                  <li><em>Practical contacts</em>: need limited info (school, childcare)</li>
                  <li><em>Not safe to share with</em>: likely to gossip or criticize</li>
                </ul>
              </li>
              <li>
                <strong>Create Anchor Phrases</strong>
                <ul className="list-disc pl-6">
                  <li className="italic">“It’s a difficult situation. We’re focusing on keeping the kids safe.”</li>
                  <li className="italic">“We’re taking it one day at a time. Thank you for understanding.”</li>
                </ul>
                <p className="text-slate-700 text-sm mt-2">
                  Using pre-prepared scripts reduces anxiety and ensures consistency — a strategy echoed by{" "}
                  <a className="text-blue-700 underline" href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse" target="_blank" rel="noopener">
                    Stop It Now!
                  </a>
                </p>
              </li>
              <li><strong>Expect a Spectrum of Reactions</strong> — Support, fear, anger, judgment — those are about their fears, not your worth.</li>
              <li>
                <strong>Protect Children from Adult Conversations</strong>
                <ul className="list-disc pl-6">
                  <li className="italic">“We’re not discussing this around the kids. Please respect that.”</li>
                  <li>Never use children as messengers between adults.</li>
                </ul>
              </li>
              <li><strong>Find Your Allies</strong> — Ask one or two safe adults to echo your anchor phrases so you’re not carrying it alone.</li>
            </ol>

            <Callout tone="note" title="💜 Gentle Reminder">
              <p>You don’t have to answer every question. <strong>Silence is also a boundary.</strong> “That’s not something I can discuss” is enough.</p>
            </Callout>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🎭 Role-Based Guidance</h3>
            <div className="space-y-5 text-slate-800">
              <div>
                <p className="font-semibold">👤 For the Impacted Individual</p>
                <ul className="list-disc pl-6">
                  <li>Some relatives will feel anger or betrayal; don’t demand instant forgiveness.</li>
                  <li>Show accountability first: “I know I caused pain. I’m working to do better.”</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">👪 For Parents/Guardians (Caregivers at Home)</p>
                <ul className="list-disc pl-6">
                  <li>Stand firm if pressed for details: “I won’t discuss specifics, but I appreciate your support.”</li>
                  <li>Your duty is your child’s stability, not satisfying curiosity.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">💞 For Spouses/Partners</p>
                <ul className="list-disc pl-6">
                  <li>Expect conflicting emotions in your own family; ask for time to decide your path.</li>
                  <li>Don’t get trapped defending your choices on repeat.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">👵 For Extended Family</p>
                <ul className="list-disc pl-6">
                  <li>Help with actions (meals, rides, reading with kids), not opinions.</li>
                  <li>Don’t vent around children; the family already feels under a microscope.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🕒 Timeline Guidance</h3>
            <div className="space-y-5 text-slate-800">
              <div>
                <p className="font-semibold">🚨 Early Stage (Arrest / Pre-Trial)</p>
                <ul className="list-disc pl-6">
                  <li>Limit sharing to essentials; focus on who must know.</li>
                  <li>Use short phrases: <em>“This is a legal matter. We’re focusing on the children.”</em></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">⛓️ Incarceration Stage</p>
                <ul className="list-disc pl-6">
                  <li>Prep relatives about visit logistics; ask them not to quiz kids afterward.</li>
                  <li>
                    Share{" "}
                    <a className="text-blue-700 underline" href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener">
                      Sesame Workshop resources
                    </a>{" "}
                    to set expectations.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">🏠 Reentry / Supervision</p>
                <ul className="list-disc pl-6">
                  <li>Acknowledge trust concerns without defending every choice.</li>
                  <li>Limit exposure to relatives who cannot be respectful around children.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">📜 Registry / Long-Term</p>
                <ul className="list-disc pl-6">
                  <li>Address stigma directly; invite supportive family into education/advocacy.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-slate-900 mb-2">✅ Managing Family Reactions Checklist</h4>
              <ul className="list-disc pl-6 text-slate-800 space-y-1">
                <li>Identify who truly needs to know details.</li>
                <li>Create and reuse one “anchor phrase.”</li>
                <li>Protect children from adult conversations.</li>
                <li>Prepare supportive relatives before visits.</li>
                <li>Expect both support and criticism.</li>
                <li>Lean on one or two allies for consistent messaging.</li>
                <li>Accept that some relationships may shift.</li>
              </ul>
            </div>
          </section>
          {/* STEP 4 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">🤝 Step 4: Trust Rebuilding Toolkit</h2>
            <p className="text-slate-800 mb-4">
              Trust is rebuilt through <strong>small, steady, reliable acts</strong> over time — not grand promises. When jobs, income,
              housing, friendships, and standing are shaken, relationships with those who remain become your lifeline.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">🌍 Universal Guidance</h3>
            <ol className="list-decimal pl-6 text-slate-800 space-y-3 mb-6">
              <li><strong>Acknowledge the Break</strong> — Name it: “Trust has been damaged.” Honesty opens the door to repair. (<a className="text-blue-700 underline" href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust" target="_blank" rel="noopener">APA</a>)</li>
              <li><strong>Begin with Basics</strong> — Keep routines; be where you say you’ll be; follow rules.</li>
              <li><strong>Consistency Is Everything</strong> — Families trust again through a thousand small actions.</li>
              <li><strong>Repair, Don’t Defend</strong> — “I didn’t follow through. I’m sorry. Here’s how I’ll make it right.”</li>
              <li><strong>Build Shared Rituals</strong> — Weekly meetings, bedtime check-ins, Sunday walks.</li>
            </ol>

            <Callout tone="tip" title="💡 Pro Tip">
              <p>Trust returns less from “big talks” and more from predictable daily reliability.</p>
            </Callout>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🛠️ Practical Tools & Exercises</h3>
            <p className="text-slate-800 mb-4">
              Evidence-based family programs ({" "}
              <a className="text-blue-700 underline" href="https://www.mstservices.com/what-is-mst" target="_blank" rel="noopener">MST</a>,{" "}
              <a className="text-blue-700 underline" href="https://www.functionalfamilytherapy.com/" target="_blank" rel="noopener">FFT</a>{" "}
              ) emphasize small commitments and structured rituals.
            </p>
            <ul className="list-disc pl-6 text-slate-800 space-y-2">
              <li><strong>Micro-Commitments</strong> — Start with one promise per week; keep it; build up.</li>
              <li><strong>Family Talk Circle</strong> — 5 minutes each, no interruptions.</li>
              <li><strong>Letter Exchange</strong> — Short notes back and forth to express tough feelings safely.</li>
              <li><strong>Trust Jar</strong> — Log kept promises on slips; review monthly.</li>
              <li><strong>Celebrate Progress</strong> — End the week noticing one thing that built trust.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🎭 Role-Based Guidance</h3>
            <div className="space-y-5 text-slate-800">
              <div>
                <p className="font-semibold">👤 For the Impacted Individual</p>
                <ul className="list-disc pl-6">
                  <li>Expect doubt for a while; don’t rush loved ones.</li>
                  <li>Replace “Trust me” with consistent actions.</li>
                  <li>Listen to anger without arguing. See also{" "}
                    <a className="text-blue-700 underline" href="https://www.atsa.com/atsa-practice-guidelines" target="_blank" rel="noopener">ATSA</a>.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">👪 For Parents/Guardians</p>
                <ul className="list-disc pl-6">
                  <li>Your consistency anchors children when the world feels chaotic.</li>
                  <li>Keep promises small and concrete: “I’ll pick you up at 3:00.”</li>
                  <li>Let kids make small commitments too; celebrate kept promises.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">💞 For Spouses/Partners</p>
                <ul className="list-disc pl-6">
                  <li>Feeling torn is normal. Ask directly for what you need.</li>
                  <li>Protect room for your own joy, not only duty.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">👵 For Extended Family</p>
                <ul className="list-disc pl-6">
                  <li>Show support steadily (childcare, meals, notes).</li>
                  <li>Don’t put kids in the middle or ask them to report.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🕒 Timeline Guidance</h3>
            <div className="space-y-4 text-slate-800">
              <p><strong>🚨 Early (Arrest / Pre-Trial):</strong> Focus on survival: safety, school, basic communication.</p>
              <p><strong>⛓️ Incarceration:</strong> Use predictable communication (letters/calls) and prep kids for missed calls.</p>
              <p><strong>🏠 Reentry / Supervision:</strong> Manage expectations; rules are part of safety.</p>
              <p><strong>📜 Registry / Long-Term:</strong> Shift from survival to growth routines; build shared purpose.</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-slate-900 mb-2">✅ Trust Rebuilding Checklist</h4>
              <ul className="list-disc pl-6 text-slate-800 space-y-1">
                <li>Acknowledge that trust was broken.</li>
                <li>Make one small promise; keep it.</li>
                <li>Build consistency through daily routines.</li>
                <li>Use connection rituals (meals, bedtime, letters).</li>
                <li>Repair quickly when mistakes happen.</li>
                <li>Celebrate small wins as a family.</li>
              </ul>
            </div>
          </section>

          {/* STEP 5 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">🌄 Step 5: Ongoing Support & Resilience</h2>
            <p className="text-slate-800 mb-6">
              Resilience is building the strength, routines, and support that let your family keep moving forward across months and years.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">🌍 Universal Guidance</h3>
            <ol className="list-decimal pl-6 text-slate-800 space-y-3 mb-6">
              <li>
                <strong>Build a Long-Term Support System</strong> — One or two safe people is enough. See{" "}
                <a className="text-blue-700 underline" href="https://www.osborneny.org/" target="_blank" rel="noopener">Osborne Association</a>.
              </li>
              <li>
                <strong>Invest in Professional Help When Possible</strong> — Trauma-informed therapy can help (see{" "}
                <a className="text-blue-700 underline" href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener">SAMHSA</a>).
              </li>
              <li><strong>Create Family Routines of Resilience</strong> — Meetings, game nights, walks, journaling.</li>
              <li>
                <strong>Balance Privacy and Connection</strong> — Protect details but avoid isolation (see{" "}
                <a className="text-blue-700 underline" href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">NCTSN</a>).
              </li>
              <li><strong>Keep Perspective</strong> — Hard seasons don’t last forever; you are more than your hardest moment.</li>
            </ol>

            <Callout tone="note" title="💗 Gentle Pro Tip">
              <p>Resilience grows when families celebrate small victories — first day of school, a kept rule, a completed interview.</p>
            </Callout>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🎭 Role-Based Guidance</h3>
            <div className="space-y-5 text-slate-800">
              <div>
                <p className="font-semibold">👤 For the Impacted Individual</p>
                <ul className="list-disc pl-6">
                  <li>Pursue growth (education, therapy, work programs).</li>
                  <li>Be transparent about rules; clarity prevents surprises.</li>
                  <li>Model healthy coping for children.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">👪 For Parents/Guardians</p>
                <ul className="list-disc pl-6">
                  <li>Protect your mental health; burnout affects kids.</li>
                  <li>Build your own support team so you’re not alone.</li>
                  <li>Teach kids coping tools (breathing, journaling, sports, art).</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">💞 For Spouses/Partners</p>
                <ul className="list-disc pl-6">
                  <li>Your role will shift; allow room for your own joy too.</li>
                  <li>Hold onto your own dreams — resilient families include resilient partners.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">👵 For Extended Family</p>
                <ul className="list-disc pl-6">
                  <li>Your presence matters — show up for small moments.</li>
                  <li>Offer practical help (transportation, meals, childcare).</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">🕒 Timeline Guidance</h3>
            <div className="space-y-4 text-slate-800">
              <p><strong>🚨 Early:</strong> Stabilize meals, school, sleep.</p>
              <p><strong>⛓️ Incarceration:</strong> Normalize letters/visits/calls; prep for mixed feelings.</p>
              <p><strong>🏠 Reentry / Supervision:</strong> Manage expectations; rules = safety.</p>
              <p><strong>📜 Registry / Long-Term:</strong> Shift to growth routines; teach kids to handle stigma with dignity.</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-slate-900 mb-2">✅ Resilience Checklist</h4>
              <ul className="list-disc pl-6 text-slate-800 space-y-1">
                <li>Identify at least one safe support person/group.</li>
                <li>Create a weekly family ritual.</li>
                <li>Celebrate small victories.</li>
                <li>Seek professional support if available.</li>
                <li>Protect privacy while staying connected.</li>
                <li>Remind everyone: “We are more than this situation.”</li>
              </ul>
            </div>
          </section>

          {/* CONCLUSION */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">🌟 Conclusion: A Path Forward</h2>
            <p className="text-slate-800 mb-4">
              If you’ve read this far, you’re committed to holding your family together through a hard journey. There are no perfect words
              or steps — disclosure can be messy, trust takes time, and reactions will vary. But you are not alone.
            </p>
            <p className="text-slate-800 mb-4">
              Families across the country adapt and grow — supported by{" "}
              <a className="text-blue-700 underline" href="https://sesameworkshop.org/resources/coping-with-incarceration" target="_blank" rel="noopener">
                Sesame Workshop caregiver tools
              </a>{" "}
              and{" "}
              <a className="text-blue-700 underline" href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse" target="_blank" rel="noopener">
                Stop It Now! family safety guides
              </a>.
            </p>
            <p className="text-slate-800">
              🌅 There is life beyond this moment — different than imagined, but still filled with safety, joy, dignity, and connection.
              With courage, love, and support, your family can emerge not only surviving, but stronger and wiser.
            </p>
          </section>

          {/* SOURCES */}
          <section className="mb-12" id="sources-resources">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 rounded-t-lg">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span aria-hidden>📚</span> Sources & Resources
              </h2>
              <p className="text-slate-200">Trusted, family-friendly materials you can reference and share</p>
            </div>
            <div className="border border-slate-200 rounded-b-lg p-6">
              <ul className="list-disc pl-6 space-y-2 text-slate-800">
                <li>
                  <a className="text-blue-700 underline" target="_blank" rel="noopener"
                     href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx">
                    American Academy of Pediatrics – Tips to Support Children When a Parent is in Prison
                  </a>
                </li>
                <li>
                  <a className="text-blue-700 underline" target="_blank" rel="noopener"
                     href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach">
                    SAMHSA – 6 Guiding Principles of Trauma-Informed Approach
                  </a>
                </li>
                <li>
                  <a className="text-blue-700 underline" target="_blank" rel="noopener"
                     href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma">
                    National Child Traumatic Stress Network – About Child Trauma
                  </a>
                </li>
                <li>
                  <a className="text-blue-700 underline" target="_blank" rel="noopener"
                     href="https://sesameworkshop.org/resources/coping-with-incarceration/">
                    Sesame Workshop – Coping With Incarceration
                  </a>
                </li>
                <li>
                  <a className="text-blue-700 underline" target="_blank" rel="noopener"
                     href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse">
                    Stop It Now! – Parents Talking to Children About Sexual Abuse
                  </a>
                </li>
                <li>
                  <a className="text-blue-700 underline" target="_blank" rel="noopener"
                     href="https://www.atsa.com/atsa-practice-guidelines">
                    Association for the Treatment and Prevention of Sexual Abuse (ATSA)
                  </a>
                </li>
                <li>
                  <a className="text-blue-700 underline" target="_blank" rel="noopener"
                     href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/">
                    Children of Incarcerated Parents Bill of Rights – Osborne Association
                  </a>
                </li>
                <li>
                  <a className="text-blue-700 underline" target="_blank" rel="noopener"
                     href="https://www.mstservices.com/what-is-mst">
                    Multisystemic Therapy (MST)
                  </a>{" "}
                  and{" "}
                  <a className="text-blue-700 underline" target="_blank" rel="noopener"
                     href="https://www.functionalfamilytherapy.com/">
                    Functional Family Therapy (FFT)
                  </a>
                </li>
                <li>
                  <a className="text-blue-700 underline" target="_blank" rel="noopener"
                     href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust">
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
