import { Button, Flex, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Mask } from '@/utils';

import { ProfileDrawerFooter } from '../ProfileDrawer';
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
    <Flex as="form" w="100%" h="100%" flexDir="column" justify="space-between">
      <Flex
        py="2rem"
        px="2.4rem"
        borderRadius="3rem"
        flexDir="column"
        align="flex-start"
        layerStyle="card"
        my="1.6rem"
        mx="2.4rem"
      >
        <Text textStyle="footnote-bold" textTransform="uppercase">
          informações pessoais
        </Text>
        <ProfileImage>
          <Button onClick={onEdit} w="18rem" size="md">
            Editar perfil
          </Button>
        </ProfileImage>
        <ProfileInformationFieldContainer>
          <ProfileInformationField label="Nome" value={user?.username ?? ''} />
          <ProfileInformationField label="E-mail" value={user?.email} />
        </ProfileInformationFieldContainer>
        <ProfileInformationFieldContainer>
          <ProfileInformationField
            label="Telefone"
            value={user?.phoneNumber}
            mask={Mask.formatPhone}
          />
          <ProfileInformationField label="Cargo na sua empresa" value={user?.company_position} />
        </ProfileInformationFieldContainer>
        <ProfileInformationFieldContainer border="initial">
          <ProfileInformationField label="cnpj" value={user?.company_identifier} />
        </ProfileInformationFieldContainer>
      </Flex>
      <ProfileDrawerFooter />
    </Flex>
  );
};
