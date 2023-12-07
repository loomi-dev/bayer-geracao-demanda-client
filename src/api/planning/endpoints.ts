import dayjs from 'dayjs';
import qs from 'qs';

import axios from '@/lib/axios';

import {
  CreatePlanningData,
  CreatePlanningResponse,
  GetFarmerPlansParams,
  GetFarmerPlansResponse,
  GetPlanningActionsParams,
  GetPlanningActionsResponse,
  GetPlanningActionsStatisticsParams,
  GetPlanningActionsStatisticsResponse,
  GetPlanningHistoricParams,
  GetPlanningHistoricResponse,
  GetPlanningStatisticsParams,
  GetPlanningStatisticsResponse,
  GetPlanningStatusParams,
  GetPlanningStatusResponse,
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
  page,
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
    pagination: {
      page,
      pageSize: 5,
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

export const getPlanningActionsStatistics = async ({
  planningId,
}: GetPlanningActionsStatisticsParams): Promise<GetPlanningActionsStatisticsResponse> => {
  const query = qs.stringify({
    populate: {
      metric: true,
    },
  });

  const { data } = await axios.authorized().get(`/plannings/${planningId}?${query}`);

  return data;
};

export const getPlanningActions = async ({
  planningId,
  pagination,
}: GetPlanningActionsParams): Promise<GetPlanningActionsResponse> => {
  const query = qs.stringify({
    filters: {
      planning: {
        id: planningId,
      },
    },
    pagination,
  });

  const { data } = await axios.authorized().get(`/actions?${query}`);

  return data;
};

export const getPlanningHistoric = async ({
  planningId,
}: GetPlanningHistoricParams): Promise<GetPlanningHistoricResponse> => {
  const query = qs.stringify({
    populate: {
      historic: {
        populate: {
          related: true,
          actions: true,
        },
      },
    },
  });

  const { data } = await axios.authorized().get(`/plannings/${planningId}?${query}`);

  return data;
};

export const getPlanningStatus = async ({
  planningId,
}: GetPlanningStatusParams): Promise<GetPlanningStatusResponse> => {
  const query = qs.stringify({
    populate: {
      historic: true,
    },
  });

  const { data } = await axios.authorized().get(`/plannings/${planningId}?${query}`);

  return data;
};
