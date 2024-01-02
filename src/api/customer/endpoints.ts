import qs from 'qs';

import axios from '@/lib/axios';

import { GetCustomerPlanningsByUserIdParams, GetCustomerPlanningsByUserIdResponse } from './types';

export const getCustomerPlanningsByUserId = async ({
  managerId,
  filter,
  pagination,
}: GetCustomerPlanningsByUserIdParams): Promise<GetCustomerPlanningsByUserIdResponse> => {
  const filters = {
    farmer: {
      managers: {
        id: {
          $eq: managerId,
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
      ...((filter?.customers ?? []).length > 0
        ? {
            company_identifier: {
              $in: filter?.customers,
            },
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
