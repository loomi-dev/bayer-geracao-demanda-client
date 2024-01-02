import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api';
import { invalidateQueries } from '@/utils';

import { sendReceiptAction } from '../endpoints';
import { SendReceiptActionResponse } from '../types';

export const useSendReceiptAction = (options?: MutOpt<SendReceiptActionResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationFn: sendReceiptAction,
    mutationKey: ['send-receipt-action'],
    onSuccess: () => {
      invalidateQueries('get-receipts-actions');

      toast({
        description: 'Seu comprovante da ação foi enviado.',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        description:
          'Ocorreu um erro ao enviar os comprovantes, tente novamente ou contate o suporte.',
        status: 'error',
      });
    },
  });
};
