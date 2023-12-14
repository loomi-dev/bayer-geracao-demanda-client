import { FormWrapper, TextInput } from '@/components';
import { Mask } from '@/utils';

type HarvestInformationItemProps = {
  label: string;
  onChange: (quantity: string) => void;
};
export const HarvestInformationItem = ({ label, onChange }: HarvestInformationItemProps) => (
  <FormWrapper
    h="10rem"
    display="flex"
    flexDir="column"
    justifyContent="space-between"
    borderBottom="1px solid"
    borderColor="opacity.black.0.10"
    labelStyles={{
      textTransform: 'uppercase',
      fontSize: '1.4rem',
      fontWeight: 'bold',
      maxW: '22rem',
      lineHeight: '1.8rem',
    }}
    label={label}
  >
    <TextInput
      minW="full"
      fontSize="2.8rem"
      fontWeight="normal"
      py="1rem"
      px="0rem"
      border="none"
      bg="transparent"
      mask={(value) => Mask.formatValue(value)}
      onChange={(e) => onChange(e.target.value)}
    />
  </FormWrapper>
);
