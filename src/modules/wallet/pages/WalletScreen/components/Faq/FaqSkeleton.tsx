import { Skeleton } from '@chakra-ui/react';

export const FaqSkeleton = () =>
  Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} w="100%" h="6rem" />);
