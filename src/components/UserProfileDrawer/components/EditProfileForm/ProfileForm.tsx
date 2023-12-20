import { VStack } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { TextInput, PersonIcon, EmailIcon, PhoneIcon, HouseIcon, FormWrapper } from '@/components';
import { Mask } from '@/utils';

import { EditProfileFormSchemaType } from './EditProfileForm.schemas';

export const ProfileForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<EditProfileFormSchemaType>();

  return (
    <VStack w="100%" align="start" gap="1.2rem" mt="1.2rem">
      <FormWrapper error={errors.name}>
        <TextInput
          size="xl"
          placeholder="Seu nome"
          leftIcon={<PersonIcon />}
          borderRadius="2.1rem"
          {...register('name')}
        />
      </FormWrapper>
      <FormWrapper error={errors.email}>
        <TextInput
          size="xl"
          placeholder="E-mail"
          leftIcon={<EmailIcon />}
          borderRadius="2.1rem"
          {...register('email')}
        />
      </FormWrapper>
      <FormWrapper error={errors.phoneNumber}>
        <TextInput
          mask={Mask.formatPhone}
          size="xl"
          placeholder="Telefone"
          leftIcon={<PhoneIcon />}
          borderRadius="2.1rem"
          {...register('phoneNumber')}
        />
      </FormWrapper>
      <FormWrapper error={errors.company_position}>
        <TextInput
          size="xl"
          placeholder="Seu cargo na sua empresa"
          leftIcon={<HouseIcon />}
          borderRadius="2.1rem"
          {...register('company_position')}
        />
      </FormWrapper>
    </VStack>
  );
};
