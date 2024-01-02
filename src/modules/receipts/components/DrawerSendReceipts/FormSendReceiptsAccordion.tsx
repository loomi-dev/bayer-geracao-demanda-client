import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Collapse,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { ExpandIcon, FormWrapper, Minus2Icon, TextInput } from '@/components';
import { ImageListing, MultipleFileInput } from '@/modules/receipts/components';

import { FormSendReceiptsSchemaType } from './FormSendReceiptsAccordion.schema';

export const FormSendReceiptsAccordion = () => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormSendReceiptsSchemaType>();

  const fieldArray = useFieldArray({
    control,
    name: 'files',
  });

  const { remove } = fieldArray;

  const files = watch('files');
  const hasFiles = files?.length > 0;

  const handleRemoveFile = (index: number) => {
    remove(index);
  };

  return (
    <Accordion allowToggle defaultIndex={[0]}>
      <AccordionItem>
        {({ isExpanded }) => (
          <Fragment>
            <h2>
              <AccordionButton _hover={{}}>
                <Box as="span" flex="1" textAlign="left">
                  Comprove seus gastos
                </Box>

                {isExpanded ? <Minus2Icon /> : <ExpandIcon />}
              </AccordionButton>
            </h2>

            <AccordionPanel>
              <VStack spacing="2.4rem" w="100%" alignItems="flex-start">
                <FormWrapper
                  label="Descreva seu gasto"
                  labelStyles={{ fontSize: '1.4rem' }}
                  error={errors.description}
                >
                  <TextInput
                    as="textarea"
                    size="textarea"
                    resize="none"
                    borderRadius="1.6rem"
                    p="1.6rem"
                    {...register('description')}
                  />
                </FormWrapper>

                <FormWrapper error={errors.files}>
                  <MultipleFileInput
                    fieldArray={fieldArray}
                    dropZoneOptions={{
                      accept: {
                        'image/png': [
                          '.jpg',
                          '.jpeg',
                          '.png',
                          '.gif',
                          '.bmp',
                          '.svg',
                          '.webp',
                          '.ico',
                        ],
                      },
                    }}
                  />
                </FormWrapper>

                <Collapse in={hasFiles} animateOpacity style={{ width: '100%' }}>
                  <ImageListing files={files} handleRemoveFile={handleRemoveFile} />
                </Collapse>
              </VStack>
            </AccordionPanel>
          </Fragment>
        )}
      </AccordionItem>
    </Accordion>
  );
};
