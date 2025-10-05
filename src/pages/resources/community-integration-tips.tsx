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
} from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function CommunityIntegrationGuide(): JSX.Element {
  return (
    <GuideLayout
      title="Community Integration Tips"
      description="Practical advice for rebuilding relationships and becoming an active member of your community after incarceration or registration."
      keywords="reentry, community integration, stigma, relationships, rehabilitation"
      date="Oct 5, 2025"
      readTime="20 min"
      badge="📘 RESOURCE GUIDE"
      lede="Practical, evidence-based strategies to rebuild trust, navigate stigma, and engage meaningfully in community life."
      showTOC={true}
    >
      <div className="mb-6">
        <TOC />
      </div>

      {/* I. Introduction */}
      <SectionBand title="Introduction: The Challenge of Rebuilding a Life" emblem="🌱" />
      <SectionCard>
        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            Reintegration is a process, not a test. Small, consistent actions
            (showing up on time, keeping promises) rebuild trust far more than
            speeches. See the idea of “belonging as practice” echoed in
            qualitative reentry research on being seen as a person, not a label.{" "}
            <a
              className={linkCls}
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5962031/"
              target="_blank"
              rel="noopener"
            >
              Evidence
            </a>
            .
          </p>
        </Callout>

        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            Expect friction: stigma, self-doubt, and social awkwardness are
            common. Research shows stigma (including <strong>self-stigma</strong>)
            undermines mental health and participation; naming it helps you
            counter it.{" "}
            <a
              className={linkCls}
              href="https://onlinelibrary.wiley.com/doi/full/10.1002/cbm.2326"
              target="_blank"
              rel="noopener"
            >
              Overview
            </a>
            .
          </p>
        </Callout>

        <Callout variant="reminder" title="Reminder" icon="🕒">
          <p>
            Progress is uneven. Anchor to routines (sleep, meals, movement) so
            setbacks don’t derail you. Practical routines make social steps
            easier.
          </p>
        </Callout>
      </SectionCard>

      {/* II. Understanding Social Reintegration */}
      <SectionBand title="Understanding Social Reintegration" emblem="🤝" />
      <SectionCard>
        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            “Community” = relationships + roles + routines. It’s less about
            convincing everyone, more about <strong>safe participation</strong>{" "}
            and steady contribution.
          </p>
        </Callout>

        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            Evidence consistently links <strong>pro-social ties</strong> (mentors,
            peer groups, faith/service circles) with improved adjustment and
            lower risk.{" "}
            <a
              className={linkCls}
              href="https://cjil.sog.unc.edu/resource/research-on-the-effectiveness-of-reentry-treatments/"
              target="_blank"
              rel="noopener"
            >
              Summary
            </a>{" "}
            |{" "}
            <a
              className={linkCls}
              href="https://www.continuumct.org/files/news/Sells%20et%20al%202020%20Mentors%20Reduce%20Recidivism%20SCPS%20pg%205.pdf"
              target="_blank"
              rel="noopener"
            >
              Peer-Mentor RCT
            </a>
            .
          </p>
        </Callout>

        <Callout variant="reminder" title="Reminder" icon="🕒">
          <p>
            Pair social goals with stability supports (housing, health,
            transport). Integrated (“wraparound”) help outperforms single-issue
            services.{" "}
            <a
              className={linkCls}
              href="https://cjil.sog.unc.edu/resource/research-on-the-effectiveness-of-reentry-treatments/"
              target="_blank"
              rel="noopener"
            >
              Evidence
            </a>
            .
          </p>
        </Callout>
      </SectionCard>

      {/* III. Rebuilding Relationships */}
      <SectionBand title="Rebuilding Relationships" emblem="💬" />
      <SectionCard>
        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            <strong>Friendships:</strong> Start small — one or two people you
            trust or meet through shared activities (support groups, community
            centers, volunteering, faith circles). Boundaries are healthy; you
            don’t owe full disclosure to everyone.
          </p>
        </Callout>

        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            <strong>Family bonds:</strong> Reliability beats speeches. Keep
            appointments, communicate respectfully, and let actions rebuild
            confidence. Family healing often benefits from structured support
            (counseling, mediated conversations).
          </p>
        </Callout>

        <Callout variant="privacy" title="Privacy" icon="🔒">
          <p>
            It’s okay to limit contact with people who pry, gossip, or weaponize
            your past. Protecting your peace aligns with evidence on reducing
            stress load that otherwise “gets under the skin.”{" "}
            <a
              className={linkCls}
              href="https://www.sciencedirect.com/science/article/abs/pii/S0277953619306136"
              target="_blank"
              rel="noopener"
            >
              Background
            </a>
            .
          </p>
        </Callout>
      </SectionCard>

      {/* IV. Dating and Romantic Relationships */}
      <SectionBand title="Dating and Romantic Relationships" emblem="💞" />
      <SectionCard>
        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            <strong>Readiness check:</strong> Build confidence in non-romantic
            interactions first. Skills from CBT-style interventions (breathing,
            reframing) improve emotional regulation during stressful
            conversations.{" "}
            <a
              className={linkCls}
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8376657/"
              target="_blank"
              rel="noopener"
            >
              Overview
            </a>
            .
          </p>
        </Callout>

        <Callout variant="privacy" title="Privacy" icon="🔒">
          <p>
            <strong>Disclosure:</strong> Be honest when it’s legally/ethically
            required, but time it thoughtfully. Keep it brief and calm; pivot to
            who you are now (stability, values, boundaries).
          </p>
        </Callout>

        <Callout variant="warning" title="Boundaries" icon="⚠️">
          <p>
            <strong>Safety:</strong> Anyone who pressures you to hide, rush
            intimacy, or <strong>break supervision rules</strong> is not a safe
            partner. Move on without self-blame.
          </p>
        </Callout>
      </SectionCard>

      {/* V. Being a Good Neighbor */}
      <SectionBand title="Being a Good Neighbor" emblem="🏡" />
      <SectionCard>
        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            Small courtesies (greeting, tidy shared spaces, noise awareness)
            create normalcy and ease. You don’t need to make announcements —
            consistency speaks for itself.
          </p>
        </Callout>

        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            If curiosity or gossip arises, keep responses short or decline
            politely. Over-explaining can escalate tension; quiet steadiness
            usually de-escalates.
          </p>
        </Callout>

        <Callout variant="warning" title="Boundaries" icon="⚠️">
          <p>
            Harassment is not “part of it.” Document incidents and seek help
            (supervision officer, mediation, local advocacy). Steady
            participation + safety planning fosters durable belonging.
          </p>
        </Callout>
      </SectionCard>
{/* VI. Rebuilding Your Reputation at Work */}
      <SectionBand title="Rebuilding Your Reputation at Work" emblem="💼" />
      <SectionCard>
        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            Show up as reliable, professional, and coachable. These behaviors
            reshape how coworkers see you—identity change (“I’m a dependable
            teammate”) drives desistance more than income alone.
          </p>
        </Callout>

        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            If disclosure is required, keep it factual and time-boxed, then
            pivot to your role and goals. Mentor or ally relationships at work
            improve climate and advancement prospects.
          </p>
        </Callout>

        <Callout variant="warning" title="Boundaries" icon="⚠️">
          <p>
            Document inappropriate comments or differential treatment; consult
            HR or employment-rights resources. Quality workplace ties matter
            more than staying in a toxic environment. (For job search support,
            see{" "}
            <a
              className={linkCls}
              href="https://www.honestjobs.com/for-job-seekers"
              target="_blank"
              rel="noopener"
            >
              Honest Jobs
            </a>
            .)
          </p>
        </Callout>
      </SectionCard>

      {/* VII. Participating in Community Life */}
      <SectionBand title="Participating in Community Life" emblem="🌍" />
      <SectionCard>
        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            <strong>Volunteering</strong> is a fast route to purpose +
            connection. Reviews associate volunteering with improved mental
            health and even reduced mortality.{" "}
            <a
              className={linkCls}
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10159229/"
              target="_blank"
              rel="noopener"
            >
              Systematic review
            </a>{" "}
            |{" "}
            <a
              className={linkCls}
              href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-13-773"
              target="_blank"
              rel="noopener"
            >
              Public health view
            </a>
            .
          </p>
        </Callout>

        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            Start with low-risk roles: food pantries, cleanups, animal shelters,
            community gardens. Confirm the site is legally permissible and clear
            about your role.
          </p>
        </Callout>

        <Callout variant="warning" title="Boundaries" icon="⚠️">
          <p>
            Avoid placements that are vague about duties or nudge you toward
            restricted zones. Legitimate orgs vet and respect boundaries.
          </p>
        </Callout>
      </SectionCard>

      {/* VIII. Religious and Spiritual Belonging */}
      <SectionBand title="Religious and Spiritual Belonging" emblem="🙏" />
      <SectionCard>
        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            Healthy faith communities emphasize compassion, inclusion, and
            service—often providing structure and belonging during reentry.
          </p>
        </Callout>

        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            Ask leaders about their stance on reentry and acceptance. Consider
            small-group settings where relationships grow through weekly contact
            and shared tasks.
          </p>
        </Callout>

        <Callout variant="warning" title="Boundaries" icon="⚠️">
          <p>
            Leave spaces that shame, coerce confessions, or use your past as
            control. Private practices (meditation, prayer, gratitude) also
            build resilience.
          </p>
        </Callout>
      </SectionCard>

      {/* IX. Managing Rejection, Setbacks, and Stigma */}
      <SectionBand
        title="Managing Rejection, Setbacks, and Stigma"
        emblem="🧩"
      />
      <SectionCard>
        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            Rejection = friction, not a verdict on your worth. Some doors
            re-open after people witness your consistency; others won’t—that’s
            about their fear, not your value.
          </p>
        </Callout>

        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            Use micro-skills from CBT-style approaches: 3-breath reset, STOP
            skill, values check, and “next small step.” Psychological skills are
            associated with better post-release functioning.{" "}
            <a
              className={linkCls}
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8376657/"
              target="_blank"
              rel="noopener"
            >
              Review
            </a>
            .
          </p>
        </Callout>

        <Callout variant="reminder" title="Reminder" icon="🕒">
          <p>
            Keep a weekly routine: movement, journaling, therapy/peer group,
            creative outlet. Routines blunt the impact of setbacks.
          </p>
        </Callout>
      </SectionCard>

      {/* X. Building Supportive Networks */}
      <SectionBand title="Building Supportive Networks" emblem="🌐" />
      <SectionCard>
        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            Peer mentors and structured circles build confidence and navigation
            skills; an RCT found <strong>lower recidivism</strong> when
            mentorship augmented standard reentry services.{" "}
            <a
              className={linkCls}
              href="https://www.continuumct.org/files/news/Sells%20et%20al%202020%20Mentors%20Reduce%20Recidivism%20SCPS%20pg%205.pdf"
              target="_blank"
              rel="noopener"
            >
              Trial
            </a>
            .
          </p>
        </Callout>

        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            <strong>CoSA (Circles of Support & Accountability):</strong> Evidence
            is mixed but promising across contexts; Minnesota’s work and newer
            syntheses suggest potential benefits when implemented well.{" "}
            <a
              className={linkCls}
              href="https://mn.gov/doc/assets/2018%20MnCOSA%20Outcome%20Evaluation_tcm1089-326700.pdf"
              target="_blank"
              rel="noopener"
            >
              MN report
            </a>{" "}
            |{" "}
            <a
              className={linkCls}
              href="https://www.tandfonline.com/doi/full/10.1080/2997965X.2025.2537643"
              target="_blank"
              rel="noopener"
            >
              2025 review
            </a>
            .
          </p>
        </Callout>

        <Callout variant="warning" title="Boundaries" icon="⚠️">
          <p>
            Quick screen for fit: clear roles, trained facilitators, boundaries,
            legal compliance, grievance process, and{" "}
            <strong>no pressure</strong> to ignore restrictions.
          </p>
        </Callout>
      </SectionCard>
{/* XI. Giving Yourself Permission to Belong Again */}
      <SectionBand title="Giving Yourself Permission to Belong Again" emblem="💖" />
      <SectionCard>
        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            You have a right to stability, friendship, and peace. Identity
            shifts through repeated, ordinary acts of reliability and service.
          </p>
        </Callout>

        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            Voice and narrative matter: people thrive when seen as individuals
            with strengths and goals. Build small rituals of belonging (weekly
            coffee, monthly service night).{" "}
            <a
              className={linkCls}
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5962031/"
              target="_blank"
              rel="noopener"
            >
              Qualitative synthesis
            </a>
            .
          </p>
        </Callout>

        <Callout variant="reminder" title="Reminder" icon="🕒">
          <p>
            You don’t have to earn your humanity—you practice it. Keep going.
          </p>
        </Callout>
      </SectionCard>

      {/* XII. Recognizing Red Flags */}
      <SectionBand title="Recognizing Red Flags" emblem="🚩" />
      <SectionCard>
        <Callout variant="warning" title="Boundaries" icon="⚠️">
          <p>
            Watch for: (1) exploitative relationships (money/favors/secrets),
            (2) pressure to lie or break rules, (3) leaders who shame or
            control, (4) “support” groups demanding money/loyalty, (5) emotional
            burnout marked by isolation and relentless negative self-talk.
          </p>
        </Callout>

        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            <strong>Response plan:</strong> Pause → Step back → Seek support
            (mentor/counselor/advocate) → Reset boundaries. Discernment protects
            your progress.
          </p>
        </Callout>
      </SectionCard>

      {/* XIII. Resources & Tools */}
      <SectionBand title="Resources & Tools" emblem="🧭" />
      <SectionCard>
        <Callout variant="reminder" title="Reminder" icon="🕒">
          <p>
            Verify local legality and supervision conditions before engaging.
          </p>
        </Callout>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Reentry & Peer Support</strong> —{" "}
            <a
              className={linkCls}
              href="https://fortunesociety.org/coming-home/"
              target="_blank"
              rel="noopener"
            >
              The Fortune Society – Reentry: Coming Home
            </a>{" "}
            and{" "}
            <a
              className={linkCls}
              href="https://fortunesociety.org/"
              target="_blank"
              rel="noopener"
            >
              Fortune Society (main)
            </a>{" "}
            — housing, employment, services, and community programs.
          </li>

          <li>
            <strong>Employment</strong> —{" "}
            <a
              className={linkCls}
              href="https://www.honestjobs.com/for-job-seekers"
              target="_blank"
              rel="noopener"
            >
              Honest Jobs (Fair-Chance Employment)
            </a>{" "}
            — national job platform for people with records.
          </li>

          <li>
            <strong>Community Models</strong> —{" "}
            <a
              className={linkCls}
              href="https://mn.gov/doc/assets/2018%20MnCOSA%20Outcome%20Evaluation_tcm1089-326700.pdf"
              target="_blank"
              rel="noopener"
            >
              2018 MN CoSA Evaluation
            </a>{" "}
            |{" "}
            <a
              className={linkCls}
              href="https://www.tandfonline.com/doi/full/10.1080/2997965X.2025.2537643"
              target="_blank"
              rel="noopener"
            >
              2025 CoSA Overview
            </a>
            .
          </li>

          <li>
            <strong>Mental Health & Crisis</strong> —{" "}
            <a
              className={linkCls}
              href="https://988lifeline.org/"
              target="_blank"
              rel="noopener"
            >
              988 Suicide & Crisis Lifeline
            </a>{" "}
            — call/text/chat 988 (24/7).{" "}
            <a
              className={linkCls}
              href="https://www.samhsa.gov/find-help/helplines"
              target="_blank"
              rel="noopener"
            >
              SAMHSA Helpline (1-800-662-HELP)
            </a>
            .
          </li>

          <li>
            <strong>Volunteering – Evidence & Ideas</strong> —{" "}
            <a
              className={linkCls}
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10159229/"
              target="_blank"
              rel="noopener"
            >
              2023 Systematic Review
            </a>{" "}
            |{" "}
            <a
              className={linkCls}
              href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-13-773"
              target="_blank"
              rel="noopener"
            >
              Public Health Review
            </a>
            .
          </li>

          <li>
            <strong>Stigma & Skills</strong> —{" "}
            <a
              className={linkCls}
              href="https://onlinelibrary.wiley.com/doi/full/10.1002/cbm.2326"
              target="_blank"
              rel="noopener"
            >
              Self-Stigma and Health Impacts (2024)
            </a>{" "}
            |{" "}
            <a
              className={linkCls}
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8376657/"
              target="_blank"
              rel="noopener"
            >
              Psychological Skills & Post-Release Outcomes (2021)
            </a>
            .
          </li>
        </ul>
      </SectionCard>

      {/* XIV. Important Reminders */}
      <SectionBand title="Important Reminders" emblem="📎" />
      <SectionCard>
        <Callout variant="reminder" title="Reminder" icon="🕒">
          <p>
            Reintegration isn’t about earning permission to exist—it’s about{" "}
            <strong>showing up</strong> safely and consistently.
          </p>
        </Callout>

        <Callout variant="success" title="Positive" icon="🌱">
          <p>
            Quality over quantity: a few good relationships, a reliable routine,
            and one meaningful role (work/volunteer/faith) beat chasing
            universal approval.
          </p>
        </Callout>

        <Callout variant="info" title="Info" icon="ℹ️">
          <p>
            If you feel stuck, scale down to the <strong>next small step</strong>{" "}
            and ask for help. Progress compounds.
          </p>
        </Callout>
      </SectionCard>

      {/* Data Sources */}
      <SectionBand title="Data Sources" emblem="📚" />
      <SectionCard>
        <ul className="list-disc pl-6">
          <li>
            PMC – Belonging and Reintegration —{" "}
            <a
              className={linkCls}
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5962031/"
              target="_blank"
              rel="noopener"
            >
              https://pmc.ncbi.nlm.nih.gov/articles/PMC5962031/
            </a>
          </li>
          <li>
            Wiley – Self-Stigma & Health —{" "}
            <a
              className={linkCls}
              href="https://onlinelibrary.wiley.com/doi/full/10.1002/cbm.2326"
              target="_blank"
              rel="noopener"
            >
              https://onlinelibrary.wiley.com/doi/full/10.1002/cbm.2326
            </a>
          </li>
          <li>
            CJIL – Reentry Effectiveness —{" "}
            <a
              className={linkCls}
              href="https://cjil.sog.unc.edu/resource/research-on-the-effectiveness-of-reentry-treatments/"
              target="_blank"
              rel="noopener"
            >
              https://cjil.sog.unc.edu/resource/research-on-the-effectiveness-of-reentry-treatments/
            </a>
          </li>
        </ul>
      </SectionCard>

      {/* Related Reading */}
      <SectionBand title="Related Reading" emblem="🔗" />
      <SectionCard>
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/community-ties">
              Community Ties (Blog)
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/guides/employment-rights">
              Employment Rights Guide
            </Link>
          </li>
        </ul>
      </SectionCard>
    </GuideLayout>
  );
}