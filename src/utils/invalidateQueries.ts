import { queryClient } from '@/lib/react-query';

export const invalidateQueries = (queries: string[]) =>
  queries.forEach((querie) => queryClient.invalidateQueries([querie]));
