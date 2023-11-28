import { Flex, HStack, Text, VStack } from '@chakra-ui/react';

import { LoginForm } from './components';

export const LoginScreen = () => (
  <HStack
    minH="100%"
    bg="url(./assets/images/banner.png) center / cover no-repeat"
    p="2.4rem"
    pl="9.5rem"
  >
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
      width="73.2rem"
      h="93.4rem"
      p="18rem 8.7rem 6rem 12.7rem"
    >
      <Text textStyle="action3" color="text.primary">
        TROQUE SEUS PONTOS
      </Text>
      <Text textStyle="h1" fontWeight="normal" color="text.footnote" mt="0.7rem">
        Plataformas de pontos
      </Text>

      <LoginForm />

      <HStack>
        <Text>Uma plataforma</Text>
      </HStack>
    </Flex>
  </HStack>
);
