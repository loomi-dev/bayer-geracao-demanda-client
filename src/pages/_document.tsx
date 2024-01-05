import { ColorModeScript, theme } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="msapplication-TileColor" content="#A10B30" />
        <meta name="theme-color" content="#EFEFEF" />
        <meta
          name="description"
          content="Top Multiplicadores - Programa de resgate de iniciativas da Bayer"
        />
        <link rel="icon" type="image/webp" sizes="32x32" href="../assets/favicon.webp" />
        <link rel="icon" type="image/webp" sizes="16x16" href="../assets/favicon.webp" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
