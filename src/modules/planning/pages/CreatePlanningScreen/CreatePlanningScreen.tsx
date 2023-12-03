import { Text, VStack } from '@chakra-ui/react';

import { BalanceSection } from '../../components';

import { PlanningActionsStatistics, PlanningActionsTable } from './components';

export const CreatePlanningScreen = () => (
  <>
    <BalanceSection />

    <VStack w="full" align="flex-start" gap="1.6rem">
      <Text textStyle="h4">Ações</Text>

      <PlanningActionsStatistics />
      <PlanningActionsTable />
    </VStack>
  </>
);
