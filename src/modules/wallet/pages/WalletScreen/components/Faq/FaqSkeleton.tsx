import { CardSkeleton } from '@/components';

export const FaqSkeleton = () =>
  Array.from({ length: 4 }).map((_, index) => <CardSkeleton key={index} w="100%" h="6rem" />);
