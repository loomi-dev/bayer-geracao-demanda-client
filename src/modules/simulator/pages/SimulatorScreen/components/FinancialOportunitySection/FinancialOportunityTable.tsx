import { Box } from '@chakra-ui/react';

import { DynamicTable } from '@/components';

import { FinancialOportunityTableColumns } from './FinancialOportunityTable.columns';

export const FinancialOportunityTable = () => (
  <Box mt="2rem">
    <DynamicTable variant="secondary" data={[]} columns={FinancialOportunityTableColumns} />
  </Box>
);
