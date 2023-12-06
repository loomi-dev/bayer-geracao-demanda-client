import { Box, Button, Spinner, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { useLoginMutation } from '@/api/';
import {
  TextInput,
  CircleIcon,
  ArrowRightIcon,
  LockClosedIcon,
  PersonIcon,
  FormWrapper,
  PasswordInput,
} from '@/components';
import { Mask } from '@/utils';

import { LoginFormSchemaType, loginFormSchema } from './loginForm.schema';

export const LoginForm = () => {
  const { mutate: mutateLogin, isLoading: isLoadingLogin } = useLoginMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const identifierValue = watch('identifier')?.replace(/[^a-zA-Z0-9]/g, '');
  const identifierValueIsOnlyNumber = /^\d+$/.test(identifierValue);

  const onSubmitLogin = async ({ identifier, password }: LoginFormSchemaType) => {
    mutateLogin({ identifier, password });
  };

  return (
    <Box as="form" mt="5.4rem" maxW="48.5rem" w="full" onSubmit={handleSubmit(onSubmitLogin)}>
      <VStack spacing="2.4rem" mb="1rem">
        <FormWrapper error={errors.identifier} errorStyles={{ fontSize: '1.6rem', pl: '1rem' }}>
          <TextInput
            placeholder="CNPJ ou E-mail"
            size="xl"
            mask={Mask.formatCNPJ}
            maskEnabled={identifierValueIsOnlyNumber}
            leftIcon={<PersonIcon />}
            {...register('identifier')}
          />
        </FormWrapper>

        <FormWrapper error={errors.password} errorStyles={{ fontSize: '1.6rem', pl: '1rem' }}>
          <PasswordInput
            placeholder="Senha"
            size="xl"
            leftIcon={<LockClosedIcon />}
            {...register('password')}
          />
        </FormWrapper>
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
        isDisabled={!isValid || isLoadingLogin}
        rightIcon={
          <CircleIcon color="greyscale.0">
            {isLoadingLogin ? <Spinner color="#fff" fontSize={20} /> : <ArrowRightIcon />}
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
