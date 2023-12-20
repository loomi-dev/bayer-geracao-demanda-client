import { Badge, Box, Divider, Flex, HStack, Text } from '@chakra-ui/react';

import { EmailIcon, PhoneIcon } from '@/components';

type SupplierCardProps = {
  name: string;
  region: string;
  phone: string;
  email: string;
};
export const SupplierCard = ({ name, region, phone, email }: SupplierCardProps) => (
  <Flex
    bgColor="surface.secondary"
    borderRadius="1.6rem"
    gap="1.2rem"
    py="1.6rem"
    px="2.4rem"
    w="33rem"
    h="18rem"
    flexDir="column"
  >
    <Text textStyle="body1">{name}</Text>
    <Box>
      <Badge px="0.5rem" py="0.3rem" border="none" textAlign="center" variant="filled_primary">
        {region}
      </Badge>
    </Box>
    <Divider borderColor="surface.disabled" />
    <HStack color="greyscale.650">
      <PhoneIcon />
      <Text textStyle="body3">{phone}</Text>
    </HStack>
    <HStack color="greyscale.650">
      <EmailIcon />
      <Text textStyle="body3">{email}</Text>
    </HStack>
  </Flex>
);
