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
  euEtias: "https://travel-europe.europa.eu/en/etias",
  schengenCalculator:
    "https://ec.europa.eu/assets/home/visa-calculator/calculator.htm?lang=en",
  statute212b: "https://www.law.cornell.edu/uscode/text/22/212b",
  federalRegisterSORNA:
    "https://www.federalregister.gov/documents/2016/12/21/2016-29905/international-megans-law-to-prevent-child-exploitation-and-other-sexual-crimes-through-advanced-notification",
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
  malaysiaProhibited: "https://www.imi.gov.my/index.php/en/enforcement/prohibited-immigrant/",
  southKoreaKeta: "https://www.k-eta.go.kr/portal/guide/viewetaapplication.do?locale=EN",
  mexicoLey: "https://www.inm.gob.mx/micrositio/1/docs/mj/LMig.pdf",
  mexicoConsular:
    "https://consulmex.sre.gob.mx/montreal/index.php/en/foreigners/visa/363-i-want-to-visit-mexico-for-a-short-period-less-than-6-months-as-a-tourist-for-business-for-technical-assistance-as-a-journalist-in-transit-or-for-short-studies-do-i-need-a-visa",
};

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function InternationalTravelGuide(): JSX.Element {
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
            A practical planning guide for checking U.S. obligations, reading country-pattern signals,
            preparing documents, and reducing avoidable travel risk before you book.
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
            International travel may still be possible for some people on registries, but it is not
            something to treat casually or book at the last minute.
          </p>
          <p>
            The safer approach is to verify your U.S. obligations, research the destination from more
            than one source, keep records of what you were told, and avoid nonrefundable plans until
            you understand the practical risk.
          </p>
          <p>
            This guide is not legal advice. It is a planning tool for people who need a clear sequence:
            what to check first, what to save, what country patterns mean, and how to avoid common
            travel mistakes.
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
              Review the destination through official sources and community-reported matrices before
              spending money.
            </span>,
          ]}
          nextActions={[
            <span>
              Use refundable airfare, lodging, tours, and insurance whenever the destination is
              uncertain.
            </span>,
            <span>
              Save emails, screenshots, confirmation numbers, forms, and names of people you spoke
              with.
            </span>,
            <span>
              Make a backup plan for travel companions in case you are delayed, questioned, denied
              boarding, or refused entry.
            </span>,
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
              icon: "⚖️",
              tone: "legal",
              description:
                "Passport identifier rules, travel notice, state registration rules, supervision conditions, and court orders may all matter before you leave.",
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
              icon: "🔎",
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
              International travel sits at the intersection of several systems: your registering agency,
              any supervision or court conditions, U.S. passport rules, international notice transmission,
              airline policies, cruise policies, transit-country rules, and the destination country’s border
              discretion.
            </p>

            <p>
              That does not mean every trip will fail. It means the planning has to be more careful.
              The practical question is not, “Can people on the registry ever travel internationally?”
              The better question is, “What do I need to verify, document, and protect before I rely on
              this plan?”
            </p>
          </GuideProse>

          <GuideCallout tone="warning" icon="⚠️" title="Do not book nonrefundable travel too early">
            <p>
              If you cannot afford to lose the ticket, do not buy it until you have checked the U.S.
              notice process, your passport status, any supervision limits, destination entry rules, and
              recent traveler reports. Even then, refundable travel is often the safer choice.
            </p>
          </GuideCallout>

          <VerifyBeforeActing
            title="Verify before acting"
            whoToAsk={
              <span>
                Your registering agency, your supervising officer or attorney if you are under
                supervision or court order, the destination’s embassy or consulate, and official travel
                resources such as the{" "}
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
                Ask narrow questions: whether your itinerary satisfies notice rules, whether you need
                a visa or travel authorization, whether a criminal record can affect tourist entry,
                whether transit countries create separate risk, and whether itinerary changes must be
                reported.
              </span>
            }
            whatToSave={
              <span>
                Save emails, forms, screenshots, names, dates, departments, confirmation numbers,
                and copies of any official answer. If someone gives you a verbal answer, write it down
                immediately.
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
              explains the passport identifier process for covered travelers, including limits on
              passport cards and possible revocation of unmarked passports. The underlying federal
              statute is{" "}
              <a
                href={sourceLinks.statute212b}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                22 U.S.C. § 212b
              </a>.
            </p>

            <p>
              Separately, federal SORNA implementation materials describe the information required
              for{" "}
              <a
                href={sourceLinks.smartTravelNotice}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                notice of intended international travel
              </a>. Many people know this as the “21-day notice,” but the details still need to be
              checked with the registering agency that actually handles your notice. The Federal
              Register also published a SORNA-related{" "}
              <a
                href={sourceLinks.federalRegisterSORNA}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                international travel notice rule
              </a>{" "}
              connected to International Megan’s Law implementation.
            </p>

            <p>
              U.S. authorities may transmit travel information to foreign partners through systems
              connected to the{" "}
              <a
                href={sourceLinks.angelWatch}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Angel Watch Center
              </a>. That does not automatically mean a destination will deny entry, but it can affect
              what happens at boarding, arrival, or secondary inspection.
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
              A country may be relatively workable for some travelers but still unavailable to someone
              under probation, parole, supervised release, treatment restrictions, or a court order.
              Do not rely on another person’s travel report if your supervision status is different.
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
              On this topic, official tourist pages often do not explain how registry-related travel
              notices are handled in real life. That is why community-reported resources matter. The{" "}
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
              Use those sources as planning signals, not legal authority. A report is stronger when it
              is recent, first-hand, specific about the country, clear about air versus cruise versus
              transit, and consistent with other reports. A report is weaker when it is old, second-hand,
              missing key facts, cruise-only, or based on someone who was no longer required to register.
            </p>
          </GuideProse>

          <GuideCallout tone="research" icon="🔎" title="A useful matrix is still not a guarantee">
            <p>
              A country pattern becomes more useful when several sources point in the same direction.
              It still does not prove what will happen to you. Your sentence history, registration status,
              passport identifier, travel notice, visa type, route, travel mode, and border officer can
              all change the result.
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
                icon: "⚠️",
                tone: "warning",
                description:
                  "The report is undated, vague, second-hand, or does not say whether the person was currently required to register.",
              },
              {
                eyebrow: "Do not overread",
                title: "One trip is not a rule",
                icon: "🧩",
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
              These country categories combine official immigration sources with community-reported
              travel experiences. Official rules matter most for what a country says it can do. Community
              reports matter because border practice is not always fully explained on tourist-facing
              websites.
            </p>

            <p>
              “More workable” does not mean safe, approved, or guaranteed. “Generally not workable”
              does not mean absolutely impossible for every person in every situation. It means the
              reviewed evidence is strong enough that a currently registered traveler should not treat
              the destination as an ordinary tourist option without individualized legal or official
              immigration guidance.
            </p>
          </GuideProse>

          <OverviewCards
            columns={2}
            cards={[
              {
                eyebrow: "Fewer recurring barriers — not guaranteed",
                title: "More workable destinations",
                icon: "🟢",
                tone: "success",
                description:
                  "Schengen Area generally, France, Germany, Italy, and Portugal. Reports and available official guidance suggest fewer recurring barriers for short tourist travel. Spain and Greece should not simply inherit the broader Schengen label.",
              },
              {
                eyebrow: "Mixed or mode-sensitive",
                title: "Verify carefully before booking",
                icon: "🟡",
                tone: "warning",
                description:
                  "Spain, Mexico, Costa Rica, Colombia, Türkiye, and South Korea. Reports conflict, travel mode matters, or screening systems make outcomes hard to predict.",
              },
              {
                eyebrow: "Strong warning zone",
                title: "Generally not workable",
                icon: "🔴",
                tone: "urgent",
                description:
                  "Canada, United Kingdom, Australia, New Zealand, Japan, Philippines, Singapore, and Malaysia. Most currently registered travelers should expect refusal, removal, denied boarding, visa denial, or serious entry problems.",
              },
              {
                eyebrow: "Do not treat silence as safety",
                title: "Not enough reliable information",
                icon: "⚪",
                tone: "neutral",
                description:
                  "Netherlands as a standalone mainland rating, Morocco, Ireland, Panama, Belize, Dominican Republic, Jamaica, and Cambodia. Not enough data does not mean safe or unsafe; it means the evidence is too thin, old, conflicting, or mode-specific.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="📌" title="Country categories are not permission slips">
            <p>
              Use the list to decide where to investigate, how much money to risk, whether direct
              routing matters, and whether to delay booking. Do not use it as proof that a border officer,
              airline, cruise operator, or visa office must admit you.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="schengen"
          number="5"
          title="What is Schengen?"
          subtitle="This term comes up often because much of the more workable pattern is in Europe."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The Schengen Area is a group of European countries that share a common short-stay border
              system. For many U.S. tourists, a short trip to France, Germany, Italy, Portugal, Spain,
              Greece, or several other European countries is handled under Schengen short-stay rules
              rather than a separate tourist visa for each country.
            </p>

            <p>
              In ordinary tourist language, Schengen often means you may enter one Schengen country
              and then move between many Schengen countries without routine passport checks at every
              internal border. That does not mean every Schengen country handles registry-related travel
              the same way. The reviewed travel reports suggest that France, Germany, Italy, and Portugal
              are more workable than many other international destinations, while Spain and Greece need
              more caution.
            </p>

            <p>
              Schengen also has ordinary timing rules. Many short-stay visitors are limited to 90 days in
              any 180-day period across the Schengen Area as a whole, not 90 days in each country. The
              official{" "}
              <a
                href={sourceLinks.schengenCalculator}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Schengen short-stay calculator
              </a>{" "}
              can help with date counting, and the State Department’s{" "}
              <a
                href={sourceLinks.stateDeptEurope}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Europe travel guidance
              </a>{" "}
              is a useful starting point for ordinary passport, funds, and return-ticket expectations.
            </p>
          </GuideProse>

          <GuideCallout tone="info" icon="🇪🇺" title="Schengen is helpful, but it is not magic">
            <p>
              If you choose a Schengen destination because it appears more workable, still check the
              first country where you will enter, any transit countries, the current{" "}
              <a
                href={sourceLinks.euEes}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Entry/Exit System
              </a>{" "}
              status, and the{" "}
              <a
                href={sourceLinks.euEtias}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                ETIAS
              </a>{" "}
              timeline before booking.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="country-details"
          number="6"
          title="How to read the main country groups"
          subtitle="The same category can still hide important differences by route, travel mode, and personal facts."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The more workable group is narrow on purpose. France, Germany, Italy, Portugal, and
              Schengen travel generally show better community-reported patterns for short tourist travel
              than many other destinations. But Europe is changing operationally: the EU’s{" "}
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
              should be checked before booking.
            </p>

            <p>
              Spain belongs in the verify-carefully group because reports include both successful
              admissions and serious entry problems. Mexico also belongs there because airport denials
              appear materially different from some cruise-port or limited-border-contact reports. Costa
              Rica and Colombia are mode-sensitive in the same way: cruise and air travel may not be
              treated alike.
            </p>

            <p>
              The generally not workable group is different. Canada, the United Kingdom, Australia,
              New Zealand, Japan, the Philippines, Singapore, and Malaysia all have either strong official
              screening rules, public enforcement signals, repeated community warnings, or some
              combination of those factors.
            </p>
          </GuideProse>

          <SoftDivider label="Why the warning group is different" />

          <OverviewCards
            columns={2}
            cards={[
              {
                eyebrow: "Criminal inadmissibility",
                title: "Canada",
                icon: "🇨🇦",
                tone: "urgent",
                description:
                  "Canada can assess criminal inadmissibility at the eTA stage or port of entry. Some travelers may need to explore a temporary resident permit or rehabilitation process before travel.",
              },
              {
                eyebrow: "ETA and public-good screening",
                title: "United Kingdom",
                icon: "🇬🇧",
                tone: "urgent",
                description:
                  "The UK uses ETA screening for many visitors. ETA rules include criminality and public-good grounds, and ETA approval does not guarantee entry.",
              },
              {
                eyebrow: "Character screening",
                title: "Australia and New Zealand",
                icon: "🇦🇺",
                tone: "urgent",
                description:
                  "Both countries use broad character screening. New Zealand also uses character questions in the NZeTA process.",
              },
              {
                eyebrow: "Official refusal patterns",
                title: "Japan and the Philippines",
                icon: "🛂",
                tone: "urgent",
                description:
                  "Japan has imprisonment-based landing-denial grounds. The Philippines has public Bureau of Immigration notices describing barred foreign sex offenders and blacklist practice.",
              },
              {
                eyebrow: "No-boarding and prohibited-immigrant rules",
                title: "Singapore and Malaysia",
                icon: "🚫",
                tone: "urgent",
                description:
                  "Singapore has no-boarding directives for prohibited or undesirable travelers. Malaysia has broad prohibited-immigrant grounds involving convictions and adverse information.",
              },
            ]}
          />

          <GuideProse>
            <p>
              For deeper verification, review Canada’s{" "}
              <a
                href={sourceLinks.canadaInadmissibility}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                criminal inadmissibility guidance
              </a>, the UK{" "}
              <a
                href={sourceLinks.ukEtaRules}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                ETA rules
              </a>, Australia’s{" "}
              <a
                href={sourceLinks.australiaCharacter}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                character requirements
              </a>, New Zealand’s{" "}
              <a
                href={sourceLinks.nzCharacter}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                character requirements
              </a>, Japan’s{" "}
              <a
                href={sourceLinks.japanArticle5}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Article 5 landing-denial grounds
              </a>, Singapore’s{" "}
              <a
                href={sourceLinks.singaporeNoBoarding}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                no-boarding directive announcement
              </a>, and Malaysia’s{" "}
              <a
                href={sourceLinks.malaysiaProhibited}
                {...externalLinkProps}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                prohibited immigrant page
              </a>.
            </p>
          </GuideProse>

          <GuideCallout tone="legal" icon="⚖️" title="Sentence details can matter">
            <p>
              Some countries focus on sentence length, imprisonment, seriousness, moral turpitude,
              public safety, public order, or character. Your exact conviction, sentence, current
              registration status, and supervision status may matter more than the broad label of the
              offense.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="cruises"
          number="7"
          title="Cruises need separate checking"
          subtitle="A cruise can fail because of the cruise line, the port country, or the country where the trip begins or ends."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Cruises need separate checking. A cruise is not just “international travel by boat.”
              You may have to satisfy the cruise line’s own passenger policy, the rules of the country
              where the cruise begins, the rules of the country where it ends, and the rules of each
              port where passengers go ashore.
            </p>

            <p>
              In recent community reports, some Europe river and Mediterranean cruise travel was
              completed, but other travelers reported cruise-line cancellations, denied boarding, or
              policy-based refusals. That means a destination may look more workable on the country
              list while the cruise itself is still not workable.
            </p>

            <p>
              The safer assumption is that many mainstream cruises are high-risk for people currently
              required to register unless the cruise operator gives clear written confirmation before final
              payment. Do not rely on a travel agent’s casual answer, an old forum post, or the fact that
              the cruise website accepted a deposit.
            </p>
          </GuideProse>

          <GuideCallout tone="warning" icon="🚢" title="A paid deposit is not permission to board">
            <p>
              Cruise lines can screen passengers after booking. A cabin can be canceled close to
              departure, and a traveler may lose money if the fare, flights, hotels, or tours are not
              refundable.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="cruise-checklist"
            title="Before booking a cruise"
            columns={1}
            items={[
              {
                id: "cruise-line-policy",
                label:
                  "Ask the cruise line, not only the travel agent, whether people required to register are permitted to sail.",
              },
              {
                id: "written-answer",
                label:
                  "Get the answer in writing before final payment and save the name, department, date, and confirmation number.",
              },
              {
                id: "embarkation",
                label:
                  "Check the country where the cruise begins and the country where it ends; those may matter more than a short port stop.",
              },
              {
                id: "ports",
                label:
                  "Check whether any port country is generally not workable or has repeated cruise-specific denial reports.",
              },
              {
                id: "refunds",
                label:
                  "Use refundable or cancel-for-any-reason options when available, and read the exclusions carefully.",
              },
              {
                id: "companions",
                label:
                  "Make sure companions can continue, return, or change plans if the traveler is denied boarding or removed from the itinerary.",
              },
            ]}
          />

          <ScriptBox
            title="Script: asking the cruise line before final payment"
            tone="neutral"
            context="Use this with the cruise line directly. A travel agent may not know the cruise operator’s actual screening policy."
            script={`Hello, my name is [Name]. Before I make final payment, I need to confirm passenger eligibility in writing.

Does [Cruise Line] allow a U.S. passenger who is currently required to register for a past sex offense to sail on this itinerary?

The itinerary is [ship name], [departure date], leaving from [embarkation country] and visiting [ports].

If this question must be reviewed by a security, legal, or guest eligibility department, please forward it to the correct office. I am not asking for legal advice; I am asking whether the cruise line will allow boarding on this itinerary.

Please reply in writing so I can save the answer with my travel records.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="timeline"
          number="8"
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
                  "Check passport status, supervision limits, country patterns, official entry rules, visa or ETA requirements, cruise-line policies, and whether the destination belongs in the more workable, verify-carefully, or generally not workable group.",
              },
              {
                stage: "60–45 days before travel",
                icon: "✉️",
                whatChanges:
                  "You should be moving from general research to written confirmation and document collection.",
                whatToDo:
                  "Contact the registering agency, ask destination-specific questions, email the consulate if needed, contact the cruise line directly if cruising, and start a paper or digital travel packet.",
              },
              {
                stage: "30–21 days before travel",
                icon: "📋",
                whatChanges:
                  "International travel notice timing becomes central. Incomplete or changing itineraries can create practical problems.",
                whatToDo:
                  "File required notice according to the agency’s instructions, save proof of submission, and ask how itinerary changes must be handled.",
              },
              {
                stage: "Two weeks before travel",
                icon: "🖨️",
                whatChanges:
                  "The trip should be documented, refundable where possible, and ready for questioning or delay.",
                whatToDo:
                  "Print or download passport, itinerary, lodging, return ticket, consulate messages, cruise-line confirmation if relevant, insurance, emergency contacts, and any permission letters.",
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
                icon: "🧾",
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
              "Ask a trusted person to print official country pages, matrix entries, cruise reports, consulate emails, and booking terms.",
              "Call the registering agency and write down the name, date, department, and instructions.",
              "Ask the destination embassy, consulate, airline, or cruise line for mailed or emailed guidance if you cannot reliably use online forms.",
              "Keep a paper folder with your itinerary, lodging, cruise confirmation if relevant, emergency contacts, and proof of travel notice submission.",
            ]}
            note="Phone-only, supervised, incarcerated, or low-internet readers may need paper backups and a trusted helper."
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="documents"
          number="9"
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
                  "Airline or cruise-line written eligibility confirmation.",
                  "Screenshots or PDFs of official entry pages.",
                  "Community matrix, country report, or cruise-report notes used as planning signals.",
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

          <GuideCallout tone="privacy" icon="🔒" title="Protect sensitive records">
            <p>
              Carry what you may need, but think carefully before giving copies of sensitive legal
              documents to hotels, tour operators, cruise staff, or private companies unless they are
              required. Keep the most sensitive records in your own control.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="booking-border"
          number="10"
          title="Booking, border, and companion planning"
          subtitle="The goal is not to predict every outcome. The goal is to reduce avoidable harm if the trip changes."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Prefer direct routes when possible. A layover is not always neutral. Transit through
              Canada, the United Kingdom, Singapore, South Korea, New Zealand, or another screened
              system may create its own immigration or boarding event.
            </p>

            <p>
              Cruise travel needs separate checking even when the destination looks more workable.
              A traveler may face the cruise operator’s policy, the port country’s policy, and the rules
              of any country where the ship begins or ends. Cruise success at one port does not prove
              airport admission to that country, and a country that allows air entry may still appear on
              a cruise itinerary the operator will not let you board.
            </p>

            <p>
              If you are traveling with a spouse, partner, child, parent, friend, or group, plan for
              separation. Family presence does not neutralize entry risk. Companions should have access
              to money, documents, lodging, and return-travel options if you are delayed or sent back.
            </p>
          </GuideProse>

          <GuideChecklist
            id="booking-border-checklist"
            title="Before final payment"
            columns={1}
            items={[
              {
                id: "refundable",
                label: "Use refundable or changeable bookings whenever the destination or travel mode is not clearly workable.",
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
              Companions should know the plan without being asked to manage everything. Give them the
              itinerary, lodging details, emergency contacts, and a backup return plan. If the traveler
              is denied entry or denied boarding, the companion may need to decide whether to continue,
              wait, or return separately.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes"
          number="11"
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
                mistake: "Assuming cruises are easier than flying.",
                whyItMatters:
                  "Cruises add another gate: the cruise line’s own passenger policy. Some travelers report country-level success, while others report cruise-line cancellations, denied boarding, or policy-based refusals.",
                betterMove:
                  "Treat cruises as high-risk unless the cruise line confirms eligibility in writing before final payment, and check embarkation, disembarkation, and port countries separately.",
              },
              {
                mistake: "Booking through a risky transit country.",
                whyItMatters:
                  "A layover can become an immigration screening event, especially if you must clear border control or obtain an electronic authorization.",
                betterMove:
                  "Route directly when possible, and check transit rules separately from destination rules.",
              },
              {
                mistake: "Changing the itinerary without updating anyone.",
                whyItMatters:
                  "Registration notice, supervision permission, lodging, dates, cruise ports, or route changes may create compliance risk.",
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
          number="12"
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
            title="Europe and Schengen planning tools"
            description="Use these for ordinary short-stay planning, date counting, and changing European border systems."
            resources={[
              {
                label: "State Department Europe travel guidance",
                href: sourceLinks.stateDeptEurope,
                badge: "Official",
                description:
                  "A plain-language starting point for Europe travel requirements, passport validity, and ordinary short-stay expectations.",
              },
              {
                label: "Schengen short-stay calculator",
                href: sourceLinks.schengenCalculator,
                badge: "Official",
                description:
                  "A date-counting tool for the 90-days-in-any-180-day Schengen short-stay rule.",
              },
              {
                label: "EU Entry/Exit System",
                href: sourceLinks.euEes,
                badge: "Official",
                description:
                  "Information on the EU border system that records entries and exits for short-stay travelers.",
              },
              {
                label: "EU ETIAS",
                href: sourceLinks.euEtias,
                badge: "Official",
                description:
                  "Information on the European travel authorization system and current rollout timeline.",
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
                  "Cruise-specific reports showing both completed trips and cruise-line cancellations or policy-based denials. Use as planning signals, not guarantees.",
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
          number="13"
          title="Sources and verification"
          subtitle="Rules and country practices can change. Recheck before relying on this guide."
        />

        <GuideSectionCard>
          <SourceList
            note="This guide uses official sources for rules and community sources for practical travel-pattern signals. Community reports are not legal authority."
            sources={[
              {
                label: "State Department: Passports and International Megan’s Law",
                href: sourceLinks.stateDeptIML,
                description: "Passport identifier, passport-card limits, and covered-traveler passport issues.",
              },
              {
                label: "22 U.S.C. § 212b",
                href: sourceLinks.statute212b,
                description: "Federal statutory source for International Megan’s Law passport identifier provisions.",
              },
              {
                label: "Federal Register: SORNA international travel notice rule",
                href: sourceLinks.federalRegisterSORNA,
                description: "Federal rulemaking source connected to IML and international travel notice implementation.",
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
                label: "Schengen short-stay calculator",
                href: sourceLinks.schengenCalculator,
                description: "Official calculator for Schengen 90/180-day short-stay planning.",
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