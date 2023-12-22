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

import { BigDocumentIcon, CircleIcon } from '@/components';
import { GridActionDetails } from '@/modules/receipts/components';

import { ProveYourExpenses } from '../ProveYourExpenses';

type ReceiptActionsDetailsDrawerProps = {
  data: ReceiptAction;
} & Omit<DrawerProps, 'children'>;

export const ReceiptActionsDetailsDrawer = ({
  data,
  onClose,
  ...restProps
}: ReceiptActionsDetailsDrawerProps) => (
  <Drawer onClose={onClose} {...restProps}>
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

      <DrawerBody bg="greyscale.330" py="1.4rem" px="2.4rem" gap="1rem">
        <GridActionDetails {...data} />
        <ProveYourExpenses {...data} />
      </DrawerBody>

      <DrawerFooter justifyContent="center">
        <Button variant="secondary" w="18rem" onClick={onClose}>
          Fechar
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);