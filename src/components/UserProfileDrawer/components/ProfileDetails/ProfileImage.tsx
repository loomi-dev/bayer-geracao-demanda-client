import { Button, VStack } from '@chakra-ui/react';

import { Avatar } from '@/components';

export const ProfileImage = () => (
  <VStack
    borderBottom="1px solid"
    borderBottomColor="greyscale.600"
    gap="1.2rem"
    align="center"
    w="100%"
    pb="1.2rem"
  >
    <Avatar imageFallbackSize={70} bg="white" p="3rem" />
    <Button w="18rem" size="md">
      Editar perfil
    </Button>
  </VStack>
);
