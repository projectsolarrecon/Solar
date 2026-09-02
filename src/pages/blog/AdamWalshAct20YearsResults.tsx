import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  ContextualActionCard,
  Divider,
} from "../../components/solar";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "federal-lawmaker",
  primaryPositionId: "ineffective",
  secondaryPositionId: "one-size-fits-all",
  formatId: "email",
  headline: "Ask Congress to require outcome evidence after twenty years of SORNA",
  description:
    "DOJ’s anniversary retrospective shows how large the Adam Walsh Act machinery became. It does not show whether that machinery measurably reduced victimization, recidivism, or harm. After twenty years, Congress should require public reporting that separates implementation activity from public-safety outcomes.",
  recommendation: {
    audienceLabel:
      "Federal lawmakers responsible for DOJ oversight and public-safety funding",
    suggestion:
      "Ask Congress to require DOJ and the SMART Office to publish measurable outcome evidence for SORNA and public notification, including what works, for whom, compared with what, and at what cost.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Ask Congress to require DOJ and the SMART Office to publish a public, evidence-based review of twenty years of Adam Walsh Act / SORNA implementation that distinguishes activity metrics from outcome metrics; evaluates whether registration, public notification, interstate information sharing, and other mechanisms measurably reduce victimization or recidivism; and compares registry spending with alternative prevention investments.",
  personalContext:
    "I read SOLAR’s analysis of DOJ’s 20th-anniversary Adam Walsh Act retrospective. The retrospective documents a large national registry infrastructure, federal spending, public searches, and information exchange, but it does not show whether those systems measurably reduced sexual victimization, recidivism, or harm.",
  source: {
    title:
      "20 Years In, What Has the Adam Walsh Act Achieved? We Wish We Could Tell You.",
    path: "/blog/adam-walsh-act-20-years-results",
    type: "blog",
  },
};

