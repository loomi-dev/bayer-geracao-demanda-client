import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { formatPrice } from '@/utils';

const columnHelper = createColumnHelper<PlanningAction>();

dayjs.extend(relativeTime);

export const ValidatorTableColumns = (isApproving: boolean) => [
  columnHelper.accessor((data) => data.title, {
    id: 'tituloAcao',
    header: () => {
      const label = isApproving ? 'Ações aprovadas' : 'Ações recusadas';
      return <Text textStyle="footnote-bold">{label}</Text>;
    },
    cell: (info) => <Text textStyle="caption3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => [data.initialDate, data.finishDate], {
    id: 'dataExecucao',
    header: () => <Text textStyle="footnote-bold">Data de execução</Text>,
    cell: (info) => {
      const [initialDate, finishDate] = info.getValue();
      const formmatedInitialDate = initialDate ? dayjs(initialDate).format('MMMM') : '';
      const formmatedFinishDate = finishDate ? dayjs(Date()).format('MMMM') : '';
      return (
        <Text
          textStyle="caption3"
          fontWeight="bold"
        >{`${formmatedInitialDate} ${formmatedFinishDate}`}</Text>
      );
    },
  }),
  columnHelper.accessor((data) => data.amountInCents, {
    id: 'orçamento',
    header: () => <Text textStyle="footnote-bold">Orçamento</Text>,
    cell: (info) => (
      <Text textStyle="caption3" fontWeight="bold">
        R$ {formatPrice(info.getValue())}
      </Text>
    ),
  }),
];
