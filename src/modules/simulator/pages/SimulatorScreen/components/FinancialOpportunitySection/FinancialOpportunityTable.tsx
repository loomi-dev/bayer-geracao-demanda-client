import { Box } from '@chakra-ui/react';

import { DynamicTable } from '@/components';

import { FinancialOpportunityTableColumns } from './FinancialOpportunityTable.columns';

export const FinancialOpportunityTable = () => (
  <Box mt="2rem">
    <DynamicTable variant="secondary" data={[]} columns={FinancialOpportunityTableColumns} />
  </Box>
);
