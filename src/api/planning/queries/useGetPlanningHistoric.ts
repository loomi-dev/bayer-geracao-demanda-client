import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getPlanningHistoric } from '../endpoints';
import { GetPlanningHistoricParams } from '../types';

export const useGetPlanningHistoric = (
  params: GetPlanningHistoricParams,
  options?: QueryOpt<Historic>,
) =>
  useQuery({
    ...options,
    queryKey: ['planning-historic', ...Object.values(params)],
    queryFn: () => getPlanningHistoric(params),
  });
