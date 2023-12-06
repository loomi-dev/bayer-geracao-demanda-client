import { Button, HStack, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

type DatePickerHeaderProps = ReactDatePickerCustomHeaderProps;

export const DatePickerHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: DatePickerHeaderProps) => {
  const monthWithYear = dayjs(date).format('MMMM YYYY');

  return (
    <HStack w="full" justify="space-between" p="0 1.2rem 1.2rem">
      <Button variant="unstyled" onClick={decreaseMonth} isDisabled={prevMonthButtonDisabled}>
        <ChevronLeftIcon fontSize={12} />
      </Button>

      <Text textStyle="action3" color="text.copytext">
        {monthWithYear}
      </Text>

      <Button variant="unstyled" onClick={increaseMonth} isDisabled={nextMonthButtonDisabled}>
        <ChevronRightIcon fontSize={12} />
      </Button>
    </HStack>
  );
};
