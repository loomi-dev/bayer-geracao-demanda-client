import { UseMutationOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export type ApiResponseErr = {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
  };
};
export type ApiServiceErr = AxiosResponse<ApiResponseErr>;

export type MutOpt<Response = void, Variables = unknown, Error = AxiosError> = UseMutationOptions<
  Response,
  Error,
  Variables,
  unknown
>;
