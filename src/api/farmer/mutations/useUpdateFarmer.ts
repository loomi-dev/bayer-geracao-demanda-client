import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';

import { MutOpt } from '@/api/types';
import { DEFAULT_PRIVATE_FARMER_PAGE, DEFAULT_PRIVATE_MANAGER_PAGE } from '@/config';

import { updateFarmer } from '../endpoints';
import { UpdateFarmerData, UpdateFarmerResponse } from '../types';

export const useUpdateFarmer = (options?: MutOpt<UpdateFarmerResponse, UpdateFarmerData>) => {
  const toast = useToast();
  const { push } = useRouter();
  const { update: updateSession } = useSession();

  return useMutation({
    ...options,
    mutationKey: ['update-farmer'],
    mutationFn: async (userData) => {
      const newUser = await updateFarmer(userData);
      const {
        data: { jwt: accessToken, user, farmer },
      } = newUser;

      const newUserSession: User = {
        ...user,
        farmer,
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
