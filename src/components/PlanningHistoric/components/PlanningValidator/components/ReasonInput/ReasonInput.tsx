import { Flex, Text } from '@chakra-ui/react';

import { TextInput } from '@/components/TextInput';

export const ReasonInput = () => (
  <Flex
    w="100%"
    gap="0.8rem"
    flexDir="column"
    bgColor="surface.primary"
    p="2.4rem"
    border="1px solid"
    borderRadius="1.6rem"
    borderColor="greyscale.550"
  >
    <Text textStyle="capiton3" color="greyscale.700">
      Insira uma mensagem para explicar o motivo das recusas
    </Text>
    <TextInput w="80%" as="textarea" border="none" p="initial" />
  </Flex>
);
