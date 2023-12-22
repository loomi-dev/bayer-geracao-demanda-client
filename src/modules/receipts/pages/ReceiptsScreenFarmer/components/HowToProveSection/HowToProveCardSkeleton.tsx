import { HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react';

export const HowToProveCardSkeleton = () => (
  <HStack
    layerStyle="card"
    p="1rem"
    h="6.1rem"
    as="button"
    minW="19rem"
    spacing="0.9rem"
    borderRadius="3rem"
  >
    <SkeletonCircle
      boxSize={{ lg: '3.1rem', xl: '4.1rem' }}
      minW={{ lg: '3.1rem', xl: '4.1rem' }}
    />
    <Skeleton w="10.5rem" h="2.4rem" />
  </HStack>
);
