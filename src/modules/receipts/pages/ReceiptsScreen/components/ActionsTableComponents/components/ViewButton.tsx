import { Button } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';

import SvgEye from '@/components/icons/Eye';

import { useDrawerExpenseReceipt } from '../../../stores';
import { ActionType } from '../../FinalizedTables';

type ViewButtonProps = {
  value: CellContext<ActionType, ActionType>;
};

export const ViewButton = ({ value }: ViewButtonProps) => {
  const onOpen = useDrawerExpenseReceipt((state) => state.onOpen);

  return (
    <Button onClick={onOpen} leftIcon={<SvgEye />} variant="primary-filter" h="3.4rem" px="1.3rem">
      Visualizar
    </Button>
  );
};
