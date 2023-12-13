import { Button, ButtonProps, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type HistoricDoneButtonProps = {
  children?: ReactNode;
} & ButtonProps;

export const HistoricDoneButton = ({ children, ...restProps }: HistoricDoneButtonProps) => (
  <Button size="sm" px="1.6rem" {...restProps}>
    {children ? (
      children
    ) : (
      <Text fontSize="1rem" fontWeight="bold" color="text.invert">
        Enviar para aprovação
      </Text>
    )}
  </Button>
);
