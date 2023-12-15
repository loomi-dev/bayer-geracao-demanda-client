import { Box } from '@chakra-ui/react';

import { DynamicTable } from '@/components';

import { useSimulatorStore } from '../../stores';
import {
  TARGET_PERCENTAGE,
  calculateBiotecIncentive,
  calculateFinalGenerationDemand,
  calculateRebound,
} from '../../utils';

import {
  FinancialOpportunityTableColumns,
  FinancialOpportunityTableType,
} from './FinancialOpportunityTable.columns';

export const FinancialOpportunityTable = () => {
  const [bagsQuantity, plantability, isBayerSellingOnly] = useSimulatorStore((state) => [
    state.bagsQuantity,
    state.plantability,
    state.isBayerSellingOnly,
  ]);
  const data: FinancialOpportunityTableType[] = TARGET_PERCENTAGE.map((percentageValue) => ({
    targetValue: percentageValue,
    rebound: calculateRebound(bagsQuantity, percentageValue),
    finalGenerationDemand: calculateFinalGenerationDemand(
      bagsQuantity,
      plantability,
      percentageValue,
    ),
    biotecIncentive: calculateBiotecIncentive(bagsQuantity, isBayerSellingOnly, percentageValue),
  }));
  return (
    <Box mt="2rem">
      <DynamicTable<FinancialOpportunityTableType>
        variant="secondary"
        data={data}
        columns={FinancialOpportunityTableColumns}
      />
    </Box>
  );
};
