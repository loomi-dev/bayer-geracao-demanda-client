import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { ProfileImage } from './ProfileImage';
import { ProfileInformation } from './ProfileInformation';
import { ProfileInformationContainer } from './ProfileInformationContainer';
import { UserProfileFooter } from './UserProfileFooter';
import { UserProfileHeader } from './UserProfileHeader';

type UserProfileProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const UserProfile = ({ isOpen, onClose }: UserProfileProps) => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <UserProfileHeader onClose={onClose} />
        <DrawerBody>
          <Flex
            py="2rem"
            px="2.4rem"
            borderRadius="3rem"
            flexDir="column"
            align="flex-start"
            layerStyle="card"
          >
            <Text textStyle="footnote-bold" textTransform="uppercase">
              informações pessoais
            </Text>
            <ProfileImage />
            <ProfileInformationContainer>
              <ProfileInformation label="Nome" value={user?.name ?? ''} />
              <ProfileInformation label="E-mail" value={user?.email} />
            </ProfileInformationContainer>
            <ProfileInformationContainer>
              <ProfileInformation label="Telefone" value={user?.phone} />
              <ProfileInformation label="Cargo na sua empresa" value={user?.company_position} />
            </ProfileInformationContainer>
            <ProfileInformationContainer border="initial">
              <ProfileInformation label="cnpj" value={user?.company_identifier} />
            </ProfileInformationContainer>
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
          </Flex>
        </DrawerBody>
        <UserProfileFooter />
      </DrawerContent>
    </Drawer>
  );
};
