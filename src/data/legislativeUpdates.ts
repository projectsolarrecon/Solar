// src/data/legislativeUpdates.ts
// Small, human-editable list. Newest item can be anywhere in this array;
// the hub page sorts by date desc (YYYY-MM-DD).

export type LegislativeUpdateMeta = {
  date: string;     // 'YYYY-MM-DD' (used for sorting)
  title: string;    // Display title
  slug: string;     // URL segment after /resources/legislative-tracker/
  summary: string;  // 1–2 sentence teaser
  tags?: string[];  // optional, e.g., ['federal','state','cases']
};

export const legislativeUpdates: LegislativeUpdateMeta[] = [
{
  date: "October 5, 2025",
  title: "NY Pushes Statewide 1,500 ft Buffer; SMART FY 25 Grant Opens; Delaware Issues Enforcement Alert",
  slug: "2025-10-05",
  summary: "Rensselaer County spurs NY buffer proposal; SMART Office releases FY 25 SORNA grant NOFO; Delaware SOAR unit issues non-compliance alert.",
},
  {
  date: "September 28, 2025",
  title: "Registry Expansion in Texas, Oklahoma Residency Ruling, and Maryland Oversight Audit",
  slug: "2025-09-28",
  summary: "TX HB 1465 now enforced, OK Supreme Court upholds retroactive residency ban, and Maryland audit finds foster care registry oversight failures.",
},
  {
    date: "September 21, 2025",
    title: "Maryland Audit Exposes Registry Gaps; California and Texas Push Changes",
    slug: "2025-09-21",
    summary: "Audit finds offenders in foster homes, CA bill closes loophole, TX law now in force. Michigan reforms pending.",
  }, 
  {
  date: "September 14, 2025",
  title: "Registry Reform Moves in California & Michigan; Texas Enacts New Visual Recording Registry Law",
  slug: "2025-09-14",
  summary: "CA bill targets a registration loophole, Michigan SB 424 amends SORA, and Texas HB 1465 (invasive visual recording) is now in force. Includes scripts and action tools.",
},
  {
  date: '2025-09-07',
  title: 'TX law takes effect; WY tightens verification; NY proposes school-zone ban; MI stay denied',
  slug: '2025-09-07',
  summary:
    'Texas adds “invasive visual recording” to registry (effective Sept 1); Wyoming boosts verification and limits removal; New York proposes 1,350-ft school-zone housing ban; Michigan judge denies stay.',
},
  {
  date: '2025-08-30',
  title: 'YTD 2025: Courts Narrow Relief, States Tinker with Tiers, Zones Expand',
  // replace the slug for the 2025-08-30 entry:
  slug: '2025-08-30',
  summary:
    'Year-to-date roundup: courts split on registry challenges, states tweak tiering/definitions, and presence-zone bans expand. Florida overhaul signed; USSC amendments effective Nov 1.',
},
  // Add new weekly objects here going forward (any position is fine).
];
