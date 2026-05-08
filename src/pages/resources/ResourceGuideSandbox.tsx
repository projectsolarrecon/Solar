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
} from "../../components/solar";

const sourceLinks = {
  cfpbHousingCounselor: "https://www.consumerfinance.gov/find-a-housing-counselor/",
  usaGovRentHelp: "https://www.usa.gov/rental-housing-programs",
  liheap: "https://www.acf.hhs.gov/ocs/programs/liheap",
  unitedWay211: "https://www.211.org/",
  feedingAmerica: "https://www.feedingamerica.org/find-your-local-foodbank",
  snapUsaGov: "https://www.usa.gov/food-stamps",
  lifeline: "https://www.lifelinesupport.org/",
  lscLegalHelp: "https://www.lsc.gov/about-lsc/what-legal-aid/get-legal-help",
  abaFreeLegalAnswers: "https://abafreelegalanswers.org/",
  federalDefenders: "https://www.fd.org/",
  irs501r: "https://www.irs.gov/charities-non-profits/financial-assistance-policy-and-emergency-medical-care-policy-section-501r4",
  cmsMedicalBillRights: "https://www.cms.gov/medical-bill-rights",
  irsPayments: "https://www.irs.gov/payments",
  taxpayerAdvocate: "https://www.taxpayeradvocate.irs.gov/",
  lowIncomeTaxpayerClinics: "https://www.irs.gov/advocate/low-income-taxpayer-clinics",
  vitaTce: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers",
  annualCreditReport: "https://www.annualcreditreport.com/",
  ftcCreditFreeze: "https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts",
  identityTheft: "https://www.identitytheft.gov/",
  myCreditUnionPals: "https://mycreditunion.gov/life-events/consumer-loans/payday-loans",
  bankOn: "https://joinbankon.org/",
  acfChildSupportOrder: "https://www.acf.hhs.gov/css/parents/change-support-order",
};

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Surviving the Financial Shock of a Criminal Case | The SOLAR Project"
        description="A practical SOLAR resource guide for families managing legal fees, lost income, bills, benefits, credit, and financial pressure during a criminal case."
        keywords="financial support criminal case, reentry financial help, legal fees, family support, benefits, credit protection, utility assistance, housing help"
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
            Internal Sandbox Preview
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Surviving the Financial Shock of a Criminal Case
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Practical, step-by-step support for families managing legal fees,
            lost income, urgent bills, benefits, credit, and ongoing expenses
            without losing stability or hope.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100 transition-colors"
            >
              🖨️ Print Sandbox
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
            When someone you love is facing charges, it can feel like the ground
            has been ripped out from under your feet — emotionally, socially,
            and financially. Bills do not stop coming just because your family
            is in crisis. In fact, the costs often rise sharply.
          </p>

          <p>
            Think of this guide like a life jacket in rough water. You do not
            have to swim all the way to shore today. You need to stay afloat,
            protect the essentials, and make the next few decisions carefully.
          </p>

          <p>
            Keep a notebook or folder nearby as you work through this page.
            Paper is fine. The goal is not perfection. The goal is to protect
            housing, food, utilities, transportation, phone access, court-related
            stability, and the caregiver’s credit while you figure out what
            help is available.
          </p>
        </GuideIntro>

        <GuideCallout tone="legal" icon="⚖️" title="This guide is not legal or financial advice">
          <p>
            This is a practical playbook for stabilizing cash flow and protecting
            your household during a criminal case. Rules, eligibility, court
            orders, supervision conditions, and state programs can change the
            answer. Verify important steps with the agency, attorney, court,
            benefit office, creditor, or qualified professional before relying
            on them.
          </p>
        </GuideCallout>

        <QuickStartPanel
          title="The 48-hour money triage"
          subtitle="Use this when everything feels urgent and you are not sure where to start."
          icon="⚡"
          urgentActions={[
            <span>
              Get one notebook, folder, envelope, or notes app file and label it
              “money crisis log.”
            </span>,
            <span>
              Write down the bills that keep your household housed, fed,
              connected, and able to get to work, school, court, medical care,
              and legal appointments.
            </span>,
            <span>
              Put a star next to the essentials: rent or mortgage, utilities,
              food, transportation, phone or internet, child support, medical
              needs, and lawyer or court-related deadlines.
            </span>,
          ]}
          nextActions={[
            <span>
              Cancel or pause non-essential subscriptions, memberships, and
              automatic payments that are not keeping the household stable.
            </span>,
            <span>
              Call before you are late. Ask for hardship options, payment plans,
              budget billing, extensions, or written instructions.
            </span>,
            <span>
              Save names, dates, departments, confirmation numbers, letters,
              emails, bills, and every agreement in writing.
            </span>,
          ]}
          reminder={
            <span>
              Starred bills go first. Many other bills can be paused, reduced,
              deferred, negotiated, or handled through a formal assistance
              program.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Stage 1",
              title: "Stop the bleeding",
              icon: "🧯",
              tone: "urgent",
              description:
                "Freeze non-essentials, list must-pay bills, and map the next due dates.",
            },
            {
              eyebrow: "Stage 2",
              title: "Stabilize and negotiate",
              icon: "☎️",
              tone: "warning",
              description:
                "Protect housing, utilities, food, transportation, phone access, legal costs, medical bills, and taxes.",
            },
            {
              eyebrow: "Stage 3",
              title: "Protect and plan",
              icon: "🛡️",
              tone: "success",
              description:
                "Protect credit, avoid high-cost debt, document every agreement, and line up credible help.",
            },
          ]}
        />

        <GuideSectionHeader
          id="first-things"
          number="1"
          title="First things first: do not panic, make a list"
          subtitle="Start with what you can control right now."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Money panic makes every bill feel equally urgent. They are not all
              equal. Your first job is to separate essentials from pressure,
              noise, and embarrassment.
            </p>

            <p>
              Essentials are the bills that keep your household physically
              stable and connected to the systems you must keep using: housing,
              utilities, food, transportation, phone or internet access,
              medical care, child support, legal appointments, court dates, and
              work or school.
            </p>

            <p>
              Once you know what is essential, you can stop guessing. You can
              make calls in order, ask for help more clearly, and avoid spending
              scarce money on the loudest bill instead of the most important one.
            </p>
          </GuideProse>

          <GuideChecklist
            id="first-things-checklist"
            title="First list to make"
            columns={1}
            items={[
              {
                id: "folder",
                label: "Create one notebook, folder, envelope, binder, or digital notes file.",
                helper:
                  "Use whatever you can actually keep up with. Paper is completely fine.",
              },
              {
                id: "must-pay",
                label:
                  "List must-pay bills: rent or mortgage, utilities, food, transportation, phone or internet, child support, medical, and legal costs.",
              },
              {
                id: "stars",
                label:
                  "Put a star next to the bills that keep your family housed, fed, reachable, and able to attend required appointments.",
              },
              {
                id: "calendar",
                label:
                  "Make a visible calendar of due dates, court dates, legal payment dates, benefit deadlines, and shutoff or eviction notices.",
              },
              {
                id: "contacts",
                label:
                  "Write down the phone number, website, account number, and department for each urgent bill.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="★" title="The practical rule">
            <p>
              Starred bills go first. Everything else should be reviewed,
              paused, reduced, negotiated, or delayed when possible.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="triage"
          number="2"
          title="The 48-hour triage"
          subtitle="Immediate actions to reduce damage while you gather information."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The first two days are about slowing the financial slide. You may
              not be able to solve the larger case, replace income, or rebuild
              savings right away. You can still reduce preventable damage.
            </p>

            <ul>
              <li>
                Cancel extras: streaming services, gyms, subscriptions, delivery
                memberships, apps, and automatic payments that are not essential.
              </li>
              <li>
                Make a due-date map: what is due this week, what is due this
                month, and what already has a late notice.
              </li>
              <li>
                Call before you are late whenever possible. Hardship programs
                are often easier to access before the account is seriously past
                due.
              </li>
              <li>
                Document every call. Write down who you spoke with, the date,
                what they said, and what you agreed to do next.
              </li>
            </ul>
          </GuideProse>

          <ScriptBox
            title="Hardship or payment-plan call script"
            tone="neutral"
            context="Use this for a landlord, mortgage servicer, utility company, medical biller, phone provider, tax office, or other creditor."
            script={`Hello, my name is [Name]. I am calling about account [account number, address, or bill type].

Our household is going through a legal emergency, and we are trying to stay in good standing. I want to ask what hardship options, payment plans, extensions, budget billing, reduced payments, or documentation options are available.

Can you tell me:
1. What options exist for this account;
2. What deadline I need to meet;
3. What documents you need from me;
4. Whether this agreement can be sent to me in writing; and
5. Your name or department so I can write down who I spoke with?

I am taking notes and trying to handle this responsibly.`}
          />

          <DocumentPacket
            title="Build a financial crisis folder"
            intro={
              <span>
                This folder is not busywork. It helps you apply for help,
                negotiate payment plans, correct mistakes, and prove what was
                agreed to later.
              </span>
            }
            categories={[
              {
                title: "Bills and notices",
                items: [
                  "Rent or mortgage statements, lease, foreclosure or eviction notices, and payment agreements.",
                  "Utility bills, shutoff notices, budget billing offers, and energy assistance paperwork.",
                  "Phone, internet, transportation, insurance, medical, tax, and child support notices.",
                ],
              },
              {
                title: "Income and hardship proof",
                items: [
                  "Pay stubs, unemployment paperwork, benefit letters, jail or incarceration documentation if relevant, and proof of reduced income.",
                  "Receipts for court-related travel, phone calls, commissary support, legal fees, and other case-related costs.",
                ],
              },
              {
                title: "Call and agreement records",
                items: [
                  "Names, dates, departments, phone numbers, confirmation numbers, and exact instructions from every important call.",
                  "Copies of emails, letters, payment-plan terms, hardship approvals, denial notices, and appeal deadlines.",
                ],
              },
            ]}
          />

          <OfflineOptions
            title="If internet access is limited"
            icon="📌"
            note={
              <span>
                Many families are phone-only, sharing devices, without a printer,
                or supporting someone who cannot safely or easily access online
                forms.
              </span>
            }
            items={[
              "Use a paper notebook or envelope system for bills, notices, and call notes.",
              "Ask agencies to mail forms or read the required documents over the phone.",
              "Use a public library, legal aid office, trusted helper, faith community, or reentry nonprofit to print forms when needed.",
              "Write down names, dates, departments, phone numbers, and confirmation numbers immediately after each call.",
              "Ask whether a phone application, mailed application, or in-person appointment is available.",
            ]}
          />
        </GuideSectionCard>
<GuideSectionHeader
          id="essentials"
          number="3"
          title="Stabilize the essentials"
          subtitle="Protect housing, utilities, food, phone access, and transportation before lower-priority bills."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Financial shock often hits several systems at once. A legal bill
              appears. Income drops. A caregiver misses work. Transportation
              costs rise. Food costs rise. Phone costs rise. The family may be
              afraid to tell anyone what is happening.
            </p>

            <p>
              Start with the essentials, then move outward.
            </p>

            <p>
              <strong>Housing.</strong> Call your landlord or mortgage servicer
              before the situation becomes a crisis. Ask for a payment plan,
              smaller weekly payments, temporary forbearance, hardship options,
              or a written explanation of what happens if you cannot pay the
              full amount on time. If you own your home or are behind on a
              mortgage, a HUD-approved housing counselor can help you understand
              options.
            </p>

            <p>
              <strong>Utilities.</strong> Ask about budget billing, shutoff
              protections, arrears management, medical necessity forms, winter
              protections, and energy assistance such as LIHEAP. If you do not
              know where to start, 211 can help connect you to local resources.
            </p>

            <p>
              <strong>Food.</strong> Use food banks early. Apply for SNAP or
              other food benefits as soon as you know income has changed. Waiting
              until the pantry is empty makes every other decision harder.
            </p>

            <p>
              <strong>Phone and internet.</strong> Phone access may be essential
              for court reminders, lawyer calls, school, work, benefits, medical
              care, and family coordination. Ask your provider about hardship,
              prepaid, or low-income options. Check whether Lifeline support is
              available.
            </p>

            <p>
              <strong>Transportation.</strong> Court, treatment, legal meetings,
              child care, work, and benefits appointments often depend on
              transportation. Ask local nonprofits, 211, public transit agencies,
              churches, reentry groups, or legal aid offices whether bus passes,
              gas cards, or transportation vouchers exist in your area.
            </p>
          </GuideProse>

          <ResourceLinkGrid
            title="Essential support resources"
            description="Use these as starting points. Local availability and eligibility can vary."
            resources={[
              {
                label: "HUD-approved housing counselor search",
                href: sourceLinks.cfpbHousingCounselor,
                badge: "Official",
                description:
                  "Find housing counselors for mortgage, rental, foreclosure, credit, and housing-stability questions.",
              },
              {
                label: "USAGov rental housing help",
                href: sourceLinks.usaGovRentHelp,
                badge: "Official",
                description:
                  "Federal public-information page for rental housing programs and emergency housing help.",
              },
              {
                label: "LIHEAP energy assistance",
                href: sourceLinks.liheap,
                badge: "Official",
                description:
                  "Federal information about Low Income Home Energy Assistance Program support.",
              },
              {
                label: "211 local help",
                href: sourceLinks.unitedWay211,
                badge: "Directory",
                description:
                  "Call 211 or use the website to look for local help with housing, utilities, food, health, and basic needs.",
                phone: "Dial 211",
              },
              {
                label: "Feeding America food bank locator",
                href: sourceLinks.feedingAmerica,
                badge: "Food",
                description:
                  "Find local food banks and food assistance programs by location.",
              },
              {
                label: "USAGov SNAP information",
                href: sourceLinks.snapUsaGov,
                badge: "Benefits",
                description:
                  "Plain-language federal information about applying for SNAP food benefits.",
              },
              {
                label: "Lifeline phone and internet support",
                href: sourceLinks.lifeline,
                badge: "Phone",
                description:
                  "Federal support program information for eligible phone or internet service discounts.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="legal-medical-tax"
          number="4"
          title="Handle legal, medical, and tax costs without going broke"
          subtitle="Ask early, get terms in writing, and avoid surprise obligations."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Legal emergencies often create new costs at the exact moment a
              household has less income. The safest approach is to ask clear
              questions early and avoid vague arrangements that nobody can
              remember later.
            </p>

            <p>
              <strong>Legal costs.</strong> Ask for the retainer, scope of work,
              hourly or flat-fee terms, billing cadence, refund rules for unused
              retainers, and itemized invoices in writing. Ask whether the work
              can be staged, such as a fee through a preliminary hearing and a
              separate discussion before the next phase.
            </p>

            <p>
              If the case is federal and the accused person cannot afford
              counsel, ask about eligibility for appointed counsel under the
              Criminal Justice Act. For civil legal issues connected to the
              crisis — housing, benefits, debt, family law, employment,
              consumer issues — legal aid or limited pro bono advice may help.
            </p>

            <p>
              <strong>Medical bills.</strong> Do not ignore medical bills. Call
              the billing office, ask for an itemized bill, ask about charity
              care or financial assistance, and request a no-interest payment
              plan if needed. Nonprofit hospitals have financial-assistance
              policy obligations, but you may still need to ask directly.
            </p>

            <p>
              <strong>Taxes.</strong> If taxes are owed, do not assume there is
              no option. Check balances, payment plans, and low-income tax help.
              If you cannot pay in full, ask about short-term and long-term IRS
              payment options and whether a qualified tax clinic can help.
            </p>
          </GuideProse>

          <GuideChecklist
            id="legal-medical-tax-checklist"
            title="Questions to ask before agreeing to a payment plan"
            columns={1}
            items={[
              {
                id: "amount",
                label: "What is the total amount owed right now?",
              },
              {
                id: "deadline",
                label: "What is the next deadline, and what happens if it is missed?",
              },
              {
                id: "hardship",
                label: "Is there a hardship, charity care, reduced-payment, or no-interest option?",
              },
              {
                id: "documents",
                label: "What documents are required to apply?",
              },
              {
                id: "writing",
                label: "Can the agreement, deadline, and payment terms be sent in writing?",
              },
              {
                id: "review",
                label: "Can the plan be reviewed again if income changes?",
              },
            ]}
          />

          <ScriptBox
            title="Attorney-fee clarity script"
            tone="legal"
            context="Use this when you need billing terms explained without creating conflict."
            script={`Hello, I am trying to understand the financial side of representation so our family can plan responsibly.

Can you please help me understand:
1. What the current fee covers;
2. What work is not included;
3. Whether this is flat fee, hourly, or staged;
4. When we should expect invoices or future payment requests;
5. Whether there is a monthly cap or payment plan option; and
6. What happens to unused funds if representation ends or the case changes?

I am not challenging the fee. I am trying to avoid confusion and plan around the case.`}
          />

          <ResourceLinkGrid
            title="Legal, medical, and tax help"
            resources={[
              {
                label: "Legal Services Corporation — get legal help",
                href: sourceLinks.lscLegalHelp,
                badge: "Civil legal aid",
                description:
                  "Starting point for finding civil legal aid programs for housing, benefits, debt, family, and other non-criminal legal issues.",
              },
              {
                label: "ABA Free Legal Answers",
                href: sourceLinks.abaFreeLegalAnswers,
                badge: "Civil Q&A",
                description:
                  "Virtual legal advice clinic for qualifying users with civil legal questions in participating states.",
              },
              {
                label: "Federal Defender resources",
                href: sourceLinks.federalDefenders,
                badge: "Federal cases",
                description:
                  "Federal defender and CJA-related resource hub for federal criminal defense context.",
              },
              {
                label: "IRS 501(r) financial assistance policy",
                href: sourceLinks.irs501r,
                badge: "Medical bills",
                description:
                  "IRS information about financial assistance policies for nonprofit hospitals.",
              },
              {
                label: "CMS medical bill rights",
                href: sourceLinks.cmsMedicalBillRights,
                badge: "Medical bills",
                description:
                  "Federal information about medical billing rights and surprise-billing protections.",
              },
              {
                label: "IRS payments",
                href: sourceLinks.irsPayments,
                badge: "Taxes",
                description:
                  "Official IRS page for tax payment options and payment plans.",
              },
              {
                label: "Taxpayer Advocate Service",
                href: sourceLinks.taxpayerAdvocate,
                badge: "Taxes",
                description:
                  "Independent organization within the IRS that helps taxpayers resolve certain tax problems.",
              },
              {
                label: "Low Income Taxpayer Clinics",
                href: sourceLinks.lowIncomeTaxpayerClinics,
                badge: "Taxes",
                description:
                  "IRS directory and information for clinics that may help qualifying taxpayers.",
              },
              {
                label: "VITA and TCE free tax preparation",
                href: sourceLinks.vitaTce,
                badge: "Taxes",
                description:
                  "IRS information about free tax return preparation for qualifying taxpayers.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="credit-debt"
          number="5"
          title="Protect credit and avoid debt traps"
          subtitle="A short-term crisis should not become years of avoidable financial damage."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Credit damage can make reentry, housing, transportation,
              employment, and family stability harder long after the immediate
              emergency has passed. You may not be able to protect everything,
              but you can reduce preventable harm.
            </p>

            <ul>
              <li>
                Pull free credit reports and dispute errors when you find them.
              </li>
              <li>
                Consider a credit freeze or fraud alert if identity theft,
                account misuse, or family financial conflict is a concern.
              </li>
              <li>
                Avoid payday loans, title loans, and debt-relief promises that
                require large upfront payments or pressure you to act
                immediately.
              </li>
              <li>
                Ask local credit unions about lower-cost alternatives, including
                small-dollar loans or Payday Alternative Loans where available.
              </li>
              <li>
                Look for low-fee checking accounts, including Bank On certified
                accounts, if banking access is a barrier.
              </li>
            </ul>
          </GuideProse>

          <CommonMistakes
            title="Common financial mistakes during a case"
            mistakes={[
              {
                mistake: "Paying whoever yells the loudest first.",
                whyItMatters:
                  "The loudest bill is not always the most important bill.",
                betterMove:
                  "Pay essentials first: housing, utilities, food, transportation, phone access, child support, medical needs, and required legal or court-related obligations.",
              },
              {
                mistake: "Relying on verbal promises.",
                whyItMatters:
                  "A helpful phone call can be forgotten, contradicted, or handled by a different department later.",
                betterMove:
                  "Ask for written confirmation and save names, dates, departments, and confirmation numbers.",
              },
              {
                mistake: "Using payday or title loans to solve a temporary gap.",
                whyItMatters:
                  "High-cost debt can trap the household and make next month’s essentials harder to pay.",
                betterMove:
                  "Ask about hardship plans, local assistance, credit-union alternatives, family support with clear written terms, or nonprofit help first.",
              },
              {
                mistake: "Co-signing risky debt to protect someone else.",
                whyItMatters:
                  "The caregiver’s credit may be the household’s path to housing, transportation, utilities, and future stability.",
                betterMove:
                  "Protect the caregiver’s credit and avoid new obligations that could destabilize the whole family.",
              },
              {
                mistake: "Ignoring medical, tax, or child-support notices.",
                whyItMatters:
                  "These problems can grow through collections, penalties, arrears, enforcement, or missed appeal windows.",
                betterMove:
                  "Call early, ask for review or assistance, and save proof of every request.",
              },
            ]}
          />

          <ResourceLinkGrid
            title="Credit and safer banking resources"
            resources={[
              {
                label: "AnnualCreditReport.com",
                href: sourceLinks.annualCreditReport,
                badge: "Credit reports",
                description:
                  "The official site to request free credit reports from the major credit reporting companies.",
              },
              {
                label: "FTC credit freeze and fraud alert guidance",
                href: sourceLinks.ftcCreditFreeze,
                badge: "Fraud prevention",
                description:
                  "Federal consumer guidance on credit freezes, fraud alerts, and protecting credit files.",
              },
              {
                label: "IdentityTheft.gov",
                href: sourceLinks.identityTheft,
                badge: "Identity theft",
                description:
                  "Federal recovery tool for reporting and responding to identity theft.",
              },
              {
                label: "MyCreditUnion.gov — payday loan alternatives",
                href: sourceLinks.myCreditUnionPals,
                badge: "Credit union",
                description:
                  "National Credit Union Administration information about Payday Alternative Loans and safer borrowing options.",
              },
              {
                label: "Bank On accounts",
                href: sourceLinks.bankOn,
                badge: "Banking",
                description:
                  "Information about low-cost, certified bank and credit union accounts.",
              },
            ]}
          />
        </GuideSectionCard>
<GuideSectionHeader
          id="child-support-family"
          number="6"
          title="If child support or family finances are involved"
          subtitle="Act quickly, document changes, and protect the caregiver’s stability."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              If income drops because of arrest, jail, detention, job loss, or
              court-related disruption, do not wait for child-support arrears to
              pile up. Ask the local child-support office how to request a
              review or modification and what documentation is required.
            </p>

            <p>
              Do not assume the order changes automatically. Many systems
              require a formal request before the amount can be reviewed. Ask
              what date matters, what proof is needed, and whether the request
              can be confirmed in writing.
            </p>

            <p>
              Family members often try to solve everything at once. A steadier
              approach is to centralize information, protect the caregiver’s
              credit, avoid secret financial promises, and keep a shared
              calendar of court, work, school, benefit, bill, and payment dates.
            </p>
          </GuideProse>

          <GuideChecklist
            id="family-financial-checklist"
            title="Family financial checklist"
            columns={1}
            items={[
              {
                id: "housing",
                label: "Call landlord or mortgage servicer and ask for a hardship plan.",
              },
              {
                id: "utilities",
                label: "Contact utilities and ask about budget billing, shutoff protections, or LIHEAP.",
              },
              {
                id: "food",
                label: "Secure food support through food banks, SNAP, school meals, or local programs.",
              },
              {
                id: "medical",
                label: "Review medical bills and ask for itemized bills, charity care, and payment plans.",
              },
              {
                id: "taxes",
                label: "If taxes are owed, review IRS payment options or ask a qualified tax clinic for help.",
              },
              {
                id: "credit",
                label: "Pull credit reports and dispute errors.",
              },
              {
                id: "freeze",
                label: "Freeze credit or place a fraud alert if identity misuse is a concern.",
              },
              {
                id: "avoid-debt",
                label: "Avoid payday loans, title loans, and risky co-signing.",
              },
              {
                id: "child-support",
                label: "Request child-support review or modification immediately if income has changed.",
              },
              {
                id: "calendar",
                label: "Use one shared calendar for bills, calls, court dates, appointments, and deadlines.",
              },
            ]}
          />

          <VerifyBeforeActing
            title="Verify before relying on a financial decision"
            whoToAsk={
              <span>
                The office or person with actual authority: attorney, court
                clerk, child-support office, benefit agency, landlord, mortgage
                servicer, utility provider, hospital billing office, tax agency,
                or supervised-release/probation officer if conditions may be
                affected.
              </span>
            }
            whatToAsk={
              <span>
                Ask the narrow question tied to the action you are about to
                take: “Does this affect eligibility?”, “Can this order be
                reviewed?”, “Will this payment plan stop collections?”, “Is this
                agreement in writing?”, “Does my supervision condition allow
                this?”, or “What deadline controls?”
              </span>
            }
            whatToSave={
              <span>
                Save the date, staff name, department, phone number, written
                policy, application confirmation, payment-plan terms, appeal
                deadline, and any written instruction you receive.
              </span>
            }
          />

          <ResourceLinkGrid
            title="Child support"
            resources={[
              {
                label: "ACF — change a child support order",
                href: sourceLinks.acfChildSupportOrder,
                badge: "Official",
                description:
                  "Federal child-support information explaining that a support order can be changed only by a new order and pointing parents toward modification steps.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="closing"
          number="7"
          title="You do not have to solve everything today"
          subtitle="Steady action beats panic."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              This season may be hard, but the whole burden does not have to be
              solved in one day. Every phone call you make, every note you keep,
              every agreement you get in writing, and every high-risk debt trap
              you avoid is a brick in the foundation of your family’s stability.
            </p>

            <p>
              Focus on essentials first. Keep communication open with creditors
              and agencies. Protect the caregiver’s credit. Ask for help early.
              Use official sources when possible. Get names, dates, and terms in
              writing.
            </p>

            <p>
              This is not about being perfect. It is about making the next safer
              decision, then the next one.
            </p>
          </GuideProse>

          <GuideCallout tone="success" icon="🌱" title="A steady reminder">
            <p>
              You are not wrong to be worried. You are also not powerless. Start
              with the starred essentials, document everything, and ask for
              written answers before acting on anything that could affect
              housing, benefits, credit, court obligations, supervision, or
              family stability.
            </p>
          </GuideCallout>

          <SoftDivider label="Next steps" />

          <RelatedGuides
            guides={[
              {
                title: "Family Support Guide",
                description:
                  "Support for families trying to stay steady, communicate clearly, and protect the household during a case.",
                to: "/resources/family-support",
              },
              {
                title: "Financial Planning Guide",
                description:
                  "Longer-term planning for rebuilding stability after the immediate financial emergency.",
                to: "/resources/financial-planning",
              },
              {
                title: "Reentry Resources",
                description:
                  "Practical help for people preparing for release, supervision, housing, employment, and community stability.",
                to: "/resources/reentry",
              },
              {
                title: "Employment Guide",
                description:
                  "Support for job searching, disclosure decisions, documentation, and workplace stability.",
                to: "/resources/employment",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="sources"
          number="8"
          title="Sources and verification"
          subtitle="Use official and reputable sources, then verify locally before relying on a program or deadline."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              These links are included because financial, benefit, housing,
              utility, medical, tax, credit, and child-support rules can change.
              Local eligibility, deadlines, and documentation requirements may
              vary by state, county, agency, provider, and court order.
            </p>
          </GuideProse>

          <SourceList
            note="Several key links were spot-checked for the sandbox preview. Before replacing production, recheck every link and any state-specific claim."
            sources={[
              {
                label: "Consumer Financial Protection Bureau — Find a Housing Counselor",
                href: sourceLinks.cfpbHousingCounselor,
                description:
                  "HUD-approved housing counselor search for housing, mortgage, foreclosure, rental, and credit questions.",
              },
              {
                label: "USAGov — Rental housing programs",
                href: sourceLinks.usaGovRentHelp,
                description:
                  "Federal public-information page for rental housing and emergency housing help.",
              },
              {
                label: "ACF — Low Income Home Energy Assistance Program",
                href: sourceLinks.liheap,
                description:
                  "Federal LIHEAP program information for energy assistance.",
              },
              {
                label: "United Way 211",
                href: sourceLinks.unitedWay211,
                description:
                  "Local referral network for housing, utilities, food, health, and other essential needs.",
              },
              {
                label: "Feeding America — Find your local food bank",
                href: sourceLinks.feedingAmerica,
                description:
                  "Food bank locator and food assistance starting point.",
              },
              {
                label: "USAGov — SNAP food benefits",
                href: sourceLinks.snapUsaGov,
                description:
                  "Federal public-information page for applying for SNAP and checking benefit information.",
              },
              {
                label: "Lifeline Support",
                href: sourceLinks.lifeline,
                description:
                  "Phone and internet support program information for eligible households.",
              },
              {
                label: "Legal Services Corporation — Get Legal Help",
                href: sourceLinks.lscLegalHelp,
                description:
                  "Civil legal aid starting point for housing, benefits, debt, family, and consumer issues.",
              },
              {
                label: "ABA Free Legal Answers",
                href: sourceLinks.abaFreeLegalAnswers,
                description:
                  "Civil legal Q&A clinic for qualifying users in participating jurisdictions.",
              },
              {
                label: "Federal Defender Services Office Training Division",
                href: sourceLinks.federalDefenders,
                description:
                  "Federal defender and CJA-related resource hub for federal criminal defense context.",
              },
              {
                label: "IRS — Section 501(r)(4) financial assistance policy",
                href: sourceLinks.irs501r,
                description:
                  "IRS information about nonprofit hospital financial assistance policies.",
              },
              {
                label: "CMS — Medical bill rights",
                href: sourceLinks.cmsMedicalBillRights,
                description:
                  "Federal information on medical billing rights and surprise-billing protections.",
              },
              {
                label: "IRS — Payments",
                href: sourceLinks.irsPayments,
                description:
                  "Official IRS page for payment options and payment plans.",
              },
              {
                label: "Taxpayer Advocate Service",
                href: sourceLinks.taxpayerAdvocate,
                description:
                  "Independent IRS organization that helps taxpayers with certain tax problems.",
              },
              {
                label: "IRS — Low Income Taxpayer Clinics",
                href: sourceLinks.lowIncomeTaxpayerClinics,
                description:
                  "Information and directory for clinics that may assist qualifying taxpayers.",
              },
              {
                label: "IRS — VITA/TCE free tax preparation",
                href: sourceLinks.vitaTce,
                description:
                  "IRS information about free tax return preparation for qualifying taxpayers.",
              },
              {
                label: "AnnualCreditReport.com",
                href: sourceLinks.annualCreditReport,
                description:
                  "Official site to request free credit reports from the major credit reporting companies.",
              },
              {
                label: "Federal Trade Commission — Credit freezes and fraud alerts",
                href: sourceLinks.ftcCreditFreeze,
                description:
                  "Federal consumer guidance on credit freezes and fraud alerts.",
              },
              {
                label: "IdentityTheft.gov",
                href: sourceLinks.identityTheft,
                description:
                  "Federal recovery tool for reporting and responding to identity theft.",
              },
              {
                label: "MyCreditUnion.gov — Payday Alternative Loans",
                href: sourceLinks.myCreditUnionPals,
                description:
                  "National Credit Union Administration consumer information about payday loan alternatives.",
              },
              {
                label: "Bank On",
                href: sourceLinks.bankOn,
                description:
                  "Information about low-cost certified bank and credit union accounts.",
              },
              {
                label: "ACF Office of Child Support Services — Change a support order",
                href: sourceLinks.acfChildSupportOrder,
                description:
                  "Federal child-support information about changing a support order.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}