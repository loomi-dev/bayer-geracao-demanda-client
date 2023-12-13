import { Box, HStack, Text } from '@chakra-ui/react';

import { DocumentIcon, ImageIcon, InboxIcon, UserGroupIcon } from '@/components';
import { useGetExampleReceipts } from '@/modules/receipts/api';

import { HowToProveCard } from '../HowToProveCard';

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

export const HowToProve = () => {
  const { data } = useGetExampleReceipts();

  return (
    <Box mt="4rem">
      <Text
        textTransform="uppercase"
        textStyle="footnote-bold"
        lineHeight="1.8rem"
        color="greyscale.800"
      >
        Não sabe como comprovar?
      </Text>
      <HStack spacing="1.2rem" mt="1.2rem">
        {items.map((item) => (
          <HowToProveCard key={item.id} {...item} />
        ))}
      </HStack>
    </Box>
  );
};
