import { Button, Flex, HStack, Skeleton, Text } from '@chakra-ui/react';

import { formatPrice } from '@/utils';

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
      <Button variant="fifth" w="14.5rem" fontSize="1.2rem">
        Recusar planejamento
      </Button>
      <Button fontSize="1.2rem">Autorizar planejamento</Button>
    </HStack>
  </Flex>
);
