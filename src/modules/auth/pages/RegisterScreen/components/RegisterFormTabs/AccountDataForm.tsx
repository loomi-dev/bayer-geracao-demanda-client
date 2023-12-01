import { Button, Text, VStack, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import {
  ArrowRightMediumIcon,
  BusinessIcon,
  CircleIcon,
  EmailIcon,
  FormWrapper,
  PersonIcon,
  TextInput,
} from '@/components';

import { PrivacyPoliciesModal } from './PrivacyPoliciesModal';
import { AccountDataFormSchemaType, accountDataFormSchema } from './registerFormTabs.schemas';

export const AccountDataForm = () => {
  const {
    isOpen: isOpenPrivacyPoliciesModal,
    onOpen: onOpenPrivacyPoliciesModal,
    onClose: onClosePrivacyPoliciesModal,
  } = useDisclosure();

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<AccountDataFormSchemaType>();

  const isValidAccountDataForm = accountDataFormSchema.safeParse({
    name: watch('name'),
    email: watch('email'),
    role: watch('role'),
  }).success;

  return (
    <>
      <VStack mt="5rem" spacing="1.2rem">
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

      <Button
        size="lg"
        variant="white"
        w="17.7rem"
        p="1rem"
        mt="8.8rem"
        mx="auto"
        isDisabled={!isValidAccountDataForm}
        rightIcon={
          <CircleIcon boxSize="3.9rem" bg="green.600">
            <ArrowRightMediumIcon />
          </CircleIcon>
        }
        onClick={onOpenPrivacyPoliciesModal}
      >
        <Text as="span" textStyle="action3" color="text.footnote" w="full" align="center">
          Próximo
        </Text>
      </Button>
      <PrivacyPoliciesModal
        isOpen={isOpenPrivacyPoliciesModal}
        onClose={onClosePrivacyPoliciesModal}
      />
    </>
  );
};
