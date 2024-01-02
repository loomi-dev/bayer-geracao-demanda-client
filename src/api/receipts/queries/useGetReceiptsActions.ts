import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getReceiptsActions } from '../endpoints';
import { GetReceiptsActionsParams, GetReceiptsActionsResponse } from '../types';

export const useGetReceiptsActions = (
  params: GetReceiptsActionsParams,
  options?: QueryOpt<GetReceiptsActionsResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['get-receipts-actions', params],
    queryFn: () => getReceiptsActions(params),
  });
