import { Divider, Flex, Text } from '@chakra-ui/react';

import { SupplierCard } from './SupplierCard';

export const SuppliersSection = () => (
  <Flex
    flexDir="column"
    w="100%"
    layerStyle="card"
    gap="1.2rem"
    bgColor="surface.primary"
    p="2.4rem"
  >
    <Text textStyle="caption1" color="red.danger_90">
      Fornecedores
    </Text>
    <Divider w="full" borderColor="opacity.black.0.20" />
    <Flex h="40rem" overflowY="auto" flexWrap="wrap" gap="1.2rem">
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
    </Flex>
  </Flex>
);
