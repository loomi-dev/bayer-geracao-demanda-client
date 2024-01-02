import qs from 'qs';

import axios from '@/lib/axios';

import { UseGetTrousseauResponse, useGetTrousseauParams } from './types';

export const getTrousseau = async ({
  supplierIds,
}: useGetTrousseauParams): Promise<UseGetTrousseauResponse> => {
  const query = qs.stringify({
    populate: {
      material_items: {
        populate: {
          photo: true,
          suppliers: true,
        },
      },
      catalogs: {
        populate: {
          photo: true,
          document: true,
        },
      },
      suppliers: supplierIds?.length
        ? {
            filters: {
              id: {
                $in: supplierIds,
              },
            },
          }
        : true,
    },
  });
  const { data } = await axios.authorized().get(`/trousseau?${query}`);
  return data;
};
