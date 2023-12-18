import { Box, DrawerHeader, HStack, Text } from '@chakra-ui/react';

import { CloseIcon, CircleIcon, PersonIcon } from '@/components';

type UserProfileProps = {
  onClose: () => void;
};
export const UserProfileHeader = ({ onClose }: UserProfileProps) => (
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
);
