import { Button, Center, Divider, Flex, useDisclosure } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { MouseEvent } from 'react';

import { ConfirmationModal, EditIcon, EyeOpenIcon, TrashIcon } from '@/components';
import { usePagination } from '@/hooks';
import { useDeletePlanningAction } from '@/modules/planning/api';

type PlanningActionsTableActionProps = PlanningAction;

const DynamicViewActionDetailsDrawer = dynamic(async () => {
  const { ViewActionDetailsDrawer } = await import('../ViewActionDetailsDrawer');

  return ViewActionDetailsDrawer;
});

export const PlanningActionsTableAction = (data: PlanningActionsTableActionProps) => {
  const { mutate: deletePlanningAction, isLoading: isLoadingDeletePlanningAction } =
    useDeletePlanningAction();

  const { resetPage } = usePagination('planning_actions');

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

  const handleDeletePlanningAction = () => {
    deletePlanningAction(
      {
        actionId: data.id,
      },
      {
        onSuccess: () => {
          onCloseDeletePlanningActionModal();
          resetPage();
        },
      },
    );
  };

  const handleOpenDeletePlanningActionModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOpenDeletePlanningActionModal();
  };

  const handleOpenViewActionDetailsDrawer = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOpenViewActionDetailsDrawer();
  };

  return (
    <Center>
      {isActionAccepted ? (
        <>
          <Button variant="fifth" h="3rem" w="7rem" onClick={handleOpenViewActionDetailsDrawer}>
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
            <Button variant="unstyled" onClick={handleOpenDeletePlanningActionModal}>
              <TrashIcon />
            </Button>

            <ConfirmationModal
              isOpen={isOpenDeletePlanningActionModal}
              onClose={onCloseDeletePlanningActionModal}
              title="Deseja excluir esta ação do seu planejamento?"
              description="Ao excluir esta ação ela será removida permanentemente de seu planejamento"
              onConfirm={handleDeletePlanningAction}
              confirmButtonProps={{
                isLoading: isLoadingDeletePlanningAction,
              }}
              confirmText="Excluir"
            />
          </>
        </Flex>
      )}
    </Center>
  );
};
