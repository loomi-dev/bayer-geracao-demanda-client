import { z } from 'zod';

export const accountDataFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Digite seu nome.' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Digite seu e-mail.' })
    .email({ message: 'Digite um email válido.' }),
  role: z.string().trim().min(1, { message: 'Digite seu cargo na sua empresa.' }),
  phone: z
    .string()
    .trim()
    .min(1, { message: 'Digite seu número de telefone.' })
    .regex(/\(\d{2}\) 9 \d{4}-\d{4}/, { message: 'Digite um número válido' })
    .transform((value) => value.replace(/\D/g, '')),
});

export type AccountDataFormSchemaType = z.infer<typeof accountDataFormSchema>;

export const createPasswordFormSchema = z.object({
  password: z
    .string()
    .trim()
    .min(1, { message: 'Digite sua senha.' })
    .min(8, { message: 'Sua senha deve conter no mínimo 8 caracteres.' }),
  confirmPassword: z.string().trim().min(1, { message: 'Digite sua senha.' }),
});

export type CreatePasswordFormSchemaType = z.infer<typeof createPasswordFormSchema>;

export const registerFormSchema = accountDataFormSchema
  .merge(createPasswordFormSchema)
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'As senhas devem ser iguais.',
    path: ['confirmPassword'],
  });
export type RegisterFormSchemaType = z.infer<typeof registerFormSchema>;
