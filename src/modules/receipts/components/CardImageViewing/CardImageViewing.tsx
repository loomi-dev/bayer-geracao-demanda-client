import { Box, IconButton, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Close2Icon } from '@/components';

type CardImageViewingProps = {
  file: File;
  handleRemoveFile?: () => void;
};
export const CardImageViewing = ({ file, handleRemoveFile }: CardImageViewingProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file || imageUrl) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);

    return () => {
      imageUrl && URL.revokeObjectURL(imageUrl);
    };
  }, [file, imageUrl]);

  return (
    <Box position="relative" minW="10rem">
      <IconButton
        aria-label="close-icon"
        h="unset"
        bg="none"
        p={0}
        position="absolute"
        zIndex={10}
        right="0.4rem"
        top="0.4rem"
        icon={<Close2Icon />}
        onClick={handleRemoveFile}
      />
      {imageUrl && (
        <Image src={imageUrl} borderRadius="1rem" alt="image" boxSize="10rem" objectFit="cover" />
      )}
      <Text textStyle="footnote-bold-2" color="greyscale.700" mt="0.5rem">
        {'19 de Jan 2023'}
      </Text>
    </Box>
  );
};
