import { DrawerHeader, Text, VStack } from '@chakra-ui/react';

import { HistoricDrawerStatus } from './HistoricDrawerStatus';

export const HistoricDrawerHeader = () => (
  <DrawerHeader p="initial">
    <VStack
      align="flex-start"
      p="6rem 3.2rem 2.4rem"
      borderBottom="1px solid"
      borderColor="opacity.black.0.08"
    >
      <Text textStyle="h4">Histórico de atualizações do planejamento</Text>
      <Text textStyle="caption3" color="greyscale.650">
        Histórico de todas as atualizações e trocas dentro do planejamento atual
      </Text>
    </VStack>

    <HistoricDrawerStatus />
  </DrawerHeader>
);
