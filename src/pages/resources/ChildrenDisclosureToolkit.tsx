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
