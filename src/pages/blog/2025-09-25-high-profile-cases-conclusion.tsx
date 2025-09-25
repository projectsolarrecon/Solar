import React from "react";
import { Link } from "react-router-dom";
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

        <BandHeader title="Politicians" icon="🏛️" />
        <p>
          Lawmakers push “tough on crime” bills and expand registries in the
          name of safety—yet many of these same politicians have been caught
          exploiting their positions. The registry diverts attention from this
          hypocrisy.
        </p>
        <PullQuote>
          “How can you write laws to protect children while preying on them
          yourself?” — survivor testimony in a legislative misconduct case.
        </PullQuote>

        <BandHeader title="Police & Judges" icon="⚖️" />
        <p>
          Badges and gavels create a presumption of trust. Yet case after case
          shows sworn officers and judges abusing that power. A{" "}
          <a
            className={linkCls}
            href="https://scholarworks.bgsu.edu/cgi/viewcontent.cgi?article=1118&context=criminal_justice_pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            national study
          </a>{" "}
          documented over <strong>1,000 officers arrested for sex crimes</strong>{" "}
          between 2005–2014, almost none tracked by the registry.
        </p>
        <Callout variant="urgent" title="System Failure">
          <p>
            The very people tasked with enforcing registry laws are often absent
            from them when they offend.
          </p>
        </Callout>

        <BandHeader title="Clergy" icon="⛪" />
        <p>
          For decades, religious institutions shuffled predators quietly between
          parishes. Instead of accountability, secrecy prevailed. The{" "}
          <a
            className={linkCls}
            href="https://www.attorneygeneral.gov/report/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pennsylvania Grand Jury Report
          </a>{" "}
          documented{" "}
          <strong>over 300 priests abusing 1,000+ children</strong>, with bishops
          protecting perpetrators.
        </p>

        <BandHeader title="Schools & Sports" icon="🏫" />
        <p>
          Classrooms and locker rooms should be safe. Instead, authority and
          access converge to create opportunity for abuse. The{" "}
          <a
            className={linkCls}
            href="https://oig.justice.gov/sites/default/files/reports/21-093.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOJ Inspector General
          </a>{" "}
          found the FBI failed to act on credible reports about Larry Nassar,
          enabling years of abuse.
        </p>
        <PullQuote>
          “Everyone knew. No one stopped it.” — survivor testimony in the Nassar
          hearings
        </PullQuote>

        <BandHeader title="Doctors" icon="🩺" />
        <p>
          Medicine carries immense trust. Yet physicians disciplined for sexual
          misconduct often continue practicing. The{" "}
          <a
            className={linkCls}
            href="https://www.fsmb.org/siteassets/advocacy/policies/report-of-the-workgroup-on-physician-sexual-misconduct.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federation of State Medical Boards
          </a>{" "}
          found structural barriers that let abusers keep licenses.
        </p>

        <BandHeader title="Employers & Workplaces" icon="🏢" />
        <p>
          Supervisors, coworkers, and neighbors have unsupervised access to
          kids—yet abuse in these contexts is largely invisible. The{" "}
          <a
            className={linkCls}
            href="https://www.eeoc.gov/data/enforcement-and-litigation-statistics"
            target="_blank"
            rel="noopener noreferrer"
          >
            EEOC
          </a>{" "}
          records thousands of workplace harassment and abuse complaints each
          year.
        </p>

        <BandHeader title="Families" icon="👨‍👩‍👧" />
        <p>
          The deepest betrayals often happen inside homes. Research shows abuse
          is most often committed by someone a child knows, loves, or depends
          on.{" "}
          <a
            className={linkCls}
            href="https://www.ojjdp.gov/ojstatbb/structure_process/qa09201.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOJ/OJJDP
          </a>{" "}
          reports that <strong>76% of maltreatment perpetrators are parents</strong>.
        </p>

        <Callout variant="reminder" title="The Real Equation" icon="➕">
          <p>
            <strong>Authority + Access + Trust = Vulnerability.</strong>
          </p>
        </Callout>

        <Divider label="A Weapon of Mass Distraction" />
        <p>
          The registry isn’t “failing.” It’s doing what it was built to do:
          redirect fear onto people who have already served their sentences,
          manufacture the illusion of safety with dots on a map, and shield
          powerful institutions from accountability. Ineffectiveness isn’t a
          bug—it’s the feature.
        </p>

        <BandHeader title="How This Aligns with SOLAR’s Position" icon="🌞" />
        <ul>
          <li>
            <strong>Registries are ineffective.</strong> DOJ found a{" "}
            <a
              className={linkCls}
              href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              5.3% sexual re-arrest rate over 3 years
            </a>
            , far lower than burglary or robbery.
          </li>
          <li>
            <strong>Registries are punitive.</strong> They trap people in cycles
            of instability, undermining safety.
          </li>
          <li>
            <strong>Registries foster fear.</strong> They create scapegoats
            instead of addressing systemic risks.
          </li>
          <li>
            <strong>Real safety requires prevention.</strong> Oversight,
            education, treatment, and accountability—not maps.
          </li>
        </ul>

        <Divider label="The Final Word" />
        <PullQuote>
          The registry is not broken. It is a mirror turned the wrong way—
          reflecting dots of people who’ve repaid their debt, while the real
          danger sits behind pulpits, badges, locker rooms, exam tables, and
          dinner tables.
        </PullQuote>

        <BandHeader title="Comprehensive Source List" icon="📚" />
        <ul className="list-disc pl-6">
          <li>
            <a
              className={linkCls}
              href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOJ / OJP SMART — Recidivism of Adult Sexual Offenders (2015)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://smart.ojp.gov/somapi/chapter-5-adult-sex-offender-recidivism"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMART — SO-MAP Chapter 5: Adult Sex Offender Recidivism
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/content/pub/pdf/rpr34s12.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              BJS — Recidivism of Prisoners Released in 34 States (2012 cohort)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/content/pub/pdf/rsorsp05.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              BJS — Recidivism of Sex Offenders Released from State Prison (2005
              cohort)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10666491/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lussier et al. — Meta-analysis of trends in recidivism (2023)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://scholarworks.bgsu.edu/cgi/viewcontent.cgi?article=1118&context=criminal_justice_pub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stinson et al. — Police sexual misconduct: arrested officers study
              (BGSU)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.bgsu.edu/content/dam/BGSU/college-of-arts-and-sciences/Criminal-Justice-Policy/docs/PoliceIntegrityLost.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIJ-funded — Police Integrity Lost
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.attorneygeneral.gov/report/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pennsylvania AG — Grand Jury Report on Clergy Abuse
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.pacourts.us/Storage/media/pdfs/20210610/013710-file-7225.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pennsylvania Courts — 40th Statewide Grand Jury Report PDF
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://oig.justice.gov/sites/default/files/reports/21-093.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOJ OIG — Investigation of FBI Handling of Nassar Allegations
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.congress.gov/committee/senate-commerce-science-and-transportation/sscm00"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Senate Commerce Committee — SafeSport/USOC investigations
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://s3.documentcloud.org/documents/5620161/Ropes-Gray-Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ropes &amp; Gray — Independent Investigation for USOC
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.fsmb.org/siteassets/advocacy/policies/report-of-the-workgroup-on-physician-sexual-misconduct.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              FSMB — Report of the Workgroup on Physician Sexual Misconduct
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6242085/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Landess et al. — Medical Board Licensure &amp; Discipline
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.eeoc.gov/data/enforcement-and-litigation-statistics"
              target="_blank"
              rel="noopener noreferrer"
            >
              EEOC — Enforcement &amp; Litigation Statistics
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.ojjdp.gov/ojstatbb/structure_process/qa09201.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              OJJDP — Statistical Briefing Book – Child Maltreatment Offenders
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/content/pub/pdf/cvvoff.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              BJS — Child Victimizers: Violent Offenders and Their Victims
            </a>
          </li>
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
