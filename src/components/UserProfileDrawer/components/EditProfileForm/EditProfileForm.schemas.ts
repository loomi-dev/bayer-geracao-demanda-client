import { z } from 'zod';

export const managerProfileFormSchema = z.object({
  username: z.string().trim().min(1, { message: 'Digite seu nome.' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Digite seu e-mail.' })
    .email({ message: 'Digite um email válido.' }),
  phoneNumber: z
    .string()
    .trim()
    .min(1, { message: 'Digite seu número de telefone.' })
    .regex(/\(\d{2}\) 9 \d{4}-\d{4}/, { message: 'Digite um número válido' })
    .transform((value) => value.replace(/\D/g, '')),
});

export type ManagerProfileFormSchemaType = z.infer<typeof managerProfileFormSchema>;

export const farmerProfileFormSchema = z
  .object({
    companyPosition: z.string().trim().min(1, { message: 'Digite seu cargo na sua empresa.' }),
  })
  .merge(managerProfileFormSchema);

export type FarmerProfileFormSchemaType = z.infer<typeof farmerProfileFormSchema>;
