import { Flex, HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { CircleIcon } from '../CircleIcon';
import { UserProfile } from '../UserProfile';

type HeaderProps = {
  label: string;
  icon: ReactNode;
};
export const Header = ({ label, icon }: HeaderProps) => (
  <Flex justify="space-between" width="100%">
    <HStack gap="1.6rem">
      <CircleIcon boxSize={{ lg: '4.5rem', xl: '5.1rem' }}>{icon}</CircleIcon>
      <Text textStyle={{ lg: 'h4', xl: 'h3' }} fontWeight={{ lg: 'normal', xl: 'bold' }}>
        {label}
      </Text>
    </HStack>
    <UserProfile />
  </Flex>
);
