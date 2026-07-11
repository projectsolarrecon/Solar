import {
  formats,
  isReconCompatible,
  positions,
  recipients,
  type AdvocacyFormatId,
  type AdvocacyPositionId,
  type AdvocacyRecipientId,
} from "./actionHubData";

export type ContextualActionSourceType =
  | "blog"
  | "resource-guide"
  | "legislative-tracker"
  | "accountability-watch";

export type ContextualActionRecommendation = {
  audienceLabel: string;
  suggestion: string;
  actionLabel: string;
};

export type ContextualActionConfig = {
  recipientId?: AdvocacyRecipientId;
  primaryPositionId: AdvocacyPositionId;
  secondaryPositionId?: AdvocacyPositionId;
  formatId?: AdvocacyFormatId;
  headline: string;
  description: string;
  recommendation: ContextualActionRecommendation;
  suggestedAsk?: string;
  personalContext?: string;
  source: {
    title: string;
    path: string;
    type: ContextualActionSourceType;
  };
  jurisdiction?: string;
  billNumber?: string;
};

export type ParsedContextualAction = {
  recipientId?: AdvocacyRecipientId;
  positionIds: AdvocacyPositionId[];
  formatId?: AdvocacyFormatId;
  suggestedAsk?: string;
  personalContext?: string;
  source?: ContextualActionConfig["source"];
  jurisdiction?: string;
  billNumber?: string;
};

const recipientIds = new Set(recipients.map((item) => item.id));
const positionIds = new Set(positions.map((item) => item.id));
const formatIds = new Set(formats.map((item) => item.id));
const sourceTypes = new Set<ContextualActionSourceType>([
  "blog",
  "resource-guide",
  "legislative-tracker",
  "accountability-watch",
]);

function clean(value: string | null): string | undefined {
  const trimmed = value?.trim();
  return trimmed || undefined;
}

function isInternalPath(value: string): boolean {
  return value.startsWith("/") && !value.startsWith("//");
}

export function normalizeContextualPositions(
  primaryPositionId: AdvocacyPositionId,
  secondaryPositionId?: AdvocacyPositionId,
): AdvocacyPositionId[] {
  if (primaryPositionId === "recon") {
    return secondaryPositionId && isReconCompatible(secondaryPositionId)
      ? ["recon", secondaryPositionId]
      : ["recon"];
  }

  if (secondaryPositionId === "recon") {
    return [primaryPositionId];
  }

  return secondaryPositionId && secondaryPositionId !== primaryPositionId
    ? [primaryPositionId, secondaryPositionId]
    : [primaryPositionId];
}

export function buildContextualActionHref(
  config: ContextualActionConfig,
): string {
  const params = new URLSearchParams();
  const normalizedPositions = normalizeContextualPositions(
    config.primaryPositionId,
    config.secondaryPositionId,
  );

  if (config.recipientId) params.set("recipient", config.recipientId);
  params.set("primary", normalizedPositions[0]);
  if (normalizedPositions[1]) params.set("secondary", normalizedPositions[1]);
  if (config.formatId) params.set("format", config.formatId);
  if (config.suggestedAsk) params.set("ask", config.suggestedAsk);
  if (config.personalContext) params.set("context", config.personalContext);
  params.set("sourceTitle", config.source.title);
  params.set("sourcePath", config.source.path);
  params.set("sourceType", config.source.type);
  if (config.jurisdiction) params.set("jurisdiction", config.jurisdiction);
  if (config.billNumber) params.set("bill", config.billNumber);

  return `/advocacy/action-hub?${params.toString()}`;
}

export function parseContextualActionParams(
  searchParams: URLSearchParams,
): ParsedContextualAction | null {
  const primary = clean(searchParams.get("primary"));
  if (!primary || !positionIds.has(primary as AdvocacyPositionId)) return null;

  const secondary = clean(searchParams.get("secondary"));
  const recipient = clean(searchParams.get("recipient"));
  const format = clean(searchParams.get("format"));
  const sourceTitle = clean(searchParams.get("sourceTitle"));
  const sourcePath = clean(searchParams.get("sourcePath"));
  const sourceType = clean(searchParams.get("sourceType"));

  const normalizedPositions = normalizeContextualPositions(
    primary as AdvocacyPositionId,
    secondary && positionIds.has(secondary as AdvocacyPositionId)
      ? (secondary as AdvocacyPositionId)
      : undefined,
  );

  const source =
    sourceTitle &&
    sourcePath &&
    isInternalPath(sourcePath) &&
    sourceType &&
    sourceTypes.has(sourceType as ContextualActionSourceType)
      ? {
          title: sourceTitle,
          path: sourcePath,
          type: sourceType as ContextualActionSourceType,
        }
      : undefined;

  return {
    recipientId:
      recipient && recipientIds.has(recipient as AdvocacyRecipientId)
        ? (recipient as AdvocacyRecipientId)
        : undefined,
    positionIds: normalizedPositions,
    formatId:
      format && formatIds.has(format as AdvocacyFormatId)
        ? (format as AdvocacyFormatId)
        : undefined,
    suggestedAsk: clean(searchParams.get("ask")),
    personalContext: clean(searchParams.get("context")),
    source,
    jurisdiction: clean(searchParams.get("jurisdiction")),
    billNumber: clean(searchParams.get("bill")),
  };
}
