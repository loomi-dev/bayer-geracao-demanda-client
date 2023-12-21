import { z } from 'zod';

export const sendProofActionFormSchema = z.object({
  description: z.string().trim().min(1, { message: 'Descreva seu gasto.' }),
  files: z
    .array(
      z.object({
        id: z.string(),
        file: z.custom<File>(),
      }),
    )
    .min(1, { message: 'Selecione um comprovante antes de enviar.' }),
});

export type SendProofActionFormSchemaType = z.infer<typeof sendProofActionFormSchema>;
