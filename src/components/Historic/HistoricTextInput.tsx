import { FormWrapper } from '../FormWrapper';
import { TextInput } from '../TextInput';

type HistoricTextInputProps = {
  label: string;
};

export const HistoricTextInput = ({ label }: HistoricTextInputProps) => (
  <FormWrapper
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
    <TextInput as="textarea" resize="none" border="none" borderRadius="initial" p="initial" />
  </FormWrapper>
);
