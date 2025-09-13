import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function ChildrenDisclosureToolkit(): JSX.Element {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      <SEO
        title="Children & Disclosure + Relationship Rebuilding Toolkit | The SOLAR Project"
        description="Step-by-step strategies and resources for families navigating disclosure to children, rebuilding trust, and resilience when a loved one is involved in the legal system."
        keywords="children disclosure toolkit, rebuilding trust, registry families, SOLAR Project, resilience, family support"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-600 text-white py-16 shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 uppercase tracking-wide mb-2 text-sm font-semibold">
            SOLAR Resource Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🌱 Children &amp; Disclosure + Relationship Rebuilding Toolkit
          </h1>
          <p className="text-lg md:text-xl text-slate-100">
            For families of an impacted individual in any stage: investigation, pretrial, incarceration, supervision, registry
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={handlePrint}
              className="bg-white text-slate-700 px-4 py-2 rounded-lg shadow hover:bg-slate-100 transition"
            >
              🖨️ Print
            </button>
            <Link
              to="/resources"
              className="bg-slate-500 text-white px-4 py-2 rounded-lg shadow hover:bg-slate-600 transition"
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
            {/* Gradient title band */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold">🌟 Introduction</h2>
              <p className="text-slate-200 mt-1">
                A warm, practical guide for families navigating disclosure and rebuilding.
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p>
                When someone in your family is arrested, investigated, incarcerated, or placed on a registry, it can feel like your
                entire world has been turned inside out. Overnight, the life you thought you knew changes — and suddenly you are
                faced with impossible questions: <em>What do I tell my children? How do I face relatives or neighbors? How do we keep
                moving forward?</em>
              </p>

              <p>
                If you are reading this, you may feel fear, shame, confusion, or even anger. Please know: <strong>you are not alone.</strong>
                Thousands of families walk this path every year, and while no two stories are the same, there are safe, thoughtful
                ways to navigate these conversations and rebuild trust.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="font-semibold text-emerald-900 mb-1">📖 Step-by-Step Guide</div>
                  <p className="text-emerald-800 text-sm">
                    Clear, age-appropriate strategies for talking with children and family.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <div className="font-semibold text-amber-900 mb-1">🛠️ Practical Toolkit</div>
                  <p className="text-amber-800 text-sm">
                    Scripts, exercises, and resources to help you and your loved ones begin healing and reconnecting.
                  </p>
                </div>
              </div>

              <p>
                👉 <strong>Note on language:</strong> In this guide we use the term <em>“impacted individual”</em> to describe the person at the
                center of the legal process — whether they are under investigation, incarcerated, on supervision, or on the registry.
                It avoids labels like <em>“offender”</em> or <em>“accused”</em> that may not apply at every stage, and keeps the focus on the person’s
                humanity.
              </p>

              <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 mt-6">
                <div className="font-semibold text-sky-900 mb-1">💡 Gentle Reminder</div>
                <p className="text-sky-800">
                  You don’t have to get this perfect. What matters most is showing up with honesty, love, and consistency. With
                  patience and courage, families can move through even the most difficult circumstances together.
                </p>
              </div>
            </div>
          </section>
          {/* Step 1 --------------------------------------------------------- */}
          <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
            {/* Gradient title band */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold">🧘 Step 1: Stabilize &amp; Ground Yourself</h2>
              <p className="text-slate-200 mt-1">Find your footing first — then support kids and family from a steadier place.</p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p>
                When a crisis erupts, your body and mind may go into survival mode — racing thoughts, panic, exhaustion, or numbness.
                Before you can support children, rebuild relationships, or make thoughtful decisions, steady yourself first. Think of
                this as putting on your own oxygen mask before helping others.
              </p>

              {/* Universal Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-8 mb-3">🌍 Universal Guidance</h3>
              <div className="space-y-4">
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
                  <div className="font-semibold text-sky-900 mb-1">1) 🌬️ Breathe and Slow Down</div>
                  <p className="text-sky-800">
                    Your nervous system is likely on high alert. Inhale through your nose, hold for three seconds, exhale slowly.
                    Even 60 seconds of intentional breathing can lower panic enough to think clearly — a practice highlighted in{" "}
                    <a className="text-blue-700 underline" href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener">
                      trauma-informed care (SAMHSA)
                    </a>.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <div className="font-semibold text-amber-900 mb-1">2) 📝 Name the Crisis, Not Just the Feelings</div>
                  <p className="text-amber-800">
                    Write down the facts in simple terms: <em>“My partner was arrested today.”</em> Putting facts on paper helps stop the
                    spiral of endless “what-ifs.”
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="font-semibold text-emerald-900 mb-1">3) 🍎 Ground in Basics</div>
                  <p className="text-emerald-800">
                    Eat something nourishing, drink water, sleep if you can. These “small” acts are the base for every bigger decision.
                    The{" "}
                    <a className="text-blue-700 underline" href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">
                      National Child Traumatic Stress Network
                    </a>{" "}
                    notes stability in daily routines anchors both children and adults.
                  </p>
                </div>

                <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
                  <div className="font-semibold text-violet-900 mb-1">4) 🤝 Identify Safe People</div>
                  <p className="text-violet-800">
                    Who can you call who won’t judge or gossip? One trusted person is enough. If you don’t have someone in your circle,
                    reach out to a helpline or professional support — many reentry/family service orgs have confidential options.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                  <div className="font-semibold text-rose-900 mb-1">5) 🛑 Avoid Rash Decisions</div>
                  <p className="text-rose-800">
                    Don’t rush big disclosures, financial changes, or confrontations while in shock. Focus on 24-hour survival blocks:
                    <em> “What do I need to get through today safely?”</em>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-teal-200 bg-teal-50 p-4 mt-6">
                <div className="font-semibold text-teal-900 mb-1">💡 Pro Tip</div>
                <p className="text-teal-800">
                  In the first 72 hours of a crisis, it’s normal to feel like you’re drowning. Small acts of care — a shower, a walk,
                  a phone call — are lifelines.
                </p>
              </div>

              {/* Role-Based Self-Care */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🎭 Role-Based Self-Care</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👤 For the Impacted Individual</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Use the structure around you (bond, supervision, facility routines) as anchors.</li>
                    <li>Write affirmations or short letters of love to calm your mind and reassure family later.</li>
                    <li>Request mental health support early when possible (counselors/chaplains).</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👪 For Parents/Guardians (Caregivers at Home)</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Give yourself private space to cry, vent, or write.</li>
                    <li>Prioritize rest — exhaustion fuels poor decisions and overreactions.</li>
                    <li>Set boundaries: you don’t owe explanations to neighbors/relatives right away.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">💞 For Spouses/Partners</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Grief and love can coexist. Both are valid.</li>
                    <li>Lean on a peer (support group/friend/therapist) so kids don’t carry your load.</li>
                    <li>Delay big choices (move/divorce/finances) until you’re steadier.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👵 For Extended Family</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Ground yourself before “helping” — kids feel your state.</li>
                    <li>Try calming practices (prayer, walks, journaling) first.</li>
                    <li>Support without judgment. Your calm presence beats advice.</li>
                  </ul>
                </div>
              </div>

              {/* Timeline Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🕒 Timeline Guidance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🚨 Early Stage (Arrest / Pre-Trial)</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Focus on immediate needs: food, housing, childcare, legal representation.</li>
                    <li>Limit news/social media — it spikes panic.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">⛓️ Incarceration</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Set daily rhythms (call/letter/meals). Predictability stabilizes you.</li>
                    <li>Create a support calendar so you aren’t isolated.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🏠 Reentry / Supervision</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Expect stress spikes. Ask: <em>“What’s in my control today?”</em></li>
                    <li>Build household rhythms gradually; don’t expect “normal” overnight.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">📜 Registry / Long-Term</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Balance advocacy, parenting, and self-care to prevent burnout.</li>
                    <li>Normalize the new reality in your mind first; peer support helps sustain resilience.</li>
                  </ul>
                </div>
              </div>

              {/* Checklist (interactive) */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">✅ Self-Stabilization Checklist</h3>
              <ul className="list-none space-y-2 m-0 p-0">
                {[
                  { id: "s1-1", text: "Pause and take three deep breaths." },
                  { id: "s1-2", text: "Write down the facts of what has happened." },
                  { id: "s1-3", text: "Eat, hydrate, and rest before making major decisions." },
                  { id: "s1-4", text: "Identify one safe person to talk to." },
                  { id: "s1-5", text: "Avoid oversharing or overexplaining until calmer." },
                  { id: "s1-6", text: "Set one small goal for today (call lawyer, pick up kids, take a walk)." },
                ].map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <input
                      id={item.id}
                      type="checkbox"
                      className="mt-1 h-5 w-5 rounded border-slate-300"
                      checked={!!checkedItems[item.id]}
                      onChange={() => toggleCheck(item.id)}
                    />
                    <label htmlFor={item.id} className="cursor-pointer">
                      {item.text}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Step 2 --------------------------------------------------------- */}
          <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold">🗣️ Step 2: Disclosure to Children</h2>
              <p className="text-slate-200 mt-1">Speak with honesty, but match your words to your child’s age and capacity.</p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p>
                Disclosure is one of the hardest steps — children deserve honesty, but not every detail. The goal is to reduce fear
                and confusion while preserving trust. Adjust language for developmental stage, and lean on “anchor phrases” you
                prepare ahead of time.
              </p>

              {/* Universal Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-8 mb-3">🌍 Universal Guidance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use short, clear sentences. Avoid jargon, euphemisms, or excessive detail.</li>
                <li>Give information in layers — answer what is asked, then pause.</li>
                <li>Validate feelings: <em>“It’s okay to feel sad or mad. I feel that way too.”</em></li>
                <li>Reassure safety: who is caring for them, what routines will stay the same.</li>
                <li>Keep repeating core truths; kids need consistency to absorb change.</li>
              </ul>

              <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 mt-6">
                <div className="font-semibold text-cyan-900 mb-1">💡 Pro Tip</div>
                <p className="text-cyan-800">
                  Children mirror your emotional state. Practice what you want to say with another adult first. Write it down to
                  catch phrasing that may confuse or frighten them.
                </p>
              </div>

              {/* Role-Based Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🎭 Role-Based Guidance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👶 Ages 0–6</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Keep it concrete: <em>“Daddy can’t live here right now, but you are safe.”</em></li>
                    <li>Use routines (bedtime, meals) to restore security.</li>
                    <li>Offer physical comfort (hugs, play, storytime).</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👧 Ages 7–12</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>They notice inconsistencies — don’t hide the arrest/incarceration.</li>
                    <li>Simple explanation: <em>“They broke a law and have to be away for a while.”</em></li>
                    <li>Encourage questions, but don’t overload them with legal detail.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🧑 Ages 13–18</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Teens value honesty. Share more context, but frame accountability and growth.</li>
                    <li>Address stigma directly: equip them with phrases if peers ask.</li>
                    <li>Invite them to therapy or peer groups if available.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🌐 Mixed-Age Households</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Use age-appropriate explanations separately, then gather together for reassurance.</li>
                    <li>Older siblings should not be burdened with parenting roles.</li>
                  </ul>
                </div>
              </div>

              {/* Timeline Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🕒 Timeline Guidance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🚨 Early Stage</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Children may overhear or sense stress. Give short reassurances quickly.</li>
                    <li>Repeat often: <em>“You are safe. You will be cared for.”</em></li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">⛓️ Incarceration</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Prepare them for visits with practical details (security, waiting, short contact).</li>
                    <li>Offer alternatives if visits are overwhelming (letters, drawings, phone calls).</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🏠 Reentry</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Let kids set the pace for reconnecting. Don’t force hugs or conversation.</li>
                    <li>Rebuild family rituals slowly — meals, games, bedtime routines.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">📜 Registry / Long-Term</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Equip kids to handle stigma and questions: “We don’t talk about that outside our family.”</li>
                    <li>Normalize support: therapy, trusted adult mentors, safe activities.</li>
                  </ul>
                </div>
              </div>

              {/* Checklist (interactive) */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">✅ Disclosure Checklist</h3>
              <ul className="list-none space-y-2 m-0 p-0">
                {[
                  { id: "s2-1", text: "Choose a calm time and place for disclosure." },
                  { id: "s2-2", text: "Use simple, age-appropriate language." },
                  { id: "s2-3", text: "Reassure children about safety and stability." },
                  { id: "s2-4", text: "Answer questions honestly but briefly." },
                  { id: "s2-5", text: "Repeat anchor phrases consistently." },
                  { id: "s2-6", text: "Protect kids from overhearing adult gossip/discussions." },
                ].map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <input
                      id={item.id}
                      type="checkbox"
                      className="mt-1 h-5 w-5 rounded border-slate-300"
                      checked={!!checkedItems[item.id]}
                      onChange={() => toggleCheck(item.id)}
                    />
                    <label htmlFor={item.id} className="cursor-pointer">
                      {item.text}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Step 3 --------------------------------------------------------- */}
          <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold">👪 Step 3: Managing Family Reactions</h2>
              <p className="text-slate-200 mt-1">Relatives may respond with love, anger, confusion, or silence — prepare for all possibilities.</p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p>
                When news of an arrest, incarceration, or registry status spreads through a family, reactions vary widely. Some
                relatives may rally around you with food and childcare, while others may cut off contact entirely. Anticipating
                this spectrum helps you protect your children and your own stability.
              </p>

              {/* Universal Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-8 mb-3">🌍 Universal Guidance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Decide ahead of time who needs to know details and who doesn’t.</li>
                <li>Prepare one or two “anchor phrases” you repeat consistently.</li>
                <li>Do not let children overhear family arguments or adult gossip.</li>
                <li>Seek one or two allies within the family who will support your messaging.</li>
              </ul>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mt-6">
                <div className="font-semibold text-amber-900 mb-1">💡 Pro Tip</div>
                <p className="text-amber-800">
                  You don’t have to answer every question. Silence is also a boundary. Phrases like{" "}
                  <em>“That’s not something I can discuss”</em> protect your privacy and your children.
                </p>
              </div>

              {/* Role-Based Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🎭 Role-Based Guidance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👤 Impacted Individual</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Accept that some relatives may not forgive quickly — or ever.</li>
                    <li>Offer accountability first: short statements like <em>“I know I caused pain. I’m working to do better.”</em></li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👪 Parents/Guardians</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Stand firm when relatives push for details: <em>“I won’t discuss specifics.”</em></li>
                    <li>Keep focus on children’s stability, not adult curiosity.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">💞 Spouses/Partners</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Expect conflicting advice: some will pressure you to leave, others to stay.</li>
                    <li>Protect yourself from constant re-justifying your choices.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👵 Extended Family</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Support through actions — meals, rides, childcare — not opinions.</li>
                    <li>Don’t vent frustration around children; they already feel scrutinized.</li>
                  </ul>
                </div>
              </div>

              {/* Timeline Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🕒 Timeline Guidance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🚨 Early Stage</div>
                  <p>Share only essentials with close relatives needed for childcare or immediate support.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">⛓️ Incarceration</div>
                  <p>Set expectations for visitation: explain security, wait times, and that children won’t be interrogated afterward.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🏠 Reentry</div>
                  <p>Remind relatives that rules are part of supervision, not punishments for the family.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">📜 Registry / Long-Term</div>
                  <p>Address fears directly: <em>“Yes, there are restrictions. We’re adapting together.”</em></p>
                </div>
              </div>

              {/* Checklist (interactive) */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">✅ Managing Family Reactions Checklist</h3>
              <ul className="list-none space-y-2 m-0 p-0">
                {[
                  { id: "s3-1", text: "Decide who needs details and who doesn’t." },
                  { id: "s3-2", text: "Prepare and repeat one anchor phrase." },
                  { id: "s3-3", text: "Protect children from overhearing adult discussions." },
                  { id: "s3-4", text: "Prepare relatives before visits so kids aren’t interrogated." },
                  { id: "s3-5", text: "Lean on one or two allies to echo your messaging." },
                  { id: "s3-6", text: "Accept shifting relationships as part of this process." },
                ].map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <input
                      id={item.id}
                      type="checkbox"
                      className="mt-1 h-5 w-5 rounded border-slate-300"
                      checked={!!checkedItems[item.id]}
                      onChange={() => toggleCheck(item.id)}
                    />
                    <label htmlFor={item.id} className="cursor-pointer">
                      {item.text}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Step 4 --------------------------------------------------------- */}
          <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold">🤝 Step 4: Trust Rebuilding Toolkit</h2>
              <p className="text-slate-200 mt-1">Trust returns through small, steady actions that prove safety and care over time.</p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p>
                Legal involvement often takes more than freedom — it can cost jobs, housing, friendships, and social standing.
                Relationships with those who remain become a lifeline. Trust may feel impossible, but it can be rebuilt through
                consistent, reliable behavior that restores safety day by day.
              </p>

              {/* Universal Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-8 mb-3">🌍 Universal Guidance</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Acknowledge the break.</strong> Name it plainly: <em>“Trust has been damaged.”</em> Honesty opens the door
                  to honest repair.
                </li>
                <li>
                  <strong>Begin with basics.</strong> Don’t promise big turnarounds — show up on time, follow rules, keep routines.
                </li>
                <li>
                  <strong>Consistency is everything.</strong> A thousand small reliable actions beat dramatic apologies.
                </li>
                <li>
                  <strong>Repair, don’t defend.</strong> When you miss the mark, own it and make it right:{" "}
                  <em>“I didn’t follow through. I’m sorry. Here’s how I’ll fix it.”</em>
                </li>
                <li>
                  <strong>Build shared rituals of connection.</strong> Weekly meetings, bedtime check-ins, Sunday walks — predictable
                  routines grow safety.
                </li>
              </ol>

              {/* Callouts */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="font-semibold text-emerald-900 mb-1">💡 Pro Tip</div>
                  <p className="text-emerald-800">
                    Trust is rebuilt less through “big talks” and more through daily reliability. Small kept promises add up.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                  <div className="font-semibold text-rose-900 mb-1">⚠️ Gentle Reminder</div>
                  <p className="text-rose-800">
                    Defensiveness drains trust. Accountability restores it — even when you feel misunderstood.
                  </p>
                </div>
              </div>

              {/* Practical Tools & Exercises */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🛠️ Practical Tools & Exercises</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🧩 Micro-Commitments</div>
                  <p className="m-0">Start with one promise per week and keep it. Build gradually as reliability grows.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🗣️ Family “Talk Circle”</div>
                  <p className="m-0">Once a week, each person gets 5 minutes to share while others listen without interrupting.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">✉️ Letter Exchange</div>
                  <p className="m-0">Swap brief notes. Writing creates safety to express tough emotions thoughtfully.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🏺 Trust Jar</div>
                  <p className="m-0">When a promise is kept, write it down and add to a jar. Review together monthly.</p>
                </div>
              </div>

              {/* Role-Based Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🎭 Role-Based Guidance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👤 Impacted Individual</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Expect doubt to last; don’t rush others.</li>
                    <li>Replace “Trust me” with consistent actions and timely follow-through.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👪 Parents/Guardians</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Keep promises small and simple: <em>“I’ll pick you up at 3:00.”</em> Then do it.</li>
                    <li>Coach kids to try micro-commitments and celebrate when they keep them.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">💞 Spouses/Partners</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>It’s normal to feel torn between hope and fear.</li>
                    <li>Ask directly for what helps you feel safe: <em>“Please be on time tonight.”</em></li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👵 Extended Family</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Offer steady, practical support: childcare, meals, rides.</li>
                    <li>Never put children in the middle by asking them to report on an adult.</li>
                  </ul>
                </div>
              </div>

              {/* Timeline Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🕒 Timeline Guidance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🚨 Early Stage (Arrest / Pre-Trial)</div>
                  <p className="m-0">Keep routines alive and communication functional. Say: <em>“We’re facing this together.”</em></p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">⛓️ Incarceration</div>
                  <p className="m-0">Use predictable contact (letters, scheduled calls). Explain missed calls are often facility issues.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🏠 Reentry / Supervision</div>
                  <p className="m-0">Manage expectations: <em>“It won’t be perfect at first; we’ll adjust together.”</em></p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">📜 Registry / Long-Term</div>
                  <p className="m-0">Shift from survival to growth: traditions, projects, advocacy that strengthen identity.</p>
                </div>
              </div>

              {/* Checklist (interactive) */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">✅ Trust Rebuilding Checklist</h3>
              <ul className="list-none space-y-2 m-0 p-0">
                {[
                  { id: "s4-1", text: "Acknowledge that trust was broken." },
                  { id: "s4-2", text: "Make one small, realistic promise — and keep it." },
                  { id: "s4-3", text: "Reinforce consistency with daily routines." },
                  { id: "s4-4", text: "Repair quickly when mistakes happen." },
                  { id: "s4-5", text: "End each week celebrating at least one kept promise." },
                ].map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <input
                      id={item.id}
                      type="checkbox"
                      className="mt-1 h-5 w-5 rounded border-slate-300"
                      checked={!!checkedItems[item.id]}
                      onChange={() => toggleCheck(item.id)}
                    />
                    <label htmlFor={item.id} className="cursor-pointer">
                      {item.text}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Step 5 --------------------------------------------------------- */}
          <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold">🌄 Step 5: Ongoing Support & Resilience</h2>
              <p className="text-slate-200 mt-1">Long-term resilience grows from steady support networks, healthy routines, and celebrating small victories.</p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p>
                Crises don’t end at sentencing or release. Investigations, incarceration, supervision, and registries can stretch
                across years. Families need strategies that carry them through the long haul — not just short-term survival.
              </p>
              <p>
                Resilience isn’t pretending everything is fine; it’s building the routines, support, and mindset that keep you moving
                forward even when challenges continue.
              </p>

              {/* Universal Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-8 mb-3">🌍 Universal Guidance</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Build a long-term support system.</strong> Safe peers, faith groups, and reentry services lighten stigma.
                  Example: the{" "}
                  <a
                    className="text-blue-700 underline"
                    href="https://www.osborneny.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Osborne Association
                  </a>{" "}
                  offers family-focused programs.
                </li>
                <li>
                  <strong>Invest in professional help when possible.</strong> Trauma-informed therapy gives families tools that peers
                  cannot provide. See{" "}
                  <a
                    className="text-blue-700 underline"
                    href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SAMHSA’s 6 principles
                  </a>
                  .
                </li>
                <li>
                  <strong>Create family rituals of resilience.</strong> Weekly meals, game nights, walks, or journaling remind
                  children that the family’s identity is larger than the legal system.
                </li>
                <li>
                  <strong>Balance privacy and connection.</strong> Protect details but avoid total isolation.{" "}
                  <a
                    className="text-blue-700 underline"
                    href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NCTSN
                  </a>{" "}
                  warns that isolation deepens trauma.
                </li>
                <li>
                  <strong>Keep perspective.</strong> Hard seasons don’t last forever. Families adapt, grow, and can thrive.
                </li>
              </ol>

              {/* Callout */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 mt-6">
                <div className="font-semibold text-emerald-900 mb-1">💡 Pro Tip</div>
                <p className="text-emerald-800">
                  Resilience grows fastest when families celebrate even tiny wins — a school day finished, a rule followed, a job
                  interview attended.
                </p>
              </div>

              {/* Role-Based Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🎭 Role-Based Guidance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👤 Impacted Individual</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Invest in growth: education, work programs, therapy.</li>
                    <li>Be transparent about restrictions. Surprises erode trust.</li>
                    <li>Model resilience by coping with stress in healthy ways.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👪 Parents/Guardians</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Prioritize your own mental health; burnout affects children.</li>
                    <li>Build a personal support team so you don’t carry everything alone.</li>
                    <li>Teach kids coping tools like journaling, sports, or art.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">💞 Spouses/Partners</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Expect roles to shift over time: caregiver, partner, advocate.</li>
                    <li>Protect space for joy and personal dreams, not just duties.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">👵 Extended Family</div>
                  <ul className="list-none space-y-2 m-0 p-0">
                    <li>Show up for milestones like birthdays and school plays.</li>
                    <li>Offer practical help — rides, meals, childcare.</li>
                  </ul>
                </div>
              </div>

              {/* Timeline Guidance */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">🕒 Timeline Guidance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🚨 Early Stage (Arrest / Pre-Trial)</div>
                  <p className="m-0">Anchor resilience in stability: meals, sleep, school, childcare routines.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">⛓️ Incarceration</div>
                  <p className="m-0">Normalize contact routines (letters, visits, calls). Prepare children for mixed emotions.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">🏠 Reentry / Supervision</div>
                  <p className="m-0">Transitions are bumpy. Set realistic expectations: “We’ll adjust together.”</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-800 mb-1">📜 Registry / Long-Term</div>
                  <p className="m-0">Shift into growth routines: advocacy, family projects, shared traditions.</p>
                </div>
              </div>

              {/* Checklist (interactive) */}
              <h3 className="text-xl font-bold text-slate-700 mt-10 mb-3">✅ Resilience Checklist</h3>
              <ul className="list-none space-y-2 m-0 p-0">
                {[
                  { id: "s5-1", text: "Identify at least one safe support person or group." },
                  { id: "s5-2", text: "Create a weekly family ritual of connection." },
                  { id: "s5-3", text: "Celebrate small victories to build hope." },
                  { id: "s5-4", text: "Seek professional support if available." },
                  { id: "s5-5", text: "Protect privacy while keeping healthy social contact." },
                  { id: "s5-6", text: "Remind the family: “We are more than this situation.”" },
                ].map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <input
                      id={item.id}
                      type="checkbox"
                      className="mt-1 h-5 w-5 rounded border-slate-300"
                      checked={!!checkedItems[item.id]}
                      onChange={() => toggleCheck(item.id)}
                    />
                    <label htmlFor={item.id} className="cursor-pointer">
                      {item.text}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Conclusion --------------------------------------------------------- */}
          <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold">🌟 Conclusion: A Path Forward</h2>
              <p className="text-slate-100 mt-1">
                Warmth, honesty, routines, and support carry families through the long journey.
              </p>
            </div>

            <p className="mb-4">
              There are no perfect words. Disclosure may feel messy. Trust may take longer than you hoped. Family reactions may
              surprise you. And resilience may sometimes feel like survival — but you are not alone.
            </p>
            <p className="mb-4">
              Families across the country adapt and grow with the help of{" "}
              <a
                className="text-blue-700 underline"
                href="https://sesameworkshop.org/resources/coping-with-incarceration"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sesame Workshop’s caregiver tools
              </a>{" "}
              and{" "}
              <a
                className="text-blue-700 underline"
                href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stop It Now!’s family safety guides
              </a>
              . Children need your honesty, steadiness, and willingness to show up — again and again.
            </p>
            <p className="mb-2">
              🌅 There is life beyond this moment. It may look different from what you imagined, but it can still hold safety, joy,
              dignity, and connection. With courage, love, and supportive community, your family can emerge not only surviving, but
              stronger and wiser.
            </p>
          </section>

          {/* Sources & Resources ------------------------------------------------ */}
          <section
            id="sources-resources"
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
          >
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  📚
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Sources &amp; Resources</h2>
                  <p className="text-slate-200">
                    Trusted, family-friendly materials you can reference and share
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ul className="list-disc pl-6 space-y-2 text-slate-800">
                <li>
                  <a
                    className="text-blue-700 underline"
                    href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    American Academy of Pediatrics – Tips to Support Children When a Parent is in Prison
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 underline"
                    href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SAMHSA – 6 Guiding Principles of Trauma-Informed Approach
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 underline"
                    href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    National Child Traumatic Stress Network – About Child Trauma
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 underline"
                    href="https://sesameworkshop.org/resources/coping-with-incarceration/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sesame Workshop – Coping With Incarceration
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 underline"
                    href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stop It Now! – Parents Talking to Children About Sexual Abuse
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 underline"
                    href="https://www.atsa.com/atsa-practice-guidelines"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Association for the Treatment and Prevention of Sexual Abuse (ATSA) – Practice Guidelines
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 underline"
                    href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Children of Incarcerated Parents Bill of Rights – Osborne Association
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 underline"
                    href="https://www.mstservices.com/what-is-mst"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Multisystemic Therapy (MST)
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-blue-700 underline"
                    href="https://www.functionalfamilytherapy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Functional Family Therapy (FFT)
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 underline"
                    href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    American Psychological Association – Rebuilding Trust
                </a>
              </li>
            </ul>
          </div> {/* end: sources inner padding */}
        </section> {/* end: sources section */}
      </div> {/* end: content container */}
    </div> {/* end: page wrapper */}
  );
}

export default ChildrenDisclosureToolkit;
