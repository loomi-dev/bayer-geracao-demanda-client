import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { BusinessIcon, EmailIcon, FormWrapper, PersonIcon, TextInput } from '@/components';

import { PrivacyPoliciesModalButton } from './PrivacyPoliciesModalButton';
import { AccountDataFormSchemaType } from './registerFormTabs.schemas';

export const AccountDataForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormContext<AccountDataFormSchemaType>();

  const onSubmitAccountDataForm = (data: AccountDataFormSchemaType) => {
    console.log(data);
  };

  return (
    <Box as="form" mt="5rem" onSubmit={handleSubmit(onSubmitAccountDataForm)}>
      <VStack spacing="1.2rem">
        <FormWrapper error={errors.name} errorStyles={{ fontSize: '1.6rem', pl: '1rem' }}>
          <TextInput
            size="xl"
            placeholder="Seu nome"
            leftIcon={<PersonIcon />}
            borderRadius="2.1rem"
            {...register('name')}
          />
        </FormWrapper>
        <FormWrapper error={errors.email} errorStyles={{ fontSize: '1.6rem', pl: '1rem' }}>
          <TextInput
            size="xl"
            placeholder="E-mail"
            leftIcon={<EmailIcon />}
            borderRadius="2.1rem"
            {...register('email')}
          />
        </FormWrapper>
        <FormWrapper error={errors.role} errorStyles={{ fontSize: '1.6rem', pl: '1rem' }}>
          <TextInput
            size="xl"
            placeholder="Seu cargo na sua empresa"
            leftIcon={<BusinessIcon />}
            borderRadius="2.1rem"
            {...register('role')}
          />
        </FormWrapper>
      </VStack>

      <PrivacyPoliciesModalButton />
    </Box>
  );
};
