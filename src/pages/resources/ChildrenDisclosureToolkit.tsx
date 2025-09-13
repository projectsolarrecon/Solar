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
        description="Step-by-step strategies and resources for families navigating disclosure to children, rebuilding trust, and maintaining resilience when a loved one is involved in the legal system."
        keywords="children disclosure toolkit, rebuilding trust, registry families, SOLAR Project, resilience, family support"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-600 text-white py-16 shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 uppercase tracking-wide mb-2 text-sm font-semibold">
            SOLAR Resource Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🌱 Children & Disclosure + Relationship Rebuilding Toolkit
          </h1>
          <p className="text-lg md:text-xl text-slate-100">
            For families of an impacted individual in any stage: investigation,
            pretrial, incarceration, supervision, registry
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">🌟 Introduction</h2>
          <p className="mb-4">
            When someone in your family is arrested, investigated, incarcerated, or
            placed on a registry, it can feel like your entire world has been turned
            inside out. Overnight, the life you thought you knew changes — and
            suddenly you are faced with impossible questions:{" "}
            <em>What do I tell my children? How do I face relatives or neighbors? How
            do we keep moving forward?</em>
          </p>
          <p className="mb-4">
            If you are reading this, you may feel fear, shame, confusion, or even
            anger. Please know: <strong>you are not alone.</strong> Thousands of
            families walk this path every year, and while no two stories are the
            same, there are safe, thoughtful ways to navigate these conversations
            and rebuild trust.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-4">
            <p>
              👉 <strong>Note on language:</strong> In this guide we use the term{" "}
              <em>“impacted individual”</em> to describe the person at the center of
              the legal process — whether they are under investigation, incarcerated,
              on supervision, or on the registry. It avoids labels like{" "}
              <em>“offender”</em> or <em>“accused”</em> that may not apply at every
              stage, and keeps the focus on the person’s humanity.
            </p>
          </div>
          <p>
            ✨ You do not have to get this perfect. What matters most is showing up
            with honesty, love, and consistency. With patience and courage, families
            can move through even the most difficult circumstances together.
          </p>
        </section>

        {/* Step 1 */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">🧘 Step 1: Stabilize & Ground Yourself</h2>
          <p className="mb-4">
            When a crisis erupts, your body and mind may go into survival mode —
            racing thoughts, panic, exhaustion, or numbness. Before you can support
            children, rebuild relationships, or make thoughtful decisions, you must
            first steady yourself. Think of this as putting on your own oxygen mask
            before helping others.
          </p>
          <p className="mb-4">
            This step is about <strong>finding your footing</strong>, so that the
            storm around you doesn’t sweep you away.
          </p>

          <h3 className="text-xl font-semibold text-slate-600 mb-2">🌍 Universal Guidance</h3>
          <ul className="list-none space-y-2 mb-4">
            <li>🌬️ <strong>Breathe and Slow Down</strong> — Practice deep breathing to calm your nervous system. Even 60 seconds can reduce panic. (<a href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener" className="text-blue-700 underline">SAMHSA</a>)</li>
            <li>📝 <strong>Name the Crisis</strong> — Write down what has happened in simple terms to stop spiraling into “what-ifs.”</li>
            <li>🍎 <strong>Ground in Basics</strong> — Eat, hydrate, and sleep. The <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener" className="text-blue-700 underline">NCTSN</a> notes daily stability is key for children in trauma.</li>
            <li>🤝 <strong>Identify Safe People</strong> — Call one trusted person who won’t judge or gossip. If you can’t, reach out to a helpline.</li>
            <li>🛑 <strong>Avoid Rash Decisions</strong> — Don’t make big changes or disclosures while still in shock. Focus on surviving 24 hours at a time.</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mb-4">
            💡 <strong>Pro Tip:</strong> In the first 72 hours of a crisis, it’s normal
            to feel like you’re drowning. Small acts of care — a shower, a walk, a
            phone call — are lifelines.
          </div>
        </section>
        {/* Step 1 — Role-Based Self-Care */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-600 mb-4">🎭 Role-Based Self-Care</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👤 For the Impacted Individual</h4>
              <ul className="list-none space-y-2">
                <li>🧭 Use the structure around you (jail, bond conditions, supervision) to anchor routines.</li>
                <li>💌 Write affirmations or brief letters of love for family to read later.</li>
                <li>🩺 Request mental health support early if possible (counselor, clinician, or chaplain).</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👪 For Parents/Guardians at Home</h4>
              <ul className="list-none space-y-2">
                <li>🕊️ Give yourself permission to cry, vent, or journal — in private.</li>
                <li>🛌 Prioritize rest; exhaustion fuels poor decisions.</li>
                <li>🚧 Set boundaries: you don’t owe explanations to every neighbor or relative.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">💞 For Spouses/Partners</h4>
              <ul className="list-none space-y-2">
                <li>🖤 Acknowledge grief and betrayal if present — both can coexist with love.</li>
                <li>🧑‍🤝‍🧑 Process with one safe peer (group, friend, therapist) so children don’t carry it.</li>
                <li>⏳ Delay big choices (divorce, moving, finances) until you’re steadier.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👵 For Extended Family</h4>
              <ul className="list-none space-y-2">
                <li>🌿 Ground yourself first; children feel your state.</li>
                <li>🚶 Do calming activities (walks, prayer, journaling) before offering help.</li>
                <li>🤗 Support without judgment; your calm presence is more helpful than advice.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 1 — Timeline Guidance */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-600 mb-4">🕒 Timeline Guidance</h3>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">🚨 Early Stage (Arrest / Pre-Trial)</h4>
              <p className="text-slate-700">
                Shock peaks here. Focus on immediate needs: food, housing, childcare, and legal representation. Limit news/social media to reduce panic.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">⛓️ Incarceration Stage</h4>
              <p className="text-slate-700">
                Build routine: schedule calls, letters, and meals. Create a support calendar so you’re not isolated or overwhelmed.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">🏠 Reentry / Supervision</h4>
              <p className="text-slate-700">
                Expect stress spikes with transition. Use daily check-ins: “What’s in my control today?” Rebuild household rhythms gradually.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">📜 Registry / Long-Term</h4>
              <p className="text-slate-700">
                Pace yourself — balance advocacy, parenting, and self-care. Normalize the new reality for yourself before explaining it to children.
              </p>
            </div>
          </div>
        </section>

        {/* Step 1 — Interactive Checklist */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-600 mb-4">✅ Self-Stabilization Checklist</h3>
          <ul className="space-y-3">
            {[
              { id: "s1breathe", label: "Pause and take three deep breaths" },
              { id: "s1facts", label: "Write down the facts of what has happened" },
              { id: "s1basics", label: "Eat, hydrate, and rest before major decisions" },
              { id: "s1ally", label: "Identify one safe person to talk to" },
              { id: "s1overshare", label: "Avoid oversharing until calmer" },
              { id: "s1goal", label: "Set one small goal for today (call lawyer, pick up kids, take a walk)" },
            ].map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <input
                  id={item.id}
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded border-slate-300"
                  checked={!!checkedItems[item.id]}
                  onChange={() => toggleCheck(item.id)}
                />
                <label htmlFor={item.id} className="text-slate-800 cursor-pointer">
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </section>

        {/* Step 2 */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">👶 Step 2: Disclosure to Children</h2>
            <p className="text-slate-100 mt-1">
              Thoughtful, age-appropriate truth builds safety and trust.
            </p>
          </div>

          <p className="mb-4">
            Few moments feel as impossible as telling a child that a loved one is in legal trouble. Whether your child is three,
            thirteen, or twenty-three, your instinct may be to protect them from the truth. But children sense when something is
            wrong — and silence can be more frightening than honesty.
          </p>
          <p className="mb-4">
            Children who are left in the dark may imagine worst-case scenarios, blame themselves, or feel abandoned. Thoughtful
            disclosure, by contrast, gives children language for what is happening, reassures them that they are not at fault,
            and builds trust that adults will tell them the truth — even when it’s hard.{" "}
            <a
              href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx"
              target="_blank"
              rel="noopener"
              className="text-blue-700 underline"
            >
              American Academy of Pediatrics
            </a>{" "}
            emphasizes the importance of clear, age-appropriate truth.
          </p>
          <p className="mb-4">
            Disclosure is a <strong>process of many conversations</strong> that evolve as your child grows and your circumstances
            change. Your role is not to provide every detail, but to offer age-appropriate truth, reassurance, and safety.
          </p>

          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded mb-4">
            💗 <strong>Gentle Reminder:</strong> End hard conversations with something grounding — a snack, a story, or a walk —
            to signal safety and continuity.
          </div>

          <h3 className="text-xl font-semibold text-slate-600 mb-2">🌍 Universal Guidance</h3>
          <ul className="list-none space-y-2">
            <li>🧑‍⚕️ <strong>Prepare yourself first</strong> — practice with another adult; write down key phrases.</li>
            <li>🕯️ <strong>Choose the right moment</strong> — quiet, private, unrushed; sit at their level if young.</li>
            <li>🧩 <strong>Keep it simple, honest, and short</strong> — answer what they ask, not every possible detail.</li>
            <li>🫶 <strong>Reassure safety and love</strong> — say directly: “You are safe. You are loved.” (see{" "}
              <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener" className="text-blue-700 underline">
                NCTSN
              </a>
              )</li>
            <li>🌦️ <strong>Expect varied reactions</strong> — tears, anger, silence, or laughter can all be normal.</li>
            <li>🌱 <strong>Return to the conversation</strong> — revisit as their understanding grows.</li>
          </ul>
        </section>
        {/* Step 2 — Age-Appropriate Approaches & Scripts */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-600 mb-4">🗣️ Age-Appropriate Approaches & Scripts</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">📚 Preschool (3–5 years)</h4>
              <ul className="list-none space-y-2">
                <li>🧩 Script: <em>“Daddy can’t live at home right now because he broke a rule. The helpers are making sure he learns how to do better. You are safe, and you are loved.”</em></li>
                <li>🧸 Follow-up: <em>“This is a grown-up problem. You did nothing wrong.”</em></li>
                <li>⏱️ Keep it under 30 seconds, then move to a grounding activity (hug, drawing, play).</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">🖍️ Elementary (6–10 years)</h4>
              <ul className="list-none space-y-2">
                <li>🧩 Script: <em>“Mom is in trouble because she broke an important rule. The people in charge want to make sure it doesn’t happen again. She still loves you, and we are keeping our family safe.”</em></li>
                <li>📝 Follow-up: <em>“I don’t have all the answers right now, but I will always tell you the truth in words you can understand.”</em></li>
                <li>🔁 Expect repeated questions; it is okay to say, <em>“Great question — I’ll tell you when I know.”</em></li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">🎒 Middle School (11–13 years)</h4>
              <ul className="list-none space-y-2">
                <li>🧩 Script: <em>“Uncle made serious mistakes and has to follow special rules from the court. You can ask me anything, and I’ll tell you the truth.”</em></li>
                <li>🫥 Normalize embarrassment or anger; all feelings are valid.</li>
                <li>🧏 Reflective listening helps: <em>“I hear you saying this feels unfair.”</em></li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">📱 Teenagers (14–18 years)</h4>
              <ul className="list-none space-y-2">
                <li>🧩 Script: <em>“Your dad is on supervision because of choices he made that broke the law. That doesn’t change his love for you. We can talk about what this means for our family.”</em></li>
                <li>🎯 Affirm their right to their feelings; avoid lecturing.</li>
                <li>🧭 Collaborate on boundaries and practical next steps together.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-4 md:col-span-2">
              <h4 className="font-semibold text-slate-700 mb-2">🎓 Young Adults (18+)</h4>
              <ul className="list-none space-y-2">
                <li>🧩 Script: <em>“Here are the facts about the legal situation. You may have strong feelings — that’s okay. Let’s keep talking openly about how this affects you and our family.”</em></li>
                <li>🔗 Offer external supports (articles, therapy, peer groups) for independent processing.</li>
                <li>🤝 Treat them as partners in planning and decision-making.</li>
              </ul>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mt-4">
                🌼 <strong>Resource:</strong> Age-specific videos and caregiver guides from{" "}
                <a className="text-blue-700 underline" href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener">
                  Sesame Workshop’s incarceration toolkit
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        {/* Step 2 — Role-Based Guidance */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-600 mb-4">🎭 Role-Based Guidance</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👤 For the Impacted Individual</h4>
              <ul className="list-none space-y-2">
                <li>💌 If you cannot be present, write a brief message of love for a caregiver to read.</li>
                <li>🕊️ Keep messages simple — share love, not guilt.</li>
                <li>🧡 Do not take anger or distance personally; this is part of children’s processing.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👪 For Parents/Guardians at Home</h4>
              <ul className="list-none space-y-2">
                <li>🗣️ Agree on one script; consistency lowers anxiety.</li>
                <li>🔁 Expect repetition — the same words said calmly build safety.</li>
                <li>🧭 It’s okay to say, <em>“I don’t know, but I’ll find out.”</em></li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">💞 For Spouses/Partners</h4>
              <ul className="list-none space-y-2">
                <li>🪨 Don’t let your anger spill onto the disclosure; keep it about children’s needs.</li>
                <li>🧏 Active listening: reflect back (“I hear you’re upset”) before responding.</li>
                <li>🛡️ Reassure that their feelings can differ from yours — both are valid.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👵 For Extended Family</h4>
              <ul className="list-none space-y-2">
                <li>🤫 Support children with calm presence, not probing questions.</li>
                <li>🧭 Use the family’s chosen script; avoid over-explaining.</li>
                <li>↩️ If unsure, redirect: <em>“That’s something your parents will talk about with you.”</em></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 2 — Timeline Guidance */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-600 mb-4">🕒 Timeline Guidance</h3>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">🚨 Early Stage (Arrest / Pre-Trial)</h4>
              <ul className="list-none space-y-2">
                <li>📏 Keep explanations minimal; focus on immediate safety and temporary changes.</li>
                <li>🗣️ Script: <em>“Dad isn’t home because adults are helping him with a problem. You are safe.”</em></li>
                <li>📚 Reassure with routine — school, meals, bedtime anchors.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">⛓️ Incarceration Stage</h4>
              <ul className="list-none space-y-2">
                <li>🏛️ Prepare children for visits: uniforms, security, waiting rooms.</li>
                <li>🎨 Create pre/post visit rituals (draw before, treat after) to stabilize emotions.</li>
                <li>🚧 Be honest about limits: <em>“We may not be able to hug at visits, but we’ll still see each other.”</em></li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">🏠 Reentry / Supervision</h4>
              <ul className="list-none space-y-2">
                <li>🕖 Explain new rules simply: <em>“Mom has to be home at 7 p.m. — that’s one of the rules.”</em></li>
                <li>🍽️ Celebrate small routines returning — dinners, bedtime, walks.</li>
                <li>🫱 Give space for fears about rules being broken again; validate and plan together.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">📜 Registry / Long-Term</h4>
              <ul className="list-none space-y-2">
                <li>🧭 Introduce registry concepts gradually as children mature.</li>
                <li>🧱 Frame it as one part of life: <em>“It’s a rule we live with; it doesn’t define us.”</em></li>
                <li>🗣️ With teens, practice stigma responses — model dignity and calm.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 2 — Interactive Checklist */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-600 mb-4">✅ Disclosure Checklist</h3>
          <ul className="space-y-3">
            {[
              { id: "s2write", label: "Write down what you plan to say" },
              { id: "s2setting", label: "Choose a quiet, private setting" },
              { id: "s2simple", label: "Use short, age-appropriate explanations" },
              { id: "s2reassure", label: "Reassure love and safety directly" },
              { id: "s2q", label: "Expect questions — answer simply, don’t overexplain" },
              { id: "s2ground", label: "End with a comforting, normal activity" },
              { id: "s2revisit", label: "Revisit the conversation as children grow" },
              { id: "s2normalize", label: "Normalize all reactions (silence, tears, anger)" },
              { id: "s2notfault", label: "Remind: “This is not your fault.”" },
            ].map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <input
                  id={item.id}
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded border-slate-300"
                  checked={!!checkedItems[item.id]}
                  onChange={() => toggleCheck(item.id)}
                />
                <label htmlFor={item.id} className="text-slate-800 cursor-pointer">
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </section>
        {/* Step 3 */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">👨‍👩‍👧 Step 3: Managing Family Reactions & Extended Network</h2>
            <p className="text-slate-100 mt-1">
              Navigate relatives, friends, and community without losing your stability.
            </p>
          </div>

          <p className="mb-4">
            Once the immediate shock settles, the wider circle often has questions — or judgments. Some people rally, others withdraw.
            Remember: you can set boundaries and share only what is necessary to protect your children and yourself.
          </p>
          <p className="mb-4">
            The{" "}
            <a
              className="text-blue-700 underline"
              href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/"
              target="_blank"
              rel="noopener"
            >
              Children of Incarcerated Parents Bill of Rights
            </a>{" "}
            reminds us children have a right to be protected from shame and judgment.
          </p>

          <h3 className="text-xl font-semibold text-slate-600 mb-2">🌍 Universal Guidance</h3>
          <ul className="list-none space-y-2">
            <li>🗂️ <strong>Sort your circle</strong> into: trusted helpers, practical contacts, and not-safe-to-share.</li>
            <li>🧷 <strong>Create anchor phrases</strong> to repeat when people pry:
              <ul className="list-none ml-6 space-y-1 mt-1">
                <li>• “It’s a difficult situation. We’re focusing on keeping the kids safe.”</li>
                <li>• “We’re taking it one day at a time. Thank you for understanding.”</li>
              </ul>
              <span className="block mt-1 text-slate-600 text-sm">
                Using pre-prepared scripts reduces anxiety and ensures consistency (<a className="text-blue-700 underline" href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse" target="_blank" rel="noopener">Stop It Now!</a>).
              </span>
            </li>
            <li>🎭 Expect a spectrum of reactions — support, fear, anger, judgment — it reflects their fears, not your worth.</li>
            <li>🛡️ <strong>Protect children</strong> from adult conversations; step in: “We don’t discuss this around the kids.”</li>
            <li>🧑‍🤝‍🧑 <strong>Find allies</strong> who will echo your anchor phrases so you’re not carrying it alone.</li>
          </ul>

          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded my-4">
            💗 <strong>Pro Tip:</strong> You don’t have to answer every question. Silence can be a boundary:
            <em> “That’s not something I can discuss.”</em>
          </div>

          <h3 className="text-xl font-semibold text-slate-600 mb-2">🎭 Role-Based Guidance</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👤 For the Impacted Individual</h4>
              <ul className="list-none space-y-2">
                <li>🧯 Don’t demand instant forgiveness; allow feelings to unfold.</li>
                <li>🪪 Lead with accountability: <em>“I know I caused pain. I’m working to do better.”</em></li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👪 For Parents/Guardians at Home</h4>
              <ul className="list-none space-y-2">
                <li>🧱 Stand firm when pressured for details: <em>“I won’t discuss specifics, but I appreciate your support.”</em></li>
                <li>🎯 Your duty is child stability — not others’ curiosity.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">💞 For Spouses/Partners</h4>
              <ul className="list-none space-y-2">
                <li>⚖️ Expect mixed input from family; you can say: <em>“I need time to decide. Please respect that.”</em></li>
                <li>🧠 Don’t keep defending yourself repeatedly; set limits on the discussion.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👵 For Extended Family</h4>
              <ul className="list-none space-y-2">
                <li>🍲 Help with actions (meals, rides, reading with kids) instead of opinions.</li>
                <li>🙊 Avoid venting frustration around children; the family is already under a microscope.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-600 mt-6 mb-2">🕒 Timeline Guidance</h3>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">🚨 Early Stage (Arrest / Pre-Trial)</h4>
              <ul className="list-none space-y-2">
                <li>📬 Share only essentials with those who must know.</li>
                <li>🧷 Anchor phrase: <em>“This is a legal matter. We’re focusing on the children.”</em></li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">⛓️ Incarceration Stage</h4>
              <ul className="list-none space-y-2">
                <li>🏛️ Prepare relatives for visitation realities; ask them not to quiz kids after.</li>
                <li>✉️ Encourage letters or drawings instead of grilling for updates.</li>
                <li>🧒 Helpful primer:{" "}
                  <a className="text-blue-700 underline" href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener">
                    Sesame Workshop visitation resources
                  </a>.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">🏠 Reentry / Supervision</h4>
              <ul className="list-none space-y-2">
                <li>🏗️ Acknowledge trust concerns without defending every choice: <em>“We’re rebuilding step by step.”</em></li>
                <li>🚪 Limit exposure to relatives who can’t be respectful around kids.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">📜 Registry / Long-Term</h4>
              <ul className="list-none space-y-2">
                <li>🧭 Address stigma directly; focus on what’s in your control.</li>
                <li>🤝 Invite supportive family into advocacy or education to reduce isolation.</li>
              </ul>
            </div>
          </div>

          {/* Step 3 — Interactive Checklist */}
          <div className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-6">
            <h3 className="text-xl font-semibold text-slate-600 mb-4">✅ Managing Family Reactions Checklist</h3>
            <ul className="space-y-3">
              {[
                { id: "s3who", label: "Identify who truly needs to know details" },
                { id: "s3anchor", label: "Create one anchor phrase to use consistently" },
                { id: "s3kids", label: "Protect children from overhearing adult discussions" },
                { id: "s3prep", label: "Prepare supportive relatives before visits" },
                { id: "s3expect", label: "Expect both support and criticism" },
                { id: "s3allies", label: "Lean on one or two trusted allies for messaging" },
                { id: "s3accept", label: "Accept that some relationships may shift" },
              ].map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <input
                    id={item.id}
                    type="checkbox"
                    className="mt-1 h-5 w-5 rounded border-slate-300"
                    checked={!!checkedItems[item.id]}
                    onChange={() => toggleCheck(item.id)}
                  />
                  <label htmlFor={item.id} className="text-slate-800 cursor-pointer">
                    {item.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* Step 4 */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">🤝 Step 4: Trust Rebuilding Toolkit</h2>
            <p className="text-slate-100 mt-1">Small, steady, reliable actions restore safety over time.</p>
          </div>

          <p className="mb-4">
            When the legal system enters your life, it often takes jobs, income, housing, friendships, and social standing.
            Those who remain — your children, partner, parents, or a handful of trusted friends — are your lifeline.
          </p>
          <p className="mb-4">
            Trust is not rebuilt through big promises; it grows from daily reliability. The{" "}
            <a className="text-blue-700 underline" href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust" target="_blank" rel="noopener">
              American Psychological Association
            </a>{" "}
            emphasizes acknowledgement as a critical first step.
          </p>

          <h3 className="text-xl font-semibold text-slate-600 mb-2">🌍 Universal Guidance</h3>
          <ul className="list-none space-y-2">
            <li>🔎 Acknowledge the break: <em>“Trust has been damaged.”</em></li>
            <li>🧱 Begin with basics — be where you say you’ll be; keep routines and rules.</li>
            <li>🔁 Consistency beats dramatic apologies; reliability day-to-day builds safety.</li>
            <li>🩹 Repair, don’t defend: <em>“I missed that. I’m sorry. Here’s how I’ll make it right.”</em></li>
            <li>🤲 Build shared rituals — weekly family meetings, bedtime check-ins, Sunday walks.</li>
          </ul>

          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded my-4">
            🌿 <strong>Pro Tip:</strong> Trust grows less from “big talks” and more from small actions repeated consistently.
          </div>

          <h3 className="text-xl font-semibold text-slate-600 mb-2">🛠️ Practical Tools & Exercises</h3>
          <ul className="list-none space-y-2">
            <li>🧩 <strong>Micro-Commitments:</strong> one promise per week; keep it; build gradually.</li>
            <li>🫶 <strong>Family Talk Circle:</strong> 5 minutes each, uninterrupted, once a week.</li>
            <li>💌 <strong>Letter Exchange:</strong> brief notes to express difficult emotions safely.</li>
            <li>🫙 <strong>Trust Jar:</strong> record kept promises on slips; review progress monthly.</li>
            <li>🎉 <strong>Celebrate Progress:</strong> name one trust-building action at week’s end.</li>
          </ul>
          <p className="mt-2 text-slate-700">
            See therapy models emphasizing structured rituals and commitments:{" "}
            <a className="text-blue-700 underline" href="https://www.mstservices.com/what-is-mst" target="_blank" rel="noopener">MST</a>{" "}
            and{" "}
            <a className="text-blue-700 underline" href="https://www.functionalfamilytherapy.com/" target="_blank" rel="noopener">FFT</a>.
          </p>

          <h3 className="text-xl font-semibold text-slate-600 mt-6 mb-2">🎭 Role-Based Guidance</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👤 Impacted Individual</h4>
              <ul className="list-none space-y-2">
                <li>🧱 Expect doubt for a while; don’t rush loved ones.</li>
                <li>🚶 Replace “Trust me” with consistent behavior.</li>
                <li>🧠 If anger surfaces, listen without arguing; see{" "}
                  <a className="text-blue-700 underline" href="https://www.atsa.com/atsa-practice-guidelines" target="_blank" rel="noopener">ATSA guidelines</a>.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👪 Parents/Guardians at Home</h4>
              <ul className="list-none space-y-2">
                <li>🪵 Your consistency anchors children.</li>
                <li>🕒 Keep promises small and specific: <em>“I’ll pick you up at 3:00.”</em></li>
                <li>🎉 Celebrate when kids keep small commitments too.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">💞 Spouses/Partners</h4>
              <ul className="list-none space-y-2">
                <li>⚖️ Mixed feelings are normal; ask for what you need specifically.</li>
                <li>🌼 Leave room for joy, not just duty.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👵 Extended Family</h4>
              <ul className="list-none space-y-2">
                <li>🧩 Offer steady, practical help (childcare, meals, rides).</li>
                <li>🚫 Don’t put children in the middle as reporters.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-600 mt-6 mb-2">🕒 Timeline Guidance</h3>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">🚨 Early Stage (Arrest / Pre-Trial)</h4>
              <p className="text-slate-700">Focus on safety, routines, and basic communication; say aloud: “We’re facing this together.”</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">⛓️ Incarceration Stage</h4>
              <p className="text-slate-700">Predictable contact (letters, scheduled calls) builds trust. Explain missed calls calmly.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">🏠 Reentry / Supervision</h4>
              <p className="text-slate-700">Manage expectations; rules signal safety for the family.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">📜 Registry / Long-Term</h4>
              <p className="text-slate-700">Shift from survival to growth routines; shared purpose (advocacy, projects) strengthens resilience.</p>
            </div>
          </div>

          {/* Step 4 — Interactive Checklist */}
          <div className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-6">
            <h3 className="text-xl font-semibold text-slate-600 mb-4">✅ Trust Rebuilding Checklist</h3>
            <ul className="space-y-3">
              {[
                { id: "s4ack", label: "Acknowledge that trust was broken" },
                { id: "s4one", label: "Make one small, realistic promise — and keep it" },
                { id: "s4daily", label: "Build consistency through daily routines" },
                { id: "s4rituals", label: "Use rituals of connection (meals, bedtime, letters)" },
                { id: "s4repair", label: "Repair quickly when mistakes happen" },
                { id: "s4wins", label: "Celebrate small wins as a family" },
                { id: "s4time", label: "Remember: rebuilding takes time" },
              ].map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <input
                    id={item.id}
                    type="checkbox"
                    className="mt-1 h-5 w-5 rounded border-slate-300"
                    checked={!!checkedItems[item.id]}
                    onChange={() => toggleCheck(item.id)}
                  />
                  <label htmlFor={item.id} className="text-slate-800 cursor-pointer">
                    {item.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Step 5 */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">🌄 Step 5: Ongoing Support & Resilience</h2>
            <p className="text-slate-100 mt-1">Build strength for the long haul with routines, supports, and perspective.</p>
          </div>

          <p className="mb-4">
            Investigations, incarceration, supervision, and the registry can stretch for years. Resilience means building the
            supports and routines that keep your family moving forward even when challenges continue.
          </p>

          <h3 className="text-xl font-semibold text-slate-600 mb-2">🌍 Universal Guidance</h3>
          <ul className="list-none space-y-2">
            <li>🧑‍🤝‍🧑 Build a small but trustworthy support system (peer groups, faith communities, low-stigma spaces).
              See{" "}
              <a className="text-blue-700 underline" href="https://www.osborneny.org/" target="_blank" rel="noopener">Osborne Association</a>.
            </li>
            <li>🧠 Invest in professional help when possible;{" "}
              <a className="text-blue-700 underline" href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener">
                SAMHSA
              </a>{" "}
              notes trauma-informed care centers safety, trust, collaboration, and empowerment.
            </li>
            <li>📅 Create family resilience rituals — weekly meetings, game nights, walks, journaling.</li>
            <li>🔒 Balance privacy with connection; isolation increases trauma risk (
              <a className="text-blue-700 underline" href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener">NCTSN</a>).
            </li>
            <li>🌤️ Keep perspective: hard seasons don’t last forever; you are more than your hardest moment.</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded my-4">
            🌼 <strong>Pro Tip:</strong> Celebrate tiny wins — first school day completed, a successful check-in, a rule followed —
            these moments grow resilience.
          </div>

          <h3 className="text-xl font-semibold text-slate-600 mb-2">🎭 Role-Based Guidance</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👤 Impacted Individual</h4>
              <ul className="list-none space-y-2">
                <li>📚 Keep growing — therapy, education, work programs benefit the whole family.</li>
                <li>🧾 Be transparent about rules and restrictions; surprises erode trust.</li>
                <li>🧩 Model coping strategies for kids (breathing, reframing, routines).</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👪 Parents/Guardians at Home</h4>
              <ul className="list-none space-y-2">
                <li>🧯 Prioritize your mental health; burnout affects kids.</li>
                <li>🛠️ Build your support team so you don’t carry everything alone.</li>
                <li>🎨 Teach children coping tools (breathing, journaling, sports, art).</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">💞 Spouses/Partners</h4>
              <ul className="list-none space-y-2">
                <li>🔄 Roles shift over time; that’s normal.</li>
                <li>🌺 Allow breaks and outlets for joy.</li>
                <li>🎯 Keep your own goals and dreams in view.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700 mb-2">👵 Extended Family</h4>
              <ul className="list-none space-y-2">
                <li>🎂 Showing up for milestones matters (plays, birthdays, dinners).</li>
                <li>🚗 Offer practical help — rides, meals, childcare.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-600 mt-6 mb-2">🕒 Timeline Guidance</h3>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">🚨 Early Stage (Arrest / Pre-Trial)</h4>
              <p className="text-slate-700">Anchor on stability: meals, school, sleep, and daily life continuing.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">⛓️ Incarceration Stage</h4>
              <p className="text-slate-700">Normalize letters, visits, and calls; prepare kids for mixed feelings.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">🏠 Reentry / Supervision</h4>
              <p className="text-slate-700">Manage expectations: “It won’t be perfect at first, but we’ll adjust together.”</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-700">📜 Registry / Long-Term</h4>
              <p className="text-slate-700">Shift to growth routines: traditions, travel, advocacy, family projects.</p>
            </div>
          </div>

          {/* Step 5 — Interactive Checklist */}
          <div className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-6">
            <h3 className="text-xl font-semibold text-slate-600 mb-4">✅ Resilience Checklist</h3>
            <ul className="space-y-3">
              {[
                { id: "s5one", label: "Identify at least one safe support person or group" },
                { id: "s5ritual", label: "Create a weekly family ritual that builds connection" },
                { id: "s5wins", label: "Celebrate small victories to build hope" },
                { id: "s5pro", label: "Seek professional support if available" },
                { id: "s5balance", label: "Protect privacy while maintaining social connections" },
                { id: "s5affirm", label: "Affirm: “We are more than this situation.”" },
              ].map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <input
                    id={item.id}
                    type="checkbox"
                    className="mt-1 h-5 w-5 rounded border-slate-300"
                    checked={!!checkedItems[item.id]}
                    onChange={() => toggleCheck(item.id)}
                  />
                  <label htmlFor={item.id} className="text-slate-800 cursor-pointer">
                    {item.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">🌟 Conclusion: A Path Forward</h2>
            <p className="text-slate-100 mt-1">Warmth, honesty, routines, and support carry families through the long journey.</p>
          </div>

          <p className="mb-4">
            There are no perfect words. Disclosure may feel messy. Trust may take longer than you hoped. Family reactions may
            surprise you. And resilience may sometimes feel like survival — but you are not alone.
          </p>
          <p className="mb-4">
            Families across the country adapt and grow with the help of{" "}
            <a className="text-blue-700 underline" href="https://sesameworkshop.org/resources/coping-with-incarceration" target="_blank" rel="noopener">
              Sesame Workshop’s caregiver tools
            </a>{" "}
            and{" "}
            <a className="text-blue-700 underline" href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse" target="_blank" rel="noopener">
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

        {/* Sources & Resources */}
        <section id="sources-resources" className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
    <div className="flex items-center">
      <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">📚</div>
      <div>
        <h2 className="text-2xl font-bold">Sources &amp; Resources</h2>
        <p className="text-slate-200">Trusted, family-friendly materials you can reference and share</p>
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
    </section>
  </div> {/* content container */}
);
}

export default ChildrenDisclosureToolkit;
        
