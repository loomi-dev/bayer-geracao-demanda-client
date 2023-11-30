import { z } from 'zod';

export const loginFormSchema = z.object({
  identifier: z.string().trim().min(1, { message: 'Preencha seu usuário.' }),
  password: z.string().trim().min(1, { message: 'Preencha sua senha.' }),
});

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
