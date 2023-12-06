import { Box, HStack, Text } from '@chakra-ui/react';

import SvgSliders from '@/components/icons/Sliders';

export const FilterButton = () => (
  <HStack layerStyle="card" px="2.4rem" h="6.8rem" as="button" spacing="1.2rem">
    <Box mb="0.2rem">
      <SvgSliders />
    </Box>
    <Text textStyle="body2" fontWeight="700" lineHeight="1.8rem" color="black.1000">
      FILTRAR
    </Text>
  </HStack>
);
