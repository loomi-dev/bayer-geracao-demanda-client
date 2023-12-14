import { useMutation } from '@tanstack/react-query';

import { MutOpt, UpdatePlanningHistoricResponse } from '@/api';

import { updatePlanningHistoric } from '../endpoints';

export const useUpdatePlanningHistoric = (options?: MutOpt<UpdatePlanningHistoricResponse>) =>
  useMutation({
    ...options,
    mutationKey: ['update-historic'],
    mutationFn: updatePlanningHistoric,
  });
