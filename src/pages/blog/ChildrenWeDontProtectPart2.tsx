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

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function TheCasesWeDontInvestigate(): JSX.Element {
  return (
    <BlogLayout
      title="The Children We Don't Protect - part 2"
      description="How the federal government pulled thousands of agents off child protection and cybercrime — revealing the nation’s true priorities."
      keywords="child protection, DHS, HSI, federal policy, registries, immigration enforcement"
      date="Nov 23, 2025"
      readTime="14 min"
      badge="📝 BLOG"
      lede="How the federal government pulled thousands of agents off child protection and cybercrime — and what it reveals about America’s real priorities."
    >
      <article className="prose prose-slate max-w-none">

        <BandHeader title="The Cases We Don’t Investigate" icon="🚨" />

        <p className="mt-6">
          For decades, the federal government has portrayed online sexual exploitation as one of the nation’s most urgent dangers — a constant threat lurking behind every device, requiring the harshest sentencing guidelines in federal law, lifetime registries, online tracking, residence bans, and an ever-expanding network of restrictions intended to assure the public that someone, somewhere, is watching.
        </p>

        <p className="mt-6">
          But when a government tells you what it fears, believe its budgets, not its speeches.  
          And the budgets now reveal something staggering.
        </p>

        <p className="mt-6">
          This year, according to internal Homeland Security Investigations (HSI) data analyzed by <em>The New York Times</em> (<a className={linkCls} href="https://www.nytimes.com/2025/11/16/us/politics/dhs-agents-reassigned.html?utm_source=chatgpt.com" target="_blank" rel="noopener">NYT</a>), agents nationwide worked <strong>the fewest hours on child-exploitation cases in more than a decade</strong>. During the very same period, those agents spent <strong>five times as many hours on immigration cases</strong> as they did during Trump’s first term.
        </p>

        <p className="mt-6">
          The numbers are not an accident.  
          They are not a temporary dip.  
          They are the direct result of a deliberate federal decision: <strong>to pull investigators off child-exploitation, cybercrime, and trafficking cases and divert them to immigration enforcement.</strong>
        </p>

        <p className="mt-6">
          This is not a bureaucratic shift.  
          It is a collapse of child-protection infrastructure — and the government is doing everything possible not to admit it.
        </p>

        <Divider label="Pattern Breaks Open" />

        <BandHeader title="The Case That Broke Open the Pattern" icon="🧩" />

        <p className="mt-6">
          Earlier this year, HSI agents analyzing newly surfaced CSAM videos — footage showing the violent sexual abuse of an unidentified child — spent weeks applying every tool at their disposal (<a className={linkCls} href="https://www.nytimes.com/2025/11/16/us/politics/dhs-agents-reassigned.html?utm_source=chatgpt.com" target="_blank" rel="noopener">NYT</a>). They dissected frames for clues, probed metadata, traced server paths, and infiltrated the online networks circulating the material.
        </p>

        <p className="mt-6">
          This was the core function the public is told these agents exist to perform.
        </p>

        <p className="mt-6">
          But then the reassignment orders came.
        </p>

        <p className="mt-6">
          Agents working the case were abruptly sent into the field to assist with immigration arrests. Their work on the child-exploitation case stopped. Progress toward identifying or rescuing the child stalled. Even worse, because they could no longer maintain consistent undercover access, <strong>they lost contact with a key source they had cultivated over years in the online world of abusers</strong> (<a className={linkCls} href="https://www.nytimes.com/2025/11/16/us/politics/dhs-agents-reassigned.html?utm_source=chatgpt.com" target="_blank" rel="noopener">NYT</a>).
        </p>

        <p className="mt-6">That source may never be recovered.  
        That child may never be found.</p>

        <p className="mt-6">
          The Times reported that this is not an isolated incident, but “a broader pattern” of collapse.
        </p>

        <p className="mt-6">
          Entire HSI child-exploitation units in cities like Newark and Los Angeles have been pulled almost entirely into immigration enforcement, according to people with knowledge of the changes (<a className={linkCls} href="https://www.nytimes.com/2025/11/16/us/politics/dhs-agents-reassigned.html?utm_source=chatgpt.com" target="_blank" rel="noopener">NYT</a>). In Los Angeles, one unit of roughly five investigators was reassigned wholesale — leaving agents attempting to advance their cases only on nights and weekends.
        </p>

        <p className="mt-6">All while immigration enforcement hours skyrocketed.</p>

        <Divider label="Workforce Collapse" />

        <BandHeader title="The Workforce Trained to Find Children — Reassigned to Immigration Sweeps" icon="🧠" />

        <p className="mt-6">
          HSI agents specializing in child exploitation are not interchangeable law-enforcement staff.  
          They are a rare category of investigator: forensic analysts, undercover operators, cybercrime experts. They trace IP hops across continents, interpret digital artifacts, rebuild deleted files, and identify victims from microscopic clues. They maintain covert personas requiring years of credibility to infiltrate dark-web communities.
        </p>

        <p className="mt-6">
          Pull them off their cases, and the system doesn’t slow down — it collapses.
        </p>

        <p className="mt-6">
          Over the spring, HSI dedicated <strong>fewer hours to child-exploitation work than in any comparable period in more than ten years</strong> (<a className={linkCls} href="https://www.nytimes.com/2025/11/16/us/politics/dhs-agents-reassigned.html?utm_source=chatgpt.com" target="_blank" rel="noopener">NYT data analysis</a>). Internal data and interviews suggest the hours likely dropped even further over the summer and fall.
        </p>

        <p className="mt-6"><strong>The cost is measured not in budget lines but in lives:</strong></p>

        <ul className="list-disc pl-6 mt-6">
          <li>Leads go cold</li>
          <li>Devices go unexamined</li>
          <li>Trafficking routes fade from view</li>
          <li>Undercover identities go dark</li>
          <li>Victims remain unidentified</li>
          <li>Cases collapse without continuity</li>
        </ul>

        <p className="mt-6">
          These are not abstract failures.  
          They are real children whose rescue windows narrow or close entirely.
        </p>

        <Divider label="Federal Contradictions" />

        <BandHeader title="The Federal Contradiction No One Wants to Admit" icon="⚖️" />

        <p className="mt-6">
          And yet, amid this collapse in investigative capacity, the federal government continues to insist that people with online sex-offense convictions are among the most dangerous criminals in the country. It argues in courts, legislative halls, sentencing guidelines, and press releases that such offenders pose catastrophic risks to public safety, require lifelong monitoring, and must be tracked at all times.
        </p>

        <p className="mt-6">
          This is where the contradiction becomes impossible to ignore.
        </p>

        <Callout variant="warning" title="The Government Cannot Have It Both Ways" icon="⚠️">
          <p className="mt-6">
            The government says every person convicted of an online sex offense is a catastrophic threat requiring decades of prison, lifetime surveillance, and perpetual public exposure — yet it simultaneously admits these very cases are such a low priority that investigators can be pulled away from them to chase drywall installers.
          </p>
        </Callout>

        <p className="mt-6">This is not ambiguity.  
        This is not nuance.  
        This is an admission.</p>

        <p className="mt-6">
          Either people with online sex-offense convictions are an omnipresent menace requiring perpetual surveillance and maximal enforcement,  
          <strong>or they are less dangerous than day-labor roofers waiting for pickup jobs in the Home Depot parking lot.</strong>
        </p>

        <p className="mt-6">It cannot be both.</p>

        <PullQuote>
          <p className="mt-6">
            <strong>Either we are existential threats to the fabric of society…  
            or we are less dangerous than the guys picking up day-labor shifts in the Home Depot parking lot.  
            Which one is it?</strong>
          </p>
        </PullQuote>
<Divider label="Cases Going Cold" />

        <BandHeader title="The Cases Going Cold, One After Another" icon="🧊" />

        <p className="mt-6">
          Because of the reassignments, the Times found that HSI:
        </p>

        <ul className="list-disc pl-6 mt-6">
          <li>worked fewer child-exploitation hours than in any equivalent period in over a decade,</li>
          <li>spent <strong>at least five times as many hours</strong> on immigration cases,</li>
          <li>and likely continued abandoning child-protection work throughout the summer and fall (<a className={linkCls} href="https://www.nytimes.com/2025/11/16/us/politics/dhs-agents-reassigned.html?utm_source=chatgpt.com" target="_blank" rel="noopener">NYT</a>).</li>
        </ul>

        <p className="mt-6">Separate reporting from:</p>

        <ul className="list-disc pl-6 mt-6">
          <li><strong>Reuters</strong>: thousands of agents diverted into immigration enforcement (<a className={linkCls} href="https://www.reuters.com/world/us/thousands-agents-diverted-trump-immigration-crackdown-2025-03-22/?utm_source=chatgpt.com" target="_blank" rel="noopener">Reuters</a>)</li>
          <li><strong>Wired</strong>: whistleblower concerns over collapsing child-exploitation capacity (<a className={linkCls} href="https://www.wired.com/story/senator-wyden-hsi-immigration-csam/?utm_source=chatgpt.com" target="_blank" rel="noopener">Wired</a>)</li>
          <li><strong>The Verge</strong>: agents pulled from predator cases, leaving backlogs (<a className={linkCls} href="https://www.theverge.com/policy/764602/online-child-exploitation-investigations-hsi-immigration?utm_source=chatgpt.com" target="_blank" rel="noopener">The Verge</a>)</li>
          <li><strong>WSJ</strong>: long-term informant networks “fraying” (<a className={linkCls} href="https://www.wsj.com/politics/policy/trumps-immigration-push-diverts-u-s-agents-from-drug-money-and-sex-crime-cases-90b37cc9/?utm_source=chatgpt.com" target="_blank" rel="noopener">WSJ</a>)</li>
        </ul>

        <p className="mt-6">
          The data also suggested a likely drop in arrests and child victims identified — a direct result of the workforce collapse.
        </p>

        <p className="mt-6">
          This is the clearest indicator of all: the federal government is not allocating resources according to danger, harm, or public safety. It is allocating according to political optics.
        </p>

        <Divider label="Safety Theater" />

        <BandHeader title="Safety Theater at Federal Scale" icon="🎭" />

        <p className="mt-6">
          Just as Los Angeles maintained its public-facing registry apparatus while leaving one detective to police the largest child-trafficking corridor on the West Coast, the federal government uses the national sex-offender registry as its own form of safety theater.
        </p>

        <p className="mt-6">
          Parents see dots on a map and are told their community is being protected.
        </p>

        <p className="mt-6">
          Meanwhile, the real protection — the investigative work that finds children — has been gutted.
        </p>

        <p className="mt-6">
          Because the truth is stark: <strong>Registries do almost nothing for prevention.</strong>  
          They do not interrupt ongoing abuse.  
          They do not detect new victims.  
          They do not dismantle trafficking networks.  
          They do not identify perpetrators operating anonymously online.
        </p>

        <p className="mt-6">
          Maps don’t rescue children.  
          Maps don’t prevent harm.  
          Maps don’t stop crimes in progress.  
          Maps don’t build trust with exploited kids or generate leads in forensic labs.
        </p>

        <p className="mt-6">
          <strong>Prevention</strong> requires consistent investigative capacity, functioning oversight, well-trained digital forensics units, trauma-informed outreach, and systemic accountability.  
          A registry requires little more than a database and a press release.
        </p>

        <p className="mt-6">
          Maps cannot substitute for investigators — and the public has been conditioned to mistake one for the other.
        </p>

        <Divider label="Systemic Patterns" />

        <BandHeader title="Two Levels of Government, One Pattern of Failure" icon="🏛️" />

        <p className="mt-6">
          Part I showed how a city abandoned trafficked girls on Figueroa Street while maintaining the illusion of vigilance through registry enforcement.
        </p>

        <p className="mt-6">
          Part II shows how the federal government abandoned national child-exploitation investigations while preserving the same illusion through registries, sentencing, and immigration sweeps.
        </p>

        <p className="mt-6">
          Both levels of government invested in the performance of protection, not the practice.
        </p>

        <p className="mt-6">
          Los Angeles permitted exploited minors to walk the streets in plain view while claiming to protect children through its registry apparatus.
        </p>

        <p className="mt-6">
          The federal government gutted HSI’s child-exploitation units while claiming to protect communities through lifetime registries, sentence enhancements, and immigration crackdowns.
        </p>

        <p className="mt-6">
          Children paid the price.  
          The public was misled.  
          The government upheld the fiction of safety while dismantling the mechanisms that create it.
        </p>

        <p className="mt-6">
          This is not coincidence.  
          It is systemic.
        </p>

        <Divider label="What Real Protection Requires" />

        <BandHeader title="What Real Protection Would Look Like" icon="🛡️" />

        <p className="mt-6">
          Real child protection would require restoring — immediately — the full investigative workforce dedicated to child exploitation, cybercrime, and trafficking. It would require fully funding ICAC task forces, expanding digital forensics labs, maintaining continuous undercover operations, and insulating child-protection units from political repurposing.
        </p>

        <p className="mt-6">
          But real protection also requires <strong>systemic accountability</strong> — the piece our system avoids most aggressively.
        </p>

        <p className="mt-6">Systemic accountability would mean:</p>

        <ul className="list-disc pl-6 mt-6">
          <li>Annual public reporting on child-exploitation caseloads, staffing levels, and hours worked</li>
          <li>Independent auditing of federal and state investigative capacity</li>
          <li>Legislative mandates preventing political diversion of child-protection personnel</li>
          <li>Transparent metrics showing how many victims are identified, how many leads go cold, and why</li>
          <li>Public release (in aggregated, non-sensitive form) of federal case-disruption data</li>
          <li>Oversight bodies with authority to demand corrective action when casework collapses</li>
          <li>Legislative budget triggers that automatically increase child-protection funding when staffing dips below safe thresholds</li>
        </ul>

        <p className="mt-6">
          Accountability means acknowledging failure when it occurs, not hiding it behind reassuring websites or punitive restrictions.
        </p>

        <p className="mt-6">
          The institutions protecting children should not be allowed to operate in darkness while the registry operates in neon light.
        </p>

        <Divider label="Conclusion" />

        <BandHeader title="Conclusion: What the Government Truly Values" icon="🎯" />

        <p className="mt-6">
          The federal government cannot demand lifetime registries, draconian surveillance, and the harshest sentencing schemes in the criminal-code playbook — all based on the claim that people with online sex-offense convictions are uniquely dangerous — while simultaneously diverting the very investigators assigned to those cases to immigration duty.
        </p>

        <p className="mt-6">
          If officials truly believed in the danger they describe, <strong>no administration would ever pull the investigators assigned to combat it.</strong>
        </p>

        <p className="mt-6">But they did.  
        And they continue to.</p>

        <p className="mt-6">
          Because protecting children is not the priority.  
          <strong>Maintaining the appearance</strong> of protecting children is the priority.
        </p>

        <p className="mt-6">
          Every jurisdiction invests heavily in this appearance:  
          the national registry, GPS monitoring, residency restrictions, compliance checks, community-notification systems, “stranger danger” maps, federal sentencing enhancements, website-based fear architecture, and immigration sweeps framed as child-protection measures.  
          Millions poured into <strong>safety theater</strong> — pennies into prevention.
        </p>

        <p className="mt-6">
          Just like Figueroa Street.  
          Just like Los Angeles County.  
          Just like the federal diversion of HSI’s child-exploitation units.  
          Just like every jurisdiction that funds optics over outcomes.
        </p>

        <p className="mt-6">
          The registry did not fail America.  
          America failed its children — and used the registry to hide it.
        </p>

        <Divider label="Sources & Reading" />

        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6 mt-6">
          <li><a className={linkCls} href="https://www.nytimes.com/2025/11/16/us/politics/dhs-agents-reassigned.html" target="_blank" rel="noopener">New York Times: DHS Agents Reassigned</a></li>
          <li><a className={linkCls} href="https://www.reuters.com/world/us/thousands-agents-diverted-trump-immigration-crackdown-2025-03-22/" target="_blank" rel="noopener">Reuters: Thousands of Agents Diverted</a></li>
          <li><a className={linkCls} href="https://www.wired.com/story/senator-wyden-hsi-immigration-csam/" target="_blank" rel="noopener">Wired: Whistleblower Concerns</a></li>
          <li><a className={linkCls} href="https://www.theverge.com/policy/764602/online-child-exploitation-investigations-hsi-immigration" target="_blank" rel="noopener">The Verge: HSI Pullbacks</a></li>
          <li><a className={linkCls} href="https://www.wsj.com/politics/policy/trumps-immigration-push-diverts-u-s-agents-from-drug-money-and-sex-crime-cases-90b37cc9/" target="_blank" rel="noopener">WSJ: Informant Networks Fraying</a></li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6 mt-6">
          <li><Link className={linkCls} to="/blog/ChildrenWeDontProtectPart1">Children We Don’t Protect — Part I</Link></li>
          <li><Link className={linkCls} to="/blog/RegistryMyths">Registry Myths and the Illusion of Safety</Link></li>
          <li><Link className={linkCls} to="/resources/federal-accountability">Federal Accountability Resource Guide</Link></li>
        </ul>

        <div className="mt-10">
          <ShareBar />
        </div>

      </article>
    </BlogLayout>
  );
}