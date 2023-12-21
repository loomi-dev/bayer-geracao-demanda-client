import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getCustomerPlanningsByUserId } from '../endpoints';
import { GetCustomerPlanningsByUserIdParams, GetCustomerPlanningsByUserIdResponse } from '../types';

export const useGetCustomerPlanningsByUserId = (
  params: GetCustomerPlanningsByUserIdParams,
  options?: QueryOpt<GetCustomerPlanningsByUserIdResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['get-customers-plannings-by-userId', ...Object.values(params)],
    queryFn: () => getCustomerPlanningsByUserId(params),
  });
