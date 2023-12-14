import { Box } from '@chakra-ui/react';

import { DynamicTable } from '@/components';

import { useSimulatorStore } from '../../stores';
import { TARGET_PERCENTAGE } from '../../utils';

import { MinimumNumbersTableColumns, MinimunNumbersTableType } from './MinimumNumbersTable.columns';

export const MinimumNumbersTable = () => {
  const [bagsQuantity] = useSimulatorStore((state) => [
    state.bagsQuantity,
    state.i2xBagsQuantity,
    state.xtdBagsQuantity,
    state.plantability,
    state.isBayerSellingOnly,
  ]);

  const data: MinimunNumbersTableType[] = TARGET_PERCENTAGE.map((percentageValue) => ({
    'X12I+XTD': bagsQuantity * percentageValue ?? 0,
    IPRO: bagsQuantity - bagsQuantity * percentageValue ?? 0,
    targetValue: percentageValue,
  }));
  return (
    <Box mt="2rem">
      <DynamicTable<MinimunNumbersTableType>
        variant="secondary"
        data={data}
        columns={MinimumNumbersTableColumns}
      />
    </Box>
  );
};
