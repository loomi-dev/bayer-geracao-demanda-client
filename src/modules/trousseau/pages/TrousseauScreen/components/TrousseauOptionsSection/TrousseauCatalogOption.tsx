import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { DownloadIcon } from '@/components';

type TrousseauCatalogOptionProps = {
  name: string;
  description: string;
  downloadUrl: string;
  imageUrl: string;
  filename?: string;
};
export const TrousseauCatalogOption = ({
  name,
  description,
  filename,
  downloadUrl,
  imageUrl,
}: TrousseauCatalogOptionProps) => (
  <Flex
    w="100%"
    borderRadius="1.6rem"
    border="1px solid"
    justify="space-between"
    align="center"
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
    <Link href={downloadUrl} download={filename}>
      <HStack gap="1rem" _hover={{ opacity: '0.7', cursor: 'pointer' }} color="red.danger_50">
        <Text textStyle="footnote">Download</Text>
        <DownloadIcon />
      </HStack>
    </Link>
  </Flex>
);
