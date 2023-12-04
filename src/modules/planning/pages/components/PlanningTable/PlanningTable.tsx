import { Box, Button, HStack, Text } from '@chakra-ui/react';

import { AddInsideCircleIcon, CircleIcon, DynamicTable } from '@/components';

import { planningColumns } from './planningTable.columns';

const mockData = [
  {
    id: 1,
    safra: '2023/2024',
    data: '23 Outubro 2023',
    status: 'em construção',
    orcamento: 'R$ 20.000',
  },
  {
    id: 2,
    safra: '2023/2024',
    data: '23 Outubro 2023',
    status: 'ajustes',
    orcamento: 'R$ 20.000',
  },
  {
    id: 3,
    safra: '2022/2023',
    data: '12 Janeiro 2022',
    status: 'aprovado',
    orcamento: 'R$ 20.000',
  },
];

export const PlanningTable = () => (
  <Box w="full">
    <Text textStyle="h4" mb="2rem">
      Planejamentos
    </Text>

    <DynamicTable data={mockData} columns={planningColumns}>
      <HStack
        justify="space-between"
        px="2.4rem"
        borderTop="1px solid"
        borderColor="rgba(217, 217, 217, 0.40)"
        mb="2rem"
        pt="2rem"
      >
        <Text textStyle="action3" textTransform="uppercase" lineHeight="0">
          Total{' '}
          <Text as="span" textStyle="action1" color="surface.brand" ml="2.3rem">
            R$ 20.000
          </Text>
        </Text>

        <Button
          variant="third"
          w="21.5rem"
          pl="2.4rem"
          pr="0"
          transition="all 0.2s linear"
          rightIcon={
            <CircleIcon>
              <AddInsideCircleIcon />
            </CircleIcon>
          }
          _hover={{
            pl: '1rem',
          }}
        >
          <Text as="span" w="full" align="center">
            Novo planejamento
          </Text>
        </Button>
      </HStack>
    </DynamicTable>
  </Box>
);
