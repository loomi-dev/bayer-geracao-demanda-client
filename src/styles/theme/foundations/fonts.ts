import { ChakraTheme } from '@chakra-ui/react';
import localFont from 'next/font/local';

const arial = localFont({
  src: [
    { path: '../../../../public/fonts/Arial-Bold.ttf', weight: '600' },
    { path: '../../../../public/fonts/Arial-Regular.ttf', weight: '400' },
  ],
  preload: true,
  variable: '--font-arial',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
});

export const fonts: ChakraTheme['fontSizes'] = {
  heading: arial.style.fontFamily,
  body: arial.style.fontFamily,
  mono: arial.style.fontFamily,
};
