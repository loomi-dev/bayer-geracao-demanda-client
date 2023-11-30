import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getFarmers } from '../endpoints';
import { GetFarmersResponse } from '../types';

export const useGetFarmers = (options?: QueryOpt<GetFarmersResponse>) =>
  useQuery({
    ...options,
    queryKey: ['get-farmers'],
    queryFn: () => getFarmers(),
  });
