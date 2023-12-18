import qs from 'qs';

import axios from '@/lib/axios';

import { GetActionsParams, GetActionsResponse } from './types';

export const getActions = async ({
  farmerId,
  pagination,
}: GetActionsParams = {}): Promise<GetActionsResponse> => {
  const queryParams = qs.stringify({
    populate: {
      planning: {
        populate: {
          safra: true,
        },
      },
      farmer: {
        populate: {
          wallet: true,
        },
      },
    },
    pagination,
    ...(farmerId && {
      filters: {
        farmer: {
          id: farmerId,
        },
      },
    }),
  });

  const response = await axios.authorized().get(`/actions?${queryParams}`);

  return response.data;
};
