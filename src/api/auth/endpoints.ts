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
  name,
  email,
  number,
  companyRole,
  password,
  confirmPassword,
  confirmed,
}: UpdateUserData): Promise<UpdateUserResponse> => {
  const { data } = await axios.authorized().put(`/farmers/${userId}`, {
    data: {
      company_position: companyRole,
      username: name,
      email,
      password,
      passwordConfirmation: confirmPassword,
      confirmed,
      number,
    },
  });

  return data;
};
