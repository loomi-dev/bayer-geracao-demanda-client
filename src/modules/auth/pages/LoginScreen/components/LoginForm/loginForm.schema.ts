import { z } from 'zod';

export const loginFormSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, { message: 'Preencha seu usuário.' })
    .transform((value) => {
      const valueReplaced = value.replace(/[^a-zA-Z0-9]/g, '');
      const isCnpjValue = !isNaN(Number(valueReplaced));

      if (isCnpjValue) return valueReplaced;

      return value;
    }),
  password: z.string().trim().min(1, { message: 'Preencha sua senha.' }),
});

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
