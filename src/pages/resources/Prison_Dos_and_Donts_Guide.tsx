import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "../../components/layouts/GuideLayout";
import {
  SectionBand,
  SectionCard,
  Callout,
  Checklist,
  SourcesOffline,
  TOC,
  ShareBar,
} from "../../components/solar";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function Prison_Dos_and_Donts_Guide(): JSX.Element {
  return (
    <GuideLayout
      title="Prison Dos & Don’ts for People with Sex-Offense Convictions"
      description="A practical survival guide for incarcerated people and their families."
      badge="📘 RESOURCE GUIDE"
      showTOC={true}
    >
      <div className="mb-6">
        <TOC />
      </div>

      {/* 0. Who This Guide Is For (And What It Is Not) */}
      <SectionBand
        title="0. Who This Guide Is For (And What It Is Not)"
        emblem="🔹"
      />
      <SectionCard>
        <h2>0. Who This Guide Is For (And What It Is Not)</h2>
        <p>This guide is written for:</p>
        <ul className="list-disc pl-6">
          <li>
            People heading to <strong>U.S. state or federal prison</strong> on a{" "}
            <strong>sex-offense conviction</strong>, especially first-time,
            non-violent, or online-only cases.
          </li>
          <li>
            Families who are terrified about what will happen to their loved one
            inside.
          </li>
          <li>
            People already in custody who need a clear, grounded reference on
            how to stay safe and stable.
          </li>
        </ul>
        <p>What this guide is <strong>not</strong>:</p>
        <ul className="list-disc pl-6">
          <li>It is <strong>not legal advice</strong>.</li>
          <li>
            It is <strong>not tailored</strong> to any one specific prison —
            details differ by state, facility, and security level.
          </li>
          <li>
            It is <strong>not a playbook for breaking rules</strong> or evading
            supervision. Everything here assumes you are{" "}
            <strong>following the rules</strong>, not trying to game them.
          </li>
        </ul>
        <p>
          Instead, this is meant to be the{" "}
          <strong>authoritative “dos and don’ts” manual</strong> for people with
          sex-offense convictions, built from:
        </p>
        <ul className="list-disc pl-6">
          <li>
            General prison handbooks and policy statements (e.g.,{" "}
            <a
              className={linkCls}
              href="https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOP Inmate Information Handbook
            </a>
            )
          </li>
          <li>
            Federal Bureau of Prisons (BOP) classification and security-level
            designations (e.g.,{" "}
            <a
              className={linkCls}
              href="https://www.bop.gov/about/facilities/federal_prisons.jsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOP Security Levels
            </a>{" "}
            and{" "}
            <a
              className={linkCls}
              href="https://www.bop.gov/about/statistics/statistics_inmate_sec_levels.jsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Security Level Statistics
            </a>
            )
          </li>
          <li>
            National Prison Rape Elimination Act (PREA) standards (
            <a
              className={linkCls}
              href="https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOJ PREA Final Rule
            </a>{" "}
            and{" "}
            <a
              className={linkCls}
              href="https://www.prearesourcecenter.org/about/prison-rape-elimination-act"
              target="_blank"
              rel="noopener noreferrer"
            >
              PREA Resource Center
            </a>
            )
          </li>
          <li>
            Broad data on U.S. prison populations and offense categories (
            <a
              className={linkCls}
              href="https://www.sentencingproject.org/reports/responding-to-crimes-of-a-sexual-nature/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Sentencing Project – “Responding to Crimes of a Sexual Nature”
            </a>
            )
          </li>
        </ul>
        <p>
          The guidance is <strong>population-agnostic at the source</strong>{" "}
          (meaning these rules apply to everyone), then interpreted specifically
          for <strong>people with sex-offense convictions</strong>, given the
          realities of stigma, placement, and daily life in SO-heavy facilities.
        </p>
      </SectionCard>

      {/* 1. Core Principles */}
      <SectionBand
        title="1. Core Principles: The Four Rules That Matter Everywhere"
        emblem="🔹"
      />
      <SectionCard>
        <h2>1. Core Principles: The Four Rules That Matter Everywhere</h2>
        <p>
          No matter what state, security level, or yard you land on, four
          principles are almost universal:
        </p>
        <ol className="list-decimal pl-6">
          <li>
            <strong>Calm is currency.</strong>
          </li>
          <li>
            <strong>Routine is safety.</strong>
          </li>
          <li>
            <strong>Debt is danger.</strong>
          </li>
          <li>
            <strong>
              Honest but brief about your case is safer than lying.
            </strong>
          </li>
        </ol>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> carry yourself calmly — walk, talk, and move at
            a measured pace.
          </li>
          <li>
            <strong>DO</strong> build a predictable daily routine (work, rec,
            shower, sleep at roughly the same times).
          </li>
          <li>
            <strong>DO</strong> give simple, honest answers about your case when
            asked.
          </li>
          <li>
            <strong>DO</strong> focus on your own program: work, classes,
            exercise, reading.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> gamble, run tabs, or borrow commissary from
            others (nearly every inmate handbook bans gambling or incurring
            debts — see BOP handbooks such as the one linked above).
          </li>
          <li>
            <strong>DON’T</strong> use or sell drugs.
          </li>
          <li>
            <strong>DON’T</strong> yell, brag, posture, or act like you’re in a
            movie.
          </li>
          <li>
            <strong>DON’T</strong> lie about your charges — it often gets
            exposed and destroys trust.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> adjust how much you talk depending on the yard
            culture — in some prisons, more conversation is normal; in others,
            quiet is safer.
          </li>
          <li>
            <strong>DO</strong> pay attention to who seems stable and who brings
            drama; align yourself with the former, stay away from the latter.
          </li>
        </ul>
        <p>
          If you remember nothing else from this guide, remember these four
          principles.
        </p>
      </SectionCard>

      {/* 2. Housing & Living Space Etiquette */}
      <SectionBand
        title="2. Housing & Living Space Etiquette"
        emblem="🔹"
      />
      <SectionCard>
        <h2>2. Housing & Living Space Etiquette</h2>
        <p>
          Your bunk, cell, or cube is your anchor. How you behave there sets
          your reputation.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> keep your area clean and organized (bed made,
            property stacked, floor clear).
          </li>
          <li>
            <strong>DO</strong> ask before sitting on someone else’s bunk or at
            their usual table.
          </li>
          <li>
            <strong>DO</strong> keep noise down during early morning and late
            night.
          </li>
          <li>
            <strong>DO</strong> participate in basic cleaning if it’s a shared
            space (trash, floor, sink, shower if it’s a unit job).
          </li>
          <li>
            <strong>DO</strong> lock up or secure your property if your facility
            has lockers or footlockers.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> touch other people’s property without
            permission — not even to “straighten” it.
          </li>
          <li>
            <strong>DON’T</strong> go into someone else’s cell or cube without
            them present unless the prison’s rules explicitly require it.
          </li>
          <li>
            <strong>DON’T</strong> use someone else’s hygiene items, clothes, or
            commissary.
          </li>
          <li>
            <strong>DON’T</strong> slam doors, bang on rails, or blast TV/radio
            in ways that disturb others.
          </li>
        </ul>
<h3>Use-Your-Judgment</h3>
        <p>
          In some units, certain seats (TV area, dayroom tables) are informally
          “claimed.”
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> watch for a few days to see where people
            consistently sit.
          </li>
          <li>
            <strong>DO</strong> ask quietly, “Is anyone sitting here?”
          </li>
          <li>
            <strong>DON’T</strong> dig in or argue if someone asks you to move —
            it’s not worth it.
          </li>
        </ul>
        <p>
          For people with sex-offense convictions,{" "}
          <strong>housing is usually calmer than imagined</strong> — especially
          in low-security and SO-heavy units. Cleanliness, respect, and quiet
          routine go a long way.
        </p>
      </SectionCard>

      {/* 3. Social Navigation & Prison Culture */}
      <SectionBand
        title="3. Social Navigation & Prison Culture"
        emblem="🔹"
      />
      <SectionCard>
        <h2>3. Social Navigation & Prison Culture</h2>
        <p>
          You do <strong>not</strong> need to be popular, tough, or socially
          dominant. You need to be predictable, respectful, and boring.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> greet people with simple, neutral respect:
            “Morning,” “What’s up,” “Excuse me.”
          </li>
          <li>
            <strong>DO</strong> introduce yourself to bunkies or immediate
            neighbors early.
          </li>
          <li>
            <strong>DO</strong> keep conversation light unless you know someone
            well.
          </li>
          <li>
            <strong>DO</strong> spend your time around people whose behavior you
            want to mirror (walkers, readers, workers, guys in classes).
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> gossip or repeat what you’ve heard about
            others.
          </li>
          <li>
            <strong>DON’T</strong> comment on anyone’s charges, sentence, case,
            or past.
          </li>
          <li>
            <strong>DON’T</strong> try to be funny by disrespecting people.
          </li>
          <li>
            <strong>DON’T</strong> ask about someone’s crime; let them share if
            they want to.
          </li>
        </ul>
        <h3>Daily Etiquette Everyone Follows (Even if Unspoken)</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> look into other people’s cells or cubes —
            even a quick glance is considered intrusive.
          </li>
          <li>
            <strong>DO</strong> walk with your eyes forward, not scanning faces
            or other people’s property.
          </li>
          <li>
            <strong>DON’T</strong> watch other people’s interactions with staff.
          </li>
          <li>
            <strong>DON’T</strong> hover near phone calls or listen in.
          </li>
          <li>
            <strong>DON’T</strong> stand too close behind someone in line.
          </li>
          <li>
            <strong>DO</strong> give people space in tight areas (microwaves,
            phones, showers).
          </li>
          <li>
            <strong>DON’T</strong> interject yourself into someone else’s
            conversation — it can look like you were eavesdropping, even if you
            weren’t.
          </li>
          <li>
            <strong>DO</strong> mind your own business at all times.
          </li>
        </ul>
        <p>
          This etiquette is not optional. In prison, privacy is symbolic, and
          violating it creates conflict.
        </p>
        <h3>SO-Specific Notes</h3>
        <p>
          People with sex-offense convictions are often{" "}
          <strong>the majority</strong> in certain units or prisons. That changes
          the social dynamic:
        </p>
        <ul className="list-disc pl-6">
          <li>
            “Chomo” gets used casually, sometimes about half the unit.
          </li>
          <li>
            Many others are in almost the same position as you — older,
            first-time, non-violent, online cases.
          </li>
        </ul>
        <p>
          You do <strong>not</strong> need to defend yourself from the label.
          What matters is how you behave, not what slang people use.
        </p>
        <h3>Use-Your-Judgment</h3>
        <ul className="list-disc pl-6">
          <li>
            Some yards have active “cars” (race- or region-based groups). Others
            (especially SO-heavy lows) treat cars as loose social clusters.
          </li>
          <li>
            <strong>DO</strong> keep a friendly but neutral stance — say hello,
            don’t pledge allegiance.
          </li>
          <li>
            <strong>DON’T</strong> jump into “we” language about any car; just
            be you.
          </li>
        </ul>
      </SectionCard>

      {/* 4. Money, Debt, and Commissary */}
      <SectionBand
        title="4. Money, Debt, and Commissary"
        emblem="🔹"
      />
      <SectionCard>
        <h2>4. Money, Debt, and Commissary</h2>
        <p>
          If there is one domain where rules are nearly universal, it’s this
          one: <strong>debt and gambling create danger.</strong> Handbooks across
          the country — including the{" "}
          <a
            className={linkCls}
            href="https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOP Inmate Information Handbook
          </a>{" "}
          — classify gambling and debt as misconduct.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> live within your means.
          </li>
          <li>
            <strong>DO</strong> keep track of your spending and balance.
          </li>
          <li>
            <strong>DO</strong> send money home or save if you can — don’t let
            it become a status thing inside.
          </li>
          <li>
            <strong>DO</strong> say, “I don’t borrow and I don’t lend, but I
            appreciate you offering,” if someone pushes commissary on you.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> borrow food, coffee, stamps, or hygiene “until
            store.”
          </li>
          <li>
            <strong>DON’T</strong> gamble — cards, sports bets, any kind of pool.
          </li>
          <li>
            <strong>DON’T</strong> let others use your account, number, or PIN
            (explicitly banned in BOP policy and many state systems).
          </li>
          <li>
            <strong>DON’T</strong> run a store or reselling operation (common
            rule violation).
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <p>
          Generosity can create expectation. Be financially invisible.
        </p>
      </SectionCard>

      {/* 5. Safety & Danger Zones */}
      <SectionBand
        title="5. Safety & Danger Zones"
        emblem="🔹"
      />
      <SectionCard>
        <h2>5. Safety & Danger Zones</h2>
        <p>
          There is no way to make prison risk-free, but you can dramatically
          reduce your risk.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> stay away from known trouble spots: bathrooms
            when large groups congregate, dark corners, areas where people
            constantly argue.
          </li>
          <li>
            <strong>DO</strong> walk with purpose — not rushed, not lurking.
          </li>
          <li>
            <strong>DO</strong> leave immediately if an argument escalates near
            you.
          </li>
          <li>
            <strong>DO</strong> trust your gut: if a person or area feels “off,”
            quietly avoid it.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> play the hero in other people’s conflicts.
          </li>
          <li>
            <strong>DON’T</strong> respond to minor disrespect with aggression;
            a simple “My bad,” or walking away is usually enough.
          </li>
          <li>
            <strong>DON’T</strong> carry contraband or do favors that involve
            hiding items for others.
          </li>
          <li>
            <strong>DON’T</strong> agree to hold or move anything you don’t
            understand.
          </li>
        </ul>
        <h3>PREA & Sexual Safety</h3>
        <p>
          Under PREA, facilities must provide ways to report sexual abuse or
          harassment, including outside channels. See:{" "}
          <a
            className={linkCls}
            href="https://bja.ojp.gov/program/prea/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            BJA PREA Overview
          </a>{" "}
          and{" "}
          <a
            className={linkCls}
            href="https://www.prearesourcecenter.org/about/prison-rape-elimination-act"
            target="_blank"
            rel="noopener noreferrer"
          >
            PREA Resource Center
          </a>
          .
        </p>
        <p>Hard rules:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> report sexual abuse or serious threats through
            the channels your facility provides.
          </li>
          <li>
            <strong>DO</strong> document what happened (dates, times, names) as
            soon as you safely can.
          </li>
          <li>
            <strong>DON’T</strong> assume you have no options; PREA requires
            multiple ways to report.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <p>
          In SO-heavy environments, the biggest dangers are usually{" "}
          <strong>not</strong> about your offense — they’re about{" "}
          <strong>debt, drugs, and personal conflicts.</strong>
        </p>
      </SectionCard>
{/* 6. Staff & Rules */}
      <SectionBand title="6. Staff & Rules" emblem="🔹" />
      <SectionCard>
        <h2>6. Staff & Rules</h2>
        <p>
          Staff can significantly shape your day-to-day life. Policies and
          handbooks emphasize following staff instructions, reporting abuse, and
          using grievance systems for complaints. General examples include BOP
          handbooks such as the{" "}
          <a
            className={linkCls}
            href="https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inmate Information Handbook
          </a>{" "}
          and federal policy statements like the{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/policy/progstat/5290_014.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admission & Orientation Program Statement 5290.14
          </a>
          .
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> follow direct orders unless they’re obviously
            illegal or clearly put you in immediate danger.
          </li>
          <li>
            <strong>DO</strong> keep interactions short, respectful, and
            businesslike.
          </li>
          <li>
            <strong>DO</strong> use grievance or request processes for
            non-emergency issues.
          </li>
          <li>
            <strong>DO</strong> attend admission and orientation (A&O) programs
            and actually read the handbook.
            <ul className="list-disc pl-6">
              <li>
                A&O attendance is required by BOP policy:{" "}
                <a
                  className={linkCls}
                  href="https://www.bop.gov/policy/progstat/5290_014.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Program Statement 5290.14
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> argue, roll your eyes, or show open contempt
            to staff; they control counts, moves, passes, and write-ups.
          </li>
          <li>
            <strong>DON’T</strong> try to “befriend” staff or be overly familiar
            — that can cause problems both with staff and other incarcerated
            people.
          </li>
          <li>
            <strong>DON’T</strong> ask staff to break rules for you. If they do,
            it can backfire hard.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <p>Some staff are decent and consistent; others are moody or arbitrary.</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> adapt your expectations to the individual CO
            without sucking up.
          </li>
          <li>
            <strong>DO</strong> document important interactions (dates, times,
            what was said) if there’s a pattern of unfair treatment.
          </li>
        </ul>
        <p>
          For SOs, <strong>staying off staff radar</strong> most of the time is
          ideal: follow rules, don’t create work for them, and don’t make
          yourself their project.
        </p>
      </SectionCard>

      {/* 7. Programs, Work, and Education */}
      <SectionBand title="7. Programs, Work, and Education" emblem="🔹" />
      <SectionCard>
        <h2>7. Programs, Work, and Education</h2>
        <p>
          Work and programs aren’t just about “checking boxes” — they structure
          your day and shape how staff and other incarcerated people see you.
          The BOP and many state systems classify people, assign work, and
          prioritize program needs for security and rehabilitation. See, for
          example,{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/about/facilities/federal_prisons.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOP’s “Federal Prisons” overview
          </a>{" "}
          for how security levels and programs fit together.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> accept a work assignment and show up on time.
          </li>
          <li>
            <strong>DO</strong> put in a reasonable effort — you don’t have to
            be a star, but don’t be lazy.
          </li>
          <li>
            <strong>DO</strong> sign up for education programs you’re eligible
            for (GED, college classes, vocational training).
          </li>
          <li>
            <strong>DO</strong> use the library — for legal work and for your
            own mind.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> refuse jobs without a serious, documented
            reason.
          </li>
          <li>
            <strong>DON’T</strong> fake illness to get out of work on a regular
            basis — it builds a bad reputation.
          </li>
          <li>
            <strong>DON’T</strong> treat programs as a joke; your counselor’s
            notes can affect classification, transfers, and sometimes
            early-release opportunities.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <ul className="list-disc pl-6">
          <li>
            Some programs are well-run; others are a time-filler.
            <ul className="list-disc pl-6">
              <li>
                <strong>DO</strong> aim for programs that help your mind
                (education), your body (fitness), or your reentry (vocational).
              </li>
              <li>
                <strong>DO</strong> be strategic: a “good worker with no
                problems” is a label you want staff to use about you.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          For SOs, consistent program participation reinforces the image that
          you are <strong>low-risk, compliant, and trying to change</strong>,
          which helps in classification reviews and sometimes in post-release
          decisions.
        </p>
      </SectionCard>

      {/* 8. Medical & Mental Health */}
      <SectionBand title="8. Medical & Mental Health" emblem="🔹" />
      <SectionCard>
        <h2>8. Medical & Mental Health</h2>
        <p>
          Most systems provide at least basic access to medical and mental-health
          services, but often with copays or delays; handbooks typically describe
          sick-call procedures and mental-health referrals. Examples include
          general BOP handbooks and policy guidance. A good supplemental primer
          is the{" "}
          <a
            className={linkCls}
            href="https://www.nacdl.org/getattachment/6dd87672-8ff3-4d7c-96ae-5712b55bb7a2/how-to-navigate-the-federal-prison-system-06252025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            NACDL guide to navigating the federal prison system
          </a>
          , which explains health care access and limitations in plain language.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> report serious medical symptoms promptly.
          </li>
          <li>
            <strong>DO</strong> use sick call and follow procedure even if it’s
            slow.
          </li>
          <li>
            <strong>DO</strong> request mental-health support if you are
            experiencing panic, suicidal thoughts, or intense depression.
          </li>
          <li>
            <strong>DO</strong> be honest about self-harm thoughts; staff are
            required to respond.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> self-medicate with illegal drugs or hoarded
            meds.
          </li>
          <li>
            <strong>DON’T</strong> ignore chest pain, serious infection, or major
            injuries.
          </li>
          <li>
            <strong>DON’T</strong> threaten self-harm just to get a move — it can
            lead to restrictive placements that feel worse.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <p>Mental-health services vary in quality.</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> use them anyway if you are in crisis.
          </li>
          <li>
            <strong>DO</strong> supplement with your own coping routines:
            walking, journaling, meditation, spiritual practices, structured
            days.
          </li>
        </ul>
        <p>
          For people with sex-offense convictions — especially those with no
          prior criminal history — <strong>mental health is a survival domain</strong>,
          not an optional extra.
        </p>
      </SectionCard>
{/* 9. Yard, Recreation, and Movement */}
      <SectionBand title="9. Yard, Recreation, and Movement" emblem="🔹" />
      <SectionCard>
        <h2>9. Yard, Recreation, and Movement</h2>
        <p>
          The yard is where you’ll spend a lot of your “free” time. Security levels
          differ, but official BOP materials such as the{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/about/facilities/federal_prisons.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Security Levels overview
          </a>{" "}
          describe how minimum, low, medium, and high facilities differ in movement
          restrictions and programming.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> use the yard regularly for exercise — it helps
            sleep, mood, and stress.
          </li>
          <li>
            <strong>DO</strong> walk or work out with a stable, low-drama partner
            or group.
          </li>
          <li>
            <strong>DO</strong> pay attention to movement rules (what time you
            must be back inside, where you can and can’t go).
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> hover near groups that are arguing or
            “politicking.”
          </li>
          <li>
            <strong>DON’T</strong> stand staring at people; it’s seen as intrusive.
          </li>
          <li>
            <strong>DON’T</strong> join pickup sports if they’re known to get
            heated and you don’t handle conflict well.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <ul className="list-disc pl-6">
          <li>
            Some yards are dominated by sports; others by walkers and small groups.
          </li>
          <li>
            <strong>DO</strong> find activities that regulate you emotionally —
            walking, light workouts, stretching, quiet conversation.
          </li>
          <li>
            <strong>DON’T</strong> feel pressured to join intense sports if you’re
            not that person.
          </li>
        </ul>
      </SectionCard>

      {/* 10. Hygiene & Cleanliness */}
      <SectionBand title="10. Hygiene & Cleanliness" emblem="🔹" />
      <SectionCard>
        <h2>10. Hygiene & Cleanliness</h2>
        <p>
          Every handbook on earth cares about cleanliness and bans certain
          unsanitary behavior. See any BOP institutional handbook (for example, the{" "}
          <a
            className={linkCls}
            href="https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inmate Information Handbook
          </a>
          ).
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> shower regularly, within the norms of your unit
            (daily or every other day if possible).
          </li>
          <li>
            <strong>DO</strong> brush your teeth, wash your clothes, and keep your
            bedding reasonably clean.
          </li>
          <li>
            <strong>DO</strong> clean up after yourself in shared spaces (toilets,
            sinks, showers, microwaves).
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> leave hair, trash, or spilled food behind.
          </li>
          <li>
            <strong>DON’T</strong> skip showers for long stretches unless there’s
            a clear, temporary reason (lockdowns, water issues).
          </li>
          <li>
            <strong>DON’T</strong> handle food with unwashed hands in front of
            others.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <ul className="list-disc pl-6">
          <li>
            Some facilities provide better supplies than others.{" "}
            <strong>DO</strong> budget commissary for basics: soap, toothpaste,
            maybe extra laundry soap if needed.
          </li>
          <li>
            <strong>DO</strong> respect how important smell and cleanliness are in
            cramped spaces.
          </li>
        </ul>
        <p>
          Being clean and low-impact on others’ comfort is a{" "}
          <strong>quiet but powerful safety strategy.</strong>
        </p>
      </SectionCard>

      {/* 11. Boundaries, Sex, and PREA */}
      <SectionBand title="11. Boundaries, Sex, and PREA" emblem="🔹" />
      <SectionCard>
        <h2>11. Boundaries, Sex, and PREA</h2>
        <p>
          Sex in prison is <strong>never simple</strong> and is often prohibited
          outright, even when it appears consensual, under many systems’ rules and
          PREA definitions.
        </p>
        <ul className="list-disc pl-6">
          <li>
            DOJ PREA Final Rule (full standards):{" "}
            <a
              className={linkCls}
              href="https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape"
              target="_blank"
              rel="noopener noreferrer"
            >
              Federal Register – PREA Standards
            </a>
          </li>
          <li>
            PREA Resource Center summary:{" "}
            <a
              className={linkCls}
              href="https://www.prearesourcecenter.org/about/prison-rape-elimination-act"
              target="_blank"
              rel="noopener noreferrer"
            >
              About PREA
            </a>
          </li>
          <li>
            BJA PREA overview:{" "}
            <a
              className={linkCls}
              href="https://bja.ojp.gov/program/prea/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              BJA PREA Program
            </a>
          </li>
        </ul>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> know that sexual contact can be treated as a rule
            violation or abuse issue, even if you think it’s consensual.
          </li>
          <li>
            <strong>DO</strong> report sexual abuse or coercion through available
            PREA channels.
          </li>
          <li>
            <strong>DO</strong> set clear boundaries if someone flirts or tests
            you sexually: “I’m not into that; I’m just doing my time.”
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> engage in sexual activity with others — it can
            trigger serious consequences, retaliation, or reclassification.
          </li>
          <li>
            <strong>DON’T</strong> trade sex for protection, commissary, or favors.
          </li>
          <li>
            <strong>DON’T</strong> make sexual comments, jokes, or gestures toward
            others.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <p>
          Sexuality in prison is a charged topic; for people with sex-offense
          convictions, participating in anything sexual inside is especially risky.
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> keep your sexual life in your thoughts, writing, or
            therapy, not in your behavior.
          </li>
        </ul>
      </SectionCard>

      {/* 12. Disclosure, Paperwork, and Lingo */}
      <SectionBand
        title="12. Disclosure, Paperwork, and Lingo"
        emblem="🔹"
      />
      <SectionCard>
        <h2>12. Disclosure, Paperwork, and Lingo</h2>
        <p>
          Questions about your case will come up. How you handle them matters more
          than the details of your offense, especially in SO-heavy environments.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> keep your answer short and honest:
            <ul className="list-disc pl-6">
              <li>“Non-violent, federal case.”</li>
              <li>“Sex-offense, internet case.”</li>
              <li>
                “I’ve got a sex charge; I’m doing my time and going home.”
              </li>
            </ul>
          </li>
          <li>
            <strong>DO</strong> refuse to show paperwork if your unit’s culture
            doesn’t demand it.
          </li>
          <li>
            <strong>DO</strong> be consistent — don’t change your story.
          </li>
          <li>
            <strong>DO</strong> show your paperwork if the culture of the yard
            expects it and if it’s safe to do so.
          </li>
          <li>
            <strong>DO</strong> keep it simple: nobody needs your life story.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> lie — lies almost always unravel.
          </li>
          <li>
            <strong>DON’T</strong> over-explain or give graphic details about your
            charges.
          </li>
          <li>
            <strong>DON’T</strong> act defensive; it signals insecurity.
          </li>
        </ul>
        <h3>Common Prison Lingo (What It Means and How It Affects Safety)</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>“Chomo”</strong> – generic term for anyone with a sex offense;
            not automatically a threat word.
          </li>
          <li>
            <strong>“Car”</strong> – informal group, often by race or region;
            varies by facility.
          </li>
          <li>
            <strong>“Checking in”</strong> – asking for protective custody; done
            for many reasons, not just SO status.
          </li>
          <li>
            <strong>“Kite”</strong> – written note passed through official or
            unofficial channels.
          </li>
          <li>
            <strong>“Paperwork”</strong> – your judgment and PSR.
          </li>
          <li>
            <strong>“Shot caller”</strong> – someone with informal influence in a
            car; often irrelevant in SO-heavy yards.
          </li>
          <li>
            <strong>“Active / non-active yard”</strong> – active means politics
            are enforced; non-active means fewer politics.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> learn the lingo so you don’t misinterpret normal
            conversation as a threat.
          </li>
          <li>
            <strong>DON’T</strong> try to use lingo to “sound tough.” It backfires.
          </li>
        </ul>
      </SectionCard>
{/* 13. Conflict, Bullying, and Threats */}
      <SectionBand title="13. Conflict, Bullying, and Threats" emblem="🔹" />
      <SectionCard>
        <h2>13. Conflict, Bullying, and Threats</h2>
        <p>
          Conflict happens in any confined environment, but people with
          sex-offense convictions are far <em>less</em> likely than most other
          groups to be involved in violence — partly due to age, temperament, and
          placement in SO-heavy units.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> walk away early when something feels off.
          </li>
          <li>
            <strong>DO</strong> defuse tension with polite, simple language:
            <ul className="list-disc pl-6">
              <li>“My bad.”</li>
              <li>“All good.”</li>
              <li>“No disrespect.”</li>
            </ul>
          </li>
          <li>
            <strong>DO</strong> change your routine quietly if someone is clearly
            targeting you for annoyance rather than violence.
          </li>
          <li>
            <strong>DO</strong> report credible threats through the channels your
            facility provides, especially if there is a safety concern.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> mouth off, posture, or escalate arguments to
            “save face.”
          </li>
          <li>
            <strong>DON’T</strong> let pride override basic safety or common sense.
          </li>
          <li>
            <strong>DON’T</strong> try to “win” verbal confrontations — winning
            creates resentment; neutrality creates distance.
          </li>
          <li>
            <strong>DON’T</strong> borrow someone else’s problems by getting
            involved in fights or alliances.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <ul className="list-disc pl-6">
          <li>walking away</li>
          <li>changing seats</li>
          <li>avoiding certain times of day</li>
          <li>steering clear of specific people</li>
        </ul>
        <p>
          In SO units, most people <em>want no problems at all.</em> They’re older,
          quieter, and doing time the same way you are.
        </p>
        <p>
          If you think someone is trying to bait you into conflict, you’re probably
          right — and the safest move is <strong>no reaction at all.</strong>
        </p>
      </SectionCard>

      {/* 14. Mental Health, Shame, and Identity */}
      <SectionBand title="14. Mental Health, Shame, and Identity" emblem="🔹" />
      <SectionCard>
        <h2>14. Mental Health, Shame, and Identity</h2>
        <p>
          Prison forces a kind of internal reckoning that is painful, especially for
          people with no prior criminal history — which includes a very large share
          of those convicted of sex-related offenses.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> acknowledge shame, fear, grief, and identity crises
            as normal.
          </li>
          <li>
            <strong>DO</strong> find one or two safe ways to process (journaling,
            walking, reading, meditation, faith practice).
          </li>
          <li>
            <strong>DO</strong> reach out for mental-health support if thoughts
            turn dark or hopeless.
          </li>
          <li>
            <strong>DO</strong> maintain small, daily habits that anchor you
            emotionally.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> numb yourself with fantasy or denial — it makes
            reentry harder.
          </li>
          <li>
            <strong>DON’T</strong> catastrophize (“My life is over”) — you are in a
            temporary environment, not a permanent state.
          </li>
          <li>
            <strong>DON’T</strong> hide depression or suicidal thoughts;
            vulnerability is not weakness here.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <p>You will see everything from:</p>
        <ul className="list-disc pl-6">
          <li>men collapsing emotionally in the first month</li>
          <li>men who improve dramatically with structure</li>
          <li>
            men who panic at release because the world outside feels overwhelming
          </li>
        </ul>
        <p>
          Your goal is not to “be strong.” Your goal is to{" "}
          <strong>adapt</strong>, <strong>heal</strong>, and{" "}
          <strong>build the habits</strong> you’ll rely on later.
        </p>
      </SectionCard>

      {/* 15. Religion, Groups, and Community */}
      <SectionBand title="15. Religion, Groups, and Community" emblem="🔹" />
      <SectionCard>
        <h2>15. Religion, Groups, and Community</h2>
        <p>
          Religion is often a refuge in prison. Most facilities allow multiple
          services and study groups, including Christian, Jewish, Muslim, Buddhist,
          and sometimes secular or recovery-oriented gatherings.
        </p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> attend services if they keep you grounded.
          </li>
          <li>
            <strong>DO</strong> join faith or meditation groups if they help you
            stay centered.
          </li>
          <li>
            <strong>DO</strong> respect all faiths and practices.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> join a religious group just for protection — it
            creates problems.
          </li>
          <li>
            <strong>DON’T</strong> argue doctrine or criticize someone else’s
            beliefs.
          </li>
          <li>
            <strong>DON’T</strong> use religion as a mask for manipulation; people
            see through it fast.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <p>
          Spiritual communities can be stabilizing, but stay{" "}
          <strong>low-drama</strong> and avoid groups that are known for conflict.
        </p>
      </SectionCard>

      {/* 16. Reentry Mindset */}
      <SectionBand title="16. Reentry Mindset (Yes, From Day One)" emblem="🔹" />
      <SectionCard>
        <h2>16. Reentry Mindset (Yes, From Day One)</h2>
        <p>Every decision you make inside affects the version of you that walks out the gate.</p>
        <h3>Hard DOs</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DO</strong> structure your day the way you hope to structure
            your life after release.
          </li>
          <li>
            <strong>DO</strong> maintain contact with family and future support
            networks.
          </li>
          <li>
            <strong>DO</strong> take programs seriously; document participation if
            you can.
          </li>
          <li>
            <strong>DO</strong> keep your disciplinary record clean. It matters —
            for jobs, transitions, and credibility with probation.
          </li>
        </ul>
        <h3>Hard DON’Ts</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>DON’T</strong> adopt a “prison identity” that you can’t carry
            into the community.
          </li>
          <li>
            <strong>DON’T</strong> spend years gaming the system instead of
            improving yourself.
          </li>
          <li>
            <strong>DON’T</strong> assume reentry will be easy — start preparing
            early.
          </li>
        </ul>
        <h3>Use-Your-Judgment</h3>
        <p>
          Think of prison as a long, enforced pause. You can come out:
        </p>
        <ul className="list-disc pl-6">
          <li>more stable</li>
          <li>more humbled</li>
          <li>more structured</li>
          <li>more disciplined</li>
          <li>…or more chaotic and defeated.</li>
        </ul>
        <p>
          Routine and mindset determine which outcome you choose.
        </p>
      </SectionCard>

      {/* 17. What Makes SO Time Different — And What Doesn’t */}
      <SectionBand
        title="17. What Makes SO Time Different — And What Doesn’t"
        emblem="🔹"
      />
      <SectionCard>
        <h2>17. What Makes SO Time Different — And What Doesn’t</h2>
        <p>There are ways in which being incarcerated for a sex offense is truly different:</p>
        <ul className="list-disc pl-6">
          <li>stigma exists</li>
          <li>family shame is heavier</li>
          <li>supervision after release is restrictive</li>
          <li>programming availability varies</li>
          <li>
            you are often isolated from general populations or barred from camps
            due to the{" "}
            <strong>Public Safety Factor — Sex Offender</strong> in BOP policy (
            <a
              className={linkCls}
              href="https://www.bop.gov/inmates/custody_and_care/classification.jsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              PSF definitions
            </a>
            )
          </li>
        </ul>
        <p>But there are also ways in which it is surprisingly <em>not</em> different:</p>
        <ul className="list-disc pl-6">
          <li>
            most people do not care about your case as long as you mind your
            business
          </li>
          <li>
            most violence has nothing to do with sex-offense stigma
          </li>
          <li>
            routine, mindset, and behavior matter far more than your charge
          </li>
          <li>many units are majority-SO environments</li>
          <li>
            safety comes from the same habits everyone else uses
          </li>
        </ul>
        <p>
          Your job is to understand the environment, not fear the myths.
        </p>
      </SectionCard>
{/* 18. The 20 Most Reliable Dos and Don’ts */}
      <SectionBand
        title="18. The 20 Most Reliable Dos and Don’ts (A One-Page Summary)"
        emblem="🔹"
      />
      <SectionCard>
        <h2>18. The 20 Most Reliable Dos and Don’ts (A One-Page Summary)</h2>

        <h3>Top 10 DOs</h3>
        <ol className="list-decimal pl-6">
          <li><strong>Do</strong> walk, talk, and move calmly.</li>
          <li><strong>Do</strong> build a predictable daily routine.</li>
          <li><strong>Do</strong> live within your means — avoid all debt.</li>
          <li><strong>Do</strong> keep your cell/cube clean and low-impact.</li>
          <li><strong>Do</strong> stay close to low-drama people and activities.</li>
          <li><strong>Do</strong> use education, programs, and work as anchors.</li>
          <li><strong>Do</strong> protect your mental health with structured habits.</li>
          <li><strong>Do</strong> respect privacy — eyes forward, ears off others.</li>
          <li><strong>Do</strong> maintain solid family contact.</li>
          <li><strong>Do</strong> prepare for reentry from day one.</li>
        </ol>

        <h3>Top 10 DON’Ts</h3>
        <ol className="list-decimal pl-6">
          <li><strong>Don’t</strong> gamble or borrow — ever.</li>
          <li><strong>Don’t</strong> lie about your case.</li>
          <li><strong>Don’t</strong> get pulled into other people’s conflicts.</li>
          <li><strong>Don’t</strong> act loud, aggressive, or perform toughness.</li>
          <li><strong>Don’t</strong> disrespect staff or try to befriend them.</li>
          <li><strong>Don’t</strong> ignore medical or mental-health issues.</li>
          <li><strong>Don’t</strong> drift into bad habits or bad company.</li>
          <li><strong>Don’t</strong> insert yourself into conversations or stare into cells.</li>
          <li><strong>Don’t</strong> make sexual jokes, comments, or gestures.</li>
          <li><strong>Don’t</strong> catastrophize — prison is survivable; panic is optional.</li>
        </ol>
      </SectionCard>

      {/* 19. Final Words for You — and for Your Family */}
      <SectionBand title="19. Final Words for You — and for Your Family" emblem="🔹" />
      <SectionCard>
        <h2>19. Final Words for You — and for Your Family</h2>

        <h3>For the person going inside:</h3>
        <p>
          You are not walking into the nightmare the internet sells.
          You are walking into a rigid, bureaucratic, often boring world full of
          people trying to survive their own sentence.
        </p>

        <p>If you follow the simple habits in this guide:</p>
        <ul className="list-disc pl-6">
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
          …you will be safer, more stable, and more emotionally grounded than you
          imagine right now.
        </p>

        <p>
          Prison is not the end of your life. It is a <strong>season</strong> —
          a harsh one, yes, but temporary.
        </p>

        <h3>For families:</h3>
        <p>
          Your loved one is not walking into a gladiator arena.
          They are walking into a controlled environment with:
        </p>
        <ul className="list-disc pl-6">
          <li>counts</li>
          <li>staff</li>
          <li>rules</li>
          <li>routine</li>
          <li>structure</li>
          <li>hundreds of other people doing the exact same thing</li>
        </ul>

        <p>
          Their fear is real because the unknown is terrifying. But once inside,
          routine replaces panic, predictability replaces fear, and stability replaces
          overwhelm.
        </p>

        <p>
          Stay connected. Stay grounded. Understand the reality, not the mythology.
          And remember: most people with sex-offense convictions do their time safely
          and return home.
        </p>
      </SectionCard>

      {/* References & Further Reading */}
      <SectionBand title="References & Further Reading" emblem="📚" />
      <SectionCard>
        <h3>Primary Policy and System Sources</h3>
        <ul className="list-disc pl-6">
          <li>
            <a className={linkCls} href="https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf" target="_blank" rel="noopener noreferrer">
              Federal Bureau of Prisons – Inmate Information Handbook
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.bop.gov/inmates/custody_and_care/classification.jsp" target="_blank" rel="noopener noreferrer">
              BOP – Custody & Classification Overview
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.bop.gov/about/facilities/federal_prisons.jsp" target="_blank" rel="noopener noreferrer">
              BOP – Federal Prisons & Security Levels
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.bop.gov/about/statistics/statistics_inmate_sec_levels.jsp" target="_blank" rel="noopener noreferrer">
              BOP – Security Level Statistical Breakdown
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape" target="_blank" rel="noopener noreferrer">
              DOJ – PREA Final Rule
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.prearesourcecenter.org/about/prison-rape-elimination-act" target="_blank" rel="noopener noreferrer">
              PREA Resource Center – Overview
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://bja.ojp.gov/program/prea/overview" target="_blank" rel="noopener noreferrer">
              BJA – PREA Program
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.nacdl.org/getattachment/6dd87672-8ff3-4d7c-96ae-5712b55bb7a2/how-to-navigate-the-federal-prison-system-06252025.pdf" target="_blank" rel="noopener noreferrer">
              NACDL – “How to Navigate the Federal Prison System”
            </a>
          </li>
        </ul>

        <h3>Prison Population & Family Impact Research</h3>
        <ul className="list-disc pl-6">
          <li>
            <a className={linkCls} href="https://www.sentencingproject.org/reports/responding-to-crimes-of-a-sexual-nature/" target="_blank" rel="noopener noreferrer">
              The Sentencing Project – Responding to Crimes of a Sexual Nature
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.bjs.ojp.gov/content/pub/pdf/pimc16.pdf" target="_blank" rel="noopener noreferrer">
              BJS – Parents in Prison and Their Minor Children
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.prisonpolicy.org/blog/2022/08/11/parental_incarceration/" target="_blank" rel="noopener noreferrer">
              Prison Policy Initiative – Parental Incarceration
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4229080/" target="_blank" rel="noopener noreferrer">
              Poehlmann et al. – “Children’s Contact With Their Incarcerated Parents” (NIH/PMC)
            </a>
          </li>
        </ul>
      </SectionCard>

      <SourcesOffline />
      <div className="mt-10">
        <ShareBar />
      </div>
    </GuideLayout>
  );
}