import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
} from '@chakra-ui/react';

import { CircleIcon } from '@/components/CircleIcon';
import { CloseIcon, PersonIcon } from '@/components/icons';

type UserProfileProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const UserProfile = ({ isOpen, onClose }: UserProfileProps) => (
  <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDir="row"
        bg="surface.primary"
      >
        <HStack gap="1.6rem">
          <CircleIcon bg="surface.brand" boxSize="4.5rem" minW="initial">
            <PersonIcon color="white" />
          </CircleIcon>
          <Text textStyle="caption1" lineHeight="2.2rem">
            Meu perfil
          </Text>
        </HStack>
        <Box _hover={{ opacity: '0.7' }} onClick={onClose}>
          <CloseIcon color="black" />
        </Box>
      </DrawerHeader>
      <DrawerBody />
      <DrawerFooter px="2.4rem" py="1.6rem" h="8.4rem" />
    </DrawerContent>
  </Drawer>
);
