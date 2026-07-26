import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  ContextualActionCard,
  Divider,
  PullQuote,
} from "../../components/solar";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "journalist",
  primaryPositionId: "closer-to-home",
  secondaryPositionId: "ineffective",
  formatId: "letter-to-editor",
  headline: "Ask media to cover the prevention failure, not just the scandal",
  description:
    "This article shows how registry politics can punish people after conviction while failing to prevent harm that moves through trusted access, authority, secrecy, and institutional shielding. Public coverage should help readers understand that distinction.",
  recommendation: {
    audienceLabel:
      "journalists, editorial boards, and public-facing commentators",
    suggestion:
      "Ask coverage to examine trusted-access prevention, school safeguards, institutional oversight, and the limits of registry-centered safety narratives.",
    actionLabel: "Build an institutional-accountability message",
  },
  suggestedAsk:
    "Please cover this case as more than a political scandal. Examine how trusted access, institutional authority, private digital communication, and public credibility can create prevention failures that registry maps do not meaningfully interrupt.",
  personalContext:
    "I am responding to a SOLAR analysis about the Elliott Pritt allegations, his support for registry-burden legislation, and the broader failure of registry-centered public safety to address trusted-access harm.",
  source: {
    title:
      "The Registry Punishes Afterward. It Does Not See Trusted Access Coming.",
    path: "/blog/the-registry-punishes-afterward-trusted-access",
    type: "blog",
  },
};

