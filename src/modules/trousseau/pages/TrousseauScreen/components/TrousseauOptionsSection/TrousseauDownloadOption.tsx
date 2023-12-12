import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import { DownloadIcon } from '@/components';

export const TrousseauDownloadOption = () => (
  <Flex
    w="100%"
    borderRadius="1.6rem"
    border="1px solid"
    justify="space-between"
    borderColor="opacity.black.0.10"
    p="0.8rem"
  >
    <HStack gap="1.6rem">
      <Image
        alt="Opção de download do enxoval"
        src="https://images.dog.ceo/breeds/terrier-cairn/n02096177_2935.jpg"
        width={55}
        height={55}
      />
      <VStack align="flex-start" gap="0rem">
        <Text textStyle="caption2">Kit marca bayer</Text>
        <Text textStyle="footnote">Logos coloridas, preto e branco</Text>
      </VStack>
    </HStack>
    <HStack gap="1rem" _hover={{ opacity: '0.7', cursor: 'pointer' }} color="red.danger_50">
      <Text textStyle="footnote">Download</Text>
      <DownloadIcon />
    </HStack>
  </Flex>
);
