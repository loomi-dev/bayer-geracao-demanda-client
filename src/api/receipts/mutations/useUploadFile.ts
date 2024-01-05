import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { MutOpt } from '@/api';

import { uploadFile } from '../endpoints';
import { UploadFileResponse } from '../types';

export const useUploadFile = (options?: MutOpt<UploadFileResponse>) => {
  const toast = useToast();

  return useMutation({
    ...options,
    mutationFn: uploadFile,
    mutationKey: ['upload-file'],
    onError: () => {
      toast({
        description: 'Ocorreu um erro ao enviar o arquivo, tente novamente ou contate o suporte.',
        status: 'error',
      });
    },
  });
};
