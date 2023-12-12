import axios from '@/lib/axios';

import {
  CreatePlanningActionData,
  CreatePlanningActionResponse,
  DeletePlanningActionParams,
  DeletePlanningActionResponse,
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
  await axios.authorized().delete(`/actions/${actionId}`);
