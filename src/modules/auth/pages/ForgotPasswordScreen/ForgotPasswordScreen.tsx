import { Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { Fragment } from 'react';

import { FormContainer, TitleHome } from '../../components';

import {
  ForgotPasswordFormSteps,
  PasswordResetSuccess,
  ResetPasswordForm,
  SendEmailForm,
} from './components';
import { useForgotPasswordStore } from './stores';

export const ForgotPasswordScreen = () => {
  const forgotPasswordStep = useForgotPasswordStore((state) => state.forgotPasswordStep);

  return (
    <Fragment>
      <TitleHome />

      <FormContainer>
        <AnimatePresence mode="wait">
          <Box w="full" key={forgotPasswordStep}>
            <ForgotPasswordFormSteps step={forgotPasswordStep + 1} totalSteps={3} />
            {forgotPasswordStep === 0 && <SendEmailForm />}
            {forgotPasswordStep === 1 && <ResetPasswordForm />}
            {forgotPasswordStep === 2 && <PasswordResetSuccess />}
          </Box>
        </AnimatePresence>
      </FormContainer>
    </Fragment>
  );
};
