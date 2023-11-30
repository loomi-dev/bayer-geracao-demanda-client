import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getFaqs } from '../endpoints';
import { GetFaqsResponse } from '../types';

export const useGetFaqs = (params: { name: string }, options?: QueryOpt<GetFaqsResponse>) =>
  useQuery({
    ...options,
    queryKey: ['get-faqs', ...Object.values(params)],
    queryFn: () => getFaqs(),
  });
