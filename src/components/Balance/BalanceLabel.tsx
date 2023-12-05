import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type BalanceLabelProps = {
  children?: ReactNode;
} & TextProps;

export const BalanceLabel = ({ children = 'Seu saldo', ...restProps }: BalanceLabelProps) => (
  <Text textStyle="action3" color="text.primary" textTransform="uppercase" {...restProps}>
    {children}
  </Text>
);
