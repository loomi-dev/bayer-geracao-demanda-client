import { Flex, Text } from '@chakra-ui/react';

import { ActionDetailsItem } from './ActionDetailsItem';

export const ActionDetails = () => (
  <Flex flexDir="column" w="100%" borderRadius="1.6rem" bg="white">
    <Text textStyle="h4" my="2rem" ml="3rem" color="greyscale.1000">
      Título da ação de relacionamento
    </Text>
    <Flex>
      <ActionDetailsItem label="Tipo da ação" borderRightWidth="1px">
        Ação de relacionamento
      </ActionDetailsItem>

      <ActionDetailsItem
        label="Investimento da ação"
        valueProps={{ fontWeight: '700', fontSize: '2rem' }}
      >
        R$ 66.000,00
      </ActionDetailsItem>
    </Flex>

    <ActionDetailsItem label="Detalhamento" borderRightWidth="1px">
      {
        "Detalhamento que o RTV, ao criar a ação, inseriu. Este campo só deve aparecer se o RTV inseriu alguma informação na ação. Caso contra'rio, não aparecerá"
      }
    </ActionDetailsItem>
  </Flex>
);
