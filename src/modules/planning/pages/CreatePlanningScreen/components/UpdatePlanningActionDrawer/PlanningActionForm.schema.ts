import { z } from 'zod';

export const planningActionFormSchema = z.object({
  title: z.string().trim().min(1, { message: 'Digite um título para sua ação.' }),
  type: z.enum(['farm_task', 'farm_kit', 'relationship_task']),
  description: z.string().trim().optional(),
  value: z
    .string()
    .trim()
    .min(1, { message: 'Digite o quanto de recurso será usado para esta ação.' }),
  date: z
    .array(z.date().or(z.string()), z.date().or(z.string()))
    .length(2, { message: 'Selecione a data de início e fim.' }),
});

export type PlanningActionFormSchemaType = z.infer<typeof planningActionFormSchema>;
