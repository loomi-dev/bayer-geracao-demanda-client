import { Divider, Flex, Text } from '@chakra-ui/react';

import { SupplierCard } from './SupplierCard';
import { SuppliersSectionSkeleton } from './SuppliersSectionSkeleton';

type SuppliersSectionProps = {
  suppliers?: Trousseau['suppliers'];
  isLoading: boolean;
};
export const SuppliersSection = ({ suppliers = [], isLoading }: SuppliersSectionProps) => (
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
      {isLoading ? (
        <SuppliersSectionSkeleton />
      ) : (
        suppliers.map((supplier) => (
          <SupplierCard
            key={supplier.id}
            name={supplier.name}
            region={supplier.region}
            phone={supplier.phoneNumber}
            email={supplier.email}
          />
        ))
      )}
    </Flex>
  </Flex>
);
