export type AdvocacyRecipientId =
  | "state-lawmaker"
  | "federal-lawmaker"
  | "local-official"
  | "journalist";

export type AdvocacyPositionId =
  | "ineffective"
  | "lasting-harm"
  | "closer-to-home"
  | "inconsistent-danger"
  | "punitive"
  | "one-size-fits-all"
  | "permanent-underclass"
  | "recon";

export type AdvocacyFormatId =
  | "email"
  | "phone"
  | "letter"
  | "testimony"
  | "letter-to-editor";

export type AdvocacyPerspectiveId =
  | "directly-affected"
  | "family"
  | "professional"
  | "constituent"
  | "organization";

export type AdvocacyEvidenceDepth = "plain" | "supported";

export type AdvocacyRecipient = {
  id: AdvocacyRecipientId;
  label: string;
  shortLabel: string;
  description: string;
  icon: string;
  defaultAsk: string;
  lookupHref: string;
  lookupLabel: string;
  recommendedPositions: AdvocacyPositionId[];
};

export type AdvocacyPosition = {
  id: AdvocacyPositionId;
  title: string;
  summary: string;
  talkingPoint: string;
  evidencePoint: string;
  sourceIds: string[];
  lawmakerAsk: string;
  isCampaign?: boolean;
  helperText?: string;
  compatibleWith?: AdvocacyPositionId[];
};

export type AdvocacyFormat = {
  id: AdvocacyFormatId;
  label: string;
  description: string;
};

export type AdvocacyPerspective = {
  id: AdvocacyPerspectiveId;
  label: string;
  introduction: string;
};

export type AdvocacyPromptExamples = {
  specificAsk: string;
  personalContext: string;
};

export const researchResourceHref = "/resources/research-data-resources";

export const recipients: AdvocacyRecipient[] = [
  {
    id: "state-lawmaker",
    label: "State lawmaker",
    shortLabel: "State lawmaker",
    description: "Best for registry rules, duration, residency restrictions, public notification, relief, and state reentry barriers.",
    icon: "🏛️",
    defaultAsk: "Please support individualized, evidence-based reform and oppose blanket registry expansion.",
    lookupHref: "https://open.pluralpolicy.com/find_your_legislator/",
    lookupLabel: "Find your state legislators",
    recommendedPositions: ["ineffective", "punitive", "one-size-fits-all", "permanent-underclass", "recon"],
  },
  {
    id: "federal-lawmaker",
    label: "Member of Congress",
    shortLabel: "Congress",
    description: "Best for federal standards, funding incentives, agency oversight, national data, and federal supervision policy.",
    icon: "🇺🇸",
    defaultAsk: "Please require evidence, transparency, and individualized policy before expanding federal registry mandates.",
    lookupHref: "https://www.usa.gov/elected-officials",
    lookupLabel: "Find federal officials",
    recommendedPositions: ["ineffective", "lasting-harm", "punitive", "one-size-fits-all", "recon"],
  },
  {
    id: "local-official",
    label: "Local official",
    shortLabel: "Local official",
    description: "Best for ordinances, zoning, shelter access, local restrictions, public meetings, and implementation practices.",
    icon: "📍",
    defaultAsk: "Please reject local rules that increase homelessness or isolation without demonstrated safety benefits.",
    lookupHref: "https://www.commoncause.org/find-your-representative/",
    lookupLabel: "Find local officials",
    recommendedPositions: ["lasting-harm", "punitive", "one-size-fits-all", "permanent-underclass", "recon"],
  },
  {
    id: "journalist",
    label: "Journalist or editor",
    shortLabel: "Media",
    description: "Best for correcting misleading coverage, pitching overlooked stories, and improving public understanding.",
    icon: "📰",
    defaultAsk: "Please include evidence, individual context, and the real limits of public registries in your coverage.",
    lookupHref: "/contact",
    lookupLabel: "Ask SOLAR for source support",
    recommendedPositions: ["ineffective", "lasting-harm", "closer-to-home", "inconsistent-danger", "recon"],
  },
];

