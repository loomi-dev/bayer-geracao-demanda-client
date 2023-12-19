import { Button, Drawer, DrawerContent, DrawerOverlay, HStack } from '@chakra-ui/react';
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

  const setEditModeOn = () => setMode(ProfileMode.EDIT);
  const setEditModeOff = () => setMode(ProfileMode.PREVIEW);

  return (
    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <ProfileDrawerHeader onClose={onClose} />
        <ProfileDrawerBody>
          {mode === ProfileMode.PREVIEW && <ProfileDetails onEdit={setEditModeOn} />}
          {mode === ProfileMode.EDIT && <EditProfileForm />}
        </ProfileDrawerBody>
        <ProfileDrawerFooter>
          {mode === ProfileMode.EDIT && (
            <HStack>
              <Button
                variant="sixth"
                bgColor="surface.secondary"
                minW="18rem"
                onClick={setEditModeOff}
              >
                Voltar
              </Button>
              <Button minW="18rem">Salvar Alterações</Button>
            </HStack>
          )}
        </ProfileDrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
