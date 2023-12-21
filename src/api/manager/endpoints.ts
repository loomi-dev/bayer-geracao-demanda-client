import qs from 'qs';

import axios from '@/lib/axios';

import { GetManagerParams, UpdateManagerData, UpdateManagerResponse } from './types';

export const getManager = async ({ id }: GetManagerParams) => {
  const query = qs.stringify({
    filters: {
      users_permissions_user: {
        id: {
          $eq: id,
        },
      },
    },
    populate: {
      safra: true,
      farmers: true,
    },
  });
  const response = await axios.authorized().get(`/managers?${query}`);
  return response.data;
};

export const updateManager = async ({
  managerId,
  username,
  phoneNumber,
  email,
}: UpdateManagerData): Promise<UpdateManagerResponse> => {
  const { data } = await axios.authorized().put(`/managers/${managerId}`, {
    data: {
      username,
      email,
      phoneNumber,
    },
  });

  return data;
};
