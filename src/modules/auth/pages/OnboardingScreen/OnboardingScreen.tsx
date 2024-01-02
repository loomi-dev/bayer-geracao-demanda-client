import { Box, Button, Center, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';

import { ArrowRightIcon, CircleIcon } from '@/components';

import { AuthBanner } from '../../components';

import { Benefit, DividerBenefit } from './components';

const managerBenefits = [
  'Acompanhe os valores disponíveis para seus multiplicadores ',
  'Revise e aprove os planejamentos dos multiplicadores para a safra atual',
  'Verifique as evidências das ações dos multiplicadores no sistema',
];

const farmerBenefits = [
  'Acompanhar, planejar e resgatar o valor disponível para iniciativas de geração de demanda',
  'Comprovar e evidenciar a utilização do recurso nas ações',
];

const benefits = {
  Manager: managerBenefits,
  Farmer: farmerBenefits,
};
export const OnboardingScreen = () => {
  const session = useSession();

  return (
    <Flex minH="100%" position="relative" overflow="hidden">
      <AuthBanner />

      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="linear-gradient(187deg, #FFF 40.98%, rgba(255, 255, 255, 0.00) 153.35%)"
        backdropFilter="blur(27px)"
        borderRadius="0 2.8rem 2.8rem 0"
        maxW="65%"
        w="full"
        py="10rem"
        px={{ base: '2rem', '2xl': '9.6rem' }}
        position="relative"
      >
        <Image src="/assets/images/logo.webp" alt="" width={80} height={80} />

        <Text
          fontSize="3.6rem"
          fontWeight="normal"
          color="text.footnote"
          maxW="63.2rem"
          align="center"
          mt="5.4rem"
          lineHeight="4rem"
        >
          Desejamos nossas boas vindas ao <br />
          <Text as="strong">programa de resgate de iniciativas</Text> do programa top
          multiplicadores de <br />
          soja da Bayer
        </Text>

        <VStack mt="11.4rem">
          <Text textStyle="action4" color="surface.brand" textTransform="uppercase">
            Aqui você vai poder
          </Text>

          <HStack align="flex-start">
            {benefits[session.data?.user.role ?? 'Farmer'].map((benefit, index, arr) => (
              <Fragment key={index}>
                <Benefit
                  title={`${index + 1}`}
                  description={benefit}
                  descriptionStyles={{ maxW: '18rem' }}
                />
                {index < arr.length - 1 && <DividerBenefit />}
              </Fragment>
            ))}
          </HStack>
        </VStack>

        <Link href="/bem-vindo/completar-cadastro" legacyBehavior passHref>
          <Button
            as="a"
            mt="11.4rem"
            variant="white"
            size="2xl"
            p="1rem"
            w="31.5rem"
            rightIcon={
              <CircleIcon>
                <ArrowRightIcon color="#fff" />
              </CircleIcon>
            }
          >
            <Text as="span" textStyle="body1" color="text.footnote" w="full" align="center">
              Acessar a plataforma
            </Text>
          </Button>
        </Link>

        <Center
          position="absolute"
          bottom="-0"
          right={{ base: '-41rem', '3xl': '-50rem' }}
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Box
            w={{ base: '48rem', '3xl': '60.5rem' }}
            h={{ base: '55rem', '3xl': '70rem' }}
            position="relative"
          >
            <Image
              src="/assets/images/onboarding-agro.webp"
              alt=""
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
        </Center>
      </Flex>
    </Flex>
  );
};
