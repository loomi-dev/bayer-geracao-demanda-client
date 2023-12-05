import { HStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React from 'react';

import { Balance } from '@/components';

export const CreatePlanningBalance = () => {
  const session = useSession();
  const userId = session.data?.user.id as number;

  const handleCreatePlanningAction = () => {
    console.log(userId);
  };

  return (
    <Balance.Container farmerId={userId}>
      <Balance.Label />
      <Balance.Value />

      <HStack w="full" align="center" justify="space-between">
        <Balance.ExpirationDate />

        <Balance.Button w="15.6rem" onClick={handleCreatePlanningAction}>
          Nova ação
        </Balance.Button>
      </HStack>
    </Balance.Container>
  );
};
