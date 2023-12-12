import { HStack, StackProps, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { formatPrice } from '@/utils';

type HistoricFooterProps = {
  totalValue: string | number;
  children?: ReactNode;
} & StackProps;

export const HistoricFooter = ({ totalValue, children, ...restProps }: HistoricFooterProps) => (
  <HStack w="full" align="center" justify="space-between" p="1.6rem 2.4rem" {...restProps}>
    <HStack spacing="2.4rem">
      <Text textStyle="action3" textTransform="uppercase" lineHeight="2rem">
        Total
      </Text>

      <Text textStyle="action1" color="surface.brand">
        R$ {formatPrice(totalValue)}
      </Text>
    </HStack>

    {children}
  </HStack>
);
