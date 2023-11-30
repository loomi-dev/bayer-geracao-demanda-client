import { Box, HStack, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useUpdateUser } from '@/api';
import { ArrowRightSmallIcon } from '@/components';

import { RegisterFormSchemaType, registerFormSchema } from './registerFormTabs.schemas';

const DynamicAccountDataForm = dynamic(async () => {
  const { AccountDataForm } = await import('./AccountDataForm');

  return AccountDataForm;
});

const DynamicCreatePasswordForm = dynamic(async () => {
  const { CreatePasswordForm } = await import('./CreatePasswordForm');

  return CreatePasswordForm;
});

export const RegisterFormTabs = () => {
  const session = useSession();

  const [currentTabForm, setCurrentTabForm] = useState(0);
  const userId = session.data?.user.id as number;

  const { mutate: updateUser, isLoading: isUpdatingUser } = useUpdateUser();

  const methods = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(registerFormSchema),
  });

  const { handleSubmit } = methods;

  const onSubmitAccountDataForm = (data: RegisterFormSchemaType) => {
    updateUser({
      name: data.name,
      email: data.email,
      companyRole: data.role,
      id: userId,
      confirmed: true,
    });
  };

  return (
    <Box
      as="form"
      maxW="48.4rem"
      w="full"
      mt="9rem"
      onSubmit={handleSubmit(onSubmitAccountDataForm)}
    >
      <HStack justify="center" spacing="2rem">
        <Text
          textStyle="action4"
          color={currentTabForm === 0 ? 'border.brand' : 'text.disabled'}
          cursor="pointer"
          onClick={() => setCurrentTabForm(0)}
        >
          <Text as="span" mr="1.2rem">
            01
          </Text>{' '}
          Dados da conta
        </Text>

        <ArrowRightSmallIcon />

        <Text
          textStyle="action4"
          color={currentTabForm === 1 ? 'border.brand' : 'text.disabled'}
          cursor="pointer"
          onClick={() => setCurrentTabForm(1)}
        >
          <Text as="span" mr="1.2rem">
            02
          </Text>{' '}
          Senha
        </Text>
      </HStack>

      <FormProvider {...methods}>
        {currentTabForm === 0 && <DynamicAccountDataForm />}
        {currentTabForm === 1 && (
          <DynamicCreatePasswordForm isLoadingSignInButton={isUpdatingUser} />
        )}
      </FormProvider>
    </Box>
  );
};
