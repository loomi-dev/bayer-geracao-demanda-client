import { Select, SelectProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

type Option = {
  label: string;
  value: string | number;
};

type SelectInputProps = {
  options: Option[];
} & SelectProps;

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ options, ...restProps }, ref) => (
    <Select {...restProps} ref={ref}>
      {options?.map((option) => (
        <option value={option.value} key={option.label}>
          {option.label}
        </option>
      ))}
    </Select>
  ),
);

SelectInput.displayName = 'SelectInput';
