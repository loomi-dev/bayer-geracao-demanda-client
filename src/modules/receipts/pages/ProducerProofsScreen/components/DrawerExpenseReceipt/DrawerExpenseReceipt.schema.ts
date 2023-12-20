import { z } from 'zod';

export const drawerExpenseReceiptFormSchema = z.object({
  description: z.string().trim().min(1, { message: 'Descreva seus gastos !' }),
  files: z
    .array(
      z.object({
        id: z.string(),
        file: z.custom<File>(),
      }),
    )
    .min(1, { message: 'Adicione pelo meno um arquivo !' }),
});

export type DrawerExpenseReceiptFormSchemaType = z.infer<typeof drawerExpenseReceiptFormSchema>;
