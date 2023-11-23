/* eslint-disable prettier/prettier */
import axiosInstance, { AxiosError } from 'axios';
import { NextPageContext } from 'next';

import { API_URL, IS_CLIENT } from '@/config';
import { cookies, nodeCookies, storage } from '@/utils';

const config = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const unauthenticatedInstance = axiosInstance.create(config);
const authenticatedInstance = axiosInstance.create(config);

export const mockAPI = (ctx: Pick<NextPageContext, 'req'>) => {
  const host = ctx?.req?.headers?.host;
  const protocol = IS_CLIENT && window.location.protocol;
  const hostClient = IS_CLIENT && window.location.host;

  const baseUrl =
    host && host.includes('localhost') && !IS_CLIENT
      ? `http://${host}/api/`
      : IS_CLIENT
      ? `${protocol}//${hostClient}/api/`
      : `https://${host}/api/`;

  return axiosInstance.create({
    baseURL: baseUrl,
  });
};

unauthenticatedInstance.interceptors.response.use(
  (response) => response?.data,
  (error: AxiosError) => Promise.reject(error),
);

authenticatedInstance.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => {
    if (error.response) {
      if (error.response.status !== 401) {
        return Promise.reject(error);
      }

      try {
        const response = await axiosInstance.post('/auth/refresh-token', {
          refresh_token: cookies.getRefresh(),
        });
        cookies.setRefresh(response.data?.refreshToken);
        if (error.response) {
          return authenticatedInstance(error.response.config);
        }
      } catch (error) {
        cookies.clearAccess();
        cookies.clearRefresh();
        storage.clearUser();
        return Promise.reject(error);
      }
    }
  },
);

const axiosObject = {
  unauthorized() {
    unauthenticatedInstance.defaults.baseURL = API_URL;

    return unauthenticatedInstance;
  },
  authorized(ctx?: Pick<NextPageContext, 'req'>) {
    const accessToken = ctx ? nodeCookies(ctx).getAccess() : cookies.getAccess();

    authenticatedInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    authenticatedInstance.interceptors.request.use(
      function (config) {
        config.baseURL = API_URL;

        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    return authenticatedInstance;
  },
};

export default axiosObject;
