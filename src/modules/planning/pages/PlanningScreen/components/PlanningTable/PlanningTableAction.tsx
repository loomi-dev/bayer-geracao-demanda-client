import { Button, Center, Divider, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { EditIcon, EyeOpenIcon, TrashIcon } from '@/components';

type PlanningTableActionProps = {
  planningId: number;
  historic?: Historic[];
};

export const PlanningTableAction = ({ planningId, historic }: PlanningTableActionProps) => {
  const { push } = useRouter();

  const historicStatus = historic?.at(-1)?.status ?? 'default';

  const handleNavigateToCreatePlanningScreen = () => {
    push({
      pathname: '/planejamento/criar-novo-planejamento',
      query: {
        planning_id: planningId,
      },
    });
  };

  return (
    <Center>
      {historicStatus === 'accepted' ? (
        <Button
          variant="unstyled"
          h="3rem"
          w="7rem"
          borderRadius="full"
          border="1px solid"
          borderColor="opacity.black.0.10"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="0.8rem"
          onClick={handleNavigateToCreatePlanningScreen}
        >
          <EyeOpenIcon />
        </Button>
      ) : (
        <HStack
          h="3rem"
          w="7rem"
          borderRadius="full"
          border="1px solid"
          borderColor="opacity.black.0.10"
          justify="center"
          align="center"
          spacing="1rem"
          p="0.8rem"
        >
          <Button variant="unstyled" onClick={handleNavigateToCreatePlanningScreen}>
            <EditIcon />
          </Button>

          <Divider orientation="vertical" h="1rem" w="1px" borderColor="greyscale.450" />

          <Button variant="unstyled" isDisabled>
            <TrashIcon />
          </Button>
        </HStack>
      )}
    </Center>
  );
};
