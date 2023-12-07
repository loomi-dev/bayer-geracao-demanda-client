import { Badge, Center, Text } from '@chakra-ui/react';

import { PlanningStatus, PlanningValue } from '@/types';

type PlanningStatusColumnProps = {
  historic: Historic[];
};

export const PlanningStatusColumn = ({ historic }: PlanningStatusColumnProps) => {
  const historicStatus = historic?.at(-1)?.status ?? 'default';
  const actionsCountRejected = historic?.at(-1)?.actions.length ?? 0;

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
        {actionsCountRejected > 0 && historicStatus === 'rejected' && (
          <Center boxSize="1.8rem" borderRadius="full" bg="red.danger_30">
            <Text textStyle="footnote" color="surface.primary" lineHeight="0">
              {actionsCountRejected}
            </Text>
          </Center>
        )}
      </Badge>
    </Center>
  );
};
