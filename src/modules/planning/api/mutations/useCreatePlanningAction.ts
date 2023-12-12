import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api';
import { queryClient } from '@/lib/react-query';

import { createPlanningAction } from '../endpoints';
import { CreatePlanningActionResponse } from '../types';

export const useCreatePlanningAction = (options?: MutOpt<CreatePlanningActionResponse>) =>
  useMutation({
    ...options,
    mutationKey: ['create-planning-action'],
    mutationFn: createPlanningAction,
    onSuccess: () => {
      queryClient.invalidateQueries(['planning-actions']);
      queryClient.invalidateQueries(['planning-actions-statistics']);
      queryClient.invalidateQueries(['planning-status']);
    },
  });
