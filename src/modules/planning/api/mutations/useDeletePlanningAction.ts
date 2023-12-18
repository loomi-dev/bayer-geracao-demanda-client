import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api';
import { queryClient } from '@/lib/react-query';

import { deletePlanningAction } from '../endpoints';
import { DeletePlanningActionResponse } from '../types';

export const useDeletePlanningAction = (options?: MutOpt<DeletePlanningActionResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationKey: ['delete-planning-action'],
    mutationFn: deletePlanningAction,
    onSuccess: () => {
      queryClient.invalidateQueries(['planning-actions']);
      queryClient.invalidateQueries(['planning-actions-statistics']);
      queryClient.invalidateQueries(['planning-status']);
      queryClient.invalidateQueries(['get-farmer']);

      toast({
        description: 'Você excluiu uma ação do seu planejamento.',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        description:
          'Não foi possível excluir a ação do planejamento, tente novamente ou contate o suporte.',
        status: 'error',
      });
    },
  });
};
