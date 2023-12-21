import axios from '@/lib/axios';

import { LoginWithCredentialsData, LoginWithCredentialsResponse } from './types';

export const loginWithCredentials = async (
  data: LoginWithCredentialsData,
): Promise<LoginWithCredentialsResponse> => {
  const response = await axios
    .unauthorized()
    .post<LoginWithCredentialsResponse>('/auth/local', data);

  return response.data;
};
