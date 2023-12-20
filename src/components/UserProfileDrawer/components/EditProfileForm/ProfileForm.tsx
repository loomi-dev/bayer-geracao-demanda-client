import { VStack } from '@chakra-ui/react';

import { TextInput, PersonIcon, EmailIcon, PhoneIcon, HouseIcon } from '@/components';

export const ProfileForm = () => (
  <VStack w="100%" align="start" gap="1.2rem" mt="1.2rem">
    <TextInput size="xl" placeholder="Seu nome" leftIcon={<PersonIcon />} borderRadius="2.1rem" />
    <TextInput size="xl" placeholder="E-mail" leftIcon={<EmailIcon />} borderRadius="2.1rem" />
    <TextInput size="xl" placeholder="Telefone" leftIcon={<PhoneIcon />} borderRadius="2.1rem" />
    <TextInput
      size="xl"
      placeholder="Seu cargo na sua empresa"
      leftIcon={<HouseIcon />}
      borderRadius="2.1rem"
    />
  </VStack>
);
