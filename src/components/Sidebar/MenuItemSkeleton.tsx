import { HStack, Skeleton } from '@chakra-ui/react';

export const MenuItemSkeleton = () => (
  <HStack h="5rem" spacing="2rem">
    <Skeleton h="2.2rem" w="3rem" />

    <Skeleton w="70%" h="2.2rem" />
  </HStack>
);
