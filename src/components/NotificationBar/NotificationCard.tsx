import { Divider, Flex, FlexProps, HStack, Text, VStack } from '@chakra-ui/react';

import { formatPrice } from '@/utils';

import { NotificationGrouper } from './NotificationGrouper';
import { NotificationPlanningAction } from './NotificationPlanningAction';

type NotificationCardProps = {
  harvestYear: string;
  totalPlanning: string;
  missingPlanning: string;
  planning: Planning;
} & FlexProps;

export const NotificationCard = ({
  harvestYear,
  totalPlanning,
  missingPlanning,
  planning,
  ...restProps
}: NotificationCardProps) => {
  const actionsKit = Number(planning?.metric?.farm_kit_in_cents) || 0;
  const actionsRelationship = Number(planning?.metric?.relationship_task_in_cent) || 0;
  const actionsTask = Number(planning?.metric?.farm_task_in_cents) || 0;

  const actionsAmount = [actionsKit, actionsRelationship, actionsTask].filter(
    (action) => action > 0,
  ).length;

  return (
    <Flex
      w="full"
      flexDir="column"
      layerStyle="card"
      gap="0.9rem"
      h="auto"
      px="2.4rem"
      py="2rem"
      borderRadius="3rem"
      {...restProps}
    >
      <Text textTransform="uppercase" textStyle="action4">
        Planejamento {harvestYear}
      </Text>

      <HStack spacing="1rem">
        <NotificationGrouper actionsAmount={actionsAmount} />

        <VStack w="full" align="flex-start" spacing="1.5rem" position="relative">
          {actionsTask > 0 && (
            <NotificationPlanningAction type="farm_task" value={`R$ ${formatPrice(actionsTask)}`} />
          )}
          {actionsRelationship > 0 && (
            <NotificationPlanningAction
              type="relationship_task"
              value={`R$ ${formatPrice(actionsRelationship)}`}
            />
          )}
          {actionsKit > 0 && (
            <NotificationPlanningAction type="farm_kit" value={`R$ ${formatPrice(actionsKit)}`} />
          )}
        </VStack>
      </HStack>

      <Divider borderColor="border.invert" />

      <HStack w="100%" justify="space-between" align="center">
        <Text textStyle="footnote" fontSize={{ lg: '1rem', xl: '1.2rem' }}>
          Valor já planejado
        </Text>
        <Text textStyle="footnote-bold" fontSize={{ lg: '1rem', xl: '1.2rem' }}>
          {`R$ ${formatPrice(totalPlanning)}`}
        </Text>
      </HStack>

      {missingPlanning && (
        <Text textStyle="footnote-bold" fontSize={{ lg: '1rem', xl: '1.2rem' }}>
          Falta planejar {`R$ ${formatPrice(missingPlanning)}`} em ações
        </Text>
      )}
    </Flex>
  );
};
