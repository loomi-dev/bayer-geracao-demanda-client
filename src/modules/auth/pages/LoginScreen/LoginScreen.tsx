import { Fragment } from 'react';

import { FormContainer, TitleHome } from '../../components';

import { LoginForm } from './components';

export const LoginScreen = () => (
  <Fragment>
    <TitleHome />

    <FormContainer>
      <LoginForm />
    </FormContainer>
  </Fragment>
);
