import qs from 'qs';

import axios from '@/lib/axios';

import { UseGetTrousseauResponse, useGetTrousseauParams } from './types';

export const getTrousseau = async ({
  isSelected,
  supplierIds,
}: useGetTrousseauParams): Promise<UseGetTrousseauResponse> => {
  const hasSuppliers = isSelected && Boolean(supplierIds?.length);

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
      suppliers: hasSuppliers
        ? {
            filters: {
              id: {
                $in: supplierIds,
              },
            },
          }
        : isSelected
        ? {
            filters: {
              id: {
                $in: [],
              },
            },
          }
        : true,
    },
  });
  const { data } = await axios.authorized().get(`/trousseau?${query}`);
  return data;
};
