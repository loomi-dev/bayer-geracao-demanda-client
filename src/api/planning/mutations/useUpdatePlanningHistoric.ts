import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt, UpdatePlanningHistoricResponse } from '@/api';
import { queryClient } from '@/lib/react-query';

import { updatePlanningHistoric } from '../endpoints';

enum toastTitle {
  'ready_for_evaluation' = 'enviado para avaliação',
  'accepted' = 'aceito',
  'rejected' = 'recusado',
}

export const useUpdatePlanningHistoric = (options?: MutOpt<UpdatePlanningHistoricResponse>) => {
  const toast = useToast();
  useMutation({
    ...options,
    mutationKey: ['update-historic'],
    mutationFn: updatePlanningHistoric,
    onSuccess: async ({ data }) => {
      await Promise.all([
        queryClient.invalidateQueries(['planning-actions-statistics', 'planning-actions']),
      ]);
      toast({ title: `O planejamento foi ${toastTitle[data.status]}  `, status: 'success' });
    },
  });
};
