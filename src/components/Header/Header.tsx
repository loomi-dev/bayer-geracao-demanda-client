import { Flex, HStack, SkeletonText, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { CircleIcon } from '../CircleIcon';
import { UserProfile } from '../UserProfile';

type HeaderProps = {
  label: string;
  subLabel?: string;
  icon: ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};
export const Header = ({ label, subLabel, icon, onClick, isLoading }: HeaderProps) => (
  <Flex justify="space-between" width="100%">
    <HStack gap="1.6rem">
      <CircleIcon
        onClick={onClick}
        _hover={onClick && { opacity: '0.7', cursor: 'pointer' }}
        boxSize={{ lg: '4.5rem', xl: '5.1rem' }}
      >
        {icon}
      </CircleIcon>
      {isLoading ? (
        <SkeletonText noOfLines={2} skeletonHeight="4rem" w="25rem" />
      ) : (
        <Flex flexDir="column" align="flex-start">
          <Text textStyle={{ lg: 'h4', xl: 'h3' }} fontWeight={{ lg: 'normal' }}>
            {label}
          </Text>
          <Text textStyle="body1">{subLabel}</Text>
        </Flex>
      )}
    </HStack>
    <UserProfile />
  </Flex>
);
