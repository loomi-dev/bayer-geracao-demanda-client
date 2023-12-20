import { StackProps, Text, VStack } from '@chakra-ui/react';

import { KanbanCard } from './KanbanCard';

type KanbanSectionProps = {
  title: string;
  plannings?: Planning[];
  titleColor?: string;
} & StackProps;
export const KanbanSection = ({
  title,
  titleColor,
  plannings = [],
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
    {plannings.map((planning) => (
      <KanbanCard planning={planning} key={planning.id} />
    ))}
  </VStack>
);
