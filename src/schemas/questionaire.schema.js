
import { z } from "zod";

export const RelationshipStatusSchema = z.enum([
  "single",
  "married",
  "separated",
  "widowed_remarried",
]);

export const ChildrenSchema = z.enum([
  "no",
  "yes_current",
  "yes_previous",
  "yes_both",
]);

export const PropertySchema = z.enum([
  "no",
  "yes_outright",
  "yes_mortgage",
  "yes_jointly",
]);

export const AssetsSchema = z.enum([
  "starting_out",
  "comfortable",
  "established",
  "significant",
]);

export const FamilyComplexitySchema = z.enum([
  "straightforward",
  "some_dynamics",
  "quite_complex",
  "not_sure",
]);

export const PrioritySchema = z.enum([
  "simple_affordable",
  "family_protected",
  "assets_intended",
  "proper_advice",
]);

export const LpaAwarenessSchema = z.enum([
  "no_hadnt",
  "yes_plan",
  "not_sure",
]);

// Full answers object — all 7 questions
export const QuestionnaireAnswersSchema = z.object({
  relationshipStatus: RelationshipStatusSchema,
  children:           ChildrenSchema,
  property:           PropertySchema,
  assets:             AssetsSchema,
  familyComplexity:   FamilyComplexitySchema,
  priority:           PrioritySchema,
  lpaAwareness:       LpaAwarenessSchema,
});

// Single answer patch payload
export const AnswerPatchSchema = z.object({
  questionKey: z.string().min(1),
  value:       z.string().min(1),
});

// Session start payload
export const SessionStartSchema = z.object({
  utm: z.object({
    source:   z.string().optional(),
    medium:   z.string().optional(),
    campaign: z.string().optional(),
  }).optional(),
  deviceType: z.enum(["mobile", "desktop", "tablet"]).optional(),
});