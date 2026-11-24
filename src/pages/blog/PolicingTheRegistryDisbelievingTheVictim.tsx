import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout, ContextualActionCard, Divider } from "../../components/solar";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  "recipientId": "journalist",
  "primaryPositionId": "closer-to-home",
  "secondaryPositionId": "ineffective",
  "formatId": "letter-to-editor",
  "headline": "Ask public-safety reporters to examine both sides of the enforcement ledger",
  "description": "Registry enforcement announcements describe measurable activity. Coverage can also examine how agencies handle sexual assault reports and what evidence exists of actual prevention.",
  "recommendation": {
    "audienceLabel": "a local journalist or editorial board covering policing and public safety",
    "suggestion": "Ask for reporting that compares registry compliance outputs with sexual assault investigative standards, resources and outcomes, without approaching complainants or interfering in any case.",
    "actionLabel": "Build a message from this article"
  },
  "suggestedAsk": "Please distinguish registration violations from new allegations of sexual harm in coverage of compliance sweeps, and examine the agency’s published investigative standards, sexual assault case review practices, staffing and outcome data. Where evidence is unavailable, identify those gaps rather than assuming arrest totals measure prevention.",
  "personalContext": "This SOLAR article compares official registry enforcement announcements with documented failures to investigate sexual assault reports. I am interested in accurate reporting of institutional practices and outcomes, not influencing individual investigations or litigation.",
  "source": {
    "title": "Policing the Registry, Disbelieving the Victim",
    "path": "/blog/policing-the-registry-disbelieving-the-victim",
    "type": "blog"
  }
};

