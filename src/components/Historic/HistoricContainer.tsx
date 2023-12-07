import { StackProps, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type HistoricContainerProps = {
  children: ReactNode;
} & StackProps;

export const HistoricContainer = ({ children, ...restProps }: HistoricContainerProps) => (
  <VStack
    align="flex-start"
    w="full"
    spacing="1.6rem"
    pb="3.6rem"
    borderBottom="1px solid"
    borderColor="opacity.black.0.08"
    ml="1.6rem"
    mb="1rem"
    {...restProps}
  >
    {children}
  </VStack>
);
