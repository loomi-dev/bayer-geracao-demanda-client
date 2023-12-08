import { Badge, Button, HStack, Text } from '@chakra-ui/react';

import { ArrowRightIcon } from '@/components';
import { PlanningStatus, PlanningValue } from '@/types';

type CreatePlanningStatusSectionProps = {
  planningStatus: HistoricStatus | 'default';
};

export const CreatePlanningStatusSection = ({
  planningStatus,
}: CreatePlanningStatusSectionProps) => {
  const isNewPlanning = planningStatus === 'default';

  return (
    <HStack
      w="full"
      h="5.6rem"
      px="2.4rem"
      bg="linear-gradient(95deg, rgba(244, 242, 242, 0.50) 80.42%, rgba(120, 120, 120, 0.00) 149.39%)"
      border="1px solid"
      borderColor="surface.primary"
      borderRadius="full"
      spacing="1.6rem"
      boxShadow="primary"
      justify="space-between"
    >
      <Text textStyle="action4" textTransform="uppercase">
        Envie o planejamento para aprovação do RTV
      </Text>

      <HStack spacing="1.6rem">
        <Badge variant={PlanningStatus['default']} w="15rem">
          {PlanningValue[planningStatus]}
        </Badge>

        {isNewPlanning ? (
          <Button w="18.5rem" size="sm">
            <Text textStyle="action3" as="span">
              Enviar para aprovação
            </Text>
          </Button>
        ) : (
          <Button variant="unstyled">
            <ArrowRightIcon />
          </Button>
        )}
      </HStack>
    </HStack>
  );
};
