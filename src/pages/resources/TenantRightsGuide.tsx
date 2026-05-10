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
  DualDepthSection,
  RedFlagGreenFlag,
} from "../../components/solar";

const sourceLinks = {
  hudComplaint: {
    label: "HUD: Report Housing Discrimination",
    href: "https://www.hud.gov/reporthousingdiscrimination",
  },
  cfpbTenantScreeningDenied: {
    label: "CFPB: Rental application denied because of a tenant screening report",
    href: "https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-if-my-rental-application-is-denied-because-of-a-tenant-screening-report-en-2105/",
  },
  ftcTenantScreeningErrors: {
    label: "FTC: Disputing errors on your tenant background check report",
    href: "https://consumer.ftc.gov/articles/disputing-errors-your-tenant-background-check-report",
  },
  hudPihRescission2025: {
    label: "HUD Notice PIH 2025-26 / H 2025-05",
    href: "https://www.hud.gov/sites/dfiles/OCHCO/documents/Hsng2025-05.pdf",
  },
  hudPihNotices: {
    label: "HUD: Public and Indian Housing Notices",
    href: "https://www.hud.gov/hudclips/notices/pih",
  },
  voucherRule: {
    label: "24 CFR § 982.553: Housing Choice Voucher admission and termination rules",
    href: "https://www.ecfr.gov/current/title-24/subtitle-B/chapter-IX/part-982/subpart-L/section-982.553",
  },
  publicHousingRule: {
    label: "24 CFR § 960.204: Public housing admission rules",
    href: "https://www.ecfr.gov/current/title-24/subtitle-B/chapter-IX/part-960/subpart-B/section-960.204",
  },
  quietEnjoyment: {
    label: "Cornell Wex: Quiet enjoyment",
    href: "https://www.law.cornell.edu/wex/quiet_enjoyment",
  },
  covenantQuietEnjoyment: {
    label: "Cornell Wex: Covenant of quiet enjoyment",
    href: "https://www.law.cornell.edu/wex/covenant_of_quiet_enjoyment",
  },
  dojReasonableAccommodation: {
    label: "DOJ/HUD Joint Statement: Reasonable accommodations under the Fair Housing Act",
    href: "https://www.justice.gov/sites/default/files/crt/legacy/2010/12/14/joint_statement_ra.pdf",
  },
  justiceGuidanceIndex: {
    label: "DOJ Civil Rights Division: Policy statements and guidance",
    href: "https://www.justice.gov/crt/policy-statements-and-guidance",
  },
  usaGovLegalAid: {
    label: "USA.gov: Find a lawyer and affordable legal aid",
    href: "https://www.usa.gov/legal-aid",
  },
  lscLegalHelp: {
    label: "Legal Services Corporation: I need legal help",
    href: "https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help",
  },
  unitedWay211: {
    label: "United Way 211",
    href: "https://www.211.org/",
  },
  hudResidentRights: {
    label: "HUD: Resident Rights and Responsibilities brochure",
    href: "https://www.hud.gov/sites/dfiles/Housing/documents/resident_rights_brochure_8.pdf",
  },
  mnDocProximityStudy: {
    label: "Minnesota DOC: Residential Proximity & Sex Offense Recidivism",
    href: "https://mn.gov/doc/assets/04-07SexOffenderReport-Proximity_tcm1089-272769.pdf",
  },
  nrrcHudCriminalRecords: {
    label: "National Reentry Resource Center: HUD fair-housing guidance on criminal records",
    href: "https://nationalreentryresourcecenter.org/resources/office-general-counsel-guidance-application-fair-housing-act-standards-use-criminal",
  },
} as const;

