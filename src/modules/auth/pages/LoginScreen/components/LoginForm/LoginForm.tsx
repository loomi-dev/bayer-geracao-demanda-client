import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { TextInput, CircleIcon, ArrowRightIcon, LockClosedIcon, PersonIcon } from '@/components';

import { LoginFormSchemaType, loginFormSchema } from './loginForm.schema';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmitLogin = async (data: LoginFormSchemaType) => {
    console.log(data);
  };

  return (
    <Box as="form" mt="5.4rem" maxW="48.5rem" w="full" onSubmit={handleSubmit(onSubmitLogin)}>
      <VStack spacing="2.4rem" mb="1rem">
        <TextInput
          placeholder="Usuário"
          size="xl"
          leftIcon={<PersonIcon />}
          {...register('user')}
        />

        <TextInput
          placeholder="Senha"
          size="xl"
          leftIcon={<LockClosedIcon />}
          {...register('password')}
        />
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
        type="submit"
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
};
