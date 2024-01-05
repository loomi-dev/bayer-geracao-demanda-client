import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { ReactNode } from 'react';

import logoImageSrc from '@/../public/assets/images/logo.webp';
import { PlatformLogo } from '@/components';

import { LayerFormBox } from '../LayerFormBox';

type FormContainerProps = {
  children: ReactNode;
};

export const FormContainer = ({ children }: FormContainerProps) => (
  <Box maxW="73.2rem" w="full" h="93.4rem" position="relative">
    <Image
      src={logoImageSrc}
      alt=""
      width={180}
      height={180}
      placeholder="blur"
      style={{
        position: 'absolute',
        left: '-10.5rem',
        top: '39.8rem',
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    />

    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="linear-gradient(191deg, #FFF 42.41%, rgba(255, 255, 255, 0.00) 195.79%)"
      backdropFilter="blur(27px)"
      borderRadius="2.8rem"
      p="6rem"
      pl="12.7rem"
      w="full"
      h="full"
      gap="15rem"
      clipPath="url(#layer-form-box)"
      position="relative"
    >
      <LayerFormBox />

      <Box w="full" maxW="48.5rem">
        {children}
      </Box>

      <PlatformLogo position="absolute" left="50%" bottom="6rem" transform="translateX(-50%)" />
    </Flex>
  </Box>
);
