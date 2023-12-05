import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
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
      await updateSession(newUser.data);

      return newUser;
    },
    onSuccess: ({ data }) => {
      const privatePage =
        data.role === 'Manager' ? DEFAULT_PRIVATE_MANAGER_PAGE : DEFAULT_PRIVATE_FARMER_PAGE;

      push(privatePage);
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
