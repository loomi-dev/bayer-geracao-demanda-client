import { ChakraTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const styles: ChakraTheme['styles'] = {
  global: (props) => ({
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      bg: mode('whiteAlpha.600', 'gray.800')(props),
      minH: '100vh',
    },
    body: {
      bg: mode('whiteAlpha.600', 'gray.800')(props),
      h: '100%',
      WebkitTapHighlightColor: 'transparent',
      padding: 0,
      margin: 0,
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
