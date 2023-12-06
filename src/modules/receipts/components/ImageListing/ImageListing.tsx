import { HStack } from '@chakra-ui/react';

import { scrollbarStyle } from '@/styles/theme/components';

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
    bg="gray"
    w="100%"
    h="13.2rem"
    spacing="0.8rem"
    sx={{ ...scrollbarStyle }}
  >
    {files?.map(({ file, id }, index) => (
      <CardImageViewing key={id} file={file} handleRemoveFile={() => handleRemoveFile(index)} />
    ))}
  </HStack>
);
