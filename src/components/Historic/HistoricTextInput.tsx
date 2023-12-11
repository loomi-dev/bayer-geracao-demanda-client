import { FieldError, Merge, UseFormRegisterReturn } from 'react-hook-form';

import { FormWrapper } from '../FormWrapper';
import { TextInput } from '../TextInput';

type HistoricTextInputProps = {
  label: string;
  error?: FieldError | Merge<FieldError, unknown>;
  register: UseFormRegisterReturn;
};

export const HistoricTextInput = ({ label, error, register }: HistoricTextInputProps) => (
  <FormWrapper
    error={error}
    label={label}
    labelStyles={{
      fontWeight: 'bold',
      color: 'greyscale.700',
    }}
    w="100%"
    bg="transparent"
    p="2.4rem"
    border="1px solid"
    borderRadius="1.6rem"
    borderColor="greyscale.375"
  >
    <TextInput
      as="textarea"
      resize="none"
      border="none"
      borderRadius="initial"
      p="initial"
      {...register}
    />
  </FormWrapper>
);
