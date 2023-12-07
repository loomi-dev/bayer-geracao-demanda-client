import { Button, Flex, HStack, Text } from '@chakra-ui/react';

import { formatPrice } from '@/utils';

type HistoricItemSummaryProps = {
  planningTotalValue: number;
};
export const HistoricItemSummary = ({ planningTotalValue }: HistoricItemSummaryProps) => (
  <Flex
    border="none"
    bgColor="surface.primary"
    borderTopRadius="initial"
    borderTop="1px solid"
    borderTopColor="opacity.white.1.40"
    borderBottomRadius="1.6rem"
    px="2.4rem"
    py="2rem"
    mt="-1.2rem"
    justify="space-between"
  >
    <HStack gap="2rem">
      <Text textStyle={{ base: 'action3', '2xl': 'action2' }} textTransform="uppercase">
        Total
      </Text>
      <Text textStyle={{ base: 'action2', '2xl': 'action2' }} color="text.brand">
        R$ {formatPrice(planningTotalValue)}
      </Text>
    </HStack>
    <HStack>
      <Button variant="fifth" size="sm">
        Recusar planejamento
      </Button>
      <Button size="sm">
        <Text textStyle="footnote-small-bold">Autorizar planejamento</Text>
      </Button>
    </HStack>
  </Flex>
);
