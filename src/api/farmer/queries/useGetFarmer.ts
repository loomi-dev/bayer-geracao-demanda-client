import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getFarmer } from '../endpoints';
import { GetFarmerParams, GetFarmerResponse } from '../types';

export const useGetFarmer = (params: GetFarmerParams, options?: QueryOpt<GetFarmerResponse>) =>
  useQuery({
    ...options,
    queryKey: ['get-farmer', ...Object.values(params)],
    queryFn: () => getFarmer(params),
  });
