import { ChakraTheme } from '@chakra-ui/react';

export const styles: ChakraTheme['styles'] = {
  global: () => ({
    '*': {
      boxSizing: 'border-box',
      padding: 0,
      margin: 0,
    },
    html: {
      bg: '#EFEFEF',
      bgGradient: 'linear(to-r, #D9D9D9 11.1%, rgba(217, 217, 217, 0.00) 46.44%)',
      fontSize: '62.5%',
      minH: '100%',
    },
    body: {
      h: '100%',
      bg: 'inherit',
      fontSize: '1.6rem',
      WebkitTapHighlightColor: 'transparent',
    },
    '#__next': {
      minH: '100%',
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
