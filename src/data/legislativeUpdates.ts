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
  date: '2025-08-30',
  title: 'YTD 2025: Courts Narrow Relief, States Tinker with Tiers, Zones Expand',
  // replace the slug for the 2025-08-30 entry:
  slug: '2025-08-30',
  summary:
    'Year-to-date roundup: courts split on registry challenges, states tweak tiering/definitions, and presence-zone bans expand. Florida overhaul signed; USSC amendments effective Nov 1.',
},
  // Add new weekly objects here going forward (any position is fine).
];
