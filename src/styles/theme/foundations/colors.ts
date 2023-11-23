import { ChakraTheme, theme } from '@chakra-ui/react';

const primary = {
  50: '#EFEAF9',
  100: '#DED5F3',
  200: '#BDABE7',
  300: '#9D81DC',
  400: '#7C57D0',
  500: '#5B2DC4',
  600: '#49249D',
  700: '#371B76',
  800: '#24124E',
  900: '#120927',
};

const secondary = {
  50: '#F9EAF5',
  100: '#F3D5EB',
  200: '#E7ABD6',
  300: '#DC81C2',
  400: '#D057AD',
  500: '#C42D99',
  600: '#9D247A',
  700: '#761B5C',
  800: '#4E123D',
  900: '#27091F',
};

const green = {
  50: '#EAF9EE',
  100: '#D5F3DC',
  200: '#ABE7B9',
  300: '#81DC96',
  400: '#57D073',
  500: '#2DC450',
  600: '#2E7B35',
  700: '#1B7630',
  800: '#124E20',
  900: '#092710',
};

const red = {
  50: '#F9EAEC',
  100: '#F3D5D9',
  200: '#E7ABB2',
  300: '#DC818C',
  400: '#D05765',
  500: '#C42D3F',
  600: '#9D2432',
  700: '#761B26',
  800: '#4E1219',
  900: '#27090D',
};

const yellow = {
  50: '#F9F5EA',
  100: '#F3EBD5',
  200: '#E7D7AB',
  300: '#DCC481',
  400: '#D0B057',
  500: '#C49C2D',
  600: '#887A30',
  700: '#765E1B',
  800: '#4E3E12',
  900: '#271F09',
};

const gray = {
  0: '#FFFFFF',
  50: '#ECECEC',
  100: '#D9D9D9',
  200: '#B3B3B3',
  300: '#8C8C8C',
  400: '#666666',
  500: '#404040',
  600: '#333333',
  700: '#262626',
  800: '#1A1A1A',
  900: '#0D0D0D',
};

export const colors: ChakraTheme['colors'] = {
  ...theme.colors,
  primary,
  secondary,
  secondary2: '#C8B9EF',
  green,
  red,
  yellow,
  gray,
  blank: '#C8C8C8',
};
