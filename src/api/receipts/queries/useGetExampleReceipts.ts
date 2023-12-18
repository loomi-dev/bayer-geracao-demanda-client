import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getExampleReceipts } from '../endpoints';
import { GetExampleReceiptsResponse } from '../types';

export const useGetExampleReceipts = (options?: QueryOpt<GetExampleReceiptsResponse>) =>
  useQuery({
    ...options,
    queryKey: ['get-example-receipts'],
    queryFn: () => getExampleReceipts(),
  });
