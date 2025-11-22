import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
  ShareBar
} from "../../components/solar";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function ChildrenWeDontProtectPart1(): JSX.Element {
  return (
    <BlogLayout
      title="THE CHILDREN WE DON’T PROTECT"
      description="How Los Angeles defunded its anti-trafficking unit while expanding a registry that saves no one."
      keywords="Los Angeles, trafficking, registry, LAPD, foster care, Figueroa Street"
      date="Nov 22, 2025"
      readTime="19 min"
      badge="📝 BLOG"
      lede="Part I of II: The Kiddie Stroll — how Los Angeles defunded its anti-trafficking unit while expanding a registry that saves no one."
    >
      <article className="prose prose-slate max-w-none">

        <h1><strong>THE CHILDREN WE DON’T PROTECT</strong></h1>
        <h2><strong>How Los Angeles Defunded Its Anti-Trafficking Unit While Expanding a Registry That Saves No One</strong></h2>
        <p className="mt-6"><em>(Part I of II: The Kiddie Stroll)</em></p>

        <Divider />

        <BandHeader title="I. A City That Says It Protects Children — But Doesn’t" icon="🏙️" />

        <p className="mt-6">
          Los Angeles likes to tell a story about itself.  
          It is the city of reform, the city of compassion, the city that invests in community safety. It advertises partnerships with anti-trafficking nonprofits, touts its progressive values, and repeats the mantra that protecting children is its top priority.
        </p>

        <p className="mt-6">
          But on Figueroa Street in South Los Angeles — a two-mile corridor known locally as “the Blade” or “the kiddie stroll” — that story collapses instantly.
        </p>

        <p className="mt-6">
          In October 2025, <em>The New York Times Magazine</em> published a searing investigation into this corridor,{" "}
          <a
            className={linkCls}
            href="https://www.nytimes.com/2025/10/26/magazine/sex-trafficking-girls-la-figueroa.html"
            target="_blank"
            rel="noopener"
          >
            “Sex Trafficking Girls on Figueroa Street”
          </a>.
          It documented minors as young as <strong>twelve years old</strong> walking the street nightly. Children in heavy makeup and platform heels. Children being coached and monitored by pimps from parked cars. Children signaling distress or fear with practiced glances. Children completing “quotas” before they were allowed to go home — if they had a home at all.
        </p>

        <p className="mt-6">
          This is not a hidden underworld.  
          It is not theoretical danger.  
          It is not the “internet predator” stereotype politicians fixate on.
        </p>

        <p className="mt-6">
          It is a nightly, open-air market for the sexual exploitation of minors.  
          And almost nothing is done to stop it.
        </p>

        <PullQuote>
          “As trafficking grew, the means to deal with it shrank.”
        </PullQuote>

        <p className="mt-6">
          And that — more than anything — is the story Los Angeles does not want to tell.
        </p>

        <p className="mt-6">
          Because while real children are trafficked in plain sight on the kiddie stroll, the city pours millions into a sex-offender registry system that monitors adults with among the{" "}
          <strong>lowest sexual recidivism rates of any major offense category</strong>, according to long-term federal data from the{" "}
          <a
            className={linkCls}
            href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf"
            target="_blank"
            rel="noopener"
          >
            Bureau of Justice Statistics
          </a>{" "}
          and analysis summarized by{" "}
          <a
            className={linkCls}
            href="https://www.sentencingproject.org/policy-brief/responding-to-crimes-of-a-sexual-nature-what-we-really-want-is-no-more-victims/"
            target="_blank"
            rel="noopener"
          >
            The Sentencing Project
          </a>.
          It does so not because that system protects children — the evidence says it does not — but because the registry is politically convenient, visually satisfying, and emotionally comforting.
        </p>

        <p className="mt-6">A map of red dots is easier to sell than the truth.</p>

        <p className="mt-6">
          And the truth is this:  
          <strong>Los Angeles is failing the very children it claims to protect.</strong>
        </p>

        <Divider />

        <BandHeader
          title="II. The Kiddie Stroll: The Most Visible Child-Trafficking Corridor in America"
          icon="🚨"
        />

        <p className="mt-6">
          Most Americans imagine trafficking as something shadowy — a secret pipeline, a hidden set of rooms, an underground network. Figueroa Street shatters that illusion.
        </p>

        <p className="mt-6">
          At dusk, the first wave appears: teenage girls and preteens, some wearing backpacks, some clutching hoodies against the night air. By full dark, the sidewalks are crowded. The <em>Times</em> reporter described an almost surreal level of visibility — as if the city had given up even pretending to intervene.
        </p>

        <p className="mt-6">
          Detectives and advocates told the <em>Times</em> and{" "}
          <a
            className={linkCls}
            href="https://www.kcrw.com/shows/press-play-with-madeleine-brand/stories/why-child-sex-trafficking-exploded-on-figueroa-in-south-la"
            target="_blank"
            rel="noopener"
          >
            KCRW’s <em>Press Play</em>
          </a>{" "}
          that the number of minors operating in the corridor has{" "}
          <strong>surged dramatically</strong> in the last few years. Officers said the presence of children has “exploded” since around 2020.
        </p>

        <PullQuote>
          “Instagram and TikTok are hotbeds for recruiting.”
        </PullQuote>

        <p className="mt-6">
          Children in the foster-care system are especially vulnerable. Many arrive on Figueroa within days of running from placement. Others are recruited directly from shelters and group homes, then moved quickly into the kiddie stroll’s nightly economy.
        </p>

        <p className="mt-6">
          One chilling statistic stands out:  
          In a single concentrated period of operations, LAPD vice and partner agencies rescued{" "}
          <strong>over a hundred children in roughly a month</strong> from this corridor — 123 in one often-cited campaign — according to officers interviewed in local coverage and summarized on{" "}
          <a
            className={linkCls}
            href="https://www.kcrw.com/shows/press-play-with-madeleine-brand/stories/why-child-sex-trafficking-exploded-on-figueroa-in-south-la"
            target="_blank"
            rel="noopener"
          >
            KCRW
          </a>.
        </p>

        <p className="mt-6">
          And for every child rescued, officers estimated that{" "}
          <strong>two more</strong> remained on the street.
        </p>

        <p className="mt-6">
          This is not a hidden danger.  
          This is a known, fixed, geographically concentrated zone of exploitation.  
          Everyone familiar with the area knows exactly what it is.
        </p>

        <p className="mt-6">And still — there is almost no enforcement presence.</p>

        <Divider />

        <BandHeader
          title="III. The Collapse of LA’s Anti-Trafficking Infrastructure"
          icon="💔"
        />

        <p className="mt-6">
          The single most shocking fact in the <em>Times</em> investigation is not the number of minors on the street. It is the number of officers assigned to protect them.
        </p>

        <p className="mt-6">
          LAPD once had a central human-trafficking unit.  
          In 2021, the city <strong>disbanded it</strong>.
        </p>

        <p className="mt-6">Not downsized.  
        Not reorganized.  
        Disbanded.</p>

        <p className="mt-6">Budget cuts, officials said.</p>

        <p className="mt-6">
          And instead of restoring or rebuilding that unit as trafficking increased, the city did nothing.
        </p>

        <p className="mt-6">
          Responsibility shifted back to individual precincts — most of which were neither staffed nor trained to handle the scale of the problem.
        </p>

        <p className="mt-6">
          Nowhere was this more catastrophic than in the <strong>77th Street Division</strong>, which oversees the kiddie stroll.
        </p>

        <p className="mt-6">
          That division was supposed to have <strong>six investigators</strong> focusing on vice and trafficking at Detective Armendariz’s rank.
        </p>

        <p className="mt-6">
          According to Sergeant Navarro, quoted in the <em>Times</em> article, the number of detectives actually assigned to the job was not six.
        </p>

        <p className="mt-6">
          It was <strong>one</strong>.
        </p>

        <p className="mt-6">
          One detective for what the <em>Times</em> described — as one of the “most notorious sex-trafficking corridors” in the United States.{" "}
          (<a
            className={linkCls}
            href="https://www.nytimes.com/2025/10/26/magazine/sex-trafficking-girls-la-figueroa.html"
            target="_blank"
            rel="noopener"
          >
            The New York Times
          </a>)
        </p>

        <p className="mt-6">
          One detective responsible for every lead, every tip, every victim ID, every undercover operation, every surveillance request, every outreach referral, every attempt at rescuing minors from pimps who cycle through them like currency.
        </p>
<p className="mt-6">
          One detective against an entire pipeline.
        </p>

        <p className="mt-6">
          This is not a capacity failure.  
          This is a choice.
        </p>

        <p className="mt-6">
          Los Angeles chose not to protect these kids.
        </p>

        <Callout variant="urgent" title="CALL-OUT" icon="🚨">
          <p>
            One detective for hundreds of exploited children.  
            Meanwhile, dozens of officers perform registry compliance checks on adults who are not harming anyone.
          </p>
        </Callout>

        <Divider />

        <BandHeader
          title="IV. The Registry Never Gets Cut — Because It’s Political Theater"
          icon="🎭"
        />

        <p className="mt-6">
          Here is where the contradiction sharpens into something morally grotesque.
        </p>

        <p className="mt-6">
          While Los Angeles was disbanding its human-trafficking unit,{" "}
          <strong>California was increasing spending on sex-offender management and registry-related supervision</strong>.
        </p>

        <p className="mt-6">
          The{" "}
          <a
            className={linkCls}
            href="https://lao.ca.gov/Publications/Report/4924"
            target="_blank"
            rel="noopener"
          >
            California Legislative Analyst’s Office 2024–25 judiciary and criminal justice spending report
          </a>{" "}
          notes that the state budget includes{" "}
          <strong>$26 million annually for four years</strong> just to cover the cost of a new contract for parole Sex Offender Management Program rehabilitation, on top of existing supervision and enforcement infrastructure.
        </p>

        <p className="mt-6">
          That number does not include:
        </p>
        <ul className="list-disc pl-6">
          <li>Local police compliance sweeps</li>
          <li>Home visits and address verification</li>
          <li>Registry database maintenance</li>
          <li>Administrative staff and legal support</li>
          <li>Local task forces and special operations</li>
          <li>Court and jail costs for technical violations</li>
        </ul>

        <p className="mt-6">
          Los Angeles itself does not itemize registry enforcement spending in its public budgets. The categories are vague, often folded into euphemisms like “community safety initiatives” or “public protection.” But we know from LAPD grant requests and past city documents that the department has sought extra money to add officers for registrant compliance checks — even as it allowed trafficking detectives to go unfilled.
        </p>

        <p className="mt-6">
          We also know this:
        </p>

        <p className="mt-6">
          The registry is never cut.  
          Registry enforcement staffing is never seriously reduced.  
          Officers continue to spend thousands of hours{" "}
          <strong>tracking</strong> people who pose relatively low statistical risk of sexual reoffense, especially compared with other offense categories. Federal BJS data show that released prisoners overall have a five-year rearrest rate around{" "}
          <strong>71%</strong>, but long-term follow-up studies of people convicted of rape or sexual assault show{" "}
          <strong>rearrest for a new sex crime at under 8% over nine years</strong>.
        </p>

        <p className="mt-6">
          In other words:
        </p>

        <p className="mt-6">
          <strong>
            The city always finds money to monitor low-risk adults.  
            But it cannot find money to fund six detectives to rescue exploited children.
          </strong>
        </p>

        <p className="mt-6">
          This is the heart of the story.
        </p>

        <p className="mt-6">
          Registries do not prevent trafficking.  
          Registries do not protect children being sold on the street.  
          Registries do not identify corrupt government employees, teachers, or probation officers.  
          Registries do not stop first-time offenses — which make up the vast majority of sexual harm.
        </p>

        <p className="mt-6">
          But registries are politically useful.  
          They are visual.  
          They are emotionally satisfying.  
          They are a convenient substitute for doing the hard, expensive work of preventing actual harm.
        </p>

        <p className="mt-6">
          The public sees the red dots and thinks:  
          <strong>“Someone’s watching the dangerous people.”</strong>  
          <strong>“Someone is protecting my kids.”</strong>
        </p>

        <p className="mt-6">
          But no one is watching Figueroa Street.  
          And the children there are nobody’s priority.
        </p>

        <Divider />

        <BandHeader
          title="V. The $4 Billion Scandal the City Hopes You Forget"
          icon="💸"
        />

        <p className="mt-6">
          The deepest hypocrisy in this story is not simply that Los Angeles ignores the children on the kiddie stroll.
        </p>

        <p className="mt-6">
          It’s that{" "}
          <strong>
            Los Angeles County is one of the largest documented perpetrators of sexual abuse in California’s recent history
          </strong>.
        </p>

        <p className="mt-6">
          In April 2025, Los Angeles County announced that it had reached a{" "}
          <strong>$4 billion tentative settlement</strong> to resolve{" "}
          <strong>more than 6,800 sexual abuse claims</strong> involving its juvenile facilities and foster-care system, dating back decades. That settlement was confirmed in official county communications and covered by major outlets such as{" "}
          <a
            className={linkCls}
            href="https://www.reuters.com/world/us/los-angeles-county-settle-over-6800-sex-abuse-claims-4-billion-2025-04-04/"
            target="_blank"
            rel="noopener"
          >
            Reuters
          </a>{" "}
          and{" "}
          <a
            className={linkCls}
            href="https://www.washingtonpost.com/nation/2025/04/05/los-angeles-county-4billion-sex-abuse-settlement/"
            target="_blank"
            rel="noopener"
          >
            The Washington Post
          </a>.
          Subsequent documentation and law firm press releases note that{" "}
          <strong>more than 7,000 victims</strong> will ultimately be compensated.
        </p>

        <p className="mt-6">
          These were not crimes committed by people on the registry.  
          They were not crimes committed by “strangers in vans.”  
          They were crimes committed by:
        </p>

        <ul className="list-disc pl-6">
          <li>Probation officers</li>
          <li>Juvenile hall staff</li>
          <li>Foster-care providers</li>
          <li>Sheriff’s employees</li>
          <li>School and county personnel</li>
        </ul>

        <p className="mt-6">
          Exactly the category of offenders that child-protection research identifies as a critical source of risk — and exactly the category that registries do not monitor or meaningfully constrain.
        </p>

        <p className="mt-6">
          Los Angeles County is paying one of the largest sexual-abuse settlements in U.S. history because its own systems repeatedly failed to protect the children in their custody.
        </p>

        <p className="mt-6">And what did the county do afterward?</p>

        <p className="mt-6"><strong>It did not rebuild</strong> its anti-trafficking infrastructure.</p>
        <p className="mt-6"><strong>It did not increase</strong> child-protection staffing in a way that’s visible to the public.</p>
        <p className="mt-6"><strong>It did not expand</strong> oversight or independent safeguards at the scale of the harm.</p>

        <p className="mt-6"><strong>It did not</strong> restore the LAPD human-trafficking unit.</p>
        <p className="mt-6"><strong>It did not</strong> fill the five vacant vice-investigator positions in 77th Street Division.</p>

        <p className="mt-6">It left Figueroa Street with one detective.</p>

        <p className="mt-6">
          But the county did continue to fund registry systems.  
          It did continue to conduct compliance checks.  
          It did continue to perform address verifications and home visits.  
          It did continue to expand its surveillance of low-risk offenders.
        </p>

        <p className="mt-6">
          The message could not be clearer:
        </p>

        <p className="mt-6">
          <strong>
            Los Angeles will spend billions settling abuse caused by its own employees,  
            but will not spend a fraction of that protecting the children trafficked in front of everyone’s eyes.
          </strong>
        </p>

        <Callout variant="urgent" title="CALL-OUT" icon="🚨">
          <p>
            The real crisis isn’t the people on the registry.  
            It’s the children the government refuses to protect — and the abuse the government itself inflicts.
          </p>
        </Callout>

        <Divider />

        <BandHeader
          title="VI. The False Sense of Security: How the Public Gets Manipulated"
          icon="🎭"
        />
<p className="mt-6">
          The sex-offender registry works because it tells a simple story:  
          There are “dangerous people,” and the government tracks them for you.
        </p>

        <p className="mt-6">
          It’s a comforting myth — one that shifts the public’s attention away from institutional failure and toward individual fear.
        </p>

        <p className="mt-6">
          The registry allows officials to claim they are protecting children even as they dismantle the only units that actually do.
        </p>

        <p className="mt-6">
          Ask anyone who works in trafficking, foster-care advocacy, or child-protection:{" "}
          <strong>the registry plays essentially no role in preventing exploitation on corridors like Figueroa.</strong>
        </p>

        <p className="mt-6">None.</p>

        <p className="mt-6">
          The red-dot map is a psychological balm.  
          A form of symbolic government.  
          A public-reassurance tool.
        </p>

        <p className="mt-6">
          It has nothing to do with the children on the kiddie stroll.
        </p>

        <p className="mt-6">
          No one looks at the registry and says:  
          “Thank God — this will stop a 13-year-old from being trafficked tonight.”
        </p>

        <p className="mt-6">
          But they do look at the map and believe the government is “doing something.”
        </p>

        <p className="mt-6">Meanwhile:</p>

        <ul className="list-disc pl-6">
          <li>The city’s own employees abused thousands.</li>
          <li>The anti-trafficking unit was disbanded.</li>
          <li>Minors are trafficked nightly on Figueroa.</li>
          <li>Five out of six investigator positions sit empty.</li>
          <li>Registry enforcement marches on without serious scrutiny.</li>
        </ul>

        <p className="mt-6">
          This is not a coincidence.  
          It is a political strategy.
        </p>

        <p className="mt-6">
          When real safety is difficult and expensive,  
          <strong>cities invest in the illusion of safety instead.</strong>
        </p>

        <Divider />

        <BandHeader title="VII. What Real Safety Would Look Like" icon="🛡️" />

        <p className="mt-6">
          If Los Angeles genuinely wanted to protect children, it would not be a mystery how to do it.  
          The path is straightforward, evidence-based, and already modeled in other jurisdictions.  
          There is nothing radical about it — only the political will is missing.
        </p>

        <p className="mt-6">
          Real safety starts with <strong>rebuilding the infrastructure the city chose to dismantle</strong>.  
          That means restoring a fully staffed anti-trafficking unit, not as an afterthought buried inside vice, but as a dedicated division with detectives, analysts, and victim advocates whose entire mission is to identify minors in danger and remove them from the street.  
          Six investigators should be the floor, not the ceiling.  
          No serious city would tolerate one officer policing an entire corridor where children are sold every night.
        </p>

        <p className="mt-6">
          Real safety means <strong>investing in prevention instead of mythology</strong>.  
          The pipelines that push kids onto Figueroa are well understood: foster-care failures, youth homelessness, social-media recruitment, financial exploitation, and chronic underfunding of community-based services.  
          Every child who ends up on the kiddie stroll reflects a dozen missed chances for intervention.  
          Those chances can be rebuilt with the right staffing, the right funding, and the right priorities.
        </p>

        <p className="mt-6">
          Real safety means <strong>treating exploited minors as victims, not offenders</strong>.  
          The children on Figueroa don’t need surveillance; they need safe houses, trauma-informed care, long-term stabilization, and credible pathways out.  
          They need adults who fight for them, not just systems that process them.
        </p>

        <p className="mt-6">
          Real safety requires <strong>targeting the adults who profit</strong> — not the low-risk people on the registry who haven’t harmed anyone in decades.  
          Traffickers, pimps, organized networks, predatory motels, and online recruiters thrive precisely because the city directs its resources elsewhere.  
          Shifting even a fraction of the money spent on registry enforcement toward real-world interdiction would transform the landscape overnight.
        </p>

        <p className="mt-6">
          And real safety means <strong>being honest about the scale of institutional failure</strong>.  
          Any city that pays $4 billion to settle sexual-abuse claims against its own employees should be leading the nation in transparency, accountability, and protection — not cutting the very units designed to prevent further harm.
        </p>

        <p className="mt-6">
          These are not abstract ideas.  
          They are the fundamentals of protecting children.  
          Los Angeles knows this. It simply refuses to do it.
        </p>

        <Divider />

        <BandHeader
          title="VIII. The Real Question: Why Does Los Angeles Choose Illusion Over Protection?"
          icon="❓"
        />

        <p className="mt-6">
          When you place all the facts side by side, a devastating through-line emerges:
        </p>

        <ul className="list-disc pl-6">
          <li>The government abused thousands of children and adults.</li>
          <li>It agreed to pay $4 billion to settle the damage.</li>
          <li>It cut the only unit designed to stop real-world sexual exploitation.</li>
          <li>It left an entire trafficking corridor with one detective.</li>
          <li>It spends millions annually on a registry that does not protect the children who are actually at risk.</li>
          <li>And it sells the public a narrative of safety that collapses under the lightest scrutiny.</li>
        </ul>

        <p className="mt-6">Why?</p>

        <p className="mt-6">
          Because protecting real children is expensive.  
          Because confronting systemic failures is politically dangerous.  
          Because fixing foster care is overwhelming.  
          Because dismantling trafficking networks takes years, coordination, and public accountability.
        </p>

        <p className="mt-6">
          But maintaining a registry is simple.  
          It’s symbolic.  
          It’s visible.  
          It’s easy to explain in a campaign ad.  
          It requires no institutional reform or introspection.  
          And it directs public fear toward people who are politically safe to target.
        </p>

        <p className="mt-6">
          The registry exists not because it prevents harm, but because it <strong>absorbs blame</strong>.
        </p>

        <p className="mt-6">
          Every red dot is an invitation to ignore what’s happening on Figueroa Street.  
          Every compliance check is a distraction from the county’s own abuse scandals.  
          Every restriction placed on a low-risk adult is a substitute for confronting the systems where real harm occurs.
        </p>

        <p className="mt-6">
          The red dots are not a safety tool.  
          <strong>They are a shield for failed institutions.</strong>
        </p>

        <Divider />

        <BandHeader title="IX. The Bow: What Los Angeles Doesn’t Want You to See" icon="🎯" />

        <p className="mt-6">
          If you take nothing else from this exposé, it should be this:
        </p>

        <p className="mt-6">
          <strong>
            Los Angeles is not simply failing to protect children.  
            It is actively choosing symbolic safety over real protection.
          </strong>
        </p>

        <p className="mt-6">
          A county that approved a $4 billion settlement because its own employees abused thousands of people now claims it cannot afford five more investigators to protect exploited minors on a two-mile stretch of asphalt.
        </p>

        <p className="mt-6">
          A city that disbanded its anti-trafficking unit invests millions in tracking people unlikely to harm anyone, because those people are easy political targets and the victims on Figueroa are not.
        </p>

        <p className="mt-6">
          A city that knows exactly where children are being harmed chooses not to act, because doing so would require replacing performance with responsibility.
        </p>

        <p className="mt-6">
          The children on Figueroa Street are not hidden.  
          They are not imaginary.  
          They are not statistical abstractions.
        </p>

        <p className="mt-6">
          They are visible to anyone who bothers to look.
        </p>

        <p className="mt-6">And that is the most damning fact of all.</p>

        <PullQuote>
          “The registry did not fail Los Angeles.  
          Los Angeles failed its children — and used the registry to hide it.”
        </PullQuote>

        <Divider label="Data Sources" />

        <Callout variant="info" title="Sources" icon="📚">
          <ul className="list-disc pl-6">
            <li>
              <a
                className={linkCls}
                href="https://www.nytimes.com/2025/10/26/magazine/sex-trafficking-girls-la-figueroa.html"
                target="_blank"
                rel="noopener"
              >
                The New York Times Magazine — “Sex Trafficking Girls on Figueroa Street”
              </a>
            </li>
            <li>
              <a
                className={linkCls}
                href="https://www.kcrw.com/shows/press-play-with-madeleine-brand/stories/why-child-sex-trafficking-exploded-on-figueroa-in-south-la"
                target="_blank"
                rel="noopener"
              >
                KCRW: “Why Child Sex Trafficking Exploded on Figueroa in South LA”
              </a>
            </li>
            <li>
              <a
                className={linkCls}
                href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf"
                target="_blank"
                rel="noopener"
              >
                Bureau of Justice Statistics — Recidivism of Sex Offenders Released from State Prison
              </a>
            </li>
            <li>
              <a
                className={linkCls}
                href="https://www.sentencingproject.org/policy-brief/responding-to-crimes-of-a-sexual-nature-what-we-really-want-is-no-more-victims/"
                target="_blank"
                rel="noopener"
              >
                The Sentencing Project — Responding to Crimes of a Sexual Nature
              </a>
            </li>
            <li>
              <a
                className={linkCls}
                href="https://lao.ca.gov/Publications/Report/4924"
                target="_blank"
                rel="noopener"
              >
                California Legislative Analyst’s Office — 2024–25 Report
              </a>
            </li>
            <li>
              <a
                className={linkCls}
                href="https://www.reuters.com/world/us/los-angeles-county-settle-over-6800-sex-abuse-claims-4-billion-2025-04-04/"
                target="_blank"
                rel="noopener"
              >
                Reuters — Los Angeles County $4B Abuse Settlement
              </a>
            </li>
            <li>
              <a
                className={linkCls}
                href="https://www.washingtonpost.com/nation/2025/04/05/los-angeles-county-4billion-sex-abuse-settlement/"
                target="_blank"
                rel="noopener"
              >
                The Washington Post — LA County Abuse Settlement
              </a>
            </li>
          </ul>
        </Callout>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/community-ties">
              Community Ties
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/when-systems-fail">
              When Systems Fail
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/legislative-advocacy">
              Legislative Advocacy Guide
            </Link>
          </li>
        </ul>

        <div className="mt-10">
          <ShareBar />
        </div>
      </article>
    </BlogLayout>
  );
}