import { Text, VStack } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { UseFieldArrayReturn, FieldValues } from 'react-hook-form';
import { v4 } from 'uuid';

import { UploadIcon } from '@/components';

import { acceptStyle, baseStyle, focusedStyle, rejectStyle } from './styles';

export type MultipleFileInputProps = {
  multiple?: boolean;
  dropZoneOptions?: DropzoneOptions;
  fieldArray: UseFieldArrayReturn<FieldValues, any, any>;
};

export type SelectedFile = { id?: string; file?: File };

export const MultipleFileInput: React.FC<MultipleFileInputProps> = ({
  multiple = true,
  dropZoneOptions = {},
  fieldArray,
}) => {
  const { append, update } = fieldArray;

  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone(dropZoneOptions);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject, isFocused],
  );

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
        onClick: (event) => event.stopPropagation(),
        style,
      })}
      spacing="1rem"
    >
      <UploadIcon />
      <Text textStyle="action5" maxW="25rem" textAlign="center">
        <Text
          textStyle="action6"
          as="a"
          cursor="pointer"
          textDecor="underline"
          {...getRootProps({
            className: 'dropzone',
          })}
        >
          Clique aqui
          <input {...getInputProps()} />
        </Text>{' '}
        ou arraste as fotos para inserir as evidências da ação
      </Text>
    </VStack>
  );
};
