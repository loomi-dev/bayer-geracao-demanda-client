import { Button, Center, Divider, Flex, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

import { useDeletePlanning } from '@/api';
import { ConfirmationModal, EditIcon, EyeOpenIcon, TrashIcon } from '@/components';
import { usePagination } from '@/hooks';

type PlanningTableActionProps = {
  planningId: number;
  historic?: Historic[];
};

export const PlanningTableAction = ({ planningId, historic }: PlanningTableActionProps) => {
  const { push } = useRouter();

  const { mutate: deletePlanning, isLoading: isLoadingDeletePlanning } = useDeletePlanning();

  const { resetPage } = usePagination('planning_table');

  const {
    isOpen: isOpenDeletePlanningModal,
    onOpen: onOpenDeletePlanningModal,
    onClose: onCloseDeletePlanningModal,
  } = useDisclosure();

  const planningStatus = historic?.at(-1)?.status ?? 'default';
  const isPlanningAccepted = planningStatus === 'accepted';

  const handleNavigateToCreatePlanningScreen = () => {
    push({
      pathname: '/planejamento/criar-novo-planejamento',
      query: {
        planning_id: planningId,
      },
    });
  };

  const handleDeletePlanning = () => {
    deletePlanning(
      {
        planningId,
      },
      {
        onSuccess: () => {
          onCloseDeletePlanningModal();
          resetPage();
        },
      },
    );
  };

  const handleOpenDeletePlanningDrawer = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOpenDeletePlanningModal();
  };

  return (
    <Center>
      {isPlanningAccepted ? (
        <Button variant="fifth" h="3rem" w="7rem" onClick={handleNavigateToCreatePlanningScreen}>
          <EyeOpenIcon />
        </Button>
      ) : (
        <Flex layerStyle="actions">
          <Button variant="action" onClick={handleNavigateToCreatePlanningScreen}>
            <EditIcon />
          </Button>

          <Divider orientation="vertical" h="1rem" w="1px" borderColor="greyscale.450" />

          <>
            <Button variant="action" onClick={handleOpenDeletePlanningDrawer}>
              <TrashIcon />
            </Button>

            <ConfirmationModal
              isOpen={isOpenDeletePlanningModal}
              onClose={onCloseDeletePlanningModal}
              title="Deseja excluir este planejamento?"
              description="Ao excluir o planejamento ele será perdido totalmente sem chance de recuperação, deseja continuar com esta ação?"
              onConfirm={handleDeletePlanning}
              confirmButtonProps={{ isLoading: isLoadingDeletePlanning }}
              confirmText="Excluir"
            />
          </>
        </Flex>
      )}
    </Center>
  );
};
