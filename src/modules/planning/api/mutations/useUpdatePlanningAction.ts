import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api';
import { queryClient } from '@/lib/react-query';

import { updatePlanningAction } from '../endpoints';
import { UpdatePlanningActionResponse } from '../types';

export const useUpdatePlanningAction = (options?: MutOpt<UpdatePlanningActionResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationKey: ['update-planning-action'],
    mutationFn: updatePlanningAction,
    onSuccess: (_, { title }) => {
      queryClient.invalidateQueries(['planning-actions']);
      queryClient.invalidateQueries(['planning-actions-statistics']);
      queryClient.invalidateQueries(['planning-status']);
      queryClient.invalidateQueries(['get-farmer']);

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
