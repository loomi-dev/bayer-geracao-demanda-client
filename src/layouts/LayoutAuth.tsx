import { HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { AuthBanner } from '@/components';

type LayoutAuthProps = {
  children: ReactNode;
};

export const LayoutAuth = ({ children }: LayoutAuthProps) => (
  <HStack
    minH="100%"
    bg="linear-gradient(54deg, rgba(45, 100, 27, 0.40) 49.83%, rgba(18, 15, 2, 0.40) 100%)"
    p="2.4rem"
    pl={{ base: '4rem', '3xl': '9.5rem' }}
    align="center"
    justify="center"
    gap="2rem"
    position="relative"
  >
    <AuthBanner />

    {children}
  </HStack>
);
