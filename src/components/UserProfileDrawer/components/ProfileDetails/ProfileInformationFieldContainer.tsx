import { HStack, StackProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ProfileInformationFieldContainerProps = {
  children: ReactNode;
} & StackProps;

export const ProfileInformationFieldContainer = ({
  children,
  ...props
}: ProfileInformationFieldContainerProps) => (
  <HStack
    borderBottom="1px solid"
    borderBottomColor="greyscale.600"
    justify="space-between"
    w="100%"
    py="1rem"
    align="flex-start"
    {...props}
  >
    {children}
  </HStack>
);
