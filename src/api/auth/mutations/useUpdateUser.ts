import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';

import { MutOpt } from '@/api/types';
import { DEFAULT_PRIVATE_FARMER_PAGE, DEFAULT_PRIVATE_MANAGER_PAGE } from '@/config';

import { updateUser } from '../endpoints';
import { UpdateUserData, UpdateUserResponse } from '../types';

export const useUpdateUser = (options?: MutOpt<UpdateUserResponse, UpdateUserData>) => {
  const toast = useToast();
  const { push } = useRouter();
  const { update: updateSession } = useSession();

  return useMutation({
    ...options,
    mutationKey: ['update-user'],
    mutationFn: async (userData) => {
      const newUser = await updateUser(userData);

      const {
        data: { jwt: accessToken, user },
      } = newUser;

      const newUserSession: User = {
        ...user,
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
