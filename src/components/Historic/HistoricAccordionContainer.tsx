import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type HistoricAccordionContainerProps = {
  children: ReactNode;
} & BoxProps;

export const HistoricAccordionContainer = ({
  children,
  ...restProps
}: HistoricAccordionContainerProps) => (
  <Box w="full" borderRadius="1.6rem" boxShadow="datepicker" overflow="hidden" {...restProps}>
    {children}
  </Box>
);
