import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getExampleReceipts } from '../endpoints';

export const useGetExampleReceipts = (options?: QueryOpt<any>) =>
  useQuery({
    ...options,
    queryKey: ['get-example-receipts'],
    queryFn: () => getExampleReceipts(),
  });
