import { Skeleton, SkeletonProps } from '@chakra-ui/react';

export type CardSkeletonProps = SkeletonProps;

export const CardSkeleton = ({ ...props }: CardSkeletonProps) => (
  <Skeleton startColor="surface.disabled" {...props} />
);
