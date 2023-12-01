import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import { MutOpt } from '@/api/types';

import { updateUser } from '../endpoints';
import { UpdateUserData, UpdateUserResponse } from '../types';

export const useUpdateUser = (options?: MutOpt<UpdateUserResponse, UpdateUserData>) => {
  const toast = useToast();
  const { update: updateSession } = useSession();

  return useMutation({
    ...options,
    mutationKey: ['update-user'],
    mutationFn: async (userData) => {
      const newUser = await updateUser(userData);
      await updateSession(newUser);

      return newUser;
    },
    onSuccess: () => {
      toast({
        description: 'Usuário atualizado!',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        description: 'Ocorreu um erro na atualização do usuário.',
        status: 'error',
      });
    },
  });
};
