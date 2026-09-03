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
          On July 23, the Justice Department’s Office of Justice Programs published a{" "}
          <a className={linkCls} href="https://www.ojp.gov/topics/articles/recognizing-20th-anniversary-adam-walsh-act" target="_blank" rel="noopener noreferrer">
            retrospective
          </a>{" "}
          recognizing the 20th anniversary of the Adam Walsh Child Protection and Safety Act, signed into law on July 27, 2006.
        </p>

        <p>It is now September.</p>
        <p>Maybe we simply weren't paying close enough attention.</p>
        <p>Then again, after reading DOJ's retrospective, we can understand why this particular anniversary might not inspire a victory lap.</p>

        <p>Twenty years is a long time.</p>
        <p>
          It is long enough to spend hundreds of millions of federal dollars. Long enough to construct a nationwide infrastructure for registration and notification. Long enough to connect jurisdictions, build databases, exchange hundreds of thousands of relocation notices and create a public website Americans now search roughly 10 million times every month.
        </p>

        <p>Twenty years should also be long enough to answer one fairly basic question:</p>

        <PullQuote>
          <strong>Did any of this make us safer?</strong>
        </PullQuote>

        <p>We read DOJ's anniversary retrospective looking for the answer.</p>
        <p>We wish we could tell you what we found.</p>

        <BandHeader title="Twenty Years of Machinery" />

        <p>DOJ has plenty of numbers.</p>

        <Callout variant="neutral" title="What DOJ Can Count">
          <ul className="my-0">
            <li><strong>$233+ million</strong> in SMART Office implementation grants.</li>
            <li><strong>About 10 million</strong> searches of the national public registry every month.</li>
            <li><strong>233,000+</strong> relocation notifications exchanged between jurisdictions.</li>
            <li><strong>121 tribes and three territories</strong> using federally supported registry infrastructure.</li>
          </ul>
        </Callout>

        <p>
          There are databases. Portals. Registry software. Interstate communication systems. International-travel reporting mechanisms. Public-search infrastructure. Compliance systems. Federal, state, territorial and tribal participation.
        </p>

        <p>The machinery is enormous. That much DOJ can document quite well.</p>

        <p>What DOJ's 20th-anniversary retrospective does not tell us is what all of that machinery has accomplished in the terms that should matter most.</p>

        <p><strong>The numbers we went looking for:</strong></p>
        <ul>
          <li>Did it reduce sexual offending?</li>
          <li>Did it reduce sexual recidivism?</li>
          <li>Did public notification prevent crimes?</li>
          <li>Did millions of public registry searches actually help people avoid victimization?</li>
          <li>Did interstate registration measurably improve investigations or prevent offenses?</li>
          <li>How many fewer victims are there because of the Adam Walsh Act?</li>
          <li>Which components produced measurable public-safety benefits—and which did not?</li>
        </ul>

        <p>Those aren't obscure academic questions. They are the reason the machinery exists.</p>

        <BandHeader title="What Did We Buy?" />

        <p>The Adam Walsh Act was not enacted because America needed an impressive collection of databases.</p>
        <p>Congress did not spend twenty years constructing a national registration-and-notification apparatus because exchanging records was itself the desired outcome.</p>
        <p>The law's stated purpose was to <strong>protect the public</strong> from sexual exploitation and violent crime. DOJ repeats that purpose in the anniversary retrospective.</p>
        <p>So the ultimate measure of the Adam Walsh Act cannot simply be the size of the system created under it.</p>

        <Callout variant="research" title="Outputs Are Not Outcomes">
          <ul className="my-0">
            <li>A search is not a prevented crime.</li>
            <li>A relocation notification is not a prevented crime.</li>
            <li>A completed registration is not a prevented crime.</li>
            <li>A compliance check is not a prevented crime.</li>
          </ul>
        </Callout>

        <p>Each of those things might contribute to preventing crime. That possibility is precisely what should be measured.</p>

        <PullQuote>
          There is a fundamental difference between documenting what a government program <strong>does</strong> and demonstrating what it <strong>accomplishes</strong>.
        </PullQuote>

        <p>Imagine evaluating another public-health or public-safety intervention this way.</p>
        <p>
          Suppose a cancer-screening program marked its 20th anniversary by announcing how many clinics it had opened, how much money it had spent and how many screenings it had performed—but said nothing about cancers detected, mortality reduced or lives extended.
        </p>
        <p>Eventually someone would ask: <strong>Did the program work?</strong></p>
        <p>Yet when it comes to sex-offense policy, there is a strange tendency to treat activity itself as evidence of effectiveness.</p>

        <ul>
          <li>The registry got bigger.</li>
          <li>The databases became better connected.</li>
          <li>More information became public.</li>
          <li>More people searched it.</li>
          <li>More records moved through the system.</li>
        </ul>

        <p><strong>Fine. Did it make anyone safer?</strong></p>

        <BandHeader title="Perhaps DOJ Knows Something We Don't" />

        <p>We should acknowledge one possibility.</p>
        <p>Maybe DOJ has compelling evidence of public-safety benefits that we simply haven't found.</p>
        <p>We hope it does. Seriously.</p>
        <p>
          The SOLAR Project has spent considerable time working through government reports, peer-reviewed research, state evaluations, recidivism studies, risk-assessment literature and evidence syntheses. We have built entire evidence guides specifically because claims about sex-offense policy are too important to rest on intuition, fear or advocacy talking points—including our own.
        </p>
        <p>And what we have found does not make DOJ's omission particularly reassuring.</p>

        <Callout variant="research" title="What the Broader Evidence Found">
          <p className="my-0">
            A 2023{" "}
            <a className={linkCls} href="https://link.springer.com/article/10.1007/s11292-021-09480-z" target="_blank" rel="noopener noreferrer">
              meta-analysis by Kristen Zgoba and Meghan Mitchell
            </a>{" "}
            synthesized <strong>18 studies involving 474,640 individuals and 42 effect sizes</strong>. Its pooled effect on recidivism was not statistically significant.
          </p>
        </Callout>

        <p>Major state-level evaluations have produced similarly uncomfortable findings.</p>
        <p>
          <a className={linkCls} href="https://www.researchgate.net/publication/232505213_Does_a_Watched_Pot_Boil_A_Time-Series_Analysis_of_New_York_State%27s_Sex_Offender_Registration_and_Notification_Law" target="_blank" rel="noopener noreferrer">Research in New York</a>{" "}
          did not support the conclusion that registration and notification reduced several measures of sexual offending.
        </p>
        <p>
          A major{" "}
          <a className={linkCls} href="https://nij.ojp.gov/library/publications/megans-law-assessing-practical-and-monetary-efficacy" target="_blank" rel="noopener noreferrer">National Institute of Justice-funded evaluation in New Jersey</a>{" "}
          found no demonstrated effect on overall sexual offenses, time to first rearrest, sexual reoffending or first-time sexual offending.
        </p>
        <p>
          <a className={linkCls} href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies-0" target="_blank" rel="noopener noreferrer">Research in South Carolina</a>{" "}
          likewise complicates the simple prevention story the public is generally encouraged to assume: it suggested a possible general-deterrence effect for first-time sex-crime arrests, while finding no effect on sexual recidivism risk.
        </p>
        <p>The evidence is not perfectly uniform. It rarely is.</p>
        <p>
          Different studies examine different laws, populations, time periods and outcomes. Registration is not identical to public notification. Targeted law-enforcement information sharing is not identical to publishing information to everyone on the internet. Different mechanisms deserve separate evaluation.
        </p>
        <p>There are findings that suggest benefits in particular contexts, and we should acknowledge them when the evidence supports them.</p>
        <p>
          But after looking at the broader research record, we have not discovered some overwhelming body of evidence demonstrating that broad registration and public-notification systems produce the dramatic public-safety benefits their extraordinary reach would seem to demand.
        </p>
        <p>Perhaps DOJ has.</p>
        <p>If so, we regret that they didn't share it.</p>
        <p>Because this would have been one hell of an opportunity.</p>

        <BandHeader title="The Evidence Gets More Awkward" />

        <p>The deeper problem is not simply that DOJ failed to provide an effectiveness number.</p>
        <p>It is that some of what we already know about sexual victimization raises obvious questions about how much public notification can realistically accomplish.</p>
        <p>Consider children.</p>

        <Callout variant="warning" title="The Prevention Problem">
          <p>
            <a className={linkCls} href="https://bjs.ojp.gov/library/publications/sexual-assault-young-children-reported-law-enforcement-victim-incident-and" target="_blank" rel="noopener noreferrer">Bureau of Justice Statistics data</a>{" "}
            found that <strong>93% of juvenile victims knew the person who assaulted them</strong>.
          </p>
          <p className="mb-0">
            Among victims under age six, roughly <strong>96% were assaulted by a family member or acquaintance</strong>, while only about <strong>3% of offenders were strangers</strong>.
          </p>
        </Callout>

        <p>And the younger the child, the more pronounced that pattern became.</p>
        <p>That matters.</p>
        <p>
          Because public notification rests on a fairly intuitive prevention theory: give people information about known offenders living around them so they can use that information to protect themselves and their children.
        </p>
        <p>
          But when nearly all of the youngest victims are harmed by people already inside their world—relatives, acquaintances, trusted adults and others they know—the obvious question becomes:
        </p>

        <PullQuote>
          <strong>How much additional protection has public notification actually provided?</strong>
        </PullQuote>

        <ul>
          <li>Has publishing names, photographs, addresses and criminal histories measurably reduced sexual abuse of young children?</li>
          <li>Has it measurably reduced abuse committed by relatives, acquaintances and trusted adults?</li>
          <li>Has public access to registry information produced a reduction in child victimization that would not otherwise have occurred?</li>
        </ul>

        <p>Maybe it has.</p>
        <p>If DOJ possesses evidence showing that twenty years of public notification measurably reduced sexual abuse of children despite the overwhelmingly known-offender nature of these crimes, that would be extraordinary evidence.</p>
        <p>We would expect them to be screaming it from the rooftops.</p>

        <PullQuote>
          <strong>“Twenty years of the Adam Walsh Act made children measurably safer. Here is how much.”</strong>
        </PullQuote>

        <p>Put that in the anniversary retrospective. Put it in the headline. Lead with it.</p>
        <p>That would be an accomplishment worth celebrating.</p>
        <p>Instead, we are told that Americans search the national registry roughly 10 million times every month.</p>
        <p>Those searches may accomplish something. Many undoubtedly involve parents trying to protect their children.</p>
        <p>But the number of times people searched a website tells us nothing about whether those searches actually prevented sexual abuse.</p>
        <p>
          And when the government's own data have long shown that juvenile victims—and especially the youngest children—are overwhelmingly harmed by people they already know, that distinction becomes impossible to wave away.
        </p>
        <p>The question is not whether Americans use the registry. Clearly they do.</p>
        <p>The question is whether <strong>using it has made them safer</strong>.</p>
        <p>Twenty years later, DOJ's anniversary retrospective still doesn't tell us.</p>

        <BandHeader title="This Isn't an Argument That Nothing Works" />

        <p>There is an important distinction here. The Adam Walsh Act is not one intervention.</p>
        <p>An interstate information-sharing system that alerts law enforcement when someone moves between states is not the same thing as publishing someone's home address on a website for the entire world to search.</p>
        <p>A police database is not public notification.</p>
        <p>Targeted monitoring of an empirically high-risk individual is not equivalent to imposing the same basic apparatus on people whose actual risk differs dramatically.</p>
        <p>International-travel information raises different questions from domestic public disclosure.</p>
        <p>We should evaluate those mechanisms separately.</p>
        <p>If interstate information sharing demonstrably helps police solve sexual offenses, that matters.</p>
        <p>If a particular notification practice demonstrably prevents victimization, that matters.</p>
        <p>If some forms of targeted monitoring improve outcomes among genuinely high-risk populations, that matters.</p>
        <p>SOLAR has no interest in throwing away something that actually protects people simply because it happens to be attached to a policy structure we criticize.</p>

        <p><strong>Show us:</strong></p>
        <ul>
          <li>what works;</li>
          <li>how well;</li>
          <li>for whom;</li>
          <li>compared with what;</li>
          <li>at what cost.</li>
        </ul>

        <p>And if another part of the machinery doesn't work, stop asking the existence of the useful part to justify everything attached to it.</p>
        <p>That is evidence-based public safety.</p>

        <BandHeader title="DOJ Once Understood the Assignment" />

        <p>There is another reason the anniversary retrospective feels so strange.</p>
        <p>The SMART Office itself has previously recognized the problem.</p>

        <Callout variant="policy" title="SMART's Own Standard">
          <p className="my-0">
            In its{" "}
            <a className={linkCls} href="https://smart.ojp.gov/program/somapi" target="_blank" rel="noopener noreferrer">Sex Offender Management Assessment and Planning Initiative</a>, SMART acknowledged that numerous sex-offender-specific laws, policies and programs had been implemented across the country, most without the support of research. In{" "}
            <a className={linkCls} href="https://www.smart.ojp.gov/somapi/chapter-8-sex-offender-management-strategies" target="_blank" rel="noopener noreferrer">another chapter</a>, SMART described the same concern even more plainly: public safety and the efficient use of public resources would be enhanced if sex-offender management strategies were based on evidence of effectiveness.
          </p>
        </Callout>

        <p><strong>Read that again.</strong></p>
        <p>The federal office responsible for sex-offender registration and notification has already recognized that this policy field is crowded with laws adopted without adequate scientific evidence that they work.</p>
        <p>And twenty years after the Adam Walsh Act, DOJ’s anniversary retrospective celebrates the rapid expansion of that machinery without showing the measurable public-safety outcomes that would answer the concern SMART itself identified.</p>

        <PullQuote>
          <strong>That is not a small omission. It is the omission.</strong>
        </PullQuote>

        <p>Public policy should not become self-validating simply because it has existed for a long time. A system does not prove its worth by getting bigger. A public-safety program does not become evidence-based because more jurisdictions participate in it, more records move through it, or more people search it.</p>
        <p>Yet DOJ’s anniversary accounting largely gives us measures of implementation.</p>

        <ul>
          <li>Money spent.</li>
          <li>Systems operating.</li>
          <li>Jurisdictions participating.</li>
          <li>Records exchanged.</li>
          <li>Searches performed.</li>
          <li>Infrastructure expanded.</li>
        </ul>

        <p><strong>Those figures establish that government has been very busy. They do not establish that the policy has been effective.</strong></p>
        <p>And the awkward part is that DOJ already knows the difference.</p>

        <BandHeader title="And Then There Is the Money" />

        <p>The SMART Office's <strong>$233 million in implementation grants</strong> is only part of what American governments have devoted to registration and notification over the last two decades.</p>

        <p><strong>What the system consumes:</strong></p>
        <ul>
          <li>State registry administration.</li>
          <li>Police compliance checks.</li>
          <li>Registration and address-change processing.</li>
          <li>Court and prosecution resources.</li>
          <li>Technology systems and public websites.</li>
          <li>Investigative resources devoted to tracking compliance.</li>
        </ul>

        <p>All of that has a cost. And public-safety resources are not infinite.</p>
        <p>Every dollar devoted to one intervention is a dollar that cannot be spent somewhere else.</p>

        <p><strong>What did we buy for the money?</strong></p>
        <p>And compared with what?</p>

        <p><strong>What else those resources could support:</strong></p>
        <ul>
          <li>Investigating unsolved sexual offenses.</li>
          <li>Victim services.</li>
          <li>Evidence-based prevention programs.</li>
          <li>Treatment.</li>
          <li>Internet Crimes Against Children investigations.</li>
          <li>Child-protection agencies.</li>
          <li>Programs designed to prevent first-time offending.</li>
          <li>Targeted supervision based on demonstrated risk.</li>
        </ul>

        <p>Perhaps registration and notification outperform those alternatives.</p>
        <p>If they do, policymakers should know that. Taxpayers should know that. Victims should know that. And people subjected to these laws certainly deserve to know that.</p>
        <p>But "$233 million spent" cannot be evidence that spending $233 million was a good investment.</p>
        <p>That is the question an evaluation is supposed to answer.</p>

        <BandHeader title="Maybe They Know. We Hope They Do." />

        <p>We want to be careful about what DOJ's anniversary retrospective proves.</p>

        <Callout variant="neutral" title="What This Does—and Does Not—Prove">
          <ul className="my-0">
            <li>It does <strong>not</strong> prove that the Adam Walsh Act has prevented zero crimes.</li>
            <li>It does <strong>not</strong> prove that no component has reduced recidivism.</li>
            <li>It does <strong>not</strong> establish that nobody has ever benefited from accessing a public registry.</li>
            <li>It <strong>does</strong> make the absence of demonstrated outcomes in DOJ's own anniversary retrospective worth scrutinizing.</li>
          </ul>
        </Callout>

        <p>Absence from an anniversary article is not proof of absence in the world.</p>
        <p>Perhaps DOJ possesses better evidence than we have found.</p>
        <p>Perhaps somewhere inside the federal government is a persuasive analysis showing that twenty years of SORNA produced substantial reductions in victimization attributable to the law.</p>
        <p>Perhaps the registry searches, relocation notices, public disclosures and other mechanisms DOJ highlighted can be connected to measurable safety outcomes.</p>
        <p>We would genuinely welcome that evidence. In fact, we wish DOJ had shown it to us.</p>
        <p>Because the alternative explanation is considerably less comfortable:</p>

        <PullQuote>
          <strong>Maybe the reason DOJ celebrated the machinery is that the machinery is what it can confidently measure.</strong>
        </PullQuote>

        <p>And the published evidence we have been able to find gives us reason to take that possibility seriously.</p>

        <BandHeader title="This Was Their Moment" />

        <p>That is ultimately why this omission matters.</p>
        <p>This was not a technical bulletin. It was not a compliance manual. It was not a grant announcement.</p>
        <p>It was the <strong>20th anniversary of the Adam Walsh Act</strong>.</p>
        <p>DOJ chose the occasion. DOJ chose the accomplishments it wanted to highlight. It had two decades of experience, research and data available to draw upon.</p>
        <p>If the federal government could confidently say:</p>

        <ul>
          <li><strong>The Adam Walsh Act reduced sexual recidivism by this much.</strong></li>
          <li><strong>Public notification prevented this measurable amount of sexual offending.</strong></li>
          <li><strong>This particular SORNA mechanism makes children safer, and here is the evidence showing how much safer.</strong></li>
        </ul>

        <p>Put it in bold. Lead with it. We would have something genuinely worth celebrating.</p>
        <p>Instead, DOJ tells us how large the system became, how much money was distributed, how many jurisdictions participate, how many records were exchanged, and how many times Americans searched the registry.</p>
        <p>And then, twenty years after Congress created this vast national experiment in registration and public notification, the outcome at the center of the entire enterprise remains conspicuously missing.</p>
        <p>Maybe the Adam Walsh Act has prevented substantial numbers of crimes.</p>
        <p>Maybe particular components have reduced recidivism, helped solve offenses or protected people from victimization.</p>
        <p>Maybe DOJ has evidence we haven't seen.</p>
        <p><strong>We hope so.</strong></p>
        <p>But this was their moment to show us.</p>
        <p>And after twenty years, the fact that DOJ apparently could not—or chose not to—confidently celebrate a measurable public-safety outcome should tell us something.</p>
        <p>Not everything. But something.</p>
        <p>Because Americans should not have to infer that a public-safety policy works from the size of the apparatus built to administer it.</p>

        <p><strong>Twenty years later, DOJ can show us the machinery.</strong></p>
        <p><strong>We are still waiting for them to show us the results.</strong></p>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and next steps" />

        <BandHeader title="Data Sources" />

        <ul className="list-disc pl-6">
          <li>
            <a className={linkCls} href="https://www.ojp.gov/topics/articles/recognizing-20th-anniversary-adam-walsh-act" target="_blank" rel="noopener noreferrer">
              DOJ/OJP’s 20th-anniversary retrospective of the Adam Walsh Act
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://smart.ojp.gov/program/somapi" target="_blank" rel="noopener noreferrer">
              SMART Office’s SOMAPI executive summary
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.smart.ojp.gov/somapi/chapter-8-sex-offender-management-strategies" target="_blank" rel="noopener noreferrer">
              SMART SOMAPI chapter on sex-offender management strategies
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://link.springer.com/article/10.1007/s11292-021-09480-z" target="_blank" rel="noopener noreferrer">
              Zgoba & Mitchell meta-analysis of SORN effectiveness
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://nij.ojp.gov/library/publications/megans-law-assessing-practical-and-monetary-efficacy" target="_blank" rel="noopener noreferrer">
              NIJ-funded New Jersey Megan’s Law evaluation
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies-0" target="_blank" rel="noopener noreferrer">
              NIJ South Carolina SORN evaluation
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://bjs.ojp.gov/library/publications/sexual-assault-young-children-reported-law-enforcement-victim-incident-and" target="_blank" rel="noopener noreferrer">
              BJS: Sexual Assault of Young Children as Reported to Law Enforcement
            </a>
          </li>
        </ul>

        <p>
          SOLAR readers can also review our{" "}
          <Link className={linkCls} to="/resources/registry-effectiveness-evidence-guide">Registry Effectiveness Evidence Guide</Link>,{" "}
          <Link className={linkCls} to="/resources/supported-claims-guide">Supported Claims Guide</Link>, and related evidence resources for the underlying research record.
        </p>
      </article>
    </BlogLayout>
  );
}
