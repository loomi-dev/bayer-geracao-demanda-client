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
import { Fragment } from 'react';

import { Avatar, CircleChevronDownIcon, LogoutIcon, UserIcon } from '@/components';

type UserMenuProps = {
  handleOpenUserProfile: () => void;
};
export const UserMenu = ({ handleOpenUserProfile }: UserMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const session = useSession();

  const isLoadingSession = session.status === 'loading';
  const username = session.data?.user.username;

  const menuItem = [
    { icon: <UserIcon />, onClick: handleOpenUserProfile, label: 'Meu perfil' },
    { icon: <LogoutIcon />, onClick: signOut, label: 'Sair da plataforma' },
  ];
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
              borderColor="greyscale.150"
              boxShadow="card"
              bg="surface.primary"
              p="1.6rem"
              mt="1.4rem"
            >
              {menuItem.map((item, index, array) => (
                <Fragment key={item.label}>
                  <MenuItem
                    _hover={{ opacity: '0.7' }}
                    bg="surface.primary"
                    color="text.footnote"
                    onClick={() => item.onClick()}
                  >
                    {item.icon}
                    <Text textStyle="footnote">{item.label}</Text>
                  </MenuItem>
                  {index < array.length - 1 && (
                    <Divider w="full" borderColor="greyscale.150" my="1rem" />
                  )}
                </Fragment>
              ))}
            </MenuList>
          </Menu>
        )}
      </HStack>
    </Flex>
  );
};
