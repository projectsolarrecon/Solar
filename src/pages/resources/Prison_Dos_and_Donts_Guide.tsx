// /src/pages/resources/Prison_Dos_and_Donts_Guide.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";

/** Local helper: lightweight callout (same as Pro Licensing Guide) */
function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "note" | "warn" | "danger" | "success";
  title?: string;
  children: React.ReactNode;
}) {
  const tones: Record<string, string> = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    note: "bg-slate-50 border-slate-200 text-slate-900",
    warn: "bg-amber-50 border-amber-200 text-amber-900",
    danger: "bg-red-50 border-red-200 text-red-900",
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
  };
  const cls = tones[tone] ?? tones.info;
  return (
    <div className={`rounded-xl border p-5 md:p-6 ${cls}`}>
      {title && <h4 className="font-semibold mb-2">{title}</h4>}
      <div className="space-y-3">{children}</div>
    </div>
  );
}

/** Local helper: section header band (identical to Pro Licensing Guide) */
function BandHeader({
  k,
  title,
  subtitle,
  icon,
}: {
  k: string;
  title: string;
  subtitle?: string;
  icon?: string;
}) {
  return (
    <div id={k} className="rounded-xl overflow-hidden mb-6">
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-5 py-4 flex items-center gap-3">
        {icon && <span aria-hidden className="text-xl">{icon}</span>}
        <div>
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-white/85 text-sm">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

export default function PrisonDosAndDontsGuide(): JSX.Element {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked((p) => ({ ...p, [id]: !p[id] }));
  const handlePrint = () => window.print();

  return (
    <div className="bg-white">
      <SEO
        title="Prison Dos & Don’ts for People with Sex-Offense Convictions"
        description="A practical survival guide for incarcerated people and their families."
        keywords="prison survival guide, sex-offense conviction, incarceration safety, SO units, reentry"
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 text-white py-14">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Resources
            </Link>
          </div>

          <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
            Safety & Adaptation Toolkit
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Prison Dos & Don’ts for People with Sex-Offense Convictions
          </h1>

          <p className="text-lg md:text-xl text-slate-100 mt-4 max-w-3xl">
            🧭 A practical survival guide for incarcerated people and their families — what to do, what to avoid, and how to stay safe, stable, and focused throughout your sentence.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handlePrint}
              className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow"
            >
              🖨️ Print Guide
            </button>
            <a
              href="#references"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors shadow text-center"
            >
              📚 Skip to Sources
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600"></div>

      {/* Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ShareBar />

        {/* 0. Who This Guide Is For */}
        <BandHeader
          k="section-0"
          title="0. Who This Guide Is For (And What It Is Not)"
          icon="🎯"
          subtitle="Purpose, audience, and sources"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <h3 className="text-lg font-semibold">
              PRISON DOS & DON’TS FOR PEOPLE WITH SEX-OFFENSE CONVICTIONS
            </h3>
            <p>
              <em>A Practical Survival Guide for Incarcerated People and Their Families</em>
            </p>

            <p>This guide is written for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                People heading to <strong>U.S. state or federal prison</strong> on a{" "}
                <strong>sex-offense conviction</strong>, especially first-time, non-violent,
                or online-only cases.
              </li>
              <li>
                Families who are terrified about what will happen to their loved one inside.
              </li>
              <li>
                People already in custody who need a clear, grounded reference on how to stay safe and stable.
              </li>
            </ul>

            <p>What this guide is <strong>not</strong>:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>It is <strong>not legal advice</strong>.</li>
              <li>
                It is <strong>not tailored to any one specific prison</strong> — details differ by state, facility, and security level.
              </li>
              <li>
                It is <strong>not a playbook for breaking rules or evading supervision</strong>. Everything here assumes you are{" "}
                <strong>following the rules</strong>, not trying to game them.
              </li>
            </ul>

            <p>
              Instead, this is meant to be the <strong>authoritative “dos and don’ts” manual</strong> for people with sex-offense convictions, built from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                General prison handbooks and policy statements — e.g., the{" "}
                <a
                  href="https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  BOP Inmate Information Handbook
                </a>
              </li>
              <li>
                Federal Bureau of Prisons (BOP) classification and security-level designations — e.g.,{" "}
                <a
                  href="https://www.bop.gov/about/facilities/federal_prisons.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  BOP Security Levels
                </a>{" "}
                and{" "}
                <a
                  href="https://www.bop.gov/about/statistics/statistics_inmate_sec_levels.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  Security Level Statistics
                </a>
              </li>
              <li>
                National Prison Rape Elimination Act (PREA) standards — e.g.,{" "}
                <a
                  href="https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  DOJ PREA Final Rule
                </a>{" "}
                and{" "}
                <a
                  href="https://www.prearesourcecenter.org/about/prison-rape-elimination-act"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  PREA Resource Center
                </a>
              </li>
              <li>
                Broad data on U.S. prison populations and offense categories — e.g.,{" "}
                <a
                  href="https://www.sentencingproject.org/reports/responding-to-crimes-of-a-sexual-nature/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  The Sentencing Project – “Responding to Crimes of a Sexual Nature”
                </a>
              </li>
            </ul>

            <p>
              The guidance is <strong>population-agnostic at the source</strong> (meaning these rules apply to everyone), then interpreted specifically for{" "}
              <strong>people with sex-offense convictions</strong>, given the realities of stigma, placement, and daily life in SO-heavy facilities.
            </p>
          </div>
        </section>

        {/* 1. Core Principles */}
        <BandHeader
          k="section-1"
          title="1. Core Principles: The Four Rules That Matter Everywhere"
          icon="📘"
          subtitle="Universal habits for safety and stability"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              No matter what state, security level, or yard you land on, four principles are almost universal:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li><strong>Calm is currency.</strong></li>
              <li><strong>Routine is safety.</strong></li>
              <li><strong>Debt is danger.</strong></li>
              <li><strong>Honest but brief about your case is safer than lying.</strong></li>
            </ol>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> carry yourself calmly — walk, talk, and move at a measured pace.</li>
              <li><strong>DO</strong> build a predictable daily routine (work, rec, shower, sleep at roughly the same times).</li>
              <li><strong>DO</strong> give simple, honest answers about your case when asked.</li>
              <li><strong>DO</strong> focus on your own program: work, classes, exercise, reading.</li>
            </ul>
            {/* ...continues with DON’Ts and Use-Your-Judgment next part */}
<h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>DON’T</strong> gamble, run tabs, or borrow commissary from others (nearly every inmate handbook
                bans gambling or incurring debts — see BOP handbooks such as the one linked above).
              </li>
              <li><strong>DON’T</strong> use or sell drugs.</li>
              <li><strong>DON’T</strong> yell, brag, posture, or act like you’re in a movie.</li>
              <li><strong>DON’T</strong> lie about your charges — it often gets exposed and destroys trust.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>DO</strong> adjust how much you talk depending on the yard culture — in some prisons,
                more conversation is normal; in others, quiet is safer.
              </li>
              <li>
                <strong>DO</strong> pay attention to who seems stable and who brings drama; align yourself with
                the former, stay away from the latter.
              </li>
            </ul>

            <p>If you remember nothing else from this guide, remember these four principles.</p>
          </div>
        </section>

        {/* 2. Housing & Living Space Etiquette */}
        <BandHeader
          k="section-2"
          title="2. Housing & Living Space Etiquette"
          icon="🛏️"
          subtitle="Cleanliness, respect, and boundaries"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>Your bunk, cell, or cube is your anchor. How you behave there sets your reputation.</p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> keep your area clean and organized (bed made, property stacked, floor clear).</li>
              <li><strong>DO</strong> ask before sitting on someone else’s bunk or at their usual table.</li>
              <li><strong>DO</strong> keep noise down during early morning and late night.</li>
              <li><strong>DO</strong> participate in basic cleaning if it’s a shared space (trash, floor, sink, shower if it’s a unit job).</li>
              <li><strong>DO</strong> lock up or secure your property if your facility has lockers or footlockers.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> touch other people’s property without permission — not even to “straighten” it.</li>
              <li><strong>DON’T</strong> go into someone else’s cell or cube without them present unless the prison’s rules explicitly require it.</li>
              <li><strong>DON’T</strong> use someone else’s hygiene items, clothes, or commissary.</li>
              <li><strong>DON’T</strong> slam doors, bang on rails, or blast TV/radio in ways that disturb others.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>In some units, certain seats (TV area, dayroom tables) are informally “claimed.”</li>
              <li><strong>DO</strong> watch for a few days to see where people consistently sit.</li>
              <li><strong>DO</strong> ask quietly, “Is anyone sitting here?”</li>
              <li><strong>DON’T</strong> dig in or argue if someone asks you to move — it’s not worth it.</li>
            </ul>

            <p>
              For people with sex-offense convictions, <strong>housing is usually calmer than imagined</strong> — especially
              in low-security and SO-heavy units. Cleanliness, respect, and quiet routine go a long way.
            </p>
          </div>
        </section>

        {/* 3. Social Navigation & Prison Culture */}
        <BandHeader
          k="section-3"
          title="3. Social Navigation & Prison Culture"
          icon="🤝"
          subtitle="How to interact safely and respectfully"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              You do <strong>not</strong> need to be popular, tough, or socially dominant. You need to be predictable,
              respectful, and boring.
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> greet people with simple, neutral respect: “Morning,” “What’s up,” “Excuse me.”</li>
              <li><strong>DO</strong> introduce yourself to bunkies or immediate neighbors early.</li>
              <li><strong>DO</strong> keep conversation light unless you know someone well.</li>
              <li><strong>DO</strong> spend your time around people whose behavior you want to mirror (walkers, readers, workers, guys in classes).</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> gossip or repeat what you’ve heard about others.</li>
              <li><strong>DON’T</strong> comment on anyone’s charges, sentence, case, or past.</li>
              <li><strong>DON’T</strong> try to be funny by disrespecting people.</li>
              <li><strong>DON’T</strong> ask about someone’s crime; let them share if they want to.</li>
            </ul>

            <h3 className="text-lg font-semibold">Daily Etiquette Everyone Follows (Even if Unspoken)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> look into other people’s cells or cubes — even a quick glance is intrusive.</li>
              <li><strong>DO</strong> walk with your eyes forward, not scanning faces or property.</li>
              <li><strong>DON’T</strong> watch other people’s interactions with staff.</li>
              <li><strong>DON’T</strong> hover near phone calls or listen in.</li>
              <li><strong>DON’T</strong> stand too close behind someone in line.</li>
              <li><strong>DO</strong> give people space in tight areas (microwaves, phones, showers).</li>
              <li><strong>DON’T</strong> interject yourself into someone else’s conversation — it can look like you were eavesdropping.</li>
              <li><strong>DO</strong> mind your own business at all times.</li>
            </ul>

            <p>This etiquette is not optional. In prison, privacy is symbolic, and violating it creates conflict.</p>

            <h3 className="text-lg font-semibold">SO-Specific Notes</h3>
            <p>
              People with sex-offense convictions are often <strong>the majority</strong> in certain units or prisons. That changes
              the social dynamic:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>“Chomo” gets used casually, sometimes about half the unit.</li>
              <li>
                Many others are in almost the same position as you — older, first-time, non-violent, online cases.
              </li>
            </ul>

            <p>
              You do <strong>not</strong> need to defend yourself from the label. What matters is how you behave, not what slang people use.
            </p>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Some yards have active “cars” (race- or region-based groups). Others (especially SO-heavy lows)
                treat cars as loose social clusters.
              </li>
              <li><strong>DO</strong> keep a friendly but neutral stance — say hello, don’t pledge allegiance.</li>
              <li><strong>DON’T</strong> jump into “we” language about any car; just be you.</li>
            </ul>
          </div>
        </section>

        {/* 4. Money, Debt, and Commissary */}
        <BandHeader
          k="section-4"
          title="4. Money, Debt, and Commissary"
          icon="💰"
          subtitle="Debt and gambling create danger — always"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              If there is one domain where rules are nearly universal, it’s this one:
              <strong> debt and gambling create danger.</strong> Handbooks across the country — including the{" "}
              <a
                href="https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                BOP Inmate Information Handbook
              </a>{" "}
              — classify gambling and debt as misconduct.
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> live within your means.</li>
              <li><strong>DO</strong> keep track of your spending and balance.</li>
              <li><strong>DO</strong> send money home or save if you can — don’t let it become a status thing inside.</li>
              <li><strong>DO</strong> say, “I don’t borrow and I don’t lend, but I appreciate you offering,” if someone pushes commissary on you.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> borrow food, coffee, stamps, or hygiene “until store.”</li>
              <li><strong>DON’T</strong> gamble — cards, sports bets, any kind of pool.</li>
              <li><strong>DON’T</strong> let others use your account, number, or PIN (explicitly banned in BOP policy and many states).</li>
              <li><strong>DON’T</strong> run a store or reselling operation (common rule violation).</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <p>Generosity can create expectation. Be financially invisible.</p>
          </div>
        </section>

        {/* 5. Safety & Danger Zones */}
        <BandHeader
          k="section-5"
          title="5. Safety & Danger Zones"
          icon="🚨"
          subtitle="Reducing your risk every day"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              There is no way to make prison risk-free, but you can dramatically reduce your risk.
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> stay away from known trouble spots: bathrooms when large groups congregate, dark corners, areas where people constantly argue.</li>
              <li><strong>DO</strong> walk with purpose — not rushed, not lurking.</li>
              <li><strong>DO</strong> leave immediately if an argument escalates near you.</li>
              <li><strong>DO</strong> trust your gut: if a person or area feels “off,” quietly avoid it.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> play the hero in other people’s conflicts.</li>
              <li><strong>DON’T</strong> respond to minor disrespect with aggression; a simple “My bad,” or walking away is usually enough.</li>
              <li><strong>DON’T</strong> carry contraband or do favors that involve hiding items for others.</li>
              <li><strong>DON’T</strong> agree to hold or move anything you don’t understand.</li>
            </ul>

            <h3 className="text-lg font-semibold">PREA & Sexual Safety</h3>
            <p>
              Under PREA, facilities must provide ways to report sexual abuse or harassment, including outside channels. See:{" "}
              <a
                href="https://bja.ojp.gov/program/prea/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                BJA PREA Overview
              </a>{" "}
              and{" "}
              <a
                href="https://www.prearesourcecenter.org/about/prison-rape-elimination-act"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                PREA Resource Center
              </a>
              .
            </p>

            <p><strong>Hard rules:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> report sexual abuse or serious threats through the channels your facility provides.</li>
              <li><strong>DO</strong> document what happened (dates, times, names) as soon as you safely can.</li>
              <li><strong>DON’T</strong> assume you have no options; PREA requires multiple ways to report.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <p>
              In SO-heavy environments, the biggest dangers are usually <strong>not</strong> about your offense — they’re about <strong>debt, drugs, and personal conflicts.</strong>
            </p>
          </div>
        </section>
{/* 6. Staff & Rules */}
        <BandHeader
          k="section-6"
          title="6. Staff & Rules"
          icon="🧑‍✈️"
          subtitle="Working with staff and following procedures"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              Staff can significantly shape your day-to-day life. Policies and handbooks emphasize following staff instructions,
              reporting abuse, and using grievance systems for complaints. General examples include BOP handbooks such as the{" "}
              <a
                href="https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Inmate Information Handbook
              </a>{" "}
              and federal policy statements like the{" "}
              <a
                href="https://www.bop.gov/policy/progstat/5290_014.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Admission & Orientation Program Statement 5290.14
              </a>
              .
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> follow direct orders unless they’re obviously illegal or clearly put you in immediate danger.</li>
              <li><strong>DO</strong> keep interactions short, respectful, and businesslike.</li>
              <li><strong>DO</strong> use grievance or request processes for non-emergency issues.</li>
              <li><strong>DO</strong> attend admission and orientation (A&O) programs and actually read the handbook.</li>
              <li>A&O attendance is required by BOP policy:{" "}
                <a
                  href="https://www.bop.gov/policy/progstat/5290_014.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  Program Statement 5290.14
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> argue, roll your eyes, or show open contempt to staff; they control counts, moves, passes, and write-ups.</li>
              <li><strong>DON’T</strong> try to “befriend” staff or be overly familiar — that can cause problems both with staff and other incarcerated people.</li>
              <li><strong>DON’T</strong> ask staff to break rules for you. If they do, it can backfire hard.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> adapt your expectations to the individual CO without sucking up.</li>
              <li><strong>DO</strong> document important interactions (dates, times, what was said) if there’s a pattern of unfair treatment.</li>
            </ul>

            <p>
              For SOs, <strong>staying off staff radar</strong> most of the time is ideal: follow rules, don’t create work for them,
              and don’t make yourself their project.
            </p>
          </div>
        </section>

        {/* 7. Programs, Work, and Education */}
        <BandHeader
          k="section-7"
          title="7. Programs, Work, and Education"
          icon="📚"
          subtitle="Why structured days matter"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              Work and programs aren’t just about “checking boxes” — they structure your day and shape how staff and other incarcerated people see you.
              The BOP and many state systems classify people, assign work, and prioritize program needs for security and rehabilitation. See, for example,{" "}
              <a
                href="https://www.bop.gov/about/facilities/federal_prisons.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                BOP’s “Federal Prisons” overview
              </a>
              .
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> accept a work assignment and show up on time.</li>
              <li><strong>DO</strong> put in a reasonable effort — you don’t have to be a star, but don’t be lazy.</li>
              <li><strong>DO</strong> sign up for education programs you’re eligible for (GED, college, vocational training).</li>
              <li><strong>DO</strong> use the library — for legal work and for your own mind.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> refuse jobs without a serious, documented reason.</li>
              <li><strong>DON’T</strong> fake illness to get out of work on a regular basis — it builds a bad reputation.</li>
              <li><strong>DON’T</strong> treat programs as a joke; your counselor’s notes can affect classification, transfers, and sometimes early-release opportunities.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> aim for programs that help your mind (education), your body (fitness), or your reentry (vocational).</li>
              <li><strong>DO</strong> be strategic: a “good worker with no problems” is a label you want staff to use about you.</li>
            </ul>

            <p>
              For SOs, consistent program participation reinforces the image that you are{" "}
              <strong>low-risk, compliant, and trying to change</strong>, which helps in classification reviews and sometimes in post-release decisions.
            </p>
          </div>
        </section>

        {/* 8. Medical & Mental Health */}
        <BandHeader
          k="section-8"
          title="8. Medical & Mental Health"
          icon="⚕️"
          subtitle="Using the system safely and proactively"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              Most systems provide at least basic access to medical and mental-health services, but often with copays or delays;
              handbooks typically describe sick-call procedures and mental-health referrals. Examples include general BOP handbooks and policy guidance. 
              A good supplemental primer is the{" "}
              <a
                href="https://www.nacdl.org/getattachment/6dd87672-8ff3-4d7c-96ae-5712b55bb7a2/how-to-navigate-the-federal-prison-system-06252025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                NACDL guide to navigating the federal prison system
              </a>
              .
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> report serious medical symptoms promptly.</li>
              <li><strong>DO</strong> use sick call and follow procedure even if it’s slow.</li>
              <li><strong>DO</strong> request mental-health support if you are experiencing panic, suicidal thoughts, or intense depression.</li>
              <li><strong>DO</strong> be honest about self-harm thoughts; staff are required to respond.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> self-medicate with illegal drugs or hoarded meds.</li>
              <li><strong>DON’T</strong> ignore chest pain, serious infection, or major injuries.</li>
              <li><strong>DON’T</strong> threaten self-harm just to get a move — it can lead to restrictive placements that feel worse.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> use mental-health services anyway if you are in crisis.</li>
              <li><strong>DO</strong> supplement with your own coping routines: walking, journaling, meditation, spiritual practices, structured days.</li>
            </ul>

            <p>
              For people with sex-offense convictions — especially those with no prior criminal history — 
              <strong>mental health is a survival domain</strong>, not an optional extra.
            </p>
          </div>
        </section>

        {/* 9. Yard, Recreation, and Movement */}
        <BandHeader
          k="section-9"
          title="9. Yard, Recreation, and Movement"
          icon="🏃"
          subtitle="Staying active and avoiding trouble spots"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              The yard is where you’ll spend a lot of your “free” time. Security levels differ, but official BOP materials such as the{" "}
              <a
                href="https://www.bop.gov/about/facilities/federal_prisons.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Security Levels overview
              </a>{" "}
              describe how minimum, low, medium, and high facilities differ in movement restrictions and programming.
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> use the yard regularly for exercise — it helps sleep, mood, and stress.</li>
              <li><strong>DO</strong> walk or work out with a stable, low-drama partner or group.</li>
              <li><strong>DO</strong> pay attention to movement rules (what time you must be back inside, where you can and can’t go).</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> hover near groups that are arguing or “politicking.”</li>
              <li><strong>DON’T</strong> stand staring at people; it’s seen as intrusive.</li>
              <li><strong>DON’T</strong> join pickup sports if they’re known to get heated and you don’t handle conflict well.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> find activities that regulate you emotionally — walking, light workouts, stretching, quiet conversation.</li>
              <li><strong>DON’T</strong> feel pressured to join intense sports if you’re not that person.</li>
            </ul>
          </div>
        </section>

        {/* 10. Hygiene & Cleanliness */}
        <BandHeader
          k="section-10"
          title="10. Hygiene & Cleanliness"
          icon="🧼"
          subtitle="A quiet but powerful safety strategy"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              Every handbook on earth cares about cleanliness and bans certain unsanitary behavior.
              See any BOP institutional handbook (for example, the{" "}
              <a
                href="https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Inmate Information Handbook
              </a>
              ).
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> shower regularly, within the norms of your unit (daily or every other day if possible).</li>
              <li><strong>DO</strong> brush your teeth, wash your clothes, and keep your bedding reasonably clean.</li>
              <li><strong>DO</strong> clean up after yourself in shared spaces (toilets, sinks, showers, microwaves).</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> leave hair, trash, or spilled food behind.</li>
              <li><strong>DON’T</strong> skip showers for long stretches unless there’s a clear temporary reason (lockdowns, water issues).</li>
              <li><strong>DON’T</strong> handle food with unwashed hands in front of others.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> budget commissary for basics: soap, toothpaste, maybe extra laundry soap if needed.</li>
              <li><strong>DO</strong> respect how important smell and cleanliness are in cramped spaces.</li>
            </ul>

            <p>
              Being clean and low-impact on others’ comfort is a <strong>quiet but powerful safety strategy</strong>.
            </p>
          </div>
        </section>

        {/* 11. Boundaries, Sex, and PREA */}
        <BandHeader
          k="section-11"
          title="11. Boundaries, Sex, and PREA"
          icon="🚫"
          subtitle="Understanding PREA and sexual boundaries"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              Sex in prison is <strong>never simple</strong> and is often prohibited outright, even when it appears consensual,
              under many systems’ rules and PREA definitions.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>DOJ PREA Final Rule (full standards):{" "}
                <a
                  href="https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape
</a>
              . PREA applies to everyone: staff, contractors, and incarcerated people.
            </ul>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> maintain physical boundaries — no hugging, touching, or horseplay.</li>
              <li><strong>DO</strong> report sexual harassment or abuse through official channels (PREA hotlines, written requests, trusted staff).</li>
              <li><strong>DO</strong> keep detailed notes if you report — names, dates, times.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> joke sexually, make comments, or engage in innuendo — it’s all reportable under PREA.</li>
              <li><strong>DON’T</strong> accept sexual favors, even if offered “consensually.” Both parties can face discipline.</li>
              <li><strong>DON’T</strong> stare, comment, or linger in showers or bathrooms.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <p>
              In SO units, sexual tension is lower than pop-culture myths suggest. Respect, privacy, and boundaries keep
              you out of both trouble and rumor.
            </p>

            <Callout tone="info" title="💡 PREA Quick Facts">
              <ul className="list-disc pl-6 space-y-1">
                <li>PREA violations can be reported externally — many facilities post an outside hotline.</li>
                <li>“Consensual” sex is still prohibited conduct under most handbooks.</li>
                <li>False PREA claims are rare but serious; documentation protects you.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* 12. Paperwork & Verifying Cases */}
        <BandHeader
          k="section-12"
          title="12. Paperwork & Verifying Cases"
          icon="📄"
          subtitle="Why honesty and documentation matter"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              Inside, people constantly talk about “paperwork” — usually meaning your judgment, PSI/PSR, or docket sheet.
              The culture around this varies widely.
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> keep a copy of your judgment and PSR if you’re allowed to.</li>
              <li><strong>DO</strong> show it only when you feel safe and only the necessary pages.</li>
              <li><strong>DO</strong> keep it clean and folded neatly; paperwork presentation oddly matters.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> lie — lies almost always unravel.</li>
              <li><strong>DON’T</strong> over-explain or give graphic details about your charges.</li>
              <li><strong>DON’T</strong> act defensive; it signals insecurity.</li>
            </ul>

            <h3 className="text-lg font-semibold">Common Prison Lingo</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>“Chomo”</strong> – anyone with a sex offense; not automatically a threat word.</li>
              <li><strong>“Car”</strong> – informal group, often by race or region.</li>
              <li><strong>“Checking in”</strong> – asking for protective custody; done for many reasons.</li>
              <li><strong>“Kite”</strong> – a written note or message passed through official/unofficial channels.</li>
              <li><strong>“Paperwork”</strong> – your judgment and PSR.</li>
              <li><strong>“Shot caller”</strong> – informal influence holder within a car.</li>
              <li><strong>“Active / non-active yard”</strong> – active = politics enforced; non-active = looser culture.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> learn the lingo so you don’t misinterpret normal conversation as a threat.</li>
              <li><strong>DON’T</strong> try to use lingo to “sound tough” — it backfires.</li>
            </ul>
          </div>
        </section>
{/* 13. Conflict, Bullying, and Threats */}
        <BandHeader
          k="section-13"
          title="13. Conflict, Bullying, and Threats"
          icon="⚔️"
          subtitle="Defusing tension and staying neutral"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              Conflict happens in any confined environment, but people with sex-offense convictions are far{" "}
              <em>less</em> likely than most other groups to be involved in violence — partly due to age, temperament, and placement in SO-heavy units.
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> walk away early when something feels off.</li>
              <li>
                <strong>DO</strong> defuse tension with polite, simple language:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>“My bad.”</li>
                  <li>“All good.”</li>
                  <li>“No disrespect.”</li>
                </ul>
              </li>
              <li><strong>DO</strong> change your routine quietly if someone is clearly targeting you for annoyance rather than violence.</li>
              <li><strong>DO</strong> report credible threats through the channels your facility provides, especially if there is a safety concern.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> mouth off, posture, or escalate arguments to “save face.”</li>
              <li><strong>DON’T</strong> let pride override basic safety or common sense.</li>
              <li><strong>DON’T</strong> try to “win” verbal confrontations — winning creates resentment; neutrality creates distance.</li>
              <li><strong>DON’T</strong> borrow someone else’s problems by getting involved in fights or alliances.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <p>Most conflict can be resolved by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>walking away</li>
              <li>changing seats</li>
              <li>avoiding certain times of day</li>
              <li>steering clear of specific people</li>
            </ul>

            <p>
              In SO units, most people <em>want no problems at all.</em> They’re older, quieter, and doing time the same way you are.
            </p>

            <p>
              If you think someone is trying to bait you into conflict, you’re probably right — and the safest move is{" "}
              <strong>no reaction at all.</strong>
            </p>
          </div>
        </section>

        {/* 14. Mental Health, Shame, and Identity */}
        <BandHeader
          k="section-14"
          title="14. Mental Health, Shame, and Identity"
          icon="🧠"
          subtitle="Adapting, healing, and staying stable inside"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              Prison forces a kind of internal reckoning that is painful, especially for people with no prior criminal history —
              which includes a very large share of those convicted of sex-related offenses.
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> acknowledge shame, fear, grief, and identity crises as normal.</li>
              <li><strong>DO</strong> find one or two safe ways to process (journaling, walking, reading, meditation, faith practice).</li>
              <li><strong>DO</strong> reach out for mental-health support if thoughts turn dark or hopeless.</li>
              <li><strong>DO</strong> maintain small, daily habits that anchor you emotionally.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> numb yourself with fantasy or denial — it makes reentry harder.</li>
              <li><strong>DON’T</strong> catastrophize (“My life is over”) — you are in a temporary environment, not a permanent state.</li>
              <li><strong>DON’T</strong> hide depression or suicidal thoughts; vulnerability is not weakness here.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <p>You will see everything from:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>men collapsing emotionally in the first month</li>
              <li>men who improve dramatically with structure</li>
              <li>men who panic at release because the world outside feels overwhelming</li>
            </ul>

            <p>
              Your goal is not to “be strong.” Your goal is to <strong>adapt</strong>, <strong>heal</strong>,
              and <strong>build the habits</strong> you’ll rely on later.
            </p>
          </div>
        </section>

        {/* 15. Religion, Groups, and Community */}
        <BandHeader
          k="section-15"
          title="15. Religion, Groups, and Community"
          icon="🕊️"
          subtitle="Finding grounding without politics or conflict"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              Religion is often a refuge in prison. Most facilities allow multiple services and study groups,
              including Christian, Jewish, Muslim, Buddhist, and sometimes secular or recovery-oriented gatherings.
            </p>

            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> attend services if they keep you grounded.</li>
              <li><strong>DO</strong> join faith or meditation groups if they help you stay centered.</li>
              <li><strong>DO</strong> respect all faiths and practices.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> join a religious group just for protection — it creates problems.</li>
              <li><strong>DON’T</strong> argue doctrine or criticize someone else’s beliefs.</li>
              <li><strong>DON’T</strong> use religion as a mask for manipulation; people see through it fast.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <p>Spiritual communities can be stabilizing, but stay <strong>low-drama</strong> and avoid groups known for conflict.</p>
          </div>
        </section>

        {/* 16. Reentry Mindset */}
        <BandHeader
          k="section-16"
          title="16. Reentry Mindset (Yes, From Day One)"
          icon="🚪"
          subtitle="Start preparing the day you arrive"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <h3 className="text-lg font-semibold">Hard DOs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DO</strong> structure your day the way you hope to structure your life after release.</li>
              <li><strong>DO</strong> maintain contact with family and future support networks.</li>
              <li><strong>DO</strong> take programs seriously; document participation if you can.</li>
              <li><strong>DO</strong> keep your disciplinary record clean. It matters — for jobs, transitions, and credibility with probation.</li>
            </ul>

            <h3 className="text-lg font-semibold">Hard DON’Ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DON’T</strong> adopt a “prison identity” that you can’t carry into the community.</li>
              <li><strong>DON’T</strong> spend years gaming the system instead of improving yourself.</li>
              <li><strong>DON’T</strong> assume reentry will be easy — start preparing early.</li>
            </ul>

            <h3 className="text-lg font-semibold">Use-Your-Judgment</h3>
            <p>
              Think of prison as a long, enforced pause. You can come out:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>more stable</li>
              <li>more humbled</li>
              <li>more structured</li>
              <li>more disciplined</li>
            </ul>

            <p>…or more chaotic and defeated. Routine and mindset determine which outcome you choose.</p>
          </div>
        </section>

        {/* 17. What Makes SO Time Different — And What Doesn’t */}
        <BandHeader
          k="section-17"
          title="17. What Makes SO Time Different — And What Doesn’t"
          icon="⚖️"
          subtitle="Understanding stigma and sameness"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>There are ways in which being incarcerated for a sex offense is truly different:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>stigma exists</li>
              <li>family shame is heavier</li>
              <li>supervision after release is restrictive</li>
              <li>programming availability varies</li>
              <li>
                you are often isolated from general populations or barred from camps due to the{" "}
                <a
                  href="https://www.bop.gov/inmates/custody_and_care/classification.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  Public Safety Factor — Sex Offender
                </a>{" "}
                in BOP policy
              </li>
            </ul>

            <p>But there are also ways in which it is surprisingly <em>not</em> different:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>most people do not care about your case as long as you mind your business</li>
              <li>most violence has nothing to do with sex-offense stigma</li>
              <li>routine, mindset, and behavior matter far more than your charge</li>
              <li>many units are majority-SO environments</li>
              <li>safety comes from the same habits everyone else uses</li>
            </ul>

            <p>Your job is to understand the environment, not fear the myths.</p>
          </div>
        </section>

        {/* 18. The 20 Most Reliable Dos and Don’ts */}
        <BandHeader
          k="section-18"
          title="18. The 20 Most Reliable Dos and Don’ts (A One-Page Summary)"
          icon="🧾"
          subtitle="Quick reference checklist"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <h3 className="text-lg font-semibold">Top 10 DOs</h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Do walk, talk, and move calmly.</li>
              <li>Do build a predictable daily routine.</li>
              <li>Do live within your means — avoid all debt.</li>
              <li>Do keep your cell/cube clean and low-impact.</li>
              <li>Do stay close to low-drama people and activities.</li>
              <li>Do use education, programs, and work as anchors.</li>
              <li>Do protect your mental health with structured habits.</li>
              <li>Do respect privacy — eyes forward, ears off others.</li>
              <li>Do maintain solid family contact.</li>
              <li>Do prepare for reentry from day one.</li>
            </ol>

            <h3 className="text-lg font-semibold">Top 10 DON’Ts</h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Don’t gamble or borrow — ever.</li>
              <li>Don’t lie about your case.</li>
              <li>Don’t get pulled into other people’s conflicts.</li>
              <li>Don’t act loud, aggressive, or perform toughness.</li>
              <li>Don’t disrespect staff or try to befriend them.</li>
              <li>Don’t ignore medical or mental-health issues.</li>
              <li>Don’t drift into bad habits or bad company.</li>
              <li>Don’t insert yourself into conversations or stare into cells.</li>
              <li>Don’t make sexual jokes, comments, or gestures.</li>
              <li>Don’t catastrophize — prison is survivable; panic is optional.</li>
            </ol>
          </div>
        </section>

        {/* 19. Final Words for You — and for Your Family */}
        <BandHeader
          k="section-19"
          title="19. Final Words for You — and for Your Family"
          icon="💬"
          subtitle="Perspective for both sides of the fence"
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <h3 className="text-lg font-semibold">For the person going inside:</h3>
            <p>
              You are not walking into the nightmare the internet sells. You are walking into a rigid, bureaucratic,
              often boring world full of people trying to survive their own sentence.
            </p>

            <p>If you follow the simple habits in this guide:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>calm demeanor</li>
              <li>predictable routine</li>
              <li>clean area</li>
              <li>debt-free life</li>
              <li>eyes forward</li>
              <li>low drama</li>
              <li>honest but brief answers</li>
              <li>structured days</li>
            </ul>

            <p>
              …you will be safer, more stable, and more emotionally grounded than you imagine right now. Prison is not the end of your life.
              It is a <strong>season</strong> — a harsh one, yes, but temporary.
            </p>

            <h3 className="text-lg font-semibold">For families:</h3>
            <p>
              Your loved one is not walking into a gladiator arena. They are walking into a controlled environment with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>counts</li>
              <li>staff</li>
              <li>rules</li>
              <li>routine</li>
              <li>structure</li>
              <li>hundreds of other people doing the exact same thing</li>
            </ul>

            <p>
              Their fear is real because the unknown is terrifying. But once inside, routine replaces panic,
              predictability replaces fear, and stability replaces overwhelm.
            </p>

            <p>
              Stay connected. Stay grounded. Understand the reality, not the mythology. And remember:
              most people with sex-offense convictions do their time safely and return home.
            </p>
          </div>
        </section>

        {/* 20. References & Further Reading */}
        <BandHeader
          k="section-20"
          title="References & Further Reading"
          icon="📚"
          subtitle="Primary policy sources and research"
        />
        <section id="sources" className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <h3 className="text-lg font-semibold">Primary Policy and System Sources</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Federal Bureau of Prisons – Inmate Information Handbook</a></li>
              <li><a href="https://www.bop.gov/inmates/custody_and_care/classification.jsp" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">BOP – Custody & Classification Overview</a></li>
              <li><a href="https://www.bop.gov/about/facilities/federal_prisons.jsp" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">BOP – Federal Prisons & Security Levels</a></li>
              <li><a href="https://www.bop.gov/about/statistics/statistics_inmate_sec_levels.jsp" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">BOP – Security Level Statistical Breakdown</a></li>

     <li>
                <a
                  href="https://www.bop.gov/about/statistics/statistics_inmate_sec_levels.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  BOP – Security Level Statistical Breakdown
                </a>
              </li>
              <li>
                <a
                  href="https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  DOJ – PREA Final Rule (Federal Register)
                </a>
              </li>
              <li>
                <a
                  href="https://www.prearesourcecenter.org/about/prison-rape-elimination-act"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  PREA Resource Center – Overview
                </a>
              </li>
              <li>
                <a
                  href="https://bja.ojp.gov/program/prea/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  BJA – PREA Program
                </a>
              </li>
              <li>
                <a
                  href="https://www.nacdl.org/getattachment/6dd87672-8ff3-4d7c-96ae-5712b55bb7a2/how-to-navigate-the-federal-prison-system-06252025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  NACDL – “How to Navigate the Federal Prison System”
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold">
              Prison Population & Family Impact Research
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="https://www.sentencingproject.org/reports/responding-to-crimes-of-a-sexual-nature/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  The Sentencing Project – Responding to Crimes of a Sexual
                  Nature
                </a>
              </li>
              <li>
                <a
                  href="https://www.bjs.ojp.gov/content/pub/pdf/pimc16.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  BJS – Parents in Prison and Their Minor Children
                </a>
              </li>
              <li>
                <a
                  href="https://www.prisonpolicy.org/blog/2022/08/11/parental_incarceration/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  Prison Policy Initiative – Parental Incarceration
                </a>
              </li>
              <li>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4229080/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  Poehlmann et al. – “Children’s Contact With Their Incarcerated
                  Parents” (NIH/PMC)
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <ShareBar />
        </div>
      </article>
    </div>
  );
}