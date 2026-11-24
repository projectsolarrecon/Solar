import type { JSX } from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout, ContextualActionCard } from "../../components/solar";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "state-lawmaker",
  primaryPositionId: "ineffective",
  secondaryPositionId: "one-size-fits-all",
  formatId: "email",
  headline: "Ask your state legislature to review what its registry laws actually do",
  description: "State lawmakers can hold a public hearing and commission an independent review of the evidence for existing reporting, notification, residency, and employment requirements under state law.",
  recommendation: {
    audienceLabel: "your state representative or senator",
    suggestion: "Ask for a public committee hearing and an independent evaluation that measures whether specific restrictions prevent sexual harm, documents their costs, and identifies provisions to narrow or repeal.",
    actionLabel: "Build an email to your state lawmaker"
  },
  suggestedAsk: "Please request a public committee hearing and an independent review of our state’s registry laws. Ask evaluators to measure whether each major requirement prevents sexual harm, report enforcement costs, and recommend which provisions to narrow or repeal based on the evidence.",
  personalContext: "I read SOLAR’s analysis of how the Supreme Court’s recidivism claim traveled from McKune v. Lile to Smith v. Doe and later cases. I want to know what current evidence justifies our state’s own rules and what outcomes we use to judge them.",
  source: {
    title: "Who Checks the Supreme Court’s Claims About Danger?",
    path: "/blog/who-checks-the-supreme-courts-claims-about-danger",
    type: "blog"
  }
};

