import { useMutation } from '@tanstack/react-query';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';

import { MutOpt } from '@/api/types';

import { updateManager } from '../endpoints';
import { UpdateManagerData, UpdateManagerResponse } from '../types';

export const useUpdateManager = (options?: MutOpt<UpdateManagerResponse, UpdateManagerData>) => {
  const { update: updateSession } = useSession();

  return useMutation({
    ...options,
    mutationKey: ['update-manager'],
    mutationFn: async (userData) => {
      const newUser = await updateManager(userData);
      const {
        data: { accessToken, refreshToken, user, manager },
      } = newUser;

      const newUserSession: User = {
        ...user,
        manager,
        accessToken,
        refreshToken,
      };

      await updateSession(newUserSession);

      return newUser;
    },
  });
};
