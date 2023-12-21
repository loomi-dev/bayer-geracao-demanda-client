import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';

import { MutOpt } from '@/api/types';

import { updateManager } from '../endpoints';
import { UpdateManagerData, UpdateManagerResponse } from '../types';

export const useUpdateManager = (options?: MutOpt<UpdateManagerResponse, UpdateManagerData>) => {
  const toast = useToast();
  const { update: updateSession } = useSession();

  return useMutation({
    ...options,
    mutationKey: ['update-manager'],
    mutationFn: async (userData) => {
      const newUser = await updateManager(userData);
      const {
        data: { jwt: accessToken, user, manager },
      } = newUser;

      const newUserSession: User = {
        ...user,
        manager,
        accessToken,
      };

      await updateSession(newUserSession);

      return newUser;
    },
    onSuccess: ({ data: { user } }) => {
      console.log(user);
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
