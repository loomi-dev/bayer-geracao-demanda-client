import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api/types';

import { getTrousseau } from '../endpoints';
import { UseGetTrousseauResponse, useGetTrousseauParams } from '../types';

export const useGetTrousseau = (
  params: useGetTrousseauParams,
  options?: QueryOpt<UseGetTrousseauResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['get-trousseau', ...Object.values(params)],
    queryFn: () => getTrousseau(params),
  });
