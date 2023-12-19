import { useToast } from '@chakra-ui/react';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { putAction } from '../endpoints';
import { PutActionParams } from '../types';

export const usePutAction = (
  params?: UseMutationOptions<unknown, AxiosError<unknown, unknown>, PutActionParams, unknown>,
) => {
  const toast = useToast();
  return useMutation({
    mutationFn: (body: PutActionParams) => putAction(body),
    mutationKey: ['put-action'],
    onError: () => {
      toast({
        description: 'Erro ao enviar comprovantes! Tente novamente mais tarde',
        status: 'error',
      });
    },
    ...params,
  });
};
