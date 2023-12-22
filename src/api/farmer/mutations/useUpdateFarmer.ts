import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';

import { getHarvests } from '@/api/harvest';
import { MutOpt } from '@/api/types';

import { updateFarmer } from '../endpoints';
import { UpdateFarmerData, UpdateFarmerResponse } from '../types';

export const useUpdateFarmer = (options?: MutOpt<UpdateFarmerResponse, UpdateFarmerData>) => {
  const { update: updateSession } = useSession();
  const toast = useToast();
  return useMutation({
    ...options,
    mutationKey: ['update-farmer'],
    mutationFn: async (userData) => {
      const newUser = await updateFarmer(userData);

      const harvestResponse = await getHarvests();
      const harvest = harvestResponse?.data?.at(-1);
      if (!harvest) throw new Error('Occurred error when login');

      const {
        data: { jwt: accessToken, user, farmer },
      } = newUser;

      const newUserSession: User = {
        ...user,
        farmer,
        safra: harvest,
        accessToken,
      };

      await updateSession(newUserSession);

      return newUser;
    },
    onError: () => {
      toast({
        description: 'Ocorreu um erro na atualização dos seus dados.',
        status: 'error',
      });
    },
  });
};
