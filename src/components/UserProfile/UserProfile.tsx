import {
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';

import { Avatar } from '../Avatar';
import { ChevronDownIcon } from '../icons';

export const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const session = useSession();

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
        <Text textStyle={{ lg: 'body2', xl: 'body1' }} color="text.primary">
          Olá, {username}
        </Text>
        <Menu placement="bottom" isOpen={isOpen} onClose={onClose}>
          <MenuButton onClick={onOpen}>
            <HStack gap="1rem">
              <Text
                textStyle="footnote"
                color="text.footnote"
                fontSize={{ lg: '1rem', xl: '1.2rem' }}
              >
                Opções
              </Text>
              <ChevronDownIcon width="2rem" height="2rem" />
            </HStack>
          </MenuButton>
          <MenuList bg="surface.primary" shadow="none">
            <MenuItem
              _hover={{ opacity: '0.7' }}
              bg="surface.primary"
              color="text.primary"
              onClick={() => signOut()}
            >
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};
