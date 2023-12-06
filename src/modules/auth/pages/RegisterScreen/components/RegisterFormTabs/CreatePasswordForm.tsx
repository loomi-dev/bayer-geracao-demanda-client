import { Button, Spinner, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import {
  ArrowRightMediumIcon,
  CircleIcon,
  FormWrapper,
  LockClosedIcon,
  PasswordInput,
} from '@/components';

import { CreatePasswordFormSchemaType } from './registerFormTabs.schemas';

export type CreatePasswordFormProps = {
  isLoadingSignInButton: boolean;
};

export const CreatePasswordForm = ({ isLoadingSignInButton }: CreatePasswordFormProps) => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext<CreatePasswordFormSchemaType>();

  return (
    <>
      <VStack mt="5rem" spacing="1.2rem">
        <FormWrapper error={errors.password} errorStyles={{ fontSize: '1.6rem', pl: '1rem' }}>
          <PasswordInput
            size="xl"
            placeholder="Crie sua senha de 8 dígitos"
            borderRadius="2.1rem"
            leftIcon={<LockClosedIcon />}
            {...register('password')}
          />
        </FormWrapper>

        <FormWrapper
          error={errors.confirmPassword}
          errorStyles={{ fontSize: '1.6rem', pl: '1rem' }}
        >
          <PasswordInput
            size="xl"
            placeholder="Confirme sua senha"
            borderRadius="2.1rem"
            leftIcon={<LockClosedIcon />}
            {...register('confirmPassword')}
          />
        </FormWrapper>
      </VStack>

      <Button
        type="submit"
        size="lg"
        variant="white"
        w="17.7rem"
        p="1rem"
        mt="17.7rem"
        mx="auto"
        isDisabled={isLoadingSignInButton || !isValid}
        rightIcon={
          <CircleIcon boxSize="3.9rem" bg="red.danger_50" color="greyscale.0">
            {isLoadingSignInButton ? (
              <Spinner color="#fff" fontSize={20} />
            ) : (
              <ArrowRightMediumIcon />
            )}
          </CircleIcon>
        }
      >
        <Text as="span" textStyle="action3" color="text.footnote" w="full" align="center">
          Entrar
        </Text>
      </Button>
    </>
  );
};
