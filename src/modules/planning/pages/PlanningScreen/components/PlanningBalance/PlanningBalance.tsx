import { HStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React from 'react';

import { Balance } from '@/components';
import { useCreatePlanning } from '@/modules/planning/api';

export const PlanningBalance = () => {
  const session = useSession();
  const userId = session.data?.user.id as number;
  const { mutate: createPlanning, isLoading: isLoadingCreatePlanning } = useCreatePlanning();

  const handleCreatePlanning = () => {
    createPlanning({
      farmerId: userId,
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
