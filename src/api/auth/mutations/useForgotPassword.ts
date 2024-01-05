import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { ForgotPasswordResponse, MutOpt, forgotPassword } from '@/api';

const errorMessages = {
  NO_USER_WITH_THIS_EMAIL_WAS_FOUND: 'Não encontramos nenhum usuário com este e-mail.',
};

export const useForgotPassword = (options?: MutOpt<ForgotPasswordResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationKey: ['forgot-password'],
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast({
        description: 'Enviamos um código para seu email.',
        status: 'success',
      });
    },
    onError: (err) => {
      const error = err?.response?.data?.error?.message as string;

      toast({
        description:
          errorMessages[error] ??
          'Ocorreu um erro ao enviar o email, tente novamente ou contate o suporte.',
        status: 'error',
      });
    },
  });
};
