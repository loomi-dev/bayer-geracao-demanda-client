import { QueryOptions, useQuery } from '@tanstack/react-query';

import { getDashboard } from '../endpoints';
import { GetDashboardParams, GetDashboardResponse } from '../types';

export const useGetDashboard = (
  params: GetDashboardParams,
  options?: QueryOptions<GetDashboardResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['get-dashboard', ...Object.values(params)],
    queryFn: () => getDashboard(params),
  });
