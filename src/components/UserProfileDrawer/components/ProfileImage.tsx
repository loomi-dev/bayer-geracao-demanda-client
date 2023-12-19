import { StackProps, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Avatar } from '@/components';

type ProfileImageProps = {
  children?: ReactNode;
  src?: string;
} & StackProps;
export const ProfileImage = ({ src = '', children, ...props }: ProfileImageProps) => (
  <VStack
    borderBottom="1px solid"
    borderBottomColor="greyscale.600"
    gap="1.2rem"
    align="center"
    w="100%"
    pb="1.2rem"
    {...props}
  >
    <Avatar imageFallbackSize={80} boxSize="15rem" bg="white" />
    {children}
  </VStack>
);
