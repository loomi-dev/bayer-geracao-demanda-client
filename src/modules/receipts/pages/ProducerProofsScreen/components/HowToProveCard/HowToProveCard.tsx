import { HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { GetExampleReceiptsResponse } from '@/api';
import { CircleIcon } from '@/components';

import { downloadFile } from './helper';

export type HowToProveCardProps = {
  icon: ReactNode;
  text: string;
  documents: GetExampleReceiptsResponse['data'][0]['documents'];
};

export const HowToProveCard = ({ icon, text, documents }: HowToProveCardProps) => {
  const handleDownloadDocuments = () => {
    documents.forEach(({ url, name }) => {
      downloadFile(url, name);
    });
  };

  return (
    <HStack
      layerStyle="card"
      p="1rem"
      h="6.1rem"
      as="button"
      minW="19rem"
      spacing="0.9rem"
      borderRadius="3rem"
      onClick={handleDownloadDocuments}
    >
      <CircleIcon boxSize={{ lg: '3.1rem', xl: '4.1rem' }}>{icon}</CircleIcon>
      <Text textStyle="body2" fontWeight="400" color="black.1000">
        {text}
      </Text>
    </HStack>
  );
};
