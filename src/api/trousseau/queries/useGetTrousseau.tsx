import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api/types';

import { getTrousseau } from '../endpoints';
import { UseGetTrousseauResponse } from '../types';

export const useGetTrousseau = (options?: QueryOpt<UseGetTrousseauResponse>) =>
  useQuery({
    ...options,
    queryKey: ['get-trousseau'],
    queryFn: () => getTrousseau(),
  });
