import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getFarmerAllPlans } from '../endpoints';
import { GetFarmerAllPlansParams, GetFarmerAllPlansResponse } from '../types';

export const useGetFarmerAllPlans = (
  params: GetFarmerAllPlansParams,
  options?: QueryOpt<GetFarmerAllPlansResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['farmer-all-plans', ...Object.values(params)],
    queryFn: () => getFarmerAllPlans(params),
  });
