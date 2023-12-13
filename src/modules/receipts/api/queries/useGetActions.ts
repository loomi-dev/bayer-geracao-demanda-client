import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getActions } from '../endpoints';
import { GetActionsParams } from '../types';

export const useGetActions = (params: GetActionsParams = {}, options?: QueryOpt<any>) =>
  useQuery({
    ...options,
    queryKey: ['get-actions', params],
    queryFn: () => getActions(params),
  });
