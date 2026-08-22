import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";
import {
  GuideSectionHeader,
  GuideSectionCard,
  GuideProse,
  GuideCallout,
  GuideIntro,
  PullQuoteBlock,
  SoftDivider,
  QuickStartPanel,
  GuideChecklist,
  ScriptBox,
  OfflineOptions,
  DocumentPacket,
  VerifyBeforeActing,
  CommonMistakes,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
  PathwayCard,
  RoleGuidanceGrid,
  TimelineGuidanceGrid,
  DoDontJudgment,
  RedFlagGreenFlag,
  DualDepthSection,
} from "../../components/solar";

const sourceLinks = {
  ftcGovernmentImpersonators:
    "https://consumer.ftc.gov/articles/how-avoid-government-impersonation-scam",
  ftcLawEnforcementScams:
    "https://consumer.ftc.gov/consumer-alerts/2025/06/scammers-are-impersonating-local-law-enforcement",
  ftcWhatToDoIfScammed:
    "https://consumer.ftc.gov/articles/what-do-if-you-were-scammed",
  ftcReportFraud: "https://reportfraud.ftc.gov/",
  identityTheft: "https://www.identitytheft.gov/Steps",
  ic3Complaint: "https://complaint.ic3.gov/",
  fbiImpersonationBoston:
    "https://www.fbi.gov/contact-us/field-offices/boston/news/fbi-warns-new-englanders-to-beware-of-law-enforcement-and-government-impersonation-scams",
  fbiImpersonationJacksonville:
    "https://www.fbi.gov/contact-us/field-offices/jacksonville/news/fbi-jacksonville-warns-public-to-beware-of-scammers-impersonating-fbi-special-agents-in-north-florida",
  cfpbFraudScams:
    "https://www.consumerfinance.gov/ask-cfpb/what-are-some-common-types-of-fraud-and-scams-en-2092/",
  uspisReport: "https://www.uspis.gov/report",
  usaReportCrime: "https://www.usa.gov/report-crime",
  usaStateConsumer: "https://www.usa.gov/state-consumer",
  dojOvwStalking: "https://www.justice.gov/ovw/stalking",
  ovcStalking: "https://ovc.ojp.gov/topics/stalking",
  sparcDocumentationLog: "https://www.stalkingawareness.org/documentation-log/",
  rcfpRecordingGuide: "https://www.rcfp.org/reporters-recording-guide/",
  rcfpRecordingIntro:
    "https://www.rcfp.org/introduction-to-reporters-recording-guide/",
  lawHelp: "https://www.lawhelp.org/find-help",
  lscFindHelp: "https://www.lsc.gov/about-lsc/what-legal-aid/get-legal-help",
  abaFindLegalHelp:
    "https://www.americanbar.org/groups/legal_services/flh-home/",
  xPrivateInformation:
    "https://help.x.com/en/rules-and-policies/personal-information",
  xReportViolation:
    "https://help.x.com/en/rules-and-policies/x-report-violation",
  facebookReport:
    "https://www.facebook.com/help/212722115425932/",
  tiktokReportIllegal:
    "https://www.tiktok.com/legal/page/global/reporting-illegal-content/en",
};

