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

import { Avatar } from '../Avatar';
import { ArrowDownIcon } from '../icons';

export const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex gap="1.8rem" align="center" justify="center">
      <Avatar layerStyle="card" boxSize="5.5rem" imageFallbackSize={30} bg="white" />
      <HStack gap="1rem">
        <Text textStyle="body1">Olá, Roberto</Text>
        <Menu placement="bottom" isOpen={isOpen} onClose={onClose}>
          <MenuButton onClick={onOpen}>
            <ArrowDownIcon width="2rem" height="2rem" />
          </MenuButton>
          <MenuList>
            <MenuItem>Sair</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};
