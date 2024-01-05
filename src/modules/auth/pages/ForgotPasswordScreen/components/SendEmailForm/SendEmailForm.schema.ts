import { z } from 'zod';

export const sendEmailFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Digite seu e-mail.' })
    .email({ message: 'Digite um email válido.' }),
});

export type SendEmailFormSchemaType = z.infer<typeof sendEmailFormSchema>;
