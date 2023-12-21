import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';

import { BigDocumentIcon, CircleIcon } from '@/components';
import { ActionDetails } from '@/modules/receipts/components';

import { useActionStore, useDrawerExpenseReceipt } from '../../stores';
import { ProveYourExpenses } from '../ProveYourExpenses';

export const DrawerExpenseReceipt = () => {
  const isOpen = useDrawerExpenseReceipt((state) => state.isOpen);
  const onClose = useDrawerExpenseReceipt((state) => state.onClose);

  const selectedAction = useActionStore((state) => state.selectedAction);

  return (
    <>
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
              <BigDocumentIcon />
            </CircleIcon>
            <Text ml="1.6rem" textStyle="h3">
              Comprovante de gastos
            </Text>
          </DrawerHeader>
          <DrawerBody bg="greyscale.330" py="1.4rem" px="2.4rem">
            {selectedAction && <ActionDetails selectedAction={selectedAction} />}
            <ProveYourExpenses />
          </DrawerBody>

          <DrawerFooter justifyContent="center">
            <Button variant="secondary" w="18rem" onClick={onClose}>
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