export const positions: AdvocacyPosition[] = [
  {
    id: "ineffective",
    title: "The registry system is ineffective, harmful, and rooted in misinformation.",
    summary: "Public policy should be measured by whether it prevents harm, not whether it creates the appearance of action.",
    talkingPoint: "I am concerned that public registries have not delivered the broad prevention benefits commonly claimed for them, while many offenses are committed by people who were not previously listed.",
    evidencePoint: "A 25-year meta-analysis found no statistically significant overall recidivism benefit from broad sex offense registration and notification policies.",
    sourceIds: ["SE03", "SE04"],
    lawmakerAsk: "Require credible evidence and outcome review before expanding registration or public-notification rules.",
  },
  {
    id: "lasting-harm",
    title: "Registry systems cause lasting harm to individuals, families, and communities.",
    summary: "Fear, isolation, harassment, family disruption, and housing instability are not neutral side effects.",
    talkingPoint: "I believe registry policy should account for its effects on spouses, children, parents, employers, and neighborhoods, especially when those effects undermine stable reintegration.",
    evidencePoint: "Research reviews link registry requirements and related restrictions to housing instability, employment barriers, stigma, family spillover harm, and reintegration problems.",
    sourceIds: ["SE06", "SE07", "SE24"],
    lawmakerAsk: "Include family and community impacts in every registry-policy review and fiscal analysis.",
  },
  {
    id: "closer-to-home",
    title: "The real risk to children often lies closer to home.",
    summary: "Prevention must focus on access, authority, grooming, disclosure, and institutional accountability—not only strangers on a map.",
    talkingPoint: "I believe child-safety policy should address harm by known and trusted people and strengthen prevention and reporting systems where abuse commonly occurs.",
    evidencePoint: "Official and prevention-oriented sources show that most sexual harms against children involve someone the child knows, including family members, acquaintances, caregivers, or trusted authority figures.",
    sourceIds: ["SE11", "SE12", "SE13", "SE25"],
    lawmakerAsk: "Invest in prevention, disclosure, institutional safeguards, and evidence-based child-protection practices.",
  },
  {
    id: "inconsistent-danger",
    title: "Other serious harms are addressed without lifelong public branding.",
    summary: "Registry policy applies permanent public exposure selectively while many other serious harms use sentence-bound accountability and ordinary reentry.",
    talkingPoint: "I believe government should explain why permanent public branding is treated as essential for one category of offense but not for other serious harms to children and communities.",
    evidencePoint: "Many major public-safety harms are managed through prevention, regulation, enforcement, treatment, technology, or service systems rather than permanent public identity branding.",
    sourceIds: ["SE12", "SE15", "SE16", "SE17"],
    lawmakerAsk: "Apply consistent public-safety principles and evaluate whether registry policy is proportionate and evidence-based.",
  },
  {
    id: "punitive",
    title: "Registries are punitive in practice, not merely administrative.",
    summary: "Public exposure, recurring reporting, restrictions, and collateral consequences operate as continuing punishment after sentence completion.",
    talkingPoint: "I do not think a policy should be treated as merely administrative when it imposes lifelong public consequences, recurring burdens, and barriers to ordinary civic life.",
    evidencePoint: "Modern layered restrictions can burden speech, movement, housing, association, and community participation in punishment-like ways.",
    sourceIds: ["SE18", "SE19", "SE27", "SE28"],
    lawmakerAsk: "Provide due process, proportionality, review, and meaningful relief from continuing registry burdens.",
  },
  {
    id: "one-size-fits-all",
    title: "One-size-fits-all registry laws are fundamentally flawed.",
    summary: "Blanket rules ignore differences among cases, people, time elapsed, conduct, and actual risk.",
    talkingPoint: "I believe public safety is better served by individualized assessment and targeted intervention than by broad offense-label rules.",
    evidencePoint: "Research shows that risk varies by person and context and generally declines the longer someone remains offense-free in the community.",
    sourceIds: ["SE02", "SE21", "SE22", "SE23"],
    lawmakerAsk: "Replace blanket restrictions with individualized, reviewable, evidence-based policy.",
  },
  {
    id: "permanent-underclass",
    title: "Registries create a permanent underclass.",
    summary: "Housing, employment, education, financial services, and community participation are often blocked long after punishment ends.",
    talkingPoint: "I believe policies that deny the tools needed for stability and lawful reintegration can make communities less safe, not more safe.",
    evidencePoint: "Research suggests registry requirements and restrictions can destabilize housing, employment, and family support systems needed for safe reintegration.",
    sourceIds: ["SE06", "SE08", "SE24", "SE26"],
    lawmakerAsk: "Remove unnecessary collateral barriers and create realistic pathways to reintegration and relief.",
  },
  {
    id: "recon",
    title: "RECON: Register Every Crime or None.",
    summary: "A consistency challenge asking why one category of people is subjected to lifelong public branding when comparable harms are not.",
    talkingPoint: "RECON is a consistency test, not an endorsement of universal registries. If public registries are truly necessary for safety, government should explain why that logic is applied selectively. If society would reject a registry for every serious crime, it should reconsider the selective system it already maintains.",
    evidencePoint: "Public registries are exceptional: most serious crimes are addressed through conviction, sentence, supervision, and ordinary reentry rather than permanent public identity branding.",
    sourceIds: ["SE03", "SE18", "SE19"],
    lawmakerAsk: "Do not expand selective public registry punishment; require evidence, consistency, meaningful review, and a path toward ending public registration.",
    isCampaign: true,
    helperText: "RECON is a thought experiment and consistency challenge—not a proposal to build registries for every crime. Generated asks always point toward limiting or ending public registry punishment.",
    compatibleWith: ["ineffective", "inconsistent-danger", "punitive", "one-size-fits-all", "permanent-underclass"],
  },
];

