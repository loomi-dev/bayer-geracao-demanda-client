import qs from 'qs';

import axios from '@/lib/axios';

import {
  GetFarmerParams,
  GetFarmerResponse,
  UpdateFarmerData,
  UpdateFarmerResponse,
} from './types';

export const getFarmer = async ({ farmerId }: GetFarmerParams): Promise<GetFarmerResponse> => {
  const query = qs.stringify({
    filters: {
      users_permissions_user: {
        id: {
          $eq: farmerId,
        },
      },
    },
    populate: {
      wallet: true,
      safra: true,
      users_permissions_user: true,
    },
  });

  const { data } = await axios.authorized().get(`/farmers?${query}`);

  return data;
};

export const updateFarmer = async ({
  id: userId,
  name,
  email,
  number,
  companyRole,
  password,
  confirmPassword,
  confirmed,
}: UpdateFarmerData): Promise<UpdateFarmerResponse> => {
  const { data } = await axios.authorized().put(`/farmers/${userId}`, {
    data: {
      company_position: companyRole,
      username: name,
      email,
      password,
      passwordConfirmation: confirmPassword,
      confirmed,
      number,
    },
  });

  return data;
};
