export type ResearchSourceId = `SE${string}`;

export type ResearchSourceRecord = {
  title: string;
  organization: string;
  type: string;
  href: string;
  usefulFor: string;
};

export type ResearchPositionRecord = {
  id: string;
  title: string;
  body: string;
  icon: string;
  overviewTitle: string;
  sourceIds: ResearchSourceId[];
};

export type ResearchSourceGroup = {
  title: string;
  description: string;
  ids: ResearchSourceId[];
};
