import { HStack, StackProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ProfileInformationContainerProps = {
  children: ReactNode;
} & StackProps;

export const ProfileInformationContainer = ({
  children,
  ...props
}: ProfileInformationContainerProps) => (
  <HStack
    py="1.6rem"
    borderBottom="1px solid"
    borderBottomColor="greyscale.600"
    justify="space-between"
    w="100%"
    h="8.1rem"
    {...props}
  >
    {children}
  </HStack>
);
