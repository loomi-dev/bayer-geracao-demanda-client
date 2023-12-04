import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { useBalanceContext } from './BalanceContainer';

type BalanceValueProps = {
  children?: ReactNode;
} & TextProps;

export const BalanceValue = ({ children, ...restProps }: BalanceValueProps) => {
  const context = useBalanceContext();

  return (
    <Text fontSize="4rem" fontWeight="bold" color="surface.invert" {...restProps}>
      {children ? (
        children
      ) : (
        <>
          <Text as="span" color="text.brand">
            R$
          </Text>{' '}
          <Text as="span">{context?.balanceValue}</Text>
        </>
      )}
    </Text>
  );
};
