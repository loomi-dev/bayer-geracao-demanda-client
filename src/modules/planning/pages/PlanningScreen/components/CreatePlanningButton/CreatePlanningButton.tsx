import { Button, Spinner, Text, useDisclosure } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';

import { useCreatePlanning } from '@/api';
import { AddInsideCircleIcon, CircleIcon, WarningModal } from '@/components';

export const CreatePlanningButton = () => {
  const session = useSession();
  const farmerId = session.data?.user?.farmer?.id as number;
  const harvestId = session.data?.user?.safra?.id as number;
  const {
    isOpen: isOpenPlanningAlreadyExistsModal,
    onOpen: onOpenPlanningAlreadyExistsModal,
    onClose: onClosePlanningAlreadyExistsModal,
  } = useDisclosure();

  const { mutate: createPlanning, isLoading: isLoadingCreatePlanning } = useCreatePlanning();

  const handleCreatePlanning = () => {
    createPlanning(
      {
        farmerId,
        harvestId,
      },
      {
        onError: (err) => {
          if (err?.response?.data?.error?.name === 'PLANNING_ALREADY_EXIST') {
            onOpenPlanningAlreadyExistsModal();
          }
        },
      },
    );
  };

  return (
    <Fragment>
      <Button
        variant="third"
        w="21.5rem"
        pl="2.4rem"
        pr="0"
        transition="all 0.2s linear"
        rightIcon={
          <CircleIcon>
            {isLoadingCreatePlanning ? (
              <Spinner color="#fff" fontSize={20} />
            ) : (
              <AddInsideCircleIcon />
            )}
          </CircleIcon>
        }
        isDisabled={isLoadingCreatePlanning}
        onClick={handleCreatePlanning}
        _hover={{
          pl: '1rem',
        }}
        _disabled={{
          pl: '1rem',
        }}
      >
        <Text as="span" w="full" align="center">
          Novo planejamento
        </Text>
      </Button>

      <WarningModal
        title="Não é possível criar mais planejamentos para esta safra"
        description="Um dos seus planejamentos já foi aprovado para esta safra, não será possível criar novos planejamentos nem os enviar para aprovação"
        isOpen={isOpenPlanningAlreadyExistsModal}
        onClose={onClosePlanningAlreadyExistsModal}
      />
    </Fragment>
  );
};
