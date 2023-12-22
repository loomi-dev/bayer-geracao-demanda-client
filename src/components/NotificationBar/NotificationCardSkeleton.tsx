import { Flex, HStack, Skeleton } from '@chakra-ui/react';

export const NotificationCardSkeleton = () => (
  <Flex
    w="full"
    flexDir="column"
    layerStyle="card"
    gap="0.9rem"
    h="auto"
    px="2.4rem"
    py="2rem"
    borderRadius="3rem"
  >
    <Skeleton w="15rem" h="2rem" />

    <HStack w="100%" justify="space-between" align="center">
      <Skeleton w="10rem" h="1.5rem" />
      <Skeleton w="5rem" h="1.5rem" />
    </HStack>

    <Skeleton w="12rem" h="1.5rem" />
  </Flex>
);
