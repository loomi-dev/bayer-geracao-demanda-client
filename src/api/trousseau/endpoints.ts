import qs from 'qs';

import axios from '@/lib/axios';

import { UseGetTrousseauResponse } from './types';

export const getTrousseau = async (): Promise<UseGetTrousseauResponse> => {
  const query = qs.stringify({
    populate: {
      material_items: {
        populate: {
          photo: true,
        },
      },
      catalogs: {
        populate: {
          photo: true,
          document: true,
        },
      },
      suppliers: true,
    },
  });
  const { data } = await axios.authorized().get(`/trousseau?${query}`);
  return data;
};
