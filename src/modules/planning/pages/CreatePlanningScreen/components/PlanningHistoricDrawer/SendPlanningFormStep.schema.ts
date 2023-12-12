import { z } from 'zod';

export const sendPlanningFormStepSchema = z.object({
  description: z.string().trim().optional(),
});

export type SendPlanningFormStepSchemaType = z.infer<typeof sendPlanningFormStepSchema>;
