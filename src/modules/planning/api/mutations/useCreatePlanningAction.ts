import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api';
import { queryClient } from '@/lib/react-query';

import { createPlanningAction } from '../endpoints';
import { CreatePlanningActionResponse } from '../types';

export const useCreatePlanningAction = (options?: MutOpt<CreatePlanningActionResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationKey: ['create-planning-action'],
    mutationFn: createPlanningAction,
    onSuccess: () => {
      queryClient.invalidateQueries(['planning-actions']);
      queryClient.invalidateQueries(['planning-actions-statistics']);
      queryClient.invalidateQueries(['planning-status']);
      queryClient.invalidateQueries(['get-farmer']);

      toast({
        description: 'Você criou uma ação para seu planejamento.',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        description:
          'Ocorreu um erro ao criar a ação para o planejamento, tente novamente ou contate o suporte.',
        status: 'error',
      });
    },
  });
};
