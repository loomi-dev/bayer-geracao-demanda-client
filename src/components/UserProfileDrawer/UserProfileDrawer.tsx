import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';

import {
  ProfileDetails,
  ProfileDrawerBody,
  ProfileDrawerFooter,
  ProfileDrawerHeader,
} from './components';

type UserProfileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const UserProfileDrawer = ({ isOpen, onClose }: UserProfileDrawerProps) => (
  <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <ProfileDrawerHeader onClose={onClose} />
      <ProfileDrawerBody>
        <ProfileDetails />
      </ProfileDrawerBody>
      <ProfileDrawerFooter />
    </DrawerContent>
  </Drawer>
);
