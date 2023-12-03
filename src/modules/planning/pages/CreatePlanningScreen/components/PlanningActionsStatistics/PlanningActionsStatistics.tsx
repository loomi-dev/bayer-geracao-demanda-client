import { Flex } from '@chakra-ui/react';
import React from 'react';

import { StatCard } from '@/modules/planning/components';

export const PlanningActionsStatistics = () => (
  <Flex w="full" gap="1.6rem">
    <StatCard
      value="$20M"
      label="Ações de enxoval"
      flex="1"
      justify="space-between"
      labelStyles={{ maxW: '12rem' }}
    />
    <StatCard
      value="$20M"
      label="Ações de relacionamento"
      flex="1"
      justify="space-between"
      labelStyles={{ maxW: '8rem' }}
    />
    <StatCard
      value="$20M"
      label="Ações de campo"
      flex="1"
      justify="space-between"
      labelStyles={{ maxW: '12rem' }}
    />
  </Flex>
);
