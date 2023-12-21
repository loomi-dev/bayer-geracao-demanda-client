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
import { useForm, FormProvider } from 'react-hook-form';

import { useSendReceiptAction, useUploadFile } from '@/api';
import { CircleIcon, DocumentIcon } from '@/components';
import { GridActionDetails } from '@/modules/receipts/components';

import { SendProofActionAccordionForm } from './SendProofActionAccordionForm';
import {
  SendProofActionFormSchemaType,
  sendProofActionFormSchema,
} from './SendProofActionAccordionForm.schema';

type DrawerSendProofActionProps = {
  action: ReceiptAction;
} & Omit<DrawerProps, 'children'>;

export const DrawerSendProofAction = ({
  action,
  onClose,
  ...restProps
}: DrawerSendProofActionProps) => {
  const methods = useForm<SendProofActionFormSchemaType>({
    resolver: zodResolver(sendProofActionFormSchema),
    mode: 'all',
    criteriaMode: 'all',
  });

  const { handleSubmit, reset } = methods;

  const { mutate: sendReceiptAction, isLoading: isSendingReceiptAction } = useSendReceiptAction();
  const { mutate: uploadFileMutate, isLoading: isUploadingFile } = useUploadFile();

  const isLoadingSendReceiptAction = isSendingReceiptAction || isUploadingFile;

  const onSubmitSendProofActionForm = async ({
    files,
    description,
  }: SendProofActionFormSchemaType) => {
    const filesList = files.map(({ file }) => file);

    uploadFileMutate(
      { files: filesList },
      {
        onSuccess: (uploadFileResponse) => {
          sendReceiptAction({
            actionId: action.id,
            body: {
              data: {
                receipts: { documents: uploadFileResponse, approved: false, description },
              },
            },
          });
        },
      },
    );
  };

  const handleCloseDrawerSendProofAction = () => {
    onClose();
    reset();
  };

  return (
    <Drawer onClose={handleCloseDrawerSendProofAction} {...restProps}>
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
            <SendProofActionAccordionForm />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="secondary"
              w="18rem"
              onClick={handleCloseDrawerSendProofAction}
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
