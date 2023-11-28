import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type CircleIconProps = {
  children: ReactNode;
} & FlexProps;

export const CircleIcon = ({ children, ...props }: CircleIconProps) => (
  <Flex
    justify="center"
    align="center"
    rounded="full"
    bgColor="green.600"
    boxSize="5.1rem"
    {...props}
  >
    {children}
  </Flex>
);
