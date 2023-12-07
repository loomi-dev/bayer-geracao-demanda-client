import axiosInstance, { AxiosError, AxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext } from 'next/types';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

import { API_URL } from '@/config';

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
      async (error: AxiosError) => Promise.reject(error?.response),
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
      async (error: AxiosError) => Promise.reject(error?.response),
    );

    return authenticatedInstance;
  },
};

export default axiosObject;
