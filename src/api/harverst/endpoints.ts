import qs from 'qs';

import axios from '@/lib/axios';

export const getHarvests = async () => {
  const query = qs.stringify({
    filters: {
      current: true,
    },
  });

  const { data } = await axios.authorized().get(`/safra?${query}`);

  return data;
};
