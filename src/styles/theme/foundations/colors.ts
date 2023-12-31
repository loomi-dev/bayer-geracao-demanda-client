import { ChakraTheme, theme } from '@chakra-ui/react';

import { semanticTokens } from './semanticTokens';

const green = {
  50: '#EBF9EC',
  100: '#00793A',
  150: '#2C9F36',
  200: '#AFE9B5',
  300: '#87DD8F',
  400: '#5FD26A',
  500: '#37C745',
  600: '#2C9F37',
  700: '#217729',
  800: '#16501C',
  900: '#20020A',
};

const greyscale = {
  0: '#FFFFFF',
  25: '#C7C7C7',
  100: '#FAFAFA',
  150: '#F5F5F5',
  200: '#F1F1F1',
  225: '#F0F0F0',
  250: '#EFEFEF',
  275: '#E0E0E0',
  300: '#F7F7F7',
  330: '#ECECEC',
  350: '#DBDBDB80',
  375: '#DCDCDC',
  400: '#CCCCCC',
  425: '#D4D4D4',
  450: '#D9D9D9',
  500: '#ECECEC',
  600: '#AEAEAE',
  650: '#666666',
  700: '#7C7C7C',
  750: '#E5E7EA',
  800: '#555555',
  900: '#333333',
  950: '#626770',
  1000: '#212121',
};

const black = {
  50: 'rgba(0, 0, 0, 0.08)',
  200: '#070101',
};

const yellow = {
  warning_10: '#FBF5D6',
  warning_20: '#F4E283',
  warning_40: '#EDCF31',
  warning_60: '#BEA626',
  warning_80: '#8E7C1D',
};

const red = {
  danger_05: '#F3C3CF',
  danger_10: '#F8D8D8',
  danger_20: '#EB8989',
  danger_25: '#B33453',
  danger_30: '#F30000',
  danger_40: '#DE3B3B',
  danger_50: '#A10B30',
  danger_60: '#B22F2F',
  danger_80: '#852323',
  danger_90: '#810926',
  danger_100: '#C50022',
};

export const colors: ChakraTheme['colors'] = {
  ...theme.colors,
  ...semanticTokens.colors,
  green,
  greyscale,
  yellow,
  red,
  black,
};
