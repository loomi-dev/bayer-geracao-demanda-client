import { Button, useDisclosure } from '@chakra-ui/react';
import { Fragment } from 'react';

import { Add2Icon } from '@/components';

import { DrawerSendReceipts } from '..';

type ProveReceiptsButtonProps = {
  action: ReceiptAction;
};

export const ProveReceiptsButton = ({ action }: ProveReceiptsButtonProps) => {
  const {
    isOpen: isOpenDrawerSendReceipts,
    onOpen: onOpenDrawerSendReceipts,
    onClose: onCloseDrawerSendReceipts,
  } = useDisclosure();

  return (
    <Fragment>
      <Button
        onClick={onOpenDrawerSendReceipts}
        leftIcon={<Add2Icon />}
        variant="primary-filter"
        h="3.4rem"
        px="1.3rem"
      >
        Comprovar
      </Button>

      <DrawerSendReceipts
        action={action}
        isOpen={isOpenDrawerSendReceipts}
        onClose={onCloseDrawerSendReceipts}
      />
    </Fragment>
  );
};
