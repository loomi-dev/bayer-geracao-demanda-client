import { Flex, Text } from '@chakra-ui/react';

import { ActionResponse } from '@/api';
import { toBRL } from '@/utils';

import { ActionDetailsItem } from './ActionDetailsItem';
import { typesInPortuguese } from './typesInPortuguese';

type ActionDetailsProps = {
  selectedAction: ActionResponse;
};

export const ActionDetails = ({ selectedAction }: ActionDetailsProps) => {
  const shareInvestment = toBRL(selectedAction.amountInCents);

  const typeInPortuguese = typesInPortuguese[selectedAction.type];

  return (
    <Flex flexDir="column" w="100%" borderRadius="1.6rem" bg="white">
      <Text textStyle="h4" my="2rem" ml="3rem" color="greyscale.1000">
        Título da ação de relacionamento
      </Text>
      <Flex>
        <ActionDetailsItem label="Tipo da ação" borderRightWidth="1px">
          {typeInPortuguese}
        </ActionDetailsItem>

        <ActionDetailsItem
          label="Investimento da ação"
          valueProps={{ fontWeight: '700', fontSize: '2rem' }}
        >
          {shareInvestment}
        </ActionDetailsItem>
      </Flex>

      <ActionDetailsItem label="Detalhamento" borderRightWidth="1px">
        {selectedAction.detail}
      </ActionDetailsItem>
    </Flex>
  );
};
