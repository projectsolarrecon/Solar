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
  RedFlagGreenFlag,
} from "../../components/solar";

const sourceLinks = {
  ssaCard: "https://www.ssa.gov/number-card",
  bankOnAccounts: "https://joinbankon.org/accounts/",
  annualCreditReport: "https://www.annualcreditreport.com/index.action",
  ftcCreditDisputes: "https://consumer.ftc.gov/articles/disputing-errors-your-credit-reports",
  ftcCreditRepairFaq: "https://consumer.ftc.gov/articles/fixing-your-credit-faqs",
  cfpbCreditRebuild:
    "https://www.consumerfinance.gov/ask-cfpb/what-are-some-ways-to-start-or-rebuild-a-good-credit-history-en-2155/",
  cfpbReentryGuide:
    "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/companion-guides/",
  cfpbMyMoneyPicture:
    "https://files.consumerfinance.gov/f/documents/cfpb_my-money-picture_tool_2021-08.pdf",
  studentAidIdr: "https://studentaid.gov/manage-loans/repayment/plans/income-driven",
  apprenticeship: "https://www.apprenticeship.gov/career-seekers",
  americanJobCenters:
    "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx",
  sbaReentry:
    "https://www.sba.gov/business-guide/grow-your-business/entrepreneurship-formerly-incarcerated-people",
  healthcareMedicaidChip: "https://www.healthcare.gov/medicaid-chip/",
  healthcareScreener: "https://www.healthcare.gov/screener/",
  benefits: "https://www.usa.gov/benefit-finder",
  twoOneOne: "https://www.211.org/",
  nfcc: "https://www.nfcc.org/",
  fdicMoneySmart: "https://www.fdic.gov/consumer-resource-center/money-smart",
  ftcPaydayLoans: "https://consumer.ftc.gov/node/77512",
};

export default function FinancialPlanningGuide(): JSX.Element {
  const handlePrint = () => window.print();

  const linkClass =
    "font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900 hover:decoration-blue-700";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Financial Planning After Conviction and Reentry | The SOLAR Project"
        description="A practical SOLAR guide to rebuilding financial credibility after conviction or reentry through small wins, documentation, safer banking, credit repair, income planning, and long-term strategy."
        keywords="reentry financial planning, rebuild credit after conviction, secured credit card reentry, financial stability after incarceration, Bank On account, credit report dispute, court debt reentry"
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
            Financial Planning After Conviction and Reentry
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Small money steps can become proof of reliability. This guide helps
            you stabilize cash flow, repair old damage, build credit carefully,
            and turn today’s quick wins into tomorrow’s stronger applications.
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
              href="#quick-wins"
              className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Start with Quick Wins
            </a>

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
            Reentry is more than walking out the door. It is rebuilding a life,
            piece by piece. Money can feel like the most overwhelming piece,
            especially if you are behind on bills, missing documents, dealing
            with court debt, or unsure what a landlord, bank, employer, or lender
            will see.
          </p>

          <p>
            The goal is not to look financially perfect. The goal is to build
            proof, month by month, that you can receive money safely, pay what
            you agree to pay, avoid preventable setbacks, and make your next
            “yes” easier to get.
          </p>
        </GuideIntro>

        <PullQuoteBlock>
          Every small step should do two jobs: help you right now and create
          evidence that you are becoming easier to trust with housing, work,
          credit, transportation, and long-term responsibility.
        </PullQuoteBlock>

        <QuickStartPanel
          title="The first 7–30 days"
          subtitle="Start with the steps that reduce chaos and create proof quickly."
          icon="⚡"
          urgentActions={[
            <span>
              Start or replace your key identity documents, including your{" "}
              <a href={sourceLinks.ssaCard} className={linkClass}>
                Social Security card through SSA
              </a>
              , birth certificate, and state ID.
            </span>,
            <span>
              Look for a low-fee, no-overdraft checking account using the{" "}
              <a href={sourceLinks.bankOnAccounts} className={linkClass}>
                Bank On certified account finder
              </a>
              .
            </span>,
            <span>
              Pull your free credit reports from{" "}
              <a href={sourceLinks.annualCreditReport} className={linkClass}>
                AnnualCreditReport.com
              </a>{" "}
              before a landlord, lender, employer, or insurer sees problems
              first.
            </span>,
          ]}
          nextActions={[
            <span>
              Write a bare-bones 30-day budget using a simple worksheet like the{" "}
              <a href={sourceLinks.cfpbMyMoneyPicture} className={linkClass}>
                CFPB My Money Picture tool
              </a>
              .
            </span>,
            <span>
              Check benefits and local help through{" "}
              <a href={sourceLinks.benefits} className={linkClass}>
                USA.gov’s benefit finder
              </a>{" "}
              and{" "}
              <a href={sourceLinks.twoOneOne} className={linkClass}>
                211 local resource referrals
              </a>
              .
            </span>,
            <span>
              Make a written list of court debt, restitution, supervision fees,
              child support, old collections, and any payment deadlines.
            </span>,
          ]}
          reminder={
            <span>
              You do not have to solve everything today. The first job is to stop
              avoidable damage and create a clean paper trail.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Phase 1",
              title: "Stabilize",
              icon: "🧱",
              tone: "reentry",
              description:
                "Get ID, open a safer account, find immediate help, and make a 30-day plan so one small problem does not become a crisis.",
            },
            {
              eyebrow: "Phase 2",
              title: "Repair",
              icon: "🛠️",
              tone: "warning",
              description:
                "Pull reports, dispute errors, organize old debts, and create written repayment records where possible.",
            },
            {
              eyebrow: "Phase 3",
              title: "Build",
              icon: "📈",
              tone: "success",
              description:
                "Use steady income, careful credit tools, savings, and documentation to show reliability over time.",
            },
          ]}
        />

