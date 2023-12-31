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
      invalidateQueries(
        'farmer-pending-plannings',
        'get-customers-plannings-by-userId ',
        'farmer-plans',
        'planning-historic',
        'planning-status',
        'planning-actions-statistics',
        'planning-actions',
      );
    },
  });
