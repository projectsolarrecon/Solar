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
  | "permanent-underclass";

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
  evidenceCaveat: string;
  sourceIds: string[];
  lawmakerAsk: string;
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

export const researchResourceHref = "/resources/research-data-resources";

export const recipients: AdvocacyRecipient[] = [
  {
    id: "state-lawmaker",
    label: "State lawmaker",
    shortLabel: "State lawmaker",
    description:
      "Best for registry rules, duration, residency restrictions, public notification, relief, and state reentry barriers.",
    icon: "🏛️",
    defaultAsk:
      "Please support individualized, evidence-based reform and oppose blanket registry expansion.",
    lookupHref: "https://open.pluralpolicy.com/find_your_legislator/",
    lookupLabel: "Find your state legislators",
    recommendedPositions: [
      "ineffective",
      "punitive",
      "one-size-fits-all",
      "permanent-underclass",
    ],
  },
  {
    id: "federal-lawmaker",
    label: "Member of Congress",
    shortLabel: "Congress",
    description:
      "Best for federal standards, funding incentives, agency oversight, national data, and federal supervision policy.",
    icon: "🇺🇸",
    defaultAsk:
      "Please require evidence, transparency, and individualized policy before expanding federal registry mandates.",
    lookupHref: "https://www.usa.gov/elected-officials",
    lookupLabel: "Find federal officials",
    recommendedPositions: [
      "ineffective",
      "lasting-harm",
      "punitive",
      "one-size-fits-all",
    ],
  },
  {
    id: "local-official",
    label: "Local official",
    shortLabel: "Local official",
    description:
      "Best for ordinances, zoning, shelter access, local restrictions, public meetings, and implementation practices.",
    icon: "📍",
    defaultAsk:
      "Please reject local rules that increase homelessness or isolation without demonstrated safety benefits.",
    lookupHref: "https://www.commoncause.org/find-your-representative/",
    lookupLabel: "Find local officials",
    recommendedPositions: [
      "lasting-harm",
      "punitive",
      "one-size-fits-all",
      "permanent-underclass",
    ],
  },
  {
    id: "journalist",
    label: "Journalist or editor",
    shortLabel: "Media",
    description:
      "Best for correcting misleading coverage, pitching overlooked stories, and improving public understanding.",
    icon: "📰",
    defaultAsk:
      "Please include evidence, individual context, and the real limits of public registries in your coverage.",
    lookupHref: "/contact",
    lookupLabel: "Ask SOLAR for source support",
    recommendedPositions: [
      "ineffective",
      "lasting-harm",
      "closer-to-home",
      "inconsistent-danger",
    ],
  },
];

