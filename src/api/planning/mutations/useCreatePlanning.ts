import { QueryClient, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { MutOpt } from '@/api';

import { createPlanning } from '../endpoints';
import { CreatePlanningResponse } from '../types';

export const useCreatePlanning = (options?: MutOpt<CreatePlanningResponse>) => {
  const { push } = useRouter();
  const queryClient = new QueryClient();

  return useMutation({
    ...options,
    mutationKey: ['create-planning'],
    mutationFn: createPlanning,
    onSuccess: async (data) => {
      await Promise.all([
        queryClient.invalidateQueries(['farmer-plans']),
        push({
          pathname: '/planejamento/criar-novo-planejamento',
          query: {
            planning_id: data?.data?.id,
          },
        }),
      ]);
    },
  });
};
