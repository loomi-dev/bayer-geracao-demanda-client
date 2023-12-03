import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getCustomers } from '../endpoints';
import { GetCustomerParams, GetCustomersResponse } from '../types';

export const useGetCustomers = (
  params: GetCustomerParams,
  options?: QueryOpt<GetCustomersResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['get-customers', ...Object.values(params)],
    queryFn: () => getCustomers(params),
  });
