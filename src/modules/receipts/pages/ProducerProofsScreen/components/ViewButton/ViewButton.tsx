import { Button } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';

import { Add2Icon } from '@/components';

import { ActionResponse, useActionStore, useDrawerExpenseReceipt } from '../../stores';

type ViewButtonProps = {
  value: CellContext<ActionResponse, ActionResponse>;
};

export const ViewButton = ({ value }: ViewButtonProps) => {
  const onOpen = useDrawerExpenseReceipt((state) => state.onOpen);

  const setSelectedAction = useActionStore((state) => state.setSelectedAction);

  const handleClick = () => {
    onOpen();

    setSelectedAction(value.getValue());
  };

  return (
    <Button
      onClick={handleClick}
      leftIcon={<Add2Icon />}
      variant="primary-filter"
      h="3.4rem"
      px="1.3rem"
    >
      Comprovar
    </Button>
  );
};
