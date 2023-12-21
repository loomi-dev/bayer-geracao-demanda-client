import { Box, HStack, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { FormProvider, useForm } from 'react-hook-form';

import { useUpdateFarmer } from '@/api';
import { ArrowRightSmallIcon } from '@/components';

import { useRegisterFormTabs } from '../../stores';

import { AccountDataForm } from './AccountDataForm';
import { CreatePasswordForm } from './CreatePasswordForm';
import {
  RegisterFormSchemaType,
  accountDataFormSchema,
  registerFormSchema,
} from './registerFormTabs.schemas';

export const RegisterFormTabs = () => {
  const session = useSession();
  const farmerId = session.data?.user?.farmer?.id as number;

  const [agreePrivacyPolicies, currentTabForm, setCurrentTabForm] = useRegisterFormTabs((state) => [
    state.agreePrivacyPolicies,
    state.currentTabForm,
    state.setCurrentTabForm,
  ]);

  const { mutate: updateFarmer, isLoading: isUpdatingFarmer } = useUpdateFarmer();

  const methods = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(registerFormSchema),
    mode: 'all',
    criteriaMode: 'all',
  });

  const { handleSubmit, watch } = methods;

  const onSubmitAccountDataForm = (data: RegisterFormSchemaType) => {
    updateFarmer({
      farmerId,
      name: data.name,
      email: data.email,
      companyRole: data.role,
      number: data.phone,
      password: data.password,
      confirmPassword: data.confirmPassword,
      confirmed: true,
    });
  };

  const isValidAccountDataForm = accountDataFormSchema.safeParse({
    name: watch('name'),
    email: watch('email'),
    role: watch('role'),
  }).success;

  const allowedPasswordStep = isValidAccountDataForm && agreePrivacyPolicies;

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
          cursor={allowedPasswordStep ? 'pointer' : 'not-allowed'}
          {...(allowedPasswordStep && { onClick: () => setCurrentTabForm(1) })}
        >
          <Text as="span" mr="1.2rem">
            02
          </Text>{' '}
          Senha
        </Text>
      </HStack>

      <FormProvider {...methods}>
        {currentTabForm === 0 && <AccountDataForm />}
        {currentTabForm === 1 && <CreatePasswordForm isLoadingSignInButton={isUpdatingFarmer} />}
      </FormProvider>
    </Box>
  );
};
