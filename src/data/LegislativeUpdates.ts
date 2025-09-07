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
    date: '2025-09-06',
    title: 'Legislative Update — Sept 6, 2025',
    slug: '2025-09-06',
    summary: 'Federal committee hearing on X; State Y advances bill Z; notable appellate ruling ABC with potential nationwide implications.',
    tags: ['federal','states','cases']
  },
  // Add new weekly objects here going forward (any position is fine).
];
