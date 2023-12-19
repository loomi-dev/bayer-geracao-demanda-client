import { Button } from '@chakra-ui/react';
import { User } from 'next-auth';

import { ProfileImage } from './ProfileImage';
import { ProfileInformationField } from './ProfileInformationField';
import { ProfileInformationFieldContainer } from './ProfileInformationFieldContainer';

type ProfileDetailsProps = {
  user?: User;
};
export const ProfileDetails = ({ user }: ProfileDetailsProps) => (
  <>
    <ProfileImage />
    <ProfileInformationFieldContainer>
      <ProfileInformationField label="Nome" value={user?.name ?? ''} />
      <ProfileInformationField label="E-mail" value={user?.email} />
    </ProfileInformationFieldContainer>
    <ProfileInformationFieldContainer>
      <ProfileInformationField label="Telefone" value={user?.phone} />
      <ProfileInformationField label="Cargo na sua empresa" value={user?.company_position} />
    </ProfileInformationFieldContainer>
    <ProfileInformationFieldContainer border="initial">
      <ProfileInformationField label="cnpj" value={user?.company_identifier} />
    </ProfileInformationFieldContainer>
    <Button
      w="100%"
      lineHeight="1.8rem"
      size="sm"
      variant="third"
      textStyle="action2"
      textColor="greyscale.900"
      fontWeight="bold"
      _hover={{ opacity: '0.7' }}
      mt="2rem"
    >
      Alterar minha senha
    </Button>
  </>
);
