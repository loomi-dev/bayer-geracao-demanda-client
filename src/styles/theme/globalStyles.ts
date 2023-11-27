import { ChakraTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const styles: ChakraTheme['styles'] = {
  global: (props) => ({
    '*': {
      boxSizing: 'border-box',
      padding: 0,
      margin: 0,
    },
    html: {
      bg: mode('whiteAlpha.600', 'gray.800')(props),
      fontSize: '62.5%',
      h: '100%',
    },
    body: {
      bg: mode('whiteAlpha.600', 'gray.800')(props),
      h: '100%',
      fontSize: '1.6rem',
      color: 'text.primary',
      WebkitTapHighlightColor: 'transparent',
    },
    '#__next': {
      h: '100%',
      w: '100%',
    },
    '#chakra-toast-portal > *': {
      pt: 'safe-top',
      pl: 'safe-left',
      pr: 'safe-right',
      pb: 'safe-bottom',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
  }),
};
