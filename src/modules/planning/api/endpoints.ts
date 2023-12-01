import qs from 'qs';

import axios from '@/lib/axios';

import {
  GetFarmerAllPlansParams,
  GetFarmerAllPlansResponse,
  GetPlanningStatisticsParams,
  GetPlanningStatisticsResponse,
} from './types';

export const getPlanningStatistics = async ({
  userId,
}: GetPlanningStatisticsParams): Promise<GetPlanningStatisticsResponse> => {
  const queryParams = qs.stringify({
    filters: {
      users_permissions_user: {
        id: {
          $eq: userId,
        },
      },
    },
    populate: {
      planning_summary: true,
    },
  });

  const { data } = await axios
    .authorized()
    .get<GetPlanningStatisticsResponse>(`/farmers?${queryParams}`);

  return data;
};

export const getFarmerAllPlans = async ({
  farmerId,
}: GetFarmerAllPlansParams): Promise<GetFarmerAllPlansResponse> => {
  const query = qs.stringify({
    filters: {
      users_permissions_user: {
        id: {
          $eq: farmerId,
        },
      },
    },
    populate: {
      actions: true,
      decisions: true,
      safra: true,
      historic: {
        populate: {
          actions: true,
        },
      },
    },
  });

  const { data } = await axios.authorized().get(`/plannings?${query}`);

  return data;
};
