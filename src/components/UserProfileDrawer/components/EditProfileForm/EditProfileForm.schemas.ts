import { z } from 'zod';

export const editProfileFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Digite seu nome.' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Digite seu e-mail.' })
    .email({ message: 'Digite um email válido.' }),
  company_position: z.string().trim().min(1, { message: 'Digite seu cargo na sua empresa.' }),
  phoneNumber: z
    .string()
    .trim()
    .min(1, { message: 'Digite seu número de telefone.' })
    .regex(/\(\d{2}\) 9 \d{4}-\d{4}/, { message: 'Digite um número válido' })
    .transform((value) => value.replace(/\D/g, '')),
});

export type EditProfileFormSchemaType = z.infer<typeof editProfileFormSchema>;
