import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getFarmerPendingPlannings } from '../endpoints';
import { GetFarmerPendingPlanningsParams, GetFarmerPendingPlanningsResponse } from '../types';

export const useGetFarmerPendingPlannings = (
  params: GetFarmerPendingPlanningsParams,
  options?: QueryOpt<GetFarmerPendingPlanningsResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['farmer-pending-plannings', ...Object.values(params)],
    queryFn: () => getFarmerPendingPlannings(params),
  });
