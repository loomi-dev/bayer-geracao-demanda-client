import qs from 'qs';

import axios from '@/lib/axios';

import {
  GetAchievementParams,
  GetAchievementResponse,
  GetExampleReceiptsResponse,
  GetReceiptsActionsParams,
  GetReceiptsActionsResponse,
  SendReceiptActionData,
  SendReceiptActionResponse,
  UploadFileParams,
  UploadFileResponse,
} from './types';

export const getReceiptsActions = async ({
  farmerId,
  pagination,
}: GetReceiptsActionsParams): Promise<GetReceiptsActionsResponse> => {
  const query = qs.stringify({
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
      receipts: {
        populate: {
          documents: true,
        },
      },
    },
    ...(farmerId && {
      filters: {
        farmer: {
          id: farmerId,
        },
      },
    }),
    pagination,
  });

  const response = await axios.authorized().get(`/actions?${query}`);

  return response.data;
};

export const getAchievement = async ({
  farmerId,
  harvestId,
}: GetAchievementParams): Promise<GetAchievementResponse> => {
  const query = qs.stringify({
    filters: {
      farmer: {
        id: {
          $eq: farmerId,
        },
      },
      safra: {
        id: {
          $eq: harvestId,
        },
      },
    },
    populate: {
      safra: true,
    },
  });

  const response = await axios.authorized().get(`/achievements?${query}`);

  return response.data;
};

export const getExampleReceipts = async (): Promise<GetExampleReceiptsResponse> => {
  const queryParams = qs.stringify({
    populate: {
      documents: true,
    },
  });

  const response = await axios.authorized().get(`/example-receipts?${queryParams}`);

  return response.data;
};

export const uploadFile = async ({ files }: UploadFileParams): Promise<UploadFileResponse> => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append('files', file);
  });

  const response = await axios.authorized().post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const sendReceiptAction = async ({
  actionId,
  documents,
  description,
}: SendReceiptActionData): Promise<SendReceiptActionResponse> => {
  const response = await axios.authorized().put(`/actions/${actionId}`, {
    data: {
      receipts: {
        documents,
        description,
        approved: false,
      },
    },
  });

  return response.data;
};

export const getReceiptsSummary = async ({ farmerId }) => {
  const query = qs.stringify({
    filters: {
      historic: {
        status: {
          $eq: 'accepted',
        },
      },
      farmer: {
        id: {
          $eq: farmerId,
        },
      },
    },
    populate: {
      metric: true,
    },
  });

  const response = await axios.authorized().get(`/plannings?${query}`);

  return response.data;
};
