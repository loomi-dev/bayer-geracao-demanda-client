import { Flex, FlexProps, HStack, Text } from '@chakra-ui/react';

type NotificationCardProps = FlexProps;

export const NotificationCard = ({ ...restProps }: NotificationCardProps) => (
  <Flex
    w="full"
    flexDir="column"
    layerStyle="card"
    gap="0.9rem"
    h="auto"
    px="2.4rem"
    py="2rem"
    borderRadius="3rem"
    {...restProps}
  >
    <Text textTransform="uppercase" textStyle={{ lg: 'action4', xl: 'action3', '3xl': 'action2' }}>
      Planejamento 2023/24
    </Text>
    <HStack w="100%" justify="space-between" align="center">
      <Text textStyle="footnote" fontSize={{ lg: '1rem', xl: '1.2rem' }}>
        Valor já planejado
      </Text>
      <Text textStyle="footnote-bold" fontSize={{ lg: '1rem', xl: '1.2rem' }}>
        R$ 40.000
      </Text>
    </HStack>
    <Text textStyle="footnote-bold" fontSize={{ lg: '1rem', xl: '1.2rem' }}>
      Falta planejar R$ 20.000 em ações
    </Text>
  </Flex>
);
