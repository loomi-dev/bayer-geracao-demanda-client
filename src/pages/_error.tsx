import { Center, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { APP_NAME } from '@/config';

function Error() {
  return (
    <>
      <Head>
        <title>{`${APP_NAME} - Erro`}</title>
      </Head>

      <Center
        flexDirection="column"
        minH="100%"
        gap="3rem"
        position="relative"
        bg="surface.secondary"
        padding="0 3rem"
        w="full"
      >
        <Flex
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '2.4rem', sm: '5.5rem' }}
        >
          <Image
            src="/assets/tomada-500.png"
            alt="lupinha roxa com numero 500"
            width={500}
            height={400}
            quality={100}
          />
          <Flex flexDirection="column" gap="3rem" maxW="46rem">
            <Image
              src="/assets/500-title.png"
              alt="título 500"
              width={344}
              height={125}
              quality={100}
            />
            <Heading as="h1" textStyle="h1" color="text.primary">
              Desculpe, algo inesperado aconteceu em nossos servidores.
            </Heading>
            <Text textStyle="action2" color="text.footnote">
              Nossa equipe técnica já está ciente do problema e trabalhando para corrigi-lo. Por
              favor, tente novamente em alguns minutos. Se o problema persistir, entre em contato
              conosco para que possamos ajudar.
            </Text>
            <Link href="/">
              <Text as="span" color="text.brand" textStyle="action2">
                Entrar em contato
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
