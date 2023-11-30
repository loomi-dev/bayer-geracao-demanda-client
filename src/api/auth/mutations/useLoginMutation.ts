import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

import { MutOpt } from '@/api/types';
import { DEFAULT_PRIVATE_PAGE } from '@/config';

import { Credentials } from '../types';

const CUSTOM_MESSAGES_ERROR = {
  ValidationError: 'Credenciais incorretas',
};

export const useLoginMutation = (options?: MutOpt<void, Credentials, Error>) => {
  const toast = useToast();
  const { push } = useRouter();

  return useMutation({
    ...options,
    mutationFn: async ({ identifier, password }) => {
      const response = await signIn('credentials', { redirect: false, identifier, password });

      if (response?.error) throw new Error(response.error);
    },
    onSuccess: () => {
      push(DEFAULT_PRIVATE_PAGE);

      toast({
        description: 'Autenticado com sucesso!',
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
