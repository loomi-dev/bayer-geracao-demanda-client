import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { AuthBanner } from '../../components';

import { RegisterFormTabs, RegisterOverlay } from './components';

export const RegisterScreen = () => (
  <Flex align="center" justify="center" minH="100%" w="full" position="relative" py="3rem">
    <AuthBanner />

    <RegisterOverlay />

    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="linear-gradient(187deg, #FFF 40.98%, rgba(255, 255, 255, 0.00) 153.35%)"
      maxW="115.8rem"
      w="full"
      position="relative"
      zIndex="2"
      pt="6.6rem"
      pb="7.3rem"
      borderRadius="2.8rem"
    >
      <Image
        src="/assets/images/logo.webp"
        alt=""
        width={80}
        height={80}
        style={{
          objectFit: 'contain',
        }}
      />

      <Text
        fontSize="3.6rem"
        fontWeight="normal"
        color="text.footnote"
        lineHeight="4rem"
        maxW="63.2rem"
        align="center"
        mt="5.2rem"
      >
        <Text as="strong">Personalize Sua Experiência</Text> <br /> Adicione Mais Detalhes ao Seu
        Perfil
      </Text>

      <RegisterFormTabs />
    </Flex>
  </Flex>
);
