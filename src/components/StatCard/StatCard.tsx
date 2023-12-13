import { HStack, Skeleton, SkeletonProps, StackProps, Text, TextProps } from '@chakra-ui/react';

type StatCardProps = {
  value: number | string;
  valueStyles?: TextProps;
  label: string;
  labelStyles?: TextProps;
  isLoading?: boolean;
  skeletonStyles?: SkeletonProps;
} & StackProps;

export const StatCard = ({
  value,
  valueStyles,
  label,
  labelStyles,
  isLoading = false,
  skeletonStyles,
  ...restProps
}: StatCardProps) => (
  <HStack layerStyle="card" gap="1.2rem" p="2.4rem" {...restProps}>
    {isLoading ? (
      <Skeleton h="3rem" w="10rem" {...skeletonStyles} />
    ) : (
      <Text textStyle="h4" textTransform="uppercase" whiteSpace="nowrap" {...valueStyles}>
        {value}
      </Text>
    )}
    <Text textStyle="body3" color="text.footnote" maxW="7.4rem" {...labelStyles}>
      {label}
    </Text>
  </HStack>
);
