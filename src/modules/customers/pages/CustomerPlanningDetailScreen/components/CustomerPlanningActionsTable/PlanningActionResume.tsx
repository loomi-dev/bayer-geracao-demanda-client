import { Button, Flex, HStack, Skeleton, Text, Tooltip } from '@chakra-ui/react';

import { formatPrice } from '@/utils';

type PlanningActionResumeProps = {
  planningValue: number;
  onClick: () => void;
};

export const PlanningActionResume = ({ planningValue, onClick }: PlanningActionResumeProps) => {
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
        <Tooltip label="Planejamento vazio" isOpen={!hasPlanningValue}>
          <Button onClick={onClick} isDisabled={!hasPlanningValue} variant="fifth" size="sm">
            Recusar planejamento
          </Button>
        </Tooltip>
        <Tooltip label="Planejamento vazio" isOpen={!hasPlanningValue}>
          <Button onClick={onClick} isDisabled={!hasPlanningValue} size="sm">
            <Text textStyle="footnote-small-bold">Autorizar planejamento</Text>
          </Button>
        </Tooltip>
      </HStack>
    </Flex>
  );
};
