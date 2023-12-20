import { Skeleton } from '@chakra-ui/react';

export const SuppliersSectionSkeleton = () =>
  Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} w="33rem" h="18rem" />);
