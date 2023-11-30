import { Box, HStack, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ArrowRightSmallIcon } from '@/components';

import { AccountDataForm } from './AccountDataForm';
import { accountDataFormSchema } from './registerFormTabs.schemas';

export const RegisterFormTabs = () => {
  const methods = useForm({
    resolver: zodResolver(accountDataFormSchema),
  });

  return (
    <Box maxW="48.4rem" w="full" mt="9rem">
      <HStack justify="center" spacing="2rem">
        <Text textStyle="action4" color="border.brand">
          <Text as="span" mr="1.2rem">
            01
          </Text>{' '}
          Dados da conta
        </Text>

        <ArrowRightSmallIcon />

        <Text textStyle="action4" color="text.disabled">
          <Text as="span" mr="1.2rem">
            02
          </Text>{' '}
          Senha
        </Text>
      </HStack>

      <FormProvider {...methods}>
        <AccountDataForm />
      </FormProvider>
    </Box>
  );
};
