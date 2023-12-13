import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { formatPrice } from '@/utils';

const columnHelper = createColumnHelper<PlanningAction>();

dayjs.extend(relativeTime);

export const HistoricTableColumns = (isApproving?: boolean) => [
  columnHelper.accessor((data) => data.title, {
    id: 'titulo',
    header: () => {
      const label =
        isApproving !== undefined ? (isApproving ? 'Ações aprovadas' : 'Ações recusadas') : 'Ações';

      return <Text textStyle="footnote-bold">{label}</Text>;
    },
    cell: (info) => <Text textStyle="caption3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => [data.initialDate, data.finishDate], {
    id: 'execucao',
    header: () => <Text textStyle="footnote-bold">Data de execução</Text>,
    cell: (info) => {
      const [initialDate, finishDate] = info.getValue();
      const formattedInitialDate = initialDate ? dayjs(initialDate).format('MMMM') : '';
      const formattedFinishDate = finishDate ? dayjs(Date()).format('- MMMM') : '';
      return (
        <Text
          textStyle="caption3"
          fontWeight="bold"
        >{`${formattedInitialDate} ${formattedFinishDate}`}</Text>
      );
    },
  }),
  columnHelper.accessor((data) => data.amountInCents, {
    id: 'orcamento',
    header: () => <Text textStyle="footnote-bold">Orçamento</Text>,
    cell: (info) => (
      <Text textStyle="caption3" fontWeight="bold">
        R$ {formatPrice(info.getValue())}
      </Text>
    ),
  }),
];
