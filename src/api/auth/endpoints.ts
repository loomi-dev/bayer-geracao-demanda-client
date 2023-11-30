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
  id,
  name,
  email,
  confirmed,
  companyRole,
}: UpdateUserData): Promise<UpdateUserResponse> => {
  const [putUserInfoResponse, putRoleInfoResponse] = await Promise.all([
    axios.authorized().put<UpdateUserResponse>(`/users/${id}`, {
      name,
      confirmed,
      email,
    }),
    axios.authorized().put(`/farmer/${id}`, {
      company_role: companyRole,
    }),
  ]);

  const user = { ...putUserInfoResponse.data, ...putRoleInfoResponse };

  return user;
};
