import { Flex, HStack, Text } from '@chakra-ui/react';

export const NotificationCard = () => (
  <Flex flexDir="column" layerStyle="card" gap="0.9rem" mt="4rem" h="auto" px="2.4rem" py="2rem">
    <Text textTransform="uppercase" textStyle="action2">
      Planejamento 2023/24
    </Text>
    <HStack w="100%" justify="space-between">
      <Text textStyle="footnote">Valor já planejado</Text>
      <Text textStyle="footnote-bold">R$ 40.000</Text>
    </HStack>
    <Text textStyle="footnote-bold">Falta planejar R$ 20.000 em ações</Text>
  </Flex>
);
