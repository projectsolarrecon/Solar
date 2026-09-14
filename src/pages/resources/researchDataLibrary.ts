import { researchDataSources1 } from "./researchDataSources1";
import { researchDataSources2 } from "./researchDataSources2";
import { researchDataSources3 } from "./researchDataSources3";
import { researchDataSources4 } from "./researchDataSources4";
import type { ResearchPositionRecord, ResearchSourceGroup, ResearchSourceId, ResearchSourceRecord } from "./researchDataTypes";

export type { ResearchSourceId } from "./researchDataTypes";

export const sourceCatalog: Record<ResearchSourceId, ResearchSourceRecord> = {
  ...researchDataSources1,
  ...researchDataSources2,
  ...researchDataSources3,
  ...researchDataSources4,
};

export const positions: ResearchPositionRecord[] = [
  {
    id: "registry-effectiveness",
    title: "The sex offender registry system is ineffective and rooted in misinformation.",
    body: "Decades of research have not shown that broad registry systems reduce sexual offending. The vast majority of sexual offenses are committed by people not on a registry, and recidivism among people convicted of sex offenses is substantially lower than public rhetoric often suggests.",
    icon: "📊",
    overviewTitle: "The registry does not deliver what it promises",
    sourceIds: ["SE01", "SE02", "SE03", "SE04", "SE05", "SE31", "SE29", "SE30"],
  },
  {
    id: "community-safety",
    title: "Registry policies can make communities less safe.",
    body: "Policies that destabilize housing, employment, treatment, and family support can undermine the conditions that support successful reentry. Research also suggests that broad public notification can increase recidivism, challenging the assumption that more exposure necessarily means more safety.",
    icon: "🛡️",
    overviewTitle: "Some registry mechanisms can work against safety",
    sourceIds: ["SE03", "SE04", "SE06", "SE08", "SE09", "SE23", "SE24"],
  },
  {
    id: "relationship-access",
    title: "Sexual harm to children is primarily a relationship-and-access problem, not a stranger-location problem.",
    body: "Most reported child sexual abuse is committed by someone the child knows. Prevention therefore requires attention to family and trusted-access relationships—including teachers, coaches, clergy, and community leaders—not just the locations of people already on a public registry.",
    icon: "🧭",
    overviewTitle: "Child safety requires looking at relationships and access",
    sourceIds: ["SE11", "SE12", "SE13", "SE14", "SE25"],
  },
  {
    id: "lifelong-branding",
    title: "Other serious harms are addressed without lifelong public branding.",
    body: "Nearly every other serious harm to children is addressed through prevention, regulation, treatment, and ordinary sentence-bound accountability—not lifelong public branding.",
    icon: "🧩",
    overviewTitle: "Permanent public branding is an exceptional response",
    sourceIds: ["SE01", "SE15", "SE16", "SE17", "SE21"],
  },
  {
    id: "punitive-practice",
    title: "Registries are punitive in practice, not merely administrative.",
    body: "Public exposure, recurring reporting, residence, proximity, employment, and other restrictions can persist long beyond the original sentence, functioning as continuing punishment in everyday life and raising serious questions of due process, proportionality, and fairness.",
    icon: "⚖️",
    overviewTitle: "Registries punish in practice",
    sourceIds: ["SE10", "SE18", "SE19", "SE20", "SE27", "SE28"],
  },
  {
    id: "family-children",
    title: "Registry systems punish families and children too.",
    body: "Public identification, housing and employment barriers, and other restrictions can destabilize entire households. Spouses and children who committed no offense can face financial strain, forced moves, stigma, harassment, isolation, and lost opportunities of their own.",
    icon: "👪",
    overviewTitle: "The burden reaches spouses and children",
    sourceIds: ["SE06", "SE07", "SE08", "SE10", "SE24", "SE26"],
  },
  {
    id: "individualized-risk",
    title: "One-size-fits-all registry laws are fundamentally flawed.",
    body: "Universal requirements, restrictions, and labels ignore major differences among cases, people, time elapsed, conduct, treatment, and actual risk. Policy should be individualized, reviewable, and evidence-based.",
    icon: "🌱",
    overviewTitle: "Risk is individual and changes over time",
    sourceIds: ["SE02", "SE21", "SE22", "SE32", "SE33", "SE34", "SE23", "SE29", "SE30"],
  },
  {
    id: "permanent-underclass",
    title: "Registries create a permanent underclass.",
    body: "They erect formidable barriers to housing, employment, education, financial services, and community participation, stripping many people of the basic tools needed to rebuild their lives and reintegrate safely.",
    icon: "🚪",
    overviewTitle: "Permanent status creates durable exclusion",
    sourceIds: ["SE06", "SE07", "SE08", "SE09", "SE10", "SE24", "SE26"],
  },
  {
    id: "measurable-outcomes",
    title: "Public-safety policy should be judged by measurable outcomes, not presumed benefits.",
    body: "The seriousness of sexual harm does not make every intervention imposed in its name effective. Registration, public notification, supervision, treatment, and other interventions should be evaluated according to what they actually accomplish, whom they affect, and whether their demonstrated benefits justify their burdens.",
    icon: "📐",
    overviewTitle: "Measure outcomes instead of assuming benefits",
    sourceIds: ["SE03", "SE04", "SE05", "SE06", "SE20", "SE21"],
  },
];