export default function AdamWalshAct20YearsResults(): JSX.Element {
  return (
    <BlogLayout
      title="20 Years In, What Has the Adam Walsh Act Achieved? We Wish We Could Tell You."
      description="DOJ marked the Adam Walsh Act’s 20th anniversary by celebrating registry infrastructure, funding, searches, and information exchange. But after two decades, where is the measurable public-safety evidence?"
      keywords="Adam Walsh Act effectiveness, SORNA effectiveness, sex offender registry effectiveness, public notification evidence, SMART Office, DOJ Adam Walsh Act, registry public safety, sex offender registration and notification, registry outcome evidence"
      date="Sep 2, 2026"
      readTime="9 min read"
      badge="📝 BLOG"
      lede="Twenty years after the Adam Walsh Act, DOJ can show us the machinery. We are still waiting for them to show us the results."
    >
      <article className="prose prose-slate max-w-none">
        <BandHeader title="DOJ Celebrates the Machinery, Not the Results" />

        <p>We almost missed this one.</p>

        <p>
          On July 23, the Justice Department’s Office of Justice Programs published
          a{" "}
          <a
            className={linkCls}
            href="https://www.ojp.gov/topics/articles/recognizing-20th-anniversary-adam-walsh-act"
            target="_blank"
            rel="noopener noreferrer"
          >
            retrospective
          </a>{" "}
          recognizing the 20th anniversary of the Adam Walsh Child Protection and
          Safety Act, signed into law on July 27, 2006.
        </p>

        <p>It is now September.</p>

        <p>Maybe we simply weren't paying close enough attention.</p>

        <p>
          Then again, after reading DOJ's retrospective, we can understand why this
          particular anniversary might not inspire a victory lap.
        </p>

        <p>Twenty years is a long time.</p>

        <p>
          It is long enough to spend hundreds of millions of federal dollars. Long
          enough to construct a nationwide infrastructure for registration and
          notification. Long enough to connect jurisdictions, build databases,
          exchange hundreds of thousands of relocation notices and create a public
          website Americans now search roughly 10 million times every month.
        </p>

        <p>
          Twenty years should also be long enough to answer one fairly basic
          question:
        </p>

        <p>
          <strong>Did any of this make us safer?</strong>
        </p>

        <p>We read DOJ's anniversary retrospective looking for the answer.</p>

        <p>We wish we could tell you what we found.</p>

        <BandHeader title="Twenty Years of Machinery" />

        <p>DOJ has plenty of numbers.</p>

        <p>
          Over twenty years, the SMART Office says it awarded more than{" "}
          <strong>
            <a
              className={linkCls}
              href="https://www.ojp.gov/topics/articles/recognizing-20th-anniversary-adam-walsh-act"
              target="_blank"
              rel="noopener noreferrer"
            >
              $233 million
            </a>
          </strong>{" "}
          to states, tribes and territories to help implement the Sex Offender
          Registration and Notification Act, better known as SORNA.
        </p>

        <p>
          The federal Dru Sjodin National Sex Offender Public Website connects
          public registries across the country and now receives approximately{" "}
          <strong>10 million searches every month</strong>.
        </p>

        <p>
          The SORNA Exchange Portal has facilitated more than{" "}
          <strong>233,000 relocation notifications</strong> between jurisdictions.
        </p>

        <p>
          A federally supported registry system is used by 121 tribes and three
          territories.
        </p>

        <p>
          There are databases. Portals. Registry software. Interstate communication
          systems. International-travel reporting mechanisms. Public-search
          infrastructure. Compliance systems. Federal, state, territorial and tribal
          participation.
        </p>

        <p>The machinery is enormous.</p>

        <p>That much DOJ can document quite well.</p>

        <p>
          What DOJ's 20th-anniversary retrospective does not tell us is what all of
          that machinery has accomplished in the terms that should matter most.
        </p>

        <p>Did it reduce sexual offending?</p>

        <p>Did it reduce sexual recidivism?</p>

        <p>Did public notification prevent crimes?</p>

        <p>
          Did millions of public registry searches actually help people avoid
          victimization?
        </p>

        <p>
          Did interstate registration measurably improve investigations or prevent
          offenses?
        </p>

        <p>How many fewer victims are there because of the Adam Walsh Act?</p>

        <p>Which components produced measurable public-safety benefits?</p>

        <p>Which did not?</p>

        <p>Those aren't obscure academic questions.</p>

        <p>They are the reason the machinery exists.</p>

        <BandHeader title="What Did We Buy?" />

        <p>
          The Adam Walsh Act was not enacted because America needed an impressive
          collection of databases.
        </p>

        <p>
          Congress did not spend twenty years constructing a national
          registration-and-notification apparatus because exchanging records was
          itself the desired outcome.
        </p>

        <p>
          The law's stated purpose was to <strong>protect the public</strong> from
          sexual exploitation and violent crime.
        </p>

        <p>DOJ repeats that purpose in the anniversary retrospective.</p>

        <p>
          So the ultimate measure of the Adam Walsh Act cannot simply be the size of
          the system created under it.
        </p>

        <p>A search is not a prevented crime.</p>

        <p>A relocation notification is not a prevented crime.</p>

        <p>A completed registration is not a prevented crime.</p>

        <p>A compliance check is not a prevented crime.</p>

        <p>Each of those things might contribute to preventing crime.</p>

        <p>That possibility is precisely what should be measured.</p>

        <p>
          There is a fundamental difference between documenting what a government
          program <strong>does</strong> and demonstrating what it{" "}
          <strong>accomplishes</strong>.
        </p>

        <p>Imagine evaluating another public-health or public-safety intervention this way.</p>

        <p>
          Suppose a cancer-screening program marked its 20th anniversary by
          announcing how many clinics it had opened, how much money it had spent and
          how many screenings it had performed—but said nothing about cancers
          detected, mortality reduced or lives extended.
        </p>

        <p>Eventually someone would ask:</p>

        <p>
          <strong>Did the program work?</strong>
        </p>

        <p>
          Yet when it comes to sex-offense policy, there is a strange tendency to
          treat activity itself as evidence of effectiveness.
        </p>

        <p>The registry got bigger.</p>

        <p>The databases became better connected.</p>

        <p>More information became public.</p>

        <p>More people searched it.</p>

        <p>More records moved through the system.</p>

        <p>Fine.</p>

        <p>
          <strong>Did it make anyone safer?</strong>
        </p>

        <BandHeader title="Perhaps DOJ Knows Something We Don't" />

        <p>We should acknowledge one possibility.</p>

        <p>Maybe DOJ has compelling evidence of public-safety benefits that we simply haven't found.</p>

        <p>We hope it does.</p>

        <p>Seriously.</p>

        <p>
          The SOLAR Project has spent considerable time working through government
          reports, peer-reviewed research, state evaluations, recidivism studies,
          risk-assessment literature and evidence syntheses. We have built entire
          evidence guides specifically because claims about sex-offense policy are
          too important to rest on intuition, fear or advocacy talking
          points—including our own.
        </p>

        <p>
          And what we have found does not make DOJ's omission particularly
          reassuring.
        </p>

        <p>
          A 2023{" "}
          <a
            className={linkCls}
            href="https://link.springer.com/article/10.1007/s11292-021-09480-z"
            target="_blank"
            rel="noopener noreferrer"
          >
            meta-analysis by researchers Kristen Zgoba and Meghan Mitchell
          </a>{" "}
          synthesized <strong>18 studies involving 474,640 individuals and 42 effect sizes</strong>{" "}
          examining sex-offender registration and notification policies.
        </p>

        <p>Its pooled effect on recidivism was not statistically significant.</p>

        <p>Major state-level evaluations have produced similarly uncomfortable findings.</p>

        <p>
          <a
            className={linkCls}
            href="https://www.researchgate.net/publication/232505213_Does_a_Watched_Pot_Boil_A_Time-Series_Analysis_of_New_York_State%27s_Sex_Offender_Registration_and_Notification_Law"
            target="_blank"
            rel="noopener noreferrer"
          >
            Research in New York
          </a>{" "}
          did not support the conclusion that registration and notification reduced
          several measures of sexual offending.
        </p>

        <p>
          A major{" "}
          <a
            className={linkCls}
            href="https://nij.ojp.gov/library/publications/megans-law-assessing-practical-and-monetary-efficacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            National Institute of Justice-funded evaluation in New Jersey
          </a>{" "}
          found no demonstrated effect on overall sexual offenses, time to first
          rearrest, sexual reoffending or first-time sexual offending.
        </p>

        <p>
          <a
            className={linkCls}
            href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Research in South Carolina
          </a>{" "}
          likewise complicates the simple prevention story the public is generally
          encouraged to assume: it suggested a possible general-deterrence effect for
          first-time sex-crime arrests, while finding no effect on sexual recidivism
          risk.
        </p>

        <p>The evidence is not perfectly uniform. It rarely is.</p>

        <p>
          Different studies examine different laws, populations, time periods and
          outcomes. Registration is not identical to public notification. Targeted
          law-enforcement information sharing is not identical to publishing
          information to everyone on the internet. Different mechanisms deserve
          separate evaluation.
        </p>

        <p>
          There are findings that suggest benefits in particular contexts, and we
          should acknowledge them when the evidence supports them.
        </p>

        <p>
          But after looking at the broader research record, we have not discovered
          some overwhelming body of evidence demonstrating that broad registration
          and public-notification systems produce the dramatic public-safety benefits
          their extraordinary reach would seem to demand.
        </p>

        <p>Perhaps DOJ has.</p>

        <p>If so, we regret that they didn't share it.</p>

        <p>Because this would have been one hell of an opportunity.</p>

        <BandHeader title="The Evidence Gets More Awkward" />

        <p>
          The deeper problem is not simply that DOJ failed to provide an
          effectiveness number.
        </p>

        <p>
          It is that some of what we already know about sexual victimization raises
          obvious questions about how much public notification can realistically
          accomplish.
        </p>

        <p>Consider children.</p>

        <p>
          <a
            className={linkCls}
            href="https://bjs.ojp.gov/library/publications/sexual-assault-young-children-reported-law-enforcement-victim-incident-and"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bureau of Justice Statistics data on sexual assaults reported to law
            enforcement
          </a>{" "}
          found that <strong>93% of juvenile victims knew the person who assaulted them</strong>.
        </p>

        <p>And the younger the child, the more pronounced that pattern became.</p>

        <p>
          Among victims under age six, roughly{" "}
          <strong>96% were assaulted by a family member or acquaintance</strong>,
          while only about <strong>3% of offenders were strangers</strong>.
        </p>

        <p>That matters.</p>

        <p>
          Because public notification rests on a fairly intuitive prevention theory:
          give people information about known offenders living around them so they
          can use that information to protect themselves and their children.
        </p>

        <p>
          But when nearly all of the youngest victims are harmed by people already
          inside their world—relatives, acquaintances, trusted adults and others they
          know—the obvious question becomes:
        </p>

        <p>
          <strong>How much additional protection has public notification actually provided?</strong>
        </p>

        <p>
          Has publishing names, photographs, addresses and criminal histories
          measurably reduced sexual abuse of young children?
        </p>

        <p>
          Has it measurably reduced abuse committed by relatives, acquaintances and
          trusted adults?
        </p>

        <p>
          Has public access to registry information produced a reduction in child
          victimization that would not otherwise have occurred?
        </p>

        <p>Maybe it has.</p>

        <p>
          If DOJ possesses evidence showing that twenty years of public notification
          measurably reduced sexual abuse of children despite the overwhelmingly
          known-offender nature of these crimes, that would be extraordinary
          evidence.
        </p>

        <p>We would expect them to be screaming it from the rooftops.</p>

        <p>
          <strong>“Twenty years of the Adam Walsh Act made children measurably safer. Here is how much.”</strong>
        </p>

        <p>Put that in the anniversary retrospective.</p>

        <p>Put it in the headline.</p>

        <p>Lead with it.</p>

        <p>That would be an accomplishment worth celebrating.</p>

        <p>
          Instead, we are told that Americans search the national registry roughly
          10 million times every month.
        </p>

        <p>
          Those searches may accomplish something. Many undoubtedly involve parents
          trying to protect their children.
        </p>

        <p>
          But the number of times people searched a website tells us nothing about
          whether those searches actually prevented sexual abuse.
        </p>

        <p>
          And when the government's own data have long shown that juvenile
          victims—and especially the youngest children—are overwhelmingly harmed by
          people they already know, that distinction becomes impossible to wave
          away.
        </p>

        <p>The question is not whether Americans use the registry.</p>

        <p>Clearly they do.</p>

        <p>
          The question is whether <strong>using it has made them safer</strong>.
        </p>

        <p>Twenty years later, DOJ's anniversary retrospective still doesn't tell us.</p>

        <BandHeader title="This Isn't an Argument That Nothing Works" />

        <p>There is an important distinction here.</p>

        <p>The Adam Walsh Act is not one intervention.</p>

        <p>
          An interstate information-sharing system that alerts law enforcement when
          someone moves between states is not the same thing as publishing someone's
          home address on a website for the entire world to search.
        </p>

        <p>A police database is not public notification.</p>

        <p>
          Targeted monitoring of an empirically high-risk individual is not
          equivalent to imposing the same basic apparatus on people whose actual
          risk differs dramatically.
        </p>

        <p>
          International-travel information raises different questions from domestic
          public disclosure.
        </p>

        <p>We should evaluate those mechanisms separately.</p>

        <p>
          If interstate information sharing demonstrably helps police solve sexual
          offenses, that matters.
        </p>

        <p>
          If a particular notification practice demonstrably prevents victimization,
          that matters.
        </p>

        <p>
          If some forms of targeted monitoring improve outcomes among genuinely
          high-risk populations, that matters.
        </p>

        <p>
          SOLAR has no interest in throwing away something that actually protects
          people simply because it happens to be attached to a policy structure we
          criticize.
        </p>

        <p>
          <strong>Show us what works.</strong>
        </p>

        <p>Then show us how well it works.</p>

        <p>Show us against what comparison.</p>

        <p>Show us for which populations.</p>

        <p>Show us at what cost.</p>

        <p>
          And if another part of the machinery doesn't work, stop asking the
          existence of the useful part to justify everything attached to it.
        </p>

        <p>That is evidence-based public safety.</p>

        <BandHeader title="DOJ Once Understood the Assignment" />

        <p>There is another reason the anniversary retrospective feels so strange.</p>

        <p>The SMART Office itself has previously recognized the problem.</p>

        <p>
          In its{" "}
          <a
            className={linkCls}
            href="https://smart.ojp.gov/program/somapi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sex Offender Management Assessment and Planning Initiative
          </a>
          , SMART acknowledged that numerous sex-offender-specific laws, policies and
          programs had been implemented across the country, most without the support
          of research.{" "}
          <a
            className={linkCls}
            href="https://www.smart.ojp.gov/somapi/chapter-8-sex-offender-management-strategies"
            target="_blank"
            rel="noopener noreferrer"
          >
            In another chapter
          </a>
          , SMART described the same basic concern even more plainly: laws and
          policies designed to combat sexual offending are often introduced or
          enacted without empirical support, even though public safety and the
          efficient use of public resources would be enhanced if sex-offender
          management strategies were based on evidence of effectiveness.
        </p>

        <p>Read that again.</p>

        <p>
          The federal office responsible for sex-offender registration and
          notification has already recognized that this policy field is crowded with
          laws adopted without adequate scientific evidence that they work.
        </p>

        <p>
          And twenty years after the Adam Walsh Act, DOJ’s anniversary retrospective
          celebrates the rapid expansion of that machinery without showing the
          measurable public-safety outcomes that would answer the concern SMART
          itself identified.
        </p>

        <p>That is not a small omission.</p>

        <p>It is the omission.</p>

        <p>
          Public policy should not become self-validating simply because it has
          existed for a long time. A system does not prove its worth by getting
          bigger. A public-safety program does not become evidence-based because more
          jurisdictions participate in it, more records move through it, or more
          people search it.
        </p>

        <p>Yet DOJ’s anniversary accounting largely gives us measures of implementation.</p>

        <p>Money spent.</p>

        <p>Systems operating.</p>

        <p>Jurisdictions participating.</p>

        <p>Records exchanged.</p>

        <p>Searches performed.</p>

        <p>Infrastructure expanded.</p>

        <p>Those figures establish that government has been very busy.</p>

        <p>They do not establish that the policy has been effective.</p>

        <p>And the awkward part is that DOJ already knows the difference.</p>

        <BandHeader title="And Then There Is the Money" />

        <p>
          The SMART Office's <strong>$233 million in implementation grants</strong>{" "}
          is only part of what American governments have devoted to registration and
          notification over the last two decades.
        </p>

        <p>States maintain registries.</p>

        <p>Police conduct compliance checks.</p>

        <p>Government employees process registrations and address changes.</p>

        <p>Courts hear registration cases.</p>

        <p>Prosecutors enforce registration laws.</p>

        <p>Technology systems are built and maintained.</p>

        <p>Public websites are operated.</p>

        <p>Investigative resources are devoted to tracking compliance.</p>

        <p>All of that has a cost.</p>

        <p>And public-safety resources are not infinite.</p>

        <p>Every dollar devoted to one intervention is a dollar that cannot be spent somewhere else.</p>

        <p>Which raises another question DOJ's retrospective doesn't answer:</p>

        <p>
          <strong>What did we buy for the money?</strong>
        </p>

        <p>And compared with what?</p>

        <p>
          What would comparable resources accomplish if directed toward
          investigating unsolved sexual offenses?
        </p>

        <p>Victim services?</p>

        <p>Evidence-based prevention programs?</p>

        <p>Treatment?</p>

        <p>Internet Crimes Against Children investigations?</p>

        <p>Child-protection agencies?</p>

        <p>Programs designed to prevent first-time offending?</p>

        <p>Targeted supervision based on demonstrated risk?</p>

        <p>Perhaps registration and notification outperform those alternatives.</p>

        <p>If they do, policymakers should know that.</p>

        <p>Taxpayers should know that.</p>

        <p>Victims should know that.</p>

        <p>And people subjected to these laws certainly deserve to know that.</p>

        <p>
          But "$233 million spent" cannot be evidence that spending $233 million was
          a good investment.
        </p>

        <p>That is the question an evaluation is supposed to answer.</p>

        <BandHeader title="Maybe They Know. We Hope They Do." />

        <p>We want to be careful about what DOJ's anniversary retrospective proves.</p>

        <p>
          Its failure to provide evidence of reduced offending does{" "}
          <strong>not</strong> prove that the Adam Walsh Act has prevented zero
          crimes.
        </p>

        <p>
          Its failure to quantify reductions in recidivism does{" "}
          <strong>not</strong> prove that no component has reduced recidivism.
        </p>

        <p>
          Its failure to demonstrate benefits from public notification does{" "}
          <strong>not</strong> establish that nobody has ever benefited from
          accessing a public registry.
        </p>

        <p>Absence from an anniversary article is not proof of absence in the world.</p>

        <p>Perhaps DOJ possesses better evidence than we have found.</p>

        <p>
          Perhaps somewhere inside the federal government is a persuasive analysis
          showing that twenty years of SORNA produced substantial reductions in
          victimization attributable to the law.
        </p>

        <p>
          Perhaps the registry searches, relocation notices, public disclosures and
          other mechanisms DOJ highlighted can be connected to measurable safety
          outcomes.
        </p>

        <p>We would genuinely welcome that evidence.</p>

        <p>In fact, we wish DOJ had shown it to us.</p>

        <p>Because the alternative explanation is considerably less comfortable:</p>

        <p>
          <strong>
            Maybe the reason DOJ celebrated the machinery is that the machinery is
            what it can confidently measure.
          </strong>
        </p>

        <p>
          And the published evidence we have been able to find gives us reason to
          take that possibility seriously.
        </p>

        <BandHeader title="This Was Their Moment" />

        <p>That is ultimately why this omission matters.</p>

        <p>This was not a technical bulletin.</p>

        <p>It was not a compliance manual.</p>

        <p>It was not a grant announcement.</p>

        <p>
          It was the <strong>20th anniversary of the Adam Walsh Act</strong>.
        </p>

        <p>DOJ chose the occasion.</p>

        <p>DOJ chose the accomplishments it wanted to highlight.</p>

        <p>It had two decades of experience, research and data available to draw upon.</p>

        <p>If the federal government could confidently say:</p>

        <p>
          <strong>The Adam Walsh Act reduced sexual recidivism by this much.</strong>
        </p>

        <p>Put it in bold.</p>

        <p>If it could say:</p>

        <p>
          <strong>Public notification prevented this measurable amount of sexual offending.</strong>
        </p>

        <p>Lead with it.</p>

        <p>If it could demonstrate:</p>

        <p>
          <strong>
            This particular SORNA mechanism makes children safer, and here is the
            evidence showing how much safer.
          </strong>
        </p>

        <p>We would have something genuinely worth celebrating.</p>

        <p>Instead, DOJ tells us how large the system became.</p>

        <p>How much money was distributed.</p>

        <p>How many jurisdictions participate.</p>

        <p>How many records were exchanged.</p>

        <p>How many times Americans searched the registry.</p>

        <p>
          And then, twenty years after Congress created this vast national
          experiment in registration and public notification, the outcome at the
          center of the entire enterprise remains conspicuously missing.
        </p>

        <p>Maybe the Adam Walsh Act has prevented substantial numbers of crimes.</p>

        <p>
          Maybe particular components have reduced recidivism, helped solve offenses
          or protected people from victimization.
        </p>

        <p>Maybe DOJ has evidence we haven't seen.</p>

        <p>
          <strong>We hope so.</strong>
        </p>

        <p>But this was their moment to show us.</p>

        <p>
          And after twenty years, the fact that DOJ apparently could not—or chose
          not to—confidently celebrate a measurable public-safety outcome should tell
          us something.
        </p>

        <p>Not everything.</p>

        <p>But something.</p>

        <p>
          Because Americans should not have to infer that a public-safety policy
          works from the size of the apparatus built to administer it.
        </p>

        <p>
          <strong>Twenty years later, DOJ can show us the machinery.</strong>
        </p>

        <p>
          <strong>We are still waiting for them to show us the results.</strong>
        </p>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and next steps" />

        <BandHeader title="Data Sources" />

        <ul className="list-disc pl-6">
          <li>
            <a
              className={linkCls}
              href="https://www.ojp.gov/topics/articles/recognizing-20th-anniversary-adam-walsh-act"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOJ/OJP’s 20th-anniversary retrospective of the Adam Walsh Act
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://smart.ojp.gov/program/somapi"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMART Office’s SOMAPI executive summary
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.smart.ojp.gov/somapi/chapter-8-sex-offender-management-strategies"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOMAPI Chapter 8 on sex-offender management strategies
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://link.springer.com/article/10.1007/s11292-021-09480-z"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zgoba and Mitchell’s meta-analysis of sex-offender registration and
              notification research
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.researchgate.net/publication/232505213_Does_a_Watched_Pot_Boil_A_Time-Series_Analysis_of_New_York_State%27s_Sex_Offender_Registration_and_Notification_Law"
              target="_blank"
              rel="noopener noreferrer"
            >
              New York State sex-offender registration and notification evaluation
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://nij.ojp.gov/library/publications/megans-law-assessing-practical-and-monetary-efficacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIJ’s New Jersey Megan’s Law evaluation
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://nij.ojp.gov/topics/articles/sex-offender-registration-and-notification-research-finds-limited-effects-new"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIJ’s summary of New Jersey research finding limited effects
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              South Carolina SORN evaluation
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://nij.ojp.gov/library/publications/effects-south-carolinas-sex-offender-registration-and-notification-policy-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIJ summary of South Carolina adult recidivism findings
            </a>
          </li>
          <li>
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/library/publications/sexual-assault-young-children-reported-law-enforcement-victim-incident-and"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bureau of Justice Statistics report on sexual assault of young
              children reported to law enforcement
            </a>
          </li>
        </ul>

        <BandHeader title="Related Reading" />

        <ul className="list-disc pl-6">
          <li>
            <Link
              className={linkCls}
              to="/blog/the-registry-is-not-a-prevention-plan"
            >
              The Registry Is Not a Prevention Plan
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/what-good-is-the-registry">
              What Good Is the Registry?
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources">
              SOLAR Registry Effectiveness Evidence Guide
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}