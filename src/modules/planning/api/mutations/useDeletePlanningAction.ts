import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api';
import { invalidateQueries } from '@/utils';

import { deletePlanningAction } from '../endpoints';
import { DeletePlanningActionResponse } from '../types';

export const useDeletePlanningAction = (options?: MutOpt<DeletePlanningActionResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationKey: ['delete-planning-action'],
    mutationFn: deletePlanningAction,
    onSuccess: () => {
      invalidateQueries(
        'get-customers-plannings-by-userId ',
        'planning-actions',
        'planning-actions-statistics',
        'planning-status',
        'get-farmer',
      );

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
