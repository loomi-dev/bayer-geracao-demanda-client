import { HStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React from 'react';

import { Balance } from '@/components';

import { CreatePlanningActionDrawerButton } from '../CreatePlanningActionDrawerButton';

export const CreatePlanningBalance = () => {
  const session = useSession();
  const userId = session.data?.user.id as number;

  return (
    <Balance.Container farmerId={userId}>
      <Balance.Label />
      <Balance.Value />

      <HStack w="full" align="center" justify="space-between">
        <Balance.ExpirationDate />

        <CreatePlanningActionDrawerButton />
      </HStack>
    </Balance.Container>
  );
};
