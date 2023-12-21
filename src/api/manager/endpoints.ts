import qs from 'qs';

import axios from '@/lib/axios';

import { GetManagerParams } from './types';

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
