import { Box, Button, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import { TextInput, CircleIcon, ArrowRightIcon, LockClosedIcon, PersonIcon } from '@/components';

export const LoginForm = () => (
  <Box mt="5.4rem" maxW="48.5rem" w="full">
    <VStack spacing="2.4rem" mb="1rem">
      <TextInput placeholder="Usuário" size="xl" leftIcon={<PersonIcon />} />
      <TextInput placeholder="Senha" size="xl" leftIcon={<LockClosedIcon />} />
    </VStack>

    <Link href="/esqueceu-a-senha" passHref legacyBehavior>
      <Text
        as="a"
        textStyle="caption3"
        color="surface.brand"
        pl="1rem"
        _hover={{ textDecoration: 'underline' }}
      >
        Esqueceu a senha?
      </Text>
    </Link>

    <Button
      variant="white"
      size="2xl"
      w="31.5rem"
      px="1rem"
      mt="5.1rem"
      mx="auto"
      rightIcon={
        <CircleIcon color="green.400">
          <ArrowRightIcon />
        </CircleIcon>
      }
    >
      <Text as="span" w="full" align="center">
        Entrar na plataforma
      </Text>
    </Button>
  </Box>
);
