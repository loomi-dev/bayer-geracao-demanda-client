import { Button } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { ProfileImage } from '../ProfileImage';

import { ProfileInformationField } from './ProfileInformationField';
import { ProfileInformationFieldContainer } from './ProfileInformationFieldContainer';

type ProfileDetailProps = {
  onEdit: () => void;
};
export const ProfileDetails = ({ onEdit }: ProfileDetailProps) => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <>
      <ProfileImage>
        <Button onClick={onEdit} w="18rem" size="md">
          Editar perfil
        </Button>
      </ProfileImage>
      <ProfileInformationFieldContainer>
        <ProfileInformationField label="Nome" value={user?.name ?? ''} />
        <ProfileInformationField label="E-mail" value={user?.email} />
      </ProfileInformationFieldContainer>
      <ProfileInformationFieldContainer>
        <ProfileInformationField label="Telefone" value={user?.phoneNumber} />
        <ProfileInformationField
          label="Cargo na sua empresa"
          value={user?.farmer?.company_position}
        />
      </ProfileInformationFieldContainer>
      <ProfileInformationFieldContainer border="initial">
        <ProfileInformationField label="cnpj" value={user?.farmer?.company_identifier} />
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
};
