import { Flex, Text } from '@chakra-ui/react';

import { MinimumNumbersTable } from './MinimumNumbersTable';

export const MinimumNumbersSection = () => (
  <Flex
    layerStyle="card"
    p="3.2rem"
    border="1px solid"
    borderColor="surface.primary"
    flexDir="column"
    w="100%"
    bgColor="surface.primary"
  >
    <Text textStyle="footnote-bold">
      NÚMEROS MÍNIMOS NECESSÁRIOS PARA ATINGIR CADA FAIXA DO PROGRAMA
    </Text>
    <Text textStyle="body3" color="surface.invert">
      De acordo com a safra planejada
    </Text>
    <MinimumNumbersTable />
  </Flex>
);
