import qs from 'qs';

import axios from '@/lib/axios';

import {
  GetDashboardParams,
  GetDashboardResponse,
  GetManagerParams,
  UpdateManagerData,
  UpdateManagerResponse,
} from './types';

export const getManager = async ({ managerId }: GetManagerParams) => {
  const query = qs.stringify({
    populate: {
      safra: true,
      farmers: true,
    },
  });
  const response = await axios.authorized().get(`/managers/${managerId}?${query}`);
  return response.data;
};

export const updateManager = async ({
  managerId,
  username,
  phoneNumber,
  email,
  confirmed,
  imageId,
}: UpdateManagerData): Promise<UpdateManagerResponse> => {
  const { data } = await axios.authorized().put(`/managers/${managerId}`, {
    data: {
      username,
      email,
      phoneNumber,
      confirmed,
      photo: imageId,
    },
  });

  return data;
};

export const getDashboard = async ({
  filters,
}: GetDashboardParams): Promise<GetDashboardResponse> => {
  const query = qs.stringify({
    filters: {
      ...(filters.farmers_ids?.length ? { farmer_ids: { $in: filters.farmers_ids } } : {}),
      ...(filters.regions?.length ? { regions: { $in: filters.regions } } : {}),
      ...(filters.districts?.length ? { districts: { $in: filters.districts } } : {}),
      ...(filters.actions_types?.length ? { action_types: { $in: filters.actions_types } } : {}),
    },
  });
  const response = await axios.authorized().get(`/managers/dashboard?${query}`);
  return response.data;
};
