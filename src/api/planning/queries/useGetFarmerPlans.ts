import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getFarmerPlans } from '../endpoints';
import { GetFarmerPlansParams, GetFarmerPlansResponse } from '../types';

export const useGetFarmerPlans = (
  params: GetFarmerPlansParams,
  options?: QueryOpt<GetFarmerPlansResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['farmer-plans', ...Object.values(params)],
    queryFn: () => getFarmerPlans(params),
  });
