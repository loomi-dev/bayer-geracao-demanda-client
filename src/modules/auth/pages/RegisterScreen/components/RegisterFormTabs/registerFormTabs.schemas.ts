import { z } from 'zod';

export const accountDataFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Digite seu nome.' }),
  email: z
    .string()
    .min(1, { message: 'Digite seu e-mail.' })
    .email({ message: 'Digite um email válido.' }),
  role: z.string().trim().min(1, { message: 'Digite seu cargo na sua empresa.' }),
});

export type AccountDataFormSchemaType = z.infer<typeof accountDataFormSchema>;