const sources = [
  {
    label: "FTC — How to avoid a government impersonation scam",
    href: sourceLinks.ftcGovernmentImpersonators,
    description:
      "Supports the guidance to pause suspicious official-sounding contacts, avoid caller-supplied numbers, and verify through an independently located official source.",
  },
  {
    label: "FTC — Scammers impersonating local law enforcement",
    href: sourceLinks.ftcLawEnforcementScams,
    description:
      "Supports red flags around fake warrant, jury duty, sheriff, police, and urgent-payment calls.",
  },
  {
    label: "FTC — What to do if you were scammed",
    href: sourceLinks.ftcWhatToDoIfScammed,
    description:
      "Supports payment-response steps after money, banking credentials, gift cards, crypto, wires, or payment app transfers are involved.",
  },
  {
    label: "FTC — ReportFraud.gov",
    href: sourceLinks.ftcReportFraud,
    description:
      "Official federal reporting portal for consumer fraud, scams, impersonation, and bad business practices.",
  },
  {
    label: "IdentityTheft.gov",
    href: sourceLinks.identityTheft,
    description:
      "Official FTC identity-theft recovery tool for people whose personal information has been misused.",
  },
  {
    label: "FBI Internet Crime Complaint Center",
    href: sourceLinks.ic3Complaint,
    description:
      "Official FBI portal for internet-enabled fraud, cybercrime, and online extortion reporting.",
  },
  {
    label: "FBI — Law enforcement and government impersonation scams",
    href: sourceLinks.fbiImpersonationBoston,
    description:
      "Supports the warning that scammers may impersonate law enforcement and use fear, urgency, and spoofed information.",
  },
  {
    label: "FBI Jacksonville — FBI impersonation scam warning",
    href: sourceLinks.fbiImpersonationJacksonville,
    description:
      "Supports the warning that scammers may spoof numbers, claim official authority, and demand payment.",
  },
  {
    label: "Consumer Financial Protection Bureau — Fraud and scams",
    href: sourceLinks.cfpbFraudScams,
    description:
      "Supports quick contact with banks, card issuers, and payment providers when money or financial credentials may be at risk.",
  },
  {
    label: "U.S. Postal Inspection Service — Report mail fraud",
    href: sourceLinks.uspisReport,
    description:
      "Official reporting source when threatening, fraudulent, or impersonation material arrives through the mail.",
  },
  {
    label: "USA.gov — Report a crime",
    href: sourceLinks.usaReportCrime,
    description:
      "Supports the general distinction between emergency reporting, local law enforcement, and non-emergency channels.",
  },
  {
    label: "USA.gov — State consumer protection offices",
    href: sourceLinks.usaStateConsumer,
    description:
      "Directory for state attorney general and consumer-protection offices.",
  },
  {
    label: "DOJ Office on Violence Against Women — Stalking",
    href: sourceLinks.dojOvwStalking,
    description:
      "Official federal source for stalking-related awareness and victim-resource framing.",
  },
  {
    label: "Office for Victims of Crime — Stalking",
    href: sourceLinks.ovcStalking,
    description:
      "Federal victim-resource source for stalking safety planning and support.",
  },
  {
    label: "SPARC — Stalking incident and behavior documentation log",
    href: sourceLinks.sparcDocumentationLog,
    description:
      "Practical documentation resource for repeated unwanted contact, threats, surveillance, and stalking patterns.",
  },
  {
    label: "Reporters Committee — Reporter’s Recording Guide",
    href: sourceLinks.rcfpRecordingGuide,
    description:
      "Current recording-law reference used only as a verification starting point, not as a substitute for state-specific legal advice.",
  },
  {
    label: "Reporters Committee — Introduction to recording law guide",
    href: sourceLinks.rcfpRecordingIntro,
    description:
      "Supports caution around interstate calls and state-by-state recording-law variation.",
  },
  {
    label: "LawHelp.org — Find legal aid",
    href: sourceLinks.lawHelp,
    description:
      "Legal-aid directory for people who need help with protective orders, consumer fraud, housing, employment, or civil legal issues.",
  },
  {
    label: "Legal Services Corporation — Get legal help",
    href: sourceLinks.lscFindHelp,
    description:
      "National legal-aid finder for civil legal assistance.",
  },
  {
    label: "American Bar Association — Find Legal Help",
    href: sourceLinks.abaFindLegalHelp,
    description:
      "State-by-state legal help and lawyer referral directory.",
  },
  {
    label: "X Help Center — Private information policy",
    href: sourceLinks.xPrivateInformation,
    description:
      "Platform-specific reference for reporting exposed private information on X.",
  },
  {
    label: "X Help Center — Report a violation",
    href: sourceLinks.xReportViolation,
    description:
      "Platform-specific reporting process for X.",
  },
  {
    label: "Facebook Help Center — Report abusive things",
    href: sourceLinks.facebookReport,
    description:
      "Platform-specific reporting process for Facebook.",
  },
  {
    label: "TikTok — Reporting illegal content",
    href: sourceLinks.tiktokReportIllegal,
    description:
      "Platform-specific reporting pathway for TikTok content concerns.",
  },
];

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Scams, Extortion, Doxxing & Harassment Survival Guide | The SOLAR Project"
        description="A calm, practical SOLAR guide for people targeted by registry-related scams, fake official calls, doxxing, extortion, threats, stalking, or harassment."
        keywords="sex offense registry scams, fake warrant scam, doxxing, harassment, extortion, evidence preservation, registry safety, SOLAR Project"
      />

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white py-12 sm:py-16 no-print">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm text-slate-200 hover:text-white transition-colors"
          >
            ← Back to Resources
          </Link>

          <div className="mt-5 inline-flex rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
            SOLAR Resource Guide
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Scams, Extortion, Doxxing & Harassment Survival Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical first-response guide for people who may be targeted
            because of registry status, criminal-history stigma, supervision,
            public records, or fear-based harassment.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100 transition-colors"
            >
              🖨️ Print Guide
            </button>

            <a
              href="#sources"
              className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Jump to Sources
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ShareBar />

        <GuideIntro title="Start here" icon="🧭">
          <p>
            If you are reading this because someone called, posted, threatened,
            exposed, impersonated, followed, or pressured you, pause before you
            respond. Fear is exactly what scammers and harassers often use to
            make people act too fast.
          </p>

          <p>
            This guide is written for people on registries, people accused or
            convicted of sex offenses, loved ones, and supporters. Registry
            status can make a threat feel more dangerous because personal
            information may already be public, police contact may feel risky,
            and family or housing may be affected. Those concerns are real.
            The safest first move is still usually the same: slow down, verify
            independently, preserve evidence, secure what can be secured, and
            choose the right reporting path.
          </p>

          <p>
            This is not legal advice, and it does not promise that police,
            courts, platforms, or agencies will act in every case. It is a
            survival guide for the first steps that protect your money, records,
            household, and options.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If something feels wrong right now"
          subtitle="Use this loop before paying, replying, deleting, blocking, confronting, or publicly posting."
          icon="🛑"
          urgentActions={[
            <span>
              <strong>Check immediate safety.</strong> If someone is at your
              home or workplace, there is an imminent threat, a weapon is
              mentioned, a child or dependent is threatened, or you cannot get
              to a safer place, contact emergency services first.
            </span>,
            <span>
              <strong>Do not pay or send information.</strong> Do not provide
              Social Security numbers, registry numbers, passwords, PINs,
              verification codes, banking credentials, copies of ID, or registry
              paperwork to an inbound caller, texter, emailer, or social-media
              account you have not independently verified.
            </span>,
            <span>
              <strong>Preserve before you block or delete.</strong> Screenshot,
              save URLs, write down times, keep voicemails, and save payment
              requests before cutting off contact when it is safe to do so.
            </span>,
            <span>
              <strong>Do not confront or retaliate.</strong> Do not threaten
              back, doxx someone, make fake accounts, bait the person, hack,
              track, or try to “teach them a lesson.”
            </span>,
          ]}
          nextActions={[
            <span>
              <strong>Verify the claim through an independent source.</strong>{" "}
              Find the official agency, court, registry, probation, bank, or
              platform contact yourself. Do not use the phone number, email,
              website, payment portal, or callback instructions supplied by the
              suspicious person.
            </span>,
            <span>
              <strong>Secure accounts and money.</strong> Change compromised
              passwords, check recovery email and phone numbers, revoke unknown
              sessions, contact your bank or payment app, and follow any
              supervision or device-monitoring conditions before changing
              technology.
            </span>,
            <span>
              <strong>Report in the right lane.</strong> Local threats,
              stalking, and vandalism may need local law enforcement. Internet
              fraud may belong with IC3. Consumer scams may belong with the FTC.
              Identity theft belongs with IdentityTheft.gov. Platform abuse
              should also be reported through the platform.
            </span>,
            <span>
              <strong>Document the response.</strong> Save report numbers,
              confirmation emails, names, dates, times, and what you were told.
              Keep updating the same packet if the pattern continues.
            </span>,
          ]}
          reminder={
            <span>
              A real agency may sometimes call. The safer rule is not “every
              call is fake.” The safer rule is: do not rely on the inbound
              caller’s identity or payment instructions. Verify through an
              official number or source you found yourself.
            </span>
          }
        />

        <PullQuoteBlock>
          Slow is safe. Preserve first. Verify independently. Report through the
          right channel. Do not let fear push you into paying, deleting,
          threatening back, or exposing someone else.
        </PullQuoteBlock>

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Lane 1",
              title: "Fake official pressure",
              icon: "☎️",
              tone: "urgent",
              description:
                "A caller claims to be police, sheriff, registry, court, probation, parole, FBI, or another agency and demands money, information, or immediate action.",
            },
            {
              eyebrow: "Lane 2",
              title: "Exposure or impersonation",
              icon: "🌐",
              tone: "privacy",
              description:
                "Someone posts your address, employer, family information, registry page, edited images, false claims, or creates an account pretending to be you.",
            },
            {
              eyebrow: "Lane 3",
              title: "Threats or stalking pattern",
              icon: "🚨",
              tone: "warning",
              description:
                "There are repeated messages, appearances, vandalism, surveillance, escalating threats, or conduct that makes your household or workplace feel unsafe.",
            },
            {
              eyebrow: "Lane 4",
              title: "Money or identity risk",
              icon: "💳",
              tone: "legal",
              description:
                "You sent money, clicked a link, shared personal information, lost account access, or believe someone is using your identity.",
            },
            {
              eyebrow: "Lane 5",
              title: "Family, work, or housing pressure",
              icon: "🏠",
              tone: "family",
              description:
                "A harasser contacts your family, employer, landlord, school, treatment provider, church, neighbor, or support network.",
            },
            {
              eyebrow: "Lane 6",
              title: "Compliance uncertainty",
              icon: "📋",
              tone: "reentry",
              description:
                "The threat mentions registration, supervision, verification, address changes, travel, missed appointments, or arrest risk.",
            },
          ]}
        />

        <GuideSectionHeader
          id="problem-lane"
          number="1"
          title="Identify what kind of problem this is"
          subtitle="You do not need a perfect legal label. You need the safest response lane."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Scams, doxxing, harassment, threats, stalking, and extortion can
              overlap. A fake sheriff call may also be identity theft. A doxxing
              post may also lead to employer harassment. A platform threat may
              also create a real-world safety issue. Start with the lane that
              creates the most immediate risk.
            </p>

            <p>
              Registry status can make classification harder. A scammer may know
              your registration status, address, conviction label, employer, or
              supervision history because some information is public, scraped,
              reposted, purchased, guessed, or shared by someone else. Knowing
              something true about you does not prove the person is legitimate.
            </p>
          </GuideProse>

          <RedFlagGreenFlag
            red={
              <div className="space-y-2">
                <p>
                  Treat the situation as urgent if someone demands immediate
                  payment to avoid arrest, tells you not to call your attorney or
                  family, claims you must stay on the phone, threatens children
                  or household members, appears at your home or workplace, or
                  combines your address with explicit threats.
                </p>
              </div>
            }
            green={
              <div className="space-y-2">
                <p>
                  A safer process gives you time to verify, points you to
                  published agency contact information, allows counsel or a
                  trusted supporter to be involved, gives written instructions,
                  and does not demand irreversible payment methods.
                </p>
              </div>
            }
          />

          <GuideChecklist
            id="problem-lane-checklist"
            title="Choose the first response lane"
            columns={2}
            items={[
              {
                id: "official",
                label:
                  "Fake official contact: police, registry, court, probation, parole, warrant, missed verification, or compliance demand.",
              },
              {
                id: "payment",
                label:
                  "Payment pressure: gift cards, crypto, wire, payment app, cash deposit, “bond,” fine, fee, or emergency compliance payment.",
              },
              {
                id: "removal",
                label:
                  "Registry-removal promise: guaranteed removal, secret loophole, fake legal service, or pay-to-fix listing offer.",
              },
              {
                id: "identity",
                label:
                  "Identity or account risk: impersonation profile, account takeover, recovery email changed, financial account risk, or personal information misuse.",
              },
              {
                id: "exposure",
                label:
                  "Doxxing or exposure: address, employer, phone number, family, photos, registry page, or private details posted or amplified.",
              },
              {
                id: "threat",
                label:
                  "Threats, stalking, or vandalism: repeated unwanted contact, property damage, following, surveillance, appearances, or escalation.",
              },
              {
                id: "secondary",
                label:
                  "Secondary targeting: family, employer, landlord, school, church, treatment provider, or support network contacted.",
              },
              {
                id: "official-misconduct",
                label:
                  "Possible misconduct by someone with authority: government employee, supervision officer, registry worker, journalist, activist, or private investigator.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⚖️" title="Do not over-label it">
            <p>
              Do not assume every cruel post is criminal, every threat creates a
              protective-order case, or every repost of registry information is
              unlawful. Also do not assume nothing can be done because you are on
              a registry. The safer approach is to preserve the facts, describe
              the conduct clearly, verify legal options locally, and avoid
              escalating on your own.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="fake-agency-scams"
          number="2"
          title="Fake agency, warrant, registry, court, and supervision scams"
          subtitle="A caller can sound official, use real names, spoof caller ID, and still be a scam."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              People on registries can be especially vulnerable to official
              impersonation scams because the scammer can use shame, fear of
              arrest, fear of a violation, and fear of publicity. The caller may
              claim to be from a sheriff’s office, police department, court,
              registry unit, probation, parole, the FBI, or another agency. They
              may say you missed registration, missed DNA or fingerprints,
              failed to verify an address, ignored a warrant, violated
              supervision, or owe a fee.
            </p>

            <p>
              The safest national rule is simple:{" "}
              <a
                href={sourceLinks.ftcGovernmentImpersonators}
                target="_blank"
                rel="noopener noreferrer"
              >
                do not trust caller ID or the caller’s instructions by
                themselves
              </a>
              . Pause the contact, find the official number yourself, and verify
              through that published source. The{" "}
              <a
                href={sourceLinks.ftcLawEnforcementScams}
                target="_blank"
                rel="noopener noreferrer"
              >
                FTC warns that scammers impersonating local law enforcement may
                threaten arrest and demand payment
              </a>
              , and the{" "}
              <a
                href={sourceLinks.fbiImpersonationBoston}
                target="_blank"
                rel="noopener noreferrer"
              >
                FBI has warned about law-enforcement and government
                impersonation scams
              </a>
              .
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              "Pause the inbound contact and write down the claimed name, agency, badge or employee number, callback number, case number, warrant number, and exact demand.",
              "Find the agency’s official number yourself through an official website, printed paperwork, court record, supervision paperwork, or a known contact.",
              "Ask the real agency whether the person, unit, issue, case number, payment instruction, or compliance concern is legitimate.",
              "If the issue might involve actual registry or supervision compliance, document your verification attempt and follow up through the proper official channel.",
            ]}
            donts={[
              "Do not pay with gift cards, cryptocurrency, wire transfer, payment app, cash deposit, Bitcoin ATM, prepaid card, or “bond” instructions from the caller.",
              "Do not stay on the phone just because the caller says hanging up will cause arrest.",
              "Do not send copies of ID, registry paperwork, Social Security numbers, bank information, passwords, PINs, or verification codes to an unverified caller.",
              "Do not call back using the number, link, QR code, or payment portal supplied by the suspicious person unless you independently confirm it.",
            ]}
            judgment={[
              "A real agency may call about real issues. Verification protects you from both scams and accidental noncompliance.",
              "If you are under supervision, follow your actual reporting instructions, but verify suspicious payment or emergency demands through known official channels.",
              "If a real warrant, violation, or compliance problem may exist, consider contacting counsel before giving detailed statements.",
            ]}
          />

          <GuideChecklist
            id="fake-agency-verification"
            title="Fake-agency verification checklist"
            columns={1}
            items={[
              {
                id: "stop",
                label:
                  "End or pause the inbound contact calmly. Do not argue, threaten, confess, or explain.",
              },
              {
                id: "write",
                label:
                  "Write down the claimed agency, name, unit, badge or employee number, case or warrant number, callback number, date, time, and exact demand.",
              },
              {
                id: "official-number",
                label:
                  "Find the official number yourself. Use an official agency website, court site, registry office listing, supervision paperwork, or known contact.",
              },
              {
                id: "call",
                label:
                  "Call the agency directly and ask whether the person, unit, issue, and instruction are legitimate.",
              },
              {
                id: "payment",
                label:
                  "Ask whether the agency ever accepts the requested payment method for this type of issue. Be especially careful with gift cards, crypto, wires, payment apps, cash deposits, or Bitcoin ATMs.",
              },
              {
                id: "document",
                label:
                  "Document who you spoke with, the number called, date, time, department, and what you were told.",
              },
              {
                id: "counsel",
                label:
                  "If the verified issue could affect arrest, supervision, registration, travel, housing, or employment, consider counsel or legal aid before giving detailed statements.",
              },
            ]}
          />

          <ScriptBox
            title="Suspicious official call"
            tone="urgent"
            context="Use this when the caller claims to be police, sheriff, registry, court, probation, parole, FBI, or another official office."
            script={`I’m going to verify this through the agency’s published number before I provide information or make any payment.`}
          />

          <ScriptBox
            title="Agency verification call"
            tone="legal"
            context="Use the official number you found yourself, not the number supplied by the suspicious caller."
            script={`Hello, my name is [Name]. I received a call from someone claiming to be [name/unit] about [issue]. Before I act, I’m trying to confirm whether this person and request are legitimate.

Can you tell me whether this office has a person or unit by that name, whether there is a real case or compliance issue tied to this, and what the official next step is?

I am taking notes. Could you please repeat your name or department so I can write it down correctly?`}
          />

          <GuideCallout tone="warning" icon="📞" title="Caller ID is not proof">
            <p>
              A scammer may spoof a real agency number or know real public
              information about you. That does not prove the call is legitimate.
              Verification through a number or source you independently locate
              is safer than arguing with the caller or obeying payment
              instructions under pressure.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="registry-removal-scams"
          number="3"
          title="Registry-removal, legal-service, and “we can fix your listing” scams"
          subtitle="Real legal relief may exist in some places, but guaranteed shortcuts are dangerous."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some scams target people who desperately want relief from public
              listing, registration duties, employment barriers, housing
              exclusion, or stigma. The pitch may promise “guaranteed removal,”
              “secret federal loopholes,” “instant expungement,” “we know the
              registry office,” or “pay today or your listing will get worse.”
            </p>

            <p>
              Be careful. Actual registry relief depends on state law, conviction
              history, sentence, risk level, time elapsed, court orders,
              supervision status, and agency practice. A private company cannot
              simply erase government records because it charges a fee. A real
              lawyer also should be willing to identify the actual legal remedy,
              jurisdiction, process, limits, and risks.
            </p>
          </GuideProse>

          <DualDepthSection
            simpleTitle="The safe first rule"
            simple={
              <p>
                Do not pay for a promise until you can verify the person,
                license, company, legal remedy, jurisdiction, written fee
                agreement, and realistic limits.
              </p>
            }
            deepTitle="Why registry-relief promises need extra care"
            deep={
              <p>
                A claim can sound legal without being legally meaningful.
                Expungement, sealing, pardon, termination, risk-level review,
                registration relief, and public-listing removal are different
                processes in different states. Some may not be available. Some
                may require a court order. Some may change criminal records but
                not registration duties. Treat broad promises as advertising,
                not authority.
              </p>
            }
          />

          <GuideChecklist
            id="registry-removal-verification"
            title="Before paying for registry-removal or legal-service help"
            columns={1}
            items={[
              {
                id: "identity",
                label:
                  "Get the full legal name of the attorney, firm, company, or service provider.",
              },
              {
                id: "license",
                label:
                  "Verify any attorney through the state bar or licensing authority in the state where the legal work will happen.",
              },
              {
                id: "remedy",
                label:
                  "Ask the exact legal remedy being pursued: court petition, risk-level review, termination, expungement, sealing, pardon, correction of error, or something else.",
              },
              {
                id: "jurisdiction",
                label:
                  "Ask which state, court, registry agency, or supervision authority controls the decision.",
              },
              {
                id: "guarantee",
                label:
                  "Be skeptical of guarantees, secret loopholes, pressure to pay immediately, or threats that your listing will worsen unless you pay.",
              },
              {
                id: "writing",
                label:
                  "Get the scope, fee, refund policy, and limits in writing before paying.",
              },
              {
                id: "second-opinion",
                label:
                  "If the amount is large or the claim sounds too good to be true, seek a second opinion from legal aid, a licensed attorney, or a trusted bar referral source.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⚖️" title="This guide does not decide eligibility">
            <p>
              This section is about spotting risky promises. It does not tell
              you whether you qualify for registry relief, expungement,
              termination, sealing, pardon, or public-listing removal. Those are
              state-specific legal questions.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="preserve-evidence"
          number="4"
          title="Preserve evidence before you block, delete, repair, or respond"
          subtitle="Screenshots are not perfect, but preserving something now is usually better than trying to rebuild it later."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Evidence can disappear quickly. A scammer may delete a profile. A
              harasser may edit a post. A platform may remove content without
              giving you a copy. A caller may stop leaving voicemails once they
              realize you are documenting. Preserve first when it is safe.
            </p>

            <p>
              You do not need forensic software to start. Use the phone you
              have, paper notes, screenshots, voicemail, printed pages, a trusted
              helper, and a second safe storage location. Do not break into
              accounts, track devices, or try to identify anonymous people
              through invasive means.
            </p>
          </GuideProse>

          <GuideChecklist
            id="evidence-preservation"
            title="Universal evidence-preservation checklist"
            columns={2}
            items={[
              {
                id: "full-screen",
                label:
                  "Screenshot the full screen, not only the threatening sentence.",
              },
              {
                id: "url",
                label:
                  "Save the URL, profile link, post link, username, handle, phone number, or email address.",
              },
              {
                id: "datetime",
                label:
                  "Write the date, time, and time zone. If the platform shows relative time, note the exact time you viewed it.",
              },
              {
                id: "thread",
                label:
                  "Save the full message thread when possible, including what came before and after.",
              },
              {
                id: "email",
                label:
                  "For email, save the message and headers if you know how, but do not alter or forward it in ways that lose information.",
              },
              {
                id: "voicemail",
                label:
                  "Save caller ID, voicemail, transcript if available, and the exact words used.",
              },
              {
                id: "payment",
                label:
                  "Save payment requests, QR codes, wallet addresses, payment handles, receipts, invoices, and transaction IDs.",
              },
              {
                id: "reports",
                label:
                  "Save platform report confirmations, police report numbers, IC3 complaint numbers, FTC confirmations, and bank claim numbers.",
              },
              {
                id: "witnesses",
                label:
                  "Write down witness names, contact information, and what they saw or received.",
              },
              {
                id: "property",
                label:
                  "Photograph vandalism, damage, mail, packages, signs, vehicles, doors, windows, and surrounding context.",
              },
              {
                id: "video",
                label:
                  "Save surveillance-camera clips that are lawfully available to you before they overwrite.",
              },
              {
                id: "backup",
                label:
                  "Copy important evidence to a second safe place: printed folder, external drive, trusted helper, secure cloud, or attorney.",
              },
            ]}
          />

          <DocumentPacket
            title="Scam / harassment documentation packet"
            intro={
              <p>
                This packet documents what happened and what you did. It does
                not automatically prove a crime occurred or guarantee a legal
                remedy, but it gives police, platforms, banks, counsel, or
                agencies a clearer record.
              </p>
            }
            categories={[
              {
                title: "Incident basics",
                items: [
                  "Date, time, time zone, and location if relevant.",
                  "Channel: phone, text, email, mail, social media, workplace, home, school, platform, or in person.",
                  "Claimed identity, agency, office, employer, account name, handle, phone number, email, or profile URL.",
                  "Exact demand, threat, accusation, post, or false claim.",
                ],
              },
              {
                title: "Money and identity",
                items: [
                  "Amount requested or sent.",
                  "Payment method requested: gift card, crypto, wire, payment app, cash deposit, prepaid card, Bitcoin ATM, or card.",
                  "Payment destination, wallet address, QR code, username, invoice, receipt, transaction ID, or bank claim number.",
                  "Information shared: SSN, date of birth, registry number, ID copy, address, banking credentials, password, PIN, or verification code.",
                ],
              },
              {
                title: "Digital evidence",
                items: [
                  "Screenshots, URLs, usernames, account handles, email headers, voicemails, videos, and message threads.",
                  "Platform report confirmations and appeal numbers.",
                  "Dates when posts were edited, removed, reposted, or amplified.",
                  "Names of family members, employers, landlords, or others contacted.",
                ],
              },
              {
                title: "Official response",
                items: [
                  "Agency verification notes: number called, person reached, department, date, time, and answer.",
                  "Police or sheriff report number, officer name, precinct, case number, and supplemental evidence instructions.",
                  "IC3, FTC, state attorney general, bank, payment app, postal inspector, or platform confirmation numbers.",
                  "Unresolved safety issue and next follow-up date.",
                ],
              },
            ]}
          />

          <OfflineOptions
            title="If you have low battery, no printer, limited internet, or phone-only access"
            note="The goal is to preserve enough to show what happened, even if you cannot make a perfect file."
            items={[
              "Write a paper log with date, time, phone number, username, exact words, amount demanded, and what you did next.",
              "Take photos of another phone screen if you cannot screenshot.",
              "Ask a trusted helper to print, screenshot, or save links if you cannot use the internet privately.",
              "Keep envelopes, letters, notes, damaged property photos, and receipts in one physical folder.",
              "If you are under supervision with technology restrictions, ask counsel, your supervising officer, or a trusted approved helper before installing apps, opening new accounts, or changing monitored devices.",
            ]}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Preserve without spreading">
            <p>
              Do not repost threats or private information publicly just to prove
              what happened. Save the evidence in a controlled way and share it
              only with the people or offices who need it: counsel, police,
              platform safety teams, bank fraud departments, supervision or
              registry contacts when compliance is implicated, or trusted
              supporters helping you stay safe.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="online-harassment-doxxing"
          number="5"
          title="Online harassment, doxxing, impersonation, and exposure"
          subtitle="Focus on preservation, safety, platform reporting, and careful communication — not public fights."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Online harassment may include reposting registry information,
              publishing your address or employer, contacting your family,
              impersonating you, posting edited images, making false claims,
              review bombing, mass messaging, or encouraging others to target
              you. Some posts may be cruel but not clearly illegal. Other posts
              may involve threats, impersonation, private information, fraud,
              stalking patterns, or platform-policy violations.
            </p>

            <p>
              The safer workflow is: preserve the post, assess threat level,
              lock down accounts, report to the platform or host, document the
              response, consider law enforcement or counsel if risk increases,
              and inform only the household, employer, landlord, or supporter
              who actually needs to know.
            </p>
          </GuideProse>

          <GuideChecklist
            id="doxxing-response"
            title="Doxxing / exposure response checklist"
            columns={1}
            items={[
              {
                id: "preserve",
                label:
                  "Preserve screenshots, URLs, usernames, timestamps, message threads, and any comments encouraging contact or harm.",
              },
              {
                id: "threat",
                label:
                  "Separate ordinary insults from threats, stalking patterns, impersonation, fraud, private-information exposure, or calls for others to act.",
              },
              {
                id: "accounts",
                label:
                  "Secure exposed accounts: passwords, recovery email, recovery phone, active sessions, forwarding rules, and MFA if compatible with your supervision or technology conditions.",
              },
              {
                id: "platform",
                label:
                  "Report the specific post or account through the platform’s own reporting process. Use the policy category that fits: threats, private information, impersonation, harassment, fraud, or illegal content.",
              },
              {
                id: "document-response",
                label:
                  "Save the platform report confirmation, appeal number, automated response, denial, removal notice, or no-response date.",
              },
              {
                id: "necessary-notice",
                label:
                  "Notify only the people who need safety information: household members, employer reception/security, landlord/property manager, school/childcare when truly necessary, or a trusted helper.",
              },
              {
                id: "law-enforcement",
                label:
                  "Consider law enforcement or counsel if the exposure is tied to threats, stalking, extortion, vandalism, identity theft, false reports, or real-world appearances.",
              },
            ]}
          />

          <ScriptBox
            title="Platform report"
            tone="privacy"
            context="Use this for threats, impersonation, private information, or platform-policy violations. Edit it to fit the platform’s reporting category."
            script={`This account/post contains [threat/impersonation/private information]. I preserved the URL and screenshots. Please review it under your policy for [threats/impersonation/privacy/etc.].`}
          />

          <ResourceLinkGrid
            title="Platform reporting examples"
            description={
              <p>
                Platform rules and takedown decisions are platform-specific.
                Use the platform’s own reporting path and save confirmation
                numbers or automated replies.
              </p>
            }
            resources={[
              {
                label: "X — Private information policy",
                href: sourceLinks.xPrivateInformation,
                badge: "Platform",
                description:
                  "Reference for exposed private information and doxxing-type reports on X.",
              },
              {
                label: "X — Report a violation",
                href: sourceLinks.xReportViolation,
                badge: "Platform",
                description:
                  "Reporting pathway for violations on X.",
              },
              {
                label: "Facebook — Report abusive things",
                href: sourceLinks.facebookReport,
                badge: "Platform",
                description:
                  "Reporting pathway for abusive content, threats, impersonation, and related Facebook concerns.",
              },
              {
                label: "TikTok — Reporting illegal content",
                href: sourceLinks.tiktokReportIllegal,
                badge: "Platform",
                description:
                  "Reporting pathway for illegal-content concerns on TikTok.",
              },
            ]}
          />

          <GuideCallout tone="warning" icon="📣" title="Do not amplify the post">
            <p>
              Publicly arguing with a harasser can send more people to the post,
              create screenshots that remove context, and increase risk to your
              household. Preserve it, report it, and share only with people who
              need to help.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="account-money-security"
          number="6"
          title="Account, device, identity, and money triage"
          subtitle="Keep this narrow: secure what may be exposed, preserve evidence, and use the right recovery path."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              If you clicked a link, shared information, sent money, lost account
              access, or think someone is using your identity, treat it as a
              security problem and a documentation problem. Preserve what
              happened before cleaning up. Then secure accounts, money, and
              identity records.
            </p>

            <p>
              If you are under supervision, on a device-monitoring plan, or have
              internet or app restrictions, do not assume ordinary cybersecurity
              advice is automatically safe for you. Changing devices, deleting
              apps, creating new accounts, using encrypted tools, or installing
              MFA apps may raise supervision questions. Verify first.
            </p>
          </GuideProse>

          <GuideChecklist
            id="account-security"
            title="Account and money triage checklist"
            columns={2}
            items={[
              {
                id: "preserve-before-clean",
                label:
                  "Preserve the suspicious message, link, login alert, receipt, account notice, or payment request before deleting or cleaning up.",
              },
              {
                id: "password",
                label:
                  "Change compromised passwords from a safe device. Use unique passwords, not reused ones.",
              },
              {
                id: "mfa",
                label:
                  "Enable MFA where compatible with your supervision, treatment, monitoring, or device conditions.",
              },
              {
                id: "sessions",
                label:
                  "Log out unknown sessions and check recent account activity.",
              },
              {
                id: "recovery",
                label:
                  "Check recovery email, recovery phone, forwarding rules, backup codes, and trusted devices.",
              },
              {
                id: "financial",
                label:
                  "Contact your bank, card issuer, payment app, or transfer service quickly if money or account numbers may be involved.",
              },
              {
                id: "credit",
                label:
                  "Consider fraud alerts, credit freezes, or credit monitoring if identity information was exposed or misused.",
              },
              {
                id: "identitytheft",
                label:
                  "Use IdentityTheft.gov if someone used your identity or opened accounts in your name.",
              },
            ]}
          />

          <VerifyBeforeActing
            title="Verify technology steps before acting"
            whoToAsk={
              <span>
                Your supervising officer, attorney, treatment provider, approved
                device-monitoring contact, or the person who manages your
                technology condition.
              </span>
            }
            whatToAsk={
              <span>
                “Can I change passwords, enable MFA, revoke sessions, install an
                authenticator app, replace this device, or create a new account
                without violating my conditions?”
              </span>
            }
            whatToSave={
              <span>
                Save the date, time, person, department, and answer. Ask for
                written confirmation if possible.
              </span>
            }
          />

          <GuideCallout tone="info" icon="🧾" title="Where to report money and identity issues">
            <p>
              For internet-enabled fraud, use{" "}
              <a
                href={sourceLinks.ic3Complaint}
                target="_blank"
                rel="noopener noreferrer"
              >
                IC3
              </a>
              . For consumer scams, use{" "}
              <a
                href={sourceLinks.ftcReportFraud}
                target="_blank"
                rel="noopener noreferrer"
              >
                ReportFraud.gov
              </a>
              . For identity theft recovery, use{" "}
              <a
                href={sourceLinks.identityTheft}
                target="_blank"
                rel="noopener noreferrer"
              >
                IdentityTheft.gov
              </a>
              . If money moved through a bank, card, wire, payment app, or
              transfer service, contact that provider quickly and save the claim
              number.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="physical-safety"
          number="7"
          title="Threats, stalking, vandalism, and physical safety"
          subtitle="Separate immediate danger from documentation, but keep building the record."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some harassment stays online. Some moves into the real world. If a
              person appears at your home or workplace, threatens physical harm,
              damages property, follows you, watches your household, leaves
              items, contacts neighbors, or repeatedly escalates, treat safety as
              the first issue.
            </p>

            <p>
              This guide does not decide whether the conduct legally counts as
              stalking, harassment, extortion, vandalism, or a protective-order
              case. Those rules vary. But you can still document the pattern and
              ask the proper local office what the next step is.
            </p>
          </GuideProse>

          <TimelineGuidanceGrid
            title="What to do by stage"
            stages={[
              {
                stage: "Immediate danger",
                icon: "🚨",
                whatChanges:
                  "Safety comes before evidence. The person is present, a weapon is mentioned, a child or dependent is threatened, or harm appears imminent.",
                whatToDo:
                  "Call emergency services, move to a safer location if you can, tell household members, and preserve evidence only when safe.",
              },
              {
                stage: "Repeated pattern",
                icon: "🗓️",
                whatChanges:
                  "The incidents may look small one by one but become more serious together.",
                whatToDo:
                  "Keep an incident log with dates, times, locations, screenshots, voicemails, witnesses, photos, and prior report numbers.",
              },
              {
                stage: "Property targeting",
                icon: "🏚️",
                whatChanges:
                  "Vandalism, packages, signs, vehicles, mail, doors, windows, pets, or home entrances may create safety and housing risk.",
                whatToDo:
                  "Photograph damage before repair when safe, save receipts, ask neighbors or property managers about footage, and request a report number.",
              },
              {
                stage: "After a report",
                icon: "📄",
                whatChanges:
                  "The record matters even if no arrest, takedown, or immediate action happens.",
                whatToDo:
                  "Save the report number, ask how to submit supplemental evidence, and keep adding new incidents to the same packet.",
              },
            ]}
          />

          <ScriptBox
            title="Police report"
            tone="legal"
            context="Use this when you are trying to document a pattern, not argue the entire case in the first conversation."
            script={`I want to document a pattern of threats/harassment. I have dates, screenshots, messages, and prior incident information. I am not asking you to decide the whole case right now; I want the conduct documented and to understand the appropriate next step.`}
          />

          <GuideChecklist
            id="physical-safety-log"
            title="Incident log items"
            columns={2}
            items={[
              {
                id: "date-time",
                label: "Date, time, time zone, and location.",
              },
              {
                id: "what-happened",
                label: "What happened, using exact words when possible.",
              },
              {
                id: "who",
                label:
                  "Known person, unknown person, vehicle, account, phone number, or description.",
              },
              {
                id: "evidence",
                label:
                  "Screenshots, voicemails, photos, video clips, letters, envelopes, receipts, or damaged property.",
              },
              {
                id: "witnesses",
                label:
                  "Witness names, contact information, and what each person saw or received.",
              },
              {
                id: "impact",
                label:
                  "Safety effect: could not go home, missed work, children scared, landlord contacted, property damaged, or financial loss.",
              },
              {
                id: "reports",
                label:
                  "Police report number, platform report number, bank claim number, IC3 or FTC confirmation, or agency contact note.",
              },
              {
                id: "next-step",
                label:
                  "Next planned follow-up: supervisor request, supplemental evidence, counsel call, platform appeal, bank follow-up, or safety change.",
              },
            ]}
          />

          <GuideCallout tone="urgent" icon="🚫" title="Avoid confrontation">
            <p>
              Do not go to the suspected person’s home, post their private
              information, threaten them, follow them, bait them, or create fake
              accounts to engage. That can increase danger and may create legal,
              supervision, platform, housing, or employment problems for you.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="family-work-housing"
          number="8"
          title="Family, household members, employers, landlords, and supporters"
          subtitle="Share enough to protect people. Do not spread the harassment farther than necessary."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Harassment aimed at a person on a registry often spills onto
              spouses, partners, children, parents, roommates, employers,
              landlords, neighbors, churches, schools, or treatment providers.
              The goal is not to tell everyone everything. The goal is to give
              the right people enough information to stay safe, preserve
              evidence, and avoid being manipulated.
            </p>
          </GuideProse>

          <RoleGuidanceGrid
            title="What different people may need"
            roles={[
              {
                role: "Person being targeted",
                icon: "🧍",
                guidance:
                  "Preserve evidence, verify official claims, avoid retaliation, secure accounts, and decide who truly needs safety information.",
              },
              {
                role: "Household or family",
                icon: "👥",
                guidance:
                  "Know what to preserve, what not to amplify, who to call in an emergency, and how to notify the targeted person if messages, mail, calls, or visitors appear.",
              },
              {
                role: "Employer, reception, or workplace security",
                icon: "🏢",
                guidance:
                  "They may need a simple heads-up that someone could call, email, post, appear, or make accusations. They do not need your whole legal history unless there is a specific reason.",
              },
              {
                role: "Landlord or property manager",
                icon: "🔑",
                guidance:
                  "They may need to preserve footage, messages, mail, repair records, or reports if harassment reaches the property. Keep housing disclosures narrow and practical.",
              },
            ]}
          />

          <GuideChecklist
            id="secondary-target-safety"
            title="Secondary-target safety checklist"
            columns={1}
            items={[
              {
                id: "who-needs-to-know",
                label:
                  "Decide who actually needs to know for safety, evidence, housing, work, childcare, or emergency contact reasons.",
              },
              {
                id: "what-to-share",
                label:
                  "Share the narrow safety issue: someone may call, post, appear, send mail, make threats, or impersonate you.",
              },
              {
                id: "what-not-to-share",
                label:
                  "Avoid forwarding rumors, reposting private information, debating strangers online, or giving unnecessary legal history.",
              },
              {
                id: "preserve",
                label:
                  "Ask family, employer, landlord, or supporter to preserve messages, caller ID, emails, footage, photos, mail, envelopes, and dates.",
              },
              {
                id: "contact-plan",
                label:
                  "Create an emergency contact plan: who calls police, who contacts the targeted person, who saves footage, and who watches for children or dependents.",
              },
              {
                id: "housing-work",
                label:
                  "If job or housing loss may be imminent, contact counsel, legal aid, tenant resources, or workplace support before oversharing.",
              },
            ]}
          />

          <ScriptBox
            title="Employer or landlord safety notification"
            tone="family"
            context="Use this when a targeted contact may reach work or housing and the person receiving the notice does not need the whole story."
            script={`I’m dealing with targeted harassment. I do not need you to investigate it, but I want you to know that someone may contact you or appear here. Please preserve any messages or footage and let me know if that happens.`}
          />

          <GuideCallout tone="family" icon="🧡" title="For loved ones and supporters">
            <p>
              Your job is not to win an online argument. Your job is to help the
              person slow down, preserve evidence, avoid retaliation, verify
              official claims, and stay housed, employed, connected, and safe.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="recording"
          number="9"
          title="Recording calls or encounters"
          subtitle="Recording can help, but recording law varies. Verify before relying on a shortcut."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              It can be tempting to secretly record every call. Be careful.
              Recording laws vary by state, by call type, by where each person
              is located, and by whether the communication is private, public,
              telephonic, electronic, or in person. The internet shorthand of
              “one-party” and “two-party” consent can be incomplete or stale.
            </p>

            <p>
              You can usually take contemporaneous notes without creating the
              same issue as secretly recording a live conversation. Saving
              voicemail, text messages, emails, letters, and messages you
              received is also different from secretly recording a live
              conversation. Still, avoid universal assumptions and verify the
              current rule before recording.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Before you record"
            whoToAsk={
              <span>
                A licensed attorney, legal aid, a state-specific legal resource,
                or a current recording-law reference such as the{" "}
                <a
                  href={sourceLinks.rcfpRecordingGuide}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reporters Committee recording guide
                </a>{" "}
                as a starting point.
              </span>
            }
            whatToAsk={
              <span>
                “Can I lawfully record this type of communication in my state,
                and what if the other person is in another state?”
              </span>
            }
            whatToSave={
              <span>
                Save the source checked, date checked, state involved, and any
                legal advice or written guidance you receive.
              </span>
            }
          />

          <GuideCallout tone="legal" icon="⚖️" title="Safer alternatives when recording is uncertain">
            <p>
              Take notes during or immediately after the contact. Save
              voicemails and messages you received. Screenshot the caller ID.
              Write down exact words, date, time, number, claimed identity, and
              demand. Ask for written instructions through an official channel.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="reporting-pathways"
          number="10"
          title="Reporting pathways"
          subtitle="Different problems go to different places. Use the right lane and save confirmations."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Reporting is not one-size-fits-all. A fake registry payment call,
              a hacked account, a doxxing post, vandalism, and a stalking
              pattern may need different channels. You may use more than one,
              but do not assume one report solves everything.
            </p>
          </GuideProse>

          <PathwayCard
            title="Local police, sheriff, or emergency services"
            subtitle="Use for immediate danger, real-world threats, stalking patterns, vandalism, property targeting, or local fraud."
            icon="🚓"
            whyItWorks={
              <p>
                Local law enforcement may be the right starting point for
                physical danger, repeated appearances, property damage, local
                suspects, or incident documentation. Ask for a report or
                reference number.
              </p>
            }
            steps={[
              "Call emergency services for immediate danger.",
              "Use the local non-emergency number for documentation when there is no immediate danger.",
              "Bring a short incident summary and your evidence packet.",
              "Ask how to submit supplemental evidence if the pattern continues.",
            ]}
            bestFit="Threats, stalking-like patterns, vandalism, someone appearing at home or work, local fraud, or a false report creating immediate safety or compliance risk."
          />

          <PathwayCard
            title="IC3, FTC, bank, payment service, and postal inspectors"
            subtitle="Use for fraud, internet-enabled crime, identity theft, payment loss, and mail-based schemes."
            icon="🧾"
            whyItWorks={
              <p>
                Online fraud and consumer scams often need specialized reporting
                channels. IC3 handles internet-enabled fraud reports. The FTC
                handles consumer fraud and identity-theft recovery pathways.
                Banks and payment services handle transaction disputes. Postal
                inspectors handle mail fraud.
              </p>
            }
            steps={[
              "Use IC3 for internet-enabled fraud, cybercrime, online extortion, or account-based fraud.",
              "Use ReportFraud.gov for consumer scams, impersonation, and fraudulent services.",
              "Use IdentityTheft.gov if someone used your identity or opened accounts in your name.",
              "Contact your bank, card issuer, payment app, wire service, or transfer provider quickly if money moved.",
              "Use USPIS if the scam or threat arrived through U.S. mail.",
            ]}
            bestFit="Fake payment demands, online extortion, identity theft, account takeover, fraudulent registry-removal services, mailed threats, and payment losses."
          />

          <PathwayCard
            title="Platform, employer, landlord, registry, supervision, or counsel"
            subtitle="Use when the problem affects a specific system or legal obligation."
            icon="🧭"
            whyItWorks={
              <p>
                A platform can review its own policy. An employer or landlord
                can preserve footage or messages. Registry or supervision
                contacts may be needed only if the issue affects actual
                compliance. Counsel may be needed when legal risk is unclear.
              </p>
            }
            steps={[
              "Report platform abuse through the platform’s own process and save confirmations.",
              "Notify employer or landlord only as needed for safety and evidence preservation.",
              "Contact registry or supervision through known official channels if the scam or threat involves real compliance questions.",
              "Contact counsel or legal aid for protective-order questions, disputed reports, extortion, defamation/privacy issues, or possible government-employee misconduct.",
            ]}
            bestFit="Doxxing, impersonation, workplace or housing targeting, platform harassment, compliance uncertainty, or legal-risk escalation."
          />

          <ResourceLinkGrid
            title="Primary reporting links"
            resources={[
              {
                label: "IC3 — Internet Crime Complaint Center",
                href: sourceLinks.ic3Complaint,
                badge: "FBI",
                description:
                  "Internet-enabled fraud, cybercrime, account compromise, online extortion, and related reports.",
              },
              {
                label: "FTC — ReportFraud.gov",
                href: sourceLinks.ftcReportFraud,
                badge: "FTC",
                description:
                  "Consumer fraud, scams, impersonation, fraudulent services, and bad business practices.",
              },
              {
                label: "IdentityTheft.gov",
                href: sourceLinks.identityTheft,
                badge: "FTC",
                description:
                  "Personal recovery plan when identity information has been misused.",
              },
              {
                label: "USPIS — Report mail fraud",
                href: sourceLinks.uspisReport,
                badge: "Official",
                description:
                  "Mail fraud, suspicious mailed demands, mailed threats, or postal-service-related fraud.",
              },
              {
                label: "USA.gov — State consumer protection offices",
                href: sourceLinks.usaStateConsumer,
                badge: "Directory",
                description:
                  "State attorney general or consumer-protection offices for local scam reporting.",
              },
              {
                label: "LawHelp.org",
                href: sourceLinks.lawHelp,
                badge: "Legal aid",
                description:
                  "Find nonprofit legal aid by state for civil legal issues.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="nonresponse"
          number="11"
          title="If police, platforms, or agencies do not act"
          subtitle="Non-response is frustrating. Keep the record clean and escalate without flooding, threatening, or retaliating."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A report does not guarantee an arrest, takedown, investigation,
              prosecution, protective order, refund, damages, or account
              restoration. That does not mean your report was pointless. A clean
              record can still matter if the conduct escalates, if another
              agency gets involved, if you need counsel, or if a landlord,
              employer, supervision officer, registry agency, or platform later
              asks what happened.
            </p>
          </GuideProse>

          <GuideChecklist
            id="nonresponse-escalation"
            title="Calm escalation ladder"
            columns={1}
            items={[
              {
                id: "number",
                label:
                  "Ask for a report number, reference number, ticket number, or confirmation email.",
              },
              {
                id: "supplement",
                label:
                  "Ask how to submit supplemental evidence if new incidents happen.",
              },
              {
                id: "unit",
                label:
                  "Ask whether a supervisor, cybercrime unit, fraud unit, victim-services unit, stalking unit, detective, platform appeals process, or safety team is appropriate.",
              },
              {
                id: "document-response",
                label:
                  "Write down the date, time, name, department, platform response, agency response, and what you were told.",
              },
              {
                id: "alternate-channel",
                label:
                  "Use another proper channel if available: IC3, FTC, state attorney general, bank, payment service, postal inspectors, platform appeal, legal aid, or counsel.",
              },
              {
                id: "victim-services",
                label:
                  "Consider victim-services resources if threats, stalking, violence, or repeated harassment are involved.",
              },
              {
                id: "avoid-flooding",
                label:
                  "Do not repeatedly flood emergency lines, threaten officials, publicly accuse specific people without evidence, or retaliate.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🧭" title="When the suspected person has authority">
            <p>
              If you believe the harasser is a government employee, registry
              worker, supervision officer, journalist, activist, private
              investigator, landlord, employer, or someone with influence, be
              especially careful. Preserve evidence, avoid public accusations
              until you have a record, verify reporting options, and consider
              counsel or legal aid before making statements that could affect
              supervision, housing, employment, or safety.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="common-mistakes"
          number="12"
          title="Common mistakes"
          subtitle="These are understandable under stress, but they can make the situation harder to fix."
        />

        <GuideSectionCard>
          <CommonMistakes
            title="Avoid these moves"
            mistakes={[
              {
                mistake: "Paying because the caller sounds official.",
                whyItMatters:
                  "Scammers use fear of arrest, registry violations, public shame, and urgent deadlines to make people act before verifying.",
                betterMove:
                  "Pause, independently locate the official number, verify the claim, and document the answer.",
              },
              {
                mistake: "Trusting caller ID, badge numbers, or public details.",
                whyItMatters:
                  "Numbers can be spoofed, and registry-related information may already be public or easy to guess.",
                betterMove:
                  "Treat identity as unverified until you confirm through a source you found yourself.",
              },
              {
                mistake: "Deleting, blocking, or closing accounts before saving evidence.",
                whyItMatters:
                  "Evidence may disappear, and you may lose the ability to show the pattern.",
                betterMove:
                  "Screenshot, save URLs, preserve voicemails, write notes, and then block or report when safe.",
              },
              {
                mistake: "Threatening back or publicly arguing with harassers.",
                whyItMatters:
                  "It can escalate risk, amplify the post, create new screenshots, and cause legal or supervision problems.",
                betterMove:
                  "Preserve, report, document, and communicate only with people who need to help.",
              },
              {
                mistake: "Posting the suspected person’s private information.",
                whyItMatters:
                  "Retaliatory doxxing can create danger and may expose you to legal, platform, housing, employment, or supervision consequences.",
                betterMove:
                  "Give evidence to counsel, police, platforms, banks, or appropriate agencies instead.",
              },
              {
                mistake: "Trying to trace, hack, bait, stalk, or identify anonymous people through invasive means.",
                whyItMatters:
                  "That can be unsafe and may be unlawful, even if the other person started it.",
                betterMove:
                  "Save what is visible to you, report through proper channels, and seek help if risk escalates.",
              },
              {
                mistake: "Assuming police cannot help because you are registered.",
                whyItMatters:
                  "Fear of being dismissed can stop people from documenting threats, vandalism, stalking, fraud, or false reports.",
                betterMove:
                  "Bring a calm packet, ask for documentation, and save the report number.",
              },
              {
                mistake: "Assuming police or platforms must act because the conduct feels threatening.",
                whyItMatters:
                  "Agencies and platforms may decline, delay, or classify the issue differently.",
                betterMove:
                  "Document the response, ask about supplemental evidence, and use the proper escalation path.",
              },
            ]}
          />

          <SoftDivider label="Escalate sooner when risk increases" />

          <GuideChecklist
            id="escalate-now"
            title="Escalate immediately if any of these are present"
            columns={2}
            items={[
              {
                id: "imminent",
                label: "Threat of imminent physical harm.",
              },
              {
                id: "appearance",
                label: "Person appears at your home, work, school, treatment site, church, or family member’s location.",
              },
              {
                id: "weapon",
                label: "Weapon threat or threat involving serious injury.",
              },
              {
                id: "child",
                label: "Child, dependent, elder, pet, or household member is threatened.",
              },
              {
                id: "address-threat",
                label: "Home address newly exposed alongside explicit threats or calls for action.",
              },
              {
                id: "account-money",
                label: "Account takeover, bank risk, payment loss, identity theft, or unauthorized transaction.",
              },
              {
                id: "extortion",
                label: "Extortion or blackmail involving intimate, private, legal, employment, housing, or family information.",
              },
              {
                id: "vandalism",
                label: "Vandalism, property targeting, vehicle damage, mail tampering, or escalating real-world conduct.",
              },
              {
                id: "false-report",
                label: "False report or impersonation that could create arrest, registry, supervision, employment, or housing risk.",
              },
              {
                id: "official-confusion",
                label: "Supervision, registry, court, or law-enforcement identity confusion that could affect compliance.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="13"
          title="Resources, related SOLAR guides, and sources"
          subtitle="Use official reporting channels, legal-aid directories, and related SOLAR guides to keep moving without guessing."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Outside resources"
            description={
              <p>
                Use these links for reporting, verification, recovery, or legal
                help. Save confirmation numbers and dates checked.
              </p>
            }
            resources={[
              {
                label: "FBI IC3",
                href: sourceLinks.ic3Complaint,
                badge: "Cybercrime",
                description:
                  "Internet-enabled fraud, cybercrime, online extortion, and account-related scams.",
              },
              {
                label: "FTC ReportFraud",
                href: sourceLinks.ftcReportFraud,
                badge: "Fraud",
                description:
                  "Consumer scams, impersonation, fraudulent registry-removal services, and bad business practices.",
              },
              {
                label: "IdentityTheft.gov",
                href: sourceLinks.identityTheft,
                badge: "Identity theft",
                description:
                  "Personal recovery plan if someone used your identity or opened accounts in your name.",
              },
              {
                label: "CFPB fraud and scams guidance",
                href: sourceLinks.cfpbFraudScams,
                badge: "Money",
                description:
                  "Consumer finance guidance for common fraud and scam issues.",
              },
              {
                label: "USPIS report page",
                href: sourceLinks.uspisReport,
                badge: "Mail",
                description:
                  "Mail fraud, suspicious mailed demands, or postal-related scam reporting.",
              },
              {
                label: "SPARC documentation log",
                href: sourceLinks.sparcDocumentationLog,
                badge: "Stalking",
                description:
                  "Incident and behavior log for repeated unwanted contact or stalking patterns.",
              },
              {
                label: "Reporters Committee recording guide",
                href: sourceLinks.rcfpRecordingGuide,
                badge: "Recording law",
                description:
                  "State-by-state recording-law reference to check before recording calls or encounters.",
              },
              {
                label: "LawHelp.org",
                href: sourceLinks.lawHelp,
                badge: "Legal aid",
                description:
                  "Find nonprofit legal aid by state for civil legal issues.",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Police, Registry & CPS Encounters",
                description:
                  "Use when the issue becomes an actual encounter with police, registry staff, CPS, probation, parole, or another official office.",
                to: "/resources/police-registry-cps-encounters",
              },
              {
                title: "Registry Compliance & Verification Survival Guide",
                description:
                  "Use when a threat or suspicious contact mentions registration duties, address verification, travel, deadlines, or compliance.",
                to: "/resources/registry-compliance-verification-guide",
              },
              {
                title: "Know Your Rights",
                description:
                  "Use when searches, questioning, counsel, consent, silence, or legal-risk decisions are involved.",
                to: "/resources/know-your-rights",
              },
              {
                title: "Supervision Conditions Survival Guide",
                description:
                  "Use before changing devices, accounts, apps, internet access, or contact patterns while under supervision.",
                to: "/resources/supervision-conditions-guide",
              },
              {
                title: "Family & Allies Guide",
                description:
                  "Use when loved ones, household members, or supporters are secondary targets or helping preserve evidence.",
                to: "/resources/family-support-guide",
              },
              {
                title: "Tenant Rights",
                description:
                  "Use when harassment threatens housing, landlord relationships, repair records, notices, or eviction risk.",
                to: "/resources/tenant-rights",
              },
              {
                title: "Financial Planning Guide",
                description:
                  "Use for broader financial stability, documentation, accounts, and planning after a scam or financial disruption.",
                to: "/resources/financial-planning-guide",
              },
              {
                title: "State Registry Hub",
                description:
                  "Use to find state-specific registry information and official state-level verification paths.",
                to: "/resources/state-registry",
              },
            ]}
          />

          <SourceList
            sources={sources}
            note={
              <p>
                Sources were selected for direct verification value: federal
                fraud and cybercrime reporting, official consumer guidance,
                stalking documentation resources, platform reporting pages,
                recording-law verification, and legal-aid directories. State law
                can change the answer for recording, protective orders,
                stalking, harassment, extortion, defamation, tenant rights,
                employment issues, registry relief, and local reporting duties.
              </p>
            }
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}