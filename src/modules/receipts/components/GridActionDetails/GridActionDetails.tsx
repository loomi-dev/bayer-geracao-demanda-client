import { Flex, Text } from '@chakra-ui/react';

import { PlanningActionValues } from '@/types';
import { formatPrice } from '@/utils';

import { GridActionDetailItem } from './GridActionDetailItem';

type GridActionDetailsProps = ReceiptAction;

export const GridActionDetails = ({
  type = 'farm_kit',
  amountInCents,
  detail,
}: GridActionDetailsProps) => (
  <Flex flexDir="column" w="100%" borderRadius="1.6rem" bg="white">
    <Text textStyle="h4" my="2rem" ml="3rem" color="greyscale.1000">
      Título da ação de relacionamento
    </Text>
    <Flex>
      <GridActionDetailItem label="Tipo da ação" borderRightWidth="1px">
        {PlanningActionValues[type]}
      </GridActionDetailItem>

      <GridActionDetailItem
        label="Investimento da ação"
        valueProps={{ fontWeight: '700', fontSize: '2rem' }}
      >
        {`R$ ${formatPrice(amountInCents)}`}
      </GridActionDetailItem>
    </Flex>

    {detail && (
      <GridActionDetailItem label="Detalhamento" borderRightWidth="1px">
        {detail}
      </GridActionDetailItem>
    )}
  </Flex>
);
