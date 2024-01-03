import { HStack } from '@chakra-ui/react';
import { useState } from 'react';

import { useGetDashboard } from '@/api';
import { ActionFilter, CustomerFilter, RegionFilter } from '@/components';

import { ActionsResumeSection, FinancialSection } from './components';

export const DashboardScreen = () => {
  const [customers, setCustomers] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [actions, setActions] = useState<string[]>([]);

  const { data, isLoading } = useGetDashboard();
  const actionsResumeSectionData = {
    plannedActionsQuantity: data?.data.plannedActionsQuantity ?? 0,
    farmKitTask: data?.data.farmKitSumInCents ?? 0,
    relationshipTask: data?.data.relationshipTaskSumInCents ?? 0,
    farmTask: data?.data.farmTaskSumInCents ?? 0,
  };
  return (
    <>
      <HStack w="100%" justify="flex-end">
        <CustomerFilter selectedValues={customers} onSelect={setCustomers} />
        <RegionFilter selectedValues={regions} onSelect={setRegions} />
        <ActionFilter selectedValues={actions} onSelect={setActions} />
      </HStack>
      <FinancialSection />
      <ActionsResumeSection data={actionsResumeSectionData} isLoading={isLoading} />
    </>
  );
};
