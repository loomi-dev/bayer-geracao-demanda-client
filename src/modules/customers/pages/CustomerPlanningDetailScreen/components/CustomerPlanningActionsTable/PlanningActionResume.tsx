import { Flex, HStack, Skeleton, Text } from '@chakra-ui/react';

import { formatPrice } from '@/utils';

type PlanningActionResumeProps = {
  planningValue: number;
};

export const PlanningActionResume = ({ planningValue }: PlanningActionResumeProps) => {
  if (!planningValue) return;
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
    </Flex>
  );
};
