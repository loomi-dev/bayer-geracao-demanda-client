import { Box } from '@chakra-ui/react';
import { Fragment } from 'react';

import { FormContainer, TitleHome } from '../../components';

import { ForgotPasswordFormSteps, SendEmailForm } from './components';

export const ForgotPasswordScreen = () => (
  <Fragment>
    <TitleHome />

    <FormContainer>
      <Box w="full">
        <ForgotPasswordFormSteps />
        <SendEmailForm />
      </Box>
    </FormContainer>
  </Fragment>
);
