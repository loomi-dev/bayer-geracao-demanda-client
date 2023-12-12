import { Badge, Box, Divider, Flex, HStack, Text } from '@chakra-ui/react';

import { EmailIcon, PhoneIcon } from '@/components';

export const SupplierCard = () => (
  <Flex
    bgColor="surface.secondary"
    borderRadius="1.6rem"
    gap="1.2rem"
    py="1.6rem"
    px="2.4rem"
    w="33rem"
    flexDir="column"
  >
    <Text textStyle="body1">Bonés Agro</Text>
    <Box>
      <Badge px="0.5rem" py="0.3rem" border="none" textAlign="center" variant="filled_primary">
        Nome da regiao
      </Badge>
    </Box>
    <Divider borderColor="surface.disabled" />
    <HStack color="greyscale.650">
      <PhoneIcon />
      <Text textStyle="body3">(81) 9 92919-2919</Text>
    </HStack>
    <HStack color="greyscale.650">
      <EmailIcon />
      <Text textStyle="body3">bonesagro@gmail.com</Text>
    </HStack>
  </Flex>
);
