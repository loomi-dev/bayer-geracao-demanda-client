import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getManager } from '../endpoints';
import { GetManagerParams, GetManagerResponse } from '../types';

export const useGetManager = (params: GetManagerParams, options?: QueryOpt<GetManagerResponse>) =>
  useQuery({
    ...options,
    queryKey: ['get-customer', ...Object.values(params)],
    queryFn: () => getManager(params),
  });
