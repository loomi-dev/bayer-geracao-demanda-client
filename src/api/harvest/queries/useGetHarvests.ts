import { useQuery } from '@tanstack/react-query';

import { GetHarvestsResponse, QueryOpt } from '@/api';

import { getHarvests } from '../endpoints';

export const useGetHarvests = (options?: QueryOpt<GetHarvestsResponse>) =>
  useQuery({
    ...options,
    queryKey: ['get-harvests'],
    queryFn: getHarvests,
  });
