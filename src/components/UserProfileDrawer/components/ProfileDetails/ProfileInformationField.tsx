import { Flex, Text } from '@chakra-ui/react';

import { MaskType } from '@/utils';

type ProfileInformationFieldProps = {
  label: string;
  value?: string;
  mask?: (value: string, maskType?: MaskType) => string;
};
export const ProfileInformationField = ({ label, value, mask }: ProfileInformationFieldProps) => (
  <Flex flexDir="column" align="start" w="45%" minW="25rem">
    <Text textTransform="uppercase" textStyle="footnote-bold" color="text.footnote">
      {label}
    </Text>
    <Text fontSize="2.2rem" maxW="95%">
      {mask ? mask(value ?? '') : value}
    </Text>
  </Flex>
);
