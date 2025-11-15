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
  date: "November 16, 2025",
  title: "Arizona Court Upholds Lifetime Registration; Massachusetts Conducts Enforcement Sweep",
  slug: "2025-11-16",
  summary: "Federal court in Arizona sustains lifetime registration and online-identifier rules; Massachusetts announces Operation Firewall, arresting 56 including 7 for registration violations.",
},
{
  date: "November 9, 2025",
  title: "Illinois Clean Slate Act Advances; Texas Updates Registration Guidance",
  slug: "2025-11-09",
  summary: "Illinois Clean Slate Act heads to governor; Texas issues 10-year registration guidance; Cicero Institute highlights SORNA compliance trends.",
},
{
  date: "November 2, 2025",
  title: "Colorado Court Weighs Lifetime Registration; Texas County Issues Halloween Advisory",
  slug: "2025-11-02",
  summary: "Colorado Supreme Court reviews whether lifetime registration is punitive; El Paso County (TX) releases Halloween safety advisory.",
},
{
  date: "October 26, 2025",
  title: "Federal SORNA Duty Ruling and Arkansas Halloween Restrictions Dominate Registry News",
  slug: "2025-10-26",
  summary: "9th Circuit affirms federal registration duty in U.S. v. McGee as Arkansas launches pre-Halloween presence-zone enforcement and DOJ leads D.C. compliance sweep.",
},
{
  date: "October 19, 2025",
  title: "Audit Findings, Fee Lawsuit & Compliance Operations Mark This Week",
  slug: "2025-10-19",
  summary: "West Virginia faces a federal challenge over registry fees, Michigan’s audit reveals oversight flaws, and federal compliance sweeps intensify enforcement.",
},
{
  date: "October 12, 2025",
  title: "Michigan SORA stay denied; Florida HB 1351 effective; Georgia registry sweep; Maryland audit uncovers oversight issues",
  slug: "2025-10-12",
  summary: "A federal judge denied Michigan’s stay motion in *Does v. Whitmer*, Florida’s HB 1351 becomes enforceable with expanded verification and reporting requirements, Georgia’s statewide registry sweep led to dozens of arrests and warrants, and a Maryland audit reveals children placed where registered offenders reside.",
},
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
