import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { MutOpt } from '@/api';
import { invalidateQueries } from '@/utils';

import { createPlanning } from '../endpoints';
import { CreatePlanningResponse } from '../types';

export const useCreatePlanning = (options?: MutOpt<CreatePlanningResponse>) => {
  const { push } = useRouter();
  const toast = useToast();

  return useMutation({
    ...options,
    mutationKey: ['create-planning'],
    mutationFn: createPlanning,
    onSuccess: async (data) => {
      invalidateQueries('get-customers-plannings-by-userId ', 'farmer-plans');

      toast({
        description: 'Você criou um novo planejamento.',
        status: 'success',
      });
      push({
        pathname: '/planejamento/criar-novo-planejamento',
        query: {
          planning_id: data?.data?.id,
        },
      });
    },
    onError: (err) => {
      const errorPlanningAlreadyExists =
        err?.response?.data?.error?.name === 'PLANNING_ALREADY_EXIST';

      toast({
        description: errorPlanningAlreadyExists
          ? 'Não foi possível criar um novo planejamento.'
          : 'Ocorreu um erro na criação de um novo planejamento, tente novamente ou contate o suporte.',
        status: 'error',
      });
    },
  });
};
