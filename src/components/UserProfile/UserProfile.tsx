import {
  Divider,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';

import { Avatar } from '../Avatar';
import { CircleChevronDownIcon, LogoutIcon, UserIcon } from '../icons';

export const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const session = useSession();

  const isLoadingSession = session.status === 'loading';
  const username = session.data?.user.username;

  return (
    <Flex gap="1.8rem" align="center" justify="center">
      <Avatar
        layerStyle="card"
        boxSize={{ lg: '4.8rem', xl: '5.5rem' }}
        imageFallbackSize={30}
        bg="white"
      />
      <HStack gap="1rem">
        {isLoadingSession ? (
          <Skeleton w="12rem" h="2.7rem" />
        ) : (
          <Text textStyle={{ lg: 'body2', xl: 'body1' }} color="text.primary">
            Olá, {username}
          </Text>
        )}

        {isLoadingSession ? (
          <Skeleton w="5rem" h="2.7rem" />
        ) : (
          <Menu placement="bottom-end" isOpen={isOpen} onClose={onClose}>
            <MenuButton onClick={onOpen}>
              <HStack gap="1rem">
                <Text
                  textStyle="footnote"
                  color="text.footnote"
                  fontSize={{ lg: '1rem', xl: '1.2rem' }}
                >
                  Opções
                </Text>
                <CircleChevronDownIcon width="2rem" height="2rem" />
              </HStack>
            </MenuButton>

            <MenuList
              w="24rem"
              borderRadius="1.6rem"
              border="1px solid"
              borderColor="greyscale.150"
              boxShadow="card"
              bg="surface.primary"
              p="1.6rem"
              mt="1.4rem"
            >
              <MenuItem
                hidden
                _hover={{ opacity: '0.7' }}
                bg="surface.primary"
                color="text.footnote"
                gap="1rem"
              >
                <UserIcon />
                <Text textStyle="footnote">Meu perfil</Text>
              </MenuItem>

              <Divider w="full" borderColor="greyscale.150" my="1rem" hidden />

              <MenuItem
                bg="surface.primary"
                onClick={() => signOut()}
                color="text.footnote"
                gap="1rem"
                _hover={{ opacity: '0.7' }}
              >
                <LogoutIcon />
                <Text textStyle="footnote">Sair da plataforma</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </HStack>
    </Flex>
  );
};