export default function PolicingTheRegistryDisbelievingTheVictim(): JSX.Element {
  return (
    <BlogLayout
      title="Policing the Registry, Disbelieving the Victim"
      description="Police agencies celebrate registry compliance arrests as public safety. Cases from Mississippi and Florida expose a disturbing contrast with their handling of reported sexual violence."
      keywords="sex offender registry enforcement, sexual assault investigations, police disbelief, Taylor Cadle, Polk County Sheriff, Ocean Springs police, DARVO, institutional betrayal, public safety, registry compliance, sexual violence prevention"
      date="Nov 23, 2026"
      readTime="8 min read"
      badge="📝 BLOG"
      lede="In Mississippi, a woman reported rape and was arrested. In Florida, a child reported sexual abuse and was prosecuted. What does it mean to entrust the prevention of sexual violence to institutions that can fail so profoundly to recognize it?"
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR" icon="🔎">
          <p>Documented failures to investigate sexual assault raise a difficult question about the institutions entrusted with registry enforcement. Counting compliance arrests cannot substitute for evidence of protection, and the public deserves accountability for both.</p>
        </Callout>

        <p>A woman calls 911 in Ocean Springs, Mississippi. She says she has been abducted and raped. She is asking the police for help.</p>

        <p>According to a <a className={linkCls} href="https://gcwire.com/ocean-springs-police-mock-then-arrest-alleged-rape-victim/" target="_blank" rel="noopener noreferrer">November 15 investigation by GC Wire</a>, officers ridicule her appearance, discount her account and mishandle her requests for medical care. She ends the encounter under arrest. The outlet subsequently published <a className={linkCls} href="https://gcwire.com/full-video-body-cam-footage-from-december-911-rape-call-in-ocean-springs/" target="_blank" rel="noopener noreferrer">body-camera footage</a> from the encounter.</p>

        <p>The woman was intoxicated, argumentative and, at one point, made a racist remark to an officer. None of that should be excused. None of it establishes that she was not sexually assaulted, either.</p>

        <p>We do not know whether the reported assault occurred. That uncertainty is precisely why a competent investigation matters. The question is not whether officers were required to accept her allegation as established fact. It is whether they approached it as a report of a serious crime that deserved investigation.</p>

        <p>Now consider the extraordinary confidence the public is asked to place in law enforcement when it comes to the sex offender registry. Agencies are charged with maintaining sensitive personal information, conducting compliance checks, enforcing complex reporting requirements and representing these activities as protection from sexual violence.</p>

        <p>What makes their judgment so indispensable when the danger is presumed, but so dispensable when someone actually reports being harmed?</p>

        <BandHeader title="The same sheriff’s office, two very different kinds of vigilance" />

        <p>In July 2016, twelve-year-old Taylor Cadle told authorities in Polk County, Florida, that her adoptive father had been sexually abusing her.</p>

        <p>The <a className={linkCls} href="https://exonerationregistry.org/cases/14433" target="_blank" rel="noopener noreferrer">National Registry of Exonerations documents what happened next</a>. A detective suggested that Taylor’s accusation stemmed from a dispute with her father, questioned her account repeatedly and emphasized what she stood to lose if he went to prison. The investigation did not lead to his arrest at that time.</p>

        <p>Instead, Taylor was charged in May 2017 with providing false information to law enforcement. Now thirteen, she pleaded guilty without a lawyer and received probation. Among the conditions were apology letters to her adoptive father and the sheriff’s office.</p>

        <p>She had disclosed sexual abuse. The justice system demanded that she apologize.</p>

        <p>Within weeks, she was abused again. This time she collected photographic evidence herself and contacted police. Her guilty plea was set aside, and the state dropped the charge against her. In 2019 her adoptive father pleaded no contest to sexual battery of a child and was sentenced to seventeen years in prison.</p>

        <p>The details of the original investigation also appear in an <a className={linkCls} href="https://docs.justia.com/cases/federal/district-courts/florida/flmdce/8:2025cv02790/448669/65" target="_blank" rel="noopener noreferrer">April 14, 2026, federal court order in Cadle v. Judd</a>. Cadle filed a civil-rights lawsuit in 2025; the court rejected dismissal of certain claims against two detectives and Sheriff Grady Judd in his official capacity, but dismissed the individual-capacity claims against Judd without prejudice. The order addresses the sufficiency and timeliness of claims, not final liability. It also describes the sheriff’s office’s position, as alleged in the complaint, that the investigation was thorough despite inappropriate questioning and statements.</p>

        <p>Now fast-forward to November 2, 2026.</p>

        <p>The Polk County Sheriff’s Office, still under Judd, issued a <a className={linkCls} href="https://outlook.polksheriff.org/news-investigations/polk-county-news/2026/11/02/24-sex-offenders-and-1-predator-arrested-and-charged-during-october-halloween-investigative-sweep" target="_blank" rel="noopener noreferrer">press release celebrating an October and Halloween compliance operation</a>. The agency reported 1,448 registered people in the county and said it conducts checks quarterly, although Florida requires them at least annually. It announced 25 arrests over several weeks, along with 300 compliance checks and 126 searches on Halloween itself.</p>

        <p>Sheriff Judd declared: “We do not tolerate any violation of sex offender registration laws or probation requirements.”</p>

        <p>Read that sentence again with Taylor Cadle in mind.</p>

        <p>The comparison is not between two different police departments in different parts of the country. It is the same agency, under the same sheriff, presenting the strict monitoring of registered people as proof of its commitment to public safety.</p>

        <p>Some of the announced arrests involved new allegations of criminal conduct, including possession of child sexual abuse material and domestic violence. Others involved missed registration deadlines, vehicles that had not been registered and alleged violations involving internet identifiers. These are different kinds of conduct; the allegations are not convictions, and the release does not establish how many future sexual assaults were prevented.</p>

        <p>But the agency’s message was unequivocal: compliance matters, and violations will not be tolerated.</p>

        <p>Where was that institutional intolerance when a child who needed protection was being prosecuted for asking for it?</p>

        <BandHeader title="The credibility contradiction" />

        <p>We do not need police to automatically believe every accusation. We need them to investigate without deciding who is credible on the basis of stereotypes, inconvenience or a complainant’s demeanor.</p>

        <p>Psychologists Sarah Harsey and Jennifer Freyd describe a pattern called DARVO: Deny, Attack, and Reverse Victim and Offender. In <a className={linkCls} href="https://msmagazine.com/2022/11/28/darvo-deny-attack-blame-prosecution-women-report-rape/" target="_blank" rel="noopener noreferrer">their 2022 essay on the prosecution of women reporting rape</a>, they examine how a reporting person can become the target of an investigation. Their <a className={linkCls} href="https://pubmed.ncbi.nlm.nih.gov/37154429/" target="_blank" rel="noopener noreferrer">peer-reviewed experimental research</a> separately found that exposure to DARVO affected participants’ assessments of credibility and their willingness to punish the parties.</p>

        <p>DARVO is a conceptual lens here, not a diagnosis of individual officers or a finding that every disputed report is true. The danger is that disbelief becomes self-confirming: an investigator interprets distress or inconsistency as dishonesty, then uses the resulting pressure or recantation to justify the original conclusion.</p>

        <p>The federal government has recognized problems of this kind. A <a className={linkCls} href="https://www.justice.gov/archives/opa/pr/justice-department-announces-findings-investigation-baltimore-police-department" target="_blank" rel="noopener noreferrer">2016 Justice Department investigation of Baltimore police</a> identified serious concerns that the response to sexual assault was inadequate and that gender bias may have contributed. In 2022, DOJ issued <a className={linkCls} href="https://www.justice.gov/ovw/law-enforcement-guidance" target="_blank" rel="noopener noreferrer">updated guidance for law enforcement</a> on reducing bias and improving responses to sexual assault and domestic violence, including trauma-informed practices.</p>

        <p>These are not proof that all departments behave alike. They are evidence that failures to take complaints seriously have been sufficiently consequential to require federal attention.</p>

        <p>Compare that uncertainty in assessing an allegation with the apparent certainty implied by public registration. A conviction is a historical fact. A person's present dangerousness is a separate question. Yet the registry label is often treated as sufficient reason for heightened suspicion, while an allegation of contemporary harm can be dismissed because the person reporting it does not fit an officer’s expectations.</p>

        <p>That is an extraordinary imbalance in how the system distributes suspicion.</p>

        <BandHeader title="Disbelief is not merely an injustice to one victim" />

        <p>In 2008, an eighteen-year-old Washington woman known publicly as Marie reported a rape. Police came to doubt her, and she was charged with making a false report. As <a className={linkCls} href="https://www.propublica.org/article/false-rape-accusations-an-unbelievable-story" target="_blank" rel="noopener noreferrer">ProPublica and The Marshall Project later documented</a>, an investigation in Colorado uncovered evidence that vindicated her account. Other women had been assaulted in the intervening period.</p>

        <p>The point is not to blame police for every subsequent act of the perpetrator. It is to recognize that a failed investigation can leave someone free to harm others.</p>

        <p>The same consequence is painfully concrete in Cadle’s case. A child was left exposed to the person she had reported, then had to obtain evidence of further abuse to make the authorities recognize the danger.</p>

        <p>There is a prevention lesson in these cases that cannot be captured by a registry map: people must be able to disclose abuse safely, and the institutions receiving their reports must be capable of responding competently.</p>

        <p>A system that discourages disclosure can undermine one of the very mechanisms through which sexual violence is discovered and stopped.</p>

        <BandHeader title="What gets counted, and what does not?" />

        <p>A registry compliance operation offers an agency unusually clear numbers to report: registrations checked, homes visited, searches conducted, people arrested.</p>

        <p>Sexual assault investigation requires a different set of measures. Were reports recorded? Was appropriate medical assistance offered? Was evidence preserved and processed? Were investigators trained to avoid coercive interviews? Were cases closed for defensible reasons? Did subsequent review identify failures? Were victims supported regardless of whether prosecutors ultimately filed charges?</p>

        <p>Those are harder questions. But they are closer to the purpose the public is told registry enforcement serves.</p>

        <p>As SOLAR examined in <Link className={linkCls} to="/blog/results-dont-speak-for-themselves">The Results Don’t Speak for Themselves</Link>, an arrest total is an output, not a measurement of prevented sexual harm. That does not make arrests meaningless. It means a public-safety claim needs evidence beyond the fact that an agency enforced a rule.</p>

        <p>And resources are finite. A <a className={linkCls} href="https://nij.ojp.gov/library/publications/law-enforcement-perspectives-sex-offender-registration-and-notification-2" target="_blank" rel="noopener noreferrer">2017 study of law enforcement perspectives on registration and notification</a> identified concerns among police and sheriff agencies about registry data reliability and utility, communication between systems and implementation challenges. It is a reminder that operating a registry is work, not a costless abstraction.</p>

        <p>Consider, by contrast, the National Institute of Justice’s <a className={linkCls} href="https://nij.ojp.gov/topics/articles/sexual-assault-kits-using-science-find-solutions" target="_blank" rel="noopener noreferrer">research on untested sexual assault kits in Detroit</a>. Testing previously neglected evidence, including kits from cases involving known suspects, offered a means of identifying serial offenders. Investigative capacity can have consequences for future victimization.</p>

        <p>We do not have a comparative accounting of Polk County’s registry enforcement budget and its sexual assault investigative budget. We cannot establish that a particular compliance check displaced a particular investigation. But that is exactly the kind of accounting an institution claiming to protect the public ought to be able to provide.</p>

        <p>How much is spent on recurring compliance operations? How much on responding to reports, processing evidence, training investigators and auditing closed cases? What outcomes does each investment produce?</p>

        <p>If the answer is that both functions can be funded adequately, show the evidence. If resources are scarce, explain the tradeoffs. The public deserves more than a press release.</p>

        <BandHeader title="Accountability cannot run in only one direction" />

        <p>There is a legitimate argument for enforcing lawful registration and supervision requirements and investigating credible evidence of new offending. There is also a legitimate obligation to protect accused people from prejudgment and knowingly false allegations. Neither conflicts with taking a sexual assault report seriously.</p>

        <p>Investigating a report is not convicting the accused. An unproven allegation is not necessarily a fabricated allegation. And a registration violation is not necessarily evidence of new sexual offending.</p>

        <p>The same commitment to evidence should govern all three judgments.</p>

        <p>The contradiction is not that police enforce existing laws while sometimes making mistakes. It is that public narratives can grant agencies enormous credibility for the enforcement of those laws while giving inadequate attention to the quality of the work that directly confronts sexual violence.</p>

        <p>An agency does not need to be infallible to earn public trust. It does need to demonstrate that failures are identified, corrected and prevented from recurring. That means transparent review of sexual assault investigations, meaningful oversight of decisions to classify reports as false, access to victim services, and accountability when professional standards are breached.</p>

        <p>It also means evaluating registry enforcement on its own demonstrated public-safety merits, not exempting it from scrutiny because its stated purpose is so emotionally compelling.</p>

        <BandHeader title="What would protection look like?" />

        <p>Imagine if the determination applied to registration compliance were also applied to ensuring that sexual assault reports are investigated properly.</p>

        <p>Imagine public reporting that distinguished paperwork violations from new allegations of harm, disclosed investigative resources and case outcomes, and documented corrective action when victims were failed. Imagine agencies inviting scrutiny of both sides of their public-safety work rather than relying on the assumption that more enforcement must mean more protection.</p>

        <p>This is not a demand to abandon criminal accountability. It is a demand to make accountability meaningful.</p>

        <p>People who report sexual violence deserve serious investigation. People subject to registration deserve evidence-based, individualized treatment. Communities deserve to know whether the systems operating in their name actually reduce harm. These interests are not mutually exclusive.</p>

        <p>Taylor Cadle did what children are told to do: she told an adult, identified the person hurting her and asked for help.</p>

        <p>The system that was supposed to protect her punished her instead.</p>

        <p>Years later, the same sheriff’s office asks the public to celebrate the intensity of its registry enforcement as evidence of safety.</p>

        <p>The two facts belong in the same conversation.</p>

        <p><strong>A system that knows where a person with a conviction lives, but cannot recognize a child asking to be saved, has not demonstrated that it knows how to protect children.</strong></p>

        <ContextualActionCard config={contextualAction} />

        <Divider />
        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li><a className={linkCls} href="https://gcwire.com/ocean-springs-police-mock-then-arrest-alleged-rape-victim/" target="_blank" rel="noopener noreferrer">GC Wire, Ocean Springs Police Mock Then Arrest Alleged Rape Victim (Nov. 15, 2026)</a> — Local reporting based on body-camera recordings; the underlying assault allegation remains unverified.</li>
          <li><a className={linkCls} href="https://gcwire.com/full-video-body-cam-footage-from-december-911-rape-call-in-ocean-springs/" target="_blank" rel="noopener noreferrer">GC Wire, Full Body-Camera Footage (Nov. 22, 2026)</a> — Published footage accompanying the investigation.</li>
          <li><a className={linkCls} href="https://exonerationregistry.org/cases/14433" target="_blank" rel="noopener noreferrer">National Registry of Exonerations, Taylor Cadle</a> — Documented chronology of Cadle’s wrongful conviction, exoneration and her adoptive father’s criminal case.</li>
          <li><a className={linkCls} href="https://docs.justia.com/cases/federal/district-courts/florida/flmdce/8:2025cv02790/448669/65" target="_blank" rel="noopener noreferrer">Cadle v. Judd, No. 8:25-cv-2790, Doc. 65 (M.D. Fla. Apr. 14, 2026)</a> — Federal ruling on a motion to dismiss; not a final adjudication of civil liability.</li>
          <li><a className={linkCls} href="https://outlook.polksheriff.org/news-investigations/polk-county-news/2026/11/02/24-sex-offenders-and-1-predator-arrested-and-charged-during-october-halloween-investigative-sweep" target="_blank" rel="noopener noreferrer">Polk County Sheriff’s Office, October/Halloween Investigative Sweep (Nov. 2, 2026)</a> — Official account of registration checks, searches, arrests and alleged violations.</li>
          <li><a className={linkCls} href="https://msmagazine.com/2022/11/28/darvo-deny-attack-blame-prosecution-women-report-rape/" target="_blank" rel="noopener noreferrer">Harsey and Freyd, Deny, Attack, Blame (Ms. Magazine, 2022)</a> — Application of the DARVO framework to criminalization of sexual assault complainants.</li>
          <li><a className={linkCls} href="https://pubmed.ncbi.nlm.nih.gov/37154429/" target="_blank" rel="noopener noreferrer">Harsey and Freyd, The Influence of DARVO and Insincere Apologies on Perceptions of Sexual Assault (2023)</a> — Experimental research on perceived credibility and willingness to punish.</li>
          <li><a className={linkCls} href="https://www.justice.gov/archives/opa/pr/justice-department-announces-findings-investigation-baltimore-police-department" target="_blank" rel="noopener noreferrer">U.S. Department of Justice, Baltimore Police Department Investigation (2016)</a> — Federal investigation identifying concerns about inadequate sexual assault response and possible gender bias.</li>
          <li><a className={linkCls} href="https://www.justice.gov/ovw/law-enforcement-guidance" target="_blank" rel="noopener noreferrer">U.S. Department of Justice, Updated Law Enforcement Guidance (2022)</a> — Guidance on identifying bias and improving responses to sexual assault and domestic violence.</li>
          <li><a className={linkCls} href="https://www.propublica.org/article/false-rape-accusations-an-unbelievable-story" target="_blank" rel="noopener noreferrer">ProPublica and The Marshall Project, An Unbelievable Story of Rape (2015)</a> — Investigative account of the wrongful prosecution of Marie and subsequent identification of her attacker.</li>
          <li><a className={linkCls} href="https://nij.ojp.gov/library/publications/law-enforcement-perspectives-sex-offender-registration-and-notification-2" target="_blank" rel="noopener noreferrer">National Institute of Justice, Law Enforcement Perspectives on Sex Offender Registration and Notification (2017)</a> — Research on law enforcement perspectives, implementation and concerns about registry data and utility.</li>
          <li><a className={linkCls} href="https://nij.ojp.gov/topics/articles/sexual-assault-kits-using-science-find-solutions" target="_blank" rel="noopener noreferrer">National Institute of Justice, Sexual Assault Kits: Using Science to Find Solutions (2015)</a> — Detroit research on untested kits and identification of serial offenders.</li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li><Link className={linkCls} to="/blog/results-dont-speak-for-themselves">The Results Don’t Speak for Themselves</Link></li>
          <li><Link className={linkCls} to="/blog/the-enforcers">The Enforcers</Link></li>
          <li><Link className={linkCls} to="/blog/what-good-is-the-registry">What Good Is the Registry?</Link></li>
        </ul>
      </article>
    </BlogLayout>
  );
}
