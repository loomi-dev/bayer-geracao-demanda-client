import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api/types';

import { getPlannings } from '../endpoints';
import { GetPlanningsResponse } from '../types';

export const useGetPlannings = (options?: QueryOpt<GetPlanningsResponse>) =>
  useQuery({
    ...options,
    queryKey: ['get-plannings'],
    queryFn: () => getPlannings(),
  });
