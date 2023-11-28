import { ChakraTheme } from '@chakra-ui/react';

export const styles: ChakraTheme['styles'] = {
  global: () => ({
    '*': {
      boxSizing: 'border-box',
      padding: 0,
      margin: 0,
    },
    html: {
      fontSize: '62.5%',
      h: '100%',
    },
    body: {
      h: '100%',
      bg: 'greyscale.250',
      fontSize: '1.6rem',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'antialiased',
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
