import { useQuery } from '@tanstack/react-query';

import { getRandomUsers } from '@/api/endpoints/example';

export const useGetRandomUsers = () =>
  useQuery({
    queryKey: ['random-user'],
    queryFn: () => getRandomUsers(),
  });
