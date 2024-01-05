import { Button, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export const PasswordResetSuccess = () => (
  <VStack align="flex-start" spacing="4rem" mt="1.6rem">
    <Text textStyle="h1" lineHeight="4rem">
      Senha corrigida com sucesso
    </Text>

    <Link href="/entrar" passHref legacyBehavior>
      <Button as="a" fontSize="1.8rem" w="full">
        Ir para o login
      </Button>
    </Link>
  </VStack>
);
