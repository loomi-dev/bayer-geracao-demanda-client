import axiosInstance, { AxiosError, AxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext } from 'next/types';
import { Session } from 'next-auth';
import { getSession, signOut } from 'next-auth/react';

import { getTokens, updateSession } from '@/api';
import { API_URL, IS_CLIENT } from '@/config';

const defaultOptions: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const unauthenticatedInstance = axiosInstance.create(defaultOptions);
const authenticatedInstance = axiosInstance.create(defaultOptions);

let lastSession: Session | null = null;

const axiosObject = {
  unauthorized() {
    unauthenticatedInstance.interceptors.response.use(
      async (response) => response,
      async (error: AxiosError) => Promise.reject(error),
    );

    return unauthenticatedInstance;
  },
  authorized(ctx?: GetServerSidePropsContext) {
    authenticatedInstance.interceptors.request.use(
      async (request) => {
        if (lastSession === null) {
          const session = await getSession({ ctx });

          lastSession = session;
        }

        const accessToken = lastSession?.user.accessToken;

        request.headers.Authorization = `Bearer ${accessToken}`;

        return request;
      },
      async (error: AxiosError) => Promise.reject(error?.response),
    );

    authenticatedInstance.interceptors.response.use(
      async (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401 && IS_CLIENT) {
          const refreshToken = lastSession?.user?.refreshToken;

          if (refreshToken && lastSession) {
            try {
              const tokens = await getTokens({ refreshToken });
              await updateSession({
                ...lastSession.user,
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
              });
            } catch {
              await signOut();
            }
          } else {
            await signOut();
          }
        }

        return Promise.reject(error);
      },
    );

    return authenticatedInstance;
  },
};

export default axiosObject;
