import { SkeletonText, Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { useBalanceContext } from './BalanceContainer';

type BalanceExpirationDateProps = {
  children?: ReactNode;
} & TextProps;

export const BalanceExpirationDate = ({ children, ...restProps }: BalanceExpirationDateProps) => {
  const context = useBalanceContext();

  return (
    <>
      {context?.isLoading ? (
        <SkeletonText w="18rem" noOfLines={2} skeletonHeight="1.2rem" />
      ) : (
        <Text textStyle="body3" color="text.footnote" {...restProps}>
          {children ? (
            children
          ) : (
            <>
              em ações para solicitar os recursos <br /> Válido{' '}
              <Text as="strong">até {context?.expirationDate}</Text>
            </>
          )}
        </Text>
      )}
    </>
  );
};
