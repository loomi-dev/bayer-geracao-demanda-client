import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  HStack,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { FormWrapper, SelectInput, TextInput, TextInputProps } from '@/components';
import { Mask } from '@/utils';

import { AccordionIcon } from './AccordionIcon';
import { PlanningActionFormSchemaType } from './PlanningActionForm.schema';
import { SelectDateSection } from './SelectDateSection';

type ActionTypeOption = {
  label: string;
  value: PlanningActionType;
};

export const PlanningActionFormAccordion = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PlanningActionFormSchemaType>();

  const inputStyles: TextInputProps = {
    borderRadius: '1.6rem',
    p: '1.6rem',
  };

  const actionTypeOptions: ActionTypeOption[] = [
    {
      label: 'Ação de relacionamento',
      value: 'relationship_task',
    },
    {
      label: 'Ação de campo',
      value: 'farm_task',
    },
    {
      label: 'Ação de enxoval',
      value: 'farm_kit',
    },
  ];

  return (
    <Accordion allowToggle defaultIndex={[0]}>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _hover={{}}>
                <Text textStyle="caption1" color="red.danger_50">
                  Planejamento da ação
                </Text>

                <AccordionIcon isExpanded={isExpanded} />
              </AccordionButton>
            </h2>

            <AccordionPanel display="flex" flexDirection="column" gap="2.4rem">
              <HStack w="full" spacing="2.4rem">
                <FormWrapper label="Título da ação" error={errors.title}>
                  <TextInput {...inputStyles} {...register('title')} />
                </FormWrapper>

                <FormWrapper label="Tipo da ação" error={errors.type}>
                  <SelectInput options={actionTypeOptions} {...register('type')} />
                </FormWrapper>
              </HStack>

              <FormWrapper error={errors.date}>
                <SelectDateSection />
              </FormWrapper>

              <FormWrapper label="Descrição" error={errors.description}>
                <TextInput
                  as="textarea"
                  size="textarea"
                  resize="none"
                  {...inputStyles}
                  {...register('description')}
                />
              </FormWrapper>

              <FormWrapper label="Quanto recurso deseja usar?" error={errors.value}>
                <TextInput
                  mask={(value) => Mask.formatBRL(value, 100)}
                  {...inputStyles}
                  {...register('value')}
                />
              </FormWrapper>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};
