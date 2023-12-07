import ptBR from 'date-fns/locale/pt-BR';
import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { DatePickerHeader } from './DatePickerHeader';

registerLocale('ptBR', ptBR);

setDefaultLocale('ptBR');

type DatePickerProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
} & Omit<ReactDatePickerProps, 'onChange' | 'selected'>;

export const DatePicker = <T extends FieldValues>({
  control,
  name,
  maxDate,
  ...restProps
}: DatePickerProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        locale="pt-BR"
        maxDate={maxDate}
        wrapperClassName="react-datepicker-wrapper"
        selectsRange
        renderCustomHeader={(props) => <DatePickerHeader {...props} />}
        {...restProps}
        onChange={(date) => field.onChange(date)}
        startDate={field.value?.[0]}
        endDate={field.value?.[1]}
        inline
      />
    )}
  />
);
