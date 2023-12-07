import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getPlanningHistoric } from '../endpoints';
import { GetPlanningHistoricParams, GetPlanningHistoricResponse } from '../types';

export const useGetPlanningHistoric = (
  params: GetPlanningHistoricParams,
  options?: QueryOpt<GetPlanningHistoricResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['planning-historic', ...Object.values(params)],
    queryFn: () => getPlanningHistoric(params),
  });
