import { Box, Button, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const ClientErrorScreen = () => {
  const { reload } = useRouter();

  return (
    <VStack spacing="0">
      <Box position="relative">
        <Image
          src="/assets/images/internal-error.svg"
          alt=""
          width={300}
          height={104}
          quality={100}
          priority
        />
      </Box>

      <Text textStyle="h2" color="text.brand" mt="4rem" align="center">
        Desculpe, algo inesperado <br />
        aconteceu durante o carregamento da página.
      </Text>
      <Text mt="2.5rem" mb="2.2rem" maxW="57rem" align="center">
        Por favor, tente novamente em alguns minutos. Se o problema persistir, entre em contato
        conosco para que possamos ajudar.
      </Text>

      <Button
        variant="unstyled"
        onClick={reload}
        fontSize="1.6rem"
        fontWeight="bold"
        color="red.danger_25"
        display="flex"
        gap="1.8rem"
        alignItems="center"
      >
        Tentar novamente
      </Button>
    </VStack>
  );
};
