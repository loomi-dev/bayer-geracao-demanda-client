import { ChakraTheme } from '@chakra-ui/react';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

// fonts do provedor do google.
const montserrat = Montserrat({
  weight: ['900', '800', '700', '600', '500', '400', '300', '200', '100'],
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  preload: true,
  subsets: ['latin'],
});

// fonts que não possuem um provedor e tem que ser baixadas localmente.
const fieldwork = localFont({
  src: [
    { path: '../../../../public/fonts/Fieldwork23-HumFat.otf', weight: '900' },
    { path: '../../../../public/fonts/Fieldwork20-HumBlack.otf', weight: '800' },
    { path: '../../../../public/fonts/Fieldwork17-HumBold.otf', weight: '700' },
    { path: '../../../../public/fonts/Fieldwork14-HumDemiBold.otf', weight: '600' },
    { path: '../../../../public/fonts/Fieldwork11-HumRegular.otf', weight: '500' },
    { path: '../../../../public/fonts/Fieldwork8-HumLight.otf', weight: '300' },
    { path: '../../../../public/fonts/Fieldwork5-HumThin.otf', weight: '200' },
    { path: '../../../../public/fonts/Fieldwork2-HumHair.otf', weight: '100' },
  ],
  preload: true,
  variable: '--fieldwork-font',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
});

export const fonts: ChakraTheme['fonts'] = {
  heading: fieldwork.style.fontFamily,
  body: montserrat.style.fontFamily,
  mono: montserrat.style.fontFamily,
};
