import { HStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { useCreatePlanning } from '@/api';
import { Balance } from '@/components';

export const PlanningBalance = () => {
  const session = useSession();
  const userId = session.data?.user?.id as number;
  const farmerId = session.data?.user?.farmer?.id as number;
  const harvestId = session.data?.user?.safra?.id as number;
  const { mutate: createPlanning, isLoading: isLoadingCreatePlanning } = useCreatePlanning();

  const handleCreatePlanning = () => {
    createPlanning({
      farmerId,
      harvestId,
    });
  };

  return (
    <Balance.Container farmerId={userId}>
      <Balance.Label />
      <Balance.Value />

      <HStack w="full" align="center" justify="space-between">
        <Balance.ExpirationDate />

        <Balance.Button onClick={handleCreatePlanning} isLoading={isLoadingCreatePlanning}>
          Novo planejamento
        </Balance.Button>
      </HStack>
    </Balance.Container>
  );
};
