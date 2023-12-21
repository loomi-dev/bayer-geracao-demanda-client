import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api/types';
import { invalidateQueries } from '@/utils';

import { deletePlanning } from '../endpoints';
import { DeletePlanningResponse } from '../types';

export const useDeletePlanning = (options?: MutOpt<DeletePlanningResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationKey: ['delete-planning'],
    mutationFn: deletePlanning,
    onSuccess: async () => {
      invalidateQueries(
        'get-customers-plannings-by-userId ',
        'farmer-plans',
        'planning-statistics',
        'get-farmer',
      );

      toast({
        description: 'Você deletou um planejamento.',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        description:
          'Ocorreu um erro ao deletar o planejamento, tente novamente ou contate o suporte.',
        status: 'error',
      });
    },
  });
};
