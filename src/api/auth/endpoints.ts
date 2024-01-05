import { User } from 'next-auth';
import { getCsrfToken } from 'next-auth/react';

import axios from '@/lib/axios';

import { getHarvests } from '../harvest';

import {
  ForgotPasswordData,
  ForgotPasswordResponse,
  GetTokensData,
  GetTokensResponse,
  LoginWithCredentialsData,
  LoginWithCredentialsResponse,
  ResetPasswordData,
  ResetPasswordResponse,
} from './types';

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
    accessToken: userResponse?.data?.accessToken,
    refreshToken: userResponse?.data?.refreshToken,
    user: {
      ...userResponse?.data?.user,
      safra: harvest,
    },
  };
};

export const getTokens = async (data: GetTokensData): Promise<GetTokensResponse> => {
  const response = await axios.unauthorized().post('/auth/refresh-token', data);

  return response.data;
};

export const updateSession = async (newSession: User): Promise<void> => {
  const csrfToken = await getCsrfToken();

  await axios.unauthorized().post(
    '/api/auth/session?update',
    {
      csrfToken,
      data: newSession,
    },
    {
      baseURL: 'http://localhost:3000',
    },
  );
};

export const forgotPassword = async (data: ForgotPasswordData): Promise<ForgotPasswordResponse> => {
  const response = await axios.unauthorized().post('/auth/forgot-password', data);

  return response.data;
};

export const resetPassword = async (data: ResetPasswordData): Promise<ResetPasswordResponse> => {
  const response = await axios.unauthorized().post('/auth/reset-password', data);

  return response.data;
};
