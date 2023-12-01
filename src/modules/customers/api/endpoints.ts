import qs from 'qs';

import axios from '@/lib/axios';

export const getCustomers = async ({
  id,
  region,
  district,
  company_identifier,
}: any): Promise<any> => {
  const filters = {
    farmer: {
      manager: {
        id: { $eq: id },
      },
    },
    ...(region ? { region: { $eq: region } } : {}),
    ...(district ? { district: { $eq: district } } : {}),
    ...(company_identifier ? { company_identifier: { $eq: district } } : {}),
  };
  const query = qs.stringify({
    filters,
    populate: {
      farmer: {
        populate: {
          wallet: {
            transaction: true,
          },
        },
      },
      historic: true,
    },
  });

  const response = await axios.authorized().get(`/plannings?${query}`);
  return response.data;
};
