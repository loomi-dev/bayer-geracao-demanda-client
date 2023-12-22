import qs from 'qs';

import axios from '@/lib/axios';

import {
  GetFarmerParams,
  GetFarmerResponse,
  GetFarmersResponse,
  UpdateFarmerData,
  UpdateFarmerResponse,
} from './types';

export const getFarmer = async ({ farmerId }: GetFarmerParams): Promise<GetFarmerResponse> => {
  const query = qs.stringify({
    filters: {
      id: {
        $eq: farmerId,
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
  farmerId,
  username,
  email,
  phoneNumber,
  companyPosition,
  password,
  confirmPassword,
  confirmed,
}: UpdateFarmerData): Promise<UpdateFarmerResponse> => {
  const { data } = await axios.authorized().put(`/farmers/${farmerId}`, {
    data: {
      company_position: companyPosition,
      username,
      email,
      password,
      passwordConfirmation: confirmPassword,
      confirmed,
      phoneNumber,
    },
  });

  return data;
};

export const getFarmers = async ({ managerId }): Promise<GetFarmersResponse> => {
  const query = qs.stringify({
    filters: {
      managers: {
        id: {
          $in: [managerId],
        },
      },
    },
    populate: {
      users_permissions_user: true,
    },
  });

  const { data } = await axios.authorized().get(`/farmers?${query}`);

  return data;
};
