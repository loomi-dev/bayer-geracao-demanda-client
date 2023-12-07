import { HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Balance } from '@/components';

export const WalletBalance = () => {
  const { push } = useRouter();
  const user = useSession();
  const userId = user.data?.user.id as number;

  const handleNavigateToPlanning = () => {
    push('/planejamento');
  };

  return (
    <Balance.Container farmerId={userId}>
      <Balance.Label />
      <Balance.Value />

      <HStack w="full" justify="space-between">
        <Balance.ExpirationDate />
        <Balance.Button w="24.5rem" onClick={handleNavigateToPlanning}>
          Adicionar Planejamento
        </Balance.Button>
      </HStack>
    </Balance.Container>
  );
};
