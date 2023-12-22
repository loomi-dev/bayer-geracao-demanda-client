import { Button, useDisclosure } from '@chakra-ui/react';

import { Add2Icon } from '@/components';

import { DrawerSendProofAction } from '../DrawerSendProofAction';

type ProveActionButtonProps = {
  action: ReceiptAction;
};

export const ProveActionButton = ({ action }: ProveActionButtonProps) => {
  const {
    isOpen: isOpenProveActionDrawer,
    onOpen: onOpenProveActionDrawer,
    onClose: onCloseProveActionDrawer,
  } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpenProveActionDrawer}
        leftIcon={<Add2Icon />}
        variant="primary-filter"
        h="3.4rem"
        px="1.3rem"
      >
        Comprovar
      </Button>

      <DrawerSendProofAction
        action={action}
        isOpen={isOpenProveActionDrawer}
        onClose={onCloseProveActionDrawer}
      />
    </>
  );
};
