import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const TrousseauImage = () => (
  <Box position="relative" borderRadius="2rem" borderColor="opacity.black.0.10" boxSize="20rem">
    <Image
      alt="Imagem de enxoval"
      src="https://images.dog.ceo/breeds/terrier-cairn/n02096177_2935.jpg"
      fill
      style={{ borderColor: 'inherit', borderRadius: 'inherit' }}
    />
  </Box>
);
