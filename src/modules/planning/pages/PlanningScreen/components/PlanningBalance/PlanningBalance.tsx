import { HStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Balance } from '@/components';

import { CreatePlanningButton } from '../CreatePlanningButton';

export const PlanningBalance = () => {
  const session = useSession();
  const userId = session.data?.user?.id as number;
  const farmerId = session.data?.user?.farmer?.id as number;

  return (
    <Balance.Container farmerId={userId}>
      <Balance.Label />
      <Balance.Value />

      <HStack w="full" align="center" justify="space-between">
        <Balance.ExpirationDate />

        <CreatePlanningButton />
      </HStack>
    </Balance.Container>
  );
};
