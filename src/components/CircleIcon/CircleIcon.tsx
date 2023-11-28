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
    bgColor="surface.brand"
    boxSize="5.1rem"
    minW={props.boxSize}
    {...props}
  >
    {children}
  </Flex>
);
