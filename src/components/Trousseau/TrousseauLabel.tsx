import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type TrousseauLabelProps = {
  children: ReactNode;
} & TextProps;

export const TrousseauLabel = ({ children, ...restProps }: TrousseauLabelProps) => (
  <Text textStyle="caption3" {...restProps}>
    {children}
  </Text>
);
