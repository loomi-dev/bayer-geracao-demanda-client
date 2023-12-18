import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';

import { CircleIcon, DocumentIcon } from '@/components';

import { useDrawerExpenseReceipt } from '../../stores';
import { ActionDetails } from '../ActionDetails/ActionDetails';
import { ProveYourExpenses } from '../ProveYourExpenses';

export const DrawerExpenseReceipt = () => {
  const isOpen = useDrawerExpenseReceipt((state) => state.isOpen);
  const onClose = useDrawerExpenseReceipt((state) => state.onClose);

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
              <DocumentIcon />
            </CircleIcon>
            <Text ml="1.6rem" textStyle="h3">
              Comprovante de gastos
            </Text>
          </DrawerHeader>
          <DrawerBody bg="greyscale.330" py="1.4rem" px="2.4rem">
            <ActionDetails />
            <ProveYourExpenses />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
