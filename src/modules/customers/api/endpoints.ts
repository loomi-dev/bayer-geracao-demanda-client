import qs from 'qs';

import axios from '@/lib/axios';

import { GetCustomersResponse, GetCustomerParams } from './types';

export const getCustomers = async ({
  id,
  filter,
}: GetCustomerParams): Promise<GetCustomersResponse> => {
  const filters = {
    farmer: {
      manager: {
        id: { $eq: id },
      },
    },
    ...(filter?.region ? { region: { $eq: filter?.region } } : {}),
    ...(filter?.district ? { district: { $eq: filter?.district } } : {}),
    ...(filter?.company_identifier ? { company_identifier: { $eq: filter?.district } } : {}),
  };
  const query = qs.stringify({
    filters,
    populate: {
      farmer: {
        populate: {
          wallet: {
            transaction: true,
          },
        },
      },
      historic: true,
    },
  });

  const response = await axios.authorized().get(`/plannings?${query}`);
  return response.data;
};
