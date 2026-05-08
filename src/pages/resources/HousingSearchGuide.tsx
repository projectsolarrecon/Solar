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
  unitedWay211: "https://www.211.org/",
  cfpbHousingCounselor: "https://www.consumerfinance.gov/find-a-housing-counselor/",
  hudFindCounselor: "https://www.hud.gov/findacounselor",
  hudReportHousingDiscrimination: "https://www.hud.gov/reporthousingdiscrimination",
  usaGovHousingHelp: "https://www.usa.gov/housing-help",
  lscLegalHelp: "https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help",
};

export default function HousingSearchGuide(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Housing Search Guide for People on Registries | The SOLAR Project"
        description="A practical guide for finding housing while checking registry rules, supervision conditions, local restrictions, lease terms, landlord communication, and address approval steps."
        keywords="registry housing, sex offense registry housing, residency restrictions, housing search, reentry housing, supervision address approval, landlord communication, housing compliance"
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
            Housing Search Guide for People on Registries
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical, sex-offense-specific guide for finding housing that is
            realistic, affordable, and compliant with registry rules,
            supervision conditions, local restrictions, lease terms, household
            realities, and family safety needs.
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

        <GuideIntro title="Start Here" icon="🏠">
          <p>
            Housing is one of the hardest parts of registry life. A place can
            look affordable, safe, and available, but still fail because of a
            residency restriction, supervision condition, local ordinance, HOA
            rule, lease clause, internet or device condition, household
            composition issue, victim-contact rule, child-contact rule, or
            address-approval process.
          </p>

          <p>
            This guide is for people on sex offense registries, people preparing
            for release, people under probation, parole, or supervised release,
            and family members helping with the search. It is not generic rental
            advice. The goal is to help you find possible addresses, verify them
            before money changes hands, communicate carefully, and keep proof of
            what you were told.
          </p>

          <p>
            You do not have to solve everything today. Start by finding one
            possible address, checking the rule that could block it, and saving
            the answer in writing if possible.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If you need housing soon"
          subtitle="Use this as your first 48-hour triage plan. The goal is not the perfect address. The goal is one address that can be checked, documented, and moved forward safely."
          icon="⚡"
          urgentActions={[
            <span>
              Gather the exact restrictions that apply to you: registry law,
              supervision or court conditions, local ordinances, school, park, or
              daycare distance rules, household limits, internet or device rules,
              and any victim-contact or child-contact restrictions.
            </span>,
            <span>
              Pick three possible search zones before looking at individual
              listings. Rural edges, older neighborhoods, industrial corridors,
              and areas with fewer schools, parks, or daycare sites may produce
              more workable addresses.
            </span>,
            <span>
              Create a housing compliance folder before you apply anywhere. Save
              maps, screenshots, officer emails, landlord messages, HOA
              documents, lease terms, application receipts, and notes from every
              important phone call.
            </span>,
          ]}
          nextActions={[
            <span>
              Pre-screen each address before paying fees, deposits, application
              charges, inspection costs, or moving costs.
            </span>,
            <span>
              Ask your officer or registering agency the narrow address question:
              “Is this specific address allowed for me under my current rules?”
            </span>,
            <span>
              Use a family member, trusted friend, caseworker, reentry worker,
              public defender social worker, or faith volunteer as a housing
              scout if internet access is restricted or overwhelming.
            </span>,
          ]}
          reminder={
            <span>
              Paper beats promises. A verbal “that should be fine” is not enough
              when a lease, move-in date, supervision approval, or registry
              compliance question is on the line.
            </span>
          }
        />

        <OverviewCards
          columns={4}
          cards={[
            {
              eyebrow: "Step 1",
              title: "Know the rule",
              icon: "📏",
              tone: "legal",
              description:
                "Identify the exact state, local, court, and supervision rules before you fall in love with a listing.",
            },
            {
              eyebrow: "Step 2",
              title: "Screen the address",
              icon: "🗺️",
              tone: "warning",
              description:
                "Check schools, parks, daycare sites, property lines, local ordinances, HOA rules, and household details.",
            },
            {
              eyebrow: "Step 3",
              title: "Communicate carefully",
              icon: "☎️",
              tone: "family",
              description:
                "Use calm, short scripts with landlords, officers, HOA managers, family helpers, and housing programs.",
            },
            {
              eyebrow: "Step 4",
              title: "Save proof",
              icon: "🗂️",
              tone: "success",
              description:
                "Keep written approvals, maps, applications, lease terms, and call notes in one housing compliance packet.",
            },
          ]}
        />

        <GuideSectionHeader
          id="rules-first"
          number="1"
          title="Know your restrictions before you search"
          subtitle="The address has to work for your actual legal and supervision situation, not just for the landlord."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              For people on sex offense registries, the first housing question is
              not “Can I afford this?” or “Will the landlord call me back?” Those
              questions matter, but they come after the compliance screen.
            </p>

            <p>
              Start by writing down the rules that could block an address. They
              may come from state law, county or city ordinances, probation,
              parole, federal supervised release, a court order, treatment rules,
              victim-contact restrictions, child-contact restrictions, internet
              or device conditions, or the policy of a shelter, landlord, HOA,
              public housing authority, transitional housing program, or
              manufactured-home community.
            </p>
          </GuideProse>

          <GuideIconList
            title="Questions to answer before you apply"
            description="Do not guess at these. A wrong assumption can cost money, housing, or compliance."
            columns={2}
            variant="cards"
            tone="legal"
            items={[
              {
                icon: "location",
                title: "What distance rule applies?",
                description:
                  "How far must the residence be from schools, parks, daycare centers, bus stops, playgrounds, victim addresses, or other restricted sites?",
              },
              {
                icon: "map",
                title: "How is distance measured?",
                description:
                  "Property line to property line? Door to door? Straight line? Walking route? Local practice can matter as much as the number.",
              },
              {
                icon: "gavel",
                title: "Who has approval power?",
                description:
                  "Registry office, probation, parole, federal supervision, a judge, treatment provider, local police, or more than one office?",
              },
              {
                icon: "home",
                title: "Who else lives there?",
                description:
                  "Children, protected persons, victims, unrelated roommates, schools nearby, daycare run from home, or family members with separate restrictions can change the answer.",
              },
              {
                icon: "wifiOff",
                title: "Do internet or device rules affect the home?",
                description:
                  "A lease that requires online portals, Wi-Fi, smart locks, cameras, or shared devices may create supervision issues for some people.",
              },
              {
                icon: "building",
                title: "Are there private rules?",
                description:
                  "HOA rules, condo rules, shelter policies, public housing rules, background-check policies, and lease clauses can block an address even when the map looks clear.",
              },
            ]}
          />

          <GuideCallout tone="warning" icon="⚠️" title="Do not rely on a map alone">
            <p>
              Online maps are useful for screening, but they are not the final
              answer. A few feet, a property-line issue, a newly opened daycare,
              or a local measurement rule can change the result. Use maps to
              narrow the search, then verify with the person or office that has
              authority over your address.
            </p>
          </GuideCallout>

          <VerifyBeforeActing
            title="Verify before you pay money or move in"
            whoToAsk={
              <span>
                Your supervising officer, registering agency, attorney, local law
                enforcement registry contact, housing authority, HOA manager,
                landlord, or other office with actual authority over the specific
                address.
              </span>
            }
            whatToAsk={
              <span>
                “I am considering living at [full address and unit number]. Under
                my current registry, supervision, court, and local rules, is this
                specific address allowed? How is distance measured, and do I need
                written approval before signing or moving in?”
              </span>
            }
            whatToSave={
              <span>
                Save the staff name, title, department, date, phone number or
                email, exact answer, maps used, distance method, and any written
                approval or denial.
              </span>
            }
          />
        </GuideSectionCard>
<GuideSectionHeader
          id="search-strategy"
          number="2"
          title="Build a search strategy that fits registry life"
          subtitle="A strong search is wider than rental websites and more careful than ordinary apartment hunting."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Many people waste weeks applying for places that were never
              realistic. The better approach is to search in layers: identify
              possible zones, screen addresses quickly, contact landlords
              carefully, and move the best candidate into verification.
            </p>

            <p>
              Families can help without taking over. A housing scout can search
              listings, print maps, call about availability, collect
              applications, and prepare address packets while the person under
              supervision focuses on compliance, treatment, work, and required
              appointments.
            </p>
          </GuideProse>

          <GuideIconList
            title="Where to look beyond the obvious listings"
            columns={2}
            variant="rows"
            tone="reentry"
            items={[
              {
                icon: "search",
                title: "Online listings",
                description:
                  "Zillow, Apartments.com, Facebook Marketplace, local newspaper classifieds, property management sites, and small landlord pages.",
              },
              {
                icon: "car",
                title: "Yard signs and neighborhood drives",
                description:
                  "Private owners often use signs instead of websites. Drive pre-screened zones and write down addresses and phone numbers.",
              },
              {
                icon: "library",
                title: "Community boards",
                description:
                  "Libraries, grocery stores, laundromats, reentry groups, treatment providers, faith communities, and local nonprofits may know small landlords.",
              },
              {
                icon: "family",
                title: "Support networks",
                description:
                  "Case managers, public defenders, family members, reentry groups, faith volunteers, and formerly incarcerated peers may know realistic options.",
              },
              {
                icon: "building",
                title: "Older or smaller properties",
                description:
                  "Small landlords may be more willing to hear context than large automated screening systems, though they still need honest, careful communication.",
              },
              {
                icon: "map",
                title: "Lower-conflict search zones",
                description:
                  "Rural edges, industrial areas, and older neighborhoods may have fewer restricted sites nearby, but every address still needs verification.",
              },
            ]}
          />

          <SoftDivider label="Use address screening before application screening" />

          <GuideChecklist
            id="address-screening"
            title="Address pre-screen checklist"
            columns={1}
            items={[
              {
                id: "full-address",
                label:
                  "Write the full address, unit number, landlord name, and listing source.",
              },
              {
                id: "nearby-sites",
                label:
                  "Search nearby schools, parks, daycare centers, playgrounds, bus stops, and any other restricted places named in your rules.",
              },
              {
                id: "local-ordinance",
                label:
                  "Check whether the city or county has a local residency ordinance beyond state law.",
              },
              {
                id: "distance-method",
                label:
                  "Note how distance appears to be measured and whether your authority uses a different method.",
              },
              {
                id: "household",
                label:
                  "List household members, ages, roommates, shared spaces, devices, internet access, and any child-contact or victim-contact issues.",
              },
              {
                id: "lease-private-rules",
                label:
                  "Review lease terms, HOA rules, condo rules, public housing rules, shelter rules, manufactured-home community rules, or property management policies.",
              },
              {
                id: "approval-needed",
                label:
                  "Ask whether written officer, registry office, or court approval is required before signing, paying, or moving.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="documents"
          number="3"
          title="Create a housing compliance packet"
          subtitle="A good packet turns panic into a task list and helps officers, landlords, family helpers, and advocates understand the address."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Keep one folder labeled <strong>HOUSING COMPLIANCE</strong>. Paper
              is fine. A notes app folder is fine. The point is to keep proof in
              one place so you are not relying on memory when a landlord calls
              back, an officer asks for details, or a question comes up after you
              move.
            </p>
          </GuideProse>

          <DocumentPacket
            title="HOUSING COMPLIANCE folder"
            intro={
              <span>
                Save the documents that show what the address is, why you believe
                it may be compliant, who you asked, and what they said.
              </span>
            }
            categories={[
              {
                title: "Address and map records",
                items: [
                  "Full address, unit number, landlord or property manager contact, listing link or printed listing, and proposed move-in date.",
                  "Maps showing nearby schools, parks, daycare centers, playgrounds, bus stops, victim-address restrictions, or other restricted sites.",
                  "Distance notes, screenshots, county GIS printouts, school locator results, and any official measurement guidance.",
                ],
              },
              {
                title: "Rules and approval records",
                items: [
                  "Your registry requirements, supervision conditions, court orders, local ordinance notes, treatment rules, and device or internet restrictions.",
                  "Officer, registry office, attorney, agency, HOA, shelter, or housing authority emails approving, denying, or explaining the address.",
                  "Names, dates, departments, phone numbers, and exact instructions from every important call.",
                ],
              },
              {
                title: "Application and household records",
                items: [
                  "Government ID, proof of income, benefits letters, employment verification, references, rental history, and application receipts.",
                  "Names and ages of household members, roommate information, pets, vehicles, parking needs, and any household safety plan required by supervision.",
                  "Lease, guest rules, internet plan, smart-device information, HOA documents, condo rules, public housing rules, manufactured-home community rules, and landlord screening terms.",
                ],
              },
            ]}
          />

          <GuideCallout tone="family" icon="👥" title="For family housing scouts">
            <p>
              Your job is not to promise that an address is legal. Your job is to
              find possible addresses, collect facts, print or save documents,
              and help the person ask the right authority for approval. Avoid
              telling landlords, officers, relatives, neighbors, or online groups
              more than they need to answer the housing question.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="landlords-and-disclosure"
          number="4"
          title="Communicate with landlords, officers, and HOAs carefully"
          subtitle="Be honest where needed, strategic about timing, and focused on the address question."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Disclosure is not one-size-fits-all. Some landlords ask directly
              about criminal history or run background checks. Some do not. Some
              supervision conditions require officer involvement before you can
              sign. Some housing programs have their own rules. The safer
              approach is to answer direct questions truthfully, avoid
              unnecessary details, and focus on stability, compliance,
              references, and the specific address.
            </p>

            <p>
              If you are unsure whether a question must be answered, whether a
              denial is lawful, or whether a housing provider is applying a
              policy incorrectly, ask a qualified attorney, legal aid office,
              housing counselor, or reentry advocate before escalating.
            </p>
          </GuideProse>

          <ScriptBox
            title="Landlord intro: text, voicemail, or email"
            tone="neutral"
            context="Use when disclosure is necessary or strategically better before a background check surprise. Keep it short and focused on stability."
            script={`Hello, my name is [Name]. I am interested in the unit at [address]. I have stable income, references, and can move [date].

I do have a past offense and am on the registry. I follow all rules, and I am checking this specific address for compliance before moving forward. I can provide references and, if required, confirmation that the address has been reviewed.

Is the unit still available, and what is the next step to apply?`}
          />

          <ScriptBox
            title="Officer approval request"
            tone="legal"
            context="Use before signing, paying a deposit, or moving when supervision approval may be required."
            script={`Hello [Officer Name],

I am seeking approval to reside at [full address and unit number]. The landlord/property contact is [name and phone/email]. Proposed move-in date is [date].

Initial screening notes:
- Nearest restricted site I identified: [site name/address]
- Estimated distance: [distance and method used]
- Household members/ages: [list]
- Internet/devices: [plan]
- Work schedule/curfew plan: [summary]
- HOA/lease/public housing/manufactured-home community rules: [summary if applicable]

Please let me know whether this address is approved, denied, or whether you need additional documentation before I sign or pay money. I would appreciate written confirmation for my housing compliance folder.

Thank you,
[Name]`}
          />

          <ScriptBox
            title="HOA or condo confirmation email"
            tone="warning"
            context="Use before renting or buying in an HOA, condo, co-op, manufactured-home community, or deed-restricted property."
            script={`Hello,

I am considering living at [address/unit]. Before I sign anything, I need to confirm whether association rules, occupancy rules, guest rules, background-check policies, pool/playground rules, lease restrictions, or community rules would prohibit or limit my occupancy based on registry status.

Can you please confirm in writing whether the association or community has any rule that would prevent me from living at this address or create a conflict with local residency restrictions?

Thank you,
[Name]`}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Share enough to answer the question, not your whole life story">
            <p>
              Housing conversations can become emotional. Keep your explanation
              calm and limited. You usually need to discuss eligibility,
              compliance, income, references, move-in timing, and household
              details. You usually do not need to give graphic facts, argue about
              the registry, or disclose information unrelated to the housing
              decision.
            </p>
          </GuideCallout>
        </GuideSectionCard>
<GuideSectionHeader
          id="special-situations"
          number="5"
          title="Special situations: buying, HOAs, supervision, and limited internet"
          subtitle="Some housing options need extra checks before they are safe to rely on."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Buying a home, moving into an HOA, using a shelter, living with
              family, renting a room, buying a manufactured home, placing an RV
              on land, or searching without internet can all work in some
              situations. The risk is assuming ordinary housing rules are the
              only rules. For registry-specific housing, private rules and
              supervision practices often matter as much as the public listing.
            </p>
          </GuideProse>

          <GuideIconList
            title="Extra checks for higher-risk housing decisions"
            columns={2}
            variant="cards"
            tone="warning"
            items={[
              {
                icon: "home",
                title: "Buying a home",
                description:
                  "Pre-clear the address before making an offer when possible. Consider a contract contingency tied to confirmation of registry and supervision compliance.",
              },
              {
                icon: "building",
                title: "HOA, condo, or manufactured-home community",
                description:
                  "Ask for CC&Rs, rules and regulations, background-check policies, guest rules, pool/playground rules, lease restrictions, and written confirmation.",
              },
              {
                icon: "housing",
                title: "Manufactured, modular, tiny-home, or RV options",
                description:
                  "These can lower costs, but zoning, hookups, lot rules, park rules, HOA restrictions, mailbox/address rules, and supervision approval still matter.",
              },
              {
                icon: "family",
                title: "Living with family",
                description:
                  "Check children in the home, victim-contact rules, household devices, internet access, bedroom layout, school bus stops, and whether the family member’s lease allows it.",
              },
              {
                icon: "door",
                title: "Room rentals and roommates",
                description:
                  "Ask about shared spaces, children, guests, Wi-Fi, devices, lease subletting rules, background checks, and whether the landlord knows about all occupants.",
              },
              {
                icon: "reentry",
                title: "Shelter or transitional housing",
                description:
                  "Call first. Some shelters, sober homes, recovery homes, halfway houses, and transitional programs have registry exclusions or location restrictions.",
              },
            ]}
          />

          <OfflineOptions
            title="If internet access is limited or restricted"
            icon="📵"
            note={
              <span>
                Many people on registries cannot safely or legally browse freely.
                A phone-first and paper-first search can still work.
              </span>
            }
            items={[
              "Designate a housing scout: a family member, friend, caseworker, public defender social worker, reentry worker, or faith volunteer who can search, print, and organize listings.",
              "Ask the scout to create a call sheet with address, rent, deposit, landlord contact, nearby restricted sites, listing source, and questions to ask.",
              "Drive pre-screened neighborhoods and call numbers on yard signs instead of relying only on online listings.",
              "Ask libraries, reentry groups, legal aid offices, shelters, treatment providers, or faith communities whether they can print listings or forms.",
              "If supervision restricts devices, ask your officer whether a limited housing-search plan, approved helper, basic phone, or printed packet process is allowed.",
            ]}
          />

          <GuideChecklist
            id="before-signing"
            title="Before signing, paying, or moving"
            columns={1}
            items={[
              {
                id: "rules-printed",
                label:
                  "Your registry, court, supervision, local, and private housing rules are printed or saved.",
              },
              {
                id: "distance-confirmed",
                label:
                  "Distance and restricted-site issues have been checked using the best official tools available.",
              },
              {
                id: "approval-written",
                label:
                  "Officer, registry office, housing authority, HOA, or other required approval is saved in writing when possible.",
              },
              {
                id: "lease-reviewed",
                label:
                  "Lease, guest rules, internet/device issues, background-check language, and vague eviction clauses have been reviewed.",
              },
              {
                id: "household-reviewed",
                label:
                  "Household members, children, roommates, guests, devices, pets, parking, and bedroom layout have been considered.",
              },
              {
                id: "money-risk",
                label:
                  "Application fee, deposit, moving costs, and nonrefundable payments are delayed until the address has been screened.",
              },
              {
                id: "backup-address",
                label:
                  "A backup address, shelter option, family plan, or short-term emergency plan has been identified if approval fails.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes"
          number="6"
          title="Common mistakes that create housing trouble"
          subtitle="Most mistakes happen because people are scared, rushed, or relying on verbal answers."
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Applying everywhere before checking restrictions.",
                whyItMatters:
                  "Application fees, background checks, and landlord contacts can pile up quickly while none of the addresses are actually usable.",
                betterMove:
                  "Screen the address first, then apply to the best candidates.",
              },
              {
                mistake: "Assuming state law is the only rule.",
                whyItMatters:
                  "Local ordinances, supervision conditions, treatment rules, HOA rules, shelter policies, or lease terms can still block the address.",
                betterMove:
                  "Check state, local, supervision, court, and private rules before relying on the listing.",
              },
              {
                mistake: "Trusting a verbal approval without notes.",
                whyItMatters:
                  "A later officer, landlord, registry clerk, or property manager may not know what was said.",
                betterMove:
                  "Write down the name, date, department, and exact answer. Ask for email confirmation when possible.",
              },
              {
                mistake: "Using Google Maps as the final authority.",
                whyItMatters:
                  "A map can miss property-line rules, local measurement methods, daycare changes, school boundaries, or official agency practice.",
                betterMove:
                  "Use maps for screening, then verify the specific address with the authority that can approve or reject it.",
              },
              {
                mistake: "Signing or paying before officer or registry approval.",
                whyItMatters:
                  "A denied address can leave you without housing and without the money needed for the next application.",
                betterMove:
                  "Delay nonrefundable payments when possible until approval is confirmed.",
              },
              {
                mistake: "Oversharing with landlords or neighbors.",
                whyItMatters:
                  "Unnecessary detail can increase stigma, confusion, gossip, or safety risk without helping the housing decision.",
                betterMove:
                  "Answer direct questions truthfully, keep the explanation brief, and focus on compliance, income, references, and stability.",
              },
              {
                mistake: "Letting family promise more than they can afford.",
                whyItMatters:
                  "Co-signing, extra deposits, or paying rent in two places can harm the whole household if the address is denied.",
                betterMove:
                  "Verify first, then decide what financial help is realistic and sustainable.",
              },
            ]}
          />

          <GuideCallout tone="success" icon="✅" title="Three reminders worth keeping">
            <p>
              <strong>Speed beats perfection:</strong> get one realistic address
              into the approval process instead of endlessly searching for the
              perfect place.
            </p>
            <p>
              <strong>Paper beats promises:</strong> keep rules, maps, approvals,
              denials, and call notes in your housing compliance folder.
            </p>
            <p>
              <strong>People help people:</strong> a housing scout, two strong
              references, and one calm landlord conversation may do more than a
              dozen online applications.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="7"
          title="Resources and next steps"
          subtitle="Use official sources where possible, and verify local rules before relying on any general guide."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Housing, legal, and emergency support"
            description={
              <span>
                These links are starting points. They do not replace checking
                your own registry, supervision, court, local housing, HOA,
                shelter, landlord, or public housing rules.
              </span>
            }
            resources={[
              {
                label: "211 local resource finder",
                href: sourceLinks.unitedWay211,
                badge: "Directory",
                description:
                  "Search or call for local emergency housing, shelter, utility, food, transportation, and reentry-related referrals.",
              },
              {
                label: "CFPB housing counselor search",
                href: sourceLinks.cfpbHousingCounselor,
                badge: "Official",
                description:
                  "Find HUD-approved housing counselors for rental, homebuying, foreclosure, credit, and related housing questions.",
              },
              {
                label: "HUD housing counselor locator",
                href: sourceLinks.hudFindCounselor,
                badge: "Official",
                description:
                  "HUD’s direct locator for participating housing counseling agencies.",
              },
              {
                label: "USAGov housing help",
                href: sourceLinks.usaGovHousingHelp,
                badge: "Official",
                description:
                  "Federal starting point for emergency housing, rental assistance, homebuying assistance, tenant rights, and related programs.",
              },
              {
                label: "HUD report housing discrimination",
                href: sourceLinks.hudReportHousingDiscrimination,
                badge: "Official",
                description:
                  "Federal page for reporting possible housing discrimination online, by phone, or by mail.",
              },
              {
                label: "Legal Services Corporation legal help finder",
                href: sourceLinks.lscLegalHelp,
                badge: "Legal aid",
                description:
                  "Find civil legal aid programs for housing, benefits, consumer, family, and other noncriminal legal issues.",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Reentry Planning Guide",
                description:
                  "Use alongside this guide when housing is part of a broader release, supervision, work, transportation, and documentation plan.",
                to: "/resources/reentry-planning",
              },
              {
                title: "Employment After Conviction",
                description:
                  "Stable income and references can make the housing search stronger, especially with small landlords.",
                to: "/resources/employment-after-conviction",
              },
              {
                title: "Family Support Guide",
                description:
                  "Helpful for spouses, parents, adult children, and trusted friends serving as housing scouts or emergency support.",
                to: "/resources/family-support",
              },
            ]}
          />

          <SourceList
            title="Sources and verification"
            note={
              <span>
                Links were checked for live access before publication. State,
                county, city, registry, supervision, HOA, shelter, public
                housing, landlord, and manufactured-home community rules still
                need local verification before use in a specific case.
              </span>
            }
            sources={[
              {
                label: "United Way 211",
                href: sourceLinks.unitedWay211,
                description:
                  "Local referral network for housing, utility, food, crisis, and community support.",
              },
              {
                label: "Consumer Financial Protection Bureau housing counselor finder",
                href: sourceLinks.cfpbHousingCounselor,
                description:
                  "Search tool for HUD-approved housing counseling agencies.",
              },
              {
                label: "HUD housing counselor locator",
                href: sourceLinks.hudFindCounselor,
                description:
                  "HUD’s direct locator for participating housing counseling agencies.",
              },
              {
                label: "USAGov housing help",
                href: sourceLinks.usaGovHousingHelp,
                description:
                  "Federal plain-language housing assistance overview.",
              },
              {
                label: "HUD report housing discrimination",
                href: sourceLinks.hudReportHousingDiscrimination,
                description:
                  "Federal page for reporting possible housing discrimination.",
              },
              {
                label: "Legal Services Corporation legal help",
                href: sourceLinks.lscLegalHelp,
                description:
                  "Directory-style starting point for finding civil legal aid.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}