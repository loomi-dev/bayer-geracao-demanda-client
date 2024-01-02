import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { useTrousseauStore } from '../../stores';

type SuppliersSectionZeroSateProps = {
  hasSuppliers: boolean;
  children: ReactNode;
};
export const SuppliersSectionZeroState = ({
  hasSuppliers,
  children,
}: SuppliersSectionZeroSateProps) => {
  const [selectedTrousseau] = useTrousseauStore((state) => [state.selectedTrousseau]);
  if (!selectedTrousseau)
    return (
      <Flex flex={1} align="center" justify="center">
        <Text textStyle="h4" color="text.brand">
          Selecione um tipo de enxoval para ver os fornecedores
        </Text>
      </Flex>
    );
  if (!hasSuppliers)
    return (
      <Flex flex={1} align="center" justify="center">
        <Text textStyle="h4" color="text.brand">
          Nenhum fornecedor encontrado
        </Text>
      </Flex>
    );

  return children;
};
