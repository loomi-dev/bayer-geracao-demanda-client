import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt, ResetPasswordResponse, resetPassword } from '@/api';

const errorMessages = {
  'Incorrect code provided': 'Código incorreto ou expirado, Solicite um novo código.',
};

export const useResetPassword = (options?: MutOpt<ResetPasswordResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationKey: ['reset-password'],
    mutationFn: resetPassword,
    onSuccess: () => {
      toast({
        description: 'Sua senha foi redefinida.',
        status: 'success',
      });
    },
    onError: (err) => {
      const error = err?.response?.data?.error?.message as string;

      toast({
        description:
          errorMessages[error] ??
          'Ocorreu um erro ao redefinir sua senha, tente novamente ou contate o suporte.',
        status: 'error',
      });
    },
  });
};
