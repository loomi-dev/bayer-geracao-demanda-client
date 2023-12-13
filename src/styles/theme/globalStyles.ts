import { ChakraTheme } from '@chakra-ui/react';

import { reactDatePickerStyles, nProgressStyles } from './externals';

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
    '::-webkit-scrollbar': {
      width: '0.8rem',
      height: '0.8rem',
      marginLeft: '3rem',
    },
    '::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 10px 10px #E2E8F0',
      border: 'solid 1px transparent',
      borderRadius: '2.4rem',
    },
    '::-webkit-scrollbar-thumb': {
      boxShadow: 'inset 0 0 10px 10px red.danger_40',
      background: 'surface.brand',
      borderRadius: '2.4rem',
    },
    scrollbarColor: 'red.danger_40',
    ...reactDatePickerStyles,
    ...nProgressStyles,
  }),
};
