import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
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
  const [mode, setMode] = useState<ProfileMode>(ProfileMode.PREVIEW);
  return (
    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <ProfileDrawerHeader onClose={onClose} />
        <ProfileDrawerBody>
          {mode === ProfileMode.PREVIEW && <ProfileDetails />}
          {mode === ProfileMode.EDIT && <EditProfileForm />}
        </ProfileDrawerBody>
        <ProfileDrawerFooter />
      </DrawerContent>
    </Drawer>
  );
};
