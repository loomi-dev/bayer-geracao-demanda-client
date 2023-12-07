import { Button, Center, Divider, Flex } from '@chakra-ui/react';
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
        <Button variant="fifth" h="3rem" w="7rem" onClick={handleNavigateToCreatePlanningScreen}>
          <EyeOpenIcon />
        </Button>
      ) : (
        <Flex layerStyle="actions">
          <Button variant="unstyled" onClick={handleNavigateToCreatePlanningScreen}>
            <EditIcon />
          </Button>

          <Divider orientation="vertical" h="1rem" w="1px" borderColor="greyscale.450" />

          <Button variant="unstyled" isDisabled>
            <TrashIcon />
          </Button>
        </Flex>
      )}
    </Center>
  );
};
