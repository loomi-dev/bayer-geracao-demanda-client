import dayjs from 'dayjs';
import qs from 'qs';

import axios from '@/lib/axios';

import {
  CreatePlanningData,
  CreatePlanningResponse,
  GetFarmerPlansParams,
  GetFarmerPlansResponse,
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

export const getFarmerPlans = async ({
  farmerId,
}: GetFarmerPlansParams): Promise<GetFarmerPlansResponse> => {
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

export const createPlanning = async ({
  farmerId,
}: CreatePlanningData): Promise<CreatePlanningResponse> => {
  const { data } = await axios.authorized().post('/plannings', {
    data: {
      farmer: {
        connect: [
          {
            id: farmerId,
          },
        ],
      },
      safra: {
        connect: [
          {
            id: farmerId,
          },
        ],
      },
      date: dayjs().format('YYYY-MM-DD'),
    },
  });

  return data;
};
