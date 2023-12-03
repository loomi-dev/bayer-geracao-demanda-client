import { Center, Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { APP_NAME } from '@/config';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{`${APP_NAME} - 404`}</title>
      </Head>

      <Center
        minH="100%"
        gap="3rem"
        position="relative"
        bgColor="surface.secondary"
        padding="0 3rem"
      >
        <Flex
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '2.4rem', sm: '5.5rem' }}
        >
          <Image
            src="/assets/lupa-404.png"
            alt="lupinha roxa com numero 404"
            width={500}
            height={400}
            quality={100}
          />
          <Flex flexDirection="column" gap="3rem" maxW="46rem">
            <Image
              src="/assets/404-title.png"
              alt="título 404"
              width={344}
              height={125}
              quality={100}
            />
            <Text as="h1" textStyle="h1" color="text.primary">
              Ops! Parece que você se perdeu.
            </Text>
            <Text textStyle="action2" color="text.footnote">
              A página que você estava procurando não foi encontrada. Não se preocupe, acontece com
              todo mundo.
            </Text>
            <Link href="/">
              <Text as="span" color="text.brand" textStyle="action2">
                Voltar para tela inicial
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}
