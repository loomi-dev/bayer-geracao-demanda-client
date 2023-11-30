import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import { AuthBanner } from '../../components';

import { LoginForm } from './components';

export const LoginScreen = () => (
  <HStack
    minH="100%"
    bg="linear-gradient(54deg, rgba(45, 100, 27, 0.40) 49.83%, rgba(18, 15, 2, 0.40) 100%)"
    p="2.4rem"
    pl="9.5rem"
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
      <Text fontSize="7rem" fontWeight="bold" color="greyscale.0" maxW="66rem">
        A plataforma de pontos Bayer
      </Text>
    </VStack>

    <Flex
      direction="column"
      align="center"
      bg="linear-gradient(191deg, #FFF 42.41%, rgba(255, 255, 255, 0.00) 195.79%)"
      backdropFilter="blur(27px)"
      borderRadius="2.8rem"
      maxW="73.2rem"
      w="full"
      p="18rem 8.7rem 6rem 12.7rem"
    >
      <Text textStyle="action3" color="text.primary">
        TROQUE SEUS PONTOS
      </Text>
      <Text textStyle="h1" fontWeight="normal" color="text.footnote" mt="0.7rem">
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
  </HStack>
);
