import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import { DownloadIcon } from '@/components';

type TrousseauDownloadOption = {
  name: string;
  description: string;
  downloadUrl?: string;
  imageUrl?: string;
};
export const TrousseauDownloadOption = ({ name, description, downloadUrl, imageUrl }) => (
  <Flex
    w="100%"
    borderRadius="1.6rem"
    border="1px solid"
    justify="space-between"
    borderColor="opacity.black.0.10"
    p="0.8rem"
  >
    <HStack gap="1.6rem">
      <Image alt="Opção de download do enxoval" src={imageUrl} width={55} height={55} />
      <VStack align="flex-start" gap="0rem">
        <Text textStyle="caption2">{name}</Text>
        <Text textStyle="footnote">{description}</Text>
      </VStack>
    </HStack>
    <HStack gap="1rem" _hover={{ opacity: '0.7', cursor: 'pointer' }} color="red.danger_50">
      <Text textStyle="footnote">Download</Text>
      <DownloadIcon />
    </HStack>
  </Flex>
);
