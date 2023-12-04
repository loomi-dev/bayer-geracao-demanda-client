import qs from 'qs';

import axios from '@/lib/axios';

import { GetFaqsResponse, GetFarmerData, GetFarmerResponse } from './types';

export const getFaqs = async (): Promise<GetFaqsResponse> => {
  const response = await axios.authorized().get('/faqs');

  return response.data;
};

export const getFarmer = async ({ id }: GetFarmerData): Promise<GetFarmerResponse> => {
  const query = qs.stringify({
    filters: {
      users_permissions_user: {
        id: {
          $eq: id,
        },
      },
    },
    populate: {
      wallet: true,
    },
  });
  const response = await axios.authorized().get(`/farmers?${query}`);
  return response.data;
};
