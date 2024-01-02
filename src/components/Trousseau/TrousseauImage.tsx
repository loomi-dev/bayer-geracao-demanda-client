import { Box, BoxProps } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

type TrousseauImageProps = {
  src: string;
  imageProps?: ImageProps;
} & BoxProps;

export const TrousseauImage = ({ src, imageProps, ...restProps }: TrousseauImageProps) => (
  <Box
    position="relative"
    borderRadius="2rem"
    border="1px solid"
    borderColor="opacity.black.0.10"
    boxSize="20rem"
    overflow="hidden"
    {...restProps}
  >
    <Image
      alt="Imagem de enxoval"
      src={src}
      fill
      priority
      quality={100}
      style={{ objectFit: 'contain', userSelect: 'none' }}
      {...imageProps}
    />
  </Box>
);
