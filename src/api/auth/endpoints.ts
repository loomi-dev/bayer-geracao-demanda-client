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
  confirmed,
  companyRole,
}: UpdateUserData): Promise<UpdateUserResponse> => {
  const [putUserInfoResponse, putRoleInfoResponse] = await Promise.all([
    axios.authorized().put(`/users/${userId}`, {
      name,
      confirmed,
      email,
    }),
    axios.authorized().put(`/farmer/${userId}`, {
      data: {
        company_role: companyRole,
      },
    }),
  ]);

  const user = { ...putUserInfoResponse.data, ...putRoleInfoResponse.data };

  return user;
};