export default function TheRegistryPunishesAfterwardTrustedAccess(): JSX.Element {
  return (
    <BlogLayout
      title="The Registry Punishes Afterward. It Does Not See Trusted Access Coming."
      description="A West Virginia lawmaker accused of conduct involving a minor also supported making the registry more expensive and burdensome. The contradiction shows why registry politics is not real prevention."
      keywords="registry politics trusted access, sex offense registry, registry fees, institutional abuse, trusted access, school abuse allegations, West Virginia registry, Elliott Pritt, policy hypocrisy, child safety, public safety"
      date="Jul 26, 2026"
      readTime="7–9 min read"
      badge="📝 BLOG"
      lede="A West Virginia lawmaker helped make registry life more expensive and punitive. Now he is accused of conduct that shows exactly what registry politics cannot prevent: trusted access, authority, secrecy, and institutional shielding before any public list has anything to say."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="legal" title="Opening frame" icon="⚖️">
          <p>
            This piece is not about treating allegations as convictions. It is
            about policy hypocrisy. Elliott Pritt supported making West
            Virginia’s registry more burdensome for people with past convictions
            while now facing allegations rooted in trusted access, digital
            communication, classroom authority, and institutional credibility —
            the very risks registry maps are poorly designed to interrupt.
          </p>
        </Callout>

        <p>There is a difference between accountability and performance.</p>

        <p>
          Accountability asks whether systems prevent harm, respond honestly,
          and apply standards consistently. Performance waits until someone is
          already convicted, already marked, already politically powerless, and
          then adds another fee, another burden, another public ritual of
          exclusion.
        </p>

        <p>
          The federal allegations against West Virginia Delegate Elliott Pritt
          force that distinction into the open.
        </p>

        <p>
          Pritt, a Republican member of the West Virginia House of Delegates and
          a teacher, has been{" "}
          <a
            className={linkCls}
            href="https://www.wvsd.uscourts.gov/content/usa-vs-david-elliott-pritt-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            charged federally with enticement of a minor
          </a>
          .{" "}
          <a
            className={linkCls}
            href="https://wchstv.com/news/local/west-virginia-delegate-charged-in-probe-of-sexual-conduct-with-a-minor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reporting on the criminal complaint says
          </a>{" "}
          the alleged contact began through Roblox while the student was in
          eighth grade, moved to Snapchat, and later involved alleged sexual
          conduct connected to classroom access.
        </p>

        <p>
          Pritt is presumed innocent unless proven guilty. That matters. Charges
          are not convictions.
        </p>

        <PullQuote>“Legal caution does not require political blindness.”</PullQuote>

        <p>Because the public record matters too.</p>

        <p>
          In 2025, Pritt was{" "}
          <a
            className={linkCls}
            href="https://www.wvlegislature.gov/bill_status/Bills_history.cfm?btype=bill&input=3164&sessiontype=RS&year=2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            listed as a sponsor of HB 3164
          </a>
          , a West Virginia bill summarized by the Legislature as “Requiring
          registered sex offenders pay annual fee.” The bill became law and took
          effect July 11, 2025.{" "}
          <a
            className={linkCls}
            href="https://www.wvlegislature.gov/bill_status/bills_text.cfm?billdoc=hb3164+sub1+enr.htm&i=3164&sesstype=RS&yr=2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            The enrolled bill imposed a $125 annual fee on people required to
            register under West Virginia’s Sex Offender Registration Act
          </a>
          . It required payment through the circuit clerk, required proof of
          payment to the State Police, directed the money to the State Police,
          and allowed unpaid fees to become judgment liens after notice.
        </p>

        <p>
          Pritt also co-sponsored{" "}
          <a
            className={linkCls}
            href="https://www.wvlegislature.gov/bill_status/bills_text.cfm?billdoc=hb3161+intr.htm&i=3161&sesstype=RS&yr=2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            HB 3161
          </a>
          , a separate 2025 bill aimed at tightening registry verification
          requirements, including address and online-information verification.
        </p>

        <p>That is not a minor detail. That is the contradiction.</p>

        <p>
          This is not just personal hypocrisy. It is a case study in policy
          hypocrisy: a lawmaker helped increase the costs and consequences of
          registry life for people with past convictions while allegedly
          engaging in conduct that, if proven, shows how sexual harm can happen
          through trust, authority, secrecy, and institutional access before any
          registry has anything to say about it.
        </p>

        <BandHeader
          title="The Registry Punishes the Known. It Does Not Detect the Trusted."
          icon="🧭"
        />

        <p>
          Registry politics is built on a promise: identify people with past
          convictions, publish them, monitor them, restrict them, charge them,
          and the public will be safer.
        </p>

        <p>But that promise depends on a very narrow picture of risk.</p>

        <p>
          It assumes the danger is already known. Already convicted. Already
          listed. Already outside the circle of respectable society.
        </p>

        <p>
          It has much less to say about the trusted adult who has not yet been
          convicted. The teacher. The coach. The pastor. The lawmaker. The police
          officer. The youth volunteer. The professional. The person whose title
          functions as a permission slip.
        </p>

        <p>That is the harder prevention problem.</p>

        <p>
          The allegations against Pritt do not describe a stranger-danger
          scenario interrupted by a public map. They describe a trusted-access
          scenario: a child, a school setting, private digital communication,
          adult authority, and alleged conduct that moved through familiarity
          and institutional proximity.
        </p>

        <p>
          That is where registry-centered politics becomes dangerously
          incomplete.
        </p>

        <p>
          A registry can impose obligations after conviction. It can require
          reporting. It can publish names and addresses. It can demand fees. It
          can turn missed payments into liens. It can make life more unstable for
          people who are already trying to live under the weight of a past
          conviction.
        </p>

        <p>But it cannot look inside a classroom.</p>

        <p>
          It cannot detect when a respected adult begins private contact with a
          child online.
        </p>

        <p>
          It cannot tell whether a public official is using his status to deflect
          suspicion.
        </p>

        <p>
          It cannot replace school policies, reporting systems, institutional
          oversight, or adult willingness to believe children when they disclose
          harm.
        </p>

        <p>
          It cannot prevent abuse by adding another financial burden to someone
          who offended years ago.
        </p>

        <p>
          This is the part registry politics usually refuses to confront: the
          system is very good at adding public burdens after conviction,
          especially to people with little political power. It is much less
          capable of preventing harm when the alleged risk is a trusted adult
          with status, access, authority, and privacy. Pritt’s record matters
          because he helped make the registry more expensive, punitive, and
          intrusive for others while he is now accused of using precisely the
          kind of trusted access that registry maps do not meaningfully
          interrupt.
        </p>

        <BandHeader title="Policymakers Are Trusted Adults Too" icon="🏛️" />

        <p>There is another layer here that should not be missed.</p>

        <p>Pritt was not only a teacher. He was a lawmaker.</p>

        <p>
          That matters because lawmakers do not simply participate in
          public-safety debates. They define them. They decide whose risk counts,
          whose past remains publicly searchable, whose stability is sacrificed,
          whose family carries collateral punishment, and whose conduct receives
          the benefit of privacy until criminal allegations break into public
          view.
        </p>

        <p>
          Lawmakers hold institutional trust. They are given access to schools,
          civic organizations, donors, party structures, public events,
          legislative chambers, and media platforms. Their title gives them
          credibility before they earn it in any particular room.
        </p>

        <p>
          That kind of trust can protect the public when it is used responsibly.
        </p>

        <p>
          It can also shield misconduct when institutions confuse status with
          safety.
        </p>

        <p>
          Registry politics rarely accounts for that. It is designed around the
          already-convicted outsider, not the respected insider. It is built to
          mark the person society has already condemned, not to scrutinize the
          person society has already trusted.
        </p>

        <p>
          That is why this case is not only about one arrest. It is about a
          public-safety imagination that looks down the street while risk may be
          sitting at the front of the classroom, standing behind a pulpit,
          wearing a badge, coaching the team, or voting on the very laws that
          punish everyone else.
        </p>

        <p>
          When lawmakers make policy, they often speak as if danger is a class of
          people somewhere else.
        </p>

        <p>
          But authority itself can be a risk factor when it creates access,
          secrecy, dependence, credibility, and fear of disbelief.
        </p>

        <p>
          A serious prevention system would ask what happens before a person is
          arrested. Registry politics mostly asks what more can be imposed after
          a person is convicted.
        </p>

        <p>Those are not the same question.</p>

        <BandHeader title="The Fee Is Not Neutral" icon="💵" />

        <p>
          Supporters of registry fees may describe them as administrative.
          Someone has to pay for the system, the argument goes, so the people on
          the registry should pay.
        </p>

        <p>
          But a recurring fee imposed only because someone remains on a public
          registry is not neutral administration. It is continuing punishment
          dressed as paperwork.
        </p>

        <p>
          HB 3164 did not merely acknowledge that West Virginia has a registry.
          It made registry status more expensive. It turned registration into a
          yearly financial obligation. It directed the money to law enforcement.
          It allowed unpaid fees to become judgment liens.
        </p>

        <p>
          For people already facing housing barriers, job discrimination, public
          stigma, social exclusion, family strain, and the daily instability of
          registry life, an annual fee is not symbolic. It is one more
          state-imposed obstacle to moving forward.
        </p>

        <p>That is what Pritt supported.</p>

        <p>
          He helped add costs and consequences to people with past convictions —
          people who, in many cases, are trying to maintain housing, employment,
          treatment, family connection, and ordinary stability after completing
          their sentences.
        </p>

        <p>That is why the hypocrisy lands so hard.</p>

        <p>
          The same political system that tells the public to fear the
          already-labeled person has often been much less willing to examine how
          harm happens through authority, access, secrecy, and institutional
          protection.
        </p>

        <p>The registry is easy politics because people on it are easy targets.</p>

        <p>
          They are unpopular. They are isolated. They are rarely defended. Their
          families are treated as collateral damage. Their poverty is treated as
          irrelevant. Their reintegration is treated as suspicious.
        </p>

        <p>
          But making their lives harder does not answer the prevention question
          raised by allegations like these.
        </p>

        <BandHeader
          title="Institutional Shielding Is a Public-Safety Problem"
          icon="🏫"
        />

        <p>
          Public-safety rhetoric often talks about “monsters” and “predators” as
          if harm announces itself in advance.
        </p>

        <p>It usually does not.</p>

        <p>
          Harm often hides behind normalcy. Behind credentials. Behind adult
          confidence. Behind “he would never.” Behind institutional reluctance
          to believe that a respected person could be dangerous. Behind the fear
          of scandal. Behind the instinct to protect the school, the church, the
          agency, the party, the office, or the brand.
        </p>

        <p>That is institutional shielding.</p>

        <p>
          Sometimes shielding is active: reports are ignored, complaints are
          buried, records are hidden, powerful people are protected, and
          reputations are prioritized over children.
        </p>

        <p>
          Sometimes shielding is passive: people defer to status, assume good
          intentions, excuse boundary violations, or fail to build reporting
          systems that children and families can actually use.
        </p>

        <p>Either way, the result is the same. Authority becomes cover.</p>

        <p>Registry maps do not solve that.</p>

        <p>
          A map cannot tell a school whether a teacher is communicating privately
          with a student through an online platform. A public list cannot tell a
          family whether a lawmaker is using civic respectability to avoid
          suspicion. A registry cannot substitute for enforceable staff-student
          communication rules, independent reporting pathways, mandatory
          boundary training, whistleblower protection, and institutional
          courage.
        </p>

        <p>This is why real prevention is harder than registry politics.</p>

        <p>
          It requires communities to stop pretending that danger only comes from
          people already marked as dangerous.
        </p>

        <p>
          It requires scrutiny of trusted people before harm becomes a
          prosecution.
        </p>

        <p>
          It requires systems that make abuse harder to initiate, harder to hide,
          easier to report, and more likely to be interrupted early.
        </p>

        <BandHeader
          title="The Public Has Been Trained to Look in the Wrong Direction"
          icon="👁️"
        />

        <p>The registry tells the public: look over there.</p>

        <p>
          Look at the person with the label. Look at the address. Look at the map.
          Look at the neighbor whose conviction is already public.
        </p>

        <p>
          Sometimes people do need information. Sometimes supervision is
          appropriate. Sometimes restrictions are justified by individualized
          risk. Accountability after harm matters.
        </p>

        <p>But the registry has never been a complete prevention plan.</p>

        <p>
          It is especially weak against first-time detected offenses, hidden
          misconduct, trusted-access abuse, intra-familial harm, institutional
          abuse, and cases where the person causing harm has not yet been caught.
        </p>

        <p>That is not a technical flaw. It is a fundamental limitation.</p>

        <p>
          And yet lawmakers keep returning to the same political move: make the
          registry bigger, harsher, more expensive, more visible, more difficult
          to survive.
        </p>

        <p>
          That move is politically safe because it targets people who have
          already lost public sympathy.
        </p>

        <p>
          It allows officials to claim they are protecting children without
          confronting the harder question of whether their policies actually
          reach the places where children are most vulnerable.
        </p>

        <p>The Pritt allegations expose that gap.</p>

        <p>
          The question is not whether people who commit serious harm should be
          held accountable. They should.
        </p>

        <p>
          The question is whether public policy is serious about prevention, or
          whether it is satisfied with punishing the already-known while trusted
          systems keep producing new cases.
        </p>

        <Callout variant="policy" title="The prevention question" icon="🔎">
          <p>
            The issue is not whether serious harm should be punished. It should.
            The issue is whether registry politics prevents harm before it
            happens, especially when risk moves through trust, authority,
            secrecy, and institutional access.
          </p>
        </Callout>

        <BandHeader
          title="Safety Is Not Built by Punishing the Powerless"
          icon="🛡️"
        />

        <p>
          The easiest politics in America is punishing people everyone has
          already agreed not to defend.
        </p>

        <p>
          That is why registry expansion is so durable. It lets lawmakers perform
          certainty. It lets them say they are protecting children. It lets them
          avoid the messy work of prevention inside families, schools, churches,
          agencies, youth programs, and political institutions.
        </p>

        <p>
          But real safety is not built by endlessly tightening the screws on
          people with past convictions while ignoring the conditions that allow
          new harm to happen.
        </p>

        <p>Real safety asks where access exists.</p>

        <p>It asks who has authority.</p>

        <p>It asks which institutions are trusted too easily.</p>

        <p>It asks whether children have safe reporting pathways.</p>

        <p>
          It asks whether adults in power are being monitored before harm becomes
          a criminal case.
        </p>

        <p>
          It asks whether public officials apply the same accountability to
          themselves and their institutions that they impose on people with no
          political power.
        </p>

        <p>
          And it asks whether the policies we call “public safety” actually
          prevent harm, or merely perform outrage after the fact.
        </p>

        <p>
          The allegations against Elliott Pritt are serious. The legal process
          should determine the outcome.
        </p>

        <p>But the policy lesson is already visible.</p>

        <p>A registry can punish afterward.</p>

        <p>It can make life more expensive.</p>

        <p>It can make life more unstable.</p>

        <p>
          It can make moving forward harder for people who have already been
          convicted.
        </p>

        <p>What it cannot do is see trusted access coming.</p>

        <p>
          And when a lawmaker who helped make the registry harsher is accused of
          using trust, authority, secrecy, and institutional access to commit the
          very kind of harm registry politics claims to prevent, the public
          should not look away from the contradiction.
        </p>

        <p>That contradiction is the story.</p>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and next steps" />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            West Virginia Legislature —{" "}
            <a
              className={linkCls}
              href="https://www.wvlegislature.gov/bill_status/Bills_history.cfm?btype=bill&input=3164&sessiontype=RS&year=2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              HB 3164 bill history, sponsors, enactment, and effective date
            </a>
          </li>
          <li>
            West Virginia Legislature —{" "}
            <a
              className={linkCls}
              href="https://www.wvlegislature.gov/bill_status/bills_text.cfm?billdoc=hb3164+sub1+enr.htm&i=3164&sesstype=RS&yr=2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              enrolled text of HB 3164
            </a>
          </li>
          <li>
            West Virginia House of Delegates —{" "}
            <a
              className={linkCls}
              href="https://www.wvlegislature.gov/legisdocs/2025/rs/votes/house/00247.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              House roll call 247 for HB 3164
            </a>
          </li>
          <li>
            West Virginia Legislature —{" "}
            <a
              className={linkCls}
              href="https://www.wvlegislature.gov/bill_status/bills_text.cfm?billdoc=hb3161+intr.htm&i=3161&sesstype=RS&yr=2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              introduced text of HB 3161
            </a>
          </li>
          <li>
            United States District Court for the Southern District of West
            Virginia —{" "}
            <a
              className={linkCls}
              href="https://www.wvsd.uscourts.gov/content/usa-vs-david-elliott-pritt-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              USA v. David Elliott Pritt case listing
            </a>
          </li>
          <li>
            WCHS —{" "}
            <a
              className={linkCls}
              href="https://wchstv.com/news/local/west-virginia-delegate-charged-in-probe-of-sexual-conduct-with-a-minor"
              target="_blank"
              rel="noopener noreferrer"
            >
              reporting on the federal charge and complaint allegations
            </a>
          </li>
          <li>
            West Virginia Watch —{" "}
            <a
              className={linkCls}
              href="https://westvirginiawatch.com/2026/07/24/house-speaker-delivers-letter-to-morrisey-asks-for-special-session-to-vote-on-expelling-pritt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              reporting on the allegations and calls for resignation or
              expulsion
            </a>
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />

        <ul className="list-disc pl-6">
          <li>
            <Link
              className={linkCls}
              to="/resources/accountability-watch"
            >
              Accountability Watch
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/advocacy">
              Advocacy &amp; Reform
            </Link>
          </li>
          <li>
            <Link
              className={linkCls}
              to="/resources/legislative-tracker"
            >
              Legislative Tracker
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources">
              SOLAR’s practical resources
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}