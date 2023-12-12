import { HStack, Skeleton } from '@chakra-ui/react';

export const CreatePlanningStatusSectionSkeleton = () => (
  <HStack
    w="full"
    h="5.6rem"
    px="2.4rem"
    bg="linear-gradient(95deg, rgba(244, 242, 242, 0.50) 80.42%, rgba(120, 120, 120, 0.00) 149.39%)"
    border="1px solid"
    borderColor="surface.primary"
    borderRadius="full"
    spacing="1.6rem"
    boxShadow="primary"
    justify="space-between"
  >
    <Skeleton w="30rem" h="2rem" />

    <HStack spacing="1.6rem">
      <Skeleton w="12rem" h="3.5rem" borderRadius="full" />
      <Skeleton w="16rem" h="3.5rem" borderRadius="full" />
    </HStack>
  </HStack>
);
