import axios from '@/lib/axios';

import {
  LoginWithCredentialsData,
  LoginWithCredentialsResponse,
  UpdateUserData,
  UpdateUserResponse,
} from './types';

export const loginWithCredentials = async (
  data: LoginWithCredentialsData,
): Promise<LoginWithCredentialsResponse> => {
  const response = await axios
    .unauthorized()
    .post<LoginWithCredentialsResponse>('/auth/local', data);

  return response.data;
};

export const updateUser = async ({
  id: userId,
  username,
  email,
  phoneNumber,
  company_position,
}: UpdateUserData): Promise<UpdateUserResponse> => {
  const { data } = await axios.authorized().put(`/users/${userId}`, {
    username,
    email,
    phoneNumber,
    company_position,
  });

  return data;
};
