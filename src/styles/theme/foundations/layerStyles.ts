import { ChakraTheme } from '@chakra-ui/react';

import { space } from './space';

export const layerStyles: ChakraTheme['layerStyles'] = {
  topBar: {
    height: `calc(4rem + ${space.m})`,
  },
};
