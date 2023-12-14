import { Skeleton } from '@chakra-ui/react';

export const TrousseauCatalogSkeleton = () =>
  Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} w="full" h="4.5rem" />);
