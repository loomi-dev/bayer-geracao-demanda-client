import { Button, useDisclosure } from '@chakra-ui/react';
import { Fragment } from 'react';

import { Add2Icon } from '@/components';

import { SendReceiptsDrawer } from '..';

type SendReceiptsButtonProps = {
  action: ReceiptAction;
};

export const SendReceiptsButton = ({ action }: SendReceiptsButtonProps) => {
  const {
    isOpen: isOpenSendReceiptsDrawer,
    onOpen: onOpenSendReceiptsDrawer,
    onClose: onCloseSendReceiptsDrawer,
  } = useDisclosure();

  return (
    <Fragment>
      <Button
        onClick={onOpenSendReceiptsDrawer}
        leftIcon={<Add2Icon />}
        variant="primary-filter"
        h="3.4rem"
        px="1.3rem"
      >
        Comprovar
      </Button>

      <SendReceiptsDrawer
        action={action}
        isOpen={isOpenSendReceiptsDrawer}
        onClose={onCloseSendReceiptsDrawer}
      />
    </Fragment>
  );
};
