import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type HistoricTitleProps = {
  children: ReactNode;
} & TextProps;

export const HistoricTitle = ({ children, ...restProps }: HistoricTitleProps) => (
  <Text textStyle="body1" lineHeight="2.4rem" {...restProps}>
    {children}
  </Text>
);
