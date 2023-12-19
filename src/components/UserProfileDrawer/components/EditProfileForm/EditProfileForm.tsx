import { Flex } from '@chakra-ui/react';

import { CircleIcon } from '@/components/CircleIcon';
import { EditIcon } from '@/components/icons';

import { ProfileImage } from '../ProfileImage';

import { ProfileForm } from './ProfileForm';

export const EditProfileForm = () => (
  <>
    <Flex w="100%" justify="center">
      <ProfileImage border="none" position="relative" w="fit-content">
        <CircleIcon position="absolute" bottom="1rem" right="0.5rem" boxSize="4rem">
          <EditIcon color="white" />
        </CircleIcon>
      </ProfileImage>
    </Flex>
    <ProfileForm />
  </>
);
