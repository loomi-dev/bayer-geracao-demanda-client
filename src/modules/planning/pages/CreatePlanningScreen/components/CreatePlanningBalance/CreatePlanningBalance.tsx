import { HStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Balance } from '@/components';

import { CreatePlanningActionDrawerButton } from '../CreatePlanningActionDrawerButton';

type CreatePlanningBalanceProps = {
  planningStatus: HistoricStatus | 'default';
  isLoadingPlanningStatus?: boolean;
};

export const CreatePlanningBalance = ({
  planningStatus,
  isLoadingPlanningStatus,
}: CreatePlanningBalanceProps) => {
  const session = useSession();
  const farmerId = session.data?.user?.farmer?.id as number;
  const isPlanningAccepted = planningStatus === 'accepted';

  return (
    <Balance.Container farmerId={farmerId}>
      <Balance.Label />
      <Balance.Value />

      <HStack w="full" align="center" justify="space-between">
        <Balance.ExpirationDate />

        {!isPlanningAccepted && !isLoadingPlanningStatus && <CreatePlanningActionDrawerButton />}
      </HStack>
    </Balance.Container>
  );
};
