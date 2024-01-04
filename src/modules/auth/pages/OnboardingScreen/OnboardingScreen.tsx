import { Box, Flex, HStack, Text, useToast } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';

import { useUpdateManager } from '@/api';
import {
  ArrowRightIcon,
  CircleIcon,
  MotionBox,
  MotionButton,
  MotionFlex,
  MotionStack,
  MotionText,
} from '@/components';
import { DEFAULT_PRIVATE_MANAGER_PAGE } from '@/config';

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
  const { push } = useRouter();
  const toast = useToast();
  const { mutate: updateManager, isLoading } = useUpdateManager();
  const isManager = session.data?.user.role === 'Manager';
  const redirectURL = isManager ? '' : '/bem-vindo/completar-cadastro';
  const managerId = session.data?.user.manager?.id as number;

  const handleUpdateManager = () =>
    updateManager(
      { managerId: managerId, confirmed: true },
      {
        onSuccess: () => {
          toast({
            description: 'Bem vindo a plataforma Top Multiplicadores!',
            status: 'success',
          });
          push(DEFAULT_PRIVATE_MANAGER_PAGE);
        },
        onError: () => {
          toast({
            description: 'Ocorreu um erro ao tentar entrar na plataforma.',
            status: 'error',
          });
        },
      },
    );

  const handleOnClick = () => {
    if (isManager) {
      handleUpdateManager();
    }
  };

  return (
    <Flex minH="100%" position="relative" overflow="hidden">
      <AuthBanner />

      <MotionFlex
        direction="column"
        align="center"
        justify="center"
        bg="linear-gradient(187deg, #FFF 40.98%, rgba(255, 255, 255, 0.00) 153.35%)"
        backdropFilter="blur(27px)"
        borderRadius="0 2.8rem 2.8rem 0"
        width="full"
        py="10rem"
        px={{ base: '2rem', '2xl': '9.6rem' }}
        position="relative"
        transition={{ duration: 1.8, ease: 'easeInOut' }}
        animate={{ maxWidth: ['100%', '63%', '65%'] }}
      >
        <MotionBox
          animate={{
            y: [300, 0],
            x: [300, 0],
            z: [300, 0],
            opacity: [0, 1],
            rotateZ: [-200, 0],
          }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 0.3,
          }}
        >
          <Image src="/assets/images/logo.webp" alt="" width={80} height={80} />
        </MotionBox>

        <MotionText
          fontSize="3.6rem"
          fontWeight="normal"
          color="text.footnote"
          maxW="63.2rem"
          align="center"
          mt="5.4rem"
          lineHeight="4rem"
          transition={{
            ease: 'easeInOut',
            duration: 1.15,
            delay: 0.6,
          }}
          animate={{ opacity: [0, 1], y: [100, -10, 0] }}
        >
          Desejamos nossas boas vindas ao <br />
          <Text as="strong">programa de resgate de iniciativas</Text> do programa top
          multiplicadores de <br />
          soja da Bayer
        </MotionText>

        <MotionStack
          align="center"
          mt="11.4rem"
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 0.75,
          }}
          animate={{ opacity: [0, 1], y: [100, -20, 0] }}
        >
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
        </MotionStack>

        <Link href={redirectURL} legacyBehavior passHref>
          <MotionButton
            as="a"
            mt="11.4rem"
            variant="white"
            size="2xl"
            p="1rem"
            w="31.5rem"
            isLoading={isLoading}
            onClick={handleOnClick}
            rightIcon={
              <CircleIcon>
                <ArrowRightIcon color="#fff" />
              </CircleIcon>
            }
            transition={{
              ease: 'easeInOut',
              duration: 0.75,
              delay: 0.9,
            }}
            animate={{ opacity: [0, 1], y: [100, -20, 0] }}
          >
            <Text as="span" textStyle="body1" color="text.footnote" w="full" align="center">
              Acessar a plataforma
            </Text>
          </MotionButton>
        </Link>

        <MotionFlex
          position="absolute"
          bottom="-0"
          right={{ base: '-41rem', '3xl': '-50rem' }}
          alignItems="flex-end"
          justifyContent="flex-end"
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
            delay: 0.45,
          }}
          animate={{ x: [180, -20, 0] }}
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
        </MotionFlex>
      </MotionFlex>
    </Flex>
  );
};
