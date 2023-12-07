import { Badge, Box, HStack, Text } from '@chakra-ui/react';

export const HistoricHeader = () => (
  <HStack h="5.2rem" w="full" justify="space-between">
    <HStack spacing="0.9rem">
      <Text textStyle="action2" color="black">
        Hoje
      </Text>
      <Box boxSize="0.4rem" borderRadius="full" bg="greyscale.450" />
      <Text textStyle="action2" color="black">
        08:00
      </Text>
    </HStack>

    <Badge variant="table_primary" borderRadius="1.2rem" h="3.2rem" px="1.6rem">
      Aguardando aprovação
    </Badge>
  </HStack>
);
