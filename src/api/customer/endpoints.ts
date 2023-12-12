import qs from 'qs';

import axios from '@/lib/axios';

import { GetCustomersResponse, GetCustomerParams } from './types';

export const getCustomers = async ({
  id,
  filter,
  pagination,
}: GetCustomerParams): Promise<GetCustomersResponse> => {
  const filters = {
    farmer: {
      manager: {
        users_permissions_user: {
          id: {
            $eq: id,
          },
        },
      },
      ...(filter?.region ? { region: { $eq: filter?.region } } : {}),
      ...(filter?.district ? { district: { $eq: filter?.district } } : {}),
      ...(filter?.search
        ? {
            $or: [
              {
                company_identifier: {
                  $contains: filter.search,
                },
              },
              {
                company_name: {
                  $contains: filter.search,
                },
              },
            ],
          }
        : {}),
    },
  };

  const query = qs.stringify({
    filters,
    pagination,
    populate: {
      farmer: {
        populate: {
          wallet: {
            transaction: true,
          },
          planning_summary: true,
          users_permissions_user: true,
        },
      },
      financial_summary: true,
      historic: true,
      actions: true,
    },
  });

  const response = await axios.authorized().get(`/plannings?${query}`);
  return response.data;
};
