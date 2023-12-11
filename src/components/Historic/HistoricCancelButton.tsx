import { Button, ButtonProps, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type HistoricCancelButtonProps = {
  children?: ReactNode;
} & ButtonProps;

export const HistoricCancelButton = ({ children, ...restProps }: HistoricCancelButtonProps) => (
  <Button variant="fifth" size="sm" px="1.6rem" {...restProps}>
    {children ? (
      children
    ) : (
      <Text fontSize="1rem" fontWeight="bold" color="text.footnote">
        Voltar para o planejamento
      </Text>
    )}
  </Button>
);
