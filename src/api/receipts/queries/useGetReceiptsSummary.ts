import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api/types';

import { getReceiptsSummary } from '../endpoints';
import { GetReceiptsSummaryParams, GetReceiptsSummaryResponse } from '../types';

export const useGetReceiptsSummary = (
  params: GetReceiptsSummaryParams,
  options: QueryOpt<GetReceiptsSummaryResponse>,
) =>
  useQuery({
    ...options,
    queryKey: ['get-receipts-summary', ...Object.values(params)],
    queryFn: () => getReceiptsSummary(params),
  });
