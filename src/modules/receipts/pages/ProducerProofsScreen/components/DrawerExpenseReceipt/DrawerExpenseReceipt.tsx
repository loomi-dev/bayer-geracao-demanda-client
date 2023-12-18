import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

import { usePutAction, useUploadFile } from '@/api';
import { CircleIcon, DocumentIcon } from '@/components';
import { ActionDetails } from '@/modules/receipts/components';

import { useActionStore, useDrawerExpenseReceipt } from '../../stores';
import { ProveYourExpenses } from '../ProveYourExpenses';

import {
  DrawerExpenseReceiptFormSchemaType,
  drawerExpenseReceiptFormSchema,
} from './DrawerExpenseReceipt.schema';

export const Component = () => {
  const { handleSubmit, getValues } = useFormContext<DrawerExpenseReceiptFormSchemaType>();

  const isOpen = useDrawerExpenseReceipt((state) => state.isOpen);
  const onClose = useDrawerExpenseReceipt((state) => state.onClose);

  const toast = useToast();

  const selectedAction = useActionStore((state) => state.selectedAction);

  const { mutate: putActionMutation, isLoading: isLoadingPutAction } = usePutAction({
    onSuccess: () => {
      toast({ description: 'Ação criada com sucesso !', status: 'success' });
      onClose();
    },
    onError: () => {
      toast({ description: 'Não foi possivel criar com sucesso !', status: 'error' });
    },
  });

  const { mutate: uploadFileMutate, isLoading: isLoadingUploadFile } = useUploadFile({
    onSuccess: (uploadFilesReponse) => {
      const { description } = getValues();

      putActionMutation({
        actionId: selectedAction?.id ?? 0,
        body: {
          data: {
            receipts: { documents: uploadFilesReponse, approved: false, description },
          },
        },
      });
    },
  });

  const isLoadingButtons = isLoadingPutAction || isLoadingUploadFile;

  const handleSubmitData = async (data: DrawerExpenseReceiptFormSchemaType) => {
    const { files } = data;

    uploadFileMutate({ files: files.map(({ file }) => file) });
  };

  return (
    <Drawer onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />

      <DrawerContent maxW="unset" w="81rem !important">
        <DrawerHeader
          display="flex"
          alignItems="center"
          px="3.2rem"
          pt="6rem"
          pb="2.4rem"
          borderBottom="2px solid"
          borderColor="opacity.black.0.20"
        >
          <CircleIcon>
            <DocumentIcon />
          </CircleIcon>
          <Text ml="1.6rem" textStyle="h3">
            Comprovante de gastos
          </Text>
        </DrawerHeader>
        <DrawerBody bg="greyscale.330" py="1.4rem" px="2.4rem">
          {selectedAction && <ActionDetails selectedAction={selectedAction} />}
          <ProveYourExpenses />
        </DrawerBody>
        <DrawerFooter>
          <Button variant="secondary" w="18rem" onClick={onClose} isLoading={isLoadingButtons}>
            Cancelar
          </Button>
          <Button w="18rem" onClick={handleSubmit(handleSubmitData)} isLoading={isLoadingButtons}>
            Criar nova ação
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export const DrawerExpenseReceipt = () => {
  const methods = useForm({
    resolver: zodResolver(drawerExpenseReceiptFormSchema),
    mode: 'all',
  });

  return (
    <FormProvider {...methods}>
      <Component />
    </FormProvider>
  );
};
