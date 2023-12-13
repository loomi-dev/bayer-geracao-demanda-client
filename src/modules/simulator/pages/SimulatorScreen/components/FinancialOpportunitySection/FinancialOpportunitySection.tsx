import { Flex, Text } from '@chakra-ui/react';

import { FinancialOpportunityTable } from './FinancialOpportunityTable';

export const FinancialOpportunitySection = () => (
  <Flex layerStyle="card" p="3.2rem" flexDir="column" w="100%">
    <Text textStyle="footnote-bold" textTransform="uppercase">
      oportunidade financeira em cada faixa do programa
    </Text>
    <Text textStyle="body3" color="surface.invert">
      Não acumulativa
    </Text>
    <FinancialOpportunityTable />
  </Flex>
);
