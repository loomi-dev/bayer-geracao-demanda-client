import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api';
import { invalidateQueries } from '@/utils';

import { createPlanningAction } from '../endpoints';
import { CreatePlanningActionResponse } from '../types';

export const useCreatePlanningAction = (options?: MutOpt<CreatePlanningActionResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationKey: ['create-planning-action'],
    mutationFn: createPlanningAction,
    onSuccess: () => {
      invalidateQueries(
        'get-customers-plannings-by-userId ',
        'planning-actions',
        'planning-actions-statistics',
        'planning-status',
        'get-farmer',
      );

      toast({
        description: 'Você criou uma ação para seu planejamento.',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        description:
          'Ocorreu um erro ao criar a ação para o planejamento, tente novamente ou contate o suporte.',
        status: 'success',
      });
    },
  });
};
