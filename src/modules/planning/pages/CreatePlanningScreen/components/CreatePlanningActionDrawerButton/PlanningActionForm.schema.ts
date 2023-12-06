import { z } from 'zod';

export const planningActionFormSchema = z.object({
  title: z.string().trim().min(1, { message: 'Digite um título para sua ação.' }),
  type: z.string(),
  description: z.string().trim().min(1, { message: 'Digite uma descrição para sua ação.' }),
  value: z
    .string()
    .trim()
    .min(1, { message: 'Digite o quanto de recurso será usado para esta ação.' }),
});

export type PlanningActionFormSchemaType = z.infer<typeof planningActionFormSchema>;
