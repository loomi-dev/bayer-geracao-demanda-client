import { Box, BoxProps, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi';

type AvatarProps = {
  url?: string;
  imageFallbackSize?: number;
} & BoxProps;

export const Avatar = ({ url = '', imageFallbackSize = 20, ...props }: AvatarProps) => {
  const hasImage = Boolean(url);
  return hasImage ? (
    <Box position="relative" rounded="full" {...props}>
      <Image src={url} fill alt="Imagem do perfil do usuario" quality={100} />
    </Box>
  ) : (
    <Flex rounded="full" align="center" justifyContent="center" {...props}>
      <BiUser fontSize={imageFallbackSize} />
    </Flex>
  );
};
