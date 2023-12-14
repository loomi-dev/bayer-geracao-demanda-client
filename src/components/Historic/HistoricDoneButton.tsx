import { Button, ButtonProps, Text } from '@chakra-ui/react';
import { ReactNode, forwardRef } from 'react';

type HistoricDoneButtonProps = {
  children?: ReactNode;
} & ButtonProps;

export const HistoricDoneButton = forwardRef<HTMLButtonElement, HistoricDoneButtonProps>(
  ({ children, ...restProps }, ref) => (
    <Button size="sm" px="1.6rem" {...restProps} ref={ref}>
      {children ? (
        children
      ) : (
        <Text fontSize="1rem" fontWeight="bold" color="text.invert">
          Enviar para aprovação
        </Text>
      )}
    </Button>
  ),
);

HistoricDoneButton.displayName = 'HistoricDoneButton';
