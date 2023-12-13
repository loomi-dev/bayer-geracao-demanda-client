import qs from 'qs';

import axios from '@/lib/axios';

import {
  GetAchievementParams,
  GetAchievementResponse,
  GetActionsParams,
  GetActionsResponse,
  GetCropsResponse,
  PutActionParams,
  UploadFileParams,
  UploadFileResponse,
} from './types';

export const getActions = async ({
  farmerId,
  pagination,
}: GetActionsParams = {}): Promise<GetActionsResponse> => {
  const queryParams = qs.stringify({
    populate: {
      planning: {
        populate: {
          safra: true,
        },
      },
      farmer: {
        populate: {
          wallet: true,
        },
      },
    },
    pagination,
    ...(farmerId && {
      filters: {
        farmer: {
          id: farmerId,
        },
      },
    }),
  });

  const response = await axios.authorized().get(`/actions?${queryParams}`);

  return response.data;
};

export const getAchievement = async ({
  farmerId,
  safraId,
}: GetAchievementParams): Promise<GetAchievementResponse> => {
  const queryParams = qs.stringify({
    filters: {
      farmer: {
        id: {
          $eq: farmerId,
        },
      },
      safra: {
        id: {
          $eq: safraId,
        },
      },
    },
    populate: {
      safra: true,
    },
  });

  const response = await axios.authorized().get(`/achievements?${queryParams}`);

  return response.data;
};

export const getExampleReceipts = async () => {
  const queryParams = qs.stringify({
    populate: {
      documents: true,
    },
  });

  const response = await axios.authorized().get(`/example-receipts?${queryParams}`);

  return response.data;
};

export const getCrops = async (): Promise<GetCropsResponse> => {
  const queryParams = qs.stringify({
    filters: {
      current: true,
    },
  });

  const response = await axios.authorized().get(`/safras?${queryParams}`);

  return response.data;
};

export const uploadFile = async ({ files }: UploadFileParams): Promise<UploadFileResponse[]> => {
  const form = new FormData();

  files.forEach((file) => {
    form.append('files', file);
  });

  const response = await axios.authorized().post('/upload', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const putAction = async ({ actionId, body }: PutActionParams): Promise<unknown> => {
  const response = await axios.authorized().put(`/actions/${actionId}`, body);

  return response.data;
};
