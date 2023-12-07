import axios from '@/lib/axios';

import { CreatePlanningActionData, CreatePlanningActionResponse } from './types';

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
