import { Box, VStack } from '@chakra-ui/react';
import { useFieldArray, useForm } from 'react-hook-form';

import { CustomAcordion, FormWrapper, Minus2Icon, TextInput } from '@/components';
import { ImageListing, MultipleFileInput } from '@/modules/receipts/components';

type ProveYourExpensesProps = {
  a?: any;
};

export const ProveYourExpenses = ({ a }: ProveYourExpensesProps) => {
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
    <CustomAcordion
      accordionProps={{ mt: '1rem' }}
      accordionIcon={<Minus2Icon />}
      accordionButtonProps={{
        children: (
          <Box as="span" flex="1" textAlign="left">
            Comprove seus gastos
          </Box>
        ),
      }}
    >
      <VStack spacing="2.4rem" w="100%" alignItems="flex-start">
        <FormWrapper label="Descreva seu gasto">
          <TextInput
            as="textarea"
            size="textarea"
            resize="none"
            borderRadius="1.6rem"
            p="1.6rem"
            // {...register('description')}
          />
        </FormWrapper>

        <MultipleFileInput
          fieldArray={fieldArray}
          dropZoneOptions={{
            accept: {
              'image/png': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp', '.ico'],
            },
          }}
        />
        <ImageListing files={watch('files')} handleRemoveFile={handleRemoveFile} />
      </VStack>
    </CustomAcordion>
  );
};
