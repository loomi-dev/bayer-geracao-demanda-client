import axios from '@/lib/axios';

import { GetFaqsResponse } from './types';

export const getFaqs = async (): Promise<GetFaqsResponse> => {
  const response = await axios.authorized().get('/faqs');

  return response.data;
};
