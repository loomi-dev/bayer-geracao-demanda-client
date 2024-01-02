import { Button, useDisclosure } from '@chakra-ui/react';
import { Fragment } from 'react';

import { EyeIcon } from '@/components';

import { ViewReceiptsDrawer } from '../ViewReceiptsDrawer';

type ViewReceiptsButtonProps = {
  action: ReceiptAction;
};

export const ViewReceiptsButton = ({ action }: ViewReceiptsButtonProps) => {
  const {
    isOpen: isOpenViewReceiptsDrawer,
    onOpen: onOpenViewReceiptsDrawer,
    onClose: onCloseViewReceiptsDrawer,
  } = useDisclosure();

  return (
    <Fragment>
      <Button
        onClick={onOpenViewReceiptsDrawer}
        leftIcon={<EyeIcon />}
        variant="primary-filter"
        h="3.4rem"
        px="1.3rem"
      >
        Visualizar
      </Button>

      <ViewReceiptsDrawer
        data={action}
        isOpen={isOpenViewReceiptsDrawer}
        onClose={onCloseViewReceiptsDrawer}
      />
    </Fragment>
  );
};
