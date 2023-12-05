import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getPlanningActions } from '../endpoints';
import { GetPlanningActionsParams, GetPlanningActionsResponse } from '../types';

export const useGetPlanningActions = (
  params: GetPlanningActionsParams,
  options?: QueryOpt<GetPlanningActionsResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['planning-actions', ...Object.values(params)],
    queryFn: () => getPlanningActions(params),
  });
