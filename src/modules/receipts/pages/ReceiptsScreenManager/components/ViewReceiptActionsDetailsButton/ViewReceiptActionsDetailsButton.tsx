import { Button, useDisclosure } from '@chakra-ui/react';
import { Fragment } from 'react';

import { EyeIcon } from '@/components';

import { ReceiptActionsDetailsDrawer } from '../ReceiptActionsDetailsDrawer';

type ViewReceiptActionsDetailsButtonProps = {
  action: ReceiptAction;
};

export const ViewReceiptActionsDetailsButton = ({
  action,
}: ViewReceiptActionsDetailsButtonProps) => {
  const {
    isOpen: isOpenReceiptActionsDetailsDrawer,
    onOpen: onOpenReceiptActionsDetailsDrawer,
    onClose: onCloseReceiptActionsDetailsDrawer,
  } = useDisclosure();

  return (
    <Fragment>
      <Button
        onClick={onOpenReceiptActionsDetailsDrawer}
        leftIcon={<EyeIcon />}
        variant="primary-filter"
        h="3.4rem"
        px="1.3rem"
      >
        Visualizar
      </Button>

      <ReceiptActionsDetailsDrawer
        data={action}
        isOpen={isOpenReceiptActionsDetailsDrawer}
        onClose={onCloseReceiptActionsDetailsDrawer}
      />
    </Fragment>
  );
};
