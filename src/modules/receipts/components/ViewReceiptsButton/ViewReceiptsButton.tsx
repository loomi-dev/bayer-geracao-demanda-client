import { Button, useDisclosure } from '@chakra-ui/react';
import { Fragment } from 'react';

import { EyeIcon } from '@/components';

import { DrawerViewReceipts } from '../DrawerViewReceipts';

type ViewReceiptsButtonProps = {
  action: ReceiptAction;
};

export const ViewReceiptsButton = ({ action }: ViewReceiptsButtonProps) => {
  const {
    isOpen: isOpenDrawerViewReceipts,
    onOpen: onOpenDrawerViewReceipts,
    onClose: onCloseDrawerViewReceipts,
  } = useDisclosure();

  return (
    <Fragment>
      <Button
        onClick={onOpenDrawerViewReceipts}
        leftIcon={<EyeIcon />}
        variant="primary-filter"
        h="3.4rem"
        px="1.3rem"
      >
        Visualizar
      </Button>

      <DrawerViewReceipts
        data={action}
        isOpen={isOpenDrawerViewReceipts}
        onClose={onCloseDrawerViewReceipts}
      />
    </Fragment>
  );
};
