import { QueryOptions, useQuery } from '@tanstack/react-query';

import { getDashboard } from '../endpoints';
import { GetDashboardResponse } from '../types';

export const useGetDashboard = (options?: QueryOptions<GetDashboardResponse>) =>
  useQuery({
    ...options,
    queryKey: ['get-dashboard'],
    queryFn: () => getDashboard(),
  });
