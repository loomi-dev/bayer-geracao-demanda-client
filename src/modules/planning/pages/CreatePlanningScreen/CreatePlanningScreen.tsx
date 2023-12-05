import { Text, VStack } from '@chakra-ui/react';

import {
  CreatePlanningBalance,
  PlanningActionsStatistics,
  PlanningActionsTable,
} from './components';

export const CreatePlanningScreen = () => (
  <>
    <CreatePlanningBalance />

    <VStack w="full" align="flex-start" gap="1.6rem">
      <Text textStyle="h4">Ações</Text>

      <PlanningActionsStatistics />
      <PlanningActionsTable />
    </VStack>
  </>
);
