import qs from 'qs';

import axios from '@/lib/axios';

import {
  GetExampleReceiptsResponse,
  GetReceiptsActionsParams,
  GetReceiptsActionsResponse,
  SendReceiptActionData,
  SendReceiptActionResponse,
  UploadFileParams,
  UploadFileResponse,
} from './types';

export const getReceiptsActions = async ({
  filter,
  farmerId,
  pagination,
}: GetReceiptsActionsParams): Promise<GetReceiptsActionsResponse> => {
  const filters = {
    title: {
      $contains: filter?.search,
    },
    farmer: {
      ...(farmerId && {
        id: farmerId,
      }),
      ...((filter?.customers ?? []).length > 0
        ? {
            company_identifier: {
              $in: filter?.customers,
            },
          }
        : {}),
      ...((filter?.regions ?? []).length > 0 ? { region: { $in: filter?.regions } } : {}),
      planning: {
        historic: {
          status: {
            $eq: 'accepted',
          },
        },
      },
    },
  };
  const query = qs.stringify({
    filters,
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

    pagination,
  });

  const response = await axios.authorized().get(`/actions?${query}`);

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
