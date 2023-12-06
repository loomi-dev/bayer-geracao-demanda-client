import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { DatePickerHeader } from './DatePickerHeader';

type DatePickerProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
} & Omit<ReactDatePickerProps, 'onChange' | 'selected'>;

export const DatePicker = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: DatePickerProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        locale="pt-BR"
        wrapperClassName="react-datepicker-wrapper"
        renderCustomHeader={(props) => <DatePickerHeader {...props} />}
        {...restProps}
        onChange={(date) => field.onChange(date)}
        selected={field.value}
        inline
      />
    )}
  />
);
