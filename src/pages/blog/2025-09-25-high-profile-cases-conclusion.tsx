import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
} from "../../components/solar";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function HighProfileCasesConclusion(): JSX.Element {
  return (
    <BlogLayout
      title="The Registry Is Working Exactly as Designed"
      description="The registry doesn’t fail despite its harms — it fails because it was designed to. This conclusion shows how it diverts attention from real sources of harm."
      keywords="sex offense registry, public safety, recidivism, clergy abuse, police misconduct, SOLAR"
      date="Sep 25, 2025"
      readTime="14 min"
      badge="📝 BLOG"
      lede="The registry isn’t broken — it’s doing exactly what it was designed to do: distract from the truth about where harm really lives."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR" icon="🔎">
          <p>
            The registry doesn’t fail by accident — it fails by design. It
            creates the illusion of safety while scapegoating people who’ve
            already repaid their debt, all while hiding systemic risks in
            authority, trust, and access. True prevention requires oversight and
            accountability, not dots on a map.
          </p>
        </Callout>

        <BandHeader
          title="The Illusion of Safety, The Reality of Harm"
          icon="🚨"
        />
        <p>
          The registry tells a simple story: danger looks like a stranger,
          danger is predictable, danger can be quarantined by drawing dots on a
          map. But every domain we explored told a different story—one that
          should unsettle anyone who genuinely cares about children’s safety.
        </p>

        <ul>
          <li>
            <strong>Politicians</strong> write laws in the name of “public
            safety,” then break those very laws in back rooms and hotel suites.
            The same lawmakers who push registry expansions have, in too many
            cases, been exposed as predators themselves. The registry diverts
            attention away from this hypocrisy.
          </li>
        </ul>
        <PullQuote>
          “How can you write laws to protect children while preying on them
          yourself?” — survivor testimony in a legislative misconduct case.
        </PullQuote>

        <ul>
          <li>
            <strong>Police and judges</strong> wear the uniforms of authority,
            yet case after case has shown them exploiting their positions.
            Uniforms and gavels create a presumption of trust that predators use
            as cover. Meanwhile, the registry props them up as guardians while
            ignoring their betrayal of power. A national study documented over
            1,000 sworn officers arrested for sex-related crimes between
            2005–2014, almost none tracked by the registry.
          </li>
          <li>
            <strong>Clergy</strong> preach morality while shuffling predators
            quietly between parishes. For decades, internal memos and sealed
            files reveal decisions to prioritize reputation over children.
            Instead of demanding accountability from institutions that command
            enormous trust, the registry whispers, “look over there.” The
            Pennsylvania Grand Jury Report documented over 300 priests abusing
            1,000+ children, with bishops protecting perpetrators.
          </li>
          <li>
            <strong>Schools and sports</strong>—places where children are
            supposed to be safest—become breeding grounds for abuse because
            authority and access converge. Coaches, teachers, and mentors exploit
            the reverence of their roles. Yet public headlines and fear
            campaigns continue to shift the spotlight back to strangers. The
            DOJ’s Inspector General found that the FBI failed to act on credible
            reports about Larry Nassar, enabling years of abuse. Survivors
            testified: “Everyone knew. No one stopped it.”
          </li>
          <li>
            <strong>Doctors</strong> swear to “do no harm” but too often escape
            oversight when they exploit patients. Medical boards protect their
            own, and survivors are often silenced. The registry, built to track
            those already punished, has nothing to say about systemic failure in
            medicine. A Federation of State Medical Boards report found
            structural barriers that let physicians disciplined for sexual
            misconduct continue practicing.
          </li>
          <li>
            <strong>Employers and neighbors</strong> have daily, unsupervised
            access to kids—hiring babysitters, running after-school programs,
            supervising summer jobs. These contexts make abuse possible, but
            invisible. The registry hides these everyday risks. The EEOC records
            thousands of sexual harassment and abuse complaints each year, many
            involving supervisors and coworkers.
          </li>
          <li>
            And <strong>families,</strong> the one place children are promised
            unconditional safety, are too often where the deepest betrayals
            occur. Generations of research confirm that abuse is most often
            committed by someone the child knows, loves, or depends on. The
            registry is silent here—because it was never designed to face this
            reality. DOJ/OJJDP reports that 76% of maltreatment perpetrators are
            parents.
          </li>
        </ul>

        <p>
          This is the equation we found again and again:{" "}
          <strong>Authority + Access + Trust = Vulnerability.</strong>
        </p>

        <Divider label="A Weapon of Mass Distraction" />
        <p>
          It’s tempting to say the registry “doesn’t work.” But that’s the wrong
          frame. It does work. It works exactly as intended. It redirects fear,
          manufactures the illusion of safety, shields powerful institutions,
          and gives politicians cover. Ineffectiveness is the design. The
          registry was never meant to protect children. It was meant to reassure
          the public while distracting from where the danger actually lives.
        </p>

        <BandHeader title="How This Aligns with SOLAR’s Position" icon="🌞" />
        <ul>
          <li>
            <strong>Registries are ineffective and harmful.</strong> Most new
            offenses come from people not on the registry, while those on it
            reoffend at lower rates than most other felonies. DOJ found a 5.3%
            sexual re-arrest rate over 3 years in its landmark study, far lower
            than burglary or robbery.
          </li>
          <li>
            <strong>Registries are punitive in practice.</strong> They impose
            lifelong collateral consequences that keep people in cycles of
            instability—making society less safe, not more.
          </li>
          <li>
            <strong>Registries foster fear and scapegoating.</strong> They
            create an underclass, redirecting blame instead of addressing
            systemic risks.
          </li>
          <li>
            <strong>Safety requires prevention and accountability.</strong> That
            means oversight of authority, education, treatment, and support—not
            maps of people who have already repaid their debt.
          </li>
        </ul>

        <Divider label="The Final Word" />
        <p>
          The registry is not a broken system. It is a system that works against
          prevention, accountability, and truth. It is a mirror turned the wrong
          way—reflecting dots of people who’ve repaid their debt, while the real
          danger sits behind pulpits, badges, locker rooms, exam tables, and
          dinner tables. If we keep staring at the map, we will never see the
          truth.
        </p>

        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li>DOJ / OJP SMART — Recidivism of Adult Sexual Offenders (2015)</li>
          <li>BGSU Study — Police Sexual Misconduct</li>
          <li>Pennsylvania AG — Grand Jury Report on Clergy Abuse</li>
          <li>DOJ OIG — FBI Handling of Nassar Allegations</li>
          <li>FSMB — Physician Sexual Misconduct Report</li>
          <li>EEOC — Enforcement & Litigation Statistics</li>
          <li>OJJDP — Child Maltreatment Offenders</li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/community-ties">
              Community Ties
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/registry-myths">
              Registry Myths
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/guide/legislative-advocacy">
              Legislative Advocacy Guide
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}
