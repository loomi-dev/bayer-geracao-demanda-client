import axios from '@/lib/axios';

import { getHarvests } from '../harverst';

import { LoginWithCredentialsData, LoginWithCredentialsResponse } from './types';

export const loginWithCredentials = async (
  data: LoginWithCredentialsData,
): Promise<LoginWithCredentialsResponse> => {
  const userResponse = await axios
    .unauthorized()
    .post<LoginWithCredentialsResponse>('/auth/local', data);

  const harvestResponse = await getHarvests();

  const harvest = harvestResponse?.data?.at(-1);
  if (!harvest) throw new Error('Occurred error when login');

  return {
    jwt: userResponse?.data?.jwt,
    user: {
      ...userResponse?.data?.user,
      safra: harvest,
    },
  };
};
