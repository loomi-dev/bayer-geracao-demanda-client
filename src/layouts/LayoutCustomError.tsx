import { Box, Center, FlexProps } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';

type LayoutCustomErrorProps = {
  title?: string;
  children: ReactNode;
} & FlexProps;

export const LayoutCustomError = ({
  title = 'Bayer - Top Multiplicadores',
  children,
}: LayoutCustomErrorProps) => (
  <>
    <Head>
      <title>{`${title}`}</title>
    </Head>

    <Center minH="full" w="full" bg="greyscale.0">
      <Box
        layerStyle="boxVinho"
        boxSize="50.2rem"
        borderRadius="full"
        left="-2.1rem"
        bottom="-13.7rem"
      />

      <Box
        layerStyle="boxVinho"
        boxSize="28.6rem"
        borderRadius="full"
        right="13.8rem"
        top="22.8rem"
      />

      <Box
        layerStyle="boxVinho"
        w="87.4rem"
        h="23.6rem"
        borderRadius="full"
        right="-12.3rem"
        top="11rem"
      />

      {children}
    </Center>
  </>
);
