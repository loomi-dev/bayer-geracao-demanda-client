import { Badge, Flex, Text, VStack } from '@chakra-ui/react';

export const KanbanCard = () => (
  <Flex
    layerStyle="card"
    p="2.4rem"
    gap="1.6rem"
    w="30rem"
    flexDirection="column"
    position="relative"
    borderRadius="1.6rem"
  >
    <Badge
      position="absolute"
      top="0.9rem"
      right="1.1rem"
      variant="filled_primary"
      border="none"
      py="0rem"
    >
      Novidades
    </Badge>

    <VStack align="flex-start" gap="initial">
      <Text textStyle="caption5" color="greyscale.700">
        Última atualização
      </Text>
      <Text textStyle="action3" lineHeight="2rem">
        Hoje
      </Text>
    </VStack>
    <VStack align="flex-start" gap="initial">
      <Text textStyle="caption5" color="greyscale.700">
        Cliente
      </Text>
      <VStack gap="initial" align="flex-start">
        <Text textStyle="body2">Nome do Cliente</Text>
        <Text textStyle="footnote" lineHeight="1.8rem">
          67.890.123/0006-46
        </Text>
      </VStack>
    </VStack>
    <Text textStyle="h4" color="text.brand" lineHeight="2.4rem">
      R$ 20,000,00
    </Text>

    <Flex
      py="0.8rem"
      w="100%"
      align="center"
      justify="center"
      borderY="1px solid"
      borderColor="opacity.black.0.06"
    >
      <Text textStyle="footnote-bold" color="green.100" lineHeight="2rem">
        2 Ações
      </Text>
    </Flex>
    <VStack align="flex-start" gap="0.4rem">
      <Text w="fit-content" textStyle="caption5" color="greyscale.700">
        status
      </Text>
      <Badge w="full" variant="filled_secundary" lineHeight="1.8rem">
        Aguardando aprovação
      </Badge>
    </VStack>
  </Flex>
);
