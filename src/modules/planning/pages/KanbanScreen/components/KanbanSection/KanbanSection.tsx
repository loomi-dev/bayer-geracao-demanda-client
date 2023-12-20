import { StackProps, Text, VStack } from '@chakra-ui/react';

import { KanbanCard } from '../KanbanCard';

type KanbanSectionProps = {
  label: string;
} & StackProps;
export const KanbanSection = ({ label, ...props }: KanbanSectionProps) => (
  <VStack
    borderRight="1px solid"
    borderColor="greyscale.375"
    align="start"
    p="2.4rem"
    gap="2.4rem"
    {...props}
  >
    <Text textStyle="h5">{label}</Text>
    <KanbanCard />
    <KanbanCard />
  </VStack>
);
