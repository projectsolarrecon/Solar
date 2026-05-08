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
  GuideIconList,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
} from "../../components/solar";

const sourceLinks = {
  cfpbHousingCounselor: "https://www.consumerfinance.gov/find-a-housing-counselor/",
  usaGovRentHelp: "https://www.usa.gov/rental-housing-programs",
  energyHelp: "https://www.usa.gov/help-with-energy-bills",
  unitedWay211: "https://www.211.org/",
  feedingAmerica: "https://www.feedingamerica.org/find-your-local-foodbank",
  snapUsaGov: "https://www.usa.gov/food-stamps",
  lifeline: "https://www.lifelinesupport.org/",
  lscLegalHelp: "https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help",
  abaFreeLegalAnswers: "https://abafreelegalanswers.org/",
  federalDefenders: "https://www.fd.org/",
  irs501r:
    "https://www.irs.gov/charities-non-profits/financial-assistance-policy-and-emergency-medical-care-policy-section-501r4",
  cmsMedicalBillRights: "https://www.cms.gov/medical-bill-rights",
  irsPayments: "https://www.irs.gov/payments",
  taxpayerAdvocate: "https://www.taxpayeradvocate.irs.gov/",
  lowIncomeTaxpayerClinics: "https://www.irs.gov/advocate/low-income-taxpayer-clinics",
  vitaTce: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers",
  annualCreditReport: "https://www.annualcreditreport.com/",
  ftcCreditFreeze: "https://consumer.ftc.gov/articles/credit-freezes-and-fraud-alerts",
  identityTheft: "https://www.identitytheft.gov/",
  myCreditUnionPals:
    "https://mycreditunion.gov/manage-your-money/consumer-loans-credit-cards/payday-alternative-loans",
  bankOn: "https://joinbankon.org/",
  acfChildSupportOrder: "https://acf.gov/css/faq/my-income-has-changed-can-my-order-be-revised",
};