export const formats: AdvocacyFormat[] = [
  { id: "email", label: "Email", description: "A concise written message with one clear request." },
  { id: "phone", label: "Phone script", description: "A short script for a call or voicemail." },
  { id: "letter", label: "Printed letter", description: "A formal message for postal mail or hand delivery." },
  { id: "testimony", label: "Public testimony", description: "A brief statement for a hearing or public meeting." },
  { id: "letter-to-editor", label: "Letter to the editor", description: "A public-facing response to coverage or debate." },
];

export const perspectives: AdvocacyPerspective[] = [
  { id: "directly-affected", label: "Directly affected person", introduction: "I am directly affected by registry policy and am writing from lived experience." },
  { id: "family", label: "Family member", introduction: "I am a family member of someone affected by registry policy and have seen its impact on our household." },
  { id: "professional", label: "Professional or advocate", introduction: "I am writing as a professional or advocate concerned with effective, evidence-based public safety policy." },
  { id: "constituent", label: "Concerned constituent", introduction: "I am a constituent concerned about whether public policy is fair, effective, and grounded in evidence." },
  { id: "organization", label: "Organization", introduction: "I am writing on behalf of [ORGANIZATION NAME], which is concerned with safety, accountability, fairness, and successful reintegration." },
];

const topicContextExamples: Record<AdvocacyPositionId, string> = {
  ineffective: "A recent discussion in my community assumed that broader public notification automatically improves safety, but no outcome evidence was presented.",
  "lasting-harm": "I have seen registry restrictions disrupt stable housing, employment, and family support long after the original sentence was completed.",
  "closer-to-home": "Recent discussion focused on registry maps but did not address prevention inside families, schools, churches, sports programs, or other trusted settings.",
  "inconsistent-danger": "Our community uses prevention, treatment, regulation, and ordinary reentry for many serious harms without permanent public identity branding.",
  punitive: "The cumulative reporting duties, public exposure, and restrictions continue to shape ordinary housing, work, travel, and family life after sentence completion.",
  "one-size-fits-all": "Blanket rules apply the same consequences despite major differences in conduct, time elapsed, treatment, and present risk.",
  "permanent-underclass": "Local barriers can push affected residents away from stable housing, work, treatment, and family support.",
  recon: "I am asking why lifelong public branding is considered necessary for one offense category when society rejects that approach for nearly every other serious crime.",
};

const reconAsks: Record<AdvocacyRecipientId, string> = {
  "state-lawmaker": "Please reject further registry expansion and confront the inconsistency of selective lifelong public branding. Require evidence, periodic review, and a path toward ending public registration.",
  "federal-lawmaker": "Please review whether federal registry mandates can be justified by evidence and consistent public-safety principles, and move policy toward individualized, nonpublic, reviewable approaches.",
  "local-official": "Please reject local rules that permanently exclude one class of residents while other serious convictions remain sentence-bound matters.",
  journalist: "Please examine why lifelong public branding is treated as normal for one offense category but unthinkable for nearly every other serious crime.",
};

export function getRecipient(id: AdvocacyRecipientId): AdvocacyRecipient {
  return recipients.find((item) => item.id === id) ?? recipients[0];
}

export function getPosition(id: AdvocacyPositionId): AdvocacyPosition {
  return positions.find((item) => item.id === id) ?? positions[0];
}

export function getPerspective(id: AdvocacyPerspectiveId): AdvocacyPerspective {
  return perspectives.find((item) => item.id === id) ?? perspectives[3];
}

export function isReconCompatible(id: AdvocacyPositionId): boolean {
  return id !== "recon" && (getPosition("recon").compatibleWith ?? []).includes(id);
}

export function getPromptExamples(recipientId: AdvocacyRecipientId, primaryPositionId: AdvocacyPositionId): AdvocacyPromptExamples {
  const primary = getPosition(primaryPositionId);
  return {
    specificAsk: primaryPositionId === "recon" ? reconAsks[recipientId] : primary.lawmakerAsk,
    personalContext: topicContextExamples[primaryPositionId],
  };
}

function fill(value: string | undefined, fallback: string): string {
  return value?.trim() || fallback;
}

