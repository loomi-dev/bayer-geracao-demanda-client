import { Box, Collapse, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { CalendarIcon, CircleIcon, DatePicker } from '@/components';
import { formatDate } from '@/utils';

import { PlanningActionFormSchemaType } from './PlanningActionForm.schema';

export const SelectDateSection = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { control, watch } = useFormContext<PlanningActionFormSchemaType>();

  const handleToggleShowDatePicker = () => {
    setShowDatePicker((lastState) => !lastState);
  };

  const hasDateSelected = Boolean(watch('date'));
  const dateSelected = formatDate(watch('date')) || 'Sem data planejada';

  return (
    <HStack
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="opacity.black.0.08"
      py="2rem"
      pr="1rem"
      align="flex-start"
      justify="space-between"
    >
      <HStack spacing="1.6rem">
        <CircleIcon boxSize="5.2rem" bg="greyscale.225">
          <CalendarIcon />
        </CircleIcon>

        <Box>
          <Text textStyle="caption3" lineHeight="2rem">
            Data planejada no cliente
          </Text>

          <HStack spacing="1.2rem">
            <Text textStyle="footnote" lineHeight="1.8rem">
              {dateSelected}
            </Text>

            <Box boxSize="0.5rem" borderRadius="full" bg="greyscale.450" />

            <Text
              textStyle="action3"
              color="text.brand"
              lineHeight="1.8rem"
              cursor="pointer"
              onClick={handleToggleShowDatePicker}
              userSelect={'none'}
            >
              {hasDateSelected ? 'Selecionar outra data' : 'Selecione uma data'}
            </Text>
          </HStack>
        </Box>
      </HStack>

      <Collapse in={showDatePicker} style={{ overflow: 'visible' }}>
        <DatePicker control={control} name="date" />
      </Collapse>
    </HStack>
  );
};
