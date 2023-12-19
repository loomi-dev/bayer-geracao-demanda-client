import { useMutation } from '@tanstack/react-query';

import { MutOpt, UpdatePlanningHistoricResponse } from '@/api';
import { invalidateQueries } from '@/utils';

import { updatePlanningHistoric } from '../endpoints';

export const useUpdatePlanningHistoric = (options?: MutOpt<UpdatePlanningHistoricResponse>) =>
  useMutation({
    ...options,
    mutationKey: ['update-historic'],
    mutationFn: updatePlanningHistoric,
    onSuccess: () => {
      invalidateQueries([
        'get-customers',
        'farmer-plans',
        'planning-historic',
        'planning-status',
        'planning-actions-statistics',
        'planning-actions',
      ]);
    },
  });
