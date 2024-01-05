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
    mode: 'all',
    criteriaMode: 'all',
  });

  const identifierValue = watch('identifier')?.replace(/[^a-zA-Z0-9]/g, '');
  const identifierValueIsOnlyNumber = /^\d+$/.test(identifierValue);

  const onSubmitLogin = async ({ identifier, password }: LoginFormSchemaType) => {
    mutateLogin({ identifier, password });
  };

  return (
    <Box as="form" w="full" onSubmit={handleSubmit(onSubmitLogin)}>
      <VStack mb="5.4rem" spacing="0">
        <Text textStyle="action3" lineHeight="2rem" color="text.primary" letterSpacing="1px">
          TROQUE SEUS PONTOS
        </Text>
        <Text
          textStyle="h1"
          fontWeight="normal"
          lineHeight="4rem"
          color="text.footnote"
          mt="0.7rem"
          letterSpacing="2px"
        >
          Plataformas de pontos
        </Text>
      </VStack>

      <VStack spacing="2.4rem" mb="1rem">
        <FormWrapper error={errors.identifier}>
          <TextInput
            placeholder="CNPJ ou E-mail"
            size="xl"
            mask={Mask.formatCNPJ}
            maskEnabled={identifierValueIsOnlyNumber}
            leftIcon={<PersonIcon />}
            _placeholder={{
              fontSize: '1.8rem',
              color: 'greyscale.600',
            }}
            {...register('identifier')}
          />
        </FormWrapper>

        <FormWrapper error={errors.password}>
          <PasswordInput
            placeholder="Senha"
            size="xl"
            leftIcon={<LockClosedIcon />}
            _placeholder={{
              fontSize: '1.8rem',
              color: 'greyscale.600',
            }}
            {...register('password')}
          />
        </FormWrapper>
      </VStack>

      <Link href="/recuperar-senha" passHref legacyBehavior>
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
