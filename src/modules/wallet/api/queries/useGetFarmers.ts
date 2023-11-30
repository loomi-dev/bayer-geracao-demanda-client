import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getFarmer } from '../endpoints';
import { GetFarmerData, GetFarmerResponse } from '../types';

export const useGetFarmers = (params: GetFarmerData, options?: QueryOpt<GetFarmerResponse>) =>
  useQuery({
    ...options,
    queryKey: ['get-farmers', ...Object.values(params)],
    queryFn: () => getFarmer(params),
  });
