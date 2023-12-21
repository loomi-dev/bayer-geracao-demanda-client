import dayjs from 'dayjs';
import qs from 'qs';

import axios from '@/lib/axios';

import {
  CreatePlanningData,
  CreatePlanningResponse,
  DeletePlanningParams,
  DeletePlanningResponse,
  GetFarmerPendingPlanningsParams,
  GetFarmerPendingPlanningsResponse,
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
  UpdatePlanningHistoricParams,
  UpdatePlanningHistoricResponse,
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

export const getFarmerPendingPlannings = async ({
  farmerId,
}: GetFarmerPendingPlanningsParams): Promise<GetFarmerPendingPlanningsResponse> => {
  const query = qs.stringify({
    populate: {
      plannings: {
        populate: {
          historic: true,
        },
      },
    },
  });

  const { data } = await axios.authorized().get(`/farmers/${farmerId}?${query}`);

  return data;
};

export const createPlanning = async ({
  farmerId,
  harvestId,
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
            id: harvestId,
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
      deletedAt: {
        $notNull: false,
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
          related: {
            populate: {
              role: true,
            },
          },
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

export const updatePlanningHistoric = async ({
  planningId,
  payload,
}: UpdatePlanningHistoricParams): Promise<UpdatePlanningHistoricResponse> => {
  const data = {
    historic: [
      ...payload.historic,
      {
        description: payload.description,
        status: payload.status,
        creation_date: dayjs().toISOString(),
        related: {
          connect: [{ id: payload.userId }],
        },
        ...(payload.actions?.length ? { actions: payload.actions } : {}),
      },
    ],
  };
  const { data: result } = await axios.authorized().put(`/plannings/${planningId}`, { data });
  return result;
};

export const deletePlanning = async ({
  planningId,
}: DeletePlanningParams): Promise<DeletePlanningResponse> =>
  await axios.authorized().delete(`/plannings/${planningId}`);
