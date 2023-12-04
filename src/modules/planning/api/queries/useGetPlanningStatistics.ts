import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getPlanningStatistics } from '../endpoints';
import { GetPlanningStatisticsParams, GetPlanningStatisticsResponse } from '../types';

export const useGetPlanningStatistics = (
  params: GetPlanningStatisticsParams,
  options?: QueryOpt<GetPlanningStatisticsResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['planning-statistics', ...Object.values(params)],
    queryFn: () => getPlanningStatistics(params),
  });
