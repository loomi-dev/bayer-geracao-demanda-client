import { Badge, Flex, Text, VStack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { CustomerPlannings } from '@/api';
import { PlanningStatus, PlanningValue } from '@/types';
import { Mask, formatPrice } from '@/utils';

type KanbanCardProps = {
  planning: CustomerPlannings;
  badgeColor?: string;
};

dayjs.extend(relativeTime);

export const KanbanCard = ({ planning, badgeColor }: KanbanCardProps) => {
  const planningStatus = planning.historic?.at(-1)?.status ?? '';
  const actionsSummary = planning.actions?.reduce(
    ({ actionsTotalValue, actionsQuantity }, action) => {
      actionsQuantity++;
      actionsTotalValue += action.amountInCents ?? 0;
      return { actionsQuantity, actionsTotalValue };
    },
    { actionsTotalValue: 0, actionsQuantity: 0 },
  );

  return (
    <Flex
      layerStyle="card"
      p="2.4rem"
      gap="1.6rem"
      w="30rem"
      flexDirection="column"
      position="relative"
      borderRadius="1.6rem"
    >
      <Badge
        position="absolute"
        top="0.9rem"
        right="1.1rem"
        variant="filled_primary"
        bgColor={badgeColor}
        border="none"
        py="0rem"
      >
        Novidades
      </Badge>

      <VStack align="flex-start" gap="initial">
        <Text textStyle="caption5" color="greyscale.700">
          Última atualização
        </Text>
        <Text textStyle="action3" lineHeight="2rem">
          A {dayjs().to(planning.updatedAt, true)}
        </Text>
      </VStack>
      <VStack align="flex-start" gap="initial">
        <Text textStyle="caption5" color="greyscale.700">
          Cliente
        </Text>
        <VStack gap="initial" align="flex-start">
          <Text textStyle="body2">{planning.farmer?.name}</Text>
          <Text textStyle="footnote" lineHeight="1.8rem">
            {Mask.formatCNPJ(planning.farmer?.company_identifier ?? '')}
          </Text>
        </VStack>
      </VStack>
      <Text textStyle="h4" color="text.brand" lineHeight="2.4rem">
        R$ {formatPrice(actionsSummary?.actionsTotalValue)}
      </Text>

      <Flex
        py="0.8rem"
        w="100%"
        align="center"
        justify="center"
        borderY="1px solid"
        borderColor="opacity.black.0.06"
      >
        <Text textStyle="footnote-bold" color="green.100" lineHeight="2rem">
          {actionsSummary?.actionsQuantity} Ações
        </Text>
      </Flex>
      <VStack align="flex-start" gap="0.4rem">
        <Text w="fit-content" textStyle="caption5" color="greyscale.700">
          status
        </Text>
        <Badge variant={PlanningStatus[planningStatus]} w="full" lineHeight="1.8rem">
          {PlanningValue[planningStatus]}
        </Badge>
      </VStack>
    </Flex>
  );
};
