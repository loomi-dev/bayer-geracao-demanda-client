import { ChakraTheme, theme } from '@chakra-ui/react';

import { semanticTokens } from './semanticTokens';

const green = {
  400: '#36C744',
  600: '#2C9F37',
};

const grey = {
  0: '#FFFFFF',
  100: '#FAFAFA',
  300: '#F7F7F7',
  600: '#AEAEAE',
  800: '#484848',
  1000: '#212121',
};

const orange = {
  100: '#F39500',
};

const red = {
  100: '#C50022',
};

export const colors: ChakraTheme['colors'] = {
  ...theme.colors,
  ...semanticTokens.colors,
  green,
  grey,
  orange,
  red,
};
