import { Box, HStack, Text } from '@chakra-ui/react';

import { useGetExampleReceipts } from '@/api';
import { DocumentIcon, ImageIcon, InboxIcon, UserGroupIcon } from '@/components';

import { HowToProveCard } from './HowToProveCard';

const items = [
  { icon: <InboxIcon width={21} height={21} />, text: 'Nota fiscal', id: '1' },
  { icon: <ImageIcon width={21} height={21} color="white" />, text: 'Fotos', id: '2' },
  { icon: <DocumentIcon width={21} height={21} />, text: 'Documentos', id: '3' },
  {
    icon: <UserGroupIcon width={21} height={21} color="white" />,
    text: 'Lista de presença',
    id: '4',
  },
];

export const HowToProveSection = () => {
  const { data } = useGetExampleReceipts();

  return (
    <Box>
      <Text
        textTransform="uppercase"
        textStyle="footnote-bold"
        lineHeight="1.8rem"
        color="greyscale.800"
      >
        Não sabe como comprovar?
      </Text>
      <HStack spacing="1.2rem" mt="1.2rem">
        {data?.data.map((receipt, index) => {
          const item = items[index];

          return <HowToProveCard key={item.id} {...item} documents={receipt.documents} />;
        })}
      </HStack>
    </Box>
  );
};
