import { z } from "zod";

export const RecentChangeSchema = z.union([
  z.object({
    type: z.literal("case"),
    name: z.string(),
    court: z.string(),
    date: z.string(),
    holding: z.string(),
    link: z.string().url().optional(),
  }),
  z.object({
    type: z.literal("statute"),
    bill: z.string(),
    session: z.string(),
    effective: z.string(),
    summary: z.string(),
    link: z.string().url().optional(),
  }),
  z.object({
    type: z.literal("rule"),
    cite: z.string(),
    effective: z.string(),
    summary: z.string(),
    link: z.string().url().optional(),
  }),
]);

const PlainBlurb = z.object({
  summary: z.array(z.string()).optional(),
  watchOuts: z.array(z.string()).optional(),
  edgeCases: z.array(z.string()).optional(),
  confidence: z.enum(["high", "medium", "needs-review"]).optional(),
  citations: z.array(z.string()).optional(),
  reviewedBy: z.string().optional(),
  reviewedUTC: z.string().optional(),
}).partial();

export const StateRegistryDataSchema = z.object({
  state: z.string(),
  lastReviewedUTC: z.string(), // ISO
  atAGlance: z.object({
    mustRegister: z.string().optional(),
    initialDeadline: z.string().optional(),
    verificationCadence: z.string().optional(),
    primaryMethod: z.string().optional(),
    topGotchas: z.array(z.string()).optional(),
    officialLinks: z
      .object({
        statuteIndex: z.string().url().optional(),
        adminRules: z.string().url().optional(),
        statePoliceRegistry: z.string().url().optional(),
        formsPortal: z.string().url().optional(),
        publicWebsite: z.string().url().optional(),
      })
      .partial()
      .optional(),
  }),
  whoMustRegister: z.string().optional(),
  deadlinesReporting: z.array(z.string()).optional(),
  verificationInPerson: z.array(z.string()).optional(),
  residencyPresence: z.string().optional(),
  employmentEducationInternet: z.array(z.string()).optional(),
  publicWebsiteExposure: z.array(z.string()).optional(),
  travelInterstate: z.array(z.string()).optional(),
  complianceEnforcement: z.string().optional(),
  reliefPaths: z.array(z.string()).optional(),
  specialPopulations: z.array(z.string()).optional(),
  costs: z.array(z.string()).optional(),
  recentChangesLitigation: z.array(RecentChangeSchema).optional(),
  checklistsScripts: z
    .object({
      newArrivalChecklist: z.array(z.string()).optional(),
      movingOutChecklist: z.array(z.string()).optional(),
      recordsRequestTemplate: z.string().optional(),
      reliefPetitionOutline: z.string().optional(),
    })
    .partial()
    .optional(),
  resources: z
    .object({
      legalAid: z.array(z.object({ name: z.string(), link: z.string().url() })).optional(),
      advocacy: z.array(z.object({ name: z.string(), link: z.string().url() })).optional(),
      reentry: z.array(z.object({ name: z.string(), link: z.string().url() })).optional(),
    })
    .partial()
    .optional(),
  citations: z.array(z.string()).optional(),
  badges: z
    .object({
      residencyZones: z.boolean().optional(),
      lifetimePossible: z.boolean().optional(),
      verificationQuarterly: z.boolean().optional(),
    })
    .partial()
    .optional(),
  // NEW: Plain-language layer (section-keyed)
  plainLanguage: z.record(PlainBlurb).optional(),
});

export type StateRegistryData = z.infer<typeof StateRegistryDataSchema>;