import type { JSX } from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout } from "../../components/solar";
import ContextualActionCard from "../../components/solar/ContextualActionCard";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "federal-lawmaker",
  primaryPositionId: "closer-to-home",
  formatId: "email",
  headline: "Ask Congress to track how platforms respond to reports of child sexual abuse material",
  description:
    "Congress can ask federal agencies how they enforce provider reporting duties and how they measure whether corporate safeguards reduce the time abuse material stays accessible.",
  recommendation: {
    audienceLabel: "your U.S. representative or senators",
    suggestion:
      "Ask for an oversight briefing and public, privacy-protective reporting on enforcement, compliance, and how quickly platforms disable access after credible reports.",
    actionLabel: "Build an email to Congress",
  },
  suggestedAsk:
    "Please request an oversight briefing on enforcement of federal provider reporting duties and seek aggregate public reporting on enforcement outcomes, corporate compliance, and time to disable public access after credible reports. Protect survivor identities and confidential investigations.",
  personalContext:
    "The Pornhub investigation led me to ask what happens after someone reports child sexual abuse material. The Grok cases also raise questions about how companies keep known abuse material out of training data. I want measurable outcomes and independent oversight.",
  source: {
    title: "Pornhub, Section 230, and Who Answers for CSAM",
    path: "/blog/pornhub-section-230-csam-accountability",
    type: "blog",
  },
  jurisdiction: "Federal",
};

