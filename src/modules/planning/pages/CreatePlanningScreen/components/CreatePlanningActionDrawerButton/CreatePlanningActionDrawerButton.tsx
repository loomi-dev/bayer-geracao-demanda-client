import { useDisclosure } from '@chakra-ui/react';

import { Balance } from '@/components';

import { UpdatePlanningActionDrawer } from '../UpdatePlanningActionDrawer';

export const CreatePlanningActionDrawerButton = () => {
  const {
    isOpen: isOpenCreatePlanningActionDrawer,
    onOpen: onOpenCreatePlanningActionDrawer,
    onClose: onCloseCreatePlanningActionDrawer,
  } = useDisclosure();

  return (
    <>
      <Balance.Button w="15.6rem" onClick={onOpenCreatePlanningActionDrawer}>
        Nova ação
      </Balance.Button>

      <UpdatePlanningActionDrawer
        mode="CREATE"
        isOpen={isOpenCreatePlanningActionDrawer}
        onClose={onCloseCreatePlanningActionDrawer}
      />
    </>
  );
};
