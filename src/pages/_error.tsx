import { Center, Flex, Heading, Text } from '@chakra-ui/react';
import { default as NextHead } from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { APP_NAME } from '@/config';

function Error() {
  return (
    <>
      <NextHead>
        <title>{APP_NAME} - Erro</title>
      </NextHead>

      <Center
        flexDirection="column"
        minH="100vh"
        gap="3rem"
        position="relative"
        bgColor="secondary2"
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
            <Heading fontWeight="bold" fontSize={{ base: '2.8rem' }} color="primary.200">
              Desculpe, algo inesperado aconteceu em nossos servidores.
            </Heading>
            <Text fontWeight={300} fontSize={{ base: '1.6rem' }} color="black">
              Nossa equipe técnica já está ciente do problema e trabalhando para corrigi-lo. Por
              favor, tente novamente em alguns minutos. Se o problema persistir, entre em contato
              conosco para que possamos ajudar.
            </Text>
            <Link href="/">
              <Text color="primary.400" fontWeight={700} fontSize={{ base: '1.6rem' }}>
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
