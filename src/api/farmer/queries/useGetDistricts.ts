import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api/types';

import { getDistricts } from '../endpoints';
import { GetDistrictsParams, GetDistrictsResponse } from '../types';

export const useGetDistricts = (
  params: GetDistrictsParams,
  options?: QueryOpt<GetDistrictsResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['get-districts', ...Object.values(params)],
    queryFn: () => getDistricts(params),
  });
