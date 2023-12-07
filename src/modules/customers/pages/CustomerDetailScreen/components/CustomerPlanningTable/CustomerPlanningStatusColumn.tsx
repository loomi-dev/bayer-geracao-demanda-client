import { Badge, Center, Text } from '@chakra-ui/react';

import { PlanningStatus, PlanningValue } from '@/types';

type PlanningStatusColumnProps = {
  historic: Historic[];
};

export const CustomerPlanningStatusColumn = ({ historic }: PlanningStatusColumnProps) => {
  const historicStatus = historic?.at(-1)?.status ?? 'default';

  return (
    <Center>
      <Badge
        variant={PlanningStatus[historicStatus]}
        w="15rem"
        h="3.4rem"
        py="0.8rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="1rem"
      >
        <Text as="span">{PlanningValue[historicStatus]}</Text>
      </Badge>
    </Center>
  );
};
