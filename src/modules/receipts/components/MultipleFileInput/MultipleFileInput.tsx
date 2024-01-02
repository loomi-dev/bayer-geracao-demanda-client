import { Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { UseFieldArrayReturn } from 'react-hook-form';
import { v4 } from 'uuid';

import { UploadIcon } from '@/components';
import { acceptStyle, baseStyle, focusedStyle, rejectStyle } from '@/styles/theme/externals';

export type MultipleFileInputProps = {
  multiple?: boolean;
  dropZoneOptions?: DropzoneOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fieldArray: UseFieldArrayReturn<any, any, any>;
};

export type SelectedFile = { id?: string; file?: File };

export const MultipleFileInput = ({
  multiple = true,
  dropZoneOptions = {},
  fieldArray,
}: MultipleFileInputProps) => {
  const { append, update } = fieldArray;

  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone(dropZoneOptions);

  const style = {
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
  };

  useEffect(() => {
    if (multiple) {
      acceptedFiles.forEach((file) => {
        file &&
          append({
            file,
            id: v4(),
          });
      });
    } else {
      const file = acceptedFiles.at(0);
      file &&
        update(0, {
          file,
          id: v4(),
        });
    }
  }, [acceptedFiles, append, update, multiple]);

  return (
    <VStack
      flexDirection="column"
      position="relative"
      w="100%"
      h="12rem"
      {...getRootProps({
        className: 'dropzone',
        style,
      })}
      spacing="1rem"
      color="red.danger_50"
      cursor="pointer"
    >
      <UploadIcon />
      <Text textStyle="footnote-400-2" maxW="25rem" textAlign="center">
        <Text textStyle="footnote-700" as="a" cursor="pointer" textDecor="underline">
          Clique aqui
        </Text>{' '}
        ou arraste as fotos para inserir as evidências da ação
      </Text>
      <input {...getInputProps()} />
    </VStack>
  );
};
