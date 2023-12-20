import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { User } from 'next-auth';
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
      const { user, jwt: accessToken } = newUser;

      const newUserSession: User = {
        ...user,
        accessToken,
      };

      await updateSession(newUserSession);

      return newUser;
    },
    onSuccess: () => {
      toast({
        description: 'Seus dados foram atualizados!',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        description: 'Ocorreu um erro na atualização dos seus dados.',
        status: 'error',
      });
    },
  });
};
