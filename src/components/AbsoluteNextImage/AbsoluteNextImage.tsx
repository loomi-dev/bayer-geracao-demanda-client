import { Box, BoxProps } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

export type AbsoluteNextImageProps = {
  containerProps?: BoxProps;
} & ImageProps;

export const AbsoluteNextImage = ({ containerProps, alt, ...rest }: AbsoluteNextImageProps) => (
  <Box position="absolute" {...containerProps}>
    <Image alt={alt} {...rest} />
    {containerProps?.children}
  </Box>
);
