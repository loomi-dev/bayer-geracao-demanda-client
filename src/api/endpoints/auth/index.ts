import axios from '@/lib/axios';

import { LoginCredentials, UserResponse, RegisterCredentials, AuthUser } from './types';

export const loginWithEmailAndPassword = (data: LoginCredentials): Promise<UserResponse> =>
  axios.unauthorized().post('/auth/login', data);

export const registerWithEmailAndPassword = (data: RegisterCredentials): Promise<UserResponse> =>
  axios.unauthorized().post('/auth/register', data);

export const getUserProfile = (): Promise<AuthUser> => axios.authorized().get('/auth/me');

export * from './types';
