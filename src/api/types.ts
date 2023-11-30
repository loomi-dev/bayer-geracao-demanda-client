import { QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export type ApiResponseErr = {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
  };
};
export type ApiServiceErr = AxiosResponse<ApiResponseErr>;

export type MutOpt<
  Response = void,
  Variables = unknown,
  Error = ApiServiceErr,
  MutationContext = unknown,
> = UseMutationOptions<Response, Error, Variables, MutationContext>;

export type QueryOpt<
  Response = void,
  Error = unknown,
  TQueryKey extends QueryKey = any[],
> = UseQueryOptions<Response, Error, Response, TQueryKey>;