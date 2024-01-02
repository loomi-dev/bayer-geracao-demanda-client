import qs from 'qs';

import axios from '@/lib/axios';

import { GetHarvestsResponse } from './types';

export const getHarvests = async (): Promise<GetHarvestsResponse> => {
  const query = qs.stringify({
    filters: {
      current: true,
    },
  });

  const { data } = await axios.unauthorized().get(`/safras?${query}`);

  return data;
};
