import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api/types';

import { getPlanningStatus } from '../endpoints';
import { GetPlanningStatusParams, GetPlanningStatusResponse } from '../types';

export const useGetPlanningStatus = (
  params: GetPlanningStatusParams,
  options?: QueryOpt<GetPlanningStatusResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['planning-status', ...Object.values(params)],
    queryFn: () => getPlanningStatus(params),
  });
