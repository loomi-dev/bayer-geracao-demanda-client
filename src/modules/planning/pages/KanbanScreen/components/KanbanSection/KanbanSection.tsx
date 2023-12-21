import { StackProps, Text, VStack } from '@chakra-ui/react';

import { KanbanCard } from './KanbanCard';
import { KanbanCardSkeleton } from './KanbanCardSkeleton';

type KanbanSectionProps = {
  title: string;
  plannings?: Planning[];
  titleColor?: string;
  isLoading: boolean;
} & StackProps;
export const KanbanSection = ({
  title,
  titleColor,
  plannings = [],
  isLoading,
  ...props
}: KanbanSectionProps) => (
  <VStack
    borderRight="1px solid"
    borderColor="greyscale.375"
    align="start"
    p="2.4rem"
    gap="2.4rem"
    {...props}
  >
    <Text textStyle="h5" color={titleColor}>
      {title}
    </Text>
    {isLoading
      ? Array.from({ length: 4 }).map((_, index) => <KanbanCardSkeleton key={index} />)
      : plannings.map((planning) => (
          <KanbanCard badgeColor={titleColor} planning={planning} key={planning.id} />
        ))}
  </VStack>
);
