import { Flex, Text } from '@chakra-ui/react';

import { FinancialOportunityTable } from './FinancialOportunityTable';

export const FinancialOportunitySection = () => (
  <Flex
    layerStyle="card"
    p="3.2rem"
    border="1px solid"
    borderColor="surface.primary"
    flexDir="column"
    w="100%"
    bgColor="surface.primary"
  >
    <Text textStyle="footnote-bold" textTransform="uppercase">
      oportunidade financeira em cada faixa do programa
    </Text>
    <Text textStyle="body3" color="surface.invert">
      Não acumulativa
    </Text>
    <FinancialOportunityTable />
  </Flex>
);
