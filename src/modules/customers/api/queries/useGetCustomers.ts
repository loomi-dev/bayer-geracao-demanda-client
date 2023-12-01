import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import { QueryOpt } from '@/api';

import { getCustomers } from '../endpoints';

export const useGetCustomers = (params, options?: QueryOpt<any>) => {
  const session = useSession();
  const userId = session.data?.user.id;
  const queryParams = { id: userId, ...params };
  return useQuery({
    enabled: Boolean(userId),
    ...options,
    queryKey: ['get-customers', ...Object.values(queryParams)],
    queryFn: () => getCustomers(queryParams),
  });
};