export default function PornhubSection230CsamAccountability(): JSX.Element {
  return (
    <BlogLayout
      title="Pornhub, Section 230, and Who Answers for CSAM"
      description="Pornhub’s settlements and the Grok lawsuits expose a gap between the prison terms individuals face for CSAM and the way institutions are held to account."
      keywords="Pornhub Section 230, Aylo, xAI, Grok, child sexual abuse material, CSAM, platform accountability, deferred prosecution, federal mandatory minimums, survivor remedies"
      date="Nov 19, 2026"
      readTime="12 min read"
      badge="📝 BLOG"
      lede="A single private transfer can carry five years in federal prison. Pornhub’s settlements and the pending lawsuits over Grok raise a harder question. What does accountability look like for the companies with the power to stop abuse material from spreading?"
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR">
          <p>
            Section 230 leaves federal criminal prosecution available. Aylo faced a deferred
            money-laundering prosecution, a consumer-protection order, and a proposed survivor
            settlement. A pending xAI suit raises a further question about what happens when a
            company’s own product allegedly generates and delivers new abuse material.
          </p>
        </Callout>

        <p>
          Federal law can set a five-year prison floor for forwarding a single file of child sexual
          abuse material (CSAM) to one person. Now put that beside the question raised by the
          Pornhub records. When a company has the power to stop abuse material from reaching
          thousands, what happens if a credible report comes in and the material stays up?
        </p>

        <p>
          An arrest can interrupt one person’s distribution. A platform can disable public access,
          block known copies from coming back, and spare survivors the job of searching for their
          own abuse. The difference in reach is enormous. So is the difference between the
          consequences the law spells out for a sender and the ones the public can see for
          institutional failures. The Supreme Court described the continuing harm from circulation
          in{" "}
          <a
            className={linkCls}
            href="https://www.govinfo.gov/content/pkg/USREPORTS-572/pdf/USREPORTS-572-434.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paroline v. United States
          </a>
          .
        </p>

        <BandHeader title="What happened after notice?" />

        <p>
          In its November 16, 2026{" "}
          <a
            className={linkCls}
            href="https://www.icij.org/news/2026/11/he-used-pornhub-as-the-gun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            investigation of Pornhub and its parent company, Aylo
          </a>
          , the International Consortium of Investigative Journalists reported that a video
          depicting the abuse of a 12-year-old remained online for more than a month after notice
          from an Alabama law-enforcement agent. That account came from an employee deposition. An
          internal email referred to a request to leave the material up. In a separate civil
          complaint, the child’s mother alleged that officers contacted Aylo three times over
          several weeks and asked for removal. The difference matters. Investigators would need to
          establish who gave which instruction, who received it, and what actually happened to
          public access and evidence preservation. The same complaint alleged sales through a
          revenue-sharing program. That allegation remains distinct from the trafficking-related
          advertising revenue Aylo acknowledged in another case.
        </p>

        <p>
          ICIJ also reported the experience of a woman it identified as Tina, whose ex-boyfriend
          repeatedly posted intimate videos without her consent. Emails reviewed by the reporters
          showed that Pornhub told her seven months after her first notice that it had used a
          digital fingerprint to help prevent reuploads. Her account concerns nonconsensual intimate
          material. It illustrates what repeat publication and slow intervention can do to a person
          whose images remain within a platform’s control.
        </p>

        <p>
          The investigation largely concerns 2020 and earlier. Pornhub told ICIJ that it removes
          potential CSAM when there is doubt about age and continues to invest in safeguards.
          Starting in December 2020, Aylo restricted uploads to verified users, removed millions of
          videos from unverified accounts, and limited downloads. Uploader identity and the age and
          consent of every person depicted are separate verification questions. The more revealing
          test is how fast a credible report changes what the public can still see.
        </p>

        <BandHeader title="Three proceedings, three kinds of accountability" />

        <p>
          <strong>The 2023 federal criminal case.</strong>
          {" "}
          The Eastern District of New York charged Aylo Holdings under{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s1957/"
            target="_blank"
            rel="noopener noreferrer"
          >
            18 U.S.C. § 1957
          </a>
          {" "}
          with an unlawful monetary transaction involving proceeds of sex trafficking tied to
          GirlsDoPorn and GirlsDoToys. In the{" "}
          <a
            className={linkCls}
            href="https://www.justice.gov/d9/2023-12/2023.12.21_dpa_final_court_exhibit_version_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            signed deferred prosecution agreement and statement of facts
          </a>
          , Aylo acknowledged facts that included receiving victim complaints and collecting
          approximately $763,891 in advertising payments attributable to those businesses’ content.
          The charged transaction and the advertising receipts are separately described in the
          agreement. The case arose from sex-trafficking proceeds and involved a different record
          from the child-abuse material described in the Alabama complaint.
        </p>

        <p>
          The agreement required roughly $1.845 million in fines and forfeiture payable to the
          United States, a process for payments to eligible victims, and an independent monitor for
          three years. The monitoring mandate covers content screening and the handling of takedown
          requests. If Aylo fulfills the agreement, DOJ will seek dismissal with prejudice. A breach
          can put the criminal case back in motion. DOJ cited cooperation and changes to internal
          controls and recorded that the company had not voluntarily disclosed the conduct. The
          agreement expressly leaves individual prosecutions available.
        </p>

        <p>
          <strong>The 2025 FTC and Utah case.</strong>
          {" "}
          In a{" "}
          <a
            className={linkCls}
            href="https://www.ftc.gov/system/files/ftc_gov/pdf/AyloGroupLtd-et-al-Complaint.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            consumer-protection complaint
          </a>
          , regulators alleged that Aylo misled users about safeguards against CSAM and
          nonconsensual sexual content. The{" "}
          <a
            className={linkCls}
            href="https://www.ftc.gov/system/files/ftc_gov/pdf/Pornhub-StipOrder.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            stipulated order
          </a>
          {" "}
          set a $15 million judgment, with $5 million payable to Utah and the balance suspended
          subject to the order’s conditions. It also required age and consent verification, a
          prevention program, independent assessments, and public reporting. The order imposes
          enforceable obligations. Its underlying allegations were resolved by agreement.
        </p>

        <p>
          <strong>The 2026 proposed civil class settlement.</strong>
          {" "}
          On November 9, a federal judge in California gave preliminary approval to a proposed $120
          million agreement covering two class actions over content depicting people who were under
          18. The proposal includes survivor compensation and five years of outside monitoring, and
          still requires final approval. Aylo made no admission of wrongdoing in that deal. The $120
          million is the proposed gross fund, which includes amounts available for approved fees and
          expenses. Compensation can matter enormously to survivors. A settlement figure still
          leaves open who made the decisions that kept material accessible and what officials did to
          investigate those decisions.{" "}
          <a
            className={linkCls}
            href="https://www.icij.org/news/2026/11/he-used-pornhub-as-the-gun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICIJ’s reporting
          </a>
          {" "}
          and{" "}
          <a
            className={linkCls}
            href="https://www.pollockcohen.com/media/news-releases/2026-08-17-law360-pornhub-to-pay-120m-to-end-child-abuse-content-cases"
            target="_blank"
            rel="noopener noreferrer"
          >
            class counsel’s account of the agreement
          </a>
          {" "}
          describe the proposal.
        </p>

        <p>
          Across these proceedings, we can see what Aylo agreed to pay and what it agreed to change.
          There is much less visibility into whether anyone with authority over the platform was
          personally investigated for decisions that allegedly kept abuse material accessible. That
          question belongs alongside the settlement totals.
        </p>

        <BandHeader title="Where Section 230 applies" />

        <p>
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-136/t47/s230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            47 U.S.C. § 230(c)(1)
          </a>
          {" "}
          generally prevents treating an interactive computer service or its user as the publisher
          or speaker of information supplied by another content provider. Section 230(e)(1)
          expressly preserves federal criminal enforcement, including the chapter covering sexual
          exploitation of children. The same carveout governs a federal case against someone using a
          chat app. Federal prosecutors may investigate a platform’s own conduct under{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s2252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 2252
          </a>
          {" "}
          or{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-136/t18/s2252A/"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 2252A
          </a>
          {" "}
          where the evidence fits. A private damages action under{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s2255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 2255
          </a>
          {" "}
          raises a separate immunity question, even though the civil statute incorporates federal
          crimes.
        </p>

        <p>
          The difference is concrete. In{" "}
          <a
            className={linkCls}
            href="https://cdn.ca9.uscourts.gov/datastore/opinions/2025/08/01/24-177.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Doe 1 v. Twitter
          </a>
          , the Ninth Circuit said the federal-criminal carveout did not save the plaintiffs’
          private § 2255 claim. It also held that Section 230 barred certain theories based on
          removal and amplification of third-party posts, while allowing negligence-per-se and
          defective reporting-design theories to proceed past that defense. The ruling left those
          claims for further proceedings. The Supreme Court{" "}
          <a
            className={linkCls}
            href="https://www.supremecourt.gov/docket/docketfiles/html/public/25-949.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            declined review in May 2026
          </a>
          , leaving the decision in place without a ruling on the merits. The 2018 law known as
          FOSTA adds a separate exception for certain civil sex-trafficking claims when the conduct
          underlying the claim constitutes a violation of § 1591, along with specified state
          criminal prosecutions. Simply invoking a federal criminal statute in a civil complaint
          does not turn the suit into federal criminal enforcement.
        </p>

        <BandHeader title="What if the company’s product makes the next copy?" />

        <p>
          In August 2026, a survivor identified as Jane Doe 1 filed a{" "}
          <a
            className={linkCls}
            href="https://cdn.arstechnica.net/wp-content/uploads/2026/08/Doe-v-X-Corp-Complaint-8-27-26.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            proposed class action against xAI
          </a>
          {" "}
          in federal court in California. The original material records abuse she suffered as a
          young child. The National Center for Missing & Exploited Children had already catalogued
          it by digital fingerprint, the complaint says. Doe alleges that xAI obtained and kept
          copies in its training dataset, used them to train Grok, then used Grok to generate new
          abuse images depicting her. She alleges that xAI possessed and distributed generated
          material and that publicly posted outputs could feed back into training. A court has yet
          to determine whether that alleged chain occurred or what anyone at xAI knew.
        </p>

        <p>
          <a
            className={linkCls}
            href="https://docs.justia.com/cases/federal/district-courts/california/candce/5%3A2026cv00772/463184/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            Related Grok suits
          </a>
          {" "}
          allege that the tool turned ordinary photos of real people into sexualized depictions.
          Doe’s training allegation goes further. She says material that documents her actual abuse
          went into the system.{" "}
          <a
            className={linkCls}
            href="https://www.sec.gov/Archives/edgar/data/1181412/000162828026066880/spcx-20260930.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            SpaceX’s securities filing
          </a>
          {" "}
          discloses multiple civil suits over Grok’s image tools. A{" "}
          <a
            className={linkCls}
            href="https://www.jpml.uscourts.gov/sites/jpml/files/Hearing%20Session%20Filed_December%202026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            federal judicial panel’s calendar
          </a>
          {" "}
          lists Doe’s case among the suits proposed for coordination.
        </p>

        <p>
          Doe seeks damages and a court order to stop the alleged conduct under the civil remedies
          in{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s2255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 2255
          </a>
          {" "}
          and{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-136/t18/s2252A/"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 2252A(f)
          </a>
          . The{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/t18/s2256/"
            target="_blank"
            rel="noopener noreferrer"
          >
            federal definition
          </a>
          {" "}
          can cover a depiction altered or generated to show a recognizable real person as a minor
          engaged in sexually explicit conduct, including when an image of a now-adult person as a
          child was used. A claim based on what a company allegedly created or developed raises a
          different Section 230 question from a claim that it should have removed someone else’s
          post. Whether any particular claim survives depends on the conduct alleged and the legal
          duty it invokes.
        </p>

        <p>
          There is a separate case in which the consequences are already clear. According to{" "}
          <a
            className={linkCls}
            href="https://norfolk.gov/m/newsflash/Home/Detail/10593"
            target="_blank"
            rel="noopener noreferrer"
          >
            Norfolk’s Commonwealth’s Attorney
          </a>
          , SpaceXAI reported a user who uploaded 21 known images of child sexual abuse to Grok. The
          man admitted asking Grok to create additional material from images he had uploaded. He
          pleaded guilty to possession under Virginia law and received five years in prison. The
          company’s report helped bring that case and documents an instance in which known files
          reached the service and were reported. Whether Doe’s images entered a training dataset,
          and who knew about any such use, remain separate questions.
        </p>

        <p>
          We can already say what happened to one person who put known abuse images into the
          service. For the much broader allegations about what the company did with abuse material
          inside its own system, the public record so far is a survivor’s complaint and pending
          civil litigation. That gap in what the public can see should bother anyone who takes the
          harm seriously.
        </p>

        <BandHeader title="What federal law asks of a platform" />

        <p>
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-118/t18/s2258A/"
            target="_blank"
            rel="noopener noreferrer"
          >
            18 U.S.C. § 2258A
          </a>
          {" "}
          requires covered providers to report to the National Center for Missing & Exploited
          Children’s CyberTipline as soon as reasonably possible after obtaining actual knowledge of
          facts or circumstances showing an apparent covered violation. The statute provides fines
          for knowing and willful failures to make required reports. It also disclaims a general
          federal duty under that section to monitor users or affirmatively search for material. The
          reporting obligation, handling of a specific takedown request, and elements of a
          distribution offense each call for different proof. Current law provides for secure
          preservation of reported material, which can occur with public access disabled.
        </p>

        <p>
          A distribution prosecution still requires proof beyond a reasonable doubt of the
          prohibited conduct, the required knowledge, and the statutory connection to interstate or
          foreign commerce. An ad-supported site can make money from traffic without that business
          model proving who knew what about a particular file. Repeated, specific reports, what
          reviewers confirmed, records of who could disable access, and later decisions to keep
          distributing or selling material could change what the government can prove. The public
          reporting warrants those questions while leaving the evidence needed to answer them
          incomplete.
        </p>

        <p>
          Under the{" "}
          <a
            className={linkCls}
            href="https://www.justice.gov/jm/jm-9-28000-principles-federal-prosecution-business-organizations"
            target="_blank"
            rel="noopener noreferrer"
          >
            Justice Department’s corporate prosecution principles
          </a>
          , a corporation can be liable for an agent’s unlawful acts within the scope of their
          duties when intended at least in part to benefit the company. Personal liability takes
          evidence of an individual’s own culpability. A title, an internal escalation, and the
          authority to act can all guide an investigation. The criminal question is what someone
          actually did with the knowledge they had and what the charged offense requires.
        </p>

        <BandHeader title="What five years means when the defendant is a person" />

        <p>
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s2252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sections 2252(a)(2) and (b)(1)
          </a>
          {" "}
          normally carry five to 20 years for knowing distribution without a qualifying prior
          conviction. The law reaches the act of distributing existing material. A sender can be
          prosecuted even when someone else made it and no money changed hands. A one-to-one
          transmission can qualify, including when the recipient is undercover. In a{" "}
          <a
            className={linkCls}
            href="https://www.justice.gov/usao-ri/pr/scituate-resident-sentenced-federal-prison-possessing-distributing-child-pornography"
            target="_blank"
            rel="noopener noreferrer"
          >
            public Rhode Island case
          </a>
          , DOJ reported a five-year sentence and eight years of supervised release after a person
          sent two images to an undercover agent and pleaded guilty to distribution and possession.
          The case also involved a much larger collection recovered from his phone. It illustrates
          how private transfers enter distribution prosecutions alongside other case facts.
        </p>

        <p>
          Federal consequences can reach far past the prison term. For covered offenses,{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s3583/"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 3583(k)
          </a>
          {" "}
          authorizes supervised release from five years to life.{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s2259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Section 2259
          </a>
          {" "}
          requires restitution and directs courts in covered trafficking cases to consider the
          defendant’s relative role in the victim’s losses, subject to a statutory floor. Congress
          told judges to consider relative responsibility when deciding restitution. It still set
          the same prison floor for knowing distribution across a wide range of conduct.
        </p>

        <p>
          In fiscal 2025, the{" "}
          <a
            className={linkCls}
            href="https://www.ussc.gov/research/quick-facts/child-pornography"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. Sentencing Commission
          </a>
          {" "}
          counted 1,432 people sentenced in its federal non-production CSAM category. Ninety-nine
          percent received prison time. The average for the Commission’s trafficking category was
          156 months. That category combines cases with different facts and records. These data
          describe people who reached sentencing and offer no comparable count of corporate
          investigations, declinations, or private settlements. In its{" "}
          <a
            className={linkCls}
            href="https://www.ussc.gov/research/research-reports/federal-sentencing-child-pornography-non-production-offenses"
            target="_blank"
            rel="noopener noreferrer"
          >
            2021 study
          </a>
          , the Commission found that prosecutors sometimes reduced receipt or distribution charges
          to possession charges, changing the applicable minimum. The charging decision shapes how
          much room a judge has to weigh the facts. SOLAR’s{" "}
          <Link className={linkCls} to="/blog/federal-sex-crime-process">
            federal case-process guide
          </Link>
          {" "}
          explains how those stages fit together.
        </p>

        <BandHeader title="What the public can ask the government to show" />

        <p>
          The government knows how to weigh consequences when it negotiates with a company.{" "}
          <a
            className={linkCls}
            href="https://www.justice.gov/jm/jm-9-28000-principles-federal-prosecution-business-organizations"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOJ’s corporate prosecution principles
          </a>
          {" "}
          tell prosecutors to consider effects on people who had no role in the wrongdoing, the
          value of compliance reforms, and whether the people responsible can be prosecuted. There
          are good reasons for that discretion. A deal can compensate survivors, change a
          verification process, and give an independent monitor the authority to check whether the
          changes work. Why is that kind of judgment so obviously valuable when a company is
          involved, yet so sharply limited once a person is convicted of an offense carrying a
          mandatory minimum?
        </p>

        <p>
          Congress can ask for public, privacy-protective reporting on how federal authorities
          enforce provider reporting duties, what corporate agreements require, how often breaches
          trigger consequences, and whether oversight can document faster takedowns and fewer known
          copies returning. Where a company operates a generative tool, oversight should also ask
          whether anyone independently verifies how the company keeps known abuse material out of
          training data and responds when it discovers a failure.
        </p>

        <p>
          A five-year sentence tells us exactly what the government demanded of a person. A fine, a
          settlement, or a promise to change a product tells survivors much less about whether
          anyone stopped the material from reaching the next viewer.{" "}
          <Link className={linkCls} to="/advocacy">
            SOLAR’s advocacy framework
          </Link>
          {" "}
          asks what actually prevents harm. The institutions with the power to stop it should have
          to show what they did.
        </p>

        <ContextualActionCard config={contextualAction} />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            <a
              className={linkCls}
              href="https://www.icij.org/news/2026/11/he-used-pornhub-as-the-gun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ICIJ investigation, November 16, 2026
            </a>
            {" "}
            — Investigative reporting based on interviews, company responses, and documents from
            civil litigation. Supports the accounts of notice, reuploads, alleged monetization, and
            preliminary settlement approval.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.justice.gov/d9/2023-12/2023.12.21_dpa_final_court_exhibit_version_0.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aylo deferred prosecution agreement and statement of facts
            </a>
            {" "}
            — Federal criminal filing. Paragraphs 4 and 8–10 and Attachments C–D cover DOJ’s
            rationale, financial terms, admissions, agreement scope, and monitor duties.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.ftc.gov/system/files/ftc_gov/pdf/AyloGroupLtd-et-al-Complaint.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              FTC and Utah civil complaint
            </a>
            {" "}
            and{" "}
            <a
              className={linkCls}
              href="https://www.ftc.gov/system/files/ftc_gov/pdf/Pornhub-StipOrder.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              stipulated district court order
            </a>
            {" "}
            — Primary records for the consumer-protection allegations, suspended judgment, and
            operational requirements.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.pollockcohen.com/media/news-releases/2026-08-17-law360-pornhub-to-pay-120m-to-end-child-abuse-content-cases"
              target="_blank"
              rel="noopener noreferrer"
            >
              Class counsel’s account of the proposed settlement
            </a>
            {" "}
            — Account from plaintiffs’ counsel made public before preliminary approval. Read
            alongside ICIJ’s report on the Nov. 9 order in Jane Doe v. MindGeek USA Inc., No.
            8:21-cv-00338-WLH-ADS (C.D. Cal.).
          </li>
          <li>
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-136/t47/s230/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Section 230
            </a>
            ,{" "}
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-120/t18/s2255/"
              target="_blank"
              rel="noopener noreferrer"
            >
              § 2255’s civil remedy
            </a>
            ,{" "}
            <a
              className={linkCls}
              href="https://cdn.ca9.uscourts.gov/datastore/opinions/2025/08/01/24-177.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Ninth Circuit’s Doe 1 opinion
            </a>
            , and{" "}
            <a
              className={linkCls}
              href="https://www.supremecourt.gov/docket/docketfiles/html/public/25-949.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Supreme Court docket
            </a>
            {" "}
            — Statutes and court records for the federal criminal carveout and its limits in civil
            litigation.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-120/t18/s2252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Federal distribution law
            </a>
            ,{" "}
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-136/t18/s2252A/"
              target="_blank"
              rel="noopener noreferrer"
            >
              related federal CSAM offenses
            </a>
            , and{" "}
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-118/t18/s2258A/"
              target="_blank"
              rel="noopener noreferrer"
            >
              provider reporting and preservation duties
            </a>
            {" "}
            — Statutory text for individual and corporate enforcement questions.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://cdn.arstechnica.net/wp-content/uploads/2026/08/Doe-v-X-Corp-Complaint-8-27-26.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Doe 1 v. X.AI Corp. complaint
            </a>
            {" "}
            — Civil pleading, particularly paragraphs 8, 84–92, and 103–123. Source for the
            allegations about training data, generated material, and the relief sought.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://docs.justia.com/cases/federal/district-courts/california/candce/5%3A2026cv00772/463184/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              September district court order in a related Grok case
            </a>
            ,{" "}
            <a
              className={linkCls}
              href="https://www.sec.gov/Archives/edgar/data/1181412/000162828026066880/spcx-20260930.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              SpaceX’s securities filing
            </a>
            , and{" "}
            <a
              className={linkCls}
              href="https://www.jpml.uscourts.gov/sites/jpml/files/Hearing%20Session%20Filed_December%202026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              federal panel’s calendar
            </a>
            {" "}
            — Records of related civil suits and the proposed coordination.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/t18/s2256/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Federal definition of covered depictions and identifiable minors
            </a>
            {" "}
            — 18 U.S.C. § 2256(8)(C) and (9).
          </li>
          <li>
            <a
              className={linkCls}
              href="https://norfolk.gov/m/newsflash/Home/Detail/10593"
              target="_blank"
              rel="noopener noreferrer"
            >
              Norfolk Commonwealth’s Attorney case summary
            </a>
            {" "}
            — Separate state prosecution, platform report to NCMEC, and five-year prison sentence.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.justice.gov/jm/jm-9-28000-principles-federal-prosecution-business-organizations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Justice Manual on business organizations
            </a>
            {" "}
            — DOJ policy on corporate attribution, charging discretion, individual accountability,
            and corporate agreements.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-120/t18/s3583/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Federal supervised release
            </a>
            ,{" "}
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-120/t18/s2259/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mandatory restitution
            </a>
            , and{" "}
            <a
              className={linkCls}
              href="https://www.govinfo.gov/content/pkg/USREPORTS-572/pdf/USREPORTS-572-434.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Supreme Court’s Paroline opinion
            </a>
            {" "}
            — Statutes and opinion on post-prison supervision, victim compensation, and continuing
            harm from circulation.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.ussc.gov/research/quick-facts/child-pornography"
              target="_blank"
              rel="noopener noreferrer"
            >
              FY 2025 Sentencing Commission figures
            </a>
            {" "}
            and{" "}
            <a
              className={linkCls}
              href="https://www.ussc.gov/research/research-reports/federal-sentencing-child-pornography-non-production-offenses"
              target="_blank"
              rel="noopener noreferrer"
            >
              2021 non-production sentencing report
            </a>
            {" "}
            — National sentencing outcomes and analysis of charging and sentencing variation.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.justice.gov/usao-ri/pr/scituate-resident-sentenced-federal-prison-possessing-distributing-child-pornography"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Attorney’s Office for Rhode Island case summary
            </a>
            {" "}
            — Public source on the distribution and possession pleas and sentence used in the
            individual example.
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />

        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/permanent-punishment-public-temporary-shame-powerful">
              Permanent Punishment for the Public, Temporary Shame for the Powerful
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/register-every-crime-or-none">
              RECON’s consistency test for public registries
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/accountability-watch">
              SOLAR Accountability Watch
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}
