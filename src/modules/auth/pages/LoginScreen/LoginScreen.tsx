import { Flex, HStack, Text } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';

import logoImageSrc from '@/../public/assets/images/logo.webp';
import { MotionBox, MotionFlex, MotionStack, PlatformLogo } from '@/components';

import { AuthBanner } from '../../components';

import { LayerFormBox, LoginForm } from './components';

export const LoginScreen = () => {
  const loginFormControls = useAnimation();
  const titleControls = useAnimation();
  const platformLogoControls = useAnimation();
  const containerFormControls = useAnimation();

  const handleStartAnimations = () => {
    loginFormControls.start({
      x: [0, 150],
      y: [0, -150],
      opacity: [1, 0],
      transition: {
        duration: 0.4,
      },
    });

    titleControls.start({
      opacity: [1, 0],
      transition: {
        duration: 0.4,
      },
    });

    platformLogoControls.start({
      opacity: [1, 0],
      transition: {
        duration: 0.4,
      },
    });

    containerFormControls.start({
      margin: ['2.4rem 2.4rem 2.4rem 0', '0'],
    });
  };

  return (
    <HStack
      minH="100%"
      bg="linear-gradient(54deg, rgba(45, 100, 27, 0.40) 49.83%, rgba(18, 15, 2, 0.40) 100%)"
      pl={{ base: '4rem', '3xl': '9.5rem' }}
      align="center"
      justify="center"
      gap="2rem"
      position="relative"
    >
      <AuthBanner />

      <MotionStack spacing="1.5rem" align="flex-start" animate={titleControls}>
        <Text fontSize="4rem" fontWeight="bold" color="greyscale.0" opacity="0.8">
          TOP MULTIPLICADORES
        </Text>
        <Text fontSize="7rem" fontWeight="bold" color="greyscale.0" maxW="53.8rem" mr="10rem">
          A plataforma de GD da Bayer
        </Text>
      </MotionStack>

      <MotionBox
        maxW="73.2rem"
        w="full"
        h="93.4rem"
        position="relative"
        animate={containerFormControls}
        m="2.4rem"
        ml="2.4rem"
      >
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

          <MotionFlex direction="column" w="full" align="center" animate={loginFormControls}>
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
          </MotionFlex>

          <MotionBox mt="15rem" animate={platformLogoControls}>
            <PlatformLogo onClick={handleStartAnimations} />
          </MotionBox>
        </Flex>
      </MotionBox>
    </HStack>
  );
};
