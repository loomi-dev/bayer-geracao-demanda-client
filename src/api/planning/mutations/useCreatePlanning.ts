import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { MutOpt } from '@/api';
import { queryClient } from '@/lib/react-query';

import { createPlanning } from '../endpoints';
import { CreatePlanningResponse } from '../types';

export const useCreatePlanning = (options?: MutOpt<CreatePlanningResponse>) => {
  const { push } = useRouter();

  return useMutation({
    ...options,
    mutationKey: ['create-planning'],
    mutationFn: createPlanning,
    onSuccess: async (data) => {
      queryClient.invalidateQueries(['farmer-plans']);

      push({
        pathname: '/planejamento/criar-novo-planejamento',
        query: {
          planning_id: data?.data?.id,
        },
      });
    },
  });
};
