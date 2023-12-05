import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getPlanningActionsStatistics } from '../endpoints';
import { GetPlanningActionsStatisticsParams, GetPlanningActionsStatisticsResponse } from '../types';

export const useGetPlanningActionsStatistics = (
  params: GetPlanningActionsStatisticsParams,
  options?: QueryOpt<GetPlanningActionsStatisticsResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['planning-actions-statistics', ...Object.values(params)],
    queryFn: () => getPlanningActionsStatistics(params),
  });
