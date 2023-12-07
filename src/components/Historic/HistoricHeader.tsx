import { Badge, Box, HStack, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';

import { HistoricStatusValue, HistoricValue } from '@/types';
import { formatDate } from '@/utils';

type HistoricHeaderProps = {
  date: string;
  status: HistoricStatus;
};

export const HistoricHeader = ({ date, status }: HistoricHeaderProps) => {
  const isTodayDate = formatDate(date) === formatDate(dayjs().toDate());
  const dateFormatted = isTodayDate ? 'Hoje' : formatDate(date);
  const timeFormatted = dayjs(date).format('mm:ss');

  return (
    <HStack h="5.2rem" w="full" justify="space-between">
      <HStack spacing="0.9rem">
        <Text textStyle="action2" color="black">
          {dateFormatted}
        </Text>
        <Box boxSize="0.4rem" borderRadius="full" bg="greyscale.450" />
        <Text textStyle="action2" color="black">
          {timeFormatted}
        </Text>
      </HStack>

      <Badge variant={HistoricStatusValue[status]} borderRadius="1.2rem" px="1.6rem">
        {HistoricValue[status]}
      </Badge>
    </HStack>
  );
};