<GuideSectionHeader
          id="financial-credibility"
          number="1"
          title="The Larger Strategy: Build Financial Credibility"
          subtitle="The small steps matter because they create proof that other people and systems can rely on."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Financial planning after conviction or incarceration is not just
              about saving money or improving a credit score. It is about
              rebuilding trust in practical ways. A bank may want to see account
              history. A landlord may care about payment patterns. A car lender
              may look for recent positive credit. A supervising officer may want
              proof that court debt is being handled. A family member may feel
              safer helping if there is a plan.
            </p>

            <p>
              Each step below follows the same pattern: what to do, why it
              matters, what proof it builds, and one quick action you can take.
              That keeps the guide from becoming a random checklist. The point is
              to connect today’s small win to tomorrow’s stronger application.
            </p>
          </GuideProse>

          <GuideCallout tone="legal" icon="⚖️" title="Verify before relying on financial advice">
            <p>
              This guide is educational, not personalized financial, legal, tax,
              or credit advice. Court debt, restitution, child support, benefits,
              supervision rules, banking access, and business licensing can vary
              by state, court order, agency, and individual situation.
            </p>
          </GuideCallout>

          <SoftDivider label="The proof ladder" />

          <div className="grid gap-4 md:grid-cols-2">
            <PathwayCard
              title="Immediate stability"
              subtitle="Reduce preventable emergencies."
              icon="🧯"
              whyItWorks="A safer account, current documents, and a basic budget make it easier to receive money, avoid missed notices, and keep small problems from becoming housing, work, or supervision problems."
              steps={[
                "Gather ID and release documents.",
                "Open a low-fee account if possible.",
                "List income, essentials, court debt, and deadlines.",
              ]}
              bestFit="The first days or weeks after release, job loss, housing disruption, or a financial shock."
            />

            <PathwayCard
              title="Documented reliability"
              subtitle="Create a record that other people can see."
              icon="🧾"
              whyItWorks="Written proof changes the conversation. Payment confirmations, account statements, dispute letters, and repayment plans can show effort and follow-through even before everything is fixed."
              steps={[
                "Save reports and letters.",
                "Get payment plans in writing.",
                "Keep receipts, confirmation numbers, and names of people you spoke with.",
              ]}
              bestFit="Anyone applying for housing, credit, transportation, benefits, employment, or relief from a court or agency."
            />
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="quick-wins"
          number="2"
          title="Quick Wins That Create Proof"
          subtitle="These are small actions, but each one supports a bigger long-term strategy."
        />

        <GuideSectionCard>
          <GuideChecklist
            id="financial-quick-wins"
            title="Start here: 10 quick wins"
            columns={1}
            items={[
              {
                id: "id-documents",
                label: (
                  <span>
                    Start or replace ID documents, including your{" "}
                    <a href={sourceLinks.ssaCard} className={linkClass}>
                      Social Security card
                    </a>
                    .
                  </span>
                ),
                helper:
                  "Why it matters: ID unlocks banking, employment forms, benefits, housing applications, medical care, and many training programs.",
              },
              {
                id: "safe-account",
                label: (
                  <span>
                    Search for a{" "}
                    <a href={sourceLinks.bankOnAccounts} className={linkClass}>
                      Bank On certified checking account
                    </a>{" "}
                    or ask a local credit union about second-chance banking.
                  </span>
                ),
                helper:
                  "Why it matters: a safer account can reduce check-cashing fees, support direct deposit, and begin a banking relationship.",
              },
              {
                id: "credit-reports",
                label: (
                  <span>
                    Pull your reports through{" "}
                    <a href={sourceLinks.annualCreditReport} className={linkClass}>
                      AnnualCreditReport.com
                    </a>
                    .
                  </span>
                ),
                helper:
                  "Why it matters: you want to find mistakes, fraud, collections, and old addresses before someone else uses them to decide about you.",
              },
              {
                id: "budget",
                label: (
                  <span>
                    Make a one-page money snapshot using the{" "}
                    <a href={sourceLinks.cfpbMyMoneyPicture} className={linkClass}>
                      CFPB My Money Picture tool
                    </a>
                    .
                  </span>
                ),
                helper:
                  "Why it matters: a simple budget shows what is realistic before you agree to rent, car payments, debt plans, or family repayment promises.",
              },
              {
                id: "benefits",
                label: (
                  <span>
                    Check benefits through{" "}
                    <a href={sourceLinks.benefits} className={linkClass}>
                      USA.gov’s benefit finder
                    </a>{" "}
                    and local help through{" "}
                    <a href={sourceLinks.twoOneOne} className={linkClass}>
                      211
                    </a>
                    .
                  </span>
                ),
                helper:
                  "Why it matters: food, health, utility, and housing support can protect your first paycheck from being swallowed by emergencies.",
              },
              {
                id: "court-debt",
                label:
                  "Create a written court-debt and restitution list with amounts, offices, deadlines, case numbers, and payment instructions.",
                helper:
                  "Why it matters: court-related debt may affect supervision, warrants, relief requests, or future planning. Guessing is risky.",
              },
              {
                id: "dispute-errors",
                label: (
                  <span>
                    Mark inaccurate credit-report items and use the{" "}
                    <a href={sourceLinks.ftcCreditDisputes} className={linkClass}>
                      FTC credit-report dispute guidance
                    </a>
                    .
                  </span>
                ),
                helper:
                  "Why it matters: removing inaccurate barriers is different from pretending real debt does not exist.",
              },
              {
                id: "starter-credit",
                label: (
                  <span>
                    Compare a secured card or credit-builder loan using{" "}
                    <a href={sourceLinks.cfpbCreditRebuild} className={linkClass}>
                      CFPB credit-building guidance
                    </a>
                    .
                  </span>
                ),
                helper:
                  "Why it matters: the goal is recent positive payment history, not more debt.",
              },
              {
                id: "training",
                label: (
                  <span>
                    Search paid training through{" "}
                    <a href={sourceLinks.apprenticeship} className={linkClass}>
                      Apprenticeship.gov
                    </a>{" "}
                    or a local American Job Center.
                  </span>
                ),
                helper:
                  "Why it matters: income stability is one of the strongest foundations for housing, transportation, savings, and credit repair.",
              },
              {
                id: "free-counseling",
                label: (
                  <span>
                    Schedule one nonprofit credit-counseling or financial-education
                    session through{" "}
                    <a href={sourceLinks.nfcc} className={linkClass}>
                      NFCC
                    </a>{" "}
                    or{" "}
                    <a href={sourceLinks.fdicMoneySmart} className={linkClass}>
                      FDIC Money Smart
                    </a>
                    .
                  </span>
                ),
                helper:
                  "Why it matters: you can get another set of eyes on the plan before signing up for high-fee products or unrealistic repayment terms.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="stabilize"
          number="3"
          title="Stabilize Cash Flow First"
          subtitle="Before credit repair or long-term planning, make money safer to receive, track, and protect."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Stabilizing money means building a basic system: identification,
              a safer place to receive money, a simple plan for the next 30 days,
              and a list of urgent obligations. This is not glamorous, but it is
              the foundation everything else sits on.
            </p>
          </GuideProse>

          <div className="grid gap-4 lg:grid-cols-3">
            <PathwayCard
              title="Get ID"
              subtitle="Proof of identity comes first."
              icon="🪪"
              whyItWorks={
                <span>
                  ID is often required for work, benefits, banking, housing,
                  health coverage, and training. Start with your{" "}
                  <a href={sourceLinks.ssaCard} className={linkClass}>
                    SSA number/card options
                  </a>{" "}
                  and your state ID or driver’s license office.
                </span>
              }
              steps={[
                "List missing documents.",
                "Ask whether release papers, prison ID, or court papers can help prove identity.",
                "Keep copies in a paper folder and a secure digital folder if safe.",
              ]}
              bestFit="Anyone who cannot open accounts, apply for work, or complete benefit forms because documents are missing."
            />

            <PathwayCard
              title="Open a safer account"
              subtitle="Reduce fees and create banking history."
              icon="🏦"
              whyItWorks={
                <span>
                  A bank or credit-union account can support direct deposit,
                  lower-cost bill payment, account statements, and a banking
                  relationship.{" "}
                  <a href={sourceLinks.bankOnAccounts} className={linkClass}>
                    Bank On certified accounts
                  </a>{" "}
                  are designed as low-cost, no-overdraft options.
                </span>
              }
              steps={[
                "Ask about no-overdraft checking.",
                "Ask about second-chance or fresh-start accounts if you were denied before.",
                "Avoid accounts that rely on overdraft fees to function.",
              ]}
              bestFit="Anyone using check cashing, prepaid cards with high fees, cash only, or another person’s account."
            />

            <PathwayCard
              title="Make a 30-day budget"
              subtitle="Know what is realistic before promising money."
              icon="📋"
              whyItWorks={
                <span>
                  A budget is not punishment. It shows what you can actually
                  handle before agreeing to rent, car payments, repayment plans,
                  or family promises. The{" "}
                  <a href={sourceLinks.cfpbMyMoneyPicture} className={linkClass}>
                    CFPB My Money Picture tool
                  </a>{" "}
                  can help you start without needing a spreadsheet.
                </span>
              }
              steps={[
                "Write expected income for the next 30 days.",
                "List essentials: housing, food, phone, transportation, supervision fees, court debt, medication, and utilities.",
                "Circle anything that could cause a crisis if missed.",
              ]}
              bestFit="Anyone whose income is irregular, new, cash-based, or dependent on family help."
            />
          </div>

          <SoftDivider />

          <DocumentPacket
            title="Build a financial proof folder"
            intro="Use one paper folder, envelope, binder, or secure digital folder. The goal is to make proof easy to find when someone asks."
            categories={[
              {
                title: "Identity and reentry documents",
                items: [
                  "State ID or driver’s license.",
                  "Social Security card or SSA replacement confirmation.",
                  "Birth certificate request, receipt, or copy.",
                  "Release papers, supervision paperwork, court orders, and case numbers.",
                ],
              },
              {
                title: "Money and account records",
                items: [
                  "Bank or credit-union account opening documents.",
                  "Direct deposit forms or pay stubs.",
                  "Benefit notices and health coverage letters.",
                  "Monthly budget, payment calendar, and emergency contacts.",
                ],
              },
              {
                title: "Debt and credit records",
                items: [
                  "Credit reports from all three bureaus.",
                  "Dispute letters and responses.",
                  "Court debt, restitution, fines, fees, child support, and payment-plan records.",
                  "Receipts, confirmation numbers, and names of people you spoke with.",
                ],
              },
            ]}
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="repair"
          number="4"
          title="Repair Old Damage Without Making New Damage"
          subtitle="Credit reports, old debt, court debt, and student loans need a plan — not panic."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Repair starts with knowing what is actually on paper. Credit
              reports can contain old addresses, accounts you forgot about,
              collections, identity errors, or information that does not belong
              to you. Pulling reports is not about shame. It is about seeing the
              same information a landlord, lender, insurer, or employer may see.
            </p>
          </GuideProse>

          <div className="grid gap-4 md:grid-cols-2">
            <PathwayCard
              title="Pull all three reports"
              subtitle="Find problems before decision-makers do."
              icon="🔎"
              whyItWorks={
                <span>
                  Use{" "}
                  <a href={sourceLinks.annualCreditReport} className={linkClass}>
                    AnnualCreditReport.com
                  </a>{" "}
                  to review reports from the three major credit bureaus. The goal
                  is to identify errors, fraud, collections, old accounts, and
                  address history before they affect housing, credit, insurance,
                  or employment.
                </span>
              }
              steps={[
                "Save or print each report.",
                "Highlight inaccurate names, addresses, accounts, balances, dates, and duplicate collections.",
                "Put each report in your financial proof folder.",
              ]}
              bestFit="Anyone preparing for housing, transportation financing, credit rebuilding, or debt cleanup."
            />

            <PathwayCard
              title="Dispute inaccurate information"
              subtitle="Do not pay to fix mistakes you can challenge."
              icon="✉️"
              whyItWorks={
                <span>
                  The{" "}
                  <a href={sourceLinks.ftcCreditDisputes} className={linkClass}>
                    FTC explains how to dispute credit-report errors
                  </a>{" "}
                  with the credit bureau and the company that supplied the
                  information. Inaccurate barriers should not quietly become part
                  of your reentry story.
                </span>
              }
              steps={[
                "Circle the exact item you believe is wrong.",
                "Gather proof: receipts, letters, court documents, identity-theft reports, or account statements.",
                "Send disputes in writing when possible and save every response.",
              ]}
              bestFit="Anyone who sees inaccurate, incomplete, duplicate, outdated, or unfamiliar credit-report information."
            />
          </div>

          <GuideCallout tone="warning" icon="⚠️" title="Be careful with credit-repair promises">
            <p>
              Paid credit-repair companies cannot legally remove accurate,
              current negative information just because it hurts your score. The{" "}
              <a href={sourceLinks.ftcCreditRepairFaq} className={linkClass}>
                FTC credit-repair guidance
              </a>{" "}
              warns readers to watch for scams, upfront fees, and advice to
              dispute accurate information or lie on applications.
            </p>
          </GuideCallout>

          <SoftDivider label="Debt strategy" />

          <GuideProse>
            <p>
              Valid debt still needs sorting. Some debt is urgent because it is
              tied to court, supervision, housing, utilities, child support, or
              transportation. Some debt may be old, negotiable, or lower priority.
              A clear list helps you decide what must be handled now and what can
              wait.
            </p>
          </GuideProse>

          <GuideChecklist
            id="debt-repair-checklist"
            title="Debt cleanup quick wins"
            columns={1}
            items={[
              {
                id: "sort-debts",
                label:
                  "Sort debts into court-related debt, housing/utility debt, transportation debt, student loans, medical debt, collections, and family debt.",
                helper:
                  "Why it matters: not all debt carries the same risk. Court debt, rent, utilities, and transportation may affect freedom, housing, or work more quickly than older consumer collections.",
              },
              {
                id: "student-loans",
                label: (
                  <span>
                    If you have federal student loans, check{" "}
                    <a href={sourceLinks.studentAidIdr} className={linkClass}>
                      income-driven repayment options on StudentAid.gov
                    </a>
                    .
                  </span>
                ),
                helper:
                  "Why it matters: a plan based on income may be safer than ignoring federal student-loan notices.",
              },
              {
                id: "call-creditor",
                label:
                  "For valid debts you cannot pay in full, call and ask whether a reduced payoff, hardship plan, or monthly payment plan is available.",
                helper:
                  "Why it matters: the point is to create a written agreement you can actually keep, not to promise money you do not have.",
              },
              {
                id: "confirm-in-writing",
                label:
                  "Before paying a collector, ask for the agreement in writing and save the letter, email, or account screenshot.",
                helper:
                  "Why it matters: documentation protects you if the account is resold, misapplied, or reported incorrectly later.",
              },
            ]}
          />

          <ScriptBox
            title="Script: asking for a realistic payment plan"
            tone="neutral"
            context="Use this when a debt is valid, but the full amount is not realistic right now."
            buttonLabel="Copy payment-plan script"
            script={`Hello, my name is [Name]. I am trying to resolve account or case number [number]. I want to pay what I can, but I cannot pay the full amount today.

Can you tell me whether there is a hardship plan, reduced settlement, or monthly payment option? Before I agree, I need the total amount, due dates, payment method, and any reporting or collection terms in writing.

I am taking notes. Could you please repeat your name, department, and the best callback number?`}
          />

          <VerifyBeforeActing
            title="Verify before paying, settling, or ignoring debt"
            whoToAsk={
              <span>
                Ask the court clerk, probation/parole officer, child-support
                office, creditor, collector, student-loan servicer, or nonprofit
                credit counselor who has authority over that specific debt.
              </span>
            }
            whatToAsk={
              <span>
                Ask: “Is this debt valid, who receives payment, what happens if I
                miss a payment, can I get a written plan, and will this affect my
                supervision, license, housing, benefits, or credit report?”
              </span>
            }
            whatToSave={
              <span>
                Save written agreements, receipts, confirmation numbers, names,
                dates, letters, emails, screenshots, and copies of mailed forms.
              </span>
            }
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="credit"
          number="5"
          title="Build Credit as Evidence, Not as Debt"
          subtitle="A secured card or credit-builder loan can help, but only if it creates clean payment history."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Rebuilding credit is not about getting access to debt for its own
              sake. The strategy is to create recent proof that you can borrow a
              small amount, keep balances low, and pay on time. That proof can
              matter later for housing, transportation, insurance pricing,
              business banking, or emergency borrowing.
            </p>

            <p>
              The{" "}
              <a href={sourceLinks.cfpbCreditRebuild} className={linkClass}>
                CFPB identifies secured cards and credit-builder loans
              </a>{" "}
              as common ways to start or rebuild credit history. The safer goal
              is boring: one small recurring charge, automatic payments if
              possible, low balance, and no missed due dates.
            </p>
          </GuideProse>

          <div className="grid gap-4 md:grid-cols-2">
            <PathwayCard
              title="Secured credit card"
              subtitle="Use a deposit to build payment history."
              icon="💳"
              whyItWorks="A secured card can report on-time payments to credit bureaus. Over time, that can show capacity and intent to pay, support credit-line increases, and strengthen a banking relationship."
              steps={[
                "Compare fees, deposit amount, reporting to all three credit bureaus, and upgrade options.",
                "Put one small recurring bill or planned purchase on the card.",
                "Pay in full on time and keep utilization low.",
              ]}
              details={[
                {
                  label: "Quick win",
                  value:
                    "Choose one small purchase you already planned to make; do not use the card for emergencies or impulse spending.",
                },
                {
                  label: "Proof built",
                  value:
                    "Recent on-time payment history, low utilization, and responsible account management.",
                },
              ]}
              bestFit="Someone with enough cash for a deposit and enough income stability to avoid missed payments."
            />

            <PathwayCard
              title="Credit-builder loan"
              subtitle="Build history while saving."
              icon="🔐"
              whyItWorks="Some credit unions and community lenders offer loans where the borrowed money is held while you make payments. If reported to credit bureaus, payments may help build history."
              steps={[
                "Ask a credit union whether the loan reports to credit bureaus.",
                "Confirm total cost, monthly payment, late fees, and when funds are released.",
                "Only agree if the payment fits your 30-day budget.",
              ]}
              details={[
                {
                  label: "Quick win",
                  value:
                    "Call one local credit union and ask whether they offer a credit-builder loan or second-chance banking program.",
                },
                {
                  label: "Proof built",
                  value:
                    "Installment payment history and a relationship with a financial institution.",
                },
              ]}
              bestFit="Someone who wants structure, can handle a fixed monthly payment, and does not need a credit card right now."
            />
          </div>

          <RedFlagGreenFlag
            red={
              <p>
                A card with high monthly fees, unclear reporting, pressure to
                carry a balance, or promises of “guaranteed” credit repair.
              </p>
            }
            green={
              <p>
                A low-fee product that reports payments, explains all costs, lets
                you pay in full, and fits inside the budget you already wrote.
              </p>
            }
          />

          <GuideChecklist
            id="credit-builder-checklist"
            title="Credit-building quick wins"
            columns={1}
            items={[
              {
                id: "compare-costs",
                label:
                  "Compare the deposit, annual fee, monthly fee, interest rate, late fee, and whether the account reports to credit bureaus.",
                helper:
                  "Why it matters: a credit tool that eats your money or does not report payment history may not build the proof you need.",
              },
              {
                id: "one-small-charge",
                label:
                  "Use one small recurring charge or planned purchase, then pay it in full by the due date.",
                helper:
                  "Why it matters: the point is payment history, not carrying debt.",
              },
              {
                id: "autopay-calendar",
                label:
                  "Set autopay if safe, and put the due date on a paper or phone calendar.",
                helper:
                  "Why it matters: one missed payment can damage the same record you are trying to build.",
              },
              {
                id: "six-month-review",
                label:
                  "After six months of on-time payments, ask whether the issuer reviews accounts for credit-line increases or graduation to an unsecured card.",
                helper:
                  "Why it matters: a stronger account history can become a stepping stone to better terms later.",
              },
            ]}
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="income"
          number="6"
          title="Build Income and Reduce Fragile Gaps"
          subtitle="Stable income makes every other financial step more realistic."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Income stability is not only about the amount of money coming in.
              It is also about predictability, documentation, and whether the
              work fits your supervision rules, transportation, health, family
              needs, and background-check realities.
            </p>
          </GuideProse>

          <div className="grid gap-4 md:grid-cols-2">
            <PathwayCard
              title="Paid training and apprenticeships"
              subtitle="Earn while building a portable credential."
              icon="🧰"
              whyItWorks={
                <span>
                  <a href={sourceLinks.apprenticeship} className={linkClass}>
                    Apprenticeship.gov
                  </a>{" "}
                  describes registered apprenticeship as paid work with
                  on-the-job learning, classroom instruction, progressive wage
                  increases, and an industry-recognized credential.
                </span>
              }
              steps={[
                "Search by occupation and location.",
                "Ask whether the program has background-check requirements.",
                "Save applications, contacts, interviews, and rejection or acceptance notices.",
              ]}
              bestFit="Someone who wants a wage path, a credential, and proof of work development over time."
              offlineAlternatives={[
                "Call a local American Job Center.",
                "Ask a reentry program or supervising officer for apprenticeship or union pre-apprenticeship contacts.",
                "Visit a public library and print application instructions.",
              ]}
            />

            <PathwayCard
              title="Small business or self-employment"
              subtitle="Plan before spending money."
              icon="🧑‍🔧"
              whyItWorks={
                <span>
                  Self-employment can help some people work around hiring
                  barriers, but it may create tax, licensing, registration,
                  insurance, supervision, and cash-flow issues. Use the{" "}
                  <a href={sourceLinks.sbaReentry} className={linkClass}>
                    SBA entrepreneurship guidance for formerly incarcerated people
                  </a>{" "}
                  as a starting point before paying for tools, ads, websites, or
                  inventory.
                </span>
              }
              steps={[
                "Verify supervision, licensing, and local business rules first.",
                "Start with a low-cost service or skill you can document.",
                "Track income and expenses from day one.",
              ]}
              bestFit="Someone with a realistic skill, low startup costs, and a plan to handle taxes and recordkeeping."
            />
          </div>

          <GuideCallout tone="warning" icon="🚧" title="Gig work needs verification">
            <p>
              Delivery, rideshare, app-based tasks, day labor, or independent
              contracting may help with cash flow, but do not assume they are
              allowed. Some jobs involve driving, entering restricted places,
              interacting with minors, using the internet, handling customer
              data, or crossing county/state lines. Verify supervision conditions
              and platform rules before signing up.
            </p>
          </GuideCallout>

          <ScriptBox
            title="Script: asking about a job, training, or gig-work restriction"
            tone="legal"
            context="Use this with a supervising officer, case manager, attorney, or program contact when work rules could affect compliance."
            buttonLabel="Copy verification script"
            script={`Hello, I am considering [job/training/gig platform/business idea]. Before I apply or start, I want to verify whether it conflicts with any supervision condition, court order, registry rule, travel restriction, internet restriction, workplace restriction, or contact restriction.

Can you tell me what I need to check, who has authority to approve it, and whether I can get the answer in writing?`}
          />

          <VerifyBeforeActing
            title="Verify before accepting work or starting a business"
            whoToAsk="Your supervising officer, attorney, licensing board, employer/program sponsor, state registration agency if relevant, tax professional, or local small-business office."
            whatToAsk="Ask whether the work conflicts with supervision, registration, travel, internet, licensing, workplace, tax, insurance, or reporting rules."
            whatToSave="Save written approval, emails, job descriptions, program requirements, license guidance, business filings, mileage logs, income records, and tax documents."
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="stability"
          number="7"
          title="Turn Stability Into Long-Term Options"
          subtitle="The long-term goal is more choice: safer housing, better work, transportation, credit access, and family stability."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Once the basics are in place, the strategy shifts from emergency
              survival to durable stability. That does not mean everything is
              fixed. It means you are creating enough margin that one bad week
              does not erase months of work.
            </p>
          </GuideProse>

          <GuideChecklist
            id="long-term-stability"
            title="Long-term strategy quick wins"
            columns={1}
            items={[
              {
                id: "emergency-buffer",
                label:
                  "Start a small emergency buffer, even $10–$25 at a time, in a separate account or envelope.",
                helper:
                  "Why it matters: a small buffer can prevent a flat tire, phone shutoff, medication gap, or missed bus pass from becoming a job, housing, or supervision crisis.",
              },
              {
                id: "health-coverage",
                label: (
                  <span>
                    Check Medicaid and CHIP coverage through{" "}
                    <a href={sourceLinks.healthcareMedicaidChip} className={linkClass}>
                      HealthCare.gov’s Medicaid and CHIP page
                    </a>
                    , or use the{" "}
                    <a href={sourceLinks.healthcareScreener} className={linkClass}>
                      HealthCare.gov coverage screener
                    </a>{" "}
                    to see whether you may be able to get or change coverage now.
                  </span>
                ),
                helper:
                  "Why it matters: untreated health costs can quickly become debt, missed work, and instability.",
              },
              {
                id: "benefit-review",
                label: (
                  <span>
                    Use{" "}
                    <a href={sourceLinks.benefits} className={linkClass}>
                      USA.gov’s benefit finder
                    </a>{" "}
                    and{" "}
                    <a href={sourceLinks.twoOneOne} className={linkClass}>
                      211
                    </a>{" "}
                    to check food, housing, utility, health, transportation, and local emergency help.
                  </span>
                ),
                helper:
                  "Why it matters: temporary support can protect your first paychecks while you rebuild.",
              },
              {
                id: "free-education",
                label: (
                  <span>
                    Complete one free lesson through{" "}
                    <a href={sourceLinks.fdicMoneySmart} className={linkClass}>
                      FDIC Money Smart
                    </a>{" "}
                    or speak with a nonprofit counselor through{" "}
                    <a href={sourceLinks.nfcc} className={linkClass}>
                      NFCC
                    </a>
                    .
                  </span>
                ),
                helper:
                  "Why it matters: coaching can help you avoid expensive mistakes before you sign anything.",
              },
              {
                id: "quarterly-review",
                label:
                  "Every three months, review your budget, credit reports, debts, savings, income, and next application goal.",
                helper:
                  "Why it matters: financial credibility grows when your records show steady follow-through over time.",
              },
            ]}
          />

          <CommonMistakes
            title="Common mistakes that can undo progress"
            mistakes={[
              {
                mistake:
                  "Using payday loans, title loans, or high-cost cash advances as a routine budget tool.",
                whyItMatters: (
                  <span>
                    The{" "}
                    <a href={sourceLinks.ftcPaydayLoans} className={linkClass}>
                      FTC warns about payday and car-title loan risks
                    </a>
                    , including fees and repayment pressure that can trap people
                    in repeated borrowing.
                  </span>
                ),
                betterMove:
                  "Call 211, ask creditors for hardship options, speak with a nonprofit counselor, or delay a non-essential expense before taking high-cost debt.",
              },
              {
                mistake:
                  "Agreeing to a payment plan that only works on a perfect month.",
                whyItMatters:
                  "Reentry months are rarely perfect. Transportation, phone, housing, health, supervision, and job schedules can shift quickly.",
                betterMove:
                  "Use your 30-day budget first, then offer a payment you can keep even in a hard month.",
              },
              {
                mistake:
                  "Using someone else’s bank account, card, or app login to receive money.",
                whyItMatters:
                  "It can create tax confusion, control problems, benefit issues, family conflict, and unclear proof of income.",
                betterMove:
                  "Open your own safer account if possible, or ask a nonprofit, credit union, or reentry program about alternatives.",
              },
              {
                mistake:
                  "Carrying a balance on a secured card to “build credit faster.”",
                whyItMatters:
                  "Carrying debt can create interest, stress, and missed-payment risk. On-time payment history and low balances matter more than carrying a balance.",
                betterMove:
                  "Use one small planned charge and pay it in full on time whenever possible.",
              },
              {
                mistake:
                  "Ignoring court debt, restitution, child support, or supervision fees because the amount feels impossible.",
                whyItMatters:
                  "Silence can make the record look worse than good-faith effort. In some places, missed payments may create legal or supervision consequences.",
                betterMove:
                  "Ask who handles the debt, whether a payment plan exists, what proof is needed, and how to document hardship.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="offline"
          number="8"
          title="If Internet, Phone, or Privacy Access Is Limited"
          subtitle="A financial plan should still work for people who are phone-only, supervised, newly released, or relying on paper."
        />

        <GuideSectionCard>
          <OfflineOptions
            title="Offline and low-access options"
            icon="📞"
            note="Use these when online forms, printers, private internet, transportation, or unrestricted phone access are not realistic."
            items={[
              "Call 211 and ask for local help with food, rent, utilities, health care, transportation, and financial counseling.",
              "Ask the library, clerk’s office, reentry program, probation/parole office, or community center where forms can be printed.",
              "Ask banks or credit unions whether they can mail account information or accept in-person applications.",
              "Keep a paper folder with names, dates, phone numbers, confirmation numbers, receipts, and copies of mailed documents.",
              "If someone helps you online, ask them to print or send you copies of every confirmation page and email.",
              "Avoid entering sensitive information on public computers unless you know how to log out fully and avoid saving passwords.",
            ]}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Privacy reminder">
            <p>
              Financial documents can include Social Security numbers, birth
              dates, addresses, account numbers, court information, and medical
              or benefit details. Share only what is needed, use official
              websites when possible, and avoid saving passwords on shared
              devices.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="9"
          title="Resources and Next Steps"
          subtitle="Use these links to act, verify, document, and keep learning."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Proof and practice links"
            description="These are the links used throughout the guide. They are included here again so readers can take action without hunting through the page."
            resources={[
              {
                label: "SSA Social Security number and card",
                href: sourceLinks.ssaCard,
                badge: "Official",
                description:
                  "Replace or manage a Social Security card, which may be needed for work, benefits, banking, and housing.",
              },
              {
                label: "Bank On certified accounts",
                href: sourceLinks.bankOnAccounts,
                badge: "Practice",
                description:
                  "Find low-cost accounts designed around safer banking access and no overdraft features.",
              },
              {
                label: "AnnualCreditReport.com",
                href: sourceLinks.annualCreditReport,
                badge: "Official",
                description:
                  "Request free credit reports from the three major credit bureaus.",
              },
              {
                label: "FTC credit-report dispute guidance",
                href: sourceLinks.ftcCreditDisputes,
                badge: "Official",
                description:
                  "Learn how to dispute inaccurate credit-report information.",
              },
              {
                label: "CFPB credit rebuilding guidance",
                href: sourceLinks.cfpbCreditRebuild,
                badge: "Official",
                description:
                  "Learn about secured cards, credit-builder loans, and other ways to start or rebuild credit.",
              },
              {
                label: "StudentAid.gov income-driven repayment",
                href: sourceLinks.studentAidIdr,
                badge: "Official",
                description:
                  "Review federal student-loan repayment options tied to income.",
              },
              {
                label: "Apprenticeship.gov career seekers",
                href: sourceLinks.apprenticeship,
                badge: "Official",
                description:
                  "Search paid training and apprenticeship opportunities.",
              },
              {
                label: "HealthCare.gov Medicaid & CHIP coverage",
                href: sourceLinks.healthcareMedicaidChip,
                badge: "Official",
                description:
                  "Check Medicaid and CHIP coverage options and state-specific next steps.",
              },
              {
                label: "HealthCare.gov coverage screener",
                href: sourceLinks.healthcareScreener,
                badge: "Official",
                description:
                  "See whether you may be able to get or change health coverage now.",
              },
              {
                label: "USA.gov benefit finder",
                href: sourceLinks.benefits,
                badge: "Official",
                description:
                  "Check possible government benefits and financial help.",
              },
              {
                label: "211 local help",
                href: sourceLinks.twoOneOne,
                badge: "Help",
                description:
                  "Find local help with housing, food, utilities, health care, and other needs.",
              },
              {
                label: "FDIC Money Smart",
                href: sourceLinks.fdicMoneySmart,
                badge: "Education",
                description:
                  "Use free financial education materials from the FDIC.",
              },
              {
                label: "NFCC nonprofit credit counseling",
                href: sourceLinks.nfcc,
                badge: "Nonprofit",
                description:
                  "Find nonprofit credit counseling and debt-management support.",
              },
              {
                label: "FTC payday and car-title loan guidance",
                href: sourceLinks.ftcPaydayLoans,
                badge: "Warning",
                description:
                  "Understand risks before using high-cost short-term loans.",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Employment Guide",
                description:
                  "Use with this guide when income, disclosure, applications, interviews, or background checks are the next barrier.",
                to: "/resources/employment-guide",
              },
              {
                title: "Housing Guide",
                description:
                  "Use when financial credibility, documentation, deposits, rental applications, or housing restrictions are part of the plan.",
                to: "/resources/housing-guide",
              },
              {
                title: "Reentry Guide",
                description:
                  "Use for the broader release, supervision, documentation, housing, work, and support roadmap.",
                to: "/resources/reentry-guide",
              },
              {
                title: "Small Business Guide",
                description:
                  "Use when self-employment or contract work may be part of a realistic income strategy.",
                to: "/resources/small-business-guide",
              },
            ]}
          />

          <SourceList
            title="Sources and verification"
            note="Links should be rechecked before production publication. Product-specific credit-card links are intentionally avoided here because fees, eligibility, underwriting, and terms change frequently."
            sources={[
              {
                label: "Social Security Administration — Social Security number and card",
                href: sourceLinks.ssaCard,
                description:
                  "Supports identity-document planning and Social Security card replacement.",
              },
              {
                label: "Bank On — certified accounts",
                href: sourceLinks.bankOnAccounts,
                description:
                  "Supports low-cost, safer checking-account guidance and no-overdraft account search.",
              },
              {
                label: "AnnualCreditReport.com",
                href: sourceLinks.annualCreditReport,
                description:
                  "Supports free credit-report access and credit-report review steps.",
              },
              {
                label: "FTC — Disputing Errors on Your Credit Reports",
                href: sourceLinks.ftcCreditDisputes,
                description:
                  "Supports credit-report error dispute guidance.",
              },
              {
                label: "FTC — Fixing Your Credit FAQs",
                href: sourceLinks.ftcCreditRepairFaq,
                description:
                  "Supports caution about credit-repair scams and limits of paid credit repair.",
              },
              {
                label: "CFPB — Ways to start or rebuild credit history",
                href: sourceLinks.cfpbCreditRebuild,
                description:
                  "Supports secured-card and credit-builder-loan guidance.",
              },
              {
                label: "CFPB — Your Money, Your Goals companion guides",
                href: sourceLinks.cfpbReentryGuide,
                description:
                  "Supports reentry-specific financial coaching and planning resources.",
              },
              {
                label: "CFPB — My Money Picture tool",
                href: sourceLinks.cfpbMyMoneyPicture,
                description:
                  "Supports one-page budgeting and values-based money planning.",
              },
              {
                label: "Federal Student Aid — Income-driven repayment plans",
                href: sourceLinks.studentAidIdr,
                description:
                  "Supports student-loan repayment planning tied to income.",
              },
              {
                label: "Apprenticeship.gov — Career Seekers",
                href: sourceLinks.apprenticeship,
                description:
                  "Supports paid training, wage progression, and credential pathway guidance.",
              },
              {
                label: "CareerOneStop — American Job Centers",
                href: sourceLinks.americanJobCenters,
                description:
                  "Supports local employment and training help.",
              },
              {
                label: "SBA — Entrepreneurship for formerly incarcerated people",
                href: sourceLinks.sbaReentry,
                description:
                  "Supports self-employment and small-business planning guidance.",
              },
              {
                label: "HealthCare.gov — Medicaid & CHIP coverage",
                href: sourceLinks.healthcareMedicaidChip,
                description:
                  "Supports health coverage guidance for Medicaid, CHIP, and state-specific coverage options.",
              },
              {
                label: "HealthCare.gov — Coverage screener",
                href: sourceLinks.healthcareScreener,
                description:
                  "Supports action-oriented health coverage screening.",
              },
              {
                label: "USA.gov — Benefit finder",
                href: sourceLinks.benefits,
                description:
                  "Supports government benefits and financial-help lookup.",
              },
              {
                label: "211 — Local help",
                href: sourceLinks.twoOneOne,
                description:
                  "Supports local referrals for food, housing, utility, health, and emergency help.",
              },
              {
                label: "NFCC — Nonprofit credit counseling",
                href: sourceLinks.nfcc,
                description:
                  "Supports nonprofit credit-counseling referrals.",
              },
              {
                label: "FDIC — Money Smart",
                href: sourceLinks.fdicMoneySmart,
                description:
                  "Supports free financial education.",
              },
              {
                label: "FTC — Payday and car-title loan guidance",
                href: sourceLinks.ftcPaydayLoans,
                description:
                  "Supports warning against high-cost short-term debt traps.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}