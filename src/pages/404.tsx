import { Center, Flex, Heading, Text } from '@chakra-ui/react';
import { default as NextHead } from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { APP_NAME } from '@/config';

export default function Custom404() {
  return (
    <>
      <NextHead>
        <title>{APP_NAME} - 404</title>
      </NextHead>

      <Center minH="100vh" gap="3rem" position="relative" bgColor="secondary2" padding="0 3rem">
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
            <Heading fontWeight="bold" fontSize={{ base: '2.8rem' }} color="primary.200">
              Ops! Parece que você se perdeu.
            </Heading>
            <Text fontWeight={300} fontSize={{ base: '1.6rem' }} color="black">
              A página que você estava procurando não foi encontrada. Não se preocupe, acontece com
              todo mundo.
            </Text>
            <Link href="/">
              <Text color="primary.400" fontWeight={700} fontSize={{ base: '1.6rem' }}>
                Voltar para tela inicial
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}
