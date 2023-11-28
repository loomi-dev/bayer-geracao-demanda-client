import { z } from 'zod';

export const loginFormSchema = z.object({
  user: z.string().trim().min(1, { message: 'Preencha o usuário.' }),
  password: z.string().trim().min(1, { message: 'Preencha sua senha.' }),
});

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
