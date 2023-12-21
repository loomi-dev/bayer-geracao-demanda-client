import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';

import { MutOpt } from '@/api/types';
import { DEFAULT_PRIVATE_FARMER_PAGE, DEFAULT_PRIVATE_MANAGER_PAGE } from '@/config';

import { updateManager } from '../endpoints';
import { UpdateManagerData, UpdateManagerResponse } from '../types';

export const useUpdateManager = (options?: MutOpt<UpdateManagerResponse, UpdateManagerData>) => {
  const toast = useToast();
  const { push } = useRouter();
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
      const privatePage =
        user.role === 'Manager' ? DEFAULT_PRIVATE_MANAGER_PAGE : DEFAULT_PRIVATE_FARMER_PAGE;

      push(privatePage);
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
