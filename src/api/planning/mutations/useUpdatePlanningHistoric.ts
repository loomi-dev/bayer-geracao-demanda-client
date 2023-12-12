import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt, UpdatePlanningHistoricResponse } from '@/api';
import { queryClient } from '@/lib/react-query';

import { updatePlanningHistoric } from '../endpoints';

enum ToastTitle {
  'ready_for_evaluation' = 'enviado para avaliação',
  'accepted' = 'aceito',
  'rejected' = 'recusado',
}

export const useUpdatePlanningHistoric = (options?: MutOpt<UpdatePlanningHistoricResponse>) => {
  const toast = useToast();
  return useMutation({
    ...options,
    mutationKey: ['update-historic'],
    mutationFn: updatePlanningHistoric,
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries(['planning-actions-statistics']);
      queryClient.invalidateQueries(['planning-actions']);

      toast({
        description: `O planejamento foi ${ToastTitle[data.status]}`,
        status: 'success',
      });
    },
  });
};