export default function FinancialSupportStrategies(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Financial Support Strategies | The SOLAR Project"
        description="Practical, step-by-step support for families managing legal fees, lost income, urgent bills, benefits, credit, and ongoing expenses during a criminal case."
        keywords="financial support criminal case, legal fees, family support, hardship programs, credit protection, rent help, SNAP, LIHEAP, child support modification"
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
            Surviving the Financial Shock of a Criminal Case
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Practical, step-by-step support for families managing legal fees, lost income,
            urgent bills, benefits, credit, and ongoing expenses without losing stability
            or hope.
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
            When someone you love is facing charges, it can feel like the ground
            has been ripped out from under your feet — emotionally, socially, and
            financially. Bills do not stop coming just because your family is in
            crisis. In fact, the costs often rise sharply.
          </p>

          <p>
            Think of this guide like a life jacket in rough water. You do not
            have to swim all the way to shore today. You need to stay afloat,
            protect the essentials, and make the next few decisions carefully.
          </p>

          <p>
            Keep a notebook or folder nearby as you work through this page.
            Paper is fine. The goal is not perfection. The goal is to protect
            housing, food, utilities, transportation, phone access,
            court-related stability, and the caregiver’s credit while you figure
            out what help is available.
          </p>
        </GuideIntro>

        <GuideCallout tone="legal" icon="⚖️" title="This is practical guidance, not legal or financial advice">
          <p>
            This is a practical playbook for stabilizing cash flow and
            protecting your household during a criminal case. Rules,
            eligibility, court orders, supervision conditions, and state
            programs can change the answer. Verify important steps with the
            agency, attorney, court, benefit office, creditor, or qualified
            professional before relying on them.
          </p>
        </GuideCallout>

        <QuickStartPanel
          title="First moves when money panic hits"
          subtitle="Start by protecting the bills that keep the household physically stable, reachable, and able to keep appointments."
          icon="🧯"
          urgentActions={[
            <span key="log">
              Get one notebook, folder, envelope, or notes app file and label it{" "}
              <strong>“money crisis log.”</strong>
            </span>,
            <span key="essentials">
              Write down the bills that keep your household housed, fed,
              connected, and able to get to work, school, court, medical care,
              and legal appointments.
            </span>,
            <span key="star">
              Put a star next to the essentials: rent or mortgage, utilities,
              food, transportation, phone or internet, child support, medical
              needs, and lawyer or court-related deadlines.
            </span>,
          ]}
          nextActions={[
            <span key="pause">
              Cancel or pause non-essential subscriptions, memberships, and
              automatic payments that are not keeping the household stable.
            </span>,
            <span key="call">
              Call before you are late. Ask for hardship options, payment plans,
              budget billing, extensions, or written instructions.
            </span>,
            <span key="save">
              Save names, dates, departments, confirmation numbers, letters,
              emails, bills, and every agreement in writing.
            </span>,
          ]}
          reminder={
            <span>
              <strong>Starred bills go first.</strong> Many other bills can be
              paused, reduced, deferred, negotiated, or handled through a formal
              assistance program.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Stage 1",
              title: "Stop the slide",
              icon: "🛑",
              tone: "urgent",
              description:
                "Pause non-essentials, list immediate bills, and separate true essentials from pressure or embarrassment.",
            },
            {
              eyebrow: "Stage 2",
              title: "Stabilize the basics",
              icon: "🏠",
              tone: "warning",
              description:
                "Work through housing, utilities, food, phone, transportation, legal costs, medical bills, taxes, and child support.",
            },
            {
              eyebrow: "Stage 3",
              title: "Protect the future",
              icon: "🛡️",
              tone: "success",
              description:
                "Document agreements, protect credit, avoid predatory debt, and build a clear household plan.",
            },
          ]}
        />

        <GuideSectionHeader
          id="essentials"
          number="1"
          title="First Things First: Separate Essentials from Noise"
          subtitle="Money panic makes every bill feel equally urgent. They are not all equal."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Essentials are the bills that keep your household physically
              stable and connected to the systems you must keep using: housing,
              utilities, food, transportation, phone or internet access, medical
              care, child support, legal appointments, court dates, and work or
              school.
            </p>

            <p>
              Once you know what is essential, you can stop guessing. You can
              make calls in order, ask for help more clearly, and avoid spending
              scarce money on the loudest bill instead of the most important one.
            </p>
          </GuideProse>

          <GuideChecklist
            id="financial-essentials"
            title="Mark the bills that protect immediate stability"
            columns={2}
            items={[
              { id: "housing", label: "Rent, mortgage, lease, or foreclosure deadline." },
              { id: "utilities", label: "Electric, gas, water, heating, cooling, or shutoff notice." },
              { id: "food", label: "Groceries, food benefits, school meals, or food-bank access." },
              { id: "transportation", label: "Gas, bus fare, car insurance, court travel, work travel, or child-care travel." },
              { id: "phone", label: "Phone or internet access needed for court, counsel, benefits, work, school, or family coordination." },
              { id: "medical", label: "Urgent medication, medical treatment, insurance, or billing deadlines." },
              { id: "legal", label: "Attorney fees, court deadlines, required appointments, or document costs." },
              { id: "child-support", label: "Child support, custody-related costs, or family-court deadlines." },
            ]}
          />

          <GuideCallout tone="reminder" icon="★" title="The starred bills go first">
            <p>
              Starred bills should protect shelter, food, utilities, phone
              access, transportation, court stability, medical needs, child
              support, and work or school. Everything else should be reviewed,
              paused, reduced, negotiated, or delayed when possible.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="triage"
          number="2"
          title="The 48-Hour Money Triage"
          subtitle="Use the first two days to slow preventable damage."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The first two days are about slowing the financial slide. You may
              not be able to solve the larger case, replace income, or rebuild
              savings right away. You can still reduce preventable damage.
            </p>
          </GuideProse>

          <GuideIconList
            title="Do these before the next round of bills hits"
            variant="cards"
            columns={2}
            tone="money"
            items={[
              {
                icon: "pause",
                title: "Cancel extras",
                description:
                  "Pause streaming services, gyms, subscriptions, delivery memberships, apps, and automatic payments that are not essential.",
              },
              {
                icon: "calendar",
                title: "Make a due-date map",
                description:
                  "Write what is due this week, what is due this month, and what already has a late notice. Use a visible or shared calendar if the household is coordinating together.",
              },
              {
                icon: "phone",
                title: "Call before you are late",
                description:
                  "Hardship programs, extensions, and payment plans are often easier to access before the account is seriously past due.",
              },
              {
                icon: "fileText",
                title: "Document every call",
                description:
                  "Write down who you spoke with, the date, department, phone number, confirmation number, what they said, and what you agreed to do next.",
              },
            ]}
          />

          <ScriptBox
            title="Hardship call script"
            tone="neutral"
            context="Use this for landlords, mortgage servicers, utilities, creditors, hospitals, and other billing offices."
            script={`Hello, my name is [Name]. My household is going through a legal emergency and our income or expenses have changed.

We want to stay in good standing. Can you tell me what hardship options, payment plans, budget billing, extensions, or assistance programs are available?

What documentation do you need, what deadline matters, and can you send the agreement or instructions in writing?`}
          />

          <DocumentPacket
            title="Start a money crisis folder"
            intro={
              <p>
                This folder is not busywork. It helps you apply for help,
                negotiate payment plans, correct mistakes, and prove what was
                agreed to later.
              </p>
            }
            categories={[
              {
                title: "Bills and notices",
                items: [
                  "Rent or mortgage statements, lease, foreclosure or eviction notices, and payment agreements.",
                  "Utility bills, shutoff notices, budget billing offers, and energy assistance paperwork.",
                  "Phone, internet, transportation, insurance, medical, tax, and child-support notices.",
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
          id="basic-needs"
          number="3"
          title="Stabilize Housing, Utilities, Food, Phone, and Transportation"
          subtitle="Financial shock often hits several systems at once. Start with the essentials, then move outward."
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
              Start with the essentials, then move outward. For each essential
              bill, ask what hardship option exists, what proof is needed, what
              deadline controls, and whether the answer can be put in writing.
            </p>
          </GuideProse>

          <GuideIconList
            title="Where to start"
            variant="rows"
            columns={1}
            tone="info"
            items={[
              {
                icon: "housing",
                title: "Housing",
                description: (
                  <>
                    Call your landlord or mortgage servicer before the situation
                    becomes a crisis. Ask for a payment plan, smaller weekly
                    payments, temporary forbearance, hardship options, or a
                    written explanation of what happens if you cannot pay the
                    full amount on time. If you own your home or are behind on a
                    mortgage, a HUD-approved housing counselor can help you
                    understand options.
                  </>
                ),
              },
              {
                icon: "utilities",
                title: "Utilities",
                description: (
                  <>
                    Ask about budget billing, shutoff protections, arrears
                    management, medical necessity forms, winter protections, and
                    energy assistance such as LIHEAP. If you do not know where
                    to start, 211 can help connect you to local resources.
                  </>
                ),
              },
              {
                icon: "food",
                title: "Food",
                description: (
                  <>
                    Use food banks early. Apply for SNAP or other food benefits
                    as soon as you know income has changed. Waiting until the
                    pantry is empty makes every other decision harder.
                  </>
                ),
              },
              {
                icon: "wifi",
                title: "Phone and internet",
                description: (
                  <>
                    Phone access may be essential for court reminders, lawyer
                    calls, school, work, benefits, medical care, and family
                    coordination. Ask your provider about hardship, prepaid, or
                    low-income options. Check whether Lifeline support is
                    available.
                  </>
                ),
              },
              {
                icon: "transportation",
                title: "Transportation",
                description: (
                  <>
                    Court, treatment, legal meetings, child care, work, and
                    benefits appointments often depend on transportation. Ask
                    local nonprofits, 211, public transit agencies, churches,
                    reentry groups, or legal aid offices whether bus passes, gas
                    cards, or transportation vouchers exist in your area.
                  </>
                ),
              },
            ]}
          />

          <ResourceLinkGrid
            title="Basic-needs resources"
            description="Use official or established resource finders first, then verify local eligibility and deadlines."
            resources={[
              {
                label: "HUD-approved housing counselor finder",
                href: sourceLinks.cfpbHousingCounselor,
                badge: "Official",
                description:
                  "Find HUD-approved housing counselors for mortgage, foreclosure, rental, and credit issues.",
              },
              {
                label: "USAGov rental assistance",
                href: sourceLinks.usaGovRentHelp,
                badge: "Official",
                description:
                  "Government overview of rental assistance, vouchers, subsidized housing, and public housing.",
              },
              {
                label: "USAGov energy-bill help",
                href: sourceLinks.energyHelp,
                badge: "Official",
                description:
                  "Plain-language LIHEAP and weatherization guidance, including how to find state help.",
              },
              {
                label: "211 local resource finder",
                href: sourceLinks.unitedWay211,
                badge: "Resource finder",
                description:
                  "Connects people to local help with housing, utilities, food, health, and other urgent needs.",
              },
              {
                label: "Feeding America food bank locator",
                href: sourceLinks.feedingAmerica,
                badge: "Food",
                description:
                  "Find a local food bank or pantry in the Feeding America network.",
              },
              {
                label: "USAGov SNAP information",
                href: sourceLinks.snapUsaGov,
                badge: "Official",
                description:
                  "Plain-language federal overview of SNAP benefits and how to apply through your state.",
              },
              {
                label: "Lifeline phone and internet support",
                href: sourceLinks.lifeline,
                badge: "Official program",
                description:
                  "Federal program information for discounted phone or internet service for eligible households.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="legal-medical-tax"
          number="4"
          title="Handle Legal Costs, Medical Bills, and Taxes Without Guessing"
          subtitle="Ask clear questions early and get important terms in writing."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Legal emergencies often create new costs at the exact moment a
              household has less income. The safest approach is to ask clear
              questions early and avoid vague arrangements that nobody can
              remember later.
            </p>
          </GuideProse>

          <GuideIconList
            title="Costs that need written answers"
            variant="cards"
            columns={2}
            tone="legal"
            items={[
              {
                icon: "legal",
                title: "Legal costs",
                description:
                  "Ask for the retainer, scope of work, hourly or flat-fee terms, billing cadence, refund rules for unused retainers, itemized invoices, and whether a monthly cap is possible.",
              },
              {
                icon: "plan",
                title: "Case budget with milestones",
                description:
                  "Ask counsel for a case budget with milestones and decision points. It can reduce surprise invoices and help the family understand when another payment discussion may be needed.",
              },
              {
                icon: "hospital",
                title: "Medical bills",
                description:
                  "Call the billing office, ask for an itemized bill, ask about charity care or financial assistance, and request a no-interest payment plan if needed.",
              },
              {
                icon: "tax",
                title: "Taxes",
                description:
                  "If taxes are owed, check balances, payment plans, low-income tax clinics, free tax preparation, and whether a qualified tax professional can help.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⚖️" title="Criminal defense and civil legal help are different systems">
            <p>
              If the case is federal and the accused person cannot afford
              counsel, ask about eligibility for appointed counsel under the
              Criminal Justice Act. For civil legal issues connected to the
              crisis — housing, benefits, debt, family law, employment, consumer
              issues — legal aid or limited pro bono advice may help.
            </p>
          </GuideCallout>

          <ResourceLinkGrid
            title="Legal, medical, and tax resources"
            resources={[
              {
                label: "Legal Services Corporation legal-aid finder",
                href: sourceLinks.lscLegalHelp,
                badge: "Civil legal aid",
                description:
                  "Find LSC-funded legal aid organizations for civil legal problems such as housing, benefits, debt, family law, and consumer issues.",
              },
              {
                label: "ABA Free Legal Answers",
                href: sourceLinks.abaFreeLegalAnswers,
                badge: "Civil Q&A",
                description:
                  "Online civil legal question-and-answer clinic for eligible users in participating states.",
              },
              {
                label: "Federal Defender Services",
                href: sourceLinks.federalDefenders,
                badge: "Federal criminal",
                description:
                  "Federal defender and CJA-related resource hub for eligible federal criminal cases.",
              },
              {
                label: "IRS nonprofit hospital financial-assistance policy rules",
                href: sourceLinks.irs501r,
                badge: "Medical bills",
                description:
                  "IRS information on financial-assistance policy requirements for tax-exempt hospitals.",
              },
              {
                label: "CMS medical bill rights",
                href: sourceLinks.cmsMedicalBillRights,
                badge: "Medical bills",
                description:
                  "Federal information about medical billing rights and protections, including surprise billing protections.",
              },
              {
                label: "IRS payments",
                href: sourceLinks.irsPayments,
                badge: "Taxes",
                description:
                  "Official IRS payment and payment-plan information.",
              },
              {
                label: "Taxpayer Advocate Service",
                href: sourceLinks.taxpayerAdvocate,
                badge: "Taxes",
                description:
                  "Independent organization within the IRS that helps taxpayers with tax problems.",
              },
              {
                label: "Low Income Taxpayer Clinics",
                href: sourceLinks.lowIncomeTaxpayerClinics,
                badge: "Taxes",
                description:
                  "IRS directory and information for clinics that may help eligible taxpayers.",
              },
              {
                label: "VITA/TCE free tax preparation",
                href: sourceLinks.vitaTce,
                badge: "Taxes",
                description:
                  "Free tax-return preparation information for qualifying taxpayers.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="credit-debt"
          number="5"
          title="Protect Credit and Avoid Debt Traps"
          subtitle="Credit damage can follow the family long after the first emergency passes."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Credit damage can make reentry, housing, transportation,
              employment, and family stability harder long after the immediate
              emergency has passed. You may not be able to protect everything,
              but you can reduce preventable harm.
            </p>
          </GuideProse>

          <GuideIconList
            title="Credit-protection moves"
            variant="cards"
            columns={2}
            tone="warning"
            items={[
              {
                icon: "credit",
                title: "Pull free credit reports",
                description:
                  "Use AnnualCreditReport.com to review reports and dispute errors when you find them.",
              },
              {
                icon: "shield",
                title: "Consider a credit freeze or fraud alert",
                description:
                  "A freeze or fraud alert may help if identity theft, account misuse, or family financial conflict is a concern.",
              },
              {
                icon: "warning",
                title: "Avoid high-cost debt traps",
                description:
                  "Be careful with payday loans, title loans, and debt-relief promises that require large upfront payments or pressure you to act immediately.",
              },
              {
                icon: "bank",
                title: "Ask about safer small-dollar options",
                description:
                  "Local credit unions may offer lower-cost alternatives, including Payday Alternative Loans where available.",
              },
              {
                icon: "wallet",
                title: "Look for low-fee bank accounts",
                description:
                  "Bank On certified accounts may help if banking access, overdraft history, or account fees are a barrier.",
              },
            ]}
          />

          <CommonMistakes
            title="Common money mistakes during a legal crisis"
            mistakes={[
              {
                mistake: "Paying the loudest collector before protecting housing, food, utilities, phone access, or court-related stability.",
                whyItMatters:
                  "Pressure does not always equal priority. A loud bill may be less urgent than a quiet shutoff, court, or housing deadline.",
                betterMove:
                  "Star essential bills first, then call other creditors to ask about hardship options.",
              },
              {
                mistake: "Letting verbal agreements stay verbal.",
                whyItMatters:
                  "A phone promise may be hard to prove later if the account goes to collections or the office changes staff.",
                betterMove:
                  "Ask for written confirmation, save the name and department, and write down the date and confirmation number.",
              },
              {
                mistake: "Borrowing from high-cost lenders to cover every bill at once.",
                whyItMatters:
                  "High-cost debt can create a second emergency that lasts longer than the original bill.",
                betterMove:
                  "Ask about hardship plans, public benefits, legal aid, credit-union options, and local assistance first.",
              },
            ]}
          />

          <ResourceLinkGrid
            title="Credit and safer-banking resources"
            resources={[
              {
                label: "AnnualCreditReport.com",
                href: sourceLinks.annualCreditReport,
                badge: "Credit reports",
                description:
                  "Official site authorized by federal law for free credit reports from the major credit bureaus.",
              },
              {
                label: "FTC credit freezes and fraud alerts",
                href: sourceLinks.ftcCreditFreeze,
                badge: "Official",
                description:
                  "FTC guidance on credit freezes, fraud alerts, and when each may help.",
              },
              {
                label: "IdentityTheft.gov",
                href: sourceLinks.identityTheft,
                badge: "Official",
                description:
                  "FTC identity-theft reporting and recovery-plan site.",
              },
              {
                label: "MyCreditUnion.gov payday alternative loans",
                href: sourceLinks.myCreditUnionPals,
                badge: "Official",
                description:
                  "NCUA consumer information on payday loans, Payday Alternative Loans, and safer borrowing questions.",
              },
              {
                label: "Bank On",
                href: sourceLinks.bankOn,
                badge: "Banking access",
                description:
                  "Information about safe, affordable checking accounts and local Bank On coalitions.",
              },
            ]}
          />
        </GuideSectionCard>
<GuideSectionHeader
          id="child-support-family"
          number="6"
          title="Child Support, Family Coordination, and Verification"
          subtitle="Some obligations do not change automatically just because income drops."
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
            columns={2}
            items={[
              {
                id: "landlord",
                label: "Call landlord or mortgage servicer and ask for a hardship plan.",
              },
              {
                id: "utilities",
                label: "Contact utilities and ask about budget billing, shutoff protections, or energy help.",
              },
              {
                id: "food",
                label: "Secure food through food banks, SNAP, school meals, or local programs.",
              },
              {
                id: "medical",
                label: "Review medical bills, request itemized bills, and ask about charity care.",
              },
              {
                id: "taxes",
                label: "If taxes are owed, check IRS payment-plan options and tax-help programs.",
              },
              {
                id: "credit",
                label: "Pull credit reports, dispute errors, and consider a freeze if fraud is a concern.",
              },
              {
                id: "debt",
                label: "Avoid payday loans, title loans, and upfront-fee debt-relief promises.",
              },
              {
                id: "child-support",
                label: "Ask the child-support office how to request review or modification if income changed.",
              },
              {
                id: "calendar",
                label: "Keep a visible or shared calendar of court, work, school, benefit, bill, and payment dates.",
              },
              {
                id: "agreements",
                label: "Save every payment-plan agreement, hardship approval, denial notice, and appeal deadline.",
              },
            ]}
          />

          <VerifyBeforeActing
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
                Ask the narrow question tied to the action you are about to take:
                “Does this affect eligibility?”, “Can this order be reviewed?”,
                “Will this payment plan stop collections?”, “Is this agreement
                in writing?”, “Does my supervision condition allow this?”, or
                “What deadline controls?”
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

          <GuideCallout tone="family" icon="👪" title="Protect the person keeping the household stable">
            <p>
              Caregivers sometimes co-sign debt, open new credit, or make
              promises they cannot afford because they are scared. Before taking
              on new debt, ask what happens if the case lasts longer than
              expected, income does not return quickly, or another bill arrives.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="7"
          title="Resources and Next Steps"
          subtitle="Use official sources when possible, then verify local rules, eligibility, and deadlines."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Main resource links"
            description="Start with these resource finders and official pages, then confirm local eligibility and documentation rules."
            resources={[
              {
                label: "CFPB HUD-approved housing counselor finder",
                href: sourceLinks.cfpbHousingCounselor,
                badge: "Official",
                description:
                  "Housing counselor lookup for mortgage, rental, foreclosure, and credit issues.",
              },
              {
                label: "USAGov rental assistance",
                href: sourceLinks.usaGovRentHelp,
                badge: "Official",
                description:
                  "Federal plain-language guide to rental assistance and affordable housing programs.",
              },
              {
                label: "USAGov energy-bill help",
                href: sourceLinks.energyHelp,
                badge: "Official",
                description:
                  "LIHEAP and utility-help guidance with state office lookup links.",
              },
              {
                label: "211",
                href: sourceLinks.unitedWay211,
                badge: "Local help",
                description:
                  "Local referrals for housing, utilities, food, health, transportation, and crisis needs.",
              },
              {
                label: "Feeding America food bank locator",
                href: sourceLinks.feedingAmerica,
                badge: "Food",
                description:
                  "National food-bank network locator.",
              },
              {
                label: "USAGov SNAP information",
                href: sourceLinks.snapUsaGov,
                badge: "Official",
                description:
                  "Federal overview of SNAP and how to apply through your state.",
              },
              {
                label: "Lifeline",
                href: sourceLinks.lifeline,
                badge: "Phone/internet",
                description:
                  "Federal phone and internet discount program information.",
              },
              {
                label: "LSC legal aid finder",
                href: sourceLinks.lscLegalHelp,
                badge: "Legal aid",
                description:
                  "Find LSC-funded civil legal aid near you.",
              },
              {
                label: "ABA Free Legal Answers",
                href: sourceLinks.abaFreeLegalAnswers,
                badge: "Civil Q&A",
                description:
                  "Free civil legal question-and-answer help for eligible users in participating states.",
              },
              {
                label: "IRS payments",
                href: sourceLinks.irsPayments,
                badge: "Taxes",
                description:
                  "IRS payment and installment-plan information.",
              },
              {
                label: "AnnualCreditReport.com",
                href: sourceLinks.annualCreditReport,
                badge: "Credit",
                description:
                  "Official free credit-report site.",
              },
              {
                label: "ACF child support modification FAQ",
                href: sourceLinks.acfChildSupportOrder,
                badge: "Child support",
                description:
                  "Federal child-support FAQ on income changes and possible order review.",
              },
            ]}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "The SOLAR Family & Allies Guide",
                description:
                  "For families trying to support a loved one through arrest, court, incarceration, reentry, and long-term adjustment.",
                to: "/resources/family-support-guide",
              },
              {
                title: "Financial Planning Guide",
                description:
                  "For longer-term rebuilding after the immediate legal and household crisis stabilizes.",
                to: "/resources/financial-planning-guide",
              },
              {
                title: "Reentry Checklist",
                description:
                  "For planning housing, documents, health care, transportation, employment, and compliance after incarceration.",
                to: "/resources/reentry-checklist",
              },
            ]}
          />

          <SourceList
            title="Sources & verification"
            note="These links are included because financial, benefit, housing, utility, medical, tax, credit, and child-support rules can change. Local eligibility, deadlines, and documentation requirements may vary by state, county, agency, provider, and court order."
            sources={[
              {
                label: "Consumer Financial Protection Bureau — Find a housing counselor",
                href: sourceLinks.cfpbHousingCounselor,
                description:
                  "HUD-approved housing counselor lookup and housing counseling information.",
              },
              {
                label: "USAGov — Rental assistance",
                href: sourceLinks.usaGovRentHelp,
                description:
                  "Federal plain-language rental assistance and affordable housing overview.",
              },
              {
                label: "USAGov — Help with energy bills",
                href: sourceLinks.energyHelp,
                description:
                  "LIHEAP, weatherization, and utility-disconnection help.",
              },
              {
                label: "United Way 211",
                href: sourceLinks.unitedWay211,
                description:
                  "Local referral network for housing, utilities, food, health, and crisis needs.",
              },
              {
                label: "Feeding America — Find your local food bank",
                href: sourceLinks.feedingAmerica,
                description:
                  "Food bank locator.",
              },
              {
                label: "USAGov — SNAP food benefits",
                href: sourceLinks.snapUsaGov,
                description:
                  "SNAP overview and state application routing.",
              },
              {
                label: "Lifeline Support",
                href: sourceLinks.lifeline,
                description:
                  "Federal phone and internet discount program information.",
              },
              {
                label: "Legal Services Corporation — I Need Legal Help",
                href: sourceLinks.lscLegalHelp,
                description:
                  "Civil legal aid finder.",
              },
              {
                label: "ABA Free Legal Answers",
                href: sourceLinks.abaFreeLegalAnswers,
                description:
                  "Civil legal Q&A program.",
              },
              {
                label: "Federal Defender Services",
                href: sourceLinks.federalDefenders,
                description:
                  "Federal defender and CJA-related resource hub.",
              },
              {
                label: "IRS — Section 501(r)(4) hospital financial-assistance policy",
                href: sourceLinks.irs501r,
                description:
                  "Tax-exempt hospital financial-assistance policy obligations.",
              },
              {
                label: "CMS — Medical bill rights",
                href: sourceLinks.cmsMedicalBillRights,
                description:
                  "Federal medical billing rights and protections.",
              },
              {
                label: "IRS — Payments",
                href: sourceLinks.irsPayments,
                description:
                  "IRS payment and payment-plan information.",
              },
              {
                label: "Taxpayer Advocate Service",
                href: sourceLinks.taxpayerAdvocate,
                description:
                  "Independent taxpayer assistance within the IRS.",
              },
              {
                label: "IRS — Low Income Taxpayer Clinics",
                href: sourceLinks.lowIncomeTaxpayerClinics,
                description:
                  "Clinic information and directory for eligible taxpayers.",
              },
              {
                label: "IRS — VITA/TCE free tax preparation",
                href: sourceLinks.vitaTce,
                description:
                  "Free tax return preparation information.",
              },
              {
                label: "AnnualCreditReport.com",
                href: sourceLinks.annualCreditReport,
                description:
                  "Official free credit-report site authorized by federal law.",
              },
              {
                label: "FTC — Credit freezes and fraud alerts",
                href: sourceLinks.ftcCreditFreeze,
                description:
                  "Consumer guidance on freezes and fraud alerts.",
              },
              {
                label: "IdentityTheft.gov",
                href: sourceLinks.identityTheft,
                description:
                  "FTC identity theft reporting and recovery-plan site.",
              },
              {
                label: "MyCreditUnion.gov — Payday Alternative Loans",
                href: sourceLinks.myCreditUnionPals,
                description:
                  "NCUA consumer guidance on payday loans and credit-union alternatives.",
              },
              {
                label: "Bank On",
                href: sourceLinks.bankOn,
                description:
                  "Safe and affordable bank-account access initiative.",
              },
              {
                label: "ACF — Child support income-change FAQ",
                href: sourceLinks.acfChildSupportOrder,
                description:
                  "Federal child-support FAQ on income changes and possible order review.",
              },
            ]}
          />

          <GuideCallout tone="success" icon="🌤️" title="The next safer decision matters">
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
          </GuideCallout>
        </GuideSectionCard>
      </main>
    </div>
  );
}