export default function WhoChecksTheSupremeCourtsClaimsAboutDanger(): JSX.Element {
  return (
    <BlogLayout
      title="Who Checks the Supreme Court’s Claims About Danger?"
      description="The Supreme Court’s AR-15 cases recall Smith v. Doe and a shaky recidivism claim. See how disputed premises can shape American law for decades."
      keywords="Supreme Court sex offender registry, Smith v. Doe, McKune v. Lile, frightening and high, sex offense recidivism, judicial accountability, AR-15 Supreme Court cases, District of Columbia v. Heller"
      date="Nov 24, 2026"
      readTime="6 min read"
      badge="📝 BLOG"
      lede="The Supreme Court’s December AR-15 arguments revive a fight over the source of a phrase about danger. A similar trail in the Court’s sex-offense registry cases shows how long the consequences of a poorly checked claim can last."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR">
          <p>
            A disputed reading of legal history became the basis for a two-part test in a later
            concurrence. An unsupported estimate about untreated offenders helped supply a sweeping
            description of risk. Both show how a court’s authority can outlast scrutiny of its sources.
          </p>
        </Callout>

        <p>
          On December 2, the Supreme Court is scheduled to hear two challenges to laws restricting
          AR-15-style rifles in Cook County, Illinois, and Connecticut. The cases are
          {" "}
          <em>Khaya v. Cook County</em>
          , previously captioned
          {" "}
          <em>Viramontes</em>
          , and
          {" "}
          <em>Grant v. Higgins</em>
          . One of the arguments runs through a phrase Justice Antonin Scalia used in 2008 and through a
          word the English jurist he cited used differently. That word is
          {" "}
          <em>or</em>
          .
          {" "}
          <a
            className={linkCls}
            href="https://www.supremecourt.gov/oral_arguments/argument_calendars/MonthlyArgumentCalDecember2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Argument calendar
          </a>
          {" "}
          ·
          {" "}
          <a
            className={linkCls}
            href="https://www.supremecourt.gov/docket/docketfiles/html/public/25-238.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cook County docket
          </a>
          {" "}
          ·
          {" "}
          <a
            className={linkCls}
            href="https://www.supremecourt.gov/docket/docketfiles/html/public/25-566.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connecticut docket
          </a>
        </p>

        <p>
          <a
            className={linkCls}
            href="https://slate.com/news-and-politics/2026/11/supreme-court-scalia-clarence-thomas-ar-15-ban.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Writing in <em>Slate</em>, legal historian Saul Cornell calls it a misquote
          </a>
          . There is a serious dispute about that label. There is also a question that survives the
          dispute. When the Supreme Court puts a claim about danger into an opinion, how often does
          anyone have to go back and check it before the law acts on it again?
        </p>

        <BandHeader title="What happened between “or” and “and”?" />

        <p>
          In
          {" "}
          <a
            className={linkCls}
            href="https://www.govinfo.gov/content/pkg/USREPORTS-554/pdf/USREPORTS-554-570.pdf#page=58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>District of Columbia v. Heller</em>
          </a>
          , Scalia wrote that protection for weapons in common use had historical support in
          prohibitions on carrying “dangerous and unusual weapons.” The first authority he listed was
          William Blackstone, who described going armed with “dangerous or unusual weapons” as an
          offense against the public peace. Scalia was describing a historical tradition in an opinion
          striking down a handgun ban. Blackstone was describing a public-peace offense. The context
          matters as much as the conjunction.
          {" "}
          <a
            className={linkCls}
            href="https://lonang.com/library/reference/blackstone-commentaries-law-england/bla-411/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blackstone’s <em>Commentaries</em>, Book IV, chapter 11
          </a>
        </p>

        <p>
          <a
            className={linkCls}
            href="https://reason.com/volokh/2026/11/15/is-current-second-amendment-jurisprudence-premised-upon-a-misquote/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Law professor Jonathan Adler and former Scalia clerk John Bash
          </a>
          {" "}
          make a fair point. The word “See” introduced a list of authorities supporting a proposition.
          Other sources in the list used “and,” and a rule covering either trait would also cover
          weapons with both. Even on that reading,
          {" "}
          <em>Heller</em>
          {" "}
          leaves a major step unexplained. What makes the overlap between those formulations the outer
          limit of what a government can regulate?
        </p>

        <p>
          In 2016, Justice Samuel Alito supplied a definite answer in his
          {" "}
          <a
            className={linkCls}
            href="https://supreme.justia.com/cases/federal/us/577/411/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Caetano v. Massachusetts</em> concurrence
          </a>
          , joined by Justice Clarence Thomas. He read
          {" "}
          <em>Heller</em>
          {" "}
          as requiring both danger and unusualness. On that reading, a weapon in common lawful use
          retains Second Amendment protection even if it is dangerous. The case involved a stun gun. The
          same reasoning now figures in the argument over widely owned rifles. The distance from
          Blackstone’s public-peace offense to a rule about modern possession is worth making the Court
          explain.
          {" "}
          <a
            className={linkCls}
            href="https://hls.harvard.edu/today/can-cities-and-states-ban-ar-15s/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harvard Law’s preview of the Cook County case
          </a>
        </p>

        <BandHeader title="The number stayed behind. The certainty traveled." />

        <p>
          In 2002, Justice Anthony Kennedy’s four-justice plurality in
          {" "}
          <a
            className={linkCls}
            href="https://www.govinfo.gov/content/pkg/USREPORTS-536/pdf/USREPORTS-536-24.pdf#page=10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>McKune v. Lile</em>
          </a>
          {" "}
          was deciding a Fifth Amendment challenge involving a Kansas prison treatment program. It said
          recidivism among untreated offenders had been estimated as high as 80 percent. The source
          looked official. It was a
          {" "}
          <a
            className={linkCls}
            href="https://www.ojp.gov/pdffiles1/Digitization/123683NCJRS.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            practitioners’ guide from the National Institute of Corrections
          </a>
          . The guide attributed the estimate to a treatment-program director. In 2015,
          {" "}
          <a
            className={linkCls}
            href="https://mow.fd.org/sites/mow/files/filefield_paths/Frightening%20and%20High.pdf#page=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ira and Tara Ellman traced the estimate
          </a>
          {" "}
          to a 1986
          {" "}
          <em>Psychology Today</em>
          {" "}
          article that supplied no supporting reference for the figure.
        </p>

        <p>
          A year after
          {" "}
          <em>McKune</em>
          , Kennedy wrote for the Court in
          {" "}
          <a
            className={linkCls}
            href="https://www.govinfo.gov/content/pkg/USREPORTS-538/pdf/USREPORTS-538-84.pdf#page=20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Smith v. Doe</em>
          </a>
          . The issue was whether Alaska could apply its public registry law to people convicted before
          its enactment. The Court found the law civil for purposes of the Ex Post Facto Clause. On
          whether the scheme went too far, it cited
          {" "}
          <em>McKune</em>
          {" "}
          to describe the risk posed by people convicted of sex offenses as “frightening and high.” The
          precise number was gone. So was the qualifier “untreated.” The characterization helped the
          Court accept a system that relied on categories of conviction and left the public to assess
          risk from the information Alaska posted.
        </p>

        <p>
          The Court also pointed to government figures about a higher likelihood of rearrest for rape or
          sexual assault among people with prior sex-offense convictions. Relative rates can matter, and
          the absolute numbers tell a different part of the story. A later federal study of people
          released from state prisons in 30 states in 2005 found that over nine years, 7.7 percent of
          those released after a sex-offense conviction were arrested for rape or sexual assault,
          compared with 2.3 percent of other released prisoners. Those figures measure arrests for
          specified offenses, with no direct accounting for undetected harm. The study tracked a release
          cohort. The old estimate referred to untreated offenders. The relative difference in the
          federal study was substantial, and the absolute rate was far below the impression left by the
          plurality’s citation of 80 percent.
          {" "}
          <a
            className={linkCls}
            href="https://www.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bureau of Justice Statistics study
          </a>
          {" "}
          ·
          {" "}
          <Link className={linkCls} to="/resources/recidivism-evidence-guide">SOLAR’s Recidivism Evidence Guide</Link>
        </p>

        <BandHeader title="What a sentence can do for decades" />

        <p>
          Under the law reviewed in
          {" "}
          <em>Smith</em>
          , Alaska put people’s addresses and photographs online. For some, the reporting obligation was
          for life. Nineteen years later, in
          {" "}
          <a
            className={linkCls}
            href="https://media.ca11.uscourts.gov/opinions/pub/files/201510958.pdf#page=59"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>McGuire v. Marshall</em>
          </a>
          , the Eleventh Circuit invoked
          {" "}
          <em>Smith</em>
          ’s reasoning in rejecting a retroactivity challenge to Alabama’s residency and employment
          restrictions, among other provisions. Those restrictions govern where a person can live and
          work. In October 2026, an unpublished opinion from that circuit cited
          {" "}
          <em>Smith</em>
          {" "}
          and
          {" "}
          <em>McKune</em>
          {" "}
          again, this time in rejecting an equal-protection challenge to a federal law excluding a man
          convicted of attempted child sex trafficking from earning First Step Act time credits. The
          panel had other reasons for its decision. The same claim about danger was still doing work in
          a case about how long someone could spend in prison.
          {" "}
          <a
            className={linkCls}
            href="https://media.ca11.uscourts.gov/opinions/unpub/files/202410658.pdf#page=12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Figueroa-Gibson v. Warden</em>, pp. 12–13
          </a>
        </p>

        <p>
          That is the danger of a court with the final word. A researcher can show where a number came
          from. A person living under a restriction can bring a new case and put better evidence in the
          record. A lower court can distinguish a different law on a different record. And when a
          Supreme Court precedent directly controls, the lower court must follow it and leave overruling
          to the Supreme Court itself. A correction in a law journal has to earn its way into the next
          decision. The original claim already has a citation that every court recognizes.
          {" "}
          <a
            className={linkCls}
            href="https://tile.loc.gov/storage-services/service/ll/usrep/usrep521/usrep521203/usrep521203.pdf#page=35"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Agostini v. Felton</em>, pp. 237–38
          </a>
        </p>

        <p>
          The Sixth Circuit showed what it looks like to take a fresh record seriously. In
          {" "}
          <a
            className={linkCls}
            href="https://www.opn.ca6.uscourts.gov/opinions.pdf/16a0207p-06.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Does #1–5 v. Snyder</em>
          </a>
          , it said the record offered scant support for Michigan’s claimed public-safety benefits and
          that empirical studies cast significant doubt on
          {" "}
          <em>Smith</em>
          ’s recidivism characterization. The court held that Michigan’s 2006 and 2011 amendments could
          not be applied retroactively to the plaintiffs.
          {" "}
          <em>Smith</em>
          {" "}
          remained precedent. The evidence and the burdens of a different law got a hearing of their
          own.
          {" "}
          <Link className={linkCls} to="/blog/the-registry-the-court-reviewed-no-longer-exists">SOLAR’s analysis of how modern registry laws differ from <em>Smith</em></Link>
        </p>

        <BandHeader title="The burden should be on the government to show its work" />

        <p>
          Courts have good reasons to respect precedent. People should be able to rely on the law from
          one case to the next. That makes it all the more important to distinguish a legal rule from
          the historical or empirical premise offered to justify it. A court can say exactly which
          sources support a rule, what the evidence measures, and where the conclusion remains
          uncertain. A legislature can ask its own questions about whether a registration requirement
          actually prevents harm and what it costs to keep enforcing it.
          {" "}
          <Link className={linkCls} to="/blog/what-good-is-the-registry"><em>What Good Is the Registry?</em></Link>
        </p>

        <p>
          The Supreme Court will have another opportunity to explain what its sources can bear. People
          living under registry laws have already spent decades bearing the consequences of a claim the
          Court made about them. They deserve the same attention to the record.
        </p>

        <ContextualActionCard config={contextualAction} />

        <BandHeader title="Data Sources" icon="📚" />
        <ul>
          <li>
            <a
              className={linkCls}
              href="https://www.supremecourt.gov/oral_arguments/argument_calendars/MonthlyArgumentCalDecember2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supreme Court argument calendar
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.supremecourt.gov/docket/docketfiles/html/public/25-238.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cook County docket, No. 25-238
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.supremecourt.gov/docket/docketfiles/html/public/25-566.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connecticut docket, No. 25-566
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://slate.com/news-and-politics/2026/11/supreme-court-scalia-clarence-thomas-ar-15-ban.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saul Cornell’s Slate essay
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://reason.com/volokh/2026/11/15/is-current-second-amendment-jurisprudence-premised-upon-a-misquote/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jonathan Adler’s response, including John Bash’s comments
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://lonang.com/library/reference/blackstone-commentaries-law-england/bla-411/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blackstone’s Commentaries, Book IV, chapter 11
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.govinfo.gov/content/pkg/USREPORTS-554/pdf/USREPORTS-554-570.pdf#page=58"
              target="_blank"
              rel="noopener noreferrer"
            >
              District of Columbia v. Heller, 554 U.S. 570, 627 (2008)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://supreme.justia.com/cases/federal/us/577/411/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Caetano v. Massachusetts, 577 U.S. 411, 417–18 (2016)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://hls.harvard.edu/today/can-cities-and-states-ban-ar-15s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harvard Law’s preview of the Cook County case
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.govinfo.gov/content/pkg/USREPORTS-536/pdf/USREPORTS-536-24.pdf#page=10"
              target="_blank"
              rel="noopener noreferrer"
            >
              McKune v. Lile, 536 U.S. 24, 33–34 (2002)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.ojp.gov/pdffiles1/Digitization/123683NCJRS.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Institute of Corrections practitioners’ guide, p. xiii
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://mow.fd.org/sites/mow/files/filefield_paths/Frightening%20and%20High.pdf#page=4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ira and Tara Ellman’s 2015 source analysis, pp. 497–99
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.govinfo.gov/content/pkg/USREPORTS-538/pdf/USREPORTS-538-84.pdf#page=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smith v. Doe, 538 U.S. 84, 89–91, 102–05 (2003)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bureau of Justice Statistics’ nine-year follow-up
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://media.ca11.uscourts.gov/opinions/pub/files/201510958.pdf#page=59"
              target="_blank"
              rel="noopener noreferrer"
            >
              McGuire v. Marshall, 50 F.4th 986 (11th Cir. 2022)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://media.ca11.uscourts.gov/opinions/unpub/files/202410658.pdf#page=12"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figueroa-Gibson v. Warden, No. 24-10658, pp. 12–13 (11th Cir. Oct. 14, 2026)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://tile.loc.gov/storage-services/service/ll/usrep/usrep521/usrep521203/usrep521203.pdf#page=35"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agostini v. Felton, 521 U.S. 203, 237–38 (1997)
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.opn.ca6.uscourts.gov/opinions.pdf/16a0207p-06.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Does #1–5 v. Snyder, 834 F.3d 696, 704–06 (6th Cir. 2016)
            </a>
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul>
          <li>
            <Link className={linkCls} to="/resources/registry-effectiveness-evidence-guide">Registry Effectiveness Evidence Guide</Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/recidivism-evidence-guide">Recidivism Evidence Guide</Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/the-registry-the-court-reviewed-no-longer-exists">The Registry the Court Reviewed No Longer Exists</Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}
