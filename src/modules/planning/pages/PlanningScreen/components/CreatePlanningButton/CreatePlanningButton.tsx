import { Button, Spinner, Text, useDisclosure } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { Fragment, useState } from 'react';

import { useCreatePlanning } from '@/api';
import { AddInsideCircleIcon, CircleIcon, WarningModal } from '@/components';

export const CreatePlanningButton = () => {
  const session = useSession();
  const farmerId = session.data?.user?.farmer?.id as number;
  const harvestId = session.data?.user?.safra?.id as number;
  const [errorCode, setErrorCode] = useState('');
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
          setErrorCode(err?.response?.data?.error?.message ?? '');
          onOpenPlanningAlreadyExistsModal();
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
        errorCode={errorCode}
        isOpen={isOpenPlanningAlreadyExistsModal}
        onClose={onClosePlanningAlreadyExistsModal}
      />
    </Fragment>
  );
};
