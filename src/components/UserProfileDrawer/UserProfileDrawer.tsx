import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

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
export const UserProfileDrawer = ({ isOpen, onClose }: UserProfileDrawerProps) => {
  const session = useSession();
  const user = session.data?.user;
  return (
    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <ProfileDrawerHeader onClose={onClose} />
        <ProfileDrawerBody>
          <ProfileDetails user={user} />
        </ProfileDrawerBody>
        <ProfileDrawerFooter />
      </DrawerContent>
    </Drawer>
  );
};
