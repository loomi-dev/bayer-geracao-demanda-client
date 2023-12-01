import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Session } from 'next-auth';
import { getSession, signIn } from 'next-auth/react';

import { MutOpt } from '@/api/types';
import { DEFAULT_ONBOARDING_PAGE, DEFAULT_PRIVATE_PAGE } from '@/config';

import { Credentials } from '../types';

const CUSTOM_MESSAGES_ERROR = {
  ValidationError: 'Credenciais incorretas',
};

export const useLoginMutation = (
  options?: MutOpt<Session | null | unknown, Credentials, Error>,
) => {
  const toast = useToast();
  const { push } = useRouter();

  return useMutation({
    ...options,
    mutationKey: ['login-with-credentials'],
    mutationFn: async ({ identifier, password }) => {
      const response = await signIn('credentials', { redirect: false, identifier, password });

      if (response?.error) throw new Error(response.error);

      const session = await getSession();

      return session;
    },
    onSuccess: (session) => {
      const isNewUser = session?.user.confirmed === false;
      const redirectRoute =
        session?.user.role === 'Manager'
          ? `${DEFAULT_PRIVATE_PAGE}/clientes`
          : `${DEFAULT_PRIVATE_PAGE}/carteira`;

      if (isNewUser) {
        push(DEFAULT_ONBOARDING_PAGE);
        toast({
          description: 'Conectado com sucesso, agora continue com seu cadastro!',
          status: 'success',
        });

        return;
      }

      push(redirectRoute);
      toast({
        description: 'Conectado com sucesso!',
        status: 'success',
      });
    },
    onError: (error) => {
      toast({
        description: CUSTOM_MESSAGES_ERROR[error?.message] ?? 'Ocorreu um erro durante o login.',
        status: 'error',
      });
    },
  });
};
