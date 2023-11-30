import qs from 'qs';

import axios from '@/lib/axios';

import { GetFaqsResponse, GetFarmersResponse } from './types';

export const getFaqs = async (): Promise<GetFaqsResponse> => {
  const response = await axios.authorized().get('/faqs');

  return response.data;
};

export const getFarmers = async (): Promise<GetFarmersResponse> => {
  const query = qs.stringify({
    filters: {
      users_permissions_user: {
        id: {
          $eq: 1,
        },
      },
    },
    populate: {
      wallet: true,
      notifications: {
        populate: {
          safra: true,
          planning: {
            populate: {
              actions: true,
            },
          },
        },
      },
    },
  });
  const response = await axios.authorized().get(`/farmers?${query}`);
  return response.data;
};
