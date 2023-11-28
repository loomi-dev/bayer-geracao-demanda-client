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
      <CircleIcon>{icon}</CircleIcon>
      <Text textStyle="h3">{label}</Text>
    </HStack>
    <UserProfile />
  </Flex>
);
