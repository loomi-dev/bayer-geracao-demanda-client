import { z } from 'zod';

export const sendReceiptsFormSchema = z.object({
  description: z.string().trim().min(1, { message: 'Descreva seu gasto.' }),
  files: z
    .array(
      z.object({
        id: z.string(),
        file: z.custom<File>(),
      }),
    )
    .min(1, { message: 'Insira um comprovante antes de enviar.' }),
});

export type SendReceiptsFormSchemaType = z.infer<typeof sendReceiptsFormSchema>;
