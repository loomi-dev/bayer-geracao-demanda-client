import { Button, Center, Divider, Flex, useDisclosure } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { EditIcon, EyeOpenIcon, ModalDispatch, TrashIcon } from '@/components';

type PlanningActionsTableActionProps = PlanningAction;

const DynamicViewActionDetailsDrawer = dynamic(async () => {
  const { ViewActionDetailsDrawer } = await import('../ViewActionDetailsDrawer');

  return ViewActionDetailsDrawer;
});

export const PlanningActionsTableAction = (data: PlanningActionsTableActionProps) => {
  const {
    isOpen: isOpenViewActionDetailsDrawer,
    onOpen: onOpenViewActionDetailsDrawer,
    onClose: onCloseViewActionDetailsDrawer,
  } = useDisclosure();

  const {
    isOpen: isOpenDeletePlanningActionModal,
    onOpen: onOpenDeletePlanningActionModal,
    onClose: onCloseDeletePlanningActionModal,
  } = useDisclosure();

  const isActionAccepted = data.status === 'accepted';

  return (
    <Center>
      {isActionAccepted ? (
        <>
          <Button variant="fifth" h="3rem" w="7rem" onClick={onOpenViewActionDetailsDrawer}>
            <EyeOpenIcon />
          </Button>

          {isOpenViewActionDetailsDrawer && (
            <DynamicViewActionDetailsDrawer
              planningActionDetails={data}
              isOpen={isOpenViewActionDetailsDrawer}
              onClose={onCloseViewActionDetailsDrawer}
            />
          )}
        </>
      ) : (
        <Flex layerStyle="actions">
          <Button variant="unstyled" isDisabled>
            <EditIcon />
          </Button>

          <Divider orientation="vertical" h="1rem" w="1px" borderColor="greyscale.450" />

          <>
            <Button variant="unstyled" onClick={onOpenDeletePlanningActionModal}>
              <TrashIcon />
            </Button>

            <ModalDispatch
              isOpen={isOpenDeletePlanningActionModal}
              onClose={onCloseDeletePlanningActionModal}
              title="Deseja excluir esta ação do seu planejamento?"
              description="Ao excluir esta ação ela será removida permanentemente de seu planejamento"
              onConfirm={() => console.log('deletar ação')}
            />
          </>
        </Flex>
      )}
    </Center>
  );
};
