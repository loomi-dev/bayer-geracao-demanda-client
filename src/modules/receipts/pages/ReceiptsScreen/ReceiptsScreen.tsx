import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { ImageViewing, MultipleFileInput } from '../../components';

export const ReceiptsScreen = () => {
  const { control, watch } = useForm();

  const fieldArray = useFieldArray({
    control,
    name: 'files',
  });

  const { remove } = fieldArray;

  const handleRemoveFile = (index: number) => {
    remove(index);
  };

  return (
    <>
      <MultipleFileInput
        fieldArray={fieldArray}
        dropZoneOptions={{
          accept: {
            'image/png': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp', '.ico'],
          },
        }}
      />

      <ImageViewing files={watch('files')} handleRemoveFile={handleRemoveFile} />
    </>
  );
};
