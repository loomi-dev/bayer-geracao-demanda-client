import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api';
import { invalidateQueries } from '@/utils';

import { updatePlanningAction } from '../endpoints';
import { UpdatePlanningActionResponse } from '../types';

export const useUpdatePlanningAction = (options?: MutOpt<UpdatePlanningActionResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationKey: ['update-planning-action'],
    mutationFn: updatePlanningAction,
    onSuccess: (_, { title }) => {
      invalidateQueries(
        'get-customers-plannings-by-userId ',
        'planning-actions',
        'planning-actions-statistics',
        'planning-status',
        'get-farmer',
      );

      toast({
        description: `Você editou a ação ${title}.`,
        status: 'success',
      });
    },
    onError: (_, { title }) => {
      toast({
        description: `Ocorreu um erro ao editar a ação ${title}, tente novamente ou contate o suporte.`,
        status: 'error',
      });
    },
  });
};
