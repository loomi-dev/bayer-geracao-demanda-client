import { Box, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

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
    <Box position="relative" onClick={handleRemoveFile} minW="10rem">
      {imageUrl && <Image src={imageUrl} alt="image" boxSize="10rem" objectFit="cover" />}
    </Box>
  );
};
