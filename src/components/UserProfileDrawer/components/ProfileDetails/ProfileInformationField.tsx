import { Flex, Text } from '@chakra-ui/react';

type ProfileInformationFieldProps = {
  label: string;
  value?: string;
};
export const ProfileInformationField = ({ label, value }: ProfileInformationFieldProps) => (
  <Flex flexDir="column" align="start" w="45%" minW="25rem">
    <Text textTransform="uppercase" textStyle="footnote-bold" color="text.footnote">
      {label}
    </Text>
    <Text fontSize="2.2rem" maxW="95%">
      {value}
    </Text>
  </Flex>
);
