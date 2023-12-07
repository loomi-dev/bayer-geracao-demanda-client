import { Button, Flex, HStack, Skeleton, Text } from '@chakra-ui/react';

import { formatPrice } from '@/utils';

type PlanningActionResumeProps = {
  planningValue: number;
  onApprove: () => void;
  onReject: () => void;
};

export const PlanningActionResume = ({
  planningValue,
  onApprove,
  onReject,
}: PlanningActionResumeProps) => {
  const hasPlanningValue = Boolean(planningValue);
  return (
    <Flex px="2.4rem" justify="space-between">
      <HStack gap="2rem">
        <Text textStyle={{ base: 'action3', '2xl': 'h4' }} textTransform="uppercase">
          Total
        </Text>
        {planningValue ? (
          <Text textStyle={{ base: 'action2', '2xl': 'h4' }} color="text.brand">
            R$ {formatPrice(planningValue)}
          </Text>
        ) : (
          <Skeleton w="10rem" h="2rem" />
        )}
      </HStack>
      <HStack>
        <Button onClick={onReject} isDisabled={!hasPlanningValue} variant="fifth" size="sm">
          Recusar planejamento
        </Button>
        <Button onClick={onApprove} isDisabled={!hasPlanningValue} size="sm">
          <Text textStyle="footnote-small-bold">Autorizar planejamento</Text>
        </Button>
      </HStack>
    </Flex>
  );
};
