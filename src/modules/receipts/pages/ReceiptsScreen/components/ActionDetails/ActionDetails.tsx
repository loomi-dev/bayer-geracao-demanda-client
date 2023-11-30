import { Flex, Text } from '@chakra-ui/react';

import { ActionDetailsItem } from './ActionDetailsItem';

type ActionDetailsProps = {
  a?: any;
};
export const ActionDetails = ({ a }: ActionDetailsProps) => {
  console.log();

  return (
    <Flex flexDir="column" w="100%" borderRadius="1.6rem" bg="white">
      <Text textStyle="h4" my="2rem" ml="3rem" color="greyscale.1000">
        Título da ação de relacionamento
      </Text>
      <Flex>
        <ActionDetailsItem
          labelProps={{
            children: 'Tipo da ação',
          }}
          valueProps={{
            children: 'Ação de relacionamento',
          }}
          containerProps={{ borderRightWidth: '1px' }}
        />
        <ActionDetailsItem
          labelProps={{
            children: 'Investimento da ação',
          }}
          valueProps={{
            children: 'R$ 66.000,00',
            textStyle: 'body4',
          }}
        />
      </Flex>
      <ActionDetailsItem
        labelProps={{
          children: 'Detalhamento',
        }}
        valueProps={{
          children:
            "Detalhamento que o RTV, ao criar a ação, inseriu. Este campo só deve aparecer se o RTV inseriu alguma informação na ação. Caso contra'rio, não aparecerá",
        }}
        containerProps={{ borderRightWidth: '1px' }}
      />
    </Flex>
  );
};
