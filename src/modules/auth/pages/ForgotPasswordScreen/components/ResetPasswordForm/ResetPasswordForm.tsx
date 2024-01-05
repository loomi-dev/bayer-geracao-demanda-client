import { Button, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useForgotPassword, useResetPassword } from '@/api';
import {
  CodeIcon,
  FormWrapper,
  LockClosedIcon,
  MotionBox,
  PasswordInput,
  TextInput,
} from '@/components';

import { useForgotPasswordStore } from '../../stores';

import { ResetPasswordFormSchemaType, resetPasswordFormSchema } from './ResetPasswordForm.schema';

export const ResetPasswordForm = () => {
  const { mutate: resetPassword, isLoading: isResettingCode } = useResetPassword();
  const { mutate: resendCode, isLoading: isResendingCode } = useForgotPassword();
  const [recoveryEmail, setForgotPasswordStep, setRecoveryEmail] = useForgotPasswordStore(
    (state) => [state.recoveryEmail, state.setForgotPasswordStep, state.setRecoveryEmail],
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordFormSchemaType>({
    resolver: zodResolver(resetPasswordFormSchema),
  });

  const onSubmitResetPasswordForm = ({
    code,
    password,
    confirmPassword,
  }: ResetPasswordFormSchemaType) => {
    resetPassword(
      {
        code,
        password,
        passwordConfirmation: confirmPassword,
      },
      {
        onSuccess: () => {
          setForgotPasswordStep(2);
        },
      },
    );
  };

  const handleResendCode = () => {
    if (recoveryEmail) {
      resendCode({ email: recoveryEmail });
    }
  };

  const handleBackSendEmailStep = () => {
    setForgotPasswordStep(0);
    setRecoveryEmail(null);
  };

  return (
    <MotionBox
      as="form"
      w="full"
      mt="1.6rem"
      mb="6rem"
      onSubmit={handleSubmit(onSubmitResetPasswordForm)}
      animate={{ y: [50, 0], opacity: [0, 1] }}
      exit={{ y: [0, 50], opacity: [1, 0] }}
      transition={{
        duration: 0.4,
      }}
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

        <FormWrapper error={errors.confirmPassword}>
          <PasswordInput
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
        <Button
          type="submit"
          w="full"
          fontSize="1.8rem"
          isDisabled={isResendingCode}
          isLoading={isResettingCode}
        >
          Redefinir a senha
        </Button>

        <Button
          variant="eighth"
          w="full"
          onClick={handleResendCode}
          isDisabled={isResettingCode}
          isLoading={isResendingCode}
        >
          Enviar o código novamente
        </Button>

        <Button variant="unstyled" fontSize="1.6rem" onClick={handleBackSendEmailStep}>
          Voltar
        </Button>
      </VStack>
    </MotionBox>
  );
};
