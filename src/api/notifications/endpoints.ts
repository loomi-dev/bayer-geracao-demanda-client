import qs from 'qs';

import axios from '@/lib/axios';

import { GetNotificationsByUserParams, GetNotificationsByUserResponse } from './types';

export const getNotificationsByUser = async ({
  userId,
  pagination,
}: GetNotificationsByUserParams): Promise<GetNotificationsByUserResponse> => {
  const query = qs.stringify({
    filters: {
      users: {
        id: {
          $in: [userId],
        },
      },
    },
    populate: {
      safra: true,
    },
    sort: 'createdAt:desc',
    pagination,
  });

  const response = await axios.authorized().get(`/notifications?${query}`);

  return response.data;
};
