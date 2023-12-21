import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { useState } from 'react';

import { EditProfileForm, ProfileDetails, ProfileDrawerHeader } from './components';

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

  const setEditModeOn = () => setMode(ProfileMode.EDIT);
  const setEditModeOff = () => setMode(ProfileMode.PREVIEW);

  return (
    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <ProfileDrawerHeader onClose={onClose} />
        <DrawerBody p="initial">
          {mode === ProfileMode.PREVIEW && <ProfileDetails onEdit={setEditModeOn} />}
          {mode === ProfileMode.EDIT && <EditProfileForm onCancel={setEditModeOff} />}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
