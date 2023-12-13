import { Flex, Text } from '@chakra-ui/react';

import { MinimumNumbersTable } from './MinimumNumbersTable';

export const MinimumNumbersSection = () => (
  <Flex layerStyle="card" p="3.2rem" flexDir="column" w="100%">
    <Text textStyle="footnote-bold" lineHeight="2rem">
      NÚMEROS MÍNIMOS NECESSÁRIOS PARA ATINGIR CADA FAIXA DO PROGRAMA
    </Text>
    <Text textStyle="body3" color="surface.invert" lineHeight="3.1rem">
      De acordo com a safra planejada
    </Text>
    <MinimumNumbersTable />
  </Flex>
);