export const anchorSourceIds: ResearchSourceId[] = [
  "SE03",
  "SE04",
  "SE01",
  "SE11",
  "SE06",
  "SE07",
  "SE18",
  "SE21",
  "SE22",
  "SE29",
  "SE14",
];

export const sourceGroups: ResearchSourceGroup[] = [
  {
    title: "Registry effectiveness and policy mechanisms",
    description: "Research on whether registration and notification reduce harm, how different SORN mechanisms operate, whether the public uses registry information as assumed, and how implementation affects utility.",
    ids: ["SE03", "SE04", "SE05", "SE20", "SE31", "SE40", "SE42", "SE43", "SE44", "SE48", "SE49", "SE50", "SE51", "SE52"],
  },
  {
    title: "Recidivism, repeat offending, and offense patterns",
    description: "Official and peer-reviewed evidence on detected sexual recidivism, first-time versus repeat offending, offense specialization, follow-up periods, and comparisons across release groups.",
    ids: ["SE01", "SE02", "SE29", "SE30", "SE35", "SE36", "SE37", "SE38", "SE39", "SE40", "SE41", "SE53", "SE54", "SE55"],
  },
  {
    title: "Child safety, relationships, and trusted access",
    description: "Sources on who harms children, family and acquaintance relationships, trusted-access settings, institutional failures, and prevention strategies that reach beyond public address lists.",
    ids: ["SE11", "SE12", "SE13", "SE14", "SE25"],
  },
  {
    title: "Collateral consequences, housing, families, and reintegration",
    description: "Research and reporting on housing, employment, family spillover, residence restrictions, displacement, stigma, transience, and the stability conditions that support successful reentry.",
    ids: ["SE06", "SE07", "SE08", "SE09", "SE10", "SE24", "SE26", "SE45", "SE46", "SE47", "SE48"],
  },
  {
    title: "Risk assessment, desistance, and treatment",
    description: "Research on heterogeneity, age, time offense-free, actuarial and dynamic tools, calibration, CSEM-specific assessment, treatment, and evidence-based individualized decision-making.",
    ids: ["SE02", "SE21", "SE22", "SE23", "SE29", "SE30", "SE32", "SE33", "SE34", "SE35", "SE53", "SE54", "SE55", "SE56", "SE57", "SE58", "SE59", "SE60", "SE61", "SE62", "SE63", "SE64", "SE65", "SE66"],
  },
  {
    title: "Law, constitutional doctrine, and punitive effects",
    description: "Court decisions, government legal summaries, and legal scholarship on civil versus punitive classification, constitutional limits, exclusion, residence restrictions, and modern registry burdens.",
    ids: ["SE18", "SE19", "SE20", "SE27", "SE28", "SE67"],
  },
  {
    title: "Comparative harms and alternative public-safety responses",
    description: "Official sources showing how other serious and recurring harms are measured and addressed through prevention, regulation, technology, treatment, enforcement, and ordinary criminal accountability.",
    ids: ["SE15", "SE16", "SE17"],
  },
];