export const positions: AdvocacyPosition[] = [
  {
    id: "ineffective",
    title:
      "The sex offender registry system is ineffective, harmful, and rooted in misinformation.",
    summary:
      "Public policy should be measured by whether it prevents harm, not by whether it creates the appearance of action.",
    talkingPoint:
      "I am concerned that public registries have not delivered the broad prevention benefits commonly claimed for them, while many offenses are committed by people who were not previously listed.",
    evidencePoint:
      "A 25-year meta-analysis found no statistically significant overall recidivism benefit from broad sex offense registration and notification policies.",
    evidenceCaveat:
      "That finding does not mean every law-enforcement registration function is useless; it means broad public-policy claims should be tested against outcomes.",
    sourceIds: ["SE03", "SE04"],
    lawmakerAsk:
      "Require credible evidence and outcome review before expanding registration or public-notification rules.",
  },
  {
    id: "lasting-harm",
    title:
      "Registry systems cause lasting harm to individuals, families, and communities.",
    summary:
      "Fear, isolation, harassment, family disruption, and housing instability are not neutral side effects.",
    talkingPoint:
      "I believe registry policy should account for its effects on spouses, children, parents, employers, and neighborhoods, especially when those effects undermine stable reintegration.",
    evidencePoint:
      "Research reviews link registry requirements and related restrictions to housing instability, employment barriers, stigma, family spillover harm, and reintegration problems.",
    evidenceCaveat:
      "Those hardships can also be shaped by conviction, supervision, poverty, and local conditions, so causal claims should remain careful.",
    sourceIds: ["SE06", "SE07", "SE24"],
    lawmakerAsk:
      "Include family and community impacts in every registry-policy review and fiscal analysis.",
  },
  {
    id: "closer-to-home",
    title: "The real risk to children often lies closer to home.",
    summary:
      "Prevention must focus on access, authority, grooming, disclosure, and institutional accountability—not only strangers on a map.",
    talkingPoint:
      "I believe child-safety policy should address harm by known and trusted people and strengthen prevention and reporting systems where abuse commonly occurs.",
    evidencePoint:
      "Official and prevention-oriented sources show that most sexual harms against children involve someone the child knows, including family members, acquaintances, caregivers, or trusted authority figures.",
    evidenceCaveat:
      "Stranger-perpetrated abuse still occurs and can be serious; the point is that public registries are a limited primary-prevention tool.",
    sourceIds: ["SE11", "SE12", "SE13", "SE25"],
    lawmakerAsk:
      "Invest in prevention, disclosure, institutional safeguards, and evidence-based child-protection practices.",
  },
  {
    id: "inconsistent-danger",
    title:
      "Other types of crime present a greater and more consistent danger to public safety.",
    summary:
      "Registry policy applies lifelong public exposure selectively, even though many other serious harms are handled through sentence-bound accountability and ordinary reentry.",
    talkingPoint:
      "I believe government should explain why permanent public branding is treated as essential for one category of offense but not for other serious harms to children and communities.",
    evidencePoint:
      "Many major public-safety harms are managed through prevention, regulation, enforcement, treatment, technology, or service systems rather than permanent public identity branding.",
    evidenceCaveat:
      "Different harms are not identical and do not require identical responses; the comparison is about consistency in public-safety logic.",
    sourceIds: ["SE12", "SE15", "SE16", "SE17"],
    lawmakerAsk:
      "Apply consistent public-safety principles and evaluate whether registry policy is proportionate and evidence-based.",
  },
  {
    id: "punitive",
    title: "Registries are punitive in practice, not administrative in nature.",
    summary:
      "Public exposure, recurring reporting, restrictions, and collateral consequences operate as continuing punishment after sentence completion.",
    talkingPoint:
      "I do not think a policy should be treated as merely administrative when it imposes lifelong public consequences, recurring burdens, and barriers to ordinary civic life.",
    evidencePoint:
      "Although registries have often been labeled civil, modern layered restrictions can burden speech, movement, housing, association, and community participation in punishment-like ways.",
    evidenceCaveat:
      "This does not mean every registry law has been held unconstitutional; Smith v. Doe remains a central national precedent.",
    sourceIds: ["SE18", "SE19", "SE27", "SE28"],
    lawmakerAsk:
      "Provide due process, proportionality, review, and meaningful relief from continuing registry burdens.",
  },
  {
    id: "one-size-fits-all",
    title: "One-size-fits-all registry laws are fundamentally flawed.",
    summary:
      "Blanket rules ignore the differences among cases, people, time elapsed, conduct, and actual risk.",
    talkingPoint:
      "I believe public safety is better served by individualized assessment and targeted intervention than by broad offense-label rules.",
    evidencePoint:
      "Research shows that risk varies by person and context and generally declines the longer someone remains offense-free in the community.",
    evidenceCaveat:
      "Declining risk is not zero risk, and no assessment tool predicts future behavior perfectly.",
    sourceIds: ["SE02", "SE21", "SE22", "SE23"],
    lawmakerAsk:
      "Replace blanket restrictions with individualized, reviewable, evidence-based policy.",
  },
  {
    id: "permanent-underclass",
    title: "Registries create a permanent underclass.",
    summary:
      "Housing, employment, education, financial services, and community participation are often blocked long after punishment ends.",
    talkingPoint:
      "I believe policies that deny the tools needed for stability and lawful reintegration can make communities less safe, not more safe.",
    evidencePoint:
      "Research suggests registry requirements and restrictions can destabilize housing, employment, and family support systems that are necessary for safe reintegration.",
    evidenceCaveat:
      "Not every hardship is caused by the registry alone, but the cumulative barriers are relevant to public safety and successful reentry.",
    sourceIds: ["SE06", "SE08", "SE24", "SE26"],
    lawmakerAsk:
      "Remove unnecessary collateral barriers and create realistic pathways to reintegration and relief.",
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
  {
    id: "directly-affected",
    label: "Directly affected person",
    introduction:
      "I am directly affected by registry policy and am writing from lived experience.",
  },
  {
    id: "family",
    label: "Family member",
    introduction:
      "I am a family member of someone affected by registry policy and have seen its impact on our household.",
  },
  {
    id: "professional",
    label: "Professional or advocate",
    introduction:
      "I am writing as a professional or advocate concerned with effective, evidence-based public safety policy.",
  },
  {
    id: "constituent",
    label: "Concerned constituent",
    introduction:
      "I am a constituent concerned about whether public policy is fair, effective, and grounded in evidence.",
  },
  {
    id: "organization",
    label: "Organization",
    introduction:
      "I am writing on behalf of [ORGANIZATION NAME], which is concerned with safety, accountability, fairness, and successful reintegration.",
  },
];

export function getRecipient(id: AdvocacyRecipientId): AdvocacyRecipient {
  return recipients.find((item) => item.id === id) ?? recipients[0];
}

export function getPosition(id: AdvocacyPositionId): AdvocacyPosition {
  return positions.find((item) => item.id === id) ?? positions[0];
}

export function getPerspective(id: AdvocacyPerspectiveId): AdvocacyPerspective {
  return perspectives.find((item) => item.id === id) ?? perspectives[3];
}

export function composeAdvocacyMessage({
  recipientId,
  positionId,
  formatId,
  perspectiveId,
  evidenceDepth,
  location,
  specificAsk,
  personalContext,
}: {
  recipientId: AdvocacyRecipientId;
  positionId: AdvocacyPositionId;
  formatId: AdvocacyFormatId;
  perspectiveId: AdvocacyPerspectiveId;
  evidenceDepth: AdvocacyEvidenceDepth;
  location?: string;
  specificAsk?: string;
  personalContext?: string;
}): { title: string; subject?: string; script: string } {
  const recipient = getRecipient(recipientId);
  const position = getPosition(positionId);
  const perspective = getPerspective(perspectiveId);
  const place = location?.trim() || "[CITY / STATE / ZIP]";
  const ask = specificAsk?.trim() || position.lawmakerAsk || recipient.defaultAsk;
  const context = personalContext?.trim()
    ? `\n\n${personalContext.trim()}`
    : "\n\n[Optional: add one brief local or personal example.]";
  const evidence = evidenceDepth === "supported"
    ? `\n\nResearch supports this concern. ${position.evidencePoint}`
    : "";

  if (formatId === "phone") {
    return {
      title: `Phone script for ${recipient.shortLabel}`,
      script: `Hello, my name is [YOUR NAME], and I am calling from ${place}. ${perspective.introduction}\n\n${position.talkingPoint}${evidence}${context}\n\nMy request is simple: ${ask}\n\nThank you for your time. I would appreciate knowing the office's position on this issue.`,
    };
  }

  if (formatId === "testimony") {
    return {
      title: `Public testimony for ${recipient.shortLabel}`,
      script: `Good [morning / afternoon]. My name is [YOUR NAME], and I am from ${place}. ${perspective.introduction}\n\n${position.talkingPoint}${evidence}${context}\n\nI respectfully ask you to ${ask.charAt(0).toLowerCase()}${ask.slice(1)}\n\nThank you for the opportunity to speak.`,
    };
  }

  if (formatId === "letter-to-editor") {
    return {
      title: "Letter to the editor",
      subject: "Evidence—not fear—should guide registry policy",
      script: `Public discussion of registry policy too often begins with fear and ends before anyone asks whether the policy works. ${position.talkingPoint}${evidence}\n\n${perspective.introduction} In ${place}, this debate should focus on measurable safety, accountability, and the conditions that support lawful reintegration.${context}\n\nPublic officials and news organizations should ask for evidence before endorsing broader public exposure or blanket restrictions. ${ask}\n\n[YOUR NAME]\n${place}`,
    };
  }

  const greeting = recipientId === "journalist" ? "Dear [REPORTER / EDITOR NAME]," : "Dear [TITLE AND LAST NAME],";
  const subject =
    recipientId === "journalist"
      ? `Story context: ${position.title}`
      : "Please act on evidence-based registry reform";

  const body = `${greeting}\n\nI am writing from ${place}. ${perspective.introduction}\n\n${position.talkingPoint}${evidence}${context}\n\nI respectfully ask you to ${ask.charAt(0).toLowerCase()}${ask.slice(1)}\n\nPublic safety policy should be measured by whether it prevents harm, supports accountability, and promotes stable reintegration—not simply by whether it imposes more public punishment.\n\nThank you for your consideration,\n[YOUR NAME]\n[CONTACT INFORMATION]`;

  if (formatId === "letter") {
    return {
      title: `Printed letter for ${recipient.shortLabel}`,
      subject,
      script: `[DATE]\n[RECIPIENT NAME]\n[OFFICE / ORGANIZATION]\n[ADDRESS]\n\nRe: ${subject}\n\n${body}`,
    };
  }

  return {
    title: `Email for ${recipient.shortLabel}`,
    subject,
    script: `Subject: ${subject}\n\n${body}`,
  };
}