export function composeAdvocacyMessage({
  recipientId,
  positionIds,
  formatId,
  perspectiveId,
  evidenceDepth,
  senderName,
  recipientName,
  organizationName,
  contactInformation,
  location,
  specificAsk,
  personalContext,
}: {
  recipientId: AdvocacyRecipientId;
  positionIds: AdvocacyPositionId[];
  formatId: AdvocacyFormatId;
  perspectiveId: AdvocacyPerspectiveId;
  evidenceDepth: AdvocacyEvidenceDepth;
  senderName?: string;
  recipientName?: string;
  organizationName?: string;
  contactInformation?: string;
  location?: string;
  specificAsk?: string;
  personalContext?: string;
}): { title: string; subject?: string; script: string } {
  const recipient = getRecipient(recipientId);
  const primary = getPosition(positionIds[0] ?? "one-size-fits-all");
  const secondary = positionIds[1] ? getPosition(positionIds[1]) : undefined;
  const perspective = getPerspective(perspectiveId);
  const sender = fill(senderName, "[YOUR NAME]");
  const recipientDisplay = fill(recipientName, recipientId === "journalist" ? "[REPORTER / EDITOR NAME]" : "[TITLE AND LAST NAME]");
  const organization = fill(organizationName, "[ORGANIZATION NAME]");
  const contact = fill(contactInformation, "[CONTACT INFORMATION]");
  const place = fill(location, "[CITY / STATE / ZIP]");
  const defaultAsk = primary.id === "recon" ? reconAsks[recipientId] : [primary.lawmakerAsk, secondary?.lawmakerAsk].filter(Boolean).join(" ");
  const ask = specificAsk?.trim() || defaultAsk || recipient.defaultAsk;
  const introduction = perspective.introduction.replace("[ORGANIZATION NAME]", organization);
  const context = personalContext?.trim() ? `\n\n${personalContext.trim()}` : "\n\n[Optional: add one brief local or personal example.]";
  const secondaryPoint = secondary ? `\n\nA related concern is this: ${secondary.talkingPoint}` : "";
  const evidence = evidenceDepth === "supported" ? `\n\nResearch supports the primary concern. ${primary.evidencePoint}` : "";
  const argument = `${primary.talkingPoint}${secondaryPoint}${evidence}${context}`;
  const reconSubject = primary.id === "recon" ? "RECON: Register Every Crime or None" : undefined;

  if (formatId === "phone") {
    return {
      title: `Phone script for ${recipient.shortLabel}`,
      script: `Hello, my name is ${sender}, and I am calling from ${place}. ${introduction}\n\n${argument}\n\nMy request is simple: ${ask}\n\nThank you for your time. I would appreciate knowing ${recipientDisplay}'s position on this issue.`,
    };
  }

  if (formatId === "testimony") {
    return {
      title: `Public testimony for ${recipient.shortLabel}`,
      script: `Good [morning / afternoon]. My name is ${sender}, and I am from ${place}. ${introduction}\n\n${argument}\n\nI respectfully ask you to ${ask.charAt(0).toLowerCase()}${ask.slice(1)}\n\nThank you for the opportunity to speak.`,
    };
  }

  if (formatId === "letter-to-editor") {
    const subject = reconSubject ?? "Evidence—not fear—should guide registry policy";
    return {
      title: "Letter to the editor",
      subject,
      script: `${argument}\n\n${introduction} In ${place}, this debate should focus on measurable safety, accountability, and equal treatment.\n\n${ask}\n\n${sender}\n${place}${contactInformation?.trim() ? `\n${contact}` : ""}`,
    };
  }

  const greeting = `Dear ${recipientDisplay},`;
  const subject = reconSubject ?? (recipientId === "journalist" ? `Story context: ${primary.title}` : "Please act on evidence-based registry reform");
  const body = `${greeting}\n\nI am writing from ${place}. ${introduction}\n\n${argument}\n\nI respectfully ask you to ${ask.charAt(0).toLowerCase()}${ask.slice(1)}\n\nPublic safety policy should be measured by whether it prevents harm, supports accountability, and promotes stable reintegration—not simply by whether it imposes more public punishment.\n\nThank you for your consideration,\n${sender}\n${contact}`;

  if (formatId === "letter") {
    return { title: `Printed letter for ${recipient.shortLabel}`, subject, script: `[DATE]\n${recipientDisplay}\n[OFFICE / ORGANIZATION]\n[ADDRESS]\n\nRe: ${subject}\n\n${body}` };
  }

  return { title: `Email for ${recipient.shortLabel}`, subject, script: `Subject: ${subject}\n\n${body}` };
}
