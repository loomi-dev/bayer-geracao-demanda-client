import { useToast } from '@chakra-ui/react';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { uploadFile } from '../endpoints';
import { UploadFileParams, UploadFileResponse } from '../types';

export const useUploadFile = (
  params?: UseMutationOptions<
    UploadFileResponse[],
    AxiosError<unknown, unknown>,
    UploadFileParams,
    unknown
  >,
) => {
  const toast = useToast();
  return useMutation({
    mutationFn: (body: UploadFileParams) => uploadFile(body),
    mutationKey: ['upload-file'],
    onError: () => {
      toast({
        description: 'Erro ao enviar arquivo! Tente novamente mais tarde',
        status: 'error',
      });
    },
    ...params,
  });
};
