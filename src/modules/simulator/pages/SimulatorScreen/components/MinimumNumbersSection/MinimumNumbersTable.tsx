import { Box } from '@chakra-ui/react';

import { DynamicTable } from '@/components';

import { MinimumNumbersTableColumns } from './MinimumNumbersTable.columns';

export const MinimumNumbersTable = () => (
  <Box mt="2rem">
    <DynamicTable variant="secondary" data={[]} columns={MinimumNumbersTableColumns} />
  </Box>
);
