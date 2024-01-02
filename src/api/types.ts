import { QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export type ApiResponseErrNames = 'PLANNING_ALREADY_EXIST' | 'INSUFFICIENT_FOUNDS';

export type ApiResponseErr = {
  data?: null;
  error?: {
    status: number;
    name: string;
    message: ApiResponseErrNames;
  };
};
export type ApiServiceErr = AxiosError<ApiResponseErr>;

export type MutOpt<
  Response = void,
  Variables = unknown,
  Error = ApiServiceErr,
  MutationContext = unknown,
> = UseMutationOptions<Response, Error, Variables, MutationContext>;

export type QueryOpt<
  Response = void,
  Error = unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TQueryKey extends QueryKey = any[],
> = UseQueryOptions<Response, Error, Response, TQueryKey>;

export type GenericListResponseType<T> = {
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
  data: T[];
};

export type Pagination = {
  pageSize: number;
  page: number;
};
