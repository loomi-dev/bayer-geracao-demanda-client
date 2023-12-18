import { Flex, Text } from '@chakra-ui/react';

type ProfileInformationProps = {
  label: string;
  value?: string;
};
export const ProfileInformation = ({ label, value }: ProfileInformationProps) => (
  <Flex flexDir="column" align="start" w="45%" minW="25rem">
    <Text textTransform="uppercase" textStyle="footnote-bold" color="text.footnote">
      {label}
    </Text>
    <Text fontSize="2.2rem" maxW="95%">
      {value}aaaaaaaaaaaa
    </Text>
  </Flex>
);
