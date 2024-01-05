import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { CodeIcon, FormWrapper, LockClosedIcon, TextInput } from '@/components';

import { ResetPasswordFormSchemaType, resetPasswordFormSchema } from './ResetPasswordForm.schema';

export const ResetPasswordForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordFormSchemaType>({
    resolver: zodResolver(resetPasswordFormSchema),
  });

  const onSubmitResetPasswordForm = async (data) => {
    console.log(data);
  };

  return (
    <Box
      as="form"
      w="full"
      mt="1.6rem"
      mb="3rem"
      onSubmit={handleSubmit(onSubmitResetPasswordForm)}
    >
      <VStack align="flex-start" spacing="1.6rem">
        <Text textStyle="h1" lineHeight="4rem">
          Digite seu código
        </Text>
        <Text textStyle="body1" opacity="0.6" maxW="33rem" lineHeight="2.4rem">
          Enviamos para seu e-mail um código para redefinir a senha
        </Text>
      </VStack>

      <VStack w="full" spacing="1.6rem" my="4rem">
        <FormWrapper error={errors.code}>
          <TextInput
            placeholder="Código recebido"
            size="xl"
            leftIcon={<CodeIcon />}
            _placeholder={{
              fontSize: '1.8rem',
              color: 'greyscale.600',
            }}
            {...register('code')}
          />
        </FormWrapper>

        <FormWrapper error={errors.password}>
          <TextInput
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

        <FormWrapper error={errors.confirmPassword}>
          <TextInput
            placeholder="Confirmação de senha"
            size="xl"
            leftIcon={<LockClosedIcon />}
            _placeholder={{
              fontSize: '1.8rem',
              color: 'greyscale.600',
            }}
            {...register('confirmPassword')}
          />
        </FormWrapper>
      </VStack>

      <VStack spacing="2.4rem">
        <Button type="submit" w="full" fontSize="1.8rem">
          Redefinir a senha
        </Button>

        <Button variant="eighth" w="full">
          Enviar o código novamente
        </Button>
      </VStack>
    </Box>
  );
};
