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

      toast({
        description: 'Sua ação foi deletada.',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        description:
          'Não foi possível deletar a ação do planejamento, tente novamente ou contate o suporte.',
        status: 'error',
      });
    },
  });
};
