import { Button, Center } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';

import { EyeIcon } from '@/components';
import { GetActionsResponse } from '@/modules/api';

import { useDrawerExpenseReceipt } from '../../stores';

type ViewButtonProps = {
  value: CellContext<GetActionsResponse['data'][0], GetActionsResponse['data'][0]>;
};

export const ViewButton = ({ value }: ViewButtonProps) => {
  const onOpen = useDrawerExpenseReceipt((state) => state.onOpen);

  return (
    <Center>
      <Button
        onClick={onOpen}
        leftIcon={<EyeIcon />}
        variant="primary-filter"
        h="3.4rem"
        px="1.3rem"
      >
        Visualizar
      </Button>
    </Center>
  );
};
