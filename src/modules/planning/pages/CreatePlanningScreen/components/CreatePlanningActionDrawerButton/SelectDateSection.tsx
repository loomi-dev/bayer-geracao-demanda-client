import { Box, HStack, Text } from '@chakra-ui/react';

import { CalendarIcon, CircleIcon } from '@/components';

export const SelectDateSection = () => (
  <HStack
    borderTop="1px solid"
    borderBottom="1px solid"
    borderColor="opacity.black.0.08"
    py="2rem"
    spacing="1.6rem"
  >
    <CircleIcon boxSize="5.2rem" bg="greyscale.225">
      <CalendarIcon />
    </CircleIcon>

    <Box>
      <Text textStyle="caption3" lineHeight="2rem">
        Data planejada no cliente
      </Text>

      <HStack spacing="1.2rem">
        <Text textStyle="footnote" lineHeight="1.8rem">
          Sem data planejada
        </Text>

        <Box boxSize="0.5rem" borderRadius="full" bg="greyscale.450" />

        <Text textStyle="action3" color="text.brand" lineHeight="1.8rem" cursor="pointer">
          Selecione uma data
        </Text>
      </HStack>
    </Box>
  </HStack>
);
