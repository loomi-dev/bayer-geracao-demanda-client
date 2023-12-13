import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api';
import { queryClient } from '@/lib/react-query';

import { updatePlanningAction } from '../endpoints';
import { UpdatePlanningActionResponse } from '../types';

export const useUpdatePlanningAction = (options?: MutOpt<UpdatePlanningActionResponse>) =>
  useMutation({
    ...options,
    mutationKey: ['update-planning-action'],
    mutationFn: updatePlanningAction,
    onSuccess: () => {
      queryClient.invalidateQueries(['planning-actions']);
      queryClient.invalidateQueries(['planning-actions-statistics']);
      queryClient.invalidateQueries(['planning-status']);
    },
  });
