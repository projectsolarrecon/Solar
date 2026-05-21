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
  TimelineGuidanceGrid,
} from "../../components/solar";

const sourceLinks = {
  stateDeptIML:
    "https://travel.state.gov/content/travel/en/passports/legal-matters/passports-and-international-megans-law.html",
  smartTravelNotice:
    "https://smart.ojp.gov/sorna/current-law/implementation-documents/information-required-notice-international-travel",
  angelWatch: "https://www.ice.gov/hsi/centers-labs/angel-watch",
  stateDeptCountryInfo: "https://travel.state.gov/content/travel/en/international-travel.html",
  step: "https://mytravel.state.gov/s/step",
  stateDeptEurope:
    "https://travel.state.gov/en/international-travel/planning/guidance/europe.html",
  euEes:
    "https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en",
  euEtias:
    "https://travel-europe.europa.eu/en/etias",
  rtagMatrix: "https://registranttag.org/resources/travel-matrix/",
  justFactsMatrix:
    "https://justfactsnotfear.com/international-travel-for-registrants/international-travel-matrix-for-sex-offenders/",
  pfrCountryReports: "https://pfr.guide/countryreports/",
  pfrCruiseReports: "https://pfr.guide/cruisereports/",
  acsol2026: "https://all4consolaws.org/2026/01/international-travel-2026/",
  acsolTravelAfterIML: "https://all4consolaws.org/travel-after-iml/",
  canadaInadmissibility:
    "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/inadmissibility.html",
  canadaRemedies:
    "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/inadmissibility/overcome-criminal-convictions.html",
  ukStandardVisitor: "https://www.gov.uk/standard-visitor",
  ukEtaRules:
    "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-electronic-travel-authorisation",
  ukEtaOverview: "https://www.gov.uk/eta/what-you-can-cannot-do",
  australiaCharacter:
    "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/character",
  australiaEntryCharacter:
    "https://immi.homeaffairs.gov.au/entering-and-leaving-australia/entering-australia/can-i-go-to-australia",
  nzCharacter:
    "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/good-character-requirements-and-police-certificates/character-requirements-for-new-zealand-visas/",
  nzeta:
    "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
  japanConsular:
    "https://www.seattle.us.emb-japan.go.jp/itpr_en/TravelingJapanQuickFacts.html",
  japanArticle5:
    "https://www.la.us.emb-japan.go.jp/pdf/ImmigrationControl_and_RefugeeRecognitionAct_Article%205.pdf",
  philippinesAnnual:
    "https://immigration.gov.ph/bi-bars-137-foreign-sex-offenders-from-entering-ph-in-2024/",
  philippinesMoralTurpitude:
    "https://immigration.gov.ph/bi-says-two-convicted-alien-sex-offenders-barred-from-entering-ph/",
  philippinesTurnBacks:
    "https://immigration.gov.ph/bi-turns-back-3-alien-sex-offenders-at-naia/",
  singaporeNoBoarding:
    "https://www.ica.gov.sg/news-and-publications/newsroom/media-release/ica-to-issue-no-boarding-directives-from-30-january-2026",
  malaysiaProhibited:
    "https://www.imi.gov.my/index.php/en/enforcement/prohibited-immigrant/",
  southKoreaKeta: "https://www.k-eta.go.kr/portal/guide/viewetaapplication.do?locale=EN",
  mexicoLey: "https://www.inm.gob.mx/micrositio/1/docs/mj/LMig.pdf",
  mexicoConsular:
    "https://consulmex.sre.gob.mx/montreal/index.php/en/foreigners/visa/363-i-want-to-visit-mexico-for-a-short-period-less-than-6-months-as-a-tourist-for-business-for-technical-assistance-as-a-journalist-in-transit-or-for-short-studies-do-i-need-a-visa",
};

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="International Travel for U.S.-Based People on the Registry | The SOLAR Project"
        description="A practical international travel planning guide for U.S.-based people on sex offense registries and their families."
        keywords="international travel, sex offense registry, International Megan's Law, registrants, travel notice, passport identifier"
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
            International Travel for U.S.-Based People on the Registry
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical planning guide for checking U.S. obligations, reading country-pattern signals, preparing documents, and reducing avoidable travel risk before you book.
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
              href="#country-patterns"
              className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Jump to Country Patterns
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
            International travel may still be possible for some people on registries, but it is not something to treat casually or book at the last minute.
          </p>
          <p>
            The safer approach is to verify your U.S. obligations, research the destination from more than one source, keep records of what you were told, and avoid nonrefundable plans until you understand the practical risk.
          </p>
          <p>
            This guide is not legal advice. It is a planning tool for people who need a clear sequence: what to check first, what to save, what country patterns mean, and how to avoid common travel mistakes.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="Before you book anything"
          subtitle="Use this first if you are thinking about international travel."
          icon="✈️"
          urgentActions={[
            <span>
              Check whether you are covered by{" "}
              <a
                href={sourceLinks.stateDeptIML}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                International Megan’s Law passport rules
              </a>{" "}
              and whether your current passport has the required identifier.
            </span>,
            <span>
              Confirm the{" "}
              <a
                href={sourceLinks.smartTravelNotice}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                international travel notice requirements
              </a>{" "}
              with your registering agency before relying on any itinerary.
            </span>,
            <span>
              Review the destination through official sources and community-reported matrices before spending money.
            </span>,
          ]}
          nextActions={[
            <span>Use refundable airfare, lodging, tours, and insurance whenever the destination is uncertain.</span>,
            <span>Save emails, screenshots, confirmation numbers, forms, and names of people you spoke with.</span>,
            <span>Make a backup plan for travel companions in case you are delayed, questioned, denied boarding, or refused entry.</span>,
          ]}
          reminder={
            <span>
              A U.S. passport lets you ask to enter another country. It does not guarantee admission.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Decision point 1",
              title: "Your U.S. obligations",
              icon: "🇺🇸",
              tone: "legal",
              description:
                "Passport identifier rules, 21-day notice, state registration rules, supervision conditions, and court orders may all matter before you leave.",
            },
            {
              eyebrow: "Decision point 2",
              title: "The destination’s rules",
              icon: "🛂",
              tone: "warning",
              description:
                "Some countries have criminal inadmissibility, character, visa, ETA, no-boarding, or public-safety rules that may affect entry.",
            },
            {
              eyebrow: "Decision point 3",
              title: "Real-world practice",
              icon: "🧾",
              tone: "research",
              description:
                "Community reports can reveal patterns official tourist pages do not explain, but they are planning signals rather than guarantees.",
            },
          ]}
        />

        <GuideSectionHeader
          id="first"
          number="1"
          title="The first rule: verify before you spend"
          subtitle="The biggest preventable mistake is treating international travel like ordinary vacation planning."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              International travel sits at the intersection of several systems: your registering agency, any supervision or court conditions, U.S. passport rules, international notice transmission, airline policies, cruise policies, transit-country rules, and the destination country’s border discretion.
            </p>

            <p>
              That does not mean every trip will fail. It means the planning has to be more careful. The practical question is not, “Can people on the registry ever travel internationally?” The better question is, “What do I need to verify, document, and protect before I rely on this plan?”
            </p>
          </GuideProse>

          <GuideCallout tone="warning" icon="⚠️" title="Do not book nonrefundable travel too early">
            <p>
              If you cannot afford to lose the ticket, do not buy it until you have checked the U.S. notice process, your passport status, any supervision limits, destination entry rules, and recent traveler reports. Even then, refundable travel is often the safer choice.
            </p>
          </GuideCallout>

          <VerifyBeforeActing
            title="Verify before acting"
            whoToAsk={
              <span>
                Your registering agency, your supervising officer or attorney if you are under supervision or court order, the destination’s embassy or consulate, and official travel resources such as the{" "}
                <a
                  href={sourceLinks.stateDeptCountryInfo}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  U.S. Department of State country pages
                </a>.
              </span>
            }
            whatToAsk={
              <span>
                Ask narrow questions: whether your itinerary satisfies notice rules, whether you need a visa or travel authorization, whether a criminal record can affect tourist entry, whether transit countries create separate risk, and whether itinerary changes must be reported.
              </span>
            }
            whatToSave={
              <span>
                Save emails, forms, screenshots, names, dates, departments, confirmation numbers, and copies of any official answer. If someone gives you a verbal answer, write it down immediately.
              </span>
            }
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="us-obligations"
          number="2"
          title="U.S. obligations before leaving"
          subtitle="Before you research the destination, make sure the U.S. side of the trip is understood."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some people with sex-offense convictions are covered by International Megan’s Law. The{" "}
              <a
                href={sourceLinks.stateDeptIML}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                State Department’s IML passport page
              </a>{" "}
              explains the passport identifier process for covered travelers, including limits on passport cards and possible revocation of unmarked passports.
            </p>

            <p>
              Separately, federal SORNA implementation materials describe the information required for{" "}
              <a
                href={sourceLinks.smartTravelNotice}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                notice of intended international travel
              </a>. Many people know this as the “21-day notice,” but the details still need to be checked with the registering agency that actually handles your notice.
            </p>

            <p>
              U.S. authorities may transmit travel information to foreign partners through systems connected to the{" "}
              <a
                href={sourceLinks.angelWatch}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Angel Watch Center
              </a>. That does not automatically mean a destination will deny entry, but it can affect what happens at boarding, arrival, or secondary inspection.
            </p>
          </GuideProse>

          <GuideChecklist
            id="us-obligations-checklist"
            title="U.S.-side checklist"
            columns={1}
            items={[
              {
                id: "passport",
                label: "Check whether your passport has the required IML identifier if you are a covered traveler.",
              },
              {
                id: "notice",
                label: "Ask your registering agency exactly when, how, and where to file international travel notice.",
              },
              {
                id: "state-rules",
                label: "Check state registration rules for temporary travel, address changes, itinerary changes, and return reporting.",
              },
              {
                id: "supervision",
                label: "If you are on supervision, confirm travel permission in writing before booking.",
              },
              {
                id: "court-order",
                label: "Review court orders, probation/parole conditions, treatment rules, and no-contact restrictions.",
              },
              {
                id: "changes",
                label: "Ask what to do if flights, hotels, dates, cruise ports, or transit countries change.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⚖️" title="Supervision can change the answer">
            <p>
              A country may be relatively workable for some travelers but still unavailable to someone under probation, parole, supervised release, treatment restrictions, or a court order. Do not rely on another person’s travel report if your supervision status is different.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="community-reports"
          number="3"
          title="How to use community travel reports"
          subtitle="Community matrices are valuable here, but they need to be read carefully."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              On this topic, official tourist pages often do not explain how registry-related travel notices are handled in real life. That is why community-reported resources matter. The{" "}
              <a
                href={sourceLinks.rtagMatrix}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                RTAG Travel Matrix
              </a>, the{" "}
              <a
                href={sourceLinks.justFactsMatrix}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Just Facts Not Fear international travel matrix
              </a>,{" "}
              <a
                href={sourceLinks.pfrCountryReports}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                PFR Guide country trip reports
              </a>,{" "}
              <a
                href={sourceLinks.pfrCruiseReports}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                PFR Guide cruise reports
              </a>, and{" "}
              <a
                href={sourceLinks.acsol2026}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                ACSOL international travel discussion pages
              </a>{" "}
              can help identify patterns that official pages may not publish.
            </p>

            <p>
              Use those sources as planning signals, not legal authority. A report is stronger when it is recent, first-hand, specific about the country, clear about air versus cruise versus transit, and consistent with other reports. A report is weaker when it is old, second-hand, missing key facts, cruise-only, or based on someone who was no longer required to register.
            </p>
          </GuideProse>

          <GuideCallout tone="research" icon="🔎" title="A useful matrix is still not a guarantee">
            <p>
              A country pattern becomes more useful when several sources point in the same direction. It still does not prove what will happen to you. Your sentence history, registration status, passport identifier, travel notice, visa type, route, travel mode, and border officer can all change the result.
            </p>
          </GuideCallout>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Stronger signal",
                title: "Recent and specific",
                icon: "✅",
                tone: "success",
                description:
                  "The report names the country, year, travel mode, outcome, and what happened at inspection.",
              },
              {
                eyebrow: "Weaker signal",
                title: "Old or unclear",
                icon: "🟡",
                tone: "warning",
                description:
                  "The report is undated, vague, second-hand, or does not say whether the person was currently required to register.",
              },
              {
                eyebrow: "Do not overread",
                title: "One trip is not a rule",
                icon: "🧭",
                tone: "neutral",
                description:
                  "One successful entry does not prove everyone will be admitted. One denial does not always prove a blanket bar.",
              },
            ]}
          />

          <ScriptBox
            title="Script: asking a consulate a narrow travel question"
            tone="neutral"
            context="Use this by email when you need a written answer. Do not overshare details that were not asked for."
            script={`Hello, my name is [Name]. I am a U.S. citizen planning short-term tourist travel to [country] from [dates]. Before I book, I am trying to understand entry requirements for travelers with a past criminal conviction.

Can you tell me whether tourist entry requires any advance visa, police certificate, waiver, or other documentation because of that record?

If another office handles this question, could you please tell me the correct office or website? I would appreciate any written guidance you can provide.

Thank you,
[Name]`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="country-patterns"
          number="4"
          title="Country patterns: planning signals, not promises"
          subtitle="These categories are meant to guide research and booking decisions, not guarantee admission."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              These country categories combine official immigration sources with community-reported travel experiences. Official rules matter most for what a country says it can do. Community reports matter because border practice is not always fully explained on tourist-facing websites.
            </p>

            <p>
              “More workable” does not mean safe, approved, or guaranteed. “Generally not workable” does not mean absolutely impossible for every person in every situation. It means the reviewed evidence is strong enough that a currently registered traveler should not treat the destination as an ordinary tourist option without individualized legal or official immigration guidance.
            </p>
          </GuideProse>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                Lower practical concern
              </p>
              <h3 className="mt-2 text-lg font-bold text-emerald-950">
                More workable destinations
              </h3>
              <p className="mt-2 text-sm leading-6 text-emerald-900">
                Reports and available official guidance suggest fewer recurring barriers for short tourist travel.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-emerald-950">
                <li>• Schengen Area generally</li>
                <li>• France</li>
                <li>• Germany</li>
                <li>• Italy</li>
                <li>• Portugal</li>
              </ul>
              <p className="mt-4 text-xs leading-5 text-emerald-900">
                Important: Spain and Greece should not simply inherit the broader Schengen label.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                Mixed or mode-sensitive
              </p>
              <h3 className="mt-2 text-lg font-bold text-amber-950">
                Verify carefully before booking
              </h3>
              <p className="mt-2 text-sm leading-6 text-amber-900">
                Reports conflict, travel mode matters, or screening systems make outcomes hard to predict.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-amber-950">
                <li>• Spain</li>
                <li>• Mexico</li>
                <li>• Costa Rica</li>
                <li>• Colombia</li>
                <li>• Türkiye</li>
                <li>• South Korea</li>
              </ul>
              <p className="mt-4 text-xs leading-5 text-amber-900">
                Air, cruise, land, and transit reports may point in different directions.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-800">
                Strong warning zone
              </p>
              <h3 className="mt-2 text-lg font-bold text-red-950">
                Generally not workable
              </h3>
              <p className="mt-2 text-sm leading-6 text-red-900">
                Official rules, public enforcement patterns, or repeated reports suggest that most currently registered travelers should expect refusal, removal, denied boarding, visa denial, or serious entry problems.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-red-950">
                <li>• Canada</li>
                <li>• United Kingdom</li>
                <li>• Australia</li>
                <li>• New Zealand</li>
                <li>• Japan</li>
                <li>• Philippines</li>
                <li>• Singapore</li>
                <li>• Malaysia</li>
              </ul>
              <p className="mt-4 text-xs leading-5 text-red-900">
                Rare exceptions, waivers, changed facts, or individualized legal advice may exist, but do not plan casually around those possibilities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Not enough data
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-950">
                Not enough reliable information
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Evidence is too thin, old, conflicting, or mode-specific to make a useful public recommendation.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-800">
                <li>• Netherlands as a standalone mainland rating</li>
                <li>• Morocco</li>
                <li>• Ireland</li>
                <li>• Panama</li>
                <li>• Belize</li>
                <li>• Dominican Republic</li>
                <li>• Jamaica</li>
                <li>• Cambodia</li>
              </ul>
              <p className="mt-4 text-xs leading-5 text-slate-600">
                These may deserve more research, but they should not be presented as strong public-facing country recommendations yet.
              </p>
            </div>
          </div>

          <GuideCallout tone="reminder" icon="📌" title="Country categories are not permission slips">
            <p>
              Use the list to decide where to investigate, how much money to risk, whether direct routing matters, and whether to delay booking. Do not use it as proof that a border officer, airline, cruise operator, or visa office must admit you.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="country-details"
          number="5"
          title="How to read the main country groups"
          subtitle="The same category can still hide important differences by route, travel mode, and personal facts."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The more workable group is narrow on purpose. France, Germany, Italy, Portugal, and Schengen travel generally show better community-reported patterns for short tourist travel than many other destinations. But Europe is changing operationally: the EU’s{" "}
              <a
                href={sourceLinks.euEes}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Entry/Exit System
              </a>{" "}
              and{" "}
              <a
                href={sourceLinks.euEtias}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                ETIAS
              </a>{" "}
              should be checked before booking, along with the State Department’s{" "}
              <a
                href={sourceLinks.stateDeptEurope}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Europe travel guidance
              </a>.
            </p>

            <p>
              Spain belongs in the verify-carefully group because reports include both successful admissions and serious entry problems. Mexico also belongs there because airport denials appear materially different from some cruise-port or limited-border-contact reports. Costa Rica and Colombia are mode-sensitive in the same way: cruise and air travel may not be treated alike.
            </p>

            <p>
              The generally not workable group is different. Canada, the United Kingdom, Australia, New Zealand, Japan, the Philippines, Singapore, and Malaysia all have either strong official screening rules, public enforcement signals, repeated community warnings, or some combination of those factors.
            </p>
          </GuideProse>

          <SoftDivider label="Examples of why the warning group is different" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-950">Canada</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Canada’s{" "}
                <a
                  href={sourceLinks.canadaInadmissibility}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  criminal inadmissibility rules
                </a>{" "}
                can be assessed at the eTA stage or port of entry. Some travelers may need to explore a{" "}
                <a
                  href={sourceLinks.canadaRemedies}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  temporary resident permit or rehabilitation
                </a>{" "}
                process before travel.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-950">United Kingdom</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                The UK now uses ETA screening for many visitors. The{" "}
                <a
                  href={sourceLinks.ukEtaRules}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  ETA rules
                </a>{" "}
                include criminality and public-good grounds, and the{" "}
                <a
                  href={sourceLinks.ukEtaOverview}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  ETA overview
                </a>{" "}
                says approval does not guarantee entry.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-950">Australia and New Zealand</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Australia publishes broad{" "}
                <a
                  href={sourceLinks.australiaCharacter}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  character requirements
                </a>, and New Zealand uses{" "}
                <a
                  href={sourceLinks.nzCharacter}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  character screening
                </a>{" "}
                for visas and entry permission, including the{" "}
                <a
                  href={sourceLinks.nzeta}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  NZeTA
                </a>.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-950">Japan and the Philippines</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Japan’s consular guidance says people with certain convictions may be refused entry, and its{" "}
                <a
                  href={sourceLinks.japanArticle5}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  Immigration Control Act Article 5 translation
                </a>{" "}
                includes imprisonment-based denial grounds. The Philippines has public Bureau of Immigration notices on barring foreign sex offenders, including its{" "}
                <a
                  href={sourceLinks.philippinesAnnual}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  annual exclusion announcement
                </a>.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:col-span-2">
              <h3 className="text-base font-bold text-slate-950">Singapore and Malaysia</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Singapore’s immigration authority has announced{" "}
                <a
                  href={sourceLinks.singaporeNoBoarding}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  no-boarding directives
                </a>{" "}
                for people it identifies as prohibited, undesirable, or otherwise ineligible. Malaysia’s immigration page describes broad{" "}
                <a
                  href={sourceLinks.malaysiaProhibited}
                  {...externalLinkProps}
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  prohibited immigrant
                </a>{" "}
                grounds. These rules are not always sex-offense-specific on their face, but they create serious practical screening risk.
              </p>
            </div>
          </div>

          <GuideCallout tone="legal" icon="⚖️" title="Sentence details can matter">
            <p>
              Some countries focus on sentence length, imprisonment, seriousness, moral turpitude, public safety, public order, or character. Your exact conviction, sentence, current registration status, and supervision status may matter more than the broad label of the offense.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="timeline"
          number="6"
          title="Planning timeline"
          subtitle="Give yourself time to verify, document, and change plans before money is at risk."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="A practical travel-planning timeline"
            stages={[
              {
                stage: "90+ days before travel",
                icon: "🗓️",
                whatChanges:
                  "This is when you can still choose a different destination, route, airline, cruise line, or travel date without scrambling.",
                whatToDo:
                  "Check passport status, supervision limits, country patterns, official entry rules, visa or ETA requirements, and whether the destination belongs in the more workable, verify-carefully, or generally not workable group.",
              },
              {
                stage: "60–45 days before travel",
                icon: "🧾",
                whatChanges:
                  "You should be moving from general research to written confirmation and document collection.",
                whatToDo:
                  "Contact the registering agency, ask destination-specific questions, email the consulate if needed, and start a paper or digital travel packet.",
              },
              {
                stage: "30–21 days before travel",
                icon: "📤",
                whatChanges:
                  "International travel notice timing becomes central. Incomplete or changing itineraries can create practical problems.",
                whatToDo:
                  "File required notice according to the agency’s instructions, save proof of submission, and ask how itinerary changes must be handled.",
              },
              {
                stage: "Two weeks before travel",
                icon: "🧳",
                whatChanges:
                  "The trip should be documented, refundable where possible, and ready for questioning or delay.",
                whatToDo:
                  "Print or download passport, itinerary, lodging, return ticket, consulate messages, insurance, emergency contacts, and any permission letters.",
              },
              {
                stage: "Day of travel",
                icon: "🛫",
                whatChanges:
                  "Airline staff, cruise staff, transit countries, or border officers may become the decision point.",
                whatToDo:
                  "Arrive early, answer questions calmly and briefly, keep documents accessible, and avoid arguing about rights with front-line staff abroad.",
              },
              {
                stage: "If denied, delayed, or removed",
                icon: "🛬",
                whatChanges:
                  "The priority becomes safety, documentation, companion logistics, and avoiding new violations.",
                whatToDo:
                  "Ask for written refusal paperwork if possible, save names and flight details, contact companions, keep receipts, and check whether your registering agency or supervision office needs an update.",
              },
            ]}
          />

          <OfflineOptions
            title="If internet access is limited"
            icon="📞"
            items={[
              "Ask a trusted person to print official country pages, matrix entries, consulate emails, and booking terms.",
              "Call the registering agency and write down the name, date, department, and instructions.",
              "Ask the destination embassy or consulate for mailed or emailed guidance if you cannot reliably use online forms.",
              "Keep a paper folder with your itinerary, lodging, emergency contacts, and proof of travel notice submission.",
            ]}
            note="Phone-only, supervised, incarcerated, or low-internet readers may need paper backups and a trusted helper."
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="documents"
          number="7"
          title="Build a travel packet"
          subtitle="When travel gets stressful, organized records matter."
        />

        <GuideSectionCard>
          <DocumentPacket
            title="Documents to carry and save"
            intro="Keep digital copies if safe, but do not rely only on your phone. Carry a paper packet in your personal item."
            categories={[
              {
                title: "Identity and U.S. compliance",
                items: [
                  "Passport and any required passport identifier.",
                  "Copy of international travel notice or proof of submission.",
                  "Written permission from supervision or court, if applicable.",
                  "Registering-agency instructions about itinerary changes and return reporting.",
                ],
              },
              {
                title: "Trip proof",
                items: [
                  "Round-trip or onward ticket.",
                  "Lodging confirmation with address and dates.",
                  "Cruise itinerary, port list, and cruise-line policy confirmation if relevant.",
                  "Proof of funds and travel insurance if required or useful.",
                ],
              },
              {
                title: "Verification records",
                items: [
                  "Consulate or embassy emails.",
                  "Screenshots or PDFs of official entry pages.",
                  "Community matrix or trip-report notes used as planning signals.",
                  "Names, dates, departments, confirmation numbers, and call notes.",
                ],
              },
              {
                title: "Emergency and backup planning",
                items: [
                  "Companion contact plan if you are separated.",
                  "Backup lodging and return-flight options.",
                  "Medication list and prescriptions if needed.",
                  "Emergency contacts in the United States and destination country.",
                ],
              },
            ]}
          />

          <GuideCallout tone="privacy" icon="🔐" title="Protect sensitive records">
            <p>
              Carry what you may need, but think carefully before giving copies of sensitive legal documents to hotels, tour operators, or private companies unless they are required. Keep the most sensitive records in your own control.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="booking-border"
          number="8"
          title="Booking, border, and companion planning"
          subtitle="The goal is not to predict every outcome. The goal is to reduce avoidable harm if the trip changes."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Prefer direct routes when possible. A layover is not always neutral. Transit through Canada, the United Kingdom, Singapore, South Korea, New Zealand, or another screened system may create its own immigration or boarding event.
            </p>

            <p>
              Cruise travel needs separate checking. A traveler may face the cruise operator’s policy, the port country’s policy, and the rules of any country where the ship begins or ends. Cruise success at one port does not prove airport admission to that country.
            </p>

            <p>
              If you are traveling with a spouse, partner, child, parent, friend, or group, plan for separation. Family presence does not neutralize entry risk. Companions should have access to money, documents, lodging, and return-travel options if you are delayed or sent back.
            </p>
          </GuideProse>

          <GuideChecklist
            id="booking-border-checklist"
            title="Before final payment"
            columns={1}
            items={[
              {
                id: "refundable",
                label: "Use refundable or changeable bookings whenever the destination is not clearly workable.",
              },
              {
                id: "routing",
                label: "Avoid transit through generally not workable or heavily screened countries if a direct route is available.",
              },
              {
                id: "cruise",
                label: "If cruising, check both the cruise line’s policy and the entry rules for embarkation, disembarkation, and port countries.",
              },
              {
                id: "companion-money",
                label: "Make sure companions can pay for lodging, food, phone service, and return travel without you.",
              },
              {
                id: "secondary",
                label: "Prepare for secondary inspection by carrying documents and answering questions calmly and consistently.",
              },
              {
                id: "denial-paperwork",
                label: "If refused, ask for written refusal, removal, cancellation, or denied-boarding paperwork if possible.",
              },
            ]}
          />

          <ScriptBox
            title="Script: asking about itinerary changes"
            tone="legal"
            context="Use this with the registering agency or supervision office before travel."
            script={`Hello, my name is [Name]. I am trying to make sure I handle international travel notice correctly.

If my flight, hotel, cruise port, transit country, or return date changes after I submit notice, what exactly should I do?

Who should I contact, how quickly should I contact them, and what proof should I save?`}
          />

          <GuideCallout tone="family" icon="👥" title="For companions">
            <p>
              Companions should know the plan without being asked to manage everything. Give them the itinerary, lodging details, emergency contacts, and a backup return plan. If the traveler is denied entry, the companion may need to decide whether to continue, wait, or return separately.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes"
          number="9"
          title="Common mistakes"
          subtitle="These are the errors that make an already difficult travel situation harder."
        />

        <GuideSectionCard>
          <CommonMistakes
            title="Avoid these planning traps"
            mistakes={[
              {
                mistake: "Treating a community report as a guarantee.",
                whyItMatters:
                  "Community reports are valuable, but one person’s trip may involve a different route, year, offense history, registration status, passport, or border officer.",
                betterMove:
                  "Use matrices as leads, then verify with official sources and keep bookings refundable.",
              },
              {
                mistake: "Assuming a passport means admission.",
                whyItMatters:
                  "A passport lets you travel and request entry. The destination still decides whether to admit you.",
                betterMove:
                  "Check the destination’s entry rules, visa or ETA process, criminal-history questions, and border-discretion language.",
              },
              {
                mistake: "Booking through a risky transit country.",
                whyItMatters:
                  "A layover can become an immigration screening event, especially if you must clear border control or obtain an electronic authorization.",
                betterMove:
                  "Route directly when possible, and check transit rules separately from destination rules.",
              },
              {
                mistake: "Assuming cruise reports equal airport admission.",
                whyItMatters:
                  "Cruise ports, ship policies, embarkation countries, and airport immigration can produce different outcomes.",
                betterMove:
                  "Research cruise and air travel separately, and check the cruise line before final payment.",
              },
              {
                mistake: "Changing the itinerary without updating anyone.",
                whyItMatters:
                  "Registration notice, supervision permission, lodging, dates, or route changes may create compliance risk.",
                betterMove:
                  "Ask in advance exactly how changes must be reported and save proof that you followed the instruction.",
              },
              {
                mistake: "Letting companions depend entirely on you.",
                whyItMatters:
                  "Denied boarding, detention, refusal, or removal can separate travelers quickly.",
                betterMove:
                  "Give companions independent access to funds, documents, lodging, phone service, and return-travel options.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="10"
          title="Resources and next steps"
          subtitle="Use official sources for rules and community sources for planning signals."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Official U.S. travel and notice resources"
            description="Start here for U.S.-side obligations, country pages, and travel preparation."
            resources={[
              {
                label: "State Department: International Megan’s Law passport information",
                href: sourceLinks.stateDeptIML,
                badge: "Official",
                description:
                  "Passport identifier information for covered travelers, including passport-card limits and possible revocation of unmarked passports.",
              },
              {
                label: "SMART Office: notice of international travel",
                href: sourceLinks.smartTravelNotice,
                badge: "Official",
                description:
                  "Federal implementation document describing information required for international travel notice.",
              },
              {
                label: "ICE / HSI Angel Watch Center",
                href: sourceLinks.angelWatch,
                badge: "Official",
                description:
                  "Official page describing Angel Watch’s mission and international notification role.",
              },
              {
                label: "State Department country information pages",
                href: sourceLinks.stateDeptCountryInfo,
                badge: "Official",
                description:
                  "Country-specific travel information, entry requirements, safety notices, and embassy contacts.",
              },
              {
                label: "STEP enrollment",
                href: sourceLinks.step,
                badge: "Official",
                description:
                  "Optional State Department travel enrollment for safety updates and emergency contact support.",
              },
            ]}
          />

          <SoftDivider />

          <ResourceLinkGrid
            title="Community-reported planning sources"
            description="Use these as pattern evidence and planning leads, not as legal authority or guarantees."
            resources={[
              {
                label: "RTAG Travel Matrix",
                href: sourceLinks.rtagMatrix,
                badge: "Community matrix",
                description:
                  "Country-pattern matrix compiled from multiple sources and traveler reports.",
              },
              {
                label: "Just Facts Not Fear International Travel Matrix",
                href: sourceLinks.justFactsMatrix,
                badge: "Community matrix",
                description:
                  "Crowd-sourced country signals for registrants/PFRs planning international travel.",
              },
              {
                label: "PFR Guide country trip reports",
                href: sourceLinks.pfrCountryReports,
                badge: "Trip reports",
                description:
                  "First-hand country reports that can help identify current travel patterns and missing questions.",
              },
              {
                label: "PFR Guide cruise reports",
                href: sourceLinks.pfrCruiseReports,
                badge: "Cruise reports",
                description:
                  "Cruise-specific reports that help separate ship policy from country-entry practice.",
              },
              {
                label: "ACSOL International Travel 2026 discussion",
                href: sourceLinks.acsol2026,
                badge: "Discussion",
                description:
                  "Recent community discussion and traveler reports. Read with caution because detail varies.",
              },
              {
                label: "ACSOL Travel After IML survey",
                href: sourceLinks.acsolTravelAfterIML,
                badge: "Survey intake",
                description:
                  "Shows how travel experiences are collected and shared for future pattern tracking.",
              },
            ]}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "Interstate Moving Guide",
                description:
                  "Use this when domestic travel, relocation, registration timing, or state-to-state planning is part of the problem.",
                to: "/resources/interstate-moving-guide",
              },
              {
                title: "Know Your Rights at Every Stage",
                description:
                  "Helpful for readers who need a broader framework for documentation, questioning, supervision, and legal-risk decisions.",
                to: "/resources/know-your-rights",
              },
              {
                title: "Family Support Guide",
                description:
                  "For spouses, partners, parents, and loved ones trying to help without taking over or increasing risk.",
                to: "/resources/family-support",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="sources"
          number="11"
          title="Sources and verification"
          subtitle="Rules and country practices can change. Recheck before relying on this guide."
        />

        <GuideSectionCard>
          <SourceList
            note="This sandbox uses official sources for rules and community sources for practical travel-pattern signals. Community reports are not legal authority."
            sources={[
              {
                label: "State Department: Passports and International Megan’s Law",
                href: sourceLinks.stateDeptIML,
                description: "Passport identifier, passport-card limits, and covered-traveler passport issues.",
              },
              {
                label: "SMART Office: information required for notice of international travel",
                href: sourceLinks.smartTravelNotice,
                description: "International travel notice information and U.S. outbound process.",
              },
              {
                label: "ICE / HSI Angel Watch Center",
                href: sourceLinks.angelWatch,
                description: "Angel Watch mission and international notification context.",
              },
              {
                label: "State Department country information",
                href: sourceLinks.stateDeptCountryInfo,
                description: "Official country pages and embassy contact starting point.",
              },
              {
                label: "State Department Europe travel guidance",
                href: sourceLinks.stateDeptEurope,
                description: "European short-stay planning and ordinary travel requirements.",
              },
              {
                label: "EU Entry/Exit System",
                href: sourceLinks.euEes,
                description: "EES operational information for Schengen-area border processing.",
              },
              {
                label: "EU ETIAS",
                href: sourceLinks.euEtias,
                description: "ETIAS timing and pre-travel authorization information.",
              },
              {
                label: "RTAG Travel Matrix",
                href: sourceLinks.rtagMatrix,
                description: "Community matrix used as planning-signal evidence.",
              },
              {
                label: "Just Facts Not Fear International Travel Matrix",
                href: sourceLinks.justFactsMatrix,
                description: "Community-reported travel matrix used as planning-signal evidence.",
              },
              {
                label: "PFR Guide country trip reports",
                href: sourceLinks.pfrCountryReports,
                description: "First-hand country reports used for practical travel-pattern signals.",
              },
              {
                label: "PFR Guide cruise reports",
                href: sourceLinks.pfrCruiseReports,
                description: "Cruise-specific reports used to separate cruise policy from country-entry practice.",
              },
              {
                label: "ACSOL International Travel 2026",
                href: sourceLinks.acsol2026,
                description: "Recent community discussion and traveler reports.",
              },
              {
                label: "Canada criminal inadmissibility",
                href: sourceLinks.canadaInadmissibility,
                description: "Official inadmissibility framework and officer decision points.",
              },
              {
                label: "Canada criminal inadmissibility remedies",
                href: sourceLinks.canadaRemedies,
                description: "Temporary resident permit and rehabilitation pathways.",
              },
              {
                label: "UK Standard Visitor guidance",
                href: sourceLinks.ukStandardVisitor,
                description: "Visitor guidance, including cautions for people with criminal records.",
              },
              {
                label: "UK ETA rules",
                href: sourceLinks.ukEtaRules,
                description: "ETA refusal and cancellation grounds.",
              },
              {
                label: "UK ETA overview",
                href: sourceLinks.ukEtaOverview,
                description: "ETA use and warning that ETA does not guarantee entry.",
              },
              {
                label: "Australia character requirements",
                href: sourceLinks.australiaCharacter,
                description: "Character documentation and police-certificate framework.",
              },
              {
                label: "Australia entry and character screening",
                href: sourceLinks.australiaEntryCharacter,
                description: "Risk-based entry and character-screening language.",
              },
              {
                label: "New Zealand character requirements",
                href: sourceLinks.nzCharacter,
                description: "Character screening, refusal thresholds, and waiver concepts.",
              },
              {
                label: "New Zealand NZeTA",
                href: sourceLinks.nzeta,
                description: "Electronic travel authority and character-question framework.",
              },
              {
                label: "Japan consular travel quick facts",
                href: sourceLinks.japanConsular,
                description: "Consular warning that certain convictions may lead to refusal.",
              },
              {
                label: "Japan Immigration Control Act Article 5 translation",
                href: sourceLinks.japanArticle5,
                description: "Denial-of-landing grounds including imprisonment-based provisions.",
              },
              {
                label: "Philippines Bureau of Immigration annual exclusion announcement",
                href: sourceLinks.philippinesAnnual,
                description: "Public enforcement statement on barring foreign sex offenders.",
              },
              {
                label: "Philippines Bureau of Immigration moral-turpitude denial post",
                href: sourceLinks.philippinesMoralTurpitude,
                description: "Official case example involving denial and blacklist practice.",
              },
              {
                label: "Philippines Bureau of Immigration turn-backs post",
                href: sourceLinks.philippinesTurnBacks,
                description: "Official case examples involving airport turn-backs.",
              },
              {
                label: "Singapore no-boarding directives",
                href: sourceLinks.singaporeNoBoarding,
                description: "Operational no-boarding regime for prohibited or undesirable travelers.",
              },
              {
                label: "Malaysia prohibited immigrant page",
                href: sourceLinks.malaysiaProhibited,
                description: "Broad prohibited-immigrant grounds involving convictions and adverse information.",
              },
              {
                label: "South Korea K-ETA guide",
                href: sourceLinks.southKoreaKeta,
                description: "Pre-boarding authorization, no-guarantee language, and criminal-record updates.",
              },
              {
                label: "Mexico Ley de Migración",
                href: sourceLinks.mexicoLey,
                description: "Official statutory basis for public-safety and national-security refusal discretion.",
              },
              {
                label: "Mexican consular short-stay guidance",
                href: sourceLinks.mexicoConsular,
                description: "Consular guidance indicating criminal records can affect short-stay entry decisions.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}