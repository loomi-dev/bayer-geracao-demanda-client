import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api/';

import { getNotificationsByUser } from '../endpoints';
import { GetNotificationsByUserParams, GetNotificationsByUserResponse } from '../types';

export const useGetNotificationsByUser = (
  params: GetNotificationsByUserParams,
  options?: QueryOpt<GetNotificationsByUserResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['get-notifications-by-user', ...Object.values(params)],
    queryFn: () => getNotificationsByUser(params),
  });
