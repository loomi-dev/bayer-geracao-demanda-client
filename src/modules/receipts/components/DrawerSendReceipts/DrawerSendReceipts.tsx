import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Text,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { useSendReceiptAction, useUploadFile } from '@/api';
import { CircleIcon, DocumentIcon } from '@/components';
import { GridActionDetails } from '@/modules/receipts/components';

import { FormSendReceiptsAccordion } from './FormSendReceiptsAccordion';
import {
  FormSendReceiptsSchemaType,
  formSendReceiptsSchema,
} from './FormSendReceiptsAccordion.schema';

type DrawerSendReceiptsProps = {
  action: ReceiptAction;
} & Omit<DrawerProps, 'children'>;

export const DrawerSendReceipts = ({ action, onClose, ...restProps }: DrawerSendReceiptsProps) => {
  const methods = useForm<FormSendReceiptsSchemaType>({
    resolver: zodResolver(formSendReceiptsSchema),
    mode: 'all',
    criteriaMode: 'all',
  });

  const { handleSubmit, reset } = methods;

  const { mutate: uploadFileMutate, isLoading: isUploadingFile } = useUploadFile();
  const { mutate: sendReceiptAction, isLoading: isSendingReceiptAction } = useSendReceiptAction();

  const isLoadingSendReceiptAction = isSendingReceiptAction || isUploadingFile;

  const handleCloseDrawerSendReceipts = () => {
    onClose();
    reset();
  };

  const onSubmitSendProofActionForm = async ({
    files,
    description,
  }: FormSendReceiptsSchemaType) => {
    const filesList = files.map(({ file }) => file);

    uploadFileMutate(
      { files: filesList },
      {
        onSuccess: (uploadFileResponse) => {
          sendReceiptAction(
            {
              actionId: action.id,
              documents: uploadFileResponse,
              description,
            },
            {
              onSuccess: () => {
                handleCloseDrawerSendReceipts();
              },
            },
          );
        },
      },
    );
  };

  return (
    <Drawer onClose={handleCloseDrawerSendReceipts} {...restProps}>
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

        <FormProvider {...methods}>
          <DrawerBody bg="greyscale.330" py="1.4rem" px="2.4rem" gap="1rem">
            <GridActionDetails {...action} />
            <FormSendReceiptsAccordion />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="secondary"
              w="18rem"
              onClick={handleCloseDrawerSendReceipts}
              isDisabled={isLoadingSendReceiptAction}
            >
              Cancelar
            </Button>

            <Button
              w="18rem"
              onClick={handleSubmit(onSubmitSendProofActionForm)}
              isLoading={isLoadingSendReceiptAction}
            >
              Enviar comprovante
            </Button>
          </DrawerFooter>
        </FormProvider>
      </DrawerContent>
    </Drawer>
  );
};
