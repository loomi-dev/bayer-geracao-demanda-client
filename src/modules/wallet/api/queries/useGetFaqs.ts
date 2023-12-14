import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';
import { STALE_TIME_CONFIG } from '@/config';

import { getFaqs } from '../endpoints';
import { GetFaqsResponse } from '../types';

export const useGetFaqs = (options?: QueryOpt<GetFaqsResponse>) =>
  useQuery({
    staleTime: STALE_TIME_CONFIG,
    ...options,
    queryKey: ['get-faqs'],
    queryFn: () => getFaqs(),
  });
