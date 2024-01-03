import qs from 'qs';

import axios from '@/lib/axios';

import { GetManagerParams, UpdateManagerData, UpdateManagerResponse } from './types';

export const getManager = async ({ managerId }: GetManagerParams) => {
  const query = qs.stringify({
    populate: {
      safra: true,
      farmers: true,
    },
  });
  const response = await axios.authorized().get(`/managers/${managerId}?${query}`);
  return response.data;
};

export const updateManager = async ({
  managerId,
  username,
  phoneNumber,
  email,
  confirmed,
}: UpdateManagerData): Promise<UpdateManagerResponse> => {
  const { data } = await axios.authorized().put(`/managers/${managerId}`, {
    data: {
      username,
      email,
      phoneNumber,
      confirmed,
    },
  });

  return data;
};
