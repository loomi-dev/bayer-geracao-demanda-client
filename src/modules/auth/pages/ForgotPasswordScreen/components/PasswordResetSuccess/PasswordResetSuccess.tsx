import { Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { MotionStack } from '@/components';
import { DEFAULT_PUBLIC_PAGE } from '@/config';

import { useForgotPasswordStore } from '../../stores';

export const PasswordResetSuccess = () => {
  const { push } = useRouter();
  const [setRecoveryEmail, setForgotPasswordStep] = useForgotPasswordStore((state) => [
    state.setRecoveryEmail,
    state.setForgotPasswordStep,
  ]);

  const handleBackLogin = () => {
    push(DEFAULT_PUBLIC_PAGE);
    setRecoveryEmail(null);
    setForgotPasswordStep(0);
  };

  return (
    <MotionStack
      align="flex-start"
      spacing="4rem"
      mt="1.6rem"
      animate={{ y: [50, 0], opacity: [0, 1] }}
      exit={{ y: [0, 50], opacity: [1, 0] }}
      transition={{
        duration: 0.4,
      }}
    >
      <Text textStyle="h1" lineHeight="4rem">
        Senha corrigida com sucesso
      </Text>

      <Button fontSize="1.8rem" w="full" onClick={handleBackLogin}>
        Ir para o login
      </Button>
    </MotionStack>
  );
};
