import axios from '@/lib/axios';

import {
  CreatePlanningActionData,
  CreatePlanningActionResponse,
  DeletePlanningActionParams,
  DeletePlanningActionResponse,
  UpdatePlanningActionData,
  UpdatePlanningActionResponse,
} from './types';

export const createPlanningAction = async ({
  farmerId,
  planningId,
  ...planningActionData
}: CreatePlanningActionData): Promise<CreatePlanningActionResponse> =>
  await axios.authorized().post('/actions', {
    data: {
      planning: {
        connect: [
          {
            id: planningId,
          },
        ],
      },
      farmer: {
        connect: [
          {
            id: farmerId,
          },
        ],
      },
      ...planningActionData,
    },
  });

export const deletePlanningAction = async ({
  actionId,
}: DeletePlanningActionParams): Promise<DeletePlanningActionResponse> =>
  await axios.authorized().put(`/actions/${actionId}`, {
    data: {
      deletedAt: new Date().toISOString(),
    },
  });

export const updatePlanningAction = async ({
  farmerId,
  planningId,
  planningActionId,
  ...planningActionData
}: UpdatePlanningActionData): Promise<UpdatePlanningActionResponse> =>
  await axios.authorized().put(`/actions/${planningActionId}`, {
    data: {
      planning: {
        connect: [
          {
            id: planningId,
          },
        ],
      },
      farmer: {
        connect: [
          {
            id: farmerId,
          },
        ],
      },
      ...planningActionData,
    },
  });
