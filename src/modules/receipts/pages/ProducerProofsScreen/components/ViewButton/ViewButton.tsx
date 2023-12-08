import { Button } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';

import { Add2Icon } from '@/components';

import { useDrawerExpenseReceipt } from '../../stores';
import { ActionType } from '../StockTable/StockTable.columns';

type ViewButtonProps = {
  value: CellContext<ActionType, ActionType>;
};

export const ViewButton = ({ value }: ViewButtonProps) => {
  const onOpen = useDrawerExpenseReceipt((state) => state.onOpen);

  return (
    <Button
      onClick={onOpen}
      leftIcon={<Add2Icon />}
      variant="primary-filter"
      h="3.4rem"
      px="1.3rem"
    >
      Comprovar
    </Button>
  );
};
