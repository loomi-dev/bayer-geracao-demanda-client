import { Box, VStack, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { CustomAcordion, FormWrapper, Minus2Icon, TextInput } from '@/components';
import { ImageListing, MultipleFileInput } from '@/modules/receipts/components';

import { DrawerExpenseReceiptFormSchemaType } from '../DrawerExpenseReceipt/DrawerExpenseReceipt.schema';

export const ProveYourExpenses = () => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext<DrawerExpenseReceiptFormSchemaType>();

  const fieldArray = useFieldArray({
    control,
    name: 'files',
  });

  const { remove } = fieldArray;

  const handleRemoveFile = (index: number) => {
    remove(index);
  };

  const toast = useToast();

  useEffect(() => {
    const filesErrorMessage = errors.files;

    if (filesErrorMessage) {
      toast({ description: filesErrorMessage.message, status: 'error', duration: 5000 });
    }
  }, [errors.files, toast]);

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
        <FormWrapper label="Descreva seu gasto" error={errors.description}>
          <TextInput
            as="textarea"
            size="textarea"
            resize="none"
            borderRadius="1.6rem"
            p="1.6rem"
            {...register('description')}
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
