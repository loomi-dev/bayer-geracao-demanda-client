import { HStack } from '@chakra-ui/react';

import { CardImageViewing } from '../CardImageViewing';

type ImageListingProps = {
  files: Array<{
    file: File;
    id: string;
  }>;
  handleRemoveFile: (index: number) => void;
};

export const ImageListing = ({ files, handleRemoveFile }: ImageListingProps) => (
  <HStack
    overflowX="auto"
    p="0.8rem"
    borderRadius="1.6rem"
    bg="greyscale.225"
    w="100%"
    h="14.5rem"
    spacing="0.8rem"
  >
    {files?.map(({ file, id }, index) => (
      <CardImageViewing key={id} file={file} handleRemoveFile={() => handleRemoveFile(index)} />
    ))}
  </HStack>
);
