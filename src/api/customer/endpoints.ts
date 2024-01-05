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
      ...((filter?.regions ?? []).length > 0 ? { region: { $in: filter?.regions } } : {}),
      ...(filter?.districts?.length ? { district: { name: { $in: filter?.districts } } } : {}),
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
    deletedAt: {
      $notNull: false,
    },
    ...(filter?.harvests?.length ? { safra: { year: { $in: filter.harvests } } } : {}),
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
