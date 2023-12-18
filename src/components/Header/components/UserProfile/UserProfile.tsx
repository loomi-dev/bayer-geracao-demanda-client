import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';

type UserProfileProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const UserProfile = ({ isOpen, onClose }: UserProfileProps) => (
  <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerBody />
    </DrawerContent>
  </Drawer>
);
