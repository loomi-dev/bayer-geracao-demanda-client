import { Flex, HStack, Skeleton, Text } from '@chakra-ui/react';

import { formatPrice } from '@/utils';

import { AcceptPlanningModal } from './AcceptPlanningModal';
import { RefusePlanningModal } from './RefusePlanningModal';

type PlanningActionResumeProps = {
  planningValue: number;
};

export const PlanningActionResume = ({ planningValue }: PlanningActionResumeProps) => (
  <Flex px="2.4rem" justify="space-between">
    <HStack gap="2rem">
      <Text textStyle="aciton3" textTransform="uppercase">
        Total
      </Text>
      {planningValue ? (
        <Text textStyle="action2" color="text.brand">
          {formatPrice(planningValue)}
        </Text>
      ) : (
        <Skeleton w="10rem" h="2rem" />
      )}
    </HStack>
    <HStack gap="1rem">
      <RefusePlanningModal />
      <AcceptPlanningModal />
    </HStack>
  </Flex>
);
