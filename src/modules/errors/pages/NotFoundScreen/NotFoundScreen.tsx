import { Box, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { ChevronCircleRightIcon } from '@/components';
import { DEFAULT_PUBLIC_PAGE } from '@/config';

export const NotFoundScreen = () => (
  <VStack spacing="0">
    <Box position="relative">
      <Image
        src="/assets/images/notfound.svg"
        alt=""
        width={300}
        height={104}
        quality={100}
        priority
      />

      <Box layerStyle="boxGlass" boxSize="8rem" left="-5rem" bottom="-3rem" />
      <Box layerStyle="boxGlass" boxSize="16.4rem" right="-10rem" top="-8rem" />
    </Box>

    <Text textStyle="h2" color="text.brand" mt="8.8rem">
      Ops! Parece que você se perdeu.
    </Text>
    <Text mb="2.8rem" maxW="57rem" align="center">
      A página que você estava procurando não foi encontrada. Não se preocupe, <br /> acontece com
      todo mundo. <br />
      <Text as="strong">Que tal voltar à página inicial e tentar novamente?</Text>
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
        Voltar para tela incial
        <ChevronCircleRightIcon />
      </Text>
    </Link>
  </VStack>
);
