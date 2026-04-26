// src/data/legislativeUpdates.ts
// Small, human-editable archive list.
// The hub page sorts by `slug` first, then `date`, so keep slugs in YYYY-MM-DD format.
// New monthly updates can be added at the top for readability, but exact position is not required.

export type LegislativeUpdateMeta = {
  date: string;     // Display date, e.g., "December 7, 2025"
  title: string;    // Display title
  slug: string;     // URL segment after /resources/legislative-tracker/; use YYYY-MM-DD
  summary: string;  // 1–2 sentence teaser for the hub archive card
  tags?: string[];  // Optional, e.g., ["federal", "state", "courts", "action"]
};

export const legislativeUpdates: LegislativeUpdateMeta[] = [
{
  date: "February 1, 2026",
  title: "Legislative Tracker — January 2026 Update",
  slug: "2026-02-01",
  summary:
    "January’s registry-policy activity leaned toward restriction expansion, with major developments involving residency limits, online identifiers, supervision, tiering, juvenile registry access, and new registration triggers.",
  tags: ["federal", "state", "courts", "implementation"],
},
  {
    date: "December 7, 2025",
    title:
      "Epstein Transparency Orders Begin; Clean Slate Coverage Exposes Registrants’ Exclusion",
    slug: "2025-12-07",
    summary:
      "A federal court order begins implementation of the Epstein Files Transparency Act as Congress presses DOJ for compliance, while Illinois Clean Slate coverage highlights how record-relief reforms still exclude people required to register.",
    tags: ["federal", "courts", "state", "records relief"],
  },
  {
    date: "November 30, 2025",
    title: "Cohen’s SORNA Sentencing and New York’s Level-3 Upward Departure",
    slug: "2025-11-30",
    summary:
      "Federal and New York appellate courts expand registry-related penalty reach, underscoring how registration duties and risk-level decisions can continue shaping punishment long after the original case.",
    tags: ["federal", "courts", "SORNA", "New York"],
  },
  {
    date: "November 22, 2025",
    title:
      "Arizona Court Upholds Registry; Congress Advances Epstein Files Transparency Act",
    slug: "2025-11-23",
    summary:
      "Arizona federal court sustains the state registry law while Congress advances a transparency bill on Epstein-related DOJ files, pairing registry litigation with national oversight politics.",
    tags: ["courts", "Arizona", "federal", "transparency"],
  },
  {
    date: "November 16, 2025",
    title:
      "Arizona Court Upholds Lifetime Registration; Massachusetts Conducts Enforcement Sweep",
    slug: "2025-11-16",
    summary:
      "Federal court in Arizona sustains lifetime registration and online-identifier rules, while Massachusetts announces Operation Firewall, including arrests tied to registration violations.",
    tags: ["courts", "Arizona", "Massachusetts", "enforcement"],
  },
  {
    date: "November 9, 2025",
    title: "Illinois Clean Slate Act Advances; Texas Updates Registration Guidance",
    slug: "2025-11-09",
    summary:
      "Illinois Clean Slate legislation moves toward enactment while Texas issues updated 10-year registration guidance, highlighting both relief reform and continued compliance complexity.",
    tags: ["Illinois", "Texas", "records relief", "compliance"],
  },
  {
    date: "November 2, 2025",
    title: "Colorado Court Weighs Lifetime Registration; Texas County Issues Halloween Advisory",
    slug: "2025-11-02",
    summary:
      "Colorado Supreme Court considers whether lifetime registration is punitive, while El Paso County, Texas releases a Halloween safety advisory reflecting recurring seasonal enforcement themes.",
    tags: ["Colorado", "Texas", "courts", "enforcement"],
  },
  {
    date: "October 26, 2025",
    title: "Federal SORNA Duty Ruling and Arkansas Halloween Restrictions Dominate Registry News",
    slug: "2025-10-26",
    summary:
      "The Ninth Circuit affirms a federal registration-duty ruling in United States v. McGee as Arkansas launches pre-Halloween presence-zone enforcement and DOJ leads a D.C. compliance sweep.",
    tags: ["federal", "SORNA", "Arkansas", "enforcement"],
  },
  {
    date: "October 19, 2025",
    title: "Audit Findings, Fee Lawsuit, and Compliance Operations Mark This Update",
    slug: "2025-10-19",
    summary:
      "West Virginia faces a federal challenge over registry fees, Michigan audit findings reveal oversight problems, and federal compliance operations continue to intensify enforcement pressure.",
    tags: ["West Virginia", "Michigan", "fees", "enforcement"],
  },
  {
    date: "October 12, 2025",
    title:
      "Michigan SORA Stay Denied; Florida HB 1351 Effective; Georgia Sweep; Maryland Audit",
    slug: "2025-10-12",
    summary:
      "A federal judge denies Michigan’s stay motion in Does v. Whitmer, Florida’s HB 1351 becomes enforceable with expanded verification and reporting requirements, Georgia announces a statewide registry sweep, and Maryland audit findings raise oversight concerns.",
    tags: ["Michigan", "Florida", "Georgia", "Maryland"],
  },
  {
    date: "October 5, 2025",
    title: "New York Buffer Proposal; SMART Grant Opens; Delaware Issues Enforcement Alert",
    slug: "2025-10-05",
    summary:
      "Rensselaer County spurs a New York buffer-zone proposal, the SMART Office releases a FY 2025 SORNA grant notice, and Delaware’s SOAR unit issues a non-compliance alert.",
    tags: ["New York", "federal", "Delaware", "SORNA"],
  },
  {
    date: "September 28, 2025",
    title: "Registry Expansion in Texas, Oklahoma Residency Ruling, and Maryland Oversight Audit",
    slug: "2025-09-28",
    summary:
      "Texas HB 1465 moves into enforcement, the Oklahoma Supreme Court upholds a retroactive residency restriction, and Maryland audit findings expose registry-related foster-care oversight failures.",
    tags: ["Texas", "Oklahoma", "Maryland", "residency"],
  },
  {
    date: "September 21, 2025",
    title: "Maryland Audit Exposes Registry Gaps; California and Texas Push Changes",
    slug: "2025-09-21",
    summary:
      "Maryland audit findings raise concerns about children placed in homes with registered people, while California and Texas policy changes keep registry reform and expansion in motion.",
    tags: ["Maryland", "California", "Texas", "oversight"],
  },
  {
    date: "September 14, 2025",
    title:
      "Registry Reform Moves in California and Michigan; Texas Enacts Visual Recording Registry Law",
    slug: "2025-09-14",
    summary:
      "California legislation targets a registration loophole, Michigan SB 424 amends SORA, and Texas HB 1465 adds invasive visual recording to registry-triggering offenses.",
    tags: ["California", "Michigan", "Texas", "legislation"],
  },
  {
    date: "September 7, 2025",
    title:
      "Texas Law Takes Effect; Wyoming Tightens Verification; New York Proposes School-Zone Ban",
    slug: "2025-09-07",
    summary:
      "Texas adds invasive visual recording to registry-triggering offenses, Wyoming tightens verification and limits removal, New York proposes a 1,350-foot school-zone housing ban, and Michigan litigation remains active.",
    tags: ["Texas", "Wyoming", "New York", "Michigan"],
  },
  {
    date: "August 30, 2025",
    title: "YTD 2025: Courts Narrow Relief, States Tinker with Tiers, Zones Expand",
    slug: "2025-08-30",
    summary:
      "Year-to-date roundup: courts split on registry challenges, states adjust tiering and definitions, presence-zone restrictions expand, Florida’s overhaul is signed, and USSC amendments approach their November 1 effective date.",
    tags: ["year-to-date", "courts", "states", "USSC"],
  },
  // Newest-first is preferred for readability, but the hub also sorts by slug.
  // Add future monthly updates above this line.
  // Older weekly entries remain as legacy archive items.
];