import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import {
  EditProfileForm,
  ProfileDetails,
  ProfileDrawerBody,
  ProfileDrawerFooter,
  ProfileDrawerHeader,
} from './components';

type UserProfileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

enum ProfileMode {
  'EDIT' = 'edit',
  'PREVIEW' = 'preview',
}
export const UserProfileDrawer = ({ isOpen, onClose }: UserProfileDrawerProps) => {
  const session = useSession();
  const [mode, setMode] = useState<ProfileMode>(ProfileMode.PREVIEW);

  const user = session.data?.user;

  return (
    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <ProfileDrawerHeader onClose={onClose} />
        <ProfileDrawerBody>
          {mode === ProfileMode.PREVIEW && <ProfileDetails user={user} />}
          {mode === ProfileMode.EDIT && <EditProfileForm />}
        </ProfileDrawerBody>
        <ProfileDrawerFooter />
      </DrawerContent>
    </Drawer>
  );
};
