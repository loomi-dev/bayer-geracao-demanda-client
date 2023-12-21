import qs from 'qs';

import axios from '@/lib/axios';

import { GetFarmerParams, GetFarmerResponse } from './types';

export const getFarmer = async ({ farmerId }: GetFarmerParams): Promise<GetFarmerResponse> => {
  const query = qs.stringify({
    filters: {
      id: {
        $eq: farmerId,
      },
    },
    populate: {
      wallet: true,
      safra: true,
      users_permissions_user: true,
    },
  });

  const { data } = await axios.authorized().get(`/farmers?${query}`);

  return data;
};