export default function TenantRightsGuide(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Tenant Rights and Housing Stability Guide | The SOLAR Project"
        description="A practical, registry-aware tenant rights guide for protecting housing, documenting landlord problems, responding to screening denials, checking residency rules, and finding legal help."
        keywords="tenant rights, sex offender registry housing, housing stability, eviction, lockout, tenant screening, public housing, residency restrictions, SOLAR Project"
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
            Tenant Rights and Housing Stability Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Practical, registry-aware steps for protecting current housing,
            responding to lockouts or denials, checking address restrictions,
            and building the paper trail that helps you get help.
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

        <GuideIntro title="Start Here" icon="🧭">
          <p>
            Housing problems can make everything feel urgent. That is especially
            true for people on registries, people under supervision, and
            families trying to avoid homelessness, technical violations, or
            another failed application.
          </p>

          <p>
            Start with the safest assumption: <strong>protect the housing you
            already have when you safely can.</strong> Finding new housing with
            registry status can be harder than defending current housing. Do not
            let pressure, shame, neighbor hostility, or a landlord’s verbal
            demand turn into an unofficial eviction.
          </p>

          <p>
            This guide is not legal advice. It is a practical plan for slowing
            the situation down, saving proof, checking the right rules, and
            asking the right people for help before you give up housing or sign
            something risky.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If housing is at risk today"
          subtitle="Use these steps before you pack, move, sign, or assume the worst."
          icon="⚡"
          urgentActions={[
            <span>
              <strong>If you are locked out, utilities are shut off, or someone
              says you must leave immediately:</strong> take photos, save texts
              or notices, write down what happened, and contact legal aid or
              emergency tenant help the same day.
            </span>,
            <span>
              <strong>If you received court papers:</strong> do not ignore
              them. Circle the hearing date, deadline, court name, and case
              number. Ask legal aid how to respond.
            </span>,
            <span>
              <strong>If a landlord or PHA denied you because of a background
              check:</strong> ask for the adverse action notice, the name of the
              screening company, and your free copy of the report.
            </span>,
            <span>
              <strong>If you are considering a new address:</strong> verify
              registry rules, local residency restrictions, and supervision
              approval before signing or moving.
            </span>,
          ]}
          nextActions={[
            <span>
              Start a tenant binder with your lease, notices, messages, rent
              proof, photos, screening reports, and address-verification notes.
            </span>,
            <span>
              Put important requests in writing. After phone calls, send a short
              recap text or email and save the reply.
            </span>,
            <span>
              Ask for written deadlines: court dates, appeal dates, dispute
              windows, PHA hearing deadlines, and move-out dates.
            </span>,
          ]}
          reminder={
            <span>
              Pressure is not the same thing as a court order. This does not
              mean ignoring real court papers, safety emergencies, supervision
              instructions, or verified registration problems. It means do not
              surrender housing just because someone is trying to scare you out.
            </span>
          }
        />
<OverviewCards
          columns={4}
          cards={[
            {
              eyebrow: "Risk lane 1",
              title: "Lease or eviction pressure",
              icon: "📄",
              tone: "legal",
              description:
                "Know the difference between a threat, a written notice, and a court order. Save every paper.",
            },
            {
              eyebrow: "Risk lane 2",
              title: "Screening denial",
              icon: "🔎",
              tone: "warning",
              description:
                "Ask for the adverse action notice, get the report, dispute errors, and request individualized review.",
            },
            {
              eyebrow: "Risk lane 3",
              title: "Registry address risk",
              icon: "📍",
              tone: "urgent",
              description:
                "Before signing or moving, check the exact address with the registry office and supervision if applicable.",
            },
            {
              eyebrow: "Risk lane 4",
              title: "PHA or voucher housing",
              icon: "🏢",
              tone: "info",
              description:
                "Public and subsidized housing can have special rules, hearing rights, and strict admission bars.",
            },
          ]}
        />

        <GuideSectionHeader
          id="protect-current-housing"
          number="1"
          title="Protect the housing you already have"
          subtitle="For people on registries, staying housed is often the first safety plan."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A landlord, neighbor, property manager, or even a family member
              may tell you that you have no choice but to leave. Sometimes that
              is true because of a court order, safety emergency, supervision
              instruction, or verified registry rule. But often it is pressure,
              not process.
            </p>

            <p>
              For someone on a registry, losing current housing can create a
              chain reaction: emergency shelter may be unavailable, a new lease
              may require background screening, a new address may violate a
              distance rule, and supervision may need approval before any move.
              That is why protecting existing housing is often easier than
              finding new housing from scratch.
            </p>
          </GuideProse>

          <GuideCallout
            tone="legal"
            icon="⚖️"
            title="Do not confuse pressure with eviction"
          >
            <p>
              In ordinary landlord-tenant housing, a landlord usually needs a
              legal process before removing a tenant. A verbal demand, angry
              text, neighbor complaint, or “you are not welcome here anymore” is
              not the same as a court order. Save the communication, ask for
              anything important in writing, and contact legal aid before moving
              out.
            </p>
          </GuideCallout>

          <RedFlagGreenFlag
            red={
              <p>
                “You have 24 hours to get out,” “I changed the locks,” “I do not
                need court,” or “people like you cannot live here” without a
                written legal basis or court order.
              </p>
            }
            green={
              <p>
                Written notices with dates, clear lease sections, court
                information if a case was filed, and an opportunity to respond,
                cure, dispute, or attend a hearing.
              </p>
            }
          />

          <ScriptBox
            title="Script: when someone is pressuring you to leave"
            tone="legal"
            context="Use this when you need to stay calm and move the conversation into writing."
            buttonLabel="Copy housing-pressure script"
            script={`Hello, I am documenting an ongoing housing issue at [address].

I am not refusing to communicate, but I need all notices, requests, and instructions in writing.

Please identify the lease term, rule, court order, or legal notice you believe applies. If you are asking me to leave, please provide the written notice required by law.

I am keeping records of dates, times, messages, entries, utility issues, and witness information.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="lease-and-binder"
          number="2"
          title="Understand your lease and build your tenant binder"
          subtitle="The person with organized proof is usually in a stronger position."
        />

        <GuideSectionCard>
          <DualDepthSection
            simpleTitle="Plain-language version"
            deepTitle="Why this matters"
            simple={
              <GuideProse>
                <p>
                  A lease is a two-way promise. You promise to pay rent and
                  follow the rules. The landlord promises to provide the home
                  described in the lease and follow the law.
                </p>

                <p>
                  Before you sign, you can ask questions and request changes.
                  After you sign, the words matter. If a line says the landlord
                  can remove you “immediately,” enter whenever they want, or end
                  the lease without process, circle it and ask legal aid or a
                  tenant clinic before relying on it.
                </p>
              </GuideProse>
            }
            deep={
              <GuideProse>
                <p>
                  A lease is a contract, but landlord-tenant law can add rights
                  and duties even when the lease is silent. State and local law
                  control details such as notice periods, repairs, entry rules,
                  deposits, lockouts, and eviction procedure.
                </p>

                <p>
                  For registry-impacted households, the lease is only one layer.
                  You may also need to check supervision conditions, local
                  residency restrictions, public-housing rules, and whether a
                  household member’s status creates a program-specific issue.
                </p>
              </GuideProse>
            }
          />

          <DocumentPacket
            title="Build a tenant binder"
            intro={
              <span>
                Keep paper and digital copies if possible. If you only have a
                phone, make one photo album for housing documents and one note
                for dates, names, and case numbers.
              </span>
            }
            categories={[
              {
                title: "Lease and payment proof",
                items: [
                  "Lease, rules, addenda, renewal notices, and house policies.",
                  "Rent receipts, bank statements, money order copies, ledgers, and payment confirmations.",
                  "Security deposit records and move-in / move-out inspection notes.",
                ],
              },
              {
                title: "Condition and communication proof",
                items: [
                  "Photos or videos of the unit, repairs, locks, notices, utilities, pests, leaks, or damage.",
                  "Texts, emails, letters, portal messages, voicemails, and screenshots.",
                  "A call log with date, time, person, department, and what was said.",
                ],
              },
              {
                title: "Registry, screening, and appeal proof",
                items: [
                  "Screening reports, adverse action notices, dispute letters, and landlord responses.",
                  "Registry-office address confirmations, maps, GIS screenshots, and supervision approvals.",
                  "References, employment proof, treatment or program certificates, and letters of support.",
                ],
              },
            ]}
          />

          <GuideChecklist
            id="tenant-binder-first-week"
            title="First-week binder checklist"
            columns={1}
            items={[
              {
                id: "lease",
                label: "Put the lease and all rules in one folder.",
              },
              {
                id: "rent-proof",
                label: "Save the last six months of rent proof if you have it.",
              },
              {
                id: "photo-home",
                label: "Take photos of the current condition of the home.",
              },
              {
                id: "call-log",
                label:
                  "Start a call log for landlord, court, PHA, legal aid, registry, and supervision contacts.",
              },
              {
                id: "deadline-page",
                label:
                  "Make one deadline page for court dates, appeal dates, rent dates, and report-dispute windows.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="lockouts-and-soft-eviction"
          number="3"
          title="Lockouts, harassment, and “soft eviction”"
          subtitle="A landlord may try to make you leave without using the formal process."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some housing loss is obvious: a court case, a sheriff’s notice, or
              a written termination. Other pressure is quieter: repeated threats,
              surprise entries, utility shutoffs, selective rule enforcement,
              hostile neighbors, ignored repair requests, or a manager trying to
              make the home feel impossible so you leave on your own.
            </p>

            <p>
              Do not argue every legal term in the moment. Document first. Save
              proof while things are happening. Then ask legal aid, a tenant
              attorney, or a court self-help center what the conduct may mean in
              your state.
            </p>
          </GuideProse>
<GuideCallout
            tone="urgent"
            icon="🚪"
            title="If you are locked out or utilities are shut off"
          >
            <p>
              Stay as calm as you can. Take photos or video. Save the notice or
              message. Call legal aid or emergency tenant help. If you call
              non-emergency police, keep the script simple: you are a tenant,
              you were locked out or utilities were shut off, and you are asking
              for help documenting or restoring access.
            </p>
          </GuideCallout>

          <DualDepthSection
            simpleTitle="Quiet enjoyment, in plain language"
            deepTitle="Deeper detail"
            simple={
              <GuideProse>
                <p>
                  “Quiet enjoyment” does not just mean quiet neighbors. In
                  landlord-tenant law, it usually means you have a right to live
                  in and use the home you rent without serious interference from
                  the landlord or people acting through the landlord.
                </p>

                <p>
                  If a landlord, manager, or hostile neighbor is trying to make
                  the home unlivable so you leave, that may matter. Write down
                  dates, times, names, witnesses, photos, utility issues,
                  repair requests, entries, and every message.
                </p>
              </GuideProse>
            }
            deep={
              <GuideProse>
                <p>
                  Quiet-enjoyment rules vary by state. Many leases say it
                  directly, and many jurisdictions recognize some version of the
                  right even when the lease does not use those words. The key
                  issue is usually serious interference, not minor annoyance.
                </p>

                <p>
                  Do not break a lease, withhold rent, or move out based only on
                  a phrase you read online. Build the record first and verify
                  your options with legal aid or a tenant attorney.
                </p>
              </GuideProse>
            }
          />

          <ScriptBox
            title="Script: illegal lockout or utility shutoff"
            tone="urgent"
            context="Use with non-emergency police, legal aid, or a tenant hotline. If there is immediate danger, call emergency services."
            buttonLabel="Copy lockout script"
            script={`Hello, my name is [Name]. I am a tenant at [address].

My landlord or property manager [changed the locks / shut off utilities / removed my property / blocked access] without showing me a court order.

I have my lease, ID, messages, and photos. I am asking for help documenting this and finding out how to regain lawful access.

The landlord or manager is [name, phone, company if known].`}
          />

          <ScriptBox
            title="Script: follow-up after a hostile interaction"
            tone="neutral"
            context="Send this after a call, hallway conversation, or threat so your records show what happened."
            buttonLabel="Copy follow-up script"
            script={`Hello [Name],

I am writing to confirm what happened on [date/time]. You told me [briefly describe what was said or done].

Please send any lease section, written notice, court order, or policy you believe applies.

I am keeping a written record so we can handle this clearly and avoid misunderstandings.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="screening-denials"
          number="4"
          title="Background checks, denials, and individualized review"
          subtitle="A denial is not always the end of the conversation."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Landlords and property managers often use tenant-screening
              companies. Those reports can include criminal-history information,
              eviction records, credit information, rental history, or matching
              errors. If a report was used against you, ask for the adverse
              action notice and the report. The{" "}
              <a
                href={sourceLinks.cfpbTenantScreeningDenied.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                CFPB tenant-screening denial guidance
              </a>{" "}
              and{" "}
              <a
                href={sourceLinks.ftcTenantScreeningErrors.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                FTC tenant-background-check dispute guidance
              </a>{" "}
              explain how to request reports and dispute errors.
            </p>

            <p>
              Registry status is not itself a protected class under federal fair
              housing law. But screening decisions can still involve report
              errors, unlawful discrimination, disability issues, state or local
              fair-chance rules, or policies that deserve review.
            </p>
          </GuideProse>

          <GuideChecklist
            id="screening-denial-steps"
            title="If a rental application is denied"
            columns={1}
            items={[
              {
                id: "adverse-action",
                label:
                  "Ask for the adverse action notice and the name of the screening company.",
              },
              {
                id: "free-report",
                label:
                  "Request your free copy of the tenant-screening report within the deadline stated in the notice.",
              },
              {
                id: "check-errors",
                label:
                  "Check for wrong identity, duplicate cases, old records, sealed or expunged records, wrong disposition, or misleading labels.",
              },
              {
                id: "dispute",
                label:
                  "Dispute errors in writing with the screening company and save proof of the dispute.",
              },
              {
                id: "individual-review",
                label:
                  "Ask the landlord or manager for individualized review using proof of stability, rent history, references, work, treatment, or time since offense.",
              },
            ]}
          />

          <GuideCallout
            tone="warning"
            icon="🧾"
            title="Important 2026 source caution"
          >
            <p>
              Older HUD arrest-record guidance is no longer safe to cite as
              current HUD policy without qualification.{" "}
              <a
                href={sourceLinks.hudPihRescission2025.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                HUD rescinded the 2015 arrest-record guidance in Notice PIH
                2025-26 / H 2025-05
              </a>
              . If an assisted-housing decision relies on an arrest, ask for the
              current PHA or owner policy, the evidence being relied on, written
              reasons, and the appeal or hearing deadline.
            </p>
          </GuideCallout>

          <ScriptBox
            title="Script: adverse action and screening report request"
            tone="legal"
            context="Use this after a denial, higher deposit, co-signer demand, or different terms based on a screening report."
            buttonLabel="Copy adverse-action script"
            script={`Hello [Manager],

I was told my application was [denied / approved only with different terms] based on a tenant-screening or background-check report.

Please send me the adverse action notice, the name and contact information of the screening company, and instructions for requesting my free copy of the report.

I also request an individualized review of my application. I can provide documentation of rent history, income, references, current stability, and other relevant information.

Thank you.`}
          />

          <ScriptBox
            title="Script: individualized review request"
            tone="neutral"
            context="Attach only documents that help your request. You do not need to overshare every detail."
            buttonLabel="Copy individualized-review script"
            script={`Subject: Request for individualized review

Hello [Name],

Please reconsider my application using an individualized review.

I understand you have concerns about [background check / registry status / criminal history]. I am asking you to also consider the specific facts: [time since offense], [stable housing history], [on-time rent history], [employment or income], [treatment or program completion], [references], and [other stability factors].

I can provide documents that show I would be a reliable tenant and follow the lease.

Please let me know what information would be most helpful and whether there is a deadline for submitting it.

Thank you.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="registry-address-checks"
          number="5"
          title="Registry, supervision, and address checks before signing"
          subtitle="Do not let a good apartment become a compliance problem."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Residency rules can be invisible tripwires. You may qualify for
              an apartment, pass the landlord’s screening, and still face
              problems if the address is too close to a restricted place, not
              approved by supervision, or treated differently under a local rule.
            </p>

            <p>
              The safest move is to verify the exact address before signing,
              paying deposits you cannot afford to lose, moving property, or
              registering the address.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Verify the exact address before you rely on it"
            whoToAsk={
              <span>
                The registering agency or registry unit for the address, your
                supervising officer if you are under supervision, and legal aid
                if the answer is unclear or not in writing.
              </span>
            }
            whatToAsk={
              <span>
                Ask whether <strong>[exact address, unit number]</strong> is
                compliant; whether city, county, or state distance rules apply;
                how distance is measured; whether parks, schools, daycares,
                shelters, bus stops, or other locations count; and whether you
                can receive written confirmation.
              </span>
            }
            whatToSave={
              <span>
                Save names, dates, departments, emails, letters, map screenshots,
                GIS searches, supervision approvals, and any instruction about
                when or how to register the address.
              </span>
            }
          />
<ScriptBox
            title="Script: registry or supervision address check"
            tone="urgent"
            context="Use before signing a lease, paying a deposit, moving property, or registering an address."
            buttonLabel="Copy address-check script"
            script={`Hello, my name is [Name]. I am considering renting [full address, unit number, city, state].

Before I sign or move, I need to verify whether this address is compliant for me.

Can you tell me:
1. Whether this exact address is allowed?
2. Whether any state, county, city, supervision, or local ordinance restriction applies?
3. How distance is measured here?
4. Whether you can provide written confirmation or tell me how to document the answer?

I am taking notes. Could you please give me your name, department, and the date of this call?`}
          />

          <GuideCallout tone="research" icon="📚" title="Research note">
            <p>
              Research has repeatedly raised concerns that broad residence
              restrictions can increase instability without clearly improving
              public safety. That research is important for advocacy, but it
              does not decide whether your exact address is legal today. For
              your own housing decision, verify the rule that applies where you
              are.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="public-subsidized-housing"
          number="6"
          title="Public housing, vouchers, and subsidized housing"
          subtitle="PHA rules can be strict, local, and deadline-heavy."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Public Housing Authorities, often called PHAs, run public housing
              and Housing Choice Voucher programs. HUD-assisted multifamily
              housing can have its own owner or management agent. The rules can
              be different depending on the program.
            </p>

            <p>
              If anyone in the household is subject to a lifetime sex-offender
              registration requirement, federal rules require PHAs to prohibit
              admission to public housing and the voucher program. The public
              housing rule appears at{" "}
              <a
                href={sourceLinks.publicHousingRule.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                24 CFR § 960.204
              </a>
              , and the voucher rule appears at{" "}
              <a
                href={sourceLinks.voucherRule.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                24 CFR § 982.553
              </a>
              . If you are applying, ask about this early so you do not lose
              months waiting on a path that may be closed.
            </p>

            <p>
              If you are already housed, do not assume the same rule applies in
              the same way. Ask for the written reason, the program rule, the
              grievance or hearing deadline, and a copy of any record they are
              relying on.
            </p>
          </GuideProse>

          <GuideCallout
            tone="legal"
            icon="🏛️"
            title="Ask for the local policy, not just a verbal answer"
          >
            <p>
              For voucher cases, ask for the PHA Administrative Plan. For public
              housing, ask for the ACOP. For HUD-assisted multifamily housing,
              ask for the house rules, tenant selection plan, lease, and any
              written notice. Save the appeal or hearing deadline immediately.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="pha-paperwork"
            title="If a PHA or assisted-housing provider takes action"
            columns={1}
            items={[
              {
                id: "written-reason",
                label: "Ask for the written reason for the decision.",
              },
              {
                id: "record-copy",
                label:
                  "Ask for a copy of any criminal record, registry record, screening report, or evidence being used.",
              },
              {
                id: "deadline",
                label:
                  "Ask for the exact deadline to request an informal review, grievance hearing, or appeal.",
              },
              {
                id: "policy",
                label:
                  "Ask for the Administrative Plan, ACOP, tenant selection plan, house rules, or other policy being applied.",
              },
              {
                id: "legal-aid",
                label:
                  "Contact legal aid quickly. Assisted-housing deadlines can be short.",
              },
            ]}
          />

          <ScriptBox
            title="Script: PHA or assisted-housing decision"
            tone="legal"
            context="Use after denial, proposed termination, voucher issue, or assisted-housing notice."
            buttonLabel="Copy PHA script"
            script={`Hello [Name],

I received a notice about [denial / termination / voucher issue / housing decision].

Please send me:
1. The written reason for the decision;
2. The specific rule, policy, or lease term being used;
3. A copy of any record or report being relied on;
4. The deadline and instructions for requesting an informal review, grievance hearing, or appeal; and
5. The current Administrative Plan, ACOP, tenant selection plan, or house rules that apply.

I am requesting this information so I can understand the decision and respond by the deadline.

Thank you.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="reasonable-accommodation"
          number="7"
          title="Reasonable accommodations"
          subtitle="Disability-related requests are about access to housing, not registry status itself."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              If you or someone in your household has a disability, including
              some mental-health conditions, you may be able to ask the landlord,
              PHA, or housing provider to adjust a rule, policy, practice, or
              service so the person with a disability has an equal opportunity
              to use and enjoy the home. The{" "}
              <a
                href={sourceLinks.dojReasonableAccommodation.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                DOJ/HUD reasonable-accommodation guidance
              </a>{" "}
              explains how disability-related accommodation requests work under
              the Fair Housing Act.
            </p>

            <p>
              Registry status itself is not a disability. The accommodation
              request should be tied to a qualifying disability and a specific
              housing-related need.
            </p>
          </GuideProse>

          <GuideCallout tone="privacy" icon="🔐" title="Share only what is needed">
            <p>
              You usually do not need to explain every diagnosis, conviction
              detail, treatment history, or family crisis. State the disability
              connection, the accommodation requested, and how it helps the
              person use and enjoy the housing. Ask for the response in writing.
            </p>
          </GuideCallout>

          <ScriptBox
            title="Script: reasonable accommodation request"
            tone="privacy"
            context="Use only when the request is connected to a disability-related housing need."
            buttonLabel="Copy accommodation script"
            script={`Subject: Reasonable accommodation request

Hello [Name],

I am requesting a reasonable accommodation because of a disability-related housing need.

The accommodation I am requesting is: [state the specific change, exception, extra time, transfer, communication method, assistance animal, or other request].

This accommodation is needed because it will help [me / household member] have an equal opportunity to use and enjoy the housing.

Please respond in writing. If you need verification, please tell me exactly what information you need and where it should be sent.

Thank you.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="common-mistakes"
          number="8"
          title="Common mistakes that can make housing problems worse"
          subtitle="These are understandable mistakes. The goal is to catch them early."
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Leaving because of pressure instead of process.",
                whyItMatters:
                  "For people on registries, replacement housing may be much harder to find than current housing is to defend.",
                betterMove:
                  "Ask for written notice, save proof, verify whether there is a court order or legal deadline, and call legal aid before moving out.",
              },
              {
                mistake: "Ignoring court papers because the landlord was unfair.",
                whyItMatters:
                  "Even a bad or unfair eviction case can move forward if you miss the hearing or response deadline.",
                betterMove:
                  "Circle the deadline, save the papers, and contact legal aid, a tenant hotline, or the court self-help center.",
              },
              {
                mistake: "Signing a lease before checking registry or supervision rules.",
                whyItMatters:
                  "A lease can be valid with the landlord but still create a registration or supervision problem.",
                betterMove: "Verify the exact address first and save the answer.",
              },
              {
                mistake: "Relying only on verbal answers.",
                whyItMatters:
                  "Verbal promises are hard to prove later, especially with landlords, PHAs, registry offices, or supervision staff.",
                betterMove:
                  "Send a short follow-up message: “I am writing to confirm what I understood from our call.”",
              },
              {
                mistake: "Oversharing without a purpose.",
                whyItMatters:
                  "Extra details can distract from the housing issue and may create new stigma or confusion.",
                betterMove:
                  "Answer the narrow question, provide relevant proof, and ask what policy or deadline applies.",
              },
              {
                mistake: "Using legal terms before building proof.",
                whyItMatters:
                  "Saying “quiet enjoyment,” “discrimination,” or “illegal eviction” may be accurate, but proof usually carries more weight than labels.",
                betterMove:
                  "Document dates, names, messages, photos, witnesses, and consequences. Then ask legal aid what the legal theory may be.",
              },
            ]}
          />

          <OfflineOptions
            title="If internet access is limited"
            icon="📞"
            note={
              <span>
                You can still make progress with a phone, paper folder, and one
                trusted helper.
              </span>
            }
            items={[
              "Call 211 and ask for local rental assistance, shelter diversion, legal aid, tenant hotline, or utility help.",
              "Ask legal aid or the court clerk whether forms can be mailed, picked up, or filed in person.",
              "Ask a trusted person to print notices, screenshots, maps, applications, or hearing paperwork.",
              "Keep one paper folder with lease, notices, rent proof, court papers, screening reports, and registry/supervision notes.",
              "Write down names, dates, departments, phone numbers, confirmation numbers, and instructions after every call.",
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="9"
          title="Resources and next steps"
          subtitle="Use official sources and local legal help whenever the answer could change your housing."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Where to look next"
            description={
              <span>
                Start with legal aid for eviction, lockout, voucher, PHA,
                screening, fair-housing, and deadline questions. Use emergency
                resource lines when you need rent, utilities, shelter diversion,
                food, or transportation help.
              </span>
            }
            resources={[
              {
                label: "HUD housing discrimination complaint",
                href: sourceLinks.hudComplaint.href,
                badge: "Official",
                description:
                  "File or learn about fair-housing complaints with HUD FHEO. HUD lists online, phone, and mail options.",
                phone: "1-800-669-9777",
              },
              {
                label: "CFPB tenant-screening denial guidance",
                href: sourceLinks.cfpbTenantScreeningDenied.href,
                badge: "Official",
                description:
                  "Explains adverse action notices, free report rights, and dispute rights when a tenant-screening report is used.",
              },
              {
                label: "FTC tenant background-check disputes",
                href: sourceLinks.ftcTenantScreeningErrors.href,
                badge: "Official",
                description:
                  "Plain-language steps for getting your report and disputing tenant-background-check errors.",
              },
              {
                label: "Legal Services Corporation legal aid finder",
                href: sourceLinks.lscLegalHelp.href,
                badge: "Legal aid",
                description:
                  "Find an LSC-funded civil legal aid organization near you.",
              },
              {
                label: "USA.gov legal aid overview",
                href: sourceLinks.usaGovLegalAid.href,
                badge: "Official",
                description:
                  "Federal public-information page listing legal aid, LSC, LawHelp, and pro bono options.",
              },
              {
                label: "United Way 211",
                href: sourceLinks.unitedWay211.href,
                badge: "Emergency help",
                description:
                  "Find local help with housing, utilities, food, health, disaster recovery, and other emergency needs.",
                phone: "Call 211",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Housing Search Guide",
                description:
                  "Use this when you are actively looking for housing or building an application packet.",
                to: "/resources/housing-search",
              },
              {
                title: "Reentry Planning Guide",
                description:
                  "Helps organize housing, documents, supervision, family support, and first-week stability after release.",
                to: "/resources/reentry-planning",
              },
              {
                title: "Know Your Rights Guide",
                description:
                  "Use alongside this guide when you are dealing with officials, supervision, court, or unclear legal instructions.",
                to: "/resources/know-your-rights",
              },
              {
                title: "Financial Support Strategies",
                description:
                  "Practical steps for rent, utilities, food, emergency help, and family budgeting under stress.",
                to: "/resources/financial-support",
              },
            ]}
          />

          <SourceList
            title="Sources and verification links"
            note={
              <span>
                Links were live-checked during the sandbox rebuild. Rules change,
                and tenant law is state-specific, so verify local deadlines,
                court procedure, registry rules, and PHA policies before acting.
              </span>
            }
            sources={[
              {
                label: sourceLinks.hudComplaint.label,
                href: sourceLinks.hudComplaint.href,
                description:
                  "Official HUD FHEO page for reporting housing discrimination and finding online, phone, and mail complaint options.",
              },
              {
                label: sourceLinks.cfpbTenantScreeningDenied.label,
                href: sourceLinks.cfpbTenantScreeningDenied.href,
                description:
                  "Official CFPB guidance on adverse action notices, free tenant-screening reports, and dispute rights.",
              },
              {
                label: sourceLinks.ftcTenantScreeningErrors.label,
                href: sourceLinks.ftcTenantScreeningErrors.href,
                description:
                  "Official FTC guidance on disputing errors in tenant background-check reports.",
              },
              {
                label: sourceLinks.hudPihRescission2025.label,
                href: sourceLinks.hudPihRescission2025.href,
                description:
                  "Current HUD notice rescinding PIH 2015-19 / H 2015-10 on arrest records in housing decisions.",
              },
              {
                label: sourceLinks.hudPihNotices.label,
                href: sourceLinks.hudPihNotices.href,
                description:
                  "HUD PIH notice index showing the status of current PIH notices.",
              },
              {
                label: sourceLinks.voucherRule.label,
                href: sourceLinks.voucherRule.href,
                description:
                  "Federal voucher-program rule including lifetime sex-offender registration admission bar and record-dispute language.",
              },
              {
                label: sourceLinks.publicHousingRule.label,
                href: sourceLinks.publicHousingRule.href,
                description:
                  "Federal public-housing admission rule including lifetime sex-offender registration admission bar and record-dispute language.",
              },
              {
                label: sourceLinks.quietEnjoyment.label,
                href: sourceLinks.quietEnjoyment.href,
                description:
                  "Plain-language legal encyclopedia entry explaining quiet enjoyment as the right to use property without serious disturbance.",
              },
              {
                label: sourceLinks.covenantQuietEnjoyment.label,
                href: sourceLinks.covenantQuietEnjoyment.href,
                description:
                  "Legal encyclopedia entry explaining the implied covenant of quiet enjoyment in leases.",
              },
              {
                label: sourceLinks.dojReasonableAccommodation.label,
                href: sourceLinks.dojReasonableAccommodation.href,
                description:
                  "DOJ/HUD joint statement on reasonable accommodations under the Fair Housing Act.",
              },
              {
                label: sourceLinks.justiceGuidanceIndex.label,
                href: sourceLinks.justiceGuidanceIndex.href,
                description:
                  "DOJ Civil Rights Division index confirming reasonable-accommodation guidance availability.",
              },
              {
                label: sourceLinks.hudResidentRights.label,
                href: sourceLinks.hudResidentRights.href,
                description:
                  "HUD resident rights brochure for HUD-assisted multifamily housing; not a universal public-housing or voucher guide.",
              },
              {
                label: sourceLinks.mnDocProximityStudy.label,
                href: sourceLinks.mnDocProximityStudy.href,
                description:
                  "Research source on residential proximity and sex-offense recidivism; useful for policy context, not address-level legal advice.",
              },
              {
                label: sourceLinks.nrrcHudCriminalRecords.label,
                href: sourceLinks.nrrcHudCriminalRecords.href,
                description:
                  "Reentry resource page summarizing HUD fair-housing guidance on criminal-record screening.",
              },
              {
                label: sourceLinks.usaGovLegalAid.label,
                href: sourceLinks.usaGovLegalAid.href,
                description:
                  "Federal public-information page for legal aid and pro bono options.",
              },
              {
                label: sourceLinks.lscLegalHelp.label,
                href: sourceLinks.lscLegalHelp.href,
                description:
                  "Legal Services Corporation page for finding LSC-funded civil legal aid.",
              },
              {
                label: sourceLinks.unitedWay211.label,
                href: sourceLinks.unitedWay211.href,
                description:
                  "National 211 resource finder for housing, utility, food, and other local emergency needs.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}