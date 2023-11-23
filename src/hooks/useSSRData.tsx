import { ParsedUrlQueryInput } from 'querystring';

import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
export type UseSSRDataProps<T> = {
  ssrData: T;
  queryData?: T;
  onQueryChange?: (filters: Record<string, unknown>) => void;
};

export type UseSSRDataPayload<T> = {
  data: T;
  setQueryFilters: (newFilters: ParsedUrlQueryInput) => void;
};
export const useSSRData = <T,>({
  ssrData,
  queryData,
  onQueryChange,
}: UseSSRDataProps<T>): UseSSRDataPayload<T> => {
  const [data, setData] = useState<T>(ssrData);
  const { query: filters, replace, route } = useRouter();

  useEffect(() => {
    if (onQueryChange) {
      onQueryChange(filters);
    }
  }, [filters, onQueryChange]);

  useEffect(() => {
    if (queryData) {
      setData(queryData);
    }
  }, [queryData]);

  useEffect(() => {
    setData(ssrData);
  }, [ssrData]);

  const setQueryFilters = useCallback(
    (newFilters: ParsedUrlQueryInput) => {
      replace({ query: { ...filters, ...newFilters }, pathname: route });
    },
    [filters, replace, route],
  );

  return { setQueryFilters, data };
};
