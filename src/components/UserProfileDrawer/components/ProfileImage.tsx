import { StackProps, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Avatar } from '@/components';

type ProfileImageProps = {
  children?: ReactNode;
} & StackProps;
export const ProfileImage = ({ children, ...props }: ProfileImageProps) => (
  <VStack
    borderBottom="1px solid"
    borderBottomColor="greyscale.600"
    gap="1.2rem"
    align="center"
    w="100%"
    pb="1.2rem"
    {...props}
  >
    <Avatar imageFallbackSize={70} bg="white" p="3rem" />
    {children}
  </VStack>
);
