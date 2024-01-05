import { z } from 'zod';

export const resetPasswordFormSchema = z
  .object({
    code: z.string().trim().min(1, { message: 'Digite o código de verificação.' }),
    password: z.string().trim().min(1, { message: 'Digite sua nova senha.' }),
    confirmPassword: z.string().trim().min(1, { message: 'Digite novamente sua senha.' }),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: 'As senhas devem ser iguais.',
    path: ['confirmPassword'],
  });

export type ResetPasswordFormSchemaType = z.infer<typeof resetPasswordFormSchema>;
