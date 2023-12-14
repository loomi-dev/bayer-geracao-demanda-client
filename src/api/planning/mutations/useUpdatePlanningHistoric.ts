import { useMutation } from '@tanstack/react-query';

import { MutOpt, UpdatePlanningHistoricResponse } from '@/api';
import { queryClient } from '@/lib/react-query';

import { updatePlanningHistoric } from '../endpoints';

export const useUpdatePlanningHistoric = (options?: MutOpt<UpdatePlanningHistoricResponse>) =>
  useMutation({
    ...options,
    mutationKey: ['update-historic'],
    mutationFn: updatePlanningHistoric,
    onSuccess: () => {
      queryClient.invalidateQueries(['planning-historic']);
      queryClient.invalidateQueries(['planning-status']);
      queryClient.invalidateQueries(['planning-actions-statistics']);
      queryClient.invalidateQueries(['planning-actions']);
    },
  });
