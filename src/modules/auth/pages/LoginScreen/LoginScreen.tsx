import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import logoImageSrc from '@/../public/assets/images/logo.webp';

import { AuthBanner } from '../../components';

import { LayerFormBox, LoginForm } from './components';

export const LoginScreen = () => (
  <HStack
    minH="100%"
    bg="linear-gradient(54deg, rgba(45, 100, 27, 0.40) 49.83%, rgba(18, 15, 2, 0.40) 100%)"
    p="2.4rem"
    pl={{ base: '4rem', '3xl': '9.5rem' }}
    align="center"
    justify="center"
    gap="2rem"
    position="relative"
  >
    <AuthBanner />

    <VStack spacing="1.5rem" align="flex-start">
      <Text fontSize="4rem" fontWeight="bold" color="greyscale.0" opacity="0.8">
        TOP MULTIPLICADORES
      </Text>
      <Text fontSize="7rem" fontWeight="bold" color="greyscale.0" maxW="66rem" mr="10rem">
        A plataforma de gestão Bayer
      </Text>
    </VStack>

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
        bg="linear-gradient(191deg, #FFF 42.41%, rgba(255, 255, 255, 0.00) 195.79%)"
        backdropFilter="blur(27px)"
        borderRadius="2.8rem"
        p="18rem 8.7rem 6rem 12.7rem"
        w="full"
        h="full"
        clipPath="url(#layer-form-box)"
      >
        <LayerFormBox />

        <Text textStyle="action3" lineHeight="2rem" color="text.primary" letterSpacing="1px">
          TROQUE SEUS PONTOS
        </Text>
        <Text
          textStyle="h1"
          fontWeight="normal"
          lineHeight="4rem"
          color="text.footnote"
          mt="0.7rem"
          letterSpacing="2px"
        >
          Plataformas de pontos
        </Text>

        <LoginForm />

        <HStack mt="14rem">
          <Text textStyle="caption3" color="text.footnote" maxW="8.7rem">
            Uma plataforma
          </Text>

          <Image src="/assets/images/bayer-logo.webp" alt="" width={66} height={66} quality={100} />
        </HStack>
      </Flex>
    </Box>
  </HStack>
);
