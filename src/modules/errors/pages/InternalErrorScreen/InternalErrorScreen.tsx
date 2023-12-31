import { Box, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { DEFAULT_PUBLIC_PAGE } from '@/config';

export const InternalErrorScreen = () => (
  <VStack spacing="0">
    <Box position="relative">
      <Image
        src="/assets/images/internal-error.svg"
        alt=""
        width={403}
        height={191}
        quality={100}
        priority
      />
    </Box>

    <Text textStyle="h2" color="text.brand" mt="4rem" align="center">
      Desculpe, algo inesperado <br />
      aconteceu em nossos servidores.
    </Text>
    <Text mt="2.5rem" mb="2.2rem" maxW="57rem" align="center">
      Nossa equipe técnica já está ciente do problema e trabalhando para corrigi-lo. Por favor,
      tente novamente em alguns minutos. Se o problema persistir, entre em contato conosco para que
      possamos ajudar.
    </Text>

    <Link href={DEFAULT_PUBLIC_PAGE} passHref legacyBehavior>
      <Text
        as="a"
        textStyle="action2"
        color="red.danger_25"
        display="flex"
        gap="1.8rem"
        alignItems="center"
      >
        Entrar em contato
      </Text>
    </Link>
  </VStack>
);